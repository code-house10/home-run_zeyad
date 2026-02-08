import { ArrowUpLeft } from "lucide-react";

const blogPosts = [
  {
    title: "نصائح هامة قبل نقل العفش لضمان سلامة أثاثك",
    excerpt: "تعرف على أهم النصائح والإرشادات التى يجب اتباعها قبل عملية نقل العفش لضمان وصول أثاثك بأمان تام إلى منزلك الجديد.",
  },
  {
    title: "كيف تختار أفضل شركة نقل عفش فى القاهرة",
    excerpt: "دليلك الشامل لاختيار شركة نقل عفش موثوقة. تعرف على المعايير الأساسية التى يجب مراعاتها عند اختيار شركة نقل الأثاث.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f6f9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
          <div className="max-w-xl">
            <h6 className="text-primary font-semibold text-sm tracking-wide mb-3">نصائح ومقالات</h6>
            <h2 className="text-[36px] lg:text-[44px] font-bold text-secondary leading-[1.2]">
              مدونة نقل العفش
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="bg-white p-10 lg:p-12 shadow-sm hover:-translate-y-1 transition-transform duration-300 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4 leading-[1.3] hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>
              <a href="#" className="inline-flex items-center">
                <span className="bg-primary text-white text-[13px] font-bold px-6 py-3 rounded-s-lg">اقرأ المزيد</span>
                <span className="bg-[#e85a3c] text-white px-4 py-3 rounded-e-lg flex items-center">
                  <ArrowUpLeft className="w-4 h-4" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
