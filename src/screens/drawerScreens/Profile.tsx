import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ModalContent, ModalCloseButton, Heading, Divider, ModalBody, ModalFooter, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, HStack, Image, Modal, VStack, ModalBackdrop, ButtonText } from '@gluestack-ui/themed'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons';



const Profile = ({ navigation }) => {

  const { auth, onLogout } = useAuth();
  const { navigate } = useNavigation();
  const ref = React.useRef(null)

  // HAEDERRIGHT DOTS ACTIONSHEET
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  //LOGOUT MODAL
  const [showModal, setShowModal] = useState(false)

  const handleLogout = async () => {
    try {

      await onLogout();

    } catch (error) {
      console.log(error)
    }

  }

  useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (

        <Pressable onPress={handleClose} marginRight={10} >
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Pressable>

      )
    })

  }, [])

  return (

    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <VStack space="lg">
          <Box w="$96"  >
            <HStack space="md" >
              <Box>
                <Pressable>
                  <Image
                    alt=""
                    source={{
                      uri: "https://www.math.hkust.edu.hk/~masyleung/Teaching/CAS/MATLAB/image/images/cameraman.jpg"
                    }}
                    style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 15 }}
                  />
                </Pressable>
              </Box>
              <Box>
                <HStack space="md" alignItems="center" justifyContent="space-between" >
                  <Heading>USER NAME</Heading>
                  <Text>{auth.user}</Text>
                </HStack>
              </Box>
            </HStack>

          </Box>
          <Button><Text>Profili Düzenle</Text></Button>
          <Divider my="$0.5" />
        </VStack>


        {/* HEADER DOTS ACTIONSHEET */}
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
          <ActionsheetBackdrop />
          <ActionsheetContent h="$72" zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={() => setShowModal(true)}>
              <ActionsheetItemText color='red' >Çıkış</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>Boşver</ActionsheetItemText>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>

        {/* LOGOUT MODAL */}
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
          }}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalBody>
              <Text>
                Hesabından çıkış yapmak üzeresin. Çıkış yapmak istediğine emin misin?
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                <ButtonText>vazgeçtim</ButtonText>
              </Button>
              <Button
                size="sm"
                action="negative"
                borderWidth="$0"
                onPress={handleLogout}
              >
                <ButtonText>Görüşürüz</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </ScrollView>
    </SafeAreaView>




  )
}

export default Profile