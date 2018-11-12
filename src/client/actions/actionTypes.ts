/**
 * @module actionTypes.ts
 * @description Action Type Constants
 */

enum ActionTypes {
  // Form Actions
  UPDATE_FIELD = 'UPDATE_FIELD',
  FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',
  // FETCH_FORM_FAILURE = 'FETCH_FORM_FAILURE',

  // User Actions
  LOGOUT_USER = 'LOGOUT_USER',
  PREV_PAGE = 'PREV_PAGE',
  UPDATE_ISSUE_POSITION = 'UPDATE_ISSUE_POSITION',
  UPDATE_ISSUES_SELECTED = 'UPDATE_ISSUES_SELECTED',

  FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS', // User authorization after cookie/session check
  FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS', // User authorization after logout
  FETCH_SUBMIT_ISSUES_SUCCESS = 'FETCH_SUBMIT_ISSUES_SUCCESS',
  // FETCH_SUBMIT_ISSUES_FAILURE = 'FETCH_SUBMIT_ISSUES_FAILURE',

  FETCH_SUBMIT_SURVEY_SUCCESS = 'FETCH_SUBMIT_SURVEY_SUCCESS',
  // FETCH_SUBMIT_SURVEY_FAILURE = 'FETCH_SUBMIT_SURVEY_FAILURE',

  // Issue Ranking Actions
  CLEAR_ISSUES = 'CLEAR_ISSUES',
  TOGGLE_ISSUE = 'TOGGLE_ISSUE',
  TOGGLE_ISSUE_SUCCESS = 'TOGGLE_ISSUE_SUCCESS',

  // Survey Question Actions
  ANSWER_QUESTION = 'ANSWER_QUESTION',

  // Company Selection Actions
  FETCH_COMPANY_LIST = 'FETCH_COMPANY_LIST',
  SORT_COMPANY_LIST = 'SORT_COMPANY_LIST',
  SELECT_COMPANY = 'SELECT_COMPANY',
  GET_USER_ISSUES = 'GET_USER_ISSUES',
  ADD_COMPANY_SCORE = 'ADD_COMPANY_SCORE',
  MERGE_ISSUE_SCORES = 'MERGE_ISSUE_SCORES'
}

export default ActionTypes;
