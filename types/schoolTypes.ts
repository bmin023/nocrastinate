import { getWeek } from "../utils/classUtils";

export type User = {
  name: string;
  preferences: Preferences;
  activities: Activity[];
  fixedPlans: Plan[];
}

export type Preferences = {

}

export enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAYS
}

export type Plan = {
  startTime: Date;
  endTime: Date;
  activity: Activity;
  recurring: boolean;
}

export type Activity = {
  name: string;
  dueDate: Date;
  priority: "high" | "medium" | "low";
  estTimeRequired?: number;
  class?: string;
  subject?: string;
  pinned?: boolean;
  completed?: boolean;
}