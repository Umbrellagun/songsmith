import React from "react";

export default {
  "1": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-1.jpg?alt=media&token=461a0a7a-349e-48e3-a661-15b79f902d9c",
    number: "1",
    description: "You see three figures are stepping through three separate portals. You are only able to see arms and legs through the portals, not enough to really tell who is stepping through.",
    text: "",
    choices: {
      "2": {
        text: "Who dis, new portal",
        to: "2"
      }
    },
    back: "1"
  },
  "2": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-2.jpg?alt=media&token=a19ad783-e05b-4dc9-9011-0a4967b8da5e",
    number: "2",
    description: "You see the three figures are fully through the portals now. The portals are starting to shrink behind them, but are still visible. The heroes are each holding their instruments.",
    text: "",
    choices: {
      "3": {
        text: "Oh, it’s just you guys",
        to: "3"
      }
    },
    back: "1"
  },
  "3": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-3.jpg?alt=media&token=1a5c384b-8b96-441d-908f-96de9275a131",
    number: "3",
    description: "You no longer see the heroes. Instead you see what they are looking at which is a horde of stray notes blocking their path in a very large barren white hallway.",
    text: "Oh. Well then.",
    choices: {
      "4": {
        text: "Tell them you are definitely not the heroes they’re trying to kill, those guys will be here any minute",
        to: "4"
      }
    },
    back: "2"
  },
  "4": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Ftesting.jpg?alt=media&token=09c096d0-583b-4df0-a3c5-2df1a3400dda",
    number: "4",
    description: "You see the three heroes lined up in a row again. Jack has his arm drawn back and hand wide open in a way that is very exaggerated. Clint is leaning away from Evelyn with a startled expression on his face. Evelyn’s face is directed at Jack, her expression more deadly and pissed off looking than usual.",
    text: (
      <React.Fragment>
        <p style={{textAlign: "left", margin: 0}}>Jack: “And I thought we were escaping.”</p>
        <p style={{textAlign: "left", margin: 0}}>Clint: “Well, it still beats my 4-11 shift at QikMunch… You think we can take that many?”</p>
        <p style={{textAlign: "left", margin: 0}}>Evelyn: “I don’t think we really have a choice. Not unless you know the tune we’re supposed to play to open a portal back to earth.”</p>
        <p style={{textAlign: "left", margin: 0}}>Clint: “Yooouu have a fair point.”</p>
        <p style={{textAlign: "left", margin: 0}}>Jack: “So, I can summon Dorian?”</p>
        <p style={{textAlign: "left", margin: 0}}>Evelyn: “We’ve been over this, his name isn’t Dorian, that’s the mode you’re playing in.”</p>
        <p style={{textAlign: "left", margin: 0}}>Jack: “I named him Dorian. His name is Dorian.”</p>
        <p style={{textAlign: "left", margin: 0}}>Evelyn: “It’s confusing. His name isn’t Dorian.”</p>
        <p style={{textAlign: "left", margin: 0}}>Jack: “He’s my demon, I think I can name him that.”</p>
        <p style={{textAlign: "left", margin: 0}}>Evelyn: “Jack, this is NOT the time.”</p>

        <br/>
        Clint cowers for a moment over how scary Evelyn is. Jack appears unaffected.
        <br/>
        <br/>

        <p style={{textAlign: "left", margin: 0}}>Jack: “I’m summoning Dorian.”</p>
        <p style={{textAlign: "left", margin: 0}}>Evelyn: “Summon the goddamn demon and kick us off.”</p>
      </React.Fragment>
    ),
    choices: {
      "5": {
        text: "Summon Mr. Dorian",
        to: "5"
      }
    },
    back: "3"
  },
  "5": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-4.jpg?alt=media&token=dfdd2a19-64b6-4c91-8934-813076cccdb7",
    number: "5",
    description: "You see a closeup of Jack’s hand turning the dial of the guitar to “Demon Head”.",
    text: "Yeah bby! Bring the demons!",
    choices: {
      "6": {
        text: "Start some shit",
        to: "6"
      }
    },
    back: "4"
  },
  "6": {
    music: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Music%2Fhallway-battle.mp3?alt=media&token=d95f5f50-d3b5-4013-8610-9c5c803f7e91",
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-5.jpg?alt=media&token=412adccc-401b-4c2b-aee5-95d2f6e426b7",
    number: "6",
    description: "A music player becomes available above the panel so reader can press play to listen to the music that is being composed by the heroes. You see Jack playing the guitar and summoning a Dorian Demon.",
    text: "Get in there Evelyn.",
    choices: {
      "6.1": {
        text: "Summon a Dorian Goblin",
        to: "6.1"
      },
      "7": {
        text: "Flick this switch called “Stick Shift”",
        to: "7"
      }
    },
    back: "5"
  },
  "6.1": {
    music: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Music%2Fhallway-battle.mp3?alt=media&token=d95f5f50-d3b5-4013-8610-9c5c803f7e91",
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-6.jpg?alt=media&token=4e34d1c7-14eb-44c0-bb8b-efe7130d0f04",
    number: "6.1",
    description: "You see Evelyn hesitate over the switch, looking up at her from the bass.",
    text: "This is probably not the time to try new things, but Evelyn is feeling strongly compelled to try that switch again.",
    choices: {
      "7": {
        text: "Be compelled",
        to: "7"
      }
    },
    back: "6"
  },
  "7": {
    music: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Music%2Fhallway-battle.mp3?alt=media&token=d95f5f50-d3b5-4013-8610-9c5c803f7e91",
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-7.jpg?alt=media&token=4f70b537-35d2-4233-95e4-0f5b9fdccfc2",
    number: "7",
    description: "You see a similar panel to the one where Jack turned the dial, but instead Evelyn’s hand is coiled up to flick the switch.",
    text: "Well don’t shoot that thing off into oblivion. Just move the switch like a normal human.",
    choices: {
      "8": {
        text: "Be amazed?",
        to: "8"
      }
    },
    back: "6"
  },
  "8": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-8.jpg?alt=media&token=4f46318f-0d85-4f80-bbcb-ef65cb5a26ac",
    number: "8",
    description: "You see Evelyn’s bass turning into a drum set.",
    text: "Holy shit",
    choices: {
      "9": {
        text: "Whack some things with sticks!",
        to: "9"
      }
    },
    back: "7"
  },
  "9": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-9.jpg?alt=media&token=cd5f37a6-14e1-4dea-a505-f0c8a793be89",
    number: "9",
    description: "You see Evelyn furiously begin drumming.",
    text: "Well damn, does that thing have any more switches on it? Maybe one that turns this drum set into a tank or giant mech or something? We need all the firepower!.. Sorry, I got a bit excited. I’m sure these drums do something cool, why don’t we find out.",
    choices: {
      "10": {
        text: "Rock on",
        to: "10"
      }
    },
    back: "8"
  },
  "10": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-10.jpg?alt=media&token=d71d04bf-ad8b-45a6-8139-c7923c975c21",
    number: "10",
    description: "You see some additional armor appear on the summoned creatures, appearing to pulse to the beat.",
    text: "I mean, armor on?",
    choices: {
      "11": {
        text: "Summon a Dorian Knight",
        to: "11"
      }
    },
    back: "9"
  },
  "11": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-11.jpg?alt=media&token=d80767a4-b9f3-44fb-bc26-98c1a781e8bf",
    number: "11",
    description: "You see Clint playing-in a Dorian Knight.",
    text: "",
    choices: {
      "12": {
        text: "Alright, let’s do this",
        to: "12"
      }
    },
    back: "10"
  },
  "12": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-12.jpg?alt=media&token=acb775d8-6543-4550-9491-03dd059d8f29",
    number: "12",
    description: "You see the stray notes and summoned creatures charging at each other.",
    text: "",
    choices: {
      "13": {
        text: "",
        to: "13"
      }
    },
    back: "11"
  },
  "13": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-13.jpg?alt=media&token=5b110070-371e-4211-8054-ec7af980d96f",
    number: "13",
    description: "You see the demon jumping to attack a stray note. The background is filled with stray notes.",
    text: "",
    choices: {
      "14": {
        text: "",
        to: "14"
      }
    },
    back: "12"
  },
  "14": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-14.jpg?alt=media&token=3908bb25-bb8a-4cb1-87c9-2f4a4534fff0",
    number: "14",
    description: "You see the knight about to be attacked by a stray note. The background is also filled with stray notes.",
    text: "",
    choices: {
      "15": {
        text: "",
        to: "15"
      }
    },
    back: "13"
  },
  "15": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-15.jpg?alt=media&token=cb67350c-e7d2-4385-95f3-91d2ea2e64e6",
    number: "15",
    description: "You see the demon getting stabbed with the claws of one of the stray notes at the same time the demon is slashing through several stray notes at once. The background is still filled with many stray notes.",
    text: "",
    choices: {
      "16": {
        text: "",
        to: "16"
      }
    },
    back: "14"
  },
  "16": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-16.jpg?alt=media&token=f9b65865-b015-4992-8ec2-5b07ac0a3f33",
    number: "16",
    description: "You see the knight swinging his sword through several stray notes faces as he blocks the attack of one of the stray notes with his shield. The background is still filled with many stray notes.",
    text: "",
    choices: {
      "17": {
        text: "",
        to: "17"
      }
    },
    back: "15"
  },
  "17": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-17.jpg?alt=media&token=3d164fb5-8f35-4597-88e6-fbe3b4eec5f4",
    number: "17",
    description: "There is a pause in the fighting as the stray notes appear to all have been defeated, except the demon and knight are both looking in the same direction at something.",
    text: "",
    choices: {
      "18": {
        text: "",
        to: "18"
      }
    },
    back: "16"
  },
  "18": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-18.jpg?alt=media&token=4a25cb7a-0183-42e5-8c87-7d6c5c10d2ed",
    number: "18",
    description: "You see from the demon and knight’s perspective now, a very large enemy, a stray chord is looming over them.",
    text: "",
    choices: {
      "19": {
        text: "",
        to: "19"
      }
    },
    back: "17"
  },
  "19": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-19.jpg?alt=media&token=0a2cbd40-082d-4851-9232-40de1917d518",
    number: "19",
    description: "You see the stray chord closer now as it lifts its arm up for a strike.",
    text: "",
    choices: {
      "20": {
        text: "",
        to: "20"
      }
    },
    back: "18"
  },
  "20": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-20.jpg?alt=media&token=be7b4e33-b264-4b4a-bd8b-0765798474e0",
    number: "20",
    description: "Looking  from the perspective of the stray chord, you see the demon and knight jumping out of the way.",
    text: "",
    choices: {
      "21": {
        text: "",
        to: "21"
      }
    },
    back: "19"
  },
  "21": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-21.jpg?alt=media&token=6509a37a-9035-4561-99fc-9c4a7106e0f0",
    number: "21",
    description: "You see the knight has rushed passed the chord with his sword, samurai style, leaving a big gash in the chord’s side.",
    text: "",
    choices: {
      "22": {
        text: "",
        to: "22"
      }
    },
    back: "20"
  },
  "22": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-22.jpg?alt=media&token=0d14f181-8c38-4bd5-8277-b92d8452b8ba",
    number: "22",
    description: "You see the demon lunging from the ground up to the chord’s head, claws stabbing into the enemy’s neck.",
    text: "",
    choices: {
      "23": {
        text: "",
        to: "23"
      }
    },
    back: "21"
  },
  "23": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-23.jpg?alt=media&token=3de9c5d5-1715-4d74-a956-332950ef50b4",
    number: "23",
    description: "The perspective is now looking at the direction the heroes came from. You see the heroes with their instruments, no longer playing, and the demon and knight standing over the body of the chord. The stray notes, demon, and knight all starting to dissipate.",
    text: (
      <React.Fragment>
      Well, that was exciting.
      <br/>
      <br/>

      <p style={{textAlign: "left", margin: 0}}>Jack: “That was awesome.”</p>

      <br/>
      No one could see, but Evelyn internally rolled her eyes. Everyone knows it’s not awesome if you ‘say’ it’s awesome. But she was not about to get snooty on them. It ‘was’ kind of awesome.
      <br/>
      <br/>

      <p style={{textAlign: "left", margin: 0}}>Clint: “I agree, it was definitely pretty rad. But I hope that was, like, the boss or something, because I’m going to be honest, I was a little worried when he showed up. And hey! Drums! That’s crazy.”</p>
      <p style={{textAlign: "left", margin: 0}}>Evelyn: “Yeah, and kind of weird.”</p>
      <p style={{textAlign: "left", margin: 0}}>Clint: “But it worked. And it made the song sound way better.”</p>
      <p style={{textAlign: "left", margin: 0}}>Evelyn: “Thanks.”</p>

      <br/>
      The three of them stop and look down the hallway.
      </React.Fragment>
    ),
    choices: {
      "24": {
        text: "Exploring, anyone?",
        to: "24"
      }
    },
    back: "22"
  },
  "24": {
    image: "https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fstoryboard%2Fpitch-new-24.jpg?alt=media&token=8058d02b-3723-482b-a12f-1d399c0d6938",
    number: "24",
    description: "Looking from the heroes perspectives now, you see several divergent paths.",
    text: "Ah, choices. We love choices.",
    choices: {
      "25.1": {
        text: "Very left",
        to: "25.1"
      },
      "25.2": {
        text: "Only slightly left",
        to: "25.2"
      },
      "25.3": {
        text: "I guess that’s kinda right-ish",
        to: "25.3"
      }
    },
    back: "23"
  },
}
