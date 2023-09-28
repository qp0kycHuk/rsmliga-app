export const documentsSchema: Record<SecretaryDocName, IDocSchema> = {
  SPORT: {
    name: 'Спортивный отчет',
    title: 'Спортивный отчет',
    required: true,
  },
  LICHNOST: {
    name: 'Документ подтверждающий личность',
    title: 'Документ подтверждающий личность',
    required: true,
  },
  PERDAN: {
    name: 'Заявление об обработке персональных данных',
    title: 'Заявление об обработке персональных данных',
    required: true,
  },
  FILE_1: {
    name: 'Новый файл',
    title: 'Новый файл',
    required: true,
  },
  FILE_2: {
    name: 'Новый файл',
    title: 'Новый файл',
    required: true,
  },
}
