let tigger = { character: "Tigger" }; // start with just the character attribute
let pooh = { character: "Winnie the Pooh" };
let piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
let bees = { character: "Bees"};
let owl = { character: "Owl"};
let crisRobin = { character: "Christopher Robin"};
let rabbit = { character: "Rabbit"};
let gopher = { character: "Gopher"};
let kanga = { character: "Kanga"};
let eeyore = { character: "Eeyore"};
let heffalumps = { character: "Heffalumps"};

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
tigger.north.west = piglet;   // Follow Tigger's north attribute to a location in memory // Assign that object's west attribute to piglet
tigger.north.east = bees;  

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = crisRobin;


piglet.east = tigger;  
piglet.north = owl;
piglet.east = pooh;

bees.west = tigger; 
bees.north = rabbit;
bees.west = pooh;

owl.south = piglet;
owl.east = crisRobin;


crisRobin.west = owl;
crisRobin.east = rabbit;
crisRobin.north = kanga;
crisRobin.south = pooh;

rabbit.west = crisRobin;
rabbit.east = gopher;
rabbit.south = bees;

gopher.west = rabbit;

kanga.north = eeyore;
kanga.south = crisRobin;

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;


let player = {
    location: tigger
}

function move( direction ){
    if( direction in player.location ){
        player.location = player.location[ direction ];
        console.log( "You are now at " + player.location.character + "'s house." );
        }
        else{
            console.log( "You may not go that way!" );
        }

}