import { useState, useRef, useEffect } from "react";

// import custom components
import Button from "./Button";
import WordSummaryItem from "./WordSummaryItem";

// import functions
import {
  sentenceCase,
  titleCase,
  cleanText,
  findAndReplace,
  readingTime,
  speakingTime,
  totalWords,
  totalSentences,
} from "../functions";

// Main Component
export default function WordEditor() {
  // Variables
  const [spellCheckAttribute, setSpellCheckAttribute] = useState(false);
  const [textArea, setTextArea] = useState(``);
  const [findAndReplaceInputElements, setFindAndReplceInputElements] =
    useState(false);
  const [isSentenceCaseFunction, setIsSentenceCaseFunction] = useState(false);
  const [spellCheckStatus, setSpellCheckStatus] = useState("OFF");
  const [findAndReplaceStatus, setFindAndReplaceStatus] = useState("OFF");
  const findInputRef = useRef();
  const replaceInputRef = useRef();

  // Useeffect hook will be called once only to get data from local storage
  useEffect(() => {
    const textFromLocalDb = JSON.parse(localStorage.getItem(`textArea`)) || "";
    setTextArea(textFromLocalDb);
  }, []);

  // Code for generating word(docx) file to download
  let msWordFileLink1, msWordFile1Link2;
  const data = new Blob([textArea], { type: `text/plain` });
  msWordFileLink1 = window.URL.createObjectURL(data);
  msWordFile1Link2 = window.webkitURL.createObjectURL(data);

  // function will be called depending upon the button clicked using switch statement
  function transformText(btnName) {
    switch (btnName) {
      case `SpellCheck`:
        setSpellCheckAttribute(!spellCheckAttribute);
        setSpellCheckStatus(spellCheckStatus === "OFF" ? "ON" : "OFF");
        break;
      case `UPPERCASE`:
        setTextArea(textArea.toUpperCase());
        break;
      case `lowercase`:
        setTextArea(textArea.toLowerCase());
        break;
      case `Sentence. Case`:
        setIsSentenceCaseFunction(true);
        setTextArea(sentenceCase(textArea));
        break;
      case `Title Case`:
        setTextArea(titleCase(textArea));
        break;
      case `Save`:
        localStorage.setItem(`textArea`, JSON.stringify(textArea));
        alert(`Your data is saved`);
        break;
      case `Clear`:
        setTextArea(``);
        localStorage.removeItem(`textArea`);
        setIsSentenceCaseFunction(false);
        break;
      case `CleanText`:
        setTextArea(cleanText(textArea));
        break;
      case `Find and Replace`:
        setFindAndReplceInputElements(!findAndReplaceInputElements);
        setFindAndReplaceStatus(findAndReplaceStatus === "OFF" ? "ON" : "OFF");
        break;
      default:
        console.log(`this is default case`);
    }
  }

  /* -----------------------------------------------------DOM STARTS -------------------------------------------- */
  /* ------------------------------------------------------------------------------------------------------------ */
  return (
    <main className="px-2 py-6 md:px-5 lg:px-20 md:flex md:gap-2">
      <section className="border rounded lg:flex-1">
        <h1 className="py-4 pl-3 text-4xl border-b-2 bg-indigo-500 text-white">
          {totalWords(textArea)} words {textArea.length} characters
        </h1>

        {/*------------------------------------- Buttons section starts here ----------------------------------*/}
        <section className="p-1 border">
          <Button
            btnName="SpellCheck"
            handleClick={transformText}
            spellCheckStatus={spellCheckStatus}
          />
          <Button btnName="UPPERCASE" handleClick={transformText} />
          <Button btnName="lowercase" handleClick={transformText} />
          <Button btnName="Sentence. Case" handleClick={transformText} />
          <Button btnName="Title Case" handleClick={transformText} />
          <Button btnName="Save" handleClick={transformText} />
          <Button btnName="Clear" handleClick={transformText} />
          <Button btnName="CleanText" handleClick={transformText} />
          <Button
            btnName="Find and Replace"
            handleClick={transformText}
            findAndReplaceStatus={findAndReplaceStatus}
          />
          <button>
            {" "}
            <a
              role="button"
              className="hover:bg-blue-500 hover:text-white mb-1 text-black text-sm font-normal py-1 px-2 rounded border-2"
              href={
                window.webkitURL != null ? msWordFileLink1 : msWordFile1Link2
              }
              download="data.docx"
            >
              Dowload
            </a>
          </button>

          {/* /////////////// Find and Replace Area starts */}
          {findAndReplaceInputElements && (
            <div>
              <input
                ref={findInputRef}
                type="text"
                placeholder="Enter Find Value"
                className="border-2 px-1 focus:border-blue-500 focus:outline-none rounded-sm"
              />
              <input
                ref={replaceInputRef}
                type="text"
                placeholder="Enter Replace Value"
                className="border-2 ml-1 px-1 focus:border-blue-500 focus:outline-none rounded-sm"
              />
              <button
                className="ml-1 hover:bg-blue-500 hover:text-white border-2 px-1 focus:border-blue-500 focus:outline-none rounded-sm"
                onClick={() =>
                  setTextArea(
                    findAndReplace(textArea, findInputRef, replaceInputRef)
                  )
                }
              >
                Replace All
              </button>
            </div>
          )}
        </section>

        {/*---------------------------------------------- Text Area starts ----------------------------------*/}
        <section>
          <textarea
            onInput={(e) => setTextArea(e.target.value)}
            value={textArea}
            className="resize-none w-full border divide-white-400 shadow-md rounded p-3 focus:border-blue-500 focus:outline-none"
            cols="40"
            rows="13"
            spellCheck={spellCheckAttribute ? true : false}
          ></textarea>
        </section>
      </section>

      {/*------------------------------------ LEFT SIDE - WORD EDITOR ENDS HERE ---------------------------------*/}
      {/*----------------------------------------------------------------------------------------------------------*/}

      <section className="border rounded lg:w-96 md:w-2/3">
        <h3 className="p-5 text-xl text-center bg-indigo-500 text-white font-bold">
          Word Count Summary
        </h3>
        <WordSummaryItem text="Words" value={totalWords(textArea)} />
        <WordSummaryItem text="Characters" value={textArea.length} />
        <WordSummaryItem
          text="Sentences"
          value={totalSentences(isSentenceCaseFunction, textArea)}
        />
        <WordSummaryItem
          text="Paragraphs"
          value={
            textArea.split(`\n`).filter((para) => para.length > 0).length || 0
          }
        />
        <WordSummaryItem
          text="Reading Time"
          value={`${readingTime(textArea)} sec`}
        />
        <WordSummaryItem
          text="Speaking Time"
          value={`${speakingTime(textArea)} sec`}
        />
        <li className="text-center pt-8 md:block hidden">Every Word Counts</li>
      </section>
      {/*------------------------------------ RIGHT SIDE - WORD SUMMARY ENDS HERE ---------------------------------*/}
      {/*----------------------------------------------------------------------------------------------------------*/}
    </main>
  );
}
