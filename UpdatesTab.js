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
    return (
      <SafeAreaView style={styles.container}>
        {/* BACK ARROW BUTTON */}
        <Text style={{alignSelf: 'center', fontSize: 42, color: '#FFFFFF', marginTop: 12}}>DATE</Text>
        <Text style={{fontSize: 32, color: '#FFFFFF', padding: 15}}>Symptoms</Text>
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
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Eye strain</Text>
        </View>
        <Text style={{fontSize: 32, color: '#FFFFFF', padding: 15}}>Mood</Text>
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
        <Text style={{fontSize: 32, color: '#FFFFFF', padding: 15}}>Journal</Text>
        <TextInput
          style={{borderWidth: 12, height: 150, margin: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}
          placeholder="How are you feeling today? In what ways do you need support? What have you accomplished today?"
          placeholderTextColor='#E5E1E5'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          multiline={true}
        />
        <TouchableOpacity style={styles.saveButton}> 
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        {/* MICROPHONE ICON */}
      </SafeAreaView>
    );
  }



  function MoreInformationScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>More Information about this post</Text>
        <Image source={images.updatesFilled}/>
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
        <Stack.Screen name="CreateNewPostScreen" component={CreateNewPostScreen}/>
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
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'green',
      borderRadius:15,
    },
    saveText:{
        color:'#ffffff',
        textAlign:'center',
    }
  
  });