var Ship = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile('res/images/Ship.png');
		this.setScale(0.0625, 0.0625);
	},

	update: function(dt) {
		var pos = this.getPosition();
		this.setPosition(pos.x, pos.y + 5);
	}
});