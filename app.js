/**
 * MAOS SKINCARE — Interactive Web Application
 * Tacna, Perú • Cosmética Coreana Auténtica
 * Based on DESIGN.md: shadowless, clean humanist aesthetic, pill buttons, flat tiles
 */

// Product Catalog Data with prices in Soles (PEN) and USD
const PRODUCTS_DATA = [
  {
    "id": "anua-niacinamide-10-txa-4",
    "folder": "Anua - Sérum Niacinamide 10 TXA 4",
    "cleanFile": "anua-niacinamide-10-txa-4.png",
    "brand": "Anua",
    "name": "Niacinamide 10% + TXA 4% Dark Spot Correcting Serum",
    "shortName": "Niacinamide 10% + TXA 4% Serum",
    "category": "serums",
    "categoryLabel": "Sérum & Tratamiento",
    "pricePEN": 90,
    "priceUSD": 26,
    "rating": 4.9,
    "reviewsCount": 142,
    "volume": "30 ml",
    "concern": "Manchas & Tono irregular",
    "concernSlug": "manchas",
    "skinType": "Todo tipo de piel, especialmente con manchas o tono apagado",
    "target": "Manchas oscuras, hiperpigmentación, marcas post-acné y tono desigual",
    "keyIngredients": [
      "Niacinamida 10%",
      "Ácido Tranexámico (TXA) 4%",
      "Arbutina 2%",
      "Ácido Hialurónico"
    ],
    "howToUse": "Aplica 3 a 4 gotas sobre el rostro limpio y tonificado, masajeando suavemente hasta su completa absorción. Úsalo tanto en la rutina de día como de noche. Aplica protector solar durante el día.",
    "bestSeller": true,
    "tag": "Bestseller",
    "image": "assets/products/anua-niacinamide-10-txa-4.png",
    "hoverImage": "assets/products/anua-niacinamide-10-txa-4-hover.png"
  },
  {
    "id": "arencia-retinal-booster-shot",
    "folder": "Arencia - Retinal Booster Shot",
    "cleanFile": "arencia-retinal-booster-shot.png",
    "brand": "Arencia",
    "name": "Retinal Booster Shot Tightening Care",
    "shortName": "Retinal Booster Shot",
    "category": "retinoides",
    "categoryLabel": "Retinoides & Antiedad",
    "pricePEN": 80,
    "priceUSD": 23,
    "rating": 4.8,
    "reviewsCount": 89,
    "volume": "30 g",
    "concern": "Líneas & Firmeza",
    "concernSlug": "antiedad",
    "skinType": "Piel con líneas de expresión, pérdida de firmeza o textura irregular",
    "target": "Líneas de expresión, poros dilatados, elasticidad y textura aterciopelada",
    "keyIngredients": [
      "Retinal estabilizado",
      "Péptidos bio-activos",
      "Extracto botánico de arroz",
      "Pantenol"
    ],
    "howToUse": "Uso nocturno. Aplica una cantidad del tamaño de un guisante sobre la piel seca después del tónico. Si es tu primera vez usando retinal, comienza 2-3 noches por semana e hidrata abundantemente.",
    "bestSeller": false,
    "tag": "Alta Eficacia",
    "image": "assets/products/arencia-retinal-booster-shot.png",
    "hoverImage": "assets/products/arencia-retinal-booster-shot-hover.png"
  },
  {
    "id": "arencia-vitamin-c-booster-shot",
    "folder": "Arencia - Vitamin C Booster Shot",
    "cleanFile": "arencia-vitamin-c-booster-shot.png",
    "brand": "Arencia",
    "name": "Vitamin C Booster Shot Radiance Concentrate",
    "shortName": "Vitamin C Booster Shot",
    "category": "vitamin-c",
    "categoryLabel": "Vitamina C & Luminosidad",
    "pricePEN": 80,
    "priceUSD": 23,
    "rating": 4.9,
    "reviewsCount": 76,
    "volume": "30 g",
    "concern": "Luminosidad & Tono",
    "concernSlug": "manchas",
    "skinType": "Piel opaca, con manchas solares o falta de vitalidad",
    "target": "Iluminación intensa, combate radicales libres y aporta glow instantáneo",
    "keyIngredients": [
      "Vitamina C pura micronizada",
      "Glutatión",
      "Extracto de Yuzu",
      "Ácido Ferúlico"
    ],
    "howToUse": "Aplica en la mañana sobre la piel limpia antes de tu crema hidratante. Finaliza siempre con protector solar de amplio espectro.",
    "bestSeller": false,
    "tag": "Glow Intenso",
    "image": "assets/products/arencia-vitamin-c-booster-shot.png",
    "hoverImage": "assets/products/arencia-vitamin-c-booster-shot-hover.png"
  },
  {
    "id": "anua-azelaic-acid-10-hyaluron",
    "folder": "Azelaic Acid 10 Hyaluron Redness Soothing Serum",
    "cleanFile": "anua-azelaic-acid-10-hyaluron.png",
    "brand": "Anua",
    "name": "Azelaic Acid 10% + Hyaluron Redness Soothing Serum",
    "shortName": "Azelaic Acid 10% Serum",
    "category": "serums",
    "categoryLabel": "Sérum Calmante & Anti-Rojeces",
    "pricePEN": 90,
    "priceUSD": 26,
    "rating": 4.9,
    "reviewsCount": 118,
    "volume": "30 ml",
    "concern": "Rojeces & Calma",
    "concernSlug": "rojeces",
    "skinType": "Piel con rosácea, rojeces persistentes, textura irregular o sensibilidad",
    "target": "Disminuye rojeces visibles, calma la inflamación y unifica el tono de piel reactiva",
    "keyIngredients": [
      "Ácido Azelaico 10%",
      "Complejo Hialurónico",
      "Centella Asiática (Cica)",
      "Zinc PCA"
    ],
    "howToUse": "Aplica 2 a 3 gotas sobre rostro limpio y seco. Da suaves toquecitos hasta su absorción. Apto para uso diario día y noche.",
    "bestSeller": true,
    "tag": "Anti-Rojeces",
    "image": "assets/products/anua-azelaic-acid-10-hyaluron.png",
    "hoverImage": "assets/products/anua-azelaic-acid-10-hyaluron-hover.png"
  },
  {
    "id": "celimax-vita-a-retinal-shot",
    "folder": "CELIMAX - The Vita-A Retinal Shot Tightening Booster",
    "cleanFile": "celimax-vita-a-retinal-shot.png",
    "brand": "CELIMAX",
    "name": "The Vita-A Retinal Shot Tightening Booster",
    "shortName": "The Vita-A Retinal Shot",
    "category": "retinoides",
    "categoryLabel": "Retinoides & Poros",
    "pricePEN": 75,
    "priceUSD": 22,
    "rating": 4.9,
    "reviewsCount": 64,
    "volume": "30 ml",
    "concern": "Poros & Elasticidad",
    "concernSlug": "antiedad",
    "skinType": "Piel con poros dilatados, primeros signos de edad o pérdida de firmeza",
    "target": "Reduce visiblemente la apariencia de poros, mejora la textura cutánea y promueve la renovación celular",
    "keyIngredients": [
      "Retinaldehído liposomado",
      "Niacinamida",
      "Pantenol",
      "Adenosina"
    ],
    "howToUse": "Uso exclusivo nocturno. Aplica una pequeña cantidad sobre las áreas que desees tratar o en todo el rostro después de hidratar bien.",
    "bestSeller": false,
    "tag": "Fórmula Clínica",
    "image": "assets/products/celimax-vita-a-retinal-shot.png",
    "hoverImage": "assets/products/celimax-vita-a-retinal-shot-hover.png"
  },
  {
    "id": "dr-althea-147-barrier-cream",
    "folder": "Dr. Althea - 147 Barrier Cream",
    "cleanFile": "dr-althea-147-barrier-cream.png",
    "brand": "Dr. Althea",
    "name": "Pro Lab 147 Barrier Cream",
    "shortName": "147 Barrier Cream",
    "category": "cremas",
    "categoryLabel": "Crema Reparadora de Barrera",
    "pricePEN": 82,
    "priceUSD": 24,
    "rating": 4.8,
    "reviewsCount": 95,
    "volume": "50 ml",
    "concern": "Reparación & Barrera",
    "concernSlug": "barrera",
    "skinType": "Piel seca, deshidratada o con barrera cutánea comprometida / sensibilizada",
    "target": "Restaura la barrera de hidratación, previene la pérdida transepidérmica de agua y alivia la tirantez",
    "keyIngredients": [
      "Ceramidas NP",
      "Extracto de Paeonia Albiflora",
      "Ácido Hialurónico",
      "Manteca de Karité"
    ],
    "howToUse": "Como último paso de tu rutina, aplica una cantidad adecuada en rostro y cuello, extendiendo con suaves movimientos ascendentes.",
    "bestSeller": false,
    "tag": "Barrera Cutánea",
    "image": "assets/products/dr-althea-147-barrier-cream.png",
    "hoverImage": "assets/products/dr-althea-147-barrier-cream-hover.png"
  },
  {
    "id": "dr-althea-345-relief-cream",
    "folder": "Dr. Althea - 345 Relief Cream",
    "cleanFile": "dr-althea-345-relief-cream.png",
    "brand": "Dr. Althea",
    "name": "Pro Lab 345 Relief Cream Post-Breakout Care",
    "shortName": "345 Relief Cream",
    "category": "cremas",
    "categoryLabel": "Crema Hidratante & Post-Acné",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 5,
    "reviewsCount": 230,
    "volume": "50 ml",
    "concern": "Post-Acné & Regeneración",
    "concernSlug": "rojeces",
    "skinType": "Piel con marcas de acné, rojeces, textura irregular o propensa a brotes",
    "target": "Desvanece manchas post-acné, regenera la piel lesionada y calma la inflamación sin tapar poros",
    "keyIngredients": [
      "Niacinamida",
      "Pantenol (Vitamina B5)",
      "Extracto de Centella Asiática",
      "Resveratrol",
      "Ácido Hialurónico"
    ],
    "howToUse": "Aplica uniformemente en rostro limpio mañana y noche. Su textura ligera tipo gel-crema se absorbe al instante sin residuo graso.",
    "bestSeller": true,
    "tag": "Viral Bestseller",
    "image": "assets/products/dr-althea-345-relief-cream.png",
    "hoverImage": "assets/products/dr-althea-345-relief-cream-hover.png"
  },
  {
    "id": "dr-althea-345-relief-cream-mist",
    "folder": "Dr. Althea - 345 Relief Cream Mist",
    "cleanFile": "dr-althea-345-relief-cream-mist.png",
    "brand": "Dr. Althea",
    "name": "Pro Lab 345 Relief Cream Mist Bifásica",
    "shortName": "345 Relief Cream Mist",
    "category": "brumas",
    "categoryLabel": "Bruma Hidratante Bifásica",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 4.8,
    "reviewsCount": 82,
    "volume": "100 ml",
    "concern": "Hidratación & Calma Instantánea",
    "concernSlug": "hidratacion",
    "skinType": "Todo tipo de piel, ideal para piel deshidratada que necesita recargas de humedad en el día",
    "target": "Hidratación ultraligera bifásica en bruma fina; refuerza la barrera y refresca el maquillaje",
    "keyIngredients": [
      "Pantenol",
      "Niacinamida",
      "Ceramidas",
      "Extracto de Centella"
    ],
    "howToUse": "Agita bien para mezclar las fases de crema y agua. Rocía a 20 cm del rostro con los ojos cerrados siempre que sientas la piel tirante o antes de tu sérum.",
    "bestSeller": false,
    "tag": "Efecto Rocío",
    "image": "assets/products/dr-althea-345-relief-cream-mist.png",
    "hoverImage": "assets/products/dr-althea-345-relief-cream-mist-hover.png"
  },
  {
    "id": "dr-althea-aqua-marine-deep-serum",
    "folder": "Dr. Althea - Aqua Marine Deep Serum",
    "cleanFile": "dr-althea-aqua-marine-deep-serum.png",
    "brand": "Dr. Althea",
    "name": "Pro Lab Aqua Marine Deep Serum",
    "shortName": "Aqua Marine Deep Serum",
    "category": "serums",
    "categoryLabel": "Sérum Hidratante Marino",
    "pricePEN": 72,
    "priceUSD": 21,
    "rating": 4.7,
    "reviewsCount": 51,
    "volume": "30 ml",
    "concern": "Hidratación Profunda",
    "concernSlug": "hidratacion",
    "skinType": "Piel deshidratada, apagada o con falta de vitalidad hídrica",
    "target": "Sacia la sed cutánea con minerales marinos y ácido hialurónico multimolecular",
    "keyIngredients": [
      "Agua de Mar Profundo",
      "Complejo de Algas Marinas",
      "Ácido Hialurónico",
      "Pantenol"
    ],
    "howToUse": "Aplica 2 a 3 gotas sobre rostro tonificado y masajea suavemente hasta su absorción.",
    "bestSeller": false,
    "tag": "Hidratación Intensa",
    "image": "assets/products/dr-althea-aqua-marine-deep-serum.png",
    "hoverImage": "assets/products/dr-althea-aqua-marine-deep-serum-hover.png"
  },
  {
    "id": "dr-althea-gentle-vitamin-c-serum",
    "folder": "Dr. Althea - Gentle Vitamin C Serum",
    "cleanFile": "dr-althea-gentle-vitamin-c-serum.png",
    "brand": "Dr. Althea",
    "name": "Gentle Vitamin C Day Serum Piel Sensible",
    "shortName": "Gentle Vitamin C Serum",
    "category": "vitamin-c",
    "categoryLabel": "Vitamina C Suave & Anti-Manchas",
    "pricePEN": 80,
    "priceUSD": 23,
    "rating": 4.9,
    "reviewsCount": 104,
    "volume": "30 ml",
    "concern": "Manchas & Luminosidad Suave",
    "concernSlug": "manchas",
    "skinType": "Piel sensible con manchas que no tolera la vitamina C pura ácida",
    "target": "Aclara manchas y aporta luminosidad sin picor, escozor ni irritación",
    "keyIngredients": [
      "Derivado estable de Vitamina C",
      "Niacinamida",
      "Extracto de Camelia",
      "Centella"
    ],
    "howToUse": "Aplica en la mañana sobre rostro limpio y finaliza siempre con protector solar.",
    "bestSeller": false,
    "tag": "Piel Sensible",
    "image": "assets/products/dr-althea-gentle-vitamin-c-serum.png",
    "hoverImage": "assets/products/dr-althea-gentle-vitamin-c-serum-hover.png"
  },
  {
    "id": "dr-althea-vitamin-c-boosting-serum",
    "folder": "Dr. Althea - Vitamin C Boosting Serum",
    "cleanFile": "dr-althea-vitamin-c-boosting-serum.png",
    "brand": "Dr. Althea",
    "name": "Vitamin C Boosting Serum Glow Solution",
    "shortName": "Vitamin C Boosting Serum",
    "category": "vitamin-c",
    "categoryLabel": "Vitamina C & Luminosidad",
    "pricePEN": 80,
    "priceUSD": 23,
    "rating": 4.9,
    "reviewsCount": 167,
    "volume": "30 ml",
    "concern": "Glow & Tono Radiante",
    "concernSlug": "manchas",
    "skinType": "Piel con tono opaco, manchas solares y pérdida de brillo natural",
    "target": "Potente acción iluminadora que despierta la luminosidad natural y combate los radicales libres",
    "keyIngredients": [
      "Vitamina C estabilizada",
      "Extracto de Frutos Cítricos de Jeju",
      "Glutatión",
      "Vitamina E"
    ],
    "howToUse": "Aplica 3 a 4 gotas cada mañana antes de tu crema y protector solar.",
    "bestSeller": true,
    "tag": "Bestseller Glow",
    "image": "assets/products/dr-althea-vitamin-c-boosting-serum.png",
    "hoverImage": "assets/products/dr-althea-vitamin-c-boosting-serum-hover.png"
  },
  {
    "id": "haruharu-black-rice-moisture-cleansing-gel",
    "folder": "haruharu wonder - Black Rice Moisture 5.5 Soft Cleansing Gel",
    "cleanFile": "haruharu-black-rice-moisture-cleansing-gel.png",
    "brand": "Haruharu WONDER",
    "name": "Black Rice Moisture 5.5 Soft Cleansing Gel",
    "shortName": "Black Rice Cleansing Gel",
    "category": "limpieza",
    "categoryLabel": "Gel Limpiador pH 5.5",
    "pricePEN": 62,
    "priceUSD": 18,
    "rating": 4.8,
    "reviewsCount": 88,
    "volume": "100 ml",
    "concern": "Doble Limpieza & Suavidad",
    "concernSlug": "limpieza",
    "skinType": "Todo tipo de piel, especialmente piel sensible o reactiva",
    "target": "Segundo paso de doble limpieza con pH balanceado 5.5 que limpia impurezas sin sensación de tirantez",
    "keyIngredients": [
      "Extracto de Arroz Negro Fermentado",
      "Corteza de Bambú",
      "Tensioactivos derivados del Coco"
    ],
    "howToUse": "Haz espuma con un poco de agua en tus manos, masajea suavemente sobre el rostro y enjuaga con agua tibia.",
    "bestSeller": false,
    "tag": "pH 5.5 Neutro",
    "image": "assets/products/haruharu-black-rice-moisture-cleansing-gel.png",
    "hoverImage": "assets/products/haruharu-black-rice-moisture-cleansing-gel-hover.png"
  },
  {
    "id": "haruharu-black-rice-cleansing-oil",
    "folder": "haruharu wonder - Black Rice Moisture Cleansing Oil",
    "cleanFile": "haruharu-black-rice-cleansing-oil.png",
    "brand": "Haruharu WONDER",
    "name": "Black Rice Moisture Deep Cleansing Oil",
    "shortName": "Black Rice Cleansing Oil",
    "category": "limpieza",
    "categoryLabel": "Aceite Limpiador Botánico",
    "pricePEN": 75,
    "priceUSD": 22,
    "rating": 4.9,
    "reviewsCount": 145,
    "volume": "150 ml",
    "concern": "Doble Limpieza & Poros",
    "concernSlug": "limpieza",
    "skinType": "Todo tipo de piel, incluso piel con poros congestionados o puntos negros",
    "target": "Primer paso de la doble limpieza: disuelve protector solar, sebo y maquillaje waterproof con 95% de aceites naturales",
    "keyIngredients": [
      "Aceite de Salvado de Arroz Negro",
      "Aceite de Jojoba",
      "Aceite de Oliva",
      "Aceite de Macadamia"
    ],
    "howToUse": "Aplica 2 pumps sobre rostro seco y masajea 1 minuto. Agrega agua tibia para emulsionar a textura lechosa y enjuaga bien.",
    "bestSeller": false,
    "tag": "Doble Limpieza",
    "image": "assets/products/haruharu-black-rice-cleansing-oil.png",
    "hoverImage": "assets/products/haruharu-black-rice-cleansing-oil-hover.png"
  },
  {
    "id": "mixsoon-bean-essential-skincare-set",
    "folder": "mixsoon - Bean Essential Skincare Set",
    "cleanFile": "mixsoon-bean-essential-skincare-set.png",
    "brand": "mixsoon",
    "name": "Bean Essential Skincare Special Set (Essence + Cream)",
    "shortName": "Bean Essential Set",
    "category": "sets",
    "categoryLabel": "Set Especial de Soja Fermentada",
    "pricePEN": 120,
    "priceUSD": 35,
    "rating": 5,
    "reviewsCount": 210,
    "volume": "Bean Essence 50 ml + Bean Cream 50 ml",
    "concern": "Textura & Renovación Fermentada",
    "concernSlug": "antiedad",
    "skinType": "Todo tipo de piel que busca textura de terciopelo, nutrición y exfoliación suave botánica",
    "target": "Elimina células muertas y sebo mediante fermentos botánicos de soja, granada y cebada sin ácidos agresivos",
    "keyIngredients": [
      "Extracto Fermentado de Soja",
      "Fermento de Fruto de Granada",
      "Extracto de Semilla de Cebada",
      "Filtrado de Jugo de Pera"
    ],
    "howToUse": "Usa la Bean Essence realizando masajes circulares para exfoliar suavemente impurezas. Continúa con la Bean Cream para sellar la hidratación.",
    "bestSeller": true,
    "tag": "Set Especial",
    "image": "assets/products/mixsoon-bean-essential-skincare-set.png",
    "hoverImage": "assets/products/mixsoon-bean-essential-skincare-set-hover.png"
  },
  {
    "id": "anua-heartleaf-77-soothing-toner",
    "folder": "Anua - Heartleaf 77 Soothing Toner",
    "cleanFile": "anua-heartleaf-77-soothing-toner.png",
    "brand": "Anua",
    "name": "Heartleaf 77% Soothing Toner pH 5.5",
    "shortName": "Heartleaf 77% Soothing Toner",
    "category": "brumas",
    "categoryLabel": "Tónico Calmante & Anti-Rojeces",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 4.9,
    "reviewsCount": 420,
    "volume": "250 ml",
    "concern": "Rojeces & Calma",
    "concernSlug": "rojeces",
    "skinType": "Piel sensible, propensa al acné, mixta a grasa o irritada",
    "target": "Calma rojeces al instante, regula el sebo, desinflama brotes y equilibra el pH",
    "keyIngredients": [
      "Extracto de Houttuynia Cordata (Heartleaf) 77%",
      "Centella Asiática",
      "Extracto de Manzanilla",
      "Pantenol"
    ],
    "howToUse": "Tras la limpieza, aplica una cantidad generosa con las palmas de las manos o con un disco de algodón mediante toques suaves por todo el rostro hasta su total absorción.",
    "bestSeller": true,
    "tag": "Viral Bestseller",
    "image": "assets/products/anua-heartleaf-77-soothing-toner.png",
    "hoverImage": "assets/products/anua-heartleaf-77-soothing-toner-hover.png"
  },
  {
    "id": "anua-heartleaf-pore-control-cleansing-oil",
    "folder": "Anua - Heartleaf Pore Control Cleansing Oil",
    "cleanFile": "anua-heartleaf-pore-control-cleansing-oil.png",
    "brand": "Anua",
    "name": "Heartleaf Pore Control Cleansing Oil",
    "shortName": "Heartleaf Pore Cleansing Oil",
    "category": "limpieza",
    "categoryLabel": "Aceite Desmaquillante & Poros",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 4.9,
    "reviewsCount": 388,
    "volume": "200 ml",
    "concern": "Doble Limpieza & Poros",
    "concernSlug": "limpieza",
    "skinType": "Todo tipo de piel, en especial piel con puntos negros, poros dilatados o tendencia a acné",
    "target": "Disuelve maquillaje a prueba de agua, retira puntos negros y sebo atrapado en los poros sin comedogénesis",
    "keyIngredients": [
      "Extracto de Heartleaf",
      "Aceite de Semilla de Jojoba",
      "Aceite de Oliva",
      "Aceite de Semilla de Uva"
    ],
    "howToUse": "Aplica 2-3 pumps sobre el rostro SECO y masajea suavemente por 60 segundos enfocándote en zonas con puntos negros. Emulsiona con un poco de agua tibia hasta que se vuelva lechoso y enjuaga completamente.",
    "bestSeller": true,
    "tag": "Top 1 Limpiador",
    "image": "assets/products/anua-heartleaf-pore-control-cleansing-oil.png",
    "hoverImage": "assets/products/anua-heartleaf-pore-control-cleansing-oil-hover.png"
  },
  {
    "id": "cosrx-advanced-snail-96-mucin-essence",
    "folder": "COSRX - Advanced Snail 96 Mucin Power Essence",
    "cleanFile": "cosrx-advanced-snail-96-mucin-essence.png",
    "brand": "COSRX",
    "name": "Advanced Snail 96 Mucin Power Essence",
    "shortName": "Advanced Snail 96 Essence",
    "category": "serums",
    "categoryLabel": "Esencia Reparadora & Glass Skin",
    "pricePEN": 75,
    "priceUSD": 22,
    "rating": 4.9,
    "reviewsCount": 540,
    "volume": "100 ml",
    "concern": "Hidratación & Barrera",
    "concernSlug": "barrera",
    "skinType": "Todo tipo de piel, especialmente deshidratada, apagada o con textura irregular",
    "target": "Reparación intensiva de la barrera cutánea, hidratación profunda sin sensación pesada y efecto glass skin",
    "keyIngredients": [
      "Filtrado de Secreción de Caracol 96.3%",
      "Hialuronato de Sodio",
      "Alantoína",
      "Pantenol",
      "Arginina"
    ],
    "howToUse": "Tras limpiar y tonificar, aplica 1-2 pumps por todo el rostro dando toquecitos suaves con la yema de los dedos hasta que se absorba por completo.",
    "bestSeller": true,
    "tag": "Clásico Mundial",
    "image": "assets/products/cosrx-advanced-snail-96-mucin-essence.png",
    "hoverImage": "assets/products/cosrx-advanced-snail-96-mucin-essence-hover.png"
  },
  {
    "id": "medicube-egf-nad-firming-serum",
    "folder": "medicube - EGF NAD Firming Serum - 30ml",
    "cleanFile": "medicube-egf-nad-firming-serum.png",
    "brand": "medicube",
    "name": "Age-R EGF NAD+ Multi-Peptide Firming Serum",
    "shortName": "EGF NAD+ Firming Serum",
    "category": "retinoides",
    "categoryLabel": "Sérum Tensor & Longevidad Celular",
    "pricePEN": 119,
    "priceUSD": 32,
    "rating": 4.8,
    "reviewsCount": 94,
    "volume": "30 ml",
    "concern": "Antiedad & Firmeza",
    "concernSlug": "antiedad",
    "skinType": "Piel madura o con primeros signos de flacidez y pérdida de densidad",
    "target": "Estimula la regeneración epidérmica, reafirma el óvalo facial y redensifica la dermis con bio-péptidos avanzados",
    "keyIngredients": [
      "EGF (Factor de Crecimiento Epidérmico)",
      "NAD+ Coenzima Celular",
      "Complejo Multi-Péptidos",
      "Colágeno Hidrolizado"
    ],
    "howToUse": "Aplica de 3 a 4 gotas sobre el rostro limpio por la mañana y noche, realizando masajes ascendentes en pómulos, mandíbula y cuello.",
    "bestSeller": false,
    "tag": "Dermo-Biotecnología",
    "image": "assets/products/medicube-egf-nad-firming-serum.png",
    "hoverImage": "assets/products/medicube-egf-nad-firming-serum-hover.png"
  },
  {
    "id": "medicube-pdrn-pink-collagen-gel-mask",
    "folder": "medicube - PDRN Pink Collagen Gel Mask",
    "cleanFile": "medicube-pdrn-pink-collagen-gel-mask.png",
    "brand": "medicube",
    "name": "PDRN Pink Peptide & Collagen Hydrogel Mask",
    "shortName": "PDRN Pink Collagen Mask",
    "category": "cremas",
    "categoryLabel": "Mascarilla Hidrogel Reafirmante",
    "pricePEN": 19,
    "priceUSD": 6,
    "rating": 4.9,
    "reviewsCount": 115,
    "volume": "28 g",
    "concern": "Firmeza & Elasticidad",
    "concernSlug": "antiedad",
    "skinType": "Todo tipo de piel en busca de hidratación profunda inmediata y efecto lifting",
    "target": "Infunde colágeno de bajo peso molecular y PDRN salmón para una piel jugosa, tersa y luminosa",
    "keyIngredients": [
      "PDRN Salmón Bio-compatible",
      "Colágeno de Bajo Peso Molecular (243 Da)",
      "Complejo de Péptidos Rosa",
      "Niacinamida"
    ],
    "howToUse": "Coloca la mascarilla de hidrogel sobre la piel limpia tras el tónico y déjala actuar de 20 a 40 minutos (o hasta que se torne transparente). Retira y masajea el sérum restante.",
    "bestSeller": false,
    "tag": "Efecto Glow SPA",
    "image": "assets/products/medicube-pdrn-pink-collagen-gel-mask.png",
    "hoverImage": "assets/products/medicube-pdrn-pink-collagen-gel-mask-hover.png"
  },
  {
    "id": "medicube-pdrn-pink-peptide-serum",
    "folder": "medicube - PDRN Pink Peptide Serum",
    "cleanFile": "medicube-pdrn-pink-peptide-serum.png",
    "brand": "medicube",
    "name": "PDRN Pink Peptide Intensive Ampoule Serum",
    "shortName": "PDRN Pink Peptide Serum",
    "category": "serums",
    "categoryLabel": "Ampoule Regeneradora & Manchas",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 4.9,
    "reviewsCount": 168,
    "volume": "30 ml",
    "concern": "Manchas & Elasticidad",
    "concernSlug": "manchas",
    "skinType": "Todo tipo de piel, especialmente apagada, con marcas o falta de turgencia",
    "target": "Regenera cicatrices post-acné, atenúa pigmentación oscura y otorga brillo rosado saludable",
    "keyIngredients": [
      "PDRN Salmón 10,000 ppm",
      "Complejo de 5 Péptidos",
      "Niacinamida",
      "Glutatión"
    ],
    "howToUse": "Aplica de 2 a 3 gotas en rostro y cuello tras el tónico. Masajea suavemente con toquecitos ascendentes para activar su absorción celular.",
    "bestSeller": true,
    "tag": "Bestseller Corea",
    "image": "assets/products/medicube-pdrn-pink-peptide-serum.png",
    "hoverImage": "assets/products/medicube-pdrn-pink-peptide-serum-hover.png"
  },
  {
    "id": "skin1004-madagascar-centella-double-cleansing-duo",
    "folder": "SKIN1004 - Madagascar Centella Double Cleansing Duo",
    "cleanFile": "skin1004-madagascar-centella-double-cleansing-duo.png",
    "brand": "SKIN1004",
    "name": "Madagascar Centella Double Cleansing Duo (Oil + Foam)",
    "shortName": "Centella Double Cleansing Duo",
    "category": "sets",
    "categoryLabel": "Dúo Doble Limpieza Calmante",
    "pricePEN": 95,
    "priceUSD": 28,
    "rating": 5,
    "reviewsCount": 210,
    "volume": "200 ml + 125 ml",
    "concern": "Doble Limpieza & Poros",
    "concernSlug": "limpieza",
    "skinType": "Todo tipo de piel, ideal para piel reactiva, con brotes o poros obstruidos",
    "target": "Rutina completa de doble limpieza botánica: desmaquillado al aceite ligero más espuma con pH 5.5 sin resecar",
    "keyIngredients": [
      "Extracto Puro de Centella Asiática de Madagascar",
      "Aceite Botánico de Bergamota & Oliva",
      "Tensioactivos Naturales de Coco"
    ],
    "howToUse": "Paso 1: Masajea el Light Cleansing Oil en rostro seco y emulsiona con agua. Paso 2: Limpia con el Ampoule Foam con agua tibia para retirar cualquier impureza residual.",
    "bestSeller": true,
    "tag": "Set Esencial",
    "image": "assets/products/skin1004-madagascar-centella-double-cleansing-duo.png",
    "hoverImage": "assets/products/skin1004-madagascar-centella-double-cleansing-duo-hover.png"
  },
  {
    "id": "skin1004-centella-poremizing-clay-stick-mask",
    "folder": "SKIN1004 - Madagascar Centella Poremizing Quick Clay Stick Mask - 27g",
    "cleanFile": "skin1004-centella-poremizing-clay-stick-mask.png",
    "brand": "SKIN1004",
    "name": "Madagascar Centella Poremizing Quick Clay Stick Mask",
    "shortName": "Poremizing Quick Clay Stick Mask",
    "category": "limpieza",
    "categoryLabel": "Mascarilla en Barra & Control Poros",
    "pricePEN": 75,
    "priceUSD": 22,
    "rating": 4.8,
    "reviewsCount": 130,
    "volume": "27 g",
    "concern": "Doble Limpieza & Poros",
    "concernSlug": "limpieza",
    "skinType": "Piel mixta a grasa con poros dilatados, sebo excesivo o puntos negros",
    "target": "Purifica poros en solo 3 minutos sin ensuciar tus manos; absorbe el exceso de sebo y exfolia con sal rosa del Himalaya",
    "keyIngredients": [
      "Centella Asiática de Madagascar",
      "Arcilla de Caolín",
      "Sal Rosa del Himalaya",
      "Polvo de Frijol Rojo"
    ],
    "howToUse": "Gira la base del stick y desliza directamente sobre el rostro limpio y seco. Deja actuar durante 3 a 5 minutos y enjuaga con agua tibia.",
    "bestSeller": false,
    "tag": "Formato Stick Práctico",
    "image": "assets/products/skin1004-centella-poremizing-clay-stick-mask.png",
    "hoverImage": "assets/products/skin1004-centella-poremizing-clay-stick-mask-hover.png"
  },
  {
    "id": "skin1004-centella-poremizing-travel-kit",
    "folder": "SKIN1004 - Madagascar Centella Poremizing Travel Kit",
    "cleanFile": "skin1004-centella-poremizing-travel-kit.png",
    "brand": "SKIN1004",
    "name": "Madagascar Centella Poremizing 4-Piece Travel Kit",
    "shortName": "Poremizing 4-Piece Travel Kit",
    "category": "sets",
    "categoryLabel": "Set de Viaje Minimizador de Poros",
    "pricePEN": 92,
    "priceUSD": 27,
    "rating": 4.9,
    "reviewsCount": 152,
    "volume": "4 x Miniaturas (Cleanser + Toner + Ampoule + Gel)",
    "concern": "Doble Limpieza & Poros",
    "concernSlug": "limpieza",
    "skinType": "Piel con poros visibles o grasa que busca probar la línea completa o viajar ligero",
    "target": "Rutina completa de 4 pasos para afinar textura, limpiar profundamente y equilibrar la oleosidad en formato viaje",
    "keyIngredients": [
      "Centella de Madagascar",
      "Sal Rosa del Himalaya",
      "Péptidos Tensores",
      "Aloe Vera"
    ],
    "howToUse": "Sigue el orden de 4 pasos: 1. Deep Cleansing Foam, 2. Clear Toner, 3. Fresh Ampoule y 4. Light Gel Cream.",
    "bestSeller": false,
    "tag": "Kit de Viaje",
    "image": "assets/products/skin1004-centella-poremizing-travel-kit.png",
    "hoverImage": "assets/products/skin1004-centella-poremizing-travel-kit-hover.png"
  },
  {
    "id": "skin1004-hyalu-cica-water-fit-sun-serum",
    "folder": "SKIN1004 Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    "cleanFile": "skin1004-hyalu-cica-water-fit-sun-serum.png",
    "brand": "SKIN1004",
    "name": "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50+ PA++++",
    "shortName": "Hyalu-Cica Sun Serum SPF50+",
    "category": "serums",
    "categoryLabel": "Protector Solar Sérum Hidratante",
    "pricePEN": 70,
    "priceUSD": 20,
    "rating": 5,
    "reviewsCount": 620,
    "volume": "50 ml",
    "concern": "Hidratación Profunda",
    "concernSlug": "hidratacion",
    "skinType": "Todo tipo de piel, perfecto para piel grasa, mixta o sensible que odia los protectores pesados",
    "target": "Máxima fotoprotección SPF50+ con textura ultra liviana tipo suero; cero capa blanca, acabado glow natural",
    "keyIngredients": [
      "Fórmula Hyalu-Cica (Centella + Ácido Hialurónico)",
      "Extracto de Té Verde",
      "Brotes de Trigo",
      "Niacinamida"
    ],
    "howToUse": "Como último paso de tu rutina matutina, aplica 2 dedos de producto generosamente en rostro y cuello 15 minutos antes de exponerte al sol. Reaplica cada 2-3 horas.",
    "bestSeller": true,
    "tag": "Nº 1 Solar Viral",
    "image": "assets/products/skin1004-hyalu-cica-water-fit-sun-serum.png",
    "hoverImage": "assets/products/skin1004-hyalu-cica-water-fit-sun-serum-hover.png"
  },
  {
    "id": "torriden-dive-in-hyaluronic-acid-serum",
    "folder": "Torriden DIVE-IN Low Molecule Hyaluronic Acid Serum",
    "cleanFile": "torriden-dive-in-hyaluronic-acid-serum.png",
    "brand": "Torriden",
    "name": "DIVE-IN Low Molecule Hyaluronic Acid Serum",
    "shortName": "DIVE-IN Hyaluronic Serum",
    "category": "serums",
    "categoryLabel": "Sérum Hidratación 5D Celular",
    "pricePEN": 85,
    "priceUSD": 25,
    "rating": 4.9,
    "reviewsCount": 480,
    "volume": "50 ml",
    "concern": "Hidratación Profunda",
    "concernSlug": "hidratacion",
    "skinType": "Piel deshidratada, tirante, mixta o con líneas causadas por falta de agua",
    "target": "Penetración celular ultra profunda con 5 pesos moleculares de ácido hialurónico; calma y rellena sin viscosidad",
    "keyIngredients": [
      "Complejo 5D Ácido Hialurónico",
      "D-Pantenol (Provitamina B5)",
      "Alantoína",
      "Ceramidas"
    ],
    "howToUse": "Coloca 3-4 gotas en las palmas y extiende con suaves presiones sobre el rostro ligeramente húmedo para potenciar la retención hídrica.",
    "bestSeller": true,
    "tag": "Premio Olive Young",
    "image": "assets/products/torriden-dive-in-hyaluronic-acid-serum.png",
    "hoverImage": "assets/products/torriden-dive-in-hyaluronic-acid-serum-hover.png"
  }
];

