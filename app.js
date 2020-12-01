const app = Vue.createApp({ 
    data() {
        return {
            counter: 10,
            name: '',
            lastName: '',
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        },
    },
    computed: {
        fullName() { // Naming this as a data property.
                    // You should name your computed properties just like your data properties.
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            if (this.name.length > 4){ 
                return this.name +' ' + this.lastName;
            }
        }
    },
    methods: {
        ResetInput() {
            this.name = '';
            this.counter = 0;
        },
        SubmitForm() {
            alert('Submitted!');
        },
        IncrementCounter(num) {
            return this.counter = this.counter + num;
        },
        DecrementCounter(num) {
            if (this.counter > 0) {
                this.counter = this.counter - num;
            }
        },
    }
})

app.mount('#events');