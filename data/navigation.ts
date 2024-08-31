interface Navigation {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const personal: Navigation[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: "ant-design:home-filled",
  },
  {
    id: 2,
    name: "My Courses",
    url: "/courses",
    icon: "ph:squares-four-bold",
  },
  {
    id: 3,
    name: "Tasks",
    url: "/tasks",
    icon: "ic:outline-task",
  },
  {
    id: 4,
    name: "Grades",
    url: "/grades",
    icon: "icon-park-outline:ranking",
  },
];

export const library: Navigation[] = [
  {
    id: 1,
    name: "Courses",
    url: "/courses",
    icon: "bx:bx-book-open",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
    icon: "ant-design:project",
  },
];

export const actions: Navigation[] = [
  {
    id: 1,
    name: "Account",
    url: "/account",
    icon: "bx:bx-user",
  },
  {
    id: 2,
    name: "Settings",
    url: "/settings",
    icon: "mdi:settings",
  },
  {
    id: 3,
    name: "Log Out",
    url: "/logout",
    icon: "bx:bx-log-out",
  },
];
