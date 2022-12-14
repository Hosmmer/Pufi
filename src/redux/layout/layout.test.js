import { expectSaga } from 'redux-saga-test-plan';

import * as layoutConstants from '../../constants/layout';
import * as actions from './actions';
import layoutReducer from './reducers';

import { watchChangeLayoutType } from './saga';

const INIT_STATE = {
    layoutType: layoutConstants.LAYOUT_VERTICAL,
    layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID,
};

describe('change layout type flow', () => {

    it('detached', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_DETACHED))
            .hasFinalState({
                ...INIT_STATE,
                layoutType: layoutConstants.LAYOUT_DETACHED,
            })
            .silentRun();
    });
});




