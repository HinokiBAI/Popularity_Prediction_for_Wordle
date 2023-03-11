function getVirtulData(year, datas) {
  year = year || '2017';
  var date = +echarts.number.parseDate(year + '-01-07');
  var end = +echarts.number.parseDate(+year + 1 + '-01-01');
  var dayTime = 3600 * 24 * 1000;
  var data = [];
  i = 0;
  for (var time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      // Math.floor(Math.random() * 10000)
      datas[i]*12000
    ]);
    i = i+1;
  }
  return data;
}

var datas = [0.5595760837944036,
 0.29824209172937705,
 0.39768057779926264,
 0.8266381165516601,
 0.3222601589962004,
 0.09963992980104205,
 0.5901688974106322,
 0.48105268892068054,
 0.048410058458070206,
 0.15415999693286286,
 0.015357679404868858,
 0.5786314413226878,
 0.4088802855772964,
 0.2958776880182368,
 0.36326527712536916,
 0.2867036329029391,
 0.12539720651178454,
 0.18081039963245996,
 0.23349790337122325,
 0.24187016713175427,
 0.31957306254847684,
 0.14119212617336802,
 0.1711346291093412,
 0.3717376258441032,
 0.08008014669100282,
 0.07703124714266472,
 0.028352953313126948,
 0.011370957812398714,
 0.3403038659490241,
 0.07594293030191189,
 0.21515988661611046,
 0.38852820623669043,
 0.2750275161512979,
 0.00483832157743392,
 0.25378154597986213,
 0.09014891356706826,
 0.07439579495487912,
 0.1659614684754451,
 0.24877767996314307,
 0.01770453516449429,
 0.4159828508069566,
 0.7875545764695758,
 0.16470902113526328,
 0.08981702513878022,
 0.0529623954113465,
 0.24537428438751122,
 0.2821382877036027,
 0.29203064456024264,
 0.05564443267485857,
 0.08265477203245394,
 0.02227666324177715,
 0.007380128548261683,
 0.12416115121049892,
 0.18155199233678235,
 0.1959764317002836,
 0.48468680578889967,
 0.3097022517350319,
 0.14066672271798666,
 0.0,
 0.14587284518084895,
 0.07651092833278916,
 0.0922970518418038,
 0.20996318862620256,
 0.4859988254574151,
 0.19127665403281585,
 0.0876200903120402,
 0.2340658071797396,
 0.18737163024562092,
 0.7851820049052444,
 0.1628031910152408,
 0.40943263876505337,
 0.02324587311511351,
 0.29225969461064955,
 0.22894183101757923,
 0.05859372081014459,
 0.19766537627156067,
 0.34185408665536376,
 0.01255858511863648,
 0.2624818206128371,
 0.12890139442784235,
 0.44952802627678506,
 0.1560535179386376,
 0.46124327086579225,
 0.17738069505757986,
 0.18303161142832136,
 0.6674838337662135,
 0.1074391115827723,
 0.18599800534549935,
 0.0808108168930046,
 0.002195205944717291,
 0.4510324911648232,
 0.14087310374814538,
 0.17177365256528068,
 0.40665680503393,
 0.1202776339870712,
 0.18430242268739905,
 0.235229876765998,
 0.34630131029748007,
 0.5544767112043006,
 0.033312655123429354,
 0.13806377426936864,
 0.08705774312744562,
 0.183852035839371,
 0.11256308247672438,
 0.48559109570221193,
 0.6740097473831856,
 0.05277450850983718,
 0.17548929838342558,
 0.306137429623362,
 0.11509646048023453,
 0.3056229205962875,
 0.4510423022825804,
 1.0,
 0.011668396591288797,
 0.5116940911180684,
 0.3115706793385939,
 0.5539032451593721,
 0.6890315971166978,
 0.34551224974508565,
 0.06702566237514815,
 0.07279625903062248,
 0.5022379428939876,
 0.5309783195912069,
 0.17242265375699928,
 0.13567474168236784,
 0.06705995740538435,
 0.16202433911850908,
 0.24772781121692325,
 0.04912879866778515,
 0.09130537701186393,
 0.11818303162657849,
 0.1156068464365905,
 0.040339930916656414,
 0.12503282751573785,
 0.043877303875722064,
 0.06054200419178912,
 0.13099150218026726,
 0.028503073790122378,
 0.02002495243500125,
 0.02804434814271037,
 0.1710998908597843,
 0.15463551446540225,
 0.1843291963157588,
 0.07799127537553151,
 0.02035239682984114,
 0.0871703655236857,
 0.1727155830776426,
 0.33477907375177235,
 0.07313899198071573,
 0.08096734286491619,
 0.02366381473752955,
 0.09074081145148843,
 0.045609481951522826,
 0.22820427657358328,
 0.1790081410533012,
 0.22687486173229257,
 0.1457634725751475,
 0.2797931677560645,
 0.19338570949200334,
 0.1303281592891294,
 0.06147672943064278,
 0.4300351698980734,
 0.4008072977672483,
 0.26276892947265895,
 0.1457961578330155,
 0.325373394329022,
 0.28005175494431067,
 0.13407666453980974,
 0.2673389775102181,
 0.23522206910078233,
 0.13972666826912708,
 0.038765174129728935,
 0.09937920956939003,
 0.08819808971073279,
 0.1748523555591926,
 0.3572390369432581,
 0.08596443704782572,
 0.13776461198644535,
 0.11799522260108566,
 0.15897922580301158,
 0.24680775020431894,
 0.038205243731392204,
 0.24776636367424107,
 0.3457366890111216,
 0.08322188149548133,
 0.3692207709687091,
 0.039070327738816975,
 0.3823131365214001,
 0.09120451008965011,
 0.03263784710626683,
 0.057842816918061875,
 0.18938271809557405,
 0.19942005208432953,
 0.1655744074346244,
 0.21937156082355308,
 0.25336995593687917,
 0.4684627259317557,
 0.2080524785601149,
 0.040580075360959665,
 0.003959709692208821,
 0.055792735018526426,
 0.1516884471241698,
 0.205863295634155,
 0.03190816083202323,
 0.13151667471521367,
 0.19208845731508814,
 0.1366462310698071,
 0.2461594882534591,
 0.08420235883988078,
 0.008815519571044374,
 0.10445768350006618,
 0.19667011698465003,
 0.05416871287363086,
 0.05311144870441084,
 0.10341455446772288,
 0.025751787515592522,
 0.2469074631741812,
 0.08315580586825377,
 0.3115589142634076,
 0.28645347615415634,
 0.02100648862625241,
 0.053944421861365215,
 0.06830534710912955,
 0.07795327598222469,
 0.3045245103260971,
 0.2007803349341995,
 0.020548171623511784,
 0.18971592687881197,
 0.012192708647706947,
 0.22495427633291698,
 0.15841262245349597,
 0.3026795166992393,
 0.09249438487273622,
 0.32282996577498163,
 0.0502031119072723,
 0.12957877055431222,
 0.29341348415019014,
 0.291051677529072,
 0.3954663815003252,
 0.07028529290451435,
 0.059439258237039015,
 8.312929008494399e-05,
 0.15295078034389037,
 0.08258305350701896,
 0.017762103013319562,
 0.27316713490149586,
 0.13173013035517453,
 0.11763317901901059,
 0.03228816366322659,
 0.22392672548190135,
 0.09809342989239292,
 0.28918964137888464,
 0.316835565287073,
 0.02597682077815286,
 0.1512356161436749,
 0.3282576566592007,
 0.05948482527416654,
 0.19578410147400788,
 0.254420013936116,
 0.10526965562193691,
 0.3550433285902679,
 0.23275626507945468,
 0.06331941794296729,
 0.032110573982044525,
 0.07839266894643203,
 0.06501556607321063,
 0.29149020575619183,
 0.17056955552293576,
 0.18541065410088037,
 0.02328969343941752,
 0.0949127319214534,
 0.13278616586506253,
 0.32774598701217483,
 0.21451655897638436,
 0.1439698231134102,
 0.1548986493753275,
 0.16160275227450657,
 0.0537677887079332,
 0.19550447736609364,
 0.16088191020631398,
 0.13398571884076946,
 0.005002942781177031,
 0.07048945879717455,
 0.25269490635464004,
 0.02786295857198508,
 0.03967028294448326,
 0.009882321293802352,
 0.04182216748704886,
 0.018123059715834167,
 0.031209561899494417,
 0.0005639113421698387,
 0.10047171412104641,
 0.2418672303142427,
 0.028864419916344915,
 0.2973625713678602,
 0.05338191569041949,
 0.18751707810686302,
 0.09933964069402659,
 0.016521644471109993,
 0.17346736408644547,
 0.22143603732047562,
 0.22076270182223257,
 0.11605282897752472,
 0.5184541152328651,
 0.11169401465815977,
 0.16626980595105664,
 0.1502891066934403,
 0.15431005515862659,
 0.14709239757205445,
 0.04610287132538317,
 0.14879389197921494,
 0.09299959150356625,
 0.20204378287986463,
 0.18715675401853313,
 0.16238604966445805,
 0.49026734397087735,
 0.026350258571366282,
 0.07876199726998152,
 0.3123123708126294,
 0.07899236157183329,
 0.10234407714381737,
 0.39450381738211654,
 0.2252757944241301,
 0.12684901068902857,
 0.08826437693317994,
 0.2650199447303158,
 0.2066551891156375,
 0.3682240632925307,
 0.22280650566220253,
 0.0881100901607737,
 0.18128970268270359,
 0.28489084508688767,
 0.04120680967561522,
 0.15190988844854708,
 0.47494082136280297,
 0.28097873762202197,
 0.31935651713444735,
 0.09795014368688386,
 0.11016433227819507,
 0.13864890813885747,
 0.4282185100478345,
 0.16590009260362704,
 0.08061179630554662,
 0.0629851679758313,
 0.020869629652571265,
 0.4021575038149289,
 0.2111580470734873,
 0.24009462278947563,
 0.2244387782807487,
 0.1794917309036735,
 0.22218979955607526,
 0.8269831436681826,
 0.6060758676513899,
 0.11312619520398504,
 0.0970491000297401,
 0.02163209413933546,
 0.1543835352062625,
 0.11002115042550632]

 var data = getVirtulData(2022, datas)

option = {
  // backgroundColor: '#404a59',

  // title: {
  //   top: 30,
  //   text: '2022年某人每天的步数',
  //   left: 'center',
  //   textStyle: {
  //     color: '#404a59'
  //   }
  // },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '30',
    left: '100',
    data: ['NRR_diff', 'Top 10'],
    textStyle: {
      color: '#404a59'
    }
  },
  calendar: [
    {
      dayLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN' // v5.2.2 及以后版本
      },
      monthLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN' // v5.2.2 及以后版本
      },
      top: 100,
      left: 'center',
      range: ['2022-01-07', '2022-06-30'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#000',
          width: 4,
          type: 'solid'
        }
      },
      yearLabel: {
        formatter: '{start}  1st',
        textStyle: {
          color: '#404a59',
          fontSize: '15'
        }
      },
      itemStyle: {
        color: '#323c48',
        borderWidth: 1,
        borderColor: '#111'
      }
    },
    {
      dayLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN' // v5.2.2 及以后版本
      },
      monthLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN' // v5.2.2 及以后版本
      },
      top: 300,
      left: 'center',
      range: ['2022-07-01', '2022-12-31'],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#000',
          width: 4,
          type: 'solid'
        }
      },
      yearLabel: {
        formatter: '{start}  2nd',
        textStyle: {
          color: '#404a59',
          fontSize: '15'
        }
      },
      itemStyle: {
        color: '#323c48',
        borderWidth: 1,
        borderColor: '#111'
      }
    }
  ],
  series: [
    {
      name: 'NRR_diff',
      type: 'scatter',
      coordinateSystem: 'calendar',
      data: data,
      symbolSize: function (val) {
        return val[1] / 500;
      },
      itemStyle: {
        color: '#ddb926'
      }
    },
    {
      name: 'NRR_diff',
      type: 'scatter',
      coordinateSystem: 'calendar',
      calendarIndex: 1,
      data: data,
      symbolSize: function (val) {
        return val[1] / 500;
      },
      itemStyle: {
        color: '#ddb926'
      }
    },
    {
      name: 'Top 10',
      type: 'effectScatter',
      coordinateSystem: 'calendar',
      calendarIndex: 1,
      data: data
        .sort(function (a, b) {
          return b[1] - a[1];
        })
        .slice(0, 10),
      symbolSize: function (val) {
        return val[1] / 500;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      itemStyle: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      zlevel: 1
    },
    {
      name: 'Top 10',
      type: 'effectScatter',
      coordinateSystem: 'calendar',
      data: data
        .sort(function (a, b) {
          return b[1] - a[1];
        })
        .slice(0, 10),
      symbolSize: function (val) {
        return val[1] / 500;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      itemStyle: {
        color: '#f4e925',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      zlevel: 1
    }
  ]
};
