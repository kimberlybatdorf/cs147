import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function ForumPost() {
  return (
    <SafeAreaView>
      <Text>hi</Text>
    </SafeAreaView>
  );
}

function CommunityScreen() {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  return (
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
        <Text style={{fontSize: 30, color: '#FFFFFF', fontWeight: 'bold', top: -6, left: 10}}>Recovery Grow</Text>
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
          left: 360
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
        <Pressable onPress={() => navigation.navigate('ForumPost')}>
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
        </Pressable>
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

const Stack = createStackNavigator();
export default function CommunityTab(){
    const navigation = useNavigation();
    return(
        
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="CommunityScreen" component={CommunityScreen}/>
    </Stack.Navigator>
    );

}


const styles = StyleSheet.create({
    container: {
      justifyContent: "flex-start",
      // alignItems: "flex-start",
      flex: 1,
      backgroundColor: '#464646'
    }
});