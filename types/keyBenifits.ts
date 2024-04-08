import { storyblokHeadings , storyblokAsset} from "./storyblokMain"

export interface storyblokKeyBenifits{
    headings: storyblokHeadings[];
    list: listArray[];
    image: storyblokAsset;
}

export interface listArray{
    text1: string;
    text2: string;
}