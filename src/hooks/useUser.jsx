import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleAlert } from "src/reducers/alertReducer";
import { loading, notfound, searchUser } from "src/reducers/searchReducer";

export const useUser = () => {
  const dispatch = useDispatch();

  const findUser = async (searchValue) => {
		dispatch(loading());
		dispatch(toggleAlert(''));
		try {
			const res = await axios.get(`https://api.github.com/users/${searchValue}`);
			dispatch(searchUser(res.data));
			dispatch(toggleAlert(''));
			dispatch(notfound(false))
			dispatch(loading());
		} catch (error) {
			dispatch(loading());
			if (error.response.status === 404) {
				dispatch(notfound(true))
			} else if (error.response.status === 0) {
				dispatch(toggleAlert('Network Error'));
			}
		}
	};

  return { findUser }
}