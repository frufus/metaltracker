import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ConcertEntry from '@components/ConcertEntry/ConcertEntry';

import './concertlist.scss';

const ConcertList = (props) => {
	const [opened, setOpened] = useState('');
	return (
		<div className="o-concertlist">
			{props.concerts.map((concert) => {
				return (
					<ConcertEntry
						toggleEntry={() => (
							opened === concert.slug ? setOpened('') : setOpened(concert.slug)
						)}
						key={concert.slug}
						isOpen={opened === concert.slug}
						{...concert}
					/>
				);
			})}
		</div>
	);
};

ConcertList.propTypes = {
	concertTitle: PropTypes.string,
};

ConcertList.defaultProps = {
	siteTitle: ``,
};

export default ConcertList;
