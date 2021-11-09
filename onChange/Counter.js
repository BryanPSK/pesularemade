import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { List,FAB, Modal,Portal,Provider,Button,Dialog,Paragraph } from 'react-native-paper'
import { SafeAreaView } from 'react-navigation';
//code to book 1-2pm
function Book1pm()
{ 
  pushfakebookingtime()
  var isbooked = getisbooked1pm();
  if (isbooked)
  {
    //check credits logic
    full();
  }
  else  
  {
    forcebook1pm();
  }
}

//gets the value of isbooked, true/false
function getisbooked1pm(){
  firebase.firestore()
   .collection('SaracaHall')
   .doc('Machine1')
   .collection('Availability')
   .doc('1pm to 2pm')
   .get()
   .then( documentSnapshot =>{
     var isbooked = documentSnapshot.get('isbooked')
     var isbooked = Boolean(isbooked)
     console.log(isbooked)
     return (isbooked)
   })}

//push fake booking time
function pushfakebookingtime(){
firebase.firestore()
.collection('SaracaHall')
.doc('Machine1')
.collection('Availability')
.doc('1pm to 2pm')
.update({
fakebookingtime: firebase.firestore.FieldValue.serverTimestamp(),
})}

//force book
//check if got money first (shihui) then minus $1
function forcebook1pm()
{
 firebase.firestore()
 .collection('SaracaHall')
 .doc('Machine1')
 .collection('Availability')
 .doc('1pm to 2pm')
 .update({
   isbooked: true,
   bookingtime: firebase.firestore.FieldValue.serverTimestamp(),
})
const db = firebase.firestore();
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: decrement });
console.log('Slot: 1pm to 2pm booked successfully')
return (alert('Slot: 1pm to 2pm booked successfully!'))
}

function full()
{
  console.log('Slot is currently booked')  
  return (alert('Slot: 1pm to 2pm is currently booked!'))
}
function Tobook1to2pm(){
  firebase.firestore()
.collection('SaracaHall')
.doc('Machine1')
.collection('Availability')
.doc('1pm to 2pm')
.get('isbooked')
.then(documentSnapshot =>{
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
            /* console.log(iscredits) */
            if( iscredits > 0){ //check if there is credit
              forcebook1pm() //then can book
              console.log('machine1 booked successfully')
             }
            else{
              console.log('no money woi, top up please. Booking of machine is unsuccessful')
            }
          }
        )
      }
  })
}

const BookingTest = (props) => {

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  const [visiblesophie, setVisiblesophie] = React.useState(false);
  const showDialogSophie = () => setVisiblesophie(true);
  const hideDialogSophie = () => setVisiblesophie(false);

 const [visiblebobby, setVisiblebobby] = React.useState(false);
 const showDialogBobby = () => setVisiblebobby(true);
const hideDialogBobby = () => setVisiblebobby(false);
  return(
  
  <Provider>
    
   <View style={{flexDirection:'column'}}>
  <List.AccordionGroup style = {{flex:1}}>
    <List.Accordion title="Saraca Hall" id="1" style={{flex:1}}>
        <List.AccordionGroup>
        <List.Accordion title="Level 6" id="2">
        <List.Item title= "Sophie" onPress={showDialogSophie}/>
        <Portal>
          <Dialog visible={visiblesophie} onDismiss={hideDialogSophie}>
            
            
            <Dialog.Title >Please choose your timeslot:</Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={Tobook1to2pm}>1-2pm</Button>
              <Button onPress={()=>alert('booked 2-3pm')}>2-3pm</Button>
              <Button onPress={()=>alert('booked 3-4pm')}>3-4pm</Button>
              <Button onPress={()=>alert('booked 4-5pm')}>4-5pm</Button>
              <Button onPress={hideDialogSophie}>Dismiss</Button>
              </View>
            </Dialog.Actions>
            <FAB.Group
          open={open}
          icon={'plus'}
          actions={[
            
            {
              icon: 'star',
              /* label: 'Star', */
              onPress: () => console.log('Pressed star'),            //update favourites state?
            },
            {
              icon: 'bell',
              /* label: 'Remind', */
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log('saved')
            }
          }}
        />
            
        
        
          </Dialog>
          
        </Portal>
          
        <List.Item title= "Bobby" onPress={showDialogBobby}/>
        <Portal>
          <Dialog visible={visiblebobby} onDismiss={hideDialogBobby}>
            
            <Dialog.Title>Please choose your timeslot:</Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={()=>alert('booked 1-2pm')}>1-2pm</Button>
              <Button onPress={()=>alert('booked 2-3pm')}>2-3pm</Button>
              <Button onPress={()=>alert('booked 3-4pm')}>3-4pm</Button>
              <Button onPress={()=>alert('booked 4-5pm')}>4-5pm</Button>
              <Button onPress={hideDialogBobby}>Dismiss</Button>
              </View>
            </Dialog.Actions>
            <FAB.Group
          open={open}
          icon={'plus'}
          actions={[
            
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log('saved')
            }
          }}
        />
          </Dialog>
        </Portal>
        </List.Accordion>
    </List.AccordionGroup>
    <List.AccordionGroup>
        <List.Accordion title="Level 9" id="3">
        <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
        </List.Accordion>
    </List.AccordionGroup>
    </List.Accordion>
    <List.Accordion title="Tamarind Hall" id="4">
    <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
    </List.Accordion>
  
  </List.AccordionGroup>
  </View> 
  
  </Provider>
  
  )
};

export default BookingTest;