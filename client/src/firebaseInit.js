import firebase from "firebase";

    {/* The core Firebase JS SDK is always required and must be listed first */}
    src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js">

    {/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries */}

 
    {/* Your web app's Firebase configuration */}
    const firebaseConfig = {
    apiKey: "AIzaSyAWHsBmpYanz3CtYtPL9WazpeJPEjV4UGc",
    authDomain: "brainteaser-68ab2.firebaseapp.com",
    databaseURL: "https://brainteaser-68ab2.firebaseio.com",
    projectId: "brainteaser-68ab2",
    storageBucket: "brainteaser-68ab2.appspot.com",
    messagingSenderId: "187690493878",
    appId: "1:187690493878:web:f8599c38a136a92187c317"
    };


export default firebase.initializeApp(firebaseConfig);