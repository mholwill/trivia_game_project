import firebase from "firebase";

    {/* Your web app's Firebase configuration */}
    const firebaseConfig = {
        apiKey: "AIzaSyAECGMu2fbdxCfJThcHPD3cwfX2F8gXfuo",
        authDomain: "brainteaser2.firebaseapp.com",
        databaseURL: "https://brainteaser2.firebaseio.com",
        projectId: "brainteaser2",
        storageBucket: "brainteaser2.appspot.com",
        messagingSenderId: "812882876107",
        appId: "1:812882876107:web:9bcf066030782a65c6ed4e"
    };


export default firebase.initializeApp(firebaseConfig);