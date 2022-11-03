/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';

export default function ExploreScreen() {
  console.log('eeee555');
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('All');
  const [bodyPartsLoading, setBodyPartsLoading] = useState(true);
  const [exercisesLoading, setExercisesLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = async () => {
    if (searchTerm) {
      setExercisesLoading(true);
      const exerciseData = await fetchData(
        'https://exercise.p.rapidapi.com/exercises',
        exerciseOptions,
      );
      const SearchExercisesData = exerciseData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      console.log(SearchExercisesData);
      setExercises(SearchExercisesData);
      setSearchTerm('');
      setExercisesLoading(false);
    }
  };

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      setBodyPartsLoading(true);
      const bodyPartsData = await fetchData(
        'https://exercise.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions,
      );
      setBodyPartsLoading(false);
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchBodyPartsData();
  }, []);
  useEffect(() => {
    const fetchExercisesData = async () => {
      setExercisesLoading(true);
      let exercisesData = [];

      if (bodyPart.toLowerCase() === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions,
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }
      console.log(exercisesData);
      setExercises(exercisesData);
      setExercisesLoading(false);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#fff'}}>
      <Text
        style={{
          fontSize: 22,
          color: '#000',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Awesome Exercises You Should Know
      </Text>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={setSearchTerm}
          value={searchTerm}
          placeholder="Search Exercises "
          placeholderTextColor={'#000'}
          style={{
            flex: 1,
            backgroundColor: '#fff',
            color: '#000',
            borderWidth: 1,
          }}
        />
        <Pressable
          onPress={handleSearch}
          style={{
            backgroundColor: 'darkred',
            paddingVertical: 13,
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
      {bodyPartsLoading ? (
        <ActivityIndicator
          size={'large'}
          color="darkred"
          style={{marginTop: 12}}
        />
      ) : (
        <ScrollView
          style={{flexDirection: 'row'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {bodyParts.map((item, i) => (
            <TouchableOpacity
              onPress={() => setBodyPart(item)}
              key={item + i}
              style={[
                {
                  marginBottom: 15,
                  alignItems: 'center',
                  marginRight: 30,
                  marginTop: 15,
                  height: 140,
                },
                bodyPart.toLowerCase() == item.toLowerCase()
                  ? {borderTopWidth: 3, borderTopColor: '#FF2625'}
                  : {},
              ]}>
              <>
                <Image
                  source={require('../../assets/gym.png')}
                  style={{
                    width: 50,
                    height: 40,
                    resizeMode: 'contain',
                    marginVertical: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#000',
                    textTransform: 'capitalize',
                  }}>
                  {item}
                </Text>
              </>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      {exercisesLoading ? (
        <ActivityIndicator
          size={'large'}
          color="darkred"
          style={{marginTop: 50}}
        />
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ExerciseCard exercise={item} />}
        />
      )}
    </View>
  );
}
