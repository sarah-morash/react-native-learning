import React from "react";
import { Text } from "react-native";
import { View, Button, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";

const GameOverScreen = ({ rounds, userChoice, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={{
          //   uri:
          //     "https://cdn.pixabay.com/photo/2020/10/04/15/31/mountains-5626734_1280.jpg"
          // }}
          resizeMode="cover"
          source={require("../assets/success.png")}
          alt="Success"
          fadeDuration={300}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userChoice}</Text>
        </BodyText>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "open-sans"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: 30
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
});
