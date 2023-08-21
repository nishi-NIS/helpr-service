import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { NavigationRoutes } from "../constants";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Folder from 'react-native-vector-icons/Feather';

const BottomTab = AnimatedTabBarNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                // tabBarStyle:
            }}
            tabBarOptions={{
                activeTintColor: "#2F7C6E",
                inactiveTintColor: "#222222"
              }}
        >
            <BottomTab.Screen
                name={NavigationRoutes.home}
                component={() => <Text>Home</Text>}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Folder
                            name="Home"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            // color={color}
                        />
                    )
                  }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.jobs}
                component={() => <Text>Jobs</Text>}
                options={{
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.chat}
                component={() => <Text>Chat</Text>}
                options={{
                    headerShown: false
                }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.profile}
                component={() => <Text>Profile</Text>}
                options={{
                    headerShown: false
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabRoutes;
