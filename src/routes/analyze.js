const express = require('express');

const { analyzeCode } = require('../services/reviewService');

const router = express.Router();

router.post('/', (req, res) => {
  const { code } = req.body;

  if (!code || !code.trim()) {
    return res.status(400).json({
      error: 'Code is required.'
    });
  }

  const result = analyzeCode(code);

  return res.json(result);
});

module.exports = router;
