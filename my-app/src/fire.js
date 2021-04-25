import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDlyMuYeY9jLV5PPPczA4GAj2LZh6NZ4Mo",
    authDomain: "student-mania-59d12.firebaseapp.com",
    projectId: "student-mania-59d12",
    storageBucket: "student-mania-59d12.appspot.com",
    messagingSenderId: "1007672804792",
    appId: "1:1007672804792:web:8a6ba0a8d7e51009b13b4d",
    measurementId: "G-VNM3R78ZD5"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;