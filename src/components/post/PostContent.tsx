import React from 'react'
import {
    Text,
    Box,
    HStack,
    Pressable,
    Image,
    ScrollView,
    Center
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native"

interface PostContent {
    id: string,
    title: string,
    description: string,
    images: string[]

}

interface PostContentProps {
    content: PostContent
}


const PostContent: React.FC<PostContentProps> = ({ content }) => {

    const { navigate } = useNavigation();

    return (
        <>

            <Box w="full" left={10} right={10} >
                <Pressable
                    onPress={() => {
                        navigate("postDetail", {
                            postId: content?.id
                        })
                    }}
                >
                    <Text fontSize={14}  >
                        {content?.title}
                    </Text>
                </Pressable>
            </Box>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <HStack space="sm">

                    {content?.images && content?.images?.length > 0 && content?.images?.map((uri, index) => (
                        <Pressable key={index} onPress={() => {
                            return navigate("postDetail", {
                                postId: content?.id
                            });
                        }}>
                            <Image
                                key={index}
                                size="2xl"
                                alt="none"
                                borderRadius={5}
                                source={{
                                    uri: uri,
                                }}
                            />
                        </Pressable>
                    ))}

                </HStack>
            </ScrollView>

        </>
    )
}

export default PostContent