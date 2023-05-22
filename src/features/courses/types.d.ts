export type Course = {
  id: string;
  title: string;
  module: string;
  study: string;
  description: string;
  mentee_ids: Array<string>;
  forum_id: string;
};

export type Courses = {
  [course_id: string]: Course;
};
