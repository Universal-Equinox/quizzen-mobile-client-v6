import { View, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'

import {
    VStack,
    Center,
    Box,
} from "@gluestack-ui/themed";

import CommentCard from '../../components/CommendCard'
import PostBadges from '../../components/post/PostBadges';
import PostHeader from '../../components/post/PostHeader';
import PostContent from '../../components/post/PostContent';
import PostButtons from '../../components/post/PostButtons';
import ButtonFab from '../../components/ButtonFab';


const PostDetail = ({ navigation }) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<PostBadges />),
        })
    }, [])

    return (
        <View>
            <Center>
                <Box w="$96" >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <VStack space="md" reversed={false} flex={1}>

                            <PostHeader />
                            <PostContent />
                            <PostButtons />

                            <CommentCard />
                            <CommentCard />

                        </VStack>
                    </ScrollView>
                </Box>
            </Center>
            <ButtonFab />
        </View>
    )
}

export default PostDetail