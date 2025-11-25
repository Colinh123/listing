import { Product, ProductType } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    designer: 'Balenciaga',
    name: 'Strike Canvas Combat Boots',
    type: ProductType.SHOES,
    price: 1100,
    size: '42',
    condition: 'New',
    description: 'Heavyweight canvas combat boots featuring a chunky lug sole and distressed finish. Signature Balenciaga logo embossed at the toe and heel.',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-11-15'
  },
  {
    id: '1-2',
    designer: 'Balenciaga',
    name: '3XL Sneakers',
    type: ProductType.SHOES,
    price: 1050,
    size: '43',
    condition: 'New',
    description: 'Exaggerated proportions and worn-out effect.',
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
      '/images/ch2.JPG'
    ],
    listedDate: '2024-01-20'
  },
  {
    id: '1-3',
    designer: 'Balenciaga',
    name: 'Oversized Hoodie',
    type: ProductType.TOPS,
    price: 950,
    size: 'S',
    condition: 'Used',
    description: 'Black heavy fleece hoodie with political campaign logo.',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-10-05'
  },
  {
    id: '10',
    designer: 'Louis Vuitton',
    name: 'Keepall Bandoulière 50',
    type: ProductType.BAGS,
    price: 2500,
    size: 'OS',
    condition: 'Vintage',
    description: 'Iconic travel bag in Monogram canvas. Perfect for weekend getaways. Features natural cowhide leather trimmings and cotton textile lining.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874102752-16b1e6211752?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-08-12'
  },
  {
    id: '3',
    designer: 'Raf Simons',
    name: 'Oversized Patch Denim Shirt',
    type: ProductType.TOPS,
    price: 850,
    size: 'M',
    condition: 'Used',
    description: 'Black denim shirt with graphic patches. A staple piece from the archive featuring the signature oversized silhouette.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-05-30'
  },
  {
    id: '5',
    designer: 'Rick Owens',
    name: 'Geobasket Sneakers',
    type: ProductType.SHOES,
    price: 900,
    size: '42',
    condition: 'Good',
    description: 'The iconic high-top sneaker in black and milk leather. Extended tongue and shark-tooth sole.',
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2024-02-15'
  },
  {
    id: '12',
    designer: 'Louis Vuitton',
    name: 'Soft Trunk Monogram Eclipse',
    type: ProductType.BAGS,
    price: 3200,
    size: 'OS',
    condition: 'New',
    description: 'A boxy messenger bag fashioned from Monogram Eclipse canvas, echoing the structure of classic luggage.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2024-03-01'
  },
  {
    id: '15',
    designer: 'Maison Margiela',
    name: 'Replica Paint Splatter',
    type: ProductType.SHOES,
    price: 650,
    size: '43',
    condition: 'New',
    description: 'Classic German Army Trainer silhouette reimagined with hand-painted splatter details.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa9949045f?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-12-10'
  },
  {
    id: '2',
    designer: 'Helmut Lang',
    name: 'Painter Denim 1998',
    type: ProductType.BOTTOMS,
    price: 1200,
    size: '30',
    condition: 'Used',
    description: 'Classic 1998 production painter jeans featuring authentic paint splatter details.',
    images: [
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=1000&auto=format&fit=crop',
    ],
    listedDate: '2023-01-15'
  },
  {
    id: 'ch-1',
    designer: 'Chrome Hearts',
    name: 'Cross Patch Denim',
    type: ProductType.BOTTOMS,
    price: 4500,
    size: '32',
    condition: 'Vintage',
    description: 'Vintage Levi\'s 501s customized with sterling silver hardware and leather cross patches.',
    images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop'],
    listedDate: '2023-09-22'
  },
  {
    id: 'ch-2',
    designer: 'Chrome Hearts',
    name: 'Floral Cross Ring',
    type: ProductType.ACCESSORIES,
    price: 850,
    size: 'OS',
    condition: 'New',
    description: 'Sterling silver ring featuring the signature floral cross motif.',
    images: ['https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop'],
    listedDate: '2024-02-28'
  },
  {
    id: 'ch-3',
    designer: 'Chrome Hearts',
    name: 'Horseshoe Hoodie',
    type: ProductType.TOPS,
    price: 750,
    size: 'L',
    condition: 'Used',
    description: 'Thermal lined zip-up hoodie with horseshoe logo back print.',
    images: ['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop'],
    listedDate: '2023-07-14'
  },
  {
    id: 'acne-1',
    designer: 'Acne Studios',
    name: 'Musubi Mini Bag',
    type: ProductType.BAGS,
    price: 1100,
    size: 'OS',
    condition: 'New',
    description: 'Soft leather bag featuring twisted knot details inspired by traditional Japanese obi sashes.',
    images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop'],
    listedDate: '2024-03-10'
  },
  {
    id: 'bv-1',
    designer: 'Bottega Veneta',
    name: 'Cassette Bag',
    type: ProductType.BAGS,
    price: 2800,
    size: 'OS',
    condition: 'New',
    description: 'Padded Intreccio leather shoulder bag.',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop'],
    listedDate: '2023-11-30'
  }
];

export const DESIGNERS = Array.from(new Set(MOCK_PRODUCTS.map(p => p.designer))).sort();