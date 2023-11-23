export const prerender = false;


import type { APIRoute } from "astro"
import path from "path"
import fs from "fs"

export const GET: APIRoute = async ({ url }) => {
    let title = url.searchParams.get('title') || undefined;
    
    try {

        if (!title) return new Response(JSON.stringify({ message: "No title provided" }), { status: 400 })

        const content = fs.readFileSync(path.join(process.cwd(), "src", "assets", title + ".txt"), "utf-8");

        let tales = {
            content: content.replaceAll('\n', "").replaceAll('\r', ""),
            title: title.replaceAll('-', " ")
        }

        return new Response(JSON.stringify(tales))
    } catch (error: any) {
        return new Response(JSON.stringify({
            message: "Can't find " + title?.replaceAll('-', " ") ?? "the tale",
            err: error.cause
        }), {
            status: 404
        })
    }

}