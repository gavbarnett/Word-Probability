var Cwidth = 500;
var Cheight = 900;
var book = "The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.  His grey eyes shone and twinkled, and his usually pale face was flushed and animated.  The fire burned brightly, and the soft radiance of the  incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.  Our chairs, being his patents, embraced and caressed us rather than submitted to be sat upon, and there was that luxurious after-dinner atmosphere when thought roams gracefully free of the trammels of precision.  And he put it to us in this way--marking the points with a lean forefinger--as we sat and lazily admired his earnestness over this new paradox (as we thought it:) and his fecundity.     `You must follow me carefully.  I shall have to controvert one or two ideas that are almost universally accepted.  The geometry, for instance, they taught you at school is founded on a misconception.'     `Is not that rather a large thing to expect us to begin upon?' said Filby, an argumentative person with red hair.     `I do not mean to ask you to accept anything without reasonable ground for it.  You will soon admit as much as I need from you. You know of course that a mathematical line, a line of thickness NIL, has no real existence.  They taught you that?  Neither has a mathematical plane.  These things are mere abstractions.'     `That is all right,' said the Psychologist.     `Nor, having only length, breadth, and thickness, can a cube have a real existence.'     `There I object,' said Filby.  `Of course a solid body may exist.  All real things--'     `So most people think.  But wait a moment.  Can an INSTANTANEOUS cube exist?'     `Don't follow you,' said Filby.     `Can a cube that does not last for any time at all, have a real existence?'     Filby became pensive.  `Clearly,' the Time Traveller proceeded, `any real body must have extension in FOUR directions: it must have Length, Breadth, Thickness, and--Duration.  But through a natural infirmity of the flesh, which I will explain to you in a moment, we incline to overlook this fact.  There are really four dimensions, three which we call the three planes of Space, and a fourth, Time.  There is, however, a tendency to draw an unreal distinction between the former three dimensions and the latter, because it happens that our consciousness moves intermittently in one direction along the latter from the beginning to the end of our lives.'     `That,' said a very young man, making spasmodic efforts to relight his cigar over the lamp; `that . . . very clear indeed.'     `Now, it is very remarkable that this is so extensively overlooked,' continued the Time Traveller, with a slight accession of cheerfulness.  `Really this is what is meant by the Fourth Dimension, though some people who talk about the Fourth Dimension do not know they mean it.  It is only another way of looking at Time.  THERE IS NO DIFFERENCE BETWEEN TIME AND ANY OF THE THREE DIMENSIONS OF SPACE EXCEPT THAT OUR CONSCIOUSNESS MOVES ALONG IT.  But some foolish people have got hold of the wrong side of that idea.  You have all heard what they have to say about this Fourth Dimension?'     `_I_ have not,' said the Provincial Mayor.     `It is simply this.  That Space, as our mathematicians have it, is spoken of as having three dimensions, which one may call Length, Breadth, and Thickness, and is always definable by reference to three planes, each at right angles to the others. But some philosophical people have been asking why THREE dimensions particularly--why not another direction at right angles to the other three?--and have even tried to construct a Four-Dimension geometry.  Professor Simon Newcomb was expounding this to the New York Mathematical Society only a month or so ago. You know how on a flat surface, which has only two dimensions, we can represent a figure of a three-dimensional solid, and similarly they think that by models of thee dimensions they could represent one of four--if they could master the perspective of the thing.  See?'     `I think so,' murmured the Provincial Mayor; and, knitting his brows, he lapsed into an introspective state, his lips moving as one who repeats mystic words.  `Yes, I think I see it now,' he said after some time, brightening in a quite transitory manner.     `Well, I do not mind telling you I have been at work upon this geometry of Four Dimensions for some time.  Some of my results are curious.  For instance, here is a portrait of a man at eight years old, another at fifteen, another at seventeen, another at twenty-three, and so on.  All these are evidently sections, as it were, Three-Dimensional representations of his Four-Dimensioned being, which is a fixed and unalterable thing.     `Scientific people,' proceeded the Time Traveller, after the pause required for the proper assimilation of this, `know very well that Time is only a kind of Space.  Here is a popular scientific diagram, a weather record.  This line I trace with my finger shows the movement of the barometer.  Yesterday it was so high, yesterday night it fell, then this morning it rose again, and so gently upward to here.  Surely the mercury did not trace this line in any of the dimensions of Space generally recognized? But certainly it traced such a line, and that line, therefore, we must conclude was along the Time-Dimension.'     `But,' said the Medical Man, staring hard at a coal in the fire, `if Time is really only a fourth dimension of Space, why is it, and why has it always been, regarded as something different? And why cannot we move in Time as we move about in the other dimensions of Space?'     The Time Traveller smiled.  `Are you sure we can move freely in Space?  Right and left we can go, backward and forward freely enough, and men always have done so.  I admit we move freely in two dimensions.  But how about up and down?  Gravitation limits us there.'";
var wordlist = [];
function startGame() {
    startup();
    //split input test and set to lower case.
    wordlist = book.toLowerCase().split(/[-\s,.^"^'^`^?^!^_^:^;^(^)]+/);
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
        this.interval = setInterval(updateGameArea, 100);
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
    var text;
    text = wordlist[Math.round(Math.random()*wordlist.length)];
    //console.log(text);
    ctx.fillText(text,10, 20);
}
