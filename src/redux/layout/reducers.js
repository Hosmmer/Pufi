// @flow
import { LayoutActionTypes } from './constants';

import * as layoutConstants from '../../constants/layout';

const INIT_STATE = {
    layoutType: layoutConstants.LAYOUT_VERTICAL,
    layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID,
    showRightSidebar: false,
};

type LayoutAction = { type: string, payload?: string | null };


const Layout = (state: State = INIT_STATE, action: LayoutAction): any => {
    switch (action.type) {
        case LayoutActionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layoutType: action.payload,
            };

        case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default Layout;
