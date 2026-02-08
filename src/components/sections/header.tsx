"use client";

import { Phone, MapPin, Menu, X, ArrowUpLeft } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative w-full z-50 bg-white border-b border-border/30">
      <div className="container mx-auto px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b border-border/30 text-sm text-[#777d7f]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+201036591401" className="hover:text-primary transition-colors">01036591401</a>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              القاهرة والجيزة - مصر
            </span>
          </div>
          <span className="text-xs">متاحين على مدار الساعة</span>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          {/* Logo + Company Name */}
          <a href="/" className="shrink-0 flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/mkek1asn5/images/logo-hom-run.webp"
              alt="شعار شركة هوم رن لنقل العفش"
              width={200}
              height={70}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                هوم رن
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-secondary/80">
                لنقل العفش
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {["الرئيسية", "خدماتنا", "من نحن", "أعمالنا", "المناطق", "اتصل بنا"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] font-semibold text-secondary hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+201036591401"
              className="hidden sm:inline-flex items-center"
            >
              <span className="bg-primary text-white text-[13px] font-bold px-6 py-3 rounded-s-lg">
                احصل على عرض سعر
              </span>
              <span className="bg-[#e85a3c] text-white px-4 py-3 rounded-e-lg flex items-center">
                <ArrowUpLeft className="w-4 h-4" />
              </span>
            </a>
            <button
              className="lg:hidden bg-secondary text-white p-2.5 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3 border-t border-border/30 pt-4">
            {["الرئيسية", "خدماتنا", "من نحن", "أعمالنا", "المناطق", "اتصل بنا"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] font-semibold text-secondary hover:text-primary transition-colors py-1"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
