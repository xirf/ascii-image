import type { CalculateCharacterOptions } from "../types";

/**
 * Calculate the approximate number of characters needed to fill the view.
 * This is done by simulating the text on a canvas element.
 *
 * @param text - The text to measure.
 * @param fontSize - The font size in pixels.
 * @param lineHeight - The line height as a multiplier of the font size.
 * @param width - The width of the view.
 * @param height - The height of the view.
 * @param family - The font family.
 * @returns The approximate number of characters needed to fill the view.
 */
export default function calculateCharacterToFill(options: CalculateCharacterOptions): number {
    const { text, fontSize, lineHeight, width, height, family } = options;
    
    // Create a canvas and get its context.
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    // Set the font on the context.
    const formattedFamily = family.replaceAll(" ", "-").toLowerCase();
    ctx.font = `${fontSize}px ${formattedFamily}`;

    // Measure the width of the text.
    const textWidth = ctx.measureText(text).width;

    // Calculate the height of the text.
    const textHeight = fontSize * lineHeight;

    // Calculate the area of the text.
    const textArea = textWidth * textHeight;

    // Calculate the area of the view.
    const viewArea = width * height;

    // Calculate the number of characters needed to fill the view.
    const characters = Math.floor(viewArea / textArea);

    return characters;
}