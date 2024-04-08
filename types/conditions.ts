import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface conditions{
    headings: storyblokHeadings[];
    list:listArray[];
    dotList: listArray[];
    finalList: listArray[];
}

export interface listArray{
    headings: storyblokHeadings[];
    text1: string;
}