import { ArrowUpLeft, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-industrial-gradient overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ik.imagekit.io/mkek1asn5/aman/slide2.webp?updatedAt=1767305981054"
          alt="نقل عفش"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0F161B]/90 via-[#0F161B]/70 to-transparent" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="max-w-2xl mr-auto">
          <h6 className="text-primary font-semibold text-sm tracking-wide mb-4">
            خدمات نقل عفش متكاملة فى القاهرة والجيزة
          </h6>
          <h1 className="text-white font-extrabold mb-6 leading-[1.15]" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
            نقل عفش آمن ومحترف
            <br />
            بأفضل الأسعار
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-xl leading-relaxed">
            نقدم خدمات نقل العفش مع التغليف الاحترافي وفك وتركيب الأثاث والونش الهيدروليكي لرفع العفش وسيارات نقل مجهزة وحديثة.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+201036591401" className="inline-flex items-center">
              <span className="bg-primary text-white text-[14px] font-bold px-8 py-4 rounded-s-lg">
                اتصل الآن
              </span>
              <span className="bg-[#e85a3c] text-white px-5 py-4 rounded-e-lg flex items-center">
                <Phone className="w-5 h-5" />
              </span>
            </a>
            <a href="#services" className="inline-flex items-center border border-white/30 text-white text-[14px] font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              تعرف على خدماتنا
            </a>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
};

export default Hero;
