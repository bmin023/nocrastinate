export type User = {
  name: string;
  preferences: Preferences;
  tasks: Task[];
};

export type Preferences = {

}

export type Schedule = {
  
}

export type Task = {
  name: string;
  dueDate: Date;
  priority?: "high" | "medium" | "low";
  estTimeRequired?: number;
  class?: string;
  subject?: string;
  pinned?: boolean;
  completed?: boolean;
};