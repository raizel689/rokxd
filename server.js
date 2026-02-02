import express from "express";
const app = express();

// 🔹 Redirige toutes les requêtes vers ton bot HTTP
app.get("*", (req, res) => {
  res.redirect("http://fi2.bot-hosting.net:20351/");
});

// 🔹 Port automatique (Render / Railway / Vercel)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
