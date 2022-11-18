export class UnsplashApi {
  #API_KEY = 'gEopSExvxGRBacvbCX5khX4G6aHTWmEvx0oJJ4DvPUk';
  #page = 1;
  #per_page = 25;
  #query = '';
  #total_photos = 0;

  getPhotos() {
    return fetch(
      `https://api.unsplash.com/search/photos?client_id=${this.#API_KEY}&page=${
        this.#page
      }&query=${this.#query}&per_page=${this.#per_page}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
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
