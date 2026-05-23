const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;
  setLoading(true);

  try {
    let userId = null;

    // =========================
    // 1. LOGIN FIRST
    // =========================
    const { data: loginData } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginData?.user) {
      userId = loginData.user.id;
    }

    // =========================
    // 2. SIGNUP IF LOGIN FAILS
    // =========================
    if (!userId) {
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (signUpError) {
        alert(signUpError.message);
        setLoading(false);
        return;
      }

      const user =
        signUpData?.user ||
        signUpData?.session?.user;

      if (!user) {
        alert("Erreur création utilisateur");
        setLoading(false);
        return;
      }

      userId = user.id;
    }

    console.log("USER ID FINAL:", userId);

    if (!userId) {
      alert("UserId null → problème auth Supabase");
      setLoading(false);
      return;
    }

    // petit délai (évite bug session)
    await new Promise((res) => setTimeout(res, 300));

    // =========================
    // 3. UPLOAD PHOTO
    // =========================
    let photoUrl = "";

    if (photo) {
      const fileExt = photo.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase
        .storage
        .from("artisans")
        .upload(fileName, photo);

      if (uploadError) {
        alert(uploadError.message);
        setLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase
        .storage
        .from("artisans")
        .getPublicUrl(fileName);

      photoUrl = publicUrlData.publicUrl;
    }

    // =========================
    // 4. INSERT ARTISAN
    // =========================
    const { error: artisanError } = await supabase
      .from("artisans")
      .insert([
        {
          user_id: userId,
          nom,
          telephone,
          quartier,
          ville,
          metier,
          description,
          email,
          photo: photoUrl,
        },
      ]);

    if (artisanError) {
      alert(artisanError.message);
      console.log(artisanError);
      setLoading(false);
      return;
    }

    alert("Inscription réussie ✅");

    // RESET FORM
    setNom("");
    setTelephone("");
    setQuartier("");
    setVille("");
    setMetier("");
    setDescription("");
    setEmail("");
    setPassword("");
    setPhoto(null);

  } catch (err) {
    console.log(err);
    alert("Erreur d'inscription");
  }

  setLoading(false);
};