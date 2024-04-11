import { Pressable, View, Image } from "react-native";
import React, { useState } from "react";
import {
    Box,
    HStack,
    VStack,
    Text,
    Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText

} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native"
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import { PostType, PostUserType } from "../../types/PostType";
import { CommentType } from "../../types/CommentType";
import PostBadges from "./PostBadges";


interface PostMinimizedProps {
    post: PostType;


}

const PostMinimized: React.FC<PostMinimizedProps> = ({ post }) => {
    const { navigate } = useNavigation();

    // HAEDERRIGHT DOTS ACTIONSHEET
    const [showActionsheet, setShowActionsheet] = useState(false)
    const handleClose = () => setShowActionsheet(!showActionsheet)

    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            <Box paddingVertical="$1" style={{ width: "96%" }}>
                <VStack>

                    <PostHeader postUserData={post.user} postCreatedDate={post.createdDate} />
                    <PostBadges tags={post.tags} />

                    <Box justifyContent="space-between" style={{ width: "80%" }}>
                        <HStack>
                            <Box w="auto">
                                <Pressable
                                    onPress={() => {
                                        navigate("commentDetail")
                                    }}
                                >
                                    <Text>
                                        {post?.title}
                                    </Text>
                                </Pressable>
                            </Box>

                            <Box w="$20" style={{ left: 20 }} >
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

                    <PostButtons postId={post.id} commentCount={post.answerCount} voteCount={post.voteCount} />
                </VStack>
            </Box>



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
        </View>
    );
}

export default PostMinimized