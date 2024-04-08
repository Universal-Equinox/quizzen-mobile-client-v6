import { Pressable, View, Image } from "react-native";
import React from "react";
import {
    Box,
    HStack,
    VStack,
    Avatar,
    AvatarImage,
    Heading,
    Text,
    Divider,
    Button,

} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native"
import { FontAwesome5 } from "@expo/vector-icons";


const CommentCard = () => {

    const { navigate } = useNavigation();

    return (
        <View
            style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
        >
            <Box w="$96" paddingVertical="$1" marginVertical={5} borderRadius={5}>
                <VStack>
                    <HStack space="sm" alignItems="center" justifyContent="space-between">
                        <Box justifyContent="space-between" w="$80">
                            <HStack space="sm" alignItems="center">
                                <Avatar size="sm">
                                    <AvatarImage
                                        alt="username"
                                        source="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    ></AvatarImage>
                                </Avatar>
                                <Heading fontSize={15}>users name</Heading>
                                <Text fontSize={11}>@username</Text>
                            </HStack>
                        </Box>

                        <Text fontSize={10}>06:39 PM</Text>
                    </HStack>
                    <Box justifyContent="space-between" w="$80">
                        <HStack>
                            <Box w="$80">
                                <Pressable
                                    onPress={() => {
                                        navigate("commentDetail")
                                    }}
                                >
                                    <Text>
                                        content askdijfasd iasdlfiasdj nasd sadavmai isk jial apsd
                                        apsd kpsao ksapo kspo sşkdfaşs kşals k sa s asşkd as s s a s
                                    </Text>
                                </Pressable>
                            </Box>

                            <Box w="$20">
                                <VStack space="xs">
                                    <Box w="$12" h="$12" borderRadius={5} bgColor="aqua" style={{ overflow: 'hidden' }}>
                                        <Image
                                            source={{
                                                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            }}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: 1
                                            }}
                                            resizeMode="cover"
                                        />
                                    </Box>
                                    <Box w="$12" h="$12" borderRadius={5} bgColor="aqua" style={{ overflow: 'hidden' }}>
                                        <Image
                                            source={{
                                                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            }}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: 1
                                            }}
                                            resizeMode="cover"
                                        />
                                    </Box>
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>

                    {/* BUTTONS */}
                    <Box w="$80" alignSelf="center">
                        <HStack space="sm" justifyContent="space-between">
                            <Button
                                size="sm"
                                variant="link"
                                action="primary"
                                isDisabled={false}
                                isFocusVisible={false}
                            >
                                <FontAwesome5 name="comment" size={15} />
                                {/* <Text fontSize={12}>4</Text> */}
                            </Button>
                            <Button
                                size="sm"
                                variant="link"
                                action="primary"
                                isDisabled={false}
                                isFocusVisible={false}
                            >
                                <FontAwesome5 name="heart" size={15} />
                                {/* <Text fontSize={12}>4</Text> */}
                            </Button>

                            <Button
                                size="sm"
                                variant="link"
                                action="primary"
                                isDisabled={false}
                                isFocusVisible={false}
                            >
                                <FontAwesome5 name="bookmark" size={15} />
                                {/* <Text fontSize={12}>4</Text> */}
                            </Button>

                            <Button
                                size="sm"
                                variant="link"
                                action="primary"
                                isDisabled={false}
                                isFocusVisible={false}
                            >
                                <FontAwesome5 name="share-alt" size={15} />
                                {/* <Text fontSize={12}>4</Text> */}
                            </Button>
                        </HStack>
                    </Box>
                </VStack>
            </Box>

            <Divider my="$1" />
        </View>
    );
};

export default CommentCard;
