const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            // confirmedName: '',
        };
    },
    computed: {
        fullName() { // Naming this as a data property.
                    // You should name your computed properties just like your data properties.
            console.log("Running COMPTUED again!....")
            if (this.name === '') {
                return '';
            }
            if (this.name.length > 4){ 
                return this.name +' ' + 'Nasir';
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