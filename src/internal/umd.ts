/*
  NOTE: This is the global export file for rxjs v6 and higher.
 */

/* rxjs and rxjs.operators */
export * from '../index';

/* rxjs.testing */
import * as _testing from '../testing/index';
export const testing = _testing;

/* rxjs.ajax */
import * as _ajax from '../ajax/index';
export const ajax = _ajax;

/* rxjs.webSocket */
import * as _webSocket from '../webSocket/index';
export const webSocket = _webSocket;
