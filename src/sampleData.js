// Sample data object for testing due to API call limit on free version

export const sampleData = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1624579200,
        main: {
          temp: 71.64,
          feels_like: 70.81,
          temp_min: 66.72,
          temp_max: 71.64,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1025,
          humidity: 49,
          temp_kf: 2.73
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 4 },
        wind: { speed: 6.87, deg: 154, gust: 12.77 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-25 00:00:00"
      },
      {
        dt: 1624590000,
        main: {
          temp: 65.82,
          feels_like: 64.78,
          temp_min: 61.68,
          temp_max: 65.82,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1025,
          humidity: 57,
          temp_kf: 2.3
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
        ],
        clouds: { all: 3 },
        wind: { speed: 3.44, deg: 101, gust: 6.8 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-25 03:00:00"
      },
      {
        dt: 1624600800,
        main: {
          temp: 59.92,
          feels_like: 58.89,
          temp_min: 59.92,
          temp_max: 59.92,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 70,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
        ],
        clouds: { all: 9 },
        wind: { speed: 4.45, deg: 19, gust: 7.4 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-25 06:00:00"
      },
      {
        dt: 1624611600,
        main: {
          temp: 60.57,
          feels_like: 59.79,
          temp_min: 60.57,
          temp_max: 60.57,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1024,
          humidity: 74,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 87 },
        wind: { speed: 5.12, deg: 33, gust: 8.57 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-25 09:00:00"
      },
      {
        dt: 1624622400,
        main: {
          temp: 62.62,
          feels_like: 62.15,
          temp_min: 62.62,
          temp_max: 62.62,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1025,
          humidity: 76,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 94 },
        wind: { speed: 5.66, deg: 359, gust: 7.99 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-25 12:00:00"
      },
      {
        dt: 1624633200,
        main: {
          temp: 69.19,
          feels_like: 69.01,
          temp_min: 69.19,
          temp_max: 69.19,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1024,
          humidity: 68,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 99 },
        wind: { speed: 0.78, deg: 248, gust: 2.3 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-25 15:00:00"
      },
      {
        dt: 1624644000,
        main: {
          temp: 79.45,
          feels_like: 79.45,
          temp_min: 79.45,
          temp_max: 79.45,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1022,
          humidity: 55,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 95 },
        wind: { speed: 7.2, deg: 192, gust: 9.46 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-25 18:00:00"
      },
      {
        dt: 1624654800,
        main: {
          temp: 80.94,
          feels_like: 81.81,
          temp_min: 80.94,
          temp_max: 80.94,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1020,
          humidity: 51,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
        ],
        clouds: { all: 83 },
        wind: { speed: 9.26, deg: 193, gust: 13.78 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-25 21:00:00"
      },
      {
        dt: 1624665600,
        main: {
          temp: 72.82,
          feels_like: 73.38,
          temp_min: 72.82,
          temp_max: 72.82,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1021,
          humidity: 76,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
        ],
        clouds: { all: 78 },
        wind: { speed: 7.18, deg: 156, gust: 13.56 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-26 00:00:00"
      },
      {
        dt: 1624676400,
        main: {
          temp: 70.03,
          feels_like: 70.74,
          temp_min: 70.03,
          temp_max: 70.03,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1021,
          humidity: 85,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 66 },
        wind: { speed: 6.4, deg: 176, gust: 16.04 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-26 03:00:00"
      },
      {
        dt: 1624687200,
        main: {
          temp: 68.9,
          feels_like: 69.82,
          temp_min: 68.9,
          temp_max: 68.9,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1021,
          humidity: 92,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 83 },
        wind: { speed: 5.99, deg: 177, gust: 22.55 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-26 06:00:00"
      },
      {
        dt: 1624698000,
        main: {
          temp: 69.33,
          feels_like: 70.48,
          temp_min: 69.33,
          temp_max: 69.33,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1020,
          humidity: 96,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 99 },
        wind: { speed: 5.75, deg: 175, gust: 23.98 },
        visibility: 10000,
        pop: 0.03,
        sys: { pod: "n" },
        dt_txt: "2021-06-26 09:00:00"
      },
      {
        dt: 1624708800,
        main: {
          temp: 72.99,
          feels_like: 73.98,
          temp_min: 72.99,
          temp_max: 72.99,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1021,
          humidity: 85,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 9.04, deg: 192, gust: 22.86 },
        visibility: 10000,
        pop: 0.07,
        sys: { pod: "d" },
        dt_txt: "2021-06-26 12:00:00"
      },
      {
        dt: 1624719600,
        main: {
          temp: 77.68,
          feels_like: 78.67,
          temp_min: 77.68,
          temp_max: 77.68,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1020,
          humidity: 75,
          temp_kf: 0
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 10.47, deg: 205, gust: 18.28 },
        visibility: 10000,
        pop: 0.47,
        rain: { "3h": 0.38 },
        sys: { pod: "d" },
        dt_txt: "2021-06-26 15:00:00"
      },
      {
        dt: 1624730400,
        main: {
          temp: 82.22,
          feels_like: 84.94,
          temp_min: 82.22,
          temp_max: 82.22,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 61,
          temp_kf: 0
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" }
        ],
        clouds: { all: 100 },
        wind: { speed: 11.65, deg: 205, gust: 20.29 },
        visibility: 10000,
        pop: 0.46,
        rain: { "3h": 0.36 },
        sys: { pod: "d" },
        dt_txt: "2021-06-26 18:00:00"
      },
      {
        dt: 1624741200,
        main: {
          temp: 82.69,
          feels_like: 85.44,
          temp_min: 82.69,
          temp_max: 82.69,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1018,
          humidity: 60,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 10.56, deg: 200, gust: 20.13 },
        visibility: 10000,
        pop: 0.03,
        sys: { pod: "d" },
        dt_txt: "2021-06-26 21:00:00"
      },
      {
        dt: 1624752000,
        main: {
          temp: 79.12,
          feels_like: 79.12,
          temp_min: 79.12,
          temp_max: 79.12,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1018,
          humidity: 70,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 9.62, deg: 187, gust: 20.2 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-27 00:00:00"
      },
      {
        dt: 1624762800,
        main: {
          temp: 75.09,
          feels_like: 76.06,
          temp_min: 75.09,
          temp_max: 75.09,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1019,
          humidity: 80,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 7.67, deg: 192, gust: 22.95 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-27 03:00:00"
      },
      {
        dt: 1624773600,
        main: {
          temp: 73.31,
          feels_like: 74.25,
          temp_min: 73.31,
          temp_max: 73.31,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 83,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 8.03, deg: 201, gust: 25.59 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-27 06:00:00"
      },
      {
        dt: 1624784400,
        main: {
          temp: 71.62,
          feels_like: 72.61,
          temp_min: 71.62,
          temp_max: 71.62,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 88,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 98 },
        wind: { speed: 6.89, deg: 201, gust: 24.38 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-27 09:00:00"
      },
      {
        dt: 1624795200,
        main: {
          temp: 75.96,
          feels_like: 76.96,
          temp_min: 75.96,
          temp_max: 75.96,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1019,
          humidity: 79,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 99 },
        wind: { speed: 9.31, deg: 214, gust: 21.12 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-27 12:00:00"
      },
      {
        dt: 1624806000,
        main: {
          temp: 86.45,
          feels_like: 90.16,
          temp_min: 86.45,
          temp_max: 86.45,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 55,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 96 },
        wind: { speed: 10.85, deg: 218, gust: 16.26 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-27 15:00:00"
      },
      {
        dt: 1624816800,
        main: {
          temp: 92.25,
          feels_like: 95.04,
          temp_min: 92.25,
          temp_max: 92.25,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 42,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 95 },
        wind: { speed: 11.23, deg: 217, gust: 15.59 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-27 18:00:00"
      },
      {
        dt: 1624827600,
        main: {
          temp: 89.56,
          feels_like: 92.16,
          temp_min: 89.56,
          temp_max: 89.56,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 46,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 100 },
        wind: { speed: 8.39, deg: 211, gust: 14.72 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-27 21:00:00"
      },
      {
        dt: 1624838400,
        main: {
          temp: 84.2,
          feels_like: 87.85,
          temp_min: 84.2,
          temp_max: 84.2,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1017,
          humidity: 60,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: { all: 98 },
        wind: { speed: 7.18, deg: 218, gust: 17.65 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-28 00:00:00"
      },
      {
        dt: 1624849200,
        main: {
          temp: 79.07,
          feels_like: 79.07,
          temp_min: 79.07,
          temp_max: 79.07,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1018,
          humidity: 71,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: { all: 85 },
        wind: { speed: 8.95, deg: 212, gust: 23.55 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-28 03:00:00"
      },
      {
        dt: 1624860000,
        main: {
          temp: 75.07,
          feels_like: 75.85,
          temp_min: 75.07,
          temp_max: 75.07,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 76,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 75 },
        wind: { speed: 7.27, deg: 219, gust: 24.27 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-28 06:00:00"
      },
      {
        dt: 1624870800,
        main: {
          temp: 72.97,
          feels_like: 73.78,
          temp_min: 72.97,
          temp_max: 72.97,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 81,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
        ],
        clouds: { all: 63 },
        wind: { speed: 7.27, deg: 220, gust: 25.48 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "n" },
        dt_txt: "2021-06-28 09:00:00"
      },
      {
        dt: 1624881600,
        main: {
          temp: 76.75,
          feels_like: 77.65,
          temp_min: 76.75,
          temp_max: 76.75,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 75,
          temp_kf: 0
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" }
        ],
        clouds: { all: 54 },
        wind: { speed: 7.65, deg: 231, gust: 16.8 },
        visibility: 10000,
        pop: 0.2,
        rain: { "3h": 0.2 },
        sys: { pod: "d" },
        dt_txt: "2021-06-28 12:00:00"
      },
      {
        dt: 1624892400,
        main: {
          temp: 89.4,
          feels_like: 92.68,
          temp_min: 89.4,
          temp_max: 89.4,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 48,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 33 },
        wind: { speed: 8.37, deg: 233, gust: 11.34 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-28 15:00:00"
      },
      {
        dt: 1624903200,
        main: {
          temp: 96.12,
          feels_like: 98.87,
          temp_min: 96.12,
          temp_max: 96.12,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1018,
          humidity: 36,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 28 },
        wind: { speed: 9.78, deg: 232, gust: 12.06 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-28 18:00:00"
      },
      {
        dt: 1624914000,
        main: {
          temp: 95.61,
          feels_like: 98.01,
          temp_min: 95.61,
          temp_max: 95.61,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1017,
          humidity: 36,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 49 },
        wind: { speed: 11.23, deg: 239, gust: 11.32 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-28 21:00:00"
      },
      {
        dt: 1624924800,
        main: {
          temp: 87.22,
          feels_like: 92.3,
          temp_min: 87.22,
          temp_max: 87.22,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 57,
          temp_kf: 0
        },
        weather: [
          { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
        ],
        clouds: { all: 66 },
        wind: { speed: 7.36, deg: 247, gust: 16.28 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 00:00:00"
      },
      {
        dt: 1624935600,
        main: {
          temp: 82.63,
          feels_like: 87.17,
          temp_min: 82.63,
          temp_max: 82.63,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1019,
          humidity: 68,
          temp_kf: 0
        },
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" }
        ],
        clouds: { all: 50 },
        wind: { speed: 5.77, deg: 239, gust: 18.79 },
        visibility: 10000,
        pop: 0.36,
        rain: { "3h": 0.14 },
        sys: { pod: "n" },
        dt_txt: "2021-06-29 03:00:00"
      },
      {
        dt: 1624946400,
        main: {
          temp: 78.04,
          feels_like: 79.16,
          temp_min: 78.04,
          temp_max: 78.04,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 77,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 27 },
        wind: { speed: 7, deg: 239, gust: 22.48 },
        visibility: 10000,
        pop: 0.43,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 06:00:00"
      },
      {
        dt: 1624957200,
        main: {
          temp: 75.33,
          feels_like: 76.37,
          temp_min: 75.33,
          temp_max: 75.33,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 81,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 0 },
        wind: { speed: 5.17, deg: 230, gust: 14.67 },
        visibility: 10000,
        pop: 0.07,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 09:00:00"
      },
      {
        dt: 1624968000,
        main: {
          temp: 80.1,
          feels_like: 82.87,
          temp_min: 80.1,
          temp_max: 80.1,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1020,
          humidity: 68,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 1 },
        wind: { speed: 5.95, deg: 236, gust: 11.18 },
        visibility: 10000,
        pop: 0.07,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 12:00:00"
      },
      {
        dt: 1624978800,
        main: {
          temp: 90.72,
          feels_like: 94.14,
          temp_min: 90.72,
          temp_max: 90.72,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1019,
          humidity: 46,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 5 },
        wind: { speed: 6.67, deg: 222, gust: 9.04 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 15:00:00"
      },
      {
        dt: 1624989600,
        main: {
          temp: 97.03,
          feels_like: 100.53,
          temp_min: 97.03,
          temp_max: 97.03,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1017,
          humidity: 36,
          temp_kf: 0
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
        ],
        clouds: { all: 8 },
        wind: { speed: 9.84, deg: 230, gust: 14.5 },
        visibility: 10000,
        pop: 0,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 18:00:00"
      },
      {
        dt: 1625000400,
        main: {
          temp: 95.63,
          feels_like: 99.61,
          temp_min: 95.63,
          temp_max: 95.63,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 39,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: { all: 41 },
        wind: { speed: 11.41, deg: 244, gust: 15.03 },
        visibility: 10000,
        pop: 0.15,
        sys: { pod: "d" },
        dt_txt: "2021-06-29 21:00:00"
      }
    ],
    city: {
      id: 5102466,
      name: "Paterson",
      coord: { lat: 40.9168, lon: -74.1718 },
      country: "US",
      population: 146199,
      timezone: -14400,
      sunrise: 1624526747,
      sunset: 1624581146
    }
  };