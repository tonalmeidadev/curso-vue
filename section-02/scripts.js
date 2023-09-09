const todoList = {
  data() {
    return {
      todos: [],
      newTodo: {
        completed: false
      }
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          completed: false
        }
        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    }
  },
  created() {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
  },
  updated() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}

Vue.createApp(todoList).mount("#app")