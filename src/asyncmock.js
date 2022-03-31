const products = [
  {
    id: 1,
    name: "The Beatles",
    price: 1000,
    category: "Revolver",
    img: "https://m.media-amazon.com/images/I/A1ZeriZs9BL._SL1500_.jpg",
    stock: 25,
    description: "Descripcion de Album revolver",
  },
  {
    id: 2,
    name: "Pink Floyd",
    price: 800,
    category: "The Wall",
    img: "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/12/pink-floyd-the-wall-.jpg",
    stock: 16,
    description: "Descripcion de Album The Wall",
  },
  {
    id: 3,
    name: "Pescado Rabioso",
    price: 1200,
    category: "Artaud",
    img: "https://cdn-d15c.kxcdn.com/fotos/discos/000/001/074/original/foto.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 4,
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://cdn-d15c.kxcdn.com/fotos/discos/000/001/074/original/foto.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 5,
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://cdn-d15c.kxcdn.com/fotos/discos/000/001/074/original/foto.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 6,
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://indierocks.b-cdn.net/wp-content/uploads/2021/09/Blood-Sugar-Sex-Magik_RHCP.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
