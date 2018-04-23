import { ADD_ARTICLE } from "../constants/action_types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
