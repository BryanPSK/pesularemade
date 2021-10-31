import * as React from 'react';
import { Text, View, Button, Alert,} from 'react-native';
// import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
// import writeUserData from '../firebase/rtdb'


export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
        <Button title = "firestore" onPress={ UpdateFirestore } />
        {/* <Button title = "RTDB?" onPress={ writeUserData } /> */}
        <Button title = "checkbookingavailability" onPress={ checkbookingavailability } />
        <Button title = "checkbookingtime" onPress={ checkbookingtime } />
        <Button title = "bookmachine1" onPress={ bookmachine1 } />
        <Button title = "forcebookmachine1" onPress={ forcebookmachine1 } />
        <Button title = "forceunbookmachine1" onPress={ forceunbookmachine1 } />
        {/* <Button title = "consolelog" onPress={ ()=>  } /> */}
      </View>
  );
  }
//RTDB TESTING CODE HERE
//RTDB TESTING CODE HERE
// function RTDB(){
//   firebase.database()
//     .collection('SaracaHall')
//     .add({
//       title:"Test1",
//       potate : true,
//     })
//   }
// db = firebase.database()

// val = db.child('Users2').child('test').get()
// print(val)


// function writeUserData(userId, name, email, imageUrl) {
//       const db = firebase.getDatabase();
//       set(ref(db, 'users/' + userId), {
//         username: name,
//         email: email,
//         profile_picture : imageUrl
//       });
//     }





   //this function writes data to firestore 
  function UpdateFirestore(){
    firebase.firestore()
      .collection('SaracaHall')
      .add({
        title:"Test1",
        potate : true,
      })
    }
    

//hardcoded function to book machine 1.updates the 'isbooked' boolean field in firestore
function forcebookmachine1(){
firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .set({
    isbooked: true,
    // timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  const db = firebase.firestore();
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: decrement }); //minus off 1 credit
  console.log('machine1 forcebooked')
 
  
}
//function to unbook machine 1. updates the 'isbooked' boolean field in firestore.
function forceunbookmachine1(){
  firebase.firestore()
    .collection('SaracaHall')
    .doc('Machine1')
    .collection('bookstatus')
    .doc('bookstatus')
    .set({
      isbooked: false,
    })
    console.log('machine1 force unbooked')
  }

//Check if machine is booked or not. then carry out action(in this case print statement)
// function bookmachine1(){
//   firebase.firestore()
//   .collection('SaracaHall')
//   .doc('Machine1')
//   .collection('bookstatus')
//   .doc('bookstatus')
//   .get()
//   .then( documentSnapshot =>{
//     var isbooked=documentSnapshot.get('isbooked')
//     if (isbooked == true){
//       console.log('machine is currently booked')
//       //do something
//     }
//     if(isbooked == false){
//       console.log('machine is available for booking')
//       //do something
//     }
  
//   })
// }

//this function checks the current booking status
function checkbookingavailability(){
  firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var isbooked=documentSnapshot.get('isbooked')
    console.log(isbooked)
    return (isbooked)
  })
   
    ;
  }

function checkbookingtime()
{
  firebase
  .firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var timestamp=documentSnapshot.get('timestamp')
    console.log(timestamp)
    return (timestamp)
  });
  //timeout
if (checkbookingtime > checkbookingtime - 1)
{
forceunbookmachine1
// refund $1
};
  
}







//Check if machine1 is avail. if available, book it.
  function bookmachine1(){
   
    firebase.firestore()
    .collection('SaracaHall')
    .doc('Machine1')
    .collection('bookstatus')
    .doc('bookstatus')
    .get()
    .then( documentSnapshot =>{
      var isbooked=documentSnapshot.get('isbooked')
      if (isbooked == true){
        console.log('machine is currently booked')
        //do something
      }
      if(isbooked == false){
        firebase.firestore()
        .collection('credits')
        .doc('wallet')
        .get('value')
        .then(
          documentSnapshot=>{
            var iscredits = documentSnapshot.get('value')
            console.log(iscredits)
            if( iscredits > 0){ //check if there is credit
              forcebookmachine1() //then can book
              console.log('machine1 booked successfully')
            }
            else{
              console.log('no money woi, top up please.')
            }
          }
        )
        //forcebookmachine1()
       /*  const db = firebase.firestore();
      const decrement = firebase.firestore.FieldValue.increment(-1);
      const storyRef = db.collection('credits').doc('wallet');
  // Update read count
      storyRef.update({ value: decrement }); */
        
        //add time stamp. if timeout, add refund $1 (derick)
        //push user creds into firebase (derick)
        //console.log('machine1 booked successfully')
        //do something
      }
    
    })
  }
  