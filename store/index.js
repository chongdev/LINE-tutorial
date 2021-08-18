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
  },
  lineleff: {
    isInClient: false,
  }
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  getLine(state) {
    return state.line;
  },
  getLineLeff(state) {
    return state.lineleff;
  },
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
  },
  SET_LINE_LIFF(state, data) {
    state.line = {
      ...state.lineleff,
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
  },

  setLineLeff({ commit }, data){
    commit("SET_LINE_LIFF", data);
  }
};
