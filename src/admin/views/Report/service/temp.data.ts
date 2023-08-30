import { arrayRandomEl, getRandomUUID } from '@utils/index'

export function createReport(): IReport {
  return {
    id: getRandomUUID(),
    documents: {
      skan: [],
      vedomost: [],
      strah: [],
      lichnost: [],
      perdan: [
        {
          id: 1,
          name: '1',
          src: '/1.pdf',
        },
        {
          id: 2,
          name: '2',
          src: '/2.pdf',
        },
        {
          id: 3,
          name: '3',
          src: '/3.pdf',
        },
      ],
    },
    generalImages: [
      {
        id: 1,
        name: 'OgrGEpOtIA_attachment.jpg',
        src: '/img/test.gif',
      },
    ],
    contestImages: [
      {
        id: 1,
        name: 'OgrGEpOtIA_attachment.jpg',
        src: '/img/test.gif',
      },
    ],
    teamsImages: [
      {
        team: {
          id: 1,
          name: 'COUU #1',
        },
        image: {
          id: 1,
          name: 'OgrGEpOtIA_attachment.jpg',
          src: '/img/test.gif',
        },
      },
    ],
  }
}

export function createContest(): IContest {
  return {
    id: getRandomUUID(),
    season: arrayRandomEl<string>('2002-2003', '1922-1923', '2122-2123', '1812-1813', '2007-2008'),
    name: arrayRandomEl<string>(
      'Олимпиада',
      'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
      'Соревнования по регби-7 среди спортивных школ Ростовской области',
      'Олимпиада по регби среди учащихся 5-6 классови так далее и тому подобное',
      'Летняя Спартакиада по тэг-регби среди спортивных школ Ростовской области'
    ),
    step: arrayRandomEl<string>('Муниципальный', 'Зональный', 'Региональный', 'Федеральный'),
    area: arrayRandomEl<string>(
      'г. Геленджик',
      'г. Краснодар',
      'г. Ростов',
      'г. Аксай',
      'г. Майкоп'
    ),
    place: 'ГБУ РО СШОР №5 (Первощихся 5-6 классов и так далее и тому подобное)',
    date: arrayRandomEl<string>('12.04.2021', '09.05.2022', '22.11.2023', '01.01.2024'),
    report: Math.random() > 0.5 ? createReport() : null,
    teams: [
      {
        id: 1,
        name: 'COUU #1',
      },
      {
        id: 2,
        name: 'COUU #2',
      },
      {
        id: 3,
        name: 'COUU #3',
      },
    ],
  }
}
