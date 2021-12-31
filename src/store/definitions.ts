export interface InitialStateProps {
	amount: number;
}

export interface ActionsProps {
	addToCart: (payload: number) => void;
	deleteCart: () => void;
}

export enum ActionTypes {
	addToCart = 'ADD_TO_CART',
	deleteCart = 'DELETE_CART',
}

export interface ActionInterfaceProps {
	type: ActionTypes;
	payload?: number;
}
