import * as React from 'react';
import { useState } from 'react';
import { View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button,Header } from 'react-native-elements';
import Counter from './Counter';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { doc, updateDoc, increment } from "firebase/firestore";

  
export default function InputCredits()
{

  const[finalcount,setCount]=useState(0)
  function updateboth5(){
    setCount(finalcount+5)
    plus5()
  }
  function updateboth10(){
    setCount(finalcount+10)
    plus10()
  }
  function updateboth20(){
    setCount(finalcount+20)
    plus20()
  }
  function updateboth50(){
    setCount(finalcount+50)
    plus50()
  }
  function updatebothreset(){
    setCount(0)
    reset()
  }
  return(
    <View style={{justifyContent:'space-between'}}> 
    <Header 
    leftComponent={{ icon: 'chevron-left', color: '#191970', iconStyle: { color: '#191970',size: 50 } }} //change to a button that navigates to the prev screen?
    centerComponent={{ text: 'CREDITS', style: { color: '#191970',fontWeight:'bold',fontSize:40, fontStyle: 'italic' } }}
    containerStyle={{
      backgroundColor: '#add8e6',
    }}
    /* rightComponent={{ icon: 'home', color: '#fff' }} */
    />
    
  
  
<Text style={styles.text}> You have {finalcount} credits in your wallet </Text>

<View style={styles.buttons} >
      <Button onPress={ updateboth5 } title="+5"
      type='outline'
      containerStyle={{flex:1}}
       />
       
      <Button onPress={ updateboth10 }  title="+10"
      type='outline'
      containerStyle={{flex:1}}
      />
      
      <Button onPress={ updateboth20 } 
      title="+20"
      containerStyle={{flex:1}}
       type='outline'
        />
        
        <Button onPress={ updateboth50 } 
        title="+50"
         containerStyle={{flex:1}}
         type='outline'
         />
</View>

<Button onPress={ updatebothreset }
  title="Reset"
  type='outline'
  containerStyle={{justifyContent:'center',
  alignItems:'center'
  }}
/>

<Button onPress={ confirm } //once press confirm, update database?
  title="Confirm"
  icon={{
    name: "arrow-right",
    size: 15,
    color: "Navy"
  }}
/>

</View>)

function reset() //but doesnt show in the app 
{  
  const db = firebase.firestore();
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: 0 });
}

// function confirm() 
// {  
  

// }

function plus5()
{
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(5);
  // Document reference
  const storyRef = db.collection('credits').doc('wallet');
  // Update read count
  storyRef.update({ value: increment });
}

function plus10()
{
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(10);
  // Document reference
  const storyRef = db.collection('credits').doc('wallet');
  // Update read count
  storyRef.update({ value: increment });
}

function plus20()
{
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(20);
  // Document reference
  const storyRef = db.collection('credits').doc('wallet');
  // Update read count
  storyRef.update({ value: increment });
}

function plus50()
{
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(50);
  // Document reference
  const storyRef = db.collection('credits').doc('wallet');
  // Update read count
  storyRef.update({ value: increment });
}


}



 const styles = StyleSheet.create({
   buttons:{
    flexDirection: 'row',
    justifyContent:'center',

   },
 
    header:{
        fontSize: 100,
        backgroundColor:'yellow'
     },
     text:{
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 30,
      color: "dark blue",
      flex: 2,
     }
    });