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
            stories: []
        }
    }
})

app.mount('#shop')



