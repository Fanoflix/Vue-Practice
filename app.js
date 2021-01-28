const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: '1037', 
                    name: 'Ammar',
                    phone: '01231231231',
                    email: 'majidamma@shsot.com'
                },
                {
                    id: '2121',
                    name: 'Some1',
                    phone: '1231312312312',
                    email: 'some1@some.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
        <li>
          <h2> {{friend.name}} </h2>
          <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{friend.phone}}</li>
            <li><strong>Email: </strong>{{friend.email}}</li>
          </ul>
        </li>
    `,
    data() {
        return{ 
            detailsAreVisible: false,
            friend: {
                id: '1037', 
                name: 'Ammar',
                phone: '01231231231',
                email: 'majidamma@shsot.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');