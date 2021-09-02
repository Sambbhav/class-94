function adduser(){
    username=document.getElementById("logout").value;
    localStorage.setItem("logout",logout);
    window.location = "index.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyCb_TARtBRcJHtB8R6Y3o6uLFK0GX23aOE",
    authDomain: "lets-chat-web-app-99248.firebaseapp.com",
    projectId: "lets-chat-web-app-99248",
    storageBucket: "lets-chat-web-app-99248.appspot.com",
    messagingSenderId: "995617825401",
    appId: "1:995617825401:web:2f1f3ac2c03b149b6caaa8",
    measurementId: "G-6KSV05BGGZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);