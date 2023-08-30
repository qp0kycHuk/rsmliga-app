export const documentsSchema: Record<string, IDocSchema> = {
  skan: {
    name: 'skan',
    title: 'Скан-копия подписанной заявки',
    required: true,
  },
  vedomost: {
    name: 'vedomost',
    title: 'Ведомость о вручении денежных призов (Приложение 1)',
    required: true,
  },
  strah: {
    name: 'strah',
    title: 'Страхование',
  },
  lichnost: {
    name: 'lichnost',
    title: 'Документ подтверждающий личность',
  },
  perdan: {
    name: 'perdan',
    title: 'Заявление об обработке персональных данных',
  },
}
