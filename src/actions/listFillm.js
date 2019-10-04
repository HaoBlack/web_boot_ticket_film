import * as types from "../actionTypes/index";
import axios from "axios";

// export const convertAddToEdit = () => {
//   return {
//     type: types.CONVERT_ADD_TO_EDIT
//   };
// };

// export const convertEditToAdd = () => {
//   return {
//     type: types.CONVERT_EDIT_TO_ADD
//   };
// };

export const GetListFilms = () => {
  return dispatch => {
    axios
      .get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05")
      .then(res => {
        // console.log(res);
        dispatch({
          type: types.LIST_FILMS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };
};
