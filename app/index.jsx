import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';

export default function index() {
    const [loggedInUser, setloggedInUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const subscription = async () => {
      const token = SecureStore.getItem("accessToken")
      setloggedInUser(token ? true : false)
      setLoading(false)
      }
      subscription()
    }, [])
    

    return (
    <View>
      <Text>index</Text>
    </View>
  )
}