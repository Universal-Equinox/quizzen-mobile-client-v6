import React, { useState } from 'react'
import {
    Text,
    Avatar,
    AvatarImage,
    Heading,
    Pressable,
    Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText, Box, HStack, VStack,
} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native"
import { Ionicons } from '@expo/vector-icons';


const PostHeader = () => {

    const { navigate } = useNavigation();

    // HAEDERRIGHT DOTS ACTIONSHEET
    const [showActionsheet, setShowActionsheet] = useState(false)
    const handleClose = () => setShowActionsheet(!showActionsheet)

    return (
        <>
            <VStack>
                <HStack space="md" alignItems="center" justifyContent="space-between">
                    <Box justifyContent="flex-start" w="$75" >
                        <HStack space="sm" alignItems="center">

                            <Pressable onPress={() => { navigate("userProfile") }} >
                                <Avatar>
                                    <AvatarImage
                                        alt="username"
                                        source="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    ></AvatarImage>
                                </Avatar>
                            </Pressable>

                            <Pressable onPress={() => { navigate("userProfile") }} ><Heading fontSize={15}>users name</Heading></Pressable>

                            <Pressable onPress={() => { navigate("userProfile") }} ><Text fontSize={11}>@username</Text></Pressable>
                        </HStack>
                    </Box>
                    <Box justifyContent='flex-end' w="$25" >
                        <HStack space="sm" >
                            <Text fontSize={10}>06:39 PM</Text>

                            <Pressable onPress={handleClose} >
                                <Ionicons name="ellipsis-vertical" size={17} color="black" />
                            </Pressable>
                        </HStack>
                    </Box>
                </HStack>
            </VStack>

            {/* HEADER DOTS ACTIONSHEET */}
            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                <ActionsheetBackdrop />
                <ActionsheetContent h="$72" zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={() => { }}>
                        <ActionsheetItemText  >paylaş</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>şikayet</ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </>
    )
}

export default PostHeader