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
                if (this.boxAselected == false) { this.boxAselected = true;}
                else if (this.boxAselected == true) { this.boxAselected = false }
            }
            else if (boxx === 'B')  {
                if (this.boxBselected == false) { this.boxBselected = true;}
                else if (this.boxBselected == true) { this.boxBselected = false }
            }
            else if (boxx === 'C')  {
                if (this.boxCselected == false) { this.boxCselected = true;}
                else if (this.boxCselected == true) { this.boxCselected = false }
            }
        },
    },

});

app.mount('#styling')