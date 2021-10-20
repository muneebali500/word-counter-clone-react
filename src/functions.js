import replaceString from "replace-string";

export function sentenceCase(textArea) {
  const newTextArea = textArea
    .split(`. `)
    .map(
      (sentence) =>
        sentence.trim().charAt(0).toUpperCase() +
        sentence.slice(1).toLowerCase()
    )
    .join(`. `);

  return newTextArea;

  // Alternative approach
  // const newTextArea = textArea
  //   .toLowerCase()
  //   .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (char) => char.toUpperCase());
  // return newTextArea;
}

export function titleCase(textArea) {
  const newTextArea = textArea
    .toLowerCase()
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(` `)
    .split(`\n`)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(`\n`);

  return newTextArea;
}

export function cleanText(textArea) {
  const newTextArea = textArea
    .split(` `)
    .filter((word) => word !== ``)
    .join(` `);

  return newTextArea;
}

export function findAndReplace(textArea, findInputRef, replaceInputRef) {
  const newTextArea = replaceString(
    textArea,
    findInputRef.current.value,
    replaceInputRef.current.value
  );

  return newTextArea;
}

export function readingTime(textArea) {
  if (textArea.length > 0) {
    const wordsPerSecond = 250 / 60;
    const numberOfWords = textArea
      .split(` `)
      .filter((word) => word.length > 0).length;
    return Math.ceil(numberOfWords / wordsPerSecond);
  } else {
    return 0;
  }
}

export function speakingTime(textArea) {
  if (textArea.length > 0) {
    const wordsPerSecond = 120 / 60;
    const numberOfWords = textArea
      .split(` `)
      .filter((word) => word.length > 0).length;
    return Math.ceil(numberOfWords / wordsPerSecond);
  } else {
    return 0;
  }
}

export function totalWords(textArea) {
  const words = (
    textArea.includes(`\n`) ? textArea.replace(/\n/g, `\n `) : textArea
  )
    .split(` `)
    .filter((word) => word !== ``).length;

  return words;
}

export function totalSentences(isSentenceCaseFunction, textArea) {
  return isSentenceCaseFunction
    ? textArea.split(`. `).length
    : textArea.length > 0
    ? 1 +
      textArea
        .split(`. `)
        .filter(
          (sentence) =>
            sentence.length > 0 && sentence[0] === sentence[0].toUpperCase()
        ).length
    : 0;
}

/*-------------------------------------------- UNDO REDO Functionality ------------------------------------------------- */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
