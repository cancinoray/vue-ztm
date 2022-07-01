const vm = Vue.createApp({ //store in the variable
    data(){
        return {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
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

