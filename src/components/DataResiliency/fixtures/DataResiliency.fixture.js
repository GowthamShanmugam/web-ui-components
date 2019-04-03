import { DataResiliency } from '../DataResiliency';

export const dataResiliencyData = {
  data: {
    healthy: true,
    message: 'Your data is resilient',
  },
  loaded: true,
  buildDone: false,
  progressPercentage: 80,
};

export default [
  {
    component: DataResiliency,
    props: { ...dataResiliencyData },
  },
];
