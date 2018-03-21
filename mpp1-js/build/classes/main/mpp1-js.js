if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'mpp1-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mpp1-js'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'mpp1-js'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'mpp1-js'.");
}
this['mpp1-js'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var ensureNotNull = Kotlin.ensureNotNull;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println;
  var println_0 = Kotlin.kotlin.io.println_s8jyv4$;
  var Math_0 = Math;
  function rng52() {
    var x = Math.random() * 52;
    return numberToInt(Math_0.floor(x));
  }
  function main(args) {
    Main_getInstance().init();
  }
  function Main() {
    Main_instance = this;
    this.g_0 = new Game();
  }
  Main.prototype.deal_0 = function () {
    this.g_0.deal();
    this.renderAll_0();
  };
  Main.prototype.hit_0 = function () {
    this.g_0.hit();
    this.renderAll_0();
  };
  Main.prototype.stay_0 = function () {
    this.g_0.stay();
    this.renderAll_0();
  };
  Main.prototype.init = function () {
    this.deal_0();
  };
  function Main$renderAll$lambda(this$Main) {
    return function ($receiver) {
      this$Main.gameView_0($receiver);
      return Unit;
    };
  }
  Main.prototype.renderAll_0 = function () {
    clear(ensureNotNull(document.body));
    var mainDiv = div(get_create(document), void 0, Main$renderAll$lambda(this));
    ensureNotNull(document.body).appendChild(mainDiv);
  };
  function Main$gameView$lambda$lambda$lambda$lambda(this$Main) {
    return function (it) {
      this$Main.deal_0();
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda$lambda(this$Main) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Deal');
      set_onClickFunction($receiver, Main$gameView$lambda$lambda$lambda$lambda(this$Main));
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda$lambda$lambda_0(this$Main) {
    return function (it) {
      this$Main.hit_0();
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda$lambda_0(this$Main) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Hit');
      set_onClickFunction($receiver, Main$gameView$lambda$lambda$lambda$lambda_0(this$Main));
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda$lambda$lambda_1(this$Main) {
    return function (it) {
      this$Main.stay_0();
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda$lambda_1(this$Main) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Stay');
      set_onClickFunction($receiver, Main$gameView$lambda$lambda$lambda$lambda_1(this$Main));
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda(this$Main) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, Main$gameView$lambda$lambda$lambda(this$Main));
      button($receiver, void 0, void 0, void 0, void 0, Main$gameView$lambda$lambda$lambda_0(this$Main));
      button($receiver, void 0, void 0, void 0, void 0, Main$gameView$lambda$lambda$lambda_1(this$Main));
      return Unit;
    };
  }
  function Main$gameView$lambda$lambda_0(this$Main) {
    return function ($receiver) {
      set_style($receiver, 'display:flex');
      this$Main.handView_0($receiver, this$Main.g_0.ph);
      this$Main.handView_0($receiver, this$Main.g_0.dh);
      return Unit;
    };
  }
  function Main$gameView$lambda(this$Main) {
    return function ($receiver) {
      div_0($receiver, void 0, Main$gameView$lambda$lambda(this$Main));
      div_0($receiver, void 0, Main$gameView$lambda$lambda_0(this$Main));
      return Unit;
    };
  }
  Main.prototype.gameView_0 = function ($receiver) {
    div_0($receiver, void 0, Main$gameView$lambda(this));
  };
  function Main$handView$lambda$lambda(closure$h) {
    return function ($receiver) {
      set_style($receiver, 'font-weight:bold');
      $receiver.unaryPlus_pdl1vz$(closure$h.name + ' Hand');
      return Unit;
    };
  }
  function Main$handView$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      return Unit;
    };
  }
  function Main$handView$lambda$lambda_0(closure$h) {
    return function ($receiver) {
      set_style($receiver, 'font-weight:bold');
      $receiver.unaryPlus_pdl1vz$(closure$h.points.toString() + ' Points');
      return Unit;
    };
  }
  function Main$handView$lambda(closure$h) {
    return function ($receiver) {
      set_style($receiver, 'background:cyan;margin:1rem;padding:1rem;width:10rem;height:10rem');
      div_0($receiver, void 0, Main$handView$lambda$lambda(closure$h));
      var tmp$;
      tmp$ = closure$h.cards.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, void 0, Main$handView$lambda$lambda$lambda(element));
      }
      div_0($receiver, void 0, Main$handView$lambda$lambda_0(closure$h));
      return Unit;
    };
  }
  Main.prototype.handView_0 = function ($receiver, h) {
    div_0($receiver, void 0, Main$handView$lambda(h));
  };
  Main.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Main',
    interfaces: []
  };
  var Main_instance = null;
  function Main_getInstance() {
    if (Main_instance === null) {
      new Main();
    }
    return Main_instance;
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function Card(value, suit) {
    this.value = value;
    this.suit = suit;
    var tmp$, tmp$_0;
    tmp$ = this.value;
    if (!(1 <= tmp$ && tmp$ <= 13)) {
      var message = Card_init$lambda(this)();
      throw IllegalArgumentException_init(message.toString());
    }
    tmp$_0 = this.suit;
    if (!(1 <= tmp$_0 && tmp$_0 <= 4)) {
      var message_0 = Card_init$lambda_0(this)();
      throw IllegalArgumentException_init(message_0.toString());
    }
  }
  Object.defineProperty(Card.prototype, 'suitName', {
    get: function () {
      switch (this.suit) {
        case 1:
          return 'Spades';
        case 2:
          return 'Hearts';
        case 3:
          return 'Clubs';
        case 4:
          return 'Diamonds';
        default:throw IllegalStateException_init();
      }
    }
  });
  Object.defineProperty(Card.prototype, 'valueName', {
    get: function () {
      var tmp$;
      tmp$ = this.value;
      if (tmp$ === 1)
        return 'Ace';
      else if (tmp$ >= 2 && tmp$ <= 10)
        return this.value.toString();
      else
        switch (tmp$) {
          case 11:
            return 'Jack';
          case 12:
            return 'Queen';
          case 13:
            return 'King';
          default:throw IllegalStateException_init();
        }
    }
  });
  Object.defineProperty(Card.prototype, 'name', {
    get: function () {
      return this.valueName + ' of ' + this.suitName;
    }
  });
  Object.defineProperty(Card.prototype, 'points', {
    get: function () {
      var tmp$;
      tmp$ = this.value;
      if (tmp$ >= 1 && tmp$ <= 9)
        return this.value;
      else if (tmp$ >= 10 && tmp$ <= 13)
        return 10;
      else
        throw IllegalStateException_init();
    }
  });
  function Card_init$lambda(this$Card) {
    return function () {
      return 'Bad value ' + this$Card.value;
    };
  }
  function Card_init$lambda_0(this$Card) {
    return function () {
      return 'Bad suit ' + this$Card.suit;
    };
  }
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Deck(shuffle) {
    if (shuffle === void 0)
      shuffle = true;
    this._cards_0 = ArrayList_init();
    for (var s = 1; s <= 4; s++) {
      for (var v = 1; v <= 13; v++) {
        this._cards_0.add_11rb$(new Card(v, s));
      }
    }
    if (shuffle) {
      for (var index = 0; index < 10000; index++) {
        var i1 = rng52();
        var i2 = rng52();
        var c1 = this._cards_0.get_za3lpa$(i1);
        var c2 = this._cards_0.get_za3lpa$(i2);
        this._cards_0.set_wxm5ur$(i1, c2);
        this._cards_0.set_wxm5ur$(i2, c1);
      }
    }
  }
  Object.defineProperty(Deck.prototype, 'size', {
    get: function () {
      return this._cards_0.size;
    }
  });
  Deck.prototype.take = function () {
    return this._cards_0.removeAt_za3lpa$(0);
  };
  Object.defineProperty(Deck.prototype, 'cards', {
    get: function () {
      return this._cards_0;
    }
  });
  Deck.prototype.isEmpty = function () {
    return this._cards_0.isEmpty();
  };
  Deck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deck',
    interfaces: []
  };
  function Game(shuffle) {
    if (shuffle === void 0)
      shuffle = true;
    this.shuffle_0 = shuffle;
    this.deck_8be2vx$ = new Deck(this.shuffle_0);
    this.ph = new Hand('Player');
    this.dh = new Hand('Dealer');
    this.deal();
  }
  Game.prototype.hitHand_0 = function (h) {
    if (this.deck_8be2vx$.isEmpty())
      this.deck_8be2vx$ = new Deck(this.shuffle_0);
    h.add_uhqrzm$(this.deck_8be2vx$.take());
  };
  Game.prototype.deal = function () {
    this.ph.clear_8be2vx$();
    this.dh.clear_8be2vx$();
    this.hitHand_0(this.ph);
    this.hitHand_0(this.dh);
    this.hitHand_0(this.ph);
    this.hitHand_0(this.dh);
  };
  Game.prototype.hit = function () {
    this.hitHand_0(this.ph);
  };
  Game.prototype.stay = function () {
    while (this.dh.points < 17)
      this.hitHand_0(this.dh);
  };
  Game.prototype.dump = function () {
    this.ph.dump();
    this.dh.dump();
    println();
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function Hand(name) {
    this.name = name;
    this._cards_0 = ArrayList_init();
  }
  Object.defineProperty(Hand.prototype, 'cards', {
    get: function () {
      return this._cards_0;
    }
  });
  Hand.prototype.add_uhqrzm$ = function (card) {
    this._cards_0.add_11rb$(card);
  };
  Hand.prototype.clear_8be2vx$ = function () {
    this._cards_0.clear();
  };
  Hand.prototype.dump = function () {
    println_0(this.name + ' Hand');
    var tmp$;
    tmp$ = this.cards.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println_0('  ' + element.name);
    }
    println_0('  ' + this.points + ' Points');
  };
  Object.defineProperty(Hand.prototype, 'size', {
    get: function () {
      return this._cards_0.size;
    }
  });
  Object.defineProperty(Hand.prototype, 'points1', {
    get: function () {
      var tmp$;
      var t = 0;
      tmp$ = this._cards_0.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        t = t + c.points | 0;
      }
      return t;
    }
  });
  Object.defineProperty(Hand.prototype, 'points2', {
    get: function () {
      var t = {v: 0};
      var tmp$;
      tmp$ = this._cards_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        t.v = t.v + element.points | 0;
      }
      return t.v;
    }
  });
  Object.defineProperty(Hand.prototype, 'points', {
    get: function () {
      var tmp$;
      var sum = 0;
      tmp$ = this._cards_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum = sum + element.points | 0;
      }
      return sum;
    }
  });
  Hand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hand',
    interfaces: []
  };
  function Foo() {
    Foo_instance = this;
  }
  Foo.prototype.f1 = function () {
    return 'Foo Burger 2';
  };
  Foo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Foo',
    interfaces: []
  };
  var Foo_instance = null;
  function Foo_getInstance() {
    if (Foo_instance === null) {
      new Foo();
    }
    return Foo_instance;
  }
  var package$bj1 = _.bj1 || (_.bj1 = {});
  package$bj1.rng52 = rng52;
  var package$mpp1 = _.mpp1 || (_.mpp1 = {});
  package$mpp1.main_kand9s$ = main;
  Object.defineProperty(package$mpp1, 'Main', {
    get: Main_getInstance
  });
  package$bj1.Card = Card;
  package$bj1.Deck = Deck;
  package$bj1.Game = Game;
  package$bj1.Hand = Hand;
  Object.defineProperty(package$mpp1, 'Foo', {
    get: Foo_getInstance
  });
  main([]);
  Kotlin.defineModule('mpp1-js', _);
  return _;
}(typeof this['mpp1-js'] === 'undefined' ? {} : this['mpp1-js'], kotlin, this['kotlinx-html-js']);
