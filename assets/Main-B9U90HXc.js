import{j as e}from"./index-DyXIkYFQ.js";import{N as a,m as n}from"./Navbar-B5Oum58L.js";import"./iconBase-7cUrGybD.js";import"./logo-DGBvTCOr.js";import"./index-ChDJS6wB.js";import"./clsx-B-dksMZM.js";const t={title:"Web Development Basics with React",shortDescription:"Learn the basics of React and how to build interactive user interfaces easily.",longDescription:`React is one of the most popular libraries for front-end development. It is an open-source JavaScript library used to create interactive user interfaces. Since its launch by Facebook, React has become the top choice for many developers due to its simplicity, high performance, and reusable components.

  1. Why React?
  React offers a different approach compared to traditional libraries by focusing on building components. These components are independent units that can be easily reused, making the development of large applications more organized and easier to maintain.

  2. Installing React and Starting a Project
  To get started with React, you can use the Create React App tool to quickly set up a ready-to-use environment:
  \`\`\`bash
  npx create-react-app my-app
  cd my-app
  npm start
  \`\`\`
  After running the command, the browser will automatically open, displaying the default React page.

  ## 3. Understanding JSX
  JSX is a way to write React elements using an HTML-like syntax within JavaScript:
  \`\`\`jsx
  const element = <h1>Welcome to React!</h1>;
  \`\`\`
  React translates JSX into regular JavaScript code that browsers can understand.

  4. Managing State with useState
  React provides a Hook called useState to manage component state:
  \`\`\`jsx
  import React, { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Current value: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }
  \`\`\`
  Here, the state (count) updates when the button is clicked.

  5. Fetching Data with useEffect
  In real-world applications, you will need to fetch data from an external API. You can use another Hook called useEffect for this purpose:
  \`\`\`jsx
  import React, { useState, useEffect } from "react";

  function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  \`\`\`
  The API is called, and the data is fetched when the component loads.

  6. Creating Reusable Components
  With React, you can break down the UI into small, reusable components:
  \`\`\`jsx
  function Button({ text, onClick }) {
    return <button onClick={onClick}>{text}</button>;
  }

  function App() {
    return <Button text="Click here" onClick={() => alert("Hello!")} />;
  }
  \`\`\`
  This makes code management easier and speeds up development.

  ## 7. Conclusion
  React is a powerful tool for building modern web applications. It provides features like reusable components, flexible state management, and easy user interaction. If you want to master React, start by practicing real-world projects and exploring additional libraries such as React Router and Redux.`,author:"Mohammed Ahmed",rating:4.9,reviews:1400},p=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{}),e.jsxs("div",{className:"w-full max-w-6xl mx-auto mt-20",children:[e.jsx("h1",{className:"text-center text-[25px] leading-[35px] lg:text-2xl text-[#2c67fc] md:!leading-[60px] font-[700] tracking-tight",children:t.author}),e.jsx("h1",{className:"text-center text-[25px] leading-[35px] sm:text-3xl lg:text-4xl text-black md:!leading-[60px] font-[700] tracking-tight",children:t.title}),e.jsxs("div",{className:"flex justify-center items-center space-x-4 mt-4 text-gray-700",children:[e.jsxs("span",{className:"text-lg font-semibold",children:["⭐ ",t.rating]}),e.jsxs("span",{className:"text-lg",children:["(",t.reviews," Reviews)"]})]}),e.jsx("div",{className:"text-center text-[18px] leading-[35px] lg:text-xl text-gray-700 md:!leading-[60px] tracking-tight",children:t.shortDescription}),e.jsx("div",{className:"max-w-5xl mx-auto text-center leading-[35px] text-gray-900 md:!leading-[60px] tracking-tight mt-10",children:t.longDescription})]}),e.jsx(n,{})]});export{p as default};
