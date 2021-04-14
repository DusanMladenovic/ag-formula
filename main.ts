namespace SpriteKind {
    export const LeftSide = SpriteKind.create()
    export const RightSide = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SPEED = 10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightSide, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.right = otherSprite.right - 0
    scene.cameraShake(4, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftSide, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.left = otherSprite.left + 0
    scene.cameraShake(4, 200)
})
let roadSlice2: Sprite = null
let roadSlice: Sprite = null
let turnOffset = 0
let SPEED = 0
let mySprite = sprites.create(img`
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 c 3 3 3 3 3 3 c 7 . . 
    . . . 7 3 c d 3 3 3 3 3 c 3 7 . 
    . . . 7 3 3 d 3 3 3 3 3 c 3 7 . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 c 3 d d 3 3 3 c 3 f . 
    . . . a 3 c a c c c c a c 3 a . 
    . . . a 3 a c b b b b c a 3 a . 
    . . . a 3 a b b b b b b a 3 a . 
    . . . a a a a a a a a a a a a . 
    . . . f a d a a a a a a d a f . 
    . . . f a 3 d a a a a d 3 a f . 
    . . . f f a a a a a a a a f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
SPEED = 0
info.setLife(100)
game.onUpdateInterval(100, function () {
    turnOffset += randint(-2, 2)
    roadSlice = sprites.createProjectileFromSide(img`
        7777777777777777777777777777cccccc7777777777777777777777cccc....................
        77777777777777777777777777777cccccc777777777777777777777cccc....................
        777777777777777787777777777777cccccc77777777777777888777cccc....................
        7777777777777777877777777777777ccccc777777777777778887777ccc....................
        77777777777777778777777777777777cccc777777777777778887777ccc....................
        7777777777777777777777777777777ccccc77778887777777777777cccc....................
        7888777777777777777777777777777ccccc7777888777777777777ccccc....................
        788877777777777777777777777777ccccc77777888777777777777cccc.....................
        78887777777777777777777777777cccccc77777777777777777777ccccc....................
        7777777777777777777777777777cccccc777777777777777777777ccccc....................
        `, 0, 80)
    roadSlice.right = 50
    roadSlice.setKind(SpriteKind.RightSide)
    roadSlice.x += 0 - turnOffset
    roadSlice2 = sprites.createProjectileFromSide(img`
        ........cccccc7888777777777777777777ccccc777777777777777777777777777777777777777
        ........ccccc7777777777778887777777ccccc7777777777777777777777777777777777777777
        .........ccc77777777777778887777777ccccc7777777777777777777777777777777777777777
        ........ccccc777777777777888777777ccccc77777777777777777777777777777777777777777
        ........cccc7777777777777777777777ccccc77777777777777777777777777777777777777777
        ........ccccc777777777777777777777cccccc7777777777777777777777777777777777777777
        ........ccccc777888777777777777777cccccc7777777777777777777777777777777777777777
        ........cccc7777888777777777777777ccccccc777777777777777777777777777777777777777
        .........cccc7778887777777777777777cccccc777777777777777777777777777777777777777
        ........cccccc7777777777777777777777cccccc77777777777777777777777777777777777777
        `, 0, 80)
    roadSlice2.right = 200
    roadSlice2.setKind(SpriteKind.LeftSide)
    roadSlice2.x += 0 - turnOffset
})
