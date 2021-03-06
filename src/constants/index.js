/* eslint-disable import/prefer-default-export */

export const API_PATHS = {
  login: 'login',
  logout: 'logout',
  register: 'register',
  contact: 'contact',
  users: 'users',
};

export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
export const API_ERROR = 'API_ERROR';

/**
 * Application actions
**/
export const APPLICATION_SEND_MESSAGE = 'APPLICATION_SEND_MESSAGE';
export const APPLICATION_CLEAR_MESSAGE = 'APPLICATION_CLEAR_MESSAGE';

// This action must be used only server side.
// Used when a redirect must be done (most likely after login)
export const APPLICATION_SERVER_REDIRECT = 'APPLICATION_SERVER_REDIRECT';

/**
 * Contact section actions
**/
export const CONTACT_SEND = 'CONTACT_SEND';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_ERROR = 'CONTACT_ERROR';
export const CONTACT_CLEAR = 'CONTACT_CLEAR';

/**
 * Session actions
**/
export const SESSION_ATTEMPT = 'SESSION_ATTEMPT';
export const SESSION_ATTEMPT_ERROR = 'SESSION_ATTEMPT_ERROR';
export const SESSION_LOGGED_IN = 'SESSION_LOGGED_IN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';
export const SESSION_LOGGED_OUT = 'SESSION_LOGGED_OUT';

/**
 * Registration actions
**/
export const REGISTRATION_ATTEMPT = 'REGISTRATION_ATTEMPT';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

/**
 * Users actions
**/
export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOADED = 'USERS_LOADED';
export const USERS_LOAD_ERROR = 'USERS_LOAD_ERROR';
