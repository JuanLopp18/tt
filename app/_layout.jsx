import { View, Text } from "react-native";
import React from "react";
import Main from "../components/Main";
import { ThemeProvider } from "@react-navigation/native"
import "../global.css"; // Ruta correcta según tu estructura
import { Stack } from "expo-router";

export default function _layout() {
    return(
        <ThemeProvider>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" />
            </Stack>
        </ThemeProvider>
    )
}