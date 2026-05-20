import { supabase } from "../app/supabase";

export const getAvis = async (artisanId) => {

  const { data } = await supabase
    .from("avis")
    .select("*")
    .eq("artisan_id", artisanId);

  return data || [];
};

export const moyenneAvis = (avis) => {

  if (!avis || avis.length === 0) return 0;

  const total = avis.reduce((sum, a) => sum + a.note, 0);

  return (total / avis.length).toFixed(1);
};