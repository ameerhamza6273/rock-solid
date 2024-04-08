export const useNavData = () => useState("navData", () => null);
export const useFooterData = () => useState("footerData", () => null);

import storyblokApi from "../plugin/useStoryblokApi";
export async function getNavData() {
  try {
    const { data } = await storyblokApi.get("cdn/stories/config/pageheader", {
      version: "draft",
      resolve_links: "url",
    });
    const navData = useNavData();
    navData.value = data.story.content;
  } catch (error) {
    console.log("error in getting nav data", error);
  }
}

export async function getFooterData() {
  try {
    const { data } = await storyblokApi.get("cdn/stories/config/pagefooter", {
      version: "draft",
      resolve_links: "url",
    });

    const footerData = useFooterData();
    footerData.value = data.story.content;
  } catch (error) {
    console.log("error in getting nav data", error);
  }
}

