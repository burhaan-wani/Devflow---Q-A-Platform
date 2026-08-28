## Next.js Basic to advance

- [☑️] What is nextjs, what problem it solves.
- [☑️] Routing in nextjs.
  - Folder based routing -> about.
  - Nested routes -> dashboard/user.
  - Dynamic routes -> users/[id].
  - Group routes -> (root)/users/[id].
- [☑️] Different rendering strategies.
  - CSR(client side regeneration):
    - Pages are build during build process.
    - Result is cached and the cached data is shared while visiting the website in the form CDN's.
    - Good for website where content remains same not dynamic.
  - ISR(incremental static site regeneration):
    - Works the same way as SSR.
    * Pages are build during build process.
    * Result is cached and the cached data is shared while visiting the website in the form CDN's.
    * The content is revalidated after a certain period has passed like 1hr, 3hr and so on.
    * Good for sites where content doesn't change very often.
  - SSR(server-side rendering):
    - Data is fetched on the server and pages are built at the server-side.
    * The result after building the pages is shared to the client.
    * Good for sites where content changes very often.
  - PPR(partial pre-rendering):
    - A skeleton/placeholder is build during the build process for the dynamic content.
    * Static content is prefilled during the build process.
    * When the page loads the placeholders for dynamic content is filled with the fetched data.
    * This gives us the best of the both worlds (CSR, SSR).

* [☑️] API Routes.
* Assets & Metadata.
* Client and Server Components -> By default components render on server side.
