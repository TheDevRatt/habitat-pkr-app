import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

import BackButton from "@/components/BackButton";
import SignoutIcon from "@/components/SignoutIcon";
import FaqUpIcon from "@/components/faqUpIcon";
import FaqDownIcon from "@/components/faqDownIcon";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const finalValue = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.timing(animationController, {
      duration: 300,
      toValue: finalValue,
      useNativeDriver: false, // height is not supported by native animations
    }).start();
  };

  const maxHeight = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"], // Adjust '100%' as needed to accommodate your content
  });

  return (
    <View style={[styles.questionContainer, styles.border]}>
      <TouchableOpacity
        onPress={toggleAccordion}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.questionText}>{title}</Text>
        {/* {expanded ? (
          <FaqUpIcon style={styles.iconStyle} />
        ) : (
          <FaqDownIcon style={styles.iconStyle} />
        )} */}
      </TouchableOpacity>
      <Animated.View style={{ maxHeight, overflow: "hidden" }}>
        {expanded && <Text style={styles.answerText}>{content}</Text>}
      </Animated.View>
    </View>
  );
};

const Faq = () => {
  // Array of FAQs
  const faqs = [
    { question: "How do I rent a car?", answer: "You can rent a car by..." },
    {
      question: "Do I need to refuel the vehicle before returning?",
      answer:
        "Yes, we have a full-to-full policy, where the renter is responsible for filling the tank, if not filled they will be charged a fee for the remaining fuel.",
    },
    {
      question: "What is your pet policy?",
      answer: "We do not allow pets in our vehicles.",
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Yes, there is a $50 cancellation fee.",
    },
    {
      question: "What is the minimum age to rent a car?",
      answer: "The minimum age to rent a car is 21.",
    },
    {
      question: "How do I cancel or change my reservation?",
      answer: "You can cancel or change your reservation by...",
    },
    {
      question: "What is your smoking policy?",
      answer: "We do not allow smoking in our vehicles.",
    },
    {
      question: "What is your late return policy?",
      answer:
        "We allow a 30 minute grace period for late returns, after that you will be charged a late fee.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <Text style={styles.title}>
          Frequently{"\n"}Asked{"\n"}Questions
        </Text>
        <View style={styles.signoutContainer}>
          <SignoutIcon />
        </View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    paddingVertical: verticalScale(15),
  },
  title: {
    paddingTop: moderateScale(30),
    fontSize: moderateScale(40),
    textAlign: "center",
  },
  signoutContainer: {
    top: verticalScale(45),
    left: horizontalScale(60),
    alignItems: "flex-start",
  },
  backButtonContainer: {
    top: verticalScale(45),
    right: horizontalScale(60),
    alignItems: "flex-start",
  },
  scrollViewContainer: {
    height: verticalScale(20),
    marginBottom: verticalScale(20),
    width: "100%",
  },
  border: {
    borderBottomWidth: 1,
  },
  questionContainer: {
    // Ensure this container takes the full width available
    width: "100%",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    borderColor: "#6D6D6D",
    borderBottomWidth: 1, // Keep the border here
  },
  questionText: {
    fontSize: moderateScale(20),
    textAlign: "left",
    fontFamily: "karlaB",
    color: "#6D6D6D",
    paddingRight: horizontalScale(20),
  },
  answerText: {
    fontSize: moderateScale(16),
    paddingRight: horizontalScale(20),
    textAlign: "left",
    fontFamily: "karlaB",
    paddingTop: verticalScale(10),
  },
  iconStyle: {
    paddingRight: horizontalScale(40),
  },
});

export default Faq;
