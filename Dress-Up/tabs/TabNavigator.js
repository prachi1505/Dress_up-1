import React from "react";
import { StyleSheet } from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ioncicons from "react-native-vector-ions/Ioncicons";
import {RFVvalue} from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreateDress from "../screens/CreateDress";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator= () =>{
return(
<Tab.Navigator
labelled={false}
barStyle={StyleSheet.bottomTabStyle}
 screenOptions = {({route}) =>({
tabBarIcon:({focused,size,color})=> {
    let iconName;
    if(route.name ==="Feed"){
        iconName = focused ? 'home':'home-outline';
    } 

} else if (route.name === "CreateDress"){
    iconName = focused? 'add-circle':'add-circle-outline'

}
 return(
    <Ioncicons
    name={iconName} size={30} color={color} style ={{width:30}}
     />
 );
 })}
activeColor = {"light blue"}
inactiveColor = {"gray"}
>
    <Tab.Screen name="Feed" component={Feed}/>
    
    <Tab.Screen name="CreateDress" component={CreateDress}/>
</Tab.Navigator>
);


};