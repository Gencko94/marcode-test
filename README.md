# Marcode test documentation

Project was initialized with `create-next-app` and is using Next-JS 12 and Typescript .

Styling library of choice : `Material-UI V5`.
Data fetching libraries of choice : `axios` and `react-query`.

### Reason of choosing `Material-UI` as a styling library :

Material-UI is great for doing quick projects. Despite the negative opinions regarding it's performance, the V5 version has accomplished a 50% performance boost than it's successor. We can also increase the performance by optimizing the component writing `styled-components` like syntax. a lot lighter and faster than using the built-in components.

For large and complex projects it's also a great tool because it saves you a lot of the hard work. also it's pretty customizable.

### Reason of choosing `react-query` as a fetching library :

React query provides high quality UX and DX. It allows us to cache the responses and set cache durations which in turn can and will reduce the calls to the server. and that is the Main goal of the MVP.

# Data Fetching Strategy

## Home Page :

- CSR (Client side rendering) was used to render the home page contents. we're having benefit from using the cached fetched data. this way each time the user visits the home page he's being served the cached data instead of hitting the server.
- 3 minutes is the stale time for the fetched data.

#### Why not use SSR (Server Side Rendering) ?

Using this approach is great . especially for SEO . but the main drawback is the data will be re-fetched each time the user finishes reading an article and goes back to the main page.

**_If we're OK with this drawback then this approach should fit the best_**.

## Single article Page :

- SSG (Static site generation) was used to generate the articles into HTML files at build time, which is great for SEO and page speed . I decided to generate the first page of the articles to avoid high build times.
- The pages that are not generated at build time can be still generated on request the first time a user visits it. and will stay generated until a new build is set up.

## Article comments section :

- Regular CSR (Client side rendering) data fetching strategy was used to fetch the comments after the page loads. this approach makes sure that the user sees up-to-date comments. We can also have a re-fetch interval set to fetch new comments every certain amount of time.
# Website Performance :

- A Google lighthouse test was performed and results were the following : 
## Home Page : 

![homepage.jpg](https://i.postimg.cc/PqhC99rM/homepage.jpg)

- Performance can probably be increased when SSR is used because of the cumulative shift layout in the skeleton loader.
## Single Article page : 

[![Single-article.jpg](https://i.postimg.cc/jjQ7jKk9/Single-article.jpg)](https://postimg.cc/06jQWgvd)

