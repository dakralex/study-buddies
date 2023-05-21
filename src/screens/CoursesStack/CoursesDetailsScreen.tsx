import React, {useState} from 'react';
import AppScreen from '../AppScreen';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import ToggleButton from '../../components/molecules/ToggleButton';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PROTOTYPE_USERS} from '../../features/users/users';
import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesDetailsScreenProps as Props} from '../../navigation/types';
import UserAvatarSlider from '../../components/organisms/UserAvatarSlider';
import SubHeading from '../../components/atoms/text/SubHeading';
import Container from '../../components/atoms/Container';
import {View} from 'react-native';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';

const CoursesDetailsScreen = ({navigation, route}: Props) => {
  const {courseId} = route.params;
  const users = PROTOTYPE_USERS;
  const course = PROTOTYPE_COURSES[courseId];
  const [toggleButtonState, setToggleButtonState] = useState(true);

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
            <SubSubHeading>{course.study}</SubSubHeading>
            <Heading>{course.title}</Heading>
            <NormalText>{course.description}</NormalText>
          </Container>
          <Container>
            <View style={{paddingTop: 8, paddingBottom: 4}}>
              <PrimaryButton
                onPress={() => {
                  // Zum jeweiligen Forum springen
                  navigation.navigate('ForumsDetails', {
                    forumId: course.forum_id,
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
