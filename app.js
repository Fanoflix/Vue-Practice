const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course!",
            courseGoalB: "<h2>Master vue by completing this course!</h2>",
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() { // This function can be called normally in the {{ }} brackets inside our HTML.
                        // this in vue is magic. It takes all the data you return in this data() object
                        // and it merges it into a global vue instance object (Into your vue app object)
                        // Same with methods, they are also available.
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');