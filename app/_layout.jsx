import { View, Text } from "react-native";
import React from "react";
import Main from "../components/Main";
import "../global.css"; // Ruta correcta según tu estructura

export default function _layout() {
    return(
        <View className="flex-1 bg-black">
           <Main/>
        </View>
    )
}