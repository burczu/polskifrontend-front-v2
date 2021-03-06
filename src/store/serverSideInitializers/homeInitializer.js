import { initialState as homeState } from '../../reducers/public/home';
import fetch from '../../core/fetch';
import { apiUrl, getDefaultHeaders } from '../../config';
import { getBlogsQuery } from '../../graphql/queries/blogs';
import { getArticlesQuery } from '../../graphql/queries/articles';

const getData = async(settings) => {
  const url = settings.tiles ? `${apiUrl}/public/graphql` : `${apiUrl}/public/graphql`;

  const response = await fetch(url, {
    headers: getDefaultHeaders(),
    method: 'POST',
    body: settings.tiles ? getBlogsQuery(1) : getArticlesQuery(1)
  });

  return await response.json();
};

export default async function getHomeInitialState(settings) {
  try {
    // set up settings stored in cookies
    homeState.isTilesOptionSelected = settings.tiles;
    homeState.isListOptionSelected = !settings.tiles;
    homeState.clickedLinks = settings.clickedLinks || [];

    const remoteData = await getData(settings);
    const { errors } = remoteData;
    if (!errors) {
      if (settings.tiles) {
        const { blogs, nextPage, errors } = remoteData.data.blogs;

        if (!errors) {
          homeState.blogList = blogs;
          homeState.blogListNextPage = nextPage;
        }
      } else {
        const { articles, nextPage, errors } = remoteData.data.articles;

        if (!errors) {
          homeState.allArticlesList = articles;
          homeState.allArticlesNextPage = nextPage;
        }
      }
    } else {
      homeState.articlesError = true;
      homeState.blogListError = true;
    }
  } catch (error) {
    homeState.articlesError = true;
    homeState.blogListError = true;

    homeState.dataLoaded = true;
  }

  return homeState;
}
