import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import AddCities from "../pages/AddCities";
import Cities from "../pages/Cities";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="CITIES"
          component={AddCities}
          options={{
            tabBarIcon: () => {
              return <FontAwesome5 name="city" size={20} />;
            },
          }}
        />
        <Screen
          name="ADD CITY"
          component={Cities}
          options={{
            tabBarIcon: () => {
              return <FontAwesome5 name="plus" size={20} />;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
