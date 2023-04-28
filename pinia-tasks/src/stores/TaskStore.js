import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Learn Pinia with Tasks", isFav: false },
      { id: 2, title: "Complete Pinia Tasks", isFav:  true},
    ],
    isLoading: false
  }),

  getters:{
    favs:(state)=> {
     return state.tasks.filter(task=>task.isFav)
    },
    favsCount:(state)=>  state.favs.length,
    totalCount:(state)=> state.tasks.length
  },

  actions:{
    async addTask(task){
        this.tasks.push(task)

        const res = await fetch('http://localhost:3000/tasks', {
            method:'POST',
            body: JSON.stringify(this.task),
            headers:{'Content-type': 'application/json'}
        })

        if(res.error){
            console.log(res.error);
        }
    },
    async deleteTodo(id){
        this.tasks = this.tasks.filter(task=>task.id !==id)

        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method:'DELETE'
        })

        if(res.error){
            console.log(res.error);
        }
    },
    async toggleFav(id){
        const task = this.tasks.find(task=> task.id===id)
        task.isFav = !task.isFav;

        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method:'PATCH',
            body: JSON.stringify({isFav: task.isFav}),
            headers:{'Content-Type': 'application/json'}
        })

        if(res.error){
            console.log(res.error);
        }
    },
    async getTasks(){
        this.isLoading = true
        const res = await fetch('http://localhost:3000/tasks')
        const data = await res.json()
        console.log(data);
        
        this.isLoading = false
        this.tasks = data
    }
  }
});
