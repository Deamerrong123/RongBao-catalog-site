export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/pdf') {
      const pdfUrl = env.PDF_URL || 'REPLACE_WITH_R2_PDF_URL';
      if (pdfUrl === 'REPLACE_WITH_R2_PDF_URL') {
        return new Response('PDF URL not configured. Set PDF_URL in wrangler.jsonc vars.', { status: 503 });
      }
      return Response.redirect(pdfUrl, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
