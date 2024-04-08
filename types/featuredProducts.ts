import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface featuredProducts{
    headings: storyblokHeadings[];
    products: productsArray[];
    actions: storyblokButton[];
}

export interface productsArray{
    content: contentObj;
}

export interface contentObj{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton[];
    subTitle: string;
}