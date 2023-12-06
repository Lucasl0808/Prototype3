class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload(){

    }
    create(){
        this.add.rectangle(0, 0, 700, 150, 0XF5F5DC).setOrigin(0,0);
    }
    update(){
        
    }
}