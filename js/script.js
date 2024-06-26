const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      tasks: [
        {
          text: "fare i compiti",
          done: false,
        },
        {
          text: "fare la spesa",
          done: false,
        },
        {
          text: "fare la doccia",
          done: false,
        },
      ],
    };
  },
  methods: {
    // metodo per aggiungere nuove tasks
    addNewTask() {
      if (this.newTask !== "" && this.newTask.length > 3) {
        this.tasks.push({
          text: this.newTask,
          done: false,
        });
        this.newTask = "";
      }
    },
    // metodo per rimuovere le tasks
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
