/* eslint-disable prettier/prettier */
import {View, Text, Image, Dimensions, ScrollView, Button} from 'react-native';
import React from 'react';

const width = Dimensions.get('screen').width;
export default function HomeScreen({navigation}) {
  return (
  <View style={{flex:1}}>
      <ScrollView style={{flex: 1}}>
      <Image
        style={{resizeMode: 'stretch', height: 450, width}}
        source={require('../../assets/banner.png')}
      />
      <View style={{padding:20,backgroundColor:'#fff',flex:1}}>
      <Text style={{fontSize:20,color:"#FF2625"}}>Fitness Club</Text>
     <View style={{marginVertical:20}}>
     <Text style={{fontSize:25,color:'#000',fontWeight:'bold'}}>Sweat, Smile</Text>
      <Text style={{fontSize:25,color:'#000',fontWeight:'bold'}}>And Repeat</Text>
     </View>
      <Text style={{fontSize:16,color:'#000',lineHeight:27}}>Check out the most effective exercises personalized to you</Text>
      </View>
      <Button onPress={()=>navigation.navigate('Explore')} title='Explore Excersices' color={'darkred'}/>
    </ScrollView>
  </View>
  );
}
