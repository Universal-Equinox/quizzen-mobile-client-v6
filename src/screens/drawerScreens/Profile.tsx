import { View, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Text, ModalContent, Heading, Divider, ModalBody, ModalFooter, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, Button, HStack, Image, Modal, VStack, ModalBackdrop, ButtonText } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import PostMinimized from '../../components/post/PostMinimized'
import { useAuth } from '../../hooks/UseAuth'
import { PostType } from '../../types/PostType'
import { GetUserPosts } from '../../services/PostService'
import { GetUserByEmail, GetUserById } from '../../services/UserService'
import { UserType } from '../../types/UserType';



const Profile = ({ navigation }) => {

  const { auth, onLogout } = useAuth();
  const { navigate } = useNavigation();
  const ref = React.useRef(null)

  //USERS POSTS
  const [posts, setPosts] = useState<PostType[]>([]);

  //USER INFO
  const [userInfo, setUserInfo] = useState<UserType>();

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

  useEffect(() => {
    try {

      if (!userInfo) {

        GetUserByEmail(auth.user).then(res => {
          setUserInfo(res);


          GetUserPosts(res.id).then(res => {
            setPosts(res);
          }).catch(err => {
            console.log(err);
          })

        }).catch(err => {
          console.log(err)
        })



      }

    } catch (error) {

    }
  }, [])

  useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (

        <Pressable onPress={handleClose} right={10} w={50} style={{}} >
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Pressable>

      )
    })

  }, [])

  return (

    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <ScrollView showsVerticalScrollIndicator={false}  >
        <VStack space="lg" top={10} >
          {/* HEADER */}
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
                  <Heading>{userInfo?.firstName} {userInfo?.lastName}</Heading>
                  <Text>{userInfo?.userName}</Text>
                </HStack>
              </Box>
            </HStack>

          </Box>
          {/* BUTTON */}
          <Box>
            <Button><Text>Profili Düzenle</Text></Button>
            <Divider my="$0.5" />
          </Box>

          {/* USERS POSTS */}
          <Box>
            <Pressable>
              <Text color="$blue500">Tümünü Görüntüle...</Text>
            </Pressable>

            {posts.length > 0 && posts.map(post => (

              <PostMinimized key={post.id} post={post} />
            ))}

          </Box>
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
    </View>




  )
}

export default Profile