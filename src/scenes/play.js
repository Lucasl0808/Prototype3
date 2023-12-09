class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload(){
        this.load.image('glass', './assets/glass.png');
        this.load.image('chest', './assets/chest.png');
        this.load.image('shovel', './assets/shovel.jpg');
    }


    create(){
        var onSprite = false;
        const rect = this.add.rectangle(0, 0, 700, 150, 0XF5F5DC).setOrigin(0,0).setInteractive();
        const digArea = this.add.rectangle(350,375,700, 450, 0XEED9C4).setOrigin(0.5).setInteractive()


        const sprite = this.add.sprite(650, 75, 'chest').setInteractive({cursor: "url(assets/glass.png), pointer"});
        this.input.setDefaultCursor('auto');

        const cursorSprite = this.add.sprite(0, 0, 'shovel'); // Use shovel as the cursor sprite
        cursorSprite.setVisible(false);

        sprite.on('pointerover', function (event){
            onSprite = true;
            cursorSprite.setVisible(false);
            this.setTint(0xff0000);

        });

        sprite.on('pointerout', function (event){
            onSprite = false;
            this.clearTint();

        });

        this.input.on('pointermove', function (pointer) {
            if (digArea.getBounds().contains(pointer.x, pointer.y) && onSprite == false) {
                cursorSprite.setPosition(pointer.x, pointer.y);
                cursorSprite.setVisible(true)
            } else {
                cursorSprite.setVisible(false);
            }
        });
    }

    update(){
        
    }
}