import fiveSpiceImg from "../images/five-spice.jpg";
import fspbb from "../pictures/fspbb.png";
import fsrd from "../pictures/fsrd.png";
import ccchicken from "../pictures/CCchicken.png";
import ccsoup from "../pictures/CCsoup.png";
import cleggs from "../pictures/CLeggs.png";
import cltea from "../pictures/CLtea.png";
import flbread from "../pictures/FLbread.png";
import flamb from "../pictures/FLlamb.png";
import saclay from "../pictures/SAclay.png";
import saribs from "../pictures/SAribs.png";
import spchicken from "../pictures/SPchicken.png";
import sptofu from "../pictures/SPtofu.png";

const recipes = [
  {
    id: 1,
    title: "The Five Spice Powder（五香粉）",
    category: "Five Spice Powder",
    zh: {
      ingredients: [
        "两汤匙八角",
        "两汤匙茴香籽",
        "两汤匙四川花椒",
        "一汤匙肉桂",
        "一汤匙丁香",
      ],
      steps: [
        "将所有香料放入干锅中，用中火烘烤至香味四溢（约两三分钟），不断搅拌。",
        "完全冷却。",
        "在香料研磨机中研磨成细粉。存放在密封容器中。",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: fiveSpiceImg,
  },

  {
    id: 2,
    title: "Five Spice Braised Pork Belly（五香红烧肉）",
    category: "Five Spice Powder",
    zh: {
      ingredients: [
        "九百克五花肉，切成约四厘米的块。",
        "两汤匙植物油",
        "三片姜",
        "三个葱，仅白色部分",
        "三瓣蒜，捣碎",
        "两汤匙五香粉 （从上面）",
        "第四杯绍兴酒",
        "三汤匙酱油",
        "两汤匙老抽",
        "两汤匙冰糖（或红糖）",
        "五百毫升水或鸡汤",
      ],
      steps: [
        "用纸巾将五花肉拍干。",
        "在大锅中用中高火加热油。",
        "加入姜，葱，蒜和五香粉。搅拌三十秒直至散发出香味。",
        "加入绍兴酒。",
        "加入酱油，糖和水/肉汤。",
        "煮沸，然后将热量降至最低。盖上盖子，煮一个半到两个小时，直到猪肉变软。",
        "取下盖子并加热以减少酱汁直至变稠，大约需要十到十五分钟。",
        "与蒸米饭和蔬菜一起食用。享受！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: fspbb,
  },

  {
    id: 3,
    title: "Five Spice Roasted Duck（五香烤鸭）",
    category: "Five Spice Powder",
    zh: {
      ingredients: [
        "一只全鸭，洗净",
        "两汤匙五香粉 （从上面）",
        "两汤匙盐",
        "一汤匙糖",
        "两茶匙白胡椒",
        "三片姜",
        "三个大葱",
        "两个八角茴香荚",
        "两汤匙蜂蜜与一汤匙热水混合",
      ],
      steps: [
        "将五种香料粉，盐，糖和白胡椒粉混合。",
        "用香料混合物将鸭子内外擦拭。",
        "用生姜、葱和八角填满空腔。",
        "将鸭子不加盖地放入冰箱腌制过夜（或至少六小时），以干燥鸭皮。",
        "将烤箱预热至 220°C。",
        "将鸭子放在烤盘的架子上，鸭胸朝上。",
        "烘烤三十分钟，然后将温度降至 175°C。",
        "继续烤一小时左右 – 每二十分钟用蜂蜜混合物刷牙一次。",
        "当鸭皮酥脆时，鸭子就好了 （还有大腿最粗处的内部温度达到75°C）。",
        "雕刻前休息十五分钟。吃得开心！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: fsrd,
  },

  {
    id: 4,
    title: "Sweet and Fragrant Chinese Spare Ribs (香甜排骨)",
    category: "Star Anise",
    zh: {
      ingredients: [
        "收集一些排骨，切成小块，三-五厘米的小段。",
        "两个八角茴香荚",
        "三汤匙红糖",
        "两汤匙白糖",
        "三汤匙生抽",
        "一汤匙老抽",
        "两汤匙绍兴酒",
        "三片新鲜生姜",
        "四瓣大蒜，捣碎",
        "一杯水",
        "一汤匙植物油",
      ],
      steps: [
        "将排骨煮两三分钟分钟",
        "用中火加热植物油。加入白糖，搅拌直至融化（约2-3分钟)。",
        "烧排骨：将焯过的排骨加入焦糖中，搅拌均匀。",
        "添加芳香剂：加入八角茴香荚、姜片和大蒜。炒三十秒直至香味四溢。",
        "倒入绍兴酒，搅拌均匀。",
        "加入酱油、红糖和水。液体应覆盖大约四分之三的肋骨。",
        "煮沸，然后将热量降至最低。盖上盖子醒40-45分钟。后记，取下盖子，将火调至中高，持续搅拌。",
        "煮好了！如果你要的话，加入葱花和芝麻。",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: saribs,
  },

  {
    id: 5,
    title: "Clay Pot Star Anise Chicken（砂煲八角鸡）",
    category: "Star Anise",
    zh: {
      ingredients: [
        "鸡大腿和鸡腿，带骨",
        "四个八角茴香荚",
        "六朵干香菇，浸泡并切成两半",
        "三片姜",
        "两瓣大蒜，捣碎",
        "两汤匙生抽",
        "一汤匙老抽",
        "两汤匙绍兴酒",
        "一汤匙蚝油",
        "一茶匙芝麻油",
        "一汤匙冰糖",
        "一杯鸡汤",
      ],
      steps: [
        "将鸡肉用1汤匙酱油和一汤匙酒腌二十分钟。",
        "锅中倒入油，烧热，将鸡肉煎至两面焦黄。取出鸡肉。",
        "将姜，蒜，八角炒香。",
        "将鸡肉放回锅中。添加蘑菇。",
        "加入剩余的酱油，酒，蚝油，芝麻油，糖和高汤。",
        "煮沸，然后盖上锅盖煮35分钟。",
        "揭盖并减少酱汁5-10分钟。",
        "可选：用葱装饰",
        "煮好了！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: saclay,
  },

  {
    id: 6,
    title: "Kung Pao Chicken (宫保鸡丁)",
    category: "Szechuan Peppercorn",
    zh: {
      ingredients: [
        "无骨鸡腿，切成方块",
        "绍兴酒两汤匙",
        "一汤匙生抽",
        "一汤匙玉米淀粉",
        "十个干红辣椒，切成两半",
        "花椒 两茶匙",
        "三瓣大蒜，切碎",
        "两片姜，切碎",
        "四颗葱 – 仅白色部分，切成段",
        "烤花生",
        "一汤匙糖",
        "一汤匙醋",
        "一茶匙老抽",
        "两茶匙玉米淀粉与一汤匙水混合",
      ],
      steps: [
        "将鸡肉用酒，酱油和玉米淀粉腌制二十分钟。",
        "将炒锅加热至冒烟。加两汤匙油。",
        "将辣椒和花椒炒香。加入鸡肉，炒至近熟。",
        "加入鸡肉，炒至近熟。",
        "加入大蒜，姜和葱。炒三十秒。",
        "加入糖，醋，黑酱油和玉米淀粉。",
        "搅拌直至酱汁变稠。",
        "加入花生，搅拌均匀，即可食用。",
        "煮好了！吃得开心！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: spchicken,
  },

  {
    id: 7,
    title: "Mapo Tofu (宫保鸡丁)",
    category: "Szechuan Peppercorn",
    zh: {
      ingredients: [
        "软豆腐，切成方块",
        "碎猪肉",
        "豆瓣酱 两汤匙",
        "一汤匙发酵黑豆，冲洗并切碎",
        "两茶匙四川花椒，磨碎",
        "三瓣大蒜，切碎",
        "一汤匙姜，切碎",
        "两个葱，切碎",
        "一汤匙生抽",
        "半茶匙糖",
        "半杯鸡汤",
        "两茶匙玉米淀粉与一汤匙水混合",
      ],
      steps: [
        "将豆腐在盐水中轻轻煮一分钟。沥干并放在一边。",
        "在锅中加热两汤匙油。加入猪肉末，炒至焦黄。",
        "加入豆瓣酱和发酵黑豆。炒1分钟。",
        "加入大蒜和姜。炒三十秒。",
        "倒入高汤、酱油和糖。煮沸。",
        "小心地加入豆腐块。煮五分钟。",
        "加入玉米淀粉混合物搅拌以使酱汁变稠。",
        "撒上花椒粉和葱。",
        "趁热与米饭一起食用。享受！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: sptofu,
  },

  {
    id: 8,
    title: "Sweet Cinnamon Osmanthus Soup（桂花肉桂汤）",
    category: "Chinese Cinnamon",
    zh: {
      ingredients: [
        "三棒肉桂",
        "两汤匙干桂花",
        "冰糖",
        "两汤匙汤圆",
        "红枣两颗，去核",
        "四杯水",
      ],
      steps: [
        "将肉桂棒放入装有水的锅中。煮沸。",
        "减少热量并煮十五分钟。",
        "加入冰糖并搅拌直至溶解。",
        "加入红枣，煮五分钟。",
        "加入糯米团，煮至浮起来。",
        "关火，加入桂花和枸杞。",
        "食用前浸泡两分钟。",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: ccsoup,
  },

  //   contains special list
  {
    id: 9,
    title: "Five Treasure Cinnamon Chicken（五宝桂皮鸡）",
    category: "Chinese Cinnamon",
    zh: {
      ingredients: [
        "一整只鸡",
        "四棒肉桂",
        "五“宝”：",
        "八颗红枣",
        "两汤匙枸杞",
        "三十克莲子，浸泡",
        "龙眼干三十克",
        "三十克栗子，去皮",
        "四片姜",
        "八角茴香两颗",
        "两汤匙生抽",
        "一汤匙老抽",
        "绍兴酒一汤匙",
        "两汤匙冰糖",
        "四杯鸡汤",
      ],
      steps: [
        "将鸡肉冲洗干净并拍干。用一茶匙盐从里到外擦拭。",
        "把锅里的水烧开。将鸡肉焯水两分钟，然后冲洗。",
        "在陶罐或荷兰烤箱中，将鸡肉、肉桂、姜、八角和所有五种“宝藏”混合在一起。",
        "加入高汤、酱油、酒和糖。",
        "煮沸，然后转小火煮。",
        "盖上盖子煮四十分钟，中间翻动鸡肉。",
        "取下盖子，再煮十分钟以减少酱汁。",
        "将鸡肉切碎并与珍宝一起放在盘子上。淋上酱汁。",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: ccchicken,
  },

  {
    id: 10,
    title: "Chinese Pickled Eggs（丁香卤蛋）",
    category: "Cloves",
    zh: {
      ingredients: [
        "八个鸡蛋",
        "十整个丁香",
        "两八角茴香",
        "一棒肉桂",
        "三汤匙 生抽",
        "一汤匙 黑酱油",
        "绍兴酒一汤匙",
        "两片姜",
        "一汤匙 冰糖",
        "两杯水",
        "一茶匙盐",
      ],
      steps: [
        "煮鸡蛋。冷却并剥皮。",
        "在每个鸡蛋上切几个浅口（以帮助味道渗透）。",
        "在锅中加入水，酱油，酒，丁香，八角，肉桂，生姜，糖和盐。",
        "煮沸，然后小火煮五分钟。",
        "将鸡蛋加入香料液体中。",
        "小火煮二十分钟。",
        "关掉火，让鸡蛋在液体中浸泡至少两个小时（过夜以获得更浓的味道）。",
        "取出鸡蛋，切成两半即可食用",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: cleggs,
  },

  {
    id: 11,
    title: "Chinese Clove Tea（丁香茶）",
    category: "Cloves",
    zh: {
      ingredients: [
        "五整个丁香",
        "三片新鲜生姜",
        "两颗红枣，去核",
        "一小块肉桂（可选）",
        "一茶匙蜂蜜或冰糖（可选）",
        "两杯水",
      ],
      steps: [
        "将丁香稍微压碎。",
        "将丁香，生姜，枣子和肉桂（如果使用）放入锅中，加水混合。",
        "煮沸，然后减少热量。",
        "煮十分钟。",
        "滤入茶杯。",
        "如果需要，可以添加蜂蜜或冰糖。",
        "喝温热的。特别合适消化问题或者感冒。享受！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: cltea,
  },

  {
    id: 12,
    title: "Fennel Seed Flatbread（茴香饼）",
    category: "Fennel Seeds",
    zh: {
      ingredients: [
        "三十克通用面粉",
        "一百五毫升温水",
        "两汤匙植物油",
        "一茶匙盐",
        "两汤匙茴香籽。",
        "三根葱，切碎",
        "一茶匙白胡椒 （可选）",
        "额外的油，用于烹饪。",
      ],
      steps: [
        "将面粉、茴香籽和盐放入碗中混合。",
        "加入温水和橄榄油，揉捏直至形成光滑的面团。",
        "盖上盖子休息三十分钟。",
        "分成六个球，每个球滚成薄薄的圆圈。",
        "在上面撒上额外的茴香籽，轻轻压入面团中。",
        "用中高火加热平底锅，加入少许油。",
        "将每个大饼每面煎一两分钟，直至呈金黄色并带有黑点",
        "煮好了！切菜服务！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: flbread,
  },

  {
    id: 13,
    title: "Muslim Style Fennel Lamb Dumplings （清真茴香羊肉饺子）",
    category: "Fennel Seeds",
    zh: {
      ingredients: [
        "三百克虽羊肉",
        "两汤匙茴香籽，轻轻烘烤并磨碎",
        "一汤匙整个茴香籽",
        "两汤匙葱花",
        "一汤匙姜末",
        "两瓣大蒜，切碎",
        "一汤匙生抽",
        "一茶匙绍兴酒（可选）",
        "一汤匙植物油",
        "一茶匙盐：一半做面团，一半做馅料",
        "第四茶匙 白胡椒",
        "一百克韭菜，切碎",
        "三百克 通用面粉",
        "一百五毫升温水",
      ],
      steps: [
        "制作面团：将面粉和盐混合，边搅拌边逐渐加水，揉至光滑。盖上盖子休息三十分钟。",
        "将所有填充材料混合在一个碗中。",
        "将面团擀成圆木，切成约二十块。",
        "将每一块卷成一个圆圈。",
        "将一勺馅料放在每个包装纸的中心。",
        "对折并捏紧边缘以密封，如果需要的话可以形成褶皱。",
        "将饺子蒸约十二分钟或煮三四分钟至熟。",
        "煮好了！享受！",
      ],
    },
    en: {
      ingredients: [],
      steps: [],
    },
    image: flamb,
  },
];

export const getRecipesBySpice = (spiceId) => {
  return recipes.filter((recipe) => recipe.category === spiceId);
};

export { recipes };
