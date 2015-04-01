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
	}
});