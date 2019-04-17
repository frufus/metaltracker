import PropTypes from 'prop-types';
import React from 'react';

import './richcontent.scss';

const RichContent = (props) => {
	return (
		<div className="m-richcontent" dangerouslySetInnerHTML={{ __html: props.content }}/>
	);
};

RichContent.propTypes = {
	content: PropTypes.node.isRequired,
};

RichContent.defaultProps = {
};

export default RichContent;
