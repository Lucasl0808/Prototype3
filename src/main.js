let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    backgroundColor: '#EED9C4',
    
    scene: [play]
}

let game = new Phaser.Game(config);
let keyW, keyA, keyS, keyD;