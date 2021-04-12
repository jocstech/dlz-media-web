// state
export const state = () => ({
  settings: null,
})

// getters
export const getters = {
  settings: (state) => state.settings,
}

// mutations
export const mutations = {
  UPDATE_SETTINGS(state, settings) {
    state.settings = settings
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
