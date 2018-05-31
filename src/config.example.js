/* eslint-disable max-len, no-undef */

// TODO: set up port and host with local dev defaults
export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// TODO: set up Heroku deployment data
export const heroku = {
  name: 'heroku project name',
  url: 'heroku repo git url',
  branch: 'master',
  website: 'website address'
};

// TODO: set up Google Analytics tracking ID
export const analytics = {
  // https://analytics.google.com/
  google: {
    trackingId: 'UA-XXXXXXXX-X' // UA-XXXXX-X
  }
};

export const getDefaultHeaders = (withToken = false) => {
  const result = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (withToken) {
    result['X-Access-Token'] = 'XXX'; // TODO: get it from cookie or something
  }

  return result;
};

// TODO: set up api addresses for dev and prod environments
const api = {
  dev: {
    url: 'http://localhost:port'
  },
  prod: {
    url: 'http://example.remote.srv'
  }
};

export const apiUrl = __DEV__ ? api.dev.url : api.prod.url;
