import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { CalendarScreen } from "../screens/CalendarScreen/CalendarScreen";
import { LibraryScreen } from "../screens/LibraryScreen/LibraryScreen";
import { MyPageScreen } from "../screens/MyPageScreen/MyPageScreen";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color={"black"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: () => (
            <FontAwesome name="calendar" size={24} color={"black"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: () => (
            <Ionicons name="library" size={24} color={"black"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarLabel: "MyPage",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={24} color={"black"} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export { BottomTabNavigator };
