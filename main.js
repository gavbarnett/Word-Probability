var Cwidth = 1900;
var Cheight = 900;
var refreshrate = 500;
var paused = false;
var wordlist = [];
var readbook;
var m = 0;
function startGame() {
    startup();
    //split input test and set to lower case.
    readbook = book.splitext; // book.wordprob();
    myGameArea.start();
}

function startup(){

}

function Book(wholetext) {
  this.wholetext = wholetext;
  this.splitext = this.wholetext.toLowerCase().split(/[-\s,.^"^'^`^?^!^_^:^;^(^)]+/);
  this.wordprob = function () {
    var n = 0;
    var found = false;
    var output = [];
    output[n] = [];
    output[n][0] = this.splitext[0];
    output[n][1] = 0;
    for (i = 0; i<this.splitext.length; i++){
      for (j = 0; j<output.length; j++){
        if (output[j][0] == this.splitext[i]) {
          output[j][1] += 1;
          found = true;
        }
      }
      if (found == false) {
        n +=1;
        output[n] = [];
        output[n][0] = this.splitext[i];
        output[n][1] = 0;
      }
      found = false;
    }
    output.sort(function(a,b){
      return b[1]-a[1];
    });
    return output;
  }
  this.nextword = function (start, phrase, distance){
    var tempsplit = this.splitext;
    var phraseword = phrase;
    var output = [];
    for (i = 0; i<tempsplit.length; i++){
      if (tempsplit[i] == start){
        if (!output.includes(tempsplit[i+1])){
          output.push(tempsplit[i+1]);
          output.push(tempsplit[i+1]);
          output.push(tempsplit[i+1]);
        }
      }
    }
   console.log("output: " + output);
    var temp = [];
    for (j = 0; j<phraseword.length; j++){
      for (i = 0; i<tempsplit.length; i++){
        if (tempsplit[i] == phraseword[j]){
          if (!temp.includes(tempsplit[i+1])){
            temp.push(tempsplit[i+1]);
            temp.push(tempsplit[i+1]);
          }
          if (!temp.includes(tempsplit[i-1])){
            temp.push(tempsplit[i-1]);
            temp.push(tempsplit[i+1]);
          }
          if (!temp.includes(tempsplit[i+2])){
            temp.push(tempsplit[i+2]);
          }
          if (!temp.includes(tempsplit[i-2])){
            temp.push(tempsplit[i-2]);
          }
        }
      }
    }
    //console.log("temp: " + temp);
    for (j = 0; j<temp.length; j++){
      if (output.includes(temp[j])){
          output.push(temp[j]);
      }
    }
    return output;
  }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        paused = false;
        this.canvas.width = Cwidth;
        this.canvas.height = Cheight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, refreshrate);
        document.onkeydown = checkKey;
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function(){
      clearInterval(this.interval);
      paused = true;
    }

}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '32') {
        // spacebar
        e.preventDefault();
        if (paused == true){
          myGameArea.start();
        } else {
          myGameArea.stop();
        }
        //myGameArea.interval = setInterval(updateGameArea, refreshrate);
        console.log("Paused");
    }
}


function updateGameArea() {
    myGameArea.clear();
    var ctx = myGameArea.context;
    ctx.font = "20px Arial";
    ctx.fillStyle = 'hsl(182, 100%, 75% )';
    ctx.textAlign = "left";
    var text;
    var list = [];
    m = Math.round(Math.random()*readbook.length);
    var word = [];
    word[0] = readbook[m];
    for (x = 1; x<25; x++){
      list = book.nextword(word[x-1], word,2);
      word[x] = list[Math.round(Math.random()*list.length)];
    }
    text = word.join(" ");
    console.log(word);
    ctx.fillText(text,10, 20);
}
