import { View, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import {
    VStack,
    Center,
    Box,
    Text
} from "@gluestack-ui/themed";

import PostBadges from '../../components/post/PostBadges';
import PostHeader from '../../components/post/PostHeader';
import PostContent from '../../components/post/PostContent';
import PostButtons from '../../components/post/PostButtons';
import ButtonFab from '../../components/ButtonFab';
import PostMinimized from '../../components/post/PostMinimized';
import { GetPostById, GetPostComments } from '../../services/PostService';
import { PostType } from '../../types/PostType';
import CommentMinimized from '../../components/comment/commentMinimized';
import { CommentType } from '../../types/CommentType';


const PostDetail = ({ route, navigation }) => {

    const { postId } = route.params;

    const [post, setPost] = useState<PostType>();
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {

        if (!post) {

            GetPostById(postId).then(res => {
                setPost(res);
            }).catch(err => {
                console.error(err);
            })
        }

        if (comments.length == 0) {
            GetPostComments(postId).then(res => {
                setComments(res);
            }).catch(err => {
                console.log(err);
            })

        }

    }, [post, setPost])


    useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => (<PostBadges tags={post?.tags} />),
        })
    }, [])

    return (
        <View>
            <Center>
                <Box w={"full"} marginTop={20}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <VStack space="md" reversed={false} flex={1}>

                            <PostHeader postUserData={post?.user} postCreatedDate={post?.createdDate} />
                            <PostBadges tags={post?.tags} />
                            <PostContent content={{ id: post?.id, title: post?.title, description: post?.description, images: post?.images }} />
                            <PostButtons commentCount={post?.answerCount} voteCount={post?.voteCount} />

                            {
                                comments.map((comment) => (

                                    <CommentMinimized key={comment.id} comment={comment} />
                                ))
                            }

                        </VStack>
                    </ScrollView>
                </Box>

                <Text>hello</Text>
            </Center>
            <ButtonFab />
        </View>
    )
}

export default PostDetail