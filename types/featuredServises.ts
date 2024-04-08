import { storyblokHeadings , storyblokAsset , storyblokButton} from './storyblokMain';

export interface featuredServices{
    headings: storyblokHeadings[];
    previmage: storyblokAsset;
    nextimage : storyblokAsset;
    services: servicesArray[];
    actions: storyblokButton[];
}

export interface servicesArray{
    content: contentObj;
    title: string;
}

export interface contentObj{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton[];
    subTitle: string;
}