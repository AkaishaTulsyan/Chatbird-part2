var firebaseConfig = {
      apiKey: "AIzaSyDzjYU1O5hp-voumjAFHtjw81wP6a4dhCU",
      authDomain: "chatbird-b1aa6.firebaseapp.com",
      databaseURL: "https://chatbird-b1aa6-default-rtdb.firebaseio.com",
      projectId: "chatbird-b1aa6",
      storageBucket: "chatbird-b1aa6.appspot.com",
      messagingSenderId: "777103691257",
      appId: "1:777103691257:web:c797bb85e0eca96c340128",
      measurementId: "G-S5LVSFH71Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
