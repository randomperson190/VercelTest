export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.argentinadatos.com/v1/finanzas/indices/inflacion");
    const data = await response.json();

    // agarrar el último dato
    const ultimo = data[data.length - 1];

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(ultimo);

  } catch (error) {
    res.status(500).json({ error: "Error obteniendo datos" });
  }
}
