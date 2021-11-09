import * as React from 'react';
import { StyleSheet, View ,ScrollView, SafeAreaView} from 'react-native';
import { Colors,Divider,Dialog,Portal,Provider,Paragraph,Button,Avatar, Title, Caption, Text, List,TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { useState,useEffect } from 'react';
//possible user profile settings such as display name etc? or set favourite hall?
const Getvalue = (props) => {
  return (
    <View style={styles.infoBox}>
      <Title>{props.value} Credit</Title>
      <Caption> Wallet</Caption>
    </View>
  );
}
export default function SettingsScreen(){
  const db = firebase.firestore()
  const[credits,setCredits] = useState([])
  useEffect(()=>{
    //App Component will run once and never again
    db.collection('credits').onSnapshot(snapshot =>(setCredits(snapshot.docs.map(doc =>doc.data()))))
  },[])
    return(
      <Provider>
      <SafeAreaView style = {styles.container}>
        <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row', marginTop: 15}}>
            <Avatar.Image
            source={{uri:'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}}
            size={80} />
            <View styles={{marginLeft: 20}}>
               <Title style={styles.title,{marginTop:15,marginBottom: 5,}}>Chris Evans</Title>
               <Caption style={styles.caption}>@cevans_</Caption>
            </View>
        </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name='phone' color='#777777' size={20}/>
            <Text style={{color:'#777777',marginLeft:20}}>91234567</Text>
          </View>
          <View style={styles.row}>
            <Icon name='email' color='#777777' size={20}/>
            <Text style={{color:'#777777',marginLeft:20}}>c.evans@xyz.com</Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          
          <View style={[styles.infoBox, {
          borderRightColor:'#dddddd',
          borderRightWidth: 1}]
          }>
            
            <View>
      {credits.map(({value}) =>(
        <Getvalue value={value}/>
      ))}
    </View>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          
        {/* <Button title='Your Favourites' onPress={showDialogPayment}>
      
      <View style={styles.menuItem}>
            <Icon name = 'credit-card' color = {Colors.blue500} size={25}></Icon>
            <Text style = {styles.menuItemText}>Payment Method</Text>
          </View> 
          
          <Portal>
          <Dialog visible={visiblepayment} onDismiss={hideDialogPayment}>
            
            
            <Dialog.Title >Please choose your payment method:</Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={()=>alert('CC')}>Cards</Button>
              <Button onPress={()=>alert('BA')}>Banking App</Button>
              <Button onPress={()=>alert('DBSPL')}>DBS Paylah!</Button>
              <Button onPress={()=>alert('GP')}>GooglePay</Button>
              <Button onPress={hideDialogPayment}>Dismiss</Button>
              </View>
            </Dialog.Actions>
            
        
        
          </Dialog>
          
        </Portal>
        
        </Button> */}
          {/* <Button onPress={showDialogFav}>
            <View style={styles.menuItem}>
              <Icon name = 'heart-outline' color = {Colors.blue500} size={25}></Icon>
              <Text style = {styles.menuItemText}>Your Favourites</Text>
            </View>
            <Portal>
          <Dialog visible={visiblefav} onDismiss={hideDialogFav}>
            
            
            <Dialog.Title ></Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={()=>alert('faved saraca')}>Saraca Hall</Button>
              <Button onPress={()=>alert('faved tama')}>Tamarind Hall</Button>
              
              <Button onPress={hideDialogFav}>Dismiss</Button>
              </View>
            </Dialog.Actions>
            
        
        
          </Dialog>
          
        </Portal>
          </Button> */}
    <List.AccordionGroup>
    <List.Accordion title="PAYMENT METHODS" titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="credit-card" color={Colors.blue500}/>}
    id="1">
    <List.Item  title='Credit/Debit Card' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='Google Pay' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='DBS Paylah!' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    <List.Item  title='PayNow' onPress={()=>alert('move to external payment screen')}/>
    <Divider/>
    </List.Accordion>
    
    </List.AccordionGroup>
    <List.AccordionGroup>
    <List.Accordion title="FREQUENTLY ASKED" titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="folder" color={Colors.blue500}/>}
    id="1">
      <List.AccordionGroup>
        <List.Accordion title="Q1.How does Pesula works?" id="2">
         <List.Item title=".................................." />
          <Divider/>
        </List.Accordion>
        </List.AccordionGroup>
        <List.AccordionGroup>
        <List.Accordion title="Q2.How to book?" id="2">
         <List.Item title=".................................." />
          <Divider/>
        </List.Accordion>
        </List.AccordionGroup>
        <List.AccordionGroup>
        <List.Accordion title="Q3.Is there refund?" id="2">
         <List.Item title=".................................." />
          <Divider/>
        </List.Accordion>
        </List.AccordionGroup>
    </List.Accordion>
    
  </List.AccordionGroup>
  <List.AccordionGroup>
    <List.Accordion title="YOUR FAVOURITES" titleStyle={styles.menuItemText}
    left={props => <List.Icon {...props} icon="heart" color={Colors.blue500}/>}
    id="2"><List.Item
    title="nothing to be found"
  /></List.Accordion>
    
    </List.AccordionGroup>
          {/* <Button onPress={()=>alert('Dialog of FAQ')}>
            <View style={styles.menuItem}>
              <Icon name = 'account-check-outline' color = '#FF6347' size={25}></Icon>
              <Text style = {styles.menuItemText}>Frequently Asked Questions</Text>
            </View>
          </Button> */}
        </View>
            </ScrollView>
      </SafeAreaView>
      </Provider>
    )
  }



const styles = StyleSheet.create({
  container: {
    flex:1
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
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection:'row',
    height: 100,
  },
  infoBox:{
    width:'50%',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  menuWrapper:{
    marginTop:10
  },
  menuItem:{
    
    paddingVertical:15,
    paddingHorizontal: 30,
   
  },
  menuItemText:{
    color:'#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  }
});


  