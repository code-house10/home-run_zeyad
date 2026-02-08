const stats = [
  { value: "+1200", label: "عملية نقل ناجحة" },
  { value: "+500", label: "عميل راضي" },
  { value: "+15", label: "منطقة نغطيها" },
  { value: "99%", label: "نسبة رضا العملاء" },
];

const galleryImages = [
  {
    src: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%86%D8%AC%D8%A7%D8%B1%D9%8A%D9%8A%D9%86-%D9%84%D9%81%D9%83-%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D9%84%D8%BA%D8%B1%D9%81.webp?updatedAt=1764187988505",
    alt: "نجارين لفك وتركيب الغرف",
  },
  {
    src: "https://ik.imagekit.io/mkek1asn5/Ossama2/glass-packing.webp?updatedAt=1767129449605",
    alt: "تغليف الزجاج والأنتيكات",
  },
  {
    src: "https://ik.imagekit.io/mkek1asn5/Ossama2/air_condition.webp?updatedAt=1767129448418",
    alt: "فك وتركيب التكييفات",
  },
  {
    src: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%81%D9%83-%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D9%84%D9%86%D8%AC%D9%81-%D9%88%D8%AA%D8%BA%D9%84%D9%8A%D9%81%D9%87.webp?updatedAt=1764187988447",
    alt: "فك وتركيب النجف وتغليفه",
  },
];

const TeamSection = () => {
  return (
    <div className="overflow-hidden bg-background">
      {/* Gallery Section */}
      <section className="py-20 lg:py-28 bg-[#f4f6f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">خدمات إضافية</h6>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
              خدمات متكاملة لراحتك
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl h-[300px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f161b]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-bold text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-industrial-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{stat.value}</h2>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
