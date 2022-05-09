import Domain from './domain-class.mjs';

const mindfulness = new Domain('Mindfulness');
mindfulness.addReminder(
  'Tell Dave you need a moment to get on his team.',
  2022,
  5,
  10,
  9,
  0
);
mindfulness.addReminder(
  'Stop. Think about your values. Then, speak/act.',
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
  'Acknowledge problems and think about worst case scenarios so you can be proactive.',
  2022,
  5,
  10,
  10,
  0
);
acceptance.addReminder(
  'You have everything you need and could dream to have.',
  2022,
  5,
  10,
  12,
  0
);
acceptance.addReminder(
  'When David is hurt/angry/dissastisfied, you WANT to help him.',
  2022,
  5,
  10,
  14,
  0
);
acceptance.addReminder(
  'Your life is incredible WHEN you keep your VALUES sacred.',
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
  "Don't EVER stop fighting for your family.",
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
console.log()

export default domains;
