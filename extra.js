import * as React from 'react';
import { useState } from 'react';
import { View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SafeAreaView } from 'react-navigation'; 

import { List,FAB, Modal,Portal,Provider,Button,Dialog,Paragraph } from 'react-native-paper'
const Getvalue = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>You have {props.value} in your wallet!</Text>
    </View>
  );
}
export default function Extra(){
  const db = firebase.firestore()
  const[credits,setCredits]=useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
  },[])
  return(
    <View>
      {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
  )
}