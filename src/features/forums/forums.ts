import {Forums} from './types';

const PROTOTYP_POST_TITLES = [
  'Abgabeformat 2.Abgabe',
  'Terminplan Übung',
  'U:Card vergessen',
  'Blatt3 Aufgabe 5',
  'Probleme mit dem Compiler',
  'Wie downloaden?',
  'Lerngruppe DO 11:30',
  'Prüfungstermin',
  'Prüfungsvorbereitung 23.08',
  'Entfällt die Übung?',
];
const PROTOTYP_POST_CONTENT = [
  'hey leute, wisst ihr wann die nächste Übungseinheit stattfindet? Und sind wir wieder im Seminarraum 4? ',
  'Wir treffen uns ab dieser Woche jeden Donnerstag um 11:30 in der Fakultät zum Lernen, @DrBlock ist als Mentee dabei, kommt vorbei!',
  'Ich habe meine U:Card nach der Prüfung vergessen. Falls Sie jemand findet bitte bei mir melden!',
  'Ich kann die VM irgendwie nicht downloaden. Hat da jemand einen Tip oder gibt es vielleicht eine detailiertere Anleitung?',
  'Welchen Compiler Befehl verwendet ihr? Bei mir funktioniert der npm-Befehl irgendwie gar nicht...',
  'Ich habe eine Frage zu Blatt3 Aufgabe 5: Wie soll man genau das arithmetische Mittel berechnen? Also welche Werte soll man dafür hernehmen? Von eigenen Messungen oder gibt es da Daten dazu?',
  'Hat die Pfrofessorin schon was gesagt bezüglich Prüfungstermin? Würds langsam gerne wissen um eine Lerngruppe zu starten :)',
  'Hey Partypeople :) kann es sein, dass die Übung heute entfällt? Auf Moodle steht unter dem heutigen Termin nix... Wäre nice!',
  'Gibts eigentlich einen detailierten Plan von den Übungsterminen? Also wo die Inhalte und eben Termine draufstehen?',
  'Wie soll die 2.Abgabe abgegeben werden? Als PDF oder als Word Dokument?',
];
const PROTOTYP_POST_ANSWERS = [
  'Zur Prüfung wurde immer noch nix gefragt, aber wenn du magst könnten wir trotzdem schon eine Lerngruppe starten und die Inhalte mal wiederholen',
  'Sehr cool hab das auf Moodle dazu gefunden. Schau dir das mal an!',
  'Bei mir hat aus- und wieder einschalten geholfen XD',
  'Ja genau so ist das eine gute Lösungsmethode!',
  'Cool ich würde gerne mitmachen!',
  'Probiers mal mit "npx react-native start" das funktioniert bei mir immer',
  'Als PDF Dokument steht bei der Angabe dabei ;)',
  'Meld dich mal bei der Luise Schmid die hat eine super Lerngruppe!',
  'Übung findet heute nicht statt',
  'Ja voll das findet heute nicht statt',
];
export const PROTOTYPE_FORUMS: Forums = {
  '753fb11a-398f-45b3-bb88-450dde4b93ad': {
    id: '753fb11a-398f-45b3-bb88-450dde4b93ad',
    title: 'OS Betriebssysteme',
    posts: {
      'c264b098-9b66-4d08-87a1-e303fcc82c54': {
        id: 'c264b098-9b66-4d08-87a1-e303fcc82c54',
        title: 'Vestibulum quis arcu vitae mi',
        author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
        timestamp: 'Mon, 01 May 2023 03:03:07 +0200',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna turpis, congue eget eros non, faucibus molestie ipsum. Donec suscipit tortor nec sollicitudin porta.',
      },
      '65da5f8c-dc1d-411d-9741-38d3bc3256ac': {
        id: '65da5f8c-dc1d-411d-9741-38d3bc3256ac',
        title: 'Vestibulum quis arcu vitae mi',
        author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
        timestamp: 'Thu, 27 Apr 2023 07:46:37 +0200',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna turpis, congue eget eros non, faucibus molestie ipsum. Donec suscipit tortor nec sollicitudin porta.',
      },
      '277c2655-4656-473b-87b4-5c41b4d81627': {
        id: '277c2655-4656-473b-87b4-5c41b4d81627',
        title: 'Vestibulum quis arcu vitae mi',
        author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
        timestamp: 'Mon, 24 Apr 2023 17:46:37 +0200',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna turpis, congue eget eros non, faucibus molestie ipsum. Donec suscipit tortor nec sollicitudin porta.',
      },
      '468d5215-1bd5-4121-b91b-215614db7c4f': {
        id: '468d5215-1bd5-4121-b91b-215614db7c4f',
        title: 'Vestibulum quis arcu vitae mi',
        author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182',
        timestamp: 'Sun, 23 Apr 2023 16:52:58 +0200',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna turpis, congue eget eros non, faucibus molestie ipsum. Donec suscipit tortor nec sollicitudin porta.',
      },
    },
  },
  '71373eba-672a-4c2b-bca4-3d49cad01b12': {
    id: '71373eba-672a-4c2b-bca4-3d49cad01b12',
    title: 'DBS Datenbanksysteme',
    posts: {},
  },
  '0305c3b4-654b-493e-ae5e-d27d8e3f96bc': {
    id: '0305c3b4-654b-493e-ae5e-d27d8e3f96bc',
    title: 'HCI Mensch-Computer Interaktion',
    posts: {},
  },
};
