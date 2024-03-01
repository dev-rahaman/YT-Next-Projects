const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const app = express();
app.use(express.json());
app.use(cors());

// getting video info

app.post("/getVideoInfo", async (req, res) => {
  try {
    const videoURL = req.body.videoURL;
    const info = await ytdl.getInfo(videoURL);
    const videoInfo = {
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnail.thumbnails[0].url,
    };
    res.json(videoInfo);
  } catch (error) {
    console.error("Error getting video info", error.message);
  }
});

// download video
app.post("/downloadVideo", (req, res) => {
  try {
    const videoURL = req.body.videoURL;
    res.header("Content-Disposition", "attachment; filename='mp4'");
    ytdl(videoURL, { format: "mp4" }).pipe(res);
  } catch (error) {
    console.error("ERROR Downloading Video", error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
