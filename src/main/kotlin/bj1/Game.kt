package bj1

class Game(private val shuffle: Boolean = true) {

  internal var deck = Deck(shuffle)

  val ph = Hand("Player")
  val dh = Hand("Dealer")

  init {
    deal()
  }

  private fun hitHand(h: Hand) {
    if (deck.isEmpty()) deck = Deck(shuffle)
    h.add(deck.take())
  }

  fun deal() {
    ph.clear()
    dh.clear()
    hitHand(ph)
    hitHand(dh)
    hitHand(ph)
    hitHand(dh)
  }

  fun hit() {
    hitHand(ph)
  }

  fun stay() {
    while (dh.points < 17) hitHand(dh)
  }

  fun dump(){
    ph.dump()
    dh.dump()
    println()
  }

}