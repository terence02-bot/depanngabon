import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://TON-PROJET.supabase.co";
const supabaseKey = "sb_publishable_hCOTsJiiSNtflEs1DERLBg_V-hFDtHR";

export const supabase = createClient(supabaseUrl, supabaseKey);