import Domain from './Domain.mjs';

function addDomain(id, data) {
  return data.push(new Domain(id));
}

function getDomainIds(data) {
  return data.reduce((a, c) => {
    a.push(c.id);
    return a;
  }, [])
}

export { addDomain, getDomainIds };
