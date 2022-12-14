// @flow
import { all, call, fork, takeEvery, put } from 'redux-saga/effects';

import { LayoutActionTypes } from './constants';
import * as layoutConstants from '../../constants';
import { changeSidebarType as changeSidebarTypeAction } from './actions';

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value);
    return true;
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
    try {
        yield call(changeBodyAttribute, 'data-layout', layout);
        if (layout === layoutConstants.LAYOUT_DETACHED) {
            yield put(changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE));
        }
    } catch (error) {}
}

/**
 * Watchers
 */
export function* watchChangeLayoutType(): any {
    yield takeEvery(LayoutActionTypes.CHANGE_LAYOUT, changeLayout);
}

function* LayoutSaga(): any {
    yield all([
        fork(watchChangeLayoutType)
    ]);
}

export default LayoutSaga;
