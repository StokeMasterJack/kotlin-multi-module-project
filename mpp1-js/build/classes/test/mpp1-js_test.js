if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'mpp1-js_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mpp1-js_test'.");
}
if (typeof this['mpp1-js'] === 'undefined') {
  throw new Error("Error loading module 'mpp1-js_test'. Its dependency 'mpp1-js' was not found. Please, check whether 'mpp1-js' is loaded prior to 'mpp1-js_test'.");
}
if (typeof this['kotlin-test'] === 'undefined') {
  throw new Error("Error loading module 'mpp1-js_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'mpp1-js_test'.");
}
this['mpp1-js_test'] = function (_, Kotlin, $module$mpp1_js, $module$kotlin_test) {
  'use strict';
  var Card = $module$mpp1_js.bj1.Card;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var fail = $module$kotlin_test.kotlin.test.fail_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Deck = $module$mpp1_js.bj1.Deck;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var println_0 = Kotlin.kotlin.io.println;
  var Game = $module$mpp1_js.bj1.Game;
  var Hand = $module$mpp1_js.bj1.Hand;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function CardTest() {
  }
  CardTest.prototype.t1 = function () {
    var c1 = new Card(1, 1);
    var c2 = new Card(13, 4);
    assertEquals(1, c1.value);
    assertEquals(1, c1.suit);
    assertEquals('Spades', c1.suitName);
    assertEquals('Ace', c1.valueName);
    assertEquals('Ace of Spades', c1.name);
    assertEquals(1, c1.points);
    assertEquals(13, c2.value);
    assertEquals(4, c2.suit);
    assertEquals('Diamonds', c2.suitName);
    assertEquals('King', c2.valueName);
    assertEquals('King of Diamonds', c2.name);
    assertEquals(10, c2.points);
    try {
      new Card(1, 5);
      fail('Should never get here');
    }
     catch (e) {
      if (!Kotlin.isType(e, IllegalArgumentException))
        throw e;
    }
    try {
      new Card(14, 1);
      fail('Should never get here');
    }
     catch (e) {
      if (!Kotlin.isType(e, IllegalArgumentException))
        throw e;
    }
  };
  CardTest.prototype.t2 = function () {
  };
  CardTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardTest',
    interfaces: []
  };
  function DeckTest() {
  }
  DeckTest.prototype.t1 = function () {
    var d1 = new Deck(false);
    assertEquals(52, d1.size);
    var c1 = d1.take();
    println(c1.name);
    assertEquals('Ace of Spades', c1.name);
    assertEquals(51, d1.size);
    var c2 = d1.take();
    println(c2.name);
    assertEquals('2 of Spades', c2.name);
    assertEquals(50, d1.size);
    println_0();
    this.renderDeck_0(d1);
  };
  DeckTest.prototype.renderDeck_0 = function (d1) {
    var tmp$;
    tmp$ = d1.cards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element.name);
    }
  };
  DeckTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeckTest',
    interfaces: []
  };
  function GameTest() {
  }
  GameTest.prototype.t1 = function () {
    println('Dave - common');
    var g = new Game(false);
    assertEquals(48, g.deck_8be2vx$.size);
    assertEquals(2, g.ph.size);
    assertEquals(2, g.dh.size);
    assertEquals(4, g.ph.points);
    assertEquals(6, g.dh.points);
    g.hit();
    assertEquals(47, g.deck_8be2vx$.size);
    assertEquals(3, g.ph.size);
    assertEquals(2, g.dh.size);
    assertEquals(9, g.ph.points);
    assertEquals(6, g.dh.points);
    g.hit();
    assertEquals(46, g.deck_8be2vx$.size);
    assertEquals(4, g.ph.size);
    assertEquals(2, g.dh.size);
    assertEquals(15, g.ph.points);
    assertEquals(6, g.dh.points);
    g.stay();
    assertEquals(44, g.deck_8be2vx$.size);
    assertEquals(4, g.ph.size);
    assertEquals(4, g.dh.size);
    assertEquals(15, g.ph.points);
    assertEquals(21, g.dh.points);
  };
  GameTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTest',
    interfaces: []
  };
  function HandTest() {
  }
  HandTest.prototype.t1 = function () {
    var h1 = new Hand('Player');
    h1.add_uhqrzm$(new Card(1, 1));
    h1.add_uhqrzm$(new Card(13, 4));
    var h2 = new Hand('Dealer');
    h2.add_uhqrzm$(new Card(1, 1));
    h2.add_uhqrzm$(new Card(2, 1));
    h2.add_uhqrzm$(new Card(3, 1));
    assertEquals('Player', h1.name);
    assertEquals(11, h1.points);
    assertEquals(2, h1.size);
    assertEquals('Dealer', h2.name);
    assertEquals(6, h2.points);
    assertEquals(3, h2.size);
    this.renderHand_i37g4$(h1);
    println_0();
    this.renderHand_i37g4$(h2);
  };
  HandTest.prototype.renderHand_i37g4$ = function (h) {
    println(h.name + '  Hand');
    var tmp$;
    tmp$ = h.cards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element.name);
    }
    println(h.points.toString() + '  points');
  };
  HandTest.prototype.t2 = function () {
  };
  HandTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HandTest',
    interfaces: []
  };
  function LambdaTest() {
  }
  function LambdaTest$testAnonymousFunctions$lambda() {
    println(111);
  }
  function LambdaTest$testAnonymousFunctions$lambda_0(p1) {
    return Kotlin.imul(p1, p1);
  }
  function LambdaTest$testAnonymousFunctions$lambda_1() {
    println(111);
  }
  function LambdaTest$testAnonymousFunctions$lambda_2(p1) {
    return Kotlin.imul(p1, p1);
  }
  LambdaTest.prototype.testAnonymousFunctions = function () {
    var a = LambdaTest$testAnonymousFunctions$lambda;
    var b = LambdaTest$testAnonymousFunctions$lambda_0;
    this.useFunctions_r843ll$(a, b);
    this.useFunctions_r843ll$(LambdaTest$testAnonymousFunctions$lambda_1, LambdaTest$testAnonymousFunctions$lambda_2);
  };
  function LambdaTest$testLambdaFunctions$lambda() {
    println(111);
    return Unit;
  }
  function LambdaTest$testLambdaFunctions$lambda_0(p1) {
    return Kotlin.imul(p1, p1);
  }
  function LambdaTest$testLambdaFunctions$lambda_1(p1, p2) {
    return Kotlin.imul(p1, p2);
  }
  function LambdaTest$testLambdaFunctions$lambda_2() {
    println(111);
    return Unit;
  }
  function LambdaTest$testLambdaFunctions$lambda_3(it) {
    return Kotlin.imul(it, it);
  }
  LambdaTest.prototype.testLambdaFunctions = function () {
    var a = LambdaTest$testLambdaFunctions$lambda;
    var b = LambdaTest$testLambdaFunctions$lambda_0;
    var c = LambdaTest$testLambdaFunctions$lambda_1;
    c(2, 3);
    this.useFunctions_r843ll$(a, b);
    this.useFunctions_r843ll$(LambdaTest$testLambdaFunctions$lambda_2, LambdaTest$testLambdaFunctions$lambda_3);
  };
  LambdaTest.prototype.useFunctions_r843ll$ = function (f1, f2) {
    f1();
    println(f2(10));
  };
  LambdaTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LambdaTest',
    interfaces: []
  };
  var package$bj1 = _.bj1 || (_.bj1 = {});
  package$bj1.CardTest = CardTest;
  package$bj1.DeckTest = DeckTest;
  package$bj1.GameTest = GameTest;
  package$bj1.HandTest = HandTest;
  var package$examplets = _.examplets || (_.examplets = {});
  var package$lamdasAndAnonymousFunctions = package$examplets.lamdasAndAnonymousFunctions || (package$examplets.lamdasAndAnonymousFunctions = {});
  package$lamdasAndAnonymousFunctions.LambdaTest = LambdaTest;
  suite('bj1', false, function () {
    suite('CardTest', false, function () {
      test('t1', false, function () {
        return (new CardTest()).t1();
      });
      test('t2', false, function () {
        return (new CardTest()).t2();
      });
    });
    suite('DeckTest', false, function () {
      test('t1', false, function () {
        return (new DeckTest()).t1();
      });
    });
    suite('GameTest', false, function () {
      test('t1', false, function () {
        return (new GameTest()).t1();
      });
    });
    suite('HandTest', false, function () {
      test('t1', false, function () {
        return (new HandTest()).t1();
      });
      test('t2', false, function () {
        return (new HandTest()).t2();
      });
    });
  });
  suite('examplets.lamdasAndAnonymousFunctions', false, function () {
    suite('LambdaTest', false, function () {
      test('testAnonymousFunctions', false, function () {
        return (new LambdaTest()).testAnonymousFunctions();
      });
      test('testLambdaFunctions', false, function () {
        return (new LambdaTest()).testLambdaFunctions();
      });
    });
  });
  Kotlin.defineModule('mpp1-js_test', _);
  return _;
}(typeof this['mpp1-js_test'] === 'undefined' ? {} : this['mpp1-js_test'], kotlin, this['mpp1-js'], this['kotlin-test']);
