
import React, { useState } from 'react'
import {
    Text,
    Box,
    HStack,
    Divider,
    Button,
} from "@gluestack-ui/themed";

import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

interface CommentButtonsProps {
    commentId: string
    voteCount: number,
    // commentCount: number
}


const CommentButtons: React.FC<CommentButtonsProps> = ({ commentId, voteCount }) => {
    const { navigate } = useNavigation();



    //FAVROITED
    const [favorited, setFavorited] = useState(false);

    //SAVED
    const [saved, setSaved] = useState(false);


    return (
        <>
            <Box w="$80" alignSelf="center">
                <HStack space="sm" justifyContent="space-between">
                    {/* TODO: İLERDE EKLENİCK FEATURE */}
                    {/* <Button
                        size="sm"
                        variant="link"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                    >
                        <HStack space="xs">
                            <Ionicons name="chatbubble-outline" size={19} color="black" />
                            <Pressable onPress={() => navigate("postDetail", {
                                commentId: commentId
                            })}>
                                <Text fontSize={12}>{commentCount} yorum</Text>
                            </Pressable>
                        </HStack>
                    </Button> */}
                    <Button
                        size="sm"
                        variant="link"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={() => setFavorited(!favorited)}
                    >
                        <HStack space="xs" >
                            {
                                favorited ? (<Ionicons name="heart-sharp" size={19} color="red" />) : (<Ionicons name="heart-outline" size={19} color="black" />)
                            }
                            <Text fontSize={12}>{voteCount} favori</Text>
                        </HStack>
                    </Button>

                    <Button
                        size="sm"
                        variant="link"
                        action="primary"
                        isDisabled={false}
                        isFocusVisible={false}
                        onPress={() => setSaved(!saved)}
                    >
                        {
                            saved ? (<Ionicons name="bookmark" size={19} color="black" />) : (<Ionicons name="bookmark-outline" size={19} color="black" />)
                        }
                    </Button>

                </HStack>

            </Box>
            <Divider my="$1" />
        </>
    )
}

export default CommentButtons