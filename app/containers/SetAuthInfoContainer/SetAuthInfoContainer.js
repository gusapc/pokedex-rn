import React from 'react';
import { setAuthInfo } from "pokedex-rn/app/actions/AuthActions";
import { useDispatch } from 'react-redux';
export default function SetAuthInfoContainer (props) {	
	const dispatch = useDispatch();
	const setAuthInfoFromScreen =  (localValue) => dispatch(setAuthInfo(localValue));

	return (
		<React.Fragment>
		{
			props.children(setAuthInfoFromScreen)
		}
		</React.Fragment>
	);
}