import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!
);

interface signInProps {
  email: string;
  password: string;
}

interface signUpProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}



export const signUpWithEmail = async ({
  email,
  password,
  firstname,
  lastname,
}: signUpProps) => {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstname,
        last_name: lastname,
      },
    },
  });
  if (signUpError) {
    console.log("Error sign up", signUpError.message);
    return;
  }
  return data;
};

export const getActiveSession = async () => {
  const { data, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) throw sessionError;
  return data.session;
};
