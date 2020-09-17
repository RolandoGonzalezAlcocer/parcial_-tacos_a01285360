input.onButtonPressed(Button.A, function () {
    basic.showNumber(cant_tacos)
    basic.showString("Tacos")
    basic.showNumber(cant_refrescos)
    basic.showString("Refrescos")
    basic.showString("Total:")
    basic.showNumber(cant_tacos * precio_tacos + cant_refrescos * precio_refrescos)
})
let precio_refrescos = 0
let precio_tacos = 0
let cant_refrescos = 0
let cant_tacos = 0
basic.showString("Rolando Gonzalez A01285360")
cant_tacos = randint(0, 20)
cant_refrescos = randint(0, 5)
precio_tacos = 15
precio_refrescos = 10
