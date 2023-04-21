import Cookies from 'js-cookie'
const requestHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const url_base = 'http://localhost:8120/'

export const state = () => ({
    url_base: 'http://localhost:8120',
    user: {},
    categories:[],
    plants:[],
    room:{},
    plant: {},
    rooms:[],
    count: 0,
})

export const getters = {
    TOKEN: () => {
      return Cookies.get('token')
    },
    URL_BASE: (state) => {
      return state.url_base
    },
    USER: (state) => {
      return state.user
    },
    CATEGORIES: (state) => {
      return state.categories
    },
    PLANTS: (state) => {
      return state.plants
    },
    PLANT: (state) => {
      return state.plant
    },
    ROOM: (state) => {
      return state.room
    },
    ROOMS: (state) => {
      return state.rooms
    },
    COUNT: (state) => {
      return state.count
    },
}

export const mutations = {
    SET_TOKEN: (state, payload) => {
      Cookies.set('token', payload);
    },
    DELETE_TOKEN: (state) => {
      Cookies.remove('token')
    },
    SET_USER: (state, payload) => {
      state.user = payload
    },
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload
    },
    SET_PLANTS: (state, payload) => {
      state.plants = payload
    },
    SET_PLANT: (state, payload) => {
      state.plant = payload
    },
    SET_ROOM: (state, payload) => {
      state.room = payload
    },
    SET_ROOMS: (state, payload) => {
      state.rooms = payload
    },
    SET_COUNT: (state, payload) => {
      state.count = payload
    },
}

export const actions = {
    async register(context, user) {
        const response = await this.$axios.$post(`${url_base}register`, user, requestHeaders)
        context.commit('SET_TOKEN', response[1])
    },

    async login(context, user) {
        const response = await this.$axios.$post(`${url_base}login`, user, requestHeaders);
        context.commit('SET_TOKEN', response[1])
        location.reload()
    },

    async logout(context) {
        const response = await this.$axios.$post(`${url_base}logout`, null, {headers: {Authorization: Cookies.get('token')}})
        context.commit('DELETE_TOKEN')
        location.reload()
    },
    async getCategories(context) {
      const response = await this.$axios.get(`${url_base}categories`)
      context.commit('SET_CATEGORIES', response.data)
    },
    async getUser(context) {
      const response = await this.$axios.get(`${url_base}user`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_USER', response.data.data)
    },
    async getPlants(context, id) {
      const response = await this.$axios.get(`${url_base}categories/${id}`)
      context.commit('SET_PLANTS', response.data)
    },
    async getPlant(context, id) {
      const response = await this.$axios.get(`${url_base}plants/${id}`)
      context.commit('SET_PLANT', response.data[0])
    },
    async addRoom(context, room) {
      const response = await this.$axios.$post(`${url_base}add/room`, room, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_ROOM', response[1])
      location.reload()
    },
    async getRooms(context) {
      const response = await this.$axios.get(`${url_base}rooms`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_ROOMS', response.data)
      console.log(response.data)
    },
    async getCount(context) {
      const response = await this.$axios.get(`${url_base}count`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_COUNT', response.data)
      console.log(response.data)
    },
    async searchPlant(context, query) {
      const response = await this.$axios.get(`${url_base}find/${query}`)
      context.commit('SET_PLANTS', response.data)
    },
}