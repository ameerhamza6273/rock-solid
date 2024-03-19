import { storyblokAsset, storyblokAction, storyblokHeadings } from "./storyblokMain";

export interface products {
  image: storyblokAsset;
  headings: storyblokHeadings[];
  subTitle:string;
  actions: storyblokAction[];
}