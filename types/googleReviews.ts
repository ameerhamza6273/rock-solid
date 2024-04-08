import { storyblokButton , storyblokAsset, storyblokHeadings } from "./storyblokMain";
export interface storyblokGoogleReview {
  raiting: storyblokAsset;
  text1: string;
  text2: string;
  image: storyblokAsset;
  headings: storyblokHeadings[];
  actions: storyblokButton[];
}

export interface googleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  relative_time_description: string;
  time: number;
  translated: false;
  text: string;
  rating: number;
}
