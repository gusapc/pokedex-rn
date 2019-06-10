import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(routeName, params) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		})
	);
}
function push(routeName, params) {
	navigator.dispatch(
		StackActions.push({
			routeName,
			params,
		})
	);
}

function goBack(routename){
	const backAction = NavigationActions.back({
		key: routename
	})
	navigator.dispatch(backAction);
}

function pop() {
	navigator.dispatch(StackActions.pop());
}

export default {
	navigate,
	push,
	pop,
	setTopLevelNavigator,
	goBack
};