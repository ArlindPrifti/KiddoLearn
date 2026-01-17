
import { AnimalInfo, ThemeType, LanguageType, VoiceType, AnimalCategory } from './types';

export const ANIMALS: AnimalInfo[] = [
  // --- MAMMALS ---
  { 
    letter: 'L', emoji: '🦁', color: 'bg-orange-500', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Lion', es: 'León', fr: 'Lion', it: 'Leone', de: 'Löwe', pt: 'Leão', jp: 'ライオン', zh: '狮子', hi: 'शेर', sq: 'Luani' },
    sounds: { en: 'Roar!', es: '¡Rugido!', fr: 'Roar !', it: 'Ruggito!', de: 'Brüll!', pt: 'Rugido!', jp: 'ガオー', zh: '吼叫', hi: 'दहाड़', sq: 'Rrërr!' }
  },
  { 
    letter: 'E', emoji: '🐘', color: 'bg-gray-400', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Elephant', es: 'Elefante', fr: 'Éléphant', it: 'Elefante', de: 'Elefant', pt: 'Elefante', jp: 'ゾウ', zh: '大象', hi: 'हाथी', sq: 'Elefanti' },
    sounds: { en: 'Pawooo!', es: '¡Pawooo!', fr: 'Pawooo !', it: 'Barrito!', de: 'Törööö!', pt: 'Pawooo!', jp: 'パオーン', zh: '昂昂', hi: 'चिंघाड़', sq: 'Pawooo!' }
  },
  { 
    letter: 'M', emoji: '🐈', color: 'bg-orange-300', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Cat', es: 'Gato', fr: 'Chat', it: 'Gatto', de: 'Katze', pt: 'Gato', jp: '猫', zh: '猫', hi: 'बिल्ली', sq: 'Macja' },
    sounds: { en: 'Meow!', es: '¡Miau!', fr: 'Miaou !', it: 'Miao!', de: 'Miau!', pt: 'Miau!', jp: 'ニャー', zh: '喵喵', hi: 'म्याऊँ', sq: 'Miau!' }
  },
  { 
    letter: 'Q', emoji: '🐕', color: 'bg-amber-600', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Dog', es: 'Perro', fr: 'Chien', it: 'Cane', de: 'Hund', pt: 'Cão', jp: '犬', zh: '狗', hi: 'कुत्ता', sq: 'Qeni' },
    sounds: { en: 'Woof!', es: '¡Guau!', fr: 'Wouf !', it: 'Bau!', de: 'Wau wau!', pt: 'Au au!', jp: 'ワンワン', zh: '汪汪', hi: 'कुत्ता', sq: 'Ham ham!' }
  },
  { 
    letter: 'G', emoji: '🦍', color: 'bg-stone-600', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Gorilla', es: 'Gorila', fr: 'Gorille', it: 'Gorilla', de: 'Gorilla', pt: 'Gorila', jp: 'ゴリラ', zh: '大猩猩', hi: 'गोरिल्ला', sq: 'Gorilla' },
    sounds: { en: 'Ooh ooh ah ah!', es: '¡Uh uh ah ah!', fr: 'Ouh ouh !', it: 'Uuuh aaah!', de: 'Uh uh ah ah!', pt: 'Uh uh ah ah!', jp: 'ウキウキ', zh: '吼叫', hi: 'खीं खीं', sq: 'Uu u aa!' }
  },
  { 
    letter: 'P', emoji: '🐼', color: 'bg-slate-100', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Panda', es: 'Panda', fr: 'Panda', it: 'Panda', de: 'Panda', pt: 'Panda', jp: 'パンダ', zh: '熊猫', hi: 'पांडा', sq: 'Panda' },
    sounds: { en: 'Munch!', es: '¡Munch!', fr: 'Munch !', it: 'Munch!', de: 'Munch!', pt: 'Munch!', jp: 'ムシャムシャ', zh: '咀嚼', hi: 'मंच', sq: 'Kërcit!' }
  },
  { 
    letter: 'K', emoji: '🦘', color: 'bg-orange-700', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Kangaroo', es: 'Canguro', fr: 'Kangourou', it: 'Canguro', de: 'Känguru', pt: 'Canguru', jp: 'カンガルー', zh: '袋鼠', hi: 'कंगारू', sq: 'Kangaroo' },
    sounds: { en: 'Boing boing!', es: '¡Boing!', fr: 'Boing !', it: 'Boing!', de: 'Hopp!', pt: 'Boing!', jp: 'ぴょんぴょん', zh: '蹦蹦', hi: 'कूद', sq: 'Hop hop!' }
  },
  { 
    letter: 'C', emoji: '🐫', color: 'bg-yellow-700', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Camel', es: 'Camello', fr: 'Chameau', it: 'Chameau', de: 'Kamel', pt: 'Camelo', jp: 'ラクダ', zh: '骆驼', hi: 'ऊंट', sq: 'Devja' },
    sounds: { en: 'Grumph!', es: '¡Grumph!', fr: 'Grumph !', it: 'Grumph!', de: 'Grumph!', pt: 'Grumph!', jp: 'ウグッ', zh: '哼哼', hi: 'हूँ', sq: 'Grumph!' }
  },
  { 
    letter: 'D', emoji: '🦌', color: 'bg-amber-800', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Deer', es: 'Ciervo', fr: 'Cerf', it: 'Cervo', de: 'Hirsch', pt: 'Cervo', jp: 'シカ', zh: '鹿', hi: 'हिरण', sq: 'Dreri' },
    sounds: { en: 'Grunt!', es: '¡Gruñido!', fr: 'Grunt !', it: 'Grunt!', de: 'Grunt!', pt: 'Grunt!', jp: 'ガオー', zh: '鸣叫', hi: 'गुर्र', sq: 'Dreri!' }
  },
  { 
    letter: 'V', emoji: '🐄', color: 'bg-slate-200', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Cow', es: 'Vaca', fr: 'Vache', it: 'Mucca', de: 'Kuh', pt: 'Vaca', jp: 'ウシ', zh: '奶牛', hi: 'गाय', sq: 'Lopa' },
    sounds: { en: 'Moo!', es: '¡Moo!', fr: 'Meuh !', it: 'Moo!', de: 'Muh!', pt: 'Muuu!', jp: 'モー', zh: '哞哞', hi: 'मूँ', sq: 'Muuu!' }
  },
  { 
    letter: 'D', emoji: '🐑', color: 'bg-white', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Sheep', es: 'Oveja', fr: 'Mouton', it: 'Pecora', de: 'Schaf', pt: 'Ovelha', jp: 'ヒツジ', zh: '绵羊', hi: 'भेड़', sq: 'Delja' },
    sounds: { en: 'Baaa!', es: '¡Beee!', fr: 'Bêêê !', it: 'Bee!', de: 'Mäh!', pt: 'Béee!', jp: 'メー', zh: '咩咩', hi: 'मै', sq: 'Beee!' }
  },
  { 
    letter: 'D', emoji: '🐖', color: 'bg-pink-300', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Pig', es: 'Cerdo', fr: 'Cochon', it: 'Maiale', de: 'Schwein', pt: 'Porco', jp: 'ブータ', zh: '猪', hi: 'सुअर', sq: 'Derri' },
    sounds: { en: 'Oink!', es: '¡Oink!', fr: 'Groin !', it: 'Oink!', de: 'Oink!', pt: 'Oink!', jp: 'ブーブー', zh: '哼哼', hi: 'घों घों', sq: 'Oink!' }
  },
  { 
    letter: 'Z', emoji: '🦓', color: 'bg-slate-100', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Zebra', es: 'Cebra', fr: 'Cebra', it: 'Zebra', de: 'Zebra', pt: 'Zebra', jp: 'シマウマ', zh: '斑马', hi: 'जेबरा', sq: 'Zebra' },
    sounds: { en: 'Neigh!', es: '¡Iiiih!', fr: 'Hiiii !', it: 'Hiiii!', de: 'I-ahhh!', pt: 'Iiiih!', jp: 'ヒヒーン', zh: '唏唏', hi: 'हिनहिनाना', sq: 'Hiiii!' }
  },
  { 
    letter: 'K', emoji: '🐨', color: 'bg-amber-800', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Koala', es: 'Koala', fr: 'Koala', it: 'Koala', de: 'Koala', pt: 'Koala', jp: 'コアラ', zh: '考拉', hi: 'कोआला', sq: 'Koala' },
    sounds: { en: 'Munch!', es: '¡Munch!', fr: 'Munch !', it: 'Munch!', de: 'Munch!', pt: 'Munch!', jp: 'もぐもぐ', zh: '咀嚼', hi: 'मंच', sq: 'Kërcit!' }
  },
  { 
    letter: 'W', emoji: '🐋', color: 'bg-blue-600', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Whale', es: 'Ballena', fr: 'Baleine', it: 'Balena', de: 'Wal', pt: 'Baleia', jp: 'クジラ', zh: '鲸鱼', hi: 'व्हेल', sq: 'Balena' },
    sounds: { en: 'Splash!', es: '¡Splash!', fr: 'Splsh !', it: 'Splash!', de: 'Splash!', pt: 'Splash!', jp: 'ザブーン', zh: '哗啦', hi: 'छप', sq: 'Plaç!' }
  },
  { 
    letter: 'G', emoji: '🦒', color: 'bg-yellow-400', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Giraffe', es: 'Jirafa', fr: 'Girafe', it: 'Giraffa', de: 'Giraffe', pt: 'Girafa', jp: 'キリン', zh: '长颈鹿', hi: 'जिराफ', sq: 'Gjirafa' },
    sounds: { en: 'Hummm!', es: '¡Hummm!', fr: 'Hummm !', it: 'Hummm!', de: 'Hummm!', pt: 'Hummm!', jp: 'ムムム', zh: '嗯嗯', hi: 'हम्म', sq: 'Hëmmm!' }
  },
  { 
    letter: 'A', emoji: '🐻', color: 'bg-amber-900', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Bear', es: 'Oso', fr: 'Ours', it: 'Orso', de: 'Bär', pt: 'Urso', jp: 'クマ', zh: '熊', hi: 'भालू', sq: 'Ariu' },
    sounds: { en: 'Grrr!', es: '¡Grrr!', fr: 'Grrr !', it: 'Grrr!', de: 'Brumm!', pt: 'Grrr!', jp: 'ガオー', zh: '吼叫', hi: 'गुर्र', sq: 'Grrr!' }
  },
  { 
    letter: 'K', emoji: '🐎', color: 'bg-orange-200', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Horse', es: 'Caballo', fr: 'Cheval', it: 'Cavallo', de: 'Pferd', pt: 'Cavalo', jp: '馬', zh: '马', hi: 'घोड़ा', sq: 'Kali' },
    sounds: { en: 'Neigh!', es: '¡Relincho!', fr: 'Hiiii !', it: 'Nitrito!', de: 'Wieher!', pt: 'Relincho!', jp: 'ヒヒーン', zh: '嘶叫', hi: 'हिनहिनाना', sq: 'Hiiii!' }
  },
  { 
    letter: 'L', emoji: '🐇', color: 'bg-slate-200', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Rabbit', es: 'Conejo', fr: 'Lapin', it: 'Coniglio', de: 'Hase', pt: 'Coelho', jp: 'ウサギ', zh: '兔子', hi: 'खरगोश', sq: 'Lepuri' },
    sounds: { en: 'Hop hop!', es: '¡Hop!', fr: 'Hop !', it: 'Hop!', de: 'Hopp!', pt: 'Hop!', jp: 'ピョンピョン', zh: '跳跳', hi: 'कूद', sq: 'Hop!' }
  },
  { 
    letter: 'T', emoji: '🐯', color: 'bg-orange-400', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Tiger', es: 'Tigre', fr: 'Tigre', it: 'Tigre', de: 'Tiger', pt: 'Tigre', jp: 'トラ', zh: '老虎', hi: 'बाघ', sq: 'Tigri' },
    sounds: { en: 'Roar!', es: '¡Rugido!', fr: 'Roar !', it: 'Ruggito!', de: 'Brüll!', pt: 'Rugido!', jp: 'ガオー', zh: '吼叫', hi: 'दहाड़', sq: 'Rrërr!' }
  },
  { 
    letter: 'U', emoji: '🐺', color: 'bg-slate-400', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Wolf', es: 'Lobo', fr: 'Loup', it: 'Lupo', de: 'Wolf', pt: 'Lobo', jp: 'オオカミ', zh: '狼', hi: 'भेड़िया', sq: 'Ujku' },
    sounds: { en: 'Howl!', es: '¡Aullido!', fr: 'Hurle !', it: 'Ululato!', de: 'Heulen!', pt: 'Uivo!', jp: 'アオー', zh: '嚎叫', hi: 'हुआँ हुआँ', sq: 'Uuuuu!' }
  },
  { 
    letter: 'H', emoji: '🦛', color: 'bg-slate-300', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Hippo', es: 'Hipopótamo', fr: 'Hippo', it: 'Ippopotamo', de: 'Nilpferd', pt: 'Hipopótamo', jp: 'カバ', zh: '河马', hi: 'दरियाई घोड़ा', sq: 'Hippo' },
    sounds: { en: 'Grumph!', es: '¡Grumph!', fr: 'Grumph !', it: 'Grumph!', de: 'Grumph!', pt: 'Grumph!', jp: 'ウグッ', zh: '哼哼', hi: 'हूँ', sq: 'Grumph!' }
  },
  { 
    letter: 'R', emoji: '🦏', color: 'bg-slate-400', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Rhino', es: 'Rinoceronte', fr: 'Rhinocéros', it: 'Rinoceronte', de: 'Nashorn', pt: 'Rinoceronte', jp: 'サイ', zh: '犀牛', hi: 'गेंडा', sq: 'Rhino' },
    sounds: { en: 'Snort!', es: '¡Bufido!', fr: 'Snort !', it: 'Sbuffo!', de: 'Snort!', pt: 'Bufo!', jp: 'フンッ', zh: '喷气', hi: 'फूत्कार', sq: 'Snort!' }
  },
  { 
    letter: 'S', emoji: '🐿️', color: 'bg-amber-500', category: AnimalCategory.MAMMALS, isAlphabetPrimary: false,
    names: { en: 'Squirrel', es: 'Ardilla', fr: 'Écureuil', it: 'Scoiattolo', de: 'Eichhörnchen', pt: 'Esquilo', jp: 'リス', zh: '松鼠', hi: 'गिलहरी', sq: 'Ketrush' },
    sounds: { en: 'Squeak!', es: '¡Chirrido!', fr: 'Squeak !', it: 'Squeak!', de: 'Squeak!', pt: 'Squeak!', jp: 'チューチュー', zh: '吱吱', hi: 'चीं', sq: 'Cik!' }
  },
  { 
    letter: 'F', emoji: '🦊', color: 'bg-orange-600', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Fox', es: 'Zorro', fr: 'Renard', it: 'Volpe', de: 'Fuchs', pt: 'Raposa', jp: 'キネ', zh: '狐狸', hi: 'लोमड़ी', sq: 'Dhelpra' },
    sounds: { en: 'Ring-ding!', es: '¡Yap!', fr: 'Yap !', it: 'Yap!', de: 'Yap!', pt: 'Yap!', jp: 'コンコン', zh: '鸣叫', hi: 'हवेल', sq: 'Yap!' }
  },
  { 
    letter: 'B', emoji: '🦇', color: 'bg-slate-800', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Bat', es: 'Murciélago', fr: 'Chauve-souris', it: 'Pipistrello', de: 'Fledermaus', pt: 'Morcego', jp: 'コウモリ', zh: '捕虜', hi: 'चमगादड़', sq: 'Lakuriqi' },
    sounds: { en: 'Squeak!', es: '¡Chirrido!', fr: 'Squeak !', it: 'Squittio!', de: 'Piep!', pt: 'Squeak!', jp: 'キィキィ', zh: '吱吱', hi: 'चीं', sq: 'Cik!' }
  },
  { 
    letter: 'S', emoji: '🦭', color: 'bg-blue-300', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Seal', es: 'Foca', fr: 'Phoque', it: 'Foca', de: 'Robbe', pt: 'Foca', jp: 'アザラシ', zh: '海豹', hi: 'सील', sq: 'Vula' },
    sounds: { en: 'Arf arf!', es: '¡Arf arf!', fr: 'Arf !', it: 'Arf!', de: 'Tröt!', pt: 'Arf!', jp: 'オッオッ', zh: '嗷嗷', hi: 'भों', sq: 'Au au!' }
  },

  // --- BIRDS ---
  { 
    letter: 'F', emoji: '🦩', color: 'bg-pink-400', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Flamingo', es: 'Flamenco', fr: 'Flamant', it: 'Fenicottero', de: 'Flamingo', pt: 'Flamingo', jp: 'フラミンゴ', zh: '火烈鸟', hi: 'राजहंस', sq: 'Flamingo' },
    sounds: { en: 'Honk honk!', es: '¡Honk honk!', fr: 'Honk !', it: 'Honk honk!', de: 'Honk!', pt: 'Honk!', jp: 'グーグー', zh: '咕咕', hi: 'भों', sq: 'Honk!' }
  },
  { 
    letter: 'P', emoji: '🐧', color: 'bg-slate-800', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Penguin', es: 'Pingüino', fr: 'Manchot', it: 'Pinguino', de: 'Pinguin', pt: 'Pinguim', jp: 'ペンギン', zh: '企鹅', hi: 'पेंगुइन', sq: 'Pinguini' },
    sounds: { en: 'Waddle!', es: '¡Camina!', fr: 'Waddle !', it: 'Waddle!', de: 'Watschel!', pt: 'Waddle!', jp: 'ヨコヨコ', zh: '摇摇摆摆', hi: '摇摇摆摆', sq: 'Lëkundet!' }
  },
  { 
    letter: 'O', emoji: '🦉', color: 'bg-amber-800', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Owl', es: 'Búho', fr: 'Hibou', it: 'Gufo', de: 'Eule', pt: 'Coruja', jp: 'フクロウ', zh: '猫头鹰', hi: 'उल्लू', sq: 'Bufi' },
    sounds: { en: 'Hoo hoo!', es: '¡Hoo hoo!', fr: 'Hou hou !', it: 'Uuuh uuuh!', de: 'Hu hu!', pt: 'Hoo hoo!', jp: 'ホーホー', zh: '呼呼', hi: 'हू हू', sq: 'Hu hu!' }
  },
  { 
    letter: 'R', emoji: '🦆', color: 'bg-teal-500', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Duck', es: 'Pato', fr: 'Canard', it: 'Anatra', de: 'Ente', pt: 'Pato', jp: 'アヒル', zh: '鸭子', hi: 'बत्तख', sq: 'Rosa' },
    sounds: { en: 'Quack!', es: '¡Cuac!', fr: 'Coin !', it: 'Quack!', de: 'Ente!', pt: 'Quack!', jp: 'ガーガー', zh: '嘎嘎', hi: 'क्वाक', sq: 'Kuak!' }
  },
  { 
    letter: 'P', emoji: '🐔', color: 'bg-red-400', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Chicken', es: 'Pollo', fr: 'Poulet', it: 'Pollo', de: 'Huhn', pt: 'Frango', jp: 'ニワトリ', zh: '鸡', hi: 'मुर्ग़ा', sq: 'Pula' },
    sounds: { en: 'Cluck!', es: '¡Cocó!', fr: 'Cot cot !', it: 'Coccodè!', de: 'Gack!', pt: 'Cocó!', jp: 'コケコッコー', zh: '咯咯', hi: 'कुक्कुड़', sq: 'Kërr!' }
  },
  { 
    letter: 'P', emoji: '🦜', color: 'bg-emerald-500', category: AnimalCategory.BIRDS, isAlphabetPrimary: false,
    names: { en: 'Parrot', es: 'Loro', fr: 'Perroquet', it: 'Pappagallo', de: 'Papagei', pt: 'Papagaio', jp: 'オウム', zh: '鹦鹉', hi: 'तोता', sq: 'Papagalli' },
    sounds: { en: 'Hello!', es: '¡Hola!', fr: 'Salut !', it: 'Ciao!', de: 'Hallo!', pt: 'Olá!', jp: 'こんにちは', zh: '你好', hi: 'नमस्ते', sq: 'Përshëndetje!' }
  },
  { 
    letter: 'E', emoji: '🦅', color: 'bg-stone-500', category: AnimalCategory.BIRDS, isAlphabetPrimary: false,
    names: { en: 'Eagle', es: 'Águila', fr: 'Aigle', it: 'Aquila', de: 'Adler', pt: 'Águia', jp: 'ワシ', zh: '老鹰', hi: 'चील', sq: 'Shqiponja' },
    sounds: { en: 'Screech!', es: '¡Chillido!', fr: 'Screech !', it: 'Screech!', de: 'Screech!', pt: 'Screech!', jp: 'ピー', zh: '尖叫', hi: 'चीख', sq: 'Britmë!' }
  },
  { 
    letter: 'P', emoji: '🦚', color: 'bg-blue-700', category: AnimalCategory.BIRDS, isAlphabetPrimary: false,
    names: { en: 'Peacock', es: 'Pavo Real', fr: 'Paon', it: 'Pavone', de: 'Pfau', pt: 'Pavão', jp: 'クジャク', zh: '孔雀', hi: 'मोर', sq: 'Palloi' },
    sounds: { en: 'Honk!', es: '¡Honk!', fr: 'Honk !', it: 'Honk!', de: 'Honk!', pt: 'Honk!', jp: 'グー', zh: '咕咕', hi: 'भों', sq: 'Honk!' }
  },
  { 
    letter: 'S', emoji: '🦢', color: 'bg-white', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Swan', es: 'Cisne', fr: 'Cygne', it: 'Cigno', de: 'Schwan', pt: 'Cisne', jp: 'ハクチョウ', zh: '天鹅', hi: 'हंस', sq: 'Mjelma' },
    sounds: { en: 'Honk!', es: '¡Honk!', fr: 'Honk !', it: 'Honk!', de: 'Honk!', pt: 'Honk!', jp: 'クワッ', zh: '鸣叫', hi: 'भों', sq: 'Honk!' }
  },
  { 
    letter: 'T', emoji: '🦃', color: 'bg-orange-800', category: AnimalCategory.BIRDS, isAlphabetPrimary: true,
    names: { en: 'Turkey', es: 'Pavo', fr: 'Dindon', it: 'Tacchino', de: 'Truthahn', pt: 'Peru', jp: 'シチメンチョウ', zh: '火鸡', hi: 'तुर्की', sq: 'Gjeli' },
    sounds: { en: 'Gobble!', es: '¡Gluglú!', fr: 'Glou glou !', it: 'Glu glu!', de: 'Gack!', pt: 'Gulu gulu!', jp: 'ゴロゴロ', zh: '咕咕', hi: 'गड़गड़', sq: 'Glu glu!' }
  },

  // --- SEA LIFE ---
  { 
    letter: 'P', emoji: '🦈', color: 'bg-slate-500', category: AnimalCategory.FISH, isAlphabetPrimary: true,
    names: { en: 'Shark', es: 'Tiburón', fr: 'Requin', it: 'Squalo', de: 'Hai', pt: 'Tubarão', jp: 'サメ', zh: '鲨鱼', hi: 'शार्क', sq: 'Peshkaqeni' },
    sounds: { en: 'Chomp!', es: '¡Chomp!', fr: 'Chomp !', it: 'Chomp!', de: 'Schnapp!', pt: 'Chomp!', jp: 'ガブッ', zh: '咔哒', hi: 'काट', sq: 'Ham ham!' }
  },
  { 
    letter: 'O', emoji: '🐙', color: 'bg-pink-600', category: AnimalCategory.FISH, isAlphabetPrimary: true,
    names: { en: 'Octopus', es: 'Pulpo', fr: 'Poulpe', it: 'Polpo', de: 'Krake', pt: 'Polvo', jp: 'タコ', zh: '章鱼', hi: 'अक्टूबर', sq: 'Oktapodi' },
    sounds: { en: 'Glub glub!', es: '¡Glub glub!', fr: 'Glub glub !', it: 'Blub blub!', de: 'Blubb blubb!', pt: 'Glub glub!', jp: 'プクプク', zh: '咕噜', hi: 'गड़गड़', sq: 'Blub!' }
  },
  { 
    letter: 'G', emoji: '🦀', color: 'bg-red-400', category: AnimalCategory.FISH, isAlphabetPrimary: true,
    names: { en: 'Crab', es: 'Cangrejo', fr: 'Crabe', it: 'Granchio', de: 'Krabbe', pt: 'Caranguejo', jp: 'カニ', zh: '螃蟹', hi: 'केकड़ा', sq: 'Gaforrja' },
    sounds: { en: 'Click click!', es: '¡Click click!', fr: 'Click !', it: 'Click!', de: 'Klick!', pt: 'Click!', jp: 'チョキチョキ', zh: '咔哒', hi: 'कट कट', sq: 'Kërcit!' }
  },
  { 
    letter: 'D', emoji: '🐬', color: 'bg-blue-400', category: AnimalCategory.FISH, isAlphabetPrimary: false,
    names: { en: 'Dolphin', es: 'Delfín', fr: 'Dauphin', it: 'Dauphin', de: 'Delfin', pt: 'Golfinho', jp: 'イルカ', zh: '海豚', hi: 'डॉल्फिन', sq: 'Delfini' },
    sounds: { en: 'Click click!', es: '¡Click click!', fr: 'Click !', it: 'Click!', de: 'Klick!', pt: 'Click!', jp: 'キュッキュッ', zh: '吱吱', hi: 'क्लिक', sq: 'Kërcit!' }
  },
  { 
    letter: 'J', emoji: '🪼', color: 'bg-purple-300', category: AnimalCategory.FISH, isAlphabetPrimary: false,
    names: { en: 'Jellyfish', es: 'Medusa', fr: 'Méduse', it: 'Medusa', de: 'Qualle', pt: 'Medusa', jp: 'クラゲ', zh: '水母', hi: 'जेलीफिश', sq: 'Medusa' },
    sounds: { en: 'Bloop!', es: '¡Bloop!', fr: 'Bloop !', it: 'Bloop!', de: 'Bloop!', pt: 'Bloop!', jp: 'ぷよぷよ', zh: '波波', hi: 'ब्लूप', sq: 'Blup!' }
  },
  { 
    letter: 'L', emoji: '🦞', color: 'bg-red-500', category: AnimalCategory.FISH, isAlphabetPrimary: true,
    names: { en: 'Lobster', es: 'Langosta', fr: 'Homard', it: 'Aragosta', de: 'Hummer', pt: 'Lagosta', jp: 'ロブスター', zh: '龙虾', hi: 'झींगा मछली', sq: 'Karavidhe' },
    sounds: { en: 'Click!', es: '¡Click!', fr: 'Click !', it: 'Click!', de: 'Klick!', pt: 'Click!', jp: 'カチッ', zh: '咔哒', hi: 'क्लिक', sq: 'Kërcit!' }
  },
  { 
    letter: 'S', emoji: '🦑', color: 'bg-pink-500', category: AnimalCategory.FISH, isAlphabetPrimary: true,
    names: { en: 'Squid', es: 'Calamar', fr: 'Calmar', it: 'Calamaro', de: 'Tintenfisch', pt: 'Lula', jp: 'イカ', zh: '鱿鱼', hi: 'स्क्विड', sq: 'Kalmari' },
    sounds: { en: 'Bloop!', es: '¡Bloop!', fr: 'Bloop !', it: 'Bloop!', de: 'Blub!', pt: 'Bloop!', jp: 'プクプク', zh: '咕噜', hi: 'ब्लूप', sq: 'Blub!' }
  },

  // --- REPTILES & AMPHIBIANS ---
  { 
    letter: 'G', emoji: '🐍', color: 'bg-emerald-600', category: AnimalCategory.REPTILES, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Snake', es: 'Serpiente', fr: 'Serpent', it: 'Serpente', de: 'Schlange', pt: 'Serpente', jp: 'ヘビ', zh: '蛇', hi: 'साँप', sq: 'Gjarpri' },
    sounds: { en: 'Hiss!', es: '¡Sss!', fr: 'Ssss !', it: 'Ssss!', de: 'Zisch!', pt: 'Ssss!', jp: 'シャー', zh: '嘶嘶', hi: 'फुफकार', sq: 'Sssss!' }
  },
  { 
    letter: 'Z', emoji: '🦎', color: 'bg-lime-400', category: AnimalCategory.REPTILES, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Lizard', es: 'Lagarto', fr: 'Lézard', it: 'Lucertola', de: 'Eidechse', pt: 'Lagarto', jp: 'トカゲ', zh: '蜥蜴', hi: 'छिपकली', sq: 'Zhapiku' },
    sounds: { en: 'Scurry!', es: '¡Scurry!', fr: 'Scurry !', it: 'Scurry!', de: 'Huschel!', pt: 'Scurry!', jp: 'カサカサ', zh: '跑掉', hi: 'दौड़ना', sq: 'Vrap!' }
  },
  { 
    letter: 'F', emoji: '🐸', color: 'bg-green-600', category: AnimalCategory.REPTILES, isAlphabetPrimary: false,
    names: { en: 'Frog', es: 'Rana', fr: 'Grenouille', it: 'Rana', de: 'Frosch', pt: 'Rã', jp: 'カエル', zh: '青蛙', hi: 'मेंढक', sq: 'Bretkosa' },
    sounds: { en: 'Ribbit!', es: '¡Ribbit!', fr: 'Coâ !', it: 'Cra cra!', de: 'Quak!', pt: 'Ribbit!', jp: 'ケロケロ', zh: '呱呱', hi: 'टर्र टर्र', sq: 'Kuak kuak!' }
  },
  { 
    letter: 'T', emoji: '🐢', color: 'bg-green-800', category: AnimalCategory.REPTILES, isAlphabetPrimary: false,
    names: { en: 'Turtle', es: 'Tortuga', fr: 'Tortue', it: 'Tartaruga', de: 'Schildkröte', pt: 'Tartaruga', jp: 'カメ', zh: '乌龟', hi: 'कछुआ', sq: 'Breshka' },
    sounds: { en: 'Slow!', es: '¡Lento!', fr: 'Lent !', it: 'Lento!', de: 'Langsam!', pt: 'Lento!', jp: 'のろのろ', zh: '慢慢', hi: 'धीma', sq: 'Butë!' }
  },
  { 
    letter: 'K', emoji: '🐊', color: 'bg-emerald-900', category: AnimalCategory.REPTILES, isAlphabetPrimary: true,
    names: { en: 'Crocodile', es: 'Cocodrilo', fr: 'Crocodile', it: 'Coccodrillo', de: 'Krokodil', pt: 'Crocodilo', jp: 'ワニ', zh: '鳄鱼', hi: 'मगरमच्छ', sq: 'Krokodili' },
    sounds: { en: 'Snap!', es: '¡Snap!', fr: 'Snap !', it: 'Snap!', de: 'Schnapp!', pt: 'Snap!', jp: 'パクッ', zh: '咔嚓', hi: 'तड़क', sq: 'Kërcit!' }
  },

  // --- INSECTS ---
  { 
    letter: 'B', emoji: '🐝', color: 'bg-yellow-400', category: AnimalCategory.INSECTS, isAlphabetPrimary: true,
    names: { en: 'Bee', es: 'Abeja', fr: 'Abeille', it: 'Ape', de: 'Biene', pt: 'Abelha', jp: 'ハチ', zh: '蜜蜂', hi: 'मधुमक्खी', sq: 'Bleta' },
    sounds: { en: 'Bzzzz!', es: '¡Bzzzz!', fr: 'Bzzzz !', it: 'Bzzzz !', de: 'Summ summ!', pt: 'Bzzz!', jp: 'ブーン', zh: '嗡嗡', hi: 'भिनभिनाना', sq: 'Bzzz bzzz!' }
  },
  { 
    letter: 'F', emoji: '🦋', color: 'bg-rose-400', category: AnimalCategory.INSECTS, isAlphabetPrimary: true,
    names: { en: 'Butterfly', es: 'Mariposa', fr: 'Papillon', it: 'Farfalla', de: 'Schmetterling', pt: 'Borboleta', jp: 'チョウ', zh: '蝴蝶', hi: 'तितली', sq: 'Flutura' },
    sounds: { en: 'Flap!', es: '¡Flap!', fr: 'Vole !', it: 'Vola!', de: 'Flap!', pt: 'Voa!', jp: 'ヒラヒラ', zh: '翩翩', hi: 'उड़ान', sq: 'Rrah krahët!' }
  },
  { 
    letter: 'L', emoji: '🐞', color: 'bg-red-600', category: AnimalCategory.INSECTS, isAlphabetPrimary: false,
    names: { en: 'Ladybug', es: 'Mariquita', fr: 'Coccinelle', it: 'Coccinella', de: 'Marienkäfer', pt: 'Joaninha', jp: 'テントウムシ', zh: '瓢虫', hi: 'लेडीबग', sq: 'Nusepashkë' },
    sounds: { en: 'Dotty!', es: '¡Points!', fr: 'Points !', it: 'Punti!', de: 'Pünktchen!', pt: 'Pintinhas!', jp: 'てんてん', zh: '点点', hi: 'बिंदी', sq: 'Pika!' }
  },
  { 
    letter: 'A', emoji: '🐜', color: 'bg-stone-800', category: AnimalCategory.INSECTS, isAlphabetPrimary: false,
    names: { en: 'Ant', es: 'Hormiga', fr: 'Fourmi', it: 'Formica', de: 'Ameise', pt: 'Formiga', jp: 'アリ', zh: '蚂蚁', hi: 'चींटी', sq: 'Milingona' },
    sounds: { en: 'March!', es: '¡Marcha!', fr: 'Marche !', it: 'Marcia!', de: 'Marsch!', pt: 'Marcha!', jp: 'テケテケ', zh: '走走', hi: 'मार्च', sq: 'Marsh!' }
  },
  { 
    letter: 'S', emoji: '🕷️', color: 'bg-slate-900', category: AnimalCategory.INSECTS, isAlphabetPrimary: false,
    names: { en: 'Spider', es: 'Araña', fr: 'Araignée', it: 'Ragno', de: 'Spinne', pt: 'Aranha', jp: 'クモ', zh: '蜘蛛', hi: 'मकड़ी', sq: 'Merimanga' },
    sounds: { en: 'Web!', es: '¡Red!', fr: 'Toile !', it: 'Tela!', de: 'Netz!', pt: 'Teia!', jp: 'スルスル', zh: '织网', hi: 'जाल', sq: 'Rrjetë!' }
  },
  { 
    letter: 'S', emoji: '🐌', color: 'bg-lime-200', category: AnimalCategory.INSECTS, isAlphabetPrimary: false,
    names: { en: 'Snail', es: 'Caracol', fr: 'Escargot', it: 'Chiocciola', de: 'Schnecke', pt: 'Caracol', jp: 'カタツムリ', zh: '蜗牛', hi: 'घोंघा', sq: 'Kërmilli' },
    sounds: { en: 'Slow!', es: '¡Lento!', fr: 'Lent !', it: 'Lento!', de: 'Langsam!', pt: 'Lento!', jp: 'のろのろ', zh: '慢慢', hi: 'धीमा', sq: 'Butë!' }
  },
  { 
    letter: 'K', emoji: '🦗', color: 'bg-green-500', category: AnimalCategory.INSECTS, isAlphabetPrimary: true,
    names: { en: 'Grasshopper', es: 'Saltamontes', fr: 'Sauterelle', it: 'Cavalletta', de: 'Heuschrecke', pt: 'Gafanhoto', jp: 'バッタ', zh: '蚱蜢', hi: 'टिड्डा', sq: 'Karkaleci' },
    sounds: { en: 'Chirp!', es: '¡Chirrido!', fr: 'Chirp !', it: 'Chirp!', de: 'Zirp!', pt: 'Chirp!', jp: 'ギィギィ', zh: '唧唧', hi: 'चीं', sq: 'Cik cik!' }
  },
  { 
    letter: 'V', emoji: '🐛', color: 'bg-lime-400', category: AnimalCategory.INSECTS, isAlphabetPrimary: true,
    names: { en: 'Caterpillar', es: 'Oruga', fr: 'Chenille', it: 'Bruco', de: 'Raupe', pt: 'Lagarta', jp: 'イモムシ', zh: '毛毛虫', hi: 'इल्ली', sq: 'Vemja' },
    sounds: { en: 'Munch!', es: '¡Munch!', fr: 'Munch !', it: 'Munch!', de: 'Munch!', pt: 'Munch!', jp: 'もぐもぐ', zh: '咀嚼', hi: 'मंच', sq: 'Kërcit!' }
  },
  { 
    letter: 'M', emoji: '🦟', color: 'bg-slate-500', category: AnimalCategory.INSECTS, isAlphabetPrimary: true,
    names: { en: 'Mosquito', es: 'Mosquito', fr: 'Moustique', it: 'Zanzara', de: 'Mücke', pt: 'Mosquito', jp: 'カ', zh: '蚊子', hi: 'मच्छर', sq: 'Mushkonja' },
    sounds: { en: 'Buzz!', es: '¡Bzz!', fr: 'Bzz !', it: 'Bzz!', de: 'Bzz!', pt: 'Bzz!', jp: 'ブーン', zh: '嗡嗡', hi: 'भिनभिनाना', sq: 'Bzzz bzzz!' }
  },

  // --- ALBANIAN POSTER OBJECTS (Specifically for Alphabet sq) ---
  { 
    letter: 'A', emoji: '✈️', color: 'bg-orange-500', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Airplane', es: 'Avión', fr: 'Avion', it: 'Aereo', de: 'Flugzeug', pt: 'Avião', jp: '飛行機', zh: '飞机', hi: 'हवाई जहाज', sq: 'Aeroplani' },
    sounds: { en: 'Zoom!', es: '¡Zoom!', fr: 'Vroum !', it: 'Vruuum!', de: 'Saus!', pt: 'Zoom!', jp: 'ビューン', zh: '呼啸', hi: 'ज़ूम', sq: 'Vruuum!' }
  },
  { 
    letter: 'C', emoji: '🎪', color: 'bg-red-500', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Circus', es: 'Circo', fr: 'Cirque', it: 'Circo', de: 'Zirkus', pt: 'Circo', jp: 'サーカス', zh: '马戏团', hi: 'सर्कस', sq: 'Cirku' },
    sounds: { en: 'Ta-da!', es: '¡Tachán!', fr: 'Ta-da !', it: 'Ta-dà!', de: 'Tada!', pt: 'Ta-da!', jp: 'ジャジャーン', zh: '哒哒', hi: 'ता-दा', sq: 'Ta-daaaa!' }
  },
  { 
    letter: 'Ç', emoji: '🧦', color: 'bg-sky-400', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isSpecial: true,
    names: { en: 'Socks', es: 'Calcetines', fr: 'Chaussettes', it: 'Calze', de: 'Socken', pt: 'Meias', jp: '靴下', zh: '袜子', hi: 'मोजे', sq: 'Çorapet' },
    sounds: { en: 'Soft!', es: '¡Suave!', fr: 'Doux !', it: 'Morbido!', de: 'Weich!', pt: 'Macio!', jp: 'ふわふわ', zh: '舒服', hi: 'नर्म', sq: 'Butë!' }
  },
  { 
    letter: 'DH', emoji: '🎁', color: 'bg-purple-500', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Gift', es: 'Regalo', fr: 'Cadeau', it: 'Regalo', de: 'Geschenk', pt: 'Presente', jp: 'プレゼント', zh: '礼物', hi: 'उपहार', sq: 'Dhurata' },
    sounds: { en: 'Surprise!', es: '¡Sorpresa!', fr: 'Surprise !', it: 'Sorpresa!', de: 'Überraschung!', pt: 'Surpresa!', jp: 'わあー', zh: '惊喜', hi: 'आश्चर्य', sq: 'Surprizë!' }
  },
  { 
    letter: 'Ë', emoji: '🍰', color: 'bg-pink-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isSpecial: true,
    names: { en: 'Dessert', es: 'Postre', fr: 'Dessert', it: 'Dolce', de: 'Nachtisch', pt: 'Sobremesa', jp: 'デザート', zh: '甜点', hi: 'मीठा', sq: 'Ëmbëlsira' },
    sounds: { en: 'Yummy!', es: '¡Rico!', fr: 'Miam !', it: 'Gnam!', de: 'Lecker!', pt: 'Delícia!', jp: 'もぐもぐ', zh: '好吃', hi: 'स्वादिष्ट', sq: 'E shijshme!' }
  },
  { 
    letter: 'I', emoji: '🦔', color: 'bg-amber-600', category: AnimalCategory.MAMMALS, isAlphabetPrimary: true,
    names: { en: 'Hedgehog', es: 'Erizo', fr: 'Hérisson', it: 'Riccio', de: 'Igel', pt: 'Ouriço', jp: 'ハリネズミ', zh: '刺猬', hi: 'कांटेदार जंगली चूहा', sq: 'Iriqi' },
    sounds: { en: 'Snuffle!', es: '¡Snuffle!', fr: 'Snuffle !', it: 'Snuffle!', de: 'Schnüffel!', pt: 'Snuffle!', jp: 'フンフン', zh: '闻闻', hi: 'सूँघना', sq: 'Nuhat!' }
  },
  { 
    letter: 'J', emoji: '🛌', color: 'bg-blue-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Pillow', es: 'Almohada', fr: 'Oreiller', it: 'Cuscino', de: 'Kissen', pt: 'Almofada', jp: 'まくら', zh: '枕头', hi: 'तकिया', sq: 'Jastëku' },
    sounds: { en: 'Soft!', es: '¡Suave!', fr: 'Doux !', it: 'Morbido!', de: 'Weich!', pt: 'Macio!', jp: 'ふわふわ', zh: '软软', hi: 'नर्म', sq: 'Butë!' }
  },
  { 
    letter: 'LL', emoji: '💡', color: 'bg-yellow-200', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Lightbulb', es: 'Bombilla', fr: 'Ampoule', it: 'Lampadina', de: 'Glühbirne', pt: 'Lâmpada', jp: '電気', zh: '灯', hi: 'बल्ब', sq: 'Llampa' },
    sounds: { en: 'Ping!', es: '¡Ping!', fr: 'Ping !', it: 'Ping!', de: 'Klick!', pt: 'Click!', jp: 'ピカッ', zh: '亮了', hi: 'क्लिक', sq: 'Dritë!' }
  },
  { 
    letter: 'NJ', emoji: '🦄', color: 'bg-fuchsia-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Unicorn', es: 'Unicornio', fr: 'Licorne', it: 'Unicorno', de: 'Einhorn', pt: 'Unicórnio', jp: 'ユニコーン', zh: '独角兽', hi: 'एकसिंगा', sq: 'Njëbrirëshi' },
    sounds: { en: 'Magic!', es: '¡Magia!', fr: 'Magie !', it: 'Magia!', de: 'Magie!', pt: 'Magia!', jp: 'キラキラ', zh: '神奇', hi: 'जादू', sq: 'Magji!' }
  },
  { 
    letter: 'RR', emoji: '⭕', color: 'bg-red-500', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Circle', es: 'Círculo', fr: 'Cercle', it: 'Cerchio', de: 'Kreis', pt: 'Círculo', jp: '丸', zh: '圆圈', hi: 'वृत्त', sq: 'Rrethi' },
    sounds: { en: 'Round!', es: '¡Redondo!', fr: 'Rond !', it: 'Tondo!', de: 'Rund!', pt: 'Redondo!', jp: 'コロコロ', zh: '圆圆的', hi: 'गोल', sq: 'Rrum!' }
  },
  { 
    letter: 'SH', emoji: '🏠', color: 'bg-orange-400', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'House', es: 'Casa', fr: 'Maison', it: 'Casa', de: 'Haus', pt: 'Casa', jp: '家', zh: '房子', hi: 'घर', sq: 'Shtëpia' },
    sounds: { en: 'Ding dong!', es: '¡Toc toc!', fr: 'Toc toc !', it: 'Toc toc!', de: 'Ding dong!', pt: 'Toc toc!', jp: 'ピンポーン', zh: '开门', hi: 'घंटी', sq: 'Ding dong!' }
  },
  { 
    letter: 'TH', emoji: '📞', color: 'bg-gray-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Call', es: 'Llamada', fr: 'Appel', it: 'Chiamata', de: 'Anruf', pt: 'Chamada', jp: '電話', zh: '电话', hi: 'कॉल', sq: 'Thirrje' },
    sounds: { en: 'Ring ring!', es: '¡Ring ring!', fr: 'Dring !', it: 'Dring dring!', de: 'Klingel!', pt: 'Trim trim!', jp: 'プルルル', zh: '铃铃', hi: 'ट्रिंग ट्रिंग', sq: 'Trin trin!' }
  },
  { 
    letter: 'V', emoji: '⛵', color: 'bg-blue-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Boat', es: 'Barco', fr: 'Bateau', it: 'Barca', de: 'Boot', pt: 'Barco', jp: 'ボート', zh: '船', hi: 'नाव', sq: 'Varka' },
    sounds: { en: 'Sway!', es: '¡Sway!', fr: 'Sway !', it: 'Sway!', de: 'Sway!', pt: 'Sway!', jp: 'ゆらゆら', zh: '摇晃', hi: 'झूमना', sq: 'Lëkundet!' }
  },
  { 
    letter: 'X', emoji: '🎽', color: 'bg-red-300', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Vest', es: 'Chaleco', fr: 'Gilet', it: 'Gilet', de: 'Weste', pt: 'Colete', jp: 'ベスト', zh: '背心', hi: 'बनयान', sq: 'Xhamadani' },
    sounds: { en: 'Snug!', es: '¡Snug!', fr: 'Snug !', it: 'Snug!', de: 'Snug!', pt: 'Snug!', jp: 'ぴっちり', zh: '舒服', hi: 'नर्म', sq: 'Butë!' }
  },
  { 
    letter: 'XH', emoji: '👖', color: 'bg-blue-600', category: AnimalCategory.OTHER, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Pocket', es: 'Bolsillo', fr: 'Poche', it: 'Tasca', de: 'Tasche', pt: 'Bolso', jp: 'ポケット', zh: '口袋', hi: 'जेब', sq: 'Xhepi' },
    sounds: { en: 'Zipper!', es: '¡Zip!', fr: 'Zip !', it: 'Zip!', de: 'Zack!', pt: 'Zip!', jp: 'スッ', zh: '拉上', hi: 'ज़िप', sq: 'Shshsh!' }
  },
  { 
    letter: 'Y', emoji: '⭐', color: 'bg-yellow-400', category: AnimalCategory.OTHER, isAlphabetPrimary: true,
    names: { en: 'Star', es: 'Estrella', fr: 'Étoile', it: 'Stella', de: 'Stern', pt: 'Estrela', jp: '星', zh: '星星', hi: 'तारा', sq: 'Ylli' },
    sounds: { en: 'Twinkle!', es: '¡Brilla!', fr: 'Twinkle !', it: 'Scintilla!', de: 'Twinkle!', pt: 'Brilha!', jp: 'キラキラ', zh: '闪烁', hi: 'टिमटिमाना', sq: 'Shkëlqe!' }
  },
  { 
    letter: 'ZH', emoji: '🦎', color: 'bg-lime-400', category: AnimalCategory.REPTILES, isAlphabetPrimary: true, isDigraph: true,
    names: { en: 'Lizard', es: 'Lagarto', fr: 'Lézard', it: 'Lucertola', de: 'Eidechse', pt: 'Lagarto', jp: 'トカゲ', zh: '蜥蜴', hi: 'छिपकली', sq: 'Zhapiku' },
    sounds: { en: 'Scurry!', es: '¡Scurry!', fr: 'Scurry !', it: 'Scurry!', de: 'Huschel!', pt: 'Scurry!', jp: 'カサカサ', zh: '跑掉', hi: 'दौड़ना', sq: 'Vrap!' }
  }
];

export const COLORS = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-orange-400'];

export const THEMES: Record<ThemeType, { bg: string, card: string, primary: string, accent: string }> = {
  forest: { bg: 'bg-green-50', card: 'bg-white', primary: 'text-green-700', accent: 'bg-green-100' },
  ocean: { bg: 'bg-blue-50', card: 'bg-white', primary: 'text-blue-700', accent: 'bg-blue-100' },
  sunset: { bg: 'bg-orange-50', card: 'bg-white', primary: 'text-orange-700', accent: 'bg-orange-100' },
  space: { bg: 'bg-slate-900', card: 'bg-slate-800', primary: 'text-indigo-300', accent: 'bg-indigo-900/50' }
};

export const LOCALIZED_VOICES: Record<LanguageType, Record<VoiceType, string>> = {
  en: { Kore: 'Kore' },
  es: { Kore: 'Elena' },
  fr: { Kore: 'Amélie' },
  it: { Kore: 'Angela' },
  de: { Kore: 'Sarah' },
  pt: { Kore: 'Beatriz' },
  jp: { Kore: 'Yuki' },
  zh: { Kore: 'Xiaomei' },
  hi: { Kore: 'Isha' },
  sq: { Kore: 'Arta' }
};

// Fixed the missing properties for LanguageType to satisfy Record requirement
export const TRANSLATIONS: Record<LanguageType, any> = {
  en: { 
    subtitle: "Let's learn together!", numbers: "Counting 1 to 100 🔢", alphabet: "Learning the Alphabet 🔤", sounds: "Animal Kingdom 🦁", quiz: "Animal Match Game! 🎮", studio: "AI Art Studio 🎨", 
    numberIs: "The number is", letterIs: "is for", says: "says", whichOne: "Which one is for", startWith: "What letter does {name} start with?", whoSays: "Who says", 
    correct: "FANTASTIC! 🎈", wrong: "Try again! 🌈", praise: "That's right! Great job!", praiseExpert: "Incredible! You are an expert!", consolation: "Oopsie! It's the {answer}.", 
    settings: "Settings ⚙️", theme: "Theme", language: "Language", voice: "Voice", close: "Done!", back: "Back", checking: "Checking...", listening: "Listening...", voiceHold: "Hold to Speak", 
    themeForest: "Forest", themeOcean: "Ocean", themeSunset: "Sunset", themeSpace: "Space", studioIntro: "Create Magic with AI! ✨", studioEdit: "Magic Edit", studioAnimate: "Animate with Veo", 
    promptPlaceholder: "What should the AI do? (e.g., Add a retro filter)", editButton: "Sparkle Edit! ✨", animateButton: "Make it Move! 🎬", uploadFirst: "Upload a photo first! 📸", 
    generating: "The AI is working hard... 🎨", rekey: "Please select an API key to use Veo!", selectKey: "Select API Key", cat_all: "All", cat_mammals: "Mammals", cat_birds: "Birds", cat_fish: "Sea Life", cat_reptiles: "Reptiles", cat_insects: "Insects",
    levelEasy: "Easy 🌱", levelMedium: "Medium ⭐", levelHard: "Hard 👑", levelTitle: "Choose a Level! 🌟",
    offlineFolder: "Magic Voice Box (Offline Folder) 📁", downloadVoices: "Store Voices Offline", downloadDesc: "Download all numbers and animals so they work even without internet!", downloadProgress: "Packing the Magic Box...", downloadDone: "All stored! Magic Box is full! ✨"
  },
  es: { 
    subtitle: "¡Aprendamos juntos!", numbers: "Contando del 1 al 100 🔢", alphabet: "Aprendiendo el Alfabeto 🔤", sounds: "Reino Animal 🦁", quiz: "¡Juego de Parejas! 🎮", studio: "Estudio de Arte IA 🎨", 
    numberIs: "El número es", letterIs: "es de", says: "dice", whichOne: "¿Cuál es para", startWith: "¿Con qué letra empieza {name}?", whoSays: "¿Quién dice", 
    correct: "¡FANTÁSTICO! 🎈", wrong: "¡Inténtalo de nuevo! 🌈", praise: "¡Eso es! ¡Buen trabalho!", praiseExpert: "¡Increíble! ¡Eres un experto!", consolation: "¡Uy! Es el {answer}.", 
    settings: "Ajustes ⚙️", theme: "Tema", language: "Idioma", voice: "Voz", close: "¡Listo!", back: "Atrás", checking: "Revisando...", listening: "Escuchando...", voiceHold: "Mantén para hablar", 
    themeForest: "Bosque", themeOcean: "Océano", themeSunset: "Atardecer", themeSpace: "Espacio", studioIntro: "¡Crea magia con IA! ✨", studioEdit: "Edición Mágica", studioAnimate: "Animar con Veo", 
    promptPlaceholder: "¿Qué debería hacer la IA? (ej. Pon un filtro retro)", editButton: "¡Editar con magia! ✨", animateButton: "¡Que se mueva! 🎬", uploadFirst: "¡Sube una foto primero! 📸", 
    generating: "La IA está trabajando duro... 🎨", rekey: "¡Selecciona una clave API para usar Veo!", selectKey: "Seleccionar clave API", cat_all: "Todos", cat_mammals: "Mamíferos", cat_birds: "Aves", cat_fish: "Vida Marina", cat_reptiles: "Répteis", cat_insects: "Insectos",
    levelEasy: "Fácil 🌱", levelMedium: "Medio ⭐", levelHard: "Difícil 👑", levelTitle: "¡Elige un nivel! 🌟",
    offlineFolder: "Caja Mágica (Carpeta Offline) 📁", downloadVoices: "Guardar Voces", downloadDesc: "¡Descarga los números y animales para jugar sin internet!", downloadProgress: "Llenando la caja...", downloadDone: "¡Listo! La caja está llena. ✨"
  },
  fr: { subtitle: "Apprenons ensemble !", numbers: "Compter de 1 à 100 🔢", alphabet: "Apprendre l'alphabet 🔤", sounds: "Royaume animal 🦁", quiz: "Jeu de correspondance ! 🎮", studio: "Studio d'art IA 🎨", numberIs: "Le nombre est", letterIs: "est pour", says: "dit", whichOne: "Lequel est pour", startWith: "Par quelle lettre commence {name} ?", whoSays: "Qui dit", correct: "FANTASTIQUE ! 🎈", wrong: "Réessaie ! 🌈", praise: "C'est ça ! Bon travail !", praiseExpert: "Incroyable ! Tu es un expert !", consolation: "Oups ! C'est le {answer}.", settings: "Paramètres ⚙️", theme: "Thème", language: "Langue", voice: "Voix", close: "Terminé !", back: "Retour", checking: "Vérification...", listening: "Écoute...", voiceHold: "Maintenir pour parler", themeForest: "Forêt", themeOcean: "Océan", themeSunset: "Coucher de soleil", themeSpace: "Espace", studioIntro: "Créez de la magie avec l'IA ! ✨", studioEdit: "Édition magique", studioAnimate: "Animer avec Veo", promptPlaceholder: "Que doit faire l'IA ? (ex. Ajouter un filtre rétro)", editButton: "Édition scintillante ! ✨", animateButton: "Faites-le bouger ! 🎬", uploadFirst: "Téléchargez d'abord une photo ! 📸", generating: "L'IA travaille dur... 🎨", rekey: "Veuillez sélectionner une clé API pour utiliser Veo !", selectKey: "Sélectionner la clé API", cat_all: "Tout", cat_mammals: "Mammifères", cat_birds: "Oiseaux", cat_fish: "Vie marine", cat_reptiles: "Reptiles", cat_insects: "Insectes", levelEasy: "Facile 🌱", levelMedium: "Moyen ⭐", levelHard: "Difficile 👑", levelTitle: "Choisissez un niveau ! 🌟", offlineFolder: "Boîte vocale magique (Dossier hors ligne) 📁", downloadVoices: "Stocker les voix hors ligne", downloadDesc: "Téléchargez tous les nombres et animaux pour qu'ils fonctionnent même sans internet !", downloadProgress: "Emballage de la boîte magique...", downloadDone: "Tout est stocké ! La boîte magique est pleine ! ✨" },
  it: { subtitle: "Impariamo insieme!", numbers: "Contare da 1 a 100 🔢", alphabet: "Imparare l'alfabeto 🔤", sounds: "Regno animale 🦁", quiz: "Gioco di abbinamento! 🎮", studio: "Studio d'arte IA 🎨", numberIs: "Il numero è", letterIs: "è per", says: "dice", whichOne: "Quale è per", startWith: "Con quale lettera inizia {name}?", whoSays: "Chi dice", correct: "FANTASTICO! 🎈", wrong: "Riprova! 🌈", praise: "Esatto! Ottimo lavoro!", praiseExpert: "Incredibile! Sei un esperto!", consolation: "Ops! È il {answer}.", settings: "Impostazioni ⚙️", theme: "Tema", language: "Lingua", voice: "Voce", close: "Fatto!", back: "Indietro", checking: "Controllo...", listening: "Ascolto...", voiceHold: "Tieni premuto per parlare", themeForest: "Foresta", themeOcean: "Oceano", themeSunset: "Tramonto", themeSpace: "Spazio", studioIntro: "Crea magia con l'IA! ✨", studioEdit: "Modifica magica", studioAnimate: "Anima con Veo", promptPlaceholder: "Cosa dovrebbe fare l'IA? (es. Aggiungi un filtro retrò)", editButton: "Modifica scintillante! ✨", animateButton: "Fallo muovere! 🎬", uploadFirst: "Carica prima una foto! 📸", generating: "L'IA sta lavorando sodo... 🎨", rekey: "Seleziona una chiave API per usare Veo!", selectKey: "Seleziona chiave API", cat_all: "Tutti", cat_mammals: "Mammiferi", cat_birds: "Uccelli", cat_fish: "Vita marina", cat_reptiles: "Rettili", cat_insects: "Insetti", levelEasy: "Facile 🌱", levelMedium: "Medio ⭐", levelHard: "Difficile 👑", levelTitle: "Scegli un livello! 🌟", offlineFolder: "Scatola vocale magica (Cartella offline) 📁", downloadVoices: "Memorizza voci offline", downloadDesc: "Scarica tutti i numeri e gli animali così funzionano anche senza internet!", downloadProgress: "Confezionamento della scatola magica...", downloadDone: "Tutto memorizzato! La scatola magica è piena! ✨" },
  de: { subtitle: "Lass uns zusammen lernen!", numbers: "Zählen von 1 bis 100 🔢", alphabet: "Das Alphabet lernen 🔤", sounds: "Tierreich 🦁", quiz: "Tier-Match-Spiel! 🎮", studio: "KI-Kunststudio 🎨", numberIs: "Die Nummer ist", letterIs: "ist für", says: "sagt", whichOne: "Welches ist für", startWith: "Mit welchem Buchstaben beginnt {name}?", whoSays: "Wer sagt", correct: "FANTASTISCH! 🎈", wrong: "Versuch es noch einmal! 🌈", praise: "Das ist richtig! Gute Arbeit!", praiseExpert: "Unglaublich! Du bist ein Experte!", consolation: "Hoppla! Es ist der {answer}.", settings: "Einstellungen ⚙️", theme: "Thema", language: "Sprache", voice: "Stimme", close: "Fertig!", back: "Zurück", checking: "Prüfen...", listening: "Hören...", voiceHold: "Halten zum Sprechen", themeForest: "Wald", themeOcean: "Ozean", themeSunset: "Sonnenuntergang", themeSpace: "Weltraum", studioIntro: "Erschaffe Magie mit KI! ✨", studioEdit: "Magische Bearbeitung", studioAnimate: "Animieren mit Veo", promptPlaceholder: "Was soll die KI tun? (z.B. Retro-Filter hinzufügen)", editButton: "Glitzernde Bearbeitung! ✨", animateButton: "Lass es sich bewegen! 🎬", uploadFirst: "Lade zuerst ein Foto hoch! 📸", generating: "Die KI arbeitet hart... 🎨", rekey: "Bitte wähle einen API-Schlüssel aus, um Veo zu verwenden!", selectKey: "API-Schlüssel auswählen", cat_all: "Alle", cat_mammals: "Säugetiere", cat_birds: "Vögel", cat_fish: "Meereslebewesen", cat_reptiles: "Reptilien", cat_insects: "Insekten", levelEasy: "Einfach 🌱", levelMedium: "Mittel ⭐", levelHard: "Schwer 👑", levelTitle: "Wähle ein Level! 🌟", offlineFolder: "Magische Sprachbox (Offline-Ordner) 📁", downloadVoices: "Stimmen offline speichern", downloadDesc: "Lade alle Zahlen und Tiere herunter, damit sie auch ohne Internet funktionieren!", downloadProgress: "Die magische Box packen...", downloadDone: "Alles gespeichert! Die magische Box ist voll! ✨" },
  pt: { subtitle: "Vamos aprender juntos!", numbers: "Contando de 1 a 100 🔢", alphabet: "Aprendendo o Alfabeto 🔤", sounds: "Reino Animal 🦁", quiz: "Jogo de Combinar Animais! 🎮", studio: "Estúdio de Arte IA 🎨", numberIs: "O número é", letterIs: "é para", says: "diz", whichOne: "Qual é para", startWith: "Com que letra começa {name}?", whoSays: "Quem diz", correct: "FANTÁSTICO! 🎈", wrong: "Tente novamente! 🌈", praise: "Isso mesmo! Bom trabalho!", praiseExpert: "Incrível! Você é um especialista!", consolation: "Ops! É o {answer}.", settings: "Configurações ⚙️", theme: "Tema", language: "Idioma", voice: "Voz", close: "Pronto!", back: "Voltar", checking: "Verificando...", listening: "Ouvindo...", voiceHold: "Segure para Falar", themeForest: "Floresta", themeOcean: "Oceano", themeSunset: "Pôr do Sol", themeSpace: "Espaço", studioIntro: "Crie Magia com IA! ✨", studioEdit: "Edição Mágica", studioAnimate: "Animar com Veo", promptPlaceholder: "O que a IA deve fazer? (ex: Adicionar um filtro retrô)", editButton: "Edição com Brilho! ✨", animateButton: "Faça-o Mover! 🎬", uploadFirst: "Carregue uma foto primeiro! 📸", generating: "A IA está trabalhando duro... 🎨", rekey: "Por favor, selecione uma chave API para usar o Veo!", selectKey: "Selecionar Chave API", cat_all: "Todos", cat_mammals: "Mamíferos", cat_birds: "Aves", cat_fish: "Vida Marinha", cat_reptiles: "Répteis", cat_insects: "Insetos", levelEasy: "Fácil 🌱", levelMedium: "Médio ⭐", levelHard: "Difícil 👑", levelTitle: "Escolha um Nível! 🌟", offlineFolder: "Caixa de Voz Mágica (Pasta Offline) 📁", downloadVoices: "Armazenar Vozes Offline", downloadDesc: "Baixe todos os números e animais para que funcionem mesmo sem internet!", downloadProgress: "Embalando a Caixa Mágica...", downloadDone: "Tudo armazenado! A Caixa Mágica está cheia! ✨" },
  jp: { subtitle: "いっしょに学ぼう！", numbers: "1から100までかぞえよう 🔢", alphabet: "アルファベットを学ぼう 🔤", sounds: "動物の王国 🦁", quiz: "動物あてっこゲーム！ 🎮", studio: "AIアートスタジオ 🎨", numberIs: "すうじは", letterIs: "は", says: "は", whichOne: "はどれかな？", startWith: "{name}のはじまる文字はなにかな？", whoSays: "だれの声かな？", correct: "すごい！ 🎈", wrong: "もう一度やってみて！ 🌈", praise: "あたり！ よくできました！", praiseExpert: "すばらしい！ きみははかせだね！", consolation: "あ、せいかいは {answer} だよ。", settings: "せってい ⚙️", theme: "テーマ", language: "ことば", voice: "こえ", close: "おわり！", back: "もどる", checking: "かくにん中...", listening: "きいています...", voiceHold: "おしながら話してね", themeForest: "もり", themeOcean: "うみ", themeSunset: "ゆうやけ", themeSpace: "うちゅう", studioIntro: "AIでまほうをつくろう！ ✨", studioEdit: "まほうのへんしゅう", studioAnimate: "Veoでうごかそう", promptPlaceholder: "AIになにをしてもらう？ (例: レトロなフィルターをつけて)", editButton: "まほうのへんしゅう！ ✨", animateButton: "うごかしてみよう！ 🎬", uploadFirst: "まずは写真をアップロードしてね！ 📸", generating: "AIががんばっています... 🎨", rekey: "VeoをつかうするにはAPIキーをえらんでね！", selectKey: "APIキーをえらぶ", cat_all: "すべて", cat_mammals: "ほにゅうるい", cat_birds: "とり", cat_fish: "うみの生きもの", cat_reptiles: "はちゅうるい", cat_insects: "こんちゅう", levelEasy: "かんたん 🌱", levelMedium: "ふつう ⭐", levelHard: "むずかしい 👑", levelTitle: "レベルをえらぼう！ 🌟", offlineFolder: "まほうの声の箱 (オフライン) 📁", downloadVoices: "声を保存する", downloadDesc: "インターネットがなくてもあそべるように、すうじと動物の声をダウンロードしよう！", downloadProgress: "まほうの箱につめています...", downloadDone: "ぜんぶ入ったよ！ まほうの箱がいっぱい！ ✨" },
  zh: { subtitle: "让我们一起学习吧！", numbers: "数数 1 到 100 🔢", alphabet: "学习字母表 🔤", sounds: "动物王国 🦁", quiz: "动物配对游戏！ 🎮", studio: "AI 艺术工作室 🎨", numberIs: "数字是", letterIs: "代表", says: "说", whichOne: "哪一个是", startWith: "{name} 以什么字母开头？", whoSays: "谁在说", correct: "太棒了！ 🎈", wrong: "再试一次！ 🌈", praise: "没错！做得好！", praiseExpert: "太不可思议了！你是专家！", consolation: "哎呀！是 {answer}。", settings: "设置 ⚙️", theme: "主题", language: "声音", voice: "声音", close: "完成！", back: "返回", checking: "检查中...", listening: "正在听...", voiceHold: "按住说话", themeForest: "森林", themeOcean: "海洋", themeSunset: "日落", themeSpace: "太空", studioIntro: "用 AI 创造魔法！ ✨", studioEdit: "魔法编辑", studioAnimate: "用 Veo 动画化", promptPlaceholder: "AI 应该做什么？（例如：添加复古滤镜）", editButton: "闪闪发光的编辑！ ✨", animateButton: "让它动起来！ 🎬", uploadFirst: "请先上传照片！ 📸", generating: "AI 正在努力工作... 🎨", rekey: "请选择 API 密钥以使用 Veo！", selectKey: "选择 API 密钥", cat_all: "全部", cat_mammals: "哺乳动物", cat_birds: "鸟类", cat_fish: "海洋生物", cat_reptiles: "爬行动物", cat_insects: "昆虫", levelEasy: "简单 🌱", levelMedium: "普通 ⭐", levelHard: "困难 👑", levelTitle: "选择一个级别！ 🌟", offlineFolder: "魔法语音盒（离线文件夹） 📁", downloadVoices: "离线存储语音", downloadDesc: "下载所有数字和动物，以便在没有网络的情况下也能使用！", downloadProgress: "正在打包魔法盒...", downloadDone: "全部存储完毕！魔法盒已满！ ✨" },
  hi: { subtitle: "चलो साथ मिलकर सीखते हैं!", numbers: "1 से 100 तक गिनती 🔢", alphabet: "वर्णमाला सीखना 🔤", sounds: "पशु साम्राज्य 🦁", quiz: "पशु मिलान खेल! 🎮", studio: "एआई आर्ट स्टूडियो 🎨", numberIs: "संख्या है", letterIs: "के लिए है", says: "कहता है", whichOne: "कौन सा है", startWith: "{name} किस अक्षर से शुरू होता है?", whoSays: "कौन कहता है", correct: "शानदार! 🎈", wrong: "फिर से कोशिश करें! 🌈", praise: "सही कहा! बहुत बढ़िया!", praiseExpert: "अविश्वसनीय! आप एक विशेषज्ञ हैं!", consolation: "ओह! यह {answer} है।", settings: "सेटिंग्स ⚙️", theme: "थीम", language: "भाषा", voice: "आवाज़", close: "हो गया!", back: "पीछे", checking: "जाँच हो रही है...", listening: "सुन रहा हूँ...", voiceHold: "बोलने के लिए दबाए रखें", themeForest: "जंगल", themeOcean: "महासागर", themeSunset: "सूर्यास्त", themeSpace: "अंतरिक्ष", studioIntro: "एआई के साथ जादू बनाएं! ✨", studioEdit: "मैजिक एडिट", studioAnimate: "Veo के साथ एनिमेट करें", promptPlaceholder: "एआई को क्या करना चाहिए? (जैसे, रेट्रो फ़िल्टर जोड़ें)", editButton: "चमकदार संपादन! ✨", animateButton: "इसे चलाएं! 🎬", uploadFirst: "पहले एक फ़ोटो अपलोड करें! 📸", generating: "एआई कड़ी मेहनत कर रहा है... 🎨", rekey: "Veo का उपयोग करने के लिए कृपया एक API कुंजी चुनें!", selectKey: "API कुंजी चुनें", cat_all: "सभी", cat_mammals: "स्तनधारी", cat_birds: "पक्षी", cat_fish: "समुद्री जीव", cat_reptiles: "सरीसृप", cat_insects: "कीड़े", levelEasy: "आसान 🌱", levelMedium: "मध्यम ⭐", levelHard: "कठिन 👑", levelTitle: "एक स्तर चुनें! 🌟", offlineFolder: "मैजिक वॉयस बॉक्स (ऑफ़लाइन फ़ोल्डर) 📁", downloadVoices: "आवाज़ें ऑफ़लाइन संग्रहीत करें", downloadDesc: "सभी नंबरों और जानवरों को डाउनलोड करें ताकि वे इंटरनेट के बिना भी काम करें!", downloadProgress: "मैजिक बॉक्स पैक किया जा रहा है...", downloadDone: "सब संग्रहीत! मैजिक बॉक्स भर गया है! ✨" },
  sq: { 
    subtitle: "Le të mësojmë së bashku!", numbers: "Numërimi 1 deri në 100 🔢", alphabet: "Mësimi i Alfabetit 🔤", sounds: "Mbretëria e Kafshëve 🦁", quiz: "Loja e Kafshëve! 🎮", studio: "Studio Arti AI 🎨", 
    numberIs: "Numri është", letterIs: "është për", says: "thotë", whichOne: "Cila është për", startWith: "Me çfarë shkronje fillon {name}?", whoSays: "Kush thotë", 
    correct: "FANTASTIKE! 🎈", wrong: "Provo përsëri! 🌈", praise: "Ashtu është! Punë e shkëlqyer!", praiseExpert: "Inkurajuese! Ti je një ekspert!", consolation: "Ups! Është {answer}.", 
    settings: "Cilësimet ⚙️", theme: "Tema", language: "Gjuha", voice: "Zëri", close: "U krye!", back: "Mbrapa", checking: "Duke kontrolluar...", listening: "Duke dëgjuar...", voiceHold: "Mbaj për të folur", 
    themeForest: "Pylli", themeOcean: "Oqeani", themeSunset: "Perëndimi", themeSpace: "Hapësira", studioIntro: "Krijo Magji me AI! ✨", studioEdit: "Redaktim Magjik", studioAnimate: "Animo me Veo", 
    promptPlaceholder: "Çfarë duhet të bëjë AI? (p.sh. Shto një filtër retro)", editButton: "Redaktim Shkëlqyes! ✨", animateButton: "Bëje të lëvizë! 🎬", uploadFirst: "Ngarko një foto së pari! 📸", 
    generating: "AI po punon shumë... 🎨", rekey: "Ju lutem zgjidhni një çelës API për të përdorur Veo!", selectKey: "Zgjidh çelësin API", cat_all: "Të gjitha", cat_mammals: "Gjitari", cat_birds: "Zogjtë", cat_fish: "Jeta në det", cat_reptiles: "Zvarranikët", cat_insects: "Insektet",
    levelEasy: "Lehtë 🌱", levelMedium: "Mesatare ⭐", levelHard: "Vështirë 👑", levelTitle: "Zgjidh një Nivel! 🌟",
    offlineFolder: "Kutia Magjike e Zërit (Dosja Offline) 📁", downloadVoices: "Ruaj Zërat Offline", downloadDesc: "Shkarko të gjithë numrat dhe kafshët që të punojnë edhe pa internet!", downloadProgress: "Duke paketuar kutinë magjike...", downloadDone: "Të gjitha u ruajtën! Kutia magjike është plot! ✨"
  }
};
