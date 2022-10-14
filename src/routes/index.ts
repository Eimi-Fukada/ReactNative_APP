import {RouteMapDTO, routeNames} from './const';
import Home from '../pages/home';
import Welcome from '../pages/welcome';
import Mine from '../pages/mine';
import Template from '../pages/template';

const routes: RouteMapDTO[] = [
  {name: routeNames.Welcome, component: Welcome},
  {name: routeNames.Home, component: Home},
  {name: routeNames.Mine, component: Mine},
  {name: routeNames.Template, component: Template},
  /** write follow this */
].flat();

export default routes;
