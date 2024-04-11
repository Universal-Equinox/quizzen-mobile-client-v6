import { View, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useLayoutEffect, useState } from "react";

import Post from '../../components/post/Post'
import ButtonFab from '../../components/ButtonFab';

import { Center } from '@gluestack-ui/themed';
import { GetPosts } from '../../services/PostService';



const Feed = ({ navigation }) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {

        if (posts.length <= 0) {

            GetPosts().then(res => {
                setPosts(res);
            }).catch(err => {
                console.error(err);
            })
        }

    }, [posts, GetPosts]);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        source={{
                            uri: "https://www.math.hkust.edu.hk/~masyleung/Teaching/CAS/MATLAB/image/images/cameraman.jpg"
                        }}
                        style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                    />

                </Pressable>
            )
        });
    }, []);

    return (
        <View style={{}} >
            <Center>
                <ScrollView showsVerticalScrollIndicator={false} >

                    {posts.map(post => (

                        <Post key={post.id} post={post} />
                    ))}

                </ScrollView>


            </Center>

            <ButtonFab />

        </View>
    )
}

export default Feed