export async function fetchHealth() {
  const response = await fetch('http://localhost:4000/health');
  return response.json();
}
