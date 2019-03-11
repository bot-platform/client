import Phaser from "phaser";
import BootScene from "@/game/scenes/Boot"
import PreloadScene from "@/game/scenes/Preload"
import GameScene from "@/game/scenes/Game"

class PhaserGame extends Phaser.Game {
  constructor(el: HTMLElement) {
    super(<GameConfig>{
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: el,
    });
    this.scene.add("Boot", BootScene, false);
    this.scene.add("Preload", PreloadScene, false);
    this.scene.add("Game", GameScene, false);
  }
}

export default class Game {
  private phaser: PhaserGame;

  constructor(el: HTMLElement) {
    this.phaser = new PhaserGame(el);
  }

  run(): void {
    this.phaser.scene.start("Boot");
  }
}
