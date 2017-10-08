export const WS_INIT = '/workspace/init'
export const WS_SYNCING_DEFAULTS = '/workspace/defaults/syncing'
export const WS_SYNCED_DEFAULTS = '/workspace/defaults/synced'
export const WS_SYNC_FAILED_DEFAULTS = '/workspace/defaults/sync_failed'
export const WS_CHANGING_DEFAULTS = '/workspace/defaults/changing'
export const WS_CHANGED_DEFAULTS = '/workspace/defaults/changed'
export const WS_CHANGE_FAILED_DEFAULTS = '/workspace/defaults/change_failed'
export const WS_LOADING_LIST = '/workspace/list/loading'
export const WS_LOADED_LIST = '/workspace/list/loaded'
export const WS_LOAD_FAILED_LIST = '/workspace/list/load_failed'

const initialState = {
  error: '',
  isSyncingDefaults: false,
  isSyncedDefaults: false,
  isChangingDefaults: false,
  isChangedDefaults: false,
  isLoadingList: false,
  isLoadedList: false,
  defaultWorkspaceId: 0,
  workspaces: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WS_SYNCING_DEFAULTS:
      return {
        ...state,
        isSyncingDefaults: false,
      }
    case WS_SYNCED_DEFAULTS:
      return {
        ...state,
        isSyncedDefaults: false,
      }
    default:
      return state
  }
}

// HEY TODO. LET'S START FROM HERE NEXT TIME.
// Next, we need to manage workspace and records.
