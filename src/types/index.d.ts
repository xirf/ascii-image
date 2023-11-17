declare global {
    interface String {
        toSentenceCase(): string;
    }
}

interface PageState {
    image: string,
    color: string,
    text: string,
    fontSize: number,
    fontFamily: string,
    lineHeight: number,
    align: "left" | "center" | "right" | "justify"
}

interface CalculateCharacterOptions {
    text: string;
    fontSize: number;
    lineHeight: number;
    width: number;
    height: number;
    family: string;
}

export type { PageState, CalculateCharacterOptions };