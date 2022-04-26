const products = [
    {
      id: 1,
      name: "Samsung Galaxy a20",
      stock: 100,
      cost: 40.000,
      description: "El Samsung Galaxy A20 cuenta con un diseño bastante estándar, similar al que nos tiene acostumbrados Samsung con su gama media Galaxy A. Encontramos este modelo en los colores negro, coral, blanco y azul cielo. El lector de huellas se encuentra todavía en la parte trasera, una carcasa de cristal brillante. El Samsung Galaxy A20  tiene un tamaño de pantalla de 6,4 , con una resolución de 1.560 x 720. La pantalla es de tipo Super AMOLED. Además es tipo Infinity-U donde la marca ha intentado ocupar la mayor parte del frontal, para lo cual ha elegido un notch de tipo lágrima, aunque la barilla de la parte inferior es algo gruesa.",
      capacity: 1500,
      image: [
        "https://images.samsung.com/is/image/samsung/es-galaxy-a20-sm-a202-sm-a202fzkdphe-frontblack-thumb-159424313",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Samsung Galaxy A21",
      stock: 100,
      cost: 50.000,
      description :"Samsung Galaxy A21 cuenta con sistemas GSM , HSPA , LTE. La fecha de presentación es Abril 8 2020. Tiene el sistema operativo Android 10.0; One UI 2.0. El dispositivo Samsung Galaxy A21 tiene 32GB 3GB RAM de memoria incorporada. El tamaño de la pantalla principal es de 6.5 pulgadas, 102.0 cm2 con la resolución 720 x 1600 píxeles, 20:9 ratio . El número de píxeles por una pulgada (ppi) es de aproximadamente 270 ppi density). Preliminary specifications",
      capacity: 1500,
      image: [
        "https://images.samsung.com/is/image/samsung/es-galaxy-a21s-sm-a217fzwoeub-thumb-330x330-262755627?$480_480_PNG$"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: [
        {
          "comment": ".",
          "rating": "4"
        }
      ]
    },
    {
      id: 3,
      name: "Samsung Galaxy A30",
      stock: 92,
      cost: 60.000,
      description: "El Galaxy A30 es un smartphone para disfrutar por completo del buen entretenimiento, no exageramos al decirlo, ya que, Samsung lo ha lanzado como un celular que “está rediseñando el entretenimiento para darte más de lo que te encanta. Otra prueba de esto es su cámara dual trasera que ofrece un sensor de 16 MP y un segundo de 5 MP para captar imágenes con profundidad y alta calidad en el color, entre sus novedades está el efecto bokeh y la inteligencia artificial que usa para tomar fotos con el mejor ángulo y luz sin mayor esfuerzo. La salidas en familia y la toma de fotografías ya no va a ser un problema para tu papá con esta cámara que hace todo por él. En cuanto al diseño, Galaxy optó por un acabado brillante, un sensor de huellas dactilares ubicado en la parte trasera casi imperceptible, desbloqueo facial y una batería de larga duración y carga rápida. Detalles que tu papá apreciará pues es un smartphone liviano y resistente, el desbloqueo dactilar y facial será muy útil si tiene nietos traviesos con ansias de descargar juegos, y la duración de la batería será un plus pues ellos generalmente no les gusta estar cargando de forma continua su smartphone.",
      capacity: 750,
      image: [
        "hhttps://http2.mlstatic.com/D_NQ_NP_851730-MLA32554346355_102019-O.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 3,
      brandId: 10,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "samsung"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Motorola g7 Plus",
      stock: 100,
      cost: 40.000,
      description: "Motorola Moto G7 Plus es un smartphone de 2019. Su tamaño es 157 x 75.3 x 8.3 mm y su peso es 176 pulgadas. Tiene una pantalla LTPS IPS LCD de 6.2. La resolución es de 1080 x 2270 y una densidad de los píxeles de 405 ppi . La cámara frontera singular de 12 MP. La cámara trasera doble de 16 MP. Su procesador es Octa-core 1.8 GHz Kryo 260 y memoria 64 GB, 4 GB RAM. Su batería es de 3000 mAh. Más detalles usted va a encontrar más abajo.",
      capacity: 1500,
      image: [
        "https://bitwares.net/wp-content/uploads/2019/04/71ciwcomlxl.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 5,
      name: "Motorola g8 Plus",
      stock: 100,
      cost: 60.000,
      description: "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. Con una pantalla Full HD+ de 6.3 pulgadas, el Moto G8 Plus está potenciado por un procesador Snapdragon 665, acompañado de 4GB de memoria RAM y 64GB de almacenamiento interno expandible. La cámara trasera del Moto G8 Plus es triple, de 48 MP + 16 MP + 5 MP, mientras que su cámara frontal para selfies es de 25 MP. El Moto G8 Plus completa sus características con una batería de 4000 mAh con carga rápida, lector de huellas y corre Android 9.0 Pie.",
      capacity: 1500,
      image: [
        "http://imagenes.cordobavende.com/medianas/390426d63f96f3cd5eb4393f02af1bbe.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 6,
      name: "Motorola g9 Plus",
      stock: 100,
      cost: 70.000,
      description: "El Motorola Moto G9 Plus es una nueva variante de la novena generación de la serie Moto G. En este caso, el Moto G9 Plus trae consigo una pantalla Full HD+ de 6.81 pulgadas y está potenciado por un procesador Snapdragon 730G acompañado de 4GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible vía microSD. La cámara principal del Moto G9 Plus es cuádruple, con lentes de 64 MP, 8 MP, 2 MP y 2 MP, mientras que su cámara selfie es de 16 megapixels. Con la energía provista con una generosa batería de 5000 mAh de carga rápida, el Moto G9 Plus completa sus características con lector de huellas montado en un lado del teléfono, y corre Android 10.",
      capacity: 1500,
      image: [
        "hhttps://moviles.info/wp-content/uploads/2020/09/Motorola-Moto-G9-Plus.png",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
    {
      id: 7,
      name: "Iphone X",
      stock: 100,
      cost: 140.000,
      description: "El Apple iPhone X es una demostración de fuerza de Apple, mostrando lo que es capaz de hacer y para celebrar los 10 años del iPhone. El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. Por dentro, el iPhone X tiene el nuevo procesador A11 Bionic. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_712930-MLA49627596511_042022-V.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {
      id: 8,
      name: "Iphone 11",
      stock: 100,
      cost: 180.000,
      description: "El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.",
      capacity: 1500,
      image: [
        "http://www.vicionet.com/Vel/418-large_default/apple-iphone-11-128gb-.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 9,
      name: "Iphone 12",
      stock: 100,
      cost: 200.000,
      description: "El Apple iPhone 12 es parte de la serie 12 del iPhone de Apple, llegando en el 2020 con un diseño que recuerda al iPhone 4 y conectividad 5G. El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.",
      capacity: 1500,
      image: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fes%2Fshop%2Fbuy-iphone%2Fiphone-12&psig=AOvVaw1fN6Zrge8ifZytT-PIG6Wk&ust=1650071207105000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCyosLwlPcCFQAAAAAdAAAAABAD",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 10,
      name: "Xiaomi Redmi Note9",
      stock: 100,
      cost: 125.000,
      description: "El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento. La cámara trasera del Redmi Note 9 es cuádruple, de 48 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara frontal es de 13 MP. El Redmi Note 9 completa sus características con una batería de 5020 mAh de carga rápida, lector de huellas posterior, y MIUI 11 basado en Android 10.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_921099-MLA42643772302_072020-O.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    {  
      id: 11,
      name: "Xiaomi Redmi Note 10",
      stock: 100,
      cost: 130.000,
      description: "El Xiaomi Redmi Note 10 es el líder de la décima reencarnación de la serie Redmi Note. Con una pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10 está potenciado por un procesador Snapdragon 678 con 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior del Redmi Note 10 es cuádruple, en configuración 48MP+ 8MP + 2MP + 2MP, mientras que la cámara selfie es de 13 megapixels. Entre el resto de las características se destacan unos parlantes stereo, batería de 5000 mAh de carga rápida, resistencia al agua IP53 y corre MIUI 12 basado en Android 11.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_815921-MLA46490094279_062021-O.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    {  
      id: 12,
      name: "Xiaomi Redmi Note 10",
      stock: 100,
      cost: 145.000,
      description: "El Xiaomi Redmi Note 11 llega en su versión global con grandes diferencias respecto del lanzado en China. El Redmi Note 11 cuenta con una pantalla AMOLED de 6.43 pulgadas a resolución FHD+ y tasa de refresco de 90Hz. Potenciado por un procesador Snapdragon 680, el Redmi Note 11 cuenta con opciones de 4GB o 6GB de RAM y 64GB o 128GB de almacenamiento interno. La cámara posterior del Redmi Note 11 es cuádruple, con lente principal de 50MP, y su cámara selfie es de 13MP. La batería del Redmi Note 11 es de 5000 mAh y soporta carga rápida de 33W, completando sus características con parlantes stereo, lector de huellas lateral, y MIUI 13 basado en Android 11.",
      capacity: 1500,
      image: [
        "https://m.media-amazon.com/images/I/41RppugTCmL._SL500_.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    
  module.exports = {
    products,
  }