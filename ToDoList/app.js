const app = Vue.createApp ({
    data() {
        return {
            list: [
               {nama: 'Bima', ipk: '3.81' },
               {nama: 'Iftala', ipk: '3.51' }
            ]
        }
    }
})
app.mount('#app')