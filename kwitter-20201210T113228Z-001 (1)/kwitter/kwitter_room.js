
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {

  apiKey: "AIzaSyDxnAVj_dr11Iv_JnoJYh8fw--1OjSLe-s",
  authDomain: "kwitter-new-ce89a.firebaseapp.com",
  databaseURL: "https://kwitter-new-ce89a-default-rtdb.firebaseio.com",
  projectId: "kwitter-new-ce89a",
  storageBucket: "kwitter-new-ce89a.appspot.com",
  messagingSenderId: "583489980753",
  appId: "1:583489980753:web:08185eae98e5afce13ab70"

};

// Initialize Firebase
 firebase. initializeApp(firebaseConfig);



  
    user_name =
    localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
     name = messaege_data['message'];
     like = messaege_data['Like'];
     name_with_tag = "<h4>" + name +"<img class='user_tick'src+'tick.png'></h4> ";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_buttom ="<button class='btn btn-warning' id="+firebase_message_id+"onclicke='updateLike(this.id)'>";
     span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";


     row = name_with_tag + messafe_with_Tag +Like_button + span_with_tag;
     document.getElementById("output").innerHTML += row;

      console.log("Room Name - " + Room_names);
      //End code
      });});}
getData();
 
function addRoom()
{
  room_name = document.getElementById("room_name").value;
   
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });
 
  localStorage.setItem("room_name", room_name);
 
  window.location = "kwitter_page.html";
}
 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
 
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
 
function send()
{
  msg = document.getElementById("msg").value = "";
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });
 
  document.getElementById("msg").value = "";
}
 
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});


function updateLike(message_id)
{
  console.log("clicked on the like button - " + message_id);
  button_id + message_id;
  likes = document.getElementById(button_id).value;
  updated_Likes = Number(Likes) + 1;
  console.log(updateLikes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_Likes
  });
}