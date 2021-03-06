import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: []
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todoItems.push(newTodo);
      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },

    deleteTodo(state, newTodo) {
      state.todoItems = state.todoItems.filter((val) => val.id !== newTodo.id);
      localStorage.setItem('todoItems', JSON.stringify(state.todoItems));
    },

    updateTodo(state, newTodo) {
      state.todoItems.map((val)=> {
        if (val.id === newTodo.id ) {
          val.title = newTodo.title;
          val.edit = false;
        }
        return val;
      });
      localStorage.setItem('todoItems',JSON.stringify(state.todoItems));
    },

    changeTodoState(state, newTodo) {
      state.todoItems.map((val)=> {
        if (val.id === newTodo.id ) {
          const aux = !val.completed;
          val.completed = aux;
        }
        return val;
      });
      localStorage.setItem('todoItems',JSON.stringify(state.todoItems));
    },
    changeEditState(state, newTodo) {
      state.todoItems.map((val)=> {
        if (val.id === newTodo.id ) {
          const aux = !val.completed;
          val.edit = aux;
        }
        return val;
      });
      localStorage.setItem('todoItems',JSON.stringify(state.todoItems));
    },
    markAll(state) {
      state.todoItems.map((noteObj)=> {
        noteObj.completed = true;
      });
      localStorage.setItem('todoItems',JSON.stringify(state.todoItems));
    }
  },
  actions: {
    addTodo({commit}, {newTodo}) {
      commit('addTodo', newTodo)
    },
    deleteTodo({commit}, {todo}) {
      commit('deleteTodo', todo)
    },
    updateTodo({commit}, {todo}) {
      commit('updateTodo', todo)
    },
    changeEditState({commit}, {todo}) {
      commit('changeEditState', todo)
    },
    changeTodoState({commit}, {todo}){
      commit('changeTodoState', todo)
    },
    markAll({commit}){
      commit('markAll')
    },
  },
  getters: {
    getTodos(state) {
      const newTodo = JSON.parse(localStorage.getItem('newTodo'));
      if (newTodo && newTodo.length > 0) {
        state.todoItems = newTodo;
      }

      return state.todoItems;
    },
  }
})