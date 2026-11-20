export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Vercel時代と同じく apex は www へ寄せる
    if (url.hostname === "moeki.org") {
      url.hostname = "www.moeki.org";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
