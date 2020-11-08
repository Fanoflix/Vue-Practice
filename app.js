const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        IncrementCounter() {
            this.counter++;
        },
        DecrementCounter() {
            if (this.counter > 0) {
                this.counter--;
            }
        }
    }
})

app.mount('#events');