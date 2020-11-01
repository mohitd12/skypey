import React from 'react';
import Header from '../../components/Header';

import store from '../../store';

import './index.css';

function ChatWindow({ activeUserId }) {
	const { contacts } = store.getState();

	const activeUser = contacts[activeUserId];

	return (
		<div className="root">
			<Header user={activeUser} />
		</div>
	);
}

export default ChatWindow;
