import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# 플랫폼에 대한 고민

Adult, R1999 주력, Her or It

잡다한 기록: @nomen_occultum

nomen: 라틴어, '이름'

occultum: occultus의 형용사, '미지의'

줄이면 익명이에요.<br><br>안 바쁘면 립9를 하며, FUB FREE

무례하다는 게 사람마다 기준이 다를 겁니다. 편하게 차단해주세요, 감사합니다.`;

export async function generateMetadata() {
  return {
    title: "플랫폼에 대한 고민",
    description: "테스트용으로",
    openGraph: {
      title: "플랫폼에 대한 고민",
      description: "테스트용으로",
      images: [
        signOgImageUrl({
          title: "noimage404",
          label: "플랫폼에 대한 고민",
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
