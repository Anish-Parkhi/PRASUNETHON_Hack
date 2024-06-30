import EventIcon from '@mui/icons-material/Event';
import StorefrontIcon from '@mui/icons-material/Storefront';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import PollIcon from '@mui/icons-material/Poll';

const cardInfo = [
  {
    id: 1,
    title: 'Events',
    description: 'Join all the events happening near you.',
    icon: EventIcon,
    to: '/events',
  },
  {
    id: 2,
    title: 'Market Place',
    description: 'All the local produce and products just a click away.',
    icon: StorefrontIcon,
    to: '/marketplace',
  },
  {
    id: 7,
    title: 'Services',
    description: 'All the local services that you will need.',
    icon: DesignServicesIcon,
    to: '/services',
  },
  {
    id: 3,
    title: 'Volunteering',
    description: 'Volunteer for causes that matter the most to you.',
    icon: GroupsIcon,
    to: '/volunteer',
  },
  {
    id: 5,
    title: 'Discussions',
    description: 'Discuss and polls for making a change.',
    icon: PollIcon,
    to: '/discussions',
  },
  {
    id: 6,
    title: 'Facilities',
    description: 'All the facilities and requirements are here.',
    icon: PollIcon,
    to: '/facilities',
  },
  {
    id: 4,
    title: 'Help Desk',
    description: 'Your queries and issues come this way.',
    icon: HelpIcon,
    to: '/helpdesk',
  },
  {
    id: 8,
    title: 'Nearby info.',
    description: 'Discover your locality and explore it. ',
    icon: FmdGoodIcon,
    to: '/nearby',
  },
];

export default cardInfo;
