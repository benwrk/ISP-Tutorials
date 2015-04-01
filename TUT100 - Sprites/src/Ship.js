
var Ship = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile('res/images/Ship.png');
		this.setScale(0.0625, 0.0625);
	},

	update: function(dt) {
		this.setPosition(this.getPositionX(), this.getPositionY() + 5);
		if (this.getPositionY() > screenHeight) {
			this.setPositionY(0);
		}
		//console.log('Ship.update | ' + this._name + ' | setPosition(' + this.getPositionX() + ', ' + this.getPositionY() + ')');
	}
});