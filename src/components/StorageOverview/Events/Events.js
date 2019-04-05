import React from 'react';

import PropTypes from 'prop-types';

import {
  DashboardCard,
  DashboardCardBody,
  DashboardCardHeader,
  DashboardCardTitle,
  DashboardCardTitleHelp,
} from '../../Dashboard/DashboardCard';
import { StorageOverviewContextGenericConsumer } from '../StorageOverviewContext';

export const Events = ({ Component }) => (
  <DashboardCard>
    <DashboardCardHeader>
      <DashboardCardTitle>Events</DashboardCardTitle>
      <DashboardCardTitleHelp>help for events</DashboardCardTitleHelp>
    </DashboardCardHeader>
    <DashboardCardBody className="kubevirt-events__body">
      <Component />
    </DashboardCardBody>
  </DashboardCard>
);
Events.defaultProps = {
  Component: React.Fragment,
};

Events.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

const EventsConnected = () => <StorageOverviewContextGenericConsumer Component={Events} dataPath="eventsData" />;

export default EventsConnected;
