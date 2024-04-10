import { View, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useLayoutEffect } from "react";

import Post from '../../components/post/Post'
import ButtonFab from '../../components/ButtonFab';
import { useAuth } from '../../hooks/UseAuth'; 
import { useNavigation } from '@react-navigation/native';
import { Center } from '@gluestack-ui/themed';



const Feed = ({ navigation }) => {
    const { auth } = useAuth();

    const { navigate } = useNavigation();


    useEffect(() => {
    });


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
            ),
        });
    }, []);

    return (
        <View style={{}} >
            <Center>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>


            </Center>

            <ButtonFab />

        </View>
    )
}

export default Feed