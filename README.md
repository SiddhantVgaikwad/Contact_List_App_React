📞 Contact List App

This is a Contact List App built as a test assignment for Coding Ninjas. The app allows users to manage their contacts by fetching, adding, editing, and deleting contacts. It also includes a light/dark theme toggle and a fake call functionality.

🌟 Features

✅ Fetch and Display Contacts:

Fetches a list of contacts from the JSONPlaceholder API.

Displays the contacts in a responsive grid layout.

➕ Add a Contact:

Allows users to add a new contact using a form.

Makes a POST request to the API (simulated).

✏️ Edit a Contact:

Allows users to edit an existing contact.

Makes a PUT request to the API (simulated).

❌ Delete a Contact:

Allows users to delete a contact.

Makes a DELETE request to the API (simulated).

🌙 Light/Dark Theme:

Includes a theme toggle button in the navbar to switch between light and dark themes.

📞 Fake Call Functionality:

Simulates a phone call by displaying an alert with the contact's phone number when the card is clicked.

🔧 How I Made This Project

🎯 Approach to the Problem

📌 Understanding the Requirements:

I started by carefully reading the problem statement and breaking it down into smaller tasks:

Fetch and display contacts.

Add, edit, and delete contacts.

Implement a light/dark theme toggle.

Add a fake call functionality.

🏗 Planning the Structure:

Used React for the frontend due to its component-based architecture.

Used React Router for navigation between pages (Home, Add Contact, Edit Contact).

Used Tailwind CSS for fast and responsive styling.

🛠 Implementing the Features:

🔍 Fetching Contacts:

Used the fetch API to retrieve the list of contacts from JSONPlaceholder and stored them in state.

➕ Adding a Contact:

Created a form to collect user input and made a POST request to the API (simulated).

✏️ Editing a Contact:

Used the contact’s ID to fetch existing data, populated the form, and made a PUT request to update the contact.

❌ Deleting a Contact:

Made a DELETE request to remove the contact and updated the state.

🌙 Light/Dark Theme:

Created a ThemeContext to manage the theme state and used Tailwind’s dark mode utilities to apply theme-based styles.

📞 Fake Call Functionality:

Added an onClick event to the contact card that triggers an alert with the contact’s phone number.

🛠 Testing and Debugging:

Thoroughly tested each feature to ensure it worked as expected.

Used console.log and browser developer tools to debug any issues.

🛠 Tools and Technologies Used

🎨 Frontend:

React (for building the user interface)

React Router (for navigation)

Tailwind CSS (for styling)

Context API (for managing the light/dark theme)

🔗 API:

JSONPlaceholder (for fetching, adding, editing, and deleting contacts)

💻 Development Tools:

Visual Studio Code (as the code editor)

Git and GitHub (for version control and hosting the code)

npm (for managing dependencies)

🚀 How to Run the Project

📥 Clone the Repository:

git clone https://github.com/your-username/contact-list-app.git
cd contact-list-app

📦 Install Dependencies:

npm install

▶️ Run the Project:

npm start

🌐 Open in Browser:

The app will open at http://localhost:3000.

🏆 Challenges Faced

🔄 Simulating CRUD Operations:

Since JSONPlaceholder is a fake API, it doesn’t persist changes. I had to manage the contact list in state.

🌙 Theme Toggle:

Implementing the light/dark theme required using React’s Context API and Tailwind’s dark mode utilities.

📞 Fake Call Functionality:

Ensured that clicking the Edit or Delete buttons didn’t trigger the fake call using e.stopPropagation().

🎓 What I Learned

✅ How to use React Router for navigation.

✅ How to manage global state using Context API.

✅ How to implement a light/dark theme toggle with Tailwind CSS.

✅ How to simulate CRUD operations with a fake API.

✅ How to handle event propagation in React.

📸 Screenshots

🌞 Light Theme
![image](https://github.com/user-attachments/assets/691030ec-a94b-48d5-abec-488523af467b)


🌙 Dark Theme
![image](https://github.com/user-attachments/assets/a399e044-123c-48ad-b559-5ff869e831a0)

➕ Add Contact
![image](https://github.com/user-attachments/assets/09de70a5-1d24-4ba2-861a-4be2f9309ae5)


✏️ Edit Contact
![image](https://github.com/user-attachments/assets/060b6bb8-39d1-41b7-ab16-fc563e503d67)



🚀 Future Improvements

🔥 Use a real backend (e.g., Firebase or Node.js) to persist data.

🔍 Add search and filter functionality for contacts.

📞 Improve the fake call functionality by opening a modal or integrating with a real phone dialer.

💡 About This Project

This project was created as a test assignment for Coding Ninjas. It showcases my ability to build a responsive React app with CRUD functionality, theme support, and a user-friendly interface.

Feel free to explore the code and provide feedback! 😊

