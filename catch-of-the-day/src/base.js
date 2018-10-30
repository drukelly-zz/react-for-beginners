import Rebase from 're-base';
import firebase, { initializeApp } from 'firebase';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC18-3xv2MpEI5fiwa2NyqAja0JxVXk00w",
  authDomain: "catch-of-the-day-dk-953d3.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dk-953d3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base;