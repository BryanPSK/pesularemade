import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Text, View, StyleSheet,TouchableOpacity,Button, Settings} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Counter from '../onChange/BookingTest';

import { ScrollView } from 'react-native-gesture-handler';
import Testing from '../Testing';
import Topup from '../TopUp';
import CreditsStack from '../onChange/InputCredits';
export default function CreditsScreen(){
 
  
  return(
    
      
      <CreditsStack/>
    
  )
}

const styles = StyleSheet.create({
  buttons:{
   flexDirection: 'row',
   justifyContent:'center',
   marginLeft:5,
   marginRight:5,
   
  },
    text:{
     fontWeight: "600",
     fontStyle: "italic",
    
     textAlign: "center",
     fontSize: 23.5,
     color: "white",
     // backgroundColor:'#c6c961'
    },
   
     infoBox:{
       width:'50%',
       flex:1,
       alignItems:'center',
       justifyContent:'center',
     },
     titleContainer: {
      backgroundColor:"#36213e",
      padding:50,
      flex:1,
      justifyContent: "center",
      alignItems:'center',
      /* borderWidth:2, */
      marginHorizontal:2,
      marginBottom:2,
      marginTop: 50,
      borderRadius:20
      },
      quicktopupcontainer:{
      backgroundColor:'white',
      padding:50,
      flex:1,
      justifyContent: "center",
      alignItems:'center',
      /* borderWidth:2, */
      margin:2,
      borderRadius:20
      },
      quicktopuptext:{
          fontWeight: "600",
          fontStyle: "italic",
          textAlign: "center",
          fontSize: 23.5,
          color: "black",
      },
      alltopupmethods:{
      backgroundColor:'white',
      
      
      }
   });


