import { createStore } from 'vuex';
import { Store } from './types';

export const store = createStore({
  state() {
    return {
      currentPage: "" as string
    }
  },
  mutations: {
    setCurrentPage(state: Store, value: string): void {
      state.currentPage = value
    },
  }
})