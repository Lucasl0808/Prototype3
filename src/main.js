let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
    backgroundColor: '#EED9C4',
    
    scene: [play]
}

let textConfig = {
    fontFamily: 'Impact',
    fontSize: '20px',
    //backgroundColor: '#FFFFFF',
    color: '#000000',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let game = new Phaser.Game(config);
let keyW, keyA, keyS, keyD;