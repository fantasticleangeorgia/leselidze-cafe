/**
 * Café Mirabelle - Data & Bilingual Translations
 * Old Tbilisi, Georgia
 */

const CAFE_DATA = {
  profile: {
    name: "Café Mirabelle",
    tagline: {
      en: "Artisan European Patisserie & Hidden Courtyard",
      ka: "ევროპული საკონდიტრო და მყუდრო შიდა ეზო"
    },
    address: {
      en: "14 Betlemi Street, Sololaki District, Old Tbilisi, 0105",
      ka: "ბეთლემის ქუჩა 14, სოლოლაკი, ძველი თბილისი, 0105"
    },
    phone: "+995 32 2 14 88 90",
    phoneDisplay: "+995 32 2 14 88 90",
    email: "bonjour@cafemirabelle.ge",
    instagram: "https://instagram.com",
    wolt: "https://wolt.com",
    glovo: "https://glovoapp.com",
    rating: 4.7,
    reviewCount: 815,
    bakingHour: "09:00",
    schedule: {
      tue_fri: { open: 9, close: 22, textEn: "09:00 – 22:00", textKa: "09:00 – 22:00" },
      sat_sun: { open: 10, close: 23, textEn: "10:00 – 23:00", textKa: "10:00 – 23:00" },
      mon: { closed: true, textEn: "Closed (Artisan Baking Prep)", textKa: "დაკეტილია (საცხობის მოსამზადებელი დღე)" }
    }
  },

  menu: [
    // Desserts
    {
      id: "pavlova",
      category: "desserts",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
      badges: ["popular", "fresh_daily"],
      name: {
        en: "Classic Berry Pavlova",
        ka: "კლასიკური კენკრის პავლოვა"
      },
      description: {
        en: "Crisp French meringue shell with a marshmallow center, whipped Chantilly cream, organic Georgian mountain berries, and fresh mint coulis.",
        ka: "ხრაშუნა ფრანგული ბეზე ნაზი მარშმელოუს გულით, შანტილის კრემით, მთის ცოცხალი კენკრითა და პიტნის სოუსით."
      },
      dietary: ["vegetarian", "gluten_free_friendly"]
    },
    {
      id: "napoleon",
      category: "desserts",
      price: 16.50,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      badges: ["limited_batch", "house_favorite"],
      name: {
        en: "Morning-Baked Napoleon Cake",
        ka: "დილას გამომცხვარი ნაპოლეონი"
      },
      description: {
        en: "Thousand caramelized puff pastry leaves layered with Madagascar vanilla mousseline cream. Baked every morning fresh at 09:00; limited daily trays.",
        ka: "ათასი ფენოვანი კარამელიზებული ფურცელი მადაგასკარის ვანილის მუსლინ კრემით. ცხვება ყოველ დილას 09:00-ზე შეზღუდული ოდენობით."
      },
      dietary: ["vegetarian", "fresh_daily"]
    },
    {
      id: "eclair",
      category: "desserts",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80",
      badges: ["fresh_daily"],
      name: {
        en: "Vanilla Bean Éclair",
        ka: "ვანილის კლასიკური ეკლერი"
      },
      description: {
        en: "Crisp choux pastry piped with rich Tahitian vanilla bean custard and crowned with hand-dipped mirror chocolate fondant.",
        ka: "ხრაშუნა შუს ცომი, სავსე ტაიტიური ვანილის კრემ-პატისიერითა და ხელით მომზადებული სარკისებრი შოკოლადის მინანქრით."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "medovik",
      category: "desserts",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Layered Honey Cake (Medovik)",
        ka: "თაფლის ნამცხვარი (მედოვიკი)"
      },
      description: {
        en: "Eight delicate buckwheat honey biscuit layers infused with whipped cultured sour cream, toasted walnuts, and local honeycomb crumble.",
        ka: "რვა ნაზი წაბლის თაფლის ფენა მსუბუქი არაჟნის კრემით, მოხალული ნიგვზითა და ბუნებრივი ფიჭის ნატეხებით."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "walnut_pastry",
      category: "desserts",
      price: 11.50,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Spiced Walnut Cookie Pastry",
        ka: "სანელებლებიანი ნიგვზის ნამცხვარი"
      },
      description: {
        en: "Heritage Old Tbilisi recipe: buttery almond-walnut crust, roasted Kakhetian walnuts, sweet cinnamon, cardamom, and gentle orange blossom water glaze.",
        ka: "ძველი თბილისური ტრადიციული რეცეპტი: კარაქიანი ნიგვზის ცომი, კახური ნიგოზი, დარიჩინი, ილი და ფორთოხლის ყვავილის წყლის მინანქარი."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "lemon_tart",
      category: "desserts",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
      badges: ["fresh_daily"],
      name: {
        en: "Lemon Meringue Tart",
        ka: "ლიმონის ტარტი ბეზეთი"
      },
      description: {
        en: "Crisp sablé Breton shortcrust, velvety Amalfi lemon curd with pleasant acidity, topped with golden torched Italian meringue peaks.",
        ka: "ხრაშუნა ფრანგული საბლე, ამალფის ლიმონის ხავერდოვანი კურდი და ოქროსფრად შებოლილი იტალიური ბეზეს მწვერვალები."
      },
      dietary: ["vegetarian"]
    },

    // Hot Dishes
    {
      id: "truffle_omelette",
      category: "hot_dishes",
      price: 24.00,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      badges: ["popular", "house_favorite"],
      name: {
        en: "Truffle Mushroom & Sulguni Omelette",
        ka: "ტრიუფელის სოკოსა და სულგუნის ომლეტი"
      },
      description: {
        en: "Free-range eggs folded with wild forest mushrooms, melted young Megrelian Sulguni cheese, shaved summer truffle, and toasted house brioche.",
        ka: "სოფლის კვერცხი ტყის ველური სოკოთი, მდნარი მეგრული სულგუნით, საზაფხულო ტრიუფელითა და შებრაწული სახლის ბრიოშით."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "croque_monsieur",
      category: "hot_dishes",
      price: 22.50,
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      badges: ["popular"],
      name: {
        en: "Croque Monsieur on Brioche",
        ka: "კროკ-მესიე ბრიოშზე"
      },
      description: {
        en: "Classic Parisian sandwich with slow-cured artisanal ham, aged Swiss Gruyère, rich nutmeg béchamel sauce, served with organic dressed baby greens.",
        ka: "პარიზული კლასიკა: ნაზი ლორი, დაძველებული გრიუიერი, მუსკატის ბეშამელი და კარაქიანი ბრიოში ცოცხალი მწვანილის სალათით."
      },
      dietary: []
    },
    {
      id: "pumpkin_veloute",
      category: "hot_dishes",
      price: 17.00,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
      badges: ["fresh_daily"],
      name: {
        en: "Creamy Pumpkin & Ginger Velouté",
        ka: "გოგრისა და ჯანჯაფილის ველუტე"
      },
      description: {
        en: "Slow-roasted Kakhetian sweet pumpkin, fresh ginger root reduction, toasted pumpkin seeds, crème fraîche, and cold-pressed walnut oil drops.",
        ka: "ღუმელში ნელ-ნელა გამომცხვარი კახური გოგრა, ჯანჯაფილის ექსტრაქტი, მოხალული გოგრის თესლი და ცივად დაწურული ნიგვზის ზეთი."
      },
      dietary: ["vegetarian", "gluten_free_friendly"]
    },
    {
      id: "chicken_crepe",
      category: "hot_dishes",
      price: 21.00,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Herb-Roasted Chicken Crepe",
        ka: "მწვანილებით შემწვარი ქათმის კრეპი"
      },
      description: {
        en: "Thin Brittany crepe parcel stuffed with roasted chicken breast, tarragon Dijon cream, braised leeks, and crushed toasted hazelnuts.",
        ka: "ბრეტონული თხელი კრეპი შემწვარი ქათმის ფილეთი, ტარხუნისა და დიჟონის კრემით, მოშუშული პრასითა და მოხალული თხილით."
      },
      dietary: []
    },

    // Salads
    {
      id: "goat_cheese_salad",
      category: "salads",
      price: 23.00,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      badges: ["popular"],
      name: {
        en: "Warm Goat Cheese & Fig Salad",
        ka: "თხის ყველისა და ლეღვის თბილი სალათი"
      },
      description: {
        en: "Pan-warmed local goat cheese crostini, caramelized black figs, tender baby arugula, spiced walnuts, and aged pomegranate balsamic reduction.",
        ka: "ტაფაზე შეთბარი თხის ყველის კროსტინი, კარამელიზებული შავი ლეღვი, რუკოლა, ნიგოზი და ბროწეულის ბალზამიკური სოუსი."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "nicoise_tuna",
      category: "salads",
      price: 27.00,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Classic Niçoise with Seared Tuna",
        ka: "კლასიკური ნისუაზი თინუსით"
      },
      description: {
        en: "Sesame-crusted seared yellowfin tuna, steamed fingerling potatoes, crisp French green beans, soft quail eggs, and Kalamata olive vinaigrette.",
        ka: "ქუნჯუთში შემწვარი ყვითელფარფლა თინუსი, ორთქლზე მოხარშული პატარა კარტოფილი, ფრანგული ლობიო, მწყრის კვერცხი და ზეთისხილის დრესინგი."
      },
      dietary: ["gluten_free_friendly"]
    },
    {
      id: "heritage_tomato_salad",
      category: "salads",
      price: 19.50,
      image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=800&q=80",
      badges: ["fresh_daily", "house_favorite"],
      name: {
        en: "Georgian Heritage Tomato & Walnut Pesto",
        ka: "კახური პომიდვრისა და ნიგვზის პესტოს სალათი"
      },
      description: {
        en: "Sun-ripened Kakhetian heirloom tomatoes, crisp purple basil, artisanal Imeretian curd cheese chunks, and traditional walnut paste pesto.",
        ka: "მზისგან დამწიფებული კახური პომიდორი, რეჰანი, იმერული ჭყინტი ყველი და ტრადიციული ნიგვზიანი საკმაზის პესტო."
      },
      dietary: ["vegetarian", "gluten_free_friendly"]
    },

    // Drinks
    {
      id: "iced_caramel_latte",
      category: "drinks",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      badges: ["popular"],
      name: {
        en: "Iced Caramel Latte",
        ka: "ცივი კარამელის ლატე"
      },
      description: {
        en: "Double shot of single-origin espresso, house-cooked Fleur de Sel caramel syrup, silky textured milk poured over crystal ice columns.",
        ka: "სპეციალთი ორმაგი ესპრესო, სახლში მომზადებული ზღვის მარილის კარამელის სიროფი და ცივი აბრეშუმისებრი რძე ყინულზე."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "artisanal_coffee",
      category: "drinks",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Artisanal Espresso / Cappuccino",
        ka: "არტიზანული ესპრესო / კაპუჩინო"
      },
      description: {
        en: "Craft-roasted Ethiopian Yirgacheffe & Colombian Supremo beans roasted right here in Tbilisi. Rich crema, subtle floral and cocoa notes.",
        ka: "თბილისში მოხალული ეთიოპიური და კოლუმბიური მარცვლები, მდიდარი კრემა, ყვავილოვანი და შოკოლადის არომატები."
      },
      dietary: ["vegetarian"]
    },
    {
      id: "lavender_tea",
      category: "drinks",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      badges: ["fresh_daily"],
      name: {
        en: "Lavender & Honey Infused Tea",
        ka: "ლავანდისა და თაფლის ჩაი"
      },
      description: {
        en: "Rare Guria green tea pearls steeped with fragrant Provence dried lavender and raw alpine wildflower honey from the high Caucasus.",
        ka: "გურიის მწვანე ჩაი ფრანგული მშრალი ლავანდის ყვავილებითა და კავკასიონის ალპური ველური ყვავილების თაფლით."
      },
      dietary: ["vegetarian", "gluten_free_friendly"]
    },
    {
      id: "pomegranate_spritz",
      category: "drinks",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      badges: ["house_favorite"],
      name: {
        en: "Fresh Pomegranate Spritz",
        ka: "ბროწეულის ცოცხალი სპრიცი"
      },
      description: {
        en: "Cold-pressed local ruby pomegranate juice, French elderflower cordial, sparkling Borjomi mineral water, garnished with fresh rosemary and seeds.",
        ka: "ახლად გამოწურული ბროწეულის წვენი, ანწლის ყვავილის კორდიალი, ცქრიალა ბორჯომი და ცოცხალი როზმარინი."
      },
      dietary: ["vegetarian", "gluten_free_friendly"]
    }
  ],

  gallery: [
    {
      id: "gal-1",
      category: "interior",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "The Fairytale Reading Nook",
        ka: "ზღაპრული სამკითხველო კუთხე"
      },
      desc: {
        en: "Vintage velvet armchairs and warm 1950s brass sconces in our main salon.",
        ka: "ვინტაჟური ხავერდის სავარძლები და 1950-იანი წლების თითბერის სანათები ჩვენს მთავარ დარბაზში."
      }
    },
    {
      id: "gal-2",
      category: "pastries",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "09:00 AM Fresh Oven Batch",
        ka: "09:00 დილის ახალი ცხობა"
      },
      desc: {
        en: "Every morning begins with golden butter croissants and crispy mille-feuille trays.",
        ka: "ყოველ დილას ვიწყებთ ოქროსფერი კარაქიანი კრუასანებითა და მილფეის ახალი ფირფიტებით."
      }
    },
    {
      id: "gal-3",
      category: "courtyard",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "Old Tbilisi Cobblestone Courtyard",
        ka: "ძველი თბილისის ქვაფენილიანი ეზო"
      },
      desc: {
        en: "Dappled afternoon sunlight under ancient wild grape vines and flowering jasmine.",
        ka: "მზის სხივები ვაზის ხეივანსა და სურნელოვან ჟასმინებს შორის ჩვენს მყუდრო ეზოში."
      }
    },
    {
      id: "gal-4",
      category: "interior",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "Historic Sololaki Arched Windows",
        ka: "სოლოლაკის ისტორიული თაღოვანი ფანჯრები"
      },
      desc: {
        en: "Watching rain over the cobbled Betlemi streets with a warm cup of coffee.",
        ka: "ბეთლემის ქუჩის წვიმიანი ხედი არომატული ყავის თანხლებით."
      }
    },
    {
      id: "gal-5",
      category: "pastries",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "Handcrafted Berry Tartlets",
        ka: "ხელნაკეთი კენკრის ტარტალეტკები"
      },
      desc: {
        en: "Pure Normandy butter sablé filled with organic fruit and delicate vanilla chantilly.",
        ka: "ნორმანდიული კარაქის საბლე, სავსე ნატურალური ხილითა და ვანილის კრემით."
      }
    },
    {
      id: "gal-6",
      category: "courtyard",
      image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=85",
      title: {
        en: "Twilight Evening Tables",
        ka: "საღამოს განათებული მაგიდები"
      },
      desc: {
        en: "Fairy lights, soft French jazz, and fine Georgian bio-wines after sunset.",
        ka: "მყუდრო სანათები, ფრანგული ჯაზი და ქართული ბიო-ღვინო მზის ჩასვლის შემდეგ."
      }
    }
  ],

  reviews: [
    {
      author: "Elena Rostova",
      origin: "Paris, France",
      rating: 5,
      date: "October 2026",
      text: {
        en: "I was stunned to discover pastries in Old Tbilisi that rival the best patisseries of the 6th arrondissement in Paris. The Berry Pavlova is pure cloud perfection, and the morning-baked Napoleon is worth waking up early for!",
        ka: "გაოცებული დავრჩი, როდესაც ძველ თბილისში აღმოვაჩინე საკონდიტრო, რომელიც პარიზის საუკეთესო ადგილებს არაფრით ჩამოუვარდება. კენკრის პავლოვა ნამდვილი ღრუბელია, ხოლო დილის ნაპოლეონის გამო ადრე გაღვიძება ნამდვილად ღირს!"
      }
    },
    {
      author: "Giorgi Kalandadze",
      origin: "Tbilisi, Georgia",
      rating: 5,
      date: "November 2026",
      text: {
        en: "Mirabelle is our family's favorite weekend sanctuary in Sololaki. The truffle omelette with local sulguni is phenomenal, and the secret courtyard feels like stepping into a romantic 1950s film.",
        ka: "მირაბელი ჩვენი ოჯახის უსაყვარლესი ადგილია სოლოლაკში. ტრიუფელისა და სულგუნის ომლეტი უბრალოდ შედევრია, ხოლო შიდა ეზო 1950-იანი წლების რომანტიკულ ფილმში გადაგისვრის."
      }
    },
    {
      author: "Sophie Lindqvist",
      origin: "Stockholm, Sweden",
      rating: 5,
      date: "November 2026",
      text: {
        en: "The combination of Georgian hospitality and French patisserie refinement is unmatched. Pre-ordering the Honey Cake and Pavlova with our table reservation was the best decision—they sell out fast!",
        ka: "ქართული სტუმართმოყვარეობისა და ფრანგული საკონდიტრო ხელოვნების შერწყმა შეუდარებელია. მაგიდის დაჯავშნისას თაფლის ნამცხვრის წინასწარ დაჯავშნა შესანიშნავი იდეა იყო — საღამოსთვის სულ თავდება!"
      }
    }
  ]
};

const I18N = {
  en: {
    // Nav
    address_short: "14 Betlemi St, Sololaki",
    nav_story: "Our Story",
    nav_menu: "Menu",
    nav_atmosphere: "Atmosphere",
    nav_reserve: "Reserve a Table",
    nav_hours: "Hours & Location",
    nav_my_booking: "My Reservation",

    // Hero
    hero_badge: "Boutique European Patisserie • Old Tbilisi",
    hero_title_line1: "Classic Parisian Pastries.",
    hero_title_line2: "Hidden in Old Tbilisi.",
    hero_desc: "Tucked inside a historic 19th-century Sololaki mansion, Café Mirabelle blends 1950s French baking craft with warm Georgian soul. Handcrafted morning tarts, warm brioche, and tranquil courtyard afternoons.",
    hero_cta_reserve: "Reserve a Table",
    hero_cta_menu: "Explore Menu",
    hero_status_open: "Open Now • Closes at 22:00",
    hero_status_open_late: "Open Now • Closes at 23:00",
    hero_status_closed: "Closed Now • Opens Tuesday at 09:00",
    hero_status_monday: "Closed Mondays • Artisan Baking Prep Day",
    hero_tbilisi_clock: "Tbilisi Time (UTC+4)",
    hero_review_score: "4.7 ★ (815+ Google Reviews)",
    hero_fresh_alert: "Morning-baked batch comes out at 09:00 AM daily",

    // Pre-order bar
    preorder_bar_title: "Pastries Saved for Your Table:",
    preorder_bar_btn: "Complete Reservation with Pastries",
    preorder_clear: "Clear",

    // Menu section
    menu_kicker: "Curated Seasonal Collection",
    menu_title: "Artisanal Menu",
    menu_subtitle: "Crafted each morning using farm-sourced Georgian ingredients, French butter, and genuine passion.",
    menu_cat_all: "All Offerings",
    menu_cat_desserts: "Signature Desserts",
    menu_cat_hot: "Hot Dishes",
    menu_cat_salads: "Salads",
    menu_cat_drinks: "Coffee & Drinks",
    menu_add_preorder: "+ Save to Table Pre-Order",
    menu_in_preorder: "✓ Added to Table",
    badge_popular: "Popular",
    badge_fresh_daily: "Fresh Daily",
    badge_limited_batch: "Limited Batch",
    badge_house_favorite: "House Favorite",
    diet_vegetarian: "Vegetarian",
    diet_gluten_free_friendly: "Gluten-Free Friendly",
    currency: "₾",

    // Atmosphere & Gallery
    gallery_kicker: "Vintage Parisian Sololaki",
    gallery_title: "A Fairytale Sanctuary",
    gallery_subtitle: "Step from cobblestone lanes into velvet chairs, brass warmth, and sun-speckled garden leaves.",
    gal_cat_all: "All Views",
    gal_cat_interior: "Interior & Vibe",
    gal_cat_pastries: "Pastries & Baking",
    gal_cat_courtyard: "Outdoor Courtyard",

    // Reviews
    reviews_kicker: "Guest Memories",
    reviews_title: "Loved by Travelers & Locals Alike",

    // Reservation section
    res_kicker: "Table & Pastry Reservation",
    res_title: "Book Your Table at Mirabelle",
    res_subtitle: "Reservations are recommended for afternoon tea and weekend brunch. Pre-order our morning pastries so your favorites are held for your table.",
    res_badge_closed_monday: "Please note: Mirabelle is closed on Mondays for artisan prep.",
    res_form_name: "Full Name",
    res_form_name_placeholder: "e.g., Nino Bakradze",
    res_form_contact: "Email or Phone Number",
    res_form_contact_placeholder: "e.g., +995 599 12 34 56 or nino@example.com",
    res_form_date: "Date",
    res_form_date_notice: "Mondays are closed for baking prep",
    res_form_time: "Time Slot",
    res_form_guests: "Party Size",
    res_guests_opt: "Guest(s)",
    res_form_seating: "Seating Preference",
    res_seat_indoor: "Indoor Fairytale Room (Velvet & Sconces)",
    res_seat_courtyard: "Outdoor Courtyard (Cobblestones & Vines)",
    res_pastry_hold_title: "Hold Morning Pastries for My Table",
    res_pastry_hold_desc: "Due to high demand, our Napoleon and Medovik often sell out by 17:00. Check this to hold our morning-baked batch for your arrival.",
    res_preorder_heading: "Attached Pastry Pre-Orders:",
    res_preorder_empty: "No pastries selected yet. You can add pastries directly from the menu above!",
    res_notes: "Special Requests / Celebrations / Allergies",
    res_notes_placeholder: "e.g., Birthday celebration, anniversary table by window, or dietary notes...",
    res_submit: "Confirm Table Reservation",
    res_guarantee: "Instant confirmation • No booking fee • Free cancellation",

    // Ticket Modal
    ticket_title: "Reservation Confirmed",
    ticket_subtitle: "We look forward to welcoming you at Café Mirabelle.",
    ticket_ref: "Booking Code",
    ticket_date: "Date & Time",
    ticket_guests: "Party Size",
    ticket_seating: "Seating Area",
    ticket_contact: "Guest Contact",
    ticket_preorders: "Reserved Pastries",
    ticket_pastry_guarantee: "✓ Pastry Hold Active: Your morning batch will be safely reserved.",
    ticket_btn_print: "Print / Save Ticket",
    ticket_btn_cancel: "Cancel Reservation",
    ticket_btn_close: "Close",
    ticket_no_active: "You currently have no active reservations.",

    // Location & Hours
    loc_kicker: "Finding Mirabelle",
    loc_title: "Hours, Location & Getting Here",
    loc_address_label: "Address in Old Tbilisi",
    loc_copy_address: "Click to copy address",
    loc_copied: "Address copied to clipboard!",
    loc_hours_title: "Operating Hours",
    loc_tue_fri: "Tuesday – Friday",
    loc_sat_sun: "Saturday – Sunday",
    loc_mon: "Monday",
    loc_mon_status: "Closed (Artisan Prep)",
    loc_bake_badge: "Fresh oven bake arrives daily at 09:00 AM",
    loc_delivery_title: "Delivery & Takeaway",
    loc_delivery_desc: "Can't visit today? Order our fresh pastries directly to your door:",

    // Footer
    footer_tagline: "A boutique European-style patisserie hidden in Old Tbilisi.",
    footer_rights: "All rights reserved. Designed with European elegance & Georgian soul.",
    mobile_reserve_btn: "Reserve Table",
    mobile_menu_btn: "Menu"
  },

  ka: {
    // Nav
    address_short: "ბეთლემის ქ. 14, სოლოლაკი",
    nav_story: "ჩვენი ისტორია",
    nav_menu: "მენიუ",
    nav_atmosphere: "ატმოსფერო",
    nav_reserve: "მაგიდის დაჯავშნა",
    nav_hours: "საათები და ლოკაცია",
    nav_my_booking: "ჩემი ჯავშანი",

    // Hero
    hero_badge: "ბუტიკ ევროპული საკონდიტრო • ძველი თბილისი",
    hero_title_line1: "კლასიკური პარიზული დესერტები.",
    hero_title_line2: "დამალული ძველ თბილისში.",
    hero_desc: "სოლოლაკის მე-19 საუკუნის ისტორიულ სასახლეში დამალული კაფე მირაბელი აერთიანებს 1950-იანი წლების ფრანგული საცხობის ხელოვნებასა და თბილისურ სითბოს. დილის ხელით მომზადებული ტარტები, თბილი ბრიოში და მყუდრო შიდა ეზო.",
    hero_cta_reserve: "მაგიდის დაჯავშნა",
    hero_cta_menu: "მენიუს ნახვა",
    hero_status_open: "ახლა ღიაა • იკეტება 22:00-ზე",
    hero_status_open_late: "ახლა ღიაა • იკეტება 23:00-ზე",
    hero_status_closed: "ახლა დაკეტილია • გაიღება სამშაბათს 09:00-ზე",
    hero_status_monday: "ორშაბათობით დაკეტილია • საცხობის მოსამზადებელი დღე",
    hero_tbilisi_clock: "თბილისის დრო (UTC+4)",
    hero_review_score: "4.7 ★ (815+ Google შეფასება)",
    hero_fresh_alert: "ახალი ცხობა გამოდის ყოველ დილას 09:00-ზე",

    // Pre-order bar
    preorder_bar_title: "თქვენი მაგიდისთვის შენახული ნამცხვრები:",
    preorder_bar_btn: "ჯავშნის გაფორმება ნამცხვრებით",
    preorder_clear: "გასუფთავება",

    // Menu section
    menu_kicker: "სეზონური კოლექცია",
    menu_title: "არტიზანული მენიუ",
    menu_subtitle: "მზადდება ყოველ დილას ნატურალური ადგილობრივი პროდუქტებით, ფრანგული კარაქითა და დიდი სიყვარულით.",
    menu_cat_all: "ყველა კერძი",
    menu_cat_desserts: "საფირმო დესერტები",
    menu_cat_hot: "ცხელი კერძები",
    menu_cat_salads: "სალათები",
    menu_cat_drinks: "ყავა და სასმელები",
    menu_add_preorder: "+ დამატება მაგიდის ჯავშანზე",
    menu_in_preorder: "✓ დამატებულია",
    badge_popular: "პოპულარული",
    badge_fresh_daily: "ყოველდღე ახალი",
    badge_limited_batch: "შეზღუდული ოდენობა",
    badge_house_favorite: "სახლის რჩეული",
    diet_vegetarian: "ვეგეტარიანული",
    diet_gluten_free_friendly: "გლუტენ-მეგობრული",
    currency: "₾",

    // Atmosphere & Gallery
    gallery_kicker: "ვინტაჟური პარიზული სოლოლაკი",
    gallery_title: "ზღაპრული სიმყუდროვე",
    gallery_subtitle: "ძველი თბილისის ქვაფენილიანი ქუჩიდან პირდაპირ ხავერდის სავარძლებში, თბილ სინათლესა და მწვანე ეზოში.",
    gal_cat_all: "ყველა ფოტო",
    gal_cat_interior: "ინტერიერი და სიმყუდროვე",
    gal_cat_pastries: "დესერტები და ცხობა",
    gal_cat_courtyard: "ღია შიდა ეზო",

    // Reviews
    reviews_kicker: "სტუმრების მოგონებები",
    reviews_title: "მოგზაურთა და ადგილობრივთა რჩეული",

    // Reservation section
    res_kicker: "მაგიდისა და დესერტების ჯავშანი",
    res_title: "დაჯავშნეთ მაგიდა მირაბელში",
    res_subtitle: "გირჩევთ წინასწარ დაჯავშნოთ მაგიდა შუადღის ჩაისა და შაბათ-კვირის ბრანჩისთვის. ასევე შეგიძლიათ წინასწარ შეინახოთ დილის ნაპოლეონი და თაფლის ნამცხვარი თქვენი ჩამოსვლისთვის.",
    res_badge_closed_monday: "გთხოვთ გაითვალისწინოთ: მირაბელი ორშაბათობით დაკეტილია საცხობის მოსამზადებლად.",
    res_form_name: "სრული სახელი და გვარი",
    res_form_name_placeholder: "მაგალითად: ნინო ბაქრაძე",
    res_form_contact: "ელფოსტა ან ტელეფონის ნომერი",
    res_form_contact_placeholder: "მაგალითად: +995 599 12 34 56 ან nino@example.com",
    res_form_date: "თარიღი",
    res_form_date_notice: "ორშაბათობით საცხობი დაკეტილია მოსამზადებლად",
    res_form_time: "დროის მონაკვეთი",
    res_form_guests: "სტუმრების რაოდენობა",
    res_guests_opt: "სტუმარი",
    res_form_seating: "სივრცის არჩევა",
    res_seat_indoor: "თბილი ზღაპრული დარბაზი (ხავერდი და განათება)",
    res_seat_courtyard: "მწვანე შიდა ეზო (ქვაფენილი და ვაზის ხეივანი)",
    res_pastry_hold_title: "შეინახეთ დილის დესერტები ჩემი მაგიდისთვის",
    res_pastry_hold_desc: "დიდი მოთხოვნის გამო, ჩვენი ნაპოლეონი და მედოვიკი საღამოსთვის ხშირად სრულად იყიდება. მონიშნეთ ეს ველი, რათა თქვენი ულუფა შევინახოთ.",
    res_preorder_heading: "თანდართული დესერტები:",
    res_preorder_empty: "დესერტები ჯერ არ არის არჩეული. შეგიძლიათ პირდაპირ მენიუდან დაამატოთ!",
    res_notes: "სპეციალური თხოვნა / იუბილე / ალერგიები",
    res_notes_placeholder: "მაგალითად: დაბადების დღე, მაგიდა ფანჯარასთან, ან კვებითი ალერგია...",
    res_submit: "მაგიდის ჯავშნის დადასტურება",
    res_guarantee: "მყისიერი დადასტურება • საკომისიოს გარეშე • უფასო გაუქმება",

    // Ticket Modal
    ticket_title: "ჯავშანი დადასტურებულია",
    ticket_subtitle: "სიხარულით გელით კაფე მირაბელში.",
    ticket_ref: "ჯავშნის კოდი",
    ticket_date: "თარიღი და დრო",
    ticket_guests: "სტუმართა რაოდენობა",
    ticket_seating: "სივრცე",
    ticket_contact: "საკონტაქტო პირი",
    ticket_preorders: "დაჯავშნილი დესერტები",
    ticket_pastry_guarantee: "✓ დესერტების შენახვა გააქტიურებულია: თქვენი ულუფა საიმედოდ ინახება.",
    ticket_btn_print: "ბილეთის შენახვა / ბეჭდვა",
    ticket_btn_cancel: "ჯავშნის გაუქმება",
    ticket_btn_close: "დახურვა",
    ticket_no_active: "თქვენ ამჟამად არ გაქვთ აქტიური ჯავშანი.",

    // Location & Hours
    loc_kicker: "როგორ მოგვაგნოთ",
    loc_title: "სამუშაო საათები და ლოკაცია",
    loc_address_label: "მისამართი ძველ თბილისში",
    loc_copy_address: "დააჭირეთ მისამართის დასაკოპირებლად",
    loc_copied: "მისამართი დაკოპირდა ბუფერში!",
    loc_hours_title: "სამუშაო საათები",
    loc_tue_fri: "სამშაბათი – პარასკევი",
    loc_sat_sun: "შაბათი – კვირა",
    loc_mon: "ორშაბათი",
    loc_mon_status: "დაკეტილია (საცხობის მოსამზადებელი დღე)",
    loc_bake_badge: "დილის ახალი ცხობა მზად არის 09:00-ზე",
    loc_delivery_title: "მიტანის სერვისი და გატანა",
    loc_delivery_desc: "ვერ ახერხებთ მოსვლას? შეუკვეთეთ ჩვენი დესერტები პირდაპირ სახლში:",

    // Footer
    footer_tagline: "ბუტიკ ევროპული საკონდიტრო ძველ თბილისში.",
    footer_rights: "ყველა უფლება დაცულია. შექმნილია ევროპული ელეგანტურობითა და ქართული სულით.",
    mobile_reserve_btn: "დაჯავშნა",
    mobile_menu_btn: "მენიუ"
  }
};
