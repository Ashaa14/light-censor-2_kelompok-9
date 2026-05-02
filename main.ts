basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.showString("TERANG")
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
    } else if (input.lightLevel() > 160 && input.lightLevel() <= 200) {
        basic.showString("REDUP")
        basic.pause(100)
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
    } else if (input.lightLevel() > 80 && input.lightLevel() <= 160) {
        basic.showString("TEMARAM")
        basic.pause(100)
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
    } else {
        basic.showString("GELAP")
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
})
