import type { APIRoute } from "astro";
import supabase from "../../database/client";

export const POST: APIRoute = (async ({ request }) => {
    let { image, color, text, fontSize, fontFamily, lineHeight, align, } = await request.json();

    let { data, error } = await supabase
        .from('project')
        .insert([ {
            uid: "request.headers.get('uid')",
            image,
            color,
            text,
            fontsize: fontSize,
            fontfamily: fontFamily,
            lineheight: lineHeight,
            align,
        } ])


    if (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 201 });
})