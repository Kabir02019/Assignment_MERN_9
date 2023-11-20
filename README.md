# Git Assignment Solution Readme

This readme provides a detailed explanation of how I implemented each step of the Assignment-9 and where to find the corresponding code in my repository.



## Step 1: Connect Previous Node Assignment

### Implementation

I connected our previous Node.js assignment to this assignment by creating a login page. We used the usernames and passwords created in the previous assignment to enable successful login without the need for a signup page. The backend structure follows the REST API hierarchy:

- Server.js serves as the entry point.
- routes defines the routes.
- controller contains controller functions.
- Services handles login authentication.
- models defines the user data model.
- All these files are set in folders in REST structure

### Code Location

- The code for the Node.js backend can be found in the following files:
  - userController.js
  - User.js
  - userRoutes.js
  - userServices.js
  - server.js

## Step 2: Create Four React Pages

### Implementation

I created four React pages: Home, About Us, Jobs, and Contact, each with its separate folder structure for components. We used React Router to navigate between these pages.

### Code Location

- The React page components and their corresponding folder structures can be found in the following directories:
  - src/components/Home
  - src/components/AboutUs
  - src/components/Jobs
  - src/components/Contact

## Step 3: Add Card Components

### Implementation

I added card components to each page, providing details about each page's content. To make the cards dynamic, I used React's map() function on at least one of the pages.

### Code Location

- The code for the card components can be found in the respective React page components in the directories mentioned in Step 2.

## Step 4: Use CSS and Additional Text

### Implementation

To make the pages visually appealing, I used CSS to style them. Additionally, I added some extra text and content to enhance the presentation of the pages.

### Code Location

- The CSS styles for each React page can be found in their respective CSS files in the directories mentioned in Step 2.


## Important Notes

- Ensure that you have MongoDB installed and running, and update the MongoDB URI in server.js as needed.
- Please note that error handling and validations have been implemented in our code to ensure the application's robustness.
