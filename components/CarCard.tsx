import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { moderateScale, verticalScale } from "@/constants/Metrics";

interface CarCardProps {
  make: string;
  model: string;
  dailyRate: number;
  hourlyRate: number;
  transmission: string;
  imageUrl: ImageSourcePropType;
}

const CarCard: React.FC<CarCardProps> = ({
  make,
  model,
  transmission,
  dailyRate,
  hourlyRate,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {make} {model}
        </Text>
        <Text style={styles.transmission}>{transmission}</Text>
        <Text style={styles.rate}>${dailyRate} per day</Text>
        <Text style={styles.rate}>${hourlyRate}/hour</Text>
      </View>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    margin: 15,
    width: "85%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: "karlaB",
    textAlign: "center",
  },
  transmission: {
    fontSize: moderateScale(14),
    fontFamily: "karlaL",
    marginBottom: verticalScale(12),
    textAlign: "center",
  },
  rate: {
    fontSize: moderateScale(17),
    fontFamily: "karlaM",
    color: "#E55D25",
    marginBottom: verticalScale(5),
    textAlign: "center",
  },
  image: {
    width: verticalScale(150),
    height: verticalScale(110),
    resizeMode: "contain",
  },
});

export default CarCard;
