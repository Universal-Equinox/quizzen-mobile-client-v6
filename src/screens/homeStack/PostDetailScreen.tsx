import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { VStack } from "@gluestack-ui/themed"

import CommentCard from '../../components/CommendCard'
import Post from '../../components/Post'


const PostDetail = () => {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space="md" reversed={false} flex={1}>
                    <Post />

                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </VStack>
            </ScrollView>
        </View>
    )
}

export default PostDetail