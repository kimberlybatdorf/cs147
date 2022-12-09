import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Image, FlatList, List, ImageBackgroundBase, Button, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import images from "./assets/Images";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function ForumPost() {
  const [text, setText] = useState(''); 
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
        alignSelf: 'center'
      }}/>
      <View style={{
      backgroundColor: '#404040',
      flexDirection: 'row',
      width: '97%',
      borderRadius: 7,
      top: 15,
      height: 170,
      alignSelf: 'center'
    }}>
      <Image source={images.orange}
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
            borderRadius: 5,
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
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
            }}>
              I'm having a hard time explaining how difficult recovering from a concussion is... does anyone else feel this way?
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 30
      }}/>
    <View style={{
      backgroundColor: '#404040', 
      top: 40
    }}>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      alignItems: 'center',
    }}>
      <Image source={images.profileIcon} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                fontStyle:'italic', 
                borderWidth: 12, 
                height: 60, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
              }}
              placeholder="Add a reply..."
              placeholderTextColor='#E5E1E5'
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              multiline={true}
      />
    </View>
    <Pressable style={styles.saveButton1}>
        <Text style={styles.saveText}>Reply</Text>
    </Pressable>
    </View>
    {/* <Pressable style={styles.saveButton1}>
        <Text style={styles.saveText}>Post</Text>
    </Pressable> */}
    <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center',
        top: 50
      }}/>
      <ScrollView style={{top: 60}}>
      <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      alignItems: 'center',
      height: 185
    }}>
      <Image source={images.yellow} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 165, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="I really feel this. Honestly I just try to communicate as openly as possible and reassure my friends that I'm not actually flaking half the time and would love to hang out but simply need a lot of rest at the moment."
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 10,
      alignItems: 'center',
      height: 70
    }}>
      <Image source={images.blue} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 50, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="Tbh still figuring this out myself"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 20,
      alignItems: 'center',
      height: 245
    }}>
      <Image source={images.pink} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 225, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="i think just being communicative about your symptoms and how you're feeling on a regular basis is helpful. i found that it was easy for others to assume that i was feeling okay, but when i actually let them know how i'm feeling they began to understand the weight of concussions"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 30,
      alignItems: 'center',
      height: 70
    }}>
      <Image source={images.red} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 50, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="replying to come back to this later"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 40,
      alignItems: 'center',
      height: 230
    }}>
      <Image source={images.profileIcon} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 210, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="I feel like it helps to mention that concussion recovery is a process and not something that just happens overnight. I feel like a lot of my friends and family didn't even realize how long concussions last so it really came down to teaching them more about concussions"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

