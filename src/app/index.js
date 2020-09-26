import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./SearchScreen";
import ResultsShowScreen from "./ResultsShowScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Foodopedia" }}>
        <Stack.Screen name="SeachScreen" component={SearchScreen} />
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
