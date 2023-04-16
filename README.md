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

● Redirecting to the GenerateOTP page if the user tries to go to LoginPage without 'Generating OTP' using Protected Route

● Redirecting to the GenerateOTP page if the user tries to open users Page without 'Session Token' using Protected Route
which need authentication by implementing protected Route.

## Technologies used

React JS, JS, CSS, Bootstrap, Routing, Graph QL API Calls, Local Storage, Session Token, Authorization, Authentication.

Used `Functional Components` and  `useState` Hook is used for state Management and `useEffect` Hook to call API for any change in the State. 

## Dependencies and their Version Used

react - 18.2.0

react-dom - 18.2.0

react-router-dom - 5.2.0

## How to Use this Website 

Use this [PDF](https://colony-recorder.s3-accelerate.amazonaws.com/files/2023-04-16/5ffee807-44a7-4885-8d41-5e2fa92fba67/StepbyStepProcedureonHowtouseWebsite_PDF_2023-04-16112722.453696.pdf?AWSAccessKeyId=AKIA2JDELI43YPETRQSC&Signature=GnGD%2Fl7zG03GLSbNWDS%2FQoc3TTc%3D&Expires=1681662745) or go through Below Step by Step Prcess

Step 1: Click the [Link](https://graphqlassignment.netlify.app/) to go to the Website.

Step 2: Choose either `Email` or `Phone Number`.  [Lets say 'Email is Chosen'].

Step 3: Enter the Valid Email and Click `Generate OTP` button.

Step 4: After Clicking the button the website will verify whether the given email Address is Valid or Not.If it is valid an OTP is shown in the page with a link to Login page. If the Entered email is not valid it show an error message.

Step 5: Remember the OTP and Click the `Click to Login` you will be directed to Login Page.

Step 6: The Email is already is visible and Enter the Otp in the desired field and Click `Login`

Step 7: If the OTP Entered is correct you will be redirected to  `users` page else you will be redirected to `Initial Page`

## If using Local Host

`npm start` will start the server and follow the above Process
