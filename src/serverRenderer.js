import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import path from 'path';
import App from './app/App';
import configureStore from './store';
import { fetchMovies } from './store/movies/actions';

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
    const modules = [];
    const store = configureStore(params);

    const statsFile = path.resolve('./public/loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });

    Promise.resolve(store.dispatch(fetchMovies(params.movies.queryParams)))
      .then(() => {
        const context = {};

        const renderRoot = () => (
          <ChunkExtractorManager extractor={extractor}>
            <App
              context={context}
              location={req.url}
              Router={StaticRouter}
              store={store}
              />
          </ChunkExtractorManager>
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
        const serialization = JSON.stringify(finalState)
          .replace(/</g, '\\u003c');

        const scriptTags = extractor.getScriptTags();
        const styleTags = extractor.getStyleTags();

        res.send(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My App</title>
             ${styleTags}
             <link href="/main.css" rel="stylesheet"/>
          </head>
          <body>
            <div id="root">${htmlString}</div>
            <script src="main.bundle.js"></script>
        ${scriptTags}
      
            <script type="text/javascript" charSet="utf-8">
              window.PRELOADED_STATE = ${serialization}
            </script>
          </body>
        </html>
      `);
      });
  };
}
