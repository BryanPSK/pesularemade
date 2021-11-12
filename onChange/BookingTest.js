import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { List,FAB, Modal,Divider,Portal,Provider,Button,Dialog,Paragraph } from 'react-native-paper'
import { SafeAreaView } from 'react-navigation';
import { scheduleJob } from 'node-schedule';

var otp = 1234;
//not in used
function Scheduling1to2pmtimeslot(){
const schedule = require('node-schedule')
const job = schedule.scheduleJob('0 13 * * *',function(){
  var timeout = setTimeout(function(){Unbook1pm()},60000);
})}

//otp related functions
function TimeoutAfter15minsAndRestrictBookingFrom130pm(){
  
  const schedule = require('node-schedule')
  const job = schedule.scheduleJob('0 5 * * *',function(){
    var timeout = setTimeout(function(){if(otp!==1234){
      Unbook1pm()
    NotAllowToBook()
    }},60000); //unbook after 15 mins if otp not entered and start running not allow to book immediately at 130pm
    
  })// maybe can include setOTP inside this function to check
}
function NotAllowToBook(){
  
  const schedule = require('node-schedule')
  const job = schedule.scheduleJob('2 5 * * *',function(){
    var timeout = setTimeout(function(){forcebook1pm()},0); //if slot is being released as someone did not enter otp, user not able to book after 1.30pm
  })
}

function Unbook1pm(){
  firebase.firestore()
  .collection('SaracaHall')
.doc('Machine1')
.collection('Availability')
.doc('1pm to 2pm')
.update({
  isbooked: false,
  isitbooked: '',
})
alert('Machine successfully unbooked')
}//
function Unbook1pmCauseBookWrongly(){
  firebase.firestore()
  .collection('SaracaHall')
.doc('Machine1')
.collection('Availability')
.doc('1pm to 2pm')
.update({
  isbooked: false,
  isitbooked: '',
})
alert('Machine successfully unbooked')
const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(+1);
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: increment });
}
function forcebook1pm()
{
 firebase.firestore()
 .collection('SaracaHall')
 .doc('Machine1')
 .collection('Availability')
 .doc('1pm to 2pm')
 .update({
   isbooked: true,
   isitbooked: '>> Saraca Hall 1 to 2pm booked',
})
const db = firebase.firestore();
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: decrement });
console.log('Slot: 1pm to 2pm booked successfully')
 alert('you have successfully booked 1 to 2 pm. your otp is: 1234. Please remember to key in before 1.15pm or your slot will be forfeited.')
}

const GetBooked = (props) => {
  return (
    <View >
      <Text style={styles.PastBookingText}>{props.isitbooked}</Text>
      
    </View>
  );
}
const createBookingalerts = () =>
    Alert.alert(
      "Select Options",
      "",
      [
        { text: "Book", onPress: () => {Tobook1to2pm()} },
        { text: "Unbook", onPress: () => {Unbook1pmCauseBookWrongly()} }, //incase book wrongly
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );



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
    alert('Booking of machine is unsuccessful. Machine is currently being booked.')
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
              forcebook1pm() //then can book, maybe can give otp here?
              TimeoutAfter15minsAndRestrictBookingFrom130pm() //if otp not keyed into the pi within 15 mins
             

             }
            else{
              alert('Booking of machine is unsuccessful. Please ensure that your wallet have enough credits.')
            }
          }
        )
      }
  })
}

const BookingTest = (props) => {

  const db = firebase.firestore()
  const[booked,setBooked]=useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('SaracaHall').doc('Machine1').collection('Availability').onSnapshot(snapshot =>(setBooked(snapshot.docs.map(doc =>doc.data()))))

  },[])
  



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
    <SafeAreaView>
    
   <View >
   <View style={styles.hallsheader}>
      <View>
        <Text style={styles.hallstext}>
          Halls
        </Text>
      </View>
      </View>
     
  <List.AccordionGroup >
  <List.Accordion title="Saraca" titleStyle={styles.menuItemText} style={{backgroundColor:'white'}}
    left={props => <List.Icon {...props} icon="leaf" color='#6b9080'/>}
    id="1">
        <List.AccordionGroup>
        <List.Accordion title="Level 6" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} id="1">
        <List.Item title= "Sophie"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} onPress={showDialogSophie}  />
        <Portal>
          <Dialog visible={visiblesophie} onDismiss={hideDialogSophie}>
            
            
            <Dialog.Title >Please choose your timeslot:</Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={createBookingalerts}>1-2pm</Button>
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
          
        <List.Item title= "Bobby"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} onPress={showDialogBobby} id="2"/>
        <Portal>
          <Dialog visible={visiblebobby} onDismiss={hideDialogBobby} >
            
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
    <Divider/>
    <List.AccordionGroup>
        <List.Accordion title="Level 9"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} id="1">
        <List.Item title="Zoey"   titleStyle={{color:'black'}} style={{backgroundColor:'white'}} onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" style={{backgroundColor:'white'}} onPress={() => alert('Clicked on Charlie!')} id="3"/>
        </List.Accordion>
        <Divider/>
    </List.AccordionGroup>
    </List.Accordion>
    <Divider/>
    <List.Accordion title="Tamarind"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} titleStyle={styles.menuItemText} style={{backgroundColor:'white'}}
    left={props => <List.Icon {...props} icon="leaf" color='#6b9080'/>}
    id="2">
    <List.Item title="Zoey" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} onPress={() => alert('Clicked on Zoey!')} />
        <List.Item title="Charlie"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} onPress={() => alert('Clicked on Charlie!')} />
    </List.Accordion>
  
  </List.AccordionGroup>
  
  </View>

          <View >
            <View>
            <Text style={styles.hallstext}>
              Your Bookings
            </Text>
            </View>
            <View style={styles.PastBookingInfoBox} >
    {booked.map(({isitbooked}) =>(
        <GetBooked isitbooked={isitbooked}/>
      ))}
          </View>
          </View>

  </SafeAreaView>
  {/* <View style={{backgroundColor:"white", padding:100}}>
  <Divider/>
  
 
</View> */}
  
  </Provider>
  
  )
};

export default BookingTest;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  userInfoSection: {
    paddingHorizontal:30,
    marginBottom: 25,
  },
  
  caption:{
    fontSize: 14,
    lineHeight: 14,
    fontWeight:'500',
    color: '#777777'
  },
  row:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper:{
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection:'row',
    height: 100,
  },
  PastBookingInfoBox:{
    
    
    backgroundColor:'#f6fff8',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    paddingHorizontal: 15,
    paddingBottom:150
    
  },
  PastBookingText:{
    fontSize:15,
     marginTop:15,
     fontWeight:'500',
     color:'#283618'
     
  },
  menuWrapper:{
    marginTop:10
  },
  menuItem:{
    
    paddingVertical:15,
    paddingHorizontal: 30,
   
  },
  menuItemText:{
    color:'black',
    
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
    hallstext:{
      fontWeight: "600",
        fontStyle: "italic",
        textAlign: "left",
        fontSize: 24,
        color: "black",
        marginVertical:10,
        marginHorizontal:4,
    },
    hallsheader:{
      backgroundColor:'white',
    
      flex:1,
      /* borderWidth:2, */
      
      
    },
  
});


  