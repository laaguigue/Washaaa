import { createClient } from "@supabase/supabase-js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const AsyncStorage = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://xnhwcsmrleizinqhdbdy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuaHdjc21ybGVpemlucWhkYmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MzQ4NjksImV4cCI6MjAwMDUxMDg2OX0.Emi-i8NrYj3SqodjUl4mh6RtBzjAmR5PchV-ksfk8FE";

export const supabase_driver = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
