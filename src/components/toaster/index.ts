import { Toaster } from './Toaster';

// eslint-disable-next-line import/no-mutable-exports
let toaster: Toaster = null;
if (!toaster) {
  toaster = new Toaster();
}
export default toaster;
