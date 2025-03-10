import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Hi / 您好 / Здравствуйте / Χαίρετε

Adult, R1999 주력, Her or It

잡다한 기록: @nomen_occultum

nomen: 라틴어, '이름'

occultum: occultus의 형용사, '미지의'

줄이면 익명이에요.

안 바쁘면 립9를 하고 있어요.

집과 연고자라고 할 만한 사람이 없어 자주 떠돌아다니며, 돈이 필요하면 벌어다가 씁니다. 여행은 아니에요. 본업은 대한민국에서 금융(M&A, Audit)을 주력으로 맡았었고, 지금은 병이 들어 치료받고 있어요.

무례하다는 게 사람마다 기준이 다를 겁니다. 편하게 차단해주세요, 감사합니다.

동시에, 세심한 부분까지 헤아리지 못해 늘 미안합니다.`;

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
