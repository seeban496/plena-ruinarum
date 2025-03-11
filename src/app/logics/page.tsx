import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content =`### 웹 배포 방법

간단히 올려드렸습니다.`;

export async function generateMetadata() {
  return {
    title: "Mockup",
    description: "테스트용",
    openGraph: {
      title: "Mockup",
      description: "테스트용",
      images: [
        signOgImageUrl({
          title: "noimage404",
          label: "Mockup",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
