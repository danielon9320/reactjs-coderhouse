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
    name: "Fleetwood Mac",
    price: 1200,
    category: "Dreams",
    img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/7/0/5/65011623262002.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 4,
    name: "Nirvana",
    price: 1200,
    category: "Nevermind",
    img: "https://www.photolari.com/wp-content/uploads/2019/12/foto-0-portada-nevermind-nirvana.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 5,
    name: "Foo Fighters",
    price: 1200,
    category: "The Colour And The Shape",
    img: "https://m.media-amazon.com/images/I/61ZFtaZZXyL._SL1500_.jpg",
    stock: 10,
    description: "Descripcion de Ipad",
  },
  {
    id: 6,
    name: "Red Hot Chili Peppers",
    price: 1200,
    category: "Blood Sugar Sex Magik",
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

export const getItemById = (id)=>{
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products.find(prod=>prod.id === parseInt(id)))
      },2000)
  })
}