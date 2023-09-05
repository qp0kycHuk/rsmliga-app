import { arrayRandomEl, getRandomUUID } from '@utils/index'

export function createDelegate(): IDelegate {
  return {
    id: getRandomUUID(),
    number: '1',
    name: arrayRandomEl<string>('Иван', 'Борис', 'Никита', 'Саня'),
    surname: arrayRandomEl<string>('Иванов', 'Петров', 'Сидоров', 'Пупкин'),
    patronymic: arrayRandomEl<string>('Иванович', 'Борисович', 'Никитаович', 'Саняович'),
    birthday: '01.01.2000',
    sex: 'Male',
    category: '1',
    place: arrayRandomEl<string>(
      'г. Геленджик',
      'г. Краснодар',
      'г. Ростов',
      'г. Аксай',
      'г. Майкоп'
    ),
    email: arrayRandomEl<string>(
      'ivanov@yandex.ru',
      'petrov@yandex.ru',
      'sidorov@yandex.ru',
      'dikii_pacan4000@yandex.ru'
    ),
    phone: '+7 (999) 999 99 99',
    comment: 'lorem ipsum',
    gamesCount: 99,
    documents: {},
    statistic: new Array(10).fill(true).map(() => ({
      id: getRandomUUID(),
      season: arrayRandomEl<string>('2023', '2022/2023', '2022', '1800'),
      team: arrayRandomEl<string>(
        'ГБУ РО СШОР №5',
        'МБОУ СОШ №23',
        'ГБУ РО СШОР №5',
        'МБОУ СОШ №23'
      ),
      contest: arrayRandomEl<string>(
        'Кубок Ростсельмаш по регби-7',
        'Школьная регбийная «Ростсельмаш-лига» U-1 '
      ),
      gamesCount: 99,
      role: '22',
      warnings: 99,
      deletions: 99,
    })),
    roles: {
      main: arrayRandomEl<number>(1, 2, 33, 0),
      support: arrayRandomEl<number>(1, 2, 33, 0),
      delegate: arrayRandomEl<number>(1, 2, 33, 0),
    },
    contests: [
      'Олимпиада',
      'Спартакиада по тэг-регби среди учащихся 5-6 классови так далее и тому подобное',
      'Соревнования по регби-7 среди спортивных школ Ростовской области',
      'Олимпиада по регби среди учащихся 5-6 классови так далее и тому подобное',
      'Летняя Спартакиада по тэг-регби среди спортивных школ Ростовской области',
    ],
  }
}
