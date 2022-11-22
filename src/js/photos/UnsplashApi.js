import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] =
  'Client-ID gEopSExvxGRBacvbCX5khX4G6aHTWmEvx0oJJ4DvPUk';

export class UnsplashApi {
  #page = 1;
  #per_page = 25;
  #query = '';
  #total_photos = 0;

  async getPhotos() {
    const { data } = await axios.get(
      `search/photos?page=${this.#page}&query=${this.#query}&per_page=${
        this.#per_page
      }`
    );
    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  setTotal(total) {
    this.#total_photos = total;
  }

  morePagesExists() {
    return this.#page < Math.ceil(this.#total_photos / this.#per_page);
  }
  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 1;
  }
}
