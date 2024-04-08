import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface customServices{
    [key: string]: any;
    content: contentObj
}

export interface contentObj{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    action: storyblokButton;
    text: string;
}