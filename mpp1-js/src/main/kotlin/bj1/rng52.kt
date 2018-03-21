package bj1

import kotlin.js.Math.random
import kotlin.math.floor

actual fun rng52() = floor(random() * 52).toInt()