My Portfolio README

Welcome to the documentation for my personal portfolio project. This document outlines the structure,
features, and setup instructions for the Node.js-based web application.

Features
Frontend: A clean and responsive user interface starting from index.html.
Backend: A robust server-side architecture built with Express.js.
AI Integration: Implements artificial intelligence capabilities using the official Google Gen AI SDK
(@google/genai) and OpenAI SDK (openai).
Secure Configuration: Environment variables are securely managed to protect API keys via
dotenv.

Tech Stack
Frontend: HTML5, CSS3, JavaScript, Image Assets (myimage.png)
Backend: Node.js, Express.js
AI & APIs:
Google Gemini API (@google/genai)
OpenAI API (openai)
Google Auth Library (google-auth-library)
Utilities: node-fetch, body-parser, cookie, mime-types

Installation & Setup
1. Clone the repository
git clone <your-repo-url>
cd "My porfolio"
•
•
•

•

•
•
•
◦
◦
◦

•

2. Install dependencies
Ensure you have Node.js installed, then run:
npm install

3. Environment Variables
Create a .env file in the root directory and add your API keys:
PORT=3000
GEMINI_API_KEY=your_google_genai_api_key
OPENAI_API_KEY=your_openai_api_key

4. Run the application
npm start
# or node index.js / server.js
5. View in Browser
Open http://localhost:3000 in your web browser.

Project Structure
index.html - The main entry point for the frontend portfolio.
myimage.png - Portfolio visual assets.
node_modules/ - Backend dependencies including Express, Google GenAI, and OpenAI.
.env - Environment variable configuration.
.gitignore - Ignored files for version control.

License
This project is open-source and available under the MIT License.
