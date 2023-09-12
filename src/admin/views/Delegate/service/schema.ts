export const documentsSchema: Record<string, IDocSchema> = {
  SCAN: {
    name: 'skan',
    title: 'Скан-копия подписанной заявки',
    required: true,
  },
  STRAH: {
    name: 'strah',
    title: 'Страхование',
    required: true,
  },
  LICHNOST: {
    name: 'lichnost',
    title: 'Документ подтверждающий личность',
    required: true,
  },
  PERDAN: {
    name: 'perdan',
    title: 'Заявление об обработке персональных данных',
    required: true,
  },
}
