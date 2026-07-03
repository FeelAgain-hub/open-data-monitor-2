fetch('http://localhost:3000/api/sync', { method: 'POST' })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
