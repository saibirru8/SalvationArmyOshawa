import {Redirect} from "expo-router";
import {AuthProvider, useAuth} from "@/utils/authState";
import {View, ActivityIndicator} from "react-native";

export default function Index() {
    const {session, loading} = useAuth();

    console.log(session);
    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
    console.log(session);
    if (!session) {
        // User not signed in → go to login screen
        return <Redirect href="/(auth)/sign-in"/>;
    }

    // User signed in → go to home tab
    return <Redirect href="/(tabs)/appointments"/>;
}