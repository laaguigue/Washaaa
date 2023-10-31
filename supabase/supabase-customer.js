//zfva3eSm7QhuVsXT
//https://qihpsqnovvzbytexwzrf.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpaHBzcW5vdnZ6Ynl0ZXh3enJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNzI5MDQsImV4cCI6MjAxMTY0ODkwNH0.fzA1tlONBZLUd9MNq4PgZI0ezQHehNuiiEnNYlbv7oI

import { createClient } from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from "../supabase";



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

const supabaseUrl = "https://qihpsqnovvzbytexwzrf.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpaHBzcW5vdnZ6Ynl0ZXh3enJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNzI5MDQsImV4cCI6MjAxMTY0ODkwNH0.fzA1tlONBZLUd9MNq4PgZI0ezQHehNuiiEnNYlbv7oI";

export const supabase_customer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
