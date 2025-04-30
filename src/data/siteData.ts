
export type PackageType = {
  id: number;
  name: string;
  company: string;
  internetSpeed: string;
  tvChannels: number;
  price: number;
  popular?: boolean;
  features?: string[];
};

export type CompanyType = {
  id: number;
  name: string;
};

// List of 30 top US companies for the dropdown
export const companies: CompanyType[] = [
  { id: 1, name: "Xfinity" },
  { id: 2, name: "Spectrum" },
  { id: 3, name: "AT&T" },
  { id: 4, name: "Verizon" },
  { id: 5, name: "Cox" },
  { id: 6, name: "CenturyLink" },
  { id: 7, name: "Frontier" },
  { id: 8, name: "Mediacom" },
  { id: 9, name: "Optimum" },
  { id: 10, name: "Windstream" },
  { id: 11, name: "WOW!" },
  { id: 12, name: "HughesNet" },
  { id: 13, name: "Viasat" },
  { id: 14, name: "RCN" },
  { id: 15, name: "Sparklight" },
  { id: 16, name: "Astound Broadband" },
  { id: 17, name: "Google Fiber" },
  { id: 18, name: "EarthLink" },
  { id: 19, name: "Rise Broadband" },
  { id: 20, name: "Consolidated Communications" },
  { id: 21, name: "TDS" },
  { id: 22, name: "Ziply Fiber" },
  { id: 23, name: "MetroNet" },
  { id: 24, name: "Starry Internet" },
  { id: 25, name: "Armstrong" },
  { id: 26, name: "Ting" },
  { id: 27, name: "GoNetspeed" },
  { id: 28, name: "Kinetic by Windstream" },
  { id: 29, name: "Grande Communications" },
  { id: 30, name: "Sonic" }
];

