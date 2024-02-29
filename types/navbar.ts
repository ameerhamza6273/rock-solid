import {
  storyblokAsset,
  storyblokAction,
  storyblokMenuLink,
  storyblokButton,
} from "./storyblokMain";

export interface storyblokNavbar {
  logo: storyblokAsset;
  headerItems: storyblokMenuLink[];
  actions: storyblokAction;
  buttons:storyblokButton;
}
