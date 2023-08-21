import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationRoutes } from "../constants";
import AuthTopTabs from "./AuthTopTabs";
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from "./DrawerRoutes";

const RootStack = createStackNavigator();

const AppContainer = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                name={NavigationRoutes.authTopTabs}
                component={AuthTopTabs}
                options={{
                    headerShown: false
                }}
                />
                <RootStack.Screen
                name={NavigationRoutes.drawerRoutes}
                component={DrawerRoutes}
                options={{
                    headerShown: false
                }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;
