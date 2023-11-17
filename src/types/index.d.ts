export { };

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