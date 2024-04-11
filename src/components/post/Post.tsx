import React from 'react'
import {
  Box,
  VStack,
  Text
} from "@gluestack-ui/themed";
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostButtons from './PostButtons';
import PostBadges from './PostBadges';
import { PostType } from '../../types/PostType';


interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Box w={"full"} paddingVertical="$1" marginVertical={5} borderRadius={15}>
        <VStack space="md">
          <PostHeader postUserData={post.user} postCreatedDate={post.createdDate} />
          <PostContent content={{ id: post.id, title: post.title, description: post.description, images: post.images }} />
          <PostBadges tags={post.tags} />
          <PostButtons postId={post.id} commentCount={post.answerCount} voteCount={post.voteCount} />

        </VStack>

      </Box>
    </>
  )
}

export default Post