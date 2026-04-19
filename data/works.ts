export interface Work {
  id: string;
  slug: string;
  num: string;
  tag: string;
  nameAr: string;
  descAr: string;
  type: string;
  dimensions: string;
  material: string;
  price: string;
  waMsg: string;
  accentColor: string;
  images: string[];
  imageRatio: string; // CSS aspect-ratio value
}

export const works: Work[] = [
  {
    id: "a",
    slug: "aberat-alzaman",
    num: "01",
    tag: "Silk · Handmade",
    nameAr: "عابرة الزمن",
    descAr:
      "وجه محفور في الذاكرة، امرأة من زمن آخر تحمل أسراره على حليّها — ذهب فوق حرير، وعيون تروي ما لم تقله الكتب. رُسمت على أنقى أنواع السجاد الحريري اليدوي، لتكون ليست لوحة فحسب، بل قطعة تاريخ معلّقة على جدارك.",
    type: "Acrylic on Handmade Silk Carpet",
    dimensions: "180 × 120 cm",
    material: "Pure Handmade Silk",
    price: "00,000 EGP",
    waMsg: "Hello, I'm interested in عابرة الزمن (Silk Carpet, 75,000 EGP).",
    accentColor: "#c8973a",
    images: ["/works/a.jpg"],
    imageRatio: "3/5.3",   // portrait — tall & narrow
  },
  {
    id: "b",
    slug: "sultanah",
    num: "02",
    tag: "Turkish · Handmade",
    nameAr: "سلطانة",
    descAr:
      "من رحم الحقبة المملوكية تخرج هذه السيدة — تاجها يعلو بشموخ، وعقدها يثقل بالجمال، وبشتها يلتف كأنه حكاية لم تُروَ بعد. على سجادة تركية يدوية، تجلس ملكةً في عصر نسيه الزمن لكن الريشة استعادته.",
    type: "Acrylic on Turkish Handmade Carpet",
    dimensions: "175 × 100 cm",
    material: "Turkish Wool · Handwoven",
    price: "00,000 EGP",
    waMsg: "Hello, I'm interested in سلطانة (Turkish Carpet, 50,000 EGP).",
    accentColor: "#c8607a",
    images: ["/works/b.jpg"],
    imageRatio: "12/16",  // portrait — taller
  },
  {
    id: "c",
    slug: "hiya-alan",
    num: "03",
    tag: "Modern",
    nameAr: "هي الآن",
    descAr:
      "ليست من الماضي، هي ابنة اللحظة — طرحتها تلتف بأناقة تقول الكثير دون كلام، وروجها يضيف جرأة هادئة لوجه يحمل ثقة النساء الواعيات. لوحة تجمع بين أصالة السجاد اليدوي وروح الجمال المعاصر.",
    type: "Acrylic on Handmade Carpet",
    dimensions: "170 × 90 cm",
    material: "Handwoven Carpet",
    price: "00,000 EGP",
    waMsg: "Hello, I'm interested in هي الآن (Modern Carpet, 30,000 EGP).",
    accentColor: "#6abf95",
    images: ["/works/c.jpg"],
    imageRatio: "1/1.9",   // very tall — narrow portrait
  },
  {
    id: "d",
    slug: "ala-al-ahmar",
    num: "04",
    tag: "Bold · Crimson",
    nameAr: "على الأحمر",
    descAr:
      "على أرضية حمراء كالستارة قبيل العرض، تقف فنانة مصرية بشعرها الحديث وفستانها البسيط الذي يختصر كل التعقيد — لأن الفن الحقيقي لا يحتاج زخرفة. لوحة ملونة وجريئة تليق بمن يعرف أن الجمال يعيش في التفاصيل.",
    type: "Acrylic on Red Handmade Carpet",
    dimensions: "200 × 100 cm",
    material: "Handwoven · Crimson Base",
    price: "00,000 EGP",
    waMsg: "Hello, I'm interested in على الأحمر (Red Carpet, 00,000 EGP).",
    accentColor: "#a080d0",
    images: ["/works/d.webp"],
    imageRatio: "1/2",   // very tall — narrow portrait
  },
];

export const WA_NUMBER = "201064047214";
export const INSTAGRAM = "https://www.instagram.com/3baset_74";
export const TIKTOK = "https://www.tiktok.com/@m7md3baset74";