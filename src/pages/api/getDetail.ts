import type { APIRoute } from "astro";
import supabase from "../../database/client";

export const GET: APIRoute = (async ({ url }) => {
    let userUrl = url.searchParams.get('url')
    let { data, error } = await supabase
        .from('project')
        .select('image, color, text, fontsize, fontfamily, lineheight, align')
        .eq('url', userUrl)

    if (error || data?.length === 0) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
})