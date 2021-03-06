import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './app/App';
import configureStore from './store';
import { fetchMovies } from './store/movies/actions';

function renderHTML(html, preloadedState) {
  return `
          <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState)
    .replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.bundle.js"></script>
        </body>
      </html>
  `;
}

const params = {
  movies: {
    queryParams: {
      searchBy: 'title',
      sortOrder: 'asc',
    },
  },
};

export default function serverRenderer() {
  return (req, res) => {
    if (req.originalUrl.includes('search/')) {
      const searchTerm = req.originalUrl.split('search/')[1];
      params.movies.queryParams.search = decodeURI(searchTerm);
    }

    const store = configureStore(params);

    Promise.resolve(store.dispatch(fetchMovies(params.movies.queryParams)))
      .then(() => {
        const context = {};

        const renderRoot = () => (
          <StaticRouter location={req.url} context={context}>
            <App
              store={store}
              />
          </StaticRouter>
        );

        renderToString(renderRoot());

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const htmlString = renderToString(renderRoot());
        const finalState = store.getState();

        res.send(renderHTML(htmlString, finalState));
      })
      .catch(e => console.error(e));
  };
}
