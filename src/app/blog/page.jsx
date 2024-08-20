import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import BlogItem from "../../../public/components/blog/blogItem";
import "@/app/styles/styles.scss";
import moment from "jalali-moment";
import Overlay from "../../../public/components/layouts/Overlay";
import { reqUrl } from "../config";

const BlogArchive = async () => {

  const req = await fetch(`${reqUrl}/posts?acf_format=standard&per_page=100`, {
    next: { revalidate: 604800 },
  });
  const blogReq = await req.json();

  const cateReq = await fetch(`${reqUrl}/categories`, {
    next: { revalidate: 604800 },
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
        </div>
      </div>
    </main>
  );
};

export default BlogArchive;
