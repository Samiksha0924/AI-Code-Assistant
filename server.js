const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
  const code = req.body.code;
  
 app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
}); 

  // Unique execution ID per request (multi-user proof)
  const executionId = crypto.randomUUID();

  console.log(`▶ Execution started: ${executionId}`);

  // Basic validation (BONUS)
  if (code.includes("while True") || code.includes("for (;;")) {
    return res.json({
      output: "⚠️ Warning: Possible infinite loop detected",
    });
  }

  const python = spawn("python", ["-c", code]);

  let output = "";
  let error = "";

  const timeout = setTimeout(() => {
    python.kill();
    return res.json({
      output: "⏱️ Execution timed out (possible infinite loop)",
    });
  }, 3000);

  python.stdout.on("data", (data) => {
    output += data.toString();
  });

  python.stderr.on("data", (data) => {
    error += data.toString();
  });

  python.on("close", () => {
    clearTimeout(timeout);

    console.log(`✔ Execution finished: ${executionId}`);

    if (error) {
      return res.json({ output: `❌ Error:\n${error}` });
    }

    res.json({ output });
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
