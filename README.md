# Getting Started with University App

This project is built on react and is hosted on firebase. It can be accessed at -

####  https://univapp-4840c.web.app

The project consists of 4 views -
 - 
### Home - 
This is a dyamic view depending upon the user login state, it will either display user information or will just show a login/signup button.

### Login -
This view will be used for asking user credentials and will either allow user access to further information or not depending upon credentials authenticity.

### Signup -
This view will allow user to create an account on the portal. The information fetched will be stored in firebase auth and firestore users collection.

### Contact us-
This form will facilitate users to contact the portal team by submitting their questions. The question submitted will be stored in the firestore Questions collection.


The app uses firebase managed email authentication protocol as Auth provider. Additionally app utilize firebase firestore as the main database. It consists of two datase collections namely Users and Questions for storing user related details and contact us queries respectively.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

Deployment requires firebase account and can be performed using following commands -

#### firebase login
#### firebase init
#### firebase deploy

