import { legacy_createStore as createStore } from "redux";

let initialState = {
	title: "Title",
	count: 0,
};

// store, action
const store = createStore((state = initialState, action) => {
	switch (action.type) {
		case "SET_TITLE": {
			return state;
		}
		default:
			return state;
	}
});
export const setTitle = () => ({ type: "SET_TITLE" });

window.store = store;
export default store;
