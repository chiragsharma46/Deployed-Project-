# 💻 Chirag Sharma — Developer Portfolio

A modern personal portfolio website showcasing my **software development skills, projects, technical expertise, and AI-integrated applications**.

The portfolio is built with a lightweight frontend and a **Node.js server**, with environment variables used for secure configuration and AI/API integrations.

---

## 🚀 Overview

This portfolio serves as a central platform to present my:

* 💻 Software Development Projects
* 🤖 AI/ML & AI-integrated Applications
* 🧠 Technical Skills
* 📚 Academic & Internship Experience
* 🔗 GitHub Projects
* 📬 Contact & Professional Information

The project also includes a Node.js backend for handling server-side functionality and API integrations securely.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### AI / API Integration

* AI API integration
* Environment-based API configuration
* Server-side API request handling

### Tools & Development

* Visual Studio Code
* Git
* GitHub
* npm

---

## 📂 Project Structure

```text
Portfolio/
│
├── .env
├── .gitignore
├── index.html
├── myimage.png
├── server.mjs
├── package.json
├── package-lock.json
└── node_modules/
    ├── @google/
    ├── @protobufjs/
    ├── @types/
    ├── accepts/
    ├── agent-base/
    ├── base64-js/
    ├── bignumber.js/
    ├── body-parser/
    ├── cookie/
    ├── dotenv/
    ├── express/
    ├── google-auth-library/
    ├── mime-db/
    ├── node-fetch/
    ├── openai/
    └── ...
```

> **Note:** `node_modules/` is generated automatically by npm and should not be uploaded to GitHub.

---

## ✨ Key Features

* Responsive personal portfolio interface
* Professional project showcase
* Skills and technology presentation
* GitHub project integration
* AI/API integration
* Node.js and Express backend
* Environment variable configuration using `.env`
* Secure server-side API handling
* Clean and minimal developer-focused design
* Mobile-friendly layout

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory and add the required environment variables.

Example:

```env
API_KEY=your_api_key_here
```

### Important

Never commit your `.env` file to GitHub.

Your `.gitignore` should contain:

```gitignore
.env
node_modules/
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-portfolio.git
```

### 2. Navigate into the project

```bash
cd your-portfolio
```

### 3. Install dependencies

```bash
npm install
```

This will automatically create the `node_modules` folder.

### 4. Configure environment variables

Create the `.env` file and add your required API keys and configuration values.

---

## ▶️ Run the Project

Start the Node.js server using:

```bash
node --env-file=.env server.mjs
```

After starting the server, open the localhost URL shown in the terminal in your browser.

---

## 🔐 Security

This project uses environment variables to prevent sensitive API credentials from being exposed directly in the source code.

Sensitive files such as:

```text
.env
```

must remain local and should never be committed to the repository.

---

## 📈 Future Improvements

Planned improvements may include:

* Additional AI-powered portfolio features
* More interactive project demonstrations
* Improved animations and UI interactions
* Backend API enhancements
* Performance optimization
* Additional developer-focused tools

---


## ⭐ Repository

If you find this portfolio useful or interesting, consider giving the repository a ⭐.

---

## 📄 License

This project is created for personal portfolio and educational purposes.
