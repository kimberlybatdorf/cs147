import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


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
        <Text style={styles.screenText}>DATE</Text>
        <Text style={styles.screenText}>Creating New Post</Text>
        {/* <Image source={images.updatesFilled}/> */}
        <Text style={styles.screenText}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
        </View>
        <Text style={styles.screenText}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
          <BouncyCheckbox onPress={(isChecked) => {}} />
        </View>
        <Text style={styles.screenText}>Journal</Text>
        <TextInput
          style={{height: 40, backgroundColor: '#313033', color: '#FFFFFF'}}
          placeholder="How are you feeling today? In what ways do you need support? What have you accomplished today?"
          placeholderTextColor='#E5E1E5'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {/* MICROPHONE ICON */}
        {/* SAVE BUTTON */}
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
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
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
      }
  
  });