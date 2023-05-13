import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={{backgroundColor:'#b3d0d0', paddingHorizontal: 5, flex: 1}}>
    <View style={{marginTop: 150, paddingBottom: 20, backgroundColor: 'white', borderRadius: 50}}>
      <View style={{marginVertical: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color:'black', fontWeight:'bold', fontSize: 30}}>Creat Blog</Text>
      </View>
      
      <View style={{marginHorizontal: 50, padding: 10}}>
      <View style={{color: 'black'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Title</Text>
        <View style={{ 
            flexDirection: 'row', 
            borderBottomColor: 'grey', 
            borderBottomWidth: 1, 
            marginBottom: 10
            }}>
          <View style={{flex: 1,paddingTop: 5 }} >  
          <TextInput 
          placeholder={'Type your title'}
          />
          </View>
        </View>
        </View>

      <View style={{color: 'black'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Description</Text>
        <View style={{ 
            flexDirection: 'row', 
            borderBottomColor: 'grey', 
            borderBottomWidth: 1, 
            }}>
          <View style={{flex: 1,paddingTop: 5 }} >  
          <TextInput 
          placeholder={'Type your description'}
          />
          </View>
        </View>
      </View>

    <View style={{paddingTop: 10}}>
      <View>
      <Text style={{color: 'black', fontWeight: 'bold'}}>Choose image</Text>
      </View>
      <View style={{paddingVertical: 10}}>
        <View style={{
          marginRight: 110,
          paddingVertical:10,
          borderRadius: 50,
          // backgroundColor: '#b3d0d0'

        }}>
        <TouchableOpacity>
          <Text style={{ color: 'black', marginLeft: 20}}> Upload image</Text>
        </TouchableOpacity>
        </View>

        <View style={{
          marginRight: 110,
          paddingVertical:10,
          marginTop: 10,
          borderRadius: 50,

        }}>
        <TouchableOpacity>
          <Text style={{ color: 'black', marginLeft: 30}}>Open Camera</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>



    <View style={{
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 110,
      paddingVertical:10,
      borderRadius: 50,
      backgroundColor: '#b3d0d0',
    }}>
      <TouchableOpacity>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,  
        }}>Create</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
  );
};

export default FavoriteScreen;
