import { User, Plan } from '../types/schoolTypes'
import moment, { Moment } from 'moment'

const DATE_FORMAT = 'ddd MMM DD h:mm:ss a'

export const getWeek = (user: User, numWeeksFromNow: number) => {
  let plans : Plan[] = []
  const currentDate = moment()

  let weekStart = currentDate
    .clone()
    .startOf('isoWeek')
    .add(numWeeksFromNow, 'weeks')
  let weekEnd = currentDate
    .clone()
    .endOf('isoWeek')
    .add(numWeeksFromNow, 'weeks')

  const fixedPlans = getFixedWeek(user.fixedPlans, weekStart, weekEnd)
  plans.push(...fixedPlans)
  const activities = user.activities.filter((activity) => {
    const activityDate = moment(activity.dueDate)
    return (
      activityDate.isBetween(weekStart.subtract(1,'week'), weekEnd, null, '[]')
    )
  })

  //Sort by priority
  activities.sort((a, b) => {
    const priorities = {
      'high': 1,
      'medium': 2,
      'low': 3,
    }
    return priorities[a.priority] - priorities[b.priority]
  })

  //Sort by due date
  activities.sort((a, b) => {
    return moment(a.dueDate).diff(moment(b.dueDate))
  })

  //Add activities to plans where they don't conflict with fixed plans
  for (const activity of activities) {
    const activityDate = moment(activity.dueDate)
    let aPlan: Plan = {
      recurring: false,
      activity: activity,
      //1 hour window before the activity
      startTime: activityDate.clone().subtract(1, 'hour').toDate(),
      endTime: activityDate.clone().toDate(),
    }
    while (plansConflict(aPlan, plans)) {
      aPlan.startTime = moment(aPlan.startTime).subtract(1, 'hour').toDate()
      aPlan.endTime = moment(aPlan.endTime).subtract(1, 'hour').toDate()
    }
    plans.push(aPlan)
  }

  //Make sure it's still clamping to the week
  return getFixedWeek(plans,weekStart,weekEnd)
}

const planConflicts = (plan1: Plan, plan2: Plan) => {
  const start1 = moment(plan1.startTime)
  const end1 = moment(plan1.endTime)
  const start2 = moment(plan2.startTime)
  const end2 = moment(plan2.endTime)

  return (
    start1.isBetween(start2, end2, null, '[]') ||
    end1.isBetween(start2, end2, null, '[]') ||
    start2.isBetween(start1, end1, null, '[]') ||
    end2.isBetween(start1, end1, null, '[]')
  )
}

const plansConflict = (plan1: Plan, plans: Plan[]) => {
  for (const plan of plans) {
    if (planConflicts(plan1, plan)) {
      return true
    }
  }
  return false
}

const getFixedWeek = (
  plan: Plan[],
  weekStart: Moment,
  weekEnd: Moment
) : Plan[] => {
  let newPlan = []

  for (const aPlan of plan) {
    let tPlan = aPlan
    if (aPlan.recurring) {
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
      newPlan.push(tPlan)
    } else {
      if (moment(tPlan.startTime).isBetween(weekStart, weekEnd)) {
        newPlan.push(tPlan)
      }
    }
  }
  return newPlan
}

export const splitByWeekday = (schedule: Plan[]): Plan[][] => {
  const currentDate = moment()

  let weekStart = currentDate.clone().startOf('isoWeek')
  let weekEnd = currentDate.clone().endOf('isoWeek')

  let weekdays: Plan[][] = [[], [], [], [], [], [], []]
  for (let plan of schedule) {
    (weekdays[moment(plan.startTime).weekday()] as Plan[]).push(plan)
  }

  return weekdays
}

export const niceDateString = (date: Date): string => {
  return moment(date).format(DATE_FORMAT)
}

export const getCurrTask = (user: User): Plan => {
  const week = getWeek(user, 0);
  const time = moment();
  for(let plan of week) {
    if(time.isBetween(moment(plan.startTime), moment(plan.endTime))){
      return plan;
    }
  }
  return {
    activity: {
      name: 'break',
      dueDate: new Date(),
      priority: 'low'
    },
    startTime: new Date(),
    endTime: new Date(),
    recurring: false
  };
}