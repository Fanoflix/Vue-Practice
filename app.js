const app = Vue.createApp({ 
    data() {
        return {
            counter: 10,
            name: '',
            // fullName: '',
            lastName: '',
        };
    },
    watch: { // We can use the name we used in the data or computer property as a name for the watcher method
        // name(value) { // This tells Vue, that whenever the data attribute "name" changes, this watcher method will re-execute.
        // // We DO NOT return anything here
        // // The latest value of the watched property is automatically passed into the watched property.
        //     if (value === '') {
        //         this.fullName = '';
        //     }
        //     else {
        //         this.fullName = value + ' ' + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if (value === '') {
        //         this.fullName = '';
        //     }
        //     else {
        //         this.fullName = this.name + ' ' + value;
        //     }
        // },
        // counter(value) {
        //     if (value > 50) {
        //         this.counter = 0;
        //     }
        // },
    },
    computed: {
        // Using the fullName() computer property is a better choice than using 2 watchers (one for name, and the other for lastName) because its a lot of code. Computed is the better choice here.

        // This resetCounter() computer property will have to be CALLED to work. The watcher above (line 29) named 'counter' is basically watching the variable counter for any changes within in. Therefore it doesnt need to be called. Watcher is the better choice here.

        // resetCounter() { 
        //     if (counter > 50) {
        //         counter = 50;
        //     }
        // },
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