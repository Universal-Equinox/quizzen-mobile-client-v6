import React from 'react'
import {
    Text,
    Avatar,
    AvatarImage,
    Box,
    HStack,
    Heading,
    VStack,
    Pressable,
    BadgeText,
    Image,
    Divider,
    Button,
    ScrollView
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native"


const PostContent = () => {

    const { navigate } = useNavigation();

    return (
        <>
            <Box w={"$96"}>
                <Pressable
                    onPress={() => {
                        navigate("postDetail")
                    }}
                >
                    <Text fontSize={14}>
                        its posts character conte its posts characterits posts character
                        its posts character its posts character its posts character nt.
                        200 character content. posts character its posts character its
                        posts character nt. 200 character content.
                    </Text>
                </Pressable>
            </Box>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <HStack space="sm">


                    <Pressable onPress={() => navigate("postDetail")}>

                        <Image
                            size="2xl"
                            alt="none"
                            borderRadius={5}
                            source={{
                                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            }}
                        />
                    </Pressable>

                    <Pressable onPress={() => navigate("postDetail")}>

                        <Image
                            size="2xl"
                            alt="none"
                            borderRadius={5}
                            source={{
                                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                            }}
                        />
                    </Pressable>
                </HStack>
            </ScrollView>
        </>
    )
}

export default PostContent