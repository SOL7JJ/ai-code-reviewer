function buildSummary(code) {
  const lines = code.split('\n').length;
  const characters = code.length;

  return `Mock analysis completed for ${lines} line(s) and ${characters} character(s).`;
}

function analyzeCode(code) {
  return {
    summary: buildSummary(code),
    feedback: [
      'Naming looks generally readable, but a few identifiers could be more descriptive.',
      'Consider extracting repeated logic into helper functions if this grows further.',
      'Add tests around edge cases before wiring this to a real AI provider.'
    ],
    score: 8,
    status: 'mocked'
  };
}

module.exports = {
  analyzeCode
};
