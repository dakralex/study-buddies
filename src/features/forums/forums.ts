import {Forums, Posts} from './types';

const generatePosts = (forumId, start, end): Posts => {
  const posts: Posts = {
    '5be4fe2f-0b99-4076-910a-193a7a11b7b2': {
      id: '5be4fe2f-0b99-4076-910a-193a7a11b7b2',
      title: 'Entfällt die Übung?',
      forum_id: forumId,
      author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
      timestamp: 'Mon, 19 Jun 2023 12:28:42 +0200',
      content:
        'Gibts eigentlich einen detaillierten Plan von den Übungsterminen? Also wo die Inhalte und eben Termine draufstehen? Kenne mich langsam schon gar nicht mehr aus in der Übung wann die eigtl stattfindet, ngl',
    },
    '4d23f0e2-1ff5-44d9-9644-087d2f56cafe': {
      id: '4d23f0e2-1ff5-44d9-9644-087d2f56cafe',
      title: 'Lerngruppe DO 11:30',
      forum_id: forumId,
      author_id: '4b233ecc-c056-484f-844d-9d787bb0c335',
      timestamp: 'Sun, 12 Jun 2023 14:35:15 +0200',
      content:
        'Wir treffen uns ab dieser Woche jeden Donnerstag um 11:30 in der Fakultät zum Lernen, @DrBlock ist als Mentee dabei, kommt vorbei!',
    },
    'fca83698-c732-457c-8db0-4b8a494e9b61': {
      id: 'fca83698-c732-457c-8db0-4b8a494e9b61',
      title: 'Terminplan nächste Einheit',
      forum_id: forumId,
      author_id: '4b233ecc-c056-484f-844d-9d787bb0c335',
      timestamp: 'Sat, 12 Jun 2023 17:14:21 +0200',
      content:
        'hey leute, wisst ihr wann die nächste Eiheit stattfindet? Und sind wir wieder im Seminarraum 4? LG & danke',
      answers: {
        '': {
          id: '#gen.uuid#',
          forum_id: forumId,
          author_id: '',
          timestamp: '',
          content: '',
        },
      },
    },
    'b28cef3f-392c-46fa-a6c0-388adea9fc8a': {
      id: 'b28cef3f-392c-46fa-a6c0-388adea9fc8a',
      title: 'U:Card vergessen',
      forum_id: forumId,
      author_id: 'dafc64a5-dbf9-48da-95bb-f006899eae37',
      timestamp: 'Fri, 09 Jun 2023 09:46:18 +0200',
      content:
        'Ich habe meine U:Card nach der Prüfung heute vergessen. Falls Sie jemand findet bitte bei mir melden!',
    },
    '3d651150-f611-4c51-9f10-95e0d784ada1': {
      id: '3d651150-f611-4c51-9f10-95e0d784ada1',
      title: 'Wie downloaden?',
      forum_id: forumId,
      author_id: '4751135c-c1e7-41be-ad4b-bc5d9252efe7',
      timestamp: 'Mon, 05 Jun 2023 12:18:42 +0200',
      content:
        'Ich kann die Dateien von Moodle irgendwie nicht downloaden. Hat da jemand einen Tipp oder gibt es vielleicht eine detailiertere Anleitung?',
    },
    '50c9af53-d1f9-48e2-9148-2ae5137521b8': {
      id: '50c9af53-d1f9-48e2-9148-2ae5137521b8',
      title: 'Probleme mit dem Build',
      forum_id: forumId,
      author_id: '673e13b3-2357-4942-af22-aa86b0cf3a24',
      timestamp: 'Tue, 23 May 2023 04:03:57 +0200',
      content:
        'Welchen Befehl verwendet ihr? Bei mir funktioniert der npm-Befehl irgendwie gar nicht...',
    },
    'acdecfe5-6e05-4ccf-881c-ac002596602b': {
      id: 'acdecfe5-6e05-4ccf-881c-ac002596602b',
      title: 'Abgabeformat 2.Abgabe',
      forum_id: forumId,
      author_id: 'ed7b9726-3f4c-4e5b-9784-a25526424f52',
      timestamp: 'Sun, 22 May 2023 12:01:14 +0200',
      content:
        'Wie soll die 2. Abgabe abgegeben werden? Als PDF oder als Word Dokument? Oder machts ihrs mit Latex?',
    },
    'c0d25481-216f-46d4-9a85-1cb6ea46bbd3': {
      id: 'c0d25481-216f-46d4-9a85-1cb6ea46bbd3',
      title: 'Blatt3 Aufgabe 5',
      forum_id: forumId,
      author_id: 'ffcdcbe8-eaa8-4021-8144-3ca7f90c2cf4',
      timestamp: 'Thu, 18 May 2023 08:04:31 +0200',
      content:
        'Ich habe eine Frage zu AB 3, Aufgabe 5: Wie soll man genau das arithmetische Mittel berechnen? Also welche Werte soll man dafür hernehmen? Von eigenen Messungen oder gibt es da Daten dazu?',
    },
    'b5054d79-d7c8-4e21-93c9-b9b32016985d': {
      id: 'b5054d79-d7c8-4e21-93c9-b9b32016985d',
      title: 'Prüfungstermin',
      forum_id: forumId,
      author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
      timestamp: 'Tue, 16 May 2023 13:35:06 +0200',
      content:
        'Hat die Pfrofessorin schon was gesagt bezüglich Prüfungstermin? Würds langsam gerne wissen um eine Lerngruppe zu starten :)',
    },
    '40347eeb-3431-4cba-b130-88252bd7af52': {
      id: '40347eeb-3431-4cba-b130-88252bd7af52',
      title: 'Prüfungsvorbereitung',
      forum_id: forumId,
      author_id: 'd52cc86e-9f83-4f7b-a275-7c09949e67d1',
      timestamp: 'Sun, 14 May 2023 11:03:35 +0200',
      content:
        'Hey wir machen eine Gruppe, sind schon zu viert. Wir treffen uns immer Di und Do um 1130 am Institut zum Lernen für die Prüfung. Wer noch dazukommen will ist gerne gesehen. Umso mehr, umso besser!',
    },
  };

  return Object.fromEntries(Object.entries(posts).slice(start, end));
};

