import { InitialStateProps, ActionTypes, ActionInterfaceProps } from './definitions';

const reducer = (state: InitialStateProps, action: ActionInterfaceProps) => {
	switch (action.type) {
		case ActionTypes.addToCart:
			if (action.payload) return { ...state, amount: state.amount + action.payload };
			return state;
		case ActionTypes.deleteCart:
			return { ...state, amount: 0 };
		default:
			return state;
	}
};

export default reducer;
