const representations = [
  {
    id: 1,
    carName: "LANCER",
    carIntroduction: "The Mitsubishi Lancer's innovative engineering also includes fuel-efficient options, helping you reduce your carbon footprint without compromising on power or performance.",
    src: [
      require("../images/original-car-models/lancer.jpg"),
      require("../images/original-car-models/lancer2.jpg"),
      require("../images/original-car-models/lancer3.jpg"),
    ],
    price: "₱1,400",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Mitsubishi",
        seat: "4 / 5 Seats",
        fuel: "Diesel",
        transmission: "Automatic",
        reviews: "4.5"
      },
    },
  },
  {
    id: 2,
    carName: "VIOS",
    carIntroduction: "Under the hood, our Toyota Vios packs a powerful punch. Its advanced engineering ensures efficient fuel consumption, while the responsive handling and smooth ride will make every journey",
    src: [
      require("../images/original-car-models/vios.jpg"),
      require("../images/original-car-models/vios2.jpg"),
      require("../images/original-car-models/vios3.jpg"),
    ],
    price: "₱1,400",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "4 / 5 Seats",
        fuel: "Diesel",
        transmission: "Manual",
        reviews: "4.5"
      },
    },
  },
  {
    id: 3,
    carName: "CIVIC",
    carIntroduction: "with its sleek lines, bold grille, and aerodynamic shape, the Honda Civic turns heads wherever it goes. The carefully crafted exterior not only looks amazing but also enhances the car's overall performance.",
    src: [
      require("../images/original-car-models/civic.jpg"),
      require("../images/original-car-models/civic2.jpg"),
      require("../images/original-car-models/civic3.jpg"),
    ],
    price: "₱1,600",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/star.png"),
      },
      detail: {
        carBrand: "Honda",
        seat: "4 / 5 Seats",
        fuel: "Diesel",
        transmission: "Automatic",
        reviews: "5.0"
      },
    },
  },
  {
    id: 4,
    carName: "A4",
    carIntroduction: "The Audi A4 is equipped with the latest technology to keep you connected, entertained, and safe. The Audi Virtual Cockpit, MMI® touch display, and advanced driver-assistance features make every drive more enjoyable and secure.",
    src: [
      require("../images/original-car-models/a4.jpg"),
      require("../images/original-car-models/a42.jpg"),
      require("../images/original-car-models/a43.jpg"),
    ],
    price: "₱2,000",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Audi",
        seat: "4 / 5 Seats",
        fuel: "Unleaded",
        transmission: "Automatic",
        reviews: "4.7"
      },
    },
  },
  {
    id: 5,
    carName: "CAMRY",
    carIntroduction: "Step inside the Toyota Camry, and you'll be greeted by a meticulously crafted interior that blends cutting-edge technology with premium materials. From the leather-appointed seats to the intuitive infotainment system, every aspect of the cabin exudes comfort and sophistication.",
    src: [
      require("../images/original-car-models/camry.jpg"),
      require("../images/original-car-models/camry2.jpg"),
      require("../images/original-car-models/camry3.jpg"),
    ],
    price: "₱2,000",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "4 / 5 Seats",
        fuel: "Unleaded",
        transmission: "Automatic",
        reviews: "4.8"
      },
    },
  },
  {
    id: 6,
    carName: "M5",
    carIntroduction: "BMW is synonymous with luxury and prestige, and renting an BMW-M5 elevates your status and makes a statement about your discerning taste and appreciation for automotive excellence.",
    src: [
      require("../images/original-car-models/m5.jpg"),
      require("../images/original-car-models/m52.jpg"),
      require("../images/original-car-models/m53.jpg"),
    ],
    price: "₱2,500",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/star.png"),
      },
      detail: {
        carBrand: "BMW",
        seat: "4 / 5 Seats",
        fuel: "Diesel",
        transmission: "Manual",
        reviews: "5.0"
      },
    },
  },
  {
    id: 7,
    carName: "FUSION",
    carIntroduction: "Whether you're a seasoned Ford enthusiast or new to the brand, the Ford Fusion offers an unforgettable driving experience that combines power, elegance, and cutting-edge technology.",
    src: [
      require("../images/original-car-models/fusion.jpg"),
      require("../images/original-car-models/fusion2.jpg"),
      require("../images/original-car-models/fusion3.jpg"),
    ],
    price: "₱2,700",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Ford",
        seat: "4 / 5 Seats",
        fuel: "Unleaded",
        transmission: "Manual",
        reviews: "4.7"
      },
    },
  },
  {
    id: 8,
    carName: "COROLLA",
    carIntroduction: "with its bold lines, distinctive Singleframe grille, and sleek LED headlights, the Audi A4 stands out on any road. The attention to detail in its design exudes a sense of elegance and class, making a lasting impression wherever you go.",
    src: [
      require("../images/original-car-models/corolla.jpg"),
      require("../images/original-car-models/corolla2.jpg"),
      require("../images/original-car-models/corolla3.jpg"),
    ],
    price: "₱1,400",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "4 / 5 Seats",
        fuel: "Unleaded",
        transmission: "Automatic",
        reviews: "4.6"
      },
    },
  },
  {
    id: 9,
    carName: "TUCSON",
    carIntroduction: "Tucson is designed to take you wherever your heart desires. Whether it's rugged off-road terrains, snowy mountain passes, or urban city streets, our Hyundai Tucson robust build and all-wheel-drive capabilities ensure you're always prepared for the adventure ahead.",
    src: [
      require("../images/original-car-models/tucson.jpg"),
      require("../images/original-car-models/tucson2.jpg"),
      require("../images/original-car-models/tucson3.jpg"),
    ],
    price: "₱3,000",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Hyundai",
        seat: "4 / 5 Seats",
        fuel: "Unleaded",
        transmission: "Automatic",
        reviews: "4.7"
      },
    },
  },
  {
    id: 10,
    carName: "FORTUNER",
    carIntroduction: "Fortuner excel in various weather conditions, providing stability and traction even during rain, snow, or slippery roads. With our Toyota Fortuner, you can confidently face any weather challenges that come your way.",
    src: [
      require("../images/original-car-models/fortuner.jpg"),
      require("../images/original-car-models/fortuner2.jpg"),
      require("../images/original-car-models/fortuner3.jpg"),
    ],
    price: "₱3,300",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "7 / 8 Seats",
        fuel: "Diesel",
        transmission: "Manual",
        reviews: "4.8"
      },
    },
  },
  {
    id: 11,
    carName: "INNOVA",
    carIntroduction: "Toyota Innova boast a commanding presence on the road, exuding an air of sophistication and confidence. Their striking designs and modern aesthetics turn heads wherever you go.",
    src: [
      require("../images/original-car-models/innova.jpg"),
      require("../images/original-car-models/innova2.jpg"),
      require("../images/original-car-models/innova3.jpg"),
    ],
    price: "₱3,600",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/half-star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "7 / 8 Seats",
        fuel: "Diesel",
        transmission: "Manual",
        reviews: "4.8"
      },
    },
  },
  {
    id: 12,
    carName: "XPANDER",
    carIntroduction: "Families of all sizes will appreciate the convenience of Mitsubishi Xpander. From child-friendly features like easy access to rear seats to available entertainment systems for long journeys, our Xpander cater to the needs of your entire family.",
    src: [
      require("../images/original-car-models/xpander.jpg"),
      require("../images/original-car-models/xpander2.jpg"),
      require("../images/original-car-models/xpander3.jpg"),
    ],
    price: "₱4,200",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/star.png"),
      },
      detail: {
        carBrand: "Mitsubishi",
        seat: "7 / 8 Seats",
        fuel: "Diesel",
        transmission: "Automatic",
        reviews: "5.0"
      },
    },
  },
  {
    id: 13,
    carName: "PRADO",
    carIntroduction: "Safety is paramount in our Toyota Prado, with many models equipped with advanced safety features like lane-keeping assist, blind-spot monitoring, adaptive cruise control, and collision avoidance systems to keep you and your loved ones protected on the road.",
    src: [
      require("../images/original-car-models/prado.jpg"),
      require("../images/original-car-models/prado2.jpg"),
      require("../images/original-car-models/prado3.jpg"),
    ],
    price: "₱4,200",
    details: {
      icons: {
        carIcon: require("../images/car-icon.png"),
        seatIcon: require("../images/car-seat.png"),
        fuelIcon: require("../images/fuel.png"),
        transmissionIcon: require("../images/transmission.png"),
        airconIcon: require("../images/aircon.png"),
        starIcon: require("../images/star.png"),
      },
      detail: {
        carBrand: "Toyota",
        seat: "7 / 8 Seats",
        fuel: "Diesel",
        transmission: "Automatic",
        reviews: "5.0"
      },
    },
  },
];


export default representations;