export const PROTOTYPE_FORUMS: Forums = {
  '3d1c9ecc-46ae-41cc-941c-ff7d8072755a': {
    id: '3d1c9ecc-46ae-41cc-941c-ff7d8072755a',
    title: 'HCI Mensch-Computer-Interaktion',
    posts: generatePosts('3d1c9ecc-46ae-41cc-941c-ff7d8072755a', 0, 9),
  },
  '753fb11a-398f-45b3-bb88-450dde4b93ad': {
    id: '753fb11a-398f-45b3-bb88-450dde4b93ad',
    title: 'OS Betriebssysteme',
    posts: generatePosts('753fb11a-398f-45b3-bb88-450dde4b93ad', 1, 9),
  },
  '71373eba-672a-4c2b-bca4-3d49cad01b12': {
    id: '71373eba-672a-4c2b-bca4-3d49cad01b12',
    title: 'IDS Datenbanksysteme',
    posts: generatePosts('71373eba-672a-4c2b-bca4-3d49cad01b12', 2, 6),
  },
  '0305c3b4-654b-493e-ae5e-d27d8e3f96bc': {
    id: '0305c3b4-654b-493e-ae5e-d27d8e3f96bc',
    title: 'HCI Projektmanagement',
    posts: generatePosts('0305c3b4-654b-493e-ae5e-d27d8e3f96bc', 2, 6),
  },
  '7d22e206-5a30-40a4-a41e-450e19f63c3c': {
    id: '7d22e206-5a30-40a4-a41e-450e19f63c3c',
    title: 'IDS Grundl. d. intellig. Systeme',
    posts: generatePosts('7d22e206-5a30-40a4-a41e-450e19f63c3c', 0, 3),
  },
  'e6b2ee39-c097-4660-bb6b-81a11624562a': {
    id: 'e6b2ee39-c097-4660-bb6b-81a11624562a',
    title: 'Programmiersprachen und -konzepte',
    posts: generatePosts('e6b2ee39-c097-4660-bb6b-81a11624562a', 4, 7),
  },
  '39f77b6d-2c4c-4f27-b462-d8d0d4a7cc17': {
    id: '39f77b6d-2c4c-4f27-b462-d8d0d4a7cc17',
    title: 'NUM Einführung in Numerical Computing',
    posts: generatePosts('39f77b6d-2c4c-4f27-b462-d8d0d4a7cc17', 3, 5),
  },
  '6ab7dc6a-c274-48a9-be2a-23eb45de7051': {
    id: '6ab7dc6a-c274-48a9-be2a-23eb45de7051',
    title: 'EST Einführende Statistik',
    posts: generatePosts('6ab7dc6a-c274-48a9-be2a-23eb45de7051', 4, 9),
  },
};
