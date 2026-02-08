import { ArrowUpLeft, Truck, Shield, Wrench } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://ik.imagekit.io/mkek1asn5/images/abdallaha_zain/movers.webp?updatedAt=1763922038276"
                alt="فريق نقل العفش المحترف"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-white p-6 rounded-xl text-center shadow-lg">
              <span className="text-4xl font-extrabold block">+10</span>
              <span className="text-sm font-semibold">سنوات خبرة</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">من نحن</h6>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2] mb-5">
              شريكك الموثوق لنقل العفش فى القاهرة والجيزة
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              نحن شركة متخصصة فى نقل العفش والأثاث بجميع أنحاء القاهرة والجيزة. نقدم خدمات شاملة تشمل التغليف الآمن بأجود الخامات، فك وتركيب الأثاث بأيدي فنيين متخصصين، والونش الهيدروليكي لرفع العفش من وإلى الأدوار العالية.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-1">سيارات نقل مجهزة</h4>
                  <p className="text-sm text-muted-foreground">أسطول سيارات حديثة ومجهزة لنقل العفش بأمان تام</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-1">فك وتركيب احترافي</h4>
                  <p className="text-sm text-muted-foreground">نجارين متخصصين لفك وتركيب جميع أنواع الأثاث والغرف</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center">
              <span className="bg-primary text-white text-[14px] font-bold px-8 py-4 rounded-s-lg">اعرف المزيد</span>
              <span className="bg-[#e85a3c] text-white px-5 py-4 rounded-e-lg flex items-center">
                <ArrowUpLeft className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
