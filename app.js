const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        ConfirmInput() {
            this.confirmedName = this.name;
        },
        ResetInput() {
            this.name = '';
            this.confirmedName= '';
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
        // SetName(event, lastName) {
        //     this.name = event.target.value; // This is the value that the user entered.
        //                                     // Now we cannot use the "Calling method" in our HTML.
        //                                     // Must use "Pointing method".
        // } // event.target gives us access to the element on which the event occured.
    }
})

app.mount('#events');