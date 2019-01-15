import axios from 'axios';
import * as searchView from '../views/searchView';
import { elements } from '../views/base';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9bc9bc31a0ede2e40e7fb904a70faeeb';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(recipes);
    } catch (error) {
      alert(error);
    }
  }
}
