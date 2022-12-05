import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import Grid from 'react-native-grid-component';
import { Col, Row, Grid } from "react-native-easy-grid";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Update ({id, date, journalEntry, imageUrl}) {
    const navigation = useNavigation();

    return(
    <SafeAreaView style={styles.container}>
        <Pressable onPress ={() => navigation.navigate('MoreInformationScreen')}>
              <Text style={styles.gridText}>{date}</Text>
              <Text style={styles.journalText}>{journalEntry}</Text>
              <Image style= {{height: 64, width: 64}} source ={{uri: imageUrl}}/>

            </Pressable>

    </SafeAreaView>
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
      },
    gridRow:{
      borderWidth: 1,
      borderColor:'#FFFFFF',
      height: 30,
    },
    gridCol: {
      borderWidth: 0.5,
       borderColor:'#FFFFFF',
    },
    gridText:{
      color: "white",
      fontSize: 30,
    },
    journalText:{
        color: "white",
        fontSize: 14,
    },
    scrollView: {
      flex: 1,
      backgroundColor: '#464646'

      //justifyContent: 'space-between',
    }
});