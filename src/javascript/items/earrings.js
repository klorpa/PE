if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Earrings
        casualEarrings:{
            itemType:"earring",
            clothingSlot:"earring",
            name:"Casual Earrings",
            itemMaster: "casualEarrings",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        classyEarrings:{
            itemType:"earring",
            clothingSlot:"earring",
            name:"Classy Earrings",
            itemMaster: "classyEarrings",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        flashyEarrings:{
            itemType:"earring",
            clothingSlot:"earring",
            name:"Flashy Earrings",
            itemMaster: "flashyEarrings",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        plasticEarrings:{
            itemType:"earring",
            clothingSlot:"earring",
            name:"Plastic Earrings",
            itemMaster: "plasticEarrings",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },    
    },
    itemChildren:{
        //casualEarrings
        casualEarrings00:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_00",
            name:"Diamond Stud Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                silver:true,
                plain:true,
            }
        },
        casualEarrings01:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_01",
            name:"Diamond Stud Flower Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        casualEarrings02:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_02",
            name:"Blue Gem Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        casualEarrings03:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_03",
            name:"Pearl Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        casualEarrings04:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_04",
            name:"Ornate Pearl Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        casualEarrings05:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_05",
            name:"White Gold Heart Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        casualEarrings06:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_06",
            name:"Black Gem Stud",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                plain:true,
            }
        },
        casualEarrings07:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_07",
            name:"Ruby and Diamond Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        casualEarrings08:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_08",
            name:"Purple and Green Gem Earring",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                purple:true,
                green:true,
                plain:true,
            }
        },
        casualEarrings09:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_09",
            name:"Pearl Band Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        casualEarrings10:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_10",
            name:"Delicate Emerald Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
            }
        },
        casualEarrings11:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_11",
            name:"Small Green Earrings with Gold Chain",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
            }
        },
        casualEarrings12:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_12",
            name:"Purple Gem Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                purple:true,
                plain:true,
            }
        },                
        casualEarrings13:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_13",
            name:"Multi Colored Gem Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                purple:true,
                white:true,
                plain:true,
            }
        },
        casualEarrings14:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_14",
            name:"Diamond and Gold Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        casualEarrings15:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_15",
            name:"Diamond Stud and Gold Hoop Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        casualEarrings16:{
            masterItem:"casualEarrings",
            variant:"earrings_casual_16",
            name:"Small Gold Chain Earrings",
            price:50,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },

        //classyEarrings
        classyEarrings00:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_00",
            name:"Sapphire and Diamond Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        classyEarrings01:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_01",
            name:"Silver Diamond Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                silver:true,
                plain:true,
            }
        },
        classyEarrings02:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_02",
            name:"Amethyst Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                purple:true,
                plain:true,
            }
        },
        classyEarrings03:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_03",
            name:"Ruby and Diamond Gold Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        classyEarrings04:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_04",
            name:"Sapphire Silver Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        classyEarrings05:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_05",
            name:"Ruby and Obsidian Gold Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                black:true,
                plain:true,
            }
        },
        classyEarrings06:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_06",
            name:"Ruby and Amethyst Silver Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                purple:true,
                plain:true,
            }
        },
        classyEarrings07:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_07",
            name:"Antiuqe Emerald Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
            }
        },
        classyEarrings08:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_08",
            name:"Antique Emerald and Gold Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                green:true,
                plain:true,
            }
        },
        classyEarrings09:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_09",
            name:"Ruby and Diamond Intricate Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        classyEarrings10:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_10",
            name:"Silver Ribbon and Diamond Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                silver:true,
                plain:true,
            }
        },
        classyEarrings11:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_11",
            name:"Topaz Flower and Gold Chain Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                gold:true,
                plain:true,
            }
        },
        classyEarrings12:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_12",
            name:"Gold Bar Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        classyEarrings13:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_13",
            name:"Diamond Wreith Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                siler:true,
                plain:true,
            }
        },
        classyEarrings14:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_14",
            name:"Large Sapphire and Gold Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        classyEarrings15:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_15",
            name:"Ruby Dangle Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        classyEarrings16:{
            masterItem:"classyEarrings",
            variant:"earrings_classy_16",
            name:"Large Amethyst Earrings",
            price:200,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                purple:true,
                plain:true,
            }
        },

        //flashyEarrings
        flashyEarrings00:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_00",
            name:"Large Gold Hoop Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings01:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_01",
            name:"Large Gold Hoop Earrings with Gold Bells",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings02:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_02",
            name:"Large Gold and Silver Hoop Earrings with Diamonds",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                silver:true,
                plain:true,
            }
        },
        flashyEarrings03:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_03",
            name:"Large Gold Twisty Earrings with Diamond Stud",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings04:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_04",
            name:"Copper Branching Earrings with Pearls",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        flashyEarrings05:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_05",
            name:"Gold Sun Shaped Dangling Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings06:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_06",
            name:"Red Flower Shaped Dangling Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        flashyEarrings07:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_07",
            name:"Crystal Dangling Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        flashyEarrings08:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_08",
            name:"Pink Tassle Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
            }
        },
        flashyEarrings09:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_09",
            name:"Large Wide Gold Hoop Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings10:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_10",
            name:"Large Gold Hoop Earrings with Cutouts and Diamonds",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings11:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_11",
            name:"Gold Hoop Earrings with Love Heart",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings12:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_12",
            name:"Dangling Diamond Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                white:true,
                plain:true,
            }
        },
        flashyEarrings13:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_13",
            name:"Silver Hoop Earrings with Diamonds and Onynx",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                silver:true,
                plain:true,
            }
        },
        flashyEarrings14:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_14",
            name:"Textured Silver Hoop Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                silver:true,
                plain:true,
            }
        },
        flashyEarrings15:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_15",
            name:"Gold Hoop Earrings with Diamond Insert",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                gold:true,
                plain:true,
            }
        },
        flashyEarrings16:{
            masterItem:"flashyEarrings",
            variant:"earrings_flashy_16",
            name:"Garnet and Diamond Dangling Earrings",
            price:100,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                purple:true,
                plain:true,
            }
        },

        //plasticEarrings
        plasticEarrings00:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_00",
            name:"Blue Plastic Hoop Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },

        //Plastic Earrings
        plasticEarrings01:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_01",
            name:"Red Love Heart Plastic Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        plasticEarrings02:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_02",
            name:"Pink Plastic Love Heart Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
            }
        },
        plasticEarrings03:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_03",
            name:"Blue Plastic Split Hoop Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        plasticEarrings04:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_04",
            name:"Pink Plastic Ring Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
            }
        },
        plasticEarrings05:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_05",
            name:"Blue Plastic Flower Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        plasticEarrings06:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_06",
            name:"Blue Plastic Ring Earrings with Decoration",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        plasticEarrings07:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_07",
            name:"Blue Plastic Rectangle Patterned Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                plain:true,
            }
        },
        plasticEarrings08:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_08",
            name:"Pink Bubble Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
            }
        },
        plasticEarrings09:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_09",
            name:"Pink Plastic Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                pink:true,
                plain:true,
            }
        },
        plasticEarrings10:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_10",
            name:"Yellow Plastic Round Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                yellow:true,
                plain:true,
            }
        },
        plasticEarrings11:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_11",
            name:"Orange Egg Shaped Plastic Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                orange:true,
                plain:true,
            }
        },
        plasticEarrings12:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_12",
            name:"Black and White Sphere Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                black:true,
                white:true,
                plain:true,
            }
        },
        plasticEarrings13:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_13",
            name:"Plastic and Gold Diamond Shaped Plastic Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                gold:true,
                plain:true,
            }
        },
        plasticEarrings14:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_14",
            name:"Red, Yellow and Pink Oval Plastic Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                yellow:true,
                pink:true,
                plain:true,
            }
        },
        plasticEarrings15:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_15",
            name:"Red Circle Dangling Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                red:true,
                plain:true,
            }
        },
        plasticEarrings16:{
            masterItem:"plasticEarrings",
            variant:"earrings_plastic_16",
            name:"Blue and Gold Flower Earrings",
            price:20,
            daring:6,
            disabled:false,
            isMale:true,
            isFemale:true,
            isItemSet:false,
            setName:"",
            canBuy:true,
            tags:{
                blue:true,
                gold:true,
                plain:true,
            }
        },
    }
});