# Done it

**Done it** is a simple and efficient To-Do application that helps users manage their tasks with ease. The app includes features such as creating new tasks, marking them as done, and automatically extracting and wrapping any links found in the task descriptions with `<a>` tags. The project is built using React, leveraging the Context API for state management, Custom Hooks for encapsulating logic, and LocalStorage for persisting tasks.

## Features

- **Create a New Task:**
  - Users can add new tasks with descriptions.
  - If the task description contains any URLs, they will be automatically wrapped in an `<a>` tag.

- **Mark Task as Done:**
  - Users can mark tasks as done, which updates their status visually.

- **Extract and Wrap Links:**
  - The app scans the task descriptions for URLs and automatically wraps them in `<a>` tags for easy access.

- **Persist Data with LocalStorage:**
  - Tasks are saved in LocalStorage, ensuring that they persist even after the page is refreshed.

## Technical Implementation

- **Context API:** Used for managing the global state of tasks across the application.
- **Custom Hooks:**
  - A custom hook for handling task operations such as adding, marking as done, and extracting links.
  - Another custom hook for interacting with LocalStorage to save and retrieve tasks.
- **LocalStorage:** All tasks are stored in the browser’s LocalStorage, ensuring that data is retained between sessions.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/3mohamed-abdelfattah/todo.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd todo
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```


4. **Run the Application:**

   ```bash
   npm run dev
   ```

   CTRL+O to open in your browser