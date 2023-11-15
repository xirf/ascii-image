export { };

declare global {
    interface String {
        toSentenceCase(): string;
    }
}

declare PageState = {
    image: string,
    color: string,
    text: string,
    fontSize: number,
    fontFamily: string,
    lineHeight: number,
    align: "left" | "center" | "right" | "justify"
}