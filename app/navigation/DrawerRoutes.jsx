import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { NavigationRoutes } from "../constants";
import TabRoutes from "./TabRoutes";
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{
            drawerType: "front", headerShown: false
        }}
        >
            <Drawer.Screen
            name={NavigationRoutes.tabRoutes}
            component={TabRoutes}
            options={{
                headerShown: false
            }}
            />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerRoutes;
