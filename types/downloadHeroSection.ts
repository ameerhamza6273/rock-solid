import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface downloadHeroSection{
    headings: storyblokHeadings[];
    applicationForm: applicationFormArray[];
}

export interface applicationFormArray{
    image: storyblokAsset;
    image2: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton[];
}