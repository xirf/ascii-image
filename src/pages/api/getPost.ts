import type { APIRoute } from "astro";
import supabase from "../../database/client";

export const GET: APIRoute = (async ({ url }) => {
    let UID = url.searchParams.get('uid')
    let { data, error } = await supabase
        .from('project')
        .select('image, text, url, id')
        .eq('uid', UID)

    if (error || data?.length === 0) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
})