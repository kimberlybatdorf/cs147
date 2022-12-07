import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, List, ImageBackgroundBase, ScrollView, TextInput } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import UpdatesTab from "./UpdatesTab";
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


    function forumPost() {
      return (
        <SafeAreaView>
          
        </SafeAreaView>
      );
    }

    function AnalyticsScreen() {
        return (
          <ScrollView>
            <View style={{backgroundColor:'#464646', flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 70, fontWeight: 'bold'}}>Physical Patterns</Text>
              <Text style={{fontSize: 18, color: '#FFFFFF', paddingTop: 10, paddingLeft: 9}}>A summary of your physical symptoms over the past three months.</Text>
              <Image style={{marginTop: 20}} source={images.physicalGraph}/>
              <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 30, fontWeight: 'bold'}}>Mental Patterns</Text>
              <Text style={{fontSize: 18, color: '#FFFFFF', paddingTop: 10, paddingLeft: 9}}>A summary of your mental wellbeing over the past three months.</Text>
              <Image style={{marginTop: 20}} source={images.mentalGraph}/>
              <Text style={{fontSize: 32, color: '#FFFFFF', paddingTop: 30, paddingBottom: 10, fontWeight: 'bold'}}>One Month Ago</Text>
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
          </ScrollView>
        );
      }

      function CommunityScreen() {
        const [text, setText] = useState('');
        return (
          <SafeAreaView style={styles.container}>
            <View style={{
              flexDirection: 'row',
              // top: -50,
              width: '90%',
              alignItems: 'center',
              justifyContent: "space-between"
            }}>
              <Image 
                source={images.icon}
                style={{
                  left: -10,
                  top: -7
                }}
              />
              <Text style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold', left: -5, top: -6}}>Recovery Grow</Text>
              <Image 
                source={images.profileIcon}
                style={{
                  top: -5
                }}
              />
            </View>
            <View style={{
              borderColor: '#616161',
              borderBottomWidth: 1,
              width: '97%',
            }}/>
            <View 
              style={{
                flexDirection: 'row',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#404040',
                borderRadius: 7,
                width: '97%',
                height: 120,
                alignSelf: 'center',
                top: 8
              }}
            >
              <Image 
                source={images.profileIcon}
                style={{left: 8}}
              />
              <TextInput
                style={{
                  fontStyle:'italic', 
                  borderWidth: 12, 
                  height: 100, 
                  width: '80%%', 
                  marginLeft: 15, 
                  marginRight: 15, 
                  marginTop: 15, 
                  borderRadius: 15, 
                  borderColor: '#313033', 
                  backgroundColor: '#313033', 
                  color: '#FFFFFF', 
                  top: -7,
                  fontSize: 18,
                  left: 5
                }}
                placeholder="Create new post..."
                placeholderTextColor='#E5E1E5'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                multiline={true}
              />            
            </View>
            <Image
              style={{
                top: -45,
                left: 160
              }}
              source={images.micIcon}
            />
            <View style={{
              borderColor: '#616161',
              borderBottomWidth: 1,
              width: '97%',
              top: -15
            }}/>
          <ScrollView
            style={{
              top: -10,
              width: '99%'
            }}
          >
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 15,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Mental Health
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 30,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Physical Health
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 45,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Mental Health
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 60,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Miscellaneous
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 75,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Physical Health
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            backgroundColor: '#404040',
            flexDirection: 'row',
            width: '97%',
            borderRadius: 7,
            top: 90,
            height: 130,
            alignSelf: 'center'
          }}>
            <Image source={images.profileIcon}
              style={{
                left: 15,
                // top: 10,
                alignSelf: 'center'
              }}
            />
            <View style={{
              left: 30,
              top: 10
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}>
                <View style={{
                  backgroundColor: 'green',
                  borderRadius: 7,
                  width: 130
                  }}>
                  <Text style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 16
                    }}>
                    Physical Health
                  </Text>
                </View>
                <Image 
                  source={images.smallSpeaker}
                  style={{
                    top: -6,
                    left: 4
                  }}
                />
              </View>
              <View style={{
                width: '90%'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20
                }}>
                  how to explain concussion symptoms to friends?
                </Text>
                <View style={{
                  backgroundColor: '#313033',
                  top: 10
                }}>
                  <Text style={{
                    color: 'white',
                    fontSize: 16
                  }}>
                    this is preview text.......
                  </Text>
                </View>
              </View>
            </View>
          </View>
          </ScrollView>
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
        <Tab.Screen options={{headerShown: false}} name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen options={{headerShown: false}} name="Community" component={CommunityScreen} />
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