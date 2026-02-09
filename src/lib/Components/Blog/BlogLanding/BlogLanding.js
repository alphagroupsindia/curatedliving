import ALL_URL from "@/app/apiConfig";
import Error404 from "@/lib/UI/Error404/Error404";
import PageHeader from "@/lib/UI/PageHeader/PageHeader";
import BlogThumbBig from '@/lib/Components/Blog/BlogThumb/BlogThumbBig';
import BlogThumbSmall from '@/lib/Components/Blog/BlogThumb/BlogThumbSmall';
import BlogThumbMedium from '@/lib/Components/Blog/BlogThumb/BlogThumbMedium';
import TagBoard from '@/lib/Components/Blog/Tag/TagBoard';
import Footer from '@/lib/Components/Footer/Footer';
import styles from './BlogLanding.module.css';
import HeaderBar from "@/lib/Components/HeaderBar/HeaderBar";
export async function generateMetadata(params) {
  return {
    title: "Curated Living",
    description: "",
    keywords: "",
  };
}

const LandingPage=async ()=>{
  const { data } = await getHomePageBlogs();
    return (
      <>
        {data ? (
          <>
            <HeaderBar></HeaderBar>
            <PageHeader
              img="/images/blogs.webp"
              title="Blogs"
              color="#eeeeee"
              bread="Home:Blogs"
            ></PageHeader>
            <div className={styles.blogLanding}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    {data && data.length > 0 && data[0].link && (
                      <BlogThumbBig data={data[0]}></BlogThumbBig>
                    )}
                  </div>

                  <div className="col-lg-6">
                    {data && data.length > 1 && data[1].link && (
                      <BlogThumbSmall data={data[1]}></BlogThumbSmall>
                    )}
                    {data && data.length > 2 && data[2].link && (
                      <BlogThumbSmall data={data[2]}></BlogThumbSmall>
                    )}
                    {data && data.length > 3 && data[3].link && (
                      <BlogThumbSmall data={data[3]}></BlogThumbSmall>
                    )}
                  </div>

                  {data &&
                    data.length > 4 &&
                    data.slice(4, 8).map((item, index) => (
                      <div className="col-sm-6" key={index}>
                        {item.link && (
                          <BlogThumbSmall data={item}></BlogThumbSmall>
                        )}
                      </div>
                    ))}
                  <div className="col-sm-8">
                    {data &&
                      data.length > 4 &&
                      data
                        .slice(8, 25)
                        .map((item, index) => (
                          <div key={index}>
                            {item.link && (
                              <BlogThumbMedium data={item}></BlogThumbMedium>
                            )}
                          </div>
                        ))}
                  </div>
                  <div className="col-sm-4">
                    <TagBoard from="home"></TagBoard>
                  </div>
                </div>
              </div>
              <Footer></Footer>
            </div>
          </>
        ) : (
          <Error404></Error404>
        )}
      </>
    );

}
export default LandingPage;


async function getHomePageBlogs() {
  try {
    const res = await fetch(
      ALL_URL.api_url + "news_postdisplay/bydisplay/news-landing/-/-/-/-/2/1/"+ALL_URL.websitekey,
      { next: { revalidate: ALL_URL.cache_timeout } }
    );


    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return { data };
  } catch (error) {
    return {};
  }
}
