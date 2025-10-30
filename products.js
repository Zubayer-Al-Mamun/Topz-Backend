export async function getProducts() {
  console.log("featching productsss..")
    return products;
}
export async function getProduct(productId) {
    const product = products.find((product) => product.productId === productId);
    return product;
}

const products = [
  {
    "productId": "1e2d3c4b-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    "title": "Rice Cooker Multicooker Simplicity Portable Electric Multicooker cooking pot",
    "description": "Soft and cozy material. losldf ksdf lorem jsdflkj dsk West Indies made a winning start to the three-match T20I series against Bangladesh with a convincing 16-run win. Unbeaten forties from captain Shai Hope (46) and Rovman Powell (44) ensured that the visitors posted a competitive 165/3 before successfully defending the total by bowling Bangladesh out in 19.4 overs for 149.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 28900,
    "discountsPrice": 23120,
    "discountsPercentage": 20,
    "for": "male",
    "stock": 42,
    "rating" : 4.5,
    "vars": [
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 33,
        "l": 45,
        "xl": 27,
        "imageUrl": [
          "https://picsum.photos/id/101/500/500",
          "https://picsum.photos/id/202/500/500"
        ]
      },
      {
        "color": "red",
        "colorCode": "#FF0000",
        "m": 22,
        "l": 36,
        "xl": 48,
        "imageUrl": [
          "https://picsum.photos/id/303/500/500",
          "https://picsum.photos/id/404/500/500"
        ]
      }
    ],


    
    "vendor": "BrandB",
    "createdAt": "2024-05-11T09:45:00Z",
    "updatedAt": "2025-06-02T13:15:00Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Great product!",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/505/500/500",
          "https://picsum.photos/id/606/500/500"
        ]
      }
    ],
    "totalView": 256,
    "totalSale": 49
  },

  {
    "productId": "2a91b47d-1d8f-4c63-8b8a-7e2a84e2d23c",
    "title": "Urban Jacket",
    "description": "Durable and long-lasting.",
    "category": "jacket",
    "subcategory": "winter",
    "pricing": 34800,
    "discountsPrice": 31320,
    "discountsPercentage": 10,
    "for": "female",
    "stock": 65,
    "vars": [
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 45,
        "l": 62,
        "xl": 31,
        "imageUrl": [
          "https://picsum.photos/id/77/500/500",
          "https://picsum.photos/id/808/500/500"
        ]
      }
    ],
    "vendor": "BrandC",
    "createdAt": "2024-07-22T11:30:00Z",
    "updatedAt": "2025-07-05T17:40:00Z",
    "reviews": [
      {
        "name": "Frank",
        "comment": "Worth the price.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/909/500/500",
          "https://picsum.photos/id/112/500/500"
        ]
      }
    ],
    "totalView": 318,
    "totalSale": 71
  },
  
  {
    "productId": "6c47f25b-73a0-40b2-a49d-9f2175ea6a9e",
    "title": "Comfy Pullover",
    "description": "Perfect for everyday wear.",
    "category": "tshirt",
    "subcategory": "basic",
    "pricing": 15900,
    "discountsPrice": 12720,
    "discountsPercentage": 20,
    "for": "unisex",
    "stock": 54,
    "vars": [
      {
        "color": "green",
        "colorCode": "#008000",
        "m": 18,
        "l": 49,
        "xl": 32,
        "imageUrl": [
          "https://picsum.photos/id/223/500/500",
          "https://picsum.photos/id/334/500/500"
        ]
      }
    ],
    "vendor": "BrandE",
    "createdAt": "2024-03-19T08:00:00Z",
    "updatedAt": "2025-05-21T09:25:00Z",
    "reviews": [],
    "totalView": 142,
    "totalSale": 26
  },

  {
    "productId": "7f34a62b-9c5d-4e1b-8f72-6c8a2d1b7e9f",
    "title": "Trendy Shirt",
    "description": "Lightweight and breathable.",
    "category": "tshirt",
    "subcategory": "basic",
    "pricing": 19800,
    "discountsPrice": 15840,
    "discountsPercentage": 20,
    "for": "male",
    "stock": 33,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 14,
        "l": 25,
        "xl": 21,
        "imageUrl": [
          "https://picsum.photos/id/121/500/500",
          "https://picsum.photos/id/131/500/500"
        ]
      }
    ],
    "vendor": "BrandA",
    "createdAt": "2024-02-10T10:15:00Z",
    "updatedAt": "2025-04-15T12:30:00Z",
    "reviews": [
      {
        "name": "Bob",
        "comment": "Very comfortable.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/141/500/500",
          "https://picsum.photos/id/151/500/500"
        ]
      }
    ],
    "totalView": 198,
    "totalSale": 34
  },

  {
    "productId": "7e8a1f3b-5c2d-4d7e-b4f0-1a9b8c7d6e5f",
    "title": "Urban Hoodie",
    "description": "Soft and cozy hoodie perfect for casual wear.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 40250,
    "discountsPrice": 35600,
    "discountsPercentage": 12,
    "for": "male",
    "stock": 25,
    "vars": [
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 45,
        "l": 30,
        "xl": 21,
        "imageUrl": [
          "https://picsum.photos/id/969/500/500",
          "https://picsum.photos/id/302/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#006A67",
        "m": 34,
        "l": 39,
        "xl": 34,
        "imageUrl": [
          "https://picsum.photos/id/911/500/500",
          "https://picsum.photos/id/828/500/500"
        ]
      },
      {
        "color": "sky",
        "colorCode": "#F4991A",
        "m": 23,
        "l": 98,
        "xl": 23,
        "imageUrl": [
          "https://picsum.photos/id/464/500/500",
          "https://picsum.photos/id/225/500/500"
        ]
      }
    ],
    "vendor": "BrandA",
    "createdAt": "2025-02-01T09:00:00Z",
    "updatedAt": "2025-08-10T12:30:00Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Great fit and quality!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/875/500/500",
          "https://picsum.photos/id/769/500/500",
          "https://picsum.photos/id/567/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Very comfy hoodie.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/526/500/500",
          "https://picsum.photos/id/498/500/500",
          "https://picsum.photos/id/813/500/500"
        ]
      }
    ],
    "totalView": 150,
    "totalSale": 30
  },

  {
    "productId": "9b2f7c8a-3e1d-4b6a-9f2b-0c1d2e3f4a5b",
    "title": "Retro Sweatshirt",
    "description": "Stylish sweatshirt suitable for everyday wear.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 40500,
    "discountsPrice": 35650,
    "discountsPercentage": 14,
    "for": "male",
    "stock": 12,
    "vars": [
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 45,
        "l": 30,
        "xl": 21,
        "imageUrl": [
          "https://picsum.photos/id/217/500/500",
          "https://picsum.photos/id/19/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#006A67",
        "m": 34,
        "l": 39,
        "xl": 34,
        "imageUrl": [
          "https://picsum.photos/id/950/500/500",
          "https://picsum.photos/id/775/500/500"
        ]
      },
      {
        "color": "sky",
        "colorCode": "#F4991A",
        "m": 23,
        "l": 98,
        "xl": 23,
        "imageUrl": [
          "https://picsum.photos/id/364/500/500",
          "https://picsum.photos/id/562/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2025-03-05T11:00:00Z",
    "updatedAt": "2025-09-01T13:00:00Z",
    "reviews": [
      {
        "name": "Charlie",
        "comment": "Good value for money.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/751/500/500",
          "https://picsum.photos/id/139/500/500",
          "https://picsum.photos/id/403/500/500"
        ]
      },
      {
        "name": "Dana",
        "comment": "Nice color and soft fabric.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/79/500/500",
          "https://picsum.photos/id/847/500/500",
          "https://picsum.photos/id/968/500/500"
        ]
      }
    ],
    "totalView": 120,
    "totalSale": 25
  },

  {
    "productId": "c3d7f9a4-8b6e-4c7f-b2a1-5d6e7f8b9c0d",
    "title": "Comfy Pullover",
    "description": "Soft pullover for casual and relaxed style.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 39800,
    "discountsPrice": 35500,
    "discountsPercentage": 10,
    "for": "male",
    "stock": 18,
    "vars": [
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 45,
        "l": 30,
        "xl": 21,
        "imageUrl": [
          "https://picsum.photos/id/698/500/500",
          "https://picsum.photos/id/515/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#006A67",
        "m": 34,
        "l": 39,
        "xl": 34,
        "imageUrl": [
          "https://picsum.photos/id/986/500/500",
          "https://picsum.photos/id/896/500/500"
        ]
      },
      {
        "color": "sky",
        "colorCode": "#F4991A",
        "m": 23,
        "l": 98,
        "xl": 23,
        "imageUrl": [
          "https://picsum.photos/id/758/500/500",
          "https://picsum.photos/id/806/500/500"
        ]
      }
    ],
    "vendor": "BrandC",
    "createdAt": "2025-04-01T08:30:00Z",
    "updatedAt": "2025-09-05T10:20:00Z",
    "reviews": [
      {
        "name": "Eve",
        "comment": "Fits perfectly, very cozy.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/918/500/500",
          "https://picsum.photos/id/507/500/500",
          "https://picsum.photos/id/823/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Good quality hoodie.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/694/500/500",
          "https://picsum.photos/id/719/500/500",
          "https://picsum.photos/id/504/500/500"
        ]
      }
    ],
    "totalView": 130,
    "totalSale": 28
  },

  {
    "productId": "45d67f12-f5f6-41aa-9ae7-083363ca7563",
    "title": "Stylish Pants",
    "description": "Durable and long-lasting.",
    "category": "tshirt",
    "subcategory": "basic",
    "pricing": 10679,
    "discountsPrice": 8010,
    "discountsPercentage": 25,
    "for": "female",
    "stock": 95,
    "vars": [
      {
        "color": "red",
        "colorCode": "#FF0000",
        "m": 63,
        "l": 69,
        "xl": 100,
        "imageUrl": [
          "https://picsum.photos/id/216/500/500",
          "https://picsum.photos/id/350/500/500"
        ]
      },
      {
        "color": "orange",
        "colorCode": "#FFA500",
        "m": 24,
        "l": 94,
        "xl": 10,
        "imageUrl": [
          "https://picsum.photos/id/206/500/500",
          "https://picsum.photos/id/61/500/500"
        ]
      },
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 57,
        "l": 25,
        "xl": 67,
        "imageUrl": [
          "https://picsum.photos/id/198/500/500",
          "https://picsum.photos/id/462/500/500"
        ]
      },
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 11,
        "l": 82,
        "xl": 92,
        "imageUrl": [
          "https://picsum.photos/id/651/500/500",
          "https://picsum.photos/id/133/500/500"
        ]
      }
    ],
    "vendor": "BrandE",
    "createdAt": "2024-02-07T19:18:28Z",
    "updatedAt": "2025-01-06T20:39:00Z",
    "reviews": [
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/98/500/500",
          "https://picsum.photos/id/746/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Not bad, could be better.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/623/500/500",
          "https://picsum.photos/id/678/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Great product!",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/964/500/500",
          "https://picsum.photos/id/959/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Great product!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/258/500/500",
          "https://picsum.photos/id/250/500/500"
        ]
      }
    ],
    "totalView": 440,
    "totalSale": 9
  },

  {
    "productId": "aa59b1c2-5bea-41ae-ab8b-81b720c9db29",
    "title": "Classic Hoodie",
    "description": "Lightweight and breathable.",
    "category": "jacket",
    "subcategory": "winter",
    "pricing": 12650,
    "discountsPrice": 11385,
    "discountsPercentage": 10,
    "for": "unisex",
    "stock": 54,
    "vars": [
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 74,
        "l": 91,
        "xl": 54,
        "imageUrl": [
          "https://picsum.photos/id/95/500/500",
          "https://picsum.photos/id/3/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 64,
        "l": 53,
        "xl": 36,
        "imageUrl": [
          "https://picsum.photos/id/526/500/500",
          "https://picsum.photos/id/158/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#008000",
        "m": 16,
        "l": 84,
        "xl": 42,
        "imageUrl": [
          "https://picsum.photos/id/529/500/500",
          "https://picsum.photos/id/975/500/500"
        ]
      }
    ],
    "vendor": "BrandD",
    "createdAt": "2024-03-03T15:47:45Z",
    "updatedAt": "2025-02-06T02:25:28Z",
    "reviews": [
      {
        "name": "Bob",
        "comment": "Not bad, could be better.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/663/500/500",
          "https://picsum.photos/id/643/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/673/500/500",
          "https://picsum.photos/id/760/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/666/500/500",
          "https://picsum.photos/id/104/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/609/500/500",
          "https://picsum.photos/id/988/500/500"
        ]
      }
    ],
    "totalView": 128,
    "totalSale": 38
  },

  {
    "productId": "08ee02cc-3459-4654-aafc-4a1ff67dfd53",
    "title": "Comfy Pullover",
    "description": "Durable and long-lasting.",
    "category": "jacket",
    "subcategory": "winter",
    "pricing": 38819,
    "discountsPrice": 36879,
    "discountsPercentage": 5,
    "for": "male",
    "stock": 99,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 98,
        "l": 87,
        "xl": 92,
        "imageUrl": [
          "https://picsum.photos/id/289/500/500",
          "https://picsum.photos/id/23/500/500"
        ]
      },
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 17,
        "l": 88,
        "xl": 89,
        "imageUrl": [
          "https://picsum.photos/id/667/500/500",
          "https://picsum.photos/id/167/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#008000",
        "m": 70,
        "l": 55,
        "xl": 32,
        "imageUrl": [
          "https://picsum.photos/id/754/500/500",
          "https://picsum.photos/id/300/500/500"
        ]
      }
    ],
    "vendor": "BrandA",
    "createdAt": "2024-02-07T08:23:01Z",
    "updatedAt": "2025-06-26T14:00:30Z",
    "reviews": [
      {
        "name": "Diana",
        "comment": "Not bad, could be better.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/743/500/500",
          "https://picsum.photos/id/779/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Great product!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/77/500/500",
          "https://picsum.photos/id/613/500/500"
        ]
      }
    ],
    "totalView": 291,
    "totalSale": 98
  },

  {
    "productId": "b7974715-df04-47bc-a26a-332f1da831fb",
    "title": "Trendy Shirt",
    "description": "Comfortable fit for casual use.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 15380,
    "discountsPrice": 13842,
    "discountsPercentage": 10,
    "for": "female",
    "stock": 26,
    "vars": [
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 32,
        "l": 57,
        "xl": 15,
        "imageUrl": [
          "https://picsum.photos/id/630/500/500",
          "https://picsum.photos/id/970/500/500"
        ]
      },
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 43,
        "l": 79,
        "xl": 55,
        "imageUrl": [
          "https://picsum.photos/id/651/500/500",
          "https://picsum.photos/id/44/500/500"
        ]
      }
    ],
    "vendor": "BrandA",
    "createdAt": "2024-08-14T15:53:06Z",
    "updatedAt": "2025-06-18T23:55:39Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Not bad, could be better.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/835/500/500",
          "https://picsum.photos/id/904/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Good quality.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/191/500/500",
          "https://picsum.photos/id/834/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Great product!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/939/500/500",
          "https://picsum.photos/id/932/500/500"
        ]
      }
    ],
    "totalView": 484,
    "totalSale": 56
  },

  {
    "productId": "ad66f233-0027-4f8e-8516-b599351df96e",
    "title": "Casual Tee",
    "description": "Trendy and stylish design.",
    "category": "hoodie",
    "subcategory": "casual",
    "pricing": 4140,
    "discountsPrice": 3933,
    "discountsPercentage": 5,
    "for": "unisex",
    "stock": 37,
    "vars": [
      {
        "color": "pink",
        "colorCode": "#FFC0CB",
        "m": 29,
        "l": 86,
        "xl": 76,
        "imageUrl": [
          "https://picsum.photos/id/907/500/500",
          "https://picsum.photos/id/249/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 49,
        "l": 44,
        "xl": 31,
        "imageUrl": [
          "https://picsum.photos/id/701/500/500",
          "https://picsum.photos/id/769/500/500"
        ]
      },
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 17,
        "l": 22,
        "xl": 49,
        "imageUrl": [
          "https://picsum.photos/id/317/500/500",
          "https://picsum.photos/id/920/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#008000",
        "m": 14,
        "l": 26,
        "xl": 100,
        "imageUrl": [
          "https://picsum.photos/id/303/500/500",
          "https://picsum.photos/id/46/500/500"
        ]
      }
    ],
    "vendor": "BrandD",
    "createdAt": "2024-12-16T19:19:59Z",
    "updatedAt": "2025-08-25T16:18:42Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Very comfortable.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/209/500/500",
          "https://picsum.photos/id/422/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Great product!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/569/500/500",
          "https://picsum.photos/id/77/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Good quality.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/421/500/500",
          "https://picsum.photos/id/274/500/500"
        ]
      }
    ],
    "totalView": 470,
    "totalSale": 33
  },

  {
    "productId": "25843200-ed9f-426f-8c52-439c5e0940ab",
    "title": "Stylish Pants",
    "description": "Soft and cozy material.",
    "category": "cap",
    "subcategory": "accessories",
    "pricing": 45362,
    "discountsPrice": 43094,
    "discountsPercentage": 5,
    "for": "unisex",
    "stock": 13,
    "vars": [
      {
        "color": "pink",
        "colorCode": "#FFC0CB",
        "m": 99,
        "l": 41,
        "xl": 76,
        "imageUrl": [
          "https://picsum.photos/id/826/500/500",
          "https://picsum.photos/id/930/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 92,
        "l": 60,
        "xl": 27,
        "imageUrl": [
          "https://picsum.photos/id/416/500/500",
          "https://picsum.photos/id/840/500/500"
        ]
      },
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 61,
        "l": 23,
        "xl": 50,
        "imageUrl": [
          "https://picsum.photos/id/181/500/500",
          "https://picsum.photos/id/840/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-02-21T15:33:34Z",
    "updatedAt": "2025-07-03T01:02:21Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/124/500/500",
          "https://picsum.photos/id/541/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Very comfortable.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/48/500/500",
          "https://picsum.photos/id/306/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Not bad, could be better.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/520/500/500",
          "https://picsum.photos/id/951/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Great product!",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/921/500/500",
          "https://picsum.photos/id/117/500/500"
        ]
      }
    ],
    "totalView": 470,
    "totalSale": 85
  },

  {
    "productId": "190fde76-38f8-4363-825a-a5dab4a82aa4",
    "title": "Casual Tee",
    "description": "Durable and long-lasting.",
    "category": "shoes",
    "subcategory": "sports",
    "pricing": 16352,
    "discountsPrice": 12264,
    "discountsPercentage": 25,
    "for": "male",
    "stock": 42,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 53,
        "l": 66,
        "xl": 92,
        "imageUrl": [
          "https://picsum.photos/id/66/500/500",
          "https://picsum.photos/id/855/500/500"
        ]
      },
      {
        "color": "white",
        "colorCode": "#FFFFFF",
        "m": 64,
        "l": 24,
        "xl": 74,
        "imageUrl": [
          "https://picsum.photos/id/953/500/500",
          "https://picsum.photos/id/144/500/500"
        ]
      }
    ],
    "vendor": "BrandE",
    "createdAt": "2024-10-15T15:32:09Z",
    "updatedAt": "2025-02-10T08:10:41Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Worth the price.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/614/500/500",
          "https://picsum.photos/id/507/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Good quality.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/290/500/500",
          "https://picsum.photos/id/282/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/961/500/500",
          "https://picsum.photos/id/707/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Not bad, could be better.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/285/500/500",
          "https://picsum.photos/id/34/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Great product!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/484/500/500",
          "https://picsum.photos/id/287/500/500"
        ]
      }
    ],
    "totalView": 324,
    "totalSale": 57
  },

  {
    "productId": "33c780b3-8045-4da4-aca9-8c8f6809fbc6",
    "title": "Comfy Pullover",
    "description": "Comfortable fit for casual use.",
    "category": "shoes",
    "subcategory": "sports",
    "pricing": 9251,
    "discountsPrice": 8326,
    "discountsPercentage": 10,
    "for": "unisex",
    "stock": 37,
    "vars": [
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 81,
        "l": 57,
        "xl": 91,
        "imageUrl": [
          "https://picsum.photos/id/447/500/500",
          "https://picsum.photos/id/902/500/500"
        ]
      },
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 21,
        "l": 29,
        "xl": 61,
        "imageUrl": [
          "https://picsum.photos/id/560/500/500",
          "https://picsum.photos/id/118/500/500"
        ]
      },
      {
        "color": "orange",
        "colorCode": "#FFA500",
        "m": 52,
        "l": 42,
        "xl": 64,
        "imageUrl": [
          "https://picsum.photos/id/653/500/500",
          "https://picsum.photos/id/107/500/500"
        ]
      },
      {
        "color": "white",
        "colorCode": "#FFFFFF",
        "m": 63,
        "l": 98,
        "xl": 38,
        "imageUrl": [
          "https://picsum.photos/id/953/500/500",
          "https://picsum.photos/id/595/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-04-25T15:04:21Z",
    "updatedAt": "2025-07-16T20:14:52Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Very comfortable.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/234/500/500",
          "https://picsum.photos/id/960/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Not bad, could be better.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/979/500/500",
          "https://picsum.photos/id/579/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/114/500/500",
          "https://picsum.photos/id/844/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Not bad, could be better.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/2/500/500",
          "https://picsum.photos/id/18/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Great product!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/877/500/500",
          "https://picsum.photos/id/214/500/500"
        ]
      }
    ],
    "totalView": 210,
    "totalSale": 5
  },

  {
    "productId": "55450833-b818-44ea-9aa2-699b92d14704",
    "title": "Urban Jacket",
    "description": "Durable and long-lasting.",
    "category": "jacket",
    "subcategory": "winter",
    "pricing": 30744,
    "discountsPrice": 24596,
    "discountsPercentage": 20,
    "for": "male",
    "stock": 36,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 44,
        "l": 12,
        "xl": 18,
        "imageUrl": [
          "https://picsum.photos/id/130/500/500",
          "https://picsum.photos/id/708/500/500"
        ]
      },
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 74,
        "l": 27,
        "xl": 40,
        "imageUrl": [
          "https://picsum.photos/id/108/500/500",
          "https://picsum.photos/id/466/500/500"
        ]
      }
    ],
    "vendor": "BrandC",
    "createdAt": "2024-12-01T20:57:55Z",
    "updatedAt": "2025-03-04T04:38:39Z",
    "reviews": [
      {
        "name": "Diana",
        "comment": "Good quality.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/466/500/500",
          "https://picsum.photos/id/506/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Worth the price.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/704/500/500",
          "https://picsum.photos/id/131/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Loved it!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/764/500/500",
          "https://picsum.photos/id/123/500/500"
        ]
      }
    ],
    "totalView": 215,
    "totalSale": 38
  },

  {
    "productId": "30e178e0-90e9-45e7-a0ff-45e2692a4877",
    "title": "Stylish Pants",
    "description": "Comfortable fit for casual use.",
    "category": "tshirt",
    "subcategory": "basic",
    "pricing": 32869,
    "discountsPrice": 24652,
    "discountsPercentage": 25,
    "for": "female",
    "stock": 23,
    "vars": [
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 55,
        "l": 78,
        "xl": 47,
        "imageUrl": [
          "https://picsum.photos/id/772/500/500",
          "https://picsum.photos/id/646/500/500"
        ]
      },
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 93,
        "l": 12,
        "xl": 69,
        "imageUrl": [
          "https://picsum.photos/id/379/500/500",
          "https://picsum.photos/id/504/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-12-20T03:04:09Z",
    "updatedAt": "2025-07-13T14:14:56Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Very comfortable.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/649/500/500",
          "https://picsum.photos/id/801/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Very comfortable.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/932/500/500",
          "https://picsum.photos/id/465/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Loved it!",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/195/500/500",
          "https://picsum.photos/id/448/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Not bad, could be better.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/882/500/500",
          "https://picsum.photos/id/581/500/500"
        ]
      }
    ],
    "totalView": 465,
    "totalSale": 62
  },

  {
    "productId": "f6b7f75a-38ac-47b1-ad06-ec1a149940ef",
    "title": "Classic Hoodie",
    "description": "Comfortable fit for casual use.",
    "category": "pants",
    "subcategory": "formal",
    "pricing": 42756,
    "discountsPrice": 40619,
    "discountsPercentage": 5,
    "for": "female",
    "stock": 29,
    "vars": [
      {
        "color": "orange",
        "colorCode": "#FFA500",
        "m": 83,
        "l": 67,
        "xl": 46,
        "imageUrl": [
          "https://picsum.photos/id/672/500/500",
          "https://picsum.photos/id/707/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 28,
        "l": 44,
        "xl": 80,
        "imageUrl": [
          "https://picsum.photos/id/777/500/500",
          "https://picsum.photos/id/87/500/500"
        ]
      },
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 38,
        "l": 41,
        "xl": 85,
        "imageUrl": [
          "https://picsum.photos/id/338/500/500",
          "https://picsum.photos/id/114/500/500"
        ]
      },
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 92,
        "l": 31,
        "xl": 71,
        "imageUrl": [
          "https://picsum.photos/id/757/500/500",
          "https://picsum.photos/id/207/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-11-23T11:00:24Z",
    "updatedAt": "2025-08-23T01:24:18Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Great product!",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/712/500/500",
          "https://picsum.photos/id/222/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Good quality.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/572/500/500",
          "https://picsum.photos/id/907/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/95/500/500",
          "https://picsum.photos/id/405/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Very comfortable.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/269/500/500",
          "https://picsum.photos/id/400/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Worth the price.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/106/500/500",
          "https://picsum.photos/id/848/500/500"
        ]
      }
    ],
    "totalView": 345,
    "totalSale": 68
  },

  {
    "productId": "9f27b086-f754-4722-9818-e7b5db54d058",
    "title": "Warm Sweater",
    "description": "Lightweight and breathable.",
    "category": "jacket",
    "subcategory": "winter",
    "pricing": 46918,
    "discountsPrice": 44573,
    "discountsPercentage": 5,
    "for": "male",
    "stock": 66,
    "vars": [
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 74,
        "l": 45,
        "xl": 27,
        "imageUrl": [
          "https://picsum.photos/id/969/500/500",
          "https://picsum.photos/id/274/500/500"
        ]
      },
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 38,
        "l": 65,
        "xl": 94,
        "imageUrl": [
          "https://picsum.photos/id/481/500/500",
          "https://picsum.photos/id/589/500/500"
        ]
      },
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 52,
        "l": 90,
        "xl": 75,
        "imageUrl": [
          "https://picsum.photos/id/291/500/500",
          "https://picsum.photos/id/285/500/500"
        ]
      }
    ],
    "vendor": "BrandD",
    "createdAt": "2024-08-05T13:03:35Z",
    "updatedAt": "2025-02-01T06:35:34Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Very comfortable.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/75/500/500",
          "https://picsum.photos/id/637/500/500"
        ]
      },
      {
        "name": "Bob",
        "comment": "Loved it!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/246/500/500",
          "https://picsum.photos/id/800/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Great product!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/939/500/500",
          "https://picsum.photos/id/274/500/500"
        ]
      }
    ],
    "totalView": 256,
    "totalSale": 9
  },
  
  {
    "productId": "a64a1826-1ce8-4ea9-b34c-376e1d89d96c",
    "title": "Trendy Shirt",
    "description": "Lightweight and breathable.",
    "category": "shoes",
    "subcategory": "sports",
    "pricing": 32754,
    "discountsPrice": 29479,
    "discountsPercentage": 10,
    "for": "male",
    "stock": 11,
    "vars": [
      {
        "color": "red",
        "colorCode": "#FF0000",
        "m": 35,
        "l": 32,
        "xl": 74,
        "imageUrl": [
          "https://picsum.photos/id/844/500/500",
          "https://picsum.photos/id/135/500/500"
        ]
      },
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 16,
        "l": 44,
        "xl": 52,
        "imageUrl": [
          "https://picsum.photos/id/64/500/500",
          "https://picsum.photos/id/996/500/500"
        ]
      },
      {
        "color": "white",
        "colorCode": "#FFFFFF",
        "m": 75,
        "l": 29,
        "xl": 53,
        "imageUrl": [
          "https://picsum.photos/id/138/500/500",
          "https://picsum.photos/id/956/500/500"
        ]
      }
    ],
    "vendor": "BrandE",
    "createdAt": "2024-02-22T15:43:54Z",
    "updatedAt": "2025-01-08T16:42:17Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Not bad, could be better.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/807/500/500",
          "https://picsum.photos/id/878/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Very comfortable.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/290/500/500",
          "https://picsum.photos/id/680/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Great product!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/239/500/500",
          "https://picsum.photos/id/679/500/500"
        ]
      }
    ],
    "totalView": 338,
    "totalSale": 85
  },

  {
    "productId": "bc7bef2c-b312-44ba-96cd-4e0de6edc63f",
    "title": "Urban Jacket",
    "description": "Trendy and stylish design.",
    "category": "shoes",
    "subcategory": "sports",
    "pricing": 48949,
    "discountsPrice": 36712,
    "discountsPercentage": 25,
    "for": "female",
    "stock": 96,
    "vars": [
      {
        "color": "red",
        "colorCode": "#FF0000",
        "m": 14,
        "l": 87,
        "xl": 84,
        "imageUrl": [
          "https://picsum.photos/id/250/500/500",
          "https://picsum.photos/id/195/500/500"
        ]
      },
      {
        "color": "red",
        "colorCode": "#FF0000",
        "m": 30,
        "l": 11,
        "xl": 66,
        "imageUrl": [
          "https://picsum.photos/id/185/500/500",
          "https://picsum.photos/id/647/500/500"
        ]
      }
    ],
    "vendor": "BrandC",
    "createdAt": "2024-01-12T03:06:23Z",
    "updatedAt": "2025-05-19T04:34:23Z",
    "reviews": [
      {
        "name": "Bob",
        "comment": "Not bad, could be better.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/979/500/500",
          "https://picsum.photos/id/324/500/500"
        ]
      }
    ],
    "totalView": 483,
    "totalSale": 14
  },

  {
    "productId": "068aa0b4-42bc-4c87-84a7-6f79e74d5f39",
    "title": "Sporty Shoes",
    "description": "Comfortable fit for casual use.",
    "category": "cap",
    "subcategory": "accessories",
    "pricing": 24647,
    "discountsPrice": 19718,
    "discountsPercentage": 20,
    "for": "unisex",
    "stock": 63,
    "vars": [
      {
        "color": "black",
        "colorCode": "#000000",
        "m": 21,
        "l": 36,
        "xl": 50,
        "imageUrl": [
          "https://picsum.photos/id/60/500/500",
          "https://picsum.photos/id/575/500/500"
        ]
      },
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 41,
        "l": 51,
        "xl": 60,
        "imageUrl": [
          "https://picsum.photos/id/283/500/500",
          "https://picsum.photos/id/90/500/500"
        ]
      },
      {
        "color": "blue",
        "colorCode": "#0000FF",
        "m": 40,
        "l": 86,
        "xl": 78,
        "imageUrl": [
          "https://picsum.photos/id/416/500/500",
          "https://picsum.photos/id/216/500/500"
        ]
      },
      {
        "color": "green",
        "colorCode": "#008000",
        "m": 70,
        "l": 60,
        "xl": 23,
        "imageUrl": [
          "https://picsum.photos/id/855/500/500",
          "https://picsum.photos/id/486/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-11-20T13:08:57Z",
    "updatedAt": "2025-02-09T23:54:17Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Not bad, could be better.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/902/500/500",
          "https://picsum.photos/id/850/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Not bad, could be better.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/453/500/500",
          "https://picsum.photos/id/692/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/21/500/500",
          "https://picsum.photos/id/604/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Loved it!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/147/500/500",
          "https://picsum.photos/id/3/500/500"
        ]
      }
    ],
    "totalView": 291,
    "totalSale": 40
  },

  {
    "productId": "a7026be1-9635-4cf1-9c71-b3d19a31ab4f",
    "title": "Casual Tee",
    "description": "Lightweight and breathable.",
    "category": "cap",
    "subcategory": "accessories",
    "pricing": 45161,
    "discountsPrice": 33871,
    "discountsPercentage": 25,
    "for": "unisex",
    "stock": 70,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 63,
        "l": 47,
        "xl": 83,
        "imageUrl": [
          "https://picsum.photos/id/461/500/500",
          "https://picsum.photos/id/569/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 33,
        "l": 58,
        "xl": 46,
        "imageUrl": [
          "https://picsum.photos/id/820/500/500",
          "https://picsum.photos/id/283/500/500"
        ]
      }
    ],
    "vendor": "BrandE",
    "createdAt": "2024-04-28T03:33:10Z",
    "updatedAt": "2025-08-06T22:20:23Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Loved it!",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/890/500/500",
          "https://picsum.photos/id/69/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/366/500/500",
          "https://picsum.photos/id/119/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Worth the price.",
        "rating": 4,
        "imageUrl": [
          "https://picsum.photos/id/566/500/500",
          "https://picsum.photos/id/440/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Loved it!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/526/500/500",
          "https://picsum.photos/id/194/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Good quality.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/596/500/500",
          "https://picsum.photos/id/164/500/500"
        ]
      }
    ],
    "totalView": 236,
    "totalSale": 76
  },

  {
    "productId": "1c20f427-4086-490e-aaf9-da377d462670",
    "title": "Warm Sweater",
    "description": "Perfect for everyday wear.",
    "category": "cap",
    "subcategory": "accessories",
    "pricing": 27514,
    "discountsPrice": 20636,
    "discountsPercentage": 25,
    "for": "unisex",
    "stock": 36,
    "vars": [
      {
        "color": "yellow",
        "colorCode": "#FFFF00",
        "m": 66,
        "l": 84,
        "xl": 17,
        "imageUrl": [
          "https://picsum.photos/id/290/500/500",
          "https://picsum.photos/id/143/500/500"
        ]
      },
      {
        "color": "purple",
        "colorCode": "#800080",
        "m": 39,
        "l": 14,
        "xl": 80,
        "imageUrl": [
          "https://picsum.photos/id/177/500/500",
          "https://picsum.photos/id/167/500/500"
        ]
      },
      {
        "color": "aqua",
        "colorCode": "#52a3ff",
        "m": 58,
        "l": 87,
        "xl": 39,
        "imageUrl": [
          "https://picsum.photos/id/65/500/500",
          "https://picsum.photos/id/85/500/500"
        ]
      }
    ],
    "vendor": "BrandB",
    "createdAt": "2024-07-06T06:00:53Z",
    "updatedAt": "2025-03-28T10:29:06Z",
    "reviews": [
      {
        "name": "Alice",
        "comment": "Loved it!",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/3/500/500",
          "https://picsum.photos/id/449/500/500"
        ]
      },
      {
        "name": "Charlie",
        "comment": "Worth the price.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/671/500/500",
          "https://picsum.photos/id/397/500/500"
        ]
      },
      {
        "name": "Diana",
        "comment": "Worth the price.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/14/500/500",
          "https://picsum.photos/id/21/500/500"
        ]
      },
      {
        "name": "Eve",
        "comment": "Worth the price.",
        "rating": 3,
        "imageUrl": [
          "https://picsum.photos/id/445/500/500",
          "https://picsum.photos/id/787/500/500"
        ]
      },
      {
        "name": "Frank",
        "comment": "Very comfortable.",
        "rating": 5,
        "imageUrl": [
          "https://picsum.photos/id/181/500/500",
          "https://picsum.photos/id/76/500/500"
        ]
      }
    ],
    "totalView": 218,
    "totalSale": 55
  }

];