// Configuration
const CONFIG = {
  whatsappNumber: '51908794517', // Tacna, Perú (+51 908794517)
  freeShippingThresholdPEN: 300,  // Envíos gratis a partir de 300 soles
  freeShippingThresholdUSD: 80
};

// State Management
const state = {
  currency: 'PEN', // 'PEN' (Soles) as default
  activeCategory: 'all',
  activeBrand: 'all',
  activeConcern: 'all',
  searchQuery: '',
  sortBy: 'featured',
  cart: [],
  wishlist: new Set(),
  announcementIndex: 0
};

// Temporary Quick View state
let currentQuickViewProduct = null;
let currentQuickViewQty = 1;

// Announcement messages (Tacna, Perú)
const ANNOUNCEMENTS = [
  "ENVÍO GRATIS EN PEDIDOS SUPERIORES A S/. 300 • ENTREGAS EN TACNA Y ENVÍOS A TODO EL PERÚ",
  "ASESORÍA PERSONALIZADA DE RUTINA K-BEAUTY VÍA WHATSAPP (+51 908 794 517)",
  "PRODUCTOS 100% ORIGINALES DIRECTOS DE SEÚL"
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();

  // Check if navigating from another page with a brand filter
  const savedBrandFilter = sessionStorage.getItem('filterBrand');
  if (savedBrandFilter) {
    sessionStorage.removeItem('filterBrand');
    state.activeBrand = savedBrandFilter;
    const brandSelect = document.getElementById('brandSelect');
    if (brandSelect) {
      brandSelect.value = savedBrandFilter;
      brandSelect.classList.add('active-filter');
    }
  }

  initAnnouncements();
  initEventListeners();
  renderProducts();
  initProductPage();
  updateCartUI();
});

// Format Price in Soles or USD
function formatPrice(pen, usd) {
  const numPEN = isNaN(Number(pen)) ? 0 : Math.round(Number(pen) * 100) / 100;
  const numUSD = isNaN(Number(usd)) ? 0 : Math.round(Number(usd) * 100) / 100;
  if (state.currency === 'USD') {
    return `$${numUSD} USD`;
  }
  return `S/. ${numPEN}`;
}

function getRawPrice(product) {
  return state.currency === 'USD' ? product.priceUSD : product.pricePEN;
}

// Announcements rotation
function initAnnouncements() {
  const textEl = document.getElementById('announcementText');
  if (!textEl) return;
  const prevBtn = document.getElementById('announcementPrev');
  const nextBtn = document.getElementById('announcementNext');

  function showAnnouncement(idx) {
    state.announcementIndex = (idx + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
    if (textEl) {
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = ANNOUNCEMENTS[state.announcementIndex];
        textEl.style.opacity = '1';
      }, 150);
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showAnnouncement(state.announcementIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => showAnnouncement(state.announcementIndex + 1));
  }

  setInterval(() => {
    showAnnouncement(state.announcementIndex + 1);
  }, 6000);
}

// Event Listeners
function initEventListeners() {
  // Currency Toggle Switch
  const currencyToggle = document.getElementById('currencyToggle');
  const currencySlider = document.getElementById('currencySlider');
  const currencyBtns = document.querySelectorAll('.currency-toggle-btn');

  function setCurrencyToggleState(currency) {
    currencyBtns.forEach(btn => {
      const isCurrent = btn.dataset.currency === currency;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
    });
    if (currencySlider) {
      currencySlider.classList.toggle('right', currency === 'USD');
    }
  }

  // Set initial state from saved preference
  setCurrencyToggleState(state.currency);

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newCurrency = btn.dataset.currency;
      if (state.currency === newCurrency) return;
      state.currency = newCurrency;
      localStorage.setItem('maos_currency', state.currency);
      setCurrencyToggleState(newCurrency);
      renderProducts();
      updateProductPagePrices();
      updateCartUI();
      showToast(`Moneda cambiada a ${state.currency === 'PEN' ? 'Soles (S/.)' : 'Dólares ($ USD)'}`);
    });
  });

  // Category Select Filter
  const categorySelect = document.getElementById('categorySelect');
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      state.activeCategory = e.target.value;
      categorySelect.classList.toggle('active-filter', state.activeCategory !== 'all');
      renderProducts();
    });
  }

  // Brand Select Filter
  const brandSelect = document.getElementById('brandSelect');
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      state.activeBrand = e.target.value;
      brandSelect.classList.toggle('active-filter', state.activeBrand !== 'all');
      renderProducts();
    });
  }

  // Concern / Objective Select Filter
  const concernSelect = document.getElementById('concernSelect');
  if (concernSelect) {
    concernSelect.addEventListener('change', (e) => {
      state.activeConcern = e.target.value;
      concernSelect.classList.toggle('active-filter', state.activeConcern !== 'all');
      renderProducts();
    });
  }

  // Search input & Clear button
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? 'inline-block' : 'none';
      }
      renderProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Clear All Filters Button
  const btnClearAllFilters = document.getElementById('btnClearAllFilters');
  if (btnClearAllFilters) {
    btnClearAllFilters.addEventListener('click', resetAllFilters);
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer toggling
  const cartBtn = document.getElementById('cartBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  // Quick View Modal Backdrop
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewClose = document.getElementById('quickViewClose');
  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  // Routine Quiz Modal
  const quizModal = document.getElementById('quizModal');
  const quizClose = document.getElementById('quizClose');
  const startQuizBtn = document.getElementById('startQuizBtn');
  const heroQuizBtn = document.getElementById('heroQuizBtn');

  if (startQuizBtn) startQuizBtn.addEventListener('click', openQuiz);
  if (heroQuizBtn) heroQuizBtn.addEventListener('click', openQuiz);
  if (quizClose) quizClose.addEventListener('click', closeQuiz);
  if (quizModal) {
    quizModal.addEventListener('click', (e) => {
      if (e.target === quizModal) closeQuiz();
    });
  }

  // Trust Widget
  const trustWidget = document.getElementById('trustWidget');
  const trustModal = document.getElementById('trustModal');
  const trustClose = document.getElementById('trustClose');

  if (trustWidget) {
    trustWidget.addEventListener('click', () => {
      if (trustModal) trustModal.classList.add('active');
    });
  }
  if (trustClose) {
    trustClose.addEventListener('click', () => {
      if (trustModal) trustModal.classList.remove('active');
    });
  }
  if (trustModal) {
    trustModal.addEventListener('click', (e) => {
      if (e.target === trustModal) trustModal.classList.remove('active');
    });
  }

  // WhatsApp floating widget & Checkout Button (+51 908794517)
  const whatsappWidget = document.getElementById('whatsappWidget');
  if (whatsappWidget) {
    whatsappWidget.addEventListener('click', () => {
      openWhatsAppDirect("¡Hola Maos Tacna! Deseo asesoría sobre productos K-Beauty para mi piel.");
    });
  }

  const btnWhatsAppCheckout = document.getElementById('btnWhatsAppCheckout');
  if (btnWhatsAppCheckout) {
    btnWhatsAppCheckout.addEventListener('click', checkoutViaWhatsApp);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // Mobile Navigation Drawer (New A-dam style fullscreen drawer)
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  function openMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.add('open');
      mobileMenuDrawer.setAttribute('aria-hidden', 'false');
    }
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('open');
      mobileMenuDrawer.setAttribute('aria-hidden', 'true');
    }
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Make openMobileMenu and closeMobileMenu globally accessible
  window.openMobileMenu = openMobileMenu;
  window.closeMobileMenu = closeMobileMenu;

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileMenu);
  }

  // Mobile Currency Selector — button-based UI
  function syncMobileCurrencyBtns(currency) {
    const penBtn = document.getElementById('mobileCurrencyPEN');
    const usdBtn = document.getElementById('mobileCurrencyUSD');
    if (penBtn) penBtn.classList.toggle('active', currency === 'PEN');
    if (usdBtn) usdBtn.classList.toggle('active', currency === 'USD');
  }

  // Legacy select sync (producto.html still uses it)
  const mobileCurrencySelect = document.getElementById('mobileCurrencySelect');
  const mobileCurrencyFlag = document.getElementById('mobileCurrencyFlag');

  if (mobileCurrencySelect) {
    mobileCurrencySelect.value = state.currency;
    if (mobileCurrencyFlag) mobileCurrencyFlag.textContent = state.currency === 'PEN' ? '🇵🇪' : '🇺🇸';
    mobileCurrencySelect.addEventListener('change', (e) => {
      setMobileCurrency(e.target.value);
    });
  }

  // Init button state
  syncMobileCurrencyBtns(state.currency);

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeQuiz();
      closeMobileMenu();
      if (trustModal) trustModal.classList.remove('active');
    }
  });
}

