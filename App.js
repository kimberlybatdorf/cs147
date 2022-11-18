import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {

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




    return(
        <SafeAreaView style={styles.container}>
            {/* TODO: Your code goes here */}
            <Text>check check one two three</Text>
            
          </SafeAreaView>
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