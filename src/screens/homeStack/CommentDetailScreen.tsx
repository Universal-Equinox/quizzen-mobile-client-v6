import { View, Text } from 'react-native'
import React from 'react'
import PostHeader from '../../components/post/PostHeader'
import PostContent from '../../components/post/PostContent'
import PostButtons from '../../components/post/PostButtons'
import { Box, Center } from '@gluestack-ui/themed'
import { VStack } from '@gluestack-ui/themed'

const CommentDetail = () => {
    return (
        <View>
            <Center>
                <Box marginTop={15} style={{ width: "97%" }} >
                    <VStack space="md" >

                        <PostHeader />
                        <PostContent />
                        <PostButtons />
                    </VStack>
                </Box>
            </Center>
        </View>
    )
}

export default CommentDetail