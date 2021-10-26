namespace SpriteKind {
    export const WepMaterials = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Rancle.startEffect(effects.halo)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Rancle.vy == 0) {
        Rancle.vy = -125
        music.jumpUp.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.melt)
    music.stopAllSounds()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WepMaterials, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    game.over(true, effects.confetti)
})
let dual_srods: Sprite = null
let Rancle: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333777777777777733333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333777777777777777777733333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333377777777733333333333333333333333333333333333337777777777777777777777333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333377777777777777733333333333333333333333333333333377771117777111777777777773333333333333333333333
    3333333333333777777777777773333333333333333333333333333333333337777777777777777777333333333333333333333333333333777771117777111777777777773333333333333333333333
    3333333333337777777777777777733333333333333333333333333333333377777711177777777777773333333333333333333333333333777771117777111777111777777333333333333333333333
    3333333333377777777777777777773333333333333333333333333333333777777711177777777777777333333333333333333333333337777777777777777777111777777333333333333333333333
    3333333333377777777111777777777333333333333333333333333333333777777711177777771117777773333333333333333333333377777777777777777777111777777733333333333333333333
    3333333333777777777111777777777773333333333333333333333333337777777777777777771117777777333333333333333333333377777771117777777777777777777733333333333333333333
    3333333337777777777111777111777773333333333333333333333333377777777777777777771117777777733333333333333333333377777771117777777777777777777733333333333333333333
    3333333337771117777777777111777773333333333333333333333333377777777777777777777777777777733333333333333333333777777771117777111777777711177733333333333333333333
    3333333377771117777777777111777777333333333333333333333333777777777777777777777777777777773333333333333333333777777777777777111777777711177733333333333333333333
    3333333377771117777777777777777777333333333333333333333337777777111777771117777777777777773333333333333333333771117777777777111777777711177733333333333333333333
    3333333777777777777777777777777777333333333333333333333337777777111777771117777777711177773333333333333333333771117777777777777777777777777733333333333333333333
    3333333777777777777777111777777777333333333333333333333377777777111777771117777777711177773333333333333333333771117777777777777777777777777733333333333333333333
    3333333777777777777777111777777777333333333333333333333377777777777777777777777777711177773333333333333333333777777777771117777777711177777733333333333333333333
    3333337777777777777777111777777777333333333333333333333377777777777777777777777777777777773333333333333333333777777777771117777777711177777733333333333333333333
    3333337777777777777777777711177777333333333333333333333377777777777777777777777777777777773333333333333333333777777777771117777777711177777333333333333333333333
    3333337777777777777777777711177777333333333333333333333377771117777777777777777777777777773333333333333333333333777777777777777777777777773333333333333333333333
    3333337777111777771117777711177777333333333333333333333377771117777711177777711177777777733333333333333333333333777777777777777777777777773333333333333333333333
    3333337777111777771117777777777777333333333333333333333377771117777711177777711177777777733333333333333333333333333333333333333333333333333333333333333333333333
    3333337777111777771117777777777777333333333333333333333377777777777711177777711177777777333333333333333333333333333333333333333333333333333333333333333333333333
    3333333777777777777777777777777773333333333333333333333337777777777777777777777777777773333333333333333333333333333333333333333333333333333333333333333333333333
    3333333337777777777777777777733333333333333333333333333333777777777777777777777777733333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333337777777777777777333333333333333333333333333333333337777773333333333333333333333333333333333333333333333333333333333333332222233333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333322222233333333333333333333333333
    3333333333333333333333333333333333333333333333333339999933333333333333333333333333333333333333333333333333333333333333333333333322222223333333333333333333333333
    3333333333333333333333333333333333333333333333333399999933333333333333333333333333333333333333333333333333333333333333333333333222222223333333333333333333333333
    3333333333333333333333333333333333333333333333333399999993333333333333333333333333333333333333333333333333333333333333333333333222222223333333333333333333333333
    3333333333333333333333333333333333333333333333333999999993333333333333333333333333333333333333333333333333333333333333333333322222222222333333333333333333333333
    3333333333333333333333333333333333333333333333333999999993333333333333333333333333333333333333333333333333333333333333333333322222222222333333333333333333333333
    3333333333333333333333333333333333333333333333339999999999333333333333333333333333333333333333333333333333333333333333333332222222222222233333333333333333333333
    3333333333333333333333333333333333333333333333339999999999333333333333333333333333333333333333333333333333333333333333333322222222222222223333333333333333333333
    3333333333333333333333333333333333333333333333399999999999933333333333333333333333333333333333333333338888833333333333333222222222222222223333333333333333333333
    3333333333333333333333333333333333333333333333999999999999993333333333333333333333333333333333333333338888833333333333332222222222222222222333333333333333333333
    3333333333333333333333333333333333333333333339999999999999993333333333333333444444333333333333333333338888833333333333322222222222222222222233333333333333333333
    33333333333333333aaaaa333333333333333333333339999999999999999333333333333333444444333333333333333333338888833333333333222222222222222222222222333333333333333333
    3333333333333333aaaaaa333333333333333333333339999999999999999333333333333333444444333333333333333333388888833333333333222222222222222222222222333333333333333333
    3333333333333333aaaaaa333333333333333333333339999999999999999933333333333334444444433333333333333333388888883333333333222222222222222222222222223333333333333333
    333333333333333aaaaaaa333333333333333333333339999999999999999933333333333334444444433333333333333333888888883333333332222222222222222222222222222333333333333333
    333333333333333aaaaaaa333333333333333333333399999999999999999993333333333344444444443333333333333338888888883333333322222222222222222222222222222223333333333333
    333333333333333aaaaaaa333333333333333333333399999999999999999993333333333444444444444333333333333338888888888333333322222222222222222222222222222222333333333333
    333333333333333aaaaaaa333333333333333333333999999999999999999999333333333444444444444333333333333388888888888333333222222222222222222222222222222222233333333333
    33333333333333aaaaaaaa333333333333333333333999999999999999999999333333334444444444444433333333333388888888888333333222222222222222222222222222222222223333333333
    33333333333333aaaaaaaaa33333333333333333339999999999999999999999333333344444444444444433333333333888888888888333332222222222222222222222222222222222222233333333
    3333333333333aaaaaaaaaa33333333333333333339999999999999999999999933333444444444444444443333333333888888888888833332222222222222222222222222222222222222223333333
    3333333333333aaaaaaaaaaa3333333333333333399999999999999999999999933334444444444444444444333333333888888888888833322222222222222222222222222222222222222222333333
    3333333333333aaaaaaaaaaa3333333333333333399999999999999999999999993344444444444444444444433333338888888888888833222222222222222222222222222222222222222222222333
    3333333333333aaaaaaaaaaa333333333333333339999999999999999999999999944444fffff44444444444433333338888888888888833222222222222222222222222222222222222222222222233
    3333333333333aaaaaaaaaaaa33333333333333399999999999999999999999999994444fffff44444444444443333388888888888888832222222222222222222222222222222222222222222222223
    333333333333aaaaaaaaaaaaaa3333333333333399999999999999999999999999994444fffff44444fffff4444333888888888888888882222222222222222222222222222222222222222222222222
    333333333333aaaaaaaaaaaaaa3333333333333399999999999999999999999999994444fffff44444fffff4444433888888888888888882222222222222222222222222222222222222fffff2222222
    333333333333aaaaaaaaaaaaaaa333333333333999999999999999999999999999994444fffff44444fffff4444443888888888888888882222222222222222222222222222222222222fffff2222222
    33333333333aaaaaaaaaaaaaaaaa333333333339999999999999999999999999999944444444444444fffff4444448888888888888888882222222222222222222222222222222222222fffff2222222
    33333333333aaaaaaaaaaaaaaaaaa33333333399999999999999999999999999999944444444444444fffff44444888888888888888888882222fffff222222222222222222222222222fffff2222222
    3333333333aaaaaaaaaaaaaaaaaaaa33333333999999999999999999999999999999444444444444444444444444888888888888888888888222fffff222222222222222222222222222fffff2222222
    3333333333aaaaaaaaaaaaaaaaaaaaa3333339999999999999999999999999999999444444444444444444444448888888888888888888888222fffff222222222222222222222222222222222222222
    333333333aaaaaaaaaaaaaaaaaaaaaaa333339999999999999999999999999999999444444fffffffff444444448888888888888888888888822fffff222222222222222222222222222222222222222
    33333333aaaaaaaaaaaaaaaaaaaaaaaaa33339999999999999999999999999999999444444fffffffff444444488888888888888888888888822fffff222222222222222222222222222222222222222
    3333333aaaaaaaaaaaaaaaaaaaaaaaaaaa3339999999999999999999999999999999944444fffffffff44444488888888888888888888888888222222222222222222222222222222222222222222222
    333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaa339999999999999999999999999999999944444fffffffff44444488888888888888888888888888222222222222222222222222222222222222222222222
    33333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa399fffff999999999999999999999999994444fffffffff44444488888888888888888888888888222222222222222222222222222222222222222222222
    3333aaaaaaaaaaaaaaaaaaaaafffffaaaaaaa99fffff99999999999999999999999999444444444444444444888888888888888888888888888822222222222222222222222222222222222222222222
    333afffffaaaaaaaaaaaaaaaafffffaaaaaaa99fffff99999999999999999999999999444444444444444448888888888888888888888888888822222222222222222222222222222222222222222222
    33aafffffaaaaaaaaaaaaaaaafffffaaaaaaaa9fffff99999999999999999999999999944444444444444448888888888888888888888888888822222222222222222222ffffffffffff222222222222
    3aaafffffaaaaaaaaaaaaaaaafffffaaaaaaaa9fffff9999999999999999999999999994444444444444448888888888888888888888888888888222222222222222222ffffffffffffffff222222222
    aaaafffffaaaaaaaaaaaaaaaafffffaaaaaaaa99999999999999999999999999999999994444444444444888888888888888888888888888888882222222222222222ffffffffffffffffffff2222222
    aaaafffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999444444444444488888888888888888888888fffff8888822222222222222ffffffffffffffffffffff222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999944444444444888fffff8888888888888888fffff88888222222222222fffffffffffffffffffffffff22222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999944444444448888fffff8888888888888888fffff88888822222222222fffffffffff222fffffffffff22222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999944444444448888fffff8888888888888888fffff8888888222222222ffffffffff22222222fffffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999944444444488888fffff8888888888888888fffff8888888222222222fffffffff22222222222fffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999994444444488888fffff8888888888888888888888888888222222222ffffffff222222222222fffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999fffff9999999994444444888888888888888888888888888888888888888822222222ffffff222222222222222ffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999fffff9999999994444444888888888888888888888888888888888888888882222222ffffff222222222222222ffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999fffff9999999999444444888888888888888888888888888888888888888888222222fffff2222222222222222ffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999fffff9999999999444444888888888888888888888888888888888888888888222222ffffff22222222222222fffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999fffff9999999999444448888888888888888888888888888888888888888888222222fffffff2222222222222fffffff2222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999444448888888888888888888888888888888888888888888822222ffffffff22222222222fffffff22222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999944448888888888888888888888888888888888888888888822222ffffffffff22222222ffffffff22222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999444488888888888888888888888888888888888888888888822222ffffffffff222222ffffffff222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999fffff9999999999999999999999999999994444888888888888888888888888888888888888888888888222222ffffffffffff2ffffffffff222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999fffffff99999999999999999999999999999444888888888888ffffffff88888888888888888888888882222222fffffffffffffffffffff2222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999ffffffffff999999999999999999999999994448888888888ffffffffffffffff888888888888888888822222222fffffffffffffffffff22222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999ffffffffffff999999999999999999999999944888888888fffffffffffffffffffffffff888888888882222222222ffffffffffffffff222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999fffffffffffff99999999999999999999999944888888888fffffffffffffffffffffffffff88888888882222222222ffffffffffffff2222222222
    aaaaaafffffffffffffffffffffffffffffaaa9999ffffffffffffff99999999999999999999994488888888ffffffffffffffffffffffffffff88888888882222222222222fffffffff222222222222
    aaaffffffffffffffffffffffffffffffffaaa999999fffffffffffffff99999999999999999994488888888ffffffffffffffffffffffffffff88888888888222222222222222222222222222222222
    aaaffffffffffffffffffffffffffffffffaaa999999999ffffffffffff99999999999999999999448888888ffffff88888888ffffffffffffff88888888888222222222222222222222222222222222
    aaaffffffffffffffffffffffffffffffffaaa99999999999ffffffffff99999999999999999999448888888ffffff8888888888888888ffffff88888888888222222222222222222222222222222222
    aaaffffffffffffffffffffffffffffffffaaa999999999999fffffffff99999999999999999999448888888fffff8888888888888888888888888888888888222222222222222222222222222222222
    aaafffffff2222222222222222ffffffffaaaa99999999999999fffffff99999999999999999999448888888fffff8888888888888888888888888888888888222222222222222222222222222222222
    aaaafffffff22222222222222fffffffffaaaa99999999999999999999999999999999999999999948888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaffffffff22222222222fffffffffffaaaa99999999999999999999999999999999999999999948888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaffffffffff2222222fffffffffffffaaaa99999999999999999999999999999999999999999948888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaffffffffffff2222fffffffffffffaaaaa99999999999999999999999999999999999999999948888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaffffffffffffffffffffffffffaaaaaaa99999999999999999999999999999999999999999998888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaafffffffffffffffffffffffaaaaaaaaa99999999999999999999999999999999999999999998888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaafffffffffffffffffffaaaaaaaaaaa99999999999999999999999999999999999999999998888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaffffffffffffffffaaaaaaaaaaaa99999999999999999999999999999999999999999998888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaafffffffffffffaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999988888888888888888888888888888888888888888888888222222222222222222222222222222222
    `)
scene.setBackgroundColor(3)
Rancle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 . 2 5 2 . 2 . . . . . 
    . . . 2 5 2 5 5 5 2 5 2 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 d d d d d d 7 7 . . . 
    . . 7 7 d d f d d f d d 7 7 . . 
    . . . 7 d d f d d f d d . 7 . . 
    . . . . 6 d d d d d d 6 . . . . 
    . . . 6 6 6 4 6 6 9 6 6 6 . . . 
    . . 6 6 . . a 4 9 a . . 6 6 . . 
    . . d . . a b 9 4 b a . . d . . 
    . . . . a b 9 6 6 4 b a . . . . 
    . . . a b 6 6 6 6 6 6 b a . . . 
    `, SpriteKind.Player)