// Filter by Brand function for brand carousel & links
function filterByBrand(brandName) {
  const grid = document.getElementById('productsGrid');
  if (!grid) {
    sessionStorage.setItem('filterBrand', brandName);
    window.location.href = 'tienda.html';
    return;
  }

  state.activeBrand = brandName;
  state.activeCategory = 'all';
  state.activeConcern = 'all';

  const brandSelect = document.getElementById('brandSelect');
  if (brandSelect) {
    brandSelect.value = brandName;
    brandSelect.classList.add('active-filter');
  }

  const categorySelect = document.getElementById('categorySelect');
  if (categorySelect) {
    categorySelect.value = 'all';
    categorySelect.classList.remove('active-filter');
  }

  const concernSelect = document.getElementById('concernSelect');
  if (concernSelect) {
    concernSelect.value = 'all';
    concernSelect.classList.remove('active-filter');
  }

  renderProducts();

  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Mostrando productos de: ${brandName}`);
}

// Reset all catalog filters
function resetAllFilters() {
  state.activeBrand = 'all';
  state.activeCategory = 'all';
  state.activeConcern = 'all';
  state.searchQuery = '';

  const brandSelect = document.getElementById('brandSelect');
  if (brandSelect) {
    brandSelect.value = 'all';
    brandSelect.classList.remove('active-filter');
  }

  const categorySelect = document.getElementById('categorySelect');
  if (categorySelect) {
    categorySelect.value = 'all';
    categorySelect.classList.remove('active-filter');
  }

  const concernSelect = document.getElementById('concernSelect');
  if (concernSelect) {
    concernSelect.value = 'all';
    concernSelect.classList.remove('active-filter');
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const searchClearBtn = document.getElementById('searchClearBtn');
  if (searchClearBtn) searchClearBtn.style.display = 'none';

  renderProducts();
  showToast('Filtros restablecidos');
}

// Update Active Filter Indicator Chips
function updateActiveFilterChips() {
  const bar = document.getElementById('activeFiltersBar');
  const chipsContainer = document.getElementById('activeFiltersChips');
  if (!bar || !chipsContainer) return;

  const chips = [];

  if (state.activeCategory !== 'all') {
    const categorySelect = document.getElementById('categorySelect');
    const label = categorySelect ? categorySelect.options[categorySelect.selectedIndex].text : state.activeCategory;
    chips.push({
      text: label,
      clear: () => {
        state.activeCategory = 'all';
        if (categorySelect) {
          categorySelect.value = 'all';
          categorySelect.classList.remove('active-filter');
        }
        renderProducts();
      }
    });
  }

  if (state.activeBrand !== 'all') {
    chips.push({
      text: `Marca: ${state.activeBrand}`,
      clear: () => {
        state.activeBrand = 'all';
        const brandSelect = document.getElementById('brandSelect');
        if (brandSelect) {
          brandSelect.value = 'all';
          brandSelect.classList.remove('active-filter');
        }
        renderProducts();
      }
    });
  }

  if (state.activeConcern !== 'all') {
    const concernSelect = document.getElementById('concernSelect');
    const label = concernSelect ? concernSelect.options[concernSelect.selectedIndex].text : state.activeConcern;
    chips.push({
      text: label,
      clear: () => {
        state.activeConcern = 'all';
        if (concernSelect) {
          concernSelect.value = 'all';
          concernSelect.classList.remove('active-filter');
        }
        renderProducts();
      }
    });
  }

  if (state.searchQuery) {
    chips.push({
      text: `"${state.searchQuery}"`,
      clear: () => {
        state.searchQuery = '';
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        const searchClearBtn = document.getElementById('searchClearBtn');
        if (searchClearBtn) searchClearBtn.style.display = 'none';
        renderProducts();
      }
    });
  }

  if (chips.length > 0) {
    bar.style.display = 'flex';
    chipsContainer.innerHTML = chips.map((c, idx) => `
      <span class="active-filter-chip">
        ${c.text}
        <button type="button" data-chip-idx="${idx}" aria-label="Quitar filtro">&times;</button>
      </span>
    `).join('');

    chipsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.chipIdx, 10);
        if (chips[idx]) chips[idx].clear();
      });
    });
  } else {
    bar.style.display = 'none';
    chipsContainer.innerHTML = '';
  }
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productsCount');
  if (!grid) return;

  updateActiveFilterChips();

  // Filter logic
  let filtered = PRODUCTS_DATA.filter(p => {
    const matchesCategory = (state.activeCategory === 'all' || p.category === state.activeCategory);
    const matchesBrand = (state.activeBrand === 'all' || p.brand.toLowerCase() === state.activeBrand.toLowerCase());
    const matchesConcern = (state.activeConcern === 'all' || p.concernSlug === state.activeConcern);
    const matchesSearch = !state.searchQuery ||
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.brand.toLowerCase().includes(state.searchQuery) ||
      p.target.toLowerCase().includes(state.searchQuery) ||
      p.keyIngredients.some(ing => ing.toLowerCase().includes(state.searchQuery));

    return matchesCategory && matchesBrand && matchesConcern && matchesSearch;
  });

  // Sort logic
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => getRawPrice(a) - getRawPrice(b));
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => getRawPrice(b) - getRawPrice(a));
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    filtered.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} productos`;
  }
  const filterToolbarCount = document.getElementById('filterToolbarCount');
  if (filterToolbarCount) {
    // Count active filters (not product count)
    const activeCount = [
      state.activeCategory !== 'all',
      state.activeBrand !== 'all',
      state.activeConcern !== 'all',
      state.sortBy !== 'featured',
      !!state.searchQuery
    ].filter(Boolean).length;
    if (activeCount > 0) {
      filterToolbarCount.textContent = `(${activeCount})`;
      filterToolbarCount.style.color = 'var(--color-deep-cobalt)';
    } else {
      filterToolbarCount.textContent = `(${filtered.length})`;
      filterToolbarCount.style.color = '';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="products-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        <p>No encontramos productos con los filtros seleccionados.<br><span style="font-size:13px;">Prueba con otros filtros o limpia la búsqueda.</span></p>
        <button class="btn-pill btn-pill-primary" onclick="resetFilters()">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const badgeHtml = product.tag ?
      `<span class="card-badge ${product.bestSeller ? 'bestseller' : ''}">${product.tag}</span>` : '';
    const productUrl = `producto.html?id=${encodeURIComponent(product.id)}`;

    return `
      <article class="product-card ${product.hoverImage ? 'has-hover-image' : ''}" data-id="${product.id}">
        ${badgeHtml}
        <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')" 
                title="${isWishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
                aria-label="Favorito">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <a class="product-image-container" href="${productUrl}" aria-label="Ver detalles de ${product.name}">
          <img class="product-img primary-img" src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.hoverImage ? `<img class="product-img hover-img" src="${product.hoverImage}" alt="${product.name} vista secundaria" loading="lazy" />` : ''}
          <button class="card-quick-add-bag" type="button" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')" aria-label="Añadir al carrito" title="Añadir al carrito">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </a>

        <div class="product-info">
          <span class="product-brand">${product.brand}</span>
          <h3 class="product-name">
            <a href="${productUrl}">${product.name}</a>
          </h3>
          
          <div class="product-meta-row">
            <span class="product-volume">${product.volume}</span>
            <div class="product-rating">
              <span class="rating-stars">★★★★★</span>
              <span>(${product.rating})</span>
            </div>
          </div>

          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.pricePEN, product.priceUSD)}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Reset filters
function resetFilters() {
  state.activeCategory = 'all';
  state.activeBrand = 'all';
  state.activeConcern = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.filter-tab').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.brand-tab').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
  });
  document.querySelectorAll('.concern-tag').forEach(t => t.classList.remove('active'));

  renderProducts();
}

// Cart Drawer Operations
function openCart() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      pricePEN: product.pricePEN,
      priceUSD: product.priceUSD,
      image: product.image,
      volume: product.volume,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Agregaste ${qty}x "${product.shortName}" al carrito`);

  // Button feedback animation
  const btn = document.getElementById(`btn-add-${productId}`);
  if (btn) {
    const originalText = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = `<span>✓ ¡Agregado!</span>`;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = originalText;
    }, 1200);
  }
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Producto eliminado del carrito");
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const countHeader = document.getElementById('cartHeaderCount');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const shippingStatusEl = document.getElementById('cartShippingStatus');
  const shippingBarEl = document.getElementById('cartShippingBar');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalItems;
  if (countHeader) countHeader.textContent = `(${totalItems})`;

  const subtotalPEN = state.cart.reduce((sum, i) => {
    const pen = Number(i.pricePEN) || (PRODUCTS_DATA.find(p => p.id === i.id)?.pricePEN) || 0;
    return sum + (pen * (Number(i.qty) || 1));
  }, 0);
  const subtotalUSD = state.cart.reduce((sum, i) => {
    const usd = Number(i.priceUSD) || (PRODUCTS_DATA.find(p => p.id === i.id)?.priceUSD) || 0;
    return sum + (usd * (Number(i.qty) || 1));
  }, 0);

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalPEN, subtotalUSD);
  if (totalEl) totalEl.textContent = formatPrice(subtotalPEN, subtotalUSD);

  // Free shipping threshold: 300 Soles or 80 USD
  const threshold = state.currency === 'USD' ? CONFIG.freeShippingThresholdUSD : CONFIG.freeShippingThresholdPEN;
  const currentSubtotal = state.currency === 'USD' ? subtotalUSD : subtotalPEN;
  const progressPercent = Math.min(100, (currentSubtotal / threshold) * 100);

  if (shippingBarEl) {
    shippingBarEl.style.width = `${progressPercent}%`;
  }

  const thresholdFormatted = state.currency === 'USD' ? '$80 USD' : 'S/. 300';

  if (shippingStatusEl) {
    if (progressPercent >= 100) {
      shippingStatusEl.innerHTML = `🎉 <strong>¡Felicidades! Tienes ENVÍO GRATIS asegurado a todo el Perú</strong>`;
    } else {
      const remaining = Math.max(0, Math.round((threshold - currentSubtotal) * 100) / 100);
      const formattedRem = state.currency === 'USD' ? `$${remaining} USD` : `S/. ${remaining}`;
      shippingStatusEl.innerHTML = `Te faltan <strong>${formattedRem}</strong> para obtener <strong>ENVÍO GRATIS</strong> (a partir de ${thresholdFormatted})`;
    }
  }

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <p>Tu carrito está vacío</p>
        <button class="btn-pill btn-pill-primary" onclick="closeCart()">Ver Tienda</button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => {
    const pen = Number(item.pricePEN) || (PRODUCTS_DATA.find(p => p.id === item.id)?.pricePEN) || 0;
    const usd = Number(item.priceUSD) || (PRODUCTS_DATA.find(p => p.id === item.id)?.priceUSD) || 0;
    const qty = Number(item.qty) || 1;
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    const volume = item.volume || prod?.volume || '';
    return `
    <div class="cart-item-card">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-top-row">
          <div class="cart-item-name-col">
            <span class="cart-item-brand">${item.brand}</span>
            <h4>${item.name}</h4>
            ${volume ? `<span class="cart-item-volume">${volume}</span>` : ''}
          </div>
          <div class="cart-item-price">${formatPrice(pen * qty, usd * qty)}</div>
        </div>
        <div class="cart-item-controls-row">
          <div class="cart-qty-ctrl cart-qty-ctrl--inline">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)" aria-label="Disminuir">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <span class="cart-qty-val">${qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)" aria-label="Aumentar">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
          <button class="cart-item-delete" onclick="removeCartItem('${item.id}')" aria-label="Eliminar producto del carrito" title="Eliminar producto">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

// WhatsApp Checkout Order Builder for Tacna, Perú
function checkoutViaWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío. Agrega productos antes de ordenar.");
    return;
  }

  let msg = `¡Hola Maos! Deseo realizar el siguiente pedido:\n\n`;

  state.cart.forEach((item, index) => {
    msg += `${index + 1}. ${item.name}\n   • Marca: ${item.brand}\n   • Cantidad: ${item.qty} unidad(es)\n\n`;
  });

  msg += `¡Muchas gracias!`;

  openWhatsAppDirect(msg);
}

function openWhatsAppDirect(customText = "") {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(customText)}`;
  window.open(url, '_blank');
}

// Open product in the current tab
function openProduct(productId, newTab = false) {
  const url = `producto.html?id=${encodeURIComponent(productId)}`;
  if (newTab) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }
}

// Redirect quick view directly to product page in current tab
function openQuickView(productId) {
  openProduct(productId, false);
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function askAboutProductOnWhatsApp(productName) {
  openWhatsAppDirect(`¡Hola Maos Tacna! Tengo una consulta sobre el producto "${productName}".`);
}

// ==========================================================================
// PRODUCT DETAIL PAGE (PDP) CONTROLLER
// ==========================================================================
let currentPdpProduct = null;
let currentPdpQty = 1;
let currentPdpImageIndex = 0;
let pdpImages = [];

function initProductPage() {
  const pdpMain = document.getElementById('pdpMain');
  if (!pdpMain) return;

  const urlParams = new URLSearchParams(window.location.search);
  let prodId = urlParams.get('id');

  // Fallback map in case of older links or ID variants
  if (prodId === 'celimax-the-vita-a-retinal-shot-tightening-booster') {
    prodId = 'celimax-vita-a-retinal-shot';
  }

  let product = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!product) {
    // Default to viral bestseller if no ID or invalid
    product = PRODUCTS_DATA.find(p => p.id === 'dr-althea-345-relief-cream') || PRODUCTS_DATA[0];
  }

  currentPdpProduct = product;
  currentPdpQty = 1;
  currentPdpImageIndex = 0;

  // Build images array
  pdpImages = [product.image];
  if (product.hoverImage) {
    pdpImages.push(product.hoverImage);
  }

  // Update Page Title and Meta
  document.title = `${product.name} • ${product.brand} | Maos Skincare Tacna`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = `${product.name} de ${product.brand} en Tacna, Perú. ${product.target}. Cosmética coreana 100% original con envíos a todo el Perú.`;
  }

  // Populate Breadcrumbs
  const breadcrumbBrand = document.getElementById('pdpBreadcrumbBrand');
  const breadcrumbCurrent = document.getElementById('pdpBreadcrumbCurrent');
  if (breadcrumbBrand) {
    breadcrumbBrand.textContent = product.brand;
    breadcrumbBrand.onclick = (e) => {
      e.preventDefault();
      sessionStorage.setItem('filterBrand', product.brand);
      window.location.href = 'tienda.html';
    };
  }
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = product.shortName || product.name;
  }

  // Populate Badges
  const badgeRow = document.getElementById('pdpBadgeRow');
  if (badgeRow) {
    let badges = `<span class="pdp-gallery-badge origin">🇰🇷 100% Seúl</span>`;
    if (product.tag) {
      badges += `<span class="pdp-gallery-badge ${product.bestSeller ? 'bestseller' : ''}">${product.tag}</span>`;
    }
    badgeRow.innerHTML = badges;
  }

  // Populate Main Image
  const mainImg = document.getElementById('pdpMainImg');
  if (mainImg) {
    mainImg.src = pdpImages[0];
    mainImg.alt = product.name;
  }

  // Populate Gallery Arrows & Dots
  const prevArrow = document.getElementById('pdpPrevArrow');
  const nextArrow = document.getElementById('pdpNextArrow');
  const dotsContainer = document.getElementById('pdpGalleryDots');

  if (pdpImages.length > 1) {
    if (prevArrow) prevArrow.style.display = 'flex';
    if (nextArrow) nextArrow.style.display = 'flex';
    if (dotsContainer) {
      dotsContainer.style.display = 'flex';
      dotsContainer.innerHTML = pdpImages.map((_, idx) => `
        <span class="pdp-gallery-dot ${idx === 0 ? 'active' : ''}" onclick="setPdpActiveImage(${idx})" aria-label="Vista ${idx + 1}"></span>
      `).join('');
    }
  } else {
    if (prevArrow) prevArrow.style.display = 'none';
    if (nextArrow) nextArrow.style.display = 'none';
    if (dotsContainer) dotsContainer.style.display = 'none';
  }

  // Mobile Touch Swipe for Gallery
  const galleryMain = document.getElementById('pdpGalleryMain');
  if (galleryMain && !galleryMain._touchBound) {
    galleryMain._touchBound = true;
    let touchStartX = 0;
    galleryMain.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    galleryMain.addEventListener('touchend', e => {
      const diffX = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diffX) > 40) {
        pdpNavigate(diffX > 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  // Populate Product Info
  const brandTag = document.getElementById('pdpBrandTag');
  if (brandTag) {
    brandTag.textContent = product.brand;
    brandTag.onclick = (e) => {
      e.preventDefault();
      sessionStorage.setItem('filterBrand', product.brand);
      window.location.href = 'tienda.html';
    };
  }

  const titleEl = document.getElementById('pdpTitle');
  if (titleEl) titleEl.textContent = product.name;

  const ratingScore = document.getElementById('pdpRatingScore');
  if (ratingScore) ratingScore.textContent = product.rating;

  const reviewsCount = document.getElementById('pdpReviewsCount');
  if (reviewsCount) reviewsCount.textContent = `(${product.reviewsCount} reseñas)`;

  const volumeChip = document.getElementById('pdpVolumeChip');
  if (volumeChip) volumeChip.textContent = product.volume;

  // Price & Subtotal
  renderPdpPrices();

  // Highlights
  const skinTypeEl = document.getElementById('pdpSkinType');
  if (skinTypeEl) skinTypeEl.textContent = product.skinType;

  const targetEl = document.getElementById('pdpTarget');
  if (targetEl) targetEl.textContent = product.target;

  const categoryEl = document.getElementById('pdpCategory');
  if (categoryEl) categoryEl.textContent = product.categoryLabel;

  // Ingredients Tags
  const ingTags = document.getElementById('pdpIngredientsTags');
  if (ingTags) {
    ingTags.innerHTML = product.keyIngredients.map(ing => `<span class="ing-tag">${ing}</span>`).join('');
  }

  // Tabs Content
  const tabDesc = document.getElementById('pdpTabDescContent');
  if (tabDesc) {
    tabDesc.innerHTML = `
      <p style="font-size: 15.5px; color: var(--color-midcurrent-navy); font-weight: 600; margin-bottom: 16px;">
        🎯 ${product.target}.
      </p>
      <p>
        Formulado bajo los más altos estándares de innovación dermatológica de Seúl, este tratamiento de <strong>${product.brand}</strong> transforma la textura y luminosidad cutánea sin comprometer la barrera de tu piel.
      </p>
      <p>
        <strong>Tipo de piel recomendado:</strong> ${product.skinType}.
      </p>
      <div style="margin-top: 24px; background: #fafafa; border: 1px solid var(--color-cloud-veil); padding: 20px; border-radius: 14px;">
        <h4 style="font-size: 14.5px; font-weight: 700; color: var(--color-midcurrent-navy); margin-bottom: 10px;">✦ Garantía de Calidad Maos Tacna:</h4>
        <ul style="padding-left: 20px; margin: 0; line-height: 1.65; font-size: 13.5px; color: var(--color-slate-gray);">
          <li>100% auténtico importado directamente de Corea del Sur (código de lote verificable).</li>
          <li>Sin parabenos, sulfatos agresivos ni aceites minerales perjudiciales.</li>
          <li>Fórmula suave de rápida absorción con acabado sedoso no graso.</li>
        </ul>
      </div>
    `;
  }

  const tabHowToUse = document.getElementById('pdpTabHowToUseContent');
  if (tabHowToUse) {
    tabHowToUse.innerHTML = `
      <p style="font-size: 15px; margin-bottom: 20px; color: var(--color-midcurrent-navy); line-height: 1.6;">
        <strong>Modo de Aplicación:</strong> ${product.howToUse}
      </p>
      <h4 style="font-size: 15px; font-weight: 700; color: var(--color-midcurrent-navy); margin: 26px 0 14px;">¿Dónde encaja este producto en tu rutina diaria?</h4>
      <div class="pdp-routine-steps-grid">
        <div class="pdp-routine-step-card ${product.category === 'limpieza' ? 'active-step' : ''}">
          <span class="pdp-routine-step-num">Paso 01 / 02</span>
          <div class="pdp-routine-step-title">Limpieza Facial</div>
          <div class="pdp-routine-step-desc">Doble limpieza: aceite limpiador botánico + gel espumoso a pH 5.5.</div>
        </div>
        <div class="pdp-routine-step-card ${product.category === 'brumas' ? 'active-step' : ''}">
          <span class="pdp-routine-step-num">Paso 03</span>
          <div class="pdp-routine-step-title">Tónico / Bruma</div>
          <div class="pdp-routine-step-desc">Inunda la piel de humedad multicapa y equilibra el manto ácido.</div>
        </div>
        <div class="pdp-routine-step-card ${['serums', 'retinoides', 'vitamin-c', 'sets'].includes(product.category) ? 'active-step' : ''}">
          <span class="pdp-routine-step-num">Paso 04</span>
          <div class="pdp-routine-step-title">Tratamiento Concentrado</div>
          <div class="pdp-routine-step-desc">Activos de choque para manchas, elasticidad, arrugas o rojeces.</div>
        </div>
        <div class="pdp-routine-step-card ${product.category === 'cremas' ? 'active-step' : ''}">
          <span class="pdp-routine-step-num">Paso 05</span>
          <div class="pdp-routine-step-title">Crema Reparadora</div>
          <div class="pdp-routine-step-desc">Sella la nutrición y refuerza la barrera lipídica durante todo el día.</div>
        </div>
      </div>
      <p style="font-size: 13px; color: var(--color-slate-gray); margin-top: 18px;">
        💡 <em>Recomendación Maos:</em> Durante el día, culmina siempre tu rutina con tu protector solar favorito para proteger los activos y prevenir nuevas manchas.
      </p>
    `;
  }

  const tabIngredients = document.getElementById('pdpTabIngredientsContent');
  if (tabIngredients) {
    tabIngredients.innerHTML = `
      <p style="margin-bottom: 16px;">
        Fórmula limpia coreana con una sinergia equilibrada de ingredientes bio-activos:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 14px;">
        ${product.keyIngredients.map(ing => `
          <div style="background: var(--color-morning-mist); padding: 14px 18px; border-radius: 12px; border: 1px solid var(--color-cloud-veil);">
            <strong style="color: var(--color-midcurrent-navy); font-size: 14px;">${ing}</strong>
            <p style="font-size: 12.5px; color: var(--color-slate-gray); margin: 4px 0 0;">Ingrediente estrella seleccionado por su biocompatibilidad y alta eficacia comprobada.</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Render Related Products
  renderPdpRelatedProducts();

  // Populate Mobile Accordions
  _populatePdpMobileAccordions(product);
}

function _populatePdpMobileAccordions(product) {
  // Descripción & Beneficios
  const accDesc = document.getElementById('pdpAccordionDesc');
  if (accDesc) {
    accDesc.innerHTML = `
      <p style="font-size:14px;font-weight:600;color:var(--color-midcurrent-navy);margin-bottom:10px;">🎯 ${product.target}.</p>
      <p style="margin-bottom:10px;">Formulado bajo los más altos estándares de innovación dermatológica de Seúl por <strong>${product.brand}</strong>.</p>
      <ul style="padding-left:18px;margin:0;line-height:1.65;">
        <li>100% auténtico importado de Corea del Sur.</li>
        <li>Sin parabenos ni aceites minerales perjudiciales.</li>
        <li>Rápida absorción con acabado sedoso no graso.</li>
      </ul>
    `;
  }

  // Detalles del Producto
  const accSpecs = document.getElementById('pdpAccordionSpecs');
  if (accSpecs) {
    const ingHtml = product.keyIngredients.map(i => `<span class="ing-tag">${i}</span>`).join('');
    accSpecs.innerHTML = `
      <div class="pdp-accordion-specs">
        <div class="pdp-spec-line"><span class="pdp-spec-label">Objetivo:</span><span>${product.target}</span></div>
        <div class="pdp-spec-line"><span class="pdp-spec-label">Tipo de Piel:</span><span>${product.skinType}</span></div>
        <div class="pdp-spec-line"><span class="pdp-spec-label">Categoría:</span><span>${product.categoryLabel}</span></div>
        <div class="pdp-spec-line"><span class="pdp-spec-label">Ingredientes Clave:</span><div class="pdp-ingredients-tags" style="margin-top:6px;">${ingHtml}</div></div>
      </div>
    `;
  }

  // Modo de Uso
  const accHow = document.getElementById('pdpAccordionHowToUse');
  if (accHow) {
    const steps = [
      { n: '01', title: 'Limpieza', desc: 'Comienza con rostro limpio y ligeramente húmedo.' },
      { n: '02', title: 'Tónico', desc: 'Aplica tu tónico favorito para preparar la piel.' },
      { n: '03', title: 'Aplicación', desc: `Aplica una pequeña cantidad de ${product.name} con suaves toques y mezcla hacia afuera.` },
      { n: '04', title: 'Hidratación', desc: 'Sella con tu crema o gel hidratante.' },
      { n: '05', title: 'Protección', desc: 'Durante el día, finaliza siempre con protector solar.' },
    ];
    accHow.innerHTML = `<div style="display:flex;flex-direction:column;gap:10px;">
      ${steps.map(s => `<div style="display:flex;gap:10px;align-items:flex-start;">
        <span style="font-size:11px;font-weight:800;color:var(--color-midcurrent-navy);opacity:0.4;padding-top:2px;min-width:24px;">${s.n}</span>
        <div><div style="font-weight:700;font-size:13.5px;color:var(--color-midcurrent-navy);">${s.title}</div><div style="font-size:13px;">${s.desc}</div></div>
      </div>`).join('')}
    </div>`;
  }

  // Ingredientes
  const accIng = document.getElementById('pdpAccordionIngredients');
  if (accIng) {
    accIng.innerHTML = `
      <p style="margin-bottom:12px;">Fórmula limpia coreana con activos bio-compatibles:</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${product.keyIngredients.map(ing => `
          <div style="padding:10px 14px;background:var(--color-morning-mist);border-radius:10px;border:1px solid var(--color-cloud-veil);">
            <strong style="font-size:13.5px;color:var(--color-midcurrent-navy);">${ing}</strong>
            <p style="font-size:12px;color:var(--color-slate-gray);margin:3px 0 0;">Ingrediente estrella de alta eficacia.</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function togglePdpAccordion(btn) {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  const body = btn.nextElementSibling;
  if (isOpen) {
    btn.setAttribute('aria-expanded', 'false');
    body.classList.remove('open');
  } else {
    btn.setAttribute('aria-expanded', 'true');
    body.classList.add('open');
  }
}

function pdpNavigate(dir) {
  if (!pdpImages || pdpImages.length < 2) return;
  currentPdpImageIndex = (currentPdpImageIndex + dir + pdpImages.length) % pdpImages.length;
  setPdpActiveImage(currentPdpImageIndex);
}

function setPdpActiveImage(index) {
  if (!pdpImages || !pdpImages[index]) return;
  currentPdpImageIndex = index;
  const mainImg = document.getElementById('pdpMainImg');
  if (mainImg) {
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(0.97)';
    setTimeout(() => {
      mainImg.src = pdpImages[index];
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 150);
  }

  document.querySelectorAll('.pdp-gallery-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function changePdpQty(delta) {
  currentPdpQty = Math.max(1, currentPdpQty + delta);
  const qtyEl = document.getElementById('pdpQtyVal');
  if (qtyEl) qtyEl.textContent = currentPdpQty;
  renderPdpPrices();
}

function renderPdpPrices() {
  if (!currentPdpProduct) return;
  const priceEl = document.getElementById('pdpPriceDisplay');
  const subtotalEl = document.getElementById('pdpSubtotalHint');

  const pen = currentPdpProduct.pricePEN * currentPdpQty;
  const usd = currentPdpProduct.priceUSD * currentPdpQty;
  const formattedUnitPrice = formatPrice(currentPdpProduct.pricePEN, currentPdpProduct.priceUSD);
  const formattedTotalPrice = `Total: ${formatPrice(pen, usd)}`;
  const displayVal = currentPdpQty > 1 ? formattedTotalPrice : formattedUnitPrice;

  if (priceEl) {
    priceEl.textContent = displayVal;
  }
  if (subtotalEl && subtotalEl !== priceEl) {
    subtotalEl.style.display = 'block';
    subtotalEl.textContent = displayVal;
  }

  const btnCounter = document.getElementById('pdpBtnCounter');
  if (btnCounter) {
    btnCounter.textContent = currentPdpQty > 1 ? `(${currentPdpQty})` : '';
  }
}

function addCurrentProductToCart() {
  if (!currentPdpProduct) return;
  addToCart(currentPdpProduct.id, currentPdpQty);
  openCart();
}

function askCurrentProductWhatsApp() {
  if (!currentPdpProduct) return;
  const price = state.currency === 'USD' ? `$${currentPdpProduct.priceUSD} USD` : `S/. ${currentPdpProduct.pricePEN}`;
  const msg = `¡Hola Maos Tacna! Deseo adquirir / consultar disponibilidad sobre "${currentPdpProduct.name}" (${currentPdpProduct.volume}) - ${price}. ¿Cómo realizo mi compra?`;
  openWhatsAppDirect(msg);
}

function switchPdpTab(tabId) {
  document.querySelectorAll('.pdp-tab-trigger').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.pdp-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabId}`);
  });
}

function renderPdpRelatedProducts() {
  const container = document.getElementById('pdpRelatedGrid');
  if (!container || !currentPdpProduct) return;

  // Filter products: prefer same category or brand, excluding current
  let related = PRODUCTS_DATA.filter(p => p.id !== currentPdpProduct.id);
  related.sort((a, b) => {
    const aSameBrand = a.brand === currentPdpProduct.brand ? 2 : 0;
    const bSameBrand = b.brand === currentPdpProduct.brand ? 2 : 0;
    const aSameCat = a.category === currentPdpProduct.category ? 1 : 0;
    const bSameCat = b.category === currentPdpProduct.category ? 1 : 0;
    return (bSameBrand + bSameCat) - (aSameBrand + aSameCat);
  });

  const picks = related.slice(0, 6);

  container.innerHTML = picks.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const badgeHtml = product.tag ?
      `<span class="card-badge ${product.bestSeller ? 'bestseller' : ''}">${product.tag}</span>` : '';
    const productUrl = `producto.html?id=${encodeURIComponent(product.id)}`;

    return `
      <article class="product-card ${product.hoverImage ? 'has-hover-image' : ''}" data-id="${product.id}">
        ${badgeHtml}
        <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')" 
                title="${isWishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
                aria-label="Favorito">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <a class="product-image-container" href="${productUrl}" aria-label="Ver detalles de ${product.name}">
          <img class="product-img primary-img" src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.hoverImage ? `<img class="product-img hover-img" src="${product.hoverImage}" alt="${product.name} vista secundaria" loading="lazy" />` : ''}
          <button class="card-quick-add-bag" type="button" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')" aria-label="Añadir al carrito" title="Añadir al carrito">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </a>

        <div class="product-info">
          <span class="product-brand">${product.brand}</span>
          <h3 class="product-name">
            <a href="${productUrl}">${product.name}</a>
          </h3>
          
          <div class="product-meta-row">
            <span class="product-volume">${product.volume}</span>
            <div class="product-rating">
              <span class="rating-stars">★★★★★</span>
              <span>(${product.rating})</span>
            </div>
          </div>

          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.pricePEN, product.priceUSD)}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  initPdpCarouselScroll();
}

function updateProductPagePrices() {
  if (document.getElementById('pdpMain')) {
    renderPdpPrices();
    renderPdpRelatedProducts();
  }
}

// Routine Quiz Modal Logic — Diagnóstico Dermatológico (5 pasos)
let quizAnswers = {
  skinType: null,     // 'grasa' | 'mixta' | 'seca' | 'sensible'
  sensitivity: null,  // 'alta' | 'moderada' | 'baja'
  mainGoal: null,     // 'manchas' | 'rojeces' | 'antiedad' | 'hidratacion' | 'poros'
  lifestyle: null,    // 'sol' | 'maquillaje' | 'noche' | 'minimalista'
  skinAge: null       // 'teen' | 'adulta' | 'madura'
};

const QUIZ_TOTAL_STEPS = 5;

function openQuiz() {
  const modal = document.getElementById('quizModal');
  if (modal) {
    modal.classList.add('active');
    resetQuizStep();
    document.body.style.overflow = 'hidden';
  }
}

function closeQuiz() {
  const modal = document.getElementById('quizModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function resetQuizStep() {
  quizAnswers = { skinType: null, sensitivity: null, mainGoal: null, lifestyle: null, skinAge: null };
  showQuizStep(1);
}

function showQuizStep(stepNumber) {
  document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
  const target = document.getElementById(`quizStep${stepNumber}`);
  if (target) target.classList.add('active');
  updateQuizProgress(stepNumber);
}

function updateQuizProgress(currentStep) {
  const bar = document.getElementById('quizProgressBar');
  const label = document.getElementById('quizProgressLabel');
  if (!bar) return;
  const pct = currentStep <= QUIZ_TOTAL_STEPS
    ? Math.round(((currentStep - 1) / QUIZ_TOTAL_STEPS) * 100)
    : 100;
  bar.style.width = pct + '%';
  if (label) {
    label.textContent = currentStep <= QUIZ_TOTAL_STEPS
      ? `Paso ${currentStep} de ${QUIZ_TOTAL_STEPS}`
      : 'Diagnóstico listo';
  }
}

// Step navigation
function selectQuizType(type) {
  quizAnswers.skinType = type;
  showQuizStep(2);
}

function selectQuizSensitivity(val) {
  quizAnswers.sensitivity = val;
  showQuizStep(3);
}

function selectQuizGoal(goal) {
  quizAnswers.mainGoal = goal;
  showQuizStep(4);
}

function selectQuizLifestyle(val) {
  quizAnswers.lifestyle = val;
  showQuizStep(5);
}

function selectQuizSkinAge(val) {
  quizAnswers.skinAge = val;
  renderQuizResults();
  updateQuizProgress(6); // "done"
  showQuizStep(6);
}

// ─── Prescription Engine ────────────────────────────────────────────────────
function prescribeRoutine() {
  const { skinType, sensitivity, mainGoal, lifestyle, skinAge } = quizAnswers;
  const isOily = skinType === 'grasa' || skinType === 'mixta';
  const isDry = skinType === 'seca';
  const isSens = skinType === 'sensible' || sensitivity === 'alta';
  const isMature = skinAge === 'madura';
  const isAdult = skinAge === 'adulta';
  const wearsMakeup = lifestyle === 'maquillaje';
  const lovesNight = lifestyle === 'noche';
  const needsSPF = lifestyle === 'sol';

  // ── PASO 1: Limpieza (always a double-cleanse oil/gel) ───────────────────
  let cleanser1, cleanser2;
  if (isOily && wearsMakeup) {
    cleanser1 = 'anua-heartleaf-pore-control-cleansing-oil';
    cleanser2 = 'haruharu-black-rice-moisture-cleansing-gel';
  } else if (isOily && isSens) {
    cleanser1 = 'skin1004-madagascar-centella-double-cleansing-duo';
    cleanser2 = null;
  } else if (isOily) {
    cleanser1 = 'anua-heartleaf-pore-control-cleansing-oil';
    cleanser2 = 'haruharu-black-rice-moisture-cleansing-gel';
  } else if (isSens || isDry) {
    cleanser1 = 'haruharu-black-rice-cleansing-oil';
    cleanser2 = 'haruharu-black-rice-moisture-cleansing-gel';
  } else {
    cleanser1 = 'haruharu-black-rice-cleansing-oil';
    cleanser2 = 'haruharu-black-rice-moisture-cleansing-gel';
  }

  // ── PASO 2: Tónico / Esencia hidratante ─────────────────────────────────
  let toner;
  if (mainGoal === 'rojeces' || isSens) {
    toner = 'anua-heartleaf-77-soothing-toner';
  } else if (mainGoal === 'antiedad' || (isMature && mainGoal !== 'poros')) {
    toner = 'cosrx-advanced-snail-96-mucin-essence';
  } else if (mainGoal === 'poros') {
    toner = 'anua-heartleaf-77-soothing-toner';
  } else if (mainGoal === 'hidratacion') {
    toner = 'cosrx-advanced-snail-96-mucin-essence';
  } else {
    toner = 'cosrx-advanced-snail-96-mucin-essence';
  }

  // ── PASO 3: Sérum activo (protagonista del diagnóstico) ──────────────────
  let activeSerum;
  if (mainGoal === 'manchas') {
    if (isSens) activeSerum = 'dr-althea-gentle-vitamin-c-serum';
    else if (isAdult || isMature) activeSerum = 'anua-niacinamide-10-txa-4';
    else activeSerum = 'dr-althea-vitamin-c-boosting-serum';
  } else if (mainGoal === 'rojeces') {
    activeSerum = 'anua-azelaic-acid-10-hyaluron';
  } else if (mainGoal === 'antiedad') {
    if (isSens) activeSerum = 'medicube-pdrn-pink-peptide-serum';
    else if (lovesNight && !isSens) activeSerum = 'arencia-retinal-booster-shot';
    else if (isMature) activeSerum = 'medicube-egf-nad-firming-serum';
    else activeSerum = 'arencia-retinal-booster-shot';
  } else if (mainGoal === 'hidratacion') {
    activeSerum = 'torriden-dive-in-hyaluronic-acid-serum';
  } else {
    // poros
    if (lovesNight) activeSerum = 'celimax-vita-a-retinal-shot';
    else if (isSens) activeSerum = 'anua-azelaic-acid-10-hyaluron';
    else activeSerum = 'arencia-retinal-booster-shot';
  }

  // ── PASO 4: Crema / Hidratante ───────────────────────────────────────────
  let moisturizer;
  if (isDry || isSens) {
    moisturizer = 'dr-althea-147-barrier-cream';
  } else if (mainGoal === 'antiedad' || isMature) {
    moisturizer = 'mixsoon-bean-essential-skincare-set';
  } else if (isOily && mainGoal === 'poros') {
    moisturizer = 'skin1004-centella-poremizing-travel-kit';
  } else {
    moisturizer = 'dr-althea-345-relief-cream';
  }

  // ── PASO 5: Protector solar / Tratamiento especial ───────────────────────
  let special;
  if (needsSPF || lifestyle === 'sol') {
    special = 'skin1004-hyalu-cica-water-fit-sun-serum';
  } else if (mainGoal === 'antiedad' && isMature) {
    special = 'medicube-pdrn-pink-collagen-gel-mask';
  } else if (mainGoal === 'poros') {
    special = 'skin1004-centella-poremizing-clay-stick-mask';
  } else if (mainGoal === 'manchas' && !isSens) {
    special = 'arencia-vitamin-c-booster-shot';
  } else if (mainGoal === 'hidratacion') {
    special = 'dr-althea-aqua-marine-deep-serum';
  } else {
    special = 'skin1004-hyalu-cica-water-fit-sun-serum';
  }

  // Build ordered routine
  const steps = [];
  if (cleanser1) steps.push({ id: cleanser1, label: 'Limpieza 1' });
  if (cleanser2) steps.push({ id: cleanser2, label: 'Limpieza 2' });
  steps.push({ id: toner, label: 'Tónico / Esencia' });
  steps.push({ id: activeSerum, label: 'Sérum Activo' });
  steps.push({ id: moisturizer, label: 'Hidratante' });
  steps.push({ id: special, label: lifestyle === 'sol' ? 'Protector Solar' : 'Tratamiento Especial' });

  return steps;
}

function renderQuizResults() {
  const box = document.getElementById('quizResultsContainer');
  if (!box) return;

  const routine = prescribeRoutine();
  const ids = routine.map(r => r.id);

  // Build diagnosis label
  const goalLabels = {
    manchas: 'Despigmentación & Luminosidad',
    rojeces: 'Calma & Reparación de Barrera',
    antiedad: 'Firmeza & Regeneración Celular',
    hidratacion: 'Hidratación 5D & Glass Skin',
    poros: 'Refinación de Poros & Textura'
  };
  const diagLabel = goalLabels[quizAnswers.mainGoal] || 'Equilibrio & Bienestar';

  box.innerHTML = `
    <div class="quiz-diagnosis-header">
      <span class="quiz-diagnosis-eyebrow">Tu diagnóstico dermatológico</span>
      <h4 class="quiz-results-title">✦ ${diagLabel}</h4>
      <p style="font-size: 13px; color: var(--color-slate-gray); margin-bottom: 20px; line-height: 1.6;">
        Rutina de <strong>${routine.length} pasos</strong> formulada con activos clínicos coreanos sincronizados para tu perfil cutáneo:
      </p>
    </div>
    <div class="routine-recommended-list">
      ${routine.map((step, idx) => {
    const p = PRODUCTS_DATA.find(pr => pr.id === step.id);
    if (!p) return '';
    return `
          <div class="routine-rec-item">
            <div class="routine-step-num-wrap">
              <span class="routine-step-num">${String(idx + 1).padStart(2, '0')}</span>
              <span class="routine-step-label">${step.label}</span>
            </div>
            <a href="producto.html?id=${encodeURIComponent(p.id)}" style="display:flex; align-items:center; flex-shrink:0;">
              <img src="${p.image}" alt="${p.name}" style="width: 48px; height: 48px; object-fit: contain;" />
            </a>
            <div class="routine-rec-info" style="flex: 1; min-width: 0;">
              <h5>
                <a href="producto.html?id=${encodeURIComponent(p.id)}" style="color: inherit; text-decoration: none;">
                  ${p.name}
                </a>
              </h5>
              <span>${p.categoryLabel} • ${formatPrice(p.pricePEN, p.priceUSD)}</span>
            </div>
            <button class="btn-pill btn-pill-sm btn-pill-ghost" onclick="addToCart('${p.id}', 1)">+ Añadir</button>
          </div>
        `;
  }).join('')}
    </div>
    <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
      <button class="btn-pill btn-pill-primary" style="flex: 1;" onclick="addEntireRoutine('${ids.join(',')}')">
        🛍 Añadir Rutina Completa
      </button>
      <button class="btn-pill btn-pill-ghost" onclick="resetQuizStep()">
        Repetir Test
      </button>
    </div>
  `;
}

function addEntireRoutine(idsString) {
  const ids = idsString.split(',');
  ids.forEach(id => addToCart(id, 1));
  closeQuiz();
  openCart();
  showToast("¡Rutina completa añadida a tu carrito!");
}

// Wishlist Toggle
function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast("Eliminado de tu lista de deseos");
  } else {
    state.wishlist.add(productId);
    showToast("Guardado en tu lista de deseos ❤️");
  }
  localStorage.setItem('maos_wishlist', JSON.stringify(Array.from(state.wishlist)));
  renderProducts();
}

// Toast Notifications
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-success-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// Local Storage Persistence
function saveCart() {
  localStorage.setItem('maos_cart', JSON.stringify(state.cart));
}

function loadSavedState() {
  try {
    const savedCurrency = localStorage.getItem('maos_currency');
    if (savedCurrency === 'USD') {
      state.currency = 'USD';
    } else {
      state.currency = 'PEN';
      localStorage.setItem('maos_currency', 'PEN');
    }

    const savedCart = localStorage.getItem('maos_cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      if (Array.isArray(parsedCart)) {
        state.cart = parsedCart.map(item => {
          const prod = PRODUCTS_DATA.find(p => p.id === item.id);
          if (prod) {
            return {
              id: prod.id,
              name: prod.name,
              brand: prod.brand,
              pricePEN: prod.pricePEN,
              priceUSD: prod.priceUSD,
              image: prod.image,
              volume: prod.volume,
              qty: Math.max(1, parseInt(item.qty, 10) || 1)
            };
          }
          return null;
        }).filter(Boolean);
      }
    }

    const savedWishlist = localStorage.getItem('maos_wishlist');
    if (savedWishlist) state.wishlist = new Set(JSON.parse(savedWishlist));
  } catch (e) {
    console.warn("Storage load error", e);
  }
}

// Filter Drawer & Grid View Controls (A-dam layout)
function openFilterDrawer() {
  const drawer = document.getElementById('filterDrawer');
  const backdrop = document.getElementById('filterDrawerBackdrop');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (backdrop) backdrop.classList.add('active');
  document.body.classList.add('filter-drawer-open');
  document.body.style.overflow = 'hidden';
}

function closeFilterDrawer() {
  const drawer = document.getElementById('filterDrawer');
  const backdrop = document.getElementById('filterDrawerBackdrop');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) backdrop.classList.remove('active');
  document.body.classList.remove('filter-drawer-open');
  document.body.style.overflow = '';
}

