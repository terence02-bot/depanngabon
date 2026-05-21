import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahlezcjaaayskratdvan.supabase.co";
const supabaseAnonKey = "sb_publishable_hCOTsJiiSNtflEs1DERLBg_V-hFDtHR";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);