import React from 'react';

import './index.css';
import User from '../../containers/User';

function Sidebar({ contacts }) {
	return (
		<aside className="Sidebar">
			{contacts.map((user) => {
				return <User key={user.user_id} user={user} />;
			})}
		</aside>
	);
}

export default Sidebar;
