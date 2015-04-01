var PillarPair = cc.Node.extend({
	ctor: function() {
		this._super();
		this.topPillar = cc.Sprite.create('res/images/Pillar.png');
		this.topPillar.setAnchorPoint(0.5, 0);
		this.topPillar.setPosition(0, 100);
		this.addChild(this.topPillar);

		this.bottomPillar = cc.Sprite.create('res/images/Pillar.png');
		this.bottomPillar.setAnchorPoint(0.5, 1);
		this.bottomPillar.setPosition(0, -100);
		this.addChild(this.bottomPillar);
	},

	update: function(dt) {
		this.setPositionX(this.getPositionX() - 5);
		if (this.getPositionX() < -100) { 
			this.setPositionX(screenWidth + 100);
		}
	},
	
	hit: function(player) {
		if ((player.getPositionY() + 12 > this.getPositionY() + 100 || player.getPositionY() - 12 < this.getPositionY() - 100) && Math.abs(player.getPositionX() - this.getPositionX()) < 52) {
			return true;
		} else {
			return false;
		}
	}
});