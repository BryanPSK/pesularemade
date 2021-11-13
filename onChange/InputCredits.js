import * as React from 'react';
import { useState, useEffect } from 'react';
import {View,Text,StyleSheet, TextInput,TouchableOpacity,Image, StatusBar} from 'react-native';
import EWALLET from '../Image/EWALLET.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { doc, updateDoc, increment } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
import { List, Colors,Avatar,Card, Title,Caption,Button} from 'react-native-paper';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { SafeAreaView } from 'react-navigation';
import { bookmachine1 } from '../Screens/HomeScreen';
import Topup from '../TopUp';

const Getvalue = (props) => {
  return (
    <View>
    <View style={styles.infoBoxtitle}>
      <Text style={styles.transactiontitle}>{props.value} </Text>
      {/* <Text style={{fontSize:10,marginTop:30}}>credits</Text> */}
      </View>
      <View style={styles.infoboxcaption}>
      <Caption style={{color:'black',fontStyle:'italic'}}> credits</Caption>
    </View>
    </View>
  );
}


export default function CreditsStack(){
  const Stack = createStackNavigator();
  return (
    
    <Stack.Navigator>
      <Stack.Screen
        name="InputCredits"
        component={InputCredits}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="Topup"
        component={Topup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
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
    
 function InputCredits({navigation})
{
  const LeftContent = props => <Avatar.Icon {...props} icon="credit-card" />
  const db = firebase.firestore()
  const[credits,setCredits]=useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
  },[])
 
  
  return(
    
      <ScrollView>
       
      <Card>
    <Card.Title /* title="Pesula E-Wallet" subtitle="where payment's made easy..." left={LeftContent} */ />
    <Card.Cover  style={{resizeMode:'cover', borderRadius:20, marginLeft:15,marginRight:15,marginTop:20}} source={EWALLET} />
    
    <Card.Content>
    <View>
    
    
    <View style={styles.titleContainer}>
    {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
    
  
    <View>

    <View style={{flexDirection:'row',backgroundColor:'white',paddingBottom:300}}>
  <Button  onPress={withdrawl} 
  mode='contained'
  icon='arrow-top-left'
  style={{flex:1, marginRight:2}}
  contentStyle={{backgroundColor:'#6b8080',height:100}}
  >
  Withdrawl
  </Button>
  <Button onPress={() => navigation.navigate('Topup')}
  mode='contained'
  icon='alpha-p-circle'
  style={{flex:1}}
  contentStyle={{backgroundColor:'#6b8080',height:100}}
  >
      Top Up
  </Button>
  </View>

{/* <View style={{alignItems:'center'}}>
<Image style={styles.image} source={{uri:'https://cdn.dribbble.com/users/2882545/screenshots/12370157/media/338f210e629cc5e3539a8e19b95d9b05.png?compress=1&resize=400x300'}}/>
</View> */}


     


</View>


</View>
</Card.Content>
</Card>
  </ScrollView>
  
)}

// function Transactions(props){
//   if(props.value == 0){
//     return(
//       <View>
//         Money Withdrawn
//       </View>
//     )
//   }
// }
function withdrawl(){
  firebase.firestore()
  .collection('credits')
  .doc('wallet')
  .get()
  .then(DocumentSnapshot=>{
    var iscredits = DocumentSnapshot.get('value')
    if(iscredits>0){
      reset()
      alert('Successfully withdrawn credits.')
    }
    else{
      alert('Credits had already been withdrawn. No credits in wallet currently.')
    }
  })
}
function reset() //but doesnt show in the app 
{  
  const db = firebase.firestore();
  const storyRef = db.collection('credits').doc('wallet');
  storyRef.update({ value: 0 });
  alert('Successfully withdrawl credits.')
}

// function confirm() 
// {  
  

// }


 const styles = StyleSheet.create({
   buttons:{
    flexDirection: 'row',
    justifyContent:'center',
   
    


   },
 
    transactiontitle:{
        fontSize: 70,
        fontWeight: "500",
      /* fontStyle: "italic", */
      /* textAlign: "center", */
      /* alignItems:'center', */
      color: "#424242",
     },
     text:{
      fontWeight: "600",
      fontStyle: "italic",
      textAlign: "center",
      fontSize: 50,
      color: "black",
      // backgroundColor:'#c6c961'
      
     },
     image: {
      width: 380,
      height: 100,
      flex:1,
     
      
      
    },
    titleContainer: {
      backgroundColor:"#eaf4f4",
      padding:20,
      flex:1,
      borderRadius:20,
      
      /* borderWidth:2, */
      
      marginBottom:5,
      marginTop: 5,
      
      },
      infoBoxtitle:{
        flexDirection:'row',
        marginLeft:30,
        marginTop:15,
        marginBottom:10,
        alignItems:'flex-start'
      },
      infoboxcaption:{
        flex:1,
        alignItems:'flex-end',
        marginRight:10,
      }
    });