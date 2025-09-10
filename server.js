const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static files serve karna (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Homepage serve karna
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
