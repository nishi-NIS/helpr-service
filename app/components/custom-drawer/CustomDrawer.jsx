import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { NavigationRoutes } from "../../constants";

const CustomDrawer = (props) => {
    const navigation = useNavigation();

    return (
        <>
            <DrawerContentScrollView
                style={{ backgroundColor: "white" }}
                {...props}
            >
                <View style={{ flex: 1, height: 750 }} >
                    <Text
                        onPress={() => navigation.navigate(NavigationRoutes.authTopTabs)}
                        style={{
                            color: "black",
                            fontSize: 22,
                            fontWeight: '600',
                            top: 710,
                            marginLeft: 10
                        }} >Logout</Text>
                </View>
            </DrawerContentScrollView>
        </>
    );
};

export default CustomDrawer;
