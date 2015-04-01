var Gold = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile('res/images/Gold.png');
		this.setScale(0.0390625, 0.0390625);		
	},
	
	randomPosition: function() {
		this.setPosition(Math.floor(Math.random() * screenWidth), Math.floor(Math.random() * screenHeight));
	},
	
	closeTo: function(obj) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return Math.abs(myPos.x - oPos.x) <= 16 && Math.abs(myPos.y - oPos.y) <= 16;
	}
});