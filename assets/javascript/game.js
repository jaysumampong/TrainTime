var firebaseConfig = {
    apiKey: "AIzaSyB-4_aSwyaT0CEV19G4bI0_mZGBfTLQQUk",
    authDomain: "uofu419.firebaseapp.com",
    databaseURL: "https://uofu419.firebaseio.com",
    projectId: "uofu419",
    storageBucket: "uofu419.appspot.com",
    messagingSenderId: "341102287961",
    appId: "1:341102287961:web:d1c2e0390eca83d4"
  };

  firebase.initializeApp(firebaseConfig);
  
//   variables
  let trainName = "";
  let destination = "";
  let firstTrainTime = "";
  let frequency = "";

//   I dont understand why my data isnt being uploaded to firebase
  $("#add-train-btn").on("click", function(){
      trainName = $("#nameInput").val().trim();
      destination = $("#destinationInput").val().trim();
      firstTrainTime = $("#firstTrainTimeInput").val().trim();
      frequency = $("#frequencyInput").val().trim();

      firebase.database().ref().set({
          name: trainName,
          destination: destination,
          trainTime: firstTrainTime,
          frequency: frequency,
      })

  })