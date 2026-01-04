import { FormattedMessage } from "react-intl";
// import mainUtils_icon from "../assets/icons/mainUtils_icon.svg";

import zn_4_10 from "../assets/images/floor-plan/zn/4_10.png";
// import zn_11 from "../assets/images/plan/zn/11.png";
// import zn_12 from "../assets/images/plan/zn/12.png";
// import zn_13 from "../assets/images/plan/zn/13.png";
// import zn_14_16 from "../assets/images/plan/zn/14_16.png";
// import zn_17_18 from "../assets/images/plan/zn/17_18.png";
// import zn_19 from "../assets/images/plan/zn/19.png";
// import zn_21_25 from "../assets/images/plan/zn/21_25.png";
// import zn_26 from "../assets/images/plan/zn/26.png";
// import zn_27 from "../assets/images/plan/zn/27.png";
// import zn_28_30 from "../assets/images/plan/zn/28_30.png";
// import zn_31_39 from "../assets/images/plan/zn/31_39.png";

// import rs_4_10 from "../assets/images/plan/rs/4_10.png";
// import rs_11 from "../assets/images/plan/rs/11.png";
// import rs_12 from "../assets/images/plan/rs/12.png";
// import rs_13 from "../assets/images/plan/rs/13.png";
// import rs_14 from "../assets/images/plan/rs/14.png";
// import rs_15_16 from "../assets/images/plan/rs/15_16.png";
// import rs_17_18 from "../assets/images/plan/rs/17_18.png";
// import rs_19 from "../assets/images/plan/rs/19.png";
// import rs_21_25 from "../assets/images/plan/rs/21_25.png";
// import rs_26 from "../assets/images/plan/rs/26.png";
// import rs_27 from "../assets/images/plan/rs/27.png";
// import rs_28 from "../assets/images/plan/rs/28.png";
// import rs_29_30 from "../assets/images/plan/rs/29_30.png";
// import rs_31_39 from "../assets/images/plan/rs/31_39.png";

import layout_1pn_1wc from "../assets/images/layout/1pn_1wc.png";
import layout_2pn_1wc from "../assets/images/layout/2pn_1wc.png";
import layout_2pn_2wc from "../assets/images/layout/2pn_2wc.png";
import layout_3pn_2wc from "../assets/images/layout/3pn_2wc.png";

// import tang_tret from "../assets/images/utils/tang_20.png";
// import tang_20 from "../assets/images/utils/tang_20.png";
// import tang_mai from "../assets/images/utils/tang_20.png";

// Layer 3
export const utilities_plan_stopframe = [
  // dttt = dt thông thuỷ | dtttuong = dt tim tuong
  {
    id: 75,
    title: "Zenia",
    path: [
      {
        id: 1,
        poligon1:
          "M793 867.691V853.5L865 867.691L926.5 851L1001 865.5V880.5V910.5L1111.5 933L1283.5 849V865L1111.5 952.5L1001 927.5V910.5V880.5L926.5 865.5L865 883L793 867.691Z",
        poligon2:
          "M1001 880.5L926.5 865.5L865 883L793 867.691V853.5L865 867.691L926.5 851L1001 865.5V880.5ZM1001 880.5V910.5M1001 910.5V927.5L1111.5 952.5L1283.5 865V849L1111.5 933L1001 910.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "4",
        floorGroup: 1,
      },
      {
        id: 2,
        poligon1:
          "M793 852.5V837.5L865 851L928.5 837L1000.5 848.5L1001.15 866L1002 889L1110.5 910L1283.5 834V849L1110.5 933.5L1002 910L1001.15 866L928.5 851L865 868L793 852.5Z",
        poligon2:
          "M1001.15 866L1000.5 848.5L928.5 837L865 851L793 837.5V852.5L865 868L928.5 851L1001.15 866ZM1001.15 866L1002 889L1110.5 910L1283.5 834V849L1110.5 933.5L1002 910L1001.15 866Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "5",
        floorGroup: 1,
      },
      {
        id: 3,
        poligon1:
          "M793 836.5V822L864.5 834.5L928 821L1000.5 832L1000.93 848L1001.5 869.501L1111 888.5L1283.5 819V833L1111 909.5L1002 888L1001.5 869.501L1001.5 869.5L1000.93 848L928 836.5L864.5 850.5L793 836.5Z",
        poligon2:
          "M1000.93 848L1000.5 832L928 821L864.5 834.5L793 822V836.5L864.5 850.5L928 836.5L1000.93 848ZM1000.93 848L1001.5 869.5L1111 888.5L1283.5 819V833L1111 909.5L1002 888L1000.93 848Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "6",
        floorGroup: 1,
      },
      {
        id: 4,
        poligon1:
          "M793 821V807L864 817.5L928 806L1000.5 815.5V831L1001.5 849L1110.5 867L1283.5 802.5V818L1110.5 887.5L1002 869L1001.5 849L1000.5 831L928 820L864 833.5L793 821Z",
        poligon2:
          "M1000.5 831L928 820L864 833.5L793 821V807L864 817.5L928 806L1000.5 815.5V831ZM1000.5 831L1001.5 849M1001.5 849L1002 869L1110.5 887.5L1283.5 818V802.5L1110.5 867L1001.5 849Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "7",
        floorGroup: 1,
      },
      {
        id: 5,
        poligon1:
          "M864 816.5L793 806V791.5L864 801L928 791.5L1001 799.5V814.5L1001.47 830.5L1110.5 845.5L1283.5 787V801.5L1110.5 866L1002 848.5L1001.47 830.5L1001 814.5L928 805L864 816.5Z",
        poligon2:
          "M1001 814.5L928 805L864 816.5L793 806V791.5L864 801L928 791.5L1001 799.5V814.5ZM1001 814.5L1001.47 830.5M1001.47 830.5L1002 848.5L1110.5 866L1283.5 801.5V787L1110.5 845.5L1001.47 830.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "8",
        floorGroup: 1,
      },
      {
        id: 6,
        poligon1:
          "M864 800L793 790.5V776L864 784L928 776L1001 783V798.5L1001.39 810.5L1110.5 823.5L1283.5 773V786L1110.5 844.5L1001.5 829.5L1001.39 810.5L1001 798.5L928 790.5L864 800Z",
        poligon2:
          "M1001 798.5L928 790.5L864 800L793 790.5V776L864 784L928 776L1001 783V798.5ZM1001 798.5L1001.39 810.5M1001.39 810.5L1001.5 829.5L1110.5 844.5L1283.5 786V773L1110.5 823.5L1001.39 810.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "9",
        floorGroup: 1,
      },
      {
        id: 7,
        poligon1:
          "M864 783L793 775V760.5L864 767.5L928 759.5L1001 766V782L1001.31 790.5L1110.5 802.5L1283.5 757.5V772L1110.5 822.5L1001.5 809.5L1001.31 790.5L1001 782L928 775L864 783Z",
        poligon2:
          "M1001 782L928 775L864 783L793 775V760.5L864 767.5L928 759.5L1001 766V782ZM1001 782L1001.31 790.5M1001.31 790.5L1001.5 809.5L1110.5 822.5L1283.5 772V757.5L1110.5 802.5L1001.31 790.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "10",
        floorGroup: 1,
      },
      {
        id: 8,
        poligon1:
          "M864 766.5L793 759.5V744.5L864 751L928 744.5L1001 750V765L1001.24 771L1110.5 781L1283.5 742V756.5L1110.5 801.5L1001.5 790L1001.24 771L1001 765L928 758.5L864 766.5Z",
        poligon2:
          "M1001 765L928 758.5L864 766.5L793 759.5V744.5L864 751L928 744.5L1001 750V765ZM1001 765L1001.24 771M1001.24 771L1001.5 790L1110.5 801.5L1283.5 756.5V742L1110.5 781L1001.24 771Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "11",
        floorGroup: 2,
      },
      {
        id: 9,
        poligon1:
          "M864 750L793 743.5V728.5L864 733L928 728.5L1001 733V749L1001.12 751.5L1110.5 758.5L1283.5 727V741L1110.5 780L1001.5 770.5L1001.12 751.5L1001 749L928 743.5L864 750Z",
        poligon2:
          "M1001 749L928 743.5L864 750L793 743.5V728.5L864 733L928 728.5L1001 733V749ZM1001 749L1001.12 751.5M1001.12 751.5L1001.5 770.5L1110.5 780L1283.5 741V727L1110.5 758.5L1001.12 751.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "12",
        floorGroup: 3,
      },
      {
        id: 10,
        poligon1:
          "M864 732L793 727.5V713.5L864 717.5L928 713.5L1001 717V732L1110.5 737.5L1283.5 712V726L1110.5 757.5L1001.5 751L1001 732L928 727.5L864 732Z",
        poligon2:
          "M1001 732L928 727.5L864 732L793 727.5V713.5L864 717.5L928 713.5L1001 717V732ZM1001 732L1001.5 751L1110.5 757.5L1283.5 726V712L1110.5 737.5L1001 732Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "13",
        floorGroup: 4,
      },
      {
        id: 11,
        poligon1:
          "M864 716.5L793 712.5V698L864 700.5L928 697.5L1001 699.5V711.5L1110.5 716L1283.5 697V711L1110.5 736.5L1001.5 731V716L928 712.5L864 716.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "14",
        floorGroup: 5,
      },
      {
        id: 12,
        poligon1:
          "M864 699.5L793 697V682.5L864 684.5L928.5 682L1001 683V691.5L1110.5 694.5L1283.5 682V696L1110.5 715L1001 710.5V698.5L928.5 696.5L864 699.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "15",
        floorGroup: 5,
      },
      {
        id: 13,
        poligon1:
          "M864 683.5L793 681.5V666.5L864 668L928.5 666.5L1001 667.5V671.5L1111 673L1283.5 665.5V681L1111 693.5L1001 690.5V682L928.5 681L864 683.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "16",
        floorGroup: 5,
      },
      {
        id: 14,
        poligon1:
          "M864 667L793 665.5V650.5L864 651L928.5 650.5H1001V651.5H1111L1283.5 650.5V664.5L1111 672L1001 670.5V666.5L928.5 665.5L864 667Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "17",
        floorGroup: 6,
      },
      {
        id: 15,
        poligon1:
          "M865 650L793 649.5V635H865L928.5 634.5H1001.71V631L1111.5 630.5L1283.5 633.5V649.5L1111.5 650.5H1001V649.5H928.5L865 650Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "18",
        floorGroup: 6,
      },
      {
        id: 16,
        poligon1:
          "M865 634H793V608.5L865 606.5L927.5 608L1001 606V598L1111.5 593.5L1283.5 609.5V632.5L1111.5 629.5L1001.5 630V633.5H927.5L865 634Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "19",
        floorGroup: 7,
      },
      {
        id: 17,
        poligon1:
          "M865 575.5L793 580V564.5L865 559L928.5 564L1001 559V541L1111.5 532L1283.5 565V580.5L1111.5 554L1001 561.5V576.5L928.5 580L865 575.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "21",
        floorGroup: 8,
      },
      {
        id: 18,
        poligon1:
          "M865 558L793 563.5V549L865 542.5L928.5 549L1001 542.5V540V522L1111.5 511L1283.5 549.5V564L1111.5 531L1001 540V542.5V558L928.5 563L865 558Z",
        poligon2:
          "M1001 542.5V558L928.5 563L865 558L793 563.5V549L865 542.5L928.5 549L1001 542.5ZM1001 542.5V540L1111.5 531L1283.5 564V549.5L1111.5 511L1001 522V542.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "22",
        floorGroup: 8,
      },
      {
        id: 19,
        poligon1:
          "M865 541.5L793 548V533.5L865 526L928 534L1001 526.5V521.5V501.5L1111.5 489.5L1283.5 534V548.5L1111.5 510L1001 521.5V526.5V541.5L928 548.5L865 541.5Z",
        poligon2:
          "M1001 526.5V541.5L928 548.5L865 541.5L793 548V533.5L865 526L928 534L1001 526.5ZM1001 526.5V521.5L1111.5 510L1283.5 548.5V534L1111.5 489.5L1001 501.5V526.5Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "23",
        floorGroup: 8,
      },
      {
        id: 20,
        poligon1:
          "M865 525L793 532.5V517.5L865 509L928 517L1001 510V500.668V482L1111 468.5L1283.5 519V533L1111 488.5L1001 500.668V510V525.5L928 533L865 525Z",
        poligon2:
          "M1001 510V525.5L928 533L865 525L793 532.5V517.5L865 509L928 517L1001 510ZM1001 510V500.668L1111 488.5L1283.5 533V519L1111 468.5L1001 482V510Z",
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "24",
        floorGroup: 8,
      },
      // Studio
      {
        id: 21,
        poligon1:
          "M864.5 508L793 516.5V502L864.5 493L928 502L1001 492V481V462L1110.5 446.5L1283.5 503.5V518L1110.5 467.5L1001 481V492V509L928 516L864.5 508Z",
        poligon2:
          "M1001 492V509L928 516L864.5 508L793 516.5V502L864.5 493L928 502L1001 492ZM1001 492V481L1110.5 467.5L1283.5 518V503.5L1110.5 446.5L1001 462V492Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "25",
        floorGroup: 8,
      },
      {
        id: 22,
        poligon1:
          "M864.5 492L793 501V486L864.5 476L927.5 487L1001 477V461V442L1111 425.5L1283.5 489.5V503L1111 445.5L1001 461V477V492L927.5 501L864.5 492Z",
        poligon2:
          "M1001 477V492L927.5 501L864.5 492L793 501V486L864.5 476L927.5 487L1001 477ZM1001 477V461L1111 445.5L1283.5 503V489.5L1111 425.5L1001 442V477Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "26",
        floorGroup: 9,
      },
      {
        id: 23,
        poligon1:
          "M864.5 475L793 485V471L864.5 458.5L927.5 471L1001 460.5V441V422L1111 403.5L1283.5 473.5V488.5L1111 424.5L1001 441V460.5V476L927.5 486L864.5 475Z",
        poligon2:
          "M1001 460.5V476L927.5 486L864.5 475L793 485V471L864.5 458.5L927.5 471L1001 460.5ZM1001 460.5V441L1111 424.5L1283.5 488.5V473.5L1111 403.5L1001 422V460.5Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "27",
        floorGroup: 10,
      },
      {
        id: 24,
        poligon1:
          "M864.5 457.5L793 470V455L864.5 442.5L926.5 456L1001 443V421V402.5L1111 381.5L1283.5 457.5V472.5L1111 402.5L1001 421V443V459.5L927.5 470L864.5 457.5Z",
        poligon2:
          "M1001 443V459.5L927.5 470L864.5 457.5L793 470V455L864.5 442.5L926.5 456L1001 443ZM1001 443V421L1111 402.5L1283.5 472.5V457.5L1111 381.5L1001 402.5V443Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "28",
        floorGroup: 11,
      },
      {
        id: 25,
        poligon1:
          "M864.5 441.5L793 454V439L864.5 426L926.5 441.5L1001 425.5V401.5V383L1111 361L1283.5 443V456.5L1111 380.5L1001 401.5V425.5V442L926.5 455L864.5 441.5Z",
        poligon2:
          "M1001 425.5V442L926.5 455L864.5 441.5L793 454V439L864.5 426L926.5 441.5L1001 425.5ZM1001 425.5V401.5L1111 380.5L1283.5 456.5V443L1111 361L1001 383V425.5Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "29",
        floorGroup: 11,
      },
      {
        id: 26,
        poligon1:
          "M864.5 425L793 438V423.5L864.5 410L926.5 425L1001 410V382V362.5L1111 339L1283.5 426.5V442L1111 360L1001 382V410V424.5L926.5 440.5L864.5 425Z",
        poligon2:
          "M1001 410V424.5L926.5 440.5L864.5 425L793 438V423.5L864.5 410L926.5 425L1001 410ZM1001 410V382L1111 360L1283.5 442V426.5L1111 339L1001 362.5V410Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "30",
        floorGroup: 11,
      },
      {
        id: 27,
        poligon1:
          "M864.5 409L793 422.5V408L864.5 392L926.5 409L1001 393.5V361.5V343L1111 318L1283.5 411.5V425.5L1111 338L1001 361.5V393.5V409L926.5 424L864.5 409Z",
        poligon2:
          "M1001 393.5V409L926.5 424L864.5 409L793 422.5V408L864.5 392L926.5 409L1001 393.5ZM1001 393.5V361.5L1111 338L1283.5 425.5V411.5L1111 318L1001 343V393.5Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "31",
        floorGroup: 12,
      },
      {
        id: 28,
        poligon1:
          "M864.5 391L793 407V392.5L864.5 376.5L926.5 392.5L1001 376.5V342V322.5L1111 295.5L1283.5 394.5V410.5L1111 317L1001 342V376.5V392.5L926.5 408L864.5 391Z",
        poligon2:
          "M1001 376.5V392.5L926.5 408L864.5 391L793 407V392.5L864.5 376.5L926.5 392.5L1001 376.5ZM1001 376.5V342L1111 317L1283.5 410.5V394.5L1111 295.5L1001 322.5V376.5Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "32",
        floorGroup: 12,
      },
      {
        id: 29,
        poligon1:
          "M864.5 375.5L793 391.5V377L864.5 358.5L926.5 377L1001 360V321.5V303L1111.5 273.5L1283.5 379.5V393.5L1111.5 294.5L1001 321.5V360V375.5L926.5 391.5L864.5 375.5Z",
        poligon2:
          "M1001 360V375.5L926.5 391.5L864.5 375.5L793 391.5V377L864.5 358.5L926.5 377L1001 360ZM1001 360V321.5L1111.5 294.5L1283.5 393.5V379.5L1111.5 273.5L1001 303V360Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "33",
        floorGroup: 12,
      },
      {
        id: 30,
        poligon1:
          "M864.5 357.5L793 376V362L864.5 342.5L926.5 363L1001 343.5V302V284L1111.5 252.5L1283.5 365.5V378.5L1111.5 272.5L1001 302V343.5V359L926.5 376L864.5 357.5Z",
        poligon2:
          "M1001 343.5V359L926.5 376L864.5 357.5L793 376V362L864.5 342.5L926.5 363L1001 343.5ZM1001 343.5V302L1111.5 272.5L1283.5 378.5V365.5L1111.5 252.5L1001 284V343.5Z",
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "34",
        floorGroup: 12,
      },
      // 1PN
      {
        id: 31,
        poligon1:
          "M864.5 341.5L793 361V345.5L864.5 325.5L926.5 347L1001 326.5V283V264L1111.5 231L1283.5 349V364.5L1111.5 251.5L1001 283V326.5V342.5L926.5 362L864.5 341.5Z",
        poligon2:
          "M1001 326.5V342.5L926.5 362L864.5 341.5L793 361V345.5L864.5 325.5L926.5 347L1001 326.5ZM1001 326.5V283L1111.5 251.5L1283.5 364.5V349L1111.5 231L1001 264V326.5Z",
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "35",
        floorGroup: 12,
      },
      {
        id: 32,
        poligon1:
          "M864.5 324.5L793 344.5V330L864.5 308L926.5 330L1001 310V263V243.5L1111.5 209.5L1283.5 333V348L1111.5 230L1001 263V310V325.5L926.5 346L864.5 324.5Z",
        poligon2:
          "M1001 310V325.5L926.5 346L864.5 324.5L793 344.5V330L864.5 308L926.5 330L1001 310ZM1001 310V263L1111.5 230L1283.5 348V333L1111.5 209.5L1001 243.5V310Z",
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "36",
        floorGroup: 12,
      },
      {
        id: 33,
        poligon1:
          "M864.5 307L793 329V314.5L864.5 292.5L926.5 316.5L1001 293.5V242.5V224.5L1111.5 188.5L1283.5 318V332L1111.5 208.5L1001 242.5V293.5V309L926.5 329L864.5 307Z",
        poligon2:
          "M1001 293.5V309L926.5 329L864.5 307L793 329V314.5L864.5 292.5L926.5 316.5L1001 293.5ZM1001 293.5V242.5L1111.5 208.5L1283.5 332V318L1111.5 188.5L1001 224.5V293.5Z",
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "37",
        floorGroup: 12,
      },
      {
        id: 34,
        poligon1:
          "M864.5 291.5L793 313.5V298.5L864.5 275.5L926.5 300.5L1001 277.5V223.5V204.5L1111.5 167L1283.5 302.5V317L1111.5 187.5L1001 223.5V277.5V292.5L926.5 315.5L864.5 291.5Z",
        poligon2:
          "M1001 223.5L1111.5 187.5L1283.5 317V302.5L1111.5 167L1001 204.5V223.5ZM1001 223.5V277.5M1001 277.5V292.5L926.5 315.5L864.5 291.5L793 313.5V298.5L864.5 275.5L926.5 300.5L1001 277.5Z",
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "38",
        floorGroup: 12,
      },
      {
        id: 35,
        poligon1:
          "M864.5 274.5L793 297.5V282L864.5 259L926.5 286L1001 261V203.5V187L1111.5 145L1283.5 288.5V301.5L1111.5 166L1001 203.5V261V276.5L926.5 299.5L864.5 274.5Z",
        poligon2:
          "M1001 261V276.5L926.5 299.5L864.5 274.5L793 297.5V282L864.5 259L926.5 286L1001 261ZM1001 261V203.5L1111.5 166L1283.5 301.5V288.5L1111.5 145L1001 187V261Z",
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "39",
        floorGroup: 12,
      },
    ],
  },
  {
    id: 45,
    title: "Risa",
    path: [
      {
        id: 1,
        poligon1:
          "M699.5 867V851L846.5 889.5L862 892.5L909 891L962 874.5V868L1065.5 836.5L1082 837.5L1091 836.5L1169 850.5L1211 836.5V850.5L1169 865.5L1091 849.5L1082 850.5L1065.5 849L962 882V891L909 908.5L862 909.5L846.5 907.5L699.5 867Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "4",
        floorGroup: 1,
      },
      {
        id: 2,
        poligon1:
          "M699.5 835.5V850L847 890.5L864 893L910 890.5L961 874.5V867.5L1065.5 836L1082 837L1093 836L1168.5 850L1211 836V821.5L1168.5 834L1093 822L1081.5 823L1065.5 821.5L961 850V856.5L910 872L864 873.5L847 870.5L699.5 835.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "5",
        floorGroup: 1,
      },
      {
        id: 3,
        poligon1:
          "M699.5 821V834.5L846.5 870L864.5 873L909.5 871.5L961 856V849L1065.5 820.5L1082 822.5L1092 821.5L1169 833.5L1211 821V809L1169 818.5L1092 807L1082 808L1065.5 807L961 832.5V837L909.5 854L864.5 855.5L846.5 853L699.5 821Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "6",
        floorGroup: 1,
      },
      {
        id: 4,
        poligon1:
          "M699.5 805.5V820L847 853L865 855.5L910 854L961.5 836.5V832L1065.5 806L1081.5 807L1092 806L1168.5 817.5L1211 808V794.5L1168.5 803L1092 793.5L1081.5 794L1065.5 793.5L961.5 814.5V821L910 835L865 837L847 835L699.5 805.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "7",
        floorGroup: 1,
      },
      {
        id: 5,
        poligon1:
          "M699.5 789.5V804.5L846.5 834.5L867.5 837L910 834.5L961 820.5V814L1065.5 792.5L1081.5 793L1092 792.5L1168.5 802.5L1211 794V781L1168.5 788L1092 779L1081.5 779.5L1065.5 779L961 798V805.5L910 816.5L867.5 818L846.5 814.5L699.5 789.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "8",
        floorGroup: 1,
      },
      {
        id: 6,
        poligon1:
          "M699.5 775V788.5L847 814L867.5 817.5L910.5 815.5L961 804.5V798L1065.5 778.5L1082 779.5L1092 778.5L1169.5 788L1211.5 780.5V766L1169.5 773.5L1092 765L1082 766L1065.5 765L961 782.5V789.5L910.5 798L867.5 800L847 798L699.5 775Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "9",
        floorGroup: 1,
      },
      {
        id: 7,
        poligon1:
          "M699.5 759V774L846.5 797.5L867.5 799.5L913 797.5L960.5 789V782.5L1065 764.5L1081.5 765.5L1092 764.5L1169 773L1211.5 765.5V751L1169 757.5L1092 751L1081.5 751.5L1065 751L960.5 767V773L913 780.5L867.5 781.5L846.5 779.5L699.5 759Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "10",
        floorGroup: 1,
      },
      {
        id: 8,
        poligon1:
          "M699.5 743.5V758L847.5 779L868.5 780.5H910.5L960 772.5V766L1065 750.5L1081.5 751L1092.5 750.5L1168 757L1211.5 750.5V736L1168 741L1092.5 736L1081.5 736.5L1065 736L961 750V755.5L910.5 763H868.5L847.5 762L699.5 743.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "11",
        floorGroup: 2,
      },
      {
        id: 9,
        poligon1:
          "M699.5 727V742.5L847 762.5H911.5L960.5 755V749.5L1065 735H1092L1168.5 741L1211.5 736V723L1168.5 726.5L1092 721.5H1065L960.5 732.5V737.5L911.5 743.5H847L699.5 727Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "12",
        floorGroup: 3,
      },
      {
        id: 10,
        poligon1:
          "M699.5 712.5V726L847 743H910L959.5 737V732L1065 720.5H1092.5L1168.5 726L1211.5 722.5V708.5L1168.5 711.5L1092.5 707H1065L961 714.5V721.5L910 725.5L847 724.5L699.5 712.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "13",
        floorGroup: 4,
      },
      {
        id: 11,
        poligon1:
          "M699.5 697V711.5L847.5 723.5L910 725L961 720.5V714L1065 706.5H1092L1168.5 711L1211.5 708V694L1168.5 696.5L1092 693.5H1065L961 699V704L910 707.5H866.5L699.5 697Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "14",
        floorGroup: 5,
      },
      {
        id: 12,
        poligon1:
          "M699.5 681.5V696L866.5 707H910.5L960.5 703V698.5L1065.5 693H1092L1168 697L1211.5 694V679.5L1168 681L1092 679.5H1065.5L960.5 683.5V686L910.5 689H866.5L699.5 681.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "15",
        floorGroup: 6,
      },
      {
        id: 13,
        poligon1:
          "M699.5 666V680.5L864 688H909L960 685V682.5L1065 678.5H1092L1168.5 680.5L1211.5 679.5V665.5L1168.5 666.5L1092 665H1065L961.5 666.5V668L909 669.5H847L699.5 666Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "16",
        floorGroup: 6,
      },
      {
        id: 14,
        poligon1:
          "M699.5 650.5V665L869 669L961 667.5V666L1065 664L1169 665.5L1211.5 664.5V651L1169 651.5L1065 650.5L869 652.5L699.5 650.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "17",
        floorGroup: 7,
      },
      {
        id: 15,
        poligon1:
          "M699.5 635V649.5L873 651.5H910L1065 649.5L1169 650.5H1211.5V635H1065H910H699.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "18",
        floorGroup: 7,
      },
      {
        id: 16,
        poligon1:
          "M699.5 607.5V634H867H911H960.5H1063.5H1169L1211.5 635V611.5L1169 609.5H1063.5L960.5 605.5L911 602.5H867L699.5 607.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "19",
        floorGroup: 8,
      },
      {
        id: 17,
        poligon1:
          "M701 580.5V563L867 550.5H910L960 555.5V558.5L1064 569H1092L1169 566L1211.5 570.5V585L1169 580.5L1092 585H1064L960 575.5V572.5L910 569H867L701 580.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "21",
        floorGroup: 9,
      },
      {
        id: 18,
        poligon1:
          "M701 548V563L867.5 550H909.5L960 555.5V558L1064 568.5H1092.5L1168.5 565.5L1211.5 570V556.5L1168.5 550.5L1092.5 554.5V557L1081.5 556.5H1064.5L960 543V539.5L909.5 531.5H867.5L701 548Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "22",
        floorGroup: 9,
      },
      {
        id: 19,
        poligon1:
          "M867.5 530.5L701 547.5V530.5L867.5 513H909L961 521.5V525L1064 541.5H1081L1092 543.5V540L1168 535L1211.5 543.5V556L1168 550L1092 553.5V556L1064 555.5L960.5 542.5V538.5L909 530.5H867.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "23",
        floorGroup: 9,
      },
      {
        id: 20,
        poligon1:
          "M701 516.5V530.5L867 512.5H910L961 521V525L1064 541H1081L1092 543.5V539.5L1168 534.5L1211.5 543V529.5L1168 519.5L1092 525.5V529.5L1081 527.5H1064L961 509V505.5L910 495H867L701 516.5Z",
        poligon2: null,
        dttt: 74.2,
        dtttuong: 82.1,
        floor: "24",
        floorGroup: 9,
      },
      {
        id: 21,
        poligon1:
          "M701 501.5V516.5L867 494H909.5L961.5 505V508.5L1064 527H1081.5L1092 529V525L1168.5 519L1211.5 529V514.5L1168.5 504L1092 510.5V514.5L1081.5 512.5H1064L960.5 493V488L909.5 476H867L701 501.5Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "25",
        floorGroup: 9,
      },
      {
        id: 22,
        poligon1:
          "M701 486V500.5L864 475H910L961 487.5V492L1064 512.5H1081L1092 514V510L1168.5 503.5L1211.5 514V500.5L1168.5 489.5L1092 497V500.5L1081 499L1064 498.5L961 476.5V470L910 458H864L701 486Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "26",
        floorGroup: 10,
      },
      {
        id: 23,
        poligon1:
          "M701 470.5V485L848 460L867.5 457H909.5L961.5 469.5V475.5L1064.5 498.5L1080.5 499L1092 500.5V496.5L1168.5 489L1211 500.5V487L1168.5 473L1092 481.5V487L1081.5 481.5L1064.5 484.5L961.5 459V452.5L909.5 439.5H867.5L848 441.5L701 470.5Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "27",
        floorGroup: 11,
      },
      {
        id: 24,
        poligon1:
          "M701 454.5V469.5L847.5 441L867.5 439H910L961.5 452V458.5L1065 484.5L1081 481L1092.5 487V481L1168.5 472.5L1211 486.5V473L1168.5 457.5L1092.5 467.5V471.5L1081 467.5L1065 470L961.5 442.5V436L910 422H867.5L847.5 423.5L701 454.5Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "28",
        floorGroup: 12,
      },
      {
        id: 25,
        poligon1:
          "M701 440V453.5L847 423L867.5 421.5H910L961 435.5V442L1065 469.5L1081 467L1092.5 470.5V467L1168.5 457L1211 472.5V458L1168.5 441L1092.5 453.5V458L1081.5 454.5L1065 456.5L961 426.5V418.5L910 403H867.5L847 405.5L701 440Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "29",
        floorGroup: 13,
      },
      {
        id: 26,
        poligon1:
          "M701 423.5V439L847 404.5L864 402.5H910L961.5 418.5V426L1065 456L1081.5 453.5L1092.5 457.5V453L1168.5 440.5L1211 457.5V444L1168.5 426.5L1092.5 439.5V444L1081.5 439.5L1065 442L961.5 410V400L910 383.5H864L847 387L701 423.5Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "30",
        floorGroup: 13,
      },
      {
        id: 27,
        poligon1:
          "M701 408V422.5L846.5 386.5L864 382.5H909.5L961 399.5V409.5L1065 441L1081.5 439L1092 443.5V439L1168.5 426.5L1211 443.5V429L1168.5 410.5L1092 425V430.5L1081.5 426.5L1065 429L961 393.5V382.5L909.5 366H864L846.5 368L701 408Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "31",
        floorGroup: 14,
      },
      {
        id: 28,
        poligon1:
          "M701 393V407L846 367.5L863.5 365L909.5 366L962 382.5V393L1065 428.5L1081 426L1092 430V424.5L1168.5 410L1211 428.5V415L1168.5 395.5L1092 411V415.5L1081 412.5L1065.5 415L962 377V366L909.5 349H862.5L846 353L701 393Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "32",
        floorGroup: 14,
      },
      {
        id: 29,
        poligon1:
          "M701 377V392L863 348H910.5L961 366V376.5L1065.5 414.5L1081 412L1092 415V410L1168.5 394.5L1211 414.5V400.5L1168.5 380L1092 397V402.5L1081 398L1065.5 400.5L961 361V348L910.5 329H863L701 377Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "33",
        floorGroup: 14,
      },
      {
        id: 30,
        poligon1:
          "M701 361V376L865 329H910L961.5 348V360.5L1065.5 400L1081 397.5L1091.5 401.5V396.5L1168.5 379.5L1211 400V386L1168.5 364L1091.5 382V388L1081 383L1065.5 385.5L961.5 343.5V332L910 310.5H865L701 361Z",
        poligon2: null,
        dttt: 27.3,
        dtttuong: 31.0,
        floor: "34",
        floorGroup: 14,
      },
      {
        id: 31,
        poligon1:
          "M865 310L701 360V344.5L865 293H910L962 314V328L1065 371L1081 368.5L1091.5 373.5V368.5L1168.5 349.5L1211 372.5V385.5L1168.5 363.5L1091.5 381.5V387.5L1081 382.5L1065 385L962 343V331.5L910 310H865Z",
        poligon2: null,
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "35",
        floorGroup: 14,
      },
      {
        id: 32,
        poligon1:
          "M864.5 292.5L701 343.5V329L864.5 274H910.5L962.5 297V310.5L1065 357L1081 354.5L1091.5 359.5V354.5L1168.5 334.5L1211 358V372L1168.5 349L1091.5 367.5V372.5L1081 368L1065 370.5L962.5 327.5V313.5L910.5 292.5H864.5Z",
        poligon2: null,
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "36",
        floorGroup: 14,
      },
      {
        id: 33,
        poligon1:
          "M701 314V328L863.5 273H909.5L961 296V310L1064.5 356L1081 353.5L1091.5 358.5V353.5L1168.5 334L1211 357.5V344.5L1168.5 319L1091.5 339V345.5L1081 340.5L1064.5 343L961 293V277.5L909.5 255H863.5L701 314Z",
        poligon2: null,
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "37",
        floorGroup: 14,
      },
      {
        id: 34,
        poligon1:
          "M701 299V313.5L863 255.5H909.5L960.5 278V292.5L1064 342L1081.5 339.5L1091.5 344.5V338.5L1168.5 318.5L1211 344V330.5L1168.5 304L1091.5 324V330.5L1081.5 325.5L1064 328L960.5 275.5V262L909.5 236.5H864.5L849.5 240.5L701 299Z",
        poligon2: null,
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "38",
        floorGroup: 14,
      },
      {
        id: 35,
        poligon1:
          "M701 281.5V298L849.5 240L863.5 236.5H910L960.5 261.5V275.5L1063.5 327L1081.5 324.5L1091.5 330V323.5L1168.5 303L1211 330V315L1168.5 288.5L1091.5 309V317.5L1081.5 311L1063.5 312.5L960.5 259V245.5L910 219.5H863.5L848.5 221.5L701 281.5Z",
        poligon2: null,
        dttt: 46.3,
        dtttuong: 50.9,
        floor: "39",
        floorGroup: 14,
      },
    ],
  },
];

export const apartmentLayout = [
  {
    id: 1,
    text: "1 Phòng Ngủ",
    LayoutImg: layout_1pn_1wc,
    br: 1,
    wc: 1,
    // frameUrl
  },
  {
    id: 2,
    text: "2 Phòng Ngủ, 1 WC",
    LayoutImg: layout_2pn_1wc,
    br: 2,
    wc: 1,
  },
  {
    id: 3,
    text: "2 Phòng Ngủ, 2 WC",
    LayoutImg: layout_2pn_2wc,
    br: 2,
    wc: 2,
  },
  {
    id: 4,
    text: "3 Phòng Ngủ",
    LayoutImg: layout_3pn_2wc,
    br: 3,
    wc: 2,
  },
  {
    id: 5,
    text: "Garden Villa",
    LayoutImg: layout_3pn_2wc,
    br: 3,
    wc: 3,
  },
];

// Layer 4
export const plan_filter = [
  // Toà Zenia
  {
    id: 75,
    label: "Zenia",
    itemsApartmentFilter: [
      {
        id: 1,
        label: "4-10",
        img: zn_4_10,
        svg: [
          {
            id: 1,
            code: "01",
            poligon: "M848.447 413.5H781.317V511.5H848.447V413.5Z",
            apartmentLayout: 1,
            nfa: 55.21,
            nsa: 48.23,
          },
          {
            id: 2,
            code: "02",
            poligon:
              "M927.915 520V452H915.576V413H848.446V511H881.024V520H927.915Z",
            apartmentLayout: 3,
            nfa: 66.28,
            nsa: 59.0,
          },
          {
            id: 3,
            code: "03",
            poligon:
              "M881.025 530V521H928.41V589H915.576V628H847.46V530H881.025Z",
            apartmentLayout: 3,
            nfa: 66.14,
            nsa: 58.98,
          },
          {
            id: 4,
            code: "04",
            poligon: "M781.317 628.5V530.5H847.459V628.5H781.317Z",
            apartmentLayout: 1,
            nfa: 53.97,
            nsa: 48.73,
          },
          {
            id: 5,
            code: "05",
            poligon: "M754.664 691V623.5H715.67V607.5H657.919V691H754.664Z",
            apartmentLayout: 2,
            nfa: 62.63,
            nsa: 56.06,
          },
          {
            id: 6,
            code: "06",
            poligon: "M658.412 692V757.5H754.664V692H658.412Z",
            apartmentLayout: 1,
            nfa: 53.94,
            nsa: 48.78,
          },
          {
            id: 7,
            code: "07",
            poligon: "M657.919 855.5V789.5H755.158V855.5H657.919Z",
            apartmentLayout: 1,
            nfa: 53.82,
            nsa: 48.67,
          },
          {
            id: 8,
            code: "08",
            poligon: "M657.425 856.5V939H755.157V856.5H657.425Z",
            apartmentLayout: 3,
            nfa: 67.36,
            nsa: 59.63,
          },
          {
            id: 9,
            code: "09",
            poligon: "M542.417 938.5V857H639.162V938.5H542.417Z",
            apartmentLayout: 3,
            nfa: 67.77,
            nsa: 59.68,
          },
          {
            id: 10,
            code: "10",
            poligon: "M536.494 774.5V841H574.501V855.5H638.669V774.5H536.494Z",
            apartmentLayout: 3,
            nfa: 66.45,
            nsa: 59.4,
          },
          {
            id: 11,
            code: "11",
            poligon: "M536 773.5V706.5H574.501V692H638.668V773.5H536Z",
            apartmentLayout: 3,
            nfa: 66.25,
            nsa: 59.53,
          },
          {
            id: 12,
            code: "12",
            poligon: "M536.494 609.5V675.5H574.501V691H638.669V609.5H536.494Z",
            apartmentLayout: 3,
            nfa: 66.25,
            nsa: 59.53,
          },
          {
            id: 13,
            code: "13",
            poligon: "M536.494 608.5V541H575.488V526.5H638.669V608.5H536.494Z",
            apartmentLayout: 3,
            nfa: 66.45,
            nsa: 59.61,
          },
          {
            id: 14,
            code: "14",
            poligon:
              "M536.494 443.5V510.5H575.488V525.5H639.162V443.5H536.494Z",
            apartmentLayout: 3,
            nfa: 66.45,
            nsa: 59.61,
          },
          {
            id: 15,
            code: "15",
            poligon: "M574.007 375.5V360.5H639.162V443H536V375.5H574.007Z",
            apartmentLayout: 3,
            nfa: 66.25,
            nsa: 59.53,
          },
          {
            id: 16,
            code: "16",
            poligon: "M536 344.5V277H639.655V359.5H574.007V344.5H536Z",
            apartmentLayout: 3,
            nfa: 66.72,
            nsa: 60.18,
          },
          {
            id: 17,
            code: "17",
            poligon: "M545.872 245V140.5H638.668V245H545.872Z",
            apartmentLayout: 4,
            nfa: 82.65,
            nsa: 73.01,
          },
          {
            id: 18,
            code: "18",
            poligon: "M657.919 227V140H754.664V227H657.919Z",
            apartmentLayout: 3,
            nfa: 71.81,
            nsa: 63.25,
          },
          {
            id: 19,
            code: "19",
            poligon: "M657.919 228V294H755.158V228H657.919Z",
            apartmentLayout: 1,
            nfa: 53.55,
            nsa: 48.22,
          },
          {
            id: 20,
            code: "20",
            poligon: "M657.919 295V360H754.664V295H657.919Z",
            apartmentLayout: 1,
            nfa: 53.55,
            nsa: 48.22,
          },
          {
            id: 21,
            code: "21",
            poligon: "M657.919 360.5V443.5H711.227V428H754.664V360.5H657.919Z",
            apartmentLayout: 2,
            nfa: 61.92,
            nsa: 55.54,
          },
          {
            id: 22,
            code: "01",
            poligon: "M1078.46 530.5H1160.89V589H1145.1V628.5H1078.46V530.5Z",
            apartmentLayout: 2,
            nfa: 62.72,
            nsa: 55.93,
          },
          {
            id: 23,
            code: "02",
            poligon:
              "M1078.46 530.5H1046.87V554.5H1012.82V628.5H1078.46V530.5Z",
            apartmentLayout: 1,
            nfa: 46.59,
            nsa: 41.52,
          },
          {
            id: 24,
            code: "03",
            poligon:
              "M1027.62 520.5H932.853V590H945.192V628.5H1012.32V554H1046.38V530.5H1027.62V520.5Z",
            apartmentLayout: 3,
            nfa: 76.91,
            nsa: 69.16,
          },
          {
            id: 25,
            code: "04",
            poligon:
              "M932.853 520H1027.13V510H1046.38V487H1013.31V413H944.699V452H932.853V520Z",
            apartmentLayout: 3,
            nfa: 76.91,
            nsa: 69.16,
          },
          {
            id: 26,
            code: "05",
            poligon: "M1078.46 510.5V412.5H1013.8V486.5H1046.87V510.5H1078.46Z",
            apartmentLayout: 1,
            nfa: 46.73,
            nsa: 41.54,
          },
          {
            id: 27,
            code: "06",
            poligon: "M1078.46 511H1144.6V412.5H1078.46V511Z",
            apartmentLayout: 1,
            nfa: 54.35,
            nsa: 48.23,
          },
          {
            id: 28,
            code: "07",
            poligon: "M1209.76 427H1171.26V360H1268V442.5H1209.76V427Z",
            apartmentLayout: 2,
            nfa: 62.98,
            nsa: 56.73,
          },
          {
            id: 29,
            code: "08",
            poligon: "M1268 327.5H1171.75V223H1268V327.5Z",
            apartmentLayout: 4,
            nfa: 85.55,
            nsa: 76.02,
          },
          {
            id: 30,
            code: "09",
            poligon: "M1287.25 310.5V222.5H1384V310.5H1287.25Z",
            apartmentLayout: 3,
            nfa: 71.81,
            nsa: 63.55,
          },
          {
            id: 31,
            code: "10",
            poligon: "M1384 376.5H1287.25V311.5H1384V376.5Z",
            apartmentLayout: 1,
            nfa: 53.55,
            nsa: 48.22,
          },
          {
            id: 32,
            code: "11",
            poligon: "M1384 442.5H1287.25V377H1384V442.5Z",
            apartmentLayout: 1,
            nfa: 54.17,
            nsa: 48.32,
          },
          {
            id: 33,
            code: "12",
            poligon: "M1287.25 525V443.5H1345.5V458H1384V525H1287.25Z",
            apartmentLayout: 2,
            nfa: 62.32,
            nsa: 55.76,
          },
          {
            id: 34,
            code: "13",
            poligon: "M1345.5 608.5H1287.75V527L1384 526V594H1345.5V608.5Z",
            apartmentLayout: 2,
            nfa: 62.02,
            nsa: 55.66,
          },
          {
            id: 35,
            code: "14",
            poligon: "M1384 690.5H1287.25V609.5H1345.5V624H1384V690.5Z",
            apartmentLayout: 2,
            nfa: 62.02,
            nsa: 55.66,
          },
          {
            id: 36,
            code: "15",
            poligon: "M1345.5 773.5H1287.25V691.5H1384V758.5H1345.5V773.5Z",
            apartmentLayout: 2,
            nfa: 62.02,
            nsa: 55.66,
          },
          {
            id: 37,
            code: "16",
            poligon: "M1384 856H1287.25V773.5H1345.5V788.5H1384V856Z",
            apartmentLayout: 2,
            nfa: 62.02,
            nsa: 55.66,
          },
          {
            id: 38,
            code: "17",
            poligon: "M1384 938.5H1287.25V857.5H1384V938.5Z",
            apartmentLayout: 3,
            nfa: 67.25,
            nsa: 59.19,
          },
          {
            id: 39,
            code: "18",
            poligon: "M1171.26 939V857H1268.5V939H1171.26Z",
            apartmentLayout: 3,
            nfa: 67.25,
            nsa: 59.19,
          },
          {
            id: 40,
            code: "19",
            poligon: "M1171.26 855.5V790H1268.5V855.5H1171.26Z",
            apartmentLayout: 1,
            nfa: 53.94,
            nsa: 48.78,
          },
          {
            id: 41,
            code: "20",
            poligon: "M1268.5 757.5H1171.75V691.5H1268.5V757.5Z",
            apartmentLayout: 1,
            nfa: 53.94,
            nsa: 48.78,
          },
          {
            id: 42,
            code: "21",
            poligon: "M1171.26 690.5V623.5H1209.76V608.5H1268.5V690.5H1171.26Z",
            apartmentLayout: 2,
            nfa: 62.73,
            nsa: 56.14,
          },
        ],
      },
    ],
    disable: false,
  },
];

// Layer 5
// export const house_filter = [
//   {
//     id: 1,
//     icon: mainUtils_icon,
//     slug: "1pn",
//     label: "Căn hộ 1PN",
//     frameUrl: "../file360/1pn/index.html",
//   },
//   {
//     id: 2,
//     icon: mainUtils_icon,
//     slug: "2pn",
//     label: "Căn hộ 2PN",
//     frameUrl: "../file360/2pn/index.html",
//   },
// ];
