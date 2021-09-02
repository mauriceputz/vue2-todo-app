<template>
  <div id="app">
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-6 offset-3">
            <div class="card">

              <div class="text-center">
                <p>MACHERJEK TODO APP</p>
              </div>

              <div>
                <todoEntry />
              </div>

              <div class="mt-3 text-center">
                <todoList />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import todoEntry from "./components/todoEntry.vue";
import todoList from "./components/todoList.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    todoEntry,
    todoList
  },
  computed: {
    ...mapGetters({
        'todos': 'getTodos',
      }),
  },
  methods: {
    markAll() {
      console.log();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
