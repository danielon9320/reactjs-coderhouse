const products = [
  {
    id: 1,
    name: "The Beatles",
    title: "Revolver",
    price: 1000,
    category: "cassette",
    img: "https://m.media-amazon.com/images/I/A1ZeriZs9BL._SL1500_.jpg",
    stock: 25,
    description: "Es el séptimo álbum de estudio de la banda británica de rock The Beatles lanzado el 5 de agosto de 1966 por EMI. Fue el último álbum lanzado antes de que la banda decidiera abandonar los escenarios y las giras, a favor de la experimentación en los estudios de grabación y mejoramiento de su estilo. El álbum estuvo acompañado por el sencillo doble Eleanor Rigby/Yellow Submarine, ambas canciones convirtiéndose en número uno en Reino Unido, mientras que en los Estados Unidos ocuparon el primer y segundo lugar respectivamente. También se lanzó previamente por el sencillo de Paperback Writer/Rain. Revolver presentó varios nuevos desarrollos estilísticos que llegarían a ser más pronunciados en álbumes posteriores. Logró llegar al número uno en la lista de éxitos de varios países, entre ellos, el Reino Unido, Estados Unidos, Suecia y Australia, entre otros."
  },
  {
    id: 2,
    name: "Pink Floyd",
    title: "The Wall",
    price: 800,
    category: "cd",
    img: "https://i0.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/12/pink-floyd-the-wall-.jpg",
    stock: 16,
    description: "Es el undécimo álbum de estudio de la banda británica de rock progresivo Pink Floyd y el segundo doble, publicado en 1979. Se grabó entre abril y noviembre bajo la dirección del productor Bob Ezrin y de los miembros de Pink Floyd David Gilmour y Roger Waters. Fue lanzado el 30 de noviembre del mismo año en el Reino Unido y el 8 de diciembre en los Estados Unidos. Este disco doble es un álbum conceptual que nos retrata la vida de una estrella ficticia del rock llamada Pink, basado en las vivencias del mismo Waters, convirtiéndolo así en una especie de álter ego antihéroe. Descrito por Roger Waters, Pink se reprime debido a los traumas que la vida le va deparando: la muerte de su padre en la Segunda Guerra Mundial, la sobreprotección materna, la opresión de la educación británica, los fracasos sentimentales, la presión de ser una figura famosa en el mundo de la música o su controvertido uso de drogas sumado al asma, entre otros, son convertidos por él en «ladrillos de un muro metafórico» que lo aísla, construido con el fin de protegerse del mundo y de la vida, pero que le conduce a un mundo de fantasía autodestructiva.",
  },
  {
    id: 3,
    name: "Fleetwood Mac",
    title: "Rumours",
    price: 1200,
    category: "vinilo",
    img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/7/0/5/65011623262002.jpg",
    stock: 10,
    description: "Es el undécimo disco de la banda británica-estadounidense de rock Fleetwood Mac, ganador de un premio Grammy, y del que se han vendido más de 40 millones de copias en todo el mundo, siendo uno de los álbumes de mayores ventas de todos los tiempos. Fue el undécimo álbum de estudio del grupo, grabado en 1976 y producido por la misma banda junto a Ken Caillat y Richard Dashut. Se publicó en febrero de 1977 a través de Warner Bros. Records y figuró como su disco más vendido según la publicación estadounidense Billboard 200 durante 31 semanas distintas, y de la lista de álbumes del Reino Unido en enero de 1978. De él se extrajeron los sencillos «Go Your Own Way», «Don't Stop», «Dreams» y «You Make Loving Fun."
  },
  {
    id: 4,
    name: "Nirvana",
    title: "Nevermind",
    price: 1200,
    category: "vinilo",
    img: "https://www.photolari.com/wp-content/uploads/2019/12/foto-0-portada-nevermind-nirvana.jpg",
    stock: 10,
    description: "Es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado en septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records. El líder de la agrupación, Kurt Cobain, trató de hacer música fuera de los límites restrictivos de la escena grunge de Seattle, aprovechando la influencia de grupos como los Pixies y su uso de la dinámica de canciones ruidosas y calmadas, con grandes composiciones y sonidos. Gracias a este álbum el género grunge se hizo conocido a nivel mundial, recibiendo una gran aceptación y aclamación por críticos especializados de música, quienes también consideran el álbum como uno de los mejores de la historia."
  },
  {
    id: 5,
    name: "Foo Fighters",
    title: "The Colour And The Shape",
    price: 1200,
    category: "cassette",
    img: "https://m.media-amazon.com/images/I/61ZFtaZZXyL._SL1500_.jpg",
    stock: 10,
    description: "Es el segundo álbum de la banda Foo Fighters. Fue lanzado al mercado el 20 de mayo de 1997 por Capitol a través del sello Roswell. Este fue el debut de Foo Fighters tal cual como una banda, ya que Dave Grohl había grabado el primer álbum por sí mismo. Después de una tortuosa sesión de grabación en los estudios Bear Creek Studios de Woodinville, Grohl llevó al guitarrista Pat Smear y al bajista Nate Mendel a los estudios Grandmaster en Los Ángeles, tomando él mismo las labores de la batería. Después de esta sesión, el baterista William Goldsmith dejó oficialmente al grupo. Es uno de los mejores trabajos del grupo, con canciones populares como My Hero, Everlong (la canción más conocida del grupo) y Monkey Wrench, alcanzó el lugar n.º 3 en las listas del Reino Unido y en n.º 10 en los Estados Unidos. Hasta el mes de junio de 2005, The Colour and the Shape se mantiene como el disco más vendido de los Foo Fighters en Estados Unidos, con 2.4 millones de copias vendidas."
  },
  {
    id: 6,
    name: "Red Hot Chili Peppers",
    title: "Blood Sugar Sex Magik",
    price: 1200,
    category: "cd",
    img: "https://indierocks.b-cdn.net/wp-content/uploads/2021/09/Blood-Sugar-Sex-Magik_RHCP.jpg",
    stock: 10,
    description: "Es el quinto álbum de estudio de la banda estadounidense de funk rock Red Hot Chili Peppers, lanzado el 24 de septiembre de 1991. Producido por Rick Rubin, fue la primera grabación de la banda lanzada por Warner Bros. Records. Los estilos musicales de Blood Sugar Sex Magik difieren notablemente de las técnicas empleadas en el álbum anterior de los Chili Peppers, Mother's Milk, y contiene un pequeño uso de riffs de guitarra de heavy metal. El disco incorporó insinuaciones sexuales, referencias a las drogas y a la muerte, y temas como la lujuria y la exuberancia. Blood Sugar Sex Magik vendió más de siete millones de copias solo en los Estados Unidos e introdujo a los Chili Peppers a la popularidad mainstream y la aclamación crítica. Blood Sugar Sex Magik produjo varios sencillos de la banda, entre los cuales se incluyen «Give It Away», «Under the Bridge», «Suck My Kiss», «Breaking the Girl» e «If You Have to Ask». La grabación también marcó la salida del guitarrista John Frusciante en 1992, durante el tour de la banda, hasta su regreso en 1998. Blood Sugar Sex Magik fue elogiado como el fundador del rock alternativo en los años 1990, y Steve Huey de Allmusic comentó que la grabación fue «...probablemente el mejor álbum que los Chili Peppers podrán hacer»."
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