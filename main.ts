scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    die()
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("level compleat!")
    tiles.setCurrentTilemap(tilemap`level4`)
    restart_location = tiles.getTileLocation(1, 14)
    tiles.placeOnTile(mySprite, restart_location)
    mySprite.ay = 1000
    jumping = false
    up = false
    mySprite.setImage(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f b 7 7 7 7 b f e f 
        e 4 f 7 7 7 7 7 7 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    game.splash("level 2!")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumping == false) {
        mySprite.ay = -1000
        jumping = true
        up = true
        mySprite.setImage(img`
            . . . f f . . f f . . . 
            . . . f f f f f f . . . 
            e e f 6 6 6 6 6 6 f e e 
            e 4 f 7 7 7 7 7 7 f 4 e 
            f e f b 7 7 7 7 b f e f 
            . f f f e e e e f f f . 
            . f e 4 4 4 4 4 4 e f . 
            . f 4 1 f 4 4 f 1 4 f . 
            f f f b f e e f b f f f 
            f f f f f e e f f c c f 
            c c c f f f e e f f c c 
            f f f c f f f f f f f c 
            f f f f f f c c f f f c 
            . f f f f f f c f f f . 
            . . f f f f f f f f . . 
            . . . . f f f f . . . . 
            `)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        jumping = false
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumping = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.splash("level compleat!")
    game.splash("level 4!")
    tiles.setCurrentTilemap(tilemap`level3`)
    restart_location = tiles.getTileLocation(1, 14)
    tiles.placeOnTile(mySprite, restart_location)
    mySprite.ay = 1000
    jumping = false
    up = false
    mySprite.setImage(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f b 7 7 7 7 b f e f 
        e 4 f 7 7 7 7 7 7 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (up == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f . . . f f . . 
            . . f f f f f f f f f f . 
            . . f f 6 6 6 6 f e e f . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . . f f e e e e 4 4 4 . 
            . . . f 4 4 4 4 e f f f . 
            . . f f 4 4 f 1 e 4 e f f 
            . f f f e e f b f e e f f 
            . f f f e e f f f f f f f 
            f f f f f e f f f f c c f 
            f f c c f f f c c f f c f 
            . f f f c f f f c f f f f 
            . . f f f c f f f f f f . 
            . . . f f f f f f f f f . 
            . . . . f f f f f f . . . 
            . . . . . . . . . . . . . 
            `,img`
            . . . f f f . . . f f . . 
            . . f f f f f f f f f f . 
            . . f f 6 6 f e e f f f . 
            . . . f 7 7 e 4 4 e f . . 
            . . . f f e e 4 4 e f . . 
            . . . f 4 4 4 e e f f f . 
            . . f f 4 4 f 1 e 4 e f . 
            . . f f e e f b f e e f f 
            . f f f e e f f f f f f f 
            f f f f f e f f f f c c f 
            f f c c f f f c c f f c f 
            . f f f c f f f c f f f f 
            . . f f f c f f f f f f . 
            . . . f f f f f f f f f . 
            . . . . f f f f f f . . . 
            . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f . . . . 
            . . . . f f f f f f . . . 
            . . . f 6 6 6 f e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f f e e e e e f . . 
            . . . f 4 4 4 4 e f f f . 
            . . . f 4 4 f 1 e 4 e f . 
            . . f f e e f b f e e f f 
            . f f f e e f f f f f f f 
            f f f f f e f f f f c c f 
            f f c c f f f c c f f c f 
            . . f f c f f f c f f f f 
            . . f f f c f f f f f f . 
            . . . f f f f f f f f f . 
            . . . . . f f f f f . . . 
            `],
        100,
        false
        )
    }
    if (up == false) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 7 7 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("level compleat!")
    game.splash("level 3!")
    tiles.setCurrentTilemap(tilemap`level1`)
    restart_location = tiles.getTileLocation(1, 18)
    tiles.placeOnTile(mySprite, restart_location)
    mySprite.ay = 1000
    jumping = false
    up = false
    mySprite.setImage(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f b 7 7 7 7 b f e f 
        e 4 f 7 7 7 7 7 7 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
})
function die () {
    mySprite.ay = 1000
    info.changeLifeBy(-1)
    tiles.placeOnTile(mySprite, restart_location)
    jumping = false
    up = false
    mySprite.setImage(img`
        . . . . f f f f . . . . 
        . . f f f f f f f f . . 
        . f f f f f f c f f f . 
        f f f f f f c c f f f c 
        f f f c f f f f f f f c 
        c c c f f f e e f f c c 
        f f f f f e e f f c c f 
        f f f b f e e f b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f e 4 4 4 4 4 4 e f . 
        . f f f e e e e f f f . 
        f e f b 7 7 7 7 b f e f 
        e 4 f 7 7 7 7 7 7 f 4 e 
        e e f 6 6 6 6 6 6 f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    game.splash("you lost a life!")
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (up == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . f f . . . f f f . . . 
            . f f f f f f f f f f . . 
            . f e e f 6 6 6 6 f f . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . 4 4 4 e e e e f f . . . 
            . f f f e 4 4 4 4 f . . . 
            f f e 4 e 1 f 4 4 f f . . 
            f f e e f b f e e f f f . 
            f f f f f f f e e f f f . 
            f c c f f f f e f f f f f 
            f c f f c c f f f c c f f 
            f f f f c f f f c f f f . 
            . f f f f f f c f f f . . 
            . f f f f f f f f f . . . 
            . . . f f f f f f . . . . 
            . . . . . . . . . . . . . 
            `,img`
            . . f f . . . f f f . . . 
            . f f f f f f f f f f . . 
            . f f f e e f 6 6 f f . . 
            . . f e 4 4 e 7 7 f . . . 
            . . f e 4 4 e e f f . . . 
            . f f f e e 4 4 4 f . . . 
            . f e 4 e 1 f 4 4 f f . . 
            f f e e f b f e e f f . . 
            f f f f f f f e e f f f . 
            f c c f f f f e f f f f f 
            f c f f c c f f f c c f f 
            f f f f c f f f c f f f . 
            . f f f f f f c f f f . . 
            . f f f f f f f f f . . . 
            . . . f f f f f f . . . . 
            . . . . . . . . . . . . . 
            `,img`
            . . . . f f f . . . . . . 
            . . . f f f f f f . . . . 
            . . f e e f 6 6 6 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e e e e f f . . . 
            . f f f e 4 4 4 4 f . . . 
            . f e 4 e 1 f 4 4 f . . . 
            f f e e f b f e e f f . . 
            f f f f f f f e e f f f . 
            f c c f f f f e f f f f f 
            f c f f c c f f f c c f f 
            f f f f c f f f c f f . . 
            . f f f f f f c f f f . . 
            . f f f f f f f f f . . . 
            . . . f f f f f . . . . . 
            `],
        100,
        false
        )
    }
    if (up == false) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f f . 
            f f e 4 e 1 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 7 7 7 7 f . . . 
            . f e e f 6 6 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 7 7 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        false
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumping == false) {
        mySprite.ay = 1000
        jumping = true
        up = false
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f f f f f f f . . 
            . f f f f f f c f f f . 
            f f f f f f c c f f f c 
            f f f c f f f f f f f c 
            c c c f f f e e f f c c 
            f f f f f e e f f c c f 
            f f f b f e e f b f f f 
            . f 4 1 f 4 4 f 1 4 f . 
            . f e 4 4 4 4 4 4 e f . 
            . f f f e e e e f f f . 
            f e f b 7 7 7 7 b f e f 
            e 4 f 7 7 7 7 7 7 f 4 e 
            e e f 6 6 6 6 6 6 f e e 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let restart_location: tiles.Location = null
let mySprite: Sprite = null
let up = false
let jumping = false
scene.setBackgroundColor(14)
game.splash("level 1!")
jumping = false
up = false
info.setLife(3)
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f c f f f . 
    f f f f f f c c f f f c 
    f f f c f f f f f f f c 
    c c c f f f e e f f c c 
    f f f f f e e f f c c f 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
restart_location = tiles.getTileLocation(1, 14)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnTile(mySprite, restart_location)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 1000
