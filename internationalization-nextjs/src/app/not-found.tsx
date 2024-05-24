'use client';

export default function NotFound() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="404" />
        <meta name="description" content="" />
        <title>404 - Page Not Found</title>
      </head>
      <body className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800">
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl font-semibold uppercase mb-2">Sorry, page not found</p>
          <p className="text-lg mb-4">
            The page you are looking for was moved, removed, renamed, or might never existed
          </p>
          <a href="/" className="px-8 py-3 border-2 border-black font-semibold uppercase tracking-widest text-black hover:bg-black hover:text-white">
            Go to homepage
          </a>
        </section>
      </body>
    </html>
  );
}
