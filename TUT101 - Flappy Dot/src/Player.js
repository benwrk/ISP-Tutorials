var Player = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile('res/images/Dot.png');
		this.setScale(0.0234375, 0.0234375);
		
		this.verticalVelocity = Player.STARTING_VELOCITY;
	},
	
	update: function(dt) {
		this.setPosition(this.getPositionX(), this.getPositionY() + this.verticalVelocity);
		this.verticalVelocity += Player.GRAVITY;
	},
	
	jump: function() {
		this.verticalVelocity = Player.JUMPING_VELOCITY;
	}
});

Player.GRAVITY = -1;
Player.STARTING_VELOCITY = 15;
Player.JUMPING_VELOCITY = 15;