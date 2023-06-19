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
    auth: false,
    admin: false,
    categories:[],
    plants:[],
    room:{},
    plant: {},
    rooms:[],
    count: [],
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
    reminders:[],
    remind: {},
    myplantadd: {}
})

export const getters = {
    TOKEN: () => {
      return Cookies.get('token')
    },
    URL_BASE: (state) => {
      return state.url_base
    },
    ADMIN: (state) => {
      return state.admin
    },
    AUTH: (state) => {
      return state.auth
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
    REMIND: (state) => {
      return state.remind
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
    SET_AUTH: (state, payload) => {
      state.auth = payload
    },
    SET_ADMIN: (state, payload) => {
      state.admin = payload
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
    SET_ROOMS_ADD: (state, payload) => {
      state.rooms.push(payload)
    },
    SET_REMIND_ADD: (state, payload) => {
      state.reminders.push(payload)
    },
    SET_MYPLANT_ADD: (state, payload) => {
      state.myplantadd = payload
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
    SET_REMIND: (state, payload) => {
      state.remind = payload
    },
}

export const actions = {
    register(context, user) {
      this.$axios.$post(`${url_base}register`, user, requestHeaders)
      .then((response) => {
        context.commit('SET_TOKEN', response[1])
        context.commit('SET_AUTH', true)
        this.$router.push('/home')
      })
    },

    login(context, user) {
      this.$axios.$post(`${url_base}login`, user, requestHeaders)
      .then((response) => {
        if (response[2][0][0].name === 'user' || response[2][0][0].name === 'expert'){
          context.commit('SET_TOKEN', response[1])
          context.commit('SET_AUTH', true)
          this.$router.push('/home')
        }
        else if (response[2][0][0].name === 'admin'){
          context.commit('SET_TOKEN', response[1])
          context.commit('SET_ADMIN', true)
          context.commit('SET_AUTH', true)
          this.$router.push('/laws')
        }
      })
    },

    logout(context) {
      this.$axios.$post(`${url_base}logout`, null, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('DELETE_TOKEN')
        context.commit('SET_AUTH', false)
        context.commit('SET_ADMIN', false)
        context.commit('SET_USER', [])
        context.commit('SET_REMINDERS', [])
        this.$router.push('/login')
      })
    },

    getCategories(context) {
      this.$axios.get(`${url_base}categories`)
      .then((response) => {
        context.commit('SET_PLANTS', [])
        context.commit('SET_CATEGORIES', response.data)
      })
    },
    getUser(context) {
      this.$axios.get(`${url_base}user`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_USER', response.data.data)
        console.log(response.data.data)
      })
    },
    getPlants(context, id) {
      this.$axios.get(`${url_base}categories/${id}`)
      .then((response) => {
        context.commit('SET_PLANTS', response.data)
        context.commit('SET_PLANT', [])
      })
    },
    getPlant(context, id) {
      this.$axios.get(`${url_base}plants/${id}`)
      .then((response) => {
        context.commit('SET_PLANT', response.data[0])
      })
    },
    addRoom(context, room) {
      this.$axios.$post(`${url_base}add/room`, room, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_ROOMS_ADD', response)
      })
    },
    getRooms(context) {
      this.$axios.get(`${url_base}rooms`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_ROOMS', response.data)
      })
    },
    getCount(context) {
      this.$axios.get(`${url_base}count`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        if (response.data % 10 === 1){
          context.commit('SET_COUNT', response.data + ' ' + 'растение')
        }
        else if (response.data % 10 === 2 || response.data % 10 === 3 || response.data % 10 === 4){
          context.commit('SET_COUNT', response.data + ' ' + 'растения')
        }
        else if (response.data % 10 === 5 || response.data % 10 === 6 || response.data % 10 === 7 || response.data % 10 === 8 || response.data % 10 === 9 || response.data % 10 === 0){
          context.commit('SET_COUNT', response.data + ' ' + 'растений')
        }
        console.log(response.data)
      })
    },
    searchPlant(context, {id, query}) {
      this.$axios.get(`${url_base}find/${id}/${query}`)
      .then((response) => {
        context.commit('SET_PLANTS', response.data)
      })
    },
    searchPlantIsEmpty(context, id) {
      this.$axios.get(`${url_base}find/${id}`)
      .then((response) => {
        context.commit('SET_PLANTS', response.data)
      })
    },
    addPlantUser(context, room) {
      this.$axios.$post(`${url_base}add/plant`, room, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_MYPLANT_ADD', response[1])
        context.dispatch('getMyplants')
        context.dispatch('getCount')
        this.$router.push('/my-plants')
        
      })
    },
    getMyplants(context) {
      this.$axios.get(`${url_base}myplants`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYPLANTS', response.data)
        context.commit('SET_MYPLANT', [])
      })
    },
    getMyPlant(context, id) {
      this.$axios.get(`${url_base}myplant/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYPLANT', response.data[0])
      })
    },
    getAdvice(context, page) {
      this.$axios.get(`${url_base}advice?page=${page}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_ADVICES', response.data.data)
        context.commit('SET_ADVICE', [])
      })
    },
    getAdviceById(context, id) {
      this.$axios.get(`${url_base}advice/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_ADVICE', response.data[0])
      })
    },
    updateUser(context, user) {
      this.$axios.put(`${url_base}user/edit`, user, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_USER', response)
        this.$router.push('/account')
      })
    },
    getMyRoom(context, id) {
      this.$axios.get(`${url_base}room/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_ROOM', response.data[0])
      })
    },
    updateRoom(context, {id, room}) {
      this.$axios.put(`${url_base}room/edit/${id}`, room, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_ROOM', response)
        context.dispatch('getRooms')
      })
    },
    getQueries(context) {
      this.$axios.get(`${url_base}queries`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_QUERIES', response.data)
        context.commit('SET_QUERY', [])
      })
    },
    getQueryById(context, id) {
      this.$axios.get(`${url_base}query/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_QUERY', response.data[0])
      })
    },
    addQuery(context, query) {
      this.$axios.$post(`${url_base}add/query`, query, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_QUERY', response[1])
        this.$router.push('/account')
      })
    },
    getLaws(context) {
      this.$axios.get(`${url_base}laws`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_LAWS', response.data)
        context.commit('SET_LAW', [])
      })
    },
    getLawById(context, id) {
      this.$axios.get(`${url_base}law/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_LAW', response.data[0])
      })
    },
    addLaw(context, law) {
      this.$axios.$post(`${url_base}add/law`, law, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_LAW', response[1])
        context.dispatch('myLaws')
      })
    },
    updateMyPlant(context, {id, myplant}) {
      this.$axios.put(`${url_base}plant/edit/${id}`, myplant, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYPLANT', response)
        context.dispatch('roomByPlant', myplant.room_id)
        context.dispatch('getMyPlant', id)
      })
    },
    deleteMyPlant(context, id) {
      this.$axios.delete(`${url_base}del/plant/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYPLANT', response)
        context.dispatch('getMyplants')
        this.$router.push('/my-plants')
      })
    },
    updateLaw(context, {id, law}) {
      this.$axios.put(`${url_base}law/edit/${id}`, law, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_LAW', response)
        context.dispatch('getLawById', id)
      })
    },
    updateQuery(context, {id, query}) {
      this.$axios.put(`${url_base}query/edit/${id}`, query, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_QUERY', response)
        context.dispatch('getQueryById', id)
      })
    },
    myLaws(context) {
      this.$axios.get(`${url_base}mylaws`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYLAWS', response.data)
      })
    },
    myQueries(context) {
      this.$axios.get(`${url_base}myqueries`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYQUERIES', response.data)
      })
    },
    addAdvice(context, advice) {
      this.$axios.$post(`${url_base}add/advice`, advice, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_ADVICE', response[1])
        context.dispatch('getAdvice')
      })
    },
    lawsOneStatus(context) {
      this.$axios.$get(`${url_base}laws/one`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_LAWSONE', response)
      })
    },
    myAdvice(context) {
      this.$axios.get(`${url_base}myadvice`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_MYADVICE', response.data)
      })
    },
    lawsTwoStatus(context) {
      this.$axios.$get(`${url_base}laws/two`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_LAWSTWO', response)
      })
    },
    lawsThreeStatus(context) {
      this.$axios.$get(`${url_base}laws/three`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_LAWSTHREE', response)
      })
    },
    queriesOneStatus(context) {
      this.$axios.$get(`${url_base}queries/one`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_QUERIESONE', response)
      })
    },
    queriesTwoStatus(context) {
      this.$axios.$get(`${url_base}queries/two`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_QUERIESTWO', response)
      })
    },
    queriesThreeStatus(context) {
      this.$axios.$get(`${url_base}queries/three`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_QUERIESTHREE', response)
      })
    },
    roomByPlant(context, id) {
      this.$axios.$get(`${url_base}roomByPlant/${id}`, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_ROOMPLANT', response[0])
      })
    },
    createReminders(context, reminder) {
      this.$axios.$post(`${url_base}add/reminder`, reminder, {headers: {Authorization: Cookies.get('token')}} )
      .then((response) => {
        context.commit('SET_REMIND_ADD', response.date)
        context.dispatch('getReminders')
      })
    },
    getFindPlants(context, id) {
      this.$axios.get(`${url_base}categories/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_FINDPLANTS', response.data)
      })
    },

    giveRoleExpert(context, id) {
      this.$axios.get(`${url_base}user/${id}/giverole`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_USER', response.data)
      })
    },

    getReminders(context) {
      this.$axios.get(`${url_base}reminders`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_REMINDERS', response.data)
      })
    },

    getRemind(context, id) {
      this.$axios.get(`${url_base}myremind/${id}`, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        console.log(response.data[0])
        context.commit('SET_REMIND', response.data[0])
      })
    },

    updateMyRemind(context, {id, myremind}) {
      this.$axios.put(`${url_base}remind/edit/${id}`, myremind, {headers: {Authorization: Cookies.get('token')}})
      .then((response) => {
        context.commit('SET_REMIND', response)
        console.log(response)
        context.dispatch('getReminders')
      })
    },
   
}