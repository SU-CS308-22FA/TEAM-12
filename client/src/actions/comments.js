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