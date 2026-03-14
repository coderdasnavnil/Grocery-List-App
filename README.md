# 🛒 Grocery Bud (React Project)

A simple **Grocery List Web Application** built using **React Hooks** that allows users to add, edit, delete, and persist grocery items using **LocalStorage**.

The project demonstrates practical usage of React concepts like **state management, refs, effects, conditional rendering, and component composition**.

---

# 🚀 Features

* Add grocery items
* Edit existing items
* Delete individual items
* Clear the entire list
* Alert notifications for user actions
* Automatic input focus
* Persistent data using **LocalStorage**
* Responsive and clean UI

---

# 🧠 React Concepts Used

This project demonstrates the use of the following React hooks:

* **useState** → Managing application state
* **useEffect** → Handling side effects (LocalStorage + alerts)
* **useRef** → Input focus and storing previous values
* **Conditional Rendering**
* **Component-based architecture**

---

# 🏗️ Project Structure

```
src
│
├── App.js
├── index.css
│
├── components
│   ├── List.js
│   ├── Alert.js
│
├── styles
│   ├── List.module.css
│   ├── Alert.module.css
```

---

# 📦 Installation

Clone the repository

```
git clone https://github.com/YOUR_USERNAME/grocery-bud-react.git
```

Navigate to the project folder

```
cd grocery-bud-react
```

Install dependencies

```
npm install
```

Run the project

```
npm start
```

The app will run at

```
http://localhost:3000
```

---

# 💾 LocalStorage Implementation

The grocery items are stored using the browser's **LocalStorage API** so the data remains even after refreshing the page.

```
useEffect(() => {
  localStorage.setItem("grocery-items", JSON.stringify(list));
}, [list]);
```

When the application loads, stored data is retrieved and used to initialize the state.

---

# 🎯 Future Improvements

Possible enhancements:

* Drag and drop reordering
* Category tags
* Item quantity support
* Dark mode
* Search/filter functionality
* Backend database integration

---

# 📸 Preview

Example functionality:

Add → Edit → Delete → Persist data after refresh

---

# 🛠️ Built With

* React
* JavaScript (ES6+)
* CSS Modules
* React Icons
* LocalStorage API

---

# 👨‍💻 Author

Navnil Das

Frontend Developer | React Learner

---

# ⭐ If you like this project

Consider giving the repository a **star** ⭐
