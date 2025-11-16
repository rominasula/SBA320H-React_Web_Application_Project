# Rick & Morty Explorer

A React web application that allows users to explore characters from the **Rick & Morty** universe using the public Rick & Morty API.  
The app includes character search, filtering, and a Favorites system powered by React Context & useReducer.

---

## 🚀 Live Site

Check it out here: [Rick & Morty Explorer](https://react-web-application-project.netlify.app/)

---

## 📌 Project Overview

Rick & Morty Explorer is an interactive web app where users can:

- Browse characters fetched from the public API  
- View character images, species, gender, and status  
- Add and remove characters from their favorites  
- Navigate between pages using React Router  
- See their favorites persist across page refresh (via Context or LocalStorage)

This project fulfills the requirements for the **SBA 320H - React Web Application Project**.

---

## 🛠 Technologies Used

### Frontend
- React  
- HTML  
- CSS  
- JavaScript  
- React Router  
- React Context + useReducer (for global favorites state)

### API
- Rick & Morty API  
  Endpoint used: `https://rickandmortyapi.com/api/character`

### Hosting
- **Netlify** (for deployment)  
- **GitHub** (version control)

---

## ⚙️ Features

- Fetch characters using `fetch()` (AJAX request)  
- Display API results in clean UI cards  
- Sidebar navigation  
- Add / remove favorites  
- Favorites stored globally via Context  
- Responsive layout  
- Error handling for failed API calls  

---

## 📁 File Structure 

rick-morty-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── CharacterList.js
│   │   ├── CharacterCard.js
│   │   ├── CharacterDetail.js
│   │   └── Favorites.js
│   ├── context/
│   │   └── FavoritesContext.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md

## How to Run the Project Locally

1. Clone this repo  
git clone https://github.com/rominasula/SBA320H-React_Web_Application_Project


2. Install dependencies  
npm install


3. Start the development server  
npm start


4. Open in browser  
http://localhost:3000

---

## 🚧 Unsolved Problems / Future Enhancements

- Add filters for species, status, or gender  
- Add pagination support for API results  
- Improve UI design for mobile screens  
- Add dark mode toggle  
- Persist favorites in localStorage  

## Author

Created as part of the SBA320H-React_Web_Application_Project

Created by **Romina Dervishi**  
GitHub: [rominasula](https://github.com/rominasula)


