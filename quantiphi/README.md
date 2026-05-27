<div align="center">
  <h1>🧠 PeopleIQ — GenAI HR Analytics Platform</h1>
  <p><i>An AI-powered Human Resources analytics dashboard that leverages the Google Gemini API to instantly analyze employee datasets.</i></p>
  
  <p>
    <img src="https://img.shields.io/badge/Vanilla-JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Google%20Gemini-API-4285F4?style=flat-square&logo=google&logoColor=white" alt="Gemini API" />
  </p>
</div>

<br/>

Instead of writing complex SQL queries or building pivot tables, simply upload your dataset and let **PeopleIQ** uncover hidden patterns, flight risks, and compensation inequities in seconds.

## ✨ Key Features

- **📊 Dynamic Data Ingestion:** Upload any HR dataset via CSV. The application automatically mathematically calculates high-level dashboard KPIs like *Total Employees*, *Average Performance Ratings*, and *Resignation Rates*.
- **⚡ Smart API Sampling:** Automatically extracts a mathematically representative random sample from massive datasets (e.g., 4,000+ rows) to provide lightning-fast, highly generalized AI analysis without hitting strict API rate limits.
- **💬 Interactive AI Chat Analyst:** Talk directly to your data. Ask natural language questions like *"Which departments have the highest attrition risk?"* and get instant data-driven answers.
- **🎯 25 Pre-Built Use Cases:** One-click AI analysis across 7 core HR disciplines:
  1. Performance & Skill Analytics
  2. Training & Mentorship
  3. Behavioral & Soft Skills Intelligence
  4. Project & Work Performance
  5. Attrition & Retention
  6. Compensation & Benefits
  7. Recruitment & Hiring Effectiveness

## 📂 Architecture & Project Structure

To maintain a clean and modular architecture, the front-end monolith has been separated into concerns:

```text
📦 quantifi
 ┣ 📜 index.html    # The main user interface structure and layout
 ┣ 📜 styles.css    # Visual design tokens, custom colors, animations, and CSS grids
 ┣ 📜 app.js        # Core JS logic: UI interactions, CSV parsing, data sampling, API integration
 ┗ 📜 prompts.js    # Master PROMPTS object (abstracted to keep system instructions modular)
```

## 🛠️ Setup & Local Installation

Because this is a pure front-end application using vanilla web technologies, no servers or node modules (`npm install`) are required!

1. Clone this repository to your local machine.
2. Obtain a free **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/).
3. Open `app.js` in your code editor.
4. Locate the `GEMINI_API_KEY` variable at the top of the file and paste your key inside the quotes.
5. Double click **`index.html`** to open the platform in your browser.
6. Click **"Upload CSV"** in the bottom left corner to load your employee data and begin analyzing!

## ⚠️ Important Security Note for GitHub

If you are forking or pushing this repository to a public GitHub account, **DO NOT commit your real Gemini API key**. 

Because this is a pure frontend application, any API key placed inside `app.js` will be publicly visible to anyone who views your code. Before pushing to GitHub, please ensure line 1 of `app.js` is empty:
```javascript
const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; // Do not push your real key!
```
