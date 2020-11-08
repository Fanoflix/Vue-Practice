const app = Vue.createApp({
    data() {
        return {
            courseGoal: {
                name: 'Vue.js 3 Course',
                timeRequired: 20
            },
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() { // This function can be called normally in the {{ }} brackets inside our HTML.
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue';
            } else {
                return 'Master Vue';
            }
        }
    }
});

app.mount('#user-goal');