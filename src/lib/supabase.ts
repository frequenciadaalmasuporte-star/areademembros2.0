import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ossigehbdnuntjuxbhhy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zc2lnZWhiZG51bnRqdXhiaGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1NjU4MzMsImV4cCI6MjA3MzE0MTgzM30.nUbHzXakGUQ2u4_7QuSQR1yXR1lFnFXME-wIkg9HBjo';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Types
export interface UserProfile {
  id: string;
  name: string | null;
  document: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface Purchase {
  id: string;
  user_id: string;
  customer_name: string;
  customer_email: string;
  customer_document: string | null;
  customer_phone: string | null;
  product_id: string;
  product_name: string;
  product_price: number;
  payment_method: string;
  payment_status: string;
  payment_amount: number;
  event_type: string;
  webhook_data: any;
  created_at: string;
}

export interface UserModule {
  id: string;
  user_id: string;
  module_id: string;
  unlocked_at: string;
}