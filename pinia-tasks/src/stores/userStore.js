import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [{ id: 1, name: "Axadov Sherzod" }],
  }),
})
