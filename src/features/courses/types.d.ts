import {PROTOTYPE_FORUMS} from '../forums/forums';

export type Course = {
  id: string;
  title: string;
  module: string;
  study: string;
  description: string;
  mentee_ids: Array<string>;
  forum_id: keyof typeof PROTOTYPE_FORUMS;
};

export type Courses = {
  [course_id: string]: Course;
};
