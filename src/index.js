const app = require('./__app');

const port =  8000;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
