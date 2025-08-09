// A mock function to mimic making an async request for data
export function fetchAuth() {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://localhost:8000/`);
    const data = await response.json();
    resolve({ data });
  });
}
