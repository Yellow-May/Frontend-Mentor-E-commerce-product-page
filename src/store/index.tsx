import React from 'react';
import reducer from './reducer';
import { InitialStateProps, ActionsProps } from './definitions';

const initialState: InitialStateProps = {
	amount: 0,
};

export const AppContext = React.createContext(
	{} as { state: InitialStateProps; actions: ActionsProps }
);

export const AppProvider: React.FC = ({ children }) => {
	const [state] = React.useReducer(reducer, initialState);

	const actions: ActionsProps = {};

	return <AppContext.Provider value={{ state, actions }}> {children} </AppContext.Provider>;
};
