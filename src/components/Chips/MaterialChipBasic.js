import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.asdasdasdasd}>✅ All Stocks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: "rgba(53,56,63,1)"
  },
  asdasdasdasd: {
    fontSize: 13,
    color: "rgba(255,255,255,0.87)",
    fontFamily: "urbanist-600"
  }
});

export default MaterialChipBasic;
