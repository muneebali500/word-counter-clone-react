# Word Counter Clone - Fully Responsive

## Introduction

This is a clone project of [word counter website](https://wordcounter.net/). My purpose in creating this project is to showcase and improve my React skills using React hooks. The project demonstrates information about the content user writes in a word editor. The user can change the case of the words to Sentence Case, Title Case, Lower Case, and Upper Case. The User can find and replace words, download content in MS Word file, etc. Also, the project provides information about a number of words, sentences, paragraphs, etc. in text content.

[Link to Live Project](https://wordcounterclone.netlify.app/)

![word counter home page](/public/word-counter.png)

## User Experience (UX)

The user has been introduced with different button events to transform the text as per his/her likings.

### User Stories

As a user:

- I want to understand what the website is about and its purpose.
- I want to change the case of the text into Uppercase, Lowercase, Title Case, and Sentence Case.
- I want to remove any unwanted spaces in my text.
- I want to save the text content into some database.
- I want to delete the text from the text area with one click.
- I want to find and replace all the words from my text content
- I want to perform spell check of my text content
- I want to download the text content
- I want to know the number of words, characters, sentences, paragraphs my text content contains. Additionally, I want to know the reading and speaking time of the text content.

As a returning user:

- I want to be able to continue where I left the last visit.
- I want to be able to reset everything from the last visit in order to write new text content.

## User Interface (UI)

### Features

- There are two pages to navigate around. One is Home page and another is Contact Page
- Home page has a Header, Editor Section, Rules section, and a Footer
- Header has a Logo and two navigating buttons: Home and Contact
- Editor section has two sides. The editor is on the left side and the Word count summary on the right side
- Editor side is divided into three parts.
  - Top part updates the words and characters written by the user in the editor area.
  - The middle part has buttons events. Every button performs specific functions when clicked. The names of buttons are very descriptive.
  - The third is the main editor where the user writes content
- The right side of the editor provides info about the text content i.e; words, characters, sentences, paragraphs, reading time, and speaking time
- After the editor section, there is a rules section that defines what function every button performs.
- After the rules section, there is a footer and that ends the Home page.
- The second page is Contact Us page. It has the same header as the Home page has and the next and only section it has, has a Contact Form and an embedded Google Map.
- In the Contact Form user needs to provide info about his/her name, email, and message.
- Google Map is on the right side, which displays the address and direction of the office

## Technologies Used

### Languages, Frameworks, Libraries & Programs

- [JSX](https://reactjs.org/docs/introducing-jsx.html) - build up layout and content of the application.
- [Tailwindcss](https://tailwindcss.com/) - for adding custom styling.
- [React.js](https://reactjs.org/) - to add functionalities throughout the application.
  - Hooks used:
    - useState hook
    - useEffect hook
    - useRef hook
- [Visual Studio Code](https://code.visualstudio.com/) - the code editor being used to build the project.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - used heavily for debugging during development process.
- [Git](https://git-scm.com/) - the Git feature in VS Code was used for version control and push to github.
- [Github](https://github.com/) - Github is used to store project's code remotely.

## Deployment

#### Development

The project was developed using VS Code editor and its integrated version control feature to commit gits, which are then pushed to GitHub in order to store the codes remotely.

#### Netlify

The project was deployed to [Netlify](https://www.netlify.com/)

#### Forking the repository

1. Log in to GitHub and navigate to this project's repository: [word-counter-clone](muneebali500/word-counter-clone-react)
2. Just above the navigation menu of the repository (above the Settings button) locate the Fork button
3. The original copy of the repository is now copied on your GitHub account which allows you to view and/or work on the codes without affecting the original work

### Credits

The [wordcounter](https://wordcounter.net/) website for the idea and basic understanding of the rules of different button events.
