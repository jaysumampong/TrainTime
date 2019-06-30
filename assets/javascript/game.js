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

  let database = firebase.database();
  
//   variables
  let trainName = "";
  let destination = "";
  let firstTrainTime = "";
  let frequency = "";

//   I dont understand why my data isnt being uploaded to firebase
// not really sure how firebase works
  $("#train-btn").on("click", function(event){
      event.preventDefault();

      trainName = $("#train-name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#first-train-input").val().trim();
      frequency = $("#frequency-input").val().trim();

      database.ref().set({
        name: trainName,
        destination: destination,
        trainTime: firstTrainTime,
        frequency: frequency,
    });
  });

  database.ref().on("value", function(snapshot){
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrainTime);
    console.log(snapshot.val().frequency);

  })

//   ran out of time to work on the rest of the homework