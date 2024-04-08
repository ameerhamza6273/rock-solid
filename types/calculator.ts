import { storyblokAsset, storyblokHeadings } from './storyblokMain';

export interface calculator{
    tabs: tabsArray[];
}

export interface tabsArray{
    image: storyblokAsset;
    text: string;
    headings: storyblokHeadings[];
}
