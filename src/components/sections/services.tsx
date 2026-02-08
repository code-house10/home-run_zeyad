const services = [
  {
    title: "نقل العفش",
    description: "نقل أثاث منزلك بأمان تام مع سيارات نقل مجهزة وحديثة وعمالة مدربة",
    image: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D9%85%D8%AC%D9%87%D8%B2%D8%A92.webp?updatedAt=1764187991033",
  },
  {
    title: "تغليف العفش",
    description: "تغليف احترافي بأجود خامات التغليف لحماية أثاثك من الخدوش والكسر",
    image: "https://ik.imagekit.io/mkek1asn5/images/%D8%AA%D8%BA%D9%84%D9%8A%D9%81-%D8%A2%D9%85%D9%86-%D9%88%D9%85%D9%88%D8%A7%D8%AF-%D8%B9%D8%A7%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D9%88%D8%AF%D8%A9.webp?updatedAt=1763594183750",
  },
  {
    title: "فك وتركيب الأثاث",
    description: "نجارين متخصصين لفك وتركيب جميع أنواع الغرف والمطابخ والأثاث",
    image: "https://ik.imagekit.io/mkek1asn5/images/abdallaha_zain/carpentar.webp?updatedAt=1763922038278",
  },
  {
    title: "ونش رفع العفش",
    description: "ونش هيدروليكي لرفع وإنزال العفش من وإلى جميع الأدوار العالية",
    image: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%88%D9%86%D8%B4%20%D8%B1%D9%81%D8%B9%20%D8%A7%D9%84%D8%B9%D9%81%D8%B4.webp?updatedAt=1764187989491",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f6f9] overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">خدماتنا</h6>
          <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
            خدمات نقل عفش شاملة ومتكاملة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative mb-5 mx-auto w-44 h-44">
                <div className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-[#f4f6f9]">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={176}
                    height={176}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
