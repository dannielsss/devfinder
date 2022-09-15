import React from 'react';
import { useSelector } from 'react-redux';
import { AlertBox } from './styles';

function GlobalAlert() {
	const message = useSelector((state) => state.alert.message);

	return <>{message ? <AlertBox>{message}</AlertBox> : null}</>;
}

export default GlobalAlert;
