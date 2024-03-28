RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
    OLED12864_I2C.showNumber(
    2,
    2,
    count,
    1
    )
    if (count < 1023) {
        count += 1
    }
})
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
    OLED12864_I2C.showNumber(
    2,
    2,
    count,
    1
    )
    if (count > -1023) {
        count += -1
    }
})
let count = 0
OLED12864_I2C.init(60)
OLED12864_I2C.on()
OLED12864_I2C.showString(
2,
2,
"Hello!",
1
)
led.enable(false)
RotaryEncoder.init(DigitalPin.P5, DigitalPin.P6, DigitalPin.P7)
OLED12864_I2C.clear()
count = 0
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    if (count > 0) {
        pins.analogWritePin(AnalogPin.P2, count)
        basic.pause(100)
    }
    if (count < 0) {
        pins.analogWritePin(AnalogPin.P3, count)
        basic.pause(100)
    }
    if (count == 1023 || count == -1023) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
    }
})
