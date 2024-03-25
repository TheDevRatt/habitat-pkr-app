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
  // bookingId: string;
  imageUrl: ImageSourcePropType;
}

const BookingCard: React.FC<BookingCardProps> = ({
  make,
  model,
  date,
  amount,
  time,
  unit,
  // bookingId,
  imageUrl,
}) => {
  const displayUnit = time === 1 ? 'hour' : unit;
  // Function to format the date string
  const formatDate = (inputDate: string): string => {
    const [datePart, timePart] = inputDate.split(", ");
    const [month, day, year] = datePart.split("/");
    const isPM = timePart.toUpperCase().includes("PM");

    let [hour, minute, second] = timePart.split(":");

    if (isPM && hour !== "12") {
      hour = String(Number(hour) + 12);
    } else if (!isPM && hour === "12") {
      hour = "0";
    }

    // date object
    const dateObject = new Date(
      Number(year),
      Number(month),
      Number(day),
      Number(hour),
      Number(minute)
    );

    //  validate
    if (isNaN(dateObject.getTime())) {
      return "Invalid Date";
    }

    

    // formate the date using toLocaleString
    const formattedDate = dateObject.toLocaleDateString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const formattedTime = dateObject.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate}\n${formattedTime}`;
  };

  const formattedDate = formatDate(date);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          {make} {model}
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Date: </Text>
          <Text style={styles.detailsDate}>{formattedDate}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Amount:</Text>
          <Text style={styles.details}> ${amount}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {time} {displayUnit}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {/* <Text style={styles.id}>#{bookingId}</Text> */}
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
    justifyContent: "center",
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
  detailsDate: {
    fontSize: moderateScale(16),
    fontFamily: "karlaL",
  },
  details: {
    fontSize: moderateScale(16),
    color: "#333",
    textAlign: "left",
    fontFamily: "karlaL",
    marginVertical: verticalScale(3),
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
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
