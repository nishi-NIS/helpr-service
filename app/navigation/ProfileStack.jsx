import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationRoutes } from "../constants";
import { EditDetailsScreen, ProfileScreen, ViewRatings } from "../modules";

const ProfileStack = createStackNavigator();

const ProfileContainer = () => {
    return(
            <ProfileStack.Navigator>
                <ProfileStack.Screen
                name={NavigationRoutes.profileScreen}
                component={ProfileScreen}
                options={{
                    headerShown: false
                }}
                />
                <ProfileStack.Screen
                name={NavigationRoutes.editDetailsScreen}
                component={EditDetailsScreen}
                options={{
                    headerShown: false
                }}
                />
                <ProfileStack.Screen
                name={NavigationRoutes.viewRatingsScreen}
                component={ViewRatings}
                options={{
                    headerShown: false
                }}
                />
            </ProfileStack.Navigator>
    );
};

export default ProfileContainer;
