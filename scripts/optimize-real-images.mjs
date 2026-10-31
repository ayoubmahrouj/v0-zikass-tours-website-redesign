// One-off: convert the client's WhatsApp photos to SEO-named WebP files.
import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import path from "node:path"

const SRC = "D:/Transport Touristique/zikasstours/image"
const OUT = path.join(process.cwd(), "public/images/real")

// [source file, output name]
const MAP = [
  ["WhatsApp Image 2026-10-14 at 14.37.38.jpeg", "private-van-riad-marrakech-sunset"],
  ["WhatsApp Image 2026-10-21 at 22.41.30.jpeg", "private-van-hotel-palmeraie-marrakech"],
  ["WhatsApp Image 2026-10-21 at 22.41.35.jpeg", "black-fiat-van-marrakech-street"],
  ["WhatsApp Image 2026-10-21 at 22.41.39qw.jpeg", "private-van-door-open-riad-marrakech"],
  ["WhatsApp Image 2026-10-21 at 22.41.17.jpeg", "private-van-luggage-airport-transfer"],
  ["WhatsApp Image 2026-10-21 at 22.52.50.jpeg", "private-van-interior-leather-seats"],
  ["WhatsApp Image 2026-10-21 at 22.41.37.jpeg", "zikasstours-driver-ourika-valley"],
  ["WhatsApp Image 2026-10-21 at 22.41.40w.jpeg", "zikasstours-van-ourika-valley-red-cliffs"],
  ["WhatsApp Image 2026-10-21 at 22.41.40.jpeg", "zikasstours-driver-portrait-marrakech"],
  ["WhatsApp Image 2026-10-21 at 22.52.46m.jpeg", "zikasstours-driver-atlas-mountains-road"],
  ["WhatsApp Image 2026-10-21 at 22.41.34.jpeg", "zikasstours-driver-hassan-ii-mosque-casablanca"],
  ["WhatsApp Image 2026-10-21 at 22.41.39q.jpeg", "agafay-desert-van-hot-air-balloons"],
  ["WhatsApp Image 2026-10-21 at 22.41.39qq.jpeg", "agafay-desert-hot-air-balloons-sunrise"],
  // Faces of real clients — only published with their written consent.
  ["WhatsApp Image 2026-10-21 at 22.41.39.jpeg", "essaouira-day-trip-clients-with-driver"],
  ["WhatsApp Image 2026-10-21 at 22.52.50j.jpeg", "agafay-desert-clients-with-driver"],
]

await mkdir(OUT, { recursive: true })

for (const [file, name] of MAP) {
  const src = path.join(SRC, file)
  const out = path.join(OUT, `${name}.webp`)
  const info = await sharp(src)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(out)
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}
