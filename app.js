const app = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false
        };
    },
    methods: {
        boxSelected(boxx) {
            if (boxx === 'A')  {
                this.boxAselected = !this.boxAselected;
            }
            else if (boxx === 'B')  {
                this.boxBselected = !this.boxBselected;
            }
            else if (boxx === 'C')  {
                this.boxCselected = !this.boxCselected;
            }
        },
    },

});

app.mount('#styling')