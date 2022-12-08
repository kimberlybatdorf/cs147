import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List, ImageBackgroundBase, ScrollView, TextInput } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import UpdatesTab from "./UpdatesTab";
import CommunityTab from "./CommunityTab";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from 'react';

    function UpdatesScreen() {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.screenText}>Updates Screen</Text>
            <Image source={images.updatesFilled}/>
          </SafeAreaView>
        );
      }

    function AnalyticsScreen() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: "space-between",
      }}>
        <Image 
          source={images.icon}
          style={{
            top: -7,
            left: -15
          }}
        />
        <Text style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold', top: -6, left: -10}}>Recovery Grow</Text>
        <Image 
          source={images.profileIcon}
          style={{
            top: -5,
            left: -1
          }}
        />
      </View>
      <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center'
      }}/>
          <ScrollView>
            <View style={{backgroundColor:'#464646', flexDirection: 'column', alignItems: 'center', top: -40}}>
              <View style={{backgroundColor: '#404040', borderRadius: 7, top: 65, paddingBottom: 20, paddingLeft: 2, paddingRight: 2, width: '97%'}}>
                <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 10, alignSelf: 'center', fontWeight: 'bold'}}>Physical Patterns</Text>
                <Text style={{fontSize: 18, color: '#FFFFFF', paddingTop: 10, paddingLeft: 9}}>A summary of your physical symptoms over the past three months.</Text>
                <Image style={{marginTop: 20}} source={images.physicalGraph}/>
              </View>
              <View style={{backgroundColor: '#404040', borderRadius: 7, top: 85, paddingBottom: 20, paddingLeft: 2, paddingRight: 2, width: '97%'}}>
                <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 20, fontWeight: 'bold', alignSelf: 'center'}}>Mental Patterns</Text>
                <Text style={{fontSize: 18, color: '#FFFFFF', paddingTop: 10, paddingLeft: 9}}>A summary of your mental wellbeing over the past three months.</Text>
                <Image style={{marginTop: 20}} source={images.mentalGraph}/>
              </View>
              <View style={{backgroundColor: '#404040', borderRadius: 7, top: 105, paddingBottom: 20, paddingLeft: 2, paddingRight: 2, width: '97%'}}>
              <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 20, paddingBottom: 10, fontWeight: 'bold', alignSelf: 'center'}}>One Month Ago</Text>
              <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 10, alignSelf: 'flex-start', paddingLeft: 20, fontWeight: 'bold'}}>You said...</Text>
              <View style={{alignSelf: 'flex-start', borderWidth: 1, marginTop: 8, borderRadius: 15, width: '90%', padding: 5, backgroundColor: '#313033', borderColor: '#313033', top: 5, left: 20}}>
                <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>
                  Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing
                </Text>
              </View>
              <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 25, alignSelf: 'flex-start', paddingLeft: 20, fontWeight: 'bold'}}>You felt...</Text>
              <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 5, alignSelf: 'flex-start', paddingLeft: 20}}>Symptoms</Text>
              <View style={{flexDirection: "row",height: 100, padding: 15, justifyContent: 'space-evenly'}}>
                <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: -55}}>Fatigue</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: -20}}>Nausea</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: 30}}>Headache</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: 48}}>Eye Strain</Text>
              </View>
              <Text style={{fontSize: 20, color: '#FFFFFF', paddingTop: 25, alignSelf: 'flex-start', paddingLeft: 20}}>Mood</Text>
              <View style={{flexDirection: "row",height: 100, padding: 15, justifyContent: 'space-evenly'}}>
                <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' isChecked='true' disableBuiltInState />
                <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: -67}}>Happy</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: -33}}>Stressed</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Satisfied</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: 23}}>Isolated</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', left: 53}}>Hopeful</Text>
              </View>
            </View>
            </View>
          </ScrollView>
          </SafeAreaView>
        );
      }

      function CommunityScreen() {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.screenText}>Community Screen</Text>
          </SafeAreaView>
        );
      }

      const Tab = createBottomTabNavigator();
export default function App() {

 

    return(
        <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeBackgroundColor: '#616161',
                inactiveBackgroundColor: '#616161'
              }}
              screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconSource;
                if (route.name === 'Updates') {
                  iconSource = focused ? images.updatesFilled : images.updatesOutline;
                } else if (route.name === 'Analytics') {
                  iconSource = focused ? images.analyticsFilled : images.analyticsOutline;
                } else if (route.name === 'Community') {
                  iconSource = focused
                    ? images.communityFilled
                    : images.communityOutline;
                }
                // return <Image source={iconSource} style= {{height: 64, width: 64}}  />;
                return <Image source={iconSource} />;
              }
            })}>
        <Tab.Screen options={{headerShown: false}} name="Updates" component={UpdatesTab} />
        <Tab.Screen options={{headerShown: false}} name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen options={{headerShown: false}} name="Community" component={CommunityTab} />
          </Tab.Navigator>
          </NavigationContainer>
        );


}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#464646',
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
      },
    
  
  });