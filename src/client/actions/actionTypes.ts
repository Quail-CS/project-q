/**
 * @module actionTypes.ts
 * @description Action Type Constants
 */

enum ActionTypes {
  // Form Actions
  UPDATE_FIELD = 'UPDATE_FIELD',
  FETCH_FORM_REQUEST = 'FETCH_FORM_REQUEST',
  FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',
  FETCH_FORM_FAILURE = 'FETCH_FORM_FAILURE',

  // Issue Actions
  FETCH_ISSUES_REQUEST = 'FETCH_ISSUES_REQUEST',
  FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS',
  FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE',

  // Device Actions
  SET_DEVICE = 'SET_DEVICE',

  // Modal Actions
  SET_MODAL = 'SET_MODAL',
  CLEAR_MODAL = 'CLEAR_MODAL',

  // User Actions
  CLEAR_ISSUES = 'CLEAR_ISSUES',
  ADD_ISSUE = 'ADD_ISSUE',
  REMOVE_ISSUE = 'REMOVE_ISSUE',
  UPDATE_ISSUE_POSITION = 'UPDATE_ISSUE_POSITION',
  UPDATE_ISSUES_SELECTED = 'UPDATE_ISSUES_SELECTED',
  PREV_PAGE = 'PREV_PAGE', // TODO: TESTING
  RESTART = 'RESTART',

  FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST',
  FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS', // User authorization after cookie/session check
  FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE',

  FETCH_LOGOUT_REQUEST = 'FETCH_LOGOUT_REQUEST',
  FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS', // User authorization after logout
  FETCH_LOGOUT_FAILURE = 'FETCH_LOGOUT_FAILURE',

  FETCH_SUBMIT_ISSUES_REQUEST = 'FETCH_SUBMIT_ISSUES_REQUEST',
  FETCH_SUBMIT_ISSUES_SUCCESS = 'FETCH_SUBMIT_ISSUES_SUCCESS', // Survey population
  FETCH_SUBMIT_ISSUES_FAILURE = 'FETCH_SUBMIT_ISSUES_FAILURE',

  FETCH_SUBMIT_SURVEY_REQUEST = 'FETCH_SUBMIT_SURVEY_REQUEST', // TODO: TESTING
  FETCH_SUBMIT_SURVEY_SUCCESS = 'FETCH_SUBMIT_SURVEY_SUCCESS', // TODO: TESTING
  FETCH_SUBMIT_SURVEY_FAILURE = 'FETCH_SUBMIT_SURVEY_FAILURE', // TODO: TESTING

  // Survey Question Actions
  ANSWER_QUESTION = 'ANSWER_QUESTION', // TODO: TESTING

  // Company Selection Actions
  FETCH_COMPANY_LIST = 'FETCH_COMPANY_LIST',
  SORT_COMPANY_LIST = 'SORT_COMPANY_LIST',
  SELECT_COMPANY = 'SELECT_COMPANY',
  GET_USER_ISSUES = 'GET_USER_ISSUES',
  ADD_COMPANY_SCORE = 'ADD_COMPANY_SCORE',
  MERGE_ISSUE_SCORES = 'MERGE_ISSUE_SCORES',
  GET_ALL_COMPANY_INFO = 'GET_ALL_COMPANY_INFO',
  GET_STOCK_INFO = 'GET_STOCK_INFO',
  GET_SELECTED_COMPANY_INFO = 'GET_SELECTED_COMPANY_INFO',
  SET_DEFAULT_COMPANY = 'SET_DEFAULT_COMPANY',
  RESET_USER_ISSUES = 'RESET_USER_ISSUES',
  HOVER_ON = 'HOVER_ON',
  HOVER_OFF = 'HOVER_OFF',
  TOGGLE_PORTFOLIO = 'TOGGLE_PORTFOLIO',
  FILTER_SECTOR = 'FILTER_SECTOR',

  TOGGLE_STOCKS_VISUALIZER = 'TOGGLE_STOCKS_VISUALIZER',
  SET_STOCKS_VISUALIZER_DATA = 'SET_STOCKS_VISUALIZER_DATA',
  SET_TOP_STOCKS_COUNT = 'SET_TOP_STOCKS_COUNT',

  CALC_STOCKS_VISUALIZER_PENDING = 'CALC_STOCKS_VISUALIZER_PENDING',
  CALC_STOCKS_VISUALIZER_SUCCESS = 'CALC_STOCKS_VISUALIZER_SUCCESS',
  CALC_STOCKS_VISUALIZER_ERROR = 'CALC_STOCKS_VISUALIZER_ERROR',
  CALC_STOCKS_VISUALIZER_STOP = 'CALC_STOCKS_VISUALIZER_STOP',

  TOGGLE_BACKTEST_PORTFOLIO_MODAL = 'TOGGLE_BACKTEST_PORTFOLIO_MODAL',
}

export default ActionTypes;
