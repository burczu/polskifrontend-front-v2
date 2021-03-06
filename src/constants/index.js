/* eslint-disable import/prefer-default-export */

/*
 * Shared types
 */

// global actions
export const GLOBALS_ROUTE_CHANGED = 'shared/GLOBALS_ROUTE_CHANGED';


/*
 * Public types
 */

// home route actions
export const HOME_DATA_LOADED_RESET = 'public/HOME_DATA_LOADED_RESET';

export const HOME_BLOG_LIST_GET = 'public/HOME_BLOG_LIST_GET';
export const HOME_BLOG_LIST_GET_REQUEST = 'public/HOME_BLOG_LIST_GET_REQUEST';
export const HOME_BLOG_LIST_GET_SUCCESS = 'public/HOME_BLOG_LIST_GET_SUCCESS';
export const HOME_BLOG_LIST_GET_ERROR = 'public/HOME_BLOG_LIST_GET_ERROR';

export const HOME_ARTICLE_LIST_GET = 'public/HOME_ARTICLE_LIST_GET';
export const HOME_ARTICLE_LIST_GET_REQUEST = 'public/HOME_ARTICLE_LIST_GET_REQUEST';
export const HOME_ARTICLE_LIST_GET_SUCCESS = 'public/HOME_ARTICLE_LIST_GET_SUCCESS';
export const HOME_ARTICLE_LIST_GET_ERROR = 'public/HOME_ARTICLE_LIST_GET_ERROR';

export const HOME_LINK_TO_CLICKED_ADD = 'public/HOME_LINK_TO_CLICKED_ADD';
export const HOME_CLICKED_LIST_UPDATE = 'public/HOME_CLICKED_LIST_UPDATE';

// submit actions
export const SUBMIT_URL_CHANGED = 'public/SUBMIT_URL_CHANGED';
export const SUBMIT_URL_CHANGED_VALID = 'public/SUBMIT_URL_CHANGED_VALID';
export const SUBMIT_EMAIL_CHANGED = 'public/SUBMIT_EMAIL_CHANGED';
export const SUBMIT_EMAIL_CHANGED_VALID = 'public/SUBMIT_EMAIL_CHANGED_VALID';
export const SUBMIT_CAPTCHA_CHANGED = 'public/SUBMIT_CAPTCHA_CHANGED';

export const SUBMIT_BLOG_REQUEST_SEND = 'public/SUBMIT_BLOG_REQUEST_SEND';
export const SUBMIT_BLOG_REQUEST_SEND_SUCCESS = 'public/SUBMIT_BLOG_REQUEST_SEND_SUCCESS';
export const SUBMIT_BLOG_REQUEST_SEND_ERROR = 'public/SUBMIT_BLOG_REQUEST_SEND_ERROR';

export const SUBMIT_STATE_RESET = 'public/SUBMIT_STATE_RESET';

// feedback actions
export const FEEDBACK_TEXT_CHANGED = 'public/FEEDBACK_TEXT_CHANGED';
export const FEEDBACK_TEXT_CHANGED_VALID = 'public/FEEDBACK_TEXT_CHANGED_VALID';
export const FEEDBACK_EMAIL_CHANGED = 'public/FEEDBACK_EMAIL_CHANGED';
export const FEEDBACK_EMAIL_CHANGED_VALID = 'public/FEEDBACK_EMAIL_CHANGED_VALID';
export const FEEDBACK_CAPTCHA_CHANGED = 'public/FEEDBACK_CAPTCHA_CHANGED';

export const FEEDBACK_SEND = 'public/FEEDBACK_SEND';
export const FEEDBACK_SEND_SUCCESS = 'public/FEEDBACK_SEND_SUCCESS';
export const FEEDBACK_SEND_ERROR = 'public/FEEDBACK_SEND_ERROR';

export const FEEDBACK_STATE_RESET = 'public/FEEDBACK_STATE_RESET';

// news actions
export const NEWS_DATA_LOADED_RESET = 'public/NEWS_DATA_LOADED_RESET';

export const NEWS_PAGE_GET = 'public/NEWS_PAGE_GET';
export const NEWS_PAGE_GET_SUCCESS = 'public/NEWS_PAGE_GET_SUCCESS';
export const NEWS_PAGE_GET_ERROR = 'public/NEWS_PAGE_GET_ERROR';

// articles actions
export const ARTICLES_DATA_LOADED_RESET = 'public/ARTICLES_DATA_LOADED_RESET';

export const ARTICLES_ARTICLE_GET = 'public/ARTICLES_ARTICLE_GET';
export const ARTICLES_ARTICLE_GET_SUCCESS = 'public/ARTICLES_ARTICLE_GET_SUCCESS';
export const ARTICLES_ARTICLE_GET_ERROR = 'public/ARTICLES_ARTICLE_GET_ERROR';


/*
 * Restricted types
 */
