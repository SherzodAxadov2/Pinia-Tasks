<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newtask" placeholder="I need to..." />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const newTask = ref("");
const taskStore = useTaskStore();

const handleSubmit = () => {
  if (newTask.value > 0) {
    const task = { id: 10, title: newtask.value, isFav: false };
    taskStore.addTask(task);
  }
};
</script>
