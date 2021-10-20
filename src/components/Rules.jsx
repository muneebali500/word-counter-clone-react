import React from "react";

export default function Rules() {
  const listItemStyle = "list-none p-2 border-l border-r text-sm";

  return (
    <section className="px-2 md:px-5 lg:px-20 lg:w-8/12 lg:pr-5 mb-6">
      <h2 className="bg-indigo-500 py-2 text-center text-white rounded-t">
        <strong>Rules for Word Counter</strong>{" "}
      </h2>
      <li className={listItemStyle}>
        <strong className="font-semibold">Spell Check:-</strong> This will check
        spell for all case words except for UpperCase words
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Uppercase:-</strong> This will convert
        every letter/character into UpperCase{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Lowercase:-</strong> This will convert
        every letter/character into LowerCase{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Sentence Case:-</strong> This will
        convert the first letter of every sentence into Upper Case. Note that
        sentence starts if there is a "space" before it and the previous
        sentence ands at "."
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Title Case:-</strong> This will
        convert every letter/character of every word into UpperCase{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Save:-</strong> This will store the
        content into local storage{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Clear:-</strong> This will delete the
        content from Local Storage and from the Text Area{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Clean Text:-</strong> This will remove
        any unwanted spaces between words{" "}
      </li>
      <li className={listItemStyle}>
        <strong className="font-semibold">Find and Replace:-</strong> This will
        find all the matching case words in a text area and replace them{" "}
      </li>
      <li className={`${listItemStyle} border-b`}>
        <strong className="font-semibold">Download:-</strong> This will download
        the content in a MS Word file{" "}
      </li>
    </section>
  );
}
