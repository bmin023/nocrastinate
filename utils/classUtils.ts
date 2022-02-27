import { User, Plan } from "../types/schoolTypes";
import moment, { Moment } from "moment";

const DATE_FORMAT = "ddd MMM DD h:mm:ss a";

export const getWeek = (user: User, numWeeksFromNow: number) => {
  let plans = [];
  const currentDate = moment();

  let weekStart = currentDate.clone().startOf('isoWeek').add(numWeeksFromNow, 'weeks');
  let weekEnd = currentDate.clone().endOf('isoWeek').add(numWeeksFromNow, 'weeks');

  const fixedPlans = getFixedWeek(user, weekStart, weekEnd);
  plans.push(fixedPlans);

  console.log(weekStart.format(DATE_FORMAT));
  console.log(weekEnd.format(DATE_FORMAT));
}

const getFixedWeek = (user: User, weekStart: Moment, weekEnd: Moment) => {
  let plans = [];

  for (const plan of user.fixedPlans) {
    if (plan.recurring) {
      let rePlan = plan;
      moment(rePlan.startTime).subtract(moment(rePlan.startTime).startOf('isoWeek').add(weekStart, 'date'));
      rePlan.recurring = false;
      plans.push(rePlan);
    } else {
      // not recurring
    }
  }
}

export const splitByWeekday = (schedule: Plan[]): Plan[][] => {
  const currentDate = moment();

  let weekStart = currentDate.clone().startOf('isoWeek');
  let weekEnd = currentDate.clone().endOf('isoWeek');

  let weekdays: Plan[][] = [[], [], [], [], [], [], []]
  for (let plan of schedule) {
    (weekdays.at(moment(plan.startTime).weekday()) as Plan[]).push(plan);
  }

  return weekdays;
}

export const niceDateString = (date: Date): string => {
  return moment(date).format(DATE_FORMAT);
}
