import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `### Intro

R1999

### Fave

**Forget-Me-Not**

He couldn’t get over his past and ended up twisted, he’s got that half-up hair, a snake motif, even a jabot, and he’s a bartender?

He doesn’t just look cold-blooded, he looks completely detached from his own emotions, like he’s rotted inside. But still, the way he manages to stay kind on the surface was nice to see. His whole vibe aligns perfectly with the things I like, too. 

What I liked was that his talent was overshadowed by his fixation on revenge (Trail). I wish he’d endure just a little more before becoming playable. And if it’s him… he must already know how meaningless ideology can be.
### Kin

Moldir, Nameday

Ever since that series of incidents, the whole family’s been scattered. So we don’t really get to see each other except on holidays like Thanksgiving or Christmas. I do miss them, but when we actually meet, we just end up fighting. I learned how to work way too early thanks to my family.
### DNI

I’ll be careful. But if one’s going to criticize someone, I just hope one could take responsibility for it. Real life is already exhausting, it’s too much if you let the online world drain you too.

I get that everyone needs an outlet for their emotions, but the consequences were always bigger than I’d think. My life’s already went rogue enough as it is… so do whatever you want. I no longer have any expectations or worries about my future.

### Langs

CN, DE, EN

Where I live now, English and Chinese are both official languages. I used to live somewhere where German was the native tongue. My parents got transferred abroad quite often.

### Ship

I don’t really have a favorite ship. But it’s not like I hate yuri, yaoi, straight stuff, or yume or anything. Literally I’m interested in other things.

### Other Interests

Pottery, paintings, tea, wine, books, perfume; the kind of things old folks with one foot in the grave would love.

### What do you usually wear?

I just throw on a coat and whatever feels right. It’s cold here. I don’t stick to neutral colors, wear whatever suits me. But I do like glamorous or slender styles.

### What’s your job?

I’m planning to quit. I keep begging them to let me resign, but they just tell me to get lost. I lothe them too.`;

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
