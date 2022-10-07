eggbit.onEvent(EBPins.Green, EBEvents.Release, function () {
    radio.sendNumber(6)
})
eggbit.onEvent(EBPins.Blue, EBEvents.Release, function () {
    radio.sendNumber(8)
})
eggbit.onEvent(EBPins.Green, EBEvents.Press, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(9)
    speed += 1
    light_change = 1
})
eggbit.onEvent(EBPins.Red, EBEvents.Press, function () {
    radio.sendNumber(1)
})
eggbit.onEvent(EBPins.Blue, EBEvents.Press, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(11)
    speed = 5
    light_change = 1
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(10)
    speed += -1
    light_change = 1
})
eggbit.onEvent(EBPins.Yellow, EBEvents.Release, function () {
    radio.sendNumber(4)
})
eggbit.onEvent(EBPins.Red, EBEvents.Release, function () {
    radio.sendNumber(2)
})
eggbit.onEvent(EBPins.Yellow, EBEvents.Press, function () {
    radio.sendNumber(3)
})
let light_change = 0
let speed = 0
radio.setGroup(140)
speed = 5
light_change = 1
basic.forever(function () {
    if (light_change == 1) {
        light_change = 0
        if (speed == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        if (speed == 2) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                # . . . .
                # # # # #
                `)
        }
        if (speed == 3) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 4) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                . . . . #
                `)
        }
        if (speed == 5) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 6) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 7) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        }
        if (speed == 8) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                # . . . #
                # # # # #
                `)
        }
        if (speed == 9) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (speed == 10) {
            basic.showLeds(`
                # . # # #
                # . # . #
                # . # . #
                # . # . #
                # . # # #
                `)
        }
    }
})
basic.forever(function () {
    if (speed < 0) {
        light_change = 1
        speed = 10
    }
    if (speed > 10) {
        light_change = 1
        speed = 0
    }
})
