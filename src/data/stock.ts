export interface StockItem {
  id: string;
  code: string;
  price: string;
  model: string;
  status: string;
  mileage: string;
  year: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
}

export const STOCK_ITEMS: StockItem[] = [
  {
    "id": "fa003",
    "code": "#FA003",
    "price": "£88,595",
    "model": "Range Rover D300",
    "status": "Available",
    "mileage": "7,200 miles",
    "year": "2024",
    "summary": "Satin protection, sculpted carbon and 24-inch forged alloys for undeniable road presence.",
    "description": "Wrapped in full satin PPF — the colour softened, the surface guarded. A complete CT carbon bodykit sharpens the front, sills and rear, and 24-inch forged alloys fill the arches without unsettling the ride. Deployable side steps and blacked-out detailing finish it.",
    "coverImage": "/images/5a163f3e22f5cd50f6a41684f53adfcd2ec45882-880x1592.jpg",
    "gallery": [
      "/images/1a74e9802c3b15ba7387996af4abc853980cb3a8-880x1592.jpg",
      "/images/396a56e3a9f2f8242ccb2a6de15aaa3e432b2af1-1344x1736.jpg",
      "/images/841e65432b9ae0092282af238e263bc55fde9149-1344x1736.jpg",
      "/images/1b58bf15dc3fa84bdd8e6d47498775820ca49c72-2752x1800.jpg",
      "/images/d1533cf081519f7eb2bc97ad404fd7da52189bf5-1344x1736.jpg",
      "/images/9882bf152ddd23b90571e527e828a3b203d626ba-1344x1736.jpg",
      "/images/4baafdfa3432ec6fd975d4eae738d676a7221b67-2752x1800.jpg",
      "/images/41bb9b0e8f5a3119520d3f0c1f8e6c5c19f333b3-1344x1736.jpg",
      "/images/98bad32cf2320ac8ef02d5ee3ab635dbc8647178-1344x1736.jpg"
    ]
  },
  {
    "id": "fa004",
    "code": "#FA004",
    "price": "Coming soon",
    "model": "VW T6.1",
    "status": "Coming soon",
    "mileage": "Delivery miles",
    "year": "2024",
    "summary": "This build will be available soon. Check back for updates.",
    "description": "Custom grey Forge Volkswagen T6.1, featuring tailored aero refinement, bespoke interior conversion, and lowered touring stance.",
    "coverImage": "/images/4952d2d36b43ce77966f36e87b6be68ca579a9ae-880x1592.jpg",
    "gallery": [
      "/images/4952d2d36b43ce77966f36e87b6be68ca579a9ae-880x1592.jpg"
    ]
  }
];
