import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@gluestack-ui/themed'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'



const Profile = () => {
  const { onLogout } = useAuth();
  const { navigate } = useNavigation();

  const { auth } = useAuth();

  const handleLogout = async () => {
    try {
      await onLogout();

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Text>{auth.user}</Text>
      <Button onPress={handleLogout}>
        <Text>Çıkış</Text>
      </Button>
    </SafeAreaView>
  )
}

export default Profile