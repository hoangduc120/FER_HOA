const ListOfOrchids = [
  {
    Id: 1,
    name: "Taichung beauty",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa1.jpg",
    color: "pink",
    origin: "Taiwan",
    category: "Cattleya",
    video:
      "https://www.youtube.com/watch?v=jsTFfbok8v0&pp=ygUPVGFpY2h1bmcgYmVhdXR5",
  },
  {
    Id: 2,
    name: "Tokyo Charm",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa2.jpg",
    color: "white",
    origin: "Japan",
    category: "Phalaenopsis",
    video:
      "https://www.youtube.com/watch?v=bhOEYjiBb7o&pp=ygUPVGFpY2h1bmcgYmVhdXR5",
  },
  {
    Id: 3,
    name: "Bangkok Delight",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa3.jpg",
    color: "yellow",
    origin: "Thailand",
    categor: "Dendrobium",
    video:
      "https://www.youtube.com/watch?v=wgRoMjBTnWI&pp=ygUPVGFpY2h1bmcgYmVhdXR5",
  },
  {
    Id: 4,
    name: "Manila Grace",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa4.jpg",
    color: "purple",
    origin: "Philippines",
    category: "Vanda",
    video:
      "https://www.youtube.com/watch?v=JP5J97fPCwI&pp=ygUMUGhhbGFlbm9wc2lz",
  },
  {
    Id: 5,
    name: "Hanoi Elegance",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa5.jpg",
    color: "red",
    origin: "Vietnam",
    category: "Paphiopedilum",
    video: "https://www.youtube.com/watch?v=STMu6PWn6TI&pp=ygUIT25jaWRpdW0%3D",
  },
  {
    Id: 6,
    name: "Jakarta Jewel",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa6.jpg",
    color: "red",
    origin: "Vietnam",
    category: "Paphiopedilum",
    video: "https://www.youtube.com/watch?v=AfbYgUal1Tc&pp=ygUIT25jaWRpdW0%3D",
  },
  {
    Id: 7,
    name: "Mumbai Majesty",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa7.jpg",
    color: "purple",
    origin: "India",
    category: "Cattleya",
    video: "https://www.youtube.com/watch?v=b7OWTqvDDuU&pp=ygUJQ3ltYmlkaXVt",
  },
  {
    Id: 8,
    name: "Delhi Delight",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa8.jpg",
    color: "yellow",
    origin: "India",
    category: "Dendrobium",
    video: "https://www.youtube.com/watch?v=fxyLyvK8uAc&pp=ygUJQ3ltYmlkaXVt",
  },
  {
    Id: 9,
    name: "Cairo Charm",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa9.jpg",
    color: "white",
    origin: "Egypt",
    category: "Phalaenopsis",
    video: "https://www.youtube.com/watch?v=6pj3CkmZZAk&pp=ygUJQ3ltYmlkaXVt",
  },
  {
    Id: 10,
    name: "Nairobi Nectar",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa10.jpg",
    color: "red",
    origin: "Kenya",
    category: "Paphiopedilum",
    video: "https://www.youtube.com/watch?v=gcu2Luwsc_M&pp=ygUJQ3ltYmlkaXVt",
  },
  {
    Id: 11,
    name: "Cape Town Cascade",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa11.jpg",
    color: "blue",
    origin: "South Africa",
    category: "Oncidium",
    video: "https://www.youtube.com/watch?v=GV0oLYLgSJs&pp=ygUGT3Bocnlz",
  },
  {
    Id: 12,
    name: "Sydney Star",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa12.jpg",
    color: "orange",
    origin: "Australia",
    category: "Cymbidium",
    video: "https://www.youtube.com/watch?v=GzPT9DgbvQk&pp=ygUGT3Bocnlz",
  },
  {
    Id: 13,
    name: "Auckland Aura",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa13.jpg",
    color: "green",
    origin: "New Zealand",
    category: "Bulbophyllum",
    video: "https://www.youtube.com/watch?v=juIMf0yKQwU&pp=ygUGT3Bocnlz",
  },
  {
    Id: 14,
    name: "Buenos Aires Beauty",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa14.jpg",
    color: "purple",
    origin: "Argentina",
    category: "Brassavola",
    video:
      "https://www.youtube.com/watch?v=aE7jtwvB8c4&pp=ygULTWFzZGV2YWxsaWE%3D",
  },
  {
    Id: 15,
    name: "Rio Radiance",
    rating: 5,
    isSpecial: true,
    image: "src/assets/flower/hoa15.jpg",
    color: "yellow",
    origin: "Brazil",
    category: "Coelogyne",
    video:
      "https://www.youtube.com/watch?v=06ztJCRMBJg&pp=ygULTWFzZGV2YWxsaWE%3D",
  },
  {
    Id: 16,
    name: "Santiago Splendor",
    rating: 4,
    isSpecial: false,
    image: "src/assets/flower/hoa16.jpg",
    color: "red",
    origin: "Chile",
    category: "Epidendrum",
    video: "https://www.youtube.com/watch?v=V5BBTsq8zVc&pp=ygULTWFzZGV2YWxsaWE%3D",
  },
];
export default ListOfOrchids;
