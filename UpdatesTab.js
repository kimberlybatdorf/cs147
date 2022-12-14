import React, { useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Col, Row, Grid } from "react-native-easy-grid";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Update from './Update';
import { supabase } from './Supabase';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


function UpdatesHomeScreen() {
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container} >
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
      <View style={{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: "space-between"
      }}>
        <Image 
          source={images.icon}
          style={{
            left: 6,
            top: -7
          }}
        />
        <Text style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold', top: -6, left: 12}}>Recovery Grow</Text>
        <Image 
          source={images.profileIcon}
          style={{
            top: -5,
            left: 20
          }}
        />
      </View>
      <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center',
        marginBottom: 20
      }}/>
    <ScrollView style={styles.scrollView}>
      <Grid>
        <Col style={styles.gridCol}>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1128')}>
              <Text style={styles.gridText}>11/28</Text>
            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1125')}>
              <Text style={styles.gridText}>11/25</Text>

            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1122')}>
              <Text style={styles.gridText}>11/22</Text>
            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1119')}>
              <Text style={styles.gridText}>11/19</Text>
            </Pressable>
          </Row>
          </View>
        </Col>
        
        <Col style={styles.gridCol}>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1127')}>
              <Text style={styles.gridText}>11/27</Text>
            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1124')}>
              <Text style={styles.gridText}>11/24</Text>
            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1121')}>
              <Text style={styles.gridText}>11/21</Text>
            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1118')}>
              <Text style={styles.gridText}>11/18</Text>

            </Pressable>
          </Row>
          </View>
        </Col>

        <Col style={styles.gridCol}>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1126')}>
              <Text style={styles.gridText}>11/26</Text>


            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1123')}>
              <Text style={styles.gridText}>11/23</Text>


            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1120')}>
              <Text style={styles.gridText}>11/20</Text>


            </Pressable>
          </Row>
          </View>
          <View style={{height: 200}}>
          <Row style={styles.gridRow}>
            <Pressable onPress ={() => navigation.navigate('MoreInformationScreen1117')}>
              <Text style={styles.gridText}>11/17</Text>

            </Pressable>
          </Row>
          </View>
        </Col>        
      </Grid>
      </ScrollView>
      <Pressable onPress ={() => navigation.navigate('CreateNewPostScreen')} style={{
        alignSelf: 'flex-end',
        left: -2,
        top: -30
      }}>
          {/* <Ionicons name="add-circle-outline" size={32} color="green" /> */}
          <Image source={images.plus}/>
      </Pressable>
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

    const [journal, setJournal] = React.useState('');

    const [fatigue, setFatigue] = React.useState(false);
    const [data, setPosts] = React.useState('');

    const getPosts = async () => {
      try{
      const { data, error } = await supabase.from('PostInformation').select('*');
      console.log("supabase getPosts data", data);
      console.log("Supabase err", error);
      } catch(err){
      console.error(err)
    }
  }

  const addPost = async () => {
    try {
      
      console.log("fatigue", {checked1})
      console.log("nausea", {checked2})
      console.log("dizziness", {checked3})
      console.log("headache", {checked4})
      console.log("eyeStrain", {checked5})
      console.log("happy", {checked6})
      console.log("stressed", {checked7})
      console.log("satisfied", {checked8})
      console.log("isolated", {checked9})
      console.log("hopeful", {checked10})
      console.log("journal entry", journal)
      const { error } = await supabase.from('PostInformation').insert({
        fatigue: checked1,
        nausea: checked2,
        dizziness: checked3,
        headache: checked4,
        eyeStrain: checked5,
        happy: checked6,
        stressed: checked7,
        satisfied: checked8,
        isolated: checked9, 
        hopeful: checked10,
        journalWrittenEntry: journal,
        
      });
      console.log("supabase add post function", error);
    } catch (err) {
      console.error(err);
    }
  }

  React.useEffect(() => {
    getPosts();
  }, []);

  

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 12</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', alignSelf: 'center', borderRadius: 7, paddingBottom: 15, top: 20}}>
        <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Symptoms</Text>
        <View  
          style={{
            flexDirection: "row",
            height: 100,
            padding: 15,
            justifyContent: 'space-evenly'
        }}>
          <BouncyCheckbox size={60} fillColor='green' onPress={ (isChecked) => {check1(true)}}  disableBuiltInState={saved} isChecked={checked1} />
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
            value={journal}
            onChangeText={setJournal}
            multiline={true}
            editable={saved ? false : true}
          />
          <Image source={images.micIcon} style={{left: 350, top: -45}}/>
        </View>
        <Pressable style={styles.saveButton} onPress={() => {
          addPost();
          navigation.navigate('AllUpdatesGrid');
        }}>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  function MoreInformationScreen1117() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 17</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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


  function MoreInformationScreen1118() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 18</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>i honestly feel like i haven't been the best at making time for myself to rest... feeling very tired and should probably be making more time for myself</Text>
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


  function MoreInformationScreen1119() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 19</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>today was a good day!!! felt productive and also got to spend meaningful time with friends</Text>
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



  function MoreInformationScreen1120() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 20</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 21</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 22</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 23</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 24</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 25</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>today honestly almost felt normal... got to see some friends and even though i left early i still am really happy that i got to spend time with others even for just a little bit</Text>
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
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
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

  function MoreInformationScreen1126() {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
       <View style={{flexDirection: "row", alignContent: 'center', alignItems: 'center'}}>
        <Pressable onPress ={() => navigation.navigate('AllUpdatesGrid')}>
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 26</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}></Text>
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
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 27</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}></Text>
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
            <Image style={{left: 20, top: -2}} source={images.backArrow}/>
          </Pressable>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF', left: 105, top: -3}}>November 28</Text>
          <Image style={{marginTop: 3, left: 170, top: -6}} source={images.unlockedIcon}/>
        </View>
        <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 5
      }}/>
        <View style={{backgroundColor: '#404040', borderRadius: 7, width: '96%', alignSelf: 'center', height: 290, top: 10}}>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 32, color: '#FFFFFF', paddingLeft: 20, paddingTop: 10}}>Journal</Text>
            <Image style={{marginTop: 3, left: 8}} source={images.speakerIcon}/>
          </View>
          <View style={{borderWidth: 1, marginLeft: 18, marginTop: 8, borderRadius: 15,width: '90%',padding: 5,backgroundColor: '#313033', borderColor: '#313033'}}>
            <Text style={{height: 180, marginLeft: 15, marginRight: 15, marginTop: 15, borderRadius: 15, borderColor: '#313033', backgroundColor: '#313033', color: '#FFFFFF', fontSize: 18}}>the past few days were pretty busy and i'm honestly pretty winded from it all and am just taking time to catch up on rest</Text>
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
          <BouncyCheckbox size={60} fillColor='green' disableBuiltInState />
          <BouncyCheckbox size={60} fillColor='green' isChecked disableBuiltInState />
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
        {/* <Stack.Screen options={{headerShown: false}} name="UpdatesHomeScreen" component={UpdatesHomeScreen}/> */}
        <Stack.Screen options={{headerShown: false}} name="CreateNewPostScreen" component={CreateNewPostScreen}/>
        <Stack.Screen options={{headerShown: false}} name="AllUpdatesGrid" component={AllUpdatesGrid}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1117" component={MoreInformationScreen1117}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1118" component={MoreInformationScreen1118}/>
        <Stack.Screen options={{headerShown: false}} name="MoreInformationScreen1119" component={MoreInformationScreen1119}/>
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
      borderWidth: 0.5,
      borderColor:'#86CC9B',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    gridCol: {
      borderWidth: 0.5,
      borderColor:'#86CC9B',
      borderRadius: 15,
    },
    gridText:{
      color: "white",
      fontSize: 30,
    },
    gridPic: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft:35, 
      marginRight: 15, 
      marginTop: 25, 
      borderRadius: 15, 
    },
    scrollView: {
      backgroundColor: '#464646',
      width:'90%',
      alignSelf: 'center',
    },
    gridJournal: {
      borderWidth: 1,
      backgroundColor: '#313033',
      color: '#FFFFFF',
      marginLeft: 15, 
      marginRight: 15, 
      marginTop: 15, 
      borderRadius: 15, 
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
        fontWeight: 'bold'
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