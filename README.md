# My Portfolio

Welcome to the source code for my personal portfolio project. This is a Node.js-based web application that showcases my projects and skills, featuring integrations with modern generative AI capabilities.

## 🚀 Features
- **Frontend:** Clean and responsive user interface (`index.html`).
- **Backend:** Robust server-side architecture built with [Express.js](https://expressjs.com/).
- **AI Integration:** Implements artificial intelligence capabilities using the official Google Gen AI SDK (`@google/genai`) and OpenAI SDK (`openai`).
- **Secure Configuration:** Environment variables are securely managed to protect API keys via `dotenv`.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript, Image Assets (`myimage.png`)
- **Backend:** Node.js, Express.js
- **AI & APIs:** 
  - Google Gemini API (`@google/genai`)
  - OpenAI API (`openai`)
  - Google Auth Library (`google-auth-library`)
- **Utilities:** `node-fetch`, `body-parser`, `cookie`, `mime-types`

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd "My porfolio"
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   PORT=3000
   GEMINI_API_KEY=your_google_genai_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the application:**
   ```bash
   npm start
   # or node index.js / server.js
   ```

5. **View in Browser:**
   Open `http://localhost:3000` in your web browser.

## 📂 Project Structure
- `index.html` - The main entry point for the frontend portfolio.
- `myimage.png` - Portfolio visual assets.
- `node_modules/` - Backend dependencies including Express, Google GenAI, and OpenAI.
- `.env` - Environment variable configuration.
- `.gitignore` - Ignored files for version control.

## 📄 License
This project is open-source and available under the MIT License.
