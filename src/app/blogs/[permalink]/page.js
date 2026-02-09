import BlogContents from "@/lib/Components/Blog/BlogContents/BlogContents.js";
import ALL_URL from "../../apiConfig";

export async function generateMetadata(params) {
  // read route params
  const id = params.id;
  const permalink = params.params.permalink;
  // fetch data
  try {
    const res = await fetch(
      ALL_URL.api_url + "news_postdisplay/bydisplay/" + permalink+"/"+ALL_URL.websitekey
    );
    const data = await res.json();
    return {
      title: data.heading,
      description: data.pagedescription,
      keywords: data.pagekeywords,
    };
  } catch (error) {
    return {};
  }
  // optionally access and extend (rather than replace) parent metadata
}

async function Permalink(param) {
  const permalink = param.params.permalink;
  const { data } = await getBlogByPermalink(permalink);
  // if (permalink.includes('favicon.ico')) {
  //   res.status(204).end()
  // }
  return (
    <>{data ? <BlogContents data={data}></BlogContents> : "Data Not Found"}</>
  );
}
async function getBlogByPermalink(permalink) {
  try {
    const res = await fetch(
      ALL_URL.api_url + "news_postdisplay/bydisplay/" + permalink+"/"+ALL_URL.websitekey,
      { next: { revalidate: ALL_URL.cache_timeout } }
    );
    const data = await res.json();
    return { data };
  } catch (error) {
    return {};
  }
}

export default Permalink;
