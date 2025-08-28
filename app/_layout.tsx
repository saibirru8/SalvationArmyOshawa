import { Slot } from "expo-router";
import { AuthProvider, useAuth } from "@/utils/authState";
import "../globals.css";

export default function RootLayout() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}