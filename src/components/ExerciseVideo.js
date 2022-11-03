/* eslint-disable prettier/prettier */
import { View, Text, Pressable, Image, Linking } from 'react-native'
import React from 'react'

export default function ExerciseVideo({video}) {
  return (
    <Pressable key={video.video.videoId} onPress={()=>Linking.openURL(`https://www.youtube.com/watch?v=${video.video.videoId}`)} style={{marginVertical: 20, alignItems: 'center'}}>
          <Image
            source={{uri: video.video.thumbnails[0].url}}
            style={{width: 270, height: 270,borderRadius:20}}
          />
          <View style={{ flexDirection: 'row'}}>
          </View>
          <Text style={{color: '#000',fontWeight:'bold',fontSize:20,marginTop:10,textTransform:'capitalize'}}>{  video.video.title}</Text>
          <Text style={{color: '#000',fontSize:17,marginTop:5,textTransform:'capitalize'}}>{  video.video.channelName}</Text>
        </Pressable>
  )
}