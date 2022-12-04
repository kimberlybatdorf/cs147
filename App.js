import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List, ImageBackgroundBase } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import UpdatesTab from "./UpdatesTab";




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
            <Text style={styles.screenText}>Analytics</Text>
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

            return <Image source={iconSource} style= {{height: 64, width: 64}}  />;
          }
        })}>
            
            

        <Tab.Screen options={{headerShown: false}} name="Updates" component={UpdatesTab} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
          </Tab.Navigator>
          </NavigationContainer>
        );


}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#B3B3B3',
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