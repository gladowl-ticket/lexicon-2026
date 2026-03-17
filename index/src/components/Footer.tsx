import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark py-16 border-t border-primary-foreground/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="mb-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <a href="/" className="inline-block bg-white/90 p-2 rounded-lg">
              <img
                src="https://lexiconmile.com/wp-content/uploads/2020/03/black_Logo.svg"
                alt="Lexicon MILE Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
          <p className="text-center text-primary-foreground/50 text-sm leading-relaxed font-body">
            Management Institute of Leadership & Excellence, Pune. Transforming business education since 2009.
          </p>
        </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-primary-foreground/40 text-sm font-body font-medium italic text-center">
            An initiative of Sukhdev and Kamal Sharma Educational Trust
          </p>
          <div className="relative flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-primary-foreground/30 text-[13px] font-body">
              © 2026 Copyright LexiconMile. All Rights Reserved
            </p>
            <span className="hidden md:block text-primary-foreground/10 text-xs">|</span>
            <p className="text-primary-foreground/30 text-[13px] font-body">
              Designed by <span className="text-white/40">Lexicon</span>
            </p>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
