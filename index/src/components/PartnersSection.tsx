import { motion } from "framer-motion";

const partners = [
  { name: "HSBC", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/1%20HSBC-logo-transparent-background.png?1732003912", large: true },
  { name: "eClerx", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/2%20eClerx-Logo.png?1732003912" },
  { name: "BNY Mellon", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/3%20bny-mellon.png?1732003912" },
  { name: "Accenture", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/4%20Accenture.svg.png?1732003912" },
  { name: "Bajaj Allianz", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/6%20Bajaj_Allianz_Insurance.svg.png?1732003912" },
  { name: "Wipro", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/7%20wipro.png?1732003912" },
  { name: "Citibank", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/12 citibank-1-logo-png-transparent.png?1732003912", large: true },
  { name: "Amazon", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/13 Amazon-Logo-1.png?1732003912" },
  { name: "Tata Motors", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/15 Tata_logo.svg.png?1732003912" },
  { name: "LG Electronics", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/16 LG_logo_(2015).svg.png?1732003912" },
  { name: "Mahindra", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/19 Mahindra.png?1732003912", large: true },
  { name: "Magneti Marelli", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/23b5b19b-3afc-4b70-8c93-1ded700904c4_medium.jpg?1732003912", large: true },
  { name: "Times of India", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/36 times of india-group-logo-png.png?1732003912" },
  { name: "Godrej", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/37 Godrej_Logo.svg.png?1732003912" },
  { name: "Marriott", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/51 Marriott-International-Logo.png?1732003912" },
  { name: "ITC Limited", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/1200px-ITC_Limited_Logo.svg.png?1732003912" },
  { name: "Airtel", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Airtel.png?1732003912" },
  { name: "Anarock", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/ANAROCK_Logo.jpg?1732003912" },
  { name: "HDFC Bank", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/file.jpg?1732003912" },
  { name: "FirstCry", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/FirstCry_logo.png?1732003912" },
  { name: "Force Motors", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Force.png?1732003912" },
  { name: "Groww", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Groww_app_logo.png?1732003912" },
  { name: "ICICI Bank", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/HPusrWuW_400x400.jpg?1732003912" },
  { name: "IDFC FIRST Bank", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/IDFC.jpg?1732003912" },
  { name: "Knight Frank", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Knight-Frank-Logo.png?1732003912" },
  { name: "KPMG", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/KPMG_logo.svg.png?1732003912" },
  { name: "Mercedes-Benz FS", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Merceced-Benz-Financial-Services-Logo.webp?1732003912" },
  { name: "NJ Group", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/nj-group.jpg?1732003912" },
  { name: "Ocwen", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/ocwen_logo.jpg?1732003912" },
  { name: "Philips", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Philips_logo.svg.png?1732003912" },
  { name: "Reliance Retail", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/reliance-retail-logo.png?1732003912" },
  { name: "Satguru Travel", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/Satguru.jpg?1732003912" },
  { name: "TCS", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/TCS.NS.png?1732003912" },
  { name: "Wolters Kluwer", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/wolters_kluwer_logo.5f60d8cecfa6f.png?1732003912" },
  { name: "Flipkart", logo: "https://static.npfs.co/accounts/375/documents/2024/11/19/flipkart.png?1732003912" },
];

const PartnersSection = () => (
  <section id="partners" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#004E7E] text-sm font-semibold tracking-widest uppercase font-body">Our Network</span>
        <h2 className="font-display text-[40px] leading-tight font-black text-[#002244] uppercase tracking-wide mt-3">
          Recruitment <span className="text-[#004E7E]">Partners</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body">
          200+ leading companies across industries recruit from Lexicon MILE
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3 items-center">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="bg-card rounded-xl p-4 flex items-center justify-center border border-border hover:border-[#004E7E]/30 hover:shadow-card transition-all duration-300 h-[100px]"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain transition-opacity"
              />
            ) : (
              <span className="text-xs font-semibold text-muted-foreground text-center font-body leading-tight">{partner.name}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
