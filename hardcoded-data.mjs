import Domain from './Domain.mjs';

const mindfulness = new Domain('Mindfulness');
mindfulness.addReminder(
  'Meditate for 5 minutes.',
  2022,
  5,
  10,
  9,
  0
);
mindfulness.addReminder(
  'Stop. Think about your values. Then, act.',
  2022,
  5,
  10,
  11,
  0
);
mindfulness.addReminder(
  'Believe in the power of believing in yourself.',
  2022,
  5,
  10,
  13,
  0
);

const acceptance = new Domain('Acceptance');
acceptance.addReminder(
  'Acknowledge problems and solve them!',
  2022,
  5,
  10,
  10,
  0
);
acceptance.addReminder(
  'Take a moment to generate gratitude.',
  2022,
  5,
  10,
  12,
  0
);
acceptance.addReminder(
  'Helping others can be hard sometimes.',
  2022,
  5,
  10,
  14,
  0
);
acceptance.addReminder(
  'Your life is incredible!',
  2022,
  5,
  10,
  16,
  0
);

const forgiveness = new Domain('Forgiveness');
forgiveness.addReminder(
  'When you make a mistake, forgive yourself and realign to your values.',
  2022,
  5,
  10,
  15,
  0
);
forgiveness.addReminder(
  "Realign and keep working toward your best life.",
  2022,
  5,
  10,
  17,
  0
);

const general = new Domain('General');
general.addReminder('Be CONFIDENT and WARM. <3', 2022, 5, 10, 18, 30);
general.addReminder(
  'Follow your values no matter what you feel.',
  2022,
  5,
  10,
  18,
  0
);

const domains = [mindfulness, acceptance, forgiveness, general];

export default domains;
