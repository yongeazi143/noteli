import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export async function (req, res) {
  try {
    const user = req.body;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    let supauser;

    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error(error);
      }

      supauser = data;

      if (!supauser) {
        const { data, error } = await supabase
          .from("users")
          .insert([{ user_id: user.id, email: user.email }]);

        if (error) {
          console.error(error);
        }

        supauser = data;
      }
    } catch (error) {
      console.error(error);
    }

    const user_data = {
      ...user,
      id: supauser?.id,
    };

    return res.status(200).json(user_data);
  } catch (error) {
    console.error("[CREATEUSER_ERROR]", error);
    return res.status(500).json({ error: "Internal Error" });
  }
};
