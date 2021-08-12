export const state = () => ({
  user: {
    firstname: "",
    lastname: "",
    gender: 1,
    email: "",
    phone: "",
    birthday: "",
    company: "",
    position: ""
  },
  line: {
    pictureUrl: null,
    displayName: null,
    userId: null
  }
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  getLine(state) {
    return state.line;
  }
};

export const mutations = {
  SET_USER(state, data) {
    state.user = {
      ...state.user,
      ...data
    };
  },
  SET_LINE(state, data) {
    state.line = {
      ...state.line,
      ...data
    };
  }
};

export const actions = {
  setUser({ commit }, data) {
    commit("SET_USER", data);
  },

  setLine({ commit }, data) {
    commit("SET_LINE", data);
  }
};
