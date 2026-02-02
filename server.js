import express from "express";
const app = express();

// 🔹 Redirige tout vers ton bot HTTP
app.get("*", (req, res) => {
  res.redirect("fi2.bot-hosting.net:20351/");
});

// 🔹 Render fournit automatiquement le port via process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Redirect server running on port ${PORT}`));
