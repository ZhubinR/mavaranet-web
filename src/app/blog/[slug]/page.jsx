import '@/app/styles/styles.scss'
import SharedSinglePageTitle from "../../../../public/components/shared/sharedSinglePageTitle"
import BlogMorePost from "../../../../public/components/blog/BlogMorePost"
import { reqUrl } from "@/app/config"
import HtmlRenderComponent from "../../../../public/components/layouts/HtmlRenderComponent"
import moment from "jalali-moment"
import BlogMorePostWrapper from "../../../../public/components/blog/BlogMorePostWrapper"
import { fetchWithRetry } from '../../../../public/components/lib/fetchWithRetry'



// async function getCategory() {
//     const categoryReq = await fetch(`${reqUrl}/categories`, { next: { revalidate:  3200 } })
//     if (!categoryReq.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     return categoryReq.json()
// }

export async function generateStaticParams() {

        const posts = await fetchWithRetry(`${reqUrl}/posts?acf_format=standard&per_page=100`);
    
        if (!posts) {
            console.error('Failed to fetch portfolio data');
            return []; // Return an empty array to avoid build errors
        }
    
        // Filter out invalid or ignored portfolios
        const validPosts = posts.filter(post => post && post.slug)
    
        return validPosts.map((post) => ({
            slug: decodeURIComponent(post.slug),
        }));
}

export async function generateMetadata({ params }) {
    // fetch data
    const seoBlogs = await fetch(`${reqUrl}/posts?acf_format=standard&slug=${params.slug}&_fields=yoast_head_json`).then((res) => res.json())
    const seoBlog = seoBlogs[0]

    // optionally access and extend (rather than replace) parent metadata

    return {
        title: seoBlog.yoast_head_json.title,
        description: seoBlog.yoast_head_json.description,
        openGraph: {
            title: seoBlog.yoast_head_json.og_title,
            description: seoBlog.yoast_head_json.og_description,
            images: [
                {
                    url: seoBlog.yoast_head_json.og_image.url, // Must be an absolute URL
                    // width: seoBlog.yoast_head_json.og_image.width,
                    // height: seoBlog.yoast_head_json.og_image.height,
                },
            ],
            url: `https://mavaranet.net/blog/${params.slug}`,
            locale: seoBlog.yoast_head_json.og_locale,
            type: seoBlog.yoast_head_json.og_type,
            siteName: seoBlog.yoast_head_json.og_site_name,
            twitter: {
                card: 'summary_large_image',
            },
        },
    }
}

const blogSingle = async ({ params }) => {
    console.log(params)

    const { slug } = params
    const req = await fetch(`${reqUrl}/posts?acf_format=standard&slug=${slug}`, { next: { revalidate:  604800 } });
    const blogPosts = await req.json();
    const blogPost = blogPosts[0];

    // Fetch categories data for the current post
  const categoryIds = blogPost.categories;
  const categoryFetchPromises = categoryIds.map(categoryId =>
    fetch(`${reqUrl}/categories/${categoryId}`)
);

const categoryResponses = await Promise.all(categoryFetchPromises);
const categoryData = await Promise.all(categoryResponses.map(response => response.json()));


  // Add category data to the blogPost object
  blogPost.categoriesData = categoryData;

  // Fetch related posts
  const dataReq = await fetch(`${reqUrl}/posts?acf_format=standard&categories=${blogPost.categoriesData.map(category => category.id).join(', ')}`);
  const allData = await dataReq.json();

  // Filter out the current post from related posts
  const filteredData = allData.filter(post => post.slug !== slug);

  // Take the first three related posts after filtering
  const threeData = filteredData.slice(0, 3);

  const gregorianDate = blogPost.date;
  const jalaliDate = moment(gregorianDate, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss');

    return (
        <>
            <SharedSinglePageTitle
                title={blogPost.title.rendered}
                date={jalaliDate.slice(0, 10)}
                tag={blogPost.categoriesData.map(category => category.name).join(', ')}
            />
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div >

                        <HtmlRenderComponent
                            htmlContent={blogPost.content.rendered}
                        />

                        <BlogMorePostWrapper />
                        {threeData.slice(0, 3).map(lastPosts => (
                            <BlogMorePost
                                key={lastPosts.id}
                                slug={lastPosts.slug}
                                imageUrl={lastPosts.acf.thumbnail_url}
                                title={lastPosts.title.rendered}
                                desc={lastPosts.acf.desc}
                                date={moment(lastPosts.date, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss').slice(0, 10)}
                            />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}




export default blogSingle