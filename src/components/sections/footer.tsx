import { MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f161b] text-white">
      {/* Newsletter */}
      <div className="container mx-auto px-6">
        <div className="py-10 border-b border-[#1c242b] flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-xl lg:text-2xl font-bold">اشترك فى نشرتنا الإخبارية</h2>
          <div className="flex w-full lg:w-auto max-w-lg bg-[#1c242b] rounded-full overflow-hidden p-1">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 bg-transparent text-white px-5 py-3 outline-none placeholder:text-[#666] text-sm"
            />
            <button className="bg-primary hover:bg-[#e85a3c] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
              اشترك الآن
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://ik.imagekit.io/mkek1asn5/images/logo-hom-run.webp"
                alt="شعار الشركة"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-primary">هوم رن</span>
                <span className="text-xs font-bold text-white/60">لنقل العفش</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-[#687278] text-sm">القاهرة والجيزة - مصر</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+201036591401" className="text-[#687278] text-sm hover:text-primary transition-colors">01036591401</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@naql-afsh.com" className="text-[#687278] text-sm hover:text-primary transition-colors">info@naql-afsh.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {["نقل العفش", "تغليف الأثاث", "فك وتركيب الأثاث", "ونش هيدروليكي", "نقل المكاتب"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-[#687278] text-sm hover:text-primary transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">المناطق</h4>
            <ul className="space-y-3">
              {["القاهرة", "الجيزة", "التجمع الخامس", "الشيخ زايد", "6 أكتوبر", "المعادي", "مصر الجديدة"].map((a) => (
                <li key={a}>
                  <a href="#" className="text-[#687278] text-sm hover:text-primary transition-colors">{a}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {["الرئيسية", "من نحن", "خدماتنا", "أعمالنا", "اتصل بنا"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[#687278] text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1c242b] py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#687278] text-sm">
            جميع الحقوق محفوظة &copy; 2026 - هوم رن لنقل العفش
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-[#1c242b] text-[#687278] hover:bg-primary hover:text-white transition-all rounded">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-[#1c242b] text-[#687278] hover:bg-primary hover:text-white transition-all rounded">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
