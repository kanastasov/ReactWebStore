import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp(  {

apiKey: "AIzaSyC-lupP5WPuCLqBin8wdLc-eh3iqc4odmE",
authDomain: "healtystoref.firebaseapp.com",
databaseURL: "https://healtystoref.firebaseio.com",
projectId: "healtystoref",
storageBucket: "healtystoref.appspot.com",
messagingSenderId: "1072604416403",
appId: "1:1072604416403:web:8540c31a4cbe41c7c0c066",
measurementId: "G-NHW4H2C0ZD"

})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;