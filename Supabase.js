import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://rmxrrlpuplcsplrrtqxs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteHJybHB1cGxjc3BscnJ0cXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyODQyNTUsImV4cCI6MTk4NTg2MDI1NX0.KG28dA5FFFCilRFP-tWP0fNeFCebwVNw4QEtpXPa1nU'


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage, 
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,

    }
});