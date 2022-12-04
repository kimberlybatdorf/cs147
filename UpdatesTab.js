import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List, ImageBackgroundBase } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import Grid from 'react-native-grid-component';
import React, { useState } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";



function UpdatesHomeScreen() {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Updates Screen</Text>
        <Pressable onPress ={() => navigation.navigate('CreateNewPostScreen')}>
          <Ionicons name="add-circle-outline" size={32} color="green" />
          </Pressable>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
          <Ionicons name="grid-outline" size={32} color="green" />
          </Pressable>
        <Image source={images.updatesFilled}/>
      </SafeAreaView>
    );
  }



  function AllUpdatesGrid() {
    return(
      <SafeAreaView>
        <Text>testing something</Text>
      <Grid>
        <Col style= {{backgroundColor: "pink"}}></Col>
        
        <Col style= {{backgroundColor: "red"}}></Col>
        
      </Grid>
      <Text>testing something</Text>
      </SafeAreaView>
    );
  }

  function CreateNewPostScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Creating New Post</Text>
        <Image source={images.updatesFilled}/>
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