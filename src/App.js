import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './page/Home';
import Splash from './page/Splash';
import Staff from './page/Staff';
import Formstaff from './page/Formstaff';
import Menuabsen from './page/Menuabsen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Tab1} />
        <Stack.Screen name="Staff" component={Staff} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Formstaff" component={Formstaff} />
        <Stack.Screen name="Menuabsen" component={Menuabsen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

export function Tab1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../src/asset/navhome.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                  bottom: 9,
                  tintColor: focused,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Staff"
        component={Staff}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../src/asset/navanggota.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                  bottom: 9,
                  tintColor: focused,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menuabsen"
        component={Menuabsen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../src/asset/navabsen.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 45,
                  bottom: 9,
                  tintColor: focused,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
