import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface contactUs{
    headings: storyblokHeadings[];
    text: string;
    iconbox: iconboxArray[];
    time: iconboxArray[];
    outOfHours: storyblokHeadings[];
    closedText: storyblokHeadings[];
    headingClosed: storyblokHeadings[];
    text2: string;
    form: [];
}

export interface iconboxArray{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    text: string;
    text1: string;
    text2: string;
}