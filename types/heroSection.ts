import { Title } from './../.nuxt/components.d';
import { storyblokAsset, storyblokHeadings, storyblokButton } from "./storyblokMain";

export interface storyblokHeroSection {
  image: storyblokAsset;
  previmage: storyblokAsset;
  nextimage: storyblokAsset;
  headings: storyblokHeadings[];
  type: "home" | "packages" | "tour";
  actions: storyblokButton[];
  heroslider:herosliderArray[];
}

export interface herosliderArray{
  title: string;
  headings: storyblokHeadings[];
  action: storyblokButton[];
}