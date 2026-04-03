export default async function handler(req, res) {
  try {
    const API_KEY = "6e8cd355aad66657d1b38a66cd9f5033";
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL&api_key=${API_KEY}&file_type=json`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({ observations: data.observations });
  } catch (err) {
    res.status(500).json({ error: "Error obteniendo CPI" });
  }
}
