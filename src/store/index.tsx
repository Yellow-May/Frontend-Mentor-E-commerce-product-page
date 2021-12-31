import React from 'react';
import reducer from './reducer';
import { InitialStateProps, ActionsProps, ActionTypes } from './definitions';

const initialState: InitialStateProps = {
	amount: 0,
};

export const AppContext = React.createContext(
	{} as { state: InitialStateProps; actions: ActionsProps }
);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const actions: ActionsProps = {
		addToCart: payload => dispatch({ type: ActionTypes.addToCart, payload }),
		deleteCart: () => dispatch({ type: ActionTypes.deleteCart }),
	};

	return <AppContext.Provider value={{ state, actions }}> {children} </AppContext.Provider>;
};
