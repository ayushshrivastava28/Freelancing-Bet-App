import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import HomeScreen from '../screens/HomeScreen'
import FilesScreen from '../screens/FilesScreen';
import SettingScreen from '../screens/SettingScreen';
import VideoScreen from '../screens/VideoScreen';


const Tab = createBottomTabNavigator();

const BottomTabs = (props) => (

    <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'HomeScreen',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="house" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Files"
            component={FilesScreen}
            options={{
                tabBarLabel: 'Files',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="file-document-outline" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Videos"
            component={VideoScreen}
            options={{
                tabBarLabel: 'VideoScreen',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Foundation name="play-video" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Share"
            component={VideoScreen}
            options={{
                tabBarLabel: 'VideoScreen',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="share" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                tabBarLabel: 'SettingScreen',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="person-outline" color={color} size={26} />
                ),
            }}
        />

    </Tab.Navigator>


);

export default BottomTabs;

