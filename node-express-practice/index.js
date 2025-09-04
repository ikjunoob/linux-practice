const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	        res.send("Hello Express from groom.io!");
});

app.listen(PORT, () => {
	        console.log(`🚀 Server is running on http://localhost:${PORT}`);
}); // <-- 이렇게 주석을 제거하고 괄호를 닫아주세요.