function setCatalogGrid(cols) {
  const grid = document.getElementById('productsGrid');
  const btn2 = document.getElementById('viewBtn2');
  const btn1 = document.getElementById('viewBtn1');
  if (!grid) return;
  if (cols === 1) {
    grid.classList.add('grid-1-col');
    if (btn1) btn1.classList.add('active');
    if (btn2) btn2.classList.remove('active');
  } else {
    grid.classList.remove('grid-1-col');
    if (btn2) btn2.classList.add('active');
    if (btn1) btn1.classList.remove('active');
  }
}

// Related Products Carousel Functions (A-dam Style)
function scrollPdpCarousel(dir) {
  const track = document.getElementById('pdpRelatedGrid');
  if (!track) return;
  const card = track.querySelector('.product-card');
  const amount = card ? card.offsetWidth + 16 : 280;
  track.scrollBy({ left: dir * amount, behavior: 'smooth' });
}

function initPdpCarouselScroll() {
  const track = document.getElementById('pdpRelatedGrid');
  const thumb = document.getElementById('pdpCarouselThumb');
  if (!track || !thumb) return;

  function onScroll() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      thumb.style.transform = 'translateX(0)';
      return;
    }
    const trackWidth = 120;
    const thumbWidth = 120 * 0.35;
    const maxTranslate = trackWidth - thumbWidth;
    const ratio = Math.min(1, Math.max(0, track.scrollLeft / maxScroll));
    thumb.style.transform = `translateX(${ratio * maxTranslate}px)`;
  }

  track.removeEventListener('scroll', track._carouselScrollHandler);
  track._carouselScrollHandler = onScroll;
  track.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


// Mobile Currency Buttons (new button-based currency switcher)
function setMobileCurrency(currency) {
  state.currency = currency;
  localStorage.setItem('maos_currency', currency);

  // Update button active states
  const penBtn = document.getElementById('mobileCurrencyPEN');
  const usdBtn = document.getElementById('mobileCurrencyUSD');
  if (penBtn) penBtn.classList.toggle('active', currency === 'PEN');
  if (usdBtn) usdBtn.classList.toggle('active', currency === 'USD');

  // Sync legacy select (producto.html)
  const legacySelect = document.getElementById('mobileCurrencySelect');
  if (legacySelect) legacySelect.value = currency;

  // Sync desktop toggle
  setCurrencyToggleState(currency);
  renderProducts();
  updateProductPagePrices();
  updateCartUI();
  showToast(`Moneda cambiada a ${currency === 'PEN' ? 'Soles (S/.)' : 'Dólares ($ USD)'}`);
}
