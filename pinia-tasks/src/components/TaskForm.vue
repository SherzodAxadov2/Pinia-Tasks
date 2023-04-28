<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newTask" placeholder="I need to..." />
    <button>Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

// import { useUserStore } from "../stores/userStore";
// useUserStore();

const newTask = ref("");
const taskStore = useTaskStore();

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    console.log(newTask.value);
    const task = {
      id: Math.round(Math.random() * 1000000),
      title: newTask.value,
      isFav: false,
    };
    taskStore.addTask(task);
    newTask.value = "";
  }
};
</script>
