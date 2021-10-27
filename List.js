import 'firebase/firestore';
import * as React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { List,FAB, Modal,Portal,Provider,Button,Dialog,Paragraph } from 'react-native-paper'
import { checkbookingavailability } from './Screens/HomeScreen';
import 'firebase/firestore';
const MyComponent = () => {

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
   <View style={{flexDirection:'row'}}>
  <List.AccordionGroup style = {{flex:1}}>
    <List.Accordion title="Saraca Hall" id="1">
        <List.AccordionGroup>
        <List.Accordion title="Level 6" id="2">
        <List.Item title= "Sophie" onPress={showDialogSophie}/>
        <Portal>
          <Dialog visible={visiblesophie} onDismiss={hideDialogSophie}>
            
            
            <Dialog.Title >Please choose your timeslot:</Dialog.Title>
            <Dialog.Actions>
              <View style={{flex:1}}>
              <Button onPress={()=>alert('booked 1-2pm')}>1-2pm</Button>
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
              label: 'Star',
              onPress: () => console.log('Pressed star'), //update favourites state?
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
          
        <List.Item title= "Bobby" onPress={showDialogBobby}/>
        <Portal>
          <Dialog visible={visiblebobby} onDismiss={hideDialogBobby}>
            
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
    <List.AccordionGroup>
        <List.Accordion title="Level 9" id="3">
        <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
        </List.Accordion>
    </List.AccordionGroup>
    </List.Accordion>
    <List.Accordion title="Tamarind Hall" id="4">
    <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
    </List.Accordion>
  
  </List.AccordionGroup>
  </View> 
  </Provider>
  )
};

export default MyComponent;