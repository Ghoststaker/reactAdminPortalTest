import 'firebase/auth';

const config =  {   
    apiKey: "AIzaSyC2A75OipS9Nm15YxFtpQNlnEGZqFQCQUY",
    authDomain: "testproject-dadfd.firebaseapp.com",
    databaseURL: "https://testproject-dadfd.firebaseio.com",
    projectId: "testproject-dadfd",
    storageBucket: "testproject-dadfd.appspot.com",
    messagingSenderId: "120915013763"
};

/*class Firebase {
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }

    SignIn = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    SignOut = () => this.auth.signOut();
}*/

export default config;