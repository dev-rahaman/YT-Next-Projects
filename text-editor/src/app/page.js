"use client";
import React, { useRef } from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaCode,
  FaAlignJustify,
  FaListUl,
  FaSubscript,
  FaSuperscript,
} from "react-icons/fa";

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";

export const MyButton = ({ funName, icon }) => (
  <button
    className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    onClick={funName}
  >
    {icon}
  </button>
);

export const handleFun = ({ first, second, last }) => {
  document.execCommand(first, second, last);
};

const RichTextEditor = () => {
  const editorRef = useRef(null);

  const handleBold = () => {
    document.execCommand("bold", false, "");
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-[#0E101F] text-[#A89FB9] p-4 rounded border shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          Dev Rahaman Text Editor
        </h2>
        <div
          className="relative w-full h-[350px] p-2 border shadow rounded resize-none"
          contentEditable={true}
          ref={editorRef}
        />
        <div className="mt-2">
          <MyButton funName={handleBold} icon={<FaBold />} />
          <MyButton
            funName={() =>
              handleFun({ first: "bold", second: false, last: "" })
            }
            icon={<FaBold />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "italic", second: false, last: "" })
            }
            icon={<FaItalic />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "strikeThrough", second: false, last: "" })
            }
            icon={<FaStrikethrough />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "subscript", second: false, last: "" })
            }
            icon={<FaSubscript />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "superscript", second: false, last: "" })
            }
            icon={<FaSuperscript />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "justifyLeft", second: false, last: "" })
            }
            icon={<FaAlignLeft />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "justifyCenter", second: false, last: "" })
            }
            icon={<FaAlignCenter />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "justifyRight", second: false, last: "" })
            }
            icon={<FaAlignRight />}
          />
          <MyButton
            funName={() =>
              handleFun({ first: "justifyFull", second: false, last: "" })
            }
            icon={<FaAlignJustify />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h1>${selectedText}</h1>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading1 />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h2>${selectedText}</h2>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading2 />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h3>${selectedText}</h3>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading3 />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h4>${selectedText}</h4>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading4 />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h5>${selectedText}</h5>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading5 />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const heading = `<h6>${selectedText}</h6>`;
                document.execCommand("insertHTML", false, heading);
              }
            }}
            icon={<LuHeading6 />}
          />

          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                const orderedList = `<ol style="list-style-type: decimal"><li>${selectedText
                  .split("\n")
                  .join("</li><li>")}</li></ol>`;
                document.execCommand("insertHTML", false, orderedList);
              }
            }}
            icon={<FaListUl />}
          />
          <MyButton
            funName={() => {
              const selectedText = window.getSelection().toString();
              if (selectedText) {
                handleFun({
                  first: "insertHTML",
                  second: false,
                  last: `<div style="background-color: #7f7f7f; padding: 10px; font-size: 12px;"><code>${selectedText}</code></div>`,
                });
              }
            }}
            icon={<FaCode />}
          />
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
