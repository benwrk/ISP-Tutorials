var GameLayer = cc.LayerColor.extend({
	init: function() {
		this._super(new cc.Color(127, 127, 127, 255));
		this.setPosition(0, 0);
		console.log('Initialized');
		
		this.scoreLabel = cc.LabelTTF.create('0', 'Arial', 40);
		this.scoreLabel.setPosition(screenWidth - 50, screenHeight - 50);
		this.addChild(this.scoreLabel);
		
		this.maze = new Maze();
		this.maze.setPosition(0, 40);
		this.addChild(this.maze);
		
		this.pacman = new Pacman(10 * 40 + 20, 6 * 40 + 20);
		this.maze.addChild(this.pacman);
		this.pacman.scheduleUpdate();
		
		this.pacman.setMaze(this.maze);
		
		this.addKeyboardHandlers();
		this.scheduleUpdate();
		
		return true;
	},
	
	onKeyDown: function(keyCode, event) {
		console.log('KeyDown: ' + keyCode.toString());
		switch (keyCode) {
		case cc.KEY.left:
			this.pacman.setNextDirection(Pacman.DIRECTIONS.LEFT);
			break;
		case cc.KEY.right:
			this.pacman.setNextDirection(Pacman.DIRECTIONS.RIGHT);
			break;
		case cc.KEY.up:
			this.pacman.setNextDirection(Pacman.DIRECTIONS.UP);
			break;
		case cc.KEY.down:
			this.pacman.setNextDirection(Pacman.DIRECTIONS.DOWN);
			break;
		}
	},
	
	onKeyUp: function(keyCode, event) {
		console.log('KeyUp: ' + keyCode.toString());
//		switch (keyCode) {
//		case cc.KEY.left:
//			if (this.pacman.direction === Pacman.DIRECTIONS.LEFT) {
//				this.pacman.setNextDirection(Pacman.DIRECTIONS.STILL);
//			}
//			break;
//		case cc.KEY.right:
//			if (this.pacman.direction === Pacman.DIRECTIONS.RIGHT) {
//				this.pacman.setNextDirection(Pacman.DIRECTIONS.STILL);
//			}
//			break;
//		case cc.KEY.up:
//			if (this.pacman.direction === Pacman.DIRECTIONS.UP) {
//				this.pacman.setNextDirection(Pacman.DIRECTIONS.STILL);
//			}
//			break;
//		case cc.KEY.down:
//			if (this.pacman.direction === Pacman.DIRECTIONS.DOWN) {
//				this.pacman.setNextDirection(Pacman.DIRECTIONS.STILL);
//			}
//			break;
//		}
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