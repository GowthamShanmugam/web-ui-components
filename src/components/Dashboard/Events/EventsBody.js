import React from 'react';
import PropTypes from 'prop-types';

import { CardBody } from 'patternfly-react';

const EventsBody = ({ children, ...props }) => (
  <CardBody {...props} className="kubevirt-events__body">
    {children}
  </CardBody>
);

EventsBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default EventsBody;
