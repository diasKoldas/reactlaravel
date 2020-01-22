import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';

window._ = require('lodash');
try {
    window.Popper = require('popper.js').default;
} catch (e) {}
window.axios = require('axios');
loadProgressBar();
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
  } else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}