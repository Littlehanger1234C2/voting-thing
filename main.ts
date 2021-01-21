input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(255)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
radio.setGroup(4)
radio.setTransmitSerialNumber(true)
basic.showIcon(IconNames.Ghost)
