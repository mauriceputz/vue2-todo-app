<template>
  <div class="todo-list">
    <div 
        class="todo-item"
        :class="[todo.completed ? activeClass : defaulClass]">
      <div class="checker">
        <span class=""><input type="checkbox" @click="changeState(todo)"/></span>
      </div>
      <span> {{ todo.title }} </span>
      <i class="fas fa-times float-right remove-todo-item" @click="deleteTodoEntry(todo)" style="cursor: pointer;"></i>
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
      }
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo", "changeTodoState"]),
    changeState(todo) {
      this.changeTodoState({ todo });
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