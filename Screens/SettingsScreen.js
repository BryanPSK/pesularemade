import * as React from 'react';
import { StyleSheet, View ,ScrollView, SafeAreaView,TextInput, StatusBar} from 'react-native';
import { Colors,Divider,Dialog,Portal,Provider,Paragraph,Button,Avatar, Title, Caption, Text, List,TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { useState,useEffect } from 'react';
//possible user profile settings such as display name etc? or set favourite hall?
const Getvalue = (props) => {
  return (
    <View style={styles.infoBox}>
      <Title style={styles.text}>{props.value} CREDITS</Title>
      <Caption> Wallet</Caption>
    </View>
  );
}
export default function SettingsScreen(){
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[username,setUsername]=useState('')
  const[name,setName]=useState('')
  const db = firebase.firestore()
  const[credits,setCredits] = useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
  },[])
    return(
      <Provider>
      <SafeAreaView >
        <ScrollView>
          
          <View style = {styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row', marginTop: 15,}}>
            <Avatar.Image
            source={{uri:'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}}
            size={80} />
            <View styles={{marginLeft: 20}}>
            <TextInput
          style={{marginTop:15,marginBottom: 5,marginLeft:5,fontStyle:'italic'}}
          keyboardType='default'
          placeholder="Name"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={name => setName(name)} 
        />
         <TextInput
          style={{marginTop:5,fontStyle:'italic',marginLeft:5}}
          keyboardType='default'
          placeholder="Username"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={username => setUsername(username)} 
        />
               {/* <Title style={styles.title,{marginTop:15,marginBottom: 5,}}>Chris Evans</Title> */}
               {/* <Caption style={styles.caption}>@cevans_</Caption> */}
            </View>
        </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name='phone' color='#777777' size={20}/>
            <View>
            <TextInput
          style={styles.TextInput}
          keyboardType='phone-pad'
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={phone => setPhone(phone)} //SET EMAIL
        />
        </View>
        
      
            {/* <Text style={{color:'#777777',marginLeft:20}}>91234567</Text> */}
          </View>
          <View style={styles.row}>
            <Icon name='email' color='#777777' size={20}/>
            <View>
            <TextInput
          style={styles.TextInput}
          keyboardType='email-address'
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={email => setEmail(email)} //SET EMAIL
        />
        </View>
            {/* <Text style={{color:'#777777',marginLeft:20}}>c.evans@xyz.com</Text> */}
          </View>
        </View>
        {/* <View style={styles.infoBoxWrapper}>
          
          <View style={[styles.infoBox, {
          borderRightColor:'#dddddd',
          borderRightWidth: 1}]
          }>
            
            <View style={styles.containerforwallet}>
      {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
          </View>
        </View> */}
      </View>
        <View style={styles.footer}>
        
    <List.AccordionGroup style={{flex:1}}>
    <List.Accordion title="Payment Methods" style={{backgroundColor:'white'}} titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="credit-card" color='#6b9080'/>}
    id="1">
      
    <List.Item  title='Credit/Debit Card'style={styles.FAQtext} onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='Google Pay' style={styles.FAQtext} onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='DBS Paylah!' style={styles.FAQtext} onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='PayNow' style={styles.FAQtext} onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    
    </List.Accordion>
    
    
    <Divider/>
    
    <List.Accordion title="FAQ" titleStyle={styles.menuItemText} style={{backgroundColor:'white'}}
    left={props => <List.Icon {...props} icon="folder" color='#6b9080'/>}
    id="2">
      <List.AccordionGroup>
        <List.Accordion title="Q1. How does Pesula works?" id="1" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} >
         <Text style={styles.FAQtext}>Pesula is a smart mobile application that enables users to book in advance their laundry timeslot using cashless payment!</Text>
          <Divider/>
        </List.Accordion>
        
        <Divider/>
        
        <List.Accordion title="Q2. How do I make a booking?" id="2" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} >
         <Text style={styles.FAQtext}>Check to see if a machine is available by clicking on it! If it’s available, great! Make sure you have enough credits to make a successful booking.</Text>
          <Divider/>
        </List.Accordion>
        
        <Divider/>
        
        <List.Accordion title="Q3. Can I refund my booking?" id="3" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} >
        <Text style={styles.FAQtext}>If you don’t enter the OTP within 15 minutes, your booking slot is immediately forfeited and released to other users.</Text>
          <Divider/>
        </List.Accordion>
        
        <Divider/>
        
        <List.Accordion title="Q4. How long is one cycle?" id="4" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} >
         <Text style={styles.FAQtext}>1 hour from the moment you entered the OTP.</Text>
          <Divider/>
        </List.Accordion>
        </List.AccordionGroup>
        <Divider/>
    </List.Accordion>
    
  
  <Divider/>
  
    <List.Accordion title="Your Favourites" titleStyle={styles.menuItemText} style={{backgroundColor:'white'}}
    left={props => <List.Icon {...props} icon="heart" color='#6b9080'/>}
    id="3">
      <View style={{backgroundColor:'white'}}>
        
      <List.Item
    title="Saraca Hall - Sophie" 
  /></View>
  </List.Accordion>
  <Divider/>
  <List.Accordion title="Privacy" titleStyle={styles.menuItemText} style={{backgroundColor:'white'}}
    left={props => <List.Icon {...props} icon="security" color='#6b9080'/>}
    id="4">
      <List.AccordionGroup>
        <List.Accordion title="Account Settings"  titleStyle={{color:'black'}} style={{backgroundColor:'white'}} id="1">
        <List.Item  title='Change Password'style={styles.FAQtext} onPress={()=>alert('move to external change password screen')}/>
          <Divider/>
          <List.Item  title='Change Email'style={styles.FAQtext} onPress={()=>alert('move to external change email screen')}/>
          <Divider/>
        </List.Accordion>
        
        <Divider/>
        
        <List.Accordion title="Wallet Settings" id="2" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} >
         <Text style={styles.FAQtext}></Text>
          <Divider/>
        </List.Accordion>
        
        <Divider/>
        
        {/* <List.Accordion title="Profile Settings" id="2" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} id="4">
        <Text style={styles.FAQtext}>If you don’t enter the OTP within 15 minutes, your booking slot is immediately forfeited and released to other users.</Text>
          <Divider/>
        </List.Accordion> */}
        </List.AccordionGroup>
        {/* <Divider/>
        <List.AccordionGroup>
        <List.Accordion title="Q4. How long is one cycle?" id="2" titleStyle={{color:'black'}} style={{backgroundColor:'white'}} id="4">
         <Text style={styles.FAQtext}>1 hour from the moment you entered the OTP.</Text>
          <Divider/>
        </List.Accordion>
        </List.AccordionGroup>
        <Divider/> */}
    </List.Accordion>
    
  
  <Divider/>
    
    </List.AccordionGroup>
        </View>
        
            </ScrollView>
      </SafeAreaView>
      </Provider>
    )
  }



const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'#edf2f2'
},

  userInfoSection: {
    paddingHorizontal:30,
    marginBottom: 25,
  },
  title:{
    fontSize: 14,
    fontWeight: 'bold',
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
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderTopColor: 'white',
    borderTopWidth: 1,
    flexDirection:'row',
    height: 100,
  },
  infoBox:{
    width:'50%',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
   
    backgroundColor:'#f6fff8'
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
  text:{
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 23.5,
    color: "black",
  },
  FAQtext:{
    backgroundColor:'white',
    flex:1,
    fontStyle: 'italic',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
   
   
    paddingBottom:250,
},
TextInput: {
 
  marginLeft: 10,
  fontStyle:'italic',
},
  
});


  