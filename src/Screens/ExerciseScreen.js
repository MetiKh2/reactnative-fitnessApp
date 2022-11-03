/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {exerciseOptions, fetchData, youtubeOpions} from './../utils/fetchData';
import ExerciseCard from './../components/ExerciseCard';
import ExerciseVideo from '../components/ExerciseVideo';

export default function ExerciseScreen({route}) {
  const {id} = route?.params;
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions,
      );
      setExerciseDetail(exerciseDetailsData);
      // console.log(exerciseDetailsData.target);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
        youtubeOpions,
      );
      setExerciseVideos(exerciseVideosData.contents.filter(item => item.video));

      // const targetMuscleExerciseData = await fetchData(
      //   `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
      //   exerciseOptions,
      // );
      // setTargetMuscleExercises(targetMuscleExerciseData);

      // const equipmentExerciseData = await fetchData(
      //   `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
      //   exerciseOptions,
      // );
      // setEquipmentExercises(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 10}}>
      <ScrollView style={{}}>
        <ExerciseCard exercise={exerciseDetail} />
        <Text
          style={{
            color: '#fff',
            padding: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 30,
            backgroundColor: '#2CAEBA',
            marginHorizontal: 10,
            textAlign: 'center',
          }}>
          {exerciseDetail.equipment}
        </Text>
        <Text
          style={{
            color: '#000',
            padding: 10,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 17,
            marginVertical: 10,
          }}>
          . Watch {exerciseDetail.name} Bend exercise videos
        </Text>
        {exerciseVideos.slice(0, 6).map(video => (
          <ExerciseVideo video={video} key={video.video.videoId} />
        ))}
        {/* <Text
          style={{
            color: '#000',
            padding: 10,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 17,
            marginVertical: 10,
            borderTopWidth: 2,
          }}>
          . Similar Target Muscle exercises
        </Text>
        <ScrollView
          style={{flexDirection: 'row'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {targetMuscleExercises.map((item, i) => (
            <View
              key={item.id}
              style={[
                {
                  marginBottom: 15,
                  alignItems: 'center',
                  marginRight: 30,
                  marginTop: 15,
                },
              ]}>
              <ExerciseCard exercise={item} />
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            color: '#000',
            padding: 10,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 17,
            marginVertical: 10,
            borderTopWidth: 2,
          }}>
          . Similar Equipment exercises
        </Text>
        <ScrollView
          style={{flexDirection: 'row'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {equipmentExercises.map((item, i) => (
             
              <ExerciseCard key={item.id} exercise={item} />
          ))}
        </ScrollView> */}
      </ScrollView>
    </View>
  );
}
