class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload(){
        this.load.image('glass', './assets/glass.png');
        this.load.image('chest', './assets/chest.png');
        this.load.image('shovel', './assets/shovel.jpg');
        this.load.image('key', './assets/key.png');
        this.load.image('glow', './assets/foundItem.png')
        this.load.image('fishbones', './assets/fishbones.png')
    }


    create(){

        var onSprite = false;
        var keyGet = false;
        var keyGet2 = false;
        var keyGet3 = false;
        var itemsGotten = 0;
        var keysGotten = 0;
        var bone1Get = false
        var bone2Get = false
        var bone3Get = false

        

        const rect = this.add.rectangle(0, 0, 700, 150, 0XF5F5DC).setOrigin(0,0).setInteractive();
        const digArea = this.add.rectangle(350,375,700, 450, 0XEED9C4).setOrigin(0.5).setInteractive()

        const sprite = this.add.sprite(650, 75, 'chest').setInteractive({cursor: "url(assets/glass.png), pointer"});
        this.input.setDefaultCursor('auto');

        const cursorSprite = this.add.sprite(0, 0, 'shovel'); // Use shovel as the cursor sprite
        cursorSprite.setVisible(false);

        const keySprite = this.add.sprite(500, 500, 'key').setInteractive()
        keySprite.alpha = 0.01

        const keySprite2 = this.add.sprite(200, 420, 'key').setInteractive()
        keySprite2.alpha = 0.01

        const keySprite3 = this.add.sprite(500, 200, 'key').setInteractive()
        keySprite3.alpha = 0.01

        const bones1 = this.add.sprite(122, 371, 'fishbones').setInteractive()
        bones1.alpha = 0.01

        const bones2 = this.add.sprite(492, 276, 'fishbones').setInteractive()
        bones2.alpha = 0.01

        const bones3 = this.add.sprite(350, 352, 'fishbones').setInteractive()
        bones3.alpha = 0.01

        const glowSprite1 = this.add.sprite(500, 500, 'glow')
        glowSprite1.visible = false

        const glowSprite2 = this.add.sprite(200, 420, 'glow')
        glowSprite2.visible = false

        const glowSprite3 = this.add.sprite(500, 200, 'glow')
        glowSprite3.visible = false

        const boneGlow = this.add.sprite(152, 371, 'glow')
        boneGlow.visible = false

        const boneGlow2 = this.add.sprite(492, 276, 'glow')
        boneGlow2.visible = false

        const boneGlow3 = this.add.sprite(350, 352, 'glow')
        boneGlow3.visible = false


        //inventory = []
        this.inv = this.add.text(20, 20, 'inventory:', textConfig);
        this.directions = this.add.text(20, 70, 'move the mouse to find objects', textConfig)
        this.directions2 = this.add.text(20, 100, 'click to get hidden items', textConfig)
        var riddle = this.add.text(100, 70, 'what number rhymes with the object that will open this chest?', textConfig)
        riddle.visible = false;

        this.time.delayedCall(2000, ()=>{
            this.directions.visible = false;
            this.directions2.visible = false;
        }, null, this)

        sprite.on('pointerover', function (event){
            onSprite = true;
            cursorSprite.setVisible(false);
            riddle.visible = true;
            this.setTint(0xff0000);

        });

        sprite.on('pointerout', function (event){
            onSprite = false;
            riddle.visible = false;
            this.clearTint();

        });

        sprite.on('pointerdown', function (event){
            if(keysGotten == 3){
                riddle.setText('Riddle Solved!')
            }
        });

        //key1 stuff 
        keySprite.on('pointerover', function (event){
            if(keyGet == false){
                glowSprite1.visible = true;
            }
            else{
                glowSprite1.visible = false;
            }
        })

        keySprite.on('pointerout', function (event){
            glowSprite1.visible = false;;
        })

        keySprite.on('pointerdown', function (event){
            if(keyGet == false){
                keySprite.alpha = 1
                itemsGotten += 1
                glowSprite1.destroy(true)
                keyGet = true
                keySprite.setX(60 + (55 *itemsGotten))
                keySprite.setY(40)
                keysGotten += 1
            }
            
        })

        //key2 stuff
        keySprite2.on('pointerover', function (event){
            if(keyGet2 == false){
                glowSprite2.visible = true;
            }
            else{
                glowSprite2.visible = false;
            }
        })

        keySprite2.on('pointerout', function (event){
            glowSprite2.visible = false;
        })

        keySprite2.on('pointerdown', function (event){
            if(keyGet2 == false){
                keySprite2.alpha = 1
                itemsGotten += 1
                glowSprite2.destroy(true)
                keyGet2 = true
                keySprite2.setX(60 + (55 * itemsGotten))
                keySprite2.setY(40)
                keysGotten += 1
            }
            
        })

        //key3 stuff
        keySprite3.on('pointerover', function (event){
            if(keyGet3 == false){
                glowSprite3.visible = true;
            }
            else{
                glowSprite3.visible = false;
            }
        })

        keySprite3.on('pointerout', function (event){
            glowSprite3.visible = false;
        })

        keySprite3.on('pointerdown', function (event){
            if(keyGet3 == false){
                keySprite3.alpha = 1
                itemsGotten += 1
                glowSprite3.destroy(true)
                keyGet3 = true
                keySprite3.setX(60 + (55 * itemsGotten))
                keySprite3.setY(40)
                keysGotten += 1
            }
            
        })

        //fishbones1 stuff
        bones1.on('pointerover', function (event){
            if(bone1Get == false){
                boneGlow.visible = true;
            }
            else{
                boneGlow.visible = false;
            }
        })

        bones1.on('pointerout', function (event){
            boneGlow.visible = false;
        })

        bones1.on('pointerdown', function (event){
            if(bone1Get == false){
                bones1.alpha = 1
                itemsGotten += 1
                boneGlow.destroy(true)
                bone1Get = true
                bones1.setX(60 + (55 * itemsGotten))
                bones1.setY(40)
            }
            
        })
        
        //fishbones2 stuff
        bones2.on('pointerover', function (event){
            if(bone2Get == false){
                boneGlow2.visible = true;
            }
            else{
                boneGlow2.visible = false;
            }
        })

        bones2.on('pointerout', function (event){
            boneGlow2.visible = false;
        })

        bones2.on('pointerdown', function (event){
            if(bone2Get == false){
                bones2.alpha = 1
                itemsGotten += 1
                boneGlow2.destroy(true)
                bone2Get = true
                bones2.setX(60 + (55 * itemsGotten))
                bones2.setY(40)
            }
            
        })

        //fishbones3 stuff
        bones3.on('pointerover', function (event){
            if(bone3Get == false){
                boneGlow3.visible = true;
            }
            else{
                boneGlow3.visible = false;
            }
        })

        bones3.on('pointerout', function (event){
            boneGlow3.visible = false;
        })

        bones3.on('pointerdown', function (event){
            if(bone3Get == false){
                bones3.alpha = 1
                itemsGotten += 1
                boneGlow3.destroy(true)
                bone3Get = true
                bones3.setX(60 + (55 * itemsGotten))
                bones3.setY(40)
            }
            
        })

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