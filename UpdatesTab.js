import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';


function UpdatesHomeScreen() {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Updates Screen</Text>

        <Pressable onPress ={() => navigation.navigate('CreateNewPostScreen')}>
          <Ionicons name="add-circle-outline" size={32} color="green" />
        </Pressable>
        
        <Pressable onPress ={() => navigation.navigate('MoreInformationScreen')}>
          <Ionicons name="add-circle-outline" size={32} color="green" />
        </Pressable>

        <Image source={images.updatesFilled}/>
      </SafeAreaView>
    );
  }

  function AllUpdatesGrid() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Your Updates</Text>
        <Image source={images.updatesFilled}/>
      </SafeAreaView>
    );
  }

  function CreateNewPostScreen() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('UpdatesHomeScreen')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 12</Text>
          <Image style={{marginTop: 3, left: 100, top: -5}} source={images.unlockedIcon}/>
        </View>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Eye Strain</Text>
        </View>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {}} />
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Hopeful</Text>
        </View>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Journal</Text>
        <TextInput
          style={{fontStyle:'italic', borderWidth: 12, height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}
          placeholder="How are you feeling today? In what ways do you need support? What have you accomplished today?"
          placeholderTextColor='#E5E1E5'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          multiline={true}
        />
        <Image source={images.micIcon} style={{left: 365, top: -60}}/>
        <TouchableOpacity style={styles.saveButton}> 
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }



  function MoreInformationScreen() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('UpdatesHomeScreen')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 20</Text>
        </View>
         <View style={{flexDirection: "row", top: 5}}>
          <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Journal</Text>
          <Image style={{marginTop: 3, left: 8, top: 10}} source={images.speakerIcon}/>
        </View>
        <View style={{borderWidth: 1,
        marginLeft: 18,
        marginTop: 8, 
       borderRadius: 15,
       width: '80%',
       padding: 5,
       backgroundColor: '#313033',
       borderColor: '#313033', top: 5}}>
          <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
        </View>
<Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 25}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Eye Strain</Text>
        </View>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Hopeful</Text>
        </View>
      </SafeAreaView>
    );
  }

  function SharePostScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Share this post</Text>
        <Image source={images.updatesFilled}/>
      </SafeAreaView>
    );
  }

const Stack = createStackNavigator();
export default function UpdatesTab(){
    const navigation = useNavigation();
    return(
        
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="UpdatesHomeScreen" component={UpdatesHomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name="CreateNewPostScreen" component={CreateNewPostScreen}/>
        <Stack.Screen options={{headerShown: false}} name="AllUpdatesGrid" component={AllUpdatesGrid}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen" component={MoreInformationScreen}/>
        <Stack.Screen options={{headerShown: false}} name="SharePostScreen" component={SharePostScreen}/>


    
    </Stack.Navigator>
    );

}


const styles = StyleSheet.create({
    container: {
      justifyContent: "flex-start",
      // alignItems: "flex-start",
      flex: 1,
      backgroundColor: '#464646'
    },
    button: {
      borderRadius: 99999,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonImage:{
      resizeMode: "contain",
      height: 50,
      width: 50,
    },
    screenText: {
        fontSize: 32,
        color: '#FFFFFF'
    },
    saveButton:{
      marginRight:40,
      marginLeft:40,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'green',
      borderRadius:15,
      top: -10,
    },
    saveText:{
        color:'#ffffff',
        textAlign:'center',
    },
    plaeceHolderText: {
      fontStyle:'italic', 
      borderWidth: 12, 
      height: 180, 
      marginLeft: 15, 
      marginRight: 15, 
      marginTop: 15, 
      borderRadius: 15, 
      borderColor: '#313033', 
      backgroundColor: '#313033', 
      color: '#E5E1E5', 
      fontSize: 18
    },
    inputText: {
      fontStyle: 'normal',
      borderWidth: 12, 
      height: 180, 
      marginLeft: 15, 
      marginRight: 15, 
      marginTop: 15, 
      borderRadius: 15, 
      borderColor: '#313033', 
      backgroundColor: '#313033', 
      color: '#FFFFFF', 
      fontSize: 18
    }
  
  });