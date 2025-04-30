//1
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
//2
function on2() {
  document.getElementById("second").style.display = "block";
}

function off2() {
  document.getElementById("second").style.display = "none";
}

//3
function on3() {
document.getElementById("third").style.display = "block";
}

function off3() {
document.getElementById("third").style.display = "none";
}

//4
function on4() {
document.getElementById("fourth").style.display = "block";
}

function off4() {
document.getElementById("fourth").style.display = "none";
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
          title: 'House of Earth and Blood',
          author: 'Sarah J Mass',
          pages: 45,
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