// Vue.component("display-time", {
//   props: ["seconds"],
//   template: "<p>{{parseInt(seconds/60)}}:{{seconds%60}}</p>"
// })
var myVar;
var pomodoro = new Vue({
  el: "#pomodoro",
  data: {
    startTime: "",
    timeNow: this.timeNow,
  },
  methods: {
    handleInput: function(value) {
     this.startTime = (value*60);
   },
    time: function() {
      myVar = setInterval(this.timer, 1000);
    },
    timer: function() {
      // countdown minutes and seconds
      this.startTime--;
      console.log("Inside methods");
      var currMin = parseInt(this.startTime / 60);
      var currSec = this.checkSecond(this.startTime % 60);
      var currTime = currMin + ":" + currSec;
      this.timeNow = currTime;
      if(currTime == "00:00" || currTime == "0:00"){
        clearInterval(myVar);
        console.log("Inside curr time becoming 0")
        this.play;
      }
    },
    checkSecond: function(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
      } // add zero in front of numbers < 10
      if (sec < 0) {
        sec = "59";
      }
      return sec;
    },
    play: function(){
      this.$refs.beep.play();
    }
  }

})
