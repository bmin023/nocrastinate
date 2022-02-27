import { User, Activity, Plan } from "../types/schoolTypes";

const fakeUser: User = {
  name: 'Lucy the coolest Ray',
  fixedPlans: [
    {
      startTime: new Date(2022, 2, 1, 10, 0, 0),
      endTime: new Date(2022, 2, 1, 11, 0, 0),
      activity: {
        name: 'Linear Algebra',
        subject: 'Math',
        dueDate: new Date(2022, 2, 1, 10, 0, 0),
        priority: 'high',
        estTimeRequired: 1,
      },
      recurring: true,
    },
    {
      startTime: new Date(2022, 2, 1, 10, 0, 0),
      endTime: new Date(2022, 2, 1, 11, 0, 0),
      activity: {
        name: 'Christian Heritage Lecture',
        subject: 'Theology',
        dueDate: new Date(2022, 2, 3, 10, 0, 0),
        priority: 'high',
        estTimeRequired: 1,
      },
      recurring: true,
    },
    {
      startTime: new Date(2022, 2, 3, 10, 0, 0),
      endTime: new Date(2022, 2, 3, 11, 0, 0),
      activity: {
        name: 'Rehearse Presentation',
        subject: 'English',
        dueDate: new Date(2022, 2, 3, 12, 0, 0),
        priority: 'medium',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 3, 17, 0, 0),
      endTime: new Date(2022, 2, 3, 18, 0, 0),
      activity: {
        name: 'Take car to the shop',
        subject: 'miscellaneous',
        dueDate: new Date(2022, 2, 3, 18, 0, 0),
        priority: 'medium',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 4, 9, 0, 0),
      endTime: new Date(2022, 2, 4, 10, 0, 0),
      activity: {
        name: 'Rehearse Presentation',
        subject: 'Science',
        dueDate: new Date(2022, 2, 4, 10, 0, 0),
        priority: 'low',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 4, 12, 0, 0),
      endTime: new Date(2022, 2, 4, 13, 0, 0),
      activity: {
        name: 'Take math exam',
        subject: 'math',
        dueDate: new Date(2022, 2, 4, 13, 0, 0),
        priority: 'high',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 5, 10, 0, 0),
      endTime: new Date(2022, 2, 5, 11, 0, 0),
      activity: {
        name: 'Complete Geology Lab',
        subject: 'Geology',
        dueDate: new Date(2022, 2, 5, 11, 0, 0),
        priority: 'medium',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 6, 8, 0, 0),
      endTime: new Date(2022, 2, 6, 9, 0, 0),
      activity: {
        name: 'Tap Dance Class',
        subject: 'Dance',
        dueDate: new Date(2022, 2, 6, 9, 0, 0),
        priority: 'low',
        estTimeRequired: 1,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 1, 13, 5, 0),
      endTime: new Date(2022, 2, 1, 14, 30, 0),
      activity: {
        name: 'meeting with the professor',
        dueDate: new Date(2020, 3, 1, 11, 30, 0),
        priority: 'high',
        estTimeRequired: 0.5,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 1, 8, 5, 0),
      endTime: new Date(2022, 2, 1, 9, 55, 0),
      activity: {
        name: 'discrete structures',
        dueDate: new Date(2022, 2, 1, 9, 0, 0),
        priority: 'high',
        estTimeRequired: 1,
      },
      recurring: true,
    },
    {
      startTime: new Date(2022, 2, 1, 20, 5, 0),
      endTime: new Date(2022, 2, 1, 22, 0, 0),
      activity: {
        name: 'Party',
        dueDate: new Date(2022, 2, 1, 9, 0, 0),
        priority: 'high',
        estTimeRequired: 2,
      },
      recurring: false,
    },
    {
      startTime: new Date(2022, 2, 1, 11, 5, 0),
      endTime: new Date(2022, 2, 1, 12, 0, 0),
      activity: {
        name: 'computer science 2',
        dueDate: new Date(2022, 2, 1, 12, 0, 0),
        priority: 'high',
        estTimeRequired: 1,
      },
      recurring: true,
    },
  ],
  activities: [
    {
      name: 'mow the lawn',
      dueDate: new Date(2022, 2, 2, 10, 0, 0),
      priority: 'low',
      estTimeRequired: 0.25,
    },
    {
      name: 'go to the gym',
      dueDate: new Date(2022, 2, 2, 15, 0, 0),
      priority: 'medium',
      estTimeRequired: 0.5,
    },
    {
      name: 'study for geology',
      dueDate: new Date(2022, 2, 8, 18, 0, 0),
      priority: 'high',
      estTimeRequired: 4,
    },
    {
      name: 'watch a documentary',
      dueDate: new Date(2022, 2, 9, 20, 0, 0),
      priority: 'low',
      estTimeRequired: 2,
    },
    {
      name: 'finish coding project',
      dueDate: new Date(2022, 2, 8, 23, 0, 0),
      priority: 'high',
      estTimeRequired: 10,
    },
    {
      name: 'clean fishtank',
      dueDate: new Date(2022, 2, 7, 1, 0, 0),
      priority: 'low',
      estTimeRequired: 0.25,
    },
  ],
  preferences: {},
}

export default fakeUser;