import { ClusterOverview } from '../ClusterOverview';
import { healthData } from '../Health/fixtures/Health.fixture';
import { eventsData } from '../Events/fixtures/Events.fixture';
import { consumersData } from '../Consumers/fixtures/Consumers.fixture';
import { inventoryData } from '../Inventory/fixtures/Inventory.fixture';

import { detailsData, complianceData, capacityStats, utilizationStats } from '..';

export default [
  {
    component: ClusterOverview,
    props: {
      detailsData,
      healthData,
      capacityStats,
      complianceData,
      eventsData,
      utilizationStats,
      consumersData,
      inventoryData,
    },
  },
  {
    component: ClusterOverview,
    name: 'Loading overview',
    props: {
      detailsData: { loaded: false },
      healthData: { loaded: false },
      capacityStats: { loaded: false },
      complianceData: { loaded: false },
      eventsData: { loaded: false },
      utilizationStats: { loaded: false },
      consumersData: { loaded: false },
      inventoryData: { loaded: false },
    },
  },
];