controller.moveSprite(Rancle, 100, 0)
Rancle.setPosition(11, 200)
Rancle.ay = 200
scene.cameraFollowSprite(Rancle)
for (let value of tiles.getTilesByType(assets.tile`myTile39`)) {
    dual_srods = sprites.create(img`
        1 1 f f f . . . . . . f f f 1 1 
        . . b b . . . . . . . . b b . . 
        . . b b b . . . . . . b b b . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b f . . f b b . . . . 
        . . . b b b . . . . b b b . . . 
        . . b b b . . . . . . b b b . . 
        b b b b . . . . . . . . b b b b 
        b 1 b . . . . . . . . . . b 1 b 
        b b b . . . . . . . . . . b b b 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.WepMaterials)
    animation.runImageAnimation(
    dual_srods,
    [img`
        1 1 f f f . . . . . . f f f 1 1 
        . . b b . . . . . . . . b b . . 
        . . b b b . . . . . . b b b . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b f . . f b b . . . . 
        . . . b b b . . . . b b b . . . 
        . . b b b . . . . . . b b b . . 
        b b b b . . . . . . . . b b b b 
        b 1 b . . . . . . . . . . b 1 b 
        b b b . . . . . . . . . . b b b 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 1 1 f f f . . . . f f f 1 1 . 
        . . . b b . . . . . . b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b b . . b b b . . . . 
        . . . b b b . . . . b b b . . . 
        . b b b b . . . . . . b b b b . 
        . b 1 b . . . . . . . . b 1 b . 
        . b b b . . . . . . . . b b b . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . 1 1 f f f . . f f f 1 1 . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b b . . b b b . . . . 
        . . . b b b . . . . b b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . b 1 b . . . . b 1 b . . . 
        . . . b b b . . . . b b b . . . 
        `,img`
        . . . 1 1 f f f f f f 1 1 . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b 1 b b 1 b . . . . . 
        . . . . . b b b b b b . . . . . 
        `,img`
        . . 1 1 f f f . . f f f 1 1 . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b b . . b b b . . . . 
        . . . b b b . . . . b b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . b 1 b . . . . b 1 b . . . 
        . . . b b b . . . . b b b . . . 
        `,img`
        . 1 1 f f f . . . . f f f 1 1 . 
        . . . b b . . . . . . b b . . . 
        . . . b b b . . . . b b b . . . 
        . . . . b b b . . b b b . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . b f . . f b . . . . . 
        . . . . b b b . . b b b . . . . 
        . . . b b b . . . . b b b . . . 
        . b b b b . . . . . . b b b b . 
        . b 1 b . . . . . . . . b 1 b . 
        . b b b . . . . . . . . b b b . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(dual_srods, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Rancle.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . 2 . 2 5 2 . 2 . . . . . 
        . . . 2 5 2 5 5 5 2 5 2 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 d d d d d d 7 7 . . . 
        . . 7 7 d d f d d f d d 7 7 . . 
        . . . 7 d d f d d f d d . 7 . . 
        . . . . 6 d d d d d d 6 . . . . 
        . . . 6 6 6 4 6 6 9 6 6 6 . . . 
        . . . d a a a 4 9 a a a d . . . 
        . . . a 6 6 6 9 4 6 6 6 a . . . 
        . . a 6 6 2 d 2 2 d 2 6 6 a . . 
        . a 6 6 2 2 2 b b 2 2 2 6 6 a . 
        `)
    if (Rancle.vy < 0) {
        Rancle.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . 2 . 2 5 2 . 2 . . . . . 
            . . . 2 5 2 5 5 5 2 5 2 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . d 7 7 d f d d f d 7 7 d . . 
            . . 6 7 d d d d d d d d 7 6 . . 
            . . 6 7 d d d d d d d d 7 6 . . 
            . . 6 6 7 d d d d d d 7 6 6 . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . a 6 6 a . . . . . . 
            . . . . . a b 6 6 b a . . . . . 
            . . . . a b 6 6 6 6 b a . . . . 
            . . . a b b 6 6 6 6 b b a . . . 
            . . a b b 2 d 2 2 d 2 b b a . . 
            . a b b 2 2 2 b b 2 2 2 b b a . 
            `)
    } else if (Rancle.vy > 0) {
        Rancle.setImage(img`
            . . . . . . . . . 2 . . . . . . 
            . . . . . . 2 . 2 5 2 . 2 . . . 
            . . . . . 2 5 2 5 5 5 2 5 2 . . 
            . . . . . 7 7 7 7 7 7 7 7 7 . . 
            . . . . 7 7 d d d d d 7 7 7 . . 
            . . . . 7 d d d d d d d 7 7 . . 
            . . . 7 7 d d d f d f d 7 7 7 . 
            . . 7 7 7 7 d d f d f . 7 7 7 7 
            . 7 7 a a a a 7 6 6 6 6 6 6 7 7 
            . 7 a b 2 b b a 6 6 a . . d 7 7 
            . a b 2 d 6 6 6 6 6 b a . . 7 7 
            a 2 b 2 2 6 6 6 6 6 b a . . 7 7 
            2 d 6 2 6 6 6 6 6 6 b a . . . 7 
            2 2 6 6 6 6 6 6 6 b b a . . . . 
            2 b b b b b b b b b a . . . . . 
            a a a a a a a a a a . . . . . . 
            `)
    } else if (Rancle.x % 2 == 0) {
        Rancle.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . 2 . 2 5 2 . 2 . . . . . 
            . . . 2 5 2 5 5 5 2 5 2 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 d d d d d d 7 7 . . . 
            . . 7 7 d d f d d f d d 7 7 . . 
            . . . 7 d d f d d f d d . 7 . . 
            . . . . 6 d d d d d d 6 . . . . 
            . . . 6 6 6 4 6 6 9 6 6 6 . . . 
            . . 6 6 . . a 4 9 a . . 6 6 . . 
            . . d . . a b 9 4 b a . . d . . 
            . . . . a b 9 6 6 4 b a . . . . 
            . . . a b 6 6 6 6 6 6 b a . . . 
            `)
    }
    if (Rancle.vx < 0) {
        Rancle.image.flipX()
    }
})
forever(function () {
    music.playMelody("B A D C D E E G ", 100)
    music.playMelody("E D E F G F E C ", 100)
    music.playMelody("F G F E F G A C5 ", 100)
})