<template>
  <div class="form-group mx-sm-3 mb-2">
    <div v-show="error" class="alert alert-danger">
      Der Eintrag darf nicht leer sein!
    </div>
    <input
      class="form-control"
      autofocus
      autocomplete="off"
      v-model="todo"
      placeholder="Was ist heute zu tun...?"
      @keyup.enter="addTodoItem()"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import uuid from 'uuid/v4'

export default {
    name: 'todoEntry',
    data() {
        return {
            todo: '',
            error: false
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        addTodoItem() {
          if (this.todo === '') return this.error = true;
            const newTodo = {
              title: this.todo,
              completed: false,
              id: uuid()
            };
            this.addTodo({newTodo});
            this.todo = '';
            this.error = false;
        }
    }
};
</script>

<style scoped>
</style>