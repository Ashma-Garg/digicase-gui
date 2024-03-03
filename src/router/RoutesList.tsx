import HistoryPage from "../pages/HistoryPage"
import { Homepage } from "../pages/Homepage"

export const routesName = {
  home: '/',
  signin: '/signin',
  dashboard: '/dashboard',
  about: '/about',
  signup: '/signup',
  contact: '/contact',
  profile: '/profile',
  notify: '/notifications',
  settings: '/settings',
  history: '/history',
}

export const RoutesList = [
  {
    name: 'hamburger_links.home',
    link: routesName.home,
    id: 'home',
    renderHelperComponents: false,
    component: <Homepage />,
  },
  {
    name: 'hamburger_links.history',
    link: routesName.history,
    id: 'history',
    renderHelperComponents: false,
    component: <HistoryPage />,
  },
  
]
