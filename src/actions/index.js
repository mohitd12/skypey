import { SET_ACTIVE_USER_ID } from './types';

export const setActiveUserId = (user_id) => {
	return {
		type: SET_ACTIVE_USER_ID,
		payload: user_id
	};
};
