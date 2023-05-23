import {Course, Courses} from './types';
import {PROTOTYPE_COURSES} from './prototype';
import {RootState} from '../../store/configureStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CoursesState {
  courses: Courses;
}

const initialState: CoursesState = {
  courses: PROTOTYPE_COURSES,
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state: CoursesState, action: PayloadAction<Course>) => {
      const course = action.payload;

      state.courses[course.id] = course;
    },
  },
});

export const selectCourses = (state: RootState) => state.courses.courses;

export const selectCourse = (state: RootState, courseId: Course['id']) =>
  state.courses.courses[courseId];

export const {addCourse} = coursesSlice.actions;
export default coursesSlice.reducer;
