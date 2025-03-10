import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = # 낼 자료 내고, 할 일 하고 나서

그러고 천천히 업로드하겠습니다. LEET(법학적성시험), PSAT(공직적격성시험) 등은 논리학 학습이 필요하고, 수험적 차원 그리고 강학적 차원을 균형있게 다뤄볼까 합니다. 2023년에 행시 1차에 붙었고, 딜(M&A)이나 외감 업무가 낫지 않을까 싶어 금융권에서 간단히 사무직합니다.
  `;

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
