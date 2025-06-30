import { createRequire } from "module";


const require = createRequire(import.meta.url);

const express = require("express");


import { test } from "./src/api/test.js";


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

test(app)
app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});
app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from backend server'
	})
});