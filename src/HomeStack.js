/* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTab from './components/HomeBottomTab'
import HomeScreen from './screens/HomeScreen';
import FilesScreen from './screens/FilesScreen';
import SettingScreen from './screens/SettingScreen';
import VideoScreen from './screens/VideoScreen';
import DetailScreen from './screens/DetailScreen';
import RechargeScreen from './screens/RechargeScreen';
import WithDrawScreen from './screens/WithDrawScreen';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="HomeBottomTab" component={HomeBottomTab} />
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="FilesScreen" component={FilesScreen} />
        <HomeStack.Screen name="SettingScreen" component={SettingScreen} />
        <HomeStack.Screen name="VideoScreen" component={VideoScreen} />
        <HomeStack.Screen name="DetailsScreen" component={DetailScreen} />
        <HomeStack.Screen name="RechargeScreen" component={RechargeScreen} />
        <HomeStack.Screen name="WithDrawScreen" component={WithDrawScreen} />
    </HomeStack.Navigator>
);

export default HomeStackScreen;