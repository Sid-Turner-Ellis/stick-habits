import React, { useState } from "react";
import { Alert } from "react-native";

export default function alertFunction(title, message){
     Alert.alert(
      title,
      message,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
}