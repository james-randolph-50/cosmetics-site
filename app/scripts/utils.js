export const fetchData = url => {
  return fetch(url)
    .then(r => r.json())
    .then(({ data }) => data)
    .catch(err => {
      console.log('Fetch error', err);
    });
};

export const formatUSD = (price) => {
  const USDformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return USDformatter.format(price);
};

// Returns first whole word based on characters passed in
export const getWholeWord = (partialWord = '', phrase) => {
  const partialWordRegex = new RegExp(`\\b(\\w*${partialWord}\\w*)\\b`, 'gim');
  const [wholeWord] = phrase.match(partialWordRegex);

  return wholeWord;
};

export const createSlug = (name, prefix = null) => {
  const kebabCased = name.toLowerCase().replace(/ /g, '-');
  const slug = prefix ? ['#', prefix, kebabCased].join('/') : ['#', kebabCased].join('/');

  return slug;
};
