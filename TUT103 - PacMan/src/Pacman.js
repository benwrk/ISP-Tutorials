var Pacman = cc.Sprite.extend({
	ctor: function(x, y) {
		this._super();
		this.initWithFile('res/images/Pacman.png');
		this.setScale(0.0390625, 0.0390625);
		
		this.x = x;
		this.y = y;
		this.updatePosition();
	},
	
	updatePosition: function() {
		this.setPosition(this.x, this.y);
	}
});