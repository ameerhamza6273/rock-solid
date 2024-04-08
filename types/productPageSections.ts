import { storyblokAsset, storyblokButton, storyblokHeadings } from './storyblokMain';

export interface productsPageSections{
    followCardHeading: storyblokHeadings[];
    screedCardHeading: storyblokHeadings[];
    followCards: CardsArray[];
    screedCards: CardsArray[];
}

export interface CardsArray{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    actions: storyblokButton[];
    subTitle: string;
}