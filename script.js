




function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }







const app = Vue.createApp({
    created () {
        fetch('books.json').then(response => response.json()).then(json => {
              this.books = json
        })
  },
    data() {
        return {
            books: [],

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

app.mount('#app')



  const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    // trigger confetti
    confetti({
        particleCount: 500,
        spread: 360,
        origin: { y: 0.28, }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  
}