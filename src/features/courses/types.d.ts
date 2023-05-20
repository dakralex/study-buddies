import {PROTOTYPE_FORUMS} from '../forums/forums';

export type Course = {
  id: string;
  title: string;
  module: string;
  study: string;
  description: string;
  forum_id: string | keyof PROTOTYPE_FORUMS;
};

export type Courses = {
  [course_id: string]: Course;
};
