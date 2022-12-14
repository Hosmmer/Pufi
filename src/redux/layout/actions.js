// @flow
import { LayoutActionTypes } from './constants';

type LayoutAction = { type: string, payload?: string | null };

export const changeLayout = (layout: string): LayoutAction => ({
    type: LayoutActionTypes.CHANGE_LAYOUT,
    payload: layout,
});


export const changeSidebarType = (sidebarType: string): LayoutAction => ({
    type: LayoutActionTypes.CHANGE_SIDEBAR_TYPE,
    payload: sidebarType,
});