function ForumPost1() {
  const [text, setText] = useState(''); 
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
        alignSelf: 'center'
      }}/>
      <View style={{
      backgroundColor: '#404040',
      flexDirection: 'row',
      width: '97%',
      borderRadius: 7,
      top: 15,
      height: 170,
      alignSelf: 'center'
    }}>
      <Image source={images.orange}
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
            borderRadius: 5,
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
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
            }}>
              I'm having a hard time explaining how difficult recovering from a concussion is... does anyone else feel this way?
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center', 
        top: 30
      }}/>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 40,
      alignItems: 'center',
      height: 80
    }}>
      <Image source={images.profileIcon} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                fontStyle:'italic', 
                borderWidth: 12, 
                height: 60, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
              }}
              placeholder="Add a reply..."
              placeholderTextColor='#E5E1E5'
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              multiline={true}
      />
      <Pressable style={styles.saveButton1}>
        <Text style={styles.saveText}>Post</Text>
      </Pressable>
    </View>
    <View style={{
        borderColor: '#616161',
        borderBottomWidth: 1,
        width: '97%',
        alignSelf: 'center',
        top: 50
      }}/>
      <ScrollView style={{top: 60}}>
      <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      alignItems: 'center',
      height: 185
    }}>
      <Image source={images.yellow} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 165, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="I really feel this. Honestly I just try to communicate as openly as possible and reassure my friends that I'm not actually flaking half the time and would love to hang out but simply need a lot of rest at the moment."
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 10,
      alignItems: 'center',
      height: 70
    }}>
      <Image source={images.blue} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 50, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="Tbh still figuring this out myself"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 20,
      alignItems: 'center',
      height: 245
    }}>
      <Image source={images.pink} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 225, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="i think just being communicative about your symptoms and how you're feeling on a regular basis is helpful. i found that it was easy for others to assume that i was feeling okay, but when i actually let them know how i'm feeling they began to understand the weight of concussions"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 30,
      alignItems: 'center',
      height: 70
    }}>
      <Image source={images.red} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 50, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="replying to come back to this later"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    <View style={{
      flexDirection: 'row',
      width: '97%',
      backgroundColor: '#404040',
      alignSelf: 'center',
      borderRadius: 7,
      top: 40,
      alignItems: 'center',
      height: 230
    }}>
      <Image source={images.profileIcon} style={{
        left: 15
      }}/>
      <TextInput
              style={{
                borderWidth: 12, 
                height: 210, 
                marginLeft: 15,
                marginRight: 15, 
                marginTop: 15, 
                borderRadius: 15, 
                borderColor: '#313033', 
                backgroundColor: '#313033', 
                color: '#FFFFFF', 
                fontSize: 18,
                width: '77%',
                left: 15,
                top: -7
                
              }}
              placeholder="I feel like it helps to mention that concussion recovery is a process and not something that just happens overnight. I feel like a lot of my friends and family didn't even realize how long concussions last so it really came down to teaching them more about concussions"
              placeholderTextColor='#E5E1E5'
              multiline={true}
              editable={false}
      />
    </View>
    </ScrollView>
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
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveText}>Post</Text>
      </Pressable>
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
      <Image source={images.pink}
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
            borderRadius: 5,
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
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
            }}>
              I'm having a hard time explaining how...
            </Text>
          </View>
        </View>
        </Pressable>
      </View>
    </View>
    <Pressable onPress={() => navigation.navigate('ForumPost')}>
    <View style={{
      backgroundColor: '#404040',
      flexDirection: 'row',
      width: '97%',
      borderRadius: 7,
      top: 30,
      height: 110,
      alignSelf: 'center'
    }}>
      <Image source={images.yellow}
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
            backgroundColor: '#55AA68',
            borderRadius: 5,
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
            Tips on managing migraines?
          </Text>
          <View style={{
            backgroundColor: '#313033',
            top: 10,
            borderRadius: 7,
            width: 320
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
            }}>
            my head has been killing me these past...
            </Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('ForumPost')}>
    <View style={{
      backgroundColor: '#404040',
      flexDirection: 'row',
      width: '97%',
      borderRadius: 7,
      top: 45,
      height: 130,
      alignSelf: 'center'
    }}>
      <Image source={images.orange}
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
            borderRadius: 5,
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
            Feeling disappointed in my work performance
          </Text>
          <View style={{
            backgroundColor: '#313033',
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
              width: 350
            }}>
              It's super hard to stay productive for m...
            </Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('ForumPost')}>
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
            backgroundColor: '#86CC9B',
            borderRadius: 5,
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
            amazing new study on concussion recovery
          </Text>
          <View style={{
            backgroundColor: '#313033',
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
              width: 350
            }}>
              Stanford University just published this st...
            </Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('ForumPost')}>
    <View style={{
      backgroundColor: '#404040',
      flexDirection: 'row',
      width: '97%',
      borderRadius: 7,
      top: 75,
      height: 130,
      alignSelf: 'center'
    }}>
      <Image source={images.red}
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
            backgroundColor: '#55AA68',
            borderRadius: 5,
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
            Keeping energy levels up while recovering
          </Text>
          <View style={{
            backgroundColor: '#313033',
            top: 10,
            borderRadius: 7
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              marginLeft: 6,
              marginTop: 2,
              marginBottom: 2,
            }}>
              How do y'all maintain energy throughout...
            </Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
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
        <Stack.Screen options={{headerShown: false}} name="ForumPost" component={ForumPost}/>
        <Stack.Screen options={{headerShown: false}} name="ForumPost1" component={ForumPost1}/>
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
    saveButton:{
      marginRight:40,
      marginLeft:40,
      paddingTop:1,
      // paddingBottom:10,
      backgroundColor:'green',
      borderRadius:15,
      top: -20,
      width: '20%',
      alignSelf: 'flex-end',
      height: 20,
      left: 18,
    },
    saveButton1:{
      marginRight:40,
      marginLeft:40,
      paddingTop:1,
      // paddingBottom:10,
      backgroundColor:'green',
      borderRadius:15,
      width: '20%',
      alignSelf: 'flex-end',
      height: 20,
      left: 10,
    },
    saveText:{
      color:'#ffffff',
      textAlign:'center',
      fontSize: 13,
      fontWeight: 'bold'
  },
});