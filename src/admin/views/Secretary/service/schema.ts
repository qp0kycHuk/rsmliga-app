export const documentsSchema: Record<SecretaryDocName, IDocSchema> = {
  LICHNOST: {
    name: 'LICHNOST',
    title: 'Документ подтверждающий личность',
    required: true,
  },
  PERDAN: {
    name: 'PERDAN',
    title: 'Заявление об обработке персональных данных',
    required: true,
  },
  FILE_1: {
    name: 'FILE_1',
    title: 'Новый файл',
    required: true,
  },
  FILE_2: {
    name: 'FILE_2',
    title: 'Новый файл',
    required: true,
  },
}
