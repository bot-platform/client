import Phaser from "phaser";

export default class Boot extends Phaser.Scene {
  constructor(config: string | Phaser.Scenes.Settings.Config) {
    super(config);
  }

  init(data: any) {
  }

  preload() {
  }

  create(data: any) {
  }

  update(time: number, delta: number) {
    this.scene.start("Preload");
  }
}
