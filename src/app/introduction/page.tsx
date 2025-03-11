import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content =`# Hi / 您好 / Здравствуйте

Adult, R1999 주력, Her or It

안 바쁘면 립9를 하고 있어요.

무례하다라는 단어의 기준은 사람마다 다를 겁니다. 편하게 차단해주세요, 감사합니다. 동시에, 미처 세심한 부분까지 헤아리지 못해 늘 미안합니다.
  
모쪼록 잘 부탁드리며, 하시는 일 모두 대성하세요.`;

export async function generateMetadata() {
  return {
    title: "introduction",
    description: "self-intro",
    openGraph: {
      title: "introduction",
      description: "self-intro",
      images: [
        signOgImageUrl({
          title: "introduction",
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
