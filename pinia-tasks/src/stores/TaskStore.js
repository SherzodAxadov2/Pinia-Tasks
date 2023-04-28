import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Learn Pinia with Tasks", isFav: false },
      { id: 2, title: "Complete Pinia Tasks", isFav:  true},
    ],
    name: "Sherzod",
  }),
  getters:{
    favs:(state)=> state.tasks.filter(task=>task.isFav),
    favsCount:(state)=>  state.favs.length ,
    totalCount:(state)=> state.tasks.length
  },
  actions:{
    addTask(task){
        this.tasks.push(task)
    }
  }
});
