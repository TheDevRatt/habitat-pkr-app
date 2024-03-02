import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { View } from "@/components/Themed";

import HomeIcon from "@/components/HomeIcon";
import HomeIconActive from "@/components/HomeIconActive";
import BookingIcon from "@/components/BookingIcon";
import BookingIconActive from "@/components/BookingIconActive";
import AccountIcon from "@/components/AccountIcon";
import AccountIconActive from "@/components/AccountIconActive";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({ name, isActive }: { name: string; isActive: boolean }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
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

      {/* Add other cases for icons similarly */}
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          //  title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Bookings"
        options={{
          //title: "Bookings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="book" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          //title: "Bookings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="account" isActive={focused} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="Admin"
        options={{
          // title: "Admin",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-secret" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute", // Ensure the nav bar is at the bottom of the page
    bottom: 10, // Position at the bottom
    left: 10, // Stretch to full width by setting left and right to 0
    right: 10,
    elevation: 0,
    backgroundColor: "#0099CC", // Background color of nav bar
    height: 57, // Max height of 57px
    justifyContent: "center", // Center icons vertically
    alignItems: "center", // Center icons horizontally
    display: "flex", // Use flex-box
    flexDirection: "row", // Arrange icons in a row
    borderRadius: 25,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
  },
});
