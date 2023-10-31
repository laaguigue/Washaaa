import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase_customer } from "../supabase/supabase-customer";
import { NativeBaseProvider, Spinner, View } from "native-base";
import SetInfoStep from "./SetInfoStep";
import Colors from "./constants/Colors";
import FormStack from "./FormStack";


export default function Authentication() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    supabase_customer.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    supabase_customer.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
  }, []);


  return (

      <NativeBaseProvider>
        {loading ? (
          <View className="flex-1 justify-center items-center bg-white">
            <Spinner color={Colors.primary} size="lg" />
          </View>
        ) : session && session.user ? (
          <SetInfoStep key={session.user.id} session={session} />
        ) : (
          <FormStack session={session} />
        )}
      </NativeBaseProvider>
  
  );
}
