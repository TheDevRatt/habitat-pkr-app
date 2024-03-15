import React from "react";
import { Platform, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Tabs } from "expo-router";
import { View } from "@/components/Themed";

import HomeIcon from "@/components/HomeIcon";
import HomeIconActive from "@/components/HomeIconActive";
import BookingIcon from "@/components/BookingIcon";
import BookingIconActive from "@/components/BookingIconActive";
import AccountIcon from "@/components/AccountIcon";
import AccountIconActive from "@/components/AccountIconActive";
import AdminIcon from "@/components/AdminIcon";
import AdminIconActive from "@/components/AdminIconActive";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { horizontalScale, verticalScale } from "@/constants/Metrics";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAuth } from "@/components/AuthContext";

function TabBarIcon({ name, isActive }: { name: string; isActive: boolean }) {
  return (
    <View style={styles.iconContainer}>
      {name === "home" ? isActive ? <HomeIconActive /> : <HomeIcon /> : null}
      {name === "book" ? (
        isActive ? (
          <BookingIconActive />
        ) : (
          <BookingIcon />
        )
      ) : null}
      {name === "account" ? (
        isActive ? (
          <AccountIconActive />
        ) : (
          <AccountIcon />
        )
      ) : null}
      {name === "admin" ? (
        isActive ? (
          <MaterialIcons name="admin-panel-settings" size={50} color="white" />
        ) : (
          <MaterialIcons name="admin-panel-settings" size={50} color="black" />
        )
      ) : null}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAdmin } = useAuth();

  // Optionally, a function to handle non-admin users tapping on the Admin icon
  const handleNonAdminTap = () => {
    Alert.alert("Restricted", "You do not have access to admin features.");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Bookings"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="book" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="account" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Admin"
        options={{
          tabBarIcon: ({ focused }) =>
            isAdmin ? <TabBarIcon name="admin" isActive={focused} /> : <View />, // Optionally hide the Admin tab for non-admin users
          tabBarLabel: "",
          tabBarButton: isAdmin ? undefined : () => <View />, // Optionally hide the Admin tab for non-admin users
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  tabBarStyle: {
    position: "absolute",
    bottom: Platform.OS === "android" ? verticalScale(10) : verticalScale(30), // Adjust bottom padding for platform
    left: horizontalScale(10),
    right: horizontalScale(10),
    backgroundColor: "#0099CC",
    height: 60,
    alignItems: "center",
    borderRadius: 25,
    paddingBottom:
      Platform.OS === "android" ? verticalScale(0) : verticalScale(0), // Keep this or Icons wont be centered.
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
