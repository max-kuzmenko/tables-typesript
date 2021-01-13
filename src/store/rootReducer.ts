import { combineReducers } from '@reduxjs/toolkit';

import { reducer as editor } from './editor/duck';

export default combineReducers({
  editor,
});
