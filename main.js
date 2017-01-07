var Cwidth = 500;
var Cheight = 900;
function startGame() {
    startup();
    myGameArea.start();
}

function startup(){

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = Cwidth;
        this.canvas.height = Cheight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 250);
        document.onkeydown = checkKey;
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function checkKey(e) {

    e = e || window.event;
    var speed = 2; //distance traveled per command. To be expanded for horseback, running etc.
    if (e.keyCode == '32') {
        // w arrow
        e.preventDefault();
    }
}


function updateGameArea() {
    myGameArea.clear();
    var ctx = myGameArea.context;
    ctx.font = "20px Arial";
    ctx.fillStyle = 'hsl(182, 100%, 75% )';
    ctx.textAlign = "left";
    ctx.fillText('This is a test',10, 20);
}
