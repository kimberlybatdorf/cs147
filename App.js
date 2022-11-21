import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';




    function UpdatesScreen() {
        return (
          <SafeAreaView>
            <Text>Updates Screen</Text>
          </SafeAreaView>
        );
      }


      function AnalyticsScreen() {
        return (
          <SafeAreaView>
            <Text>Analytics</Text>
          </SafeAreaView>
        );
      }

      function CommunityScreen() {
        return (
          <SafeAreaView>
            <Text>Community Screen</Text>
          </SafeAreaView>
        );
      }

      const Tab = createBottomTabNavigator();
export default function App() {

      //Starting on navigation, will look at this chunk of code later
//       <NavigationContainer>
//       <Tab.Navigator>
//       
//    screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused }) => {
//           }
//    })}
 
//     </Tab.Navigator>
//     </NavigationContainer>


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
    
  
  });