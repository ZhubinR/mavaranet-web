import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import BlogItem from "../../../public/components/blog/blogItem";
import "@/app/styles/styles.scss";
import moment from "jalali-moment";
import Overlay from "../../../public/components/layouts/Overlay";
import { reqUrl } from "../config";


const BlogArchive = async () => {
  const req = await fetch(`${reqUrl}/posts?acf_format=standard&per_page=100`, {
    next: { revalidate: 60 },
  });
  const blogReq = await req.json();

  const cateReq = await fetch(`${reqUrl}/categories`, {
    next: { revalidate: 60 },
  });
  const category = await cateReq.json();

  const categories = category;
  const blogPosts = blogReq;

  // Map over blog posts and find the corresponding category for each post
  const blogPostsWithCategories = blogPosts.map((post) => {
    // Find the category object corresponding to the post's category ID
    const postCategory = categories.find(
      (category) => category.id === post.categories[0]
    ); // Assuming only one category per post

    const gregorianDate = post.date;
    const jalaliDate = moment(gregorianDate, "YYYY-MM-DDTHH:mm:ss")
      .locale("fa")
      .format("YYYY/MM/DD HH:mm:ss");

    // Return the post object with the category name added
    return {
      ...post,
      categoryName: postCategory ? postCategory.name : "Uncategorized", // Provide a default category name if no category found
      date: jalaliDate.slice(0, 10),
    };
  });

  return (
    <main className="pageMain">
      <section className="service_intro wrapper mb-5">
        <div className="container">
          <Overlay />
          <InsidePageTitle
            title={`اخبار و مقالات`}
            desc={`وبلاگ ماورانت به عنوان یک منبع برجسته در زمینه تبلیغات و برندینگ کسب و کارهای مختلف شناخته می‌شود. در اینجا، ما به طرح و بررسی موضوعات گوناگونی می‌پردازیم که مستقیماً به نیازها و مسائل مربوط به بیزینس ها در فضای آنلاین مربوط می‌شود.`}
            backText={`BLOG`}
          />
        </div>
      </section>

      <div className="container">
        <div className="row align-items-center justify-content-center pt-4">
          {blogPostsWithCategories.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <BlogItem
                slug={`/blog/${post.slug}`}
                imageUrl={post.acf.thumbnail_url}
                title={post.title.rendered}
                description={post.acf.desc}
                updatedAt={post.date}
                readingTime={post.acf.readingtime}
                tag={post.categoryName}
              />
            </div>
          ))}
          <div key={61985} className="col-lg-4 col-md-6 mb-4">
            <BlogItem
              slug={`/blog/national-doctors-day`}
              imageUrl={`/images/natinal-dr-thumbnail.webp`}
              title={`روز پزشک مبارک`}
              description={`روز پزشک که مصادف با اول شهریور ماه و سالروز تولد بوعلی سینا، بزرگ‌ترین پزشک و دانشمند ایرانی است، فرصتی است برای تجلیل از خدمات ارزنده‌ی پزشکان و تقدیر از تلاش‌های بی‌وقفه‌ی آنان در راستای حفظ و ارتقاء سلامت جامعه.`}
              updatedAt={`1403/05/24`}
              readingTime={`8 دقیقه`}
              tag={`سایر`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogArchive;
