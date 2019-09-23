const students = [
  {
    name: "jjjesús	Hernándezzzzz	Sánchez",
    dni: "73122912R",
    grades: [4, 5]
  },
  {
    name: "Ana María	García	Tejedor",
    dni: "23061356S",
    grades: [3, 6, 7]
  },
  {
    name: "Carmen	Esparza	García",
    dni: "53793534F",
    grades: [9, 8, 9, 9]
  },
  {
    name: "María José	Monreal	Duarte",
    dni: "67238489J",
    grades: []
  },
  {
    name: "José	Montes	Hernández",
    dni: "42106191E",
    grades: [8, 7, 9]
  },
  {
    name: "Concepción	Trujillo	Garay",
    dni: "83284849D",
    grades: [0, 0]
  },
  {
    name: "Álvaro	Alcalde	Puertas",
    dni: "65547928K",
    grades: [0, 1]
  },
  {
    name: "María Carmen	Tejedor	Pardo",
    dni: "52659119K",
    grades: [4, 4, 4]
  },
  {
    name: "Ángela	Hermoso	Rey",
    dni: "91230548J",
    grades: [10]
  },
  {
    name: "Óscar	Tinoco	Iglesias",
    dni: "10807927C",
    grades: [3, 9, 0]
  },
  {
    name: "Luis	Otero	Bermúdez",
    dni: "01951650P",
    grades: [8, 8, 8, 8, 8, 8, 8, 8]
  },
  {
    name: "María Ángeles	Jiménez	Ribes",
    dni: "89891389Y",
    grades: [7, 7, 8, 6]
  },
  {
    name: "David	Cubero	Gómez",
    dni: "01209786D",
    grades: []
  },
  {
    name: "Eduardo	Coll	Rodríguez",
    dni: "03948231M",
    grades: [6, 5]
  },
  {
    name: "Francisco	Sanz	Castillo",
    dni: "91422209S",
    grades: [4, 6, 6, 7]
  },
  {
    name: "Isabel	Perea	González",
    dni: "20419244M",
    grades: [6, 6]
  },
  {
    name: "Óscar	Moreno	Luque",
    dni: "53554652A",
    grades: [7, 6, 9]
  },
  {
    name: "Gabriel	Rodríguez	Laguna",
    dni: "27267350E",
    grades: [2, 2, 1]
  },
  {
    name: "Alberto	Martin	Molina",
    dni: "85188084V",
    grades: [3, 6, 5]
  },
  {
    name: "Miguel Ángel	Aguilar	Valladares",
    dni: "34160698V",
    grades: [5]
  },
  {
    name: "Lucia	Sáez	Peñaranda",
    dni: "15252886E",
    grades: [5, 5, 5]
  },
  {
    name: "María Carmen	Cañada	Lafuente",
    dni: "80905069Q",
    grades: [4.5, 4.32]
  },
  {
    name: "Pere	Lozano	Sastre",
    dni: "75208565Z",
    grades: [5, 5.5555555]
  },
  {
    name: "Pedro	Martínez	Lago",
    dni: "48604820R",
    grades: [4, 7.8854, 5.67]
  },
  {
    name: "Alba	Pérez	Giménez",
    dni: "82796268V",
    grades: [3, 6.6]
  },
  {
    name: "Javier	Sanchís	Leal",
    dni: "01134980E",
    grades: [3, 3, 4.5]
  },
  {
    name: "Pablo	Moreno	Castillo",
    dni: "54616357M",
    grades: [4]
  },
  {
    name: "Juan	Herrero	Fernández",
    dni: "12314790S",
    grades: [3, 3, 4]
  },
  {
    name: "Daniel	López	Valentín",
    dni: "07219500F",
    grades: [5.0001]
  },
  {
    name: "Miguel Ángel	Barrientos	Martin",
    dni: "06791095T",
    grades: [3]
  },
  {
    name: "Josefa	Rodríguez	Pan",
    dni: "52735482R",
    grades: [4, 6, 5.5]
  },
  {
    name: "Julia	Pérez	Castrillo",
    dni: "97827515M",
    grades: [3.3, 5.6]
  },
  {
    name: "Francisca	Cifuentes	Sánchez",
    dni: "88000068K",
    grades: []
  },
  {
    name: "Ángela	Vallejo	Carracedo",
    dni: "82195100T",
    grades: []
  },
  {
    name: "María	Serra	Fernández",
    dni: "61412532W",
    grades: [3, 3, 4.44445]
  },
  {
    name: "Andrés	Pizarro	Rodríguez",
    dni: "38267428M",
    grades: [1, 1.0]
  },
  {
    name: "María Carmen	Ruiz	Bonet",
    dni: "06946847L",
    grades: [2.4, 4]
  },
  {
    name: "José	Landa	González",
    dni: "63755077C",
    grades: [2, 2, 9, 0]
  },
  {
    name: "Francisco	Mas	Martínez",
    dni: "52644490C",
    grades: [2, 4]
  },
  {
    name: "Antonio	Jiménez	Fernández",
    dni: "28038412D",
    grades: [4.5, 6]
  },
  {
    name: "David	Méndez	Escobar",
    dni: "75965959H",
    grades: [5]
  },
  {
    name: "Pedro	González	Mancera",
    dni: "05694484Y",
    grades: [4, 4.5, 9, 1]
  },
  {
    name: "Rafael	Montes	Rodríguez",
    dni: "18734816M",
    grades: [0.5]
  },
  {
    name: "Begoña	Singh	López",
    dni: "39402782X",
    grades: [3, 0, 0.45]
  },
  {
    name: "Isabel	García	Álvarez",
    dni: "30403468K",
    grades: [1.23, 4]
  },
  {
    name: "Antonio	Rodríguez	Rico",
    dni: "39227269X",
    grades: [2, 3, 4, 5]
  },
  {
    name: "Carmen	Sánchez	Pardo",
    dni: "09775541N",
    grades: [2, 3, 4]
  },
  {
    name: "María José	Roig	Borrego",
    dni: "08886182V",
    grades: [3.56]
  },
  {
    name: "Ana María	Tello	García",
    dni: "01438793M",
    grades: [2, 4.56]
  },
  {
    name: "Antonia	Hernández	Gómez",
    dni: "59382731C",
    grades: [1, 2, 1, 0.9]
  },
  {
    name: "Manuel	Gutiérrez	Galarza",
    dni: "47590909E",
    grades: [2.34, 3, 9, 9, 9]
  }
];

module.exports = students;
