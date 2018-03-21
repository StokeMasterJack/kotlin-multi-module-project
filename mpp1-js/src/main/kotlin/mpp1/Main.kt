package mpp1

import bj1.Game
import bj1.Hand
import kotlinx.html.FlowContent
import kotlinx.html.button
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import kotlinx.html.style
import kotlin.browser.document
import kotlin.dom.clear

fun main(args: Array<String>) {
  Main.init()
}

object Main {

  private var g = Game()

  private fun deal() {
    g.deal()
    renderAll()
  }

  private fun hit() {
    g.hit()
    renderAll()
  }

  private fun stay() {
    g.stay()
    renderAll()
  }

  fun init() {
    deal()
  }

  private fun renderAll() {
    document.body!!.clear()
    val mainDiv = document.create.div {
      gameView()
    }
    document.body!!.appendChild(mainDiv)
  }

  private fun FlowContent.gameView() {
    div {
      div {
        button { +"Deal"; onClickFunction = { deal() } }
        button { +"Hit"; onClickFunction = { hit() } }
        button { +"Stay";onClickFunction = { stay() } }
      }
      div {
        style = "display:flex"
        handView(g.ph)
        handView(g.dh)
      }
    }
  }

  private fun FlowContent.handView(h: Hand) {
    div {
      style = "background:cyan;margin:1rem;padding:1rem;width:10rem;height:10rem"
      div {
        style = "font-weight:bold"
        +"${h.name} Hand"
      }
      h.cards.forEach {
        div {
          +it.name
        }
      }
      div {
        style = "font-weight:bold"
        +"${h.points.toString()} Points"
      }
    }
  }

}



