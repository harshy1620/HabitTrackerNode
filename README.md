# Habit Tracker App

## Description

The Habit Tracker App is a web-based application built using Node.js, Express.js, MongoDB, and EJS (Embedded JavaScript) templating engine. It helps users track their daily habits and monitor their progress over time. This README file provides an overview of the app's functionality and instructions for setting it up and running.

## Functionality

The Habit Tracker App offers the following key features:

1. **Add Multiple Habits**: Users can add and track multiple habits, such as reading a book, going to the gym, meditating, etc.

2. **Track Habit Status**: Users can track the status of each habit on a daily basis. There are three possible statuses for each habit:
   - **Done**: Mark the habit as done for a specific day.
   - **Not Done**: Mark the habit as not done for a specific day.
   - **None**: User did not take any action on a habit for a specific day.

3. **Current Habits View**: Users can view all their current habits in a user-friendly interface. An "Add Habit" button is provided to add a new habit to track.

4. **Seven-Day Habit View**: Users can see a detailed view of each habit for the past seven days. This view displays the status of the habit for each day, including today. Users can easily track their progress and identify any patterns or trends.

5. **Mark Today's Habit**: A dedicated section is available where users can mark the status of today's habit. They can choose from the three available statuses (Done, Not Done, None) and update it as needed.

6. **Previous Days' Habit Status**: Users can access the status of each habit for the previous six days. This allows them to make changes to the habit status for any day within the last week.

7. **Toggle Habit Status**: Users can toggle between the three available statuses (Done, Not Done, None) for any habit on any given day. They have the flexibility to change today's status or update the status of a habit for previous days.

8. **Data Storage**: The app stores all habit-related data in a MongoDB database, ensuring that user progress is saved and can be accessed in subsequent sessions.

## Setup and Installation

To set up and run the Habit Tracker App, follow these steps:

1. Clone the repository or download the source code.

2. Install the required dependencies by running the following command in the terminal:

   ```bash
   npm install
   ```

3. Configure the MongoDB connection by modifying the `imdex.js` file. Update the `DB_URI` property with your MongoDB connection string.

4. Start the application by running the following command:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:5000` to access the Habit Tracker App.

## Dependencies

The Habit Tracker App relies on the following dependencies:

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript) templating engine
- Mongoose (MongoDB object modeling tool)

Please refer to the `package.json` file for the complete list of dependencies and their versions.

## Contribution

Contributions to the Habit Tracker App are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

Happy habit tracking!
