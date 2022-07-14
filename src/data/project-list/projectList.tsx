import ToDoList from '../../routes/project/to-do-list'
import WeatherApp from '../../routes/project/weather-app'
import MaskMap from '../../routes/project/mask-map';
import BillingApp from '../../routes/project/billing-app';

import toDoListImage from '../../assets/images/toDoList.jpg'
import weatherImage from '../../assets/images/weather.jpg';
import maskMapImage from '../../assets/images/maskMap.jpg';
import billingImage from '../../assets/images/billing.jpg';


export type ProjectDetail = {
  id: number;
  name: string;
  component: JSX.Element;
  image: string;
  description: string;
}

const projectList: { [key: string]: ProjectDetail } = {
  toDoList: {
    id: 1,
    name: 'To-Do List',
    component: <ToDoList />,
    image: toDoListImage,
    description: `To-do list is the most basic training for developers, knowing how to master CRUD.`,
  },
  weatherApp: {
    id: 2,
    name: 'Weather App',
    component: <WeatherApp />,
    image: weatherImage,
    description: `An application built using the Weather API can instantly check local or other regions' weather.`,
  },
  maskMap: {
    id: 2,
    name: 'Mask Map',
    component: <MaskMap />,
    image: maskMapImage,
    description: `Due to the epidemic situation, the public can use this app to find out whether there are any masks in stock at nearby pharmacies.`,
  },
  billingApp: {
    id: 2,
    name: 'Billing App',
    component: <BillingApp />,
    image: billingImage,
    description: `A good helper for accounting, allowing you to track your expenses every day.`,
  },
};

export default projectList;
