import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env";
import Config from "react-native-config";
import { ReactNode } from "react";

const supabase = createClient(Config.SUPABASE_URL, Config.SUPABASE_ANON_KEY);

interface signInProps {
    email: string, 
    password: string
}

export const signInWithEmail = async ({email, password}: signInProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({email, password})
}