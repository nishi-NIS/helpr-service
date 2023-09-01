import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import { NavigationRoutes } from "../constants";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Folder from 'react-native-vector-icons/Feather';
import Home from 'react-native-vector-icons/AntDesign';
import { Briefcase, ChatCircleDots, House, User } from "phosphor-react-native";
import { Colors, moderateScale } from "../theme";
import { ProfileScreen, Subscription } from "../modules";
import ProfileContainer from "./ProfileStack";

const BottomTab = AnimatedTabBarNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
            tabBarOptions={{
                activeTintColor: Colors.black,
                inactiveTintColor: Colors.inactiveTintColor,
                activeBackgroundColor: Colors.tabBackground,
                labelStyle: {
                    fontSize: moderateScale(12),
                    fontWeight: '600',
                },
              }}
        >
            <BottomTab.Screen
                name={NavigationRoutes.home}
                component={Subscription}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <House size={moderateScale(28)} color={Colors.theme} weight="fill" />
                    )
                  }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.jobs}
                component={() => <Text>Jobs</Text>}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Briefcase size={moderateScale(28)} color={Colors.theme} weight="fill" />
                    )
                }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.chat}
                component={() => <Text>Chat</Text>}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <ChatCircleDots size={moderateScale(28)} color={Colors.theme} weight="fill" />
                    )
                }}
            />
            <BottomTab.Screen
                name={NavigationRoutes.profile}
                component={ProfileContainer}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <User size={moderateScale(28)} color={Colors.theme} weight="fill" />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabRoutes;
