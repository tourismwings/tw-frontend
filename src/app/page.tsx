// import Header from "./components/Header";
// import NavMenu from "./components/NavMenu";
// import Banner from "./components/Banner";
// import Latest from "./components/Latest";
// import TwoGrid from "./components/TwoGrid";
// import Footer from "./components/Footer";
import { createClient } from "next-sanity";

export async function getData() {
  const client = createClient({
    projectId: "t1zc5zbe",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
  });

  const query = `*[_type == "post"]{_id, title, slug, mainImage{asset->{url}}, body}`;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const posts = await getData();
  console.log('posts',posts)
  return (
    <>
    {/* <Header posts={posts} />
    <NavMenu />
    <Latest />
    <Banner />
    <TwoGrid />
    <Footer /> */}
    ss
    </>
      
    
  );
}
