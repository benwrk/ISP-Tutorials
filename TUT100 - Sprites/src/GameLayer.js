var GameLayer = cc.LayerColor.extend({
	init: function() {
		this._super(new cc.Color(127, 127, 127, 255));
		this.setPosition(0, 0);
		console.log('Initialized');
		
		this.ship = new Ship();
		this.ship.setPosition(200, 220);
		this.addChild(this.ship);
		this.ship.scheduleUpdate();
		
		this.gold = new Gold();
		this.addChild(this.gold);
		this.gold.randomPosition();
		
		this.addKeyboardHandlers();
		this.scheduleUpdate();
		
		return true;
	},
	
	onKeyDown: function(keyCode, event) {
		console.log('KeyDown: ' + keyCode.toString());
		if (keyCode == cc.KEY.space) {
			this.ship.switchDirection();
		}
	},
	
	onKeyUp: function(keyCode, event) {
		console.log('KeyUp: ' + keyCode.toString());
	},
	
	addKeyboardHandlers: function() {
		var self = this;
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed: function(keyCode, event) {
				self.onKeyDown(keyCode, event);
			},
			onKeyReleased: function(keyCode, event) {
				self.onKeyUp(keyCode, event);
			}
		}, this);
	},
	
	update: function() {
		if (this.gold.closeTo(this.ship)) {
			this.gold.randomPosition();
		}
	}
});

var StartScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new GameLayer();
		console.log('GameLayer created');
		layer.init();
		this.addChild(layer);
	}
});