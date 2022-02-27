import { User, Plan } from '../types/schoolTypes'
import moment, { Moment } from 'moment'

const DATE_FORMAT = 'ddd MMM DD h:mm:ss a'

export const getWeek = (user: User, numWeeksFromNow: number) => {
  let plans = []
  const currentDate = moment()

  let weekStart = currentDate
    .clone()
    .startOf('isoWeek')
    .add(numWeeksFromNow, 'weeks')
  let weekEnd = currentDate
    .clone()
    .endOf('isoWeek')
    .add(numWeeksFromNow, 'weeks')

  const fixedPlans = getFixedWeek(user, weekStart, weekEnd)
  plans.push(fixedPlans)

  console.log(weekStart.format(DATE_FORMAT))
  console.log(weekEnd.format(DATE_FORMAT))
}

export const getFixedWeek = (
  user: User,
  weekStart: Moment,
  weekEnd: Moment
) => {
  let plans = []

  for (const plan of user.fixedPlans) {
    let tPlan = plan
    if (plan.recurring) {
      tPlan.startTime = moment(tPlan.startTime)
        .add(
          weekStart.diff(moment(tPlan.startTime).startOf('isoWeek'), 'days'),
          'days'
        )
        .toDate()
      tPlan.endTime = moment(tPlan.endTime)
        .add(
          weekStart.diff(moment(tPlan.endTime).startOf('isoWeek'), 'days'),
          'days'
        )
        .toDate()
      tPlan.recurring = false
      plans.push(tPlan)
    } else {
      if (moment(tPlan.startTime).isBetween(weekStart, weekEnd)) {
        plans.push(tPlan)
      }
    }
  }
  return plans
}

export const splitByWeekday = (schedule: Plan[]): Plan[][] => {
  const currentDate = moment()

  let weekStart = currentDate.clone().startOf('isoWeek')
  let weekEnd = currentDate.clone().endOf('isoWeek')

  let weekdays: Plan[][] = [[], [], [], [], [], [], []]
  for (let plan of schedule) {
    ;(weekdays.at(moment(plan.startTime).weekday()) as Plan[]).push(plan)
  }

  return weekdays
}

export const niceDateString = (date: Date): string => {
  return moment(date).format(DATE_FORMAT)
}
