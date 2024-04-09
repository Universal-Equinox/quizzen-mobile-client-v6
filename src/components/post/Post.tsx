import React from 'react'
import {
  Box,
  VStack,
  Divider,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native"
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostButtons from './PostButtons';
import PostBadges from './PostBadges';

const Post = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Box w="$96" paddingVertical="$1" marginVertical={5} borderRadius={15}>
        <VStack space="md">
          <PostHeader />
          <PostContent />
          <PostBadges />
          <PostButtons />

        </VStack>
        
      </Box>
    </>
  )
}

export default Post