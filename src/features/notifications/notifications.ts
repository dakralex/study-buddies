import {Notifications} from './types';
import {PROTOTYPE_FORUMS} from '../forums/forums';

export const PROTOTYPE_NOTIFICATIONS: Notifications = {
  '573a535b-648d-4f4a-952e-7469d48cc5a1': {
    id: '573a535b-648d-4f4a-952e-7469d48cc5a1',
    type: 'post',
    title: `Neuer Antwort in "${PROTOTYPE_FORUMS['3d1c9ecc-46ae-41cc-941c-ff7d8072755a'].posts['5be4fe2f-0b99-4076-910a-193a7a11b7b2'].title}"`,
    message:
      PROTOTYPE_FORUMS['3d1c9ecc-46ae-41cc-941c-ff7d8072755a'].posts[
        '5be4fe2f-0b99-4076-910a-193a7a11b7b2'
      ].answers['a43f31a7-53bc-4d14-a759-678c9f72f69f'].content,
    link_id:
      '3d1c9ecc-46ae-41cc-941c-ff7d8072755a:5be4fe2f-0b99-4076-910a-193a7a11b7b2',
  },
  'da997930-16b3-423e-b11a-b6ec1f692faa': {
    id: 'da997930-16b3-423e-b11a-b6ec1f692faa',
    type: 'post',
    title: `Neuer Post in ${PROTOTYPE_FORUMS['753fb11a-398f-45b3-bb88-450dde4b93ad'].title}`,
    message:
      PROTOTYPE_FORUMS['753fb11a-398f-45b3-bb88-450dde4b93ad'].posts[
        '4751135c-c1e7-41be-ad4b-bc5d9252efe7'
      ].content,
    link_id:
      '753fb11a-398f-45b3-bb88-450dde4b93ad:4751135c-c1e7-41be-ad4b-bc5d9252efe7',
  },
  'dac823ee-3fd4-4033-89f8-070dbfb3d8ad': {
    id: 'dac823ee-3fd4-4033-89f8-070dbfb3d8ad',
    type: 'post',
    title: `Neuer Post in ${PROTOTYPE_FORUMS['0305c3b4-654b-493e-ae5e-d27d8e3f96bc'].title}`,
    message:
      PROTOTYPE_FORUMS['0305c3b4-654b-493e-ae5e-d27d8e3f96bc'].posts[
        'fca83698-c732-457c-8db0-4b8a494e9b61'
      ].content,
    link_id:
      '0305c3b4-654b-493e-ae5e-d27d8e3f96bc:fca83698-c732-457c-8db0-4b8a494e9b61',
  },
  'd589da51-89ff-4902-b6a8-7d2aaf3f57f1': {
    id: 'd589da51-89ff-4902-b6a8-7d2aaf3f57f1',
    type: 'message',
    title: `Neuer Post in ${PROTOTYPE_FORUMS['e6b2ee39-c097-4660-bb6b-81a11624562a'].title}`,
    message:
      PROTOTYPE_FORUMS['e6b2ee39-c097-4660-bb6b-81a11624562a'].posts[
        '3d651150-f611-4c51-9f10-95e0d784ada1'
      ].content,
    link_id:
      'e6b2ee39-c097-4660-bb6b-81a11624562a:3d651150-f611-4c51-9f10-95e0d784ada1',
  },
};
