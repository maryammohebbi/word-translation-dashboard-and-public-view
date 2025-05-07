📘 Word Translation Dashboard

This project is a two-part web application for managing and viewing translations of keywords in multiple languages.
🔧 Features
🧠 Management Dashboard

    View a list of pre-set keywords and their translations.

    Add new keywords (with one language translation; others remain empty).

    Edit translations directly in-line.

    Reorder keywords using drag-and-drop.

🌍 Public View

    Displays all keywords and translations.

    Language switcher to dynamically change translation language.

    Empty translations are visibly marked.

💾 Data Persistence

    All data (keywords and translations) is stored in localStorage as JSON.

    Data is initialized from defaultWords and updated with every change.

    Fully client-side and persistent between sessions.

⚙️ Tech Stack

    React with Context API for state management

    Tailwind CSS for styling

    dnd-kit for smooth drag-and-drop functionality

    localStorage for client-side persistence

    ES6+ JavaScript, HTML5, CSS3

📐 Data Structure & Design Decisions

The core data structure is an array of word objects stored in localStorage:

{
id: 'unique-id',
keyword: 'example',
translations: {
fa: 'فارسی',
es: 'español',
fr: '',
de: '',
kr: ''
}
}

This allows:

    Fast lookup and updates for translations.

    Easy mapping and reordering in UI.

    Clean separation between keywords and language translations.

React Context is used to share and manage global state across the app, ensuring updates are reflected in both views.
🚀 Getting Started

    Clone or unzip the project folder.

    Run:

    npm install
    npm run dev

    Visit:

        /dashboard – to manage translations.

        / – to view public-facing translations.

🧪 Suggested Improvements

    Add search/filter functionality for keywords.

    Add animations for drag/drop transitions.

    Improve accessibility and keyboard navigation.

    Use localStorage sync across tabs.

🌐 Languages Supported

    Persian (فارسی)

    Spanish (Español)

    French (Française)

    German (Deutsch)

    Korean (한국어)
