const qAnime = "Que anime é esse ?";
const qFilme = "Que filme é esse ?";

const allQuestions = {
    q1: {
        question: qFilme,
        img: "Images/demonSlayer.png",
        answer: ["DEMON SLAYER", "KIMETSU NO YAIBA"]
    }
    ,
    q2: {
        question: qFilme,
        img: "Images/society.jpg",
        answer: ["SNOW SOCIETY", "A SOCIEDADE DA NEVE"]
    }
    ,
    q3: {
        question: "De que país é essa bandeira ?",
        img: "Images/guatemalaa.jpg",
        answer: "GUATEMALA"
    }
    ,
    q4: {
        question: "De que país é essa bandeira ?",
        img: "Images/guiana_francesa.jpg",
        answer: ["GUIANA FRANCESA", "FRENCH GUIANA"]
    }
    ,
    q5: {
        question: qFilme,
        img: "Images/taxi driver.webp",
        answer: ["TAXI DRIVER"]
    }
    ,
    q6: {
        question: "De quem é esse álbum ?",
        img: "Images/TameImpala.jpeg",
        answer: ["TAME IMPALA"]
    }
    ,
    q7: {
        question: qFilme,
        img: "Images/1917.webp",
        answer: ["1917"]
    }
    ,
    q8: {
        question: qFilme,
        img: "Images/aQuietPlace.webp",
        answer: ["A QUIET PLACE", "UM LUGAR SILENCIOSO"]
    }
    ,
    q9: {
        question: qFilme,
        img: "Images/arrival.jpg",
        answer: ["ARRIVAL", "A CHEGADA"]
    }
    ,
    q10: {
        question: qFilme,
        img: "Images/babyDriver.jpg",
        answer: ["BABY DRIVER", "EM RITMO DE FUGA"]
    }
    ,
    q11: {
        question: qFilme,
        img: "Images/coraline.webp",
        answer: ["CORALINE"]
    }
    ,
    q12: {
        question: qFilme,
        img: "Images/drive.jpg",
        answer: ["DRIVE"]
    }
    ,
    q13: {
        question: qFilme,
        img: "Images/dune.webp",
        answer: ["DUNE", "DUNA"]
    }
    ,
    q14: {
        question: qFilme,
        img: "Images/eliteSquad.jpg",
        answer: ["ELITE SQUAD", "TROPA DE ELITE"]
    }
    ,
    q15: {
        question: qFilme,
        img: "Images/encantation.jfif",
        answer: ["ENCANTATION", "MARCAS DA MALDIÇÃO"]
    }
    ,
    q16: {
        question: qFilme,
        img: "Images/fantasticMrFox.jpg",
        answer: ["FANTASTIC MR FOX", "O FANTÁSTICO SR RAPOSO", "O FANTASTICO SR RAPOSO", "FANTASTIC MR. FOX", "O FANTÁSTICO SR. RAPOSO", "O FANTASTICO SR. RAPOSO"]
    }
    ,
    q17: {
        question: qFilme,
        img: "Images/fightclub.jpg",
        answer: ["FIGHT CLUB", "CLUBE DA LUTA"]
    }
    ,
    q18: {
        question: qFilme,
        img: "Images/greenBook.webp",
        answer: ["GREEN BOOK"]
    }
    ,
    q19: {
        question: qFilme,
        img: "Images/inglouriousBasterds.jpg",
        answer: ["INGLORIOUS BASTERDS", "BASTARDOS INGLÓRIOS"]
    }
    ,
    q20: {
        question: qFilme,
        img: "Images/joker.jpg",
        answer: ["JOKER", "CORINGA", "JOKER 2019"]
    }
    ,
    q21: {
        question: qFilme,
        img: "Images/knivesOut.webp",
        answer: ["KNIVES OUT", "ENTRE FACAS E SEGREDOS"]
    }
    ,
    q22: {
        question: qFilme,
        img: "Images/nobody.jpg",
        answer: ["NOBODY", "ANÔNIMO"]
    }
    ,
    q23: {
        question: qFilme,
        img: "Images/nope.jpg",
        answer: ["NOPE", "NÃO! NÃO OLHE!", "NÃO NÃO OLHE", "NÃO OLHE", "NOPE!"]
    }
    ,
    q24: {
        question: qFilme,
        img: "Images/oppenheimer.webp",
        answer: ["OPPENHEIMER"]
    }
    ,
    q25: {
        question: qFilme,
        img: "Images/pearl.jpeg",
        answer: ["PEARL"]
    }
    ,
    q26: {
        question: qFilme,
        img: "../Images/knivesOut.webp",
        answer: ["KNIVES OUT"]
    }
    ,
    q27: {
        question: qFilme,
        img: "Images/prey.webp",
        answer: ["PREY", "O PREDADOR"]
    }
    ,
    q28: {
        question: qFilme,
        img: "Images/pulpFiction.webp",
        answer: ["PULP FICTION"]
    }
    ,
    q29: {
        question: qFilme,
        img: "Images/pussInBoots.png",
        answer: ["GATO DE BOTAS 2", "PUSS IN BOOTS 2", "GATO DE BOTAS 2 O ÚLTIMO PEDIDO", "PUSS IN BOOTS THE LAST WISH", "GATO DE BOTAS O ÚLTIMO PEDIDO"]
    }
    ,
    q30: {
        question: qFilme,
        img: "Images/scottPilgrim.webp",
        answer: ["SCOTT PILGRIM", "SCOTT PILGRIM CONTRA O MUNDO", "SCOTT PILGRIM VS THE WORLD", "SCOTT PILGRIM VS. THE WORLD"]
    }
    ,
    q31: {
        question: qFilme,
        img: "Images/spiderManAcrossTheSpiderVerse.jpg",
        answer: ["SPIDER MAN ACROSS THE SPIDERVERSE", "HOMEM ARANHA ATRAVÉS DO ARANHAVERSO", "HOMEM ARANHA ATRAVES DO ARANHAVERSO", "SPIDER MAN ACROSS THE SPIDER VERSE"]
    }
    ,
    q32: {
        question: qFilme,
        img: "Images/theCreator.jpg",
        answer: ["THE CREATOR", "RESISTÊNCIA"]
    }
    ,
    q33: {
        question: qFilme,
        img: "Images/theGrandHotelBudapest.webp",
        answer: ["THE GRAND HOTEL BUDAPEST", "O GRANDE HOTEL BUDAPESTE"]
    }
    ,
    q34: {
        question: qFilme,
        img: "Images/theMenu.jpg",
        answer: ["THE MENU", "O MENU", "MENU"]
    }
    ,
    q35: {
        question: qFilme,
        img: "Images/thePlatform.webp",
        answer: ["THE PLATFORM", "O POÇO", "POÇO"]
    }
    ,
    q36: {
        question: qFilme,
        img: "Images/theWhale.jpg",
        answer: ["THE WHALE", "A BALEIA", "BALEIA"]
    }
    ,
    q37: {
        question: qFilme,
        img: "Images/up.jpg",
        answer: ["UP", "UP ALTAS AVENTURAS"]
    }
    ,
    q38: {
        question: qFilme,
        img: "Images/theWitch.webp",
        answer: ["THE WITCH", "A BRUXA"]
    }
    ,
    q39: {
        question: qFilme,
        img: "Images/us.webp",
        answer: ["US", "NÓS", "NOS"]
    }
    ,
    q40: {
        question: qFilme,
        img: "Images/x.webp",
        answer: ["X", "X A MARCA DA MORTE"]
    }
    ,
    q41: {
        question: qAnime,
        img: "Images/86.jpg",
        answer: ["86"]
    }
    ,
    q42: {
        question: qAnime,
        img: "Images/angelBeats.webp",
        answer: ["ANGEL BEATS"]
    }
    ,
    q43: {
        question: qAnime,
        img: "Images/angelsOfDeath.jpg",
        answer: ["ANGELS OF DEATH"]
    }
    ,
    q44: {
        question: qAnime,
        img: "Images/attackOnTitan.jpg",
        answer: ["ATTACK ON TITAN", "SHINGEKI NO KYOJIN"]
    }
    ,
    q45: {
        question: qAnime,
        img: "Images/beyondTheBoundary.webp",
        answer: ["BEYOND THE BOUNDARY"]
    }
    ,
    q46: {
        question: qAnime,
        img: "Images/bocchiTheRock.jpg",
        answer: ["BOCCHI THE ROCK"]
    }
    ,
    q47: {
        question: qAnime,
        img: "Images/bungoStrayDogs.png",
        answer: ["BUNGO STRAY DOGS"]
    }
    ,
    q48: {
        question: qAnime,
        img: "../Images/callOfTheNight.jpg",
        answer: ["CALL OF THE NIGHT"]
    }
    ,
    q49: {
        question: qAnime,
        img: "Images/chainsawMan.jpg",
        answer: ["CHAINSAWMAN", "CHAINSAW MAN"]
    }
    ,
    q50: {
        question: qAnime,
        img: "Images/charlotte.png",
        answer: ["CHARLOTTE"]
    }
    ,
    q51: {
        question: qAnime,
        img: "Images/classroomOfTheElite.webp",
        answer: ["CLASSROOM OF THE ELITE", "CLASSROOM OF ELITE"]
    }
    ,
    q52: {
        question: qAnime,
        img: "Images/cowboybepop.jpg",
        answer: ["COWBOY BEPOP"]
    }
    ,
    q53: {
        question: qAnime,
        img: "Images/cyberpunkEdgerunners.jpg",
        answer: ["CYBERPUNK EDGERUNNERS"]
    }
    ,
    q54: {
        question: qAnime,
        img: "Images/deathNote.jfif",
        answer: ["DEATH NOTE"]
    }
    ,
    q55: {
        question: qAnime,
        img: "Images/devilManCryBaby.jpg",
        answer: ["DEVIL MAN CRY BABY", "DEVILMAN CRY BABY", "DEVILMAN CRYBABY", "DEVIL MAN CRYBABY"]
    }
    ,
    q56: {
        question: qAnime,
        img: "Images/erased.jpg",
        answer: ["ERASED"]
    }
    ,
    q57: {
        question: qAnime,
        img: "Images/evangelion.png",
        answer: ["EVANGELION"]
    }
    ,
    q58: {
        question: qAnime,
        img: "Images/fireForce.png",
        answer: ["FIRE FORCE"]
    }
    ,
    q59: {
        question: qAnime,
        img: "Images/fullMetalAlchemist.png",
        answer: ["FULL METAL ALCHEMIST", "FULLMETAL ALCHEMIST"]
    }
    ,
    q60: {
        question: qAnime,
        img: "Images/girlsLastTour.png",
        answer: ["GIRLS LAST TOUR"]
    }
    ,
    q61: {
        question: qAnime,
        img: "Images/greatPretender.webp",
        answer: ["GREAT PRETENDER"]
    }
    ,
    q62: {
        question: qAnime,
        img: "Images/howlsMovingCastle.jpg",
        answer: ["HOWLS MOVING CASTLE", "HOWL'S MOVING CASTLE"]
    }
    ,
    q63: {
        question: qAnime,
        img: "Images/hunterxhunter.jpg",
        answer: ["HXH", "HUNTERXHUNTER", "HUNTER X HUNTER"]
    }
    ,
    q64: {
        question: qAnime,
        img: "Images/iWantToEatYourPancreas.jpg",
        answer: ["I WANT TO EAT YOUR PANCREAS"]
    }
    ,
    q65: {
        question: qAnime,
        img: "Images/jujutsuKaisen.jpg",
        answer: ["JUJUTSU KAISEN"]
    }
    ,
    q66: {
        question: qAnime,
        img: "Images/kakegurui.png",
        answer: ["KAKEGURUI"]
    }
    ,
    q67: {
        question: qAnime,
        img: "../Images/killLaKill.webp",
        answer: ["KILL LA KILL"]
    }
    ,
    q68: {
        question: qAnime,
        img: "Images/kinosJourney.jpg",
        answer: ["KINOS JOURNEY", "KINO'S JOURNEY"]
    }
    ,
    q69: {
        question: qAnime,
        img: "Images/littleWitchAcademia.png",
        answer: ["LITTLE WITCH ACADEMIA"]
    }
    ,
    q70: {
        question: qAnime,
        img: "Images/lycorisRecoil.webp",
        answer: ["LYCORIS RECOIL"]
    }
    ,
    q71: {
        question: qAnime,
        img: "Images/madeInAbyss.png",
        answer: ["MADE IN ABYSS"]
    }
    ,
    q72: {
        question: qAnime,
        img: "Images/madokaMagica.jfif",
        answer: ["PUELLA MAGI MADOKA MAGICA", "MADOKA MAGICA"]
    }
    ,
    q73: {
        question: qAnime,
        img: "Images/magi.jpe",
        answer: ["MAGI: THE LABYRINTH OF MAGIC", "MAGI", "MAGI THE LABYRINTH OF MAGIC"]
    }
    ,
    q74: {
        question: qAnime,
        img: "Images/monster.jpg",
        answer: ["MONSTER"]
    }
    ,
    q75: {
        question: qAnime,
        img: "Images/mushokuTensei.png",
        answer: ["MUSHOKU TENSEI"]
    }
    ,
    q76: {
        question: qAnime,
        img: "Images/noGameNoLife.png",
        answer: ["NO GAME NO LIFE"]
    }
    ,
    q77: {
        question: qAnime,
        img: "Images/oddTaxi.jpg",
        answer: ["ODD TAXI"]
    }
    ,
    q78: {
        question: qAnime,
        img: "Images/onePunchMan.jpg",
        answer: ["ONE PUNCH MAN"]
    }
    ,
    q79: {
        question: qAnime,
        img: "Images/princessMononoke.webp",
        answer: ["PRINCESS MONONOKE", "PRINCESA MONONOKE"]
    }
    ,
    q80: {
        question: qAnime,
        img: "Images/promisedNeverland.jpg",
        answer: ["PROMISED NEVERLAND"]
    }
    ,
    q81: {
        question: qAnime,
        img: "Images/reZero.png",
        answer: ["RE: ZERO - STARTING LIFE IN ANOTHER WORLD", "RE:ZERO", "RE ZERO", "REZERO"]
    }
    ,
    q82: {
        question: qAnime,
        img: "Images/silentVoice.webp",
        answer: ["SILENT VOICE", "A VOZ DO SILÊNCIO", "KOE NO KATACHI"]
    }
    ,
    q83: {
        question: qAnime,
        img: "Images/spyFamily.jpg",
        answer: ["SPY X FAMILY", "SPY FAMILY"]
    }
    ,
    q84: {
        question: qAnime,
        img: "Images/steinsGate.webp",
        answer: ["STEINS GATE"]
    }
    ,
    q85: {
        question: qAnime,
        img: "Images/summerTimeRendering.png",
        answer: ["SUMMER TIME RENDERING"]
    }
    ,
    q86: {
        question: qAnime,
        img: "Images/swordArtOnline.jpg",
        answer: ["SWORD ART ONLINE", "SAO"]
    }
    ,
    q87: {
        question: qAnime,
        img: "Images/taktOpDestiny.jpg",
        answer: ["TAKT OP. DESTINY", "TAKT OP DESTINY"]
    }
    ,
    q88: {
        question: qAnime,
        img: "Images/terrorInResonance.jpg",
        answer: ["TERROR IN RESONANCE"]
    }
    ,
    q89: {
        question: qAnime,
        img: "Images/tokyoRevengers.jpg",
        answer: ["TOKYO REVENGERS"]
    }
    ,
    q90: {
        question: qAnime,
        img: "Images/towerOfGod.jpg",
        answer: ["TOWER OF GOD"]
    }
    ,
    q91: {
        question: qAnime,
        img: "Images/towerOfGod1.jpg",
        answer: ["TOWER OF GOD"]
    }
    ,
    q92: {
        question: qAnime,
        img: "Images/toYourEternity.jpg",
        answer: ["TO YOUR ETERNITY"]
    }
    ,
    q93: {
        question: qAnime,
        img: "Images/vinlandSaga.jpg",
        answer: ['VINLAND SAGA']
    }
    ,
    q94: {
        question: qAnime,
        img: "Images/violetEvergarden.png",
        answer: ["VIOLET EVERGARDEN"]
    }
    ,
    q95: {
        question: qAnime,
        img: "Images/wonderEggPriority.png",
        answer: ["WONDER EGG PRIORITY"]
    }
    ,
    q96: {
        question: qAnime,
        img: "Images/wonderEggPriority1.jpg",
        answer: ["WONDER EGG PRIORITY"]
    }
    ,
    q97: {
        question: qAnime,
        img: "Images/wonderEggPriority2.webp",
        answer: "WONDER EGG PRIORITY"
    }
    ,
    q98: {
        question: qAnime,
        img: "Images/x.webp",
        answer: ["X", "X A MARCA DA MORTE"]
    }
    ,
    q99: {
        question: qAnime,
        img: "Images/yourLieInApril.jpg",
        answer: ["YOUR LIE IN APRIL", "SHIGATSU WA KIMI NO USO"]
    }
    ,
    q100: {
        question: qAnime,
        img: "Images/yourLieInApril1.jpg",
        answer: ["YOUR LIE IN APRIL", "SHIGATSU WA KIMI NO USO"]
    }
    ,
    q101: {
        question: qFilme,
        img: "Images/x.webp",
        answer: ["X"]
    }









}

export { allQuestions };


