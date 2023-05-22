import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import SubHeading from '../../components/atoms/text/SubHeading';
import NormalText from '../../components/atoms/text/NormalText';
import ToggleButton from '../../components/molecules/ToggleButton';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import UserAvatarSlider from '../../components/organisms/UserAvatarSlider';

import {PROTOTYPE_USERS} from '../../features/users/users';
import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesDetailsScreenProps as Props} from '../../navigation/types';

const CoursesDetailsScreen = ({navigation, route}: Props) => {
  const {courseId} = route.params;
  const course = PROTOTYPE_COURSES[courseId];
  const [toggleButtonState, setToggleButtonState] = useState(true);

  useEffect(() => {
    navigation.setOptions({title: course.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course?.title]);

  const mentees = course.mentee_ids.reduce((obj, key) => {
    if (PROTOTYPE_USERS && PROTOTYPE_USERS.hasOwnProperty(key)) {
      obj[key] = PROTOTYPE_USERS[key];
    }
    return obj;
  }, {});

  return (
    <AppScreen padded={false} scroll={true}>
      {!course ? (
        <NormalText>Der Kurs konnte nicht gefunden werden.</NormalText>
      ) : (
        <React.Fragment>
          <Container>
            <NormalText>{course.description}</NormalText>
          </Container>
          <Container>
            <View style={{paddingTop: 8, paddingBottom: 4}}>
              <PrimaryButton
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
            </View>
            <SubHeading
              style={{
                paddingVertical: 10,
              }}>
              Mentees
            </SubHeading>
          </Container>
          <UserAvatarSlider users={mentees} />
          <Container>
            <View style={{paddingTop: 16, paddingBottom: 24}}>
              <ToggleButton
                state={toggleButtonState}
                setState={setToggleButtonState}
                stateOnText="Als Mentee registrieren"
                stateOffText="Als Mentee entfernen"
              />
            </View>
          </Container>
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
