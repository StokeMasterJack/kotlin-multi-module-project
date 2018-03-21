package bj1

import java.util.*
import kotlin.concurrent.getOrSet

private val threadLocal: ThreadLocal<Random> = ThreadLocal()

actual fun rng52(): Int {
  val r = threadLocal.getOrSet { Random() }
  return r.nextInt(52)
}