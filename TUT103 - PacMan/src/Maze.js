var Maze = cc.Node.extend({
	ctor: function() {
		this._super();
		this.WIDTH = 20;
		this.HEIGHT = 13;
		this.MAP = ['####################',
		            '#..................#',
		            '#.###.###..###.###.#',
		            '#.#...#......#...#.#',
		            '#.#.###.####.###.#.#',
		            '#.#.#..........#.#.#',
		            '#.....###. ###.....#',
		            '#.#.#..........#.#.#',
		            '#.#.###.####.###.#.#',
		            '#.#...#......#...#.#',
		            '#.###.###..###.###.#',
		            '#..................#',
		            '####################'];
		for (var r = 0; r < this.HEIGHT; r++) {
			for (var c = 0; c < this.WIDTH; c++) {
				if (this.MAP[r][c] == '#') {
					var s = cc.Sprite.create('res/images/Wall.png');
					s.setScale(0.0390625, 0.0390625);
					s.setAnchorPoint(0, 0);
					s.setPosition(c * 40, (this.HEIGHT - r - 1) * 40);
					this.addChild(s);
				}
			}
		}
		this.setAnchorPoint(0, 0);
	},
	
	isWall: function(blockX, blockY) {
		var r = this.HEIGHT - blockY - 1;
		var c = blockX;
		return this.MAP[r][c] == '#';
	}
});