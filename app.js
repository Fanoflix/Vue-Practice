
const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal(event) {
      console.log(event.target.id)
      if (this.enteredGoalValue !== '') {
        this.goals.push(this.enteredGoalValue);
      }
      this.enteredGoalValue = ''
    }
  }
});

app.mount('#user-goals');
