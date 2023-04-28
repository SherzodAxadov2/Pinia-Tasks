<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons"> delete </i>
      <i class="material-icons"> favorite </i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: Object,
});
</script>
