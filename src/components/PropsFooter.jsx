const socmeds = [
  {
    id: 1,
    mediaName: "facebook",
    mediaIcon: require("../images/facebook.png"),
  },
  {
    id: 2,
    mediaName: "twitter",
    mediaIcon: require("../images/twitter.png"),
  },
  {
    id: 3,
    mediaName: "instagram",
    mediaIcon: require("../images/instagram.png"),
  },
];

const hours = [
  {
    id: 1,
    day: "Mon - Thu:",
    time: "9:00AM - 7:30PM",
  },
  {
    id: 2,
    day: "Fri - Sat:",
    time: "10:00AM - 8:00PM",
  },
  {
    id: 3,
    day: "Sunday:",
    time: "11:00AM - 4:00PM",
  },
];

const contacts = [
  {
    id: 1,
    contactName: "office",
    contactIcon: require("../images/office.png"),
    contactDetail: "18th Avenue Makati, Metro Manila",
  },
  {
    id: 2,
    contactName: "email",
    contactIcon: require("../images/email.png"),
    contactDetail: "gregoriodominic12@yahoo.com",
  },
  {
    id: 3,
    contactName: "phone",
    contactIcon: require("../images/phone-call.png"),
    contactDetail: "(+63) 998-765-4321",
  },
];

export { socmeds, hours, contacts };
