# iTask – React Todo App (Vite + Tailwind)

A clean and simple Todo App built using React, Vite, TailwindCSS, and LocalStorage. You can add, edit, delete, and mark todos as completed while keeping data saved in the browser.

# Features
- Add new todos
- Edit existing todos
- Delete todos
- Mark tasks as completed / not completed
- Toggle to show/hide completed tasks
- LocalStorage support
- Fast performance with Vite
- Clean UI using TailwindCSS
- Unique IDs using UUID

# Tech Stack
- React 19
- Vite
- TailwindCSS
- UUID
- LocalStorage API

# Folder Structure
project-folder/
  package.json
  vite.config.js
  index.html
  tailwind.config.js

  src/
    App.jsx
    main.jsx
    components/
      Navbar.jsx

# Run Locally
1. Clone the repo  
   git clone https://github.com/your-username/todo-app.git  
   cd todo-app

2. Install dependencies  
   npm install

3. Start development server  
   npm run dev

4. Build for production  
   npm run build

5. Preview build  
   npm run preview

# How It Works
- Todos are stored in localStorage
- useState manages todos and input fields
- useEffect loads and saves todos
- TailwindCSS provides the UI styling

# Live Demo
(Replace with your Vercel link)  
https://your-vercel-url.vercel.app

# Contributing
Feel free to fork this project and contribute.

# Support
If you like this project, please star the repository on GitHub.

# License
This project is open-source and available under the MIT License.
