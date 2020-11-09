const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        IncrementCounter(num) {
            return this.counter = this.counter + num;
        },
        DecrementCounter(num) {
            if (this.counter > 0) {
                this.counter = this.counter - num;
            }
        }
    }
})

app.mount('#events');