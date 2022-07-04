const vm = Vue.createApp({ //store in the variable
    data(){
        return {
            firstName: 'Ray',
            middleName: '',
            lastName: '',
            url: 'https://google.com',
            age: ''
        }
    },
    methods: {
        increment() {
            this.age++ 
        },
        updateLastName(msg, event){
            // event.preventDefault(); <- handled by event modifier @input.prevent
            // console.log(msg);
            // console.log(event.target.value)
            this.lastName = event.target.value
        },
        greet(){
            alert(`Hi ${this.fullName()}! Nice meeting you! You are now ${this.age} year's old`)
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch: {
        age(newVal, oldVal){
            setTimeout(() => {
                this.age = 20
            }, 3000)
        }
    }
}).mount('#app')

//We Change the firstName after a 2 seconds.
// setTimeout(() => {
//     vm.firstName = 'Bob' //it should be vm.data.firstName, but vue make it short to access the data.
// }, 2000)


// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Ray',
//             lastName: 'Cancino'
//         }
//     }
// }).mount('#app2')

// Vue.createApp({
//     data(){
//         return {
//             count: 0
//         }
//     }
// }).mount('#app3')

