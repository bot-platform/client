import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  score: number;
  result: Phaser.GameObjects.Text;
  hint: Phaser.GameObjects.Text;

  init(params: any): void {
    this.score = 0;
  }

  preload(): void {
    var resultText: string = 'Your score is ' + this.score + '!';
    this.result = this.add.text(200, 250, resultText,
      {font: '48px Arial Bold', fill: '#FBFBAC'});
    var hintText: string = "Click to restart";
    this.hint = this.add.text(300, 350, hintText,
      {font: '24px Arial Bold', fill: '#FBFBAC'});
    this.input.on('pointerdown', function (/*pointer*/) {
      this.scene.start("Boot");
    }, this);
  }
}
