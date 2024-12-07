import { View, Text } from "react-native";
import React from "react";
import Main from "../components/Main";
import "../global.css"; // Ruta correcta según tu estructura
import { Stack } from "expo-router";
import { ThemeProvider } from "../context/theme.context";

export default function _layout() {
    return(
        <ThemeProvider>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(routes)/onboarding/index" />
            </Stack>
        </ThemeProvider>
    )
}