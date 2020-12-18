
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAyVSVVB6bAa_FUrXzXcPZLVwqL8Jxq5a0",
      authDomain: "kwiter-b5ec3.firebaseapp.com",
      projectId: "kwiter-b5ec3",
      storageBucket: "kwiter-b5ec3.appspot.com",
      messagingSenderId: "642066814400",
      appId: "1:642066814400:web:867baff50878bea343e425"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
