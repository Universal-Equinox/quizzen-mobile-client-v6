import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer";


import { Ionicons } from '@expo/vector-icons';
import { useEffect } from "react";
import PostDetail from "./src/screens/homeStack/PostDetailScreen";
import CommentDetail from "./src/screens/homeStack/CommentDetailScreen";
import Feed from "./src/screens/tabScreens/Feed";
import Notifications from "./src/screens/tabScreens/Notifications";
import Login from "./src/screens/Login";
import Profile from "./src/screens/drawerScreens/Profile";
import { useAuth } from "./src/contexts/AuthContext";
import Register from "./src/screens/Register";
import NewPostScreen from "./src/screens/homeStack/NewPostScreen";
import CameraScreen from "./src/screens/homeStack/cameraScreen";




// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
    const { auth } = useAuth();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} >
            <Drawer.Screen name="feed" component={HomeStackGroup} options={{ headerShown: false, drawerIcon: () => <Ionicons name="home" /> }} />
            <Drawer.Screen name="profile" component={Profile} options={{ headerShown: true, drawerIcon: () => <Ionicons name="person-sharp" />, headerTitle: `@${auth.user}` }} />
            <Drawer.Screen name="Settings" component={Profile} options={{ headerShown: true, drawerIcon: () => <Ionicons name="cog" /> }} />
            {/* <Drawer.Screen name="Log Out" component={Login} options={{ headerShown: false, drawerIcon: () => <Ionicons name="log-out" /> }} /> */}
        </Drawer.Navigator>
    );
}

//HOME STACK
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="tabgroup" component={TabGroup} options={{ headerShown: false }} />
            <HomeStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <HomeStack.Screen name="postDetail" component={PostDetail} options={{ headerTitle: "", presentation: "modal" }} />
            <HomeStack.Screen name="commentDetail" component={CommentDetail} options={{ presentation: "modal" }} />
            <HomeStack.Screen name="new" component={NewPostScreen} options={{ presentation: "modal" }} />
            <HomeStack.Screen name="camera" component={CameraScreen} options={{ presentation: "modal" }} />
            <HomeStack.Screen name="userProfile" component={Profile} options={{ presentation: "modal" }} />
        </HomeStack.Navigator>
    )

}

//AUTH STACK
const AuthStack = createNativeStackNavigator();

function AuthStackGroup() {

    return (
        <AuthStack.Navigator initialRouteName="login" >
            <AuthStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <AuthStack.Screen name="register" component={Register} options={{ headerShown: true, presentation: "fullScreenModal", headerTitle: "" }} />
        </AuthStack.Navigator>
    )

}

//TABS
const Tab = createBottomTabNavigator();

function TabGroup() {

    const { auth } = useAuth();


    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === "feed") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "notifications") {
                    iconName = focused ? "notifications-sharp" : "notifications-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />
            }
        })} >

            <Tab.Screen name="feed" component={Feed} options={{
                headerTitle: `@${auth.user}`
            }} />
            <Tab.Screen name="notifications" component={Notifications} />
        </Tab.Navigator>
    )
}

export default function RootLayout() {

    const { auth } = useAuth();

    useEffect(() => {
    }, [])

    return (

        <NavigationContainer>
            {
                auth?.user ? <DrawerGroup /> : <AuthStackGroup />
            }
        </NavigationContainer>
    )

}