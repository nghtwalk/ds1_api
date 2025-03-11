const bosses = [
    {
      "id": 1,
      "name": "Asylum Demon",
      "img": "https://pm1.aminoapps.com/6773/8b895f06d1e878bb599676179636bdfbb866fb45v2_hq.jpg",
      "location": "Undead Asylum",
      "drops": [
        {
          "quantity": 2000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 2,
      "name": "Taurus Demon",
      "img": "https://images.cults3d.com/sW-3R1YgGxZtN3AIiEJ5AWEROG0=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/14854341/illustration-file/6e8ed70f-3664-487b-a0a5-2312469e0e9c/Untitled-1.jpg",
      "location": "Undead Burg",
      "drops": [
        {
          "quantity": 3000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 3,
      "name": "Bell Gargoyles",
      "img": "https://darksouls.wdfiles.com/local--files/bosses/belfry-gargoyles-large.jpg",
      "location": "Undead Parish, Anor Londo",
      "drops": [
        {
          "quantity": 10000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Twin Humanities",
          "unique": false
        }
      ]
    },
    {
      "id": 4,
      "name": "Capra Demon",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/2/20/CapraDemon.jpg/revision/latest/scale-to-width-down/1000?cb=20160517145311",
      "location": "Undead Burg",
      "drops": [
        {
          "quantity": 6000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 5,
      "name": "Ceaseless Discharge",
      "img": "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Ceaseless_Discharge_Extra.jpg",
      "location": "Demon Ruins",
      "drops": [
        {
          "quantity": 20000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 6,
      "name": "Centipede Demon",
      "img": "https://i.ytimg.com/vi/T3_V9NhUwPM/maxresdefault.jpg",
      "location": "Demon Ruins",
      "drops": [
        {
          "quantity": 40000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 7,
      "name": "Chaos Witch Quelaag",
      "img": "https://darksouls.wiki.fextralife.com/file/Dark-Souls/quelaag_high_detail.jpg?v=1529873129737",
      "location": "Quelaag's Domain",
      "drops": [
        {
          "quantity": 20000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Twin Humanities",
          "unique": false
        }
      ]
    },
    {
      "id": 8,
      "name": "Crossbreed Priscilla",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/1/17/Priscilla02.jpg/revision/latest?cb=20130215081524",
      "location": "Painted World of Ariamis",
      "drops": [
        {
          "quantity": 30000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Twin Humanities",
          "unique": false
        }
      ]
    },
    {
      "id": 9,
      "name": "Dark Sun Gwyndolin",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/f/f0/DS1R_Dark_Sun_Gwyndolin_%28half_body%29.webp/revision/latest/scale-to-width-down/1000?cb=20231115220227",
      "location": "Anor Londo",
      "drops": [
        {
          "quantity": 40000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 10,
      "name": "Demon Firesage",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/a/aa/Demon_Firesage.jpg/revision/latest?cb=20160608105549",
      "location": "Demon Ruins",
      "drops": [
        {
          "quantity": 20000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 11,
      "name": "Four Kings",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/6/6f/Four_kings01.jpg/revision/latest?cb=20150826155119&path-prefix=pt-br",
      "location": "Abyss",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 4,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 12,
      "name": "Gaping Dragon",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/dragons/images/a/ac/OtTPLEC.jpg/revision/latest?cb=20170906065438",
      "location": "Depths",
      "drops": [
        {
          "quantity": 25000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Twin Humanities",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 13,
      "name": "Great Grey Wolf Sif",
      "img": "https://i1.sndcdn.com/artworks-lfmC99gaFgKbQAZ5-rieaRw-t500x500.jpg",
      "location": "Darkroot Garden",
      "drops": [
        {
          "quantity": 40000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 14,
      "name": "Gwyn, Lord of Cinder",
      "img": "https://i0.wp.com/mhe.vcj.mybluehost.me/wp-content/uploads/2024/04/image-8.png?resize=750%2C422&ssl=1",
      "location": "Kiln of the First Flame",
      "drops": [
        {
          "quantity": 70000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 15,
      "name": "Iron Golem",
      "img": "https://i.ytimg.com/vi/AIIe84WUaAQ/maxresdefault.jpg",
      "location": "Sen's Fortress",
      "drops": [
        {
          "quantity": 40000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 16,
      "name": "Moonlight Butterfly",
      "img": "https://images.pushsquare.com/ed020c8483663/dark-souls-remastered-moonlight-butterfly-boss-walkthrough-guide-1.large.jpg",
      "location": "Darkroot Garden",
      "drops": [
        {
          "quantity": 10000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 17,
      "name": "Gravelord Nito",
      "img": "https://www.pockettactics.com/wp-content/sites/pockettactics/2023/03/Dark-Souls-Nito-Header-550x309.jpg",
      "location": "Tomb of the Giants",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 18,
      "name": "Dragon Slayer Ornstein",
      "img": "https://www.pockettactics.com/wp-content/sites/pockettactics/2023/03/dark-souls-Ornstein-feature-image.jpg",
      "location": "Anor Londo",
      "drops": [
        {
          "quantity": 50000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 19,
      "name": "Executioner Smough",
      "img": "https://images.weserv.nl/?url=static.wikia.nocookie.net/darksouls/images/5/5b/Executioner_Smough.png/revision/latest?cb=20130813220705",
      "location": "Anor Londo",
      "drops": [
        {
          "quantity": 50000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 20,
      "name": "Pinwheel",
      "img": "https://i.ytimg.com/vi/y8vaqI70i38/maxresdefault.jpg",
      "location": "Catacumbas",
      "drops": [
        {
          "quantity": 15000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 21,
      "name": "Seath the Scaleless",
      "img": "https://darksouls.wdfiles.com/local--files/bosses/seath-the-scaleless-large.jpg",
      "location": "The Duke's Archives, Crystal Cave",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 22,
      "name": "Stray Demon",
      "img": "https://darksouls.wdfiles.com/local--files/bosses/stray-demon-large.jpg",
      "location": "Undead Asylum",
      "drops": [
        {
          "quantity": 20000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Humanity",
          "unique": false
        },
        {
          "quantity": 1,
          "drop": "Homeward Bone",
          "unique": false
        }
      ]
    },
    {
      "id": 23,
      "name": "Knight Artorias",
      "img": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/dark-souls-artorias.jpg",
      "location": "Oolacile Township",
      "drops": [
        {
          "quantity": 50000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 24,
      "name": "Manus, Father of the Abyss",
      "img": "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Dark-Souls-Manus-Guide.jpg",
      "location": "Chasm of the Abyss",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        },
        {
          "quantity": 10,
          "drop": "Humanity",
          "unique": false
        }
      ]
    },
    {
      "id": 25,
      "name": "Bed of Chaos",
      "img": "https://darksouls.wiki.fextralife.com/file/Dark-Souls/bed_of_chaos_close_up.jpg?v=1528746195863",
      "location": "Lost Izalith",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 26,
      "name": "Sanctuary Guardian",
      "img": "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0041_Sanctuary%20Guardian.jpg",
      "location": "Sanctuary Garden",
      "drops": [
        {
          "quantity": 30000,
          "drop": "Souls",
          "unique": false
        }
      ]
    },
    {
      "id": 27,
      "name": "Black Dragon Kalameet",
      "img": "https://pm1.aminoapps.com/6961/cd4313dee63c10393790d1a2d74e497893f3c106r1-600-400v2_uhq.jpg",
      "location": "Royal Wood",
      "drops": [
        {
          "quantity": 60000,
          "drop": "Souls",
          "unique": false
        }
      ]
    }
  ];
  
  export default bosses;