import * as React from 'react';
import { Settings, StyleSheet, View , SafeAreaView} from 'react-native';
import { Dialog,Portal,Provider,Paragraph,Button,Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { checkbookingavailability } from './HomeScreen';
//possible user profile settings such as display name etc? or set favourite hall?
export default function SettingsScreen(){
  const [visible, setVisible] = React.useState(false);
  const showDialog  = () => setVisible(true);
  const hideDialog = () => setVisible(false);
    return(
      <Provider>
      <SafeAreaView style = {styles.container}>
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
            
            <Caption>wallet</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <Button title='Your Favourites' onPress={{showDialog}}>
          <Portal>
            
          <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.Content>
            {/* <View style={styles.menuItem}>
              <Icon name = 'heart-outline' color = '#FF6347' size={25}></Icon>
              <Text style = {styles.menuItemText}>Your Favourites</Text>
            </View> */}
            </Dialog>
            </Portal>
          </Button>
          <Button onPress={()=>alert('Choose a payment method')}>
            <View style={styles.menuItem}>
              <Icon name = 'credit-card' color = '#FF6347' size={25}></Icon>
              <Text style = {styles.menuItemText}>Payment Method</Text>
            </View>
          </Button>
          <Button onPress={()=>alert('Dialog of FAQ')}>
            <View style={styles.menuItem}>
              <Icon name = 'account-check-outline' color = '#FF6347' size={25}></Icon>
              <Text style = {styles.menuItemText}>Frequently Asked Questions</Text>
            </View>
          </Button>
        </View>

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
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal: 30,
  },
  menuItemText:{
    color:'#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26
  }
});


  