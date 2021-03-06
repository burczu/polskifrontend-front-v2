import React from 'react';
import isNode from 'detect-node';
import Articles from './Articles';
import Layout from '../../components/Layout/Layout';
import getArticlesInitialState from '../../store/serverSideInitializers/articlesInitializer';
import * as actions from '../../actions/public/articlesActions';

export default {
  path: '/artykuly/:slug',
  async action(context) {
    const slug = context.params.slug;
    const state = context.store.getState().publicState.articlesState;

    if (isNode) {
      // server side loading
      const newState = await getArticlesInitialState(slug);
      context.store.getState().publicState.articlesState = { ...newState, dataLoaded: true };
    } else if (state.dataLoaded === false) {
      // client side loading
      context.store.dispatch(actions.articlesArticleGet(slug));
    }

    return {
      component: (
        <Layout>
          <Articles context={context} />
        </Layout>
      )
    };
  }
};
