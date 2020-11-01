import React, { useState } from 'react';

import EmptyScreen from '../EmptyScreen';
import ChatWindow from '../../containers/ChatWindow';

import './index.css';

function Main({ user, activeUserId }) {
	const renderComponent = () => {
		if (!activeUserId) return <EmptyScreen user={user} />;
		return <ChatWindow activeUserId={activeUserId} />;
	};

	return <main className="Main">{renderComponent()}</main>;
}

export default Main;
