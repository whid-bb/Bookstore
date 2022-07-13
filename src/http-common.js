import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vxm4Jc6zyGlyfqv278tx/books',
  headers: {
    'Content-type': 'application/json',
  },
});
