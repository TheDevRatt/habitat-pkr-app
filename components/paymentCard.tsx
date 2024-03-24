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

interface PaymentCardProps {
  make: string;
  model: string;
  date: string;
  amount: number;
  time: number;
  unit: string;
  paymentId: string;
  imageUrl: ImageSourcePropType;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  make,
  model,
  pickup,
  dropoff,
  amount,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          {make} {model}
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Pickup: </Text>
          <Text style={styles.details}>{pickup}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Dropoff: </Text>
          <Text style={styles.details}>{dropoff}</Text>
        </View>
        <View style={styles.detailsAmount}>
          <Text style={styles.detailsPrice}>${amount}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image source={imageUrl} style={styles.image} />
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
    width: "90%",
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
    alignItems: "flex-end",
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    textAlign: "center",
    marginBottom: verticalScale(5),
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
  image: {
    width: verticalScale(150),
    height: verticalScale(90),
    marginLeft: horizontalScale(10),
    resizeMode: "contain",
  },
  detailsAmount: {
    backgroundColor: "#0099CC",
    padding: moderateScale(5),
    borderRadius: moderateScale(15),
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(25),
    left: 0,
  },
  detailsPrice: {
    fontSize: moderateScale(22),
    fontFamily: "karlaB",
    color: "#FFF",
    textAlign: "center",
  },
});

export default PaymentCard;
