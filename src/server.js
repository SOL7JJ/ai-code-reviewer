const path = require('path');
const express = require('express');

const analyzeRouter = require('./routes/analyze');

const app = express();
const PORT = process.env.PORT || 3000;

// Server composition:
// - parse JSON request bodies
// - serve the static frontend from /public
// - expose API routes from /src/routes
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/analyze', analyzeRouter);

app.listen(PORT, () => {
  console.log(`AI code reviewer running at http://localhost:${PORT}`);
});
