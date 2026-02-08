import { ArrowUpLeft } from "lucide-react";

const projects = [
  {
    title: "نقل عفش فى التجمع الخامس",
    category: "القاهرة الجديدة",
    image: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D9%81%D9%89-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3.webp?updatedAt=1764187990380",
  },
  {
    title: "نقل عفش فى المقطم",
    category: "القاهرة",
    image: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D8%A8%D8%A7%D9%84%D9%85%D9%82%D8%B7%D9%85.webp?updatedAt=1764187990843",
  },
  {
    title: "نقل عفش فى الشيخ زايد",
    category: "الجيزة",
    image: "https://ik.imagekit.io/mkek1asn5/elmostafa_mostafa/%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D8%A8%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B2%D8%A7%D9%8A%D8%AF.webp?updatedAt=1764187991046",
  },
  {
    title: "نقل عفش فى عين شمس",
    category: "القاهرة",
    image: "https://ik.imagekit.io/mkek1asn5/khalaf/%D9%86%D9%82%D9%84-%D8%B9%D9%81%D8%B4-%D8%B9%D9%8A%D9%86-%D8%B4%D9%85%D8%B3.webp?updatedAt=1765220275891",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">أعمالنا</h6>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
              نقدم خدمات متميزة فى كل عملية نقل
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl h-[400px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f161b] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <span className="text-primary text-xs font-bold tracking-wider">{project.category}</span>
                <h3 className="text-white text-lg font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
