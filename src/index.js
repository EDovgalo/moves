const Loadable = require('react-loadable');

const app = require('./__app');

const port = 8000;

Loadable.preloadAll()
  .then(() => {
    app.listen(port, () => {
      console.info(`Express listening on port ${port}`);
    });
  });
