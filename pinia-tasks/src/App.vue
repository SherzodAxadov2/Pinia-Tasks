<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- Task Form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- Filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favorite tasks</button>
    </nav>

    <!-- Loading -->
    <div class="loading" v-if="taskStore.isLoading">Loading tasks...</div>

    <!-- Task List -->
    <div class="task-list" v-if="filter === 'all'">
      <p>
        You have <b>{{ taskStore.totalCount }} </b> tasks left to do
      </p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>
        You have <strong>{{ taskStore.favsCount }}</strong> favs left to do
      </p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- <button @click="taskStore.$reset">Reset</button> -->
  </main>
</template>

<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";

const taskStore = useTaskStore();
const filter = ref("all");
taskStore.getTasks();
</script>
