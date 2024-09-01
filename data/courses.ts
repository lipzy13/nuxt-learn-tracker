export type Course =  {
  id: number;
  name: string;
  description: string;
  category: string;
  slug: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: 'Angular for Beginners',
    description: 'Learn Angular from scratch',
    category: 'Angular',
    slug: 'angular-for-beginners',
  },
  {
    id: 2,
    name: 'React for Beginners',
    description: 'Learn React from scratch',
    category: 'React',
    slug: 'react-for-beginners',
  },
  {
    id: 3,
    name: 'Vue for Beginners',
    description: 'Learn Vue from scratch',
    category: 'Vue',
    slug: 'vue-for-beginners',
  },
];

export default courses;
