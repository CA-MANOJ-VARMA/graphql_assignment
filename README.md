# GraphQL Assignment

This project was created using React, Bootstrap, GraphQL. Deployed at this [Link](https://graphqlassignment.netlify.app/). and Deployed on the `Netlify`

## ABOUT THE PROJECT

● Complemeted the Given Assignment where users can log in and can see a list of users depending upon their Status.

● The Website is Responsive in the Web Version, Tablet Version and Mobile Version.

● The resposiveness is achevied using the Bootstrap.

● It list the number of users with Organisational Details such as Orgnasation Name, Organisation Code, UID and status along with User Details such as First Name, Last Name, Email, Phone Number 

● Implemented different pages like Login, Home, Jobs, Job item details using React
components, props, state, lists, event handlers, form inputs.

● Authenticating by taking Email or Mobile Number through post HTTP API Call.

● Persisted user login state by keeping Session token in client storage, Sending it in headers of 
further API calls to authorize the user.

● Implemented different routes for GenerateOTP, LoginPage, ListOfUsers by using React Router components Route, Switch, Link.

● Implemented filters like Offset, Limit, Sort By and search text by sending them as query parameters to the given API.

### Measure took to limit the Unnecessary API Calls and avoiding the Unauthorized Access

● Redirecting to the GenerateOTP page if the user tries to go to LoginPage without 'Generating OTP' using Protected Route

● Redirecting to the GenerateOTP page if the user tries to open users Page without 'Session Token' using Protected Route
which need authentication by implementing protected Route.

● During Login the Email or Phone Number Which is used to generate the OTP will be displayed automatically in Read Only Mode.

● Once the OTP Entered Wrongly the OTP generated is expired and cannot be used the same OTP again.

● Once the Logout Button is Clicked the session Token, OTP all will be removed from the local storage so that wrong authorization is avoided

## Technologies used

React JS, JS, CSS, Bootstrap, Routing, Graph QL API Calls, Local Storage, Session Token, Authorization, Authentication.

Used `Functional Components` and  `useState` Hook is used for state Management and `useEffect` Hook to call API for any change in the State. 

## Dependencies and their Version Used

react - 18.2.0

react-dom - 18.2.0

react-router-dom - 5.2.0

## Running on a Local Host

Open the Code using `Visual Studio`.

From the Menu Bar or Hamburger Icon Go to `Edit>Terminal>New Terminal`

Go to the Folder which has the project using command `cd 'foldername'`
 
Run the Command `npm install`. This will install all the dependencies used in the project.

Run `npm start` will start the server.

To use the Website go through this [PDF](https://scribehow.com/shared/Step_by_Step_Procedure_on_How_to_use_Website__-xmxVfaaSPyGAmuZUv4W0Q) or go through Below Step by Step Prcess

Step 1: Click the [Link](https://graphqlassignment.netlify.app/) to go to the Website.

Step 2: Choose either `Email` or `Phone Number`.  [Lets say 'Email is Chosen'].

Step 3: Enter the Valid Email and Click `Generate OTP` button.

Step 4: After Clicking the button the website will verify whether the given email Address is Valid or Not.If it is valid an OTP is shown in the page with a link to Login page. If the Entered email is not valid it show an error message.

Step 5: Remember the OTP and Click the `Click to Login` you will be directed to Login Page.

Step 6: The Email is already is visible and Enter the Otp in the desired field and Click `Login`

Step 7: If the OTP Entered is correct you will be redirected to  `users` page else you will be redirected to `Initial Page`


