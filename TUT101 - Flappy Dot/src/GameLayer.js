var GameLayer = cc.LayerColor.extend({
	init: function() {
		this._super(new cc.Color(127, 127, 127, 255));
		this.setPosition(0, 0);
		console.log('Initialized');
		
		this.state = GameLayer.STATES.FRONT;
		
		this.scoreLabel = cc.LabelTTF.create('0', 'Arial', 40);
		this.scoreLabel.setPosition(screenWidth - 50, screenHeight - 50);
		this.addChild(this.scoreLabel);
		
		this.pillarPair = null;
		
		this.player = new Player();
		this.player.setPosition(screenWidth / 2, screenHeight / 2);
		this.addChild(this.player);
		this.player.scheduleUpdate();
		
		this.addKeyboardHandlers();
		this.scheduleUpdate();
		
		return true;
	},
	
	onKeyDown: function(keyCode, event) {
		console.log('KeyDown: ' + keyCode.toString());
		if (this.state === GameLayer.STATES.FRONT) {
			this.state = GameLayer.STATES.STARTED;
			this.createPillarPair();
			this.player.start();
			this.player.jump();
		}
		else if (this.state === GameLayer.STATES.STARTED) {
			this.player.jump();
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
		
	},
	
	createPillarPair: function() {
		this.pillarPair = new PillarPair();
		this.pillarPair.setPosition(new cc.Point(900, 300));
		this.addChild(this.pillarPair);
		this.pillarPair.scheduleUpdate();
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

GameLayer.STATES = {
		FRONT: 1,
		STARTED: 2
};