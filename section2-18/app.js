let vm = Vue.createApp({
    data(){
        return{
            isPurple: false ,
            selectedColor: '',
            size: 150
        }
    },
    computed: {
        color_classes() {
            return { purple : this.isPurple }
        },
        style_classes() {
            return {width: this.size + 'px' , height: this.size + 'px', lineHeight: this.size + 'px' }
        },
        style_transform() {
            return { transform: 'rotate(30deg)' }
        }
    },
}).mount('#app')