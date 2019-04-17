import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import 'moment/locale/de';
import { Link } from 'gatsby';

import './concertentry.scss';

const ConcertEntry = (props) => {
	console.log('prop', props);
	let date = moment.unix(props.date).format('DD.MM.YYYY');

	let entryTime = moment.unix(props.entryTime).format('HH:mm');
	let startTime = moment.unix(props.startTime).format('HH:mm');
	return (
		<div className="m-concertentry">
			<div className="m-concertentry__head" onClick={props.toggleEntry}>
				<span className="m-concertentry__date">{date}</span>
				<span className="m-concertentry__title">{props.title}</span>
				<div className="m-concertentry__locations">
					{props.locationConnection.entries.map(
						(location) => <Link to={`/location/${location.slug}`} key={location.slug}>{location.title}</Link>)}
				</div>
			</div>
			{props.isOpen &&
			<div className="m-concertentry__body" onClick={props.toggleEntry}>
				<div className="m-concertentry__bands">
					{props.bandsConnection.entries.map((band) => <Link to={`/band/${band.slug}`} key={band.slug}>{band.title}</Link>)}
				</div>
				<div className="m-concertentry__times">
					<span className="m-concertentry__entryTime">Einlass: {entryTime} Uhr</span>
					<span className="m-concertentry__startTime">Beginn: {startTime} Uhr</span>
				</div>
				<div classame="m-concertentry__description" dangerouslySetInnerHTML={{ __html: props.info.content }}/>
			</div>
			}
		</div>
	);
};

ConcertEntry.propTypes = {
	isOpen: PropTypes.bool
};

ConcertEntry.defaultProps = {
	isOpen: false
};

export default ConcertEntry;
