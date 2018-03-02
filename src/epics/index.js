import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { articlesGetArticleEpic } from './public/articles/articlesGetArticleEpic';
import { feedbackEmailChangedEpic } from './public/feedback/feedbackEmailChangedEpic';
import { feedbackTextChangedEpic } from './public/feedback/feedbackTextChangedEpic';
import { feedbackSendEpic } from './public/feedback/feedbackSendEpic';
import { homeArticlesListGetEpic } from './public/home/homeArticlesListGetEpic';
import { homeArticlesListGetRequestEpic } from './public/home/homeArticlesListGetRequestEpic';
import { homeBlogListGetEpic } from './public/home/homeBlogListGetEpic';
import { homeBlogListGetRequestEpic } from './public/home/homeBlogListGetRequestEpic';
import { homeLinkToClickedAddEpic } from './public/home/homeLinkToClickedAddEpic';
import {
  urlChangedEpic,
  emailChangedEpic,
  sendBlogRequestEpic
} from './public/submit';
import { newsPageGetEpic } from './public/news/newsPageGetEpic';

const rootEpic = (...args) => combineEpics(
  articlesGetArticleEpic,
  feedbackTextChangedEpic,
  feedbackEmailChangedEpic,
  feedbackSendEpic,
  homeArticlesListGetEpic,
  homeArticlesListGetRequestEpic,
  homeBlogListGetEpic,
  homeBlogListGetRequestEpic,
  homeLinkToClickedAddEpic,
  newsPageGetEpic,
  urlChangedEpic,
  emailChangedEpic,
  sendBlogRequestEpic
)(...args, { ajax });

export default rootEpic;
