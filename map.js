/*
필드는 (x,y)= (0,0)부터 (x,y)= (9,9)까지 100개 존재.
대각선으로 채워나가는 방식으로 코드를 작성했습니다.
전투 description은 진님이 주신 대로 "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다." 로 통일했는데, 몬스터가 확정되면 종류별로 멘트를 다르게 해도 좋을 것 같습니다.
(9,9) 필드는 보스필드(몬스터 종류: 5)로 구상하면 좋겠다고 생각하여 유일하게 멘트를 "매우 불길한 예감이 든다."로 해봤습니다.
아이템 획득 description은 진님이 주신 대로 "행운이 찾아올 것 같다." 로 통일했습니다.
아무 것도 없는 description은 진님이 주신 대로 "아무것도 없다." 로 통일했습니다.
이동 가능 방향은 진님이 주신 대로 [북, 동, 남, 서] 입니다.
*/

{
    "id": 1,
    "fields": [
      [0, 0, "평원의 시작점이다.", [0, 1, 1, 0], []],
      [
        1,
        0,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [0, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        0,
        1,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 0],
        [
            { "type": "item", "item": 1, "percent": 70 },
            { "type": "battle", "monster": 1, "percent": 30 }
        ]
      ],
      [
        2,
        0,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [0, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [1, 1, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        0,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 0],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        3,
        0,
        "행운이 찾아올 것 같다.",
        [0, 1, 1, 1],
        [
            { "type": "item", "item": 1, "percent": 70 },
            { "type": "battle", "monster": 1, "percent": 30 }
        ]
      ],
      [
        2,
        1,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [1, 2, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        0,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 0],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [4, 0, "아무것도 없다.", [0, 1, 1, 1], [], []],
      [
        3,
        1,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 1, "percent": 70 },
            { "type": "battle", "monster": 1, "percent": 30 }
        ]
      ],
      [2, 2, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        1,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        0,
        4,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 0],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [5, 0, "아무것도 없다.", [0, 1, 1, 1], [], []],
      [
        4,
        1,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        3,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        2,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [1, 4, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        0,
        5,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 0],
        [
            { "type": "item", "item": 2, "percent": 80 },
            { "type": "battle", "monster": 2, "percent": 20 }
        ]
      ],
      [
        6,
        0,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [0, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [5, 1, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        4,
        2,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 1, "percent": 70 },
            { "type": "battle", "monster": 1, "percent": 30 }
        ]
      ],
      [
        3,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        2,
        4,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 1, "percent": 70 },
            { "type": "battle", "monster": 1, "percent": 30 }
        ]
      ],
      [
        1,
        5,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [0, 6, "아무것도 없다.", [1, 1, 1, 0], [], []],
      [
        7,
        0,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [0, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [6, 1, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        5,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        4,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        3,
        4,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 2, "percent": 80 },
            { "type": "battle", "monster": 2, "percent": 20 }
        ]
      ],
      [2, 5, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        1,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [
        0,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 0],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [8, 0, "아무것도 없다.", [0, 1, 1, 1], [], []],
      [
        7,
        1,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 1, "percent": 70 },
            { "type": "item", "item": 1, "percent": 30 }
        ]
      ],
      [6, 2, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        5,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        4,
        4,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        3,
        5,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [2, 6, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [1, 7, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        0,
        8,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 0],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        9,
        0,
        "행운이 찾아올 것 같다.",
        [0, 0, 1, 1],
        [
            { "type": "item", "item": 2, "percent": 80 },
            { "type": "battle", "monster": 2, "percent": 20 }
        ]
      ],
      [8, 1, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        7,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        6,
        3,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 0, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        5,
        4,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 3, "percent": 90 },
            { "type": "battle", "monster": 3, "percent": 10 }
        ]
      ],
      [4, 5, "아무것도 없다.", [1, 0, 0, 1], [], []],
      [
        3,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        2,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 0, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [1, 8, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [0, 9, "아무것도 없다.", [1, 1, 0, 0], [], []],
      [
        9,
        1,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [
        8,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [7, 3, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        6,
        4,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [5, 5, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        4,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [3, 7, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        2,
        8,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 3, "percent": 90 },
            { "type": "battle", "monster": 3, "percent": 10 }
        ]
      ],
      [
        1,
        9,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 0, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        9,
        2,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [8, 3, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [7, 4, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        6,
        5,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        5,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        4,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [3, 8, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        2,
        9,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 0, 1],
        [
            { "type": "battle", "monster": 2, "percent": 80 },
            { "type": "item", "item": 2, "percent": 20 }
        ]
      ],
      [9, 3, "아무것도 없다.", [1, 0, 1, 1], [], []],
      [
        8,
        4,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        7,
        5,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 3, "percent": 90 },
            { "type": "battle", "monster": 3, "percent": 10 }
        ]
      ],
      [6, 6, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        5,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        4,
        8,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [3, 9, "아무것도 없다.", [1, 1, 0, 1], [], []],
      [
        9,
        4,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        8,
        5,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        7,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 3, "percent": 90 },
            { "type": "item", "item": 3, "percent": 10 }
        ]
      ],
      [
        6,
        7,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 4, "percent": 60 },
            { "type": "battle", "monster": 4, "percent": 40 }
        ]
      ],
      [5, 8, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        4,
        9,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 0, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        9,
        5,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        8,
        6,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 4, "percent": 60 },
            { "type": "battle", "monster": 4, "percent": 40 }
        ]
      ],
      [7, 7, "아무것도 없다.", [1, 1, 1, 1], [], []],
      [
        6,
        8,
        "행운이 찾아올 것 같다.",
        [1, 1, 1, 1],
        [
            { "type": "item", "item": 4, "percent": 60 },
            { "type": "battle", "monster": 4, "percent": 40 }
        ]
      ],
      [5, 9, "아무것도 없다.", [1, 1, 0, 1], [], []],
      [
        9,
        6,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        8,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        7,
        8,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [6, 9, "아무것도 없다.", [1, 1, 0, 1], [], []],
      [
        9,
        7,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        8,
        8,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        7,
        9,
        "행운이 찾아올 것 같다.",
        [1, 1, 0, 1],
        [
            { "type": "item", "item": 4, "percent": 60 },
            { "type": "battle", "monster": 4, "percent": 40 }
        ]
      ],
      [
        9,
        8,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 0, 1, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],
      [
        8,
        9,
        "왠지 몬스터가 나올 것 같은 그런 스산한 분위기가 느껴진다.",
        [1, 1, 0, 1],
        [
            { "type": "battle", "monster": 4, "percent": 60 },
            { "type": "item", "item": 4, "percent": 40 }
        ]
      ],

      //보스필드

      [
        9,
        9,
        "매우 불길한 예감이 든다.",
        [1, 0, 0, 1],
        [
            { "type": "battle", "monster": 5, "percent": 99 },
            { "type": "item", "item": 5, "percent": 1 }
        ]
      ]
    ]
  }