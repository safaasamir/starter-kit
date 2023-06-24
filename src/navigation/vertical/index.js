import { Mail, Home, User } from "react-feather"
import { Icon } from '@iconify/react'
export default [
  {
    id: "Dashboard",
    title: "Dashboard",
    icon: <Icon icon="icon-park-outline:dashboard-one" color="gray" width="50" height="50" />,
    navLink: "/home"
  },
 
  {
    id: "Schools",
    title: "Schools",
    icon: <Icon icon="teenyicons:school-outline" width="50" height="50" />,
    navLink: "/school-admin"
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <Icon icon="ph:chat-bold" color="gray" width="50" height="50" />,
    navLink: '/Chat-admin'
  },
  {
    id: "Plans",
    title: "Plans",
    icon: <Icon icon="fa6-solid:handshake" color="gray" width="50" height="50" />,
    navLink: "/plans-page"
  },
  // {
  //   id: "CustomPlans",
  //   title: "CustomPlans",
  //   icon: <Icon icon="mdi:math-compass-variant" color="gray" width="50" height="50" />,
  //   navLink: "/customplans-page"
  // },
  
  
  // {
  //   id: "Terms&Condition",
  //   title: "Terms&Condition",
  //   icon: <Icon icon="material-symbols:back-hand-outline-rounded" width="50" height="50" />,
  //   navLink: "/term-page"
  // },
 
  {
    id: "Drivers",
    title: "Drivers",
    icon: <User size={20} />,
    navLink: "/driver"
  },
  {
    id: "CheckDrivers",
    title: "CheckDrivers",
    icon: <User size={20} />,
    navLink: "/CheckDriver"
  },
  {
    id: "Parents",
    title: "Parents",
    icon: <Icon icon="ic:baseline-people-outline" color="gray" width="60" height="60" />,
    navLink: "/parent-page"
  },
  {
    id: "Buses",
    title: "Buses",
    icon: <Icon icon="bx:bus-school" width="50" height="50" />,
    navLink: "/bus-page"
  },
  {
    id: "PrivacyPolicy",
    title: "PrivacyPolicy",
    icon: <Icon icon="ic:twotone-privacy-tip" width="50" height="50" />,
    navLink: "/privacy-page"
  },
  
 
]
