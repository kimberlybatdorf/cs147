import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button } from "react-native";
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


function UpdatesHomeScreen() {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenText}>Updates Screen</Text>

        <Pressable onPress ={() => navigation.navigate('CreateNewPostScreen')}>
          <Ionicons name="add-circle-outline" size={32} color="green" />
        </Pressable>
        <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1120')}>
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
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        
      <Grid>
        <Col style={styles.gridCol}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1120')}>
              <Text style={{ fontSize: 30}}>11/20</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1123')}>
              <Text style={{ fontSize: 30}}>11/23</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1126')}>
              <Text style={{ fontSize: 30}}>11/26</Text>
            </Pressable>
          </Row>
        </Col>
        
        <Col style={styles.gridCol}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1121')}>
              <Text style={{ fontSize: 30}}>11/21</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1124')}>
              <Text style={{ fontSize: 30}}>11/24</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1127')}>
              <Text style={{ fontSize: 30}}>11/27</Text>
            </Pressable>
          </Row>
        </Col>

        <Col style={styles.gridCol}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1122')}>
              <Text style={{ fontSize: 30}}>11/22</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1125')}>
              <Text style={{ fontSize: 30}}>11/25</Text>
            </Pressable>
          </Row>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1128')}>
              <Text style={{ fontSize: 30}}>11/28</Text>
            </Pressable>
          </Row>
        </Col>
        
      </Grid>
    
      </SafeAreaView>
    );
  }

  function CreateNewPostScreen() {
    const [text, setText] = useState('');
    const [saved, savePost] = useState(false);
    const navigation = useNavigation();
    const onSavePress = () => savePost(true);
    const [checked1, check1] = useState(false);
    const [checked2, check2] = useState(false);
    const [checked3, check3] = useState(false);
    const [checked4, check4] = useState(false);
    const [checked5, check5] = useState(false);
    const [checked6, check6] = useState(false);
    const [checked7, check7] = useState(false);
    const [checked8, check8] = useState(false);
    const [checked9, check9] = useState(false);
    const [checked10, check10] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 12</Text>
          <Image style={{marginTop: 3, left: 100, top: -5}} source={images.unlockedIcon}/>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 20}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check1(true)}} disableBuiltInState={saved} isChecked={checked1}/>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check2(true)}} disableBuiltInState={saved} isChecked={checked2} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check3(true)}} disableBuiltInState={saved} isChecked={checked3} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check4(true)}} disableBuiltInState={saved} isChecked={checked4} />
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check5(true)}} disableBuiltInState={saved} isChecked={checked5} />
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, top: 40, alignSelf: 'center', width: '96%', paddingBottom: 15}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check6(true)}} disableBuiltInState={saved} isChecked={checked6}/>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check7(true)}} disableBuiltInState={saved} isChecked={checked7}/>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check8(true)}} disableBuiltInState={saved} isChecked={checked8}/>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check9(true)}} disableBuiltInState={saved} isChecked={checked9}/>
          <BouncyCheckbox size={60} fillColor='green' onPress={(isChecked) => {check10(true)}} disableBuiltInState={saved} isChecked={checked10}/>
        </View>
        <View  
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingLeft: 30,
            paddingRight: 30
        }}>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', top: 60, borderRadius: 7, width: '96%', alignSelf: 'center', height: 260}}>
          <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
          <TextInput
            style={{fontStyle:'italic', borderWidth: 12, height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}
            placeholder="How are you feeling today? In what ways do you need support? What have you accomplished today?"
            placeholderTextColor='#E5E1E5'
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            multiline={true}
            editable={saved ? false : true}
          />
          <Image source={images.micIcon} style={{left: 350, top: -45}}/>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={onSavePress}> 
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }



  function MoreInformationScreen1120() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 20</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1121() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 21</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>today was a pretty good day &#128522; i didn't have to take a ton of breaks while doing hw and didn't find myself needing naps throughout the day</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 25}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1122() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 22</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Today didn't really feel special or anything &#128533; i woke up with a pretty bad headache but then it went away... i also felt pretty upset because i couldn't go out with everyone  </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1123() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 23</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>i feel like people don't understand how concussions work &#128577; it's been really stressful having to stay inside most days - but i'm trying to understand that that's the only way i can heal</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1124() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 24</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>i got a lot of sleep last night which was honestly really nice - my energy level feels better and i've gotten to talk more about how my concussion has affected me w everyone</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 25}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 20}}>Mood</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
        }}>
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1125() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>  
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 25</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1126() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 26</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1127() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 27</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1128() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
          <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 42, color: '#FFFFFF', left: 70}}>November 28</Text>
        </View>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>Feeling a bit tired today, but better than yesterday. Didn't have trouble looking at the computer but didn't feel up for socializing</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 30}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -5}}>Fatigue</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 5}}>Nausea</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 10}}>Dizziness</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 7}}>Headache</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 3}}>Eye Strain</Text>
        </View>
        </View>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 50, width: '96%'}}>
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
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 2}}>Happy</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF'}}>Stressed</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: 0}}>Satisfied</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -4}}>Isolated</Text>
          <Text style={{fontSize: 12, color: '#FFFFFF', left: -3}}>Hopeful</Text>
        </View>
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
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1120" component={MoreInformationScreen1120}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1121" component={MoreInformationScreen1121}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1122" component={MoreInformationScreen1122}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1123" component={MoreInformationScreen1123}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1124" component={MoreInformationScreen1124}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1125" component={MoreInformationScreen1125}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1126" component={MoreInformationScreen1126}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1127" component={MoreInformationScreen1127}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1128" component={MoreInformationScreen1128}/>
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
      },
    gridRow:{
      borderWidth: 1,
    },
    gridCol: {
      borderWidth: 0.5,
        color: '#FFFFFF'
    },
    saveButton:{
      marginRight:40,
      marginLeft:40,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'green',
      borderRadius:15,
      top: 70
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