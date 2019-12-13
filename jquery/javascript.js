function chaos(){
		window.alert("Happy Tack-a-Thon!!!");
		playMusic();
		/*document.getElementById("dot").style.padding = "50px 25px 50px 25px";
		document.getElementById("dot").style.zIndex = "-100";
		document.getElementById("nav-menu-item-1").classList.add("blinking");
		document.getElementById("nav-menu-item-2").classList.add("blinking");
		document.getElementById("nav-menu-item-3").classList.add("blinking");
		document.getElementById("upload-form").classList.add("bounce");
		document.getElementById("photo-gallery").classList.add("orbit");
		document.getElementById("upload-form").style.position = "absolute";
		document.getElementById("wallpaper").classList.remove("wallpaper");
		document.getElementById("wallpaper").classList.add("backgroundFlicker");
		document.getElementById("inner-photo-gallery").classList.add('bounce');*/
		document.getElementById("spinning-header").style.display ='block';
		document.getElementById("myCanvas").style.display ='';
		document.getElementById("big-red-button").classList.add("spin");
		setInterval(popupMadness, 100);
	}
function playMusic(){
	var x = document.getElementById("music-box-1");
	var y = document.getElementById("music-box-2");
	var z = document.getElementById("music-box-3");
	x.play();
	y.play();
	z.play();
}

function popupMadness(){
		var x = Math.ceil(Math.random()*100);
		var y = Math.ceil(Math.random()*100);
		if (x%2==1){
			window.open("https://jamosclaypool.github.io/popup.html","_blank","toolbar=yes, scrollsbars=yes, resizable=yes, top="+x+"%, left="+y+"%,width=200,height=200");
		}else {
			window.open("https://jamosclaypool.github.io/popup2.html","_blank","toolbar=yes, scrollsbars=yes, resizable=yes, top="+x+"%, left="+y+"%,width=200,height=200");
		}
}
function openCover(){
	document.getElementById('cover').classList.remove('liftLid');
	void document.getElementById('cover').offsetWidth;
	document.getElementById('cover').classList.add('liftLid');
}
// define variable for ball count paragraph

const para = document.querySelector('p');
let count = 0;

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// define shape constructor

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

// define Ball constructor, inheriting from Shape

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);

  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var colorSelector = Math.ceil(Math.random()*10)%3;
      if (distance < this.size + balls[j].size && balls[j].exists) {
      	if (colorSelector == 0){
        balls[j].color = this.color = 'green';
   		}
   		if (colorSelector == 1){
        balls[j].color = this.color = 'yellow';
   		}
   		if (colorSelector == 2){
        balls[j].color = this.color = 'white';
   		}
      }
    }
  }
};

// define EvilCircle constructor, inheriting from Shape

function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);

  this.color = 'white';
  this.size = 3;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;


// define EvilCircle draw method

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};


// define EvilCircle checkBounds method

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    this.x -= this.size;
  }

  if((this.x - this.size) <= 0) {
    this.x += this.size;
  }

  if((this.y + this.size) >= height) {
    this.y -= this.size;
  }

  if((this.y - this.size) <= 0) {
    this.y += this.size;
  }
};

// define EvilCircle setControls method

EvilCircle.prototype.setControls = function() {
  var _this = this;
  window.onkeydown = function(e) {
    if(e.key === 'a') {
      _this.x -= _this.velX;
    } else if(e.key === 'd') {
      _this.x += _this.velX;
    } else if(e.key === 'w') {
      _this.y -= _this.velY;
    } else if(e.key === 's') {
      _this.y += _this.velY;
    }
  };
};

// define EvilCircle collision detection

EvilCircle.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
      }
    }
  }
};
// define array to store balls and populate it

const balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    true,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
  count++;
}

// define loop that keeps drawing the scene constantly

let evil = new EvilCircle(random(0,width), random(0,height), true);
evil.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}
loop();
