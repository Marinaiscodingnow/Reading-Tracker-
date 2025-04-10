function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }







const app = Vue.createApp({
    created () {
        fetch('stories.json').then(response => response.json()).then(json => {
              this.stories = json
        })
  },
    data() {
        return {
            stories: [],

            showBooks: true,
            title: 'The Inheritance Games',
            author: 'Jennier Lynn Barnes',
            pages: 45,
            book_pages: 100,
            total_pages:0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#shop')



