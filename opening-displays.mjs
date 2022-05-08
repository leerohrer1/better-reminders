import domains from './hardcoded-data.mjs';

const programGreeting = () => {
  console.log(`Welcome to your personalized reminders program!\n`);
};

const sortIdsAlphabetically = (arrOfObjects) => {
  return arrOfObjects
    .reduce((a, c) => {
      a.push(c.id);
      return a;
    }, [])
    .sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
};

const displayIdsAlphabetically = (alphabatizedArrOfIds, type) => {
  console.log(`${type.toUpperCase()}:`);
  alphabatizedArrOfIds.forEach((e) => console.log(e));
};

const displayChosenList = (listChoice) => {
  if (listChoice === 'd')
    displayIdsAlphabetically(sortIdsAlphabetically(domains), 'Domains');
  if (listChoice === 'r')
    displayIdsAlphabetically(
      sortIdsAlphabetically(
        domains
          .reduce((a, c) => {
            a.push(c._reminders);
            return a;
          }, [])
          .flat()
      ),
      'Reminders'
    );
};

export { programGreeting, displayChosenList };
