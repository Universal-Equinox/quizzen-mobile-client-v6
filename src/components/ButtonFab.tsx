import React from 'react'
import { Fab } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';




const ButtonFab = () => {

  const { navigate } = useNavigation();

  return (
    <>
      <Fab
        bg="$primary500"
        size="lg"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => {
          navigate("new")
        }}
      >
        <Ionicons name="pencil-sharp" size={24} color="white" />
      </Fab>
    </>
  )
}

export default ButtonFab