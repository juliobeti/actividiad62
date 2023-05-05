let b = 0
basic.forever(function () {
    b = 225 - input.lightLevel()
    led.setBrightness(b)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
