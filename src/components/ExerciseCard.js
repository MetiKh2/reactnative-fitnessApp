/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ExerciseCard = ({exercise}) => {
  const navigation=useNavigation();
  console.log(exercise);
  return (
    <Pressable onPress={()=>navigation.navigate('ExerciseScreen',{id:exercise.id})} style={{marginVertical: 20, alignItems: 'center'}}>
      <Image
        
        source={{uri: exercise.gifUrl}}
        alt={exercise.name}
        style={{width: 270, height: 270}}
      />
      <View style={{ flexDirection: 'row'}}>
        <Text
          style={{
            color: '#fff',
            padding: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 30,
            backgroundColor: '#FFA9A9',
            marginHorizontal: 10,
          }}>
          {exercise.bodyPart}
        </Text>
        <Text
          style={{
            color: '#fff',
            padding: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 30,
            marginHorizontal: 10,
            backgroundColor: '#FCC859',
          }}>
          {exercise.target}
        </Text>
      </View>
      <Text style={{color: '#000',fontWeight:'bold',fontSize:25,marginTop:15,textTransform:'capitalize'}}>{exercise.name}</Text>
    </Pressable>
  );
};

export default ExerciseCard;
