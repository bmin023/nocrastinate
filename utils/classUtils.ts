import { User, Plan } from "../types/schoolTypes";
import moment from "moment";

const DATE_FORMAT = "ddd MMM DD h:mm:ss a";

export const getWeek = (user: User, numWeeksFromNow: number) => {
  const currentDate = moment();

  let weekStart = currentDate.clone().startOf('isoWeek').add(numWeeksFromNow, 'weeks');
  let weekEnd = currentDate.clone().endOf('isoWeek').add(numWeeksFromNow, 'weeks');

  console.log(weekStart.format(DATE_FORMAT));
  console.log(weekEnd.format(DATE_FORMAT));

  /** 
  for (let plan of user.fixedPlans) {
    if (plan.)
  }
  */
}