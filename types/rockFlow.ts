import { storyblokHeadings , storyblokAsset} from "./storyblokMain"

export interface storyblokRockFlow{
    headings: storyblokHeadings[];
    list: listArray[];
    image: storyblokAsset;
    text: string;
}

export interface listArray{
    text1: string;
    text2: string;
}