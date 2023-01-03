import * as api from '../axios/commentaxios.js';
import { COMMENT} from '../constants/actionTypes.js';

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const commentPostForPos = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment1(value, id);

    return data.comments1;
  } catch (error) {
    console.log(error);
  }
};