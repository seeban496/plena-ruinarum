import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# 플랫폼에 대한 고민

반갑습니다. 본인의 기준을 충족시키는 플랫폼이 없어, 직접 개설하게 되었어요.

medium은 모바일 환경에서 영어가 아닌 언어의 줄간격, 자간이 훼손되어 가독성이 낮아집니다. 특히 영어와 숫자 h1~h3은 굵은 고딕으로 표시됩니다. 그러나 한글은 얇은 셰리프로 표시됩니다. 영어, 한국어, 원어를 혼용하는 입장에서는 medium이 뇌관입니다.

obisidian publishing은 유료이고, 적어도 법인 영수증에 청구받는 이상 작성 허가를 받기 어렵겠습니다. 따라서 개인 신분으로 비교적 자유롭게 이용할 수 있는 coda.io, gitbook을 임시로 사용해보았습니다. 먼저 coda.io는 배포가 매우 용이했지만, 공개된 문서들만을 갈무리하여 관리하는 기능이 없었습니다. 또한 토글을 삽입하면 삽입할수록 속도가 노션에 수렴했습니다.  한편 gitbook은 목차 UX가 선형적이지 못했습니다. 무엇보다 버튼 UI가 있어, 시리즈 배포에 적합했습니다. 쓰고자 하는 글의 대부분은 단간이므로, 시리즈 버튼보다는 메타데이터 태그를 활용하여 관리하는 게 효과적일 것입니다.

다음, 애증의 노션입니다. 노션은 속도 때문에, 반영구 배포보다는 랜딩페이지로 활용하는 게 적절하다고 여겼습니다. 특히 Notion.so는 애초에 UI를 수식(KaTeX) 기능으로 고쳐야 하는 플랫폼이므로, 커스터마이징하기 어려웠습니다.

구글 사이트, 워드프레스, Canva 또한 블로그보다는 랜딩페이지를 만들기에 적합하다고 여겼습니다.

마지막으로, 저는 기존의 포털사이트 블로그, 카페, 티스토리, 워드프레스 등의 구매체 대응에 유연하지 못합니다. 사용 방법도 잘 모릅니다.

그리하여, node.js 기반의 gatsby로 CMS 웹을 구현했습니다. 이 웹사이트의 infer은 아랍어, 데바나가리, 키릴, 그리스, 한자, 에스체트&움라우트, 세디유, 타일랜드 언어를 지원합니다. 덕분에 가독성이 월등히 나아졌어요. (IBM의 Infer 폰트는 구글에서, 혹은 IBM에서 확인하실 수 있습니다.)

리액트를 github pages가 아니라 Vercel에서 배포했기에 정말 만족스럽습니다.

양질의 자료를 이제 권위, 권한 충돌 없이 자유롭게 공유할 수 있게 되어 기쁩니다. 고맙습니다.`;

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
