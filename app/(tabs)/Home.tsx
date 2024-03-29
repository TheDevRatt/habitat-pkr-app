import React, { Component, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "@/components/Themed";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { auth } from "@/firebase";
import { Ionicons } from "@expo/vector-icons";
import CarCard from "@/components/CarCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import ProfileContainer from "@/components/ProfileContainer";
import { fetchVehicles } from "../classes/UserUtils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export let vehicleList = [];
export let selectedVehicle = [];

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchVehicleList() {
      try {
        vehicleList = await fetchVehicles();
        setVehicles(vehicleList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchVehicleList();
  }, []);

  // user info
  const user = auth.currentUser;
  let userName = " ";
  if (user !== null && user.displayName !== null) {
    userName = user.displayName;
  }

  // location
  const location = "Ptbo region";

  const [userInfo, setUserInfo] = useState({
    name: userName,
    totalRides: 14,
    profileUrl: "",
  });

  // navigation
  const router = useRouter();

  const goToBooking = (carId: number) => {
    selectedVehicle = vehicleList[carId];
    router.push({ pathname: "/home/CarInfo" });
  };

  const filteredCars =
    filter === "all" ? vehicles : vehicles.filter((car) => car.Make === filter);

  const handleFilterPress = (selectedFilter: any) => {
    setFilter(selectedFilter);
  };

  const filterOptions = [
    { label: "All", value: "all" },
    {
      label: "Honda",
      value: "Honda",
      image: require("@/assets/images/carImagesTEMP/honda.png"),
    },
    {
      label: "Toyota",
      value: "Toyota",
      image: require("@/assets/images/carImagesTEMP/Toyota.png"),
    },
    {
      label: "Nissan",
      value: "Nissan",
      image: require("@/assets/images/carImagesTEMP/Nissan.png"),
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserInfo({
            ...userInfo,
            name: `${userData.FirstName}`,
            profileUrl: userData.profileUrl,
          });
        }
      }
    };

    fetchUserData();
  }, []);

  // Search bar

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const toggleSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsSearchExpanded(!isSearchExpanded);
  };

  const closeSearch = () => {
    if (isSearchExpanded) {
      setIsSearchExpanded(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          {userInfo.profileUrl ? (
            <Image
              source={{ uri: userInfo.profileUrl }}
              width={50}
              height={50}
              style={styles.profileImage}
            />
          ) : (
            <ProfileContainer
              width={50}
              height={50}
              style={styles.smallImage}
            />
          )}
          <Text style={styles.greeting}>Hello, {userName}!</Text>
          {/* <EvilIcons name="bell" size={35} color="black" /> */}
        </View>
        <View style={styles.searchContainer}>
          {!isSearchExpanded ? (
            <>
              <Text style={styles.instructions}>Select a car to rent</Text>
              <TouchableOpacity
                style={{ backgroundColor: "transparent" }}
                onPress={toggleSearch}
              >
                <EvilIcons name="search" size={45} color="black" />
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.expandedSearchContainer}>
              <EvilIcons
                name="search"
                size={45}
                color="black"
                style={{ marginTop: 5 }}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search cars..."
                placeholderTextColor="#999"
                onBlur={closeSearch}
              />
            </View>
          )}
        </View>

        <View style={styles.filterLogos}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.filterBtn,
                  filter === option.value && styles.activeFilterBtn,
                ]}
                onPress={() => handleFilterPress(option.value)}
              >
                {option.image ? (
                  <Image source={option.image} />
                ) : (
                  <Text
                    style={[
                      styles.filterBtnText,
                      filter === option.value && styles.activeFilterBtnText,
                    ]}
                  >
                    {option.label}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.location}>All cars - {location}</Text>
        <View style={styles.carList}>
          <ScrollView style={styles.carCardScroll}>
            {filteredCars.map((car, index) => (
              <TouchableOpacity
                key={index}
                style={{ backgroundColor: "transparent" }}
                onPress={() => goToBooking(index)}
              >
                <CarCard
                  make={car.Make}
                  model={car.Model}
                  transmission={car.Transmission}
                  dailyRate={car.DayRate}
                  hourlyRate={car.HourlyRate}
                  imageUrl={car.imageURL}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: verticalScale(20),
    paddingTop: verticalScale(20),
    backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginBottom: verticalScale(20),
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  smallImage: {
    padding: horizontalScale(5),
  },
  greeting: {
    fontSize: moderateScale(24),
    fontFamily: "karlaEB",
    marginLeft: horizontalScale(15),
    marginRight: "auto",
  },
  profileImage: {
    padding: horizontalScale(5),
    borderRadius: 10,
  },
  instructions: {
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    marginTop: verticalScale(6),
  },
  searchContainer: {
    flexDirection: "row",
    width: "90%",
    marginVertical: verticalScale(10),
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  expandedSearchContainer: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: moderateScale(1),
    borderRadius: 15,
    width: "100%",
    backgroundColor: "#fff",
  },
  searchInput: {
    padding: moderateScale(15),
    fontSize: moderateScale(18),
    backgroundColor: "transparent",
  },
  location: {
    fontSize: moderateScale(20),
    fontFamily: "karlaR",
    marginLeft: horizontalScale(60),
    width: "100%",
    marginTop: verticalScale(15),
  },
  carList: {
    width: "100%",
    marginBottom: verticalScale(20),
    backgroundColor: "transparent",
  },
  filterLogos: {
    flexDirection: "row",
    marginVertical: verticalScale(10),
    width: "90%",
    backgroundColor: "transparent",
  },
  filterBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
    marginHorizontal: horizontalScale(15),
  },
  filterBtnText: {
    fontSize: 22,
    fontFamily: "karlaM",
    color: "#000",
  },
  activeFilterBtn: {
    backgroundColor: "#E55D25",
  },
  activeFilterBtnText: {
    color: "#fff",
  },
  carCardScroll: {
    height: verticalScale(450),
  },
});

export default Home;
