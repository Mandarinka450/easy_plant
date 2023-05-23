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
    myplant: {},
    myplants: [],
    advices: [],
    advice:{},
    query:{},
    queries: [],
    law:{},
    laws: [],
    mylaws:[],
    myqueries:[],
    findPlants:[],
    lawsone: [],
    lawstwo: [],
    lawsthree: [],
    queriesone: [],
    queriestwo: [],
    queriesthree: [],
    myadvice:[],
    roomPlant: [],
    reminders:[]
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
    MYPLANT: (state) => {
      return state.myplant
    },
    MYPLANTS: (state) => {
      return state.myplants
    },
    ADVICES: (state) => {
      return state.advices
    },
    ADVICE: (state) => {
      return state.advice
    },
    QUERIES: (state) => {
      return state.queries
    },
    QUERY: (state) => {
      return state.query
    },
    LAWS: (state) => {
      return state.laws
    },
    LAW: (state) => {
      return state.law
    },
    MYLAWS: (state) => {
      return state.mylaws
    },
    MYQUERIES: (state) => {
      return state.myqueries
    },
    FINDPLANTS: (state) => {
      return state.findplants
    },
    LAWSONE: (state) => {
      return state.lawsone
    },
    LAWSTWO: (state) => {
      return state.lawstwo
    },
    LAWSTHREE: (state) => {
      return state.lawsthree
    },
    MYADVICE: (state) => {
      return state.myadvice
    },
    QUERIESONE: (state) => {
      return state.queriesone
    },
    QUERIESTWO: (state) => {
      return state.queriestwo
    },
    QUERIESTHREE: (state) => {
      return state.queriesthree
    },
    ROOMPLANT: (state) => {
      return state.roomPlant
    },
    REMINDERS: (state) => {
      return state.reminders
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
    SET_MYPLANT: (state, payload) => {
      state.myplant = payload
    },
    SET_MYPLANTS: (state, payload) => {
      state.myplants = payload
    },
    SET_ADVICES: (state, payload) => {
      state.advices = payload
    },
    SET_ADVICE: (state, payload) => {
      state.advice = payload
    },
    SET_QUERIES: (state, payload) => {
      state.queries = payload
    },
    SET_QUERY: (state, payload) => {
      state.query = payload
    },
    SET_LAWS: (state, payload) => {
      state.laws = payload
    },
    SET_LAW: (state, payload) => {
      state.law = payload
    },
    SET_MYLAWS: (state, payload) => {
      state.mylaws = payload
    },
    SET_MYQUERIES: (state, payload) => {
      state.myqueries = payload
    },
    SET_FINDPLANTS: (state, payload) => {
      state.findplants = payload
    },
    SET_LAWSONE: (state, payload) => {
      state.lawsone = payload
    },
    SET_LAWSTWO: (state, payload) => {
      state.lawstwo = payload
    },
    SET_LAWSTHREE: (state, payload) => {
      state.lawsthree = payload
    },
    SET_MYADVICE: (state, payload) => {
      state.myadvice = payload
    },
    SET_QUERIESONE: (state, payload) => {
      state.queriesone = payload
    },
    SET_QUERIESTWO: (state, payload) => {
      state.queriestwo = payload
    },
    SET_QUERIESTHREE: (state, payload) => {
      state.queriesthree = payload
    },
    SET_ROOMPLANT: (state, payload) => {
      state.roomPlant = payload
    },
    SET_REMINDERS: (state, payload) => {
      state.reminders = payload
    },
}

export const actions = {
    async register(context, user) {
        const response = await this.$axios.$post(`${url_base}register`, user, requestHeaders)
        context.commit('SET_TOKEN', response[1])
        this.$router.push('/home')
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
      console.log(response.data)
    },
    async searchPlantIsEmpty(context) {
      const response = await this.$axios.get(`${url_base}find/`)
      context.commit('SET_PLANTS', response.data)
      console.log(response.data)
    },
    async addPlantUser(context, room) {
      const response = await this.$axios.$post(`${url_base}add/plant`, room, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_MYPLANT', response[1])
      location.reload()
    },
    async getMyplants(context) {
      const response = await this.$axios.get(`${url_base}myplants`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYPLANTS', response.data)
      console.log(response.data)
    },
    async deleteRoom(context, room) {
      const response = await this.$axios.post(`${url_base}del/room/${id}`, room, {headers: {Authorization: Cookies.get('token')}})
      context.dispatch('getRooms')
      location.reload()
    },
    async getMyPlant(context, id) {
      const response = await this.$axios.get(`${url_base}myplant/${id}`)
      context.commit('SET_MYPLANT', response.data[0])
      console.log(response.data[0])
    },
    async getAdvice(context) {
      const response = await this.$axios.get(`${url_base}advice`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_ADVICES', response.data)
      console.log(response.data)
    },
    async getAdviceById(context, id) {
      const response = await this.$axios.get(`${url_base}advice/${id}`)
      context.commit('SET_ADVICE', response.data[0])
      console.log(response.data[0])
    },
    async updateUser(context, user) {
      const response = await this.$axios.put(`${url_base}user/edit`, user, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_USER', response)
      console.log(response)
      this.$router.push('/account')
    },
    async getMyRoom(context, id) {
      const response = await this.$axios.get(`${url_base}room/${id}`)
      context.commit('SET_ROOM', response.data[0])
      console.log(response.data[0])
    },
    async updateRoom(context, {id, room}) {
      const response = await this.$axios.put(`${url_base}room/edit/${id}`, room, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_ROOM', response)
      console.log(response)
      location.reload()
    },
    async getQueries(context) {
      const response = await this.$axios.get(`${url_base}queries`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_QUERIES', response.data)
      console.log(response.data)
    },
    async getQueryById(context, id) {
      const response = await this.$axios.get(`${url_base}query/${id}`)
      context.commit('SET_QUERY', response.data[0])
      console.log(response.data[0])
    },
    async addQuery(context, query) {
      const response = await this.$axios.$post(`${url_base}add/query`, query, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_QUERY', response[1])
      this.$router.push('/account')
    },
    async getLaws(context) {
      const response = await this.$axios.get(`${url_base}laws`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_LAWS', response.data)
      console.log(response.data)
    },
    async getLawById(context, id) {
      const response = await this.$axios.get(`${url_base}law/${id}`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_LAW', response.data[0])
      console.log(response.data[0])
    },
    async addLaw(context, law) {
      const response = await this.$axios.$post(`${url_base}add/law`, law, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_LAW', response[1])
      location.reload()
    },
    async updateMyPlant(context, {id, myplant}) {
      const response = await this.$axios.put(`${url_base}plant/edit/${id}`, myplant, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYPLANT', response)
      console.log(response)
      location.reload()
    },
    async deleteMyPlant(context, id) {
      const response = await this.$axios.delete(`${url_base}del/plant/${id}`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYPLANT', response)
      console.log(response)
      this.$router.push('/my-plants')
    },
    async updateLaw(context, {id, law}) {
      const response = await this.$axios.put(`${url_base}law/edit/${id}`, law, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_LAW', response)
      this.$router.push('/laws')
      console.log(response)
    },
    async updateQuery(context, {id, query}) {
      const response = await this.$axios.put(`${url_base}query/edit/${id}`, query, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_QUERY', response)
      this.$router.push('/queries')
      console.log(response)
    },
    async myLaws(context) {
      const response = await this.$axios.get(`${url_base}mylaws`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYLAWS', response.data)
      console.log(response.data)
    },
    async myQueries(context) {
      const response = await this.$axios.get(`${url_base}myqueries`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYQUERIES', response.data)
      console.log(response.data)
    },
    async addAdvice(context, advice) {
      const response = await this.$axios.$post(`${url_base}add/advice`, advice, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_ADVICE', response[1])
    },
    async lawsOneStatus(context) {
      const response = await this.$axios.$get(`${url_base}laws/one`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_LAWSONE', response)
      console.log(response)
    },
    async myAdvice(context) {
      const response = await this.$axios.get(`${url_base}myadvice`, {headers: {Authorization: Cookies.get('token')}})
      context.commit('SET_MYADVICE', response.data)
      console.log(response.data)
    },
    async lawsTwoStatus(context) {
      const response = await this.$axios.$get(`${url_base}laws/two`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_LAWSTWO', response)
      console.log(response)
    },
    async lawsThreeStatus(context) {
      const response = await this.$axios.$get(`${url_base}laws/three`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_LAWSTHREE', response)
      console.log(response)
    },
    async queriesOneStatus(context) {
      const response = await this.$axios.$get(`${url_base}queries/one`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_QUERIESONE', response)
      console.log(response)
    },
    async queriesTwoStatus(context) {
      const response = await this.$axios.$get(`${url_base}queries/two`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_QUERIESTWO', response)
      console.log(response)
    },
    async queriesThreeStatus(context) {
      const response = await this.$axios.$get(`${url_base}queries/three`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_QUERIESTHREE', response)
      console.log(response)
    },
    async roomByPlant(context, id) {
      const response = await this.$axios.$get(`${url_base}roomByPlant/${id}`, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_ROOMPLANT', response[0])
      console.log(response[0])
    },
    async createReminders(context, reminder) {
      const response = await this.$axios.$post(`${url_base}add/reminder`, reminder, {headers: {Authorization: Cookies.get('token')}} )
      context.commit('SET_REMINDERS', response.date)
      location.reload()
    },
    async getFindPlants(context, id) {
      const response = await this.$axios.get(`${url_base}categories/${id}`)
      context.commit('SET_FINDPLANTS', response.data)
    },
   
}