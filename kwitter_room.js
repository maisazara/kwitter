var firebaseConfig = {
  apiKey: "AIzaSyDtJPJ3jqv2Ss4x04RyQiqnJMm8K8_Ei-Q",
  authDomain: "kwitter-app-60ac6.firebaseapp.com",
  databaseURL: "https://kwitter-app-60ac6-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-60ac6",
  storageBucket: "kwitter-app-60ac6.appspot.com",
  messagingSenderId: "276896225051",
  appId: "1:276896225051:web:daa493b646a78ec18b65be"
};

// Initialize Firebase

    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ; 
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
 { 
  room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ 
    purpose : "adding room name"
   });
 localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"; 
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name) ;
      window.location = "kwitter_page.html" ;
    }

function logout() {
  localStorage.removeItem("user_name") ;
  localStorage.removeItem("room_name") ;
  window.location = "kwitter.html";
}