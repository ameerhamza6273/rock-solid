import { storyblokAsset, storyblokHeadings, storyblokButton} from './storyblokMain';

export interface aboutHeroSection{
    headings: storyblokHeadings[];
    actions:storyblokButton[];
    image1: storyblokAsset;
    image2: storyblokAsset;
    image3: storyblokAsset;
    iconBox:iconBoxArray[];
}

export interface iconBoxArray{
    text: string;
}