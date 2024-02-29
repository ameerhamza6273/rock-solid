import { storyblokAsset, storyblokHeadings, storyblokButton } from "../types/storyblokMain";

export interface storyblokHeroSection {
  bgAsset: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  button: storyblokButton[];
}