// List of available packages
export const packages: PackageType[] = [
  {
    id: 1,
    name: "Ultimate Bundle",
    company: "Xfinity",
    internetSpeed: "1 Gbps",
    tvChannels: 250,
    price: 129.99,
    popular: true,
    features: ["Unlimited Data", "WiFi 6 Router", "DVR Included", "Sports Channels"]
  },
  {
    id: 2,
    name: "Premium TV & Internet",
    company: "Spectrum",
    internetSpeed: "500 Mbps",
    tvChannels: 175,
    price: 99.99,
    features: ["No Contracts", "Free Installation", "HD Channels", "Mobile App"]
  },
  {
    id: 3,
    name: "Fiber Bundle",
    company: "AT&T",
    internetSpeed: "940 Mbps",
    tvChannels: 200,
    price: 119.99,
    features: ["Fiber Connection", "Cloud DVR", "Premium Channels", "No Data Caps"]
  },
  {
    id: 4,
    name: "Basic Bundle",
    company: "Cox",
    internetSpeed: "150 Mbps",
    tvChannels: 75,
    price: 69.99,
    features: ["Essential Channels", "WiFi Hotspots", "Parental Controls", "Budget Friendly"]
  },
  {
    id: 5,
    name: "Streaming Bundle",
    company: "Verizon",
    internetSpeed: "300 Mbps",
    tvChannels: 125,
    price: 89.99,
    popular: true,
    features: ["Disney+ Included", "Netflix Credit", "Smart Home Compatible", "Mobile Priority"]
  },
  {
    id: 6,
    name: "Elite Package",
    company: "Optimum",
    internetSpeed: "400 Mbps",
    tvChannels: 220,
    price: 109.99,
    features: ["Premium Router", "4K Channels", "Voice Remote", "Multi-Room DVR"]
  },
  {
    id: 7,
    name: "Gaming Pro",
    company: "Google Fiber",
    internetSpeed: "2 Gbps",
    tvChannels: 150,
    price: 149.99,
    features: ["Lowest Latency", "Game Streaming", "Gaming Router", "Priority Support"]
  },
  {
    id: 8,
    name: "Entertainment Plus",
    company: "CenturyLink",
    internetSpeed: "200 Mbps",
    tvChannels: 190,
    price: 94.99,
    features: ["Movie Channels", "Live Sports", "Streaming Integration", "Multi-Device"]
  },
  {
    id: 9,
    name: "Economy Bundle",
    company: "Windstream",
    internetSpeed: "100 Mbps",
    tvChannels: 60,
    price: 59.99,
    features: ["Basic Channels", "Affordable", "No Contract", "Self-Install"]
  },
  {
    id: 10,
    name: "Family Package",
    company: "Mediacom",
    internetSpeed: "300 Mbps",
    tvChannels: 170,
    price: 99.99,
    features: ["Kid-Friendly Channels", "Parental Controls", "Multi-Room", "Family Discount"]
  },
  {
    id: 11,
    name: "Business Pro",
    company: "Sparklight",
    internetSpeed: "750 Mbps",
    tvChannels: 100,
    price: 129.99,
    features: ["Business Support", "Static IP", "Conference Channels", "Priority Service"]
  },
  {
    id: 12,
    name: "Rural Connect",
    company: "HughesNet",
    internetSpeed: "25 Mbps",
    tvChannels: 50,
    price: 79.99,
    features: ["Rural Coverage", "Satellite Service", "Available Everywhere", "Data Tokens"]
  },
  {
    id: 13,
    name: "Student Special",
    company: "RCN",
    internetSpeed: "250 Mbps",
    tvChannels: 80,
    price: 69.99,
    features: ["Student Discount", "9-Month Contracts", "Easy Setup", "Educational Channels"]
  },
  {
    id: 14,
    name: "Senior Bundle",
    company: "Frontier",
    internetSpeed: "200 Mbps",
    tvChannels: 110,
    price: 74.99,
    features: ["Senior Discount", "Large Font Guide", "Phone Support", "Classic Channels"]
  },
  {
    id: 15,
    name: "Ultimate Sports",
    company: "DirecTV",
    internetSpeed: "400 Mbps",
    tvChannels: 230,
    price: 119.99,
    features: ["All Sports Channels", "NFL Sunday Ticket", "ESPN+", "Sports Stats"]
  },
  {
    id: 16,
    name: "Movie Buff",
    company: "Dish",
    internetSpeed: "300 Mbps",
    tvChannels: 190,
    price: 104.99,
    features: ["Premium Movie Channels", "On-Demand Library", "4K Content", "Home Theater Integration"]
  },
  {
    id: 17,
    name: "Smart Home Bundle",
    company: "AT&T",
    internetSpeed: "500 Mbps",
    tvChannels: 155,
    price: 109.99,
    features: ["Smart Home Hub", "Device Integration", "Voice Control", "Security Features"]
  },
  {
    id: 18,
    name: "Premium Fiber",
    company: "Ziply Fiber",
    internetSpeed: "1 Gbps",
    tvChannels: 180,
    price: 124.99,
    features: ["Symmetrical Speed", "Low Latency", "Premium TV App", "Cloud Storage"]
  },
  {
    id: 19,
    name: "Ultimate Gaming",
    company: "Xfinity",
    internetSpeed: "1.2 Gbps",
    tvChannels: 140,
    price: 134.99,
    features: ["Gaming Mode", "Twitch Integration", "Discord Perks", "Game Server Priority"]
  },
  {
    id: 20,
    name: "Work From Home",
    company: "Spectrum",
    internetSpeed: "600 Mbps",
    tvChannels: 125,
    price: 114.99,
    features: ["Business Class Reliability", "Video Conference Priority", "Security Suite", "Tech Support"]
  },
  {
    id: 21,
    name: "Budget Bundle",
    company: "WOW!",
    internetSpeed: "100 Mbps",
    tvChannels: 70,
    price: 64.99,
    features: ["Affordable", "Essential Channels", "No Contract", "Easy Setup"]
  },
  {
    id: 22,
    name: "Premium 4K",
    company: "Verizon",
    internetSpeed: "940 Mbps",
    tvChannels: 250,
    price: 139.99,
    features: ["4K Ultra HD", "Premium Sound", "Voice Remote", "Multi-Room Viewing"]
  },
  {
    id: 23,
    name: "Latino Package",
    company: "Cox",
    internetSpeed: "300 Mbps",
    tvChannels: 190,
    price: 99.99,
    features: ["Spanish Channels", "International Sports", "Cultural Programming", "Bilingual Support"]
  },
  {
    id: 24,
    name: "Streaming Focus",
    company: "Starry Internet",
    internetSpeed: "500 Mbps",
    tvChannels: 50,
    price: 79.99,
    features: ["Streaming Optimized", "Smart TV Integration", "App-Based", "No Equipment Fees"]
  },
  {
    id: 25,
    name: "International Plus",
    company: "Optimum",
    internetSpeed: "300 Mbps",
    tvChannels: 200,
    price: 109.99,
    features: ["International Channels", "Multi-Language Support", "Global Content", "World Sports"]
  },
  {
    id: 26,
    name: "Urban High Speed",
    company: "MetroNet",
    internetSpeed: "1 Gbps",
    tvChannels: 120,
    price: 119.99,
    features: ["City Coverage", "Apartment Ready", "No Installation Fee", "Urban Areas"]
  },
  {
    id: 27,
    name: "Rural Plus",
    company: "Rise Broadband",
    internetSpeed: "50 Mbps",
    tvChannels: 80,
    price: 84.99,
    features: ["Rural Coverage", "Fixed Wireless", "Local Channels", "Weather Resistant"]
  },
  {
    id: 28,
    name: "4K Entertainment",
    company: "TDS",
    internetSpeed: "600 Mbps",
    tvChannels: 175,
    price: 119.99,
    features: ["4K Channels", "Premium Content", "Voice Remote", "Advanced DVR"]
  },
  {
    id: 29,
    name: "Basic Connect",
    company: "EarthLink",
    internetSpeed: "75 Mbps",
    tvChannels: 45,
    price: 54.99,
    features: ["Reliable", "Basic Channels", "No Frills", "Low Cost"]
  },
  {
    id: 30,
    name: "Premium All-Inclusive",
    company: "Sonic",
    internetSpeed: "1 Gbps",
    tvChannels: 275,
    price: 149.99,
    features: ["All Premium Channels", "Equipment Included", "Unlimited Everything", "VIP Support"]
  }
];
