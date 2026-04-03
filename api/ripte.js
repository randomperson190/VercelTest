export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.argentina.gob.ar/trabajo/seguridadsocial/ripte");
    const html = await response.text();

    let m = html.match(/\$\s*([0-9]+(?:\.[0-9]{3})*,[0-9]{2})/);

    if (!m) {
      return res.status(500).json({ error: "No se encontró RIPTE" });
    }

    let valorStr = m[1];
    let ripte = parseFloat(
      valorStr
        .replace(/\./g, "")
        .replace(",", ".")
    );

    res.status(200).json({ ripte });

  } catch (err) {
    res.status(500).json({ error: "Error obteniendo RIPTE" });
  }
}
