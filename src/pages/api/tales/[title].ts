import type { APIRoute } from "astro"
import path from "path"
import fs from "fs"

export const GET: APIRoute = async ({ params }) => {
    try {
        if (!params.title) return new Response(JSON.stringify({ message: "No title provided" }), { status: 400 })

        const content = fs.readFileSync(path.join(process.cwd(), "src", "assets", params.title + ".txt"), "utf-8");
        params.content = content;
        params.title = params.title.replaceAll('-', " ")

        return new Response(JSON.stringify(params))
    } catch (error: any) {
        return new Response(JSON.stringify({
            message: "Can't find " + params?.title?.replaceAll('-', " ") ?? "the tale",
            err: error.cause
        }), {
            status: 404
        })
    }

}