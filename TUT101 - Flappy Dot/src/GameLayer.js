var GameLayer = cc.LayerColor.extend({
	init: function() {
		this._super(new cc.Color(127, 127, 127, 255));
		this.setPosition(0, 0);
		console.log('Initialized');
		
		this.state = GameLayer.STATES.FRONT;
		
		this.scoreLabel = cc.LabelTTF.create('', 'Arial', 40);
		this.scoreLabel.setPosition(screenWidth - 80, screenHeight - 50);
		this.addChild(this.scoreLabel);
		
		this.pillarPair = null;
		
		this.player = new Player();
		this.player.setPosition(screenWidth / 2, screenHeight / 2);
		this.addChild(this.player, 1);
		this.player.scheduleUpdate();
		
		this.addKeyboardHandlers();
		this.scheduleUpdate();
		
		return true;
	},
	
	startGame: function() {
		this.createPillarPair();
		this.player.start();
		this.player.jump();
	},
	
	restartGame: function() {  
		this.player.start();
		this.player.verticalVelocity = Player.STARTING_VELOCITY;
		this.player.setPosition(screenWidth / 2, screenHeight / 2);
		this.pillarPair.setPosition(new cc.p(900, 300));
		if (this.state !== GameLayer.STATES.STARTED) {
			this.player.scheduleUpdate();
			this.pillarPair.scheduleUpdate();
		}
		this.scoreLabel.setString('');
		this.state = GameLayer.STATES.STARTED;
		console.log('RESTART');
	},
	
	onKeyDown: function(keyCode, event) {
		console.log('KeyDown: ' + keyCode.toString());
		if (keyCode == cc.KEY.d) {
			this.state = GameLayer.STATES.DEBUG;
		} else if (keyCode == cc.KEY.s) {
			this.state = GameLayer.STATES.STARTED;
			this.pillarPair.scheduleUpdate();
			this.player.scheduleUpdate();
		} else if (keyCode == cc.KEY.r) {
			this.restartGame();
		} else if (this.state === GameLayer.STATES.FRONT) {
			this.state = GameLayer.STATES.STARTED;
			this.startGame();
		} else if (this.state === GameLayer.STATES.STARTED) {
			this.player.jump();
		}
		
		if (keyCode == cc.KEY.right) {
			this.player.setPositionX(this.player.getPositionX() + 5);
		}
		if (keyCode == cc.KEY.left) {
			this.player.setPositionX(this.player.getPositionX() - 5);
		}
		if (keyCode == cc.KEY.up) {
			this.player.setPositionY(this.player.getPositionY() + 5);
		}
		if (keyCode == cc.KEY.down) {
			this.player.setPositionY(this.player.getPositionY() - 5);
		}
		
		if (this.pillarPair.hit(this.player)) {
			console.log('HIT');
		}
	},
	
	onKeyUp: function(keyCode, event) {
		//console.log('KeyUp: ' + keyCode.toString());
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
		if (this.state === GameLayer.STATES.STARTED && this.pillarPair.hit(this.player)) {
			console.log('HIT');
			this.endGame();
			this.state = GameLayer.STATES.DEAD;
			this.scoreLabel.setString('DEAD');
			console.log('DEAD');
		}
		if (this.state === GameLayer.STATES.DEBUG) {
			this.pillarPair.unscheduleUpdate();
			this.player.unscheduleUpdate();
		}
	},
	
	createPillarPair: function() {
		this.pillarPair = new PillarPair();
		this.pillarPair.setPosition(900, 300);
		this.addChild(this.pillarPair);
		this.pillarPair.scheduleUpdate();
	},
	
	endGame: function() {
		this.player.stop();
		this.pillarPair.unscheduleUpdate();
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
		STARTED: 2,
		DEAD: 3,
		DEBUG: 4
};