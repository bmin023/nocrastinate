import { Preferences, User } from "../types/schoolTypes";
import { getWeek } from "../utils/classUtils";

let preferences : Preferences = {

}

let user : User = {
  name: "Ghandi",
  preferences: preferences,
  activities: [],
  fixedPlans: []
} 

getWeek(user, 2);