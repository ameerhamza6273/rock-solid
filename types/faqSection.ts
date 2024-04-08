import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface faqSection{
    headings: storyblokHeadings[];
    faq: faqArray[];
}

export interface faqArray{
    image: storyblokAsset;
    image2: storyblokAsset;
    headings: storyblokHeadings[];
    subTitle: storyblokButton[];
}