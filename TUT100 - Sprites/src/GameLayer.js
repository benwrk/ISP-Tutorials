var GameLayer = cc.LayerColor.extend({
	init: function() {
		this._super(new cc.Color(127, 127, 127, 255));
		this.setPosition(0, 0);
		console.log('Initialized');
		
		var ship1 = new Ship();
		ship1.setPosition(200, 200);
		this.addChild(ship1);
		console.log('Ship1 added');
		
		var ship2 = new Ship();
		ship2.setPosition(300, 200);
		this.addChild(ship2);
		console.log('Ship2 added');
		
		ship1.scheduleUpdate();
		ship2.scheduleUpdate();
		
		this.addKeyboardHandlers();
		
		return true;
	},
	
	onKeyDown: function(keyCode, event) {
		console.log('KeyDown: ' + keyCode.toString());
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