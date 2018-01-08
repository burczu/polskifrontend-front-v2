/* eslint-disable import/prefer-default-export */

// global actions
export const GLOBALS_ROUTE_CHANGED = 'GLOBALS_ROUTE_CHANGED';

// home route actions
export const HOME_DATA_LOADED_RESET = 'HOME_DATA_LOADED_RESET';

export const HOME_BLOG_LIST_GET = 'HOME_BLOG_LIST_GET';
export const HOME_BLOG_LIST_GET_REQUEST = 'HOME_BLOG_LIST_GET_REQUEST';
export const HOME_BLOG_LIST_GET_SUCCESS = 'HOME_BLOG_LIST_GET_SUCCESS';
export const HOME_BLOG_LIST_GET_ERROR = 'HOME_BLOG_LIST_GET_ERROR';

export const HOME_ARTICLE_LIST_GET = 'HOME_ARTICLE_LIST_GET';
export const HOME_ARTICLE_LIST_GET_REQUEST = 'HOME_ARTICLE_LIST_GET_REQUEST';
export const HOME_ARTICLE_LIST_GET_SUCCESS = 'HOME_ARTICLE_LIST_GET_SUCCESS';
export const HOME_ARTICLE_LIST_GET_ERROR = 'HOME_ARTICLE_LIST_GET_ERROR';

export const HOME_ADD_LINK_TO_CLICKED = 'HOME_ADD_LINK_TO_CLICKED';
export const HOME_UPDATE_CLICKED_LIST = 'HOME_UPDATE_CLICKED_LIST';

// login route actions
export const LOGIN_USER_CHANGED = 'LOGIN_USER_CHANGED';
export const LOGIN_USER_CHANGED_VALID = 'LOGIN_USER_CHANGED_VALID';
export const LOGIN_PASSWORD_CHANGED = 'LOGIN_PASSWORD_CHANGED';
export const LOGIN_PASSWORD_CHANGED_VALID = 'LOGIN_PASSWORD_CHANGED_VALID';

export const LOGIN_INVOKE = 'LOGIN_INVOKE';
export const LOGIN_INVOKE_SUCCESS = 'LOGIN_INVOKE_SUCCESS';
export const LOGIN_INVOKE_ERROR = 'LOGIN_INVOKE_ERROR';

// submit actions
export const SUBMIT_URL_CHANGED = 'SUBMIT_URL_CHANGED';
export const SUBMIT_URL_CHANGED_VALID = 'SUBMIT_URL_CHANGED_VALID';
export const SUBMIT_EMAIL_CHANGED = 'SUBMIT_EMAIL_CHANGED';
export const SUBMIT_EMAIL_CHANGED_VALID = 'SUBMIT_EMAIL_CHANGED_VALID';
export const SUBMIT_CAPTCHA_CHANGED = 'SUBMIT_CAPTCHA_CHANGED';

export const SUBMIT_BLOG_REQUEST_SEND = 'SUBMIT_BLOG_REQUEST_SEND';
export const SUBMIT_BLOG_REQUEST_SEND_SUCCESS = 'SUBMIT_BLOG_REQUEST_SEND_SUCCESS';
export const SUBMIT_BLOG_REQUEST_SEND_ERROR = 'SUBMIT_BLOG_REQUEST_SEND_ERROR';

export const SUBMIT_STATE_RESET = 'SUBMIT_STATE_RESET';

// feedback actions
export const FEEDBACK_TEXT_CHANGED = 'FEEDBACK_TEXT_CHANGED';
export const FEEDBACK_TEXT_CHANGED_VALID = 'FEEDBACK_TEXT_CHANGED_VALID';
export const FEEDBACK_EMAIL_CHANGED = 'FEEDBACK_EMAIL_CHANGED';
export const FEEDBACK_EMAIL_CHANGED_VALID = 'FEEDBACK_EMAIL_CHANGED_VALID';
export const FEEDBACK_CAPTCHA_CHANGED = 'FEEDBACK_CAPTCHA_CHANGED';

export const FEEDBACK_SEND = 'FEEDBACK_SEND';
export const FEEDBACK_SEND_SUCCESS = 'FEEDBACK_SEND_SUCCESS';
export const FEEDBACK_SEND_ERROR = 'FEEDBACK_SEND_ERROR';

export const FEEDBACK_STATE_RESET = 'FEEDBACK_STATE_RESET';

// news actions
export const NEWS_DATA_LOADED_RESET = 'NEWS_DATA_LOADED_RESET';

export const NEWS_PAGE_GET = 'NEWS_PAGE_GET';
export const NEWS_PAGE_GET_SUCCESS = 'NEWS_PAGE_GET_SUCCESS';
export const NEWS_PAGE_GET_ERROR = 'NEWS_PAGE_GET_ERROR';

// articles actions
export const ARTICLES_DATA_LOADED_RESET = 'ARTICLES_DATA_LOADED_RESET';

export const ARTICLES_ARTICLE_GET = 'ARTICLES_ARTICLE_GET';
export const ARTICLES_ARTICLE_GET_SUCCESS = 'ARTICLES_ARTICLE_GET_SUCCESS';
export const ARTICLES_ARTICLE_GET_ERROR = 'ARTICLES_ARTICLE_GET_ERROR';
