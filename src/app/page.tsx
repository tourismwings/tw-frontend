// import Header from "./components/Header";
// import NavMenu from "./components/NavMenu";
// import Banner from "./components/Banner";
// import Latest from "./components/Latest";
// import TwoGrid from "./components/TwoGrid";
// import Footer from "./components/Footer";
import Header from "./newComponents/Header";
import VideoSection from "./newComponents/VideoSection";
import Content from "./newComponents/contentComponent/Content";
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
    <Header />
    <main>
        <VideoSection
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          content={<Content title="Welcome to Section 1" content=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," />}
        />
      </main>
    </>
      
    
  );
}
