export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' })
  }

  preload() {
    this.load.image('background', 'images/background.png')
  }

  create() {
    this.add.image(400, 300, 'background')
  }
}