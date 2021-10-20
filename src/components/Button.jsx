import React from "react";

export default function Button(props) {
  const { btnName, handleClick, spellCheckStatus, findAndReplaceStatus } =
    props;

  // title attributes
  const titleSpellCheck = "This will not check spelling for uppercase";
  const titleClean = "Removes unwanted spaces";

  return (
    <button
      className="hover:bg-blue-500 hover:text-white mb-1 text-black text-sm font-normal py-1 px-2 rounded border-2"
      onClick={() => handleClick(btnName)}
      title={
        btnName === "SpellCheck"
          ? titleSpellCheck
          : btnName === `CleanText`
          ? titleClean
          : null
      }
    >
      {btnName}{" "}
      {/* setting the status of spellCheck btn and Find and Repalce btn as 'ON' or 'OFF' */}
      {btnName === "SpellCheck" ? (
        <span className="text-xs bg-red-700 px-1 text-white">
          {spellCheckStatus}
        </span>
      ) : btnName === "Find and Replace" ? (
        <span className="text-xs bg-red-700 px-1 text-white">
          {findAndReplaceStatus}
        </span>
      ) : null}
    </button>
  );
}
