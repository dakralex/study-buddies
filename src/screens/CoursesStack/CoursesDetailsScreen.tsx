import React, {useEffect, useState} from 'react';
import AppScreen from '../AppScreen';
import spacingsStyles from '../../styles/Spacings';
import Container from '../../components/atoms/Container';
import SubHeading from '../../components/atoms/text/SubHeading';
import NormalText from '../../components/atoms/text/NormalText';
import ToggleButton from '../../components/molecules/ToggleButton';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import UserAvatarSlider from '../../components/organisms/UserAvatarSlider';
import FloatingActionButton from '../../components/atoms/buttons/FloatingActionButton';

import {useAppSelector} from '../../store/configureStore';
import {selectUsersById} from '../../features/users/usersSlice';
import {selectCourse} from '../../features/courses/coursesSlice';

import {CoursesDetailsScreenProps as Props} from '../../navigation/types';

const CoursesDetailsScreen = ({navigation, route}: Props) => {
  const {courseId} = route.params;
  const course = useAppSelector(state => selectCourse(state, courseId));
  const [toggleButtonState, setToggleButtonState] = useState(
    !course.mentee_ids.includes('558966f0-ea4d-4bcc-bc14-544b07b28182'),
  );

  useEffect(() => {
    navigation.setOptions({title: course.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course?.title]);

  const mentees = useAppSelector(state =>
    selectUsersById(state, course.mentee_ids),
  );

  return (
    <AppScreen
      scroll={true}
      padded={false}
      BottomComponent={
        <FloatingActionButton
          Button={ToggleButton}
          buttonProps={{
            state: toggleButtonState,
            setState: setToggleButtonState,
            stateOnText: 'Als Mentee registrieren',
            stateOffText: 'Als Mentee entfernen',
          }}
        />
      }>
      {!course ? (
        <NormalText>Der Kurs konnte nicht gefunden werden.</NormalText>
      ) : (
        <React.Fragment>
          <Container>
            <NormalText style={spacingsStyles.sectionSpacingBottomMedium}>
              {course.description}
            </NormalText>
            <PrimaryButton
              wrapperStyle={spacingsStyles.sectionSpacingBottomSmall}
              onPress={() => {
                navigation.navigate('Forums', {
                  screen: 'ForumsDetails',
                  params: {
                    forumId: course.forum_id,
                  },
                });
              }}>
              Forum
            </PrimaryButton>
            <SubHeading style={spacingsStyles.sectionSpacingBottomMedium}>
              Mentees
            </SubHeading>
          </Container>
          <UserAvatarSlider
            style={spacingsStyles.sectionSpacingBottomSmall}
            users={mentees}
          />
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
