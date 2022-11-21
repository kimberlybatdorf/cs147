import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";




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
            tabBarOptions={{
                labelStyle: { fontSize: 14 },
              }}
            screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Updates') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Analytics') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Community') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={24} color="black" />;
          }
        })}>
            
            

        <Tab.Screen name="Updates" component={UpdatesScreen} />
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