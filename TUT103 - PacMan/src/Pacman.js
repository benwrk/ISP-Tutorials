var Pacman = cc.Sprite.extend({
	ctor: function(x, y) {
		this._super();
		this.initWithFile('res/images/Pacman.png');
		this.setScale(0.0390625, 0.0390625);

		this.maze = null;
		this.x = x;
		this.y = y;
		this.direction = Pacman.DIRECTIONS.STILL;
		this.upNextDirection = Pacman.DIRECTIONS.STILL;
		this.updatePosition();
	},

	updatePosition: function() {
		this.setPosition(this.x, this.y);
		console.log('Pacman at: ' + this.getPositionX() + ' ' + this.getPositionY());
	},

	update: function(dt) {
		if (this.isAtCenterOfBlock()) {
			if (!this.isPossibleToMove(this.upNextDirection)) {
				if (!this.isPossibleToMove(this.direction) && this.direction !== Pacman.DIRECTIONS.STILL) {
					this.upNextDirection = Pacman.DIRECTIONS.STILL;
				} else {
					this.upNextDirection = this.direction;
				}
			}
			if (this.isPossibleToMove(this.cachedNextDirection)) {
				this.upNextDirection = this.cachedNextDirection;
			}
			this.direction = this.upNextDirection;
		}
		this.move();
		this.updatePosition();
	},

	setNextDirection: function(dir) {
		this.upNextDirection = dir;
		this.cachedNextDirection = dir;
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
		return Math.abs(this.getPositionX()) % 40 == 20 && Math.abs(this.getPositionY()) % 40 == 20;
	},

	setMaze: function(maze) {
		this.maze = maze;
	},

	isPossibleToMove: function(direction) {
		var nextBlockX = (this.getPositionX() - 20) / 40;
		var nextBlockY = (this.getPositionY() - 20) / 40;
//		var direction;
//		if (this.direction === Pacman.DIRECTIONS.STILL) {
//		direction = this.nextDirection;
//		return true;
//		} else {
//		direction = this.direction;
//		}
		switch (direction) {
		case Pacman.DIRECTIONS.UP:
			nextBlockY++;
			break;
		case Pacman.DIRECTIONS.DOWN:
			nextBlockY--;
			break;
		case Pacman.DIRECTIONS.LEFT:
			nextBlockX--;
			break;
		case Pacman.DIRECTIONS.RIGHT:
			nextBlockX++;
			break;
		}
		return !this.maze.isWall(nextBlockX, nextBlockY);
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