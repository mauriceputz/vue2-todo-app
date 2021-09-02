<template>
  <div>
    <div v-if="todos.length > 0">
      <div>
        <todoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </div>
    </div>
    <div>
      <button class="btn btn-primary mb-2" @click="markAll">
        Alle markieren
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import todoListItem from "./todoListItem.vue";

export default {
  name: "todoList",
  components: {
    todoListItem,
  },
  computed: {
    ...mapGetters({
      todos: "getTodos",
    }),
  },
  methods: {
    markAll() {},
  },
};
</script>

<style scoped>
</style>