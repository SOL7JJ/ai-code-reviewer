const form = document.getElementById('review-form');
const codeInput = document.getElementById('code-input');
const statusMessage = document.getElementById('status-message');
const resultOutput = document.getElementById('result-output');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  statusMessage.textContent = 'Analyzing...';
  resultOutput.textContent = '';

  try {
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: codeInput.value })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Analysis failed.');
    }

    statusMessage.textContent = `Status: ${data.status}`;
    resultOutput.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    statusMessage.textContent = 'Request failed.';
    resultOutput.textContent = error.message;
  }
});
