import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Center, FormControl, VStack, Text, InputField, Button, ButtonText, Input, HStack } from '@gluestack-ui/themed'
import { Heading } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

import { useAuth } from '../hooks/UseAuth'






const Login = () => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");


  const { auth, onLogin } = useAuth();


  const handleSubmit = async () => {

    try {

      const res = await onLogin(email, pass);

      setEmail("");
      setPass("");

      console.log(res);

    } catch (error) {
      console.error(error);

    }
  }

  useEffect(() => {

  }, [email, pass])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Center>
        <Box w={"$96"}  >

          <FormControl
            p="$4"
            borderWidth="$1"
            borderRadius="$lg"
            borderColor="$borderLight300"
            $dark-borderWidth="$1"
            $dark-borderRadius="$lg"
            $dark-borderColor="$borderDark800"
          >
            <VStack space="xl">
              <Heading lineHeight="$md">
                Giriş
              </Heading>
              <VStack space="xs">
                <Text lineHeight="$xs">
                  email adresi
                </Text>
                <Input  >
                  <InputField type="text" value={email} onChangeText={(e) => { setEmail(e) }} />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text lineHeight="$xs">
                  şifre
                </Text>
                <Input textAlign="center">
                  <InputField type="password" value={pass} onChangeText={(e) => { setPass(e) }} />
                </Input>

              </VStack>
              <Button
                w="$80"
                ml="$4"
                onPress={handleSubmit}
              >
                <ButtonText color="$white" disabled={email == "" && pass == "" ? true : false} >Giriş</ButtonText>
              </Button>
            </VStack>
          </FormControl>

          <HStack>
            <Pressable>
              <Text color="$blue500">şifremi unuttum  </Text>
            </Pressable>

            <Text>Hesabın yok mu?</Text>

            <Pressable onPress={() => navigate("register")} >
              <Text color="$blue500">
                Kayıt ol
              </Text>
            </Pressable>
          </HStack>
        </Box>
      </Center>
    </SafeAreaView>
  )
}

export default Login