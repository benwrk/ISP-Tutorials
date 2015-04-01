var Pacman = cc.Sprite.extend({
	ctor: function(x, y) {
		this._super();
		this.initWithFile('res/images/Pacman.png');
		this.setScale(0.0390625, 0.0390625);
		
		this.x = x;
		this.y = y;
		this.direction = Pacman.DIRECTIONS.STILL;
		this.updatePosition();
	},
	
	updatePosition: function() {
		this.setPosition(this.x, this.y);
	},
	
	update: function(dt) {
		switch(this.direction) {
		case Pacman.DIRECTIONS.UP:
			this.y += Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.DOWN:
			this.y -= Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.LEFT:
			this.x +- Pacman.MOVE_STEP;
			break;
		case Pacman.DIRECTIONS.RIGHT:
			this.x += Pacman.MOVE_STEP;
			break;
		}
		this.updatePosition();
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