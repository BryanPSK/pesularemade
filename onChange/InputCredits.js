import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text,StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { doc, updateDoc, increment } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
import { List, Colors, Title,Caption,Button} from 'react-native-paper';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { SafeAreaView } from 'react-navigation';
import { bookmachine1 } from '../Screens/HomeScreen';
const Getvalue = (props) => {
  return (
    <View style={styles.infoBox}>
      <Title style={styles.text}>{props.value} CREDITS</Title>
      <Caption> Wallet</Caption>
    </View>
  );
}





// function Testing(){
  
//    const db = firebase.firestore()
//    const[credits,setCredits]=useState([])
//    useEffect(()=>{
//      //App Component will run once and never again
//      db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
//    },[])
//   return(
//     <View>
//       {credits.map(({value}) =>(
//         <Getvalue value={value}/>
//       ))}
//     </View>
//   )
    

export default function InputCredits()
{
  const db = firebase.firestore()
  const[credits,setCredits]=useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
  },[])
 
  
  return(
    
    <View > 
    {/* <Header 
    leftComponent={{ icon: 'chevron-left', color: '#191970', iconStyle: { color: '#191970',size: 50 } }} //change to a button that navigates to the prev screen?
    centerComponent={{ text: 'CREDITS', style: { color: '#191970',fontWeight:'bold',fontSize:40, fontStyle: 'italic' } }}
    containerStyle={{
      backgroundColor: '#add8e6',
    }}
    /> */}
    <View style={styles.titleContainer}>
    {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
    
  
<View>
<View style={{alignItems:'center'}}>
<Image style={styles.image} source={{uri:'https://cdn.dribbble.com/users/2882545/screenshots/12370157/media/338f210e629cc5e3539a8e19b95d9b05.png?compress=1&resize=400x300'}}/>
</View>

<View style={{flexDirection:'row', justifyContent:'center',flex:1}}>
      <Button onPress={ plus5 }
      mode='contained'
      compact='true'
      style={{flex:1}}
       >+5 Credits</Button>
       <Button onPress={ plus10 }
      mode='contained'
      compact='true'
      style={{flex:1}}
       >+10 Credits</Button>
</View>
<View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10}}>
       <Button onPress={ plus20 }
      mode='contained'
      compact='true'
      style={{flex:1}}
       >+20 Credits</Button>
       <Button onPress={ plus50 }
       mode='contained'
       compact='true'
       style={{flex:1}}
        >+50 Credits</Button>
</View>      

<Button onPress={ reset}
      mode='contained'
      containerStyle={{flex:1}}
       >Withdrawl all credits</Button>
         </View>
{/* <View>
<List.AccordionGroup style = {{flex:1}}>
<List.Accordion title="TOP-UP" titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="arrow-up" color={Colors.blue500}/>}
    id="1">
    <List.Item  title='+5' onPress={plus5}/>
    <Divider/>
    <List.Item  title='+10' onPress={plus10}/>
    <Divider/>
    <List.Item  title='+20' onPress={plus20}/>
    <Divider/>
    <List.Item  title='+50' onPress={plus50}/>
    <Divider/>
    <List.Item  title='Withdrawl of Credits' onPress={reset}/>
    <Divider/>
</List.Accordion>
  </List.AccordionGroup>
</View> */}
  
  


<View style={styles.buttons} >
      <Button onPress={ plus5 } title="+5"
      type='outline'
      containerStyle={{flex:1,borderRadius:10,}}
       />
       
      <Button onPress={ plus10 }  title="+10"
      type='outline'
      containerStyle={{flex:1,borderRadius:10,}}
      />
      
      <Button onPress={ plus20 } 
      title="+20"
      containerStyle={{flex:1,borderRadius:10,}}
       type='outline'
        />
        
        <Button onPress={ plus50 } 
        title="+50"
         containerStyle={{flex:1,borderRadius:10,}}
         type='outline'
         />
</View>

<Button onPress={ reset }
  title="Reset"
  type='outline'
  containerStyle={{justifyContent:'center',
  alignItems:'center'
  }}
/>
<View>
  <Divider/>
  <Text style={styles.text}>Past Transactions</Text>
  <Button>..</Button>
</View>

</View>

)}

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
      fontWeight: "600",
      fontStyle: "italic",
     
      textAlign: "center",
      fontSize: 23.5,
      color: "black",
      // backgroundColor:'#c6c961'
      
     },
     image: {
      width: 380,
      height: 100,
      flex:1,
     
      
      
    },
    titleContainer: {
      backgroundColor:"#add7de",
      
      padding:30,
      margin:20,
      flex:1,
      justifyContent: "center",
      borderRadius:10,
      alignItems:'center'
      
      },
      infoBox:{
        width:'50%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      },
    });