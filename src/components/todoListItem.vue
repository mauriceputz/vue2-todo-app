<template>
  <div class="todo-list">

    <div v-if="!todo.edit"
        class="todo-item"
        :class="[todo.completed ? activeClass : defaulClass]">
      <div class="checker mr-2">
        <span class="">
            <input
                type="checkbox" 
                @click="changeState(todo)" 
                :checked="todo.completed"/>
        </span>
      </div>
      <span @dblclick="editEvent(todo)"> {{ todo.title }} </span>
      <i class="fas fa-times float-right remove-todo-item" @click="deleteTodoEntry(todo)" style="cursor: pointer;"></i>
    </div>

    <div v-else>
            <input
                type="text"
                class="form-control"
                :placeholder="todo.title"
                v-model="newTodoTitle"
            />
            <hr>
            <i class="fas fa-check"
            style="cursor: pointer"
            @click="updateEvent(todo, todo.title, newTodoTitle)"
            ></i>
        </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "todoListItem",
  props: ["todo"],
  data() {
      return {
          activeClass: 'done',
          defaulClass: 'not-done',
          newTodoTitle: ''
      }
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo", "changeTodoState", "updateTodo", "changeEditState"]),
    changeState(todo) {
       this.changeTodoState({ todo });
    },
    editEvent(todo) {
        this.changeEditState({ todo });
    },
    updateEvent(todo, oldTodoTitle, newTodoTitle) {
        if (newTodoTitle === '') newTodoTitle = oldTodoTitle;
        todo.title = newTodoTitle
        this.updateTodo({todo});
        this.newTodoTitle = '';
    },
    deleteTodoEntry(todo) {
        this.deleteTodo( {todo} );
    }
  },
};
</script>

<style scoped>

.done {
    text-decoration: line-through;
}

.not-done {
    text-decoration: none;
}

.todo-list {
    margin: 10px 0
}

.todo-list .todo-item {
    padding: 15px;
    margin: 5px 0;
    border-radius: 0;
    background: #f7f7f7
}

.remove-todo-item {
    color: #ccc;
    visibility: hidden
}

.remove-todo-item:hover {
    color: #5f5f5f
}

.todo-item:hover .remove-todo-item {
    visibility: visible
}

div.checker {
    width: 18px;
    height: 18px
}

div.checker input,
div.checker span {
    width: 18px;
    height: 18px
}

div.checker span {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    text-align: center;
    background-position: 0 -260px;
}

div.checker, div.checker input, div.checker span {
    width: 19px;
    height: 19px;
}

div.checker, div.radio, div.uploader {
    position: relative;
}

div.button, div.button *, div.checker, div.checker *, div.radio, div.radio *, div.selector, div.selector *, div.uploader, div.uploader * {
    margin: 0;
    padding: 0;
}

div.button, div.checker, div.radio, div.selector, div.uploader {
    display: -moz-inline-box;
    display: inline-block;
    zoom: 1;
    vertical-align: middle;
}
</style>