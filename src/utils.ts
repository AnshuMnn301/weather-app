export async function fetchCountryDetails(text: string) {
  const resp = await fetch(`https://restcountries.com/v3.1/name/${text}`);
  const data = await resp.json();
  return data;
}
