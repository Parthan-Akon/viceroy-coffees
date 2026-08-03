import {
  FaSeedling,
  FaFire,
  FaBalanceScale,
  FaSlidersH,
  FaBoxes,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdOutlineCoffee,
  MdOutlineRestaurant,
  MdOutlineHotel,
  MdOutlineBusinessCenter,
  MdOutlineStorefront,
  MdOutlineHome,
} from "react-icons/md";

export const tagline = "Brewed for Leisure, Crafted for You";

export const nav = {
  links: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get Sample", full: "Request a Sample" },
};

export const whyChooseUs = [
  {
    icon: FaSeedling,
    title: "Carefully Selected Farms",
    desc: "Direct relationships with farmers across South India.",
    primary: true,
  },
  {
    icon: FaFire,
    title: "Freshly Roasted",
    desc: "Roasted in small batches close to your delivery date.",
    primary: true,
  },
  {
    icon: FaBalanceScale,
    title: "Premium Arabica & Robusta",
    desc: "Graded and cupped before every shipment.",
    primary: true,
  },
  {
    icon: FaSlidersH,
    title: "Custom Roast Profiles",
    desc: "Eight profiles, or a curve built for your equipment.",
    primary: true,
  },
  {
    icon: FaBoxes,
    title: "Bulk Supply",
    desc: "Reliable volume for multi-location operations.",
    primary: true,
  },
  {
    icon: FaCheckCircle,
    title: "Consistent Quality",
    desc: "The same cup, shipment after shipment.",
    primary: true,
  },
];

export const industries = [
  { icon: MdOutlineCoffee, label: "Cafés" },
  { icon: MdOutlineRestaurant, label: "Restaurants" },
  { icon: MdOutlineHotel, label: "Hotels" },
  { icon: MdOutlineBusinessCenter, label: "Offices" },
  { icon: MdOutlineStorefront, label: "Retail Stores" },
  { icon: MdOutlineHome, label: "Home Brewers" },
];

export const farmToCupStages = [
  { title: "Selected Farms", desc: "Farmers chosen for consistency, not just yield." },
  { title: "Processing", desc: "Washed and sorted to protect the bean's integrity." },
  { title: "Roasting", desc: "Small-batch roasting to your exact profile." },
  { title: "Quality Check", desc: "Every batch cupped before it ships." },
  { title: "Packaging", desc: "Sealed to lock in freshness in transit." },
  { title: "Delivered Fresh", desc: "On your schedule, at your volume." },
];

export const contactInfo = {
  phone: "+91 92845 65646",
  email: "viceroy.coffees@gmail.com",
  address: "Mayuresh Park, 6, Gangapur Rd, opposite vishwas bank, Sharda Nagar, Savarkar Nagar, Nashik, Maharashtra 422013",
};

export const footerLinks = {
  quick: nav.links,
  social: [
    { label: "Instagram", href: "https://www.instagram.com/viceroycoffees" },
  ],
};
