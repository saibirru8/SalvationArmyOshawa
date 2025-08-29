import { supabase } from "@/services/supabase";
import { Session, AuthError } from "@supabase/supabase-js";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used inside AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const initAuth = async () => {
    const { data } = await supabase.auth.getSession();
    console.log("Get Session Data - useAuth Hook", data.session);
    setSession(data.session);
    setLoading(false);
  };
  useEffect(() => {
    initAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    console.log("reading auth state change");
    console.log(`${listener}`);
    return () => listener.subscription.unsubscribe();
  }, []);


  return (
    <AuthContext value={{ session, loading }}>
      {children}
    </AuthContext>
  );
};
