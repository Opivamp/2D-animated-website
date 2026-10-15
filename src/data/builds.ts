export interface Build {
  id: string;
  code: string;
  model: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  nextBuild: string;
}

export const BUILDS: Build[] = [
  {
    "id": "fa001",
    "code": "#FA001",
    "model": "Defender 110",
    "summary": "Satin grey against gloss black, widened arches and a stance built to be noticed.",
    "description": "Taken away from utility and toward intent. Finished in satin grey and set against gloss black — roof, bonnet, grille, arches and mirrors — while widened arch extensions and forged black alloys widen the stance. Side steps, a roof-mounted light bar and blacked-out badging complete it.",
    "coverImage": "/images/c0f606c0fa015165348c9f1f9515d9e8132d4a22-880x1592.jpg",
    "gallery": [
      "/images/c0f606c0fa015165348c9f1f9515d9e8132d4a22-880x1592.jpg",
      "/images/c31fe638515130f4a306c8fe161aa0b582deed00-1344x1736.jpg",
      "/images/89daaf00c096249434474c6ee6fc128ba24f1efb-1344x1736.jpg",
      "/images/e2a1aac9f1a071c992dcb67edf5946dfe6f435a4-2752x1800.jpg",
      "/images/2c4c8974a0930159ca81e67c342d24c5e2405d31-1344x1736.jpg",
      "/images/e4a5794857e472db37a1891f554495827813f5d4-1344x1736.jpg",
      "/images/1bc20e3c4ff21e34fb00095724ab2be89b053b46-2752x1800.jpg"
    ],
    "nextBuild": "fa002"
  },
  {
    "id": "fa002",
    "code": "#FA002",
    "model": "911 Carrera",
    "summary": "Satin black from crest to calliper, with every brightwork detail taken out of the picture.",
    "description": "Satin black from crest to calliper, with every brightwork detail taken out of the picture. Carbon fibre bonnet and aero details catch the rain, while forged black alloys with drilled rotors ground the silhouette.",
    "coverImage": "/images/feca553732030501856689fe38405135596be51a-880x1592.jpg",
    "gallery": [
      "/images/feca553732030501856689fe38405135596be51a-880x1592.jpg",
      "/images/672adf67bf1015b458a333df93d9124e788aeb7d-1344x1736.jpg",
      "/images/9a7d1f4bd173560bb3589fe04ded5e36727b549e-1344x1736.jpg",
      "/images/cfe40195ea40eb20c30e981236cf36c676cb3139-2752x1800.jpg",
      "/images/af49ceb46278efd833e308bea05de3fa4a004c43-1344x1736.jpg",
      "/images/5386c62fe4d0b09bd82d3e09d9b4b2985ad88562-1344x1736.jpg"
    ],
    "nextBuild": "fa005"
  },
  {
    "id": "fa005",
    "code": "#FA005",
    "model": "Defender 130",
    "summary": "Satin graphite over gloss black, widened at every arch and loaded for the long way round.",
    "description": "Satin graphite over gloss black, widened at every arch and loaded for the long way round. Equipped with custom roof-mounted cargo system, geometric forged wheels with Yokohama rubber, and full stealth aesthetics.",
    "coverImage": "/images/c58657cb3a36f1418999c7ba137ed86b501d2801-1520x2688.jpg",
    "gallery": [
      "/images/c58657cb3a36f1418999c7ba137ed86b501d2801-1520x2688.jpg",
      "/images/b27656e6f89b9a2d4f5b468051e367122ad9889e-2752x1800.jpg",
      "/images/ef65cf89755a8e7ee77978a0970ffb0520b95307-1344x1736.jpg",
      "/images/7e5cdce5986bcea3aaf4500d326c691c6b56c438-1344x1736.jpg",
      "/images/56f510afd79f9179e6e74bd4fc72b41332697c06-2752x1800.jpg",
      "/images/cfbf6c09d1ee6b0938145930ff030961abeed10b-1344x1736.jpg",
      "/images/1e70a183cd6ccc849578bb2b07afe987e4ace8a8-1344x1736.jpg",
      "/images/77bed69a3c335398bd792b26154ad729f99b4fcf-2752x1736.jpg"
    ],
    "nextBuild": "fa006"
  },
  {
    "id": "fa006",
    "code": "#FA006",
    "model": "Urus",
    "summary": "Gloss yellow against forged carbon, with nothing about it asking to be overlooked.",
    "description": "Gloss yellow against forged carbon, with nothing about it asking to be overlooked. Featuring a sculptured forged carbon bonnet, aggressive front bumper splitters, and custom quad aerodynamic diffusers.",
    "coverImage": "/images/fe99714e1f274253e7a543c6f3dcf34f7a553f3f-1536x2048.jpg",
    "gallery": [
      "/images/fe99714e1f274253e7a543c6f3dcf34f7a553f3f-1536x2048.jpg",
      "/images/fe99714e1f274253e7a543c6f3dcf34f7a553f3f-1536x2048.jpg",
      "/images/2640c7b4aad8695a6a341cfd27c2e15edcdfa702-1536x2048.jpg",
      "/images/298b48f685cadab5e0a177c860dce181703b8da8-1536x2048.jpg",
      "/images/da945681651e3e510b51077f4dcf1d00e916f624-1536x2048.jpg",
      "/images/83b89bc9aa2b1137a05c8cee9f8ab4e2fdc93622-1536x2048.jpg"
    ],
    "nextBuild": "fa007"
  },
  {
    "id": "fa007",
    "code": "#FA007",
    "model": "M3 Touring",
    "summary": "Grey held to a mirror gloss, carbon at every edge, and yellow light in the eyes.",
    "description": "Grey held to a mirror gloss, carbon at every edge, and yellow light in the eyes. Motorsport yellow DRL modules, comprehensive exposed carbon fiber aero styling, and custom forged wheel fitment.",
    "coverImage": "/images/51241647ab40cdc226834746504a0466e9ddb7b5-880x1592.jpg",
    "gallery": [
      "/images/51241647ab40cdc226834746504a0466e9ddb7b5-880x1592.jpg",
      "/images/850d78393a20d9ce311899a48dc6782b5b286579-1536x2048.jpg",
      "/images/20a465759b6151ea46d13e433e46f97b87d278f3-1537x2048.jpg",
      "/images/19d652869449ec417d927ba76897e1a70551e986-1535x2048.jpg",
      "/images/ab4140d6240ab260a5f705c3ba78726490cad659-1536x2048.jpg",
      "/images/c9414d6db5f7b6cfd8a459ee84884ba2f81fb43c-1536x2048.jpg",
      "/images/de526f1532e708130b87bd40a60da8f8fb02db60-1536x2048.jpg"
    ],
    "nextBuild": "fa008"
  },
  {
    "id": "fa008",
    "code": "#FA008",
    "model": "G63",
    "summary": "Satin green over tan leather, with bronze standing in wherever chrome used to be.",
    "description": "Satin green over tan leather, with bronze standing in wherever chrome used to be. Diamond-quilted saddle tan hide, dark carbon interior elements, custom V8 side-exit exhaust system with visceral growl.",
    "coverImage": "/images/e59fca3a882e8adab02305cf5f4083df71804048-880x1592.jpg",
    "gallery": [
      "/images/e59fca3a882e8adab02305cf5f4083df71804048-880x1592.jpg",
      "/images/cf720bf409ce196b02456af35de6f5fd2bb02260-3024x4032.jpg",
      "/images/eb03667dcad000708adef53f6b2368d541e1ff64-3840x5120.jpg",
      "/images/9dbec6e29b82a3a71110f63763e0f50e0c23dcdf-3293x4391.jpg",
      "/images/23e451339bf5e606c4a74c84f8da72c7fc552339-3024x4032.jpg",
      "/images/c510eb2785509d23740a2a0498d5b0525458da54-3840x5120.jpg",
      "/images/ea0ad13ad7b78e972b097de718c075bd0cdf905f-3840x5120.jpg",
      "/images/fb9d44c72ee2401b2be3edc0c23c373e41955082-3840x5120.jpg"
    ],
    "nextBuild": "fa009"
  },
  {
    "id": "fa009",
    "code": "#FA009",
    "model": "Defender 90",
    "summary": "Military green against gloss black, short in the wheelbase and heavy in the stance.",
    "description": "Military green against gloss black, short in the wheelbase and heavy in the stance. Purpose-built aggressive stance, dark tinted lighting package, custom arch extensions, and tactical road presence.",
    "coverImage": "/images/964be4b66ace0cfa60f163f720f3fa8b8c876705-880x1592.jpg",
    "gallery": [
      "/images/964be4b66ace0cfa60f163f720f3fa8b8c876705-880x1592.jpg",
      "/images/689f420859a47a197cca545413930aed8f4fd2b7-1536x2048.jpg",
      "/images/f299a96167cdec17dddcd90de70b65eef377961d-1536x2048.jpg",
      "/images/09f983da83c94cd31ca7b11d4acfb6e54a8afb92-1536x2048.jpg",
      "/images/d5ef0143df56cd45c32eb003770799098ac5fb12-1536x2048.jpg",
      "/images/80f0d461658210dd66822f7e43b7b1c147237708-1536x2048.jpg",
      "/images/e50488c14b012d3ca2dea189f2ae9edc90115f8a-1536x2048.jpg"
    ],
    "nextBuild": "fa010"
  },
  {
    "id": "fa010",
    "code": "#FA010",
    "model": "RS3",
    "summary": "Satin PPF from bumper to hatch, a Maxton kit at every edge, and red calipers behind the spokes.",
    "description": "Satin PPF from bumper to hatch, a Maxton kit at every edge, and red calipers behind the spokes. Riviera multi-spoke alloy wheels, high-gloss black optics, and tailored sports performance presence.",
    "coverImage": "/images/87c160d6172c35914cf4abd914cc78e469e7983d-1018x1800.jpg",
    "gallery": [
      "/images/87c160d6172c35914cf4abd914cc78e469e7983d-1018x1800.jpg",
      "/images/b9a4f104a91d94803f58df5db1d908829038f3bd-2755x1837.jpg",
      "/images/c0a4e7bd9828955a6368b8a180248c2b0ce6d48f-2272x3408.jpg",
      "/images/379546e9aae42de6b5c3530729468890f5fcbee9-2272x3408.jpg",
      "/images/0b5b4314210ef127f6948fdb9d603bbd20bf0efc-3408x2272.jpg",
      "/images/9bdb1b6b30f5c134ab6cd0ab0f0f1d8a80c196b4-2272x3408.jpg",
      "/images/99bf2448098f2883aa66a7be401ff12d498cbb78-2272x3408.jpg",
      "/images/b82432db1bd77593bd19162274d83a952e62153a-3408x2272.jpg"
    ],
    "nextBuild": "fa001"
  }
];
