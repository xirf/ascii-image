import { atom } from "nanostores";

export interface PageState {
    image: null | String,
    color: String,
    text: null | String,
    font: {
        name: String,
        size: number
    }
}


export const pageState = atom<PageState>({
    image: null,
    color: "#1e2336",
    text: null,
    font: {
        name: "arial",
        size: 12
    }
})