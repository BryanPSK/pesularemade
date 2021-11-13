import * as React from 'react';
import { useState, useEffect } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import 'firebase/firestore';
import firebase from './firebase/firebaseDB';
import { doc, updateDoc, increment } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';
import { List, Colors, Title,Caption,Button,TextInput} from 'react-native-paper';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { SafeAreaView } from 'react-navigation';
import { diff, set } from 'react-native-reanimated';
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable';
export default function Topup({navigation}){
return(
    
        <ScrollView >
          <View >
        <QuickTopUp/>
        <TopupMethods/>
        
        <View>
        <Button onPress={() => navigation.navigate('InputCredits')}
        mode='contained'
        compact='true'
        style={{flex:1,margin:1,marginTop:2,borderRadius:5}}
        contentStyle={{backgroundColor:'#dedede'}}>
            BACK
        </Button>
    </View>
    </View>
      </ScrollView> 
       
    
)
}

function QuickTopUp(){
    const db = firebase.firestore()
    const[credits,setCredits]=useState([])
    useEffect(()=>{
      //App Component will run once and never again
      db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
    },[])
    return(
      <SafeAreaView>
        <ScrollView>
          
    <View >    
        <View style={styles.titleContainer}>
    {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
    
        <View style={styles.quicktopupcontainer}>
        <Text style={styles.quicktopuptext}>QUICK TOP-UP</Text>
        <View style={{alignItems:'center'}}>
        <Caption >select one of the options for instant top-up</Caption>
        <Caption >you can key in the amount as well</Caption>
        </View>
        <View style={styles.buttons}>
            <Button onPress={ plus5 }
                mode='contained'
                compact='true'
                style={{flex:1,marginRight:2,borderRadius:5}}
                contentStyle={{backgroundColor:'#eaf4f4'}}
                color='grey'>
                +5
            </Button>
            <Button onPress={ plus10 }
                mode='contained'
                compact='true'
                style={{flex:1,marginRight:2,borderRadius:5}}
                contentStyle={{backgroundColor:'#eaf4f4'}}
                color='grey'>
                +10
            </Button>
            <Button onPress={ plus20 }
                mode='contained'
                compact='true'
                style={{flex:1,marginRight:2,borderRadius:5}}
                contentStyle={{backgroundColor:'#eaf4f4'}}
                color='grey'>
                +20
            </Button>
            <Button onPress={ plus50 }
                mode='contained'
                compact='true'
                style={{flex:1,marginRight:2,borderRadius:5,}}
                contentStyle={{backgroundColor:'#eaf4f4'}}
                color='grey'>
                +50
            </Button>
            

        </View>
        {/* <View style={{flexDirection:'row',margin:5,}}>
        <Button onPress={ reset }
                mode='contained'
                compact='true'
                style={{flex:1, borderRadius:15}}
                contentStyle={{backgroundColor:'#554971'}}>
                RESET
            </Button></View> */}
            <View>
            <InputTopUp/>
            </View>
        </View>

    </View>
    </ScrollView>
    </SafeAreaView>
    )
}
function TopupMethods(){
  return(
    <View style={styles.alltopupmethodsheader}>
      <View>
        <Text style={styles.alltopupmethodstext}>
          All Top-up Methods
        </Text>
      </View>
       <List.AccordionGroup>
    <List.Accordion title="Cards" description='Visa, Mastercard and more' style={styles.alltopupmethods} titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="credit-card" color='#6b9080'/>}
    id="1">
      
    <List.Item  title='Credit/Debit Card' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='American Express' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='Visa/Mastercard' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    
    
    </List.Accordion>
    
    
    <List.Accordion title="Banking app" description='Use bank transfer' style={styles.alltopupmethods} titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="bank"  color='#6b9080'/>}
    id="2">
      
    <List.Item  title='OCBC' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='DBS/POSB' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='CIMB' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='Maybank' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    
    </List.Accordion>
    
    
    <List.Accordion title="Others" description='Linked your external payment applications once for quick top-ups' titleStyle={styles.menuItemText}  style={styles.alltopupmethods}
    left={props => <List.Icon {...props} icon="tree"  color='#6b9080'/>}
    id="3">
      
    
    <List.Item  title='Google Pay' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='DBS Paylah!' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='PayNow' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    
    </List.Accordion>
    </List.AccordionGroup>
    </View>
  )
}
const InputTopUp=()=>{
    const [amount, setAmount] = useState(''); //input needs to be string number but idk how yet
    var myInt = parseInt(amount); //convert string number to integer
    return(
        <View style={{marginTop:15}}>
        <TextInput style={{backgroundColor:'#f6fff8',borderWidth:0.5,borderColor:'#cce3de',}}
      label="Enter Amount"
      mode='flat'
      underlineColor='#fff'
      outlineColor='#eaf4f4'
      value={amount}
      keyboardType='number-pad'
      onChangeText={amount => setAmount(amount)}
      
    />
    <Button onPress={GetInputTopUp}
    mode='contained'
    compact='true'
    style={{flex:1,margin:1,marginTop:2,borderRadius:5}}
    color='grey'
    contentStyle={{backgroundColor:'#eaf4f4'}}
    >
        topup
    </Button>
    
    </View>
    
  );
  function GetInputTopUp(){ //actually dont even need this function now as keypad change to numeric but it works
    var checkingifinteger = Number.isInteger(myInt)
    //   console.log(amount)
       console.log(myInt)
    //   console.log(Number.isInteger(myInt))

      if(checkingifinteger==true){
        console.log('number')
        const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(myInt);
    // Document reference
    const storyRef = db.collection('credits').doc('wallet');
    // Update read count
    storyRef.update({ value: increment });
    setAmount('') //revert back to original look of text input
    alert('Successfully top up.')
      }
      else{
          console.log('NAN')
          alert('Top-Up invalid. Please ensure that it is an integer value.')
          setAmount('') //revert back to original look of text input
          
      }
  }
    
}
//not in use
function GetPastTransactions(props){
 console.log(props.value)
 console.log(props.transactions)
 
 
  
 
  return (
    <View style={styles.infoBox}>
      
      <Title style={styles.text}>{props.value} CREDITS</Title>
      <Caption style={{color:'grey'}}> Wallet</Caption>
      
    </View>
  );
}
//not in use
function PastTransactions(){
  const db=firebase.firestore()
  var transactions = []
  const[array,setArray]=useState([])
  db.collection('credits')
.doc('wallet')
.get()
.then(querySnapshot=>{
  transactions= querySnapshot.get('value')
  
})
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setArray(snapshot.docs.map(doc =>doc.data()))))
  },[])
  
  /* db.collection("credits")
  .doc('wallet')
  .onSnapshot((doc) => {
   var value = doc.data('value')
   console.log(value)
}) */


  
  
    
 
 
  return(
    <View style={styles.titleContainer}>
    {array.map(({value}) =>(
        <GetPastTransactions value={value}/>
      ))}
    { ({transactions})=>(
     <GetPastTransactions transactions={transactions}/>)}
    </View>
  )
}
  

const Getvalue = (props) => {
    return (
      <View style={styles.infoBox}>
        
        <Title style={styles.text}>{props.value} CREDITS</Title>
        <Caption style={{color:'grey'}}> Wallet</Caption>
        
      </View>
    );
  }

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
    alert('Successfully top up 5 credits.')
  }
  
  function plus10()
  {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(10);
    // Document reference
    const storyRef = db.collection('credits').doc('wallet');
    // Update read count
    storyRef.update({ value: increment });
    alert('Successfully top up 10 credits.')
  }
  
  function plus20()
  {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(20);
    // Document reference
    const storyRef = db.collection('credits').doc('wallet');
    // Update read count
    storyRef.update({ value: increment });
    alert('Successfully top up 20 credits.')
  }
  
  function plus50()
  {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(50);
    // Document reference
    const storyRef = db.collection('credits').doc('wallet');
    // Update read count
    storyRef.update({ value: increment });
    alert('Successfully top up 50 credits.')
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
       color: "black",
       marginTop:5
       
       // backgroundColor:'#c6c961'
      },
     
       infoBox:{
         width:'50%',
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         margin:10
       },
       titleContainer: {
        backgroundColor:"#cce3de",
        padding:40,
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        marginTop:10,
        borderWidth:1,
        borderColor:'white',
        marginHorizontal:2,
        marginBottom:2,
        
        borderRadius:20
        },
        quicktopupcontainer:{
        backgroundColor:'#f6fff8',
        paddingBottom:20
        /* flex:1,
        justifyContent: "center", */
        /* alignItems:'center', */
        /* borderWidth:2, */
        /* marginTop:2, */
        
        },
        quicktopuptext:{
            fontWeight: "600",
            fontStyle: "italic",
            textAlign: "center",
            fontSize: 23.5,
            color: "black",
            paddingTop:20},
        alltopupmethods:{
        backgroundColor:'white',
        
        flex:1,
        /* borderWidth:2, */
        
        
        },
        alltopupmethodstext:{
          fontWeight: "600",
        fontStyle: "italic",
        textAlign: "left",
        fontSize: 24,
        color: "black",
        marginVertical:10,
        marginHorizontal:4,
        },
        alltopupmethodsheader:{
          backgroundColor:'white',
        
          flex:1,
          /* borderWidth:2, */
          
          
        },menuItemText:{
          color:'black',
          fontWeight: '600',
          fontSize: 16,
          lineHeight: 26,
        },
     })