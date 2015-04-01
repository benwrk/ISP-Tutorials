var Ship = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile('res/images/Ship.png');
		this.setScale(0.0625, 0.0625);
		
		this.direction = Ship.DIR.UP;		
	},

	update: function(dt) {
		if (this.direction === Ship.DIR.UP) {
			this.setPosition(this.getPositionX(), this.getPositionY() + 5);
		} else if (this.direction === Ship.DIR.RIGHT) {
			this.setPosition(this.getPositionX() + 5, this.getPositionY());
		} else if (this.direction === Ship.DIR.DOWN) {
			this.setPosition(this.getPositionX(), this.getPositionY() - 5);
		} else if (this.direction === Ship.DIR.LEFT) {
			this.setPosition(this.getPositionX() - 5, this.getPositionY());
		}
		
		if (this.getPositionY() > screenHeight) {
			this.setPositionY(0);
		}
		if (this.getPositionX() > screenWidth) {
			this.setPositionX(0);
		}
		if (this.getPositionY() < 0) {
			this.setPositionY(screenHeight);
		}
		if (this.getPositionX() < 0) {
			this.setPositionX(screenWidth);
		}
		// console.log('Ship.update | ' + this._name + ' | setPosition(' +
		// this.getPositionX() + ', ' + this.getPositionY() + ')');
	},
	
	switchDirection: function() {
		if (this.direction === Ship.DIR.UP) {
			this.direction = Ship.DIR.RIGHT;
		} else {
			this.direction = Ship.DIR.UP;
		}
	}
});

Ship.DIR = {
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 4
};