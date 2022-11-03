/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 
 import {SafeAreaView, StatusBar} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ExploreScreen from './src/Screens/ExploreScreen';
import ExerciseScreen from './src/Screens/ExerciseScreen';
 
 const Stack = createStackNavigator();
 const App = () => {
   return (
     <SafeAreaView style={{flex: 1}}>
       <StatusBar barStyle={'light-content'} />
       <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
       <Stack.Screen name="Explore" component={ExploreScreen} options={{headerShown:false}} />
       <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{headerTitle:'',headerTintColor:'black'}} />
     </Stack.Navigator>
       </NavigationContainer>
     </SafeAreaView>
   );
 };
 
 export default App;