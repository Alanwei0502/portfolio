import ToDoList from '../../routes/project/to-do-list'
import WeatherApp from '../../routes/project/weather-app'
import MaskMap from '../../routes/project/mask-map'
import BillingApp from '../../routes/project/billing-app'
import ECommerce from '../../routes/project/e-commerce'
import FileConverter from '../../routes/project/file-converter'

import toDoListImage from '../../assets/images/toDoList.jpg'
import weatherImage from '../../assets/images/weather.jpg'
import maskMapImage from '../../assets/images/maskMap.jpg'
import billingImage from '../../assets/images/billing.jpg'
import eCommerceImage from '../../assets/images/eCommerce.jpg'
import fileConverterImage from '../../assets/images/fileConverter.jpg'



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
    name: 'Doer',
    component: <ToDoList />,
    image: toDoListImage,
    description: `To-do list is the most basic training for developers, knowing how to master CRUD.`,
  },
  weatherApp: {
    id: 2,
    name: 'WeatherToGo',
    component: <WeatherApp />,
    image: weatherImage,
    description: `An application built using the Weather API can instantly check local or other regions' weather.`,
  },
  maskMap: {
    id: 3,
    name: 'Maskito',
    component: <MaskMap />,
    image: maskMapImage,
    description: `Due to the epidemic situation, the public can use this app to find out whether there are any masks in stock at nearby pharmacies.`,
  },
  billingApp: {
    id: 4,
    name: 'Moneybee',
    component: <BillingApp />,
    image: billingImage,
    description: `A good helper for accounting, allowing you to track your expenses every day.`,
  },
  eCommerce: {
    id: 5,
    name: 'CRWN',
    component: <ECommerce />,
    image: eCommerceImage,
    description: `An online clothing ecommerce store with shopping cart and checkout function.`,
  },
  fileConverter: {
    id: 6,
    name: 'Drag!Drop!Convert!',
    component: <FileConverter />,
    image: fileConverterImage,
    description: `Easy tool to convert files online. Drag and drop your file into the toolbox to begin converting your file.`,
  }
};

export default projectList;
