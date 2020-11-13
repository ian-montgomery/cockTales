exports.seed = function (knex) {
  return knex("drinks")
    .del()
    .then(function () {
      return knex("drinks").insert([
        {
          id: 1,
          name: "Vodka",
          tale:
            "The origin of “vodka” comes from the Russian word “voda”, which means water.",
        },
        {
          id: 2,
          name: "Vodka",
          tale:
            "Vodka can be made from potatoes, barley, rye, corn, whey, grapes… These all contribute to the flavour of the spirit (yes, there is flavour in vodka!).",
        },
        {
          id: 3,
          name: "Vodka",
          tale:
            "Vodka has a surprising amount of health benefits. As one of the most amazing facts about vodka, it can be used to tighten skin and shrink pores.",
        },
        {
          id: 4,
          name: "Vodka",
          tale:
            "Vodka can be made from nearly any fermented food that contains sugar or starch, then it is distilled to increase alcohol content.",
        },
        {
          id: 5,
          name: "Vodka",
          tale:
            "One of the reasons vodka became popular in Russia was of its ability to remain liquid even in the coldest regions of northern Siberia.",
        },
        {
          id: 6,
          name: "Vodka",
          tale:
            "Saying “What can I do?” with a Russian accent actually means “I’ll find vodka” in Russian.",
        },
        {
          id: 7,
          name: "Gin",
          tale:
            "In the old days, sailing the open seas was not just for relaxing vacations. The threat of death by disease was prominent. The Royal Navy mixed gin with lime juice to prevent scurvy, the lack of vitamin C. This drink would soon be known as the Gimlet.",
        },
        {
          id: 8,
          name: "Gin",
          tale:
            "Gin must legally have a “predominant juniper flavour,” but there are no specifications or limits to how many other botanicals may be used, or the quantity of juniper berries that need to be added during the distilling process.",
        },
        {
          id: 9,
          name: "Gin",
          tale:
            "Though James Bond’s famous “shaken, not stirred” line is probably the most remembered Martini quote in the world, the majority of bartenders disagree, and would recommend a stirred Martini instead, as shaking prompts too much dilution.",
        },
        {
          id: 10,
          name: "Gin",
          tale:
            "The gin and tonic first gained popularity in the British colonies, as the quinine in the tonic water was found to be a potent deterrent to malaria-carrying mosquitoes. However, the bitterness of the quinine was unpalatable, so gin was added to make the drink taste better.",
        },
        {
          id: 11,
          name: "Gin",
          tale:
            "A Dutch physician by the name of Franciscus Sylvius is generally credited as the creator of gin, or ‘genever’ – medicine distilled with juniper berry oil. He intended it as a cure for stomach and kidney disorders.",
        },
        {
          id: 12,
          name: "Gin",
          tale:
            "Gin is responsible for the pen name of beloved children’s author Dr. Suess. Born Theodor Suess Geisel, as a young man the writer was editor of a campus newspaper during his years at Dartmouth University. He was fired from his role after being caught smuggling gin into his dorm room (it was 1925 and in the middle of the unfortunate years of US prohibition). Determined to continue writing, he submitted all of his articles using just the name “Suess,” and later added “Dr.” to the beginning.",
        },
        {
          id: 13,
          name: "Tequila",
          tale:
            "To be called tequila, the drink must be produced in Mexico.For tequila to be considered authentic, it must be produced in Mexico, mainly in the western Mexican state of Jalisco. The states of Guanajuato, Michoacan, Nayarit, and Tamaulipas are also acceptable.",
        },
        {
          id: 14,
          name: "Tequila",
          tale:
            "Why did they put a worm in tequila? It all started in the 1950s, when a local mezcal maker discovered a moth larvae in a batch of mezcal and thought its presence improved its taste. He placed a worm in each bottle as a marketing strategy and over time, other manufacturers followed suit due to its popularity.",
        },
        {
          id: 15,
          name: "Tequila",
          tale:
            "Serious tequila aficionados do not believe in having shots.Tequila fans like to savour the flavour and the aroma, which is why, they do not prefer having tequila shots. Instead, they sip tequila from a special tequila glass or brandy snifter. They have it like a neat whiskey.",
        },
        {
          id: 16,
          name: "Tequila",
          tale:
            'Surprise! Surprise! The sugars found in agave plants can help in weight loss and improving your digestive system. Blanco tequila is noted as the "healthiest" because it includes agavin (which lowers blood sugar levels) and inulin (helps your stomach digest food).',
        },
        {
          id: 17,
          name: "Tequila",
          tale:
            "Tequila: a cure for more than just Mondays. During the 1918 Spanish flu epidemic, patients were instructed to drink tequila with lime and salt to ease their symptoms. Today, tequila is not considered a cure, but might still help sooth sore throats, ease congestion and aid with sleep.",
        },
        {
          id: 18,
          name: "Tequila",
          tale:
            "Tequila's predecessor, called 'pulque,' was imbibed as early as 150 B.C. by the inhabitants of ancient Teotihuacan, a civilization that pre-dates the Aztecs. Scientists believe it was an important part of their diet?",
        },
        {
          id: 19,
          name: "Whiskey",
          tale: "“Whiskey” is a Gaelic word which means “water of life.”",
        },
        {
          id: 20,
          name: "Whiskey",
          tale:
            "In 1830, American consumption of alcohol, per capita, was insane. It peaked at what is roughly 1.7 bottles of standard strength whiskey, per person, per week or 88 bottles a year.",
        },
        {
          id: 21,
          name: "Whiskey",
          tale:
            "Nikola Tesla drank Whiskey every day because he supposed it would make him live to 150.",
        },
        {
          id: 22,
          name: "Whiskey",
          tale:
            "An incredible one billion bottles of scotch are exported from Scotland every year.",
        },
        {
          id: 23,
          name: "Whiskey",
          tale:
            "The earliest known record of Whiskey production dates back to 1494.",
        },
        {
          id: 24,
          name: "Whiskey",
          tale:
            "The evaporation of Alcohol from a Whiskey barrel during maturation is referred to as the ‘Angel’s Share’.",
        },
        {
          id: 25,
          name: "Rum",
          tale:
            "Rum is the Oldest Spirit in the World! The first rum distillation took place in the Caribbean in the 1620s, this led to rum being the first alcohol to be manufactured and distilled. It was also the first spirit that was drank for pleasure and that was not used for medical purposes.",
        },
        {
          id: 26,
          name: "Rum",
          tale:
            "As if you needed another reason to drink rum, there are some suggestions that this liquor can actually help prevent hair loss. Many people today believe in this home remedy to keep their hair in place. In fact, in the 1800s, rum was used by many as a type of shampoo to clean the hair and most people believed that it actually helped make their hair thicker.",
        },
        {
          id: 27,
          name: "Rum",
          tale:
            "Another nautical term that is still in use, “splice the mainbrace” means have an extra helping of rum or grog. It came about when sailors were rewarded with an extra drink for completing the onerous task of splicing (repairing) the mainbrace—a rope used to secure the ship’s mast.",
        },
        {
          id: 28,
          name: "Rum",
          tale:
            "Dating back to 1705, The oldest surviving brand rum is Mount Gay and it’s still distilled in Barbados today.",
        },
        {
          id: 29,
          name: "Rum",
          tale:
            "The Royal Navy only stopped giving out a daily ration of rum to its sailors in the 1970s.  This ration was know as a tot, and was a full pint of navy strength rum!",
        },
        {
          id: 30,
          name: "Rum",
          tale:
            " Pirates created the first rum cocktail, bumbo, said to have come from a pirate’s recipe featuring rum, water, sugar and nutmeg. It became popular in the Caribbean during the piracy era, and with sailors who made it from their rations.",
        },
      ]);
    });
};
