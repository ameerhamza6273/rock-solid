import { storyblokButton, storyblokHeadings, storyblokAsset} from "./storyblokMain"

export interface storyblokOurTeam {
    headings: storyblokHeadings[];
    cards: cardsArray[];
    actions: storyblokButton[];
}

export interface cardsArray{
    image: storyblokAsset;
    headings: storyblokHeadings[];
    subTitle: string;
}