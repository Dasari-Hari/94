
 var firebaseConfig = {
      apiKey: "AIzaSyB-KqVgVniZjgfiWyMjFfwBlgDTmPXFaT4",
      authDomain: "project-94-9230a.firebaseapp.com",
      projectId: "project-94-9230a",
      storageBucket: "project-94-9230a.appspot.com",
      messagingSenderId: "904499144538",
      appId: "1:904499144538:web:64bd2da93c3114af9bb563",
     
    };
    
   
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
