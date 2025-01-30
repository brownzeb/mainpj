import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { LuCandlestickChart } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaUpload } from "react-icons/fa";
// import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";

import { LuActivity } from "react-icons/lu";
import aibot from "./assets/aibot.jpg";
import increase from "./assets/increase.jpg";
import { FaLocationDot } from "react-icons/fa6";
import expert from "./assets/expert.jpg";
import preventhacker from "./assets/preventhacker.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import user1 from "./assets/user1.jpeg";
import user2 from "./assets/user2.jpeg";
import user3 from "./assets/user3.jpeg";
import user4 from "./assets/user4.jpeg";
import user5 from "./assets/user5.jpeg";
import { SiLetsencrypt } from "react-icons/si";
import { FaBuildingShield } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { IoPricetag } from "react-icons/io5";

import { RiSettingsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { BsFillWalletFill } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

// SITE NAME
export const domain = "bullishpalace";

// CONTACT US

export const contactusData = [
  {
    name: "Phone",
    icon: <BsFillTelephoneFill />,
    value: "+123-450-7698",
    id: 1,
  },
  { name: "Email", icon: <MdEmail />, value: `support@${domain}.com`, id: 2 },
  {
    name: "Address",
    icon: <FaLocationDot />,
    value: "14 Scotsburn Rd, Tanerdy city, United Kingdom  ",
    id: 3,
  },
];

// ABOUT US DATA

export const team = [
  {
    name: "Robert Cole",
    role: `${domain} Founder`,
    imgUrl: user1,
    msg: `Robert Cole is the founder of ${domain}, the nation’s leading provider of 100% independent grades on stocks, mutual funds and financial institutions, as well as one of the world’s most awarded trading and rating agency that grades cryptocurrencies. He founded his company in 1976, and thanks largely to his strict independence, has established a 60-year record of accuracy.`,
    id: 1,
  },
  {
    name: "Sean gray",
    role: "Megatrends & Supercycles Analyst",
    imgUrl: user2,
    msg: `Supercycles aren't daily occurrences. They happen in stages and can last for years. Sean gray identifies them early and mines for the most financially sound stocks within them. And he taps into the powerful ${domain} to help him do it.`,
    id: 2,
  },
  {
    name: "John Graebe",
    role: "Startup Investing Specialist",
    imgUrl: user3,
    msg: `John Graebe knows a great private-equity deal when he sees one. His specialty is finding red-hot, breakthrough companies and investing in them before venture capitalists get in. And now, in Deal Hunters Alliance, he shows our Members how they can do the same.`,
    id: 3,
  },
];

// UPDATE

export const updateData = [
  {
    head: "AI trading bot",
    msg: `An AI trading bot, such as the ${domain}, is a sophisticated tool designed to autonomously execute trades based on predefined algorithms and market conditions. These bots utilize advanced machine learning and artificial intelligence algorithms to analyze vast amounts of data quickly and make informed trading decisions in real-time. By leveraging the power of AI, ${domain} optimizes trading strategies, identifies profitable opportunities, and minimizes risks, making it a valuable asset for professional traders looking to streamline their trading activities and remain competitive in the fast-paced world of cryptocurrency trading.`,
    imgUrl: aibot,
    id: 1,
  },
  {
    head: "Expert Traders",
    msg: `Expert traders, especially those in the world of cryptocurrencies like ${domain}, possess a wealth of knowledge, experience, and skill that sets them apart in the financial markets. These individuals have honed their craft through years of studying market trends, mastering risk management strategies, and staying informed about the latest developments in the industry. With a meticulous approach to analyzing data and making informed decisions, expert traders like those at ${domain} demonstrate a high level of professionalism and expertise that allows them to navigate the complexities of the cryptocurrency market with confidence and precision.`,
    imgUrl: expert,

    id: 2,
  },
  {
    head: "Boost your profit margin by 25%",
    msg: `To boost profit margin by 25% within the cryptobull market, strategic planning and keen financial acumen are essential. By analyzing market trends, diversifying investment portfolios, and leveraging innovative technologies, companies can capitalize on the dynamic nature of the cryptobull landscape to maximize returns efficiently. Embracing a proactive approach to risk management and fostering strong partnerships within the industry will further solidify a competitive edge, driving sustained growth and profitability in the ever-evolving ${domain} sector.`,
    imgUrl: increase,

    id: 3,
  },
  {
    head: "Maximum security  ",
    msg: `When it comes to achieving maximum security for ${domain} investments, it is crucial to implement comprehensive measures to safeguard assets. Utilizing advanced encryption techniques, multi-factor authentication, and employing the services of top cybersecurity professionals are essential steps in fortifying the protection of valuable assets from potential threats. By prioritizing strict adherence to industry best practices and remaining vigilant against emerging security risks, investors can establish a robust defense mechanism to ensure the integrity and confidentiality of their ${domain} holdings.`,
    imgUrl: preventhacker,

    id: 4,
  },
];

// MILESTONE

export const milestone = [
  {
    head: "Aug 15th 2016",
    msg: `We proudly achieved the esteemed recognition of being one of the  best trading platform on August 15th, 2016. This accomplishment is a testament to the dedication and expertise of our team in creating a cutting-edge platform that meets the needs of our users. We are committed to providing a top-notch trading experience, and this prestigious award serves as a validation of our continuous efforts to excel in the financial industry.`,
    id: 1,
  },
  {
    head: "Feb 5th 2017",
    msg: `On February 5th, 2017, a security breach was successfully prevented, thanks to the prompt and vigilant actions of the cybersecurity team at ${domain}. Their expertise and dedication were crucial in identifying and neutralizing the threat before any sensitive data was compromised. This incident highlights the importance of having a skilled and proactive security team in place to safeguard against potential breaches and protect the integrity of sensitive information. Working with professionals like ${domain} can be a key component in maintaining a secure and resilient cybersecurity infrastructure.`,
    id: 2,
  },
  {
    head: "June 12th 2019",
    msg: `On June 12th, 2019, ${domain} stood out as one of the companies that traded the most digital assets in the market. With their strategic approach and expertise in the digital asset trading realm, ${domain} displayed a noteworthy commitment to navigating the complexities of the market. Their proficient trading activities on that day undoubtedly showcased their dedication to maximizing opportunities in the digital asset landscape with prominent professionalism.`,
    id: 3,
  },
  {
    head: "Oct 7th 2023 ",
    msg: `On October 7th, 2023, ${domain} was honored to be acknowledged as a company renowned for its exceptional accuracy in trade prediction. This recognition reaffirms our commitment to excellence and expertise in the financial market. We take immense pride in our dedication to providing reliable and precise trade predictions to our clients, and this recognition further motivates us to continue delivering high-quality services. We are grateful for this acknowledgment and look forward to further solidifying our reputation as a leading authority in trade prediction.`,
    id: 4,
  },
];

export const services = [
  {
    head: "Trading of digital assets ",
    msg: `We offer a robust environment for individuals to engage in buying and selling various digital assets with confidence and efficiency. By leveraging tools provided by ${domain}, investors can stay informed on market trends, make strategic decisions, and optimize their trading strategies. Embracing a professional mindset when trading digital assets can lead to more informed choices and potentially higher returns on investments.`,
    id: 1,
  },
  {
    head: "Trading signals",
    msg: `Trading signals are key indicators used by traders to make informed decisions in the volatile world of cryptocurrency trading. Utilizing tools like ${domain} can provide traders with valuable insights and analysis to help them navigate the complex and ever-changing market conditions. By following reliable trading signals, traders can streamline their decision-making process and increase their chances of success in the competitive digital asset market. It is essential to understand the nuances of the signals provided by platforms like ${domain} to maximize their utility and harness the power of data-driven strategies in the dynamic realm of crypto trading.`,
    id: 2,
  },
  {
    head: "Development of crypto trading bots",
    msg: `The development of a trading bot has become increasingly essential in today's dynamic financial markets, particularly in the realm of cryptocurrency trading like ${domain}. These automated systems use advanced algorithms to analyze market trends, execute trades, and manage risk effectively. By leveraging cutting-edge technology and real-time data, trading bots have the capacity to boost trading efficiency, minimize human error, and capitalize on market opportunities swiftly. Professional traders often rely on these sophisticated bots to enhance their trading strategies and stay competitive in the fast-paced world of digital assets, showcasing the evolution and importance of automated trading solutions like ${domain} in today's financial landscape.`,
    id: 3,
  },
  {
    head: "portfolio management",
    msg: `${domain} offers exceptional trading experts account management services with a professional touch. Our team of skilled professionals is dedicated to helping clients navigate the complexities of the financial markets with precision and expertise. With ${domain}, you can trust that your investments are in capable hands, ensuring a strategic approach tailored to your unique financial goals. Our commitment to professionalism and proficiency sets us apart in the world of cryptocurrency trading, providing you with the peace of mind and confidence needed to succeed in the rapidly evolving market.`,
    id: 4,
  },
];
// INVESTMENT PLANS

export const investmentPlans = [
  {
    name: "Standard Plan",
    CB: "Yes",
    minAmount: "$100",
    maxAmount: "$499",
    ROI: "5% daily",
    RC: "2%",
    id: 1,
  },
  {
    name: "Mega Plan",
    CB: "Yes",
    minAmount: "$500",
    maxAmount: "$2,499",
    ROI: "8% daily",
    RC: "4%",
    id: 2,
  },
  {
    name: "Deluxe Plan",
    CB: "Yes",
    minAmount: "$2,500",
    maxAmount: "$9,999",
    ROI: "10% daily",
    RC: "6%",
    id: 3,
  },
  {
    name: "VIP Plan",
    CB: "Yes",
    minAmount: "$10,000",
    maxAmount: "Unlimited",
    ROI: "13% daily",
    RC: "8%",
    id: 4,
  },
];

// TESTIMONIAL DATA

export const userTestimonial = [
  {
    name: "Amelia",
    imgUrl: user1,
    msg: `Hey there! Guess what? I recently made a whopping 29% profit by investing in ${domain}! ${domain} is an exciting cryptocurrency that has definitely paid off for me.  If you're considering getting into the world of cryptocurrency, ${domain} might just be the way to go! `,
    id: 1,
  },
  {
    name: "Evelyn",
    imgUrl: user2,
    msg: `Seeing my investment grow by 45% has been such a thrill! It's amazing how a bit of smart investing can really make a difference. `,
    id: 2,
  },
  {
    name: "Dave",
    imgUrl: user3,
    msg: ` I just had an exciting experience with ${domain} - I made an amazing 56% profit from my investment. ${domain} indeed worth my five stars. `,
    id: 3,
  },
  {
    name: "Lisa",
    imgUrl: user4,
    msg: `I feel so happy for the profit i made here in ${domain}. Indeed ${domain} is the right go to for me and i would recommend them to anyone that wants to earn from the digital world .`,
    id: 4,
  },
  {
    name: "Ava",
    imgUrl: user5,
    msg: `Big thanks to ${domain}, i never regreted having been here. `,
    id: 5,
  },
];

export const numberData = [
  { name: "$2.7 billion", msg: "Trading volume from Jan - Dec 2023", id: 1 },
  { name: "488,233", msg: "Clients withdrawal from Jan - Dec 2023", id: 2 },
  { name: "$2.7 billion", msg: "Active clients from Jan - Dec 2023", id: 3 },
  { name: "$95.7 million", msg: "Partner reward in Q3 2023", id: 4 },
];

// HEADER DATA
export const headerData = [
  { name: "About us", url: "/about", id: 1 },
  { name: "Milestones", url: "/milestone", id: 3 },
  { name: "Updates", url: "/update", id: 4 },
  { name: "Contact us", url: "/contact", id: 5 },
];

export const tradingPriviledges = [
  {
    name: "STOCKS ",
    msg: "Invest in thousands of companies and fractional shares with as little as $5 using our trading tools and analytics to create your own financial portfolio. ",
    icon: <RiSettingsFill className="text-[2rem]  text-red-500" />,
    id: 3,
  },
  {
    name: "OPTIONS",
    msg: "Options provide a strategic alternative to just investing in equity.",
    icon: <FaDatabase className="text-[2rem]  text-red-500" />,
    id: 4,
  },
  {
    name: "ETF'S",
    msg: "Diversify your holdings by investing into a group of stocks with the same convenience as trading a single stock.",
    icon: <BsFillWalletFill className="text-[2rem]  text-red-500" />,
    id: 1,
  },
  {
    name: "CRYPTO",
    msg: "Diversify your holdings by investing in digital currencies including Bitcoin, Ethereum, Bitcoin Cash and Litecoin.",
    icon: <FaBtc className="text-[2rem]  text-red-500" />,
    id: 2,
  },
];

export const whyChooseUs = [
  {
    name: "Transparent Pricing",
    msg: "There are no hidden charges or fees that are not made known to you by your account manager. We have streamlined all our packages to suit perfectly well into all your needs, making considerations to accommodate you at every point.",

    icon: <IoPricetag className="text-[3rem] mx-auto text-gray-500" />,
    id: 1,
  },

  {
    name: "Safe & Secure",
    msg: "We have upgraded our system to a PCI/DSS complaint level, making every account to have a two factor authentication and a brute force attack protection. Be rest assured that your data, funds are safe in the hands of certified experts.",

    icon: <GrSecure className="text-[3rem] mx-auto text-gray-500" />,
    id: 2,
  },

  {
    name: "Incredible Infrastructure",
    msg: "Unlike other platforms, we are fully built on a No.1 infrastructure to ensure the best result delivery. Cryptonite markets is a certified PCI/DSS company, meaning that we have attained the level of security used by such companies as MasterCard, Visa, AMEX etc",
    icon: <FaBuildingShield className="text-[3rem] mx-auto text-gray-500" />,
    id: 3,
  },

  {
    name: "Fully Encrypted",
    msg: "All data on Cryptonite markets are fully encrypted on a one way hashing algorithm. This means that only you and our server knows what inputs you made and that which you did not make. This helps to ensure that all your funds remains yours and safe",
    icon: <SiLetsencrypt className="text-[3rem] mx-auto text-gray-500" />,
    id: 4,
  },
];

// DASHBOARD FRAGMENT UI
export const dashboardFooterData = [
  {
    name: "Home",
    url: "/dashboard",
    comp: <IoHomeSharp className="df-icon-stye" />,
    id: 1,
  },
  {
    name: "Activity",
    url: "/dashboard/activity",
    comp: <LuActivity className="df-icon-stye" />,
    id: 2,
  },

  {
    name: "Profile",
    url: "/dashboard/profile",
    comp: <MdManageAccounts className="df-icon-stye" />,
    id: 4,
  },
];

// DASHBOARD FRAGMENT UI
export const adminDashboardFooterData = [
  {
    name: "Home",
    url: "/admin-dashboard",
    comp: <FaWallet className="df-icon-stye" />,
    id: 1,
  },
  {
    name: "Users",
    url: "/admin-dashboard/users",
    comp: <FaUsers className="df-icon-stye" />,
    id: 2,
  },

  {
    name: "Profile",
    url: "/admin-dashboard/profile",
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

export const walletTypes = [
  { name: "btc", id: 1 },
  { name: "eth", id: 2 },
  { name: "usdt", id: 3 },
];

// BTC

// bc1qzlqcsskdznqf6yd4w87l7askfteu4wkcmgex63

// USDT(Trc)

// TBYA1E5qZBue6XFMdShmzgE31iAF1kC3nH

// USDT (eth)

// 0xB91D00440E338CF4242cd99603aAB693fFdD0a56

// ETH (erc)

// 0xB91D00440E338CF4242cd99603aAB693fFdD0a56

// Trx

// TBYA1E5qZBue6XFMdShmzgE31iAF1kC3nH

export const adminWalletData = [
  {
    walletType: "btc",
    network: "btc",
    walletAddr: "bc1qzlqcsskdznqf6yd4w87l7askfteu4wkcmgex63",
    id: 1,
  },
  {
    walletType: "eth",
    network: "erc20",
    walletAddr: "0xB91D00440E338CF4242cd99603aAB693fFdD0a56",
    id: 2,
  },
  {
    walletType: "usdt",
    network: "Trc",
    walletAddr: "TBYA1E5qZBue6XFMdShmzgE31iAF1kC3nH",
    id: 3,
  },
  {
    walletType: "usdt",
    network: "eth",
    walletAddr: "0xB91D00440E338CF4242cd99603aAB693fFdD0a56",
    id: 3,
  },

  {
    walletType: "Trx",
    network: "",
    walletAddr: "TBYA1E5qZBue6XFMdShmzgE31iAF1kC3nH",
    id: 3,
  },
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

export const mediaHandles = [
  { name: "messenger", icon: "", id: 1 },
  { name: "instagram", icon: "", id: 2 },
  { name: "whatsapp", icon: "", id: 3 },
];
