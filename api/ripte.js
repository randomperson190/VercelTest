export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.argentina.gob.ar/trabajo/seguridadsocial/ripte");
    const html = await response.text();

    const match = html.match(/\$\s*([0-9]+(?:\.[0-9]{3})*,[0-9]{2})/);

    if (!match) {
      return res.status(500).json({ error: "No se encontró RIPTE" });
    }

    const valor = parseFloat(
      match[1]
        .replace(/\./g, "")
        .replace(",", ".")
    );

    res.status(200).json({ ripte: valor });

  } catch (err) {
    res.status(500).json({ error: "Error obteniendo RIPTE" });
  }
}
