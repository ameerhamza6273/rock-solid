import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface storyblokChooseUs{
    image1: storyblokAsset;
    image2: storyblokAsset;
    image3: storyblokAsset;
    headings: storyblokHeadings[];
    iconBox: chooseIconBoxArray[];
    actions: storyblokButton[];
}

export interface chooseIconBoxArray{
    image: storyblokAsset;
    text: string;
}