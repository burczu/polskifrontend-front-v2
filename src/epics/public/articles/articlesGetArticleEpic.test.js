/* eslint-disable */
import { expect } from 'chai';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { articlesGetArticleEpic } from './articlesGetArticleEpic';
import * as constants from '../../../constants';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

describe('articlesGetArticleEpic', () => {
  const articleData = { response: { data: { articleBySlug: { id: 'test_id' } } } };

  const slug = 'test_slug';
  const triggeringPayload = { slug };
  const triggeringAction = { type: constants.ARTICLES_ARTICLE_GET, payload: triggeringPayload };

  const action$ = ActionsObservable.of(triggeringAction);

  describe('if everything ok', () => {
    const ajax = () => Observable.of(articleData);

    const expectedPayload = { article: articleData.response.data.articleBySlug };
    const expectedAction = { type: constants.ARTICLES_ARTICLE_GET_SUCCESS, payload: expectedPayload };

    it('returns correct success action with the article as payload', () => {
      return articlesGetArticleEpic(action$, {}, { ajax })
        .toPromise()
        .then(outputAction => {
          expect(outputAction).to.be.eql(expectedAction);
        });
    });
  });

  describe('if errors has thrown', () => {
    const error = { message: 'error' };
    const ajax = () => Observable.throw(error);

    const expectedAction = { type: constants.ARTICLES_ARTICLE_GET_ERROR, payload: { message: error.message } };

    it('returns correct error action', () => {
      return articlesGetArticleEpic(action$, {}, { ajax })
        .toPromise()
        .then(outputAction => {
          expect(outputAction).to.be.eql(expectedAction);
        })
    });
  });
});
