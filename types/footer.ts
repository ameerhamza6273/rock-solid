import { storyblokAsset, storyblokButton, storyblokHeadings, storyblokMenuLink } from "./storyblokMain";

export interface Footer {
  body: bodyArray[];
  logo: storyblokAsset;
  linkText:string;
  documentText:string;
  privacyText:string;
  companyLinks: storyblokMenuLink[];
}

export interface bodyArray{
  areas: storyblokMenuLink[];
  address: string;
  phoneNumber: string;
  email: string;
  links: linksArray[];
}

export interface linksArray{
  image: storyblokAsset;
}