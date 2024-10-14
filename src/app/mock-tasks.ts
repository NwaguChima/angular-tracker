import { ITask } from './helper/type';

export const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at school Appointment',
    day: 'May 6th at 1:30pm',
    reminder: false,
  },
] as Array<ITask>;
