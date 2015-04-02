var Pacman = cc.Sprite.extend({
	ctor: function(x, y) {
		this._super();
		this.initWithFile('res/images/Pacman.png');
		this.setScale(0.0390625, 0.0390625);
		
		this.x = x;
		this.y = y;
		this.direction = Pacman.DIRECTIONS.STILL;
		this.nextDirection = Pacman.DIRECTIONS.STILL;
		this.updatePosition();
	},
	
	updatePosition: function() {
		this.setPosition(this.x, this.y);
		console.log('Pacman at: ' + this.getPositionX() + ' ' + this.getPositionY());
	},
	
	update: function(dt) {
		this.move();
		if (this.isAtCenterOfBlock()) {
			this.direction = this.nextDirection;
		}
		this.updatePosition();
	},
	
	setNextDirection: function(dir) {
		this.nextDirection = dir;
	},
	
	move: function() {
		switch(this.direction) {
		case Pacman.DIRECTIONS.UP:
			this.y += Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.DOWN:
			this.y -= Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.LEFT:
			this.x -= Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.RIGHT:
			this.x += Pacman.MOVE_STEP;
			break;
		}
	},
	
	isAtCenterOfBlock: function() {
		return this.getPositionX() % 40 == 20 && this.getPositionY() % 40 == 20
	}
});

Pacman.MOVE_STEP = 5;
Pacman.DIRECTIONS = {
		STILL: 0,
		LEFT: 1,
		RIGHT: 2,
		UP: 3,
		DOWN: 4
}