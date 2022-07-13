import ToDoList from '../../routes/project/todolist'
import WeatherApp from '../../routes/project/weatherApp'
import toDoListImage from '../../assets/images/toDoList.jpg'
import weatherImage from '../../assets/images/weatherApp.jpg';

export type ProjectDetail = {
  id: number;
  name: string;
  link: string;
  component: JSX.Element;
  image: string;
  description: string;
}

const projectList: { [key: string]: ProjectDetail } = {
  toDoList: {
    id: 1,
    name: 'To-Do List',
    link: 'to-do-list',
    component: <ToDoList />,
    image: toDoListImage,
    description: `To-do list is the most basic training for developers, knowing how to master CRUD.`,
  },
  weatherApp: {
    id: 2,
    name: 'Weather App',
    link: 'weather-app',
    component: <WeatherApp />,
    image: weatherImage,
    description: `An application built using the Weather API can instantly check local or other regions' weather.`,
  }
};

export default projectList;
