# AI Code Assistant– Code Execution Chatbot

## Project Overview
This project is a Code Execution Chatbot where users can:
- Chat with a bot
- Trigger a coding mode using chat input
- Select a programming language (Python)
- Write, validate, and execute code
- View execution output and errors in real time

The application is designed to support multiple users simultaneously, with each request handled independently by the backend.
## Tech Stack
Frontend: React.js  
Backend: Node.js, Express  
Editor: Monaco Editor  
Execution Engine: Python  
Communication: REST APIs  
## Features Implemented

### Chat Functionality
- Chat interface on the right panel
- Conversation history is preserved per session
- Static response supported for the trigger phrase "let’s code"

### Code Editor Trigger
- Typing "let’s code" in chat opens a language selection popup
- Currently supports Python

### Code Editor
- Python editor displayed on the left panel
- Built using Monaco Editor
- Includes line numbers and syntax highlighting

### Code Execution
- Run button to execute Python code
- Validate button to perform basic code validation
- Output panel displays program output and errors

### Security & Validation
- Detects possible infinite loops
- Execution timeout enforced
- Prevents server blocking

### Multi-User Support
- Backend is stateless
- Each user request is handled independently
- Multiple users can run code concurrently

## Project Structure

Samiksha-RD-Assignment/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
└── README.md

## Platform & OS Requirements
- OS: Windows / macOS / Linux
- Node.js: v18+
- npm: v8+
- Python: v3.9+
- Browser: Chrome / Edge / Firefox

## Setup Instructions

### Backend
cd backend  
npm install  
npm start  

Server runs on http://localhost:5000

### Frontend
cd frontend  
npm install  
npm start  

App runs on http://localhost:3000

## System Architecture
1. User sends a chat message through the frontend.
2. Backend server processes the request using Node.js.
3. If the user triggers "let’s code", the system loads the Monaco code editor.
4. Code execution requests are sent to the backend API.
5. Python environment executes the code securely with timeout protection.
6. Execution results are returned to the frontend output panel.

## References
- React.js
- Node.js
- Express
- Monaco Editor
- Python
- ChatGPT (OpenAI)

## Author
Samiksha Sunil Abdar
