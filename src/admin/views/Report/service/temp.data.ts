import { arrayRandomEl, getRandomUUID } from '@utils/index'

export function createReport(): IReport {
  return {
    id: getRandomUUID(),
    documents: [
      {
        name: 'skan',
        title: 'Скан-копия подписанной заявки',
        files: [],
        file_remove: false,
        required: true,
      },
      {
        name: 'vedomost',
        title: 'Ведомость о вручении денежных призов (Приложение 1)',
        files: [],
        file_remove: false,
        required: true,
      },
      {
        name: 'strah',
        title: 'Страхование',
        files: [],
        file_remove: false,
      },
      {
        name: 'lichnost',
        title: 'Документ подтверждающий личность',
        files: [],
        file_remove: false,
      },
      {
        name: 'perdan',
        title: 'Заявление об обработке персональных данных',
        files: ['/1.pdf', '/2.pdf', '/3.pdf'],
        file_remove: false,
      },
    ],
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
  }
}

export function createContest(): IContest {
  return {
    id: getRandomUUID(),
    season: arrayRandomEl<string>('2002-2003', '1922-1923', '2122-2123', '1812-1813', '2007-2008'),
    name: arrayRandomEl<string>(
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
    report: createReport(),
  }
}
