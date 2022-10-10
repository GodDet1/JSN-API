import { createReducer } from '@reduxjs/toolkit';
import { updatePagination } from '../Action/actions';

const preloadState = {
  pagination: {
    page: 1,
    per_page: 5,
  },
};

const superHeroReducer = createReducer(preloadState, {
  [updatePagination]: (state, action) => {
    if (action.payload.page < 1) {
      return {
        ...state,
        pagination: { page: 1, per_page: 5 },
      };
    }

    return {
      ...state,
      pagination: { ...state.pagination, ...action.payload },
    };
  },
});

export default superHeroReducer;
