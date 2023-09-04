export const documentsSchema: Record<string, IDocSchema> = {
  skan: {
    name: 'skan',
    title: 'Скан-копия подписанной заявки',
    required: true,
  },
  strah: {
    name: 'strah',
    title: 'Страхование',
    required: true,
  },
  lichnost: {
    name: 'lichnost',
    title: 'Документ подтверждающий личность',
    required: true,
  },
  perdan: {
    name: 'perdan',
    title: 'Заявление об обработке персональных данных',
    required: true,
  },
}
