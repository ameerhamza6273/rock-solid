import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface featuredOurServices{
    headings: storyblokHeadings[];
    services: servicesArray[];
}

export interface servicesArray{
    content: contentObj;
}

export interface contentObj{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton[];
    subTitle: string;
}