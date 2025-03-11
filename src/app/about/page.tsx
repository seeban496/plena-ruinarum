import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `### Intro

성인/女/R1999 주력

@nomen_occultum: 피크민, 일상 등

Lv.50, seom, 706745116

세심한 부분을 종종 놓칠 때가 있어요, 이에 대해서는 깊이 사과드려요. 그럼에도 불구하고, 무례하다는 개념은 사람마다 상이하게 인지하고 있죠. 이별은 편하신 방법으로 해주세요, 감사합니다.

여기에는 종종 들를 예정이에요.

export async function generateMetadata() {
  return {
    title: "Tags",
    description: "Different blog post categories",
    openGraph: {
      title: "Tags",
      description: "Different blog post categories",
      images: [
        signOgImageUrl({
          title: "Blog Post Categories",
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
