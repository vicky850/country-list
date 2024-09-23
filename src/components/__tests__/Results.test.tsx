import { render, screen } from '@testing-library/react';

import { Results } from '../country';
import { CountryType } from '@/types';
const countries : CountryType[] = [
    {
      "name": {
        "common": "South Georgia",
        "official": "South Georgia and the South Sandwich Islands",
        "nativeName": {
          "eng": {
            "official": "South Georgia and the South Sandwich Islands",
            "common": "South Georgia"
          }
        }
      },
      "tld": [
        ".gs"
      ],
      "cca2": "GS",
      "ccn3": "239",
      "cca3": "SGS",
      "independent": false,
      "status": "officially-assigned",
      "unMember": false,
      "currencies": {
        "SHP": {
          "name": "Saint Helena pound",
          "symbol": "£"
        }
      },
      "idd": {
        "root": "+5",
        "suffixes": [
          "00"
        ]
      },
      "capital": [
        "King Edward Point"
      ],
      "altSpellings": [
        "GS",
        "South Georgia and the South Sandwich Islands"
      ],
      "region": "Antarctic",
      "subregion": "",
      "languages": {
        "eng": "English"
      },
      "translations": {
        "ara": {
          "official": "جورجيا الجنوبية وجزر ساندوتش الجنوبية",
          "common": "جورجيا الجنوبية"
        },
        "bre": {
          "official": "Georgia ar Su hag Inizi Sandwich ar Su",
          "common": "Georgia ar Su hag Inizi Sandwich ar Su"
        },
        "ces": {
          "official": "Jižní Georgie a Jižní Sandwichovy ostrovy",
          "common": "Jižní Georgie a Jižní Sandwichovy ostrovy"
        },
        "cym": {
          "official": "South Georgia and the South Sandwich Islands",
          "common": "South Georgia"
        },
        "deu": {
          "official": "Südgeorgien und die Südlichen Sandwichinseln",
          "common": "Südgeorgien und die Südlichen Sandwichinseln"
        },
        "est": {
          "official": "Lõuna-Georgia ja Lõuna-Sandwichi saared",
          "common": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
        },
        "fin": {
          "official": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
          "common": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
        },
        "fra": {
          "official": "Géorgie du Sud et les îles Sandwich du Sud",
          "common": "Géorgie du Sud-et-les Îles Sandwich du Sud"
        },
        "hrv": {
          "official": "Južna Džordžija i Otoci Južni Sendvič",
          "common": "Južna Georgija i otočje Južni Sandwich"
        },
        "hun": {
          "official": "Déli-Georgia és Déli-Sandwich-szigetek",
          "common": "Déli-Georgia és Déli-Sandwich-szigetek"
        },
        "ita": {
          "official": "Georgia del Sud e isole Sandwich del Sud",
          "common": "Georgia del Sud e Isole Sandwich Meridionali"
        },
        "jpn": {
          "official": "サウスジョージア·サウスサンドウィッチ諸島",
          "common": "サウスジョージア・サウスサンドウィッチ諸島"
        },
        "kor": {
          "official": "조지아",
          "common": "조지아"
        },
        "nld": {
          "official": "Zuid-Georgië en de Zuidelijke Sandwich-eilanden",
          "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"
        },
        "per": {
          "official": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
          "common": "جزایر جورجیای جنوبی و ساندویچ جنوبی"
        },
        "pol": {
          "official": "Georgia Południowa i Sandwich Południowy",
          "common": "Georgia Południowa i Sandwich Południowy"
        },
        "por": {
          "official": "Geórgia do Sul e Sandwich do Sul",
          "common": "Ilhas Geórgia do Sul e Sandwich do Sul"
        },
        "rus": {
          "official": "Южная Георгия и Южные Сандвичевы острова",
          "common": "Южная Георгия и Южные Сандвичевы острова"
        },
        "slk": {
          "official": "Južná Georgia a Južné Sandwichove ostrovy",
          "common": "Južná Georgia a Južné Sandwichove ostrovy"
        },
        "spa": {
          "official": "Georgia del Sur y las Islas Sandwich del Sur",
          "common": "Islas Georgias del Sur y Sandwich del Sur"
        },
        "srp": {
          "official": "Јужна Џорџија и Јужна Сендвичка Острва",
          "common": "Јужна Џорџија и Јужна Сендвичка Острва"
        },
        "swe": {
          "official": "Sydgeorgien",
          "common": "Sydgeorgien"
        },
        "tur": {
          "official": "Güney Georgia ve Güney Sandwich Adaları",
          "common": "Güney Georgia ve Güney Sandwich Adaları"
        },
        "urd": {
          "official": "جنوبی جارجیا و جزائر جنوبی سینڈوچ",
          "common": "جنوبی جارجیا"
        },
        "zho": {
          "official": "南乔治亚岛和南桑威奇群岛",
          "common": "南乔治亚"
        }
      },
      "latlng": [-54.5, -37],
      "landlocked": false,
      "area": 3903,
      "demonyms": {
        "eng": {
          "f": "South Georgian South Sandwich Islander",
          "m": "South Georgian South Sandwich Islander"
        }
      },
      "flag": "🇬🇸",
      "maps": {
        "googleMaps": "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/1983629"
      },
      "population": 30,
      "car": {
        "signs": [
          ""
        ],
        "side": "right"
      },
      "timezones": [
        "UTC-02:00"
      ],
      "continents": [
        "Antarctica"
      ],
      "flags": {
        "png": "https://flagcdn.com/w320/gs.png",
        "svg": "https://flagcdn.com/gs.svg"
      },
      "coatOfArms": {
  
      },
      "startOfWeek": "monday",
      "capitalInfo": {
        "latlng": [-54.28, -36.5]
      }
    },
    {
      "name": {
        "common": "Grenada",
        "official": "Grenada",
        "nativeName": {
          "eng": {
            "official": "Grenada",
            "common": "Grenada"
          }
        }
      },
      "tld": [
        ".gd"
      ],
      "cca2": "GD",
      "ccn3": "308",
      "cca3": "GRD",
      "cioc": "GRN",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "XCD": {
          "name": "Eastern Caribbean dollar",
          "symbol": "$"
        }
      },
      "idd": {
        "root": "+1",
        "suffixes": [
          "473"
        ]
      },
      "capital": [
        "St. George's"
      ],
      "altSpellings": [
        "GD"
      ],
      "region": "Americas",
      "subregion": "Caribbean",
      "languages": {
        "eng": "English"
      },
      "translations": {
        "ara": {
          "official": "غرينادا",
          "common": "غرينادا"
        },
        "bre": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "ces": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "cym": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "deu": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "est": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "fin": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "fra": {
          "official": "Grenade",
          "common": "Grenade"
        },
        "hrv": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "hun": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "ita": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "jpn": {
          "official": "グレナダ",
          "common": "グレナダ"
        },
        "kor": {
          "official": "그레나다",
          "common": "그레나다"
        },
        "nld": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "per": {
          "official": "گرنادا",
          "common": "گرنادا"
        },
        "pol": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "por": {
          "official": "Grenada",
          "common": "Granada"
        },
        "rus": {
          "official": "Гренада",
          "common": "Гренада"
        },
        "slk": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "spa": {
          "official": "Granada",
          "common": "Grenada"
        },
        "srp": {
          "official": "Гренада",
          "common": "Гренада"
        },
        "swe": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "tur": {
          "official": "Grenada",
          "common": "Grenada"
        },
        "urd": {
          "official": "گریناڈا",
          "common": "گریناڈا"
        },
        "zho": {
          "official": "格林纳达",
          "common": "格林纳达"
        }
      },
      "latlng": [12.11666666, -61.66666666],
      "landlocked": false,
      "area": 344,
      "demonyms": {
        "eng": {
          "f": "Grenadian",
          "m": "Grenadian"
        },
        "fra": {
          "f": "Grenadienne",
          "m": "Grenadien"
        }
      },
      "flag": "🇬🇩",
      "maps": {
        "googleMaps": "https://goo.gl/maps/rqWyfUAt4xhvk1Zy9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/550727"
      },
      "population": 112519,
      "fifa": "GRN",
      "car": {
        "signs": [
          "WG"
        ],
        "side": "left"
      },
      "timezones": [
        "UTC-04:00"
      ],
      "continents": [
        "North America"
      ],
      "flags": {
        "png": "https://flagcdn.com/w320/gd.png",
        "svg": "https://flagcdn.com/gd.svg",
        "alt": "The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle."
      },
      "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/gd.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/gd.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
        "latlng": [32.38, -64.68]
      }
    }]
test("renders country list", ()=>{
 render(<Results initialCountries={countries} />);
 const textElement = screen.getByText("Country list")
 expect(textElement).toBeDefined();ß
})