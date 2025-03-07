import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# 플랫폼에 대한 고민

반갑습니다. 본인의 기준을 충족시키는 플랫폼이 없어, 직접 개설하게 되었어요.

미디엄은 모바일 환경에서 영어가 아닌 언어의 줄간격, 자간(글자 간의 간격)이 훼손됩니다. 반응형 웹은 구현 가능하나, 제목-내용 간 글꼴 체계가 각각 고딕-셰리프로 상호 불일치합니다. 저의 경우 다양한 언어를 사용할 예정입니다.

대부분의 경우 한문을 표기하면 명조체로 표기되므로, infer 등의 서체가 필요했습니다. infer은 아랍어, 데바나가리,키릴, 그리스, 한자, 에스체트&움라우트, 세디유 모두 지원합니다.

obisidian publishing은 월정액제입니다(반면 글로 얻는 수익은 $0입니다). 이러면 방안은 세 가지가 남게 됩니다: coda.io를 사용하거나, gitbook을 사용하거나, 직접 만들어야 하는 것이에요.  coda.io는 공개된 문서들만을 갈무리하여 관리하는 기능이 없었다. 반면 배포는 타 매체를 압도할 정도로 빠르고 간편합니다.

쓰고자 하는 글의 대부분은 시리즈보다는 단간이므로, 태그를 활용하여 관리하는 게 효과적일 것입니다. gitbook은 시리즈 배포에 적합했습니다.

한편 정적 웹의 고질적인 문제일 수도 있습니다. 노션을 빼먹을 수가 없었어요. 노션은 특히, 여전히 끔찍하게 느립니다. 무엇보다 Notion.so는 애초에 UI를 TeX으로 고쳐야 하는 플랫폼입니다.

stacks, confluence 등도 고려해보았으나, 팀 혹은 쓰기 목적의 플랫폼이 아니었습니다. 무엇보다 절차를 간소화해야 필자 또한 시간을 글쓰기에 온전히 투자할 수 있겠습니다.

이러한 의사결정 끝에, 하나는 gatsby, 다른 하나는 Figma + Zeplin을 사용해보기로 하였어요. 관련 이슈 리포트는 만들다가 겪었던 고충을 간단히 올려드릴 예정이에요. 이 모든 단간은 테스트 메시지인데, 잘 뜨나 한 번 알아봐야겠습니다.`;

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
