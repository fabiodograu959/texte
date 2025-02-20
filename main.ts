controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -81)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    sprites.destroy(mySprite)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bem vindo`)
mySprite = sprites.create(assets.image`joao peidao`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`laranga`, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
animation.runImageAnimation(
mySprite2,
assets.animation`myAnim2`,
200,
true
)
mySprite2.setKind(SpriteKind.Enemy)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.InBackground)
mySprite2.setPosition(135, 18)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
mySprite.setVelocity(0, 50)
mySprite2.follow(mySprite, 50)
