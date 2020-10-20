const app = Vue.createApp({
    data() {
        return {
            courseGoal: {
                name: 'Vue.js 3 Course',
                timeRequired: 20
            }
        };
    }
});

app.mount('#user-goal');