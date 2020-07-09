sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myMissile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . f 4 4 f . . . . . . 
. . . . . . 5 f f 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
`, myAeroplane, 0, -200)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.baDing.play()
})
let lemon: Sprite = null
let strawberry: Sprite = null
let cherry: Sprite = null
let myMissile: Sprite = null
let myAeroplane: Sprite = null
myAeroplane = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . . . . . . . . . 
. . . . . . . . . . 8 . . . . . . . . . . 
. . . . . . . . . . 8 . . . . . . . . . . 
. . . . . . . . . . 8 . . . . . . . . . . 
. . . . . . . . . 8 8 8 . . . . . . . . . 
. . . . . . . . . 8 8 8 . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 . . . . . . . . 
. . . . . . . . 8 8 9 8 8 . . . . . . . . 
. . . . . . . 8 8 9 9 9 8 8 . . . . . . . 
. . . . . . 8 8 8 9 9 9 8 8 8 . . . . . . 
. . 2 . . 8 8 8 8 9 9 9 8 8 8 8 . . 2 . . 
. . 4 . 8 8 8 8 8 9 9 9 8 8 8 8 8 . 4 . . 
. . 4 8 8 8 8 8 8 8 9 8 8 8 8 8 8 8 4 . . 
. . 4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 4 . . 
. . 4 . . . . 8 8 8 8 8 8 8 . . . . 4 . . 
. . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . 
. . . . . . . . f 8 8 8 f . . . . . . . . 
. . . . . . . . 2 f f f 2 . . . . . . . . 
. . . . . . . . 2 5 2 5 2 . . . . . . . . 
. . . . . . . . . 2 5 2 . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . 
`, SpriteKind.Player)
myAeroplane.setPosition(80, 120)
myAeroplane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(myAeroplane, 200, 0)
game.onUpdateInterval(1000, function () {
    cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . 6 6 7 7 7 7 8 
. . . . . . 8 8 8 7 7 8 8 6 8 8 
. . e e e e c 6 6 8 8 . 8 7 8 . 
. e 2 5 4 2 e c 8 . . . 6 7 8 . 
e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
e 2 e e 2 2 2 2 e e e e c 6 8 . 
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
. c 2 e e e 2 e 2 4 2 2 2 2 c . 
. . c 2 2 2 e e 2 2 2 2 2 2 2 e 
. . . e c c e c 2 2 2 2 2 2 2 e 
. . . . . . . c 2 e e 2 2 e 2 c 
. . . . . . . c e e e e e e 2 c 
. . . . . . . . c e 2 2 2 2 c . 
. . . . . . . . . c c c c c . . 
`, SpriteKind.Enemy)
    cherry.setVelocity(0, 50)
    cherry.setPosition(Math.randomRange(0, 160), 0)
    strawberry = sprites.create(img`
. . . . . . . 6 . . . . . . . . 
. . . . . . 8 6 6 . . . 6 8 . . 
. . . e e e 8 8 6 6 . 6 7 8 . . 
. . e 2 2 2 2 e 8 6 6 7 6 . . . 
. e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
. e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
e 2 2 2 2 2 2 2 4 e 2 e e c . . 
e e 2 e 2 2 4 2 2 e e e c . . . 
e e e e 2 e 2 2 e e e c . . . . 
e e e 2 e e c e c c c . . . . . 
. c c c c c c c . . . . . . . . 
`, SpriteKind.Enemy)
    strawberry.setVelocity(0, 50)
    strawberry.setPosition(Math.randomRange(0, 160), 0)
    lemon = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Enemy)
    lemon.setVelocity(0, 50)
    lemon.setPosition(Math.randomRange(0, 160), 0)
})
