import React from "react";
import { Button, TouchableOpacityBase } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const MainButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  buttonText: {
    color: "white"
  }
});
