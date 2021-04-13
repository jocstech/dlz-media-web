// state
export const state = () => ({
  settings: null,
  showOverlay: false,
  showMessageBox: false,
})

// getters
export const getters = {
  settings: (state) => state.settings,
  showOverlay: (state) => state.showOverlay,
  showMessageBox: (state) => state.showMessageBox,
}

// mutations
export const mutations = {
  UPDATE_SETTINGS(state, settings) {
    state.settings = settings
  },
  CLOSE_OVERLAY(state) {
    state.showMessageBox = false
    state.showOverlay = false
  },
  UPDATE_MESSAGE_BOX(state, showMessageBox) {
    state.showMessageBox = showMessageBox
    state.showOverlay = showMessageBox
  },
}

// actions
export const actions = {
  async nuxtServerInit(
    { dispatch },
    {
      app: {
        context: { $directus },
      },
    }
  ) {
    const settings = await $directus.singleton('settings').read()
    dispatch('updateSettings', settings)
  },

  updateSettings({ commit }, settings) {
    commit('UPDATE_SETTINGS', settings)
  },
}
