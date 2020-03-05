import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import ChordCanvas from "./components/ChordCanvas";
import CommentForm from "./components/CommentForm";

import "../assets/stylesheets/application.scss";

const matrix = [
  [
    351,
    249,
    481,
    1593,
    382,
    411,
    424,
    246,
    0,
    1580,
    287,
    68,
    35,
    93,
    692,
    92,
    243,
    472,
    112,
    60,
    193,
    232,
    928,
    1311,
    66,
    211,
    206,
    296,
    760,
    5,
    475,
    1128,
    359,
    17,
    366,
    304,
    1411,
    259
  ],
  [
    1313,
    116,
    201,
    90,
    363,
    442,
    370,
    1922,
    52,
    274,
    276,
    1758,
    186,
    337,
    172,
    1455,
    1224,
    438,
    150,
    397,
    1782,
    359,
    587,
    146,
    445,
    322,
    339,
    289,
    300,
    748,
    1548,
    254,
    122,
    148,
    301,
    226,
    93,
    188
  ],
  [
    1601,
    152,
    1842,
    1440,
    1314,
    370,
    397,
    548,
    535,
    314,
    524,
    1734,
    423,
    1700,
    472,
    433,
    255,
    464,
    397,
    430,
    1250,
    376,
    310,
    359,
    302,
    341,
    119,
    82,
    597,
    1137,
    484,
    0,
    1557,
    82,
    675,
    41,
    1412,
    208
  ],
  [
    366,
    958,
    52,
    102,
    284,
    235,
    10,
    239,
    1273,
    399,
    281,
    283,
    424,
    288,
    941,
    189,
    397,
    988,
    128,
    438,
    342,
    1191,
    360,
    109,
    223,
    459,
    203,
    226,
    111,
    1970,
    1294,
    57,
    1,
    52,
    809,
    452,
    88,
    347
  ],
  [
    1187,
    1559,
    47,
    462,
    1780,
    89,
    697,
    463,
    1531,
    145,
    1430,
    1708,
    414,
    200,
    130,
    264,
    1733,
    457,
    884,
    354,
    227,
    290,
    247,
    396,
    481,
    1137,
    30,
    320,
    5,
    149,
    377,
    351,
    78,
    499,
    260,
    373,
    318,
    301
  ],
  [
    1381,
    249,
    156,
    120,
    85,
    255,
    64,
    388,
    1859,
    89,
    314,
    9,
    1146,
    472,
    377,
    301,
    49,
    1726,
    361,
    420,
    337,
    380,
    672,
    233,
    54,
    796,
    368,
    63,
    283,
    673,
    973,
    80,
    40,
    427,
    414,
    236,
    89,
    451
  ],
  [
    27,
    175,
    73,
    249,
    1702,
    354,
    440,
    864,
    1372,
    1720,
    68,
    527,
    132,
    418,
    1219,
    352,
    313,
    439,
    414,
    1389,
    634,
    136,
    9,
    100,
    1477,
    157,
    317,
    284,
    5,
    189,
    955,
    353,
    761,
    1370,
    385,
    264,
    423,
    374
  ],
  [
    311,
    451,
    388,
    41,
    365,
    421,
    183,
    1002,
    1449,
    126,
    386,
    460,
    357,
    463,
    1458,
    368,
    98,
    1843,
    346,
    415,
    388,
    872,
    15,
    389,
    499,
    455,
    235,
    1052,
    380,
    252,
    645,
    685,
    43,
    433,
    731,
    161,
    369,
    391
  ],
  [
    793,
    486,
    117,
    45,
    223,
    467,
    48,
    426,
    294,
    578,
    478,
    1288,
    223,
    304,
    650,
    290,
    1642,
    171,
    1496,
    1641,
    856,
    146,
    1328,
    1329,
    1551,
    195,
    1382,
    542,
    58,
    104,
    7,
    432,
    218,
    322,
    264,
    88,
    111,
    350
  ],
  [
    1713,
    457,
    1163,
    196,
    1132,
    500,
    1998,
    1685,
    138,
    133,
    146,
    59,
    1552,
    1325,
    143,
    459,
    404,
    195,
    32,
    189,
    312,
    437,
    1414,
    237,
    169,
    270,
    271,
    52,
    1595,
    237,
    374,
    198,
    252,
    253,
    684,
    245,
    173,
    332
  ],
  [
    226,
    29,
    376,
    233,
    124,
    344,
    1136,
    1620,
    426,
    51,
    360,
    461,
    373,
    481,
    386,
    401,
    341,
    270,
    1647,
    454,
    1996,
    1201,
    416,
    436,
    1731,
    41,
    291,
    401,
    1936,
    258,
    388,
    408,
    1167,
    1546,
    103,
    383,
    1062,
    311
  ],
  [
    210,
    249,
    480,
    444,
    112,
    338,
    1963,
    1061,
    115,
    613,
    467,
    409,
    1902,
    979,
    295,
    458,
    359,
    1336,
    241,
    291,
    327,
    304,
    4,
    358,
    475,
    345,
    33,
    1361,
    200,
    329,
    67,
    79,
    1370,
    340,
    488,
    478,
    431,
    350
  ],
  [
    267,
    136,
    393,
    615,
    180,
    462,
    12,
    401,
    354,
    124,
    162,
    193,
    160,
    113,
    6,
    672,
    481,
    356,
    489,
    394,
    499,
    428,
    1807,
    4,
    166,
    282,
    116,
    159,
    1440,
    818,
    375,
    193,
    17,
    155,
    458,
    79,
    112,
    456
  ],
  [
    302,
    153,
    33,
    258,
    401,
    731,
    212,
    1661,
    299,
    472,
    255,
    1648,
    288,
    270,
    55,
    191,
    1403,
    150,
    94,
    340,
    432,
    196,
    128,
    532,
    1229,
    372,
    327,
    690,
    500,
    392,
    455,
    45,
    40,
    217,
    998,
    296,
    407,
    259
  ],
  [
    297,
    51,
    357,
    767,
    24,
    1279,
    425,
    243,
    365,
    296,
    1994,
    405,
    355,
    545,
    629,
    1990,
    252,
    402,
    648,
    99,
    960,
    441,
    77,
    1815,
    265,
    30,
    280,
    1515,
    405,
    71,
    296,
    1267,
    145,
    12,
    68,
    319,
    605,
    383
  ],
  [
    453,
    288,
    83,
    226,
    247,
    942,
    156,
    437,
    265,
    457,
    104,
    976,
    156,
    1236,
    44,
    209,
    857,
    349,
    1888,
    215,
    107,
    1238,
    1774,
    1459,
    129,
    163,
    336,
    107,
    165,
    105,
    325,
    1646,
    415,
    265,
    65,
    111,
    1136,
    123
  ],
  [
    94,
    54,
    230,
    448,
    234,
    73,
    159,
    290,
    447,
    438,
    446,
    237,
    708,
    147,
    487,
    116,
    478,
    448,
    396,
    202,
    937,
    395,
    1868,
    149,
    2,
    207,
    93,
    314,
    51,
    1449,
    406,
    448,
    170,
    1549,
    194,
    1904,
    447,
    425
  ],
  [
    330,
    268,
    116,
    309,
    263,
    1250,
    486,
    422,
    1288,
    201,
    1166,
    292,
    386,
    211,
    284,
    161,
    619,
    337,
    419,
    360,
    1310,
    385,
    296,
    1145,
    1509,
    158,
    635,
    438,
    250,
    714,
    97,
    965,
    147,
    138,
    227,
    1891,
    85,
    1350
  ],
  [
    268,
    97,
    1552,
    1477,
    1095,
    164,
    408,
    280,
    127,
    492,
    476,
    165,
    206,
    88,
    1831,
    40,
    79,
    63,
    225,
    165,
    535,
    76,
    526,
    40,
    1658,
    1745,
    111,
    1953,
    1626,
    483,
    997,
    433,
    295,
    367,
    157,
    452,
    412,
    458
  ],
  [
    340,
    63,
    48,
    69,
    1861,
    249,
    461,
    254,
    156,
    67,
    133,
    605,
    2,
    326,
    275,
    151,
    1217,
    351,
    285,
    117,
    399,
    483,
    452,
    194,
    160,
    111,
    372,
    481,
    500,
    1237,
    69,
    475,
    285,
    1609,
    337,
    1478,
    488,
    221
  ],
  [
    1924,
    371,
    363,
    1060,
    274,
    726,
    331,
    384,
    32,
    37,
    993,
    1723,
    40,
    411,
    386,
    341,
    158,
    40,
    298,
    424,
    1592,
    333,
    259,
    470,
    1839,
    270,
    358,
    473,
    417,
    1867,
    1237,
    443,
    247,
    1360,
    215,
    321,
    372,
    569
  ],
  [
    179,
    921,
    1807,
    290,
    375,
    182,
    131,
    120,
    233,
    281,
    244,
    1151,
    319,
    438,
    294,
    500,
    377,
    1136,
    163,
    78,
    19,
    380,
    281,
    1,
    1746,
    902,
    253,
    280,
    887,
    213,
    1600,
    333,
    290,
    463,
    434,
    474,
    9,
    196
  ],
  [
    666,
    123,
    293,
    379,
    196,
    1459,
    378,
    359,
    94,
    1402,
    1923,
    129,
    1128,
    486,
    97,
    632,
    1711,
    219,
    391,
    1661,
    116,
    173,
    142,
    217,
    365,
    320,
    87,
    321,
    28,
    420,
    1938,
    50,
    498,
    208,
    412,
    133,
    489,
    473
  ],
  [
    402,
    147,
    358,
    1009,
    81,
    535,
    312,
    1868,
    223,
    377,
    1278,
    675,
    1164,
    1870,
    247,
    1982,
    1407,
    648,
    343,
    1621,
    3,
    312,
    243,
    1219,
    132,
    1,
    60,
    99,
    339,
    1505,
    1928,
    232,
    359,
    128,
    1287,
    830,
    1881,
    1097
  ],
  [
    296,
    123,
    495,
    496,
    320,
    300,
    172,
    294,
    1214,
    243,
    468,
    164,
    1742,
    1550,
    349,
    1764,
    439,
    331,
    94,
    131,
    1604,
    807,
    143,
    31,
    492,
    160,
    94,
    192,
    58,
    178,
    286,
    490,
    453,
    218,
    275,
    230,
    449,
    333
  ],
  [
    317,
    1061,
    205,
    422,
    1742,
    335,
    1995,
    30,
    180,
    479,
    1642,
    262,
    68,
    1196,
    52,
    18,
    201,
    450,
    1076,
    469,
    278,
    252,
    322,
    1035,
    443,
    238,
    212,
    820,
    219,
    102,
    908,
    1763,
    494,
    287,
    203,
    171,
    1292,
    1086
  ],
  [
    245,
    112,
    1885,
    402,
    397,
    76,
    262,
    135,
    160,
    148,
    156,
    25,
    1981,
    490,
    447,
    383,
    479,
    710,
    443,
    479,
    1766,
    444,
    262,
    346,
    32,
    223,
    361,
    181,
    113,
    136,
    344,
    1588,
    429,
    1402,
    315,
    1250,
    111,
    98
  ],
  [
    402,
    1030,
    130,
    414,
    301,
    214,
    283,
    373,
    253,
    381,
    419,
    156,
    121,
    1929,
    25,
    125,
    49,
    344,
    35,
    409,
    206,
    350,
    1813,
    273,
    432,
    1283,
    390,
    73,
    239,
    245,
    938,
    117,
    1609,
    300,
    90,
    450,
    1688,
    271
  ],
  [
    403,
    87,
    356,
    44,
    1377,
    78,
    1786,
    233,
    1481,
    426,
    361,
    245,
    1557,
    338,
    1538,
    257,
    153,
    90,
    1487,
    429,
    296,
    86,
    2,
    142,
    96,
    306,
    425,
    95,
    306,
    54,
    676,
    1746,
    2,
    526,
    385,
    1612,
    1433,
    1192
  ],
  [
    225,
    390,
    300,
    268,
    1221,
    561,
    457,
    1090,
    189,
    272,
    146,
    264,
    191,
    499,
    313,
    313,
    308,
    373,
    45,
    1056,
    67,
    250,
    33,
    313,
    159,
    279,
    304,
    1874,
    372,
    452,
    223,
    497,
    458,
    1944,
    415,
    54,
    388,
    1950
  ],
  [
    1003,
    583,
    346,
    391,
    490,
    1242,
    58,
    50,
    192,
    1193,
    394,
    1366,
    153,
    161,
    155,
    231,
    1199,
    171,
    247,
    377,
    1355,
    333,
    264,
    280,
    47,
    781,
    83,
    343,
    381,
    318,
    745,
    314,
    1622,
    1550,
    234,
    1098,
    28,
    404
  ],
  [
    21,
    1726,
    26,
    213,
    294,
    1166,
    78,
    1545,
    491,
    215,
    970,
    161,
    367,
    978,
    185,
    5,
    343,
    1125,
    65,
    120,
    343,
    561,
    688,
    412,
    236,
    287,
    303,
    348,
    41,
    280,
    247,
    116,
    1756,
    333,
    1036,
    188,
    180,
    189
  ],
  [
    219,
    426,
    169,
    482,
    1976,
    1215,
    95,
    366,
    1141,
    1437,
    179,
    193,
    125,
    178,
    401,
    783,
    1426,
    44,
    446,
    746,
    591,
    352,
    1560,
    257,
    310,
    1195,
    402,
    183,
    800,
    907,
    758,
    259,
    151,
    7,
    472,
    156,
    130,
    452
  ],
  [
    768,
    362,
    299,
    464,
    1467,
    1352,
    248,
    63,
    34,
    83,
    33,
    267,
    38,
    236,
    142,
    1659,
    263,
    318,
    1738,
    298,
    256,
    45,
    405,
    702,
    416,
    1431,
    1909,
    94,
    269,
    1280,
    387,
    130,
    24,
    1950,
    358,
    88,
    46,
    368
  ],
  [
    68,
    183,
    283,
    139,
    715,
    81,
    139,
    556,
    359,
    10,
    1428,
    201,
    389,
    492,
    157,
    410,
    431,
    333,
    597,
    1580,
    317,
    1279,
    404,
    112,
    141,
    371,
    51,
    144,
    24,
    462,
    439,
    1496,
    305,
    434,
    987,
    228,
    39,
    361
  ],
  [
    332,
    343,
    26,
    640,
    1478,
    300,
    1365,
    48,
    73,
    234,
    479,
    72,
    1187,
    452,
    439,
    491,
    237,
    42,
    266,
    160,
    476,
    1487,
    90,
    163,
    446,
    467,
    18,
    391,
    340,
    184,
    203,
    85,
    1498,
    152,
    1776,
    235,
    1668,
    85
  ],
  [
    230,
    176,
    234,
    356,
    491,
    496,
    715,
    17,
    80,
    974,
    498,
    1322,
    1042,
    988,
    386,
    198,
    379,
    1022,
    1241,
    139,
    1979,
    339,
    1953,
    308,
    497,
    71,
    63,
    276,
    427,
    445,
    1404,
    363,
    487,
    93,
    1614,
    394,
    431,
    1589
  ],
  [
    218,
    1597,
    1477,
    1864,
    1936,
    717,
    286,
    230,
    130,
    1348,
    1852,
    475,
    1520,
    1492,
    489,
    145,
    337,
    382,
    483,
    266,
    230,
    308,
    42,
    149,
    139,
    97,
    873,
    781,
    129,
    191,
    310,
    490,
    139,
    393,
    44,
    216,
    423,
    496
  ]
];

const App = () => {
  return (
    <>
      <Header />
      <CommentForm />
      <ChordCanvas matrix={matrix} />
    </>
  );
};

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
