import React, { Component } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icon/Ionicons';
import CreateDress from "./screens/CreateDress";
import Feed from "./screens/Feed";

 const Tab = createBottomTabNavigator();

export default class App {
render(){
  return(
<NavigationContainer>
  <Tab.Navigator
    screenOptions = {({route}) => ({
 tabBarIcon : ({focused,size,color}) =>{
 let iconName;
 if (route.name === 'Feed') {
  iconName = focused ? 'bag-handle' :'bag-handle-outline' 
}
else if(route.name === 'CreateDress') {
  iconName = focused ? 'create' : 'create-outline'
}
return<Ionicons name={iconName} size={size} colour={color}/>
 }

    })}
    tabBarOptions = {{
      activeTintColor:'light blue',
      inactiveTintColor:'grey'
    }}
    >
      <Tab.Screens name = "Feed" component={Feed}/>
      <Tab.Screens name = "CreateDress" component={CreateDress}/>
  </Tab.Navigator>
</NavigationContainer>
  )
}

}
