import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

interface BookingCardProps {
  make: string;
  model: string;
  date: string;
  amount: number;
  time: number;
  unit: string;
  bookingId: string;
  imageUrl: ImageSourcePropType;
}

const BookingCard: React.FC<BookingCardProps> = ({
  make,
  model,
  date,
  amount,
  time,
  unit,
  bookingId,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          {make} {model}
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Date: </Text>
          <Text style={styles.details}>{date}</Text>
        </View>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Amount:</Text>
        <Text style={styles.details}> ${amount}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {time} {unit}
          </Text>
        </View>
        
      </View>
      <View style={styles.rightContainer}>
        <Image source={imageUrl} style={styles.image} />

        <Text style={styles.id}>#{bookingId}</Text>
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
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: "karlaB",
    textAlign: "center",
    marginBottom: verticalScale(15),
  },
  transmission: {
    fontSize: moderateScale(14),
    fontFamily: "karlaL",
    marginBottom: verticalScale(12),
    textAlign: "center",
  },
  details: {
    fontSize: moderateScale(16),
    color: "#333",
    textAlign: "center",
    fontFamily: "karlaL",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(3),
  },
  detailsTitle: {
    fontFamily: "karlaR",
    fontSize: moderateScale(16),
  },
  timeContainer: {
    backgroundColor: "#E55D25",
    width: "60%",
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    color: "#fff",
    borderRadius: 15,
    marginTop: verticalScale(15),
    marginLeft: horizontalScale(10),
  },
  time: {
    padding: moderateScale(8),
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    color: "#fff",
    textAlign: "center",
  },
  id: {
    fontSize: 14,
    fontFamily: "karlaL",
    color: "#666",
    textAlign: "right",
    width: "90%",
  },
  image: {
    width: verticalScale(150),
    height: verticalScale(90),
    resizeMode: "contain",
  },
});

export default BookingCard;
