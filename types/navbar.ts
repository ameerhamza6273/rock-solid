import {
  storyblokAsset,
  storyblokAction,
  storyblokMenuLink,
  storyblokButton,
} from "./storyblokMain";

export interface storyblokNavbar {
  body: bodyArray[];
  logo: storyblokAsset;
  headerItems: storyblokMenuLink[];
  actions: storyblokButton[];
  buttons:storyblokButton;
}

export interface bodyArray {
  phoneNumber:string;
  placeOrder:string;
  callUs:string;
  icon: storyblokAsset;
  logo: storyblokAsset;
  headerItems: storyblokMenuLink[];
}
