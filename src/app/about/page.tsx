import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `### Intro

성인/女/R1999 주력

Lv.50, seom, 706745116

너나 나나 할 것 없이 꼭 같은 운명이 기다리고 있다. 죄없는 사람이나 죄있는 사람이나, 선한 사람이나 악한 사람이나, 깨끗한 사람이나 더러운 사람이나, 제사를 드리는 사람이나 제사를 드리지 않는 사람이나 마찬가지다. 선한 사람이라고 해서 죄인과 다를 바 없고 하느님 앞에서 맹세를 하는 사람이라고 해서 맹세를 꺼려하는 사람과 다를 바 없다. 모든 사람이 같은 운명을 당하는데 하늘 아래서 벌어지는 일 중에서 잘못되지 않은 것이 무엇이 있겠는가? 그러므로 사람들의 마음은 악으로 차고 넘쳐 얼빠진 생각을 하며 살다가 죽을 수밖에 없다. 사람이란 산 자들과 어울려 지내는 동안 희망이 있다. 그래서 죽은 사자보다 살아 있는 강아지가 낫다고 하는 것이다. 산 사람은 제가 죽는다는 것이라도 알지만 죽고 나면 아무것도 모른다. 다 잊혀진 사람에게 무슨 좋은 것이 돌아오겠는가? 사랑도 미움도 경쟁심도 이미 사라져버려 하늘 아래서 벌어지는 어떤 일에도 간섭할 길은 영원히 없어진 것이다. 그러니 네 몫의 음식을 먹으며 즐기고 술을 마시며 기뻐하여라. (...) 거룩한 것을 개에게 주지 말고 진주를 돼지에게 던지지 마라. 그것들이 발로 진주를 짓밟고 돌아서서 너희를 물어뜯을지도 모른다.

러시아 정교회 성경을 한국어로 번역한 것이다. 맨 마지막 문장은 마태의 복음서, 나머지는 전도서이다.

진주를 주든 쓰레기를 주든, 행위에 대한 귀책은 내게 있으니 물어뜯기고 말고는 상관없다. 다만 현재는 건강 회복력이 부족했다. 이러면 산 자들이랑 어울려 지내도 가망이 없다. 지금의 나는 한국 밖에서 돈을 다 쓰고 있다. 본인과 어긋난 사람들은, 누가 잘못했든 끝까지 서로 비틀려야 한다.

Questo giorno di tormenti, e di follia, in contenti e in allegria solo le ore possono terminare.`;

export async function generateMetadata() {
  return {
    title: "saluteforXusers",
    description: "Different blog post categories",
    openGraph: {
      title: "saluteforXusers",
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
