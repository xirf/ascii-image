export const prerender = false;

import type { APIRoute } from "astro";
import supabase from "../../database/client";
import { readFileSync } from "fs";
import path from "path"


export const DELETE: APIRoute = (async ({ url }) => {
    let params = url.searchParams


    let { data, error } = await supabase
        .from('project')
        .delete()
        .eq('id', params.get('id'))
        .eq('uid', params.get('uid'))

    if (error) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 500 });
    }


    /**
     * The data is deleted from database but the image is still in the storage
     * This because imgbb didn't provide delete image api
     * So we need to delete the image manually later
     * that's why we return 202 (Accepted)
     */
    return new Response(JSON.stringify({ data }), { status: 202 });
})

export const POST: APIRoute = (async ({ request }) => {
    return new Response(JSON.stringify({
        content: (await readFileSync(path.join(process.cwd(), "src", "assets", "template.html"), "utf-8"))
    }))
})