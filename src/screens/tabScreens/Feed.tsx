import { View, Pressable, Image, ScrollView } from 'react-native'
import { useEffect, useLayoutEffect } from "react";

import Post from '../../components/Post'
import { useAuth } from '../../contexts/AuthContext';
import { Fab, FabIcon } from '@gluestack-ui/themed';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
        <View>
            <ScrollView>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </ScrollView>

            <Fab
                size="lg"
                placement="bottom right"
                isHovered={false}
                isDisabled={false}
                isPressed={false}
                onPress={() => {
                    navigate("new")
                }}
            >
                <FontAwesome5 name="plus" size={24} />
            </Fab>

        </View>
    )
}

export default Feed