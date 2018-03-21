package mpp1

import bj1.Game
import bj1.Hand
import jline.console.ConsoleReader

val g = Game()

fun gameView(g: Game, r: ConsoleReader) {
  handView(g.ph, r)
  handView(g.dh, r)
  r.println()
}

fun handView(h: Hand, r: ConsoleReader) {
  r.println("${h.name} Hand")
  h.cards.forEach { r.println("  ${it.name}") }
  r.println("  ${h.points} Points")
  repeat(6 - h.size) {
    r.println()
  }
}

fun main(args: Array<String>) {

  val r = ConsoleReader()

  myLoop@ while (true) {
    r.clearScreen()
    gameView(g, r)
    r.print("Press d, h, s or q> ")
    r.flush()

    val char = r.readCharacter('d', 'h', 's', 'q').toChar()
    when (char) {
      'd' -> g.deal()
      'h' -> g.hit()
      's' -> g.stay()
      'q' -> break@myLoop
    }
  }

  r.clearScreen()
  r.flush()

}