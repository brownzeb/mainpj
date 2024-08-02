import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
import user1 from "./assets/user1.jpeg";
import user2 from "./assets/user2.jpeg";
import user3 from "./assets/user3.jpeg";
import user4 from "./assets/user4.jpeg";
import user5 from "./assets/user5.jpeg";

// SITE NAME
export const domain = "new exchange";

// INVESTMENT PLANS

export const investmentPlans = [
  {
    name: "Standard plan",
    CB: "Yes",
    minAmount: "$500",
    maxAmount: "$4,900",
    ROI: "6% daily",
    RC: "2%",
    id: 1,
  },
  {
    name: "Mega plan",
    CB: "Yes",
    minAmount: "$5000",
    maxAmount: "$19,000",
    ROI: "8% daily",
    RC: "4%",
    id: 2,
  },
  {
    name: "VIP plan",
    CB: "Yes",
    minAmount: "$20,000",
    maxAmount: "$79,000",
    ROI: "7.2% daily",
    RC: "5%",
    id: 3,
  },
  {
    name: "Custom VIP plan",
    CB: "Yes",
    minAmount: "$80,000",
    maxAmount: "Unlimited",
    ROI: "8% daily",
    RC: "6.2%",
    id: 4,
  },
];

// TESTIMONIAL DATA

export const userTestimonial = [
  { name: "mike", imgUrl: user1, msg: "man is a rational being ", id: 1 },
  { name: "mike", imgUrl: user2, msg: "man is a rational being ", id: 2 },
  { name: "mike", imgUrl: user3, msg: "man is a rational being ", id: 3 },
  { name: "mike", imgUrl: user4, msg: "man is a rational being ", id: 4 },
  { name: "mike", imgUrl: user5, msg: "man is a rational being ", id: 5 },
];

export const numberData = [
  { name: "$2.7 billion", msg: "Trading volume from Jan - Dec 2023", id: 1 },
  { name: "488,233", msg: "Clients withdrawal from Jan - Dec 2023", id: 2 },
  { name: "$2.7 billion", msg: "Active clients from Jan - Dec 2023", id: 3 },
  { name: "$95.7 million", msg: "Partner reward in Q3 2023", id: 4 },
];

// HEADER DATA
export const headerData = [
  { name: "About us", url: "", id: 1 },
  { name: "Specificities", url: "", id: 2 },
  { name: "Milestones", url: "", id: 3 },
  { name: "Updates", url: "", id: 4 },
  { name: "Contact us", url: "", id: 5 },
];

// NORMAL PAGE FOOTER
// export const footerData = [
//   { name: "Sign in", url: "/login", id: 3 },
//   { name: "Sign up", url: "/register", id: 4 },
//   { name: "About us", url: "/about", id: 1 },
//   { name: "Developer", url: "/developer", id: 2 },
// ];

// DASHBOARD FRAGMENT UI
export const dashboardFooterData = [
  {
    name: "Account",
    url: "/dashboard",
    comp: <IoHomeSharp className="df-icon-stye" />,
    id: 1,
  },
  {
    name: "Market",
    url: "/dashboard/market",
    comp: <MdLibraryMusic className="df-icon-stye" />,
    id: 2,
  },

  {
    name: "Profile",
    url: "/dashboard/profile",
    comp: <IoSettings className="df-icon-stye" />,
    id: 4,
  },
];

export const secretQuestions = [
  { name: "In what city were you born?", id: 1 },
  { name: "What is the name of your favorite pet?", id: 2 },
  { name: "What high school did you attend?", id: 3 },
  { name: "What was your favorite food as a child?", id: 4 },
  { name: "What color do you like the most?", id: 5 },
  { name: "What is your favorite artist name?", id: 6 },
];

// PAGE FOOTER DATA
export const footerData = [
  {
    head: "Company",
    children: [
      { name: "About", url: "/about", id: 1 },

      { name: "Legal & Privacy", url: "/privacy", id: 5 },
      { name: "Cookie policy", url: "/cookiePolicy", id: 6 },
    ],
    id: 1,
  },

  {
    head: "Support",
    children: [
      { name: "Help center", url: "help", id: 1 },
      { name: "Contact us", url: "/contact", id: 2 },
      { name: "Supportd crypto", url: "/supportedCrypto", id: 3 },
    ],
    id: 2,
  },

  {
    head: "Individual",
    children: [
      { name: "Buy & sell", url: "/about", id: 1 },
      { name: "Earn free crypto", url: "/careers", id: 2 },
      { name: "Wallet", url: "/blog", id: 3 },
    ],
    id: 3,
  },

  {
    head: "Business",
    children: [
      { name: "Institutional", url: "/about", id: 1 },
      { name: "Prime", url: "/careers", id: 2 },
      { name: "Asset Hub", url: "/blog", id: 3 },
      { name: "commerce", url: "/press", id: 4 },
    ],
    id: 4,
  },
  {
    head: "Learn",
    children: [
      { name: "Bitcoin Halving", url: "/btc-halving", id: 1 },
      { name: "What is cypto", url: "/explore", id: 4 },
      { name: "What is bitcoin", url: "/explore", id: 5 },
      { name: "What is blockchain", url: "/explore", id: 6 },
    ],
    id: 5,
  },
  {
    head: "Update",
    children: [
      { name: "Recent news", url: "/btc-halving", id: 1 },
      { name: "Previous news", url: "/careers", id: 2 },
    ],
    id: 6,
  },
];
