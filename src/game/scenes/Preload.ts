import Phaser from "phaser";

export default class Preload extends Phaser.Scene {

  title: Phaser.GameObjects.Text;
  hint: Phaser.GameObjects.Text;

  init(data: any) {

  }

  preload() {
    console.log('[Preload] preload');
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create(): void {
    var titleText: string = "Starfall";
    this.title = this.add.text(150, 200, titleText,
      {font: '128px Arial Bold', fill: '#FBFBAC'});
    var hintText: string = "Click to start";
    this.hint = this.add.text(300, 350, hintText,
      {font: '24px Arial Bold', fill: '#FBFBAC'});
    this.input.on('pointerdown', function (/*pointer*/) {
      this.scene.start("Game");
    }, this);
  }

  update(time: number, delta: number) {
  }
}
