// Learn with Eyes — Class 4 Science
// Chapters: 1. Nutrients in Our Food, 2. Balanced Diet

const STATE = {
  page: 'home',
  lang: 'en', // 'en' | 'hi'
  fontIdx: 0,
  dark: false,
  student: localStorage.getItem('lwe4_student') || 'Student 1',
  scores: JSON.parse(localStorage.getItem('lwe4_scores') || '{}'),
  answers: {}
};

const CHAPTERS = {
  ch1: {
    id: 'ch1',
    icon: '🍎',
    title: { en: '1. Food: Our Basic Need', hi: '1. भोजन: हमारी मूल आवश्यकता' },
    subtitle: {
      en: 'Learn about nutrients in our food, balanced diet, good eating habits, and food preservation.',
      hi: 'हमारे भोजन में पोषक तत्व, संतुलित आहार, अच्छी खाने की आदतें और भोजन संरक्षण के बारे में जानें।'
    },
    videos: [
      { id: 'Pni7bmnxy7g', title: 'Nutrients in Our Food — Part 1', url: 'https://youtu.be/Pni7bmnxy7g' },
      { id: 'vd0NWtGl2W8', title: 'Nutrients in Our Food — Part 2', url: 'https://youtu.be/vd0NWtGl2W8' },
      { id: 'NOW8jZ8tUmM', title: 'Nutrients in Our Food — Part 3', url: 'https://youtu.be/NOW8jZ8tUmM' }
    ],
    cards: [
      {
        emoji: '🌾',
        badge: 'Energy-Giving Food',
        title: { en: 'Carbohydrates', hi: 'कार्बोहाइड्रेट' },
        text: {
          en: 'Carbohydrates give us energy to work, study, and play. Sugar and starch are two types of carbohydrates. Sources: Potatoes, wheat, rice, bread, maize, and oatmeal.',
          hi: 'कार्बोहाइड्रेट हमें काम करने, पढ़ने और खेलने के लिए ऊर्जा देते हैं। शक्कर और स्टार्च इसके दो प्रकार हैं। स्रोत: आलू, गेहूँ, चावल, ब्रेड, मक्का।'
        }
      },
      {
        emoji: '🧈',
        badge: 'Energy-Giving Food',
        title: { en: 'Fats', hi: 'वसा (फैट्स)' },
        text: {
          en: 'Fats give us much more energy than carbohydrates, so they should not be eaten in large amounts. Extra fat is stored in the body. Sources: Oil, nuts, butter, and meat.',
          hi: 'वसा कार्बोहाइड्रेट से अधिक ऊर्जा देती है, इसलिए इसे अधिक मात्रा में नहीं खाना चाहिए। स्रोत: तेल, मेवे, मक्खन और मांस।'
        }
      },
      {
        emoji: '🥚',
        badge: 'Body-Building Food',
        title: { en: 'Proteins', hi: 'प्रोटीन' },
        text: {
          en: 'Proteins help build new cells and repair worn-out cells. Growing children need more proteins! Sources: Fish, eggs, cheese, meat, and pulses.',
          hi: 'प्रोटीन नई कोशिकाएँ बनाने और शरीर की मरम्मत में मदद करते हैं। बढ़ते बच्चों को अधिक प्रोटीन चाहिए। स्रोत: मछली, अंडे, पनीर, दालें।'
        }
      },
      {
        emoji: '🥦',
        badge: 'Protective Food',
        title: { en: 'Vitamins & Minerals', hi: 'विटामिन और खनिज' },
        text: {
          en: 'They keep us healthy by fighting against diseases and help form teeth, bones, and blood. Sources: Fruits, vegetables, milk, meat, and fish.',
          hi: 'ये बीमारियों से लड़कर हमें स्वस्थ रखते हैं और दाँत, हड्डियाँ व खून बनाने में मदद करते हैं। स्रोत: फल, सब्ज़ियाँ, दूध।'
        }
      },
      {
        emoji: '🥗',
        badge: 'Digestive Helper',
        title: { en: 'Roughage (Fibre)', hi: 'रेशे (रफेज)' },
        text: {
          en: 'Roughage is the part of food we cannot digest. It helps remove wastes from the body. Sources: Raw vegetables, fruits, brown rice, and oatmeal.',
          hi: 'रफेज भोजन का वह भाग है जिसे हम पचा नहीं सकते। यह शरीर से अपशिष्ट बाहर निकालने में मदद करता है। स्रोत: कच्ची सब्ज़ियाँ, फल।'
        }
      },
      {
        emoji: '💧',
        badge: 'Essential',
        title: { en: 'Water & Milk', hi: 'पानी और दूध' },
        text: {
          en: 'Three-fourths of our body weight is water. Drink 6–8 glasses daily. Milk is a complete food—growing children should drink at least 2 glasses daily.',
          hi: 'हमारे शरीर का तीन-चौथाई भाग पानी है। रोज़ 6–8 गिलास पानी पिएँ। दूध एक संपूर्ण आहार है—रोज़ कम से कम 2 गिलास पिएँ।'
        }
      },
      {
        emoji: '🍽️',
        badge: 'Balanced Diet',
        title: { en: 'Balanced Diet & Food Pyramid', hi: 'संतुलित आहार' },
        text: {
          en: 'A diet containing all nutrients in the correct proportion is a balanced diet. Eat plenty of cereals, fruits & vegetables, moderate milk & proteins, and very little fats/sweets.',
          hi: 'जिस आहार में सभी पोषक तत्व सही मात्रा में हों, उसे संतुलित आहार कहते हैं।'
        }
      },
      {
        emoji: '❄️',
        badge: 'Preservation',
        title: { en: 'Good Habits & Food Preservation', hi: 'अच्छी आदतें और संरक्षण' },
        text: {
          en: 'Wash hands before eating and wash vegetables before chopping. Preserve food by freezing, canning, salting, sweetening (jam), oiling (pickles), or dehydrating.',
          hi: 'खाने से पहले हाथ धोएँ और सब्ज़ियाँ काटने से पहले धोएँ। भोजन को जमाकर, नमक/तेल या सुखाकर सुरक्षित रखें।'
        }
      }
    ],
    quiz: [
      {
        q: 'Rice, wheat, maize and potato are rich sources of ______.',
        options: ['proteins', 'carbohydrates', 'vitamins', 'roughage'],
        answer: 1
      },
      {
        q: 'The other name for body-building food is ______.',
        options: ['roughage', 'minerals', 'proteins', 'vitamins'],
        answer: 2
      },
      {
        q: 'The fibre content of food is called ______.',
        options: ['proteins', 'vitamin', 'roughage', 'mineral'],
        answer: 2
      },
      {
        q: 'Growing children require more ______.',
        options: ['fats', 'proteins', 'roughage', 'sugar'],
        answer: 1
      },
      {
        q: 'Sugar and ______ are two types of carbohydrates.',
        options: ['starch', 'water', 'minerals', 'fats'],
        answer: 0
      },
      {
        q: 'True or False: Oil, butter and meat are rich in carbohydrates.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'True or False: Roughage is the part of food we cannot digest.',
        options: ['True', 'False'],
        answer: 0
      },
      {
        q: 'Who am I? "My name starts with the letter V. I help you fight against various diseases."',
        options: ['Vitamins', 'Water', 'Carbohydrates', 'Fats'],
        answer: 0
      }
    ]
  },

  ch2: {
    id: 'ch2',
    icon: '🦷',
    title: { en: '2. Teeth and Microbes', hi: '2. दाँत और सूक्ष्मजीव' },
    subtitle: {
      en: 'Learn about sets and kinds of teeth, tooth structure and care, microbes, and the digestive system.',
      hi: 'दाँतों के प्रकार, संरचना, देखभाल, सूक्ष्मजीवों और पाचन तंत्र के बारे में जानें।'
    },
    videos: [
      { id: 'hdJZWGarXmQ', title: 'Teeth and Microbes — Video Lesson', url: 'https://youtu.be/hdJZWGarXmQ' }
    ],
    cards: [
      {
        emoji: '👶',
        badge: 'Two Sets of Teeth',
        title: { en: 'Temporary & Permanent Teeth', hi: 'अस्थायी और स्थायी दाँत' },
        text: {
          en: 'Temporary (milk) teeth: 20 teeth (10 in each jaw), start growing at 6 months. Permanent teeth: 32 teeth (16 in each jaw), replace milk teeth around age 6–7.',
          hi: 'दूध के दाँत: 20 दाँत (हर जबड़े में 10)। स्थायी दाँत: 32 दाँत (हर जबड़े में 16)।'
        }
      },
      {
        emoji: '🦷',
        badge: 'Structure of a Tooth',
        title: { en: 'Crown, Neck, Root & Layers', hi: 'दाँत की संरचना' },
        text: {
          en: 'Parts: Crown (visible), Neck (gum line), Root (inside gum). Layers: Enamel (hardest white outer layer), Dentine (below enamel), and soft Pulp (with nerves & blood vessels).',
          hi: 'भाग: क्राउन, नेक, रूट। परतें: इनेमल (सबसे कठोर सफेद परत), डेंटाइन और पल्प।'
        }
      },
      {
        emoji: '✂️',
        badge: 'Kinds of Teeth',
        title: { en: 'Incisors, Canines, Premolars, Molars', hi: 'दाँतों के चार प्रकार' },
        text: {
          en: 'Per jaw: 4 Incisors (cutting), 2 Canines (tearing), 4 Premolars (cracking), and 6 Molars (crushing & grinding food).',
          hi: 'हर जबड़े में: 4 कृंतक (काटने), 2 रदनक (फाड़ने), 4 अग्रचर्वणक (तोड़ने), 6 चर्वणक (पीसने)।'
        }
      },
      {
        emoji: '🪥',
        badge: 'Dental Care',
        title: { en: 'Tooth Decay & Taking Care', hi: 'दाँतों की सड़न और देखभाल' },
        text: {
          en: 'Germs in sticky plaque make acid that eats enamel, causing cavities. Brush morning & night, eat raw carrots/radish, drink milk for calcium, and visit a dentist.',
          hi: 'प्लाक के कीटाणु अम्ल बनाकर कैविटी करते हैं। सुबह-रात ब्रश करें और दूध पिएँ।'
        }
      },
      {
        emoji: '🦠',
        badge: 'Microbes',
        title: { en: '4 Kinds of Microbes', hi: 'सूक्ष्मजीवों के प्रकार' },
        text: {
          en: 'Microbes are seen only under a microscope: Bacteria (typhoid), Virus (common cold, polio), Fungi (ringworm), Protozoa (malaria). Useful microbes make curd, bread (yeast), and penicillin.',
          hi: 'बैक्टीरिया, वायरस, कवक (फंजाई) और प्रोटोजोआ। उपयोगी सूक्ष्मजीव दही, ब्रेड और पेनिसिलिन बनाते हैं।'
        }
      },
      {
        emoji: '🫃',
        badge: 'Digestion',
        title: { en: 'Process of Digestion', hi: 'पाचन की प्रक्रिया' },
        text: {
          en: 'Mouth (saliva) → Oesophagus (food pipe) → Stomach (digestive juices) → Small intestine (6m long, absorbs nutrients) → Liver (bile) → Large intestine (absorbs water) → Anus.',
          hi: 'मुँह → ग्रासनली → आमाशय → छोटी आँत → यकृत → बड़ी आँत → गुदा।'
        }
      }
    ],
    quiz: [
      {
        q: 'Your new born cousin is two months old. He/she is likely to have ______.',
        options: ['28 teeth', 'no teeth', '32 teeth', '4 teeth'],
        answer: 1
      },
      {
        q: 'Your mother is thirty-four years old. She is likely to have ______.',
        options: ['32 permanent teeth', '20 permanent teeth', '20 milk teeth', 'no teeth'],
        answer: 0
      },
      {
        q: 'Eating raw and hard foods ______.',
        options: ['is bad for teeth', 'is good for teeth', 'makes teeth fall', 'does nothing for the teeth'],
        answer: 1
      },
      {
        q: 'Which of the following is NOT a part of a tooth?',
        options: ['Crown', 'Molar', 'Neck', 'Root'],
        answer: 1
      },
      {
        q: 'Chewing promotes the flow of ______.',
        options: ['bile', 'saliva', 'acid', 'water'],
        answer: 1
      },
      {
        q: 'Just below the enamel lies ______.',
        options: ['pulp', 'dentine', 'gum', 'root'],
        answer: 1
      },
      {
        q: 'The process by which food is broken down into simple substances is called ______.',
        options: ['preservation', 'digestion', 'roughage', 'plaque'],
        answer: 1
      },
      {
        q: 'True or False: Incisors are two in number in each jaw.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'True or False: Milk teeth are 32 in number.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'True or False: The outer white part of a tooth is called enamel.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch3: {
    id: 'ch3',
    icon: '👕',
    title: { en: '3. Clothing: Our Basic Need', hi: '3. वस्त्र: हमारी मूल आवश्यकता' },
    subtitle: {
      en: 'Learn why we wear clothes, types of fibres (natural & synthetic), seasonal clothes, and how to care for them.',
      hi: 'जानें कि हम कपड़े क्यों पहनते हैं, रेशों के प्रकार, मौसम के अनुसार कपड़े और उनकी देखभाल।'
    },
    videos: [
      { id: 'TRRYaxc6fEg', title: 'Clothing: Our Basic Need — Video 1', url: 'https://www.youtube.com/watch?v=TRRYaxc6fEg' },
      { id: 'vNJ_uZn_a6I', title: 'Clothing: Our Basic Need — Video 2', url: 'https://www.youtube.com/watch?v=vNJ_uZn_a6I' },
      { id: 'B-mqnPUqEiw', title: 'Clothing: Our Basic Need — Video 3', url: 'https://www.youtube.com/watch?v=B-mqnPUqEiw' },
      { id: 'RwMPdWfh4ek', title: 'Clothing: Our Basic Need — Video 4', url: 'https://www.youtube.com/watch?v=RwMPdWfh4ek' },
      { id: '0kw6nUYjhlc', title: 'Clothing: Our Basic Need — Video 5', url: 'https://www.youtube.com/watch?v=0kw6nUYjhlc' },
      { id: 'HtEOscRvlwc', title: 'Clothing: Our Basic Need — Video 6', url: 'https://www.youtube.com/watch?v=HtEOscRvlwc' },
      { id: 'VmwMhsgTupg', title: 'Clothing: Our Basic Need — Video 7', url: 'https://www.youtube.com/watch?v=VmwMhsgTupg' }
    ],
    cards: [
      {
        emoji: '🛡️',
        badge: 'Need for Clothes',
        title: { en: 'Why We Wear Clothes', hi: 'कपड़ों की आवश्यकता' },
        text: {
          en: 'Clothes protect us from heat, dust, cold, rain, and insect bites. Clothes worn at home are casual/informal clothes. We wear cotton in summer, woollen in winter, and raincoats in rainy season.',
          hi: 'कपड़े हमें गर्मी, धूल, सर्दी, बारिश और कीड़ों से बचाते हैं।'
        }
      },
      {
        emoji: '🌿',
        badge: 'Natural Fibres',
        title: { en: 'Plant & Animal Fibres', hi: 'प्राकृतिक रेशे' },
        text: {
          en: 'Plant fibres: Cotton (flower of cotton plant), jute, flax (linen from stem), and hemp. Animal fibres: Wool (sheep) and silk (silkworm).',
          hi: 'पौधों के रेशे: कपास, जूट, फ्लैक्स। जंतु रेशे: ऊन और रेशम।'
        }
      },
      {
        emoji: '🧪',
        badge: 'Synthetic Fibres',
        title: { en: 'Man-Made Fibres', hi: 'कृत्रिम रेशे' },
        text: {
          en: 'Nylon, rayon, and polyester are man-made (synthetic) fibres. Some are waterproof, wrinkle-free, and stretchable.',
          hi: 'नायलॉन, रेयान और पॉलिएस्टर मानव निर्मित रेशे हैं।'
        }
      },
      {
        emoji: '👩‍⚕️',
        badge: 'Professions & Care',
        title: { en: 'Uniforms & Care of Clothes', hi: 'वर्दी और देखभाल' },
        text: {
          en: 'Soldiers wear military uniforms, doctors/nurses wear white coats, students wear school uniforms. Store woollen/silk clothes with mothballs or dried neem leaves to keep silverfish and moths away.',
          hi: 'ऊनी और रेशमी कपड़ों को कीड़ों से बचाने के लिए नेफ़थलीन या सूखी नीम की पत्तियों के साथ रखें।'
        }
      }
    ],
    quiz: [
      {
        q: 'Which of these is a natural plant fibre?',
        options: ['Nylon', 'Cotton', 'Polyester', 'Rayon'],
        answer: 1
      },
      {
        q: 'Wool is obtained from ______.',
        options: ['cotton plant', 'silkworm', 'sheep', 'jute plant'],
        answer: 2
      },
      {
        q: 'In summer, we prefer wearing ______ clothes.',
        options: ['dark woollen', 'light cotton', 'waterproof', 'heavy silk'],
        answer: 1
      },
      {
        q: 'True or False: Synthetic fibres are made by humans in factories.',
        options: ['True', 'False'],
        answer: 0
      },
      {
        q: 'Which is used to protect stored woollen clothes from insects?',
        options: ['Sugar', 'Dried neem leaves / mothballs', 'Salt', 'Water'],
        answer: 1
      }
    ]
  },

  ch4: {
    id: 'ch4',
    icon: '🩹',
    title: { en: '4. Safety and First Aid', hi: '4. सुरक्षा और प्राथमिक चिकित्सा' },
    subtitle: {
      en: 'Learn safety rules at home, school, and on the road, plus basic first aid for cuts, burns, and insect bites.',
      hi: 'घर, स्कूल और सड़क पर सुरक्षा के नियम तथा चोट, जलने और कीड़े के काटने पर प्राथमिक चिकित्सा सीखें।'
    },
    videos: [
      { id: 'U3il9YoBvyw', title: 'First aid', url: 'https://www.youtube.com/watch?v=U3il9YoBvyw' },
      { id: 'xm58Q_xL2xY', title: 'Traffic Rules | Indian Sign Language | ISL | DSL', url: 'https://www.youtube.com/watch?v=xm58Q_xL2xY' },
      { id: 'p7605EM9VP4', title: 'Road Related Vocabulary in Indian Sign Language | 10 Signs | Sign Language Vocabulary', url: 'https://www.youtube.com/watch?v=p7605EM9VP4' }
    ],
    cards: [
      {
        emoji: '🏠',
        badge: 'Home Safety',
        title: { en: 'Safety at Home', hi: 'घर पर सुरक्षा' },
        text: {
          en: 'Never play with sharp objects (knives, blades), fire, or electrical switches with wet hands. Keep toys off the floor so no one trips.',
          hi: 'चाकू, आग या गीले हाथों से बिजली के स्विच को न छुएँ। खिलौने फर्श पर न फैलाएँ।'
        }
      },
      {
        emoji: '🚦',
        badge: 'Road Safety',
        title: { en: 'Safety on the Road', hi: 'सड़क पर सुरक्षा' },
        text: {
          en: 'Always walk on the footpath. Cross the road only at the zebra crossing after looking right, left, and right again. Obey traffic lights.',
          hi: 'हमेशा फुटपाथ पर चलें और ज़ेबरा क्रॉसिंग से ही सड़क पार करें। ट्रैफिक नियमों का पालन करें।'
        }
      },
      {
        emoji: '🏫',
        badge: 'School Safety',
        title: { en: 'Safety at School', hi: 'स्कूल में सुरक्षा' },
        text: {
          en: 'Do not run on stairs or push others. Wait in a queue for the school bus and never lean out of a moving bus.',
          hi: 'सीढ़ियों पर न दौड़ें और न किसी को धक्का दें। बस के लिए कतार में खड़े हों।'
        }
      },
      {
        emoji: '🩹',
        badge: 'First Aid',
        title: { en: 'What is First Aid?', hi: 'प्राथमिक चिकित्सा' },
        text: {
          en: 'First aid is the immediate help given to an injured person before a doctor arrives. For minor cuts: wash with clean water, apply antiseptic, and cover with a bandage.',
          hi: 'डॉक्टर के आने से पहले घायल व्यक्ति को दी जाने वाली तुरंत मदद प्राथमिक चिकित्सा कहलाती है।'
        }
      },
      {
        emoji: '🧊',
        badge: 'Burns & Bites',
        title: { en: 'Burns & Insect Bites', hi: 'जलना और कीड़े का काटना' },
        text: {
          en: 'For minor burns: run cool water over the area. For insect bites: wash with soap and water and apply a cold compress or calamine lotion.',
          hi: 'हल्के जलने पर ठंडा पानी डालें। कीड़े के काटने पर साबुन से धोकर ठंडी पट्टी रखें।'
        }
      }
    ],
    quiz: [
      {
        q: 'Where should we cross the road?',
        options: ['Anywhere', 'At the zebra crossing', 'Behind a parked bus', 'In the middle of traffic'],
        answer: 1
      },
      {
        q: 'The immediate help given to an injured person before a doctor arrives is called ______.',
        options: ['surgery', 'first aid', 'medicine', 'exercise'],
        answer: 1
      },
      {
        q: 'True or False: We should touch electrical switches with wet hands.',
        options: ['True', 'False'],
        answer: 1
      },
      {
        q: 'For a minor burn, we should immediately ______.',
        options: ['apply butter', 'pour cool running water', 'tie a tight cloth', 'rub ice directly'],
        answer: 1
      },
      {
        q: 'Before a minor cut is bandaged, we should clean it and apply ______.',
        options: ['antiseptic lotion', 'oil', 'ink', 'sand'],
        answer: 0
      }
    ]
  },

  ch5: {
    id: 'ch5',
    icon: '🌿',
    title: { en: '5. The Producers', hi: '5. उत्पादक (हरे पौधे)' },
    subtitle: {
      en: 'Discover how green plants make their own food through photosynthesis and support all life on Earth.',
      hi: 'जानें कि हरे पौधे प्रकाश संश्लेषण द्वारा अपना भोजन कैसे बनाते हैं और जीवन का आधार हैं।'
    },
    videos: [
      { id: 'ASxCxYfICPM', title: 'Photosynthesis', url: 'https://www.youtube.com/watch?v=ASxCxYfICPM' },
      { id: 'i8lciLeUwr8', title: 'photosynthesis', url: 'https://www.youtube.com/watch?v=i8lciLeUwr8' },
      { id: 'paVxfIoJZRI', title: 'Modes of Nutrition in Plants Photosynthesis Subtitles', url: 'https://www.youtube.com/watch?v=paVxfIoJZRI' }
    ],
    cards: [
      {
        emoji: '🌱',
        badge: 'Producers',
        title: { en: 'Why Plants are Producers', hi: 'पौधे उत्पादक क्यों हैं?' },
        text: {
          en: 'Green plants make their own food, so they are called producers. Animals and humans depend on plants directly or indirectly for food.',
          hi: 'हरे पौधे अपना भोजन स्वयं बनाते हैं, इसलिए उन्हें उत्पादक कहते हैं।'
        }
      },
      {
        emoji: '🍃',
        badge: 'Food Factory',
        title: { en: 'Leaves & Chlorophyll', hi: 'पत्तियाँ और क्लोरोफिल' },
        text: {
          en: 'Leaves are the food factories of a plant. They contain a green pigment called chlorophyll, which traps sunlight.',
          hi: 'पत्तियाँ पौधे की रसोई हैं। इनमें क्लोरोफिल होता है जो सूर्य के प्रकाश को सोखता है।'
        }
      },
      {
        emoji: '☀️',
        badge: 'Photosynthesis',
        title: { en: 'How Photosynthesis Works', hi: 'प्रकाश संश्लेषण' },
        text: {
          en: 'Using sunlight, chlorophyll, water (from roots), and carbon dioxide (through stomata), leaves make sugar (glucose) and release oxygen.',
          hi: 'सूर्य के प्रकाश, क्लोरोफिल, पानी और कार्बन डाइऑक्साइड की मदद से पत्तियाँ भोजन बनाती हैं और ऑक्सीजन छोड़ती हैं।'
        }
      },
      {
        emoji: '🥔',
        badge: 'Food Storage',
        title: { en: 'Where Plants Store Food', hi: 'भोजन का संग्रह' },
        text: {
          en: 'Extra food is stored as starch in different parts: Roots (carrot, radish), Stems (potato, sugarcane), Leaves (spinach), Fruits (apple), Seeds (wheat, rice).',
          hi: 'अतिरिक्त भोजन स्टार्च के रूप में जड़ (गाजर), तना (आलू), पत्तियों (पालक), फल और बीजों में जमा होता है।'
        }
      }
    ],
    quiz: [
      {
        q: 'Green plants are called ______ because they make their own food.',
        options: ['consumers', 'producers', 'decomposers', 'parasites'],
        answer: 1
      },
      {
        q: 'Which part of the plant is known as its "food factory"?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        answer: 2
      },
      {
        q: 'The green pigment in leaves that traps sunlight is called ______.',
        options: ['stomata', 'chlorophyll', 'starch', 'glucose'],
        answer: 1
      },
      {
        q: 'During photosynthesis, plants take in carbon dioxide and release ______.',
        options: ['nitrogen', 'oxygen', 'smoke', 'dust'],
        answer: 1
      },
      {
        q: 'True or False: Potato is an underground stem that stores food.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch6: {
    id: 'ch6',
    icon: '🌵',
    title: { en: '6. Adaptations in Plants', hi: '6. पौधों में अनुकूलन' },
    subtitle: {
      en: 'Explore terrestrial plants (plains, deserts, hills, marshes), aquatic plants, insectivorous plants, and non-green plants.',
      hi: 'स्थलीय, जलीय, कीटभक्षी और गैर-हरे पौधों के अनुकूलन जानें।'
    },
    videos: [
      { id: 'hcwHSFSJv8A', title: 'True Aquatic Plants', url: 'https://www.youtube.com/watch?v=hcwHSFSJv8A' },
      { id: 'R6F6gVDTLcw', title: 'Types of Terrestrial Habitats and Adaptation', url: 'https://www.youtube.com/watch?v=R6F6gVDTLcw' }
    ],
    cards: [
      {
        emoji: '🌳',
        badge: 'Terrestrial Plants',
        title: { en: 'Plains, Deserts & Hills', hi: 'मैदान, रेगिस्तान और पहाड़' },
        text: {
          en: 'Plains: Neem, peepal, gulmohar, mango. Deserts: Cactus, babool, date palm (leaves reduced to spines; green fleshy stems do photosynthesis). Hills: Pine, fir, cedar, spruce (conical shape, needle-shaped leaves, evergreen).',
          hi: 'मैदान: नीम, पीपल। रेगिस्तान: कैक्टस (काँटे, मांसल तना)। पहाड़: चीड़, देवदार (शंकु आकार)।'
        }
      },
      {
        emoji: '🌊',
        badge: 'Marshes & Hot/Damp',
        title: { en: 'Mangroves & Evergreen Trees', hi: 'मैंग्रोव और सदाबहार वृक्ष' },
        text: {
          en: 'Marshes have clayey, sticky soil. Mangroves grow breathing roots out of the soil/water to absorb oxygen. Hot & damp areas: Coconut, teak, rubber, pepper.',
          hi: 'दलदली भूमि में मैंग्रोव की श्वसन जड़ें मिट्टी से बाहर निकलती हैं।'
        }
      },
      {
        emoji: '🪷',
        badge: 'Aquatic Plants',
        title: { en: 'Floating, Fixed & Underwater', hi: 'जलीय पौधे' },
        text: {
          en: 'Floating: Duckweed, water hyacinth, water lettuce (light, spongy). Fixed: Lotus, water lily (stomata on upper side, hollow stems). Underwater: Hydrilla, tape grass, pondweed (no stomata, ribbon-like leaves).',
          hi: 'तैरने वाले: जलकुंभी। स्थिर: कमल, कुमुदिनी। पानी के नीचे: हाइड्रिला।'
        }
      },
      {
        emoji: '🪰',
        badge: 'Unusual & Non-Green',
        title: { en: 'Insectivorous & Non-Green Plants', hi: 'कीटभक्षी और गैर-हरे पौधे' },
        text: {
          en: 'Insectivorous plants (Venus flytrap, pitcher plant, sundew) trap insects for nutrients. Non-green plants (mushrooms, moulds) lack chlorophyll and absorb food from dead decaying matter.',
          hi: 'वीनस फ्लाईट्रैप और पिचर प्लांट कीड़े खाते हैं। मशरूम और फफूंद में क्लोरोफिल नहीं होता।'
        }
      }
    ],
    quiz: [
      {
        q: 'Plants that grow on land are called ______.',
        options: ['terrestrial plants', 'aquatic plants', 'floating plants', 'insectivorous plants'],
        answer: 0
      },
      {
        q: 'Which of the following plants is found in hilly areas?',
        options: ['Fir', 'Mango', 'Neem', 'Coconut'],
        answer: 0
      },
      {
        q: 'Which of the following plants is NOT found in desert areas?',
        options: ['Cactus', 'Babul', 'Coconut', 'Date palm'],
        answer: 2
      },
      {
        q: 'Which plant cannot make food on its own?',
        options: ['Venus flytrap', 'Pitcher plant', 'Mango', 'Moulds'],
        answer: 3
      },
      {
        q: 'Pine trees have a ______ shape so snow slips off easily.',
        options: ['round', 'conical', 'flat', 'square'],
        answer: 1
      }
    ]
  },

  ch7: {
    id: 'ch7',
    icon: '🐪',
    title: { en: '7. Adaptations in Animals', hi: '7. जंतुओं में अनुकूलन' },
    subtitle: {
      en: 'Learn how animals adapt to their habitats, food habits, and protect themselves from enemies.',
      hi: 'जानें कि जंतु अपने आवास, भोजन की आदतों और सुरक्षा के लिए कैसे अनुकूलन करते हैं।'
    },
    videos: [
      { id: 'eHOtuviQLwA', title: 'ISL Adventures: Discovering the Amphibian World | ISH Kids | Indian Sign Language', url: 'https://www.youtube.com/watch?v=eHOtuviQLwA' },
      { id: '3B54X6S-Q3M', title: 'Adaptations in Animals — Video 2', url: 'https://www.youtube.com/watch?v=3B54X6S-Q3M' },
      { id: '4jfZmcrmaOY', title: 'Animal World', url: 'https://www.youtube.com/watch?v=4jfZmcrmaOY' }
    ],
    cards: [
      {
        emoji: '🏔️',
        badge: 'Habitats',
        title: { en: 'Terrestrial, Aquatic & Amphibians', hi: 'स्थलीय, जलीय और उभयचर' },
        text: {
          en: 'Terrestrial (land): Polar bear & penguin have thick fur/blubber; camel has padded feet & hump. Aquatic (water): Fish, whale, turtle (gills/fins). Amphibians (both): Frog, toad, salamander (lungs & gills).',
          hi: 'स्थलीय: ऊँट, ध्रुवीय भालू। जलीय: मछली। उभयचर: मेंढक, सैलामैंडर।'
        }
      },
      {
        emoji: '🐒',
        badge: 'Trees & Air',
        title: { en: 'Arboreal & Aerial Animals', hi: 'वृक्षवासी और वायवीय जंतु' },
        text: {
          en: 'Arboreal (live on trees): Monkey, koala, squirrel. Aerial (fly in air): Sparrow, pigeon, eagle (hollow light bones, wings). Cold-blooded animals do hibernation (winter sleep) or aestivation (summer sleep).',
          hi: 'वृक्षवासी: बंदर, गिलहरी। वायवीय: पक्षी (खोखली हड्डियाँ)।'
        }
      },
      {
        emoji: '🦁',
        badge: 'Food Habits',
        title: { en: 'Herbivores, Carnivores, Omnivores & Parasites', hi: 'भोजन की आदतें' },
        text: {
          en: 'Herbivores (plants): Cow, goat, giraffe. Carnivores (flesh): Lion, tiger, eagle. Omnivores (both): Bear, crow, cockroach. Parasites (live on/in others): Mosquito, leech, tapeworm.',
          hi: 'शाकाहारी, मांसाहारी, सर्वाहारी और परजीवी (मच्छर, जोंक, फीताकृमि)।'
        }
      },
      {
        emoji: '🦎',
        badge: 'Protection',
        title: { en: 'Camouflage, Shells & Speed', hi: 'सुरक्षा के तरीके' },
        text: {
          en: 'Camouflage: Chameleon & stick insect blend with surroundings. Shells/spines: Crab, turtle, porcupine. Poisonous bite: Scorpion, snake. Moving fast: Housefly, deer.',
          hi: 'छलावरण (गिरगिट), कवच (कछुआ), काँटे (साही) और तेज़ गति से बचाव।'
        }
      }
    ],
    quiz: [
      {
        q: 'The ability of an organism to adjust to its surroundings is called ______.',
        options: ['migration', 'adaptation', 'summer aestivation', 'hibernation'],
        answer: 1
      },
      {
        q: 'Which of the following is NOT an animal of the polar region?',
        options: ['Seal', 'Penguin', 'Snail', 'Polar bear'],
        answer: 2
      },
      {
        q: 'The long winter sleep of some cold-blooded animals is called ______.',
        options: ['hibernation', 'summer aestivation', 'respiration', 'reproduction'],
        answer: 0
      },
      {
        q: 'The ability to merge with surroundings is called ______.',
        options: ['adaptation', 'camouflage', 'metamorphosis', 'migration'],
        answer: 1
      },
      {
        q: 'True or False: The bodies of aerial animals are light because they have hollow bones and feathers.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch8: {
    id: 'ch8',
    icon: '🥚',
    title: { en: '8. Animal Reproduction', hi: '8. जंतुओं में प्रजनन' },
    subtitle: {
      en: 'Discover how mammals, birds, fish, amphibians, reptiles, and insects reproduce and grow.',
      hi: 'स्तनधारियों, पक्षियों, मछलियों, उभयचरों, सरीसृपों और कीड़ों के प्रजनन को जानें।'
    },
    videos: [
      { id: 'D3XWbyd-Ee8', title: 'Seed Dispersal & Importance of Reproduction', url: 'https://www.youtube.com/watch?v=D3XWbyd-Ee8' },
      { id: 'ktwpfsCJUiM', title: 'Science I Tissues and Biological Organization - Meristematic Tissues plants', url: 'https://www.youtube.com/watch?v=ktwpfsCJUiM' }
    ],
    cards: [
      {
        emoji: '🐄',
        badge: 'Mammals',
        title: { en: 'Animals That Give Birth', hi: 'स्तनधारी' },
        text: {
          en: 'Mammals have hair/fur, are warm-blooded, breathe through lungs, and feed milk to their young ones (e.g., cow, human, whale, bat). Exception: Platypus lays eggs.',
          hi: 'स्तनधारी बच्चों को जन्म देते हैं और दूध पिलाते हैं। अपवाद: प्लैटीपस अंडे देता है।'
        }
      },
      {
        emoji: '🥚',
        badge: 'Structure of an Egg',
        title: { en: 'Eggshell, Albumen & Yolk', hi: 'अंडे की संरचना' },
        text: {
          en: 'Eggshell: hard outer covering. Albumen: white jelly-like substance rich in protein. Yolk: yellow middle part rich in fats, vitamins & minerals. Embryo: growing chick inside yolk.',
          hi: 'अंडे का खोल, एल्ब्यूमिन (सफेद प्रोटीन भाग), जर्दी (पीला भाग) और भ्रूण।'
        }
      },
      {
        emoji: '🐸',
        badge: 'Fish, Amphibians & Reptiles',
        title: { en: 'Spawns, Tadpoles & Metamorphosis', hi: 'मछली, उभयचर और सरीसृप' },
        text: {
          en: 'Fish & frogs lay eggs in clusters called spawn. Frog tadpoles grow into adults by metamorphosis. Reptiles (lizards, snakes, turtles) lay eggs on the ground.',
          hi: 'मेंढक और मछली पानी में अंडे (स्पॉन) देते हैं। टैडपोल कायांतरण से वयस्क बनता है।'
        }
      },
      {
        emoji: '🦋',
        badge: 'Insects',
        title: { en: '3-Stage & 4-Stage Life Cycles', hi: 'कीड़ों का जीवन चक्र' },
        text: {
          en: '3 stages (cockroach, grasshopper): Egg → Nymph → Adult (sheds skin by moulting). 4 stages (butterfly): Egg → Larva (caterpillar) → Pupa → Adult.',
          hi: 'तिलचट्टा: अंडा → निम्फ → वयस्क। तितली: अंडा → कैटरपिलर → प्यूपा → वयस्क।'
        }
      }
    ],
    quiz: [
      {
        q: 'Which of the following is rich in fats, vitamins and minerals?',
        options: ['Eggshell', 'Yolk', 'Albumen', 'None of these'],
        answer: 1
      },
      {
        q: 'A frog lays eggs in a large cluster called ______.',
        options: ['spawns', 'tadpoles', 'caterpillars', 'nymphs'],
        answer: 0
      },
      {
        q: 'The larva of a butterfly is called a ______.',
        options: ['tadpole', 'nymph', 'caterpillar', 'maggot'],
        answer: 2
      },
      {
        q: 'Which of the following mammals does NOT give birth to young ones?',
        options: ['Blue whale', 'Dolphin', 'Platypus', 'Bat'],
        answer: 2
      },
      {
        q: 'True or False: The young one of a grasshopper is called a nymph.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch9: {
    id: 'ch9',
    icon: '🌍',
    title: { en: '9. Our Planet Earth', hi: '9. हमारा ग्रह पृथ्वी' },
    subtitle: {
      en: 'Learn about the layers of the Earth, rotation (day & night), revolution (seasons), and Earth’s environment.',
      hi: 'पृथ्वी की परतों, घूर्णन (दिन-रात), परिक्रमण (मौसम) और पर्यावरण के बारे में जानें।'
    },
    videos: [
      { id: 'dH8cyeF8q2A', title: 'Our Planet Earth | Learn interesting facts about our planet | #deaftalks #isl #earth', url: 'https://www.youtube.com/watch?v=dH8cyeF8q2A' },
      { id: 'kVwc8pyg_PA', title: "Day and Night | Earth's Rotation | Indian Sign Language", url: 'https://www.youtube.com/watch?v=kVwc8pyg_PA' },
      { id: 'IQrd0x5iruQ', title: 'Revolution of Earth | Indian Sign Language', url: 'https://www.youtube.com/watch?v=IQrd0x5iruQ' },
      { id: 'PWIAIQ2lHlk', title: 'Dia Learns About Climate in ISL | ISH Kids', url: 'https://www.youtube.com/watch?v=PWIAIQ2lHlk' },
      { id: '1ixzEl6P_PY', title: "Lesson 26 Earth's Physical Features in Indian Sign Language | ISL By PHIN Deaf.", url: 'https://www.youtube.com/watch?v=1ixzEl6P_PY' }
    ],
    cards: [
      {
        emoji: '🌋',
        badge: 'Structure of Earth',
        title: { en: 'Crust, Mantle & Core', hi: 'पृथ्वी की परतें' },
        text: {
          en: 'Crust: thin outer solid rock layer. Mantle: hot rocks below crust (molten rock oozes out as lava in volcanoes). Core: innermost part (solid inner core, liquid outer core).',
          hi: 'भूपर्पटी (क्रस्ट), मेंटल (गर्म चट्टानें) और क्रोड (सबसे भीतरी भाग)।'
        }
      },
      {
        emoji: '🔄',
        badge: 'Movements',
        title: { en: 'Rotation & Revolution', hi: 'घूर्णन और परिक्रमण' },
        text: {
          en: 'Rotation: Earth spins on its axis from west to east in ~24 hours, causing day and night. Revolution: Earth orbits the Sun in 365¼ days (1 solar year), causing seasons.',
          hi: 'घूर्णन (24 घंटे): दिन और रात। परिक्रमण (365¼ दिन): मौसम बदलते हैं।'
        }
      },
      {
        emoji: '🌐',
        badge: 'Environment',
        title: { en: 'Atmosphere, Lithosphere & Hydrosphere', hi: 'पृथ्वी का पर्यावरण' },
        text: {
          en: 'Atmosphere: layer of gases. Lithosphere: rocks and soil. Hydrosphere: all water on Earth. Equator divides Earth into Northern and Southern hemispheres.',
          hi: 'वायुमंडल (गैसें), स्थलमंडल (चट्टानें/मिट्टी) और जलमंडल (पानी)।'
        }
      }
    ],
    quiz: [
      {
        q: 'What causes the change of the seasons?',
        options: ['Revolution of the Earth', 'Rotation of the Earth', 'Moonlight', 'Volcanoes'],
        answer: 0
      },
      {
        q: 'The innermost layer of the Earth is called ______.',
        options: ['crust', 'mantle', 'core', 'soil'],
        answer: 2
      },
      {
        q: 'The Earth takes nearly ______ to complete one rotation.',
        options: ['365 days', '24 hours', '28 days', '12 hours'],
        answer: 1
      },
      {
        q: '______ is made up of water.',
        options: ['Atmosphere', 'Lithosphere', 'Hydrosphere', 'Mantle'],
        answer: 2
      },
      {
        q: 'True or False: Core is the outermost layer of the Earth.',
        options: ['True', 'False'],
        answer: 1
      }
    ]
  },

  ch10: {
    id: 'ch10',
    icon: '🪐',
    title: { en: '10. In the Sky', hi: '10. आकाश में' },
    subtitle: {
      en: 'Explore the Sun, stars, constellations, the eight planets of our Solar System, the Moon, and satellites.',
      hi: 'सूर्य, तारे, तारामंडल, सौर मंडल के आठ ग्रह, चंद्रमा और उपग्रहों के बारे में जानें।'
    },
    visualizerUrl: 'https://3dsolarsystem.online/',
    videos: [
      { id: '45NjHcX_L8w', title: 'The Solar System', url: 'https://www.youtube.com/watch?v=45NjHcX_L8w' },
      { id: 'r281qEckkAA', title: 'Planets | Indian Sign Language | ISH Shiksha', url: 'https://www.youtube.com/watch?v=r281qEckkAA' }
    ],
    cards: [
      {
        emoji: '⭐',
        badge: 'Sun & Stars',
        title: { en: 'Stars & Constellations', hi: 'तारे और तारामंडल' },
        text: {
          en: 'The Sun is the star nearest to Earth. A group of stars forming a pattern is a constellation (e.g., Ursa Major / Great Bear, Orion). There are 88 constellations.',
          hi: 'सूर्य पृथ्वी के सबसे निकट का तारा है। तारों के समूह को तारामंडल (जैसे ओरियन) कहते हैं।'
        }
      },
      {
        emoji: '🪐',
        badge: 'Solar System',
        title: { en: 'Eight Planets', hi: 'आठ ग्रह' },
        text: {
          en: 'Order from Sun: Mercury, Venus (evening/morning star), Earth, Mars, Jupiter (largest), Saturn (rings), Uranus, Neptune (farthest). Pluto is a dwarf planet. Gravity keeps planets in orbit.',
          hi: 'बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण, वरुण। प्लूटो एक बौना ग्रह है।'
        }
      },
      {
        emoji: '🛰️',
        badge: 'Satellites & Moon',
        title: { en: 'Moon & Artificial Satellites', hi: 'चंद्रमा और कृत्रिम उपग्रह' },
        text: {
          en: 'The Moon is Earth’s natural satellite (~27 days 8 hours to orbit Earth; reflects sunlight). Sputnik-1 was the first artificial satellite; Aryabhata was India’s first. Neil Armstrong walked on the Moon in 1969.',
          hi: 'चंद्रमा पृथ्वी का प्राकृतिक उपग्रह है। आर्यभट्ट भारत का पहला कृत्रिम उपग्रह था।'
        }
      }
    ],
    quiz: [
      {
        q: 'A group of stars with a definite pattern is called ______.',
        options: ['constellation', 'asteroids', 'revolution', 'orbit'],
        answer: 0
      },
      {
        q: 'Which planet is called a "dwarf planet"?',
        options: ['Mercury', 'Venus', 'Mars', 'Pluto'],
        answer: 3
      },
      {
        q: 'Which was India’s first artificial satellite?',
        options: ['Sputnik-1', 'Aryabhata', 'Moon', 'Chandrayaan'],
        answer: 1
      },
      {
        q: 'How many days does the Moon take to revolve around the Earth?',
        options: ['27 days', '365 days', '27 days and 8 hours', '24 hours'],
        answer: 2
      },
      {
        q: 'True or False: The Moon is the brightest object in the night sky.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch11: {
    id: 'ch11',
    icon: '🪴',
    title: { en: '11. Soil', hi: '11. मिट्टी (मृदा)' },
    subtitle: {
      en: 'Learn how soil is formed by weathering, its layers, types (clayey, sandy, loamy), and fertilizers.',
      hi: 'मिट्टी के निर्माण, परतों, प्रकारों (चिकनी, बलुई, दोमट) और उर्वरकों के बारे में जानें।'
    },
    videos: [
      { id: '4W0vSWyUT4Y', title: 'Land and Soil Part 4 – ISLRTC', url: 'https://www.youtube.com/watch?v=4W0vSWyUT4Y' },
      { id: 'wzm6mNdwFRk', title: 'Land Resources in India – ISLRTC', url: 'https://www.youtube.com/watch?v=wzm6mNdwFRk' }
    ],
    cards: [
      {
        emoji: '🪨',
        badge: 'Formation & Layers',
        title: { en: 'Weathering & Soil Layers', hi: 'मिट्टी का निर्माण और परतें' },
        text: {
          en: 'Soil is formed by weathering of rocks (Sun, rain, wind). Humus (decayed plants/animals) makes soil fertile. Layers: Topsoil (rich in humus), Subsoil (sandier), Bedrock (solid rock).',
          hi: 'चट्टानों के टूटने (अपक्षय) से मिट्टी बनती है। ह्यूमस मिट्टी को उपजाऊ बनाता है।'
        }
      },
      {
        emoji: '🏜️',
        badge: 'Types of Soil',
        title: { en: 'Clayey, Sandy & Loamy Soil', hi: 'मिट्टी के प्रकार' },
        text: {
          en: 'Clayey: very small particles, holds lots of water (used for pots). Sandy: large particles, water passes easily (deserts/beaches). Loamy: mixture of sand & clay + humus, best for plant growth.',
          hi: 'चिकनी मिट्टी (बर्तन), बलुई मिट्टी (रेगिस्तान) और दोमट मिट्टी (पौधों के लिए सर्वोत्तम)।'
        }
      },
      {
        emoji: '🌱',
        badge: 'Fertilizers',
        title: { en: 'Organic & Chemical Fertilizers', hi: 'जैविक और रासायनिक उर्वरक' },
        text: {
          en: 'Organic fertilizers (manure, compost, cow-dung) improve soil naturally. Chemical fertilizers (urea, TSP, MOP) are factory-made; excessive use can harm soil and plants.',
          hi: 'जैविक खाद (गोबर, कम्पोस्ट) मिट्टी के लिए उत्तम है; अधिक रासायनिक खाद हानिकारक है।'
        }
      }
    ],
    quiz: [
      {
        q: 'Soil is formed by the process of ______.',
        options: ['moulting', 'weathering', 'volcanic eruption', 'condensation'],
        answer: 1
      },
      {
        q: 'The layer of soil that contains humus is ______.',
        options: ['topsoil', 'subsoil', 'bedrock', 'none of these'],
        answer: 0
      },
      {
        q: 'The soil with big particles and a lot of space between them is ______.',
        options: ['clayey', 'gravel', 'sandy', 'loamy'],
        answer: 2
      },
      {
        q: 'The organic matter that comprises bits of dead plants and animals is called ______.',
        options: ['humus', 'fertilizer', 'insecticide', 'clay'],
        answer: 0
      },
      {
        q: 'True or False: Nitrogen-rich fertilizers help plants grow fast.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch12: {
    id: 'ch12',
    icon: '🌦️',
    title: { en: '12. Air, Water and Weather', hi: '12. हवा, पानी और मौसम' },
    subtitle: {
      en: 'Understand sea & land breeze, evaporation, condensation, the water cycle, and water purification.',
      hi: 'समुद्री व स्थलीय समीर, वाष्पीकरण, संघनन, जल चक्र और जल शुद्धिकरण को समझें।'
    },
    waterCycleUrl: 'https://water.usgs.gov/edu/watercycle-kids-beg.html',
    videos: [
      { id: 'u4-qz8b-GCg', title: 'Water Cycle – ISLRTC', url: 'https://www.youtube.com/watch?v=u4-qz8b-GCg' },
      { id: 'qC8HkKEIIVU', title: 'evaporation, condensation and precipitation – ISLRTC', url: 'https://www.youtube.com/watch?v=qC8HkKEIIVU' },
      { id: 'uOYJAfiOWuc', title: 'Evaporation – ISLRTC', url: 'https://www.youtube.com/watch?v=uOYJAfiOWuc' },
      { id: 'eMzE8HlZvTg', title: 'CONDENSATION – ISLRTC', url: 'https://www.youtube.com/watch?v=eMzE8HlZvTg' },
      { id: 'Lmn7IIkmTzA', title: 'Ground water – ISLRTC', url: 'https://www.youtube.com/watch?v=Lmn7IIkmTzA' }
    ],
    cards: [
      {
        emoji: '🌬️',
        badge: 'Air & Breezes',
        title: { en: 'Sea Breeze & Land Breeze', hi: 'समुद्री और स्थलीय समीर' },
        text: {
          en: 'Moving air is wind. Day: Land heats faster, warm air rises, cool air from sea blows to land (Sea Breeze). Night: Land cools faster, cool air from land blows to sea (Land Breeze).',
          hi: 'दिन में समुद्र से जमीन की ओर (समुद्री समीर) और रात में जमीन से समुद्र की ओर (स्थलीय समीर) हवा चलती है।'
        }
      },
      {
        emoji: '☁️',
        badge: 'Water Cycle',
        title: { en: 'Evaporation & Condensation', hi: 'वाष्पीकरण और संघनन' },
        text: {
          en: 'Evaporation (water → vapour) is faster with wind, high heat, dry air, and large surface area. Condensation (vapour → water by cooling) forms clouds, fog, mist, dew, and frost.',
          hi: 'वाष्पीकरण से भाप बनती है और संघनन से बादल, कोहरा, ओस और पाला बनता है।'
        }
      },
      {
        emoji: '🚰',
        badge: 'Purification',
        title: { en: 'Removing Impurities from Water', hi: 'जल शुद्धिकरण' },
        text: {
          en: 'Insoluble impurities (mud, twigs): removed by sedimentation, decantation, and filtration. Soluble impurities (salts, germs): removed by boiling and chlorination (adding chlorine).',
          hi: 'अघुलनशील अशुद्धियाँ: अवसादन, निस्तारण, छानना। घुलनशील: उबालना और क्लोरीनीकरण।'
        }
      }
    ],
    quiz: [
      {
        q: 'Evaporation is faster ______.',
        options: ['if temperature is low', 'when it is windy', 'when air is humid', 'in the dark'],
        answer: 1
      },
      {
        q: 'The change of water vapour into water on cooling is called ______.',
        options: ['evaporation', 'sublimation', 'condensation', 'sedimentation'],
        answer: 2
      },
      {
        q: 'The process of filtration is used to remove ______.',
        options: ['salts', 'insoluble impurities', 'soluble impurities', 'germs'],
        answer: 1
      },
      {
        q: 'Which of the following is a soluble impurity?',
        options: ['mud in water', 'chalk powder in water', 'salt in water', 'twigs in water'],
        answer: 2
      },
      {
        q: 'True or False: Land heats up faster than water.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  },

  ch13: {
    id: 'ch13',
    icon: '🧊',
    title: { en: '13. States of Matter', hi: '13. पदार्थ की अवस्थाएँ' },
    subtitle: {
      en: 'Learn about solids, liquids, gases, molecules, physical & chemical changes, and solutions.',
      hi: 'ठोस, द्रव, गैस, अणु, भौतिक व रासायनिक परिवर्तन और विलयन के बारे में जानें।'
    },
    simulations: [
      { title: 'States of Matter: Basics (PhET)', url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html' }
    ],
    videos: [
      { id: 'gNbXI0D3wR0', title: 'Can Matter Change Its State – ISLRTC', url: 'https://www.youtube.com/watch?v=gNbXI0D3wR0' },
      { id: 'fq04En-NoIA', title: 'Liquid – ISLRTC', url: 'https://www.youtube.com/watch?v=fq04En-NoIA' },
      { id: 'JP4SkarMWw8', title: 'Gas – ISLRTC', url: 'https://www.youtube.com/watch?v=JP4SkarMWw8' }
    ],
    cards: [
      {
        emoji: '⚛️',
        badge: 'Matter & Molecules',
        title: { en: 'Solid, Liquid & Gas', hi: 'ठोस, द्रव और गैस' },
        text: {
          en: 'Matter has weight and occupies space; made of tiny molecules. Solid: tightly packed, fixed shape & volume. Liquid: loosely packed, fixed volume, no fixed shape. Gas: very loosely packed, no fixed shape or volume.',
          hi: 'ठोस का आकार व आयतन निश्चित; द्रव का आयतन निश्चित; गैस का दोनों अनिश्चित।'
        }
      },
      {
        emoji: '🔥',
        badge: 'Changes',
        title: { en: 'Physical vs Chemical Change', hi: 'भौतिक और रासायनिक परिवर्तन' },
        text: {
          en: 'Physical change: temporary, no new substance formed (melting ice/wax). Chemical change: permanent, new substance formed (burning paper, curd from milk).',
          hi: 'भौतिक परिवर्तन अस्थायी (बर्फ पिघलना); रासायनिक परिवर्तन स्थायी (कागज जलना)।'
        }
      },
      {
        emoji: '🧂',
        badge: 'Solutions',
        title: { en: 'Solute, Solvent & Solution', hi: 'विलेय, विलायक और विलयन' },
        text: {
          en: 'When sugar/salt (solute) dissolves in water (solvent), it forms a solution.',
          hi: 'जब नमक या चीनी (विलेय) पानी (विलायक) में घुलती है, तो विलयन बनता है।'
        }
      }
    ],
    quiz: [
      {
        q: 'Matter exists in ______ states.',
        options: ['three', 'two', 'four', 'five'],
        answer: 0
      },
      {
        q: 'A solid that dissolves in a liquid is called a ______.',
        options: ['solute', 'volume', 'solvent', 'solution'],
        answer: 0
      },
      {
        q: 'Paper burns to give ash. It is a ______.',
        options: ['physical change', 'chemical change', 'condensation', 'freezing'],
        answer: 1
      },
      {
        q: 'Conversion of gas into liquid is called ______.',
        options: ['melting', 'evaporation', 'condensation', 'freezing'],
        answer: 2
      },
      {
        q: 'True or False: Gases have a fixed shape and volume.',
        options: ['True', 'False'],
        answer: 1
      }
    ]
  },

  ch14: {
    id: 'ch14',
    icon: '⚡',
    title: { en: '14. Force, Work and Energy', hi: '14. बल, कार्य और ऊर्जा' },
    subtitle: {
      en: 'Discover types of forces, simple machines, kinetic & potential energy, and sources of energy.',
      hi: 'बल के प्रकार, सरल मशीनें, गतिज व स्थितिज ऊर्जा और ऊर्जा के स्रोतों को जानें।'
    },
    simulations: [
      { title: 'Forces and Motion: Basics (PhET)', url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html' },
      { title: 'Energy Skate Park: Basics (PhET)', url: 'https://phet.colorado.edu/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_en.html' }
    ],
    videos: [
      { id: 'lmSRFMAHtX8', title: 'Work & Energy Work – ISLRTC', url: 'https://www.youtube.com/watch?v=lmSRFMAHtX8' }
    ],
    cards: [
      {
        emoji: '💪',
        badge: 'Force & Work',
        title: { en: 'Kinds of Forces & Work', hi: 'बल के प्रकार और कार्य' },
        text: {
          en: 'Force is a push or pull: Muscular, Mechanical, Friction (opposes motion), and Gravitational force (Earth’s pull). Work is done when a force moves an object.',
          hi: 'बल (धक्का या खिंचाव): पेशीय, यांत्रिक, घर्षण और गुरुत्वाकर्षण बल।'
        }
      },
      {
        emoji: '⚙️',
        badge: 'Simple Machines',
        title: { en: 'Tools That Make Work Easy', hi: 'सरल मशीनें' },
        text: {
          en: 'Simple machines like lever, pulley, wheel & axle, screw, wedge, and inclined plane help us do work with less effort.',
          hi: 'लीवर, पुली, पहिया, पेंच और आनत तल सरल मशीनें हैं।'
        }
      },
      {
        emoji: '☀️',
        badge: 'Energy',
        title: { en: 'Kinetic, Potential & Sources', hi: 'ऊर्जा और उसके स्रोत' },
        text: {
          en: 'Energy is the ability to do work: Kinetic (motion) & Potential (position). Main source: Sun (solar energy). Others: Wind, water (hydroelectricity), geothermal, atomic.',
          hi: 'गतिज ऊर्जा (गति) और स्थितिज ऊर्जा (स्थिति)। मुख्य स्रोत: सूर्य।'
        }
      }
    ],
    quiz: [
      {
        q: 'The pull between the Earth and other objects is called ______.',
        options: ['attraction', 'force of gravity', 'repulsion', 'friction'],
        answer: 1
      },
      {
        q: 'Wind is caused due to the movement of ______.',
        options: ['heat', 'winter', 'air', 'cold'],
        answer: 2
      },
      {
        q: 'The force applied by our muscles is called ______ force.',
        options: ['muscular', 'gravitational', 'friction', 'atomic'],
        answer: 0
      },
      {
        q: 'The ______ is the main source of energy on the Earth.',
        options: ['Moon', 'Sun', 'Wind', 'Battery'],
        answer: 1
      },
      {
        q: 'True or False: Lever, pulley and inclined plane are examples of simple machines.',
        options: ['True', 'False'],
        answer: 0
      }
    ]
  }
};

function t(obj) {
  return typeof obj === 'string' ? obj : (obj[STATE.lang] || obj.en);
}

function setPage(page) {
  STATE.page = page;
  const basePage = page.split('-')[0];
  document.querySelectorAll('.sidebar__link').forEach(el => {
    el.classList.toggle('active', el.dataset.page === basePage);
  });
  document.getElementById('sidebar').classList.remove('open');
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBadges() {
  Object.keys(CHAPTERS).forEach(id => {
    const el = document.getElementById(`prog-${id}`);
    if (!el) return;
    if (STATE.scores[id] !== undefined) {
      el.classList.add('done');
      el.textContent = '★';
    }
  });
}

function renderHome() {
  return `
    <section class="hero">
      <span class="badge" style="background:rgba(255,255,255,0.2);color:#fff;">Class 4 Science • Unit I: Food &amp; Health</span>
      <h1>🌱 ${STATE.lang === 'hi' ? 'आँखों से सीखें — कक्षा 4 विज्ञान' : 'Learn with Eyes — Class 4 Science'}</h1>
      <p>${STATE.lang === 'hi'
        ? 'चित्रों, वीडियो और मज़ेदार क्विज़ के साथ पोषक तत्व और संतुलित आहार सीखें।'
        : 'Visual learning platform with picture cards, YouTube video lessons, and interactive quizzes from your Class 4 Science book.'}</p>
    </section>

    <div class="grid-2">
      ${Object.values(CHAPTERS).map(ch => {
        const sc = STATE.scores[ch.id];
        const status = sc !== undefined ? `✅ Best Score: ${sc}/${ch.quiz.length}` : '📝 Quiz Ready';
        return `
          <div class="card">
            <span class="card__emoji">${ch.icon}</span>
            <span class="badge">${status}</span>
            <h2 class="card__title">${t(ch.title)}</h2>
            <p style="color:var(--text-muted);margin-bottom:1rem;">${t(ch.subtitle)}</p>
            <button class="btn" onclick="setPage('${ch.id}')">Open Chapter →</button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderChapter(ch) {
  const sc = STATE.scores[ch.id];
  const quizBadge = sc !== undefined ? `Best: ${sc}/${ch.quiz.length}` : `${ch.quiz.length} Questions`;

  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('home')">← Back to All Chapters</button>
    </div>
    <section class="hero">
      <h1>${ch.icon} ${t(ch.title)}</h1>
      <p>${t(ch.subtitle)}</p>
    </section>

    <div class="grid-3">
      ${ch.cards.length ? `
        <div class="card">
          <span class="card__emoji">🃏</span>
          <span class="badge">${ch.cards.length} Cards</span>
          <h3 class="card__title">${STATE.lang === 'hi' ? 'फ्लैशकार्ड्स और नोट्स' : 'Flashcards & Visual Notes'}</h3>
          <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? 'चित्रों के साथ मुख्य अवधारणाएँ पढ़ें।' : 'Study key concepts with visual cards.'}</p>
          <button class="btn" onclick="setPage('${ch.id}-cards')">Open Flashcards →</button>
        </div>
      ` : ''}

      ${ch.videos.length ? `
        <div class="card">
          <span class="card__emoji">🎬</span>
          <span class="badge">${ch.videos.length} Videos</span>
          <h3 class="card__title">${STATE.lang === 'hi' ? 'वीडियो पाठ' : 'Video Lessons'}</h3>
          <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? 'यूट्यूब वीडियो से सीखें।' : 'Watch YouTube video lessons for this chapter.'}</p>
          <button class="btn" onclick="setPage('${ch.id}-videos')">Watch Videos →</button>
        </div>
      ` : ''}

      <div class="card">
        <span class="card__emoji">📝</span>
        <span class="badge">${quizBadge}</span>
        <h3 class="card__title">${STATE.lang === 'hi' ? 'अध्याय क्विज़' : 'Chapter Quiz'}</h3>
        <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? 'अपनी समझ की जाँच करें।' : 'Test your knowledge with questions from Class4.pdf.'}</p>
        <button class="btn" onclick="setPage('${ch.id}-quiz')">Start Quiz →</button>
      </div>

      ${ch.visualizerUrl ? `
        <div class="card">
          <span class="card__emoji">🪐</span>
          <span class="badge">3D Interactive</span>
          <h3 class="card__title">${STATE.lang === 'hi' ? '3D सौर मंडल विज़ुअलाइज़र' : '3D Solar System Visualizer'}</h3>
          <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? '3D में ग्रहों और सौर मंडल को देखें।' : 'Explore the planets and Solar System in interactive 3D.'}</p>
          <button class="btn" onclick="setPage('${ch.id}-visualizer')">Open 3D Visualizer →</button>
        </div>
      ` : ''}

      ${ch.waterCycleUrl ? `
        <div class="card">
          <span class="card__emoji">💧</span>
          <span class="badge">USGS Diagram</span>
          <h3 class="card__title">${STATE.lang === 'hi' ? 'जल चक्र चित्र' : 'Water Cycle Image'}</h3>
          <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? 'बच्चों के लिए जल चक्र का चित्र देखें।' : 'Explore the interactive USGS Water Cycle diagram for kids.'}</p>
          <button class="btn" onclick="setPage('${ch.id}-watercycle')">Open Water Cycle →</button>
        </div>
      ` : ''}

      ${ch.simulations && ch.simulations.length ? `
        <div class="card">
          <span class="card__emoji">🔬</span>
          <span class="badge">${ch.simulations.length} Simulation${ch.simulations.length > 1 ? 's' : ''}</span>
          <h3 class="card__title">${STATE.lang === 'hi' ? 'इंटरैक्टिव सिमुलेशन' : 'Interactive Simulation'}</h3>
          <p style="color:var(--text-muted);margin-bottom:1rem;">${STATE.lang === 'hi' ? 'PhET सिमुलेशन के साथ प्रयोग करें।' : 'Experiment with interactive PhET science simulations.'}</p>
          <button class="btn" onclick="setPage('${ch.id}-sim')">Open Simulation →</button>
        </div>
      ` : ''}
    </div>
  `;
}

function renderChapterCards(ch) {
  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
    </div>
    <section class="hero">
      <h1>🃏 ${t(ch.title)} — Flashcards</h1>
      <p>${t(ch.subtitle)}</p>
    </section>
    <div class="grid-3">
      ${ch.cards.map(c => `
        <article class="card">
          <span class="card__emoji">${c.emoji}</span>
          <span class="badge">${c.badge}</span>
          <h3 class="card__title">${t(c.title)}</h3>
          <p>${t(c.text)}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function renderChapterVideos(ch) {
  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
    </div>
    <section class="hero">
      <h1>🎬 ${t(ch.title)} — Video Lessons</h1>
      <p>Click any video thumbnail to watch, or open it directly on YouTube.</p>
    </section>
    <div class="video-grid">
      ${ch.videos.map(v => `
        <div class="video-card">
          <div class="video-wrapper" style="cursor:pointer;" onclick="playVideo(this, '${v.id}', '${v.url}')">
            <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.25);">
              <span style="width:60px;height:42px;border-radius:12px;background:#ff0000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.3rem;box-shadow:0 4px 12px rgba(0,0,0,0.4);">▶</span>
            </div>
          </div>
          <div class="video-card__body">
            <strong>${v.title}</strong>
            <a href="${v.url}" target="_blank" rel="noopener" class="btn btn--secondary" style="padding:0.35rem 0.7rem;font-size:0.8rem;">YouTube ↗</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.playVideo = function(wrapper, id, url) {
  if (window.location.protocol === 'file:') {
    window.open(url, '_blank', 'noopener');
    return;
  }
  wrapper.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};

function renderChapterQuiz(ch) {
  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
    </div>
    <section class="hero">
      <h1>📝 ${t(ch.title)} — Quiz</h1>
      <p>Answer all ${ch.quiz.length} questions from Class4.pdf and check your score.</p>
    </section>
    <section class="quiz-box" id="quiz-${ch.id}">
      ${ch.quiz.map((item, idx) => `
        <div class="quiz-question" data-q="${idx}">
          <div><strong>Q${idx + 1}.</strong> ${item.q}</div>
          <div class="quiz-options">
            ${item.options.map((opt, oIdx) => `
              <button type="button" class="quiz-opt" data-q="${idx}" data-opt="${oIdx}" onclick="selectOpt('${ch.id}', ${idx}, ${oIdx})">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <div style="margin-top:1.25rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
        <button class="btn" onclick="submitQuiz('${ch.id}')">✅ Check Answers</button>
        <button class="btn btn--secondary" onclick="resetQuiz('${ch.id}')">🔄 Reset</button>
      </div>
      <div id="quiz-result-${ch.id}"></div>
    </section>
  `;
}

function renderChapterVisualizer(ch) {
  return `
    <div style="margin-bottom:1rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
      <a href="${ch.visualizerUrl}" target="_blank" rel="noopener" class="btn">Open in New Tab ↗</a>
    </div>
    <section class="hero">
      <h1>🪐 ${t(ch.title)} — 3D Solar System Visualizer</h1>
      <p>Interact with the 3D Solar System below to explore planets, orbits, and rotation.</p>
    </section>
    <div class="card" style="padding:0;overflow:hidden;">
      <iframe src="${ch.visualizerUrl}" title="3D Solar System Visualizer" style="width:100%;height:75vh;border:0;" allowfullscreen loading="lazy"></iframe>
    </div>
  `;
}

function renderChapterWaterCycle(ch) {
  return `
    <div style="margin-bottom:1rem;display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
      <a href="${ch.waterCycleUrl}" target="_blank" rel="noopener" class="btn">Open in New Tab ↗</a>
    </div>
    <section class="hero">
      <h1>💧 ${t(ch.title)} — Water Cycle Image</h1>
      <p>Explore the USGS Water Cycle diagram for kids below.</p>
    </section>
    <div class="card" style="padding:0;overflow:hidden;">
      <iframe src="${ch.waterCycleUrl}" title="USGS Water Cycle for Kids" style="width:100%;height:78vh;border:0;" allowfullscreen loading="lazy"></iframe>
    </div>
  `;
}

function renderChapterSimulations(ch) {
  return `
    <div style="margin-bottom:1rem;">
      <button class="btn btn--secondary" onclick="setPage('${ch.id}')">← Back to ${t(ch.title)}</button>
    </div>
    <section class="hero">
      <h1>🔬 ${t(ch.title)} — Interactive Simulation${ch.simulations.length > 1 ? 's' : ''}</h1>
      <p>Experiment with the PhET interactive simulation${ch.simulations.length > 1 ? 's' : ''} below.</p>
    </section>
    ${ch.simulations.map(sim => `
      <div class="card" style="margin-bottom:1.5rem;padding:0;overflow:hidden;">
        <div style="padding:0.9rem 1.25rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);">
          <strong>${sim.title}</strong>
          <a href="${sim.url}" target="_blank" rel="noopener" class="btn btn--secondary" style="padding:0.35rem 0.75rem;font-size:0.85rem;">Open in New Tab ↗</a>
        </div>
        <iframe src="${sim.url}" title="${sim.title}" style="width:100%;height:72vh;border:0;" allowfullscreen loading="lazy"></iframe>
      </div>
    `).join('')}
  `;
}

function renderDashboard() {
  const chList = Object.values(CHAPTERS);
  const totalQ = chList.reduce((sum, ch) => sum + ch.quiz.length, 0);
  const earned = chList.reduce((sum, ch) => sum + (STATE.scores[ch.id] || 0), 0);

  return `
    <section class="hero">
      <h1>📊 Progress Dashboard — ${STATE.student}</h1>
      <p>Track your quiz scores across all Class 4 Science chapters.</p>
    </section>
    <div class="grid-2">
      ${chList.map(ch => {
        const sc = STATE.scores[ch.id];
        return `
          <div class="card">
            <span class="card__emoji">${ch.icon}</span>
            <h3 class="card__title">${t(ch.title)}</h3>
            <p style="font-size:1.3rem;font-weight:800;margin:0.5rem 0;">
              ${sc !== undefined ? `${sc} / ${ch.quiz.length}` : 'Not attempted yet'}
            </p>
            <button class="btn" onclick="setPage('${ch.id}')">Go to Chapter</button>
          </div>
        `;
      }).join('')}
    </div>
    <div class="card">
      <h3 class="card__title">🏆 Overall Score: ${earned} / ${totalQ}</h3>
      <p style="color:var(--text-muted);">Complete all chapter quizzes to master Class 4 Science!</p>
    </div>
  `;
}

window.selectOpt = function(chId, qIdx, optIdx) {
  if (!STATE.answers[chId]) STATE.answers[chId] = {};
  STATE.answers[chId][qIdx] = optIdx;
  const box = document.getElementById(`quiz-${chId}`);
  box.querySelectorAll(`.quiz-opt[data-q="${qIdx}"]`).forEach(btn => {
    btn.classList.remove('selected', 'correct', 'wrong');
    if (Number(btn.dataset.opt) === optIdx) btn.classList.add('selected');
  });
};

window.submitQuiz = function(chId) {
  const ch = CHAPTERS[chId];
  const userAns = STATE.answers[chId] || {};
  let score = 0;
  const box = document.getElementById(`quiz-${chId}`);

  ch.quiz.forEach((item, idx) => {
    const chosen = userAns[idx];
    box.querySelectorAll(`.quiz-opt[data-q="${idx}"]`).forEach(btn => {
      const oIdx = Number(btn.dataset.opt);
      btn.classList.remove('selected', 'correct', 'wrong');
      if (oIdx === item.answer) btn.classList.add('correct');
      else if (oIdx === chosen && chosen !== item.answer) btn.classList.add('wrong');
    });
    if (chosen === item.answer) score++;
  });

  STATE.scores[chId] = Math.max(STATE.scores[chId] || 0, score);
  localStorage.setItem('lwe4_scores', JSON.stringify(STATE.scores));
  updateProgressBadges();

  const resEl = document.getElementById(`quiz-result-${chId}`);
  resEl.innerHTML = `
    <div class="quiz-result">
      🎉 You scored <strong>${score} / ${ch.quiz.length}</strong>!
      ${score === ch.quiz.length ? ' Perfect score! 🌟' : ' Review the highlighted answers above.'}
    </div>
  `;
};

window.resetQuiz = function(chId) {
  STATE.answers[chId] = {};
  render();
};

function render() {
  const app = document.getElementById('app');
  if (STATE.page === 'home') app.innerHTML = renderHome();
  else if (STATE.page === 'dashboard') app.innerHTML = renderDashboard();
  else if (CHAPTERS[STATE.page]) app.innerHTML = renderChapter(CHAPTERS[STATE.page]);
  else if (STATE.page.endsWith('-cards')) {
    const ch = CHAPTERS[STATE.page.replace('-cards', '')];
    if (ch) app.innerHTML = renderChapterCards(ch);
  } else if (STATE.page.endsWith('-videos')) {
    const ch = CHAPTERS[STATE.page.replace('-videos', '')];
    if (ch) app.innerHTML = renderChapterVideos(ch);
  } else if (STATE.page.endsWith('-quiz')) {
    const ch = CHAPTERS[STATE.page.replace('-quiz', '')];
    if (ch) app.innerHTML = renderChapterQuiz(ch);
  } else if (STATE.page.endsWith('-visualizer')) {
    const ch = CHAPTERS[STATE.page.replace('-visualizer', '')];
    if (ch && ch.visualizerUrl) app.innerHTML = renderChapterVisualizer(ch);
  } else if (STATE.page.endsWith('-watercycle')) {
    const ch = CHAPTERS[STATE.page.replace('-watercycle', '')];
    if (ch && ch.waterCycleUrl) app.innerHTML = renderChapterWaterCycle(ch);
  } else if (STATE.page.endsWith('-sim')) {
    const ch = CHAPTERS[STATE.page.replace('-sim', '')];
    if (ch && ch.simulations && ch.simulations.length) app.innerHTML = renderChapterSimulations(ch);
  }
  updateProgressBadges();
}

// Controls
document.getElementById('headerLogo').addEventListener('click', () => setPage('home'));
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.querySelectorAll('.sidebar__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    setPage(link.dataset.page);
  });
});

document.getElementById('langToggleBtn').addEventListener('click', () => {
  STATE.lang = STATE.lang === 'en' ? 'hi' : 'en';
  document.getElementById('langToggleLabel').textContent = STATE.lang === 'en' ? '🇮🇳 EN/हिं' : '🇬🇧 हिं/EN';
  render();
});

document.getElementById('fontSizeBtn').addEventListener('click', () => {
  const classes = ['', 'font-lg', 'font-xl'];
  const labels = ['A⁺', 'A⁺⁺', 'A'];
  document.body.classList.remove('font-lg', 'font-xl');
  STATE.fontIdx = (STATE.fontIdx + 1) % 3;
  if (classes[STATE.fontIdx]) document.body.classList.add(classes[STATE.fontIdx]);
  document.getElementById('fontSizeLabel').textContent = labels[STATE.fontIdx];
});

document.getElementById('themeToggleBtn').addEventListener('click', () => {
  STATE.dark = !STATE.dark;
  document.body.classList.toggle('dark-mode', STATE.dark);
  document.getElementById('themeToggleIcon').textContent = STATE.dark ? '☀️' : '🌙';
});

document.getElementById('studentProfileBtn').addEventListener('click', () => {
  const name = prompt('Enter Student Name:', STATE.student);
  if (name && name.trim()) {
    STATE.student = name.trim();
    localStorage.setItem('lwe4_student', STATE.student);
    document.getElementById('currentStudentName').textContent = STATE.student;
    if (STATE.page === 'dashboard') render();
  }
});

document.getElementById('currentStudentName').textContent = STATE.student;
render();
