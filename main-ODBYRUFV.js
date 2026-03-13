import{a as ie,b as ve,c as Pe,d as Te,e as we}from"./chunk-6FHZCKEO.js";import{a as Ee,b as He}from"./chunk-AIPGSG5W.js";import{$a as l,Ba as E,Ea as Me,H as b,Ja as Se,Ka as xe,La as Y,M as g,Ma as x,Na as y,Oa as _,Pa as Z,Qa as de,R as k,Ra as c,S as R,Sa as u,T as S,Ta as f,U as I,Ua as h,Va as m,Wa as w,X as ee,Xa as C,Ya as ye,Za as v,_a as z,a as F,b as G,ba as D,ca as q,cb as Ae,d as T,da as he,db as De,eb as fe,fb as Q,gb as P,ha as pe,hb as p,i as me,ib as K,jb as J,kb as ne,l as ue,lb as ae,mb as X,oa as ke,qa as Re,qb as be,ra as s,rb as Ce,xa as ge}from"./chunk-UDDB25VY.js";var oe=class{constructor(){this.content=null,this.isPlaying=!1,this.currentTime=0}};var re=(()=>{let i=class i{constructor(){this.persisted=null,this.lastSaveMs=0,this._completedIds=D(new Set),this.completedIds=this._completedIds.asReadonly(),this.persisted=this.loadFromStorage(),this._completedIds.set(new Set(this.persisted?.completed??[]));let e=this.persisted?{content:this.persisted.content,isPlaying:!1,currentTime:this.persisted.times[this.persisted.content.id]??0}:new oe;this.state=new me(e)}performAction(e,n,o){let t=this.state.value;switch(e){case"play":if(n){let A=n.id===t.content?.id?t.currentTime:this.persisted?.times[n.id]??0;this.state.next({content:n,isPlaying:!0,currentTime:A}),this.persistContent(n)}break;case"pause":this.state.next(G(F({},t),{isPlaying:!1}));break;case"stop":if(this.state.next(G(F({},t),{isPlaying:!1,currentTime:0})),t.content&&this.persisted){let d=t.content.id;delete this.persisted.times[d],this.persisted.completed.includes(d)||(this.persisted.completed.push(d),this._completedIds.update(A=>new Set([...A,d]))),this.saveToStorage()}break;case"seek":typeof o=="number"&&(this.state.next(G(F({},t),{currentTime:o})),t.content&&this.throttledSaveTime(t.content.id,o));break}}getState(){return this.state.asObservable()}persistContent(e){this.persisted?this.persisted.content=e:this.persisted={content:e,times:{},completed:[]},this.saveToStorage()}throttledSaveTime(e,n){let o=Date.now();o-this.lastSaveMs<5e3||(this.lastSaveMs=o,this.persisted&&(this.persisted.times[e]=n,this.saveToStorage()))}loadFromStorage(){try{let e=localStorage.getItem("player-state");if(!e)return null;let n=JSON.parse(e);return!n.content?.id||!n.content?.link?null:{content:n.content,times:n.times??{},completed:n.completed??[]}}catch(e){return null}}saveToStorage(){try{localStorage.setItem("player-state",JSON.stringify(this.persisted))}catch(e){}}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var Be=[{episodio:"B",titulo:"Resident #stayhome #quedateencasa special - Sunsetstrip Home Edition 4/4/2020",likes:"48",descargas:"51.2K",fecha:"2020-04-04",descripcion:`Full Sunsetstrip Home Edition 5 hr set, recorded on 4/4/2020
Please support you charity of choice Cruz Roja Argentina COAS UN Foundation Buena Productora`,link:"https://mcdn.podbean.com/mf/download/7ij5vk/Hernan_Cattaneo_-_Sunsetstrip_Home_Edition_4-4-2020.mp3",tracklist:"Full Sunsetstrip Home Edition 5 hr set, recorded on 4/4/2020"},{episodio:"A",titulo:"Resident #stayhome #quedateencasa special - Sunsetstrip 2020",likes:"91",descargas:"66.9K",fecha:"2020-02-29",descripcion:"Hi everyone. I'm uploading a 7 hours set, recorded live from Sunsetstrip Buenos Aires on Feb 29th 2020 in an attempt to keep you company in these challenging times. Please, #stayhome and be safe. Hernan and BUENA Productora ----------------------- Hola a todos. Subo un set de 7 horas, grabado en Sunsetstrip Buenos Aires el 29 de Febrero de 2020, con la intenci\xF3n de hacerles compa\xF1\xEDa en \xE9stos tiempos dif\xEDciles. Por favor, #quedateencasa y cuidense. Hernan y BUENA Productora",link:"https://mcdn.podbean.com/mf/download/zc6x2c/HC_SunsetStrip_BA_2020-02-29.mp3",tracklist:"Hi everyone. I'm uploading a 7 hours set, recorded live from Sunsetstrip Buenos Aires on Feb 29th 2020 in an attempt to keep you company in these challenging times. Please, #stayhome and be safe. Hernan and BUENA Productora ----------------------- Hola a todos. Subo un set de 7 horas, grabado en Sunsetstrip Buenos Aires el 29 de Febrero de 2020, con la intenci\xF3n de hacerles compa\xF1\xEDa en \xE9stos tiempos dif\xEDciles. Por favor, #quedateencasa y cuidense. Hernan y BUENA Productora"},{episodio:"774",titulo:"Resident / Episode 774 / Mar 07 2026",descripcion:`1 - Tato Seco - Dream Collector
2 - Digital Mess - Deuterium (Auditoria Remix)
3 - Checo Cotela - Echoes In Time
4 - Kasper Koman - Amethyst Deceiver
5 - Tobi Amuchastegui - Rish
6 - Jomoss, Melaniya - Eclipse
7 - Ric Niels - Aeron
8 - Abuk, Golden Hour - Eterna
9 - ZAC - Equalizer
10 - Hernan Cattaneo & Soundexile - Mad Zen Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"11.1K",fecha:"2026-03-07",link:"https://mcdn.podbean.com/mf/download/ijf4fgpd3eiimety/774-HernanCattaneo-2026-03-07.mp3",tracklist:`Tato Seco - Dream Collector
Digital Mess - Deuterium (Auditoria Remix)
Checo Cotela - Echoes In Time
Kasper Koman - Amethyst Deceiver
Tobi Amuchastegui - Rish
Jomoss, Melaniya - Eclipse
Ric Niels - Aeron
Abuk, Golden Hour - Eterna
ZAC - Equalizer`},{episodio:"773",titulo:"Resident / Episode 773 / Feb 28 2026",descripcion:`1 - Uccelli - Flicker
2 - Steve Parry - Freeze
3 - Quivver - Moonlight Pools (Cruz Vittor Remix)
4 - Circulation, Cass (UK) - Nuke the Site From Orbit (Cass Skunkworks Remix)
5 - Gai Barone - Macula (Extended Mix)
6 - Thaddeus X - Life in Wave (Noel Barbeito Edit)
7 - UNWA - Lonely (Katrin Souza Remix)
8 - Nick Stoynoff - Strawberry Fields
9 - Calcou - Closer
10 - HVOB - The Blame Game (Roman & Juan Ib\xE1\xF1ez Bootleg) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"15.5K",fecha:"2026-02-28",link:"https://mcdn.podbean.com/mf/download/xfke6wb9zbf77g68/773-HernanCattaneo-2026-02-28.mp3",tracklist:`Uccelli - Flicker
Steve Parry - Freeze
Quivver - Moonlight Pools (Cruz Vittor Remix)
Circulation, Cass (UK) - Nuke the Site From Orbit (Cass Skunkworks Remix)
Gai Barone - Macula (Extended Mix)
Thaddeus X - Life in Wave (Noel Barbeito Edit)
UNWA - Lonely (Katrin Souza Remix)
Nick Stoynoff - Strawberry Fields
Calcou - Closer`},{episodio:"086",titulo:"Resident / Episode 086 / December 29 2012",descripcion:`Part 1 Tracklist

Clockwork, Tale Of Us, The/Das - Life & death

Sound Process - The Unthinkable

Estroe - Living Apart Together (Ian O\xB4Donnovan)

Santi Mossman & Rodrigo Mateo - Microcosmos Beat Syndrome - White Lie Part 2 Tracklist

Horizons - Iguazu (Graziano Raffa remix)

Ricky Ryan - Mess Monster (Barry Jamieson Mix)

Forrest People - Schabauch (Original Mix)

Dibby Dougherty & Dave Young - The Swan

Rod - Yolo`,likes:"4",descargas:"53.3K",fecha:"2012-12-29",link:"https://mcdn.podbean.com/mf/download/uzbzz/086-HernanCattaneo-2012-12-30.mp3",tracklist:`Part 1

Clockwork, Tale Of Us, The/Das - Life & death

Sound Process - The Unthinkable

Estroe - Living Apart Together (Ian O\xB4Donnovan)

Santi Mossman & Rodrigo Mateo - Microcosmos Beat Syndrome - White Lie Part 2

Horizons - Iguazu (Graziano Raffa remix)

Ricky Ryan - Mess Monster (Barry Jamieson Mix)

Forrest People - Schabauch (Original Mix)

Dibby Dougherty & Dave Young - The Swan

Rod - Yolo`},{episodio:"087",titulo:"Resident / Episode 087 / January 05 2013",descripcion:`Part 1 Tracklist

Steve Bug - Long Run

Guy Gerber ft. Jaw - Steady (Guy J mix)

Erdi Irmak - Swarm Of Spittle

Biologik - Break me down(Silinder Remix)

Part 2 Tracklist

Henry Saiz - Uncharted

Tripswitch - Deer Park (Radioactive Sandwich House Remix)

Sonic Union & Rumor - Whats It Called (Oscar Vazquez Remix)

Andy Arias - Right and Straight

Loisan - Nothern Pearls (Ilya Malyuev Remix)`,likes:"5",descargas:"62.4K",fecha:"2013-01-05",link:"https://mcdn.podbean.com/mf/download/3wj46/087-HernanCattaneo-2013-01-06.mp3",tracklist:`Part 1

Steve Bug - Long Run

Guy Gerber ft. Jaw - Steady (Guy J mix)

Erdi Irmak - Swarm Of Spittle

Biologik - Break me down(Silinder Remix)

Part 2

Henry Saiz - Uncharted

Tripswitch - Deer Park (Radioactive Sandwich House Remix)

Sonic Union & Rumor - Whats It Called (Oscar Vazquez Remix)

Andy Arias - Right and Straight

Loisan - Nothern Pearls (Ilya Malyuev Remix)`},{episodio:"076",titulo:"Resident / Episode 076 / October 20 2012",descripcion:`Part 1 Tracklist

Jon Hopkins - The Journey / Temple (from Monsters OST)

Li Polymer - The Dreamer

Matthew Dekay & Lee Burridge - Holding On

AndrewzVee & KN - Sky Fall

Part 2 Tracklist

Klartraum	- Aaron

James Zabiela - Healing (Hot Chip Remix)

East Cafe - Question One

Dark Soul Project & Santiago Garcia - Erks (Marc Poppcke Remix)`,likes:"3",descargas:"43K",fecha:"2012-10-20",link:"https://mcdn.podbean.com/mf/download/tr954k/076-HernanCattaneo-2012-10-21.mp3",tracklist:`Part 1

Jon Hopkins - The Journey / Temple (from Monsters OST)

Li Polymer - The Dreamer

Matthew Dekay & Lee Burridge - Holding On

AndrewzVee & KN - Sky Fall

Part 2

Klartraum	- Aaron

James Zabiela - Healing (Hot Chip Remix)

East Cafe - Question One

Dark Soul Project & Santiago Garcia - Erks (Marc Poppcke Remix)`},{episodio:"077",titulo:"Resident / Episode 077 / October 27 2012",descripcion:`Part 1 Tracklist

Mauro Norti-Last Day (Oliver Lieb Remix)

Dzim - Limits (Rodrigo Mateo Remix)

Terje Saether- Last Resort

Balcazar - My Fault

Ballibat (Lauer Mix) \xA0 \xA0Taragana Pyjarama

Part 2 Tracklist

Mauro Norti-You and Me (Max Cooper Remix)

James Zabiela-Healing (Midland Remix)

Hernan Cattaneo & John Tonks - Warsaw (Marcelo Vasami)

Marc-Pollen-Time To Connect (Yoram Remix)`,likes:"3",descargas:"43.2K",fecha:"2012-10-27",link:"https://mcdn.podbean.com/mf/download/8yd3df/077-HernanCattaneo-2012-10-28.mp3",tracklist:`Part 1

Mauro Norti-Last Day (Oliver Lieb Remix)

Dzim - Limits (Rodrigo Mateo Remix)

Terje Saether- Last Resort

Balcazar - My Fault

Ballibat (Lauer Mix) \xA0 \xA0Taragana Pyjarama

Part 2

Mauro Norti-You and Me (Max Cooper Remix)

James Zabiela-Healing (Midland Remix)

Hernan Cattaneo & John Tonks - Warsaw (Marcelo Vasami)

Marc-Pollen-Time To Connect (Yoram Remix)`},{episodio:"066",titulo:"Resident / Episode 066 / August 11 2012",descripcion:`Part 1 Tracklist

Andrew Grant, Lomez - Distant Thunder (Original Mix)

Stimming, David August - Sexy Biest (Gui Boratto Remix)

Kollektiv Turmstrasse - Schwindelig (Ian O'Donovan Remix)

Kassey Voorn - Lost In Jumeira (Tom Middleton Liquatech Mix)

Part 2 Tracklist

Kollektiv Turmstrasse - Lapacha (youANDme & Cosmic Cowboys Remix)

Gvozdin - Harmony & Balance (Fran Von Vie Remix)

Nikko.Z - Love Dose (Guy Mantzur & Khen)

Ferdy - Vanilla Sky

Santiago Garcia - Long Illness (Andrea Casino Mix)`,likes:"5",descargas:"31.1K",fecha:"2012-08-11",link:"https://mcdn.podbean.com/mf/download/qbb8jg/066-HernanCattaneo-2012-08-12.mp3",tracklist:`Part 1

Andrew Grant, Lomez - Distant Thunder (Original Mix)

Stimming, David August - Sexy Biest (Gui Boratto Remix)

Kollektiv Turmstrasse - Schwindelig (Ian O'Donovan Remix)

Kassey Voorn - Lost In Jumeira (Tom Middleton Liquatech Mix)

Part 2

Kollektiv Turmstrasse - Lapacha (youANDme & Cosmic Cowboys Remix)

Gvozdin - Harmony & Balance (Fran Von Vie Remix)

Nikko.Z - Love Dose (Guy Mantzur & Khen)

Ferdy - Vanilla Sky

Santiago Garcia - Long Illness (Andrea Casino Mix)`},{episodio:"067",titulo:"Resident / Episode 067 / August 18 2012",descripcion:`Part 1 Tracklist

St Savor - Derelict Windmill

Sea Flight (Navar's Big Dub Remix)

Colourblock - Breed (Santiago Garcia Remix)

Henry Saiz - Our Discovery

Djuma Soundsystem - Come Together

Part 2 Tracklist

Mario Puccio - Serenade\xA0 (Daneel Old School Remix)

Juan Deminicis, Dark Soul Project & Santiago Garcia )

Michael, Levan & Stiven Rivic - Violence [Marcelo Vasami Remix]

LOKII - Something (King Unique Remix)`,likes:"3",descargas:"32.2K",fecha:"2012-08-18",link:"https://mcdn.podbean.com/mf/download/eguq49/067-HernanCattaneo-2012-08-19.mp3",tracklist:`Part 1

St Savor - Derelict Windmill

Sea Flight (Navar's Big Dub Remix)

Colourblock - Breed (Santiago Garcia Remix)

Henry Saiz - Our Discovery

Djuma Soundsystem - Come Together

Part 2

Mario Puccio - Serenade\xA0 (Daneel Old School Remix)

Juan Deminicis, Dark Soul Project & Santiago Garcia )

Michael, Levan & Stiven Rivic - Violence [Marcelo Vasami Remix]

LOKII - Something (King Unique Remix)`},{episodio:"056",titulo:"Resident / Episode 056 / June 02 2012",descripcion:`Part 1 Tracklist

Unknown- Saschienne

Jose Wated Feat. Lola Pink - Typical Song (Deaf Pillow Remix)

My Favorite Robot - The Waiting Rain (Mind Against Remix)

FunkForm - Lost In The Wild

Part 2 Tracklist

Let the music play ft. UTRB - Don't Weigh Me Down - Guy J Remix

Mindlook - Drowned In The Mood

Detroit Grand Pubahs, Psycatron-NVRSAYNVR (Dustin Zahn Remix)

JDNMGJ - Trezzz`,likes:"5",descargas:"26.6K",fecha:"2012-06-02",link:"https://mcdn.podbean.com/mf/download/haakv9/056-HernanCattaneo-2012-06-02.mp3",tracklist:`Part 1

Unknown- Saschienne

Jose Wated Feat. Lola Pink - Typical Song (Deaf Pillow Remix)

My Favorite Robot - The Waiting Rain (Mind Against Remix)

FunkForm - Lost In The Wild

Part 2

Let the music play ft. UTRB - Don't Weigh Me Down - Guy J Remix

Mindlook - Drowned In The Mood

Detroit Grand Pubahs, Psycatron-NVRSAYNVR (Dustin Zahn Remix)

JDNMGJ - Trezzz`},{episodio:"057",titulo:"Resident / Episode 057 / June 09 2012",descripcion:`Part 1 Tracklist

My Favorite Robot - Barricade

Jaded & James Petrou - Tonis Pain (INXECs Morphine Mashup)

Li-Polymer - Third Element (Andy Arias Remix)

Slap Lovers - Oberlead (Marco Zenker Remix)

Ugur Soygur - Let's Deep Absolutely (Spennu Remix)

Part 2 Tracklist

Dominic James - Concious Moment

Dousk - Winchme

Asten - Borealis (Microtrauma\`s Offshore Dub)

Cora Novoa - Unattainable Love [Marcelo Vasami Remix]`,likes:"8",descargas:"28.9K",fecha:"2012-06-09",link:"https://mcdn.podbean.com/mf/download/eb5k8a/057-HernanCattaneo-2012-06-09.mp3",tracklist:`Part 1

My Favorite Robot - Barricade

Jaded & James Petrou - Tonis Pain (INXECs Morphine Mashup)

Li-Polymer - Third Element (Andy Arias Remix)

Slap Lovers - Oberlead (Marco Zenker Remix)

Ugur Soygur - Let's Deep Absolutely (Spennu Remix)

Part 2

Dominic James - Concious Moment

Dousk - Winchme

Asten - Borealis (Microtrauma\`s Offshore Dub)

Cora Novoa - Unattainable Love [Marcelo Vasami Remix]`},{episodio:"046",titulo:"Resident / Episode 046 / March 24 2012",descripcion:`Part 1 Tracklist

Daneel - Melancholy

Pole Folder & Amine Edge - Minor Theory (Liubo Ursiny edit)

Oxia - Harmonie

Mehmet Akar & Dr. Avalance - Marmara (Matias Chilano Remix)

Part 2 Tracklist

Ishome - Nothing (Ormatie Remix)

Hernan Cerbello - It's Your Choice (Santiago Garcia Remix)

Vinayak^A - Scale of historical facts

Guy J - Nightstalker`,likes:"6",descargas:"12.3K",fecha:"2012-03-24",link:"https://mcdn.podbean.com/mf/download/sm6eap/046-HernanCattaneo-2012-03-23.mp3",tracklist:`Part 1

Daneel - Melancholy

Pole Folder & Amine Edge - Minor Theory (Liubo Ursiny edit)

Oxia - Harmonie

Mehmet Akar & Dr. Avalance - Marmara (Matias Chilano Remix)

Part 2

Ishome - Nothing (Ormatie Remix)

Hernan Cerbello - It's Your Choice (Santiago Garcia Remix)

Vinayak^A - Scale of historical facts

Guy J - Nightstalker`},{episodio:"036",titulo:"Resident / Episode 036 / January 14 2012",descripcion:`Part 1 Tracklist

Nhar - Motionless (Original Mix)

Bizet Reactions - All I Want (Estroe Remix)

Lank, Zajac - Juice Box (Rodskeez Remix)

Andrew McDonnell - Flys In The Village (Lonya Remix) Part 2 Tracklist

Indira Boka - Next To You (Oliver Schories Remix)

Jemmy - Suede Desert (Marc Marzenit)

Gui Boratto - Paralelo (Solee Remix)

Ki:Theory - Wanna Run (feat. Maura Davis) (Nick Warren Remix)`,likes:"4",descargas:"9.9K",fecha:"2012-01-14",link:"https://mcdn.podbean.com/mf/download/vq7iwi/036-HernanCattaneo-2012-01-14.mp3",tracklist:`Part 1

Nhar - Motionless (Original Mix)

Bizet Reactions - All I Want (Estroe Remix)

Lank, Zajac - Juice Box (Rodskeez Remix)

Andrew McDonnell - Flys In The Village (Lonya Remix) Part 2

Indira Boka - Next To You (Oliver Schories Remix)

Jemmy - Suede Desert (Marc Marzenit)

Gui Boratto - Paralelo (Solee Remix)

Ki:Theory - Wanna Run (feat. Maura Davis) (Nick Warren Remix)`},{episodio:"026",titulo:"Resident / Episode 026 / October 29 2011",descripcion:"Part 1 Tracklist Days Off - Geminius [Michael King Remix] Mark Reeve - Curl The Selph - Evening Falls Elon - Carlos (Exercise One Remix) Apologist And Unsettled - Zabriskie Point Part 2 Tracklist Marcelo Vasami - Every Night (Scotty.A's Dark Dub) Fiord - Shadows of you (Triangle) Ioan Gamboa - Isis Deadpan - Revolution (Seb Dhajje remix)",likes:"6",descargas:"9.7K",fecha:"2011-10-29",link:"https://mcdn.podbean.com/mf/download/kb62j/026-HernanCattaneo-2011-10-29.mp3",tracklist:"Part 1 Days Off - Geminius [Michael King Remix] Mark Reeve - Curl The Selph - Evening Falls Elon - Carlos (Exercise One Remix) Apologist And Unsettled - Zabriskie Point Part 2 Marcelo Vasami - Every Night (Scotty.A's Dark Dub) Fiord - Shadows of you (Triangle) Ioan Gamboa - Isis Deadpan - Revolution (Seb Dhajje remix)"},{episodio:"016",titulo:"Resident / Episode 016 / August 20 2011",descripcion:`Part 1 tracklist Lemontrip - Undiscovered

Pawas - Huis Huis (Mike Machine Remix)

Marco Effe - Ayurveda's Notes

Matthias Meyer - More Or Less feat. Christopher Groove (Christian Burkhardt & Einzelkind Remix)

Minilogue - Blessed Part 2 Tracklist Gabriel Rhome - Ronde

Raxon - Into The Summer (Nick Muir Remix)

Neshproject - The way it used to be

Fergie - PCP (King Unique Remix)`,likes:"6",descargas:"4.5K",fecha:"2011-08-20",link:"https://mcdn.podbean.com/mf/download/zwez45/016-HernanCattaneo-2011-08-20.mp3",tracklist:`Part 1 Lemontrip - Undiscovered

Pawas - Huis Huis (Mike Machine Remix)

Marco Effe - Ayurveda's Notes

Matthias Meyer - More Or Less feat. Christopher Groove (Christian Burkhardt & Einzelkind Remix)

Minilogue - Blessed Part 2 Gabriel Rhome - Ronde

Raxon - Into The Summer (Nick Muir Remix)

Neshproject - The way it used to be

Fergie - PCP (King Unique Remix)`},{episodio:"017",titulo:"Resident / Episode 017 / August 27  2011",descripcion:`Part 1 Tracklist Mano Le Tough - Stories Marcus Meinhardt - Chain Of Memories Joel Armstrong - Silvermoon (Mode B Remix) Charles K - Goodbye Robot

Mike Griego - In That Moment (Dark Soul Project)

Part 2 Tracklist

Lanny May - All Things Are One Thing

Mathew Lynch - Water waves (original mix)

Gregor Tresher - Lights From The Inside (Dosem Remix)

Marcelo Vasami & Ariel AB - Too Long Too Late (Silinder Remix)

Examine - Stand Alone (Estroe Remix)`,likes:"10",descargas:"4.3K",fecha:"2011-08-27",link:"https://mcdn.podbean.com/mf/download/ifuu36/017-HernanCattaneo-2011-08-27.mp3",tracklist:`Part 1 Mano Le Tough - Stories Marcus Meinhardt - Chain Of Memories Joel Armstrong - Silvermoon (Mode B Remix) Charles K - Goodbye Robot

Mike Griego - In That Moment (Dark Soul Project)

Part 2

Lanny May - All Things Are One Thing

Mathew Lynch - Water waves (original mix)

Gregor Tresher - Lights From The Inside (Dosem Remix)

Marcelo Vasami & Ariel AB - Too Long Too Late (Silinder Remix)

Examine - Stand Alone (Estroe Remix)`},{episodio:"006",titulo:"Resident / Episode 006 / June 11 2011",descripcion:"Part1 Tracklist Manuel Sofia - Simple Things Taras van de Voorde/ Estroe - Hear This (Neil Quigley) Alex Niggemann - Lately Dousk - Estrange (Roger Martinez ReFunk) Pig & Dan - Tears Of A Clown Part2 Tracklist Maceo Plex & Elon - Bummalo Cozzy D, Eric Volta - The Gift (Kevin Griffiths Northern Exposure Remix) Claus Von Klunk - Fandango (Dousk remix) Mango, Kazusa - Asphalt Lines (Ryan David Interpretation ) John Digweed & Nick Muir - 30 Northeast",likes:"10",descargas:"6.8K",fecha:"2011-06-11",link:"https://mcdn.podbean.com/mf/download/hsxr7/006-HernanCattaneo-2011-06-11.mp3",tracklist:"Part 1 Manuel Sofia - Simple Things Taras van de Voorde/ Estroe - Hear This (Neil Quigley) Alex Niggemann - Lately Dousk - Estrange (Roger Martinez ReFunk) Pig & Dan - Tears Of A Clown Part 2 Maceo Plex & Elon - Bummalo Cozzy D, Eric Volta - The Gift (Kevin Griffiths Northern Exposure Remix) Claus Von Klunk - Fandango (Dousk remix) Mango, Kazusa - Asphalt Lines (Ryan David Interpretation ) John Digweed & Nick Muir - 30 Northeast"},{episodio:"007",titulo:"Resident / Episode 007 / June 18 2011",descripcion:"Part 1 Tracklist Sebo K - Mr. Duk Rowdent - Garage sale Ocean Wave - Clearwater (Chloe Harris Remix) Inkfish - Detroit Quivver feat Cari Golden - Happy Part 2 Tracklist Ryan Davis, Transistor - Nature Is The Law (Original Mix) Mike Griego - In That Moment Martin Morning, Mattia Cunico - Outside Its Better (Hernan Cattaneo & Soundexile rmx) Martin Morning, Mattia Cunico - Duuud (Hernan Cattaneo & Soundexile rmx)",likes:"4",descargas:"7K",fecha:"2011-06-18",link:"https://mcdn.podbean.com/mf/download/hbhkkc/007-HernanCattaneo-2011-06-18.mp3",tracklist:"Part 1 Sebo K - Mr. Duk Rowdent - Garage sale Ocean Wave - Clearwater (Chloe Harris Remix) Inkfish - Detroit Quivver feat Cari Golden - Happy Part 2 Ryan Davis, Transistor - Nature Is The Law (Original Mix) Mike Griego - In That Moment Martin Morning, Mattia Cunico - Outside Its Better (Hernan Cattaneo & Soundexile rmx) Martin Morning, Mattia Cunico - Duuud (Hernan Cattaneo & Soundexile rmx)"},{episodio:"001",titulo:"Resident / Episode 001.1 / May 7th 2011",descripcion:"01. Who Made Who - Every Minute Alone (Michael Mayer Remix) 02. Roger Martinez - Andromeda (Dub Mix) 03. Sasha - Minimal - QAT (Nomad in the Dark dub) 04. Ruede Hagelstein - Emergency (Super Flu's Gentle Dental Nurse Remix )",likes:"33",descargas:"11.5K",fecha:"2011-05-07",link:"https://mcdn.podbean.com/mf/download/926aiz/001_1-HernanCattaneo-2011-05-07.mp3",tracklist:"Who Made Who - Every Minute Alone (Michael Mayer Remix) 02. Roger Martinez - Andromeda (Dub Mix) 03. Sasha - Minimal - QAT (Nomad in the Dark dub) 04. Ruede Hagelstein - Emergency (Super Flu's Gentle Dental Nurse Remix )"},{episodio:"002",titulo:"Resident / Episode 002.1 / May 14th 2011",descripcion:"Part 1 tracklist Chaim-Alive (Kiki Extended Remix) Siopsis-I Try To Fight feat. Alfons Midland-Through Motion Glimpse, Martin Dawson-No One Belongs Here More Than You - (Ewan's Balearos Maximos Remix) Alex Arnout - Vanishing Point",likes:"14",descargas:"6.7K",fecha:"2011-05-14",link:"https://mcdn.podbean.com/mf/download/emu6ik/002_1-HernanCattaneo-2011-05-14.mp3",tracklist:"Part 1 Chaim-Alive (Kiki Extended Remix) Siopsis-I Try To Fight feat. Alfons Midland-Through Motion Glimpse, Martin Dawson-No One Belongs Here More Than You - (Ewan's Balearos Maximos Remix) Alex Arnout - Vanishing Point"},{episodio:"003",titulo:"Resident / Episode 003 / May 21st 2011",descripcion:"Part 1 tracklist Espen, Elusive - Albatross Confessions (Ryan Davis rework) Jimpster - Alsace & Lorraine (Ripperton Remix Lee Foss - Your Turn Girl (Shonky & Dyed Soundorom remix) Kid Bliss - Discoshit Ryan Luciano - l\xB4 jenwar (Silinder Remix) Part 2 tracklist Nhar - Innerplace (John Daily mix) Gregor Tresher - Through the shadow glass Kassey Voorn - Viola Egostereo - Sex Pistols (Hernan Cattaneo & Soundexile rmx)",likes:"11",descargas:"7.3K",fecha:"2011-05-21",link:"https://mcdn.podbean.com/mf/download/te8ea/003-HernanCattaneo-2011-05-21.mp3",tracklist:"Part 1 Espen, Elusive - Albatross Confessions (Ryan Davis rework) Jimpster - Alsace & Lorraine (Ripperton Remix Lee Foss - Your Turn Girl (Shonky & Dyed Soundorom remix) Kid Bliss - Discoshit Ryan Luciano - l\xB4 jenwar (Silinder Remix) Part 2 Nhar - Innerplace (John Daily mix) Gregor Tresher - Through the shadow glass Kassey Voorn - Viola Egostereo - Sex Pistols (Hernan Cattaneo & Soundexile rmx)"},{episodio:"004",titulo:"Resident / Episode 004 / May 28th 2011",descripcion:"Part 1 tracklist Ryan Davis - My White Zebra (Estroe Remix ) Arithmetics - For The Faint of Heart [ Arithmetics] CamelPhat - Watergate Rodskeez & Adam Jace - In My Naked Village Patrice Baumel - To Insanity And Beyond Part 2 tracklist Dave Shtorn - Magic Moments (Eelke Kleijn's Magical Dub Ride) Sven Vath - Ballet Romance (Yousef) Andrew McDonnell - @am dj Scotty A - Persistence",likes:"8",descargas:"8.1K",fecha:"2011-05-28",link:"https://mcdn.podbean.com/mf/download/wu3yxg/004-HernanCattaneo-2011-05-28.mp3",tracklist:"Part 1 Ryan Davis - My White Zebra (Estroe Remix ) Arithmetics - For The Faint of Heart [ Arithmetics] CamelPhat - Watergate Rodskeez & Adam Jace - In My Naked Village Patrice Baumel - To Insanity And Beyond Part 2 Dave Shtorn - Magic Moments (Eelke Kleijn's Magical Dub Ride) Sven Vath - Ballet Romance (Yousef) Andrew McDonnell - @am dj Scotty A - Persistence"},{episodio:"005",titulo:"Resident / Episode 005 / June 04 2011",descripcion:"Part 1 tracklist Paneoh- Sanatrack (Gregers Remix) Mario & Vidis feat. Ernesto - Changed (Andre Lodemann Remix) Heiko Laux & Teo Schulte - Suol Hug (Till von Sein Last Minute DoomDub) System 7 - Positive Noise (Original Cub Mix) DJ Freddy & Michael Avannier - Mechanic system Part 2 tracklist Tim Deluxe & Mat Playford - Back to the Rocket (Club Mix) Slow - Cold Slow (Speiltape Remix) Android Cartel - Wake Up (Dark Soul Project Remix) Kasey Taylor - Similarity (Barry Jamieson Remix)",likes:"9",descargas:"6.9K",fecha:"2011-06-04",link:"https://mcdn.podbean.com/mf/download/um7mc/005-HernanCattaneo-2011-06-04.mp3",tracklist:"Part 1 Paneoh- Sanatrack (Gregers Remix) Mario & Vidis feat. Ernesto - Changed (Andre Lodemann Remix) Heiko Laux & Teo Schulte - Suol Hug (Till von Sein Last Minute DoomDub) System 7 - Positive Noise (Original Cub Mix) DJ Freddy & Michael Avannier - Mechanic system Part 2 Tim Deluxe & Mat Playford - Back to the Rocket (Club Mix) Slow - Cold Slow (Speiltape Remix) Android Cartel - Wake Up (Dark Soul Project Remix) Kasey Taylor - Similarity (Barry Jamieson Remix)"},{episodio:"008",titulo:"Resident / Episode 008 / June 25 2011",descripcion:"Part 1 Tracklist The XX - Fantasy (Sound Process) Guy J - Sahara Gregor Tresher - LEAVING Jimmy Van M Feat. Steve T \u2013 We Are Children Part 2 tracklist Lonya and Aruba feat. Patrick Grob - Cannibals Moby vs Mohrr Kai Handberg - Hengemyr Verche - Awakening",likes:"4",descargas:"7.5K",fecha:"2011-06-25",link:"https://mcdn.podbean.com/mf/download/sqswd/008-HernanCattaneo-2011-06-25.mp3",tracklist:"Part 1 The XX - Fantasy (Sound Process) Guy J - Sahara Gregor Tresher - LEAVING Jimmy Van M Feat. Steve T \u2013 We Are Children Part 2 Lonya and Aruba feat. Patrick Grob - Cannibals Moby vs Mohrr Kai Handberg - Hengemyr Verche - Awakening"},{episodio:"009",titulo:"Resident / Episode 009 / July 02 2011",descripcion:`Part 1 Tracklist Martin Buttrich - Rocket

Adam Port feat. Ruede Hagelstein - Corrosive Love

Baboop vs Thodoris Triantafillou & CJ Jeff -Bottle U (King Unique Bootleg)

Midnight Ramblers - Scarab Part 2 Tracklist Raxon - Into The Summer

Chris Fortier - Round Turn Life

Giorgos Gatzigristos - Natural Selection

Tom Hades - Come one`,likes:"4",descargas:"7.2K",fecha:"2011-07-02",link:"https://mcdn.podbean.com/mf/download/7sgv36/009-HernanCattaneo-2011-07-02.mp3",tracklist:`Part 1 Martin Buttrich - Rocket

Adam Port feat. Ruede Hagelstein - Corrosive Love

Baboop vs Thodoris Triantafillou & CJ Jeff -Bottle U (King Unique Bootleg)

Midnight Ramblers - Scarab Part 2 Raxon - Into The Summer

Chris Fortier - Round Turn Life

Giorgos Gatzigristos - Natural Selection

Tom Hades - Come one`},{episodio:"010",titulo:"Resident / Episode 010 / July 09 2011",descripcion:"Part 1 Tracklist Mason featuring Aqualung - Little Angel (Robert Babicz Sunshine Mix) Claude Vonstroke - Bird Brain (Ryan Luciano Rework) Tone Float - Blue Velvet 9west - Chasing Demons Part 2 Tracklist Paul Kalkbrenner - Kruppzeug Steffen Nehrig - Mouth Of The Canal (Original Mix ) Anja Schneider, And.Id - Imagination (Original Mix ) Gus Gus - Selfoss (Deepfunk's Unofficial Remix) K-pax - Space ( Bs As deep Remix)",likes:"3",descargas:"7.1K",fecha:"2011-07-09",link:"https://mcdn.podbean.com/mf/download/rape27/010-HernanCattaneo-2011-07-09.mp3",tracklist:"Part 1 Mason featuring Aqualung - Little Angel (Robert Babicz Sunshine Mix) Claude Vonstroke - Bird Brain (Ryan Luciano Rework) Tone Float - Blue Velvet 9west - Chasing Demons Part 2 Paul Kalkbrenner - Kruppzeug Steffen Nehrig - Mouth Of The Canal (Original Mix ) Anja Schneider, And.Id - Imagination (Original Mix ) Gus Gus - Selfoss (Deepfunk's Unofficial Remix) K-pax - Space ( Bs As deep Remix)"},{episodio:"011",titulo:"Resident / Episode 011 / July 16 2011",descripcion:"Part 1 Tracklist Rodriguez Jr Lila Bamako vz Rupert - Neve (Astraway Mash) Florian Gasperini & Jose Maria Ramon - Unbreakable (Pole Folder mix) Soulwerk - Wind Rose Joel Armstrong - Silver Moon (Pig & Dan Remix) Ellez Marinni - Ez Style (Shiftone Remix) Part 2 Tracklist Oliver Lieb - Extrasolar Guy Mantzur - Wisper Me Flowly Tvardovsky - Under The Mask (Pacco\xA0 &\xA0 Rudy B Remix) Funk Dvoid - Toro Dosem - Origin",likes:"4",descargas:"7.9K",fecha:"2011-07-16",link:"https://mcdn.podbean.com/mf/download/5iq8kz/011-HernanCattaneo-2011-07-16.mp3",tracklist:"Part 1 Rodriguez Jr Lila Bamako vz Rupert - Neve (Astraway Mash) Florian Gasperini & Jose Maria Ramon - Unbreakable (Pole Folder mix) Soulwerk - Wind Rose Joel Armstrong - Silver Moon (Pig & Dan Remix) Ellez Marinni - Ez Style (Shiftone Remix) Part 2 Oliver Lieb - Extrasolar Guy Mantzur - Wisper Me Flowly Tvardovsky - Under The Mask (Pacco\xA0 &\xA0 Rudy B Remix) Funk Dvoid - Toro Dosem - Origin"},{episodio:"012",titulo:"Resident / Episode 012 / July 23 2011",descripcion:`Part 1 Tracklist

Daniel Bortz & Sascha Sibler - Color Of Love

Daniel Bortz & Sascha Sibler - Fantasy

Marquez Ill vs Pole Folde - Nocturne (Alexanderplatz Mix)

Ellen Allien - Searching (Shonky Remix)

Part 2 Tracklist

Henry Saiz - The way The sunlight plays upon her hair

Romano Alfieri & Luca Bear - Leave The Valley

Ruede Hagelstein - In A Stream (Original Mix)

Hishmulator - Skiz nir (Marc Marzenit Remix)`,likes:"4",descargas:"7.7K",fecha:"2011-07-23",link:"https://mcdn.podbean.com/mf/download/imsur/012-HernanCattaneo-2011-07-23.mp3",tracklist:`Part 1

Daniel Bortz & Sascha Sibler - Color Of Love

Daniel Bortz & Sascha Sibler - Fantasy

Marquez Ill vs Pole Folde - Nocturne (Alexanderplatz Mix)

Ellen Allien - Searching (Shonky Remix)

Part 2

Henry Saiz - The way The sunlight plays upon her hair

Romano Alfieri & Luca Bear - Leave The Valley

Ruede Hagelstein - In A Stream (Original Mix)

Hishmulator - Skiz nir (Marc Marzenit Remix)`},{episodio:"013",titulo:"Resident / Episode 013 / July 30 2011",descripcion:`Part 1 Tracklist

Leseman & Cohen ft. Colin Mutchler - Fung Shway (Camiel Daamen Remix)

Moby - Lie Down In Darkness (Gregor Tresher Mix)

Dana Ruh - What I'm Telling You

Silicone Soul - Time Mariner's Mirrour

Squilacce/Guti - That Ginger Pony Tail

Part 1 Tracklist

Kassey Voorn - Ghalantomos (Deepfunk Remix)

Guy J & Miriam Vaga - Fly (Simon Vuarambon & Kevin Di Serna Main Mix)

Astraway - Payment in Full

John Digweed & Nick Muir \u2013 30 Northeast (Nikko.Z Unofficial Remix)`,likes:"8",descargas:"7.8K",fecha:"2011-07-30",link:"https://mcdn.podbean.com/mf/download/xanufg/013-HernanCattaneo-2011-07-30.mp3",tracklist:`Part 1

Leseman & Cohen ft. Colin Mutchler - Fung Shway (Camiel Daamen Remix)

Moby - Lie Down In Darkness (Gregor Tresher Mix)

Dana Ruh - What I'm Telling You

Silicone Soul - Time Mariner's Mirrour

Squilacce/Guti - That Ginger Pony Tail

Part 1

Kassey Voorn - Ghalantomos (Deepfunk Remix)

Guy J & Miriam Vaga - Fly (Simon Vuarambon & Kevin Di Serna Main Mix)

Astraway - Payment in Full

John Digweed & Nick Muir \u2013 30 Northeast (Nikko.Z Unofficial Remix)`},{episodio:"014",titulo:"Resident / Episode 014 / August 06 2011",descripcion:"Part 1 Tracklist Azari & III - Manic - Maceo Plex Remix Jin Choi - Half Baked (Maceo Plex Groove Remix) Hakan Libdo -Meatmatching - Summer (Brendon Collins) Alex Celler - Blue Vaudeville (Shonky Remix) Part 2 Tracklist Santiago Garcia - Needing Rest (Original mix) Radiohead - Codex (Henry Saiz Rmx) Dark Soul Project & Andy Arias - To Be Or Not To Be Lonya & Audio Junkies - Fetish (Audio Junkies Mix) Oliver Lieb - Extrasolar",likes:"4",descargas:"7.9K",fecha:"2011-08-06",link:"https://mcdn.podbean.com/mf/download/cxidps/014-HernanCattaneo-2011-08-06.mp3",tracklist:"Part 1 Azari & III - Manic - Maceo Plex Remix Jin Choi - Half Baked (Maceo Plex Groove Remix) Hakan Libdo -Meatmatching - Summer (Brendon Collins) Alex Celler - Blue Vaudeville (Shonky Remix) Part 2 Santiago Garcia - Needing Rest (Original mix) Radiohead - Codex (Henry Saiz Rmx) Dark Soul Project & Andy Arias - To Be Or Not To Be Lonya & Audio Junkies - Fetish (Audio Junkies Mix) Oliver Lieb - Extrasolar"},{episodio:"015",titulo:"Resident / Episode 015 / August 13 2011",descripcion:`Part 1 Tracklist Deep Mariano - Secret Passage

Vector Lovers - Melodies And Memory (Marquez Ill Remix)

T lectual - Glass walls (Diyo Remix)

Reference - Another Place

Microtrauma - Circulate Part 2 Tracklist Hartmut Kiss - Water Games (Eelke Kleijn's Vintage Remix)

Paperclip People - 4 My Peepz (Dubfire Rework)

Whebba - Human Interface

Carl Cox - Family Guy (Jon Rundell)`,likes:"3",descargas:"7.7K",fecha:"2011-08-13",link:"https://mcdn.podbean.com/mf/download/9wfn7p/015-HernanCattaneo-2011-08-13.mp3",tracklist:`Part 1 Deep Mariano - Secret Passage

Vector Lovers - Melodies And Memory (Marquez Ill Remix)

T lectual - Glass walls (Diyo Remix)

Reference - Another Place

Microtrauma - Circulate Part 2 Hartmut Kiss - Water Games (Eelke Kleijn's Vintage Remix)

Paperclip People - 4 My Peepz (Dubfire Rework)

Whebba - Human Interface

Carl Cox - Family Guy (Jon Rundell)`},{episodio:"018",titulo:"Resident / Episode 018 / September 03  2011",descripcion:`Part 1 Tracklist

Tom Glass - Naive
Shonky - Oasis
Wiretappeur Everybody Loves Ice Cream - Vinzenzo Remix
Tone Float & Neil Quigley - In Pursuit
Barem - Better

Part 2 Tracklist

Stefan Hellstrom - Velcro Mind (Montano Remix)
Eelke Kleijn - Theme For Nosey (Peter Makto & Gregory S remix)
Mike Griego vs Mohrr
Nikko.Z - L.A
Steve Slight - Triton`,likes:"12",descargas:"4.6K",fecha:"2011-09-03",link:"https://mcdn.podbean.com/mf/download/mact7y/018-HernanCattaneo-2011-09-03.mp3",tracklist:`Part 1

Tom Glass - Naive
Shonky - Oasis
Wiretappeur Everybody Loves Ice Cream - Vinzenzo Remix
Tone Float & Neil Quigley - In Pursuit
Barem - Better

Part 2

Stefan Hellstrom - Velcro Mind (Montano Remix)
Eelke Kleijn - Theme For Nosey (Peter Makto & Gregory S remix)
Mike Griego vs Mohrr
Nikko.Z - L.A
Steve Slight - Triton`},{episodio:"019",titulo:"Resident / Episode 019 / September 10 2011",descripcion:"Tracklist Part 1 The Sushi Club -Dopia - Christian Burkhardt Remix Moonbeam - No Regrets feat. Pryce Oliver (H.O.S.H. Remix ) Florian Meindl, Ricardo Phillips - Desert Times (Boris Brejcha Remix) Andy Arias - Pamperland UNKLE - Rabbit In Your Headlight (King Unique Remix) ----------- Tracklist Part 2 Martin Woerner - Braintwister (Frank Leicher.. Pascal Feos Remix) Tom Glass - Naive (Nick Warren) Juan Deminicis - Dark Concience (Original Mix) Bollen &\xA0 Fichtner - pis- en kots (Audiotox & Watson)",likes:"7",descargas:"4.3K",fecha:"2011-09-10",link:"https://mcdn.podbean.com/mf/download/jwubh3/019-HernanCattaneo-2011-09-10.mp3",tracklist:"Tracklist Part 1 The Sushi Club -Dopia - Christian Burkhardt Remix Moonbeam - No Regrets feat. Pryce Oliver (H.O.S.H. Remix ) Florian Meindl, Ricardo Phillips - Desert Times (Boris Brejcha Remix) Andy Arias - Pamperland UNKLE - Rabbit In Your Headlight (King Unique Remix) ----------- Tracklist Part 2 Martin Woerner - Braintwister (Frank Leicher.. Pascal Feos Remix) Tom Glass - Naive (Nick Warren) Juan Deminicis - Dark Concience (Original Mix) Bollen &\xA0 Fichtner - pis- en kots (Audiotox & Watson)"},{episodio:"020",titulo:"Resident / Episode 020 / September 17 2011",descripcion:`Part 1 Tracklist

Michel De Hey Vs. M.I.R.K.O. - Give Me A Light (Rodriguez Jr. Remix) Lair - Spada Sven Elmlund - Loud (Alexander Kowalski Remix) Slideshow Park - Shining (Solee Remix) Max Cooper - Qualia

Part 2 Tracklist

Rich Curtis - Partial Credit (Scotty.A Remix) Giorgos Gatzigristos - Flush (Paul Hazendonk Manual Remix) Villains - Slow Thump (Sian insulated remix) Marc Poppcke & Max von Valentiner - Never Go Back Diego Poblets - Meridians And Parallels`,likes:"3",descargas:"4.2K",fecha:"2011-09-17",link:"https://mcdn.podbean.com/mf/download/g943rw/020-HernanCattaneo-2011-09-17.mp3",tracklist:`Part 1

Michel De Hey Vs. M.I.R.K.O. - Give Me A Light (Rodriguez Jr. Remix) Lair - Spada Sven Elmlund - Loud (Alexander Kowalski Remix) Slideshow Park - Shining (Solee Remix) Max Cooper - Qualia

Part 2

Rich Curtis - Partial Credit (Scotty.A Remix) Giorgos Gatzigristos - Flush (Paul Hazendonk Manual Remix) Villains - Slow Thump (Sian insulated remix) Marc Poppcke & Max von Valentiner - Never Go Back Diego Poblets - Meridians And Parallels`},{episodio:"021",titulo:"Resident / Episode 021 / September 24 2011",descripcion:"Part 1 Tracklist Mechanique - Karoshi Gregor Tresher - Lights From The Inside (Nick Curly Remix) Inxec, Droog - Westbound Hal Incandenza - Little Mountains (Mono Electric) Guy Mantzur - Mediterranean blue Part 2 Tracklist Gui Boratto - The Third Deepfunk - Monday (Luis Bondio Unofficial Remix) Red Devil - Gamelan (Martin Garcia Remix) Loacs Erepams - I Can't Figure It Out (Paul Hazendonk's Manual remix)",likes:"3",descargas:"11.1K",fecha:"2011-09-24",link:"https://mcdn.podbean.com/mf/download/bp2vxr/021-HernanCattaneo-2011-09-24.mp3",tracklist:"Part 1 Mechanique - Karoshi Gregor Tresher - Lights From The Inside (Nick Curly Remix) Inxec, Droog - Westbound Hal Incandenza - Little Mountains (Mono Electric) Guy Mantzur - Mediterranean blue Part 2 Gui Boratto - The Third Deepfunk - Monday (Luis Bondio Unofficial Remix) Red Devil - Gamelan (Martin Garcia Remix) Loacs Erepams - I Can't Figure It Out (Paul Hazendonk's Manual remix)"},{episodio:"022",titulo:"Resident / Episode 022 / October 01 2011",descripcion:"Part 1 Tracklist Superpitcher - White Lightning Stel & Sasse - The Z James What - It Feels Wrong Enrico Trevis - Spirits (Daneel Remix) Part 2 tracklist Russian Linesman - I am Narcassist - Ryan Davis 'Leaves of Autumn' Remix Hugcaro feat James Hurr - Stranded Again (Liz Cirelli remix) Dmitry Globa - La Aurora Boreal [Nick Stoynoff Remix) Dousk - Estrange (Kasey Taylor Remix)",likes:"5",descargas:"10.1K",fecha:"2011-10-01",link:"https://mcdn.podbean.com/mf/download/xr6ciw/022-HernanCattaneo-2011-10-01.mp3",tracklist:"Part 1 Superpitcher - White Lightning Stel & Sasse - The Z James What - It Feels Wrong Enrico Trevis - Spirits (Daneel Remix) Part 2 Russian Linesman - I am Narcassist - Ryan Davis 'Leaves of Autumn' Remix Hugcaro feat James Hurr - Stranded Again (Liz Cirelli remix) Dmitry Globa - La Aurora Boreal [Nick Stoynoff Remix) Dousk - Estrange (Kasey Taylor Remix)"},{episodio:"023",titulo:"Resident / Episode 023 / October 08 2011",descripcion:"Part 1 Tracklist The Field - It\xB4s Up There Rodrigo Mateo - Carbon Monoxide (Santiago Garcia Remix) Ian O'Donovan - Orient Express B.I.G. - A Promise (Dark Soul Project Remix) Part 2 Tracklist Flying Practice - Gui Boratto Jacob Singer - Why Smak aka Steve McCready - Deundo Soulwerk - Fraktals Raxon - Into The Summer (Cid Inc Remix)",likes:"9",descargas:"10K",fecha:"2011-10-08",link:"https://mcdn.podbean.com/mf/download/b888hb/023-HernanCattaneo-2011-10-08.mp3",tracklist:"Part 1 The Field - It\xB4s Up There Rodrigo Mateo - Carbon Monoxide (Santiago Garcia Remix) Ian O'Donovan - Orient Express B.I.G. - A Promise (Dark Soul Project Remix) Part 2 Flying Practice - Gui Boratto Jacob Singer - Why Smak aka Steve McCready - Deundo Soulwerk - Fraktals Raxon - Into The Summer (Cid Inc Remix)"},{episodio:"024",titulo:"Resident / Episode 024 / October 15 2011",descripcion:"Part 1 Tracklist Rainer - 8000 feet up (Shaun Reeves & Tale of us rmx) Sunset Blvd - Clockwater (Nikos Diamantopoulos Rmx) Serafim Tsotsonis - Alone In The Stars (Scsi9 Moderndance Mix) Max Cue - Des Sentiments Melanges Hiroshi Watanabe - Gemini (Vince Watson Rmx) Part 2 Tracklist Aviran Shahino - My dark house The Selph - Evening Falls Guy Mantzur & Sahar Z - Coton Candy (Apologist Remix) Sound Process - Simple Chords (Nikko.Z Remix)",likes:"5",descargas:"9.9K",fecha:"2011-10-15",link:"https://mcdn.podbean.com/mf/download/hcw6uh/024-HernanCattaneo-2011-10-15.mp3",tracklist:"Part 1 Rainer - 8000 feet up (Shaun Reeves & Tale of us rmx) Sunset Blvd - Clockwater (Nikos Diamantopoulos Rmx) Serafim Tsotsonis - Alone In The Stars (Scsi9 Moderndance Mix) Max Cue - Des Sentiments Melanges Hiroshi Watanabe - Gemini (Vince Watson Rmx) Part 2 Aviran Shahino - My dark house The Selph - Evening Falls Guy Mantzur & Sahar Z - Coton Candy (Apologist Remix) Sound Process - Simple Chords (Nikko.Z Remix)"},{episodio:"025",titulo:"Resident / Episode 025 / October 22 2011",descripcion:"Part 1 Tracklist Tracey Thorn - Swimming (Visionquest Remix, Ewan Pearson Re-Edit) Matthias Vog - Copying The Future We Fell To Earth - The Double ( Cocolino Edit ) Shamique & Stephan Bazbaz - Buoquet ( Lank Remix ) Part 2 Tracklist Nick Curly-Libero Hall North-levinas-(Soulwerk) Luis Bondio & Ivan Jaime - Ballest Style Guy J and Henry Saiz\xA0 Meridian",likes:"6",descargas:"10.1K",fecha:"2011-10-22",link:"https://mcdn.podbean.com/mf/download/q8bnec/025-HernanCattaneo-2011-10-22.mp3",tracklist:"Part 1 Tracey Thorn - Swimming (Visionquest Remix, Ewan Pearson Re-Edit) Matthias Vog - Copying The Future We Fell To Earth - The Double ( Cocolino Edit ) Shamique & Stephan Bazbaz - Buoquet ( Lank Remix ) Part 2 Nick Curly-Libero Hall North-levinas-(Soulwerk) Luis Bondio & Ivan Jaime - Ballest Style Guy J and Henry Saiz\xA0 Meridian"},{episodio:"027",titulo:"Resident / Episode 027 / November 05 2011",descripcion:"Part 1 Tracklist Joe Stawarz - Deep Cut (Mihalis Safras Remix) Lee Brinx - Over You feat Tina Geru (Wildkats Mix) Tim Wolff - Get Ready (Quince's Stripped Down Reconstruction) Mr. G & Gary Beck - All My People Frank Lorber, Sante - Rootdown Part 2 Tracklist Juan Deminicis - Rainbows (Rikesto Alma En Coma Remix) Sonic Union - Solar Flare Gabriel Ananda - Hey blop\xA0 (Christian Smith) Francesco Pico feat Royal Sapien - You Changed My Way",likes:"5",descargas:"8.5K",fecha:"2011-11-05",link:"https://mcdn.podbean.com/mf/download/6a2u3q/027-HernanCattaneo-2011-11-05.mp3",tracklist:"Part 1 Joe Stawarz - Deep Cut (Mihalis Safras Remix) Lee Brinx - Over You feat Tina Geru (Wildkats Mix) Tim Wolff - Get Ready (Quince's Stripped Down Reconstruction) Mr. G & Gary Beck - All My People Frank Lorber, Sante - Rootdown Part 2 Juan Deminicis - Rainbows (Rikesto Alma En Coma Remix) Sonic Union - Solar Flare Gabriel Ananda - Hey blop\xA0 (Christian Smith) Francesco Pico feat Royal Sapien - You Changed My Way"},{episodio:"028",titulo:"Resident / Episode 028 / November 19 2011",descripcion:"Part 1 Tracklist Terje Saether - Scared Feat. Malin Pettersen (Of Norway Version) Stuart Mckwown - Chemical Thurst (Daruis& Lister rmx) Part 2 Tracklist Simao Ferreira - Kid (Pole Folder) Rich Curtis - Slices Of Dust (Santiago Garcia Remix) Egbert - Vrijheid Franz Kirmann - Liza (Charlie May Atlantic Club Mix)",likes:"8",descargas:"9.1K",fecha:"2011-11-19",link:"https://mcdn.podbean.com/mf/download/5kej6x/028-HernanCattaneo-2011-11-19.mp3",tracklist:"Part 1 Terje Saether - Scared Feat. Malin Pettersen (Of Norway Version) Stuart Mckwown - Chemical Thurst (Daruis& Lister rmx) Part 2 Simao Ferreira - Kid (Pole Folder) Rich Curtis - Slices Of Dust (Santiago Garcia Remix) Egbert - Vrijheid Franz Kirmann - Liza (Charlie May Atlantic Club Mix)"},{episodio:"029",titulo:"Resident / Episode 029 / November 26 2011",descripcion:"Part 1 Tracklist The Bluestorm feat. Vera Ostrova - Icelandic (Pole Folder Remix) Babak - Melancholin (Marc Cotterell Remix) Thomas Gandey - Piano track-(Radioslave mix) Randall Jones - Business As Usual Part 2 Tracklist Ripperton - Lost In Colors (Robert Babicz Remix) Massive Attack - United Snakes (Andy Arias Warm Tent Rework) Rikesto - Dynamic Surrealism Mike Griego - People Change",likes:"4",descargas:"11.4K",fecha:"2011-11-26",link:"https://mcdn.podbean.com/mf/download/xwys7b/029-HernanCattaneo-2011-11-26.mp3",tracklist:"Part 1 The Bluestorm feat. Vera Ostrova - Icelandic (Pole Folder Remix) Babak - Melancholin (Marc Cotterell Remix) Thomas Gandey - Piano track-(Radioslave mix) Randall Jones - Business As Usual Part 2 Ripperton - Lost In Colors (Robert Babicz Remix) Massive Attack - United Snakes (Andy Arias Warm Tent Rework) Rikesto - Dynamic Surrealism Mike Griego - People Change"},{episodio:"030",titulo:"Resident / Episode 030 / December 3 2011",descripcion:`Part 1 Tracklist

Dominik Eulberg - Der Tanz der Gluehwuermchen (Kollektiv Turmstrasse\xA0 Dirt Glow Remix)

Burial - Fostercare [Marcelo Vasami Remix]

Mario Puccio - Rosario

Hawaii - Pure (Andrez Remix)

Part 2 Tracklist

Dominik Eulberg-Taeuschnungs - Blume (Ryan Davis 'Narciss' Render)

Audio Junkies feat. Mei Finegold - Deeper (Lonya Remix)

Fefo - Semillas

Marek Hemmann -Infinity`,likes:"4",descargas:"10.9K",fecha:"2011-12-03",link:"https://mcdn.podbean.com/mf/download/rdqg54/030-HernanCattaneo-2011-12-03.mp3",tracklist:`Part 1

Dominik Eulberg - Der Tanz der Gluehwuermchen (Kollektiv Turmstrasse\xA0 Dirt Glow Remix)

Burial - Fostercare [Marcelo Vasami Remix]

Mario Puccio - Rosario

Hawaii - Pure (Andrez Remix)

Part 2

Dominik Eulberg-Taeuschnungs - Blume (Ryan Davis 'Narciss' Render)

Audio Junkies feat. Mei Finegold - Deeper (Lonya Remix)

Fefo - Semillas

Marek Hemmann -Infinity`},{episodio:"031",titulo:"Resident / Episode 031 / December 10 2011",descripcion:"Part 1 tracklist Stay High Baby - Maceo Plex Sirenize - Empty Your Mind JOSEL - Is This The End For Us Applescal - Mr Cold John Digweed - Warung Beach (Kiki Remix) Part 2 tracklist Navar - Loved Ones Fady Ferraye - An Aquarian Exposition [Marcelo Vasami Remix] Liz Cirelli & Minski - Trip Of The Dolphin (master) Graziano Blanco - Weekend Heroes (Matias Vila Weekend mix) Pao C - Fool Moon [Andy Lau)",likes:"5",descargas:"11.2K",fecha:"2011-12-10",link:"https://mcdn.podbean.com/mf/download/bd35w/031-HernanCattaneo-2011-12-10.mp3",tracklist:"Part 1 Stay High Baby - Maceo Plex Sirenize - Empty Your Mind JOSEL - Is This The End For Us Applescal - Mr Cold John Digweed - Warung Beach (Kiki Remix) Part 2 Navar - Loved Ones Fady Ferraye - An Aquarian Exposition [Marcelo Vasami Remix] Liz Cirelli & Minski - Trip Of The Dolphin (master) Graziano Blanco - Weekend Heroes (Matias Vila Weekend mix) Pao C - Fool Moon [Andy Lau)"},{episodio:"032",titulo:"Resident / Episode 032 / December 17 2011",descripcion:"Part 1 Tracklist Jay West - Smile Dominik Eulberg-H2O (Hot Chip Remix (Extended Vocal Mix)) Prommer & BarckThe Barking Grizzle (Detroit-Berlin) (Norman & Jerome Sydenham Remix Yoram-Avalanche Part 2 Tracklist Maetrik-Revenge Of Jack David Duque - Wind Master (Scotty.A remix) Guy Mantzur - Rubber Man Nils Koenig-tonight (Original Mix)",likes:"5",descargas:"12.6K",fecha:"2011-12-17",link:"https://mcdn.podbean.com/mf/download/j7qus/032-HernanCattaneo-2011-12-17.mp3",tracklist:"Part 1 Jay West - Smile Dominik Eulberg-H2O (Hot Chip Remix (Extended Vocal Mix)) Prommer & BarckThe Barking Grizzle (Detroit-Berlin) (Norman & Jerome Sydenham Remix Yoram-Avalanche Part 2 Maetrik-Revenge Of Jack David Duque - Wind Master (Scotty.A remix) Guy Mantzur - Rubber Man Nils Koenig-tonight (Original Mix)"},{episodio:"033",titulo:"Resident / Episode 033 / December 24 2011",descripcion:`Part 1 Tracklist

Ryan Davis - The Wolve (Joff Logartz In The Bergerie Remix) Totem Pole\xA0 - Dark Chapel (Original Mix)

Ripples -IssacRemix

Piyush Awasthi - Faces [Marcelo Vasami's Chords Remix) Part 2 Tracklist

Next To You (Oliver Schories Remix) Indira Boka

Li Polymer - Third Element (Andy Arias Remix)

DJ Denise And Jen Woolfe- Seattle Maybe (NomadInTheDark)

Audiotox & Watson - Once again`,likes:"4",descargas:"9.5K",fecha:"2011-12-24",link:"https://mcdn.podbean.com/mf/download/irwurf/033-HernanCattaneo-2011-12-24.mp3",tracklist:`Part 1

Ryan Davis - The Wolve (Joff Logartz In The Bergerie Remix) Totem Pole\xA0 - Dark Chapel (Original Mix)

Ripples -IssacRemix

Piyush Awasthi - Faces [Marcelo Vasami's Chords Remix) Part 2

Next To You (Oliver Schories Remix) Indira Boka

Li Polymer - Third Element (Andy Arias Remix)

DJ Denise And Jen Woolfe- Seattle Maybe (NomadInTheDark)

Audiotox & Watson - Once again`},{episodio:"034",titulo:"Resident / Episode 034 / December 31 2011",descripcion:"Part 1 Tracklist Dapple Apple - Cardboard Spaceship For The Cat Rodrigo Mateo - Carbon Monoxide (Praveen Achary) Diego Poblets - Meridians and Parallels (Luis Bondio Remix) Vanyamo - Memories (Dark Soul Project Goes Deeper Remix) Part 2 Tracklist Gui Boratto - Paralelo (Oliver Schories Remix) Matador - Korrado Petar Dundov And Gregor Tresher - Duo Tone Oliver Huntemann - The End",likes:"2",descargas:"9.6K",fecha:"2011-12-31",link:"https://mcdn.podbean.com/mf/download/wt7q3/034-HernanCattaneo-2011-12-31.mp3",tracklist:"Part 1 Dapple Apple - Cardboard Spaceship For The Cat Rodrigo Mateo - Carbon Monoxide (Praveen Achary) Diego Poblets - Meridians and Parallels (Luis Bondio Remix) Vanyamo - Memories (Dark Soul Project Goes Deeper Remix) Part 2 Gui Boratto - Paralelo (Oliver Schories Remix) Matador - Korrado Petar Dundov And Gregor Tresher - Duo Tone Oliver Huntemann - The End"},{episodio:"035",titulo:"Resident / Episode 035 / January 07 2012",descripcion:`Part 1 Tracklist

Unknown - You and me (Guti rmx)

Soy Mustafa - Return Of The Anunnaki (John Tejada Remix)

Rodskeez - SBS (Kasey Taylor Dub)

Matador Nomans - Land

Luis Junior - Alibi (Ryan Davis remix)

Part 2 Tracklist

Bliss - Mehmet Akar booty

Piyush Aswathi - Soundscape (Juan Deminicis Remix)

Tvardovsky - Brain Code (Santiago Garcia Remix)

Thomas Moon & Massimo Mephisto-K - Hole (Cactus Twisters Remix )`,likes:"9",descargas:"12.6K",fecha:"2012-01-07",link:"https://mcdn.podbean.com/mf/download/sqk5kg/035-HernanCattaneo-2012-01-06.mp3",tracklist:`Part 1

Unknown - You and me (Guti rmx)

Soy Mustafa - Return Of The Anunnaki (John Tejada Remix)

Rodskeez - SBS (Kasey Taylor Dub)

Matador Nomans - Land

Luis Junior - Alibi (Ryan Davis remix)

Part 2

Bliss - Mehmet Akar booty

Piyush Aswathi - Soundscape (Juan Deminicis Remix)

Tvardovsky - Brain Code (Santiago Garcia Remix)

Thomas Moon & Massimo Mephisto-K - Hole (Cactus Twisters Remix )`},{episodio:"037",titulo:"Resident / Episode 037 / January 21 2012",descripcion:`Part 1 Tracklist

Sample Bots - Alpha (Original Mix)

Soy Mustafa - Return of the Anunnaki

Uner - Nuribo (Vincenzo Remix)

Rodskeez - SBS

Part 2 Tracklist

Deetron - Collide

Max Cooper - Epoch

Matador - Mambo

Deepfunk - Red Light`,likes:"2",descargas:"10.7K",fecha:"2012-01-21",link:"https://mcdn.podbean.com/mf/download/twziyf/037-HernanCattaneo-2012-01-21.mp3",tracklist:`Part 1

Sample Bots - Alpha (Original Mix)

Soy Mustafa - Return of the Anunnaki

Uner - Nuribo (Vincenzo Remix)

Rodskeez - SBS

Part 2

Deetron - Collide

Max Cooper - Epoch

Matador - Mambo

Deepfunk - Red Light`},{episodio:"038",titulo:"Resident / Episode 038 / January 28 2012",descripcion:`Part 1 Tracklist

Goldfrapp - Strict Machine (Jamie Jones Remix)

Igor Cold - 2 Moons

Caytas & Patz - Are You Afraid

Deepmariano - Find me on the ocean

John Gham - Cortinas Rojas Part 2 Tracklist

Guy Mantzur - Amorphous Love (Deepfunk's 2am Mix)

UNKLE - Heaven (Juan Deminicis Unofficial Remix)

Nikko.Z - The Lizard King

Guy J - My Thought Of You (Sian's telepathic mix)`,likes:"5",descargas:"11.1K",fecha:"2012-01-28",link:"https://mcdn.podbean.com/mf/download/25b9i/038-HernanCattaneo-2012-01-28.mp3",tracklist:`Part 1

Goldfrapp - Strict Machine (Jamie Jones Remix)

Igor Cold - 2 Moons

Caytas & Patz - Are You Afraid

Deepmariano - Find me on the ocean

John Gham - Cortinas Rojas Part 2

Guy Mantzur - Amorphous Love (Deepfunk's 2am Mix)

UNKLE - Heaven (Juan Deminicis Unofficial Remix)

Nikko.Z - The Lizard King

Guy J - My Thought Of You (Sian's telepathic mix)`},{episodio:"039",titulo:"Resident / Episode 039 / February 04 2012",descripcion:`Part 1 Tracklist

Procesos - Brandub

Nadja Lind & Paul Loraine - Great Mistake

Blueprint feat Fritz Kalkbrenner & Thalstroem (Kollektiv Turmstrasse Remix)

Gregor Tresher & Karotte - Wave Goodbye

Dark Soul Project & Santiago Garcia - Erks (Original Mix) CDR

Part 2 Tracklist

Vinayak^a - Sands of goa

NameSpace - Not Found

Kulturn - 126 (Juan Deminicis Night Remix)

Mechanique - Adding Insult to Injury

Dartek - Soopertrance (Fefo Remix)`,likes:"6",descargas:"10.6K",fecha:"2012-02-04",link:"https://mcdn.podbean.com/mf/download/g4twv7/039-HernanCattaneo-2012-02-04.mp3",tracklist:`Part 1

Procesos - Brandub

Nadja Lind & Paul Loraine - Great Mistake

Blueprint feat Fritz Kalkbrenner & Thalstroem (Kollektiv Turmstrasse Remix)

Gregor Tresher & Karotte - Wave Goodbye

Dark Soul Project & Santiago Garcia - Erks (Original Mix) CDR

Part 2

Vinayak^a - Sands of goa

NameSpace - Not Found

Kulturn - 126 (Juan Deminicis Night Remix)

Mechanique - Adding Insult to Injury

Dartek - Soopertrance (Fefo Remix)`},{episodio:"040",titulo:"Resident / Episode 040 / February 11 2012",descripcion:`Part 1 Tracklist

Fame (Catz N Dogz & Martin Dawson Sweet Saturday Remix)

Young Pretenders - Jeremy P. Caulfield & Cesare Vs Disorder

The Blame - take II

Ruede Hagelstein & The Noblettes - A Priori (Ruede Remix)

Norman H,Minoru Hirata - La Bu

Part 2 Tracklist

Vincenzo - Sometimes Saturday (Tom Middleton Remix)

NameSpace - Not Found [Dr. Avalance Remix]

Richie G - But Her Fly

Alessandro Diga - Zwijnenstal

Andrez & Miss M - So Now What! (Dub Mix)`,likes:"7",descargas:"11.4K",fecha:"2012-02-11",link:"https://mcdn.podbean.com/mf/download/s59yn4/040-HernanCattaneo-2012-02-11.mp3",tracklist:`Part 1

Fame (Catz N Dogz & Martin Dawson Sweet Saturday Remix)

Young Pretenders - Jeremy P. Caulfield & Cesare Vs Disorder

The Blame - take II

Ruede Hagelstein & The Noblettes - A Priori (Ruede Remix)

Norman H,Minoru Hirata - La Bu

Part 2

Vincenzo - Sometimes Saturday (Tom Middleton Remix)

NameSpace - Not Found [Dr. Avalance Remix]

Richie G - But Her Fly

Alessandro Diga - Zwijnenstal

Andrez & Miss M - So Now What! (Dub Mix)`},{episodio:"041",titulo:"Resident / Episode 041 / February 18 2012",descripcion:`Part 1 Tracklist

Amirali - Beautiful World (Daniel Bortz Remix)

Magit Cacoon & Nunu - Soul Motion

Black scorpion

Abstraxion - Moribayasa (Argys Back To Techno Mix)

Guy J & Miriam Vaga - Fly (Hybrid Soundsystem Remix)

Part 2 Tracklist

Coherent - Archetypal

Coherent - Archetypal (Tvardovsky Remix)

Simon Firth - Time Lapse (Guy Mantzur & Khen remix)

Oosfera - Oto\xF1o`,likes:"4",descargas:"11.7K",fecha:"2012-02-18",link:"https://mcdn.podbean.com/mf/download/dfmteh/041-HernanCattaneo-2012-02-18.mp3",tracklist:`Part 1

Amirali - Beautiful World (Daniel Bortz Remix)

Magit Cacoon & Nunu - Soul Motion

Black scorpion

Abstraxion - Moribayasa (Argys Back To Techno Mix)

Guy J & Miriam Vaga - Fly (Hybrid Soundsystem Remix)

Part 2

Coherent - Archetypal

Coherent - Archetypal (Tvardovsky Remix)

Simon Firth - Time Lapse (Guy Mantzur & Khen remix)

Oosfera - Oto\xF1o`},{episodio:"042",titulo:"Resident / Episode 042 / February 25 2012",descripcion:`Part 1 Tracklist

Dan Drastic - Noodle Stories (Martin Buttrich Remix)

Tres - Sunrise

Caytas & Patz - Are You Afraid (Joel Mull Dub)

Malandra Jr - Conquest (Dark Soul Project Remix)

Unknown-Himawari

Part 2 Tracklist

Li - Polymer - Supernatural

Kasey Taylor - Out With The Old (Rodskeez Remix)

Chris Richardson - Philadelphia (Diyo Remix)

Mathew lynch - Interstellar space`,likes:"4",descargas:"12.1K",fecha:"2012-02-25",link:"https://mcdn.podbean.com/mf/download/nbjvjw/042-HernanCattaneo-2012-02-25.mp3",tracklist:`Part 1

Dan Drastic - Noodle Stories (Martin Buttrich Remix)

Tres - Sunrise

Caytas & Patz - Are You Afraid (Joel Mull Dub)

Malandra Jr - Conquest (Dark Soul Project Remix)

Unknown-Himawari

Part 2

Li - Polymer - Supernatural

Kasey Taylor - Out With The Old (Rodskeez Remix)

Chris Richardson - Philadelphia (Diyo Remix)

Mathew lynch - Interstellar space`},{episodio:"043",titulo:"Resident / Episode 043 / March 03 2012",descripcion:"Part 1 Tracklist Piotr Bejnar - Rainbow Pills (Yapacc Remix) Poison Pro, Miusha - Alien (Kobana Remix) Sophie Moleta - Paul Eluard [Marcelo Vasami Bootleg] Baboop - Split Horizon Carlos Fox - Magic Tears [Silinder Remix] Part 2 Tracklist Yunus Guvenen -Tides Nick Stoynoff - Brandenburg Solar & Poppcke - Lightest Shades Of Grey (Marc Poppcke Remix) Verve - Elevate",likes:"5",descargas:"11.8K",fecha:"2012-03-03",link:"https://mcdn.podbean.com/mf/download/8rhf78/043-HernanCattaneo-2012-03-03.mp3",tracklist:"Part 1 Piotr Bejnar - Rainbow Pills (Yapacc Remix) Poison Pro, Miusha - Alien (Kobana Remix) Sophie Moleta - Paul Eluard [Marcelo Vasami Bootleg] Baboop - Split Horizon Carlos Fox - Magic Tears [Silinder Remix] Part 2 Yunus Guvenen -Tides Nick Stoynoff - Brandenburg Solar & Poppcke - Lightest Shades Of Grey (Marc Poppcke Remix) Verve - Elevate"},{episodio:"044",titulo:"Resident / Episode 044 / March 10 2012",descripcion:"Part 1 Tracklist Alex Arnout, Seb Zito - Moments of You January Tuesday - True Love's Sake (Andre Lodemann Vocal Mix) Alexander Daf & Spieltape - Be Water (Rodriguez Jr. Remix) Lank - Random Condom Santi Mossman - Eteric Signal Part 2 Tracklist Traumer - Zyklisch Issac - Things Get Moving Sound Process - Brain Notes Tvardovsky - Brain Code (Santiago Garcia)",likes:"4",descargas:"13.3K",fecha:"2012-03-10",link:"https://mcdn.podbean.com/mf/download/5vakhx/044-HernanCattaneo-2012-03-10.mp3",tracklist:"Part 1 Alex Arnout, Seb Zito - Moments of You January Tuesday - True Love's Sake (Andre Lodemann Vocal Mix) Alexander Daf & Spieltape - Be Water (Rodriguez Jr. Remix) Lank - Random Condom Santi Mossman - Eteric Signal Part 2 Traumer - Zyklisch Issac - Things Get Moving Sound Process - Brain Notes Tvardovsky - Brain Code (Santiago Garcia)"},{episodio:"045",titulo:"Resident / Episode 045 / March 17 2012",descripcion:"Part 1 Tracklist Sasha and James Teej - Night Track (M.A.N.D.Y. Remix) Mescis - Lately [Tim Penner Remix] Li - Polymer - Voices And Visions Fiord and Simon Flower - HIgh Tail (Tripple) Part 2 Tracklist Patrick Siech & Gustav Sollscher - Flogiston Hot Chip - I Feel Better (Max Cooper Remix) Rodriguez Jr. - Bittersweet (Sebastian Radlmeier Remix) Sasha and James Teej - As You Fall",likes:"3",descargas:"11.9K",fecha:"2012-03-17",link:"https://mcdn.podbean.com/mf/download/e9cf2v/045-HernanCattaneo-2012-03-17.mp3",tracklist:"Part 1 Sasha and James Teej - Night Track (M.A.N.D.Y. Remix) Mescis - Lately [Tim Penner Remix] Li - Polymer - Voices And Visions Fiord and Simon Flower - HIgh Tail (Tripple) Part 2 Patrick Siech & Gustav Sollscher - Flogiston Hot Chip - I Feel Better (Max Cooper Remix) Rodriguez Jr. - Bittersweet (Sebastian Radlmeier Remix) Sasha and James Teej - As You Fall"},{episodio:"047",titulo:"Resident / Episode 047 / March 31 2013",descripcion:`Part 1 Tracklist

Douglas Greed - Shiver ft. Delhia de France (Ruede Hagelstein)

Of Norway - Hedone feat. Ane (Original Mix)

Hartmut Kiss - Flaming passion (Guy J Remix ) Douglas Greed - Back Room Deal feat Delhia de France (Clara Moto)

Rodrigo Mateo - Stereotypes

Part 2 Tracklist

Nicholas Van Orton - Klonas

Kassey Voorn - Viola (Dosem Remix)

Khen - Ginger (Guy Mantzur & Khen remix)

Eelke Kleijn - Levensgenieter (Dosem Remix)`,likes:"4",descargas:"13K",fecha:"2013-03-31",link:"https://mcdn.podbean.com/mf/download/cj7rhd/047-HernanCattaneo-2012-03-31.mp3",tracklist:`Part 1

Douglas Greed - Shiver ft. Delhia de France (Ruede Hagelstein)

Of Norway - Hedone feat. Ane (Original Mix)

Hartmut Kiss - Flaming passion (Guy J Remix ) Douglas Greed - Back Room Deal feat Delhia de France (Clara Moto)

Rodrigo Mateo - Stereotypes

Part 2

Nicholas Van Orton - Klonas

Kassey Voorn - Viola (Dosem Remix)

Khen - Ginger (Guy Mantzur & Khen remix)

Eelke Kleijn - Levensgenieter (Dosem Remix)`},{episodio:"048",titulo:"Resident / Episode 048 / April 7 2012",descripcion:`Part 1 Tracklist

Estroe - Living Apart Together\xA0 2012 Edit

Fran Von Vie -Love your life

Olivier Weiter - Unknown

Homegroove Project - Let Me In

Part 2 Tracklist

Petar Dundov - Brownian Interplay

Hal Incandenza - Ventura

Nick Curly - Underground (Andy Arias Remix)

Microtrauma - Juno (SQL Remix)`,likes:"6",descargas:"13.1K",fecha:"2012-04-07",link:"https://mcdn.podbean.com/mf/download/457ixy/048-HernanCattaneo-2012-04-07.mp3",tracklist:`Part 1

Estroe - Living Apart Together\xA0 2012 Edit

Fran Von Vie -Love your life

Olivier Weiter - Unknown

Homegroove Project - Let Me In

Part 2

Petar Dundov - Brownian Interplay

Hal Incandenza - Ventura

Nick Curly - Underground (Andy Arias Remix)

Microtrauma - Juno (SQL Remix)`},{episodio:"049",titulo:"Resident / Episode 049 / April 14 2012",descripcion:`Part 1 Tracklist

Luis luchetti-Between The Blues

Mic Newman-Knickerbocker

Sanedrachunter -Just a groove

Tilt ft Maria Nayler-My Release (Ben Shaw Remix)

Part 2 Tracklist

Derek Howell & Joshua Michael-J

Kassey Voorn-Siege

Daniele Papini & Riccardo Ferri -Los Draio (Kay Instrumental Interpretation)

Lank - Daily Surprise (Dark Soul Project & Santiago Garcia Remix)`,likes:"3",descargas:"13.4K",fecha:"2012-04-14",link:"https://mcdn.podbean.com/mf/download/csw2au/049-HernanCattaneo-2012-04-14.mp3",tracklist:`Part 1

Luis luchetti-Between The Blues

Mic Newman-Knickerbocker

Sanedrachunter -Just a groove

Tilt ft Maria Nayler-My Release (Ben Shaw Remix)

Part 2

Derek Howell & Joshua Michael-J

Kassey Voorn-Siege

Daniele Papini & Riccardo Ferri -Los Draio (Kay Instrumental Interpretation)

Lank - Daily Surprise (Dark Soul Project & Santiago Garcia Remix)`},{episodio:"050",titulo:"Resident / Episode 050 / April 21 2012",descripcion:`Part 1 Tracklist

Klartraum - Secret Moon Klartraum

Deaf Pillow - Resistance (Danny eM Remix)

Chris Wood & Meat-Tazarine

Deepfunk - Black Lemon Trees (Wide Angle Recordings) Part 2 Tracklist

Asten - Over the mountains

Ozgur Ozkan - Beautiful Afterhours (Fran Von Vie Remix)

Modular - Sirenize

Mueller & Mitch - Hold on

Paolo Mojo - Comsa`,likes:"4",descargas:"14.5K",fecha:"2012-04-21",link:"https://mcdn.podbean.com/mf/download/e8xvfv/050-HernanCattaneo-2012-04-21.mp3",tracklist:`Part 1

Klartraum - Secret Moon Klartraum

Deaf Pillow - Resistance (Danny eM Remix)

Chris Wood & Meat-Tazarine

Deepfunk - Black Lemon Trees (Wide Angle Recordings) Part 2

Asten - Over the mountains

Ozgur Ozkan - Beautiful Afterhours (Fran Von Vie Remix)

Modular - Sirenize

Mueller & Mitch - Hold on

Paolo Mojo - Comsa`},{episodio:"051",titulo:"Resident / Episode 051 / April 28 2012",descripcion:`Part 1 Tracklist

Sirenize -Compromised

Soulfire 'Eris' - Marcelo Vasami Remix

Anil Chawla & Dale Anderson - Leftorium (Alberto Blanco & Matias Vila 2012 Unofficial Remix)

Moan - Deep Nite (Deep Mariano Remix)

Part 2 Tracklist

Graziano Raffa - Answers

Yanaheinstein - M(armelada)

Nijna - Summer (Brendon Collins)

Stas Drive & Enformig - Aquamarine (Scotty.As Deeper Shade Remix)`,likes:"5",descargas:"14.6K",fecha:"2012-04-28",link:"https://mcdn.podbean.com/mf/download/svchfg/051-HernanCattaneo-2012-04-28.mp3",tracklist:`Part 1

Sirenize -Compromised

Soulfire 'Eris' - Marcelo Vasami Remix

Anil Chawla & Dale Anderson - Leftorium (Alberto Blanco & Matias Vila 2012 Unofficial Remix)

Moan - Deep Nite (Deep Mariano Remix)

Part 2

Graziano Raffa - Answers

Yanaheinstein - M(armelada)

Nijna - Summer (Brendon Collins)

Stas Drive & Enformig - Aquamarine (Scotty.As Deeper Shade Remix)`},{episodio:"052",titulo:"Resident / Episode 052 / May 05 2012",descripcion:`Part 1 Tracklist

Cesar Lopez/Giddy Head-tune 11

Nicolas Jaar - Don't Break My Love (Pablo Acenso Unofficial Remix)

Nobuyuki Tokunaga -Solid

Neil Quigley Tone Float Cari Golden -Deal With The Devil

Dr.Avalance-Stairs

Part 2 Tracklist

Ben Archbold-Time Has Run Out (Bens Dubtech Mix)

Christian Drost - Molecules

Oliver Shories-Mother

Nat Monday & Jay Welsh -Waiting (Facundo Mohrr & Sound Process Remix)`,likes:"2",descargas:"17.2K",fecha:"2012-05-05",link:"https://mcdn.podbean.com/mf/download/9bw7ib/052-HernanCattaneo-2012-05-05.mp3",tracklist:`Part 1

Cesar Lopez/Giddy Head-tune 11

Nicolas Jaar - Don't Break My Love (Pablo Acenso Unofficial Remix)

Nobuyuki Tokunaga -Solid

Neil Quigley Tone Float Cari Golden -Deal With The Devil

Dr.Avalance-Stairs

Part 2

Ben Archbold-Time Has Run Out (Bens Dubtech Mix)

Christian Drost - Molecules

Oliver Shories-Mother

Nat Monday & Jay Welsh -Waiting (Facundo Mohrr & Sound Process Remix)`},{episodio:"053",titulo:"Resident / Episode 053 / May 12 2012",descripcion:`Part 1 Tracklist

Banfield audio-Aereal Forms

Noir Feat. Richard Davis-Found Out (Deetron Sunshower Dub)

Frankey & Sandrino -Comeback (Giom Remix)

Issac - Dead Love

tONKPROJECT - When you don't know that i know (Lonya Remix)

Part 2 Tracklist

Compuphonic-Sequoia (diskJokke Remix)

Mehmet Akar - Your Breath (Fran Von Vie Remix)

Oliver Schories-The Voice

Slam-Azure (Carl Craig Remix)`,likes:"5",descargas:"15.5K",fecha:"2012-05-12",link:"https://mcdn.podbean.com/mf/download/pg7cie/053-HernanCattaneo-2012-05-12.mp3",tracklist:`Part 1

Banfield audio-Aereal Forms

Noir Feat. Richard Davis-Found Out (Deetron Sunshower Dub)

Frankey & Sandrino -Comeback (Giom Remix)

Issac - Dead Love

tONKPROJECT - When you don't know that i know (Lonya Remix)

Part 2

Compuphonic-Sequoia (diskJokke Remix)

Mehmet Akar - Your Breath (Fran Von Vie Remix)

Oliver Schories-The Voice

Slam-Azure (Carl Craig Remix)`},{episodio:"054",titulo:"Resident / Episode 054 / May 19 2012",descripcion:`Part 1 Tracklist

Cubenx - Grass (Robin Guthrie remix)

TJ Kong, Modular K - The Last World Of Mr. Goddard

Juan Deminicis - Treshold night vs Pillowtalk - Strange love

Mirza - Zadeh - Heart Of Glass

Tini Tun - Noisy Distractions

Part 2 Tracklist

Abdomen Burst - Ex Machina (Baunder remix)

Fretwell - Fever (Luke Chable's Haunted House Remix)

Li -Polymer - Plataforms (Nick Stoynoff Remix)

Vincenzo - Walk Home`,likes:"4",descargas:"16.2K",fecha:"2012-05-19",link:"https://mcdn.podbean.com/mf/download/42qgzi/054-HernanCattaneo-2012-05-19.mp3",tracklist:`Part 1

Cubenx - Grass (Robin Guthrie remix)

TJ Kong, Modular K - The Last World Of Mr. Goddard

Juan Deminicis - Treshold night vs Pillowtalk - Strange love

Mirza - Zadeh - Heart Of Glass

Tini Tun - Noisy Distractions

Part 2

Abdomen Burst - Ex Machina (Baunder remix)

Fretwell - Fever (Luke Chable's Haunted House Remix)

Li -Polymer - Plataforms (Nick Stoynoff Remix)

Vincenzo - Walk Home`},{episodio:"055",titulo:"Resident / Episode 055 / May 26 2012",descripcion:`Part 1 Tracklist

Martin Garcia - Surveyor

Praveen Achary - Morning & More (Color Ray Remix)

WhoMadeWho - Running Man (Dave DK Mix)

Fran Von Vie - Wake Me Up When Everything Has Changed

Part 2 Tracklist

Lonya & Roy Okev - Backlash (Facundo Mohrr Remix)

Jonas Afonso - Traveling By Subwave (Embliss Remix)

Tester Peter and Heartik - Rapture

Ivan Picazo - One Step`,likes:"5",descargas:"19.1K",fecha:"2012-05-26",link:"https://mcdn.podbean.com/mf/download/wcy6yb/055-HernanCattaneo-2012-05-26.mp3",tracklist:`Part 1

Martin Garcia - Surveyor

Praveen Achary - Morning & More (Color Ray Remix)

WhoMadeWho - Running Man (Dave DK Mix)

Fran Von Vie - Wake Me Up When Everything Has Changed

Part 2

Lonya & Roy Okev - Backlash (Facundo Mohrr Remix)

Jonas Afonso - Traveling By Subwave (Embliss Remix)

Tester Peter and Heartik - Rapture

Ivan Picazo - One Step`},{episodio:"058",titulo:"Resident / Episode 058 / June 16 2012",descripcion:`Part 1 Tracklist

Simon Firth-Winter Solstice

Facundo Mohrr - My Moon

Rodrigo Mateo - Blossom Out Of Nothing

Shenoda - Chasing Clouds

Tvardovsky - Essention (Sound Process )

Part 2 Tracklist

Ryan Davis - Beluga

Gab Rhome - The color of thyme

Jaksa Pavicevic - Guilty For Fifty (Verche remix)

FunkForm - My Hands On You

Marc Poppcke - Payback Time`,likes:"5",descargas:"30.7K",fecha:"2012-06-16",link:"https://mcdn.podbean.com/mf/download/ng2cus/058-HernanCattaneo-2012-06-16.mp3",tracklist:`Part 1

Simon Firth-Winter Solstice

Facundo Mohrr - My Moon

Rodrigo Mateo - Blossom Out Of Nothing

Shenoda - Chasing Clouds

Tvardovsky - Essention (Sound Process )

Part 2

Ryan Davis - Beluga

Gab Rhome - The color of thyme

Jaksa Pavicevic - Guilty For Fifty (Verche remix)

FunkForm - My Hands On You

Marc Poppcke - Payback Time`},{episodio:"059",titulo:"Resident / Episode 059 / June 23 2012",descripcion:`Part 1 Tracklist

Chris Fortier - Don't Hide What You Believe (Perc Trufax Remix)

Barrio Weedwagon - Exhale

Silicone Soul - Feeling Blue (Kultrun Remix)

16 Bit Lolitas - Fat fly

Sierra Sam\xA0 & Paris The Black Fu - Welcome To The Blackout

Part 2 Tracklist

Matias Larrosa & Bramus-D - Breaking Away

Cristian R - Deimos

Nikko Z-The Lizard King (Luke Porter mix)

Daniel Dexter - Sirens`,likes:"4",descargas:"30.1K",fecha:"2012-06-23",link:"https://mcdn.podbean.com/mf/download/c4hzh/059-HernanCattaneo-2012-06-23.mp3",tracklist:`Part 1

Chris Fortier - Don't Hide What You Believe (Perc Trufax Remix)

Barrio Weedwagon - Exhale

Silicone Soul - Feeling Blue (Kultrun Remix)

16 Bit Lolitas - Fat fly

Sierra Sam\xA0 & Paris The Black Fu - Welcome To The Blackout

Part 2

Matias Larrosa & Bramus-D - Breaking Away

Cristian R - Deimos

Nikko Z-The Lizard King (Luke Porter mix)

Daniel Dexter - Sirens`},{episodio:"060",titulo:"Resident / Episode 060 / June 30 2012",descripcion:`Part 1 Tracklist

Superpitcher - Moon Fever Remixe (Gluteus Maximus Mix)

Sam Matters - Matter And Motion

Lefrenk - Return (Oliver Schories remix )

Guy Gerber - Golden sun

MASH - Style is the Answer

Part 2 Tracklist

FortDax - Fortune Telling Fish (Rich Curtis Bootleg)

Diyo - Smooth ride (Graziano Raffa & Alberto Blanco rmx)

Ezequiel Andrade - Bring Me Back (Erich Von Kollar & East Cafe)

Derek Howell & Faskil -Un Poema Cinematogr\xE1fico`,likes:"9",descargas:"32.3K",fecha:"2012-06-30",link:"https://mcdn.podbean.com/mf/download/4z94ra/060-HernanCattaneo-2012-06-30.mp3",tracklist:`Part 1

Superpitcher - Moon Fever Remixe (Gluteus Maximus Mix)

Sam Matters - Matter And Motion

Lefrenk - Return (Oliver Schories remix )

Guy Gerber - Golden sun

MASH - Style is the Answer

Part 2

FortDax - Fortune Telling Fish (Rich Curtis Bootleg)

Diyo - Smooth ride (Graziano Raffa & Alberto Blanco rmx)

Ezequiel Andrade - Bring Me Back (Erich Von Kollar & East Cafe)

Derek Howell & Faskil -Un Poema Cinematogr\xE1fico`},{episodio:"061",titulo:"Resident / Episode 061 / July 07 2012",descripcion:`Part 1 Tracklist

SLOK - Feel Alive feat. My Favorite Robot (LOPAZZ & CasioCasino Remix)

Verche - Simple As That (Estroe Remix)

DNYO - Fruits

Ernest Luminor - Jaga [Pako & Frederik Remix]

Part 2 Tracklist

Matias Vila - Volviendo al principio

Uner - Cuac

Scotty A - Continue

10dens - In a distant world

Anthony Yarranton & Pete McCarthey - The gutter and the stars`,likes:"5",descargas:"30.7K",fecha:"2012-07-07",link:"https://mcdn.podbean.com/mf/download/rd7qt/061-HernanCattaneo-2012-07-07.mp3",tracklist:`Part 1

SLOK - Feel Alive feat. My Favorite Robot (LOPAZZ & CasioCasino Remix)

Verche - Simple As That (Estroe Remix)

DNYO - Fruits

Ernest Luminor - Jaga [Pako & Frederik Remix]

Part 2

Matias Vila - Volviendo al principio

Uner - Cuac

Scotty A - Continue

10dens - In a distant world

Anthony Yarranton & Pete McCarthey - The gutter and the stars`},{episodio:"062",titulo:"Resident / Episode 062 / July 14 2012",descripcion:`Part 1 Tracklist

Matthew Dekay & Lee Burridge - Lost In A Moment (Original Mix)

Night On Fire - Claptone

Slam - Slides collide

Rex Hansson - She (Patrick Siech Remix)

Part 2 Tracklist

Ryan Davis - The Wolve (Traumer Polar Pads Remix)

Kai Handberg - Silent pleasure

Federico Grazzini - Mother\xB4s Groove (Romano Alfieri Remix)

Pele, Findling & Shawnecy - Suspect

Fran Von Vie - Albatros (Blusoul Rmx)`,likes:"5",descargas:"29.7K",fecha:"2012-07-14",link:"https://mcdn.podbean.com/mf/download/wmgxek/062-HernanCattaneo-2012-07-14.mp3",tracklist:`Part 1

Matthew Dekay & Lee Burridge - Lost In A Moment (Original Mix)

Night On Fire - Claptone

Slam - Slides collide

Rex Hansson - She (Patrick Siech Remix)

Part 2

Ryan Davis - The Wolve (Traumer Polar Pads Remix)

Kai Handberg - Silent pleasure

Federico Grazzini - Mother\xB4s Groove (Romano Alfieri Remix)

Pele, Findling & Shawnecy - Suspect

Fran Von Vie - Albatros (Blusoul Rmx)`},{episodio:"063",titulo:"Resident / Episode 063 / July 21 2012",descripcion:`Part 1 Tracklist

Flowers and Sea Creatures-Head First Then Heart (Ytre Rymden Dansskola Remix)

AndrewzVee & KN-dreaming

Marc_Miroir - ECO_QUEST_Pornbugs feat Dole&Kom Remix)

Absolution - Pleasure Delayer

Moby - Victoria Lucas (Santi Mossman Unofficial Remix)

Part 2 Tracklist

Pete Lazonby - Sacred Cycles (Nick Stoynoff Remix)

Max Cue-Libelle

Andre Sobota - Surrounded (Dosem Remix)

Ferdy-Computers In Space`,likes:"5",descargas:"33K",fecha:"2012-07-21",link:"https://mcdn.podbean.com/mf/download/kkz7qz/063-HernanCattaneo-2012-07-21.mp3",tracklist:`Part 1

Flowers and Sea Creatures-Head First Then Heart (Ytre Rymden Dansskola Remix)

AndrewzVee & KN-dreaming

Marc_Miroir - ECO_QUEST_Pornbugs feat Dole&Kom Remix)

Absolution - Pleasure Delayer

Moby - Victoria Lucas (Santi Mossman Unofficial Remix)

Part 2

Pete Lazonby - Sacred Cycles (Nick Stoynoff Remix)

Max Cue-Libelle

Andre Sobota - Surrounded (Dosem Remix)

Ferdy-Computers In Space`},{episodio:"064",titulo:"Resident / Episode 064 / July 28 2012",descripcion:`Part 1 Tracklist Marcelo Vasami & Deepfunk - Remote Templates (Hakimonu Cause And Effect Dub) Arjun Vagale - Danger Mouse (Pawas Remix)

Rodriguez Jr - Satellite

El Mariachi - Monde (Checkor Remix)

Part 2 Tracklist

Umit Han - Im Herzens Garten Erstarb Die Rose

Derek Howell - Laughing It Up (Kassey Voorn Remix)

Mehmet Akar - The Lights Goes On (Dark Soul Project Old School Remix)

Luke Chable - Into The Storm (Lautaro Varela Rework)

Andre Sobota - Time (King Unique Stopped Watch Remix)`,likes:"3",descargas:"27.6K",fecha:"2012-07-28",link:"https://mcdn.podbean.com/mf/download/ggfi8x/064-HernanCattaneo-2012-07-28.mp3",tracklist:`Part 1 Marcelo Vasami & Deepfunk - Remote Templates (Hakimonu Cause And Effect Dub) Arjun Vagale - Danger Mouse (Pawas Remix)

Rodriguez Jr - Satellite

El Mariachi - Monde (Checkor Remix)

Part 2

Umit Han - Im Herzens Garten Erstarb Die Rose

Derek Howell - Laughing It Up (Kassey Voorn Remix)

Mehmet Akar - The Lights Goes On (Dark Soul Project Old School Remix)

Luke Chable - Into The Storm (Lautaro Varela Rework)

Andre Sobota - Time (King Unique Stopped Watch Remix)`},{episodio:"065",titulo:"Resident / Episode 065 / August 04 2012",descripcion:`Part 1 Tracklist

Mind In Rewind (JDB More Strings Change edit)

El Mariachi - Monde (Checkor Remix)

Omid 16B - Melodica (Original Dub)

Tone Float - Ultramantra

Part 2 Tracklist

DNYO - Roots

Kazell - Temporary Bliss

Soulfinder - Satellite Circus (Nick Stoynoff Mix)

GRG4 - Stretch (Luis Junior Remix)`,likes:"4",descargas:"28.7K",fecha:"2012-08-04",link:"https://mcdn.podbean.com/mf/download/jb97u5/065-HernanCattaneo-2012-08-05.mp3",tracklist:`Part 1

Mind In Rewind (JDB More Strings Change edit)

El Mariachi - Monde (Checkor Remix)

Omid 16B - Melodica (Original Dub)

Tone Float - Ultramantra

Part 2

DNYO - Roots

Kazell - Temporary Bliss

Soulfinder - Satellite Circus (Nick Stoynoff Mix)

GRG4 - Stretch (Luis Junior Remix)`},{episodio:"068",titulo:"Resident / Episode 068 / August 25 2012",descripcion:`Part 1 Tracklist

Zee&Eli - Theres no love (Balcazar & Sordo Remix)

Autim-Digitaria - Fragment_You Bring Me Down (Tini Tun Edit)

Shenoda-Moments (Huxley Remix)

Kollektiv Turmstrasse-Ordinary (Lake People's Circle Motive Remix)

Part 2 Tracklist

Yoram-Into The Light

Fake Truth - A Night With You ( Kasall Remix)

Dark Soul Project & Solar Sphere - Sunshine Night

Casa Flava - Eterna [Marcelo Vasami Remix]

Konektiv - Hauz`,likes:"4",descargas:"33.8K",fecha:"2012-08-25",link:"https://mcdn.podbean.com/mf/download/mzsfuh/068-HernanCattaneo-2012-08-26.mp3",tracklist:`Part 1

Zee&Eli - Theres no love (Balcazar & Sordo Remix)

Autim-Digitaria - Fragment_You Bring Me Down (Tini Tun Edit)

Shenoda-Moments (Huxley Remix)

Kollektiv Turmstrasse-Ordinary (Lake People's Circle Motive Remix)

Part 2

Yoram-Into The Light

Fake Truth - A Night With You ( Kasall Remix)

Dark Soul Project & Solar Sphere - Sunshine Night

Casa Flava - Eterna [Marcelo Vasami Remix]

Konektiv - Hauz`},{episodio:"069",titulo:"Resident / Episode 069 / September 01 2012",descripcion:`Part 1 Tracklist

Conure - Indian summer

Phonogenic - Desen Jumi

Simian Mobile Disco -Unfixed

Matt Black - Lightcycle (Kieran J remix)

Saschienne - Unknown (Mario Puccio remix)

Part 2 Tracklist

Asten - Memories

LoQuai - Other dimension (Graziano Raffa remix)

OMB - Sea Air

Paul Hazendonk - Sunburnt`,likes:"4",descargas:"34K",fecha:"2012-09-01",link:"https://mcdn.podbean.com/mf/download/2cjq6d/069-HernanCattaneo-2012-09-02.mp3",tracklist:`Part 1

Conure - Indian summer

Phonogenic - Desen Jumi

Simian Mobile Disco -Unfixed

Matt Black - Lightcycle (Kieran J remix)

Saschienne - Unknown (Mario Puccio remix)

Part 2

Asten - Memories

LoQuai - Other dimension (Graziano Raffa remix)

OMB - Sea Air

Paul Hazendonk - Sunburnt`},{episodio:"070",titulo:"Resident / Episode 070 / September 08 2012",descripcion:`Part 1 Tracklist

Ryan Luciano - Rio

Sascha Sonido - Medusa

Steve Rachmad - Bling It Up

Diplomatic Brothers - Unknown

Part 2 Tracklist

Koreless - Lost in Tokyo (Andy Arias Jam Mix)

Kassey Voorn - Before You Fall (feat. Amber Long)

l3d - Symbol

Silinder - Penthouse

ThermalBear - U Love (Sasha Remix)`,likes:"5",descargas:"36.9K",fecha:"2012-09-08",link:"https://mcdn.podbean.com/mf/download/yjv5dd/070-HernanCattaneo-2012-09-09.mp3",tracklist:`Part 1

Ryan Luciano - Rio

Sascha Sonido - Medusa

Steve Rachmad - Bling It Up

Diplomatic Brothers - Unknown

Part 2

Koreless - Lost in Tokyo (Andy Arias Jam Mix)

Kassey Voorn - Before You Fall (feat. Amber Long)

l3d - Symbol

Silinder - Penthouse

ThermalBear - U Love (Sasha Remix)`},{episodio:"071",titulo:"Resident / Episode 071 / September 15 2012",descripcion:`Part 1 Tracklist

Asten - Memories (Dan Kubo Remix)

John Gham - Valentino

Mark Henning - Sunday Slide

Marc Marzenit & Henry Saiz - Sirens Land

Death in Vegas - Anita Berber (Dark Soul Project & Agus V Remix)

Part 2 Tracklist

JOSEL - AnotherEarth

Michael, Levan & Stiven Rivic - Violence (Marcelo Vasami remix)

Kay - I m Dead Twice

Unkle - Heaven (Paul Lyman Remix)`,likes:"5",descargas:"35.9K",fecha:"2012-09-15",link:"https://mcdn.podbean.com/mf/download/v9xm7f/071-HernanCattaneo-2012-09-16.mp3",tracklist:`Part 1

Asten - Memories (Dan Kubo Remix)

John Gham - Valentino

Mark Henning - Sunday Slide

Marc Marzenit & Henry Saiz - Sirens Land

Death in Vegas - Anita Berber (Dark Soul Project & Agus V Remix)

Part 2

JOSEL - AnotherEarth

Michael, Levan & Stiven Rivic - Violence (Marcelo Vasami remix)

Kay - I m Dead Twice

Unkle - Heaven (Paul Lyman Remix)`},{episodio:"072",titulo:"Resident / Episode 072 / September 22 2012",descripcion:`Part 1 Tracklist

Bookashade - Tomorrow

Simon Firth - Transporter (Checkor Remix)

Deepfunk - Talking to Yourself

Dennis A - Black Sun (Guy Mantzur & Sahar Z Remix)

Part 2 Tracklist

Lonya - Fairy

Nick Warren - In Search Of Silver (Diyo Remix)

TILT vs Ben Shaw - Sly One (Andre Sobota Remix)

LoQuai - Acuity

Pig&Dan - Natives (Dosem Remix)`,likes:"4",descargas:"37.6K",fecha:"2012-09-22",link:"https://mcdn.podbean.com/mf/download/jfgevp/072-HernanCattaneo-2012-09-25.mp3",tracklist:`Part 1

Bookashade - Tomorrow

Simon Firth - Transporter (Checkor Remix)

Deepfunk - Talking to Yourself

Dennis A - Black Sun (Guy Mantzur & Sahar Z Remix)

Part 2

Lonya - Fairy

Nick Warren - In Search Of Silver (Diyo Remix)

TILT vs Ben Shaw - Sly One (Andre Sobota Remix)

LoQuai - Acuity

Pig&Dan - Natives (Dosem Remix)`},{episodio:"073",titulo:"Resident / Episode 073 / September 29 2012",descripcion:`Part 1 Tracklist

Tomas Barfod feat. Nina Kinert	- Till We Die (Blond:ish Remix)

Jemmy - Quarry Bank (Stelios Vassiloudis Remix)

Marc Poppcke - Blaze of Glory (Luis Bondio Remix)

Luis Bondio -Vintage Colors (Marc Poppcke Remix)

Part 2 Tracklist

GRG-Nova (Spada Remix)

Denis A - Black Sun (Luis Junior Remix)

Mitrinique - Colorshock (Marcelo Vasami)

Hernan Cattaneo & Soundexile - Teleport (Pete McCarthey Unofficial remix)`,likes:"8",descargas:"39.5K",fecha:"2012-09-29",link:"https://mcdn.podbean.com/mf/download/mhtwzm/073-HernanCattaneo-2012-09-30.mp3",tracklist:`Part 1

Tomas Barfod feat. Nina Kinert	- Till We Die (Blond:ish Remix)

Jemmy - Quarry Bank (Stelios Vassiloudis Remix)

Marc Poppcke - Blaze of Glory (Luis Bondio Remix)

Luis Bondio -Vintage Colors (Marc Poppcke Remix)

Part 2

GRG-Nova (Spada Remix)

Denis A - Black Sun (Luis Junior Remix)

Mitrinique - Colorshock (Marcelo Vasami)

Hernan Cattaneo & Soundexile - Teleport (Pete McCarthey Unofficial remix)`},{episodio:"074",titulo:"Resident / Episode 074 / October 06 2012",descripcion:`Part 1 Tracklist

Andrew Benson & Asten - Freefall

Dirty Culture - Fade In Fade Out (Ferdy Unreleased Remix)

Lori - Moon

Danza Macabra - The Woods (Patlac Remix)

John Debo - Reconciliation

Part 2 Tracklist

Guy Gerber - Steady feat. Jaw

JOSEL - Ekfrasis

Deepfunk - Black Lemon Trees (Andy Arias Blackmambo Mix)

Hot Chip - Flames (Sasha remix)`,likes:"4",descargas:"41.9K",fecha:"2012-10-06",link:"https://mcdn.podbean.com/mf/download/wnfue3/074-HernanCattaneo-2012-10-07.mp3",tracklist:`Part 1

Andrew Benson & Asten - Freefall

Dirty Culture - Fade In Fade Out (Ferdy Unreleased Remix)

Lori - Moon

Danza Macabra - The Woods (Patlac Remix)

John Debo - Reconciliation

Part 2

Guy Gerber - Steady feat. Jaw

JOSEL - Ekfrasis

Deepfunk - Black Lemon Trees (Andy Arias Blackmambo Mix)

Hot Chip - Flames (Sasha remix)`},{episodio:"075",titulo:"Resident / Episode 075 / October 13 2012",descripcion:`Part 1 Tracklist

Andy Weed - No Man's Land (ADE edit)

Dr. Avalance - Stairs

Dmitry Molosh	- The Labyrinth

OMB - Sea Air (Silinder Remix)

Part 2 Tracklist

Inkfish - Afraid (Konektiv Remix)

Nick Curly -B - Eastern curve (Uner remix)

Neil Davidge - Awakening (Gui Boratto Remix)

Max Cooper feat Braides - Pleasures`,likes:"4",descargas:"41K",fecha:"2012-10-13",link:"https://mcdn.podbean.com/mf/download/3g5fq4/075-HernanCattaneo-2012-10-14.mp3",tracklist:`Part 1

Andy Weed - No Man's Land (ADE edit)

Dr. Avalance - Stairs

Dmitry Molosh	- The Labyrinth

OMB - Sea Air (Silinder Remix)

Part 2

Inkfish - Afraid (Konektiv Remix)

Nick Curly -B - Eastern curve (Uner remix)

Neil Davidge - Awakening (Gui Boratto Remix)

Max Cooper feat Braides - Pleasures`},{episodio:"078",titulo:"Resident / Episode 078 / November 03 2012",descripcion:`Part 1 Tracklist

M.A.N.D.Y - Twisted Sister

M.A.N.D.Y - Superstitious

Hunter - Game An Angel

Filter B - Song Of Life

Henry Saiz & Cora Novoa - Dreama

Part 2 Tracklist

Diego Azocar -Recall

Stephen J. Kroos - The Archetype \xA0(Estroe Melo Remix)

Dark Soul Project & Solar Sphere - Sunshine Night (Nikko.Z )

Graziano Raffa - Globe`,likes:"3",descargas:"46.4K",fecha:"2012-11-03",link:"https://mcdn.podbean.com/mf/download/6tn2cq/078-HernanCattaneo-2012-11-04.mp3",tracklist:`Part 1

M.A.N.D.Y - Twisted Sister

M.A.N.D.Y - Superstitious

Hunter - Game An Angel

Filter B - Song Of Life

Henry Saiz & Cora Novoa - Dreama

Part 2

Diego Azocar -Recall

Stephen J. Kroos - The Archetype \xA0(Estroe Melo Remix)

Dark Soul Project & Solar Sphere - Sunshine Night (Nikko.Z )

Graziano Raffa - Globe`},{episodio:"079",titulo:"Resident / Episode 079 / November 10 2012",descripcion:`Part 1 Tracklist

Derek Howell feat. Mz Sunday Luv - Here We Go Again

HVOB - Dogs (Oliver Koletzki Remix)

Magic Panda - Distant Places (Max Cooper Remix)

Auntie Flo - Sun Ritual

J. Khobb - Retrolution

Part 2 Tracklist

Santiago Teillagorry - Samsara

Amethyst & Lenny Lenoks - The Race (Beat Syndrome Remix)

Omar Fayyad - The Future (Nikko.Z Remix)

Oliver Schories - Bombay Sunrise (Microtrauma)`,likes:"6",descargas:"40K",fecha:"2012-11-10",link:"https://mcdn.podbean.com/mf/download/h3r4xh/079-HernanCattaneo-2012-11-11.mp3",tracklist:`Part 1

Derek Howell feat. Mz Sunday Luv - Here We Go Again

HVOB - Dogs (Oliver Koletzki Remix)

Magic Panda - Distant Places (Max Cooper Remix)

Auntie Flo - Sun Ritual

J. Khobb - Retrolution

Part 2

Santiago Teillagorry - Samsara

Amethyst & Lenny Lenoks - The Race (Beat Syndrome Remix)

Omar Fayyad - The Future (Nikko.Z Remix)

Oliver Schories - Bombay Sunrise (Microtrauma)`},{episodio:"080",titulo:"Resident / Episode 080 / November 17 2012",descripcion:`Part 1 Tracklist

Send- Return Hope \xA0(LoQuai Remix)

Cumiks & Fran Von Vie-Unknown

Martin Patino-Ruta 5 (Daso Remix)

Nick Curly - Love machine

Jonny Cruz-Devil's Hex

Part 2 Tracklist

Enki - Tim Burton Abduction

Dosem - A Modern Ritual

Loopsize - Handling

Liz Cirelli - I Pray (Cora Novoa Remix)`,likes:"3",descargas:"42.3K",fecha:"2012-11-17",link:"https://mcdn.podbean.com/mf/download/zp4zsa/080-HernanCattaneo-2012-11-18.mp3",tracklist:`Part 1

Send- Return Hope \xA0(LoQuai Remix)

Cumiks & Fran Von Vie-Unknown

Martin Patino-Ruta 5 (Daso Remix)

Nick Curly - Love machine

Jonny Cruz-Devil's Hex

Part 2

Enki - Tim Burton Abduction

Dosem - A Modern Ritual

Loopsize - Handling

Liz Cirelli - I Pray (Cora Novoa Remix)`},{episodio:"081",titulo:"Resident / Episode 081 / November 24 2012",descripcion:`Part 1 Tracklist

Jonny Cruz - Devil's Hex (Avatism & Jeremy P Caulfield Remix)

Fefo - Fin Sin

Pedro Aguiar - Watching you leave

dPen - As we dance

Part 2 Tracklist

Orbital - Where is it going (In Plain Sight remix)

Flume - Sleepless \xA0- Midland Dub

Lateral Cut Groove - Organised Chaos

Totem Pole - Dark Chapel [Ewan Rill Remix]

Nikko.Z - Dopamine (Chris Mozio Remix)`,likes:"3",descargas:"41.5K",fecha:"2012-11-24",link:"https://mcdn.podbean.com/mf/download/tjtsx/081-HernanCattaneo-2012-11-25.mp3",tracklist:`Part 1

Jonny Cruz - Devil's Hex (Avatism & Jeremy P Caulfield Remix)

Fefo - Fin Sin

Pedro Aguiar - Watching you leave

dPen - As we dance

Part 2

Orbital - Where is it going (In Plain Sight remix)

Flume - Sleepless \xA0- Midland Dub

Lateral Cut Groove - Organised Chaos

Totem Pole - Dark Chapel [Ewan Rill Remix]

Nikko.Z - Dopamine (Chris Mozio Remix)`},{episodio:"082",titulo:"Resident / Episode 082 / December 01 2012",descripcion:`Part 1 Tracklist

Guy Gerber - Steady (Deepfunk Back in '89 Mix)

Hi-Fi Mystery School - The Triune Force

Hugo Ibarra - Ambar (Daneel Remix)

Da-Ni-Lo - Sensitive green

WayWork - In Tears

Part 2 Tracklist

Simon Baker - Hideout

Li-Polymer - Mission Control

Heinrich Mendez - Tau Am Morgen (Marc Poppcke remix)

Guille Quero & Sound Process - Modular

Rich Curtis - Lower My Voice (Pig & Dan Remix)`,likes:"5",descargas:"42.4K",fecha:"2012-12-01",link:"https://mcdn.podbean.com/mf/download/52i9q/082-HernanCattaneo-2012-12-03.mp3",tracklist:`Part 1

Guy Gerber - Steady (Deepfunk Back in '89 Mix)

Hi-Fi Mystery School - The Triune Force

Hugo Ibarra - Ambar (Daneel Remix)

Da-Ni-Lo - Sensitive green

WayWork - In Tears

Part 2

Simon Baker - Hideout

Li-Polymer - Mission Control

Heinrich Mendez - Tau Am Morgen (Marc Poppcke remix)

Guille Quero & Sound Process - Modular

Rich Curtis - Lower My Voice (Pig & Dan Remix)`},{episodio:"083",titulo:"Resident / Episode 083 / December 08 2012",descripcion:`Part 1 Tracklist

Hegrustin - Rising Of The Sun (Asten remix)

Dilby - Let Me Chant (Original Live Mix)

Juan Deminicis - Past (Mastered)

Lamb - She Walks ( WayWork & Cris Xalambri)

Ian Pooley - CompuRhythm (Baikal Remix)

Part 2 Tracklist

Markus Homm - City Tax (Original Mix)

Dosem - 64 207 From The Edge (Original Mix)

Deltano - Survival Instinct (Nicolas Masseyeff Remix)

Alan Fitzpatrick - Skeksis (Original Mix)

Robert Clouth - Bubble Steam (Microtrauma Remix)`,likes:"2",descargas:"37.2K",fecha:"2012-12-08",link:"https://mcdn.podbean.com/mf/download/hy282c/083-HernanCattaneo-2012-12-09.mp3",tracklist:`Part 1

Hegrustin - Rising Of The Sun (Asten remix)

Dilby - Let Me Chant (Original Live Mix)

Juan Deminicis - Past (Mastered)

Lamb - She Walks ( WayWork & Cris Xalambri)

Ian Pooley - CompuRhythm (Baikal Remix)

Part 2

Markus Homm - City Tax (Original Mix)

Dosem - 64 207 From The Edge (Original Mix)

Deltano - Survival Instinct (Nicolas Masseyeff Remix)

Alan Fitzpatrick - Skeksis (Original Mix)

Robert Clouth - Bubble Steam (Microtrauma Remix)`},{episodio:"084",titulo:"Resident / Episode 084 / December 15 2012",descripcion:`Part 1 Tracklist

Zwaan - Doom

Lonely Warrior - Ciur Remix

Verve - Enchant (Matias Chilano Remix)

Erreome - Cosmic box (Original mix)

Mitrinique - High On Chocolate (Mauro Norti Remix)

Part 2 Tracklist

Dominik Eulberg - Offenbach Li-Polymer - The Dreamer ( original_mix) Criss Deeper - Voyager Spark

Beat Syndrome - Ebullience`,likes:"5",descargas:"41.3K",fecha:"2012-12-15",link:"https://mcdn.podbean.com/mf/download/2vf3e/084-HernanCattaneo-2012-12-16.mp3",tracklist:`Part 1

Zwaan - Doom

Lonely Warrior - Ciur Remix

Verve - Enchant (Matias Chilano Remix)

Erreome - Cosmic box (Original mix)

Mitrinique - High On Chocolate (Mauro Norti Remix)

Part 2

Dominik Eulberg - Offenbach Li-Polymer - The Dreamer ( original_mix) Criss Deeper - Voyager Spark

Beat Syndrome - Ebullience`},{episodio:"085",titulo:"Resident / Episode 085 / December 22 2012",descripcion:`Part 1 Tracklist

Oliver Lieb - The Shortest Day

Tripswitch - Deer Park (Seb Dhajje From Zurich Remix)

Maxi Iborquiza - Moonride

Stelios Vassiloudis - Coma

Part 2 Tracklist

Blusoul Feat. Amber Long - The Future Is Yours

Led Zeppelin - No Quarter (Progress Inn Remix)

Mariana - Mariana

Marc Poppcke - Simplify Matters (Kevin Di Serna Remix)

Luis Bondio & Cesar Lombardi - Freak Motion (Original Mix)`,likes:"6",descargas:"42.9K",fecha:"2012-12-22",link:"https://mcdn.podbean.com/mf/download/3hfa7h/085-HernanCattaneo-2012-12-23.mp3",tracklist:`Part 1

Oliver Lieb - The Shortest Day

Tripswitch - Deer Park (Seb Dhajje From Zurich Remix)

Maxi Iborquiza - Moonride

Stelios Vassiloudis - Coma

Part 2

Blusoul Feat. Amber Long - The Future Is Yours

Led Zeppelin - No Quarter (Progress Inn Remix)

Mariana - Mariana

Marc Poppcke - Simplify Matters (Kevin Di Serna Remix)

Luis Bondio & Cesar Lombardi - Freak Motion (Original Mix)`},{episodio:"088",titulo:"Resident / Episode 088 / January 12 2013",descripcion:`Part 1 Tracklist

Kyodai - My thing

Estroe - Punchie (Paronator)

Kollektiv Turmstrasse - 208 Kontakt (Sieg uber die Sonne Remix)

Markus Homm - Key Frame (Leo Leal & Adrian Garza Remix)

Dilby - Let Me Chant (John Debo Mix)

Part 2 Tracklist

Andrew Bayer - Gaff's Eulogy (Ryan Davis Interpretation)

Harvey Hunzed Productions - Hope

Ultraista - Smalltalk (Four Tet remix)

Binary & Durden - Smalltalk - Chiemsee (Rodriguez Jr Remix)

dPen & Epsilon - Winter Is Coming`,likes:"5",descargas:"9.1K",fecha:"2013-01-12",link:"https://mcdn.podbean.com/mf/download/ixvtyj/088-HernanCattaneo-2013-01-13.mp3",tracklist:`Part 1

Kyodai - My thing

Estroe - Punchie (Paronator)

Kollektiv Turmstrasse - 208 Kontakt (Sieg uber die Sonne Remix)

Markus Homm - Key Frame (Leo Leal & Adrian Garza Remix)

Dilby - Let Me Chant (John Debo Mix)

Part 2

Andrew Bayer - Gaff's Eulogy (Ryan Davis Interpretation)

Harvey Hunzed Productions - Hope

Ultraista - Smalltalk (Four Tet remix)

Binary & Durden - Smalltalk - Chiemsee (Rodriguez Jr Remix)

dPen & Epsilon - Winter Is Coming`},{episodio:"089",titulo:"Resident / Episode 089 / January 19 2013",descripcion:`Part 1 Tracklist

BP - Inspirado Por Usted

Mauro Norti vs Trentemoller & Ievgeniy Kozlov - Thinking About Maktub (George Marvel Mushup)

Jonnie Sparko - Platano Maduro (Luke Hunter Remix)

Juan Deminicis - Behind the Sun

Part 2 Tracklist

PF - Is There Anybody Out There (Dihk Espinoza Remix)

Fabio Gianelli - Maintain (Just Be Deep Mix)

Julinan Marazuela - Suspiros (Original Mix)

Corei - Kolours (Original Mix)`,likes:"4",descargas:"59.3K",fecha:"2013-01-19",link:"https://mcdn.podbean.com/mf/download/f86du/089-HernanCattaneo-2013-01-20.mp3",tracklist:`Part 1

BP - Inspirado Por Usted

Mauro Norti vs Trentemoller & Ievgeniy Kozlov - Thinking About Maktub (George Marvel Mushup)

Jonnie Sparko - Platano Maduro (Luke Hunter Remix)

Juan Deminicis - Behind the Sun

Part 2

PF - Is There Anybody Out There (Dihk Espinoza Remix)

Fabio Gianelli - Maintain (Just Be Deep Mix)

Julinan Marazuela - Suspiros (Original Mix)

Corei - Kolours (Original Mix)`},{episodio:"090",titulo:"Resident / Episode 090 / January 26 2013",descripcion:`Part 1 Tracklist

Tiefschwarz - No Message (David K's Allegro remix)

BP - Inspirado (Guy J mix)

Daneel - Stairs

Totem Pole - Andromeda (Original Mix)

Part 2 Tracklist

Jimmy Van M - QR

Spitzer - CLUNKER feat. Fab (Avatism remix)

Deepfunk & Kassey Voorn - Long Time Coming (Oliver Lieb Remix)

Dave Seaman & John 00 Fleming - Pixelated (Dibby Dougherty & David Young Remix)

Mehmet Akar - Seni Seviyorum (Dale Middleton Remix)`,likes:"2",descargas:"62.6K",fecha:"2013-01-26",link:"https://mcdn.podbean.com/mf/download/pxzrsa/090-HernanCattaneo-2013-01-27.mp3",tracklist:`Part 1

Tiefschwarz - No Message (David K's Allegro remix)

BP - Inspirado (Guy J mix)

Daneel - Stairs

Totem Pole - Andromeda (Original Mix)

Part 2

Jimmy Van M - QR

Spitzer - CLUNKER feat. Fab (Avatism remix)

Deepfunk & Kassey Voorn - Long Time Coming (Oliver Lieb Remix)

Dave Seaman & John 00 Fleming - Pixelated (Dibby Dougherty & David Young Remix)

Mehmet Akar - Seni Seviyorum (Dale Middleton Remix)`},{episodio:"091",titulo:"Resident / Episode 091 / February 02 2013",descripcion:`Part 1 Tracklist

Balcazar & Sordo - Sacrifice

Fabio Gianelli - 27 Maintain, M.A.N.D.Y.

Echomen Feat. Mark Nigrelli - Dont hold back

Alexkid - Enty

Rikki Sawyer - In a moment

Part 2 Tracklist

Makson - Awake (Karl M Remix)

Makson - Awake(Alec Troniq Remix)

Inkfish - Wait In Vain (Lesovsky Remix)

Quivver - The Fog (Kassey Voorn vintage interpretation)`,likes:"5",descargas:"64.9K",fecha:"2013-02-02",link:"https://mcdn.podbean.com/mf/download/97vhmr/091-HernanCattaneo-2013-02-03.mp3",tracklist:`Part 1

Balcazar & Sordo - Sacrifice

Fabio Gianelli - 27 Maintain, M.A.N.D.Y.

Echomen Feat. Mark Nigrelli - Dont hold back

Alexkid - Enty

Rikki Sawyer - In a moment

Part 2

Makson - Awake (Karl M Remix)

Makson - Awake(Alec Troniq Remix)

Inkfish - Wait In Vain (Lesovsky Remix)

Quivver - The Fog (Kassey Voorn vintage interpretation)`},{episodio:"092",titulo:"Resident / Episode 092 / February 09 2013",descripcion:`Part 1 Tracklist

Carlo - Flying away

St. Savor - Mysterious Russian Souls

Martin Aquino - Aomame (Simon Garcia's Gets You There remix)

Clarian - Remove Control

Darren Flecta - In Moments (Luis Bondio Remix)

Part 2 Tracklist

Layo & Bushwacka - Delta Ahead (Uner Remix)

Eelke Kleijin - Flierefluiter

Matias Chilano - Shockroom

Kassey Voorn & Deepfunk - Long Time Coming`,likes:"4",descargas:"66.9K",fecha:"2013-02-09",link:"https://mcdn.podbean.com/mf/download/jcpc8/092-HernanCattaneo-2013-02-10.mp3",tracklist:`Part 1

Carlo - Flying away

St. Savor - Mysterious Russian Souls

Martin Aquino - Aomame (Simon Garcia's Gets You There remix)

Clarian - Remove Control

Darren Flecta - In Moments (Luis Bondio Remix)

Part 2

Layo & Bushwacka - Delta Ahead (Uner Remix)

Eelke Kleijin - Flierefluiter

Matias Chilano - Shockroom

Kassey Voorn & Deepfunk - Long Time Coming`},{episodio:"093",titulo:"Resident / Episode 093 / February 16 2013",descripcion:`Part 1 Tracklist

Clarian & Guy Gerber - Claire

Anthony Middleton - Till the End of... (Just Be Remix)

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone -Philipp Straub & caTekk Remix

Shpongle feat. Anabel Englund - Nothing Is Something Worth Doing (Santiago Garcia Unofficial Remix)

Andromo - Full Effect

Part 2 Tracklist

Fran Von Vie - Raining since 87

Darin Epsilon - Ryan Davis reconstruct

Cumiks - Six Feet Above

Max Cooper - Pleasures (Andy Arias Remix)`,likes:"6",descargas:"63.6K",fecha:"2013-02-16",link:"https://mcdn.podbean.com/mf/download/3awi2m/093-HernanCattaneo-2013-02-17.mp3",tracklist:`Part 1

Clarian & Guy Gerber - Claire

Anthony Middleton - Till the End of... (Just Be Remix)

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone -Philipp Straub & caTekk Remix

Shpongle feat. Anabel Englund - Nothing Is Something Worth Doing (Santiago Garcia Unofficial Remix)

Andromo - Full Effect

Part 2

Fran Von Vie - Raining since 87

Darin Epsilon - Ryan Davis reconstruct

Cumiks - Six Feet Above

Max Cooper - Pleasures (Andy Arias Remix)`},{episodio:"094",titulo:"Resident / Episode 094 / February 23 2013",descripcion:`Part 1 Tracklist

Layo & Bushwacka - Delta Ahead

Piek feat. Bjerk Peterson - Nasty (Pawas Remix)

Eelke Kleijn - Kitten of Mass Destruction (MUUI Remix) Henry Saiz - OurDiscovery ( OrgueElectronique) Part 2 Tracklist

Simon Vuarambon - Violet Petals

VQ024 B3 Clarian - U

Rodskeez - School of Thought (Jamie Stevens Golden Return Remix)

Mikael Stavostrand - The Other One' (Simon Garcia's Tunnel Vision dub)

Marco Bailey - The falcon`,likes:"4",descargas:"69.9K",fecha:"2013-02-23",link:"https://mcdn.podbean.com/mf/download/qz8qm/094-HernanCattaneo-2013-02-17.mp3",tracklist:`Part 1

Layo & Bushwacka - Delta Ahead

Piek feat. Bjerk Peterson - Nasty (Pawas Remix)

Eelke Kleijn - Kitten of Mass Destruction (MUUI Remix) Henry Saiz - OurDiscovery ( OrgueElectronique) Part 2

Simon Vuarambon - Violet Petals

VQ024 B3 Clarian - U

Rodskeez - School of Thought (Jamie Stevens Golden Return Remix)

Mikael Stavostrand - The Other One' (Simon Garcia's Tunnel Vision dub)

Marco Bailey - The falcon`},{episodio:"764",titulo:"Resident / Episode 764 / Dec 27 2025",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"14",descargas:"22.1K",fecha:"2025-12-27",link:"https://mcdn.podbean.com/mf/download/82n7ckxyrpmbuhny/764-HernanCattaneo-2025-12-27.mp3"},{episodio:"763",titulo:"Resident / Episode 763 / Dec 20 2025",descripcion:`1 - John Cosani - Snano /\xA0
2 - Nick Varon, Deekay /\xA0
3 - D-Nox, Andr\xE9 Moret - Try to Make It /\xA0
4 - Kasey Taylor & Gai Barone - Spiral /\xA0
5 - BLANCAh - Beyond The Stars (Danny In Space Remix) /\xA0
6 - E A N P - Fantastic /\xA0
7 - Molac, Anonimat - Raptor /\xA0
8 - Hobin Rude - Fading Silhouettes (Fabri Lopez Remix) /\xA0
9 - Nichols Roark - Empyrean (Matthew Sona Remix) /\xA0
10 - The Chemicals Brothers - The Pills Won't Help You Now (Juani Ramirez Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"35.2K",fecha:"2025-12-20",link:"https://mcdn.podbean.com/mf/download/feurb34k9m79ygr5/763-HernanCattaneo-2025-12-20.mp3",tracklist:`John Cosani - Snano /
Nick Varon, Deekay /
D-Nox, Andr\xE9 Moret - Try to Make It /
Kasey Taylor & Gai Barone - Spiral /
BLANCAh - Beyond The Stars (Danny In Space Remix) /
E A N P - Fantastic /
Molac, Anonimat - Raptor /
Hobin Rude - Fading Silhouettes (Fabri Lopez Remix) /
Nichols Roark - Empyrean (Matthew Sona Remix) /`},{episodio:"753",titulo:"Resident / Episode 753 / Oct 11 2025",descripcion:`1 - John Moblack - Sofia (Ewan Rill Remix) /\xA0
2 - Will DeKeizer - Dixieland /\xA0
3 - Not Demure - Core Memory /\xA0
4 - Facundo Leiarz - Peak Peak /\xA0
5 - Mateo Tapia, Carlos Gatto - Sharp Hook /\xA0
6 - Juan Pablo Torrez - Immensity /\xA0
7 - Gonzalo Sacc, Franco Leonardini - Honey (Juan Iba\xF1ez Remix) /\xA0
8 - RIVVO - Celestial Drift (Solis [US] remix) /\xA0
9 - Henry Saiz- \xA0The Pulse /\xA0
10 - Genius Of Time x Devlant - Rave Breaks (Kevin Di Serna 'Balance' Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"31.7K",fecha:"2025-10-11",link:"https://mcdn.podbean.com/mf/download/6xmwcqfzypvnxy54/753-HernanCattaneo-2025-10-11.mp3",tracklist:`John Moblack - Sofia (Ewan Rill Remix) /
Will DeKeizer - Dixieland /
Not Demure - Core Memory /
Facundo Leiarz - Peak Peak /
Mateo Tapia, Carlos Gatto - Sharp Hook /
Juan Pablo Torrez - Immensity /
Gonzalo Sacc, Franco Leonardini - Honey (Juan Iba\xF1ez Remix) /
RIVVO - Celestial Drift (Solis [US] remix) /
Henry Saiz- \xA0The Pulse /`},{episodio:"754",titulo:"Resident / Episode 754 / Oct 18 2025",descripcion:`1 - EMPHI - Moongazer /\xA0
2 - Exe Cruz - Passion Fruit Perfume /\xA0
3 - Hobin Rude - Hollow /\xA0
4 - McKeown & Bassiray - An Introduction (Ricky Ryan & Maze 28 Reform) /\xA0
5 - RADON, Guuse - Cant Leave /\xA0
6 - M.O.S - Without You - Quivver Remix /\xA0
7 - Lonya - New Form /\xA0
8 - Fernando Olaya, Gorkiz - Soulful Embrace /\xA0
9 - Luciano Elvira - Babel /\xA0
10 - Gheist - Searching Places (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"31.2K",fecha:"2025-10-18",link:"https://mcdn.podbean.com/mf/download/9k2n8k2i643rppta/754-HernanCattaneo-2025-10-18.mp3",tracklist:`EMPHI - Moongazer /
Exe Cruz - Passion Fruit Perfume /
Hobin Rude - Hollow /
McKeown & Bassiray - An Introduction (Ricky Ryan & Maze 28 Reform) /
RADON, Guuse - Cant Leave /
M.O.S - Without You - Quivver Remix /
Lonya - New Form /
Fernando Olaya, Gorkiz - Soulful Embrace /
Luciano Elvira - Babel /`},{episodio:"743",titulo:"Resident / Episode 743 / Aug 02 2025",descripcion:`1 - Juan Iba\xF1ez, Nicolas Viana - Eira /\xA0
2 - M83 - Oblivion feat Susanne Sundf\xF8r (Gabbe Unofficial Remix) /\xA0
3 - Chris Cargo - Chemical dreams /\xA0
4 - Lonya - Sadness (Ziger Remix) /\xA0
5 - Yashar - One Step Closer /\xA0
6 - Valdovinos -Yellow Flowers /\xA0
7 - Fabian Argomedo - \xA0Shanti /\xA0
8 - Disto (SL) - Closing Duties /\xA0
9 - Sofia Deren - New Air /\xA0
10 - Temper Trap - Sweet Disposition (Cristian Caro Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"34.6K",fecha:"2025-08-02",link:"https://mcdn.podbean.com/mf/download/k6jwjpzvzxiic72e/743-HernanCattaneo-2025-08-02.mp3",tracklist:`Juan Iba\xF1ez, Nicolas Viana - Eira /
M83 - Oblivion feat Susanne Sundf\xF8r (Gabbe Unofficial Remix) /
Chris Cargo - Chemical dreams /
Lonya - Sadness (Ziger Remix) /
Yashar - One Step Closer /
Valdovinos -Yellow Flowers /
Fabian Argomedo - \xA0Shanti /
Disto (SL) - Closing Duties /
Sofia Deren - New Air /`},{episodio:"744",titulo:"Resident / Episode 744 / Aug 09 2025",descripcion:`1 - Shayan Pasha - Ninja Groove /\xA0
2 - Alan Schultz - Bubble Shapes /\xA0
3 - Alan Cerra - End of the Line (Gai Barone Remix) /\xA0
4 - Tato Seco & Gero Pellizzon - Benne Geserit /\xA0
5 \xA0- Sandra Collins & Micke - Thirteen (Quivver Remix) /\xA0
6 - Gustin & Around Us - The Cause /\xA0
7 - Agustin Pengov & Tirso Enriquez (AR) - Tempest (Aubrey Fry & Gai Barone Remix) /\xA0
8 - B.I.R.DD (AR), Roman - Beyond My Sound /\xA0
9 - Mariano Mellino - Mong Kok /\xA0
10 - Hector Cortes y Fran Bux Ft. B\xE4da - Surrender / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"35.9K",fecha:"2025-08-09",link:"https://mcdn.podbean.com/mf/download/f5eh2xsubsfp96tb/744-HernanCattaneo-2025-08-09.mp3",tracklist:`Shayan Pasha - Ninja Groove /
Alan Schultz - Bubble Shapes /
Alan Cerra - End of the Line (Gai Barone Remix) /
Tato Seco & Gero Pellizzon - Benne Geserit /
Sandra Collins & Micke - Thirteen (Quivver Remix) /
Gustin & Around Us - The Cause /
Agustin Pengov & Tirso Enriquez (AR) - Tempest (Aubrey Fry & Gai Barone Remix) /
B.I.R.DD (AR), Roman - Beyond My Sound /
Mariano Mellino - Mong Kok /`},{episodio:"733",titulo:"Resident / Episode 733 / May 24 2025",descripcion:`1 - Danny Howells & Matt Masters - Introspection /\xA0
2 - Kit Lawson - Night Light /\xA0
3 - Grisel Esquivel - Ethereal Soul /\xA0
4 - Franbro - Double Espresso (Hobin Rude Remix) /\xA0
5 - Mareveg - What I Need /\xA0
6 - Nick Varon - Knotty Days /\xA0
7 - Tantum - Spaya (Weird Sounding Dude Remix) /\xA0
8 - Kalima - Combuco /\xA0
9 - Sinca - Silver Lines /\xA0
10 - Le Carousel - We're All Gonna Hurt / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33.6K",fecha:"2025-05-24",link:"https://mcdn.podbean.com/mf/download/9bue34r592ugdibp/733-HernanCattaneo-2025-05-24.mp3",tracklist:`Danny Howells & Matt Masters - Introspection /
Kit Lawson - Night Light /
Grisel Esquivel - Ethereal Soul /
Franbro - Double Espresso (Hobin Rude Remix) /
Mareveg - What I Need /
Nick Varon - Knotty Days /
Tantum - Spaya (Weird Sounding Dude Remix) /
Kalima - Combuco /
Sinca - Silver Lines /`},{episodio:"734",titulo:"Resident / Episode 734 / May 31 2025",descripcion:`1 - Juan Yarin - If I Could Stop The Sunset (Roy Rosenfeld Remix) /\xA0
2 - SHAZZE, Floyo, Jo Cruz - Rave All Night /\xA0
3 - Mariusso - No Fear /\xA0
4 - Martin Fredes - Green Valley /\xA0
5 - Simply City and Dimuth K - Resonance /\xA0
6 - Solis [US] - Subatomic Flux /\xA0
7 - George X & Anonimat - Telazar /\xA0
8 - Benja Molina - Astre /\xA0
9 - Ric Niels - Metal Fury /\xA0
10 - Because Of Art - Queens Park / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"27K",fecha:"2025-05-31",link:"https://mcdn.podbean.com/mf/download/kx8ij2m7mtn9jv6p/734-HernanCattaneo-2025-05-31.mp3",tracklist:`Juan Yarin - If I Could Stop The Sunset (Roy Rosenfeld Remix) /
SHAZZE, Floyo, Jo Cruz - Rave All Night /
Mariusso - No Fear /
Martin Fredes - Green Valley /
Simply City and Dimuth K - Resonance /
Solis [US] - Subatomic Flux /
George X & Anonimat - Telazar /
Benja Molina - Astre /
Ric Niels - Metal Fury /`},{episodio:"723",titulo:"Resident / Episode 723 / Mar 15 2025",descripcion:`1 - Gai Barone - Fractals /\xA0
2 - J Lauda - Lifeline /\xA0
3 - Tomas Garcia - Nuke /\xA0
4 - Julian Nates - Synchronicity /\xA0
5 - E A N P - STRSSHNE /\xA0
6 - Tonaco - Gautama (Andr\xE9 Moret Remix) /\xA0
7 - Nick Stoynoff - The Hero's Journey /\xA0
8 - EMPHI - Locate /\xA0
9 - Ziger - Constellation (Santi Mossman Remix) /\xA0
10 - Oliverio Sofia - Agua (Dario Arcas Sunset Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"27.9K",fecha:"2025-03-15",link:"https://mcdn.podbean.com/mf/download/etkcitmgt693cxw4/723-HernanCattaneo-2025-03-15.mp3",tracklist:`Gai Barone - Fractals /
J Lauda - Lifeline /
Tomas Garcia - Nuke /
Julian Nates - Synchronicity /
E A N P - STRSSHNE /
Tonaco - Gautama (Andr\xE9 Moret Remix) /
Nick Stoynoff - The Hero's Journey /
EMPHI - Locate /
Ziger - Constellation (Santi Mossman Remix) /`},{episodio:"713",titulo:"Resident / Episode 713 / Jan 04 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.1 
Featuring Pole Folder. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"39.1K",fecha:"2025-01-04",link:"https://mcdn.podbean.com/mf/download/3q9xqj6sfifv9r3y/713-HernanCattaneo-2025-01-04.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.1"},{episodio:"703",titulo:"Resident / Episode 703 / Oct 26 2024",descripcion:`1 - Ethan Tait, Boskasie - The Journey (Tamir Regev Remix) /\xA0
2 - Tomomi Ukumori, DJ Maar, Yumi Kobayashi, Yamitonma - Tsukiyomi (Henna Onna Remix) /\xA0
3 - Dougal Fox - Intimate Spaces (Hernan Cattaneo and Simply City Remix) /\xA0
4 - Enzo Paradiso & Rodrigo Pochelu - Stay Magical (Govinda (Arg) Remix) /\xA0
5 - Fabricio Mosoni - Lux Interior /\xA0
6 - Andr\xE9 Moret, Gorkiz - Soul Encounters /\xA0
7 - Emma Vazquez, Soul Relay - Wishing Well /\xA0
8 - VegaZ (SL) & Nicolas Benedetti - Metanoia /\xA0
9 - Kamilo Sanclemente, Andr\xE9 Moret - Surge /\xA0
10 - Rise And Fall - Pipeline / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"34.4K",fecha:"2024-10-26",link:"https://mcdn.podbean.com/mf/download/euseimtetmv9dsze/703-HernanCattaneo-2024-10-26.mp3",tracklist:`Ethan Tait, Boskasie - The Journey (Tamir Regev Remix) /
Tomomi Ukumori, DJ Maar, Yumi Kobayashi, Yamitonma - Tsukiyomi (Henna Onna Remix) /
Dougal Fox - Intimate Spaces (Hernan Cattaneo and Simply City Remix) /
Enzo Paradiso & Rodrigo Pochelu - Stay Magical (Govinda (Arg) Remix) /
Fabricio Mosoni - Lux Interior /
Andr\xE9 Moret, Gorkiz - Soul Encounters /
Emma Vazquez, Soul Relay - Wishing Well /
VegaZ (SL) & Nicolas Benedetti - Metanoia /
Kamilo Sanclemente, Andr\xE9 Moret - Surge /`},{episodio:"693",titulo:"Resident / Episode 693 / Aug 17 2024",descripcion:`1 - Shayan Pasha - Leaves on the Wall /\xA0
2 - Shayan Pasha - Dancing With Wolves /\xA0
3 - RTIK - The Light We Can't See (Gai Barone Remix) /\xA0
4 - Forty Cats - 4.30 /\xA0
5 - Neuralis - Floating Free /\xA0
6 - Will DeKeizer - Sound of Neptune /\xA0
7 - Steve Parry - Won't You Believe /\xA0
8 - Eichenbaum - Transcender (Andr\xE9s Moris Trip Mix) /\xA0
9 - Federico Epis - The Day After /\xA0
10 - Dan Mlinar - Velvet Nights / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"34K",fecha:"2024-08-17",link:"https://mcdn.podbean.com/mf/download/4aumsetf52idwfsn/693-HernanCattaneo-2024-08-17.mp3",tracklist:`Shayan Pasha - Leaves on the Wall /
Shayan Pasha - Dancing With Wolves /
RTIK - The Light We Can't See (Gai Barone Remix) /
Forty Cats - 4.30 /
Neuralis - Floating Free /
Will DeKeizer - Sound of Neptune /
Steve Parry - Won't You Believe /
Eichenbaum - Transcender (Andr\xE9s Moris Trip Mix) /
Federico Epis - The Day After /`},{episodio:"683",titulo:"Resident / Episode 683 / Jun 08 2024",descripcion:`1 - JP M\xE4yeur - Make It Happen /\xA0
2 - Paul Hazendonk - Colori /\xA0
3 - Iovino - Deep Jungle /\xA0
4 - GMJ, Jiminy Hop - Frozen Mind /\xA0
5 - John Tejada, Plaid - Freeways /\xA0
6 - Paul Roux - Himalaya /\xA0
7 - Boraa - Frozen Memories /\xA0
8 - Checo Cotela - Sinag /\xA0
9 - Yudi Watanabe - Gaia /\xA0
10 - Fernando Olaya - Memories From The Future / Download episode on MP3 (Right click, save link as...) p>Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"46K",fecha:"2024-06-08",link:"https://mcdn.podbean.com/mf/download/zdyt2i8pdecqb2xi/683-HernanCattaneo-2024-06-08.mp3",tracklist:`JP M\xE4yeur - Make It Happen /
Paul Hazendonk - Colori /
Iovino - Deep Jungle /
GMJ, Jiminy Hop - Frozen Mind /
John Tejada, Plaid - Freeways /
Paul Roux - Himalaya /
Boraa - Frozen Memories /
Checo Cotela - Sinag /
Yudi Watanabe - Gaia /`},{episodio:"663",titulo:"Resident / Episode 663 / Jan 20 2024",descripcion:"20/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 5 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"15",descargas:"56.2K",fecha:"2024-01-20",link:"https://mcdn.podbean.com/mf/download/p8jag5/663-HernanCattaneo-2024-01-20.mp3"},{episodio:"653",titulo:"Resident / Episode 653 / Nov 11 2023",descripcion:`1 - Facundo Mohrr - As It Happens /\xA0
2 - Jhordan Welsch & Mindlancholic - The Sound of Sadness (Carlos Gatto Remix) /\xA0
3 - Elysian - Love Wins (Hyunji-A Remix) /\xA0
4 - E A N P - Divinity /\xA0
5 - VITE & Hole Box - Midway /\xA0
6 - Forty Cats - Custom (McKeown & Bassiray Remix) /\xA0
7 - Danny Bonnici/Sanoi - Reflections Of The Other Side /\xA0
8 - Eko Centrik - Half Light Island (Jamie Stevens Remix) /\xA0
9 - Will DeKeizer - 2000 B.C. /\xA0
10 - Nila & Luis Damora - Safe From Harm / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"60.3K",fecha:"2023-11-11",link:"https://mcdn.podbean.com/mf/download/wsd9my/653-HernanCattaneo-2023-11-11.mp3",tracklist:`Facundo Mohrr - As It Happens /
Jhordan Welsch & Mindlancholic - The Sound of Sadness (Carlos Gatto Remix) /
Elysian - Love Wins (Hyunji-A Remix) /
E A N P - Divinity /
VITE & Hole Box - Midway /
Forty Cats - Custom (McKeown & Bassiray Remix) /
Danny Bonnici/Sanoi - Reflections Of The Other Side /
Eko Centrik - Half Light Island (Jamie Stevens Remix) /
Will DeKeizer - 2000 B.C. /`},{episodio:"643",titulo:"Resident / Episode 643 / Sep 02 2023",descripcion:`1 - Ucleden - Last Train To Nowhere (Hot Tuneik Remix) /\xA0
2 - Hobin Rude - Fog Of Illusion /\xA0
3 - Sistersweet - Sunrise In Lanka /\xA0
4 - Facundo Mohrr, Maxi Degrassi - Make Today A Good Day /\xA0
5 - Luciano Elvira - Dudemile /\xA0
6 - Nicolas Benedetti - Meraki /\xA0
7 - Bemannte & Bruder - Embers Of Time (Nicolas Benedetti \xB4No Vocal\xB4 Remix) /\xA0
8 - Luciano Elvira - Akisa /\xA0
9 - Grigore\xCC \xA0 - The Journey /\xA0
10 - X-Press 2 - Smoke Machine (Mariano Mellino & FOLGAR Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"63.5K",fecha:"2023-09-02",link:"https://mcdn.podbean.com/mf/download/wujm7e/643-HernanCattaneo-2023-09-02.mp3",tracklist:`Ucleden - Last Train To Nowhere (Hot Tuneik Remix) /
Hobin Rude - Fog Of Illusion /
Sistersweet - Sunrise In Lanka /
Facundo Mohrr, Maxi Degrassi - Make Today A Good Day /
Luciano Elvira - Dudemile /
Nicolas Benedetti - Meraki /
Bemannte & Bruder - Embers Of Time (Nicolas Benedetti \xB4No Vocal\xB4 Remix) /
Luciano Elvira - Akisa /
Grigore\xCC \xA0 - The Journey /`},{episodio:"633",titulo:"Resident / Episode 633 / Jun 24 2023",descripcion:`1 - Matter - Living Dream /\xA0
2 - Chris Cargo - Future Elements /\xA0
3 - Ruben Karapetyan - Amberd (NOIYSE Project Remix) /\xA0
4 - Ric Niels & Will DeKeizer - Destroyer /\xA0
5 - East Cafe - Summer Solstice (Apste Remix) /\xA0
6 - Orsen - Afterlight /\xA0
7 - Lehar - Let People Know /\xA0
8 - Apste - Tempo /\xA0
9 - Dmitry Molosh - Glide /\xA0
10 - Emi Galvan & Albuquerque - Stay High / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.5K",fecha:"2023-06-24",link:"https://mcdn.podbean.com/mf/download/3z27gb/633-HernanCattaneo-2023-06-24.mp3",tracklist:`Matter - Living Dream /
Chris Cargo - Future Elements /
Ruben Karapetyan - Amberd (NOIYSE Project Remix) /
Ric Niels & Will DeKeizer - Destroyer /
East Cafe - Summer Solstice (Apste Remix) /
Orsen - Afterlight /
Lehar - Let People Know /
Apste - Tempo /
Dmitry Molosh - Glide /`},{episodio:"623",titulo:"Resident / Episode 623 / Apr 15 2023",descripcion:`1 - Emma Vazquez - Florine /\xA0
2 - Paul Fonte - William's Wonder /\xA0
3 - Mattim - Rosa (Alan Cerra Remix) /\xA0
4 - Akiva - Irreversible (Hobin Rude) /\xA0
5 - Berni Turletti - Samana /\xA0
6 - Bodaishin - \xA0Koru Master /\xA0
7 - Luis Damora - In The Room /\xA0
8 - Maximo Gambini - Safari /\xA0
9 - Hyunji-A - Across Space And TIme /\xA0
10 - Kris Dur - Yaxkin / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"62.5K",fecha:"2023-04-15",link:"https://mcdn.podbean.com/mf/download/ikvmuk/623-HernanCattaneo-2023-04-15.mp3",tracklist:`Emma Vazquez - Florine /
Paul Fonte - William's Wonder /
Mattim - Rosa (Alan Cerra Remix) /
Akiva - Irreversible (Hobin Rude) /
Berni Turletti - Samana /
Bodaishin - \xA0Koru Master /
Luis Damora - In The Room /
Maximo Gambini - Safari /
Hyunji-A - Across Space And TIme /`},{episodio:"624",titulo:"Resident / Episode 624 / Apr 22 2023",descripcion:`1 - Hernan Cattaneo & Jody Barr - Clara's Dream /\xA0
2 - Mindlancholic - Lost In A Dream (Poli Siufi Remix) /\xA0
3 - MiraculuM - Constellation (Erich Von Kollar Remix) /\xA0
4 - Ruben Karapetyan - Frequency Formula /\xA0
5 - Jiminy Hop - Colatrix (Matter Remix) /\xA0
6 - Ramiro Drisdale - Search /\xA0
7 - Sebastian Busto - Witchcraft /\xA0
8 - Scanners - Shivver (Maxi Iborquiza Boot) /\xA0
9 - \xC2me & Mathew Jonson - Transmoderna (Baunder Club Edit) /\xA0
10 - Radio Slave - Strobe Queen / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"69.4K",fecha:"2023-04-22",link:"https://mcdn.podbean.com/mf/download/zrgjvy/624-HernanCattaneo-2023-04-22.mp3",tracklist:`Hernan Cattaneo & Jody Barr - Clara's Dream /
Mindlancholic - Lost In A Dream (Poli Siufi Remix) /
MiraculuM - Constellation (Erich Von Kollar Remix) /
Ruben Karapetyan - Frequency Formula /
Jiminy Hop - Colatrix (Matter Remix) /
Ramiro Drisdale - Search /
Sebastian Busto - Witchcraft /
Scanners - Shivver (Maxi Iborquiza Boot) /
\xC2me & Mathew Jonson - Transmoderna (Baunder Club Edit) /`},{episodio:"613",titulo:"Resident / Episode 613 / Feb 04 2023",descripcion:`1 - Husa & Zeyada - Inside out (16BL & Wild Dark remix) /\xA0
2 - El Mundo, Satori, Anatolian Sessions, Danny Shamoun, Qualista - Amida (Satori & El Mundo Remix) /\xA0
3 - Will DeKeizer - Route 66 /\xA0
4 - David Museen, Erik Christiansen \xA0- Psychologika (Martin Gardoqui & Topo Larocca Remix) /\xA0
5 - S.o.U.L. ViBRaTioN, DNCN, Freddy Be - Knock Me Off My Feet (LA RIOTS Remix) /\xA0
6 - Juan Sapia - Little Boy /\xA0
7 - Noiyse Project - Groove Child /\xA0
8 - Bachir Salloum - White Samurai [Balance Music] /\xA0
9 - Bojan B, Hobin Rude - Apicem /\xA0
10 - Cosmicat - Can You Feel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"52.6K",fecha:"2023-02-04",link:"https://mcdn.podbean.com/mf/download/debcsi/613-HernanCattaneo-2023-02-04.mp3",tracklist:`Husa & Zeyada - Inside out (16BL & Wild Dark remix) /
El Mundo, Satori, Anatolian Sessions, Danny Shamoun, Qualista - Amida (Satori & El Mundo Remix) /
Will DeKeizer - Route 66 /
David Museen, Erik Christiansen \xA0- Psychologika (Martin Gardoqui & Topo Larocca Remix) /
S.o.U.L. ViBRaTioN, DNCN, Freddy Be - Knock Me Off My Feet (LA RIOTS Remix) /
Juan Sapia - Little Boy /
Noiyse Project - Groove Child /
Bachir Salloum - White Samurai [Balance Music] /
Bojan B, Hobin Rude - Apicem /`},{episodio:"603",titulo:"Resident / Episode 603 / Nov 26 2022",descripcion:`1 - Tim Green- We've been here before /\xA0
2 - Alex O'Rion - Echium (GMJ & Matter Remix) /\xA0
3 - Paul Lennar Ft Alium - Arisen Earlier /\xA0
4 - Enamour - Cause and Affection /\xA0
5 - Eichenbaum, Fede Pals - Instabilis /\xA0
6 - Selsi - Dust (Framewerk Remix) /\xA0
7 - GHEIST - Losing Game /\xA0
8 - Alex O'Rion - The Chase (Roger Martinez Interdimensional Remix) /\xA0
9 - Larrosa & Gardoqui , Lautaro De Agostino - No Way /\xA0
10 - D-Nox & Beckers - Control (The Wash Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"50.5K",fecha:"2022-11-26",link:"https://mcdn.podbean.com/mf/download/2hc7tj/603-HernanCattaneo-2022-11-26.mp3",tracklist:`Tim Green- We've been here before /
Alex O'Rion - Echium (GMJ & Matter Remix) /
Paul Lennar Ft Alium - Arisen Earlier /
Enamour - Cause and Affection /
Eichenbaum, Fede Pals - Instabilis /
Selsi - Dust (Framewerk Remix) /
GHEIST - Losing Game /
Alex O'Rion - The Chase (Roger Martinez Interdimensional Remix) /
Larrosa & Gardoqui , Lautaro De Agostino - No Way /`},{episodio:"593",titulo:"Resident / Episode 593 / Sep 17 2022",descripcion:`1 - Emma Vazquez - Shadowland (Kris Dur Remix) /\xA0
2 - Partenaire - Desiderata /\xA0
3 - Stefan Obermaier - Laya /\xA0
4 - BOg & Diana MIro- Underwater (HC & MV dub mix) /\xA0
5 - Panayiotis Tassis - AN /\xA0
6 - Jaydee - Eyeball /\xA0
7 - MATIRAMIC - Masai (Spencer Brown Rethink) /\xA0
8 - Rez Dorsia - Manet Green (Freedo Mosho Remix) /\xA0
9 - Sam Hopgood - Oceans /\xA0
10 - IDQ - Borderline (KeeQ Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"59.2K",fecha:"2022-09-17",link:"https://mcdn.podbean.com/mf/download/ck7ym4/593-HernanCattaneo-2022-09-17.mp3",tracklist:`Emma Vazquez - Shadowland (Kris Dur Remix) /
Partenaire - Desiderata /
Stefan Obermaier - Laya /
BOg & Diana MIro- Underwater (HC & MV dub mix) /
Panayiotis Tassis - AN /
Jaydee - Eyeball /
MATIRAMIC - Masai (Spencer Brown Rethink) /
Rez Dorsia - Manet Green (Freedo Mosho Remix) /
Sam Hopgood - Oceans /`},{episodio:"583",titulo:"Resident / Episode 583 / Jul 09 2022",descripcion:`1 - Dimuth K & Forerunners \xA0- Exit Reality /\xA0
2 - Kris Dur - Solos /\xA0
3 - Juan Martin (Ar) - Imperius /\xA0
4 - Mayro - Panorama /\xA0
5 - Stephan Bodzin - Ataraxia (Nico Sparvieri, Esteban Romano Unofficial Remix /\xA0
6 - Callecat - Fantasmagoric /\xA0
7 - Scala - Running In Circles /\xA0
8 - Fat Cosmoe, Henri Bergmann, Wennink - Higher Dimension (Jonathan Kaspar Remix) /\xA0
9 - Ric Niels & George Alhabel - Mentalism (Not Demure Remix) /\xA0
10 - Lea Porcelain - Choirs to Heaven (Frank Wiedemann Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"54.1K",fecha:"2022-07-09",link:"https://mcdn.podbean.com/mf/download/r6aceq/583-HernanCattaneo-2022-07-09.mp3",tracklist:`Dimuth K & Forerunners \xA0- Exit Reality /
Kris Dur - Solos /
Juan Martin (Ar) - Imperius /
Mayro - Panorama /
Stephan Bodzin - Ataraxia (Nico Sparvieri, Esteban Romano Unofficial Remix /
Callecat - Fantasmagoric /
Scala - Running In Circles /
Fat Cosmoe, Henri Bergmann, Wennink - Higher Dimension (Jonathan Kaspar Remix) /
Ric Niels & George Alhabel - Mentalism (Not Demure Remix) /`},{episodio:"573",titulo:"Resident / Episode 573 / Apr 30 2022",descripcion:`1 - \xD3lafur Arnalds feat. Arnor Dan - A Stutter (Nico Sparvieri, Esteban Romano Bootleg Mix) /\xA0
2 - Fur Coat, Alfa Romero- Icarus Wings /\xA0
3 - Tao Andra - Sola Fide (Rennie Foster remix) /\xA0
4 - K3V - Kingdom of Dreams (Subandrio Remix) /\xA0
5 - Alex O'Rion - Aperon /\xA0
6 - Paul Angelo, Don Argento - Hyperion /\xA0
7 - Hoten - 29 Summers (D-Nox, Nine One Remix) /\xA0
8 - Nolan - Hang Back ft Manu Dalgo (Lehar Remix) /\xA0
9 - Lexer - Glowing /\xA0
10 - 2up - Devotion (D-Nox Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"53K",fecha:"2022-04-30",link:"https://mcdn.podbean.com/mf/download/5e3pez/573-HernanCattaneo-2022-04-30.mp3",tracklist:`\xD3lafur Arnalds feat. Arnor Dan - A Stutter (Nico Sparvieri, Esteban Romano Bootleg Mix) /
Fur Coat, Alfa Romero- Icarus Wings /
Tao Andra - Sola Fide (Rennie Foster remix) /
K3V - Kingdom of Dreams (Subandrio Remix) /
Alex O'Rion - Aperon /
Paul Angelo, Don Argento - Hyperion /
Hoten - 29 Summers (D-Nox, Nine One Remix) /
Nolan - Hang Back ft Manu Dalgo (Lehar Remix) /
Lexer - Glowing /`},{episodio:"563",titulo:"Resident / Episode 563 / Feb 19 2022",descripcion:`1 - SANDHAUS + Arude & Sincz- Sleepless Nights (Namito Remix) /\xA0
2 - Juan Martin - Solis /\xA0
3 - ANUQRAM - Conjunction /\xA0
4 - Luciano Scheffer - Austral /\xA0
5 - Husa & Zeyada - Piece of Mind (Timo Maas Remix) /\xA0
6 - Forerunners - The Watchers (John Cosani Remix) /\xA0
7 - Steven Weston - Liquid /\xA0
8 - Michael Kiwanuka - Cold Little Heart (Antrim Remix) /\xA0
9 - VONDA7 - High Tide /\xA0
10 - mOat - Paradise (\xC2me Extended Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"55.3K",fecha:"2022-02-19",link:"https://mcdn.podbean.com/mf/download/qgeeh3/563-HernanCattaneo-2022-02-19.mp3",tracklist:`SANDHAUS + Arude & Sincz- Sleepless Nights (Namito Remix) /
Juan Martin - Solis /
ANUQRAM - Conjunction /
Luciano Scheffer - Austral /
Husa & Zeyada - Piece of Mind (Timo Maas Remix) /
Forerunners - The Watchers (John Cosani Remix) /
Steven Weston - Liquid /
Michael Kiwanuka - Cold Little Heart (Antrim Remix) /
VONDA7 - High Tide /`},{episodio:"553",titulo:"Resident / Episode 553 / Dec 11 2021",descripcion:`1 - Kris Dur - Triomatico /\xA0
2 - Alan Schultz - Resolution /\xA0
3 - Fabri Lopez - Maybe /\xA0
4 - Kamilo Sanclemente, Dabeat - Paradisum /\xA0
5 - Mind Against - Reveries /\xA0
6 - Santo Adriano - Good Citizen /\xA0
7 - EANP - Lysithea /\xA0
8 - Evolution feat. Jayn Hanna - Walking On Fire (Nicolas Rada Unofficial Remix) /\xA0
9 - Lucio Gastaldo - Panorama (Nicolas Benedetti Remix) /\xA0
10 - R\xDCF\xDCS DU SOL - I Don\u2019t Wanna Leave (Innellea Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"56.1K",fecha:"2021-12-11",link:"https://mcdn.podbean.com/mf/download/hjutpp/553-HernanCattaneo-2021-12-11.mp3",tracklist:`Kris Dur - Triomatico /
Alan Schultz - Resolution /
Fabri Lopez - Maybe /
Kamilo Sanclemente, Dabeat - Paradisum /
Mind Against - Reveries /
Santo Adriano - Good Citizen /
EANP - Lysithea /
Evolution feat. Jayn Hanna - Walking On Fire (Nicolas Rada Unofficial Remix) /
Lucio Gastaldo - Panorama (Nicolas Benedetti Remix) /`},{episodio:"543",titulo:"Resident / Episode 543 / Oct 02 2021",descripcion:`1 - Kollmorgen - You Are The (Patrice B\xE4umel Mix) /\xA0
2 - Michael Levan and Steven Rivic - \xA0Dallas (Randall Jones FDub Remix) /\xA0
3 - Hoj + Newman - Want To Run Away feat. Amega (Dub Mix) /\xA0
4 - Hoj + Newman - Listening Close feat. Aaron Percy /\xA0
5 - Arnold T & Alain Pauwels - Nexus 8 /\xA0
6 - Dan & Dan - Disfunktional Lover (Abel Meyer remix) /\xA0
7 - Qubica - Organ Juice /\xA0
8 - Skatman - All Is Vanity /\xA0
9 - Stephan Bodzin -Trancoso /\xA0
10 - Rinzen, Enamour - Photon / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"56K",fecha:"2021-10-02",link:"https://mcdn.podbean.com/mf/download/vypuu8/543-HernanCattaneo-2021-10-02.mp3",tracklist:`Kollmorgen - You Are The (Patrice B\xE4umel Mix) /
Michael Levan and Steven Rivic - \xA0Dallas (Randall Jones FDub Remix) /
Hoj + Newman - Want To Run Away feat. Amega (Dub Mix) /
Hoj + Newman - Listening Close feat. Aaron Percy /
Arnold T & Alain Pauwels - Nexus 8 /
Dan & Dan - Disfunktional Lover (Abel Meyer remix) /
Qubica - Organ Juice /
Skatman - All Is Vanity /
Stephan Bodzin -Trancoso /`},{episodio:"544",titulo:"Resident / Episode 544 / Oct 09 2021",descripcion:`1 - Elliot Moriarty - There's Always Light /\xA0
2 - Kamilo Sanclemente - Fable /\xA0
3 - Red Curtain (Amarcord Remix) /\xA0
4 - Tristan Case - Bubble Modulators (Maximo Gambini & Q.A.T Remix) /\xA0
5 - Eelke Kleijn - Woodstock (Mano Le Tough Remix) /\xA0
6 - Ezequiel Arias - Meloman\xEDa /\xA0
7 - Cream - Sandpo (Nicolas Rada Remix) /\xA0
8 - Stephan Bodzin - LLL /\xA0
9 - Sasha Carassi - Shiver (8Kays Remix) /\xA0
10 - Henri Bergmann - Protection (Dodi Palese Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57K",fecha:"2021-10-09",link:"https://mcdn.podbean.com/mf/download/qw5niq/544-HernanCattaneo-2021-10-09.mp3",tracklist:`Elliot Moriarty - There's Always Light /
Kamilo Sanclemente - Fable /
Red Curtain (Amarcord Remix) /
Tristan Case - Bubble Modulators (Maximo Gambini & Q.A.T Remix) /
Eelke Kleijn - Woodstock (Mano Le Tough Remix) /
Ezequiel Arias - Meloman\xEDa /
Cream - Sandpo (Nicolas Rada Remix) /
Stephan Bodzin - LLL /
Sasha Carassi - Shiver (8Kays Remix) /`},{episodio:"533",titulo:"Resident / Episode 533 / Jul 24 2021",descripcion:`1 - Kevin Yair - Unnoficial /\xA0
2 - John Cosani - Bootes (Hicky & Kalo Remix) /\xA0
3 - Rage & Cortazar - Euphoria /\xA0
4 - Spencer Brown - Thanks, Guy /\xA0
5 - Etherwave - Leonids (Subandrio's Reboot Remix) /\xA0
6 - Anton Borin, Bondarev - Samadhi (Kasper Koman Remix) /\xA0
7 - CANCCI - Daylight (Rick Pier O'Neil Remix) /\xA0
8 - Fur Coat - Ephemera /\xA0
9 - Fathomz - Fortitude /\xA0
10 - Jeremy Olander - Sagan / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"56.5K",fecha:"2021-07-24",link:"https://mcdn.podbean.com/mf/download/ekbq2i/533-HernanCattaneo-2021-07-24.mp3",tracklist:`Kevin Yair - Unnoficial /
John Cosani - Bootes (Hicky & Kalo Remix) /
Rage & Cortazar - Euphoria /
Spencer Brown - Thanks, Guy /
Etherwave - Leonids (Subandrio's Reboot Remix) /
Anton Borin, Bondarev - Samadhi (Kasper Koman Remix) /
CANCCI - Daylight (Rick Pier O'Neil Remix) /
Fur Coat - Ephemera /
Fathomz - Fortitude /`},{episodio:"523",titulo:"Resident / Episode 523 / May 15 2021",descripcion:`1 - Gadi Mitrani - Out Of Time (Vincenzo Remix) /\xA0
2 - Anton MAKe - Arepo (John Cosani Remix) /\xA0
3 - Dark Soul Project - Indigo /\xA0
4 - Fideles - Awe /\xA0
5 - Raphael Mader - X-ray /\xA0
6 - Rashid Ajami - You Dont Know Me /\xA0
7 - Diamond Mouth - Stare At Me (Frankey & Sandrino Remix) /\xA0
8 - FOLGAR - Lost in Time (Main Dub) /\xA0
9 - AMPISH - Solitude /\xA0
10 - Oona Dahl feat. Kirsty Hawkshaw - Serenity / Download episode on MP3 (Right click, save link as...)`,likes:"14",descargas:"48.5K",fecha:"2021-05-15",link:"https://mcdn.podbean.com/mf/download/r2uzqq/523-HernanCattaneo-2021-05-15.mp3",tracklist:`Gadi Mitrani - Out Of Time (Vincenzo Remix) /
Anton MAKe - Arepo (John Cosani Remix) /
Dark Soul Project - Indigo /
Fideles - Awe /
Raphael Mader - X-ray /
Rashid Ajami - You Dont Know Me /
Diamond Mouth - Stare At Me (Frankey & Sandrino Remix) /
FOLGAR - Lost in Time (Main Dub) /
AMPISH - Solitude /`},{episodio:"513",titulo:"Resident / Episode 513 / Mar 06 2021",descripcion:`1 - Radiohead - Street Spirit (Fran Bux Unofficial Remix) /\xA0
2 - Dynacom & Bodai - What Makes You Strong /\xA0
3 - Innerphonic - Line Of Dream (Dj Bird Remix) /\xA0
4 - Booka Shade - Pray (Monkey Safari Remix) /\xA0
5 - Luciano Scheffer - Saudade /\xA0
6 - Micah ft. Kiki Cave - Evening Winds /\xA0
7 - Mariano Mellino Feat Paula Os - Misery (Baunder & Folgar Remix) /\xA0
8 - Colyn ft. Maurits Colijn - Bridges In The Sky /\xA0
9 - SatoshiFumi - Regalecus /\xA0
10 - Tee Mango - You are the sun(Sun Down Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"46.5K",fecha:"2021-03-06",link:"https://mcdn.podbean.com/mf/download/tujmz3/513-HernanCattaneo-2021-03-06.mp3",tracklist:`Radiohead - Street Spirit (Fran Bux Unofficial Remix) /
Dynacom & Bodai - What Makes You Strong /
Innerphonic - Line Of Dream (Dj Bird Remix) /
Booka Shade - Pray (Monkey Safari Remix) /
Luciano Scheffer - Saudade /
Micah ft. Kiki Cave - Evening Winds /
Mariano Mellino Feat Paula Os - Misery (Baunder & Folgar Remix) /
Colyn ft. Maurits Colijn - Bridges In The Sky /
SatoshiFumi - Regalecus /`},{episodio:"503",titulo:"Resident / Episode 503 / Dec 26 2020",descripcion:`1 - Gadi Mitrani, Megan Morrison - Searching (Urmet K Dub Mix) /
2 - Lio Q, Anhauser, Nicolas Leonelli - Sands of Time (East Cafe Remix) /
3 - New Order - Crystal (Diego Berrondo Unofficial Remix) /
4 - Framewerk - Metropolis /
5 - Framewerk - Together (We Are Unified) /
6 - Marsh feat. Mimi Page - Foss /
7 - Jamie Stevens - Soul Anchor /
8 - Aves Volare, Jamie Stevens - Freedom to the Sky /
9 - Diego Poblets - Planeta /
10 - Fabri Lopez - Rosario Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.1K",fecha:"2020-12-26",link:"https://mcdn.podbean.com/mf/download/wayk98/503-HernanCattaneo-2020-12-26.mp3",tracklist:`Gadi Mitrani, Megan Morrison - Searching (Urmet K Dub Mix) /
Lio Q, Anhauser, Nicolas Leonelli - Sands of Time (East Cafe Remix) /
New Order - Crystal (Diego Berrondo Unofficial Remix) /
Framewerk - Metropolis /
Framewerk - Together (We Are Unified) /
Marsh feat. Mimi Page - Foss /
Jamie Stevens - Soul Anchor /
Aves Volare, Jamie Stevens - Freedom to the Sky /
Diego Poblets - Planeta /`},{episodio:"493",titulo:"Resident / Episode 493 / Oct 17 2020",descripcion:`1 - Damian Lazarus & Jem Cooke - Into The Sun (Nathan Fake Remix) /\xA0
2 - Blindsmyth - Gryllidae (Shayde Remix) /\xA0
3 - Matthias Meyer, Xinobi - Lacuna (Facundo Mohrr Remix) /\xA0
4 - Sascha Braemer - Analog Garden /\xA0
5 - Nina Schatz - Spirale /\xA0
6 - Dee Montero - Aria (Newman (I Love) remix) /\xA0
7 - Yashar - Colleda (Mauro Augugliaro Deconstructive Mix) /\xA0
8 - Kamakura ENV - Say /\xA0
9 - Satoshi Fumi - Forester /\xA0
10 - Moby - Morningside (Expansive Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"37K",fecha:"2020-10-17",link:"https://mcdn.podbean.com/mf/download/ssrrfd/493-HernanCattaneo-2020-10-17.mp3",tracklist:`Damian Lazarus & Jem Cooke - Into The Sun (Nathan Fake Remix) /
Blindsmyth - Gryllidae (Shayde Remix) /
Matthias Meyer, Xinobi - Lacuna (Facundo Mohrr Remix) /
Sascha Braemer - Analog Garden /
Nina Schatz - Spirale /
Dee Montero - Aria (Newman (I Love) remix) /
Yashar - Colleda (Mauro Augugliaro Deconstructive Mix) /
Kamakura ENV - Say /
Satoshi Fumi - Forester /`},{episodio:"483",titulo:"Resident / Episode 483 / Aug 08 2020",descripcion:`1 - Muchak - Air / 
2 - Santi Cebrero, Chapa & Castelo - Hilaridad (DSF Remix) / 
3 - Cassian - Imagination (Yotto Extended Remix) / 
4 - Don Patrick Lucid / 
5 - Tim Engelhardt - Rooted / 
6 - Golan Zocher, Eric Lune - North to South (Michael A Remix) / 
7 - Cream (PL) - Illusion / 
8 - Nicol\xE1s Irazoqui - Wolf Code / 
9 - Ewan Rill - Cute Beast (Weird Sounding Dude Remix) / 
10 - Rodriguez Jr - Monolith garden (Steve Bug Remix / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"36.9K",fecha:"2020-08-08",link:"https://mcdn.podbean.com/mf/download/a5ndhn/483-HernanCattaneo-2020-08-08.mp3",tracklist:`Muchak - Air /
Santi Cebrero, Chapa & Castelo - Hilaridad (DSF Remix) /
Cassian - Imagination (Yotto Extended Remix) /
Don Patrick Lucid /
Tim Engelhardt - Rooted /
Golan Zocher, Eric Lune - North to South (Michael A Remix) /
Cream (PL) - Illusion /
Nicol\xE1s Irazoqui - Wolf Code /
Ewan Rill - Cute Beast (Weird Sounding Dude Remix) /`},{episodio:"473",titulo:"Resident / Episode 473 / May 30 2020",descripcion:`1 - Henry Saiz - Iridescent / 
2 - Julio Largente - No sense of time / 
3 - Federico Puentes - Far Beyond the Sun / 
4 - Nila - Brute Force / 
5 - Berni Turletti & Forerunners - Mediator / 
6 - Depeche Mode - My Little Universe (Kevin Di Serna Blue Illusion' Mix) / 
7 - Ezequiel Arias, & Artfaq - Duality / 
8 - Nila - Essential Elements / 
9 - Juan Maclean - Bufomania / 
10 - Soma Soul - Breaking Dawn (BOg Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.7K",fecha:"2020-05-30",link:"https://mcdn.podbean.com/mf/download/7wvv88/473-HernanCattaneo-2020-05-30.mp3",tracklist:`Henry Saiz - Iridescent /
Julio Largente - No sense of time /
Federico Puentes - Far Beyond the Sun /
Nila - Brute Force /
Berni Turletti & Forerunners - Mediator /
Depeche Mode - My Little Universe (Kevin Di Serna Blue Illusion' Mix) /
Ezequiel Arias, & Artfaq - Duality /
Nila - Essential Elements /
Juan Maclean - Bufomania /`},{episodio:"464",titulo:"Resident / Episode 464 / Mar 28 2020",descripcion:`1 - Jody Wisternoff & James Grant - Nightwhisper / 
2 - Opals - Andhim / 
3 - Solomun - Rotweinfleck / 
4 - Henrik Schwarz - Omnibus / 
5 - Pedro Capelossi - Montjuic (Missus Remix) /\xA0
6 - She\u2019s in heaven (Marco Tegui & Danny Faber Remix) / 
7 - Fabri Lopez - There For The Winter / 
8 - Cubicolor - Wake Up (Dark Soul Project Remix) / 
9 - Spalamp - Into The Dark (Hannes Bieger Remix) / 
10 - Julian Nates - Wild SIde (Analog Jungs Remix) Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"35.3K",fecha:"2020-03-28",link:"https://mcdn.podbean.com/mf/download/rifqwz/464-HernanCattaneo-2020-03-28.mp3",tracklist:`Jody Wisternoff & James Grant - Nightwhisper /
Opals - Andhim /
Solomun - Rotweinfleck /
Henrik Schwarz - Omnibus /
Pedro Capelossi - Montjuic (Missus Remix) /
She\u2019s in heaven (Marco Tegui & Danny Faber Remix) /
Fabri Lopez - There For The Winter /
Cubicolor - Wake Up (Dark Soul Project Remix) /
Spalamp - Into The Dark (Hannes Bieger Remix) /`},{episodio:"455",titulo:"Resident / Episode 455 / Jan 25 2020",descripcion:"Live at Woodstock 69 part 5 Download episode on MP3 (Right click, save link as...)",likes:"42",descargas:"58.7K",fecha:"2020-01-25",link:"https://mcdn.podbean.com/mf/download/cmxfhb/455-HernanCattaneo-2020-01-25.mp3"},{episodio:"445",titulo:"Resident / Episode 445 / Nov 16 2019",descripcion:`1 - Underworld - Toluca Stars (Vanuan Unofficial Remix) / 
2 - Lanvary - Sakura / 
3 - Hasith - Birds of Paradise / 
4 - Federico Monachesi - Panharmonikon / 
5 - Woodland - Oracle / 
6 - Maximo Boskis - Sanerg\xEDa / 
7 - Kamilo Sanclemente, Giovanny Aparicio feat Velve - Forgiven / 
8 - Hasith & Juan Sapia - Orange Tree / 
9 - Dhany G - The Past Behind Your Back / 
10 - Angeleri , Gardoqui & Larrosa - Middles / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"53.5K",fecha:"2019-11-16",link:"https://mcdn.podbean.com/mf/download/ytn8n4/445-HernanCattaneo-2019-11-16.mp3",tracklist:`Underworld - Toluca Stars (Vanuan Unofficial Remix) /
Lanvary - Sakura /
Hasith - Birds of Paradise /
Federico Monachesi - Panharmonikon /
Woodland - Oracle /
Maximo Boskis - Sanerg\xEDa /
Kamilo Sanclemente, Giovanny Aparicio feat Velve - Forgiven /
Hasith & Juan Sapia - Orange Tree /
Dhany G - The Past Behind Your Back /`},{episodio:"435",titulo:"Resident / Episode 435 / Sep 07 2019",descripcion:`1 - Savvas - Falling Into (Gadi Mitrani Remix) / 
2 - Espen, Max Margolin - Until Tomorrow (K Nass Remix) / 
3 - Matter, Dimuth K - Road to Stanton Moor / 
4 - Emiliano Manzano - Primula / 
5 - Fairmont - Agony and Exstacy / 
6 - AFFKT - Yourself feat. Butterjack / 
7 - Tom Zeta - Catharsis / 
8 - Tomas Tejeda - Reborn (Mir Omar Remix) / 
9 - Hermanez & Eran Aviner - Third One / 
10 - Fideles - The Last Glow / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"39K",fecha:"2019-09-07",link:"https://mcdn.podbean.com/mf/download/q7gbit/435-HernanCattaneo-2019-09-07.mp3",tracklist:`Savvas - Falling Into (Gadi Mitrani Remix) /
Espen, Max Margolin - Until Tomorrow (K Nass Remix) /
Matter, Dimuth K - Road to Stanton Moor /
Emiliano Manzano - Primula /
Fairmont - Agony and Exstacy /
AFFKT - Yourself feat. Butterjack /
Tom Zeta - Catharsis /
Tomas Tejeda - Reborn (Mir Omar Remix) /
Hermanez & Eran Aviner - Third One /`},{episodio:"425",titulo:"Resident / Episode 425 / Jun 29 2019",descripcion:`1 - Chapa Ruiz - Sunday / 
2 - Martijn ten Velden - A New Beginning / 
3 - Gai Barone - When The Swallows Come Back Home (Quivver Remix) / 
4 - Eli Nissan - Arpu / 
5 - Juan Deminicis - Disorder (Andrea Cassino Remix) / 
6 - Partenaire - R\xEAve (Armandhe Remix) / 
7 - Russlan Jaafreh - Hanguk (Fabri Lopez Remix) / 
8 - EarthLife - Color Of Birds / 
9 - Bontan feat. Bengle - 10 Days / 
10 - Speaking In Tongues - Eraser / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"40K",fecha:"2019-06-29",link:"https://mcdn.podbean.com/mf/download/rc443a/425-HernanCattaneo-2019-06-29.mp3",tracklist:`Chapa Ruiz - Sunday /
Martijn ten Velden - A New Beginning /
Gai Barone - When The Swallows Come Back Home (Quivver Remix) /
Eli Nissan - Arpu /
Juan Deminicis - Disorder (Andrea Cassino Remix) /
Partenaire - R\xEAve (Armandhe Remix) /
Russlan Jaafreh - Hanguk (Fabri Lopez Remix) /
EarthLife - Color Of Birds /
Bontan feat. Bengle - 10 Days /`},{episodio:"415",titulo:"Resident / Episode 415 / Apr 20 2019",descripcion:`1 - Paula OS - Pearl (Powel Remix) / 
2 - Modd - Ruskeala / 
3 - Davide Ferrario - Model (Bengal Remix) / 
4 - Davide Ferrario - Jewel Ice / 
5 - Nhar - Appel Lointain / 
6 - Applescal -Baunder edit / 
7 - Roy Rosenfeld - The Struggle / 
8 - Gvozdini - Pasadena (East Cafe Remix) / 
9 - Gvozdini - Pasadena (Subandrio Remix) / 
10 - Golan Zocher Feat Mila Egred - Shush (Alex O'Rion Deep Dub Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"36.5K",fecha:"2019-04-20",link:"https://mcdn.podbean.com/mf/download/5em46i/415-HernanCattaneo-2019-04-20.mp3",tracklist:`Paula OS - Pearl (Powel Remix) /
Modd - Ruskeala /
Davide Ferrario - Model (Bengal Remix) /
Davide Ferrario - Jewel Ice /
Nhar - Appel Lointain /
Applescal -Baunder edit /
Roy Rosenfeld - The Struggle /
Gvozdini - Pasadena (East Cafe Remix) /
Gvozdini - Pasadena (Subandrio Remix) /`},{episodio:"405",titulo:"Resident / Episode 405 / Feb 09 2019",descripcion:`1 - Ferher - Unity (Erdi Irmak X Noom Reinterpretation) / 
2 - Daniel Rateuke - Abangane / 
3 - After burn - We go first (Dark Soul Project Pres Anatolian Remix) / 
4 - Mulya & Sobek - Upfront venture / 
5 - Y\xF6urr - Cassius / 
6 - Chris Cargo - SBD remix / 
7 - Mike Griego - Rocket 91 / 
8 - JP Lantieri - Onesterdam (RIGOONI Remix) / 
9 - Andre Sobota - Fast Forward (Tripswitch Remix) / 
10 - Stereo Underground feat. Sealine - Flashes (D-Nox & Beckers Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"38.2K",fecha:"2019-02-09",link:"https://mcdn.podbean.com/mf/download/fik3cp/405-HernanCattaneo-2019-02-09.mp3",tracklist:`Ferher - Unity (Erdi Irmak X Noom Reinterpretation) /
Daniel Rateuke - Abangane /
After burn - We go first (Dark Soul Project Pres Anatolian Remix) /
Mulya & Sobek - Upfront venture /
Y\xF6urr - Cassius /
Chris Cargo - SBD remix /
Mike Griego - Rocket 91 /
JP Lantieri - Onesterdam (RIGOONI Remix) /
Andre Sobota - Fast Forward (Tripswitch Remix) /`},{episodio:"406",titulo:"Resident / Episode 406 / Feb 16 2019",descripcion:`1 - Innellea - Impurity
2 - Matias Vila - Ahora (Eran Aviner & Hermanez Remix) / 
3 - Muhammed felfel - The Eye of Truth (RPO Remix) / 
4 - Stage Van H - Brand New Day (Emi Galvan Remix) / 
5 - After Burn - Apocalliptic love / 
6 - Scippo - Wave / 
7 - Antrim feat. Sarah Chilanti - Until The End / 
8 - Oliver Lieb Presents Smoked - Metro (Fabrizio Spachuk Bootleg Mix) / 
9 - Constantijn Lange, Tim Engelhardt - Synced / 
10 - Phonique Feat. Erlend Oye - For The Time Being (Gardoqui Larrosa & Puccio Pres. Through Noise Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"55",descargas:"39.7K",fecha:"2019-02-16",link:"https://mcdn.podbean.com/mf/download/5a2bn8/406-HernanCattaneo-2019-02-16.mp3",tracklist:`Innellea - Impurity
Matias Vila - Ahora (Eran Aviner & Hermanez Remix) /
Muhammed felfel - The Eye of Truth (RPO Remix) /
Stage Van H - Brand New Day (Emi Galvan Remix) /
After Burn - Apocalliptic love /
Scippo - Wave /
Antrim feat. Sarah Chilanti - Until The End /
Oliver Lieb Presents Smoked - Metro (Fabrizio Spachuk Bootleg Mix) /
Constantijn Lange, Tim Engelhardt - Synced /`},{episodio:"395",titulo:"Resident / Episode 395 / Dec 01 2018",descripcion:`Colle - Limerence / 
DSF - Sandal / 
Budakid feat. Westseven - Quixotic / 
P&F - Re-Rendered / 
A-Jay (SL) - Nebula / 
Subandrioo - Reevolve / 
Themba - Better Days / 
Sobek - Stoned Romance / 
Hasith - Silk Road (Julian Rodriguez & Nico Cerban Remix) / 
Budakid ft. Sterioa - Anesthesia / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"37.4K",fecha:"2018-12-01",link:"https://mcdn.podbean.com/mf/download/eykgmv/395-HernanCattaneo-2018-12-01.mp3",tracklist:`Colle - Limerence /
DSF - Sandal /
Budakid feat. Westseven - Quixotic /
P&F - Re-Rendered /
A-Jay (SL) - Nebula /
Subandrioo - Reevolve /
Themba - Better Days /
Sobek - Stoned Romance /
Hasith - Silk Road (Julian Rodriguez & Nico Cerban Remix) /`},{episodio:"385",titulo:"Resident / Episode 385 / Sep 22 2018",descripcion:`Terranova, Sifa, Ivory - Let it fall / 
Matter & GMJ - To the Stars / 
Jonas Saalbach & Yuven - Semaphore / 
Kay-D - Heads Above (East Cafe Remix) / 
Dmitry Molosh - Only U / 
GMJ & RPO - Immersion / 
Eli Nissan - Reloded / 
Evegrem - Athrak (Billy Alex Northern Remix) / 
AxeLara - Anestesy (Gardoqui Larrosa Dezus Remix) / 
Dmitry Molosh - Sacra / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.5K",fecha:"2018-09-22",link:"https://mcdn.podbean.com/mf/download/x3hdsy/385-HernanCattaneo-2018-09-22.mp3",tracklist:`Terranova, Sifa, Ivory - Let it fall /
Matter & GMJ - To the Stars /
Jonas Saalbach & Yuven - Semaphore /
Kay-D - Heads Above (East Cafe Remix) /
Dmitry Molosh - Only U /
GMJ & RPO - Immersion /
Eli Nissan - Reloded /
Evegrem - Athrak (Billy Alex Northern Remix) /
AxeLara - Anestesy (Gardoqui Larrosa Dezus Remix) /`},{episodio:"375",titulo:"Resident / Episode 375 / Jul 14 2018",descripcion:`Armen Miran - Reborn [Dave Pad's Reborn Sunset Mix] / 
DJ KOZE - Planet Hase (feat. Mano Le Tough) / 
Martin Gardoqui & Niceshot - Deep Ride / 
Gadi Mitrani - Mirror room / 
Mario Puccio - Aura (Diego Berrondo Remix) / 
Nobilis - Asynchronicus (Fabri Lopez Remix) / 
Ben Archbold - Dark Rush (Nomad in the Dark Remix) / 
Nick Warren & Nicholas Rada - The Land Of Dreams / 
Ewan Rill - Vessel of Water / 
Nick Muir - Saving Me (Marcelo Vasami Rework) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"35.9K",fecha:"2018-07-14",link:"https://mcdn.podbean.com/mf/download/h6ameq/375-HernanCattaneo-2018-07-14.mp3",tracklist:`Armen Miran - Reborn [Dave Pad's Reborn Sunset Mix] /
DJ KOZE - Planet Hase (feat. Mano Le Tough) /
Martin Gardoqui & Niceshot - Deep Ride /
Gadi Mitrani - Mirror room /
Mario Puccio - Aura (Diego Berrondo Remix) /
Nobilis - Asynchronicus (Fabri Lopez Remix) /
Ben Archbold - Dark Rush (Nomad in the Dark Remix) /
Nick Warren & Nicholas Rada - The Land Of Dreams /
Ewan Rill - Vessel of Water /`},{episodio:"365",titulo:"Resident / Episode 365 / May 05 2018",descripcion:`Bjork - Mutual Core (Nicolas Rada Remix) / 
Temporarily Unknown - Blue Smoke (Francisco Garcia Devrient Remix) / 
Rick Pier O'Neil - Landscape (Lucas Rossi Remix) / 
Anton Make & Shamil OM - Omnibus (Subandrio Remix) / 
Agnes Obel - Familiar (Federico Monachesi Bootleg) / 
Paul Angelo & Don Argento - Fountain of Youth / 
Kamilo Sanclemente - Secret Garden / 
Memory & Ezequiel Arias - Jade / 
Undo - Disconnect (Zombies In Miami Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"56",descargas:"45.2K",fecha:"2018-05-05",link:"https://mcdn.podbean.com/mf/download/9anu98/365-HernanCattaneo-2018-05-05.mp3",tracklist:`Bjork - Mutual Core (Nicolas Rada Remix) /
Temporarily Unknown - Blue Smoke (Francisco Garcia Devrient Remix) /
Rick Pier O'Neil - Landscape (Lucas Rossi Remix) /
Anton Make & Shamil OM - Omnibus (Subandrio Remix) /
Agnes Obel - Familiar (Federico Monachesi Bootleg) /
Paul Angelo & Don Argento - Fountain of Youth /
Kamilo Sanclemente - Secret Garden /
Memory & Ezequiel Arias - Jade /`},{episodio:"355",titulo:"Resident / Episode 355 / Feb 24 2018",descripcion:`The Antelope - Sleepchamber / 
Marcus Worgull - Skango / 
Roy Rosenfeld - Gutfeelin / 
Freedo Mosho - Back To The Woods (Luis Junior Remix) / 
Moshic - Dragon beard / 
Speaking Minds & Amarcord - Hit me / 
Masumerci - Kamakura / 
Jono Ma, Dreems-A Love Trance Mission From Nk To 7s / 
Kymatik - The Ultimate Answer (Martin Roth Ultraviolet Remix) / 
Martin Roth - Hypno / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"33.4K",fecha:"2018-02-24",link:"https://mcdn.podbean.com/mf/download/y9nhpt/355-HernanCattaneo-2018-02-24.mp3",tracklist:`The Antelope - Sleepchamber /
Marcus Worgull - Skango /
Roy Rosenfeld - Gutfeelin /
Freedo Mosho - Back To The Woods (Luis Junior Remix) /
Moshic - Dragon beard /
Speaking Minds & Amarcord - Hit me /
Masumerci - Kamakura /
Jono Ma, Dreems-A Love Trance Mission From Nk To 7s /
Kymatik - The Ultimate Answer (Martin Roth Ultraviolet Remix) /`},{episodio:"345",titulo:"Resident / Episode 345 / Dec 16 2017",descripcion:`Juan Sapia - Mother's Eyes / 
Andres W - Blisstering Ideas (Analog Jungs Remix) / 
Antrim & Luis Bondio - Us And Them (Sugarfreeq Remix) / 
Dance Spirit feat. Fab Morvan - Voices / 
Emerson, Digweed & Muir - Fanfare (Victoria Rodriguez Remix) / 
Diego Berrondo - Maria Elena / 
Zone+ & Bachir Salloum - Aurora (Pablo Bolivar Remake) / 
Ri Za - Alpaca (Anatolian Instrumental Remix) / 
EANP - Negev / 
Nicole Moudaber & Carl Cox - See You Next Tuesday (Danny Tenaglia's Return To Twilo Mix) Download episode on MP3 (Right click, save link as...)`,likes:"11",descargas:"34K",fecha:"2017-12-16",link:"https://mcdn.podbean.com/mf/download/64fft3/345-HernanCattaneo-2017-12-16.mp3",tracklist:`Juan Sapia - Mother's Eyes /
Andres W - Blisstering Ideas (Analog Jungs Remix) /
Antrim & Luis Bondio - Us And Them (Sugarfreeq Remix) /
Dance Spirit feat. Fab Morvan - Voices /
Emerson, Digweed & Muir - Fanfare (Victoria Rodriguez Remix) /
Diego Berrondo - Maria Elena /
Zone+ & Bachir Salloum - Aurora (Pablo Bolivar Remake) /
Ri Za - Alpaca (Anatolian Instrumental Remix) /
EANP - Negev /`},{episodio:"335",titulo:"Resident / Episode 335 / Oct 07 2017",descripcion:`Modd - Mohican / 
MUUI - Ale / 
Dark Architects & Stage Van H - Cosmology (Dimuth K Remix) / 
Uccelli - Humedad / 
Nahuel Lucena - Bloody Mary / 
Magitman - Recovery (East Cafe Remix) / 
Code - Condor / 
M\xF8nje - Behind The Cracks / 
Berni Turletti - To Feel In The Distance / 
Niko Christo & Synas - Melaina (ft. Orson Welles) / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"32.2K",fecha:"2017-10-07",link:"https://mcdn.podbean.com/mf/download/nypabs/335-HernanCattaneo-2017-10-07.mp3",tracklist:`Modd - Mohican /
MUUI - Ale /
Dark Architects & Stage Van H - Cosmology (Dimuth K Remix) /
Uccelli - Humedad /
Nahuel Lucena - Bloody Mary /
Magitman - Recovery (East Cafe Remix) /
Code - Condor /
M\xF8nje - Behind The Cracks /
Berni Turletti - To Feel In The Distance /`},{episodio:"325",titulo:"Resident / Episode 325 / Jul 29 2017",descripcion:`Claudio Cornejo - Andromeda / 
Robert R. Hardy - Desired / 
Goran Bregovic - Ederlezi (George Yammine Unofficial Remix) / 
Subconscious Tales - Colibri / 
Antrim - I Hear The Distance / 
Namatijra - Five O'Clock Shadow / 
Boris Brejcha - Lost Memory ( Anton Make unofficial remix) / 
Sentre - Sunshine ( Sentre Club Mix ) / 
Petar Dundov & Henry Saiz - Infinite promises / 
Marvin & Guy - The Train of Fantastic feat. Fantastic Twins (Original Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"33.9K",fecha:"2017-07-29",link:"https://mcdn.podbean.com/mf/download/kvvdqj/325-HernanCattaneo-2017-07-29.mp3",tracklist:`Claudio Cornejo - Andromeda /
Robert R. Hardy - Desired /
Goran Bregovic - Ederlezi (George Yammine Unofficial Remix) /
Subconscious Tales - Colibri /
Antrim - I Hear The Distance /
Namatijra - Five O'Clock Shadow /
Boris Brejcha - Lost Memory ( Anton Make unofficial remix) /
Sentre - Sunshine ( Sentre Club Mix ) /
Petar Dundov & Henry Saiz - Infinite promises /`},{episodio:"315",titulo:"Resident / Episode 315 / May 20 2017",descripcion:`Michael A - Inner Voices / 
Diego Berrondo - Conversation / 
Pete K - Perseu / 
Matter - Seed (Lanvary Remix) / 
Paul Deep - Winter Solstice / 
Antrim & Analog Jungs - Konephoros (Robert R. Hardy Remix) / 
Ezequiel Arias - No Paranoia / 
Universal Principles - Flyin' High (Scuba's Illicit Surveillance Mix) / 
Matan Caspi - Paranara (Kastis Torrau Remix) / 
Oliver Schories - Steady State (Dale Middleton Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.1K",fecha:"2017-05-20",link:"https://mcdn.podbean.com/mf/download/5hw6wx/315-HernanCattaneo-2017-05-20.mp3",tracklist:`Michael A - Inner Voices /
Diego Berrondo - Conversation /
Pete K - Perseu /
Matter - Seed (Lanvary Remix) /
Paul Deep - Winter Solstice /
Antrim & Analog Jungs - Konephoros (Robert R. Hardy Remix) /
Ezequiel Arias - No Paranoia /
Universal Principles - Flyin' High (Scuba's Illicit Surveillance Mix) /
Matan Caspi - Paranara (Kastis Torrau Remix) /`},{episodio:"305",titulo:"Resident / Episode 305 / Mar 11 2017",descripcion:`Bjork - Moon (Deep Within Bootleg)
Baunder - False Awakenings
Valeron - Guzin
Dr. Alfred & Iokhonda - Ceres (Michael A Remix)
Rick Pier O'Neil - Just happened
Robert Hardy - Perception (Santo Adriano Remix)
Zukiwave - Higgs Particles
Da Luca - Chiron (Marcelo Vasami Remix)
Khen - Baby Steps
Marc Marzenit - The Imaginary Trip To Hawaii (Dosem Remix) Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"34.8K",fecha:"2017-03-11",link:"https://mcdn.podbean.com/mf/download/qs5wyv/305-HernanCattaneo-2017-03-11.mp3",tracklist:`Bjork - Moon (Deep Within Bootleg)
Baunder - False Awakenings
Valeron - Guzin
Dr. Alfred & Iokhonda - Ceres (Michael A Remix)
Rick Pier O'Neil - Just happened
Robert Hardy - Perception (Santo Adriano Remix)
Zukiwave - Higgs Particles
Da Luca - Chiron (Marcelo Vasami Remix)
Khen - Baby Steps`},{episodio:"295",titulo:"Resident / Episode 295 / Dec 31 2016",descripcion:`Part 1 Tracklist Cazap & Boskis, Esteban Abramovich - Sahara's journey
AudioStorm - Karma
Utopia - Utopia (GMJ & Matter Remix)
Ankytrixx - Maxima Part 2 Tracklist Fernando Olaya - I've Lost My Dragon (Arturo Hevia 'Looking For The Dragon')
Reinier Zonneveld - Plastic people
THe WHite SHadow (FR) - Goodbye {PHCK Edition}
Subconscious Tales - Aura Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.1K",fecha:"2016-12-31",link:"https://mcdn.podbean.com/mf/download/gwtfx7/295-HernanCattaneo-2016-12-31.mp3",tracklist:`Part 1 Cazap & Boskis, Esteban Abramovich - Sahara's journey
AudioStorm - Karma
Utopia - Utopia (GMJ & Matter Remix)
Ankytrixx - Maxima Part 2 Fernando Olaya - I've Lost My Dragon (Arturo Hevia 'Looking For The Dragon')
Reinier Zonneveld - Plastic people
THe WHite SHadow (FR) - Goodbye {PHCK Edition}`},{episodio:"285",titulo:"Resident / Episode 285 / Oct 22 2016",descripcion:"Part 1 Tracklist Paul Deep & Martin Gardoqui - Hairless Groovy Alberto Blanco & Marcelo Paladini - Nightmares (Beat Syndrome Remix) Marcelo Paladini - The Blind Facundo Mohrr, Valdovinos - Faun Part 2 Tracklist DYA - Do it East Cafe - Under Our Shady Tree Tim Engelhardt, Leonard Bywa - Chymera Oxia - Secret BOg - Hacienda Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"30.7K",fecha:"2016-10-22",link:"https://mcdn.podbean.com/mf/download/u3juqq/285-HernanCattaneo-2016-10-22.mp3"},{episodio:"235",titulo:"Resident / Episode 235 / Nov 07 2015",descripcion:"Part 1 Tracklist Doves - Last Broadcast [Ryan Luciano & Cabellero's Unofficial Remix) Ariel AB - Melodias Ocultas (Li-Polymer Remix) E nissan - Hope temp Mosaic - In an empty glass Part 2 Tracklist Ozgur Ozkan - Alone 'with you\u2019 Juan Astudillo - Alfa & Giulietta Fernando Picon - Life (Diego Berrondo Remix) Michael Gin - Indepth Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:null,fecha:"2015-11-07",link:"http://hernancattaneo.podbean.com/mf/web/jk9t6v/235-HernanCattaneo-2015-11-07.mp3"},{episodio:"275",titulo:"Resident / Episode 275 / Aug 13 2016",descripcion:"Part 1 Tracklist Goraieb - Ayer se Fue Jean Michel Jarre & Rone - The Heart Of Noise (Paul Deep & Martin Gardoqui Remix) Moderat - Running (Tale Of Us Remix) Secret Cinema - Poolside (Original) Part 2 Tracklist Nissim Gavriel & Simos Tagias - Disclosure Nissan Lee - Skinner Box Kay D - Pulsar Monkey Safary - Boris (Guy Mantzur rmx) Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"28.3K",fecha:"2016-08-13",link:"https://mcdn.podbean.com/mf/download/6c2mmy/275-HernanCattaneo-2016-08-13.mp3"},{episodio:"234",titulo:"Resident / Episode 234 / Oct 31 2015",descripcion:"Part 1 Tracklist Charlie Pec - Bhakti Cristian R - Bamboo Forest Interaxxis - Sadness City Federico Monachesi - Sephdar Kamilo Sanclemente & Juan Pablo Torrez - Arisen Part 2 Tracklist Fractal Architect - Conditioned Verche - Mad World Taz Michail - Groove Hugs by Warriors Progress Inn - Veterans (Dmitry Molosh Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:null,fecha:"2015-10-31",link:"http://hernancattaneo.podbean.com/mf/web/tnpwqi/234-HernanCattaneo-2015-10-31.mp3"},{episodio:"232",titulo:"Resident / Episode 232 / Oct 17 2015",descripcion:"Part 1 Tracklist AudioStorm - Monumental Architecture Khen - Pollen Spreader Rick Pier Oneil & Chris Gavin - Another World Dmitry Molosh - Pharaoh Travis MacDonald - Afterwards Part 2 Tracklist Andrea Cassino - De Los Alpes A Los Andes (Pole Folder Remix) Slacker - See The World (Criss Deeper 1.5 Remix) Kasall & Cristian R And Sonic Union - Eden Digweed & Muir - Track For Life (Argy Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:null,fecha:"2015-10-17",link:"http://hernancattaneo.podbean.com/mf/web/mu3ceb/232-HernanCattaneo-2015-10-17.mp3"},{episodio:"265",titulo:"Resident / Episode 265 / Jun 04 2016",descripcion:"Part 1 Tracklist Gerardo Moro - When Philip Chedid - Bayti (Golan Zocher Remix) Dark Soul Project & Lavigne Feat Pau Os - Berlin Sigur Ros - Svefn G Englar (Mariano Mellino Back To Roots Edit) Part 2 Tracklist Underground Ticket - Sin City (N'Pot Remix) Claude VonStroke - Who's Afraid Of Detroit (Visionquest Remix) Tiefstone - Odin Eagles & Butterfiles - Comet My Favorite Robot - Garden Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"31.6K",fecha:"2016-06-04",link:"https://mcdn.podbean.com/mf/download/9t2jme/265-HernanCattaneo-2016-06-04.mp3"},{episodio:"255",titulo:"Resident / Episode 255 / Mar 26 / 2016",descripcion:"Part 1 Tracklist Allen Andrs - Feel It (Lopazz And Casio Casino Remix) Robert R. Hardy - Way For Work (Li-Polymer Remix) Lehar - Number One Hero (Peter Pardeike Remix) Tech D - Changes Part 2 Tracklist Cullen - Connections (Martin Berger Remix) Namatijra - Iluminar East Cafe - One Silent Cloudburst Maribou State - Rituals (Sasha Remix) Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"34.6K",fecha:"2026-03-26",link:"https://mcdn.podbean.com/mf/download/2gw7xg/255-HernanCattaneo-2016-03-26.mp3"},{episodio:"245",titulo:"Resident / Episode 245 / Jan 16 2016",descripcion:"Part 1 Tracklist Beats maniacs - Aqua Robert R. Hardy - Stratified Music Brian Cid - Aurora Damian Lazarus & The Ancient Moons - We Will Return (Serge Devant Remix) Part 2 Tracklist RWAC - Im Schlepptau LFO (Tim Engelhardt Remix) Nick Koplan & Ian Mayer - Riviera (Anton Make Remix-) Ryan Davis, Microtrauma - Harmonia Chicola - I remember u MiraculuM - Quantumswarm (East Cafe Remix) Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"35.8K",fecha:"2016-01-16",link:"https://mcdn.podbean.com/mf/download/yphgai/245-HernanCattaneo-2016-01-16.mp3"},{episodio:"236",titulo:"Resident / Episode 236 / Nov 14 2015",descripcion:"Part 1 Tracklist Timujin - OMSK Dustin Nantais - Marching Through The Universe (Pole Folder Remix) Ditian - Where the Roses Bloom Victor Stancov - Soft square Aguizi & Fahim - Ethnicity Part 2 Tracklist Victor Stancov - Glingglang Oliver Lieb - Magnetite dPen, Kosmas Epsilon - Winter is coming Shmuel Flash - Chilling Moments (Robert R. Hardy Unofficial ReWork) Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"34.6K",fecha:"2015-11-14",link:"https://mcdn.podbean.com/mf/download/cq4jx2/236-HernanCattaneo-2015-11-14.mp3"},{episodio:"225",titulo:"Resident / Episode 225 / Aug 29 2015",descripcion:"Part 1 Tracklist Blondish-Endless Games Patrice B\xE4umel Mix) William Burroughs - Advice for Young People - (BunkerHill1940s Unofficial Giddyhead) Dean Demanuele - Blumen Soultrick - Nativus Andre Hommen - Introspectral Part 2 Tracklist Groj - Disco Soleil Lonya & Mz Sunday Luv - Judgement Day (King Unique Remix) Martin Landsky - Under The Bridge Li-Polymer - Silence Between Us Denis Sulta - La Ruffgarden (Terrace Mix) Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"37.4K",fecha:"2015-08-29",link:"https://mcdn.podbean.com/mf/download/b5p7ja/225-HernanCattaneo-2015-08-29.mp3"},{episodio:"215",titulo:"Resident / Episode 215 / Jun 20 2015",descripcion:"Part 1 Tracklist Paul Hazendonk & Noraj Cue - Recaptured ft. Patchy Frank Amp Tony & Bob Moses - Holding On (Mariano Montori Boot) Kevin Di Serna - Bless Dave DK - Smukke Lyde Part 2 Tracklist Juan Deminicis - At Dawn LoQuai - Virtual Place (Anton MAKe remix) Alba Go Bragh - Juan Astudillo GMJ - Forgotten Wisdom (Rich Curtis) Download episode on MP3 (Right click, save link as...)",likes:"10",descargas:"37.2K",fecha:"2015-06-20",link:"https://mcdn.podbean.com/mf/download/sn5ba8/215-HernanCattaneo-2015-06-20.mp3"},{episodio:"206",titulo:"Resident / Episode 206 / April 18 2015",descripcion:"Part 1 Tracklist Damian Lazarus & The Ancent Moons - Vermillion Jaap Ligthart feat. Alice Rose - I Know Change (him_self_her Remix) Anton MAKe - Lost In Amsterdam (Erich Von Kollar Remix) Chaim - Cosmology Part 2 Tracklist 2040 - Bipolar (Simply City Rmx) Derek Howell - Interstellar Homecoming (East Cafe) Brian Cid - Release Beat Factory - Forgiveness (Dilby Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"68.6K",fecha:"2015-04-18",link:"https://mcdn.podbean.com/mf/download/wgj5c3/206-HernanCattaneo-2015-04-18.mp3"},{episodio:"196",titulo:"Resident / Episode 196 / February 07 2015",descripcion:"Part 1 Tracklist SBRO - Queens, NY Hugo Ibarra - Sharp Stone John Cosani - Animals Navid Mehr - Elyon (Stas Drive Remix) Part 2 Tracklist Madloch & Matias Vila - Reading Souls (James Teej's Holographic Moon Mix) Madloch & Matias Vila - Reading Souls (Nikko Z Remix) Lee Van Dowski - 050504 Franco Dubois - I Try (Juan Deminicis & Martin Etchegaray Remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"42.4K",fecha:"2015-02-07",link:"https://mcdn.podbean.com/mf/download/57yw32/196-HernanCattaneo-2015-02-07.mp3"},{episodio:"186",titulo:"Resident / Episode 186 / November 29 2014",descripcion:"Part 1 Tracklist THe WHite SHadow (FR) - The Sky Kaban - Kepler Ezequiel Anile - A Part of Myself (Stas Drive Remix) Angel Moraes - Transformation Wollion, Harada - Thinking Less (Jaymo & Andy George Remix) Part 2 Tracklist Dauwd - Moiety Marcelo Vasami - Her Face Ariel AB - Stak (Max Cue Remix) Nils Frahm - Peter (Dark Soul Project Remix ) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"46.9K",fecha:"2014-11-29",link:"https://mcdn.podbean.com/mf/download/iuw9e4/186-HernanCattaneo-2014-11-29.mp3"},{episodio:"176",titulo:"Resident / Episode 176 / September 20 2014",descripcion:"Part 1 Tracklist Mike Griego & Stas Drive - Final Whisper Francesco Rossi \u2014 Godspeed You (Martin Buttrich Remix) [feat. Ozark Henry] Lefrenk - Time Ian Pooley - The Beginning Part 2 Tracklist Angel Moraes - Transformation Lucas Rossi - Before the Calm Scotty.A - The Way She Smiles (Lonya Remix) Cristor - Fusion Field Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"49.8K",fecha:"2014-09-20",link:"https://mcdn.podbean.com/mf/download/72nct6/176-HernanCattaneo-2014-20-13.mp3"},{episodio:"166",titulo:"Resident / Episode 166 / July 12 2014",descripcion:`Part 1 Tracklist Alex Gragnani - MSP (Simply City Remix)
Rob Benninger - Techno Angel
Junior Dee - I believe in free
Tommi Oskari - Stress Test (Stress Test (Namatjira Remix) Part 2 Tracklist Kasbah Zoo & OniWax - New era
Booka Shade Feat. Fritz Helder - Love Drug (Mihai Popoviciu Remix)
Darin Epsilon & Deeprogressv - The Conclusion (Mike Griego Trippy Mix)
Quivver - Unknown (Guy Manztur) Download episode on MP3 (Right click, save link as...)`,likes:"5",descargas:"40.5K",fecha:"2014-07-12",link:"https://mcdn.podbean.com/mf/download/vanp5d/166-HernanCattaneo-2014-07-12.mp3",tracklist:`Part 1 Alex Gragnani - MSP (Simply City Remix)
Rob Benninger - Techno Angel
Junior Dee - I believe in free
Tommi Oskari - Stress Test (Stress Test (Namatjira Remix) Part 2 Kasbah Zoo & OniWax - New era
Booka Shade Feat. Fritz Helder - Love Drug (Mihai Popoviciu Remix)
Darin Epsilon & Deeprogressv - The Conclusion (Mike Griego Trippy Mix)`},{episodio:"156",titulo:"Resident / Episode 156 / May 03 2014",descripcion:"Part 1 Tracklist Brickman - Reborn (Nadja Lind Remix) Diego Azocar - Works of your hands My fav Robot - My other feet is my car (Balcazar & Sordo Remix) Jelly for the babies - Just Another Day Richard Switch - Triangular Part 2 Tracklist Mariano Montori & PARGA - Soaked Guys Omar El Gamal - Roll Dice Steve Ness - Westwood (Anton MAKe remix) Some little things - Lines Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"28.2K",fecha:"2014-05-03",link:"https://mcdn.podbean.com/mf/download/bgjf67/156-HernanCattaneo-2014-05-03.mp3"},{episodio:"136",titulo:"Resident / Episode 136 / December 14 2013",descripcion:`Part 1 Tracklist Fujiya & Miyagi - Ankle Injuries (Sahar Z & Khen)
Julian Rodriguez - Tequila Al Atardecer (Niko Mayer Rmx)
Omar El Gamal - Control (Original Mix)
Egbert - Hemelpoort Part 2 Tracklist Marc Poppcke - Stringent
Rodrigo-K & Filter B - Wake Up
Praveen Achary - Suspended Animation
Federico Monachesi - Nu octantis
Hunter Game - Distant Storms (Christian Prommer Remix)`,likes:"4",descargas:"35.2K",fecha:"2013-12-14",link:"https://mcdn.podbean.com/mf/download/4zwb63/136-HernanCattaneo-2013-12-14.mp3",tracklist:`Part 1 Fujiya & Miyagi - Ankle Injuries (Sahar Z & Khen)
Julian Rodriguez - Tequila Al Atardecer (Niko Mayer Rmx)
Omar El Gamal - Control (Original Mix)
Egbert - Hemelpoort Part 2 Marc Poppcke - Stringent
Rodrigo-K & Filter B - Wake Up
Praveen Achary - Suspended Animation
Federico Monachesi - Nu octantis
Hunter Game - Distant Storms (Christian Prommer Remix)`},{episodio:"137",titulo:"Resident / Episode 137 / December 21 2013",descripcion:`Part 1 Tracklist Roni Iron feat. Anna Maria - De Grecia (Nick Varon Remix)
Patlac - La Nuit feat. Christina (Downtown Party Network Remix)
Magshine - Grand Tartaria
Edu Yattah - Sharghai Girl Part 2 Tracklist Simon Baker - Sonar
Nicolas Petracca & Diego Azocar - Cinema
Marc Marzenit - Run Wild
Deepfunk & Van Did - Endless Space
Hunter Game - Keep The Other Things Out (Petar Dundov Remix)`,likes:"3",descargas:"32.5K",fecha:"2013-12-21",link:"https://mcdn.podbean.com/mf/download/wb634c/137-HernanCattaneo-2013-12-21.mp3",tracklist:`Part 1 Roni Iron feat. Anna Maria - De Grecia (Nick Varon Remix)
Patlac - La Nuit feat. Christina (Downtown Party Network Remix)
Magshine - Grand Tartaria
Edu Yattah - Sharghai Girl Part 2 Simon Baker - Sonar
Nicolas Petracca & Diego Azocar - Cinema
Marc Marzenit - Run Wild
Deepfunk & Van Did - Endless Space
Hunter Game - Keep The Other Things Out (Petar Dundov Remix)`},{episodio:"138",titulo:"Resident / Episode 138 / December 28 2013",descripcion:`Part 1 Tracklist Reference - Ghetto nebula
Wankelmut - Wood & Wine (Ian Pooley Remix)
Dp - End of story (Lautaro Varela remix)
Fabio Gianelli - Drifted Brain Part 2 Tracklist SQL - Patchwork (Thankyou City Remix)
Eric Volta - Love your ilusion
Genius Spark - Under Your Skin (Pete Mccarthey Remix)
Genius Spark - Under Your Skin (Dark Soul Project Remix)`,likes:"5",descargas:"33.8K",fecha:"2013-12-28",link:"https://mcdn.podbean.com/mf/download/qqy2gj/138-HernanCattaneo-2013-12-28.mp3",tracklist:`Part 1 Reference - Ghetto nebula
Wankelmut - Wood & Wine (Ian Pooley Remix)
Dp - End of story (Lautaro Varela remix)
Fabio Gianelli - Drifted Brain Part 2 SQL - Patchwork (Thankyou City Remix)
Eric Volta - Love your ilusion
Genius Spark - Under Your Skin (Pete Mccarthey Remix)
Genius Spark - Under Your Skin (Dark Soul Project Remix)`},{episodio:"126",titulo:"Resident / Episode 126 / October 05 2013",descripcion:`Tracklist Part 1 Kieran J - Hippy Shack
Tobias Linden - Anima
Andy Arias - Dolem & Bew (Original Mix)
Stas Drive - One love Tracklist Part 2 Temper Trap - Resurrection (Ryan Luciano Remix)
Erdi Irmak - Departures (Baunder remix)
Jimpster, Simon Jinadu - These Times (Dixon's Retouch)-
Estroe - Sustainable Illusion
Neptune Blues`,likes:"3",descargas:"36.3K",fecha:"2013-10-05",link:"https://mcdn.podbean.com/mf/download/iur3tj/126-HernanCattaneo-2013-10-05.mp3",tracklist:`Tracklist Part 1 Kieran J - Hippy Shack
Tobias Linden - Anima
Andy Arias - Dolem & Bew (Original Mix)
Stas Drive - One love Tracklist Part 2 Temper Trap - Resurrection (Ryan Luciano Remix)
Erdi Irmak - Departures (Baunder remix)
Jimpster, Simon Jinadu - These Times (Dixon's Retouch)-
Estroe - Sustainable Illusion
Neptune Blues`},{episodio:"127",titulo:"Resident / Episode 127 / October 12 2013",descripcion:`Tracklist Part 1 Nick Stoynoff - Da Izz
Audioglider - Lazy Tears
Stefan Z - No words
Genius Spark - Lucky Flashback Tracklist Part 2 Depeche Mode - Precious (Daneel Bootleg Remix)
Kevin Di Serna - Ailes
MUUI - Sotaque (Quivver)
Darin Epsilon - Valencia (Jamie Stevens Remix)`,likes:"2",descargas:"34.1K",fecha:"2013-10-12",link:"https://mcdn.podbean.com/mf/download/wnfvv6/127-HernanCattaneo-2013-10-12.mp3",tracklist:`Tracklist Part 1 Nick Stoynoff - Da Izz
Audioglider - Lazy Tears
Stefan Z - No words
Genius Spark - Lucky Flashback Tracklist Part 2 Depeche Mode - Precious (Daneel Bootleg Remix)
Kevin Di Serna - Ailes
MUUI - Sotaque (Quivver)
Darin Epsilon - Valencia (Jamie Stevens Remix)`},{episodio:"116",titulo:"Resident / Episode 116 / July 27 2013",descripcion:`Part 1 Tracklist Antrim - Come To Me
Victoria Wilson James, Mr.C - Open Up (David Scuba, Dance Spirit Remix)
Edu Imbernon - Ditto feat. Rosina (Fairmont remix)
Andre Sobota - Pulsatilla (Henry Saiz Remix) Part 2 Tracklist Timid Boy - Psycho
Progress Inn - The Endless Caravan
Genius Spark - Fractal
Nikko Z - In The Dark Room
Axel Bartsch - Don't Forget The Funk`,likes:"3",descargas:"46.2K",fecha:"2013-07-27",link:"https://mcdn.podbean.com/mf/download/hsx7p/116-HernanCattaneo-2013-07-27.mp3",tracklist:`Part 1 Antrim - Come To Me
Victoria Wilson James, Mr.C - Open Up (David Scuba, Dance Spirit Remix)
Edu Imbernon - Ditto feat. Rosina (Fairmont remix)
Andre Sobota - Pulsatilla (Henry Saiz Remix) Part 2 Timid Boy - Psycho
Progress Inn - The Endless Caravan
Genius Spark - Fractal
Nikko Z - In The Dark Room
Axel Bartsch - Don't Forget The Funk`},{episodio:"117",titulo:"Resident / Episode 117 / August 03 2013",descripcion:`Part 1 Tracklist Joelle Atkins - Jammin (Norman H & Wez Saunders Remix) 
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix) 
Hugo Ibarra - Ambar (Lautaro Varela Remix) 
Seamless - Castle In The Sky (Nick Brennan remix) Part 2 Tracklist Alice Is Easy - (Nick Brennan booty) 
East Cafe - Liebesleid (Stas Drive remix) 
Navid Mehr - 1984 (Original Mix) 
Grum-The Theme (Daniel Trim Remix)`,likes:"5",descargas:"43.8K",fecha:"2013-08-03",link:"https://mcdn.podbean.com/mf/download/g9uupa/117-HernanCattaneo-2013-08-03.mp3",tracklist:`Part 1 Joelle Atkins - Jammin (Norman H & Wez Saunders Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Hugo Ibarra - Ambar (Lautaro Varela Remix)
Seamless - Castle In The Sky (Nick Brennan remix) Part 2 Alice Is Easy - (Nick Brennan booty)
East Cafe - Liebesleid (Stas Drive remix)
Navid Mehr - 1984 (Original Mix)
Grum-The Theme (Daniel Trim Remix)`},{episodio:"106",titulo:"Resident / Episode 106 / May 18 2013",descripcion:`Part 1 Tracklist

Silinder - Pavement (Paul Hazendonk & Noraj Cue Remix)

Namatjira - Birkenmeier

Totem Pole - Sobrenatural

Butch - Dimensions

Part 2 Tracklist

Lowb - Inward Outburst (Ripperton Remix)

Charlie May - Night Light (Kay Aka Khalil Touihri Remix)

Forest People - Shabauch (Hunter Slay Remix)

Terje Saether - Blinded

Deepfunk - Switch`,likes:"3",descargas:"38.7K",fecha:"2013-05-18",link:"https://mcdn.podbean.com/mf/download/kucfnd/106-HernanCattaneo-2013-05-18.mp3",tracklist:`Part 1

Silinder - Pavement (Paul Hazendonk & Noraj Cue Remix)

Namatjira - Birkenmeier

Totem Pole - Sobrenatural

Butch - Dimensions

Part 2

Lowb - Inward Outburst (Ripperton Remix)

Charlie May - Night Light (Kay Aka Khalil Touihri Remix)

Forest People - Shabauch (Hunter Slay Remix)

Terje Saether - Blinded

Deepfunk - Switch`},{episodio:"107",titulo:"Resident / Episode 107 / May 25 2013",descripcion:`Part 1 Tracklist

Soul Button feat. Stee Downes - In My Stride (Atapy Remix)

Gone Deville - From Loving You (Martin Roth Remix)

Marcelo Paladini - Gumdrops (Matias Vila Remix)

Kassey Voorn - A Stride In The Dark (Deep mix)

Kolsch - Goldfisch (Original Mix)

Part 2 Tracklist

James Teej - A Civil Duty (Original Mix)

Rave Child - Ryan Davis Cinematic Rebuild

Andre Sobota - Lost Igor Zaharov & Sober System - Soul Cut (Knob Remix) Michael Mayer - Good Times (Agoria Sunlune Mix)`,likes:"3",descargas:"38.3K",fecha:"2013-05-25",link:"https://mcdn.podbean.com/mf/download/q5wtem/107-HernanCattaneo-2013-05-25.mp3",tracklist:`Part 1

Soul Button feat. Stee Downes - In My Stride (Atapy Remix)

Gone Deville - From Loving You (Martin Roth Remix)

Marcelo Paladini - Gumdrops (Matias Vila Remix)

Kassey Voorn - A Stride In The Dark (Deep mix)

Kolsch - Goldfisch (Original Mix)

Part 2

James Teej - A Civil Duty (Original Mix)

Rave Child - Ryan Davis Cinematic Rebuild

Andre Sobota - Lost Igor Zaharov & Sober System - Soul Cut (Knob Remix) Michael Mayer - Good Times (Agoria Sunlune Mix)`},{episodio:"096",titulo:"Resident / Episode 096 / March 09 2013",descripcion:`Part 1 Tracklist

Art Department - Robot Heart (Fran Von Vie Feat Cio May Remix)

Edu Yattah - Restless Love (feat Natascha Stern)

C-Jay - Lightism

uP & pG feat. David Kareyan - Follow you

Issac - Chilled Green Part 2 Tracklist dPen - As Far As It Goes (Nick Varon Remix)

AndrewzVee & KN - Fairytale

Li-Polymer - Loverground

Oscar Vazquez - My Way

Dosem- Black Unicorn`,likes:"4",descargas:"58.6K",fecha:"2013-03-09",link:"https://mcdn.podbean.com/mf/download/d4pim/096-HernanCattaneo-2013-03-09.mp3",tracklist:`Part 1

Art Department - Robot Heart (Fran Von Vie Feat Cio May Remix)

Edu Yattah - Restless Love (feat Natascha Stern)

C-Jay - Lightism

uP & pG feat. David Kareyan - Follow you

Issac - Chilled Green Part 2 dPen - As Far As It Goes (Nick Varon Remix)

AndrewzVee & KN - Fairytale

Li-Polymer - Loverground

Oscar Vazquez - My Way

Dosem- Black Unicorn`},{episodio:"097",titulo:"Resident / Episode 097 / March 16 2013",descripcion:`Part 1 Tracklist

Sivesgaard - Half Dreaming (Inxec Remix)

One Opinion - Driving

False Image - Ocelot

Marcus Worgull, Frank Wiedemann - Muwekma

Markus Homm - Drei Eins

Part 2 Tracklist Luis Bondio - Mumetta (dPen Remix) Benjamin Damage & Doc Daneeka (Feat Abigail Wyles ) - Battleships (Sasha remix) Frankie Watch - Geiri Fairmont - Last Dance (Ewan Pearson Remix)`,likes:"5",descargas:"41.4K",fecha:"2013-03-16",link:"https://mcdn.podbean.com/mf/download/s9wr6i/097-HernanCattaneo-2013-03-16.mp3",tracklist:`Part 1

Sivesgaard - Half Dreaming (Inxec Remix)

One Opinion - Driving

False Image - Ocelot

Marcus Worgull, Frank Wiedemann - Muwekma

Markus Homm - Drei Eins

Part 2 Luis Bondio - Mumetta (dPen Remix) Benjamin Damage & Doc Daneeka (Feat Abigail Wyles ) - Battleships (Sasha remix) Frankie Watch - Geiri Fairmont - Last Dance (Ewan Pearson Remix)`},{episodio:"098",titulo:"Resident / Episode 098 / March 23 2013",descripcion:`Part 1 Tracklist

Isolee - Allowance

Uvo - False forms

Shyam - Let me in

Daniel Dexter - Why so serious

Part 2 Tracklist

Ben Watt - Guinea pig (Marcelo Vasami remix)

Konektiv - Hhauz (Ferdy mix)

Revolt - Rise

Der Dritte Raum - Alienoid (Dominik Eulberg & Gabriel Ananda)

Scotty A - What make us smile`,likes:"5",descargas:"60.5K",fecha:"2013-03-23",link:"https://mcdn.podbean.com/mf/download/5z43x/098-HernanCattaneo-2013-03-23.mp3",tracklist:`Part 1

Isolee - Allowance

Uvo - False forms

Shyam - Let me in

Daniel Dexter - Why so serious

Part 2

Ben Watt - Guinea pig (Marcelo Vasami remix)

Konektiv - Hhauz (Ferdy mix)

Revolt - Rise

Der Dritte Raum - Alienoid (Dominik Eulberg & Gabriel Ananda)

Scotty A - What make us smile`},{episodio:"099",titulo:"Resident / Episode 099 / March 30 2013",descripcion:`Part 1 Tracklist

Manuel Moreno - Switchback (Afrilounge deep pattern mix)

Tube & Berger, P.A.C.O - Greyjoy (Einmusik Remix)

Sasch-Marian (Marc Poppcke Remix)

Sid Le Rock - Here we are

Part 2 Tracklist

Darin Epsilon - Valencia Doomwork - One religion WayWork & Cris Xalambri - Black way (Cut Knob Remix) East Cafe - Question One (Nikko.Z Remix)`,likes:"5",descargas:"63.5K",fecha:"2013-03-30",link:"https://mcdn.podbean.com/mf/download/v98a52/099-HernanCattaneo-2013-03-30.mp3",tracklist:`Part 1

Manuel Moreno - Switchback (Afrilounge deep pattern mix)

Tube & Berger, P.A.C.O - Greyjoy (Einmusik Remix)

Sasch-Marian (Marc Poppcke Remix)

Sid Le Rock - Here we are

Part 2

Darin Epsilon - Valencia Doomwork - One religion WayWork & Cris Xalambri - Black way (Cut Knob Remix) East Cafe - Question One (Nikko.Z Remix)`},{episodio:"100",titulo:"Resident / Episode 100 / April 06 2013",descripcion:`Part 1 Tracklist

Luca Bacchetti - Atlantic

Jori Hulkkonen - Liquid hologram feat. Jiihoo (Jori Hulkkonen remix)

Henry Saiz - All the evil of this world (Chaim remix)

Le Carousel - Carousel (Phil Kieran mix)

Part 2 Tracklist

Depeche Mode - My little universe (Audiotox & Watson)

Momu - Rising (Issac)

Holbrook & Skykeeper - Without us

Loans Erepams - Stellar wind (Rich Curtis remix)

Sigur Ros - Saegoplur (Paolo Mojo remix)`,likes:"10",descargas:"56.2K",fecha:"2013-04-06",link:"https://mcdn.podbean.com/mf/download/d7rmki/100-HernanCattaneo-2013-04-06.mp3",tracklist:`Part 1

Luca Bacchetti - Atlantic

Jori Hulkkonen - Liquid hologram feat. Jiihoo (Jori Hulkkonen remix)

Henry Saiz - All the evil of this world (Chaim remix)

Le Carousel - Carousel (Phil Kieran mix)

Part 2

Depeche Mode - My little universe (Audiotox & Watson)

Momu - Rising (Issac)

Holbrook & Skykeeper - Without us

Loans Erepams - Stellar wind (Rich Curtis remix)

Sigur Ros - Saegoplur (Paolo Mojo remix)`},{episodio:"101",titulo:"Resident / Episode 101 / April 13 2013",descripcion:`Part 1 Tracklist MNR - City of shadows Issac - Chilled green Frankly & Sandrino - We are all dust

The Confusion and dj Emil - No problem (Dandy & Gregory S)

Part 2 Tracklist

Vinayak^a - You may sit and wonder

Blusoul - Voyager (Li-Polymer Remix)

Kaan Koray - Brust Of Emotion (Original Mix)

Mononoid - Two terms

Snake Sedrick - Fields (Lautaro Varela green fields bootleg)`,likes:"7",descargas:"45.2K",fecha:"2013-04-13",link:"https://mcdn.podbean.com/mf/download/tqz2n/101-HernanCattaneo-2013-04-13.mp3",tracklist:`Part 1 MNR - City of shadows Issac - Chilled green Frankly & Sandrino - We are all dust

The Confusion and dj Emil - No problem (Dandy & Gregory S)

Part 2

Vinayak^a - You may sit and wonder

Blusoul - Voyager (Li-Polymer Remix)

Kaan Koray - Brust Of Emotion (Original Mix)

Mononoid - Two terms

Snake Sedrick - Fields (Lautaro Varela green fields bootleg)`},{episodio:"102",titulo:"Resident / Episode 102 / April 20 2013",descripcion:`Part 1 Tracklist

Cine City - Are You Sure Joe (Neil Quigley's journey to Metaluna)

3Deep feat. Ryan Vail - Coming home

Rootfellen - Wanna love you

Amirali - No strings

Chaim - We Are feat. Meital Derazone

Part 2 Tracklist

The Revenge - Maia

Ben Hoo - Maledictum

Antrim - Shine Evolving

Eze Ramirez - Nekhael

CoMa - My Orbit`,likes:"5",descargas:"47.1K",fecha:"2013-04-20",link:"https://mcdn.podbean.com/mf/download/2tvn9a/102-HernanCattaneo-2013-04-20.mp3",tracklist:`Part 1

Cine City - Are You Sure Joe (Neil Quigley's journey to Metaluna)

3Deep feat. Ryan Vail - Coming home

Rootfellen - Wanna love you

Amirali - No strings

Chaim - We Are feat. Meital Derazone

Part 2

The Revenge - Maia

Ben Hoo - Maledictum

Antrim - Shine Evolving

Eze Ramirez - Nekhael

CoMa - My Orbit`},{episodio:"103",titulo:"Resident / Episode 103 / April 27 2013",descripcion:`Part 1 Tracklist

Tale of Us - Discochord

Ben Hoo - Maledictum (Nicolas Duvoisin Rmx )

Antix & Tim Richards - Another Day (SQL Dub Mix)

Skinnerbox - Purgatory Five (Sound Process Unofficial Deep Remix)

16B - Escape (Kevin Di Serna)

Part 2 Tracklist

Namatjira - Ethos

Max Cooper & Nicolas Bouga\xEFeff - Meadows (Microtrauma Remix)

Layo & Bushwacka! - Born In The Backwoods (Nicole Maudaber Remix)

Traumer - Escape`,likes:"4",descargas:"41.4K",fecha:"2013-04-27",link:"https://mcdn.podbean.com/mf/download/g6e3nw/103-HernanCattaneo-2013-04-27.mp3",tracklist:`Part 1

Tale of Us - Discochord

Ben Hoo - Maledictum (Nicolas Duvoisin Rmx )

Antix & Tim Richards - Another Day (SQL Dub Mix)

Skinnerbox - Purgatory Five (Sound Process Unofficial Deep Remix)

16B - Escape (Kevin Di Serna)

Part 2

Namatjira - Ethos

Max Cooper & Nicolas Bouga\xEFeff - Meadows (Microtrauma Remix)

Layo & Bushwacka! - Born In The Backwoods (Nicole Maudaber Remix)

Traumer - Escape`},{episodio:"104",titulo:"Resident / Episode 104 / May 04 2013",descripcion:`Part 1 Tracklist

Ultrasone - High dawn

Ednner Soares - An Doasage (Uvos Over Dose Remix)

Andrew McDonnell - One day in Kowloon

Patrick M - Velvet Aurora

Part 2 Tracklist

Ian O Donovan - Firenze

Alterimage - My Cortex

Constan - Go The Forest\xA0 (AudioTox & Watson remix)

Terje Saether - Human Lifestyle (Lonya Remix)`,likes:"2",descargas:"39.8K",fecha:"2013-05-04",link:"https://mcdn.podbean.com/mf/download/f5c/104-HernanCattaneo-2013-05-04.mp3",tracklist:`Part 1

Ultrasone - High dawn

Ednner Soares - An Doasage (Uvos Over Dose Remix)

Andrew McDonnell - One day in Kowloon

Patrick M - Velvet Aurora

Part 2

Ian O Donovan - Firenze

Alterimage - My Cortex

Constan - Go The Forest\xA0 (AudioTox & Watson remix)

Terje Saether - Human Lifestyle (Lonya Remix)`},{episodio:"105",titulo:"Resident / Episode 105 / May 11 2013",descripcion:`Part 1 Tracklist

Craig Bentley - Analogue Dreams (Bonar Bradberry Remix)

Chaim - Summer Rains

Marc Poppcke - Breakable

C-Jay & Yoram - RadioSchaduw

Tvardovsky - Colours

Part 2 Tracklist

Santiago Teillagorry - A Gray Day

Maxi Iborquiza - Just Love

Khen & Sonic Union - Introspection (Cid Inc Remix)

Dave Angel - Harlequin`,likes:"3",descargas:"38.5K",fecha:"2013-05-11",link:"https://mcdn.podbean.com/mf/download/kh2hmd/105-HernanCattaneo-2013-05-11.mp3",tracklist:`Part 1

Craig Bentley - Analogue Dreams (Bonar Bradberry Remix)

Chaim - Summer Rains

Marc Poppcke - Breakable

C-Jay & Yoram - RadioSchaduw

Tvardovsky - Colours

Part 2

Santiago Teillagorry - A Gray Day

Maxi Iborquiza - Just Love

Khen & Sonic Union - Introspection (Cid Inc Remix)

Dave Angel - Harlequin`},{episodio:"108",titulo:"Resident / Episode 108 / June 01 2013",descripcion:`Part 1 Tracklist

Joelle Atkins - Jammin

No tomorrow - Nord

Progress In - Fifth planet

Juan Deminicis - Unknown

Darin Epsilon pres. Eventide - Cosmic Discovery (Kastis Torrau & Arnas D Remix)

Part 2 Tracklist

Eyal Cohen - People & mess

Yunus - Meeting Molly

Jimmy Van M- QR (Facundo Mohrr & Sound Process Remix)

Sin Cos Tan - Trust`,likes:"3",descargas:"41.5K",fecha:"2013-06-01",link:"https://mcdn.podbean.com/mf/download/bvp9hs/108-HernanCattaneo-2013-06-01.mp3",tracklist:`Part 1

Joelle Atkins - Jammin

No tomorrow - Nord

Progress In - Fifth planet

Juan Deminicis - Unknown

Darin Epsilon pres. Eventide - Cosmic Discovery (Kastis Torrau & Arnas D Remix)

Part 2

Eyal Cohen - People & mess

Yunus - Meeting Molly

Jimmy Van M- QR (Facundo Mohrr & Sound Process Remix)

Sin Cos Tan - Trust`},{episodio:"109",titulo:"Resident / Episode 109 / June 08 2013",descripcion:`Part 1 Tracklist

Wanderhouse - Lights (Ed Lee)

Dinky - Falling Angel

Antrim - Rita

Deepfunk - Minus

Markus Homm - No train to Alaska

Part 2 Tracklist

Applescal - Blank Value

Lautaro Varela - Downing Street (Graziano Raffa Remix)

MNR - The Pillars of the Earth

John Morrison - North Coast

Alan Live - Horizon`,likes:"4",descargas:"42.9K",fecha:"2013-06-08",link:"https://mcdn.podbean.com/mf/download/fveaqj/109-HernanCattaneo-2013-06-08.mp3",tracklist:`Part 1

Wanderhouse - Lights (Ed Lee)

Dinky - Falling Angel

Antrim - Rita

Deepfunk - Minus

Markus Homm - No train to Alaska

Part 2

Applescal - Blank Value

Lautaro Varela - Downing Street (Graziano Raffa Remix)

MNR - The Pillars of the Earth

John Morrison - North Coast

Alan Live - Horizon`},{episodio:"110",titulo:"Resident / Episode 110 / June 15 2013",descripcion:`Part 1 Tracklist

Neftali Blasko - Time Traveller (Demian Deep Mix)

Namatjira - Momota

Omar El Gamal - Keep Calm

Genius Spark - Such A Fool

Part 2 Tracklist

Kevin Di Serna - Clair de Lune

Solee - Blown

Monojoke - Evolution 99 (Cut Knob Remix)

Danko - The Arrival

Andre Sobota - Befinnings`,likes:"2",descargas:"42K",fecha:"2013-06-15",link:"https://mcdn.podbean.com/mf/download/fmt5sp/110-HernanCattaneo-2013-06-15.mp3",tracklist:`Part 1

Neftali Blasko - Time Traveller (Demian Deep Mix)

Namatjira - Momota

Omar El Gamal - Keep Calm

Genius Spark - Such A Fool

Part 2

Kevin Di Serna - Clair de Lune

Solee - Blown

Monojoke - Evolution 99 (Cut Knob Remix)

Danko - The Arrival

Andre Sobota - Befinnings`},{episodio:"111",titulo:"Resident / Episode 111 / June 22 2013",descripcion:`Part 1 Tracklist

Bjork - Mutual Core (Atapy Remix)

Boss axis - Nevada (Solee Remix)

Verche - Raw Substance (MNR Paradise On The Patio Mix)

Boo Williams - Peaking Point

Part 2 Tracklist

Alberto Blanco & Marcelo Paladini - Chrome Substance

Riccicomoto And Helly Larson - Doppler Effect

MaybeTomorrow - Flying Shark-Kenji Takashima remix

Smak feat. Ryan Vail - In The Beginning (Ian O'Donovan Remix)`,likes:"4",descargas:"42.1K",fecha:"2013-06-22",link:"https://mcdn.podbean.com/mf/download/h8ppz7/111-HernanCattaneo-2013-06-22.mp3",tracklist:`Part 1

Bjork - Mutual Core (Atapy Remix)

Boss axis - Nevada (Solee Remix)

Verche - Raw Substance (MNR Paradise On The Patio Mix)

Boo Williams - Peaking Point

Part 2

Alberto Blanco & Marcelo Paladini - Chrome Substance

Riccicomoto And Helly Larson - Doppler Effect

MaybeTomorrow - Flying Shark-Kenji Takashima remix

Smak feat. Ryan Vail - In The Beginning (Ian O'Donovan Remix)`},{episodio:"112",titulo:"Resident / Episode 112 / June 29 2013",descripcion:`Part 1 Tracklist

Noa Romana & Deersky - See You Soon (Matias Chilano Remix)

Vinayak - Set her free (Martin Buttrich)

Nico Purman - Logan's Dream

Prommer & Barck - I want you

Part 2 Tracklist

Peet - Reflection (Uvo Remix)

Progreg - Deep Harmony (Absolution Remix) Doomwork - Midnight blue Henry Saiz - Fill Me Up (Edu Imbernon remix)`,likes:"5",descargas:"43.3K",fecha:"2013-06-29",link:"https://mcdn.podbean.com/mf/download/jufhq/112-HernanCattaneo-2013-06-29.mp3",tracklist:`Part 1

Noa Romana & Deersky - See You Soon (Matias Chilano Remix)

Vinayak - Set her free (Martin Buttrich)

Nico Purman - Logan's Dream

Prommer & Barck - I want you

Part 2

Peet - Reflection (Uvo Remix)

Progreg - Deep Harmony (Absolution Remix) Doomwork - Midnight blue Henry Saiz - Fill Me Up (Edu Imbernon remix)`},{episodio:"113",titulo:"Resident / Episode 113 / July 06 2013",descripcion:`Part 1 Tracklist M.A.N.D.Y. vs LOPAZZ feat Nick Maurer - Feel it in your brain ( Baikal Remix )
Stephen J. Kroos - Theia (MUUI Remix)
Marc Poppcke - Silent Picture (Fran Von Vie & Cumiks Remix)
Cocteau Twins - Blue Bell Knoll (Federico Monachesi Bootleg dub)
Nick Stoynoff - Tresor Blackout (Marc Poppke) Part 2 Tracklist Louis Kolben - Don't Lose Your Way (Eelke Kleijn Get Lost Re-Edit)
C-Jay - Lightism - Marc Pollen Remix
Qbical - Rise (Cid Inc remix)
Antrim - Life To Peace (van Bellen Mix)`,likes:"3",descargas:"46.2K",fecha:"2013-07-06",link:"https://mcdn.podbean.com/mf/download/7kbden/113-HernanCattaneo-2013-07-06.mp3",tracklist:`Part 1 M.A.N.D.Y. vs LOPAZZ feat Nick Maurer - Feel it in your brain ( Baikal Remix )
Stephen J. Kroos - Theia (MUUI Remix)
Marc Poppcke - Silent Picture (Fran Von Vie & Cumiks Remix)
Cocteau Twins - Blue Bell Knoll (Federico Monachesi Bootleg dub)
Nick Stoynoff - Tresor Blackout (Marc Poppke) Part 2 Louis Kolben - Don't Lose Your Way (Eelke Kleijn Get Lost Re-Edit)
C-Jay - Lightism - Marc Pollen Remix
Qbical - Rise (Cid Inc remix)
Antrim - Life To Peace (van Bellen Mix)`},{episodio:"114",titulo:"Resident / Episode 114 / July 13 2013",descripcion:`Part 1 Tracklist The XX - Reunion (Ame)
Timo Maas feat Katie Cruel - Articulation (youANDme remix)
Michael Mayer - Roses (Terranova Mix)
Luis Bondio - Imaginarium (Dousk Remix) Part 2 Tracklist Echomen ft Mark Nigrelli - Don't hold back
Lykke LI - I Follow Rivers (Phonic Scoupe & Dzim Remix)
Edu Imbernon & Triumph - Veranoski
Michael & Levan and Stiven Rivic-Uranium (Tini Tun Remix)
Paul Hazendonk- Slack Tide (Guy Mantzur & Khen Mix)`,likes:"12",descargas:"44.7K",fecha:"2013-07-13",link:"https://mcdn.podbean.com/mf/download/ft7wg6/114-HernanCattaneo-2013-07-13.mp3",tracklist:`Part 1 The XX - Reunion (Ame)
Timo Maas feat Katie Cruel - Articulation (youANDme remix)
Michael Mayer - Roses (Terranova Mix)
Luis Bondio - Imaginarium (Dousk Remix) Part 2 Echomen ft Mark Nigrelli - Don't hold back
Lykke LI - I Follow Rivers (Phonic Scoupe & Dzim Remix)
Edu Imbernon & Triumph - Veranoski
Michael & Levan and Stiven Rivic-Uranium (Tini Tun Remix)
Paul Hazendonk- Slack Tide (Guy Mantzur & Khen Mix)`},{episodio:"115",titulo:"Resident / Episode 115 / July 20 2013",descripcion:'Part 1 Tracklist Marian Brito - Limbo Anthony Yarranton - Bag of Bells Bambook - Give it \xA0up (Chaim remix) Nikko.Z - Slope (Vocal Mix) Part 2 Tracklist Matias Chilano - Autopilot (Neftali Blasko Remix) Progess Inn - Spinal projection Boss Axis - Challenger (Alle Farben Remix) Prompt - Depth (Marc Marzenit "Karma" Remix) Edu Imbernon & Triumph - Veranoski (Henry Saiz Remix)',likes:"2",descargas:"46K",fecha:"2013-07-20",link:"https://mcdn.podbean.com/mf/download/24nsf/115-HernanCattaneo-2013-07-20.mp3",tracklist:'Part 1 Marian Brito - Limbo Anthony Yarranton - Bag of Bells Bambook - Give it \xA0up (Chaim remix) Nikko.Z - Slope (Vocal Mix) Part 2 Matias Chilano - Autopilot (Neftali Blasko Remix) Progess Inn - Spinal projection Boss Axis - Challenger (Alle Farben Remix) Prompt - Depth (Marc Marzenit "Karma" Remix) Edu Imbernon & Triumph - Veranoski (Henry Saiz Remix)'},{episodio:"118",titulo:"Resident / Episode 118 / August 10 2013",descripcion:`Part 1 Tracklist Guy J - Rose (Silinder Remix)
Eze Ramirez - Arial
Progreg - Deep Harmony (Absolution Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Jorg - If I Tarry Part 2 Tracklist Francys - Memories (Marco Resman Remix)
Francys - Memories
Moshic - Delicate Times
Dale Middleton - \xA0Daylight darkness (Daneel remix)
Big Al - Captured (Lateral Cut Groove s Deep Mix)`,likes:"6",descargas:"44.3K",fecha:"2013-08-10",link:"https://mcdn.podbean.com/mf/download/39v45x/118-HernanCattaneo-2013-08-10.mp3",tracklist:`Part 1 Guy J - Rose (Silinder Remix)
Eze Ramirez - Arial
Progreg - Deep Harmony (Absolution Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Jorg - If I Tarry Part 2 Francys - Memories (Marco Resman Remix)
Francys - Memories
Moshic - Delicate Times
Dale Middleton - \xA0Daylight darkness (Daneel remix)
Big Al - Captured (Lateral Cut Groove s Deep Mix)`},{episodio:"119",titulo:"Resident / Episode 119 / August 17 2013",descripcion:`Part 1 Tracklist Kriece - Morning Star
YouANDme pres. You and the machines - Beyond
Beckwith feat. Catherine Porter - Back To Love
Worakls - Good night my love (Joachim Pastor Remix) Part 2 Tracklist Julian Rodriguez - Golochyn Mount (Aviran Shahino Remix)
Pedro Aguiar - Night Shift (Mike Griego Remix)
Michael Levan & Stiven Rivic - Justice (Sahar Z Remix)
Erich Von Kollar - Parallel Flashbacks`,likes:"4",descargas:"49.6K",fecha:"2013-08-17",link:"https://mcdn.podbean.com/mf/download/qunzt2/119-HernanCattaneo-2013-08-17.mp3",tracklist:`Part 1 Kriece - Morning Star
YouANDme pres. You and the machines - Beyond
Beckwith feat. Catherine Porter - Back To Love
Worakls - Good night my love (Joachim Pastor Remix) Part 2 Julian Rodriguez - Golochyn Mount (Aviran Shahino Remix)
Pedro Aguiar - Night Shift (Mike Griego Remix)
Michael Levan & Stiven Rivic - Justice (Sahar Z Remix)
Erich Von Kollar - Parallel Flashbacks`},{episodio:"120",titulo:"Resident / Episode 120 / August 24 2013",descripcion:`Part 1 Tracklist St. Savor - Savor's Dream
Kevin Mc Kay - Ease Your Pain (Illyus master)
Erreome - Cosmic Box
Frangellico A.k.A The man in dark suit\xA0- Sooner or later
Olaf Stuut - Libre (DJ edit) Part 2 Tracklist Dave Angel - Come To Papa
Deepfunk & Acidulant - Cosmos
JJ Salinas - Direct Order (Manuel Sofia Remix)
SQL - Reveal (Kassey Voorn remix)`,likes:"3",descargas:"82.9K",fecha:"2013-08-24",link:"https://mcdn.podbean.com/mf/download/y6s6j/120-HernanCattaneo-2013-08-24.mp3",tracklist:`Part 1 St. Savor - Savor's Dream
Kevin Mc Kay - Ease Your Pain (Illyus master)
Erreome - Cosmic Box
Frangellico A.k.A The man in dark suit\xA0- Sooner or later
Olaf Stuut - Libre (DJ edit) Part 2 Dave Angel - Come To Papa
Deepfunk & Acidulant - Cosmos
JJ Salinas - Direct Order (Manuel Sofia Remix)
SQL - Reveal (Kassey Voorn remix)`},{episodio:"121",titulo:"Resident / Episode 121 / August 31 2013",descripcion:`Part 1 Tracklist Dave DK - Home Again Feat. Heiko Voss (Dub Version)
Dave DK - Home Again Feat. Heiko Voss
Will McGlone - Orryn
Pupkulies & Rebecca - Could not be better (Mario Puccio Unofficial Remix) Part 2 Tracklist Guille Quero & Sound Process - Whatever
Chymera - Fathoms (Asten remix)
Simply City - Zero Distance
Silinder - A World Is Watching
Tom Middleton - WYV AUW CHU`,likes:"4",descargas:"40.5K",fecha:"2013-08-31",link:"https://mcdn.podbean.com/mf/download/wx55fn/121-HernanCattaneo-2013-08-31.mp3",tracklist:`Part 1 Dave DK - Home Again Feat. Heiko Voss (Dub Version)
Dave DK - Home Again Feat. Heiko Voss
Will McGlone - Orryn
Pupkulies & Rebecca - Could not be better (Mario Puccio Unofficial Remix) Part 2 Guille Quero & Sound Process - Whatever
Chymera - Fathoms (Asten remix)
Simply City - Zero Distance
Silinder - A World Is Watching
Tom Middleton - WYV AUW CHU`},{episodio:"122",titulo:"Resident / Episode 122 / September 07 2013",descripcion:`Part 1 Tracklist Estroe - After I m Gone (Jarno s Walking Backwards Remix)
Maher Daniel & Gab Rhome - With The Rain Comes Sorrow
Guy J - Milestone
Pole Folder - Chelsea's Lane
Scotty.A. - The World Turns and We Turn With It (David Calo Remix) Part 2 Tracklist Juan Deminicis - Past (Luis Bondio Remix)
DAVI - Two Suns In The Sky
Enthousiaste Gasten & Freak Strano - Slide it In (Sebastian Davidson Remix)
Jacob Seville - Rocketman
Andre Sobota - Move`,likes:"4",descargas:"40.8K",fecha:"2013-09-07",link:"https://mcdn.podbean.com/mf/download/cst9sr/122-HernanCattaneo-2013-09-07.mp3",tracklist:`Part 1 Estroe - After I m Gone (Jarno s Walking Backwards Remix)
Maher Daniel & Gab Rhome - With The Rain Comes Sorrow
Guy J - Milestone
Pole Folder - Chelsea's Lane
Scotty.A. - The World Turns and We Turn With It (David Calo Remix) Part 2 Juan Deminicis - Past (Luis Bondio Remix)
DAVI - Two Suns In The Sky
Enthousiaste Gasten & Freak Strano - Slide it In (Sebastian Davidson Remix)
Jacob Seville - Rocketman
Andre Sobota - Move`},{episodio:"123",titulo:"Resident / Episode 123 / September 14 2013",descripcion:`Part 1 Tracklist Pole Folder - Mad Love
Applescal feat. Ryan Davis - Creatures
Lonya, Roi Okev - February (Carlo Toma Remix)
Demian Muller, Andre Butano - Old Job (Markus Homm Remix) Part 2 Tracklist 16BL & Radio Slave - Energy Time (Kevin Di Serna Edit)
Tanseer - Both Sides (Dale Middleton Remix)
Hugo Ibarra & Uvo - Fragments
Klangkarussell Feat Phoniques - Sonnentanz (Dsp Edit)`,likes:"3",descargas:"42.4K",fecha:"2013-09-14",link:"https://mcdn.podbean.com/mf/download/7sq8wd/123-HernanCattaneo-2013-09-14.mp3",tracklist:`Part 1 Pole Folder - Mad Love
Applescal feat. Ryan Davis - Creatures
Lonya, Roi Okev - February (Carlo Toma Remix)
Demian Muller, Andre Butano - Old Job (Markus Homm Remix) Part 2 16BL & Radio Slave - Energy Time (Kevin Di Serna Edit)
Tanseer - Both Sides (Dale Middleton Remix)
Hugo Ibarra & Uvo - Fragments
Klangkarussell Feat Phoniques - Sonnentanz (Dsp Edit)`},{episodio:"124",titulo:"Resident / Episode 124 / September 21 2013",descripcion:`Part 1 Tracklist Martin Buttrich & Mousse T - Sunseeker
Muui - Lost in what you know (Pink Hope Mix)
Amine Edge, Dance - Mistakes (The Midnight Perverts & Subtron Remix)
Hermanez - Ayahuaska Part 2 Tracklist Khen - Thousand Mirrors
Mindshield - Parana (Progress Inn Remix)
Tele Vizion - We Walk Everyday (Steve Lovesey Remix)
Marc Houle & Click Box - Razzmatazz`,likes:"2",descargas:"41.2K",fecha:"2013-09-21",link:"https://mcdn.podbean.com/mf/download/us92rz/124-HernanCattaneo-2013-09-21.mp3",tracklist:`Part 1 Martin Buttrich & Mousse T - Sunseeker
Muui - Lost in what you know (Pink Hope Mix)
Amine Edge, Dance - Mistakes (The Midnight Perverts & Subtron Remix)
Hermanez - Ayahuaska Part 2 Khen - Thousand Mirrors
Mindshield - Parana (Progress Inn Remix)
Tele Vizion - We Walk Everyday (Steve Lovesey Remix)
Marc Houle & Click Box - Razzmatazz`},{episodio:"125",titulo:"Resident / Episode 125 / September 28 2013",descripcion:`Part 1 Tracklist Pete Gooding & Tyrell D - Get Loaded (Tim Angrave Remix)
Rodrigo-K - Walking Towards The Sunrise (Julian Rodriguez Remix)
GMJ - This path of least resistance.
Zoo Brazil featuring Philip - Heart's a Legend (Sasse Remix)
58 BPM (Mano Le Tough Remix) Tensnake, Fiora Part 2 Tracklist Banco Di Gaia - Heliopolis [Silinder Remix]
Jonatan Ramonda - Long Way To Sky (Jelly For The Babies Remix)
Stas Drive - Arkaim (Original Mix)
Satoshi Fumi - The Messenger (Ian O Donovan Rmx)`,likes:"3",descargas:"38.5K",fecha:"2013-09-28",link:"https://mcdn.podbean.com/mf/download/ivirz/125-HernanCattaneo-2013-09-28.mp3",tracklist:`Part 1 Pete Gooding & Tyrell D - Get Loaded (Tim Angrave Remix)
Rodrigo-K - Walking Towards The Sunrise (Julian Rodriguez Remix)
GMJ - This path of least resistance.
Zoo Brazil featuring Philip - Heart's a Legend (Sasse Remix)
58 BPM (Mano Le Tough Remix) Tensnake, Fiora Part 2 Banco Di Gaia - Heliopolis [Silinder Remix]
Jonatan Ramonda - Long Way To Sky (Jelly For The Babies Remix)
Stas Drive - Arkaim (Original Mix)
Satoshi Fumi - The Messenger (Ian O Donovan Rmx)`},{episodio:"128",titulo:"Resident / Episode 128 / October 19 2013",descripcion:`Tracklist Part 1 Applescal & Ryan Davis - Creatures (Mehmet Akar's Deeper Underground Remix)
Marcelo Vasami - Zeit
Niko Mayer - Last House in BsAs (Original Mix)
Alex Niggemann - Boujuma (Matthias Meyer Remix) Tracklist Part 2 Progress Inn - Corrupt
Autim - Mission Control (Nick Robson Remix)
Antrim - For Me For You (Omar El Gamal Remix)
Navid Mehr - No ego`,likes:"7",descargas:"36.3K",fecha:"2013-10-19",link:"https://mcdn.podbean.com/mf/download/hkjumv/128-HernanCattaneo-2013-10-19.mp3",tracklist:`Tracklist Part 1 Applescal & Ryan Davis - Creatures (Mehmet Akar's Deeper Underground Remix)
Marcelo Vasami - Zeit
Niko Mayer - Last House in BsAs (Original Mix)
Alex Niggemann - Boujuma (Matthias Meyer Remix) Tracklist Part 2 Progress Inn - Corrupt
Autim - Mission Control (Nick Robson Remix)
Antrim - For Me For You (Omar El Gamal Remix)
Navid Mehr - No ego`},{episodio:"129",titulo:"Resident / Episode 129 / October 26 2013",descripcion:`Tracklist Part 1 Santi Mossman & Rodrigo Mateo - MicroCosmos ( Sahar Z Remix )
Zusammenklang - We Do
Denny Trajkov - The Talk (Original Mix)
Busy P - This Song (Andy Arias Dub Mix)
D00sh - 2013 (Tini Tun Remix) Tracklist Part 2 Marcelo Vasami - Smoog (Deepfunk Remix)
Han Haak - Hazy About Disgrace
Jelly For The Babies - Perfect blue
Seb Dhajje - Fifth Season (Nick Brennan remix)
Bookashade - Love Inc (Hot Since 82 Remix)`,likes:"3",descargas:"37.8K",fecha:"2013-10-26",link:"https://mcdn.podbean.com/mf/download/d7i2im/129-HernanCattaneo-2013-10-26.mp3",tracklist:`Tracklist Part 1 Santi Mossman & Rodrigo Mateo - MicroCosmos ( Sahar Z Remix )
Zusammenklang - We Do
Denny Trajkov - The Talk (Original Mix)
Busy P - This Song (Andy Arias Dub Mix)
D00sh - 2013 (Tini Tun Remix) Tracklist Part 2 Marcelo Vasami - Smoog (Deepfunk Remix)
Han Haak - Hazy About Disgrace
Jelly For The Babies - Perfect blue
Seb Dhajje - Fifth Season (Nick Brennan remix)
Bookashade - Love Inc (Hot Since 82 Remix)`},{episodio:"130",titulo:"Resident / Episode 130 / November 02 2013",descripcion:`Tracklist Part 1 Slow Hands - I wish I knew
Thermalbear Feat. Arrows Down - Turn The Tide (John Rosignoli Remix)
Eagles & Butterflies - Studio 54 (John Tejada remix)
Chris Fortier - Been There Used To Do That (Luis Junior Remix)
Silinder - Penthouse (GRG Deep Remix) Tracklist Part 2 Matias Fernandez Vi\xF1a - Si Me Sientes
Daneel feat Sublime - Doin\` time
Kobana & Sonic Union - Maelstrom / Unity
Khen - Voices From The Past
Underground Allstars - Night Pressure (Quivver Remix)`,likes:"3",descargas:"37.4K",fecha:"2013-11-02",link:"https://mcdn.podbean.com/mf/download/iuchxa/130-HernanCattaneo-2013-11-02.mp3",tracklist:`Tracklist Part 1 Slow Hands - I wish I knew
Thermalbear Feat. Arrows Down - Turn The Tide (John Rosignoli Remix)
Eagles & Butterflies - Studio 54 (John Tejada remix)
Chris Fortier - Been There Used To Do That (Luis Junior Remix)
Silinder - Penthouse (GRG Deep Remix) Tracklist Part 2 Matias Fernandez Vi\xF1a - Si Me Sientes
Daneel feat Sublime - Doin\` time
Kobana & Sonic Union - Maelstrom / Unity
Khen - Voices From The Past
Underground Allstars - Night Pressure (Quivver Remix)`},{episodio:"131",titulo:"Resident / Episode 131 / November 09 2013",descripcion:`Part 1 Tracklist Robert Babicz - Rosegarden
Dubspeeka - Timaeus
Luis Bondio & Cesar Lombardi - Solar Attraction (Stas Drive remix)
Marvin Zeyss - Solitary Life (Mario Aureo Remix)
Ron Hes & Steve Slight - Shoot Part 2 Tracklist Ferdinand - Souvenir
Dejan Dex - Thin Skin
Omar El Gamal - New One
Jamie Stevens - Foreign Utopia (Sonic Union Remix)
bRUNA -Youve been light to me (Marc Marzenit Back to Disco Remix)`,likes:"2",descargas:"36.4K",fecha:"2013-11-09",link:"https://mcdn.podbean.com/mf/download/tifbpt/131-HernanCattaneo-2013-11-09.mp3",tracklist:`Part 1 Robert Babicz - Rosegarden
Dubspeeka - Timaeus
Luis Bondio & Cesar Lombardi - Solar Attraction (Stas Drive remix)
Marvin Zeyss - Solitary Life (Mario Aureo Remix)
Ron Hes & Steve Slight - Shoot Part 2 Ferdinand - Souvenir
Dejan Dex - Thin Skin
Omar El Gamal - New One
Jamie Stevens - Foreign Utopia (Sonic Union Remix)
bRUNA -Youve been light to me (Marc Marzenit Back to Disco Remix)`},{episodio:"132",titulo:"Resident / Episode 132 / November 16 2013",descripcion:`Part 1 Tracklist Nutia - Papo (Lake People Remix)
Those Beats - Highrise
Pete Lazonby - Sacred Cycles (Dandy aka Peter Makto & Gregory S remix)
DAVI - The Bay 6
Olivier Weiter - Angelus Part 2 Tracklist Scotty.A - Sense of an Ending (Navar Remix)
B-Toriyama - Airport to station
Nir Shoshani Feat. Dana Rose - Make me
Dark Soul Project - Al Sur`,likes:"3",descargas:"36.2K",fecha:"2013-11-16",link:"https://mcdn.podbean.com/mf/download/3mn4st/132-HernanCattaneo-2013-11-16.mp3",tracklist:`Part 1 Nutia - Papo (Lake People Remix)
Those Beats - Highrise
Pete Lazonby - Sacred Cycles (Dandy aka Peter Makto & Gregory S remix)
DAVI - The Bay 6
Olivier Weiter - Angelus Part 2 Scotty.A - Sense of an Ending (Navar Remix)
B-Toriyama - Airport to station
Nir Shoshani Feat. Dana Rose - Make me
Dark Soul Project - Al Sur`},{episodio:"133",titulo:"Resident / Episode 133 / November 23 2013",descripcion:`Part 1 Tracklist Patlac - Firmament
Marcelo Vasami - Micro Diamond (Andrea Cassino Mix)
Jamie Stevens - Dandelion
Roni Iron - De Grecia (Nikko.Z Remix) Part 2 Tracklist Daneel - Felicidad
Antrim - Labyrinth (Silinder Remix)
Luis Bondio & Mariano Favre - The Magic Ride of Mr. RosCor (Khen remix)
Peet & Uvo - Pelagic
Michael & Levan and Stiven Rivic - Unknown (Dale Middleton Remix)`,likes:"4",descargas:"35.9K",fecha:"2013-11-23",link:"https://mcdn.podbean.com/mf/download/quf4vm/133-HernanCattaneo-2013-11-23.mp3",tracklist:`Part 1 Patlac - Firmament
Marcelo Vasami - Micro Diamond (Andrea Cassino Mix)
Jamie Stevens - Dandelion
Roni Iron - De Grecia (Nikko.Z Remix) Part 2 Daneel - Felicidad
Antrim - Labyrinth (Silinder Remix)
Luis Bondio & Mariano Favre - The Magic Ride of Mr. RosCor (Khen remix)
Peet & Uvo - Pelagic
Michael & Levan and Stiven Rivic - Unknown (Dale Middleton Remix)`},{episodio:"134",titulo:"Resident / Episode 134 / November 30 2013",descripcion:`Part 1 Tracklist Navar - The Liquid Escape 
MNR - Siphon
Danton Eeprom - FemDom
Ten Walls - Ankaris
White Rhino & Ariel AB - Galaxies at War Part 2 Tracklist UVO - When I Start To Forget (Deepfunk's Forgotten Remix)
Cristior - Lissome (Lonya and Kobb Remix)
Constan - Empire (Stas Drive remix)
Hunter Game - Keep The Other Things Out (Original Mix)`,likes:"4",descargas:"32.4K",fecha:"2013-11-30",link:"https://mcdn.podbean.com/mf/download/nipjj/134-HernanCattaneo-2013-11-30.mp3",tracklist:`Part 1 Navar - The Liquid Escape
MNR - Siphon
Danton Eeprom - FemDom
Ten Walls - Ankaris
White Rhino & Ariel AB - Galaxies at War Part 2 UVO - When I Start To Forget (Deepfunk's Forgotten Remix)
Cristior - Lissome (Lonya and Kobb Remix)
Constan - Empire (Stas Drive remix)
Hunter Game - Keep The Other Things Out (Original Mix)`},{episodio:"135",titulo:"Resident / Episode 135 / December 07 2013",descripcion:`Part 1 Tracklist
Hugo Ibarra - Camile
Chris Gavin - Nice View (Omid 16B Remix)
Mehmet Akar - Mental Health Hotline
MUUI - Standing in the Street Lights (Jamie Stevens Remix)
Neil Quigley - Rain feat. Ange

Part 2 Tracklist
Antrim - Lives Loose
Dousk - Look Good Tonight (Soulwerk Remix)
Navid Mehr - Sungazer (Silinder Remix)
Mario Kahn - Arp from th Heart (Andy Arias Remix)`,likes:"5",descargas:"32.4K",fecha:"2013-12-07",link:"https://mcdn.podbean.com/mf/download/snqwx3/135-HernanCattaneo-2013-12-07.mp3",tracklist:`Part 1
Hugo Ibarra - Camile
Chris Gavin - Nice View (Omid 16B Remix)
Mehmet Akar - Mental Health Hotline
MUUI - Standing in the Street Lights (Jamie Stevens Remix)
Neil Quigley - Rain feat. Ange

Part 2
Antrim - Lives Loose
Dousk - Look Good Tonight (Soulwerk Remix)
Navid Mehr - Sungazer (Silinder Remix)
Mario Kahn - Arp from th Heart (Andy Arias Remix)`},{episodio:"139",titulo:"Resident / Episode 139 / January 04 2014",descripcion:`Part 1 Tracklist
Checkor - Reminisce
Ant\xFC Coimbra & Ivan Melnik - Pleasure feat. Margot
The Revolving Junkie - And why not
Deaf Pillow - Deviant

Part 2 Tracklist
Marcelo Vasami - Vocal Femme
Mehmet Akar - Mental Healt Hotline 
Mathew Johnson - Lebel 7 (Dixon Remix)
Alex Niggemann - Don't Wait (Alberto Blanco & Marcelo Paladini Rework)
Smight - Magic`,likes:"11",descargas:"36.3K",fecha:"2014-01-04",link:"https://mcdn.podbean.com/mf/download/xd8qhr/139-HernanCattaneo-2014-01-04.mp3",tracklist:`Part 1
Checkor - Reminisce
Ant\xFC Coimbra & Ivan Melnik - Pleasure feat. Margot
The Revolving Junkie - And why not
Deaf Pillow - Deviant

Part 2
Marcelo Vasami - Vocal Femme
Mehmet Akar - Mental Healt Hotline
Mathew Johnson - Lebel 7 (Dixon Remix)
Alex Niggemann - Don't Wait (Alberto Blanco & Marcelo Paladini Rework)
Smight - Magic`},{episodio:"140",titulo:"Resident / Episode 140 / January 11 2014",descripcion:`Part 1 Tracklist The XX - Swept Away (New Jackson Remix)
Igor Cold - Far North Maps (Henry Saiz Far South Maps Remix)
Cosmic Boys - Zero Gravity Love (Matthias Meyer & Patlac Remix)
Sonogama - Try This
Beat Maniacs - 1992 Part 2 Tracklist Sjoerd Korsuize - Sistema ( GMJ deeper meaning mix)
Marcelo Paladini - Ultrasonic
Yuri from Russia - Psychokinesis
Alan Fitzpatrick - We are forever young Download episode on MP3 (Right click, save link as..)`,likes:"10",descargas:"33.3K",fecha:"2014-01-11",link:"https://mcdn.podbean.com/mf/download/t3izx/140-HernanCattaneo-2014-01-11.mp3",tracklist:`Part 1 The XX - Swept Away (New Jackson Remix)
Igor Cold - Far North Maps (Henry Saiz Far South Maps Remix)
Cosmic Boys - Zero Gravity Love (Matthias Meyer & Patlac Remix)
Sonogama - Try This
Beat Maniacs - 1992 Part 2 Sjoerd Korsuize - Sistema ( GMJ deeper meaning mix)
Marcelo Paladini - Ultrasonic
Yuri from Russia - Psychokinesis`},{episodio:"141",titulo:"Resident / Episode 141 / January 18 2014",descripcion:"Part 1 Tracklist Johannes Brecht - Whats about Deepmariano - Satisfaction brought it back Dandy aka Peter Makto & Gregory S - Discount Sagi Berger - Die Prinzessin Der Dunkelheit (Erdi Irmak Remix) Part 2 Tracklist Lake People - Brooklyn Love over entropy - Off the grid Manuelle Musik - No Excuse (Mario Aureo remix) OMB - Naica Crystal Oniris - Better Days Download episode on MP3 (Right click, save link as..)",likes:"5",descargas:"34K",fecha:"2014-01-18",link:"https://mcdn.podbean.com/mf/download/52rq6k/141-HernanCattaneo-2014-01-18.mp3"},{episodio:"142",titulo:"Resident / Episode 142 / January 25 2014",descripcion:"Part 1 Tracklist Yana Heinstein - Close Encounters Ten Walls - Requiem Bastards of Funk & Sonic Union - Mists of Dawn (Remix) Akra - Pure Part 2 Tracklist Ame - Den Ratta (feat. Vulkano) OMB - Naica crystal Dark Soul Project - Dancing To The Moon ( Original Mix) Gregor Tresher - Nightcolors (Garnier without the B devotions remix) Download episode on MP3 (Right click, save link as..)",likes:"4",descargas:"31.3K",fecha:"2014-01-25",link:"https://mcdn.podbean.com/mf/download/dcu8tq/142-HernanCattaneo-2014-01-25.mp3"},{episodio:"143",titulo:"Resident / Episode 143 / February 01 2014",descripcion:"Part 1 Tracklist Beacon - Bring you back (Christian Cabrera Remix) Mindaugas Jak - Deeplandia (Alex Villanueva & Kabalo in Love Remix) D'Sebastian - Save the love DJ Yoko - Sky Drive Dj Yellow & Flowers And Sea Creatures - No One Gets Left Behind (Nicolas Rada Remix) Part 2 Tracklist Uvo - When I Start to Forget (Erdi Irmak Remix) James Monro - Singularity Criss Deeper - Glittering Sky Bj\xF6rk - Moon (Antrim Unofficial Remix) Download episode on MP3 (Right click, save link as..)",likes:"4",descargas:"33.5K",fecha:"2014-02-01",link:"https://mcdn.podbean.com/mf/download/bz33fg/143-HernanCattaneo-2014-02-01.mp3"},{episodio:"144",titulo:"Resident / Episode 144 / February 08 2014",descripcion:"Part 1 Tracklist RezQ Sound - Bounce (AudioVice remix) Solaris Heights - Midnight (Neil Quigley's Zero Dark remix) Teshbe - Sundance Kid (Child Remix) Slumber - Lost in Paradise Part 2 Tracklist Ry Cuming, Frank Wiedemann - Howling (Kintar Bootleg Mix) Omar El Gamal - Kanaka Subandrio - Silicone Oasis Krisol - Si (Andrea Cassino Remix) Download episode on MP3 (Right click, save link as..)",likes:"5",descargas:"32K",fecha:"2014-02-08",link:"https://mcdn.podbean.com/mf/download/zpp678/144-HernanCattaneo-2014-02-08.mp3"},{episodio:"145",titulo:"Resident / Episode 145 / February 15 2014",descripcion:"Part 1 Tracklist Mindaugas Jak - Persona (Pole Folder Remix) Flowers Sea Creatures feat. Wrong Jeremy - The Very Next Day Viviera - Issac Remix Ryan Crosson - Take me back Namatijra - Torquay (Chicola) Part 2 Tracklist Net Son - End Of Story (RezQ Sound Remix) Cornucopia - Emotional tourist DJ Emmo - Entangled Singularity Level 2 \xA0(George Yammine Remix) Mantu - Artbridge (Habischman Remix) Luis Bondio & Cesar Lombardi - Solar Atraction Download episode on MP3 (Right click, save link as..)",likes:"9",descargas:"34K",fecha:"2014-02-15",link:"https://mcdn.podbean.com/mf/download/2ntd28/145-HernanCattaneo-2014-02-15.mp3"},{episodio:"146",titulo:"Resident / Episode 146 / February 22 2014",descripcion:`Part 1 Tracklist Klautram - Map Of Truth (UGLH, Lucio Spain Deep Mix)
Martin Roth - One Cozy Flipside
FictiOne - I Found U
Cornucopia - This is Cornucopia Part 2 Tracklist Roi Koch - Leaves (Arturo Hevia Remix)
Neil Browne - Panic Pot
Ian O' Donovan - World Away
Diego Azocar - Coming back to life
Cid Inc - Indigene (Guy J mix 2) Download episode on MP3 (Right click, save link as..)`,likes:"4",descargas:"35.6K",fecha:"2014-02-22",link:"https://mcdn.podbean.com/mf/download/crdwg4/146-HernanCattaneo-2014-02-22.mp3",tracklist:`Part 1 Klautram - Map Of Truth (UGLH, Lucio Spain Deep Mix)
Martin Roth - One Cozy Flipside
FictiOne - I Found U
Cornucopia - This is Cornucopia Part 2 Roi Koch - Leaves (Arturo Hevia Remix)
Neil Browne - Panic Pot
Ian O' Donovan - World Away
Diego Azocar - Coming back to life`},{episodio:"147",titulo:"Resident / Episode 147 / March 01 2014",descripcion:"Part 1 Tracklist Mariano Favre-Semper Fidelis (Sonic Union Remix) Mariano Favre - Semper Fidelis (Nikko.Z Remix) Conures - Neptune Blues Feat. Kirk Lake (Tone Float Remix) Marcelo Paladini - Hair (Nicholas Van Orton Remix) Robert Babicz - Venus transit (Babicz In Space Mix) Part 2 Tracklist Eelke Kleijn - Lovely Sweet Divine Ricky Ryan & Kosmas - Pied Piper Replika - Whisperer (Charles Webster Mix 2) Erik Lake - Isle Of Bes Guy Gerber & Dixon - No Distance Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"34.5K",fecha:"2014-03-01",link:"https://mcdn.podbean.com/mf/download/724dg5/147-HernanCattaneo-2014-03-01.mp3"},{episodio:"148",titulo:"Resident / Episode 148 / March 08 2014",descripcion:"Part 1 Tracklist Moby Forever - Olivier Weiter Edit Eelke Kleijn - A Tale of Two Lovers Vorbis - Hemisphere Stas Drive - Twin Souls Jelly For The Babies - Cosmopolis (Matias Larrosa & Nico Sparvieri Remix) Part 2 Tracklist Joelle Atkins - Way out there Erik Lake - Many times Grum - Tears (Dmitry Molosh Remix) Scotty.A - Perception Shapes Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"38K",fecha:"2014-03-08",link:"https://mcdn.podbean.com/mf/download/p27tu9/148-HernanCattaneo-2014-03-08.mp3"},{episodio:"149",titulo:"Resident / Episode 149 / March 15 2014",descripcion:"Part 1 Tracklist Mozaiek - Wake Dan Bodan - Hunger Games (Matias Larrosa & Nico Sparvieri Bootleg Edit) Dousk, JMP - Sensual Poke Dr. Avalance - Cuatro Contra Tres (Kieran J Remix) Dorian Decker - My First Steps Part 2 Tracklist Funk D'Void - Lambo (Juan Deminicis) Lautaro Varela - Gone (Antu Coimbra mix) Navid Mehr - Cuma Stas Drive - Arkaim (Matias Chilano Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"34.8K",fecha:"2014-03-15",link:"https://mcdn.podbean.com/mf/download/85c6ht/149-HernanCattaneo-2014-03-15.mp3"},{episodio:"150",titulo:"Resident / Episode 150 / March 22 2014",descripcion:"Part 1 Tracklist Stas Drive pres. Quattar - Arjuna Eslkimo - Lavender Cumiks - Picture Antrim - Blow Your Mind (Luis Bondio Remix) Part 2 Tracklist Timelapse - Who loves the sun Scotty A - The Heart is a Lonely Hunter (Mike Griego Remix) D-Eye - Silver moon Cut Knob - Dumb raver Alejandro Arroyo - Open Cycle Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"36K",fecha:"2014-03-22",link:"https://mcdn.podbean.com/mf/download/jmk6ux/150-HernanCattaneo-2014-03-22.mp3"},{episodio:"151",titulo:"Resident / Episode 151 / March 29 2014",descripcion:"Part 1 Tracklist JJ Grant - Signs and Wonders (Novikoff Remix) Dousk - JMP - Sensual Poke (Omid 16B, Alex George Remix) Peter Horrevorts - Monsoon Dave Seaman & Funkagenda - Naughty Forest (Nicolas Masseyeff Remix) Cristian R - Fifth Dimension Part 2 Tracklist Guido Elordi - Dauphine (Gebio Remix) Grum - Tears (Kassey Voorn Remix) Diego Poblets - Frog Rich Curtis - Freeloader (Cid Inc Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"33.1K",fecha:"2014-03-29",link:"https://mcdn.podbean.com/mf/download/ptcgzm/151-HernanCattaneo-2014-03-29.mp3"},{episodio:"152",titulo:"Resident / Episode 152 / April 05 2014",descripcion:"Part 1 Tracklist Frankie Knuckles - Whadda U Want (for me) (Frankie's Deep Dub) Marcelo Vasami - City Reflections Julian Rodriguez & Martin Berger Birdcage (Nicholas Van Orton Remix) AMAN - Tears of the Lotus (Jaap Ligthart Remix) Part 2 Tracklist Anthony Yarranton - Bag Of Bells Juan Sando - Hybrid (Progress Inn Inbred) Kasper Koman - The Void King Unique - Raydrop (7 Hours feat Natalie Arnold) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"36.2K",fecha:"2014-04-05",link:"https://mcdn.podbean.com/mf/download/3ck8xh/152-HernanCattaneo-2014-03-29.mp3"},{episodio:"153",titulo:"Resident / Episode 153 / April 12 2014",descripcion:`Part 1 Tracklist Peet and Millie Gaum - Privacy - Pole Folder Rework
Chunky Thunderbolt - The King of Paper Planes (Kriece RMX)
Tim Green - Helpless Sun feat. Hayley Hutchinson (Ryan Crosson's Mood Vocal Remix)
Li-Polymer - A Bird Inside Of Claudia
Nicolas Petracca - Echoes From Outer Space (Andy Arias Remix) Part 2 Tracklist Kevin Di Serna & Randy - Jouya
Stas Drive - Faraway suns
Ioan Gamboa - Muse
Henry Saiz - Spiricom (Damabiah)
The XX - 7Angels [Phonic Scoupe Dub Remix] Download episode on MP3 (Right click, save link as...)`,likes:"6",descargas:"33.8K",fecha:"2014-04-12",link:"https://mcdn.podbean.com/mf/download/jbn8k9/153-HernanCattaneo-2014-04-12.mp3",tracklist:`Part 1 Peet and Millie Gaum - Privacy - Pole Folder Rework
Chunky Thunderbolt - The King of Paper Planes (Kriece RMX)
Tim Green - Helpless Sun feat. Hayley Hutchinson (Ryan Crosson's Mood Vocal Remix)
Li-Polymer - A Bird Inside Of Claudia
Nicolas Petracca - Echoes From Outer Space (Andy Arias Remix) Part 2 Kevin Di Serna & Randy - Jouya
Stas Drive - Faraway suns
Ioan Gamboa - Muse
Henry Saiz - Spiricom (Damabiah)`},{episodio:"154",titulo:"Resident / Episode 154 / April 19 2014",descripcion:"Part 1 Tracklist Matias Larrosa & Nico Sparvieri - Way Back (Li-Polymer Remix) Pete Mccarthey aka on&on - Maggie (Simply City Remix) Kasall & Cristian R - Genuine Sound Ioan Gamboa - Electronic Colors Daraspa - Rendro Part 2 Tracklist Totem Pole - Studio K0 Imogen Heap - Hide and Seek (Corei Unofficial Mix) Verche - Paradigm Shift Paul Kalkbrenner - Fochleise - Kassette (Santi Mossman & Rodrigo Mateo Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"38.9K",fecha:"2014-04-19",link:"https://mcdn.podbean.com/mf/download/pzsihg/154-HernanCattaneo-2014-04-19.mp3"},{episodio:"155",titulo:"Resident / Episode 155 / April 26 2014",descripcion:`Part 1 Tracklist Terje Saether - Ambrose
Quenum - The Step
Ferdy - Intention (Pole Folder Remix)
Tvardovsky - Colours (Stas Drive Remix) Part 2 Tracklist Moderat - Damage Done [Silinder Remix]
SPHMRS - Off The Rocker [BP]
Nocturna - Microcosmos
Reset Robot - Guitar Man Download episode on MP3 (Right click, save link as...)`,likes:"11",descargas:"37.2K",fecha:"2014-04-26",link:"https://mcdn.podbean.com/mf/download/bv37fe/155-HernanCattaneo-2014-04-26.mp3",tracklist:`Part 1 Terje Saether - Ambrose
Quenum - The Step
Ferdy - Intention (Pole Folder Remix)
Tvardovsky - Colours (Stas Drive Remix) Part 2 Moderat - Damage Done [Silinder Remix]
SPHMRS - Off The Rocker [BP]
Nocturna - Microcosmos`},{episodio:"157",titulo:"Resident / Episode 157 / May 10 2014",descripcion:"Part 1 Tracklist Nick Varon- Awakening Dee Montero & AYA - Fade to Noir Joshua Cantrell vs Bjork - D-Influence Slacker - Hymn to Her(MIcah's Trilogy Tribute to Shem) Christian Prommer - Duckwalk (with Beanfield) (Dinky Remix) Part 2 Tracklist Giddyhead - There Came Nicolas Petracca - Echoes From Outer Space Scotty.A - Perception Shapes (Omar El Gamal Remix) The Echo Brothers feat. Kim Wayman - Key (Jamie Stevens Golden Return Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"35K",fecha:"2014-05-10",link:"https://mcdn.podbean.com/mf/download/3w9v7y/157-HernanCattaneo-2014-05-10.mp3"},{episodio:"158",titulo:"Resident / Episode 158 / May 17 2014",descripcion:"Part 1 Tracklist Deepfunk - Strangers ft. Yews Matthew Sands - La Musica Ioan Gamboa - Mermaids & Sea Creatures Nick Dow - Before the feast Chris Fortier - Music Makes the Body Him Self Her Remix Part 2 Tracklist Tim Penner - Ride Til Dawn Franz Lehmann - Verloren Melodie (Nicholas Van Orton Remix) Hunter Game - Antartide Lovejet - Babylon Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"36.5K",fecha:"2014-05-17",link:"https://mcdn.podbean.com/mf/download/b9zguk/158-HernanCattaneo-2014-05-17.mp3"},{episodio:"159",titulo:"Resident / Episode 159 / May 24 2014",descripcion:"Part 1 Tracklist AMAN - Cosmic Jungle (Marcelo Paladini Remix) Kastis Torrau feat Amber Long - Menace Luis Junior - Time (Lonya + Zombi Remix) Mariano Mellino & Dassie - El Globo Rojo Part 2 Tracklist Chaim - Blue Shadow (Guy Gerber's Barkan Remix) Ernest Luminor - Streeztz (Pako & Frederik Remix) Lonya & Graziano Raffa - RedRoza (Lars Wickinger Remix) Monika Kruse meets Pig & Dan - Natural High Qoob - Silencio (Napalm & d-phrag Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"38.2K",fecha:"2014-05-24",link:"https://mcdn.podbean.com/mf/download/m7edy6/159-HernanCattaneo-2014-05-24.mp3"},{episodio:"160",titulo:"Resident / Episode 160 / May 31 2014",descripcion:`Part 1 Tracklist Just Be - Another late night
Just Be - Trobled Soul
Juan Deminicis - Bedroom riddles
Nathan Fake - The Sky Was Pink (Alejo Gonzalez Bootleg) Part 2 Tracklist London Grammar - Hey Now (Sasha Remix)
Omar El Gamal - Cairo Scene (Michael A & Dmitry Molosh Remix)
Cid Inc - Darpa
Mike Griego & Stas Drive - Mocca Sunset Download episode on MP3 (Right click, save link as...)`,likes:"6",descargas:"38.6K",fecha:"2014-05-31",link:"https://mcdn.podbean.com/mf/download/3av7ij/160-HernanCattaneo-2014-05-31.mp3",tracklist:`Part 1 Just Be - Another late night
Just Be - Trobled Soul
Juan Deminicis - Bedroom riddles
Nathan Fake - The Sky Was Pink (Alejo Gonzalez Bootleg) Part 2 London Grammar - Hey Now (Sasha Remix)
Omar El Gamal - Cairo Scene (Michael A & Dmitry Molosh Remix)
Cid Inc - Darpa`},{episodio:"161",titulo:"Resident / Episode 161 / June 07 2014",descripcion:"Part 1 Tracklist Moderat - This Time (Daraspa Bootleg) Grum - Human Touch (Solaris Heights Remix) Soul Button - 7th Heaven (Dahu Remix) Bageera - Baby Boi (Deep Future Remix) Mikael Delta - New Day (Cristian R Unofficial Remix) Part 2 Tracklist Exoplanet - Intrepid Traveller Nicholas Petracca - Echoes From Outer Space (Silinder Remix) Julian Rodriguez - Tequila Al Atardecer (Erich Von Kollar Haunted Beach Remix) Arjuna Schicks - Complete (Jamie Stevens) Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"36K",fecha:"2014-06-07",link:"https://mcdn.podbean.com/mf/download/qncdby/161-HernanCattaneo-2014-06-07.mp3"},{episodio:"162",titulo:"Resident / Episode 162 / June 14 2014",descripcion:"Part 1 Tracklist Yunus - Meeting Molly (Guy J mix) Igor Vicente - Ashes Tim Green - Pleanty of Spiders Jelly for Babies - Wish Machine Marcelo Paladini - Sleep in Peace (Erdi Irmak Remix) Part 2 Tracklist Zusammenklang - By your side Biologik - Phoenix Biologik - Feed Your Soul Kasall & Cristian R - Whales Oscar Vazquez - My Way (Rich Curtis Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.3K",fecha:"2014-06-14",link:"https://mcdn.podbean.com/mf/download/s3geb9/162-HernanCattaneo-2014-06-14.mp3"},{episodio:"163",titulo:"Resident / Episode 163 / June 21 2014",descripcion:`Part 1 Tracklist
Crudito - Neurosis
One of them - Better this way
Kevin Di Serna & Santiago Franch - Stardust
Luis Santoro - Sarah
East Cafe - No Need To Hide (Diyo Remix)

Part 2 Tracklist
Paul Kalkbrenner - Sky and Sand (Robag's Borsi Alpakka Rehand)
Ioan Gamboa - Niernes
Oxia - Harmonie (Alberto Blanco & Marcelo Paladini Remake)
Daniel Avery - Knowing We'll Be Here (Kink Remix) Download episode on MP3 (Right click, save link as...)`,likes:"4",descargas:"35.1K",fecha:"2014-06-21",link:"https://mcdn.podbean.com/mf/download/tg7n5r/163-HernanCattaneo-2014-06-21.mp3",tracklist:`Part 1
Crudito - Neurosis
One of them - Better this way
Kevin Di Serna & Santiago Franch - Stardust
Luis Santoro - Sarah
East Cafe - No Need To Hide (Diyo Remix)

Part 2
Paul Kalkbrenner - Sky and Sand (Robag's Borsi Alpakka Rehand)
Ioan Gamboa - Niernes
Oxia - Harmonie (Alberto Blanco & Marcelo Paladini Remake)`},{episodio:"164",titulo:"Resident / Episode 164 / June 28 2014",descripcion:"Part 1 Tracklist Mou - Ankaa LOM - Analogue Oliver Schories - Go (Einmusik Remix) We need Cracks - Auster Boss Axis vs Rina Mushonga - Nevada (Solee Remix) vs Eastern Highlands (Joris Voorn Remix) {Rich Curtis Mashup} Part 2 Tracklist Luca Bacchetti - No Gravity D.X.Xavier - Totem Lautaro Varela - The Lonely Forest (Matias Chilano Remix) Gabriel Ananda - Smash (Rob Hes, Noraj Cue & Mark Mywords remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"39.1K",fecha:"2014-06-28",link:"https://mcdn.podbean.com/mf/download/8pkbur/164-HernanCattaneo-2014-06-28.mp3"},{episodio:"165",titulo:"Resident / Episode 165 / July 05 2014",descripcion:`Part 1 Tracklist California - Analog dream
D.X.Xavier - Dreamcatcher
Groven & Naz - Wolves Of The Deep (Cristian R Remix)
Mario M - Break the walls
Frangellico - Floating Part 2 Tracklist Moby - The Last Day (Citizen Kain Remix)
Eze Ramirez - Kaizen
Kaito - Behind My Life (Michael Mayer Mix)
Circulation - Topaz (Matias Larrosa & Nico Sparvieri Remix Edit)
London Grammar - Interlude (Antrim Unofficial Remix) Download episode on MP3 (Right click, save link as...)`,likes:"9",descargas:"39.2K",fecha:"2014-07-05",link:"https://mcdn.podbean.com/mf/download/pbvmzk/165-HernanCattaneo-2014-07-05.mp3",tracklist:`Part 1 California - Analog dream
D.X.Xavier - Dreamcatcher
Groven & Naz - Wolves Of The Deep (Cristian R Remix)
Mario M - Break the walls
Frangellico - Floating Part 2 Moby - The Last Day (Citizen Kain Remix)
Eze Ramirez - Kaizen
Kaito - Behind My Life (Michael Mayer Mix)
Circulation - Topaz (Matias Larrosa & Nico Sparvieri Remix Edit)`},{episodio:"167",titulo:"Resident / Episode 167 / July 19 2014",descripcion:`Part 1 Tracklist Ozgur Ozkan - 4U
Andrew McDonnell - No way
Memory - Childen flying
Paul Hazendonk - Urban Suitcase (Scotty.A remix) Part 2 Tracklist Years Without Days - Universe Under The Skin(Conures Deep Groove Remix)
Damabiah - Du rose sur l'oc\xE9an
Rollers For Pandas - Blackness
Marshall Watson - Do Want What You (Issac Remix)
Avilo - Rubicon (Marcelo Paladini Remix) Download episode on MP3 (Right click, save link as...)`,likes:"8",descargas:"42K",fecha:"2014-07-19",link:"https://mcdn.podbean.com/mf/download/i5vxjz/167-HernanCattaneo-2014-07-19.mp3",tracklist:`Part 1 Ozgur Ozkan - 4U
Andrew McDonnell - No way
Memory - Childen flying
Paul Hazendonk - Urban Suitcase (Scotty.A remix) Part 2 Years Without Days - Universe Under The Skin(Conures Deep Groove Remix)
Damabiah - Du rose sur l'oc\xE9an
Rollers For Pandas - Blackness
Marshall Watson - Do Want What You (Issac Remix)`},{episodio:"168",titulo:"Resident / Episode 168 / July 26 2014",descripcion:`Part 1 Tracklist Nicorus - Wie die Welt einmal davon kam (Groj Remix)
Radiohead - Videotape (Christian Cabrera Re-edit)
Julio Largente - Haiku
Omar El Gamal - Kanaka (East Cafe Remix)
Omar El Gamal - Kanaka (Simos Tagias Remix) Part 2 Tracklist Memory - Freedom
Mitaric - By your side
AIW - Vabene
LOM - Analogue Download episode on MP3 (Right click, save link as...)`,likes:"3",descargas:"42.4K",fecha:"2014-07-26",link:"https://mcdn.podbean.com/mf/download/qp4exh/168-HernanCattaneo-2014-07-26.mp3",tracklist:`Part 1 Nicorus - Wie die Welt einmal davon kam (Groj Remix)
Radiohead - Videotape (Christian Cabrera Re-edit)
Julio Largente - Haiku
Omar El Gamal - Kanaka (East Cafe Remix)
Omar El Gamal - Kanaka (Simos Tagias Remix) Part 2 Memory - Freedom
Mitaric - By your side
AIW - Vabene`},{episodio:"169",titulo:"Resident / Episode 169 / August 02 2014",descripcion:`Part 1 Tracklist Andy Arias feat Janis - Vorash Musique
Kosmas - Arpage
Kassey Voorn - Before You Fall feat. Amber Long
Hasan Mogol - Afrawald
Hasan Mogol - Spectrophobia Part 2 Tracklist Roots Panorama - Mars (Deetron)
Luciaen - The Great Amael
Ozgur Ozkan - We Don't Need A Miracle (Nikko.Z Remix)
Chaim - Remember When Download episode on MP3 (Right click, save link as...)`,likes:"4",descargas:"41.3K",fecha:"2014-08-02",link:"https://mcdn.podbean.com/mf/download/rb9nw6/169-HernanCattaneo-2014-08-02.mp3",tracklist:`Part 1 Andy Arias feat Janis - Vorash Musique
Kosmas - Arpage
Kassey Voorn - Before You Fall feat. Amber Long
Hasan Mogol - Afrawald
Hasan Mogol - Spectrophobia Part 2 Roots Panorama - Mars (Deetron)
Luciaen - The Great Amael
Ozgur Ozkan - We Don't Need A Miracle (Nikko.Z Remix)`},{episodio:"170",titulo:"Resident / Episode 170 / August 09 2014",descripcion:"Part 1 Tracklist AudioStorm - Feel Me AudioStorm - Machu Picchu Napalm & D-Phrag - Strange Dimensions (Kissoff Remix) Pablo Cetrini- \xA0Pleasure Part 2 Tracklist Guy Mantzur & Khen - Highway of Regrets Luciaen - The great Amael Mike Griego - Sofia Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"46.8K",fecha:"2014-08-09",link:"https://mcdn.podbean.com/mf/download/mkf5qy/170-HernanCattaneo-2014-08-09.mp3"},{episodio:"171",titulo:"Resident / Episode 171 / August 16 2014",descripcion:"Part 1 Tracklist Bob Zopp & \xA0Naz - Gaya (Verche) Greg Benz & Chris Micali - Got Me Wondering [Dousk Remix] Omid 16B - Free (Kevin Di Serna feat. Aless Mix) Dj Frazier - Hey Coco! Part 2 Tracklist Cream & Deep Fog - Tears Of An Angel (Antu Coimbra Remix) SOHN - Lights (Erdi Irmak Edit) Jorgio Kioris - Minerals (Erich Von Kollar Double Dose Remix) David Granha - Catch Me (Pedro Aguiar Remix) Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"45.4K",fecha:"2014-08-16",link:"https://mcdn.podbean.com/mf/download/bcafky/171-HernanCattaneo-2014-08-16.mp3"},{episodio:"172",titulo:"Resident / Episode 172 / August 23 2014",descripcion:"Part 1 Tracklist Paul Hazendonk & Noraj Cue feat. Alice Rose - In The Dark (Darin Epsilon Remix) Soulwerk - The Lost Paradice (Luis Bondio Remix) Thomas Smith & Issac - Unknown Nicolas Petracca - We can Part 2 Tracklist LOM - Drops Secret Cinema & Max D - Loved-Martina (Jamie Stevens Remix) Daneel - No sleep Blond:ish- Birds Eat Birds Kassey Voorn - Before You Fall feat. Amber Long Download episode on MP3 (Right click, save link as...)",likes:"1",descargas:"39.1K",fecha:"2014-08-23",link:"https://mcdn.podbean.com/mf/download/jxgprq/172-HernanCattaneo-2014-08-23.mp3"},{episodio:"173",titulo:"Resident / Episode 173 / August 30 2014",descripcion:"Part 1 Tracklist Renato Ratier- 3 \xA0Bulls (MANDY Remix) Anthony Middleton - Waves (Marcelo Vasami Rework) Miss Melera - Faith Solee - Traumschiff (2014 Outro Version) Part 2 Tracklist Blondish - Wunderkammer Of Norway - Running Lights Andre Sobota - Fallout Ewan Rill & Anton Ttx - Reason To Live (Hugo Ibarra & Uvo Remix) Dark Soul Project - Beautiful Life (Original Mix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"44.4K",fecha:"2014-08-30",link:"https://mcdn.podbean.com/mf/download/79yxm8/173-HernanCattaneo-2014-08-30.mp3"},{episodio:"174",titulo:"Resident / Episode 174 / September 6 2014",descripcion:"Part 1 Tracklist Sea - Cosmic Love (Stas Drive remix) Sea - Bajo de las Estrellas Dusky - 4T4 Alejandro Arroyo & Kled Baken-United under music Part 2 Tracklist Nicolas Rada - Idle Manuel Sofia - Source & Destination Federico Monachesi - Lunar tide Progress Inn - Veterans John Digweed & Nick Muir - Gigawave ( Fairmont Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.9K",fecha:"2014-09-06",link:"https://mcdn.podbean.com/mf/download/j8nd2s/174-HernanCattaneo-2014-09-06.mp3"},{episodio:"175",titulo:"Resident / Episode 175 / September 13 2014",descripcion:"Part 1 Tracklist Fish From Japan - Carry On (Dub Mix) JJ Salinas - Cinerama Dranga - Holographic (Niko Mayer Rmx) Michael A - Magic Superpitcher - Delta Part 2 Tracklist Huminal - Morning Raiser Criss Deeper - Dynamique Billy Alex - Sparkle (Ezequiel Anile & Nicolas Petracca Remix) Jelly For The Babies & Marc Pollen - Flow Motion (Sehat & Sobek Remix) Andre Sobota - Southern Sundance Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"44K",fecha:"2014-09-13",link:"https://mcdn.podbean.com/mf/download/bfsuhp/175-HernanCattaneo-2014-09-13.mp3"},{episodio:"177",titulo:"Resident / Episode 177 / September 27 2014",descripcion:"Part 1 Tracklist Marsbeing - Thread VS Tom Odell - Another Love ( Claes Rosen Mashup ) Magshine - Cosmic Matrix (Stas Drive star matrix remix) &ME - After Dark (Brian Cid) Namespace Feat Amber Long - Turning Back (Dub) Skena - The Next Act Part 2 Tracklist Giddyhead - Tears Apart Marc Romboy & Stephan Bodzin - Callisto (Daneel Reinterpretation Remix) Cutlab - Loud Kissin (Maxi Iborquiza Boot) Cid Inc vs. Darin Epsilon - Outliers Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"50.8K",fecha:"2014-09-27",link:"https://mcdn.podbean.com/mf/download/i2b74u/177-HernanCattaneo-2014-09-27.mp3"},{episodio:"178",titulo:"Resident / Episode 178 / October 4 2014",descripcion:"Part 1 Tracklist Clarian - Wasting Away Again in Moderation Nachklangmusik - One Small Step (Noraj Cue Remix) Vanita - Distance (James Teej Remix) Antrim & Claudio Cornejo - Kalahari (Nicholas Van Orton remix) Shlomi Aber - Tel Aviv Garden (Nic Fanciulli Remix) Part 2 Tracklist Han Haak - Slaves in transit (Paul Deep Remix) Push the Bad Times - Exek (No Master) Stanisha - Guardian Of The East Deas - Freon (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"42.6K",fecha:"2014-10-04",link:"https://mcdn.podbean.com/mf/download/p87fjm/178-HernanCattaneo-2014-10-02.mp3"},{episodio:"179",titulo:"Resident / Episode 179 / October 11 2014",descripcion:"Part 1 Tracklist Marcelo Vasami - Animals Maxi Iborquiza - Elephants & Butterflys Jemmy - Breathe In ft. Leza Boyland Daniel Bortz - Pictures (Tuff City Kids Dub Mix) EL Mundo - Soulshift Part 2 Tracklist Khen & Sonic Union - Driven By Demand (Pole Folder Remix) Maher Daniel - A Call From Within SiYuder - Open Your Eyes (Nick Warren Remix) Rashid Ajami - Darya (AFFKT Remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"52.6K",fecha:"2014-10-11",link:"https://mcdn.podbean.com/mf/download/f6bqmp/179-HernanCattaneo-2014-10-11.mp3"},{episodio:"180",titulo:"Resident / Episode 180 / October 18 2014",descripcion:"Part 1 Tracklist Stephan Bodzin - Sungam Matthias Meyer - Lagonia Martin Roth - Maya Compuphonic - O Cypres Pedro Mercado & Karada - A Tale Of You (Jimmy Van M Luxor T Remix) Part 2 Tracklist Gunjah - Tick Of The Bass (Original Mix) Inxec - Remember Manu F - Intervencion Divina (Luca Rossi Remix) Darius Bassiray - If You're Lost I'll Be Your Shadow (Deepchild Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"47.4K",fecha:"2014-10-18",link:"https://mcdn.podbean.com/mf/download/392x6h/180-HernanCattaneo-2014-10-18.mp3"},{episodio:"181",titulo:"Resident / Episode 181 / October 25 2014",descripcion:"Part 1 Tracklist El Mundo - Ashram (Dilby Remix) Patlac - Opus Gab Rhome - Shattered Ditian - Corina Part 2 Tracklist Mike Griego - Sofia (Guy Mantzur dub) Gus Gus - Obnoxiously Sexual (Patrice Baumel Mix) Mike Griego - All I Had Vince Watson - Rock it Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"51K",fecha:"2014-10-25",link:"https://mcdn.podbean.com/mf/download/uicxja/181-HernanCattaneo-2014-10-25.mp3"},{episodio:"182",titulo:"Resident / Episode 182 / November 01 2014",descripcion:"Part 1 Tracklist Egokind & Ozean - Mega EugeneToale - Tonality Of The Atom Matias Vila - Ruta Seta (D.X. Xavier Remix) Navar - Jereko (Chaim Remix) Part 2 Tracklist Interaxxis - Ghost Pional - In Another Room (Nicolas Petracca Unofficial Remix) Christian Pommer - Marimba (Jon Charnis Remix) GusGus - Airwaves (Juan Deminicis & Pablo Acenso Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"43.9K",fecha:"2014-11-01",link:"https://mcdn.podbean.com/mf/download/5cgaxs/182-HernanCattaneo-2014-11-01.mp3"},{episodio:"183",titulo:"Resident / Episode 183 / November 08 2014",descripcion:"Part 1 Tracklist Moderat - Versions (Naveen G remix) Antu Coimbra, Hugo Ibarra & Uvo - \xA0Robots dont go to Heaven Marcelo Vasami - Laval Station (Tash a La Gare Profonde Remix) Sound Process - Shivering Part 2 Tracklist Navar - Moments In Life (16 Bit Lolitas Remix) Lonya & Mike Griego - Acid Culture (Roger Martinez Remix) Dale Middleton - Tord Livio & Roby - Ananda (Luca Bacchetti Endless Remix) Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"49.8K",fecha:"2014-11-08",link:"https://mcdn.podbean.com/mf/download/nexr28/183-HernanCattaneo-2014-11-08.mp3"},{episodio:"184",titulo:"Resident / Episode 184 / November 15 2014",descripcion:"Part 1 Tracklist Navar - Moments In Life (Original Mix) Kasey Taylor & Lister Cooray - Fluidlife Olivier Weiter - Takkie (Einmusik Remix) Wigbert - Nobody (Pascal Feos Remix) Part 2 Tracklist Grum - Autumn (Petar Dundov Remix) Kay Aka Khalil Touihri-Words Of Wisdom Egokind & Ozean - Everybody Dance Now Sven Vath - L'esperanza (Ame Reinterpretation) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"52.8K",fecha:"2014-11-15",link:"https://mcdn.podbean.com/mf/download/vqb8fa/184-HernanCattaneo-2014-11-15.mp3"},{episodio:"185",titulo:"Resident / Episode 185 / November 22 2014",descripcion:"Part 1 Tracklist Rodriguez Jr. - Mistral Andy Arias - Before The Action (Stas Drive remix) Simos Tagias - Drunk State (Andrea Cassino Remix) Diyo - The Final True Madloch - Walls (King Unique Remix) Part 2 Tracklist Sasha - Mongoose (Tini Tun Remix) Lonya - Iron Door Chicola - Falling Down Michael A - Magic Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"50.5K",fecha:"2014-11-22",link:"https://mcdn.podbean.com/mf/download/txckb8/185-HernanCattaneo-2014-11-22.mp3"},{episodio:"187",titulo:"Resident / Episode 187 / December 06 2014",descripcion:"Part 1 Tracklist Darren Roach - Distract German Angeleri - Yellow Fever (Scott Williams Remix) Ameza - No more secrets (Marcelo Vasami Remix) AudioStorm - Mind Prison (Original Mix) Part 2 Tracklist DDamon Albarn - Hostiles (Maxi Iborquiza Boot) BLOT! feat. Lifafa - Empire Waste Mariano Mellino & Dassie - Kai Jin (Praveen Achary Remix) Diego Berrondo - Revolution Frangellico - Girl on Girl Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"44.3K",fecha:"2014-12-06",link:"https://mcdn.podbean.com/mf/download/pwmvuq/187-HernanCattaneo-2014-12-06.mp3"},{episodio:"188",titulo:"Resident / Episode 188 / December 13 2014",descripcion:"Part 1 Tracklist Agoria - Under The River (YokoO's Above The Clouds Live Edit) Rougemont - Bittersweet Thing Ezequiel Arias - If we Kevin Toro - Beautiful Illusion Part 2 Tracklist Randall Jones & Dani Hageman - Angel Fernando Ferreyra - Times (East Cafe Remix) Alex Niggemann - Sorrow feat. Bon Homme (Deetron Remix) Derek Howell - Interstellar Homecoming Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"45K",fecha:"2014-12-13",link:"https://mcdn.podbean.com/mf/download/mf4pz7/188-HernanCattaneo-2014-12-13.mp3"},{episodio:"189",titulo:"Resident / Episode 189 / December 20 2014",descripcion:"Part 1 Tracklist Stas Drive - Inspired By Her Melokolektiv & Konvex AND The Shadow - Reflections Bookashade - Back to Monza Dartek - Offshore (Andy Arias Extended Mix) Part 2 Tracklist Daneel - No sleep Denis A - Heroin (Alberto Blanco & Marcelo Paladini Unofficial Remix) Diego Azocar - Homenaje (Weird Sounding Dude Remix) Guy J- Candyland (King Unique Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"45.3K",fecha:"2014-12-20",link:"https://mcdn.podbean.com/mf/download/ux6t5n/189-HernanCattaneo-2014-12-20.mp3"},{episodio:"190",titulo:"Resident / Episode 190 / December 27 2014",descripcion:"Part 1 Tracklist Roger Martinez - Garajonay Audio Noir.Under - The Sun (Pole Folder & Cedric Piret Remix) MUUI - Polkadot Syndrome Lehar - Sargas (Mario Basanov Remix) Part 2 Tracklist DAVI - Eclipse Nick Warren - Golden Cap Facundo Mohrr - Clinic Andrea Cassino - De Los Alpes A Los Andes Maceo Plex - Conjure Dreams Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"43.2K",fecha:"2014-12-27",link:"https://mcdn.podbean.com/mf/download/k5dn3f/190-HernanCattaneo-2014-12-27.mp3"},{episodio:"191",titulo:"Resident / Episode 191 / January 03 2015",descripcion:"Part 1 Tracklist Leman & Dieckmann, MS. O - Takes Two Louie Fresco - So Good Interlude (Thugfucker Remix) Leman & Dieckmann - Reset DAVI - The Gates of Babylon Part 2 Tracklist Art Department - Cruel Intentions feat. Seth Troxler (Jerome Sydenham Deep Space Dub) Maxi Iborquiza - Loves & hates (Daneel Remix 2014) Amber Long, Robert Mason, Decker - Apologies (Cid Inc. dub mix) Dark Soul Project Presents Dancing With Myself - You Close Your Eyes Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"50.3K",fecha:"2015-01-03",link:"https://mcdn.podbean.com/mf/download/aq6bsc/191-HernanCattaneo-2015-01-03.mp3"},{episodio:"192",titulo:"Resident / Episode 192 / January 10 2015",descripcion:"Part 1 Tracklist Steppenwolf - Asselian Neil Quigley - Here Goes Nothing Slick - Way out Nick Varon & The Syndrome - Walking Towards The End Ignacio V - Devil Blues Part 2 Tracklist Nhar - In spaces between Diego Poblets - Waves (Namatjira Remix) Untold Stories - Broken Tusk Henry Saiz - We drown together Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"43.8K",fecha:"2015-01-10",link:"https://mcdn.podbean.com/mf/download/2gqkua/192-HernanCattaneo-2015-01-10.mp3"},{episodio:"193",titulo:"Resident / Episode 193 / January 17 2015",descripcion:"Part 1 Tracklist Eduardo de la Calle - Gajapati Kellerkind - Move Me (Joachim Pastor Remix) Mind Against - Strange Days (Recondite Remix) Mind Against - Polarstern Applescal & Ryan Davis - Creatures (N'Pot Unofficial Remix) Part 2 Tracklist Mariano Mellino & Maxi Degrassi - Molly Ditian - Dream on dreamer Sea - Young Lovers Searching Stars (Stas Drive Remix) D33P, Jos & Eli - Galactica (Original Mix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"43.3K",fecha:"2015-01-17",link:"https://mcdn.podbean.com/mf/download/9ufj6h/193-HernanCattaneo-2015-01-17.mp3"},{episodio:"194",titulo:"Resident / Episode 194 / January 24 2015",descripcion:"Part 1 Tracklist Monojoke - Metal (GMJ alchemy meld) Barem - Vanda Matthew Herbert - it's only (dj koze remix) (Jaap Ligthart Reconstruction) Jagwar Ma - Backwards Berlin (Nicolas Rada Remix) Part 2 Tracklist Ellen Allien - Butterfly (Ditian 'High' Mix) Dousk - Look Good Tonight (Nocturna Remix) Diego Berrondo & Rodrigo Kesovija - Memories [Lucas Rossi Remix] Joris Voorn - The Wild Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"51.7K",fecha:"2015-01-24",link:"https://mcdn.podbean.com/mf/download/hpd9vs/194-HernanCattaneo-2015-01-24.mp3"},{episodio:"195",titulo:"Resident / Episode 195 / January 31 2015",descripcion:"Part 1 Tracklist Animal Picnic - Gravity Sotela & Javier Portilla ft. Emalaine - Your Eyes (King Unique Remix) Joris Voorn - Fall (Vinyl Mix) Marc Marzenit - To Love Until We Say Goodbye (Omar El Gamal Remix) Part 2 Tracklist Motorcycle - As The Rush Comes (Omar El Gamal Unofficial Remix) Ran Salman - Zephyr Gabriel Nery - Time To Learn Gonno - 1227 To The End Slowly Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"46.5K",fecha:"2015-01-31",link:"https://mcdn.podbean.com/mf/download/aerqmd/195-HernanCattaneo-2015-01-31.mp3"},{episodio:"197",titulo:"Resident / Episode 197 / February 14 2015",descripcion:"Part 1 Tracklist David Sausan - There was a pain (a lot of pain HEisen. rework) Breccia - Bielik Pentatones - Karma Game (Steve Bug Retouch) Aaryon & Ran Salman - Riptide Part 2 Tracklist Sakorka - Love Is Over (Audio Junkies Remix) Oliver Lieb - Covolution Bruno Caro - Dilema Soulwerk - Genesis Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"44.2K",fecha:"2015-02-14",link:"https://mcdn.podbean.com/mf/download/9u8p7e/197-HernanCattaneo-2015-02-14.mp3"},{episodio:"198",titulo:"Resident / Episode 198 / February 21 2015",descripcion:"Part 1 Tracklist Radkovski - One day Joel Mull & Sasha - Pale Reich Damabiah - Atlantique Clarian - Castaway (Henry Saiz Remix) Part 2 Tracklist Ezequiel Anile & Nicolas Petracca - Nothing is What it Seems (Rich Curtis Remix) Ezequiel Anile & Nicolas Petracca - Nothing Is What It Seems (Soulwerk Remix) KU - 7 Hours feat. Natalie Arnold (Dubspeeka Dub Mix) Neil Brown - Clear (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"40K",fecha:"2015-02-21",link:"https://mcdn.podbean.com/mf/download/hdc2x3/198-HernanCattaneo-2015-02-21.mp3"},{episodio:"199",titulo:"Resident / Episode 199 / February 28 2015",descripcion:"Part 1 Tracklist Marcelo Vasami - Destiny BP - Minisoul Drew Hill - Follow us Facundo Mohrr - 30 Amsterdam Part 2 Tracklist Interaxxis - Natural Fear (Baunder remix) Facundo Mohrr - Lost Ignas Klej - People (Phonic Scoupe Remix) Simos Tagias - Remain Strong Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"41.3K",fecha:"2015-02-28",link:"https://mcdn.podbean.com/mf/download/npzmwt/199-HernanCattaneo-2015-02-28.mp3"},{episodio:"200",titulo:"Resident / Episode 200 / March 07 2015",descripcion:"Part 1 & 2 Live from Budapest : Feb 2015 Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"55.2K",fecha:"2015-03-07",link:"https://mcdn.podbean.com/mf/download/gh3z5n/200-HernanCattaneo-2015-03-07.mp3"},{episodio:"201",titulo:"Resident / Episode 201 / March 14 2015",descripcion:"Part 1 Tracklist Tara Brooks - Shaped And Shifted Magnetic Brothers - Should Be Together (Erdi Irmak Remix) Subandrio - Distinct Legacy Manu F - This doesn't kill me Part 2 Tracklist Audiostorm - Mind Prision (Alex Vidal Remix) Some Little Things - Carnaval Antrim - Koto Michael A - Slow (Andrea Cassino Remix) Nick Warren & Guy Mantzur - Sad Robot (Musumeci Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"44K",fecha:"2015-03-14",link:"https://mcdn.podbean.com/mf/download/3g4kdn/201-HernanCattaneo-2015-03-14.mp3"},{episodio:"202",titulo:"Resident / Episode 202 / March 21 2015",descripcion:"Part 1 Tracklist Nicolas Petracca - Love In Sunset (Pete Mccarthey VS ON&ON SubSub Remix) Lonya - Tilll (Jelly For The Babies Remix) James Grow - Raquet Interaxxis - Natural Fear (Sahar Z & Khen) Part 2 Tracklist 16 Bit Lolitas - Not The Only One Alex Villanueva & Kaban - The Warm Moods (qoob Remix) Mario Puccio - Calling to my Heart Federico Monachesi - Selenelion Deepfunk \xA0- Secret Souls (Petar Dundov Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.7K",fecha:"2015-03-21",link:"https://mcdn.podbean.com/mf/download/w3gf6m/202-HernanCattaneo-2015-03-21.mp3"},{episodio:"203",titulo:"Resident / Episode 203 / March 28 2015",descripcion:"Part 1 Tracklist Roy RosenfelD, Guy Mantzur - Deeyo Magnetic Brothers - Glimpses (Robert R. Hardy Remix) Nick Warren & Guy Mantzur - Sad Robot XXXY - 18 Hours Part 2 Tracklist IanDillon - TheRabbitHole (OPLMix) Omar El Gamal - All Right Good Omar El Gamal - Turning Around In Circles Oliver Lieb - Convergence Darin Epsilon - Denpasar Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"41.3K",fecha:"2015-03-28",link:"https://mcdn.podbean.com/mf/download/4wyaeh/203-HernanCattaneo-2015-03-28.mp3"},{episodio:"204",titulo:"Resident / Episode 204 / April 04 2015",descripcion:"Part 1 Tracklist Franco Tejedor & Martin Gardoqui - Rosetta (Paul Deep Remix) Human Life & Anabel Englund - El Diablo (Chaim Remix) Pedro Aguilar - Land of the lost Groj - Tofferica Part 2 Tracklist Sirenize - Everybody Ruede Hagelstin - Soul Dynamic (Fur Coat Remix) Alex Villanueva - Rayne (Lonya Remix) Love Over Entropy - Tonii (Dixon Retouch) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"38.2K",fecha:"2015-04-04",link:"https://mcdn.podbean.com/mf/download/2vqbn4/204-HernanCattaneo-2015-04-04.mp3"},{episodio:"205",titulo:"Resident / Episode 205 / April 11 2015",descripcion:"Part 1 Tracklist Qoob - New York Lonya - Consensus Must (C9 Remix) Chicola - Addicted (Guy Mantzur) Chaim - Can't Wait To C U Part 2 Tracklist Stas Drive - Carnival 69 LOM - Drops (Stas Drive Remix) Beat Syndrome - Magnolia (Lonya & Maydan Remix) Sasha - Vapourspace Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"37.9K",fecha:"2015-04-11",link:"https://mcdn.podbean.com/mf/download/krms6p/205-HernanCattaneo-2015-04-11.mp3"},{episodio:"207",titulo:"Resident / Episode 207 / April 25 2015",descripcion:"Part 1 Tracklist Pedro Aguiar - Cloud Nine Andrew McDonnell - Holywell Lane AudioStorm - Machu Picchu (Nicholas Van Orton Remix) Simos Tagias - Blue Sun Part 2 Tracklist Tash - Days Off (Stas Drive Remix) Tom Middleton - Shinkansen (Jaap Ligthart Edit) Brian Cid - Berlin Wax Phonic Scoupe - Harvest Dance Tim Penner feat Amber Long - Forgive Me (Kassey Voorn & Turner Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"35.1K",fecha:"2015-04-25",link:"https://mcdn.podbean.com/mf/download/cf9p6j/207-HernanCattaneo-2015-04-25.mp3"},{episodio:"208",titulo:"Resident / Episode 208 / May 02 2015",descripcion:"Part 1 Tracklist Gadi Mitrani - Key of Stillness Jonatan Ramonda - Nave 088 (Diego Azocar Remix) Sebastien Busto - Bad Man in heaven (GMJ heaven on earth mix) Tara Brooks and Ido - Desiderata Part 2 Tracklist Amber Long & Robert Mason - Aquatica Kobana - Fly (Derek Howell Remix) Tripswitch - Unconventional (Nick Brennan Remix) Dmitry Molosh - High Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"35.9K",fecha:"2015-05-02",link:"https://mcdn.podbean.com/mf/download/wk3zyc/208-HernanCattaneo-2015-05-02.mp3"},{episodio:"209",titulo:"Resident / Episode 209 / May 09 2015",descripcion:"Part 1 Tracklist Satoshi Tomiie - New Day Feat. John Schmersal Marcelo Vasami - Why Not Tobias Linden - The Spell Tech D - Corpuscular Guy Gerber, Puff Daddy - Tourist Trap (Visionquest Remix) Part 2 Tracklist Mononoid - Probes Agoria - Alluvion Constan - Open your eyes Stephan Bodzin - Sungam (Rodriguez Jr. Remix) Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"36.8K",fecha:"2015-05-09",link:"https://mcdn.podbean.com/mf/download/ct9gju/209-HernanCattaneo-2015-05-09.mp3"},{episodio:"210",titulo:"Resident / Episode 210 / May 16 2015",descripcion:"Part 1 Tracklist Deep Mariano & Yoshitaca - Rewind The Fantasies Michael A - Transitions Cani - Psique (Balcazar & Sordo Remix) SeamLess Beat - Freedom Part 2 Tracklist Ezequiel Arias - Sometimes Dale Middleton - Copper Top (Derek Howell Remix) Dale Middleton - Copper Top Stenrnberg - Lost in Reverie Cid inc. and Darin Epsilon - Outliers (Dmitry Molosh Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"36.2K",fecha:"2015-05-16",link:"https://mcdn.podbean.com/mf/download/s8pnic/210-HernanCattaneo-2015-05-16.mp3"},{episodio:"211",titulo:"Resident / Episode 211 / May 23 2015",descripcion:"Part 1 Tracklist \xD6ona Dahl & Tini Tun - All Around Us Coyu - Just Nin (Andre Lodemann Remix) Damian Lazarus & The Ancent Moons - Vermillion (Deniz Kurtel Remix) Nahue Juarez - Thunderstorm (Original Mix Re-edit) MUUI - Elsa Part 2 Tracklist Recondite - Think Twice Hunter Game - Genesis (Ripperton) Johannes Brecht - Nuages Wrong Jeremy Feat Flowers And Sea Creatures, Augustine Wrong - Dimly Lit (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.9K",fecha:"2015-05-23",link:"https://mcdn.podbean.com/mf/download/s6t8fw/211-HernanCattaneo-2015-05-23.mp3"},{episodio:"212",titulo:"Resident / Episode 212 / May 30 2015",descripcion:"Part 1 Tracklist Tuxedo - Standing In Rain (Demian Moreno Dub Mix) Flash & The Pan - Walking in the rain (Bramuss Remix) Danny Lloyd - Espejismo GMJ - Distance Pass (Marcelo Paladini Remix) Medicine - Reflect Part 2 Tracklist Eukali & Gonza Rodriguez - Tri-Border (Nicolas Rada Remix) Kaan Koray - Love Dark Soul Project & Mathov - Memories Of All Good Times Cid Inc & Darim Epsilon - Outliers (Christopher FaFa \xA0Remix) Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"35.9K",fecha:"2015-05-30",link:"https://mcdn.podbean.com/mf/download/7ah4fk/212-HernanCattaneo-2015-05-30.mp3"},{episodio:"213",titulo:"Resident / Episode 213 / Jun 06 2015",descripcion:"Part 1 Tracklist Davi - Ilussion Davi - Metanoia Riverside Drive - Earth to Mars (Peter Makto & Gregory S Remix) Kevin Toro - Easy Smile Uvo & Lautaro Varela - Dreamcacher (Nikko.Z Dub Mix) Part 2 Tracklist Jonas Saalbach & Tschoris - Walking In The Shadows Howling - Stole the Night (Ame Remix) Eran Aviner - Copperfield Guy J - Stolen Memory (Guy Mantzur) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"37.9K",fecha:"2015-06-06",link:"https://mcdn.podbean.com/mf/download/h6dxe9/213-HernanCattaneo-2015-06-06.mp3"},{episodio:"214",titulo:"Resident / Episode 214 / Jun 13 2015",descripcion:"Part 1 Tracklist Trulyors - Expeditions (Grandmoms Hands Remix) Marc Poppcke - Goodbye Mansionair - Hold me down (Maxi Iborquiza Boot) Beacon - Fault Lines (Dauwd Remix) DAVI - Ordinary Nightmares Part 2 Tracklist Bjork - Stonemilker (Maxi Iborquiza Boot) Unknown - Mantra (Henrik Zuberstein) Robert Babicz - Bassporn (Guy Mantzur Remix) Sasha - Ether Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"38.1K",fecha:"2015-06-13",link:"https://mcdn.podbean.com/mf/download/jyetfq/214-HernanCattaneo-2015-06-13.mp3"},{episodio:"216",titulo:"Resident / Episode 216 / Jun 27 2015",descripcion:"Part 1 Tracklist Greg Tomaz - Through the Dark Matter Gorje Hewek, Izhevski - Calinerie Nicolas Jaar - Touristas (Daraspa Unofficial Remix) Gorje Hewek, Izhevski - Heimat Part 2 Tracklist Abity & Velazco - Stout Marco Gayo - L'Instinct Billy Alex - Evidence Alfoa - Schedar (Matteo Monero Remix) GH - Persistence (Andy Arias Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"35.2K",fecha:"2015-06-27",link:"https://mcdn.podbean.com/mf/download/w3nkh2/216-HernanCattaneo-2015-06-27.mp3"},{episodio:"217",titulo:"Resident / Episode 217 / Jul 04 2015",descripcion:"Part 1 Tracklist Roger Martinez - Downriver Cid Inc - Orbiter Arnas D - Satellite Oosfera - Azul (Dario Arcas interpretation) Michael A - Edge (GMJ mix) Part 2 Tracklist Dj T - The Growing feat. Nick Maurer Raw District -Tell no one Marten Sundberg - Fear of war Casper, Mind Cure, Ewan Rill - I see Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"37.9K",fecha:"2015-07-04",link:"https://mcdn.podbean.com/mf/download/8uchqd/217-HernanCattaneo-2015-07-04.mp3"},{episodio:"218",titulo:"Resident / Episode 218 / Jul 11 2015",descripcion:"Part 1 Tracklist Thomalla - Pataphysics Art Department - Walls (DJ Tennis Remix) Laurent Garnier - Drifting in midwaters Antrim & Luis Bondio - Hope On The Moon (Andrea Cassino Remix) Mathew Lynch - Theory of everything Part 2 Tracklist Namatjira - Unknown Source Issac - The Monster In Your Head Nicolas Ruiz - Calliope Julien Piacentino, Philip Pioge - Blue Flower (Anton Dhouran Cinematic Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.5K",fecha:"2015-07-11",link:"https://mcdn.podbean.com/mf/download/j623xm/218-HernanCattaneo-2015-07-11.mp3"},{episodio:"219",titulo:"Resident / Episode 219 / Jul 18 2015",descripcion:"Part 1 Tracklist Jelly for the babies - Things Unspoken Exoplanet - Refraction (East Cafe Remix) DS & Bedouin - Late Night Early Mornings (Leo Conovaloff Rework) Nahue Juarez & N'Pot - Selcouth Part 2 Tracklist Hermanez & BP - Octa Motus Dustin Nantais - Makes Me Feel (Stas Drive Remix) Stas Drive - Supernature Kites for August - Animal Print - Lecter, Marco Cuba Love Over Entropy - Tucaroya Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"35.2K",fecha:"2015-07-18",link:"https://mcdn.podbean.com/mf/download/3at7j6/219-HernanCattaneo-2015-07-18.mp3"},{episodio:"220",titulo:"Resident / Episode 220 / Jul 25 2015",descripcion:"Part 1 Tracklist Cid Inc - Gibil Arthur Oskan - Today Simos Tagias - Straight to the sky Ryan Crosson - Cadets in heat Part 2 Tracklist Mariano Mellino & Juan Astudillo - Kanikoom Bob Zopp & Naz - A morte Mariano Mellino & Robots Cry - Tempelhofer Hermanez - Irritates me Diego Azocar - Apocalypse Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"37.5K",fecha:"2015-07-25",link:"https://mcdn.podbean.com/mf/download/s9ywak/220-HernanCattaneo-2015-07-25.mp3"},{episodio:"221",titulo:"Resident / Episode 221 / Aug 01 2015",descripcion:"Part 1 Tracklist Dario Arcas & Nico Bertoni - Morning Numb Rico Casazza - Next Evidence Deep In Calm - Empty inside (Taisuke Chiba Remix) Light To Motion - Express Your Self (Approved Electronic Device Dub) Conures - Western Europe Part 2 Tracklist Kissoff - Outland Borders (Nicholas Van Orton Remix) Mark Lahsen - One Way Only (Luis Del Vecchio Remix) Verche \xA0- Utopia Island Booka Shade presents: Yaruba - Black Cow Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"35.7K",fecha:"2015-08-01",link:"https://mcdn.podbean.com/mf/download/phw927/221-HernanCattaneo-2015-08-01.mp3"},{episodio:"222",titulo:"Resident / Episode 222 / Aug 08 2015",descripcion:"Part 1 Tracklist AEONIX - A Star Was Born feat Kelly Day (Charles Webster Remix) Javier Portilla, Sotela - Your Eyes Ft. Emalaine (Juan Deminicis & Pablo Acenso Remix) Erdi Irmak - This Time (David Calo Remix) Melokolektiv - Djanka Part 2 Tracklist Raw District Feat. Aquarius Heaven - Her Mind (Martin Buttrich Remix) Emma Lock - Pure happiness (Maxi Iborquiza Remix) Eekkoo, Flowers & Sea Creature - 4th Bell (Henry Saiz Remix) Madloch & Antti Rasi - Salty Roads (Cid Inc Remix) Nicolas Agudelo - Solstice (King Unique Remix) Download episode on MP3 (Right click, save link as...)",likes:"15",descargas:"36.3K",fecha:"2015-08-08",link:"https://mcdn.podbean.com/mf/download/ytwnz8/222-HernanCattaneo-2015-08-08.mp3"},{episodio:"223",titulo:"Resident / Episode 223 / Aug 15 2015",descripcion:"Part 1 Tracklist Florence and the Machine - What kind of man (Daneel Remix) Leo Delgado - High Tonight Ian Dillon - Cotu Interaxxis - Kicking Problems Part 2 Tracklist Luke Santos & Marc de Koning - Numinous Quivver - Lose Your Way Li-Polymer - Silence Between Us Blusoul - Modular Memories Sahar Z - Dreamless Sleep (Khen) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"36.3K",fecha:"2015-08-15",link:"https://mcdn.podbean.com/mf/download/h8y5ku/223-HernanCattaneo-2015-08-15.mp3"},{episodio:"224",titulo:"Resident / Episode 224 / Aug 22 2015",descripcion:"Part 1 Tracklist Ditian - Inner Join Namatijra - Matador Nmatijra - Nerrina John Cosani - Love Song (Erich Von Kollar Remix) Part 2 Tracklist Sirena - Chemicals (Nils Noa Dub) Akase - Rust (Midland Remix) Li - Polymer - Mission Control Dmorse - Solidify Soulwerk - Spiritcatcher (Stas Drive Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"36.8K",fecha:"2015-08-22",link:"https://mcdn.podbean.com/mf/download/29ib6x/224-HernanCattaneo-2015-08-22.mp3"},{episodio:"226",titulo:"Resident / Episode 226 / Sep 05 2015",descripcion:"Part 1 Tracklist Analong Jungs - Calm (Donatello Remix) Barem & Alexis Cabrera - Turn on the fun Scotty A - Touching the Void Biologik feat. Amber Long - Tell Me Again (Sonic Union Introspection Remix) Sleepy & Boo - See the shadow Part 2 Tracklist Mononoid - Burden Of Proof Ezequiel Arias - Look Inside You Mauro Rodriguez - Digito Tanov - Salicorne (Simon Garcia's Start Up remix) Rodriguez Jr - Chrysalism Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"42.2K",fecha:"2015-09-05",link:"https://mcdn.podbean.com/mf/download/uxvhdg/226-HernanCattaneo-2015-09-05.mp3"},{episodio:"227",titulo:"Resident / Episode 227 / Sep 12 2015",descripcion:"Part 1 Tracklist Lauren Ritter - Glass hours Howling - Machina (Chris Allen) Jon Charnis Hands Free - Leviathan Alex Niggemann - Nebula Part 2 Tracklist Guy Mantuzur & Sahar Z - Small Heart Attack (Agents Of Time Reinterpretation) Monojoke & Tuxedo - Mindtrip Kaan Koray - Nostalgia Simos Tagias& Jorgio Kioris - Exist Dmitry Molosh - I Feel Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"36.8K",fecha:"2015-09-12",link:"https://mcdn.podbean.com/mf/download/imb543/227-HernanCattaneo-2015-09-12.mp3"},{episodio:"228",titulo:"Resident / Episode 228 / Sep 19 2015",descripcion:"Part 1 Tracklist Vangelis - Rachael's Song (Antrim Unofficial Remix) Aman Anand - \xA0Raikou Brian Cid - Rotations Kabana - ...... \xA0(Navid Mehr Remix) Marc Marzenit - Desert Alchemist (DAVI Remix) Part 2 Tracklist Javier Portilla & Sotela - (Tofts. Remix) Adana Twins - Heroe (Instrumental) Henrik Zuberstein - Elicit Response Qoob - Atlantis Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"37.9K",fecha:"2015-09-19",link:"https://mcdn.podbean.com/mf/download/pjw6f8/228-HernanCattaneo-2015-09-19.mp3"},{episodio:"229",titulo:"Resident / Episode 229 / Sep 26 2015",descripcion:"Part 1 Tracklist Dance Spirit, Jon Charnis - Affirmation Savvas - Lost souls Jaap Ligthart feat. Alice Rose - I Know Change (Nicolas Masseyeff remix) Antrim - Road To The Utopian (Ewan Rill Remix) Part 2 Tracklist Way Out West - Tuesday maybe Omid 16B & Alex George - In Deep Water (Nantais & Hazendonk Remix) Namatijra - Boomerang Luis Junior - Otro Ayer (Microtrauma Remix) Graziano Raffa - Sothpaw Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.9K",fecha:"2015-09-26",link:"https://mcdn.podbean.com/mf/download/d4jus5/229-HernanCattaneo-2015-09-26.mp3"},{episodio:"230",titulo:"Resident / Episode 230 / Oct 03 2015",descripcion:"Part 1 Tracklist Gorje Hewek, Izhevski - Zakkat Tom Demac - Dave Saints Unders & Ravelli - Walk in the Moment (Edu Imbernon & AFFKT remix) Amirali - Fearfull stay Kevin Di Serna - Bemoan Part 2 Tracklist Darin Epsilon - Jungle Experience (Quivver Remix) Da Luka - Windfall (Namatjira Remix) Miraculum - Blue Grass (Andrea Cassino Remix) John O'callaghan - Adelphos (Khen remix) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"36.1K",fecha:"2015-10-03",link:"https://mcdn.podbean.com/mf/download/978qhw/230-HernanCattaneo-2015-10-03.mp3"},{episodio:"231",titulo:"Resident / Episode 231 / Oct 10 2015",descripcion:"Part 1 Tracklist Moderat - Damage Done (Ditian 'Late Night' Mix) H.O.S.H.- Cilantro Pablo Cetrini - Afreak Dmitry Molosh - Wanderer Dustin Nantais - Bone Coma (Michael A Remix) Part 2 Tracklist Nick Curly - Deep in my soul Ziger - Circles (Mariano Mellino Remix) Locked Groove - Eleven dPen - One Fine Day (Silinder) Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"37K",fecha:"2015-10-10",link:"https://mcdn.podbean.com/mf/download/cqvrsx/231-HernanCattaneo-2015-10-10.mp3"},{episodio:"233",titulo:"Resident / Episode 233 / Oct 24 2015",descripcion:"Part 1 Tracklist Ben Klock, Dixon - 'In a While (Kevin Di Serna Re'vision) Of The Moon Feat. Bartlee - Of The Moon (H.O.S.H. Remix) Darlyn Vlys, Benotmane, Haptic - Quarantine John Debo - I'm coming down Part 2 Tracklist Alexi Delano - Close to three Soulkeys - Overblow (Nicolas Petracca Remix) Ness & Nitti - A False Form (Ezequiel Arias \xA0Deconstruct Mix) Solaire - Circles Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"36.3K",fecha:"2015-10-24",link:"https://mcdn.podbean.com/mf/download/a63iw5/233-HernanCattaneo-2015-10-24.mp3"},{episodio:"237",titulo:"Resident / Episode 237 / Nov 21 2015",descripcion:"Part 1 Tracklist Ambrela - Floral Smell Of Dust (Groj Remix) Johannes Brecht - Breathe! (Solomun Edit) Partenaire - A Place For Us (Luis del Vecchio Remix) John Johnson - Impact (East Cafe Remix) Part 2 Tracklist Arturo Heiva - Bohemian Groove (Stefan Z Remix) DRKND - Cairo (Audioglider We Are All Transient Remix) Kamilo Sanclemente - The Art Of Voice (Antrim Remix) Nick Curly - Reverie Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"33.4K",fecha:"2015-11-21",link:"https://mcdn.podbean.com/mf/download/z9dikg/237-HernanCattaneo-2015-11-21.mp3"},{episodio:"238",titulo:"Resident / Episode 238 / Nov 28 2015",descripcion:"Part 1 Tracklist Philip Chedid - Yaaburni Che Armstrong, Chris Johnson - Elephant In The Room (Erich Von Kollar Empty Zoo Remix) Goraieb - Tainah (Original Mix) Beat Maniacs - Triton (K Nass Remix) Part 2 Tracklist Peter Gabriel - Passion (Verche live edit) Darin Epsilon - Jungle Experience (Quivver Remix) Lonya - Wastelands (Olivier Weiter Remix) Tale Of Us & Mind Against - Astral Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"33.8K",fecha:"2015-11-28",link:"https://mcdn.podbean.com/mf/download/cdk6f4/238-HernanCattaneo-2015-11-28.mp3"},{episodio:"239",titulo:"Resident / Episode 239 / Dec 05 2015",descripcion:"Part 1 Tracklist NCorp Sanctis Yelmo de Hierro (Juan Cruz Mariano Rework) Jose Tabarez - Maremma (Erich Von Kollar Remix) Guy Gerber - The Golden Sun And The Silver Moon (Mariano Montori Boot) Bedrock - Emerald (BOg remix) Part 2 Tracklist Exek - Several Condition Simon Tagias - Wasted Dreams (Kasall & Cristian R Remix) Luis Kiverling - Golden Passport Kool Aid (Alejo Gonzalez Bootleg) Eelke Kleijn, Olivier Weiter, Arjuna Schiks & Miss Melera - Before Now After Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"34.7K",fecha:"2015-12-05",link:"https://mcdn.podbean.com/mf/download/ig65dj/239-HernanCattaneo-2015-12-05.mp3"},{episodio:"240",titulo:"Resident / Episode 240 / Dec 12 2015",descripcion:"Part 1 Tracklist Memory - Spoon Of Baby Mario Puccio - Calling to My Heart (Nicolas Petracca Remix) Dmitry Molosh - The Path BOg - Re-Wired Part 2 Tracklist Jay fm - My world (mou remix) Leftfield - Space Shanty (Cabellero's Late Night Unofficial Remix) Artful - Flores pt2 Guy J - Candyland (Luca Bacchetti Endless Remix) Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"33.8K",fecha:"2015-12-12",link:"https://mcdn.podbean.com/mf/download/9u7b35/240-HernanCattaneo-2015-12-12.mp3"},{episodio:"241",titulo:"Resident / Episode 241 / Dec 19 2015",descripcion:"Part 1 Tracklist Pupkulies & Rebecca - Pink Pillow (DJ Tennis Remix) Tuneon - Clouds Mosaic - Raban Sam Halvag - Maddalena Story (Peter Pardeike Remix) Part 2 Tracklist Brian Cid - Habitat Diyo - Onix Fernando Ferreyra - Particles (Fernando Ferreyra 2015 Remix) Digweed & Muir - Track For Life (Cosmic Cowboys Remix) Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"33.8K",fecha:"2015-12-19",link:"https://mcdn.podbean.com/mf/download/cga6yk/241-HernanCattaneo-2015-12-19.mp3"},{episodio:"242",titulo:"Resident / Episode 242 / Dec 26 2015",descripcion:"Part 1 Tracklist L U M - Urpillay Antrim & Luis Bondio - Brain Damage (Namatjira's Sunday Afternoon Remix) Audiojack - Nefelibata (Whitesquare Remix) Audiojack - Nefelibata Part 2 Tracklist Brian Cid - Oasis Cid Inc - lmatar (Cristian R \xA0Reinterp) Kaan Koray - Nostalgia (Andrea Shu Remix) Simon Tagias - Straight to the Sky Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"34.3K",fecha:"2015-12-26",link:"https://mcdn.podbean.com/mf/download/q4gs8j/242-HernanCattaneo-2015-12-26.mp3"},{episodio:"243",titulo:"Resident / Episode 243 / Jan 02 2016",descripcion:"Part 1 Tracklist Robert R. Hardy - Life under Rick Pier O'Neil - To Declare (Robert R. Hardy Remix) Brian Cid - In the vortex Bedrock - Santiago (Joeski remix) Part 2 Tracklist Shlomi Aber Feat Guy Mantzur - Dont Be A Fool (Cristian R) Miraculum - Qantumswarm (GMJ Mix) Tuxedo - Float Through Anxiety (Kobana Remix) Soulwerk - Stuck In My Mind (Jamie Stevens Remix) Lopezhouse - Crosses and Angels Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"39.1K",fecha:"2016-01-02",link:"https://mcdn.podbean.com/mf/download/xizh7t/243-HernanCattaneo-2016-01-02.mp3"},{episodio:"244",titulo:"Resident / Episode 244 / Jan 09 2016",descripcion:"Part 1 Tracklist Daraspa - The Beauty Of Silence (Mononoid Remix) Federico Santorsola - Una Nueva Historia Napalm & d-phrag - Tumble Of The Dice (Mauro Rodriguez Interpretation) Rory Gallagher & James Trystan - Sleeping Giants Part 2 Tracklist Lopezhouse - Crosses and Angels (Guy j remix) Tvardovsky - Black Ocean (Soulfinder Remix) Nicolas Petracca - Atem (4 AM mix) Tash & Uvo - Enosis (Danny Lloyd Rmx) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"35.7K",fecha:"2016-01-09",link:"https://mcdn.podbean.com/mf/download/9d3z4n/244-HernanCattaneo-2016-01-09.mp3"},{episodio:"246",titulo:"Resident / Episode 246 / Jan 23 2016",descripcion:"Part 1 Tracklist Steve Ness & Anthony Nitti - Hydnora Antrim - Disappear (Nicolas Petracca Remix) Madloch & Matias Vila - Haze Over Night Frangellico - Sugar Free Part 2 Tracklist Dumont & Wagener - Wich (intro mix) MUUI - Lore Tim Penner - Shadow Light Hunter / Game - Declino Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"37.6K",fecha:"2016-01-23",link:"https://mcdn.podbean.com/mf/download/2cbik5/246-HernanCattaneo-2016-01-23.mp3"},{episodio:"247",titulo:"Resident / Episode 247 / Jan 30 2016",descripcion:"Part 1 Tracklist Morgan, YokoO - Spiraling Guy J - Argeman (Robert R. Hardy Bootleg) Nicolas D`Orsi - Attempt (Sebastian Busto Remix) Rick Pier O'Neil - To Declare (Tim Penner Remix) Part 2 Tracklist Hunter/Game - Origins Namatijra - Azha Ryan Davis, Microtrauma - Calendula Gabriel Nery - A sphere Clarian - Space Noir Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"37.3K",fecha:"2016-01-30",link:"https://mcdn.podbean.com/mf/download/h6gdwr/247-HernanCattaneo-2016-01-30.mp3"},{episodio:"248",titulo:"Resident / Episode 248 / Feb 06 2016",descripcion:"Part 1 Tracklist Luca Bacchetti, The Box (trio) - Fireflies and Crickets Lamb - We Fall In Love (Innate Remix) Nick Varon - Way Far From Salvation Dmitry Molosh - Blizzard (Silinder Remix) Part 2 Tracklist Henry Saiz, Eloy - Inner circle Hawaii - Pure (Diego Berrondo Unofficial Remix) Derek Howell - Laughing it up (Kasall & Cristian R Remix) Dmitry Molosh - Glow Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"37K",fecha:"2016-02-06",link:"https://mcdn.podbean.com/mf/download/ekr4ti/248-HernanCattaneo-2016-02-06.mp3"},{episodio:"249",titulo:"Resident / Episode 249 / Feb 13 / 2016",descripcion:"Part 1 Tracklist Cubicolor - Falling (feat. Tim Digby-Bell) Giddyhead - Baba \xD3lafur Arnalds Feat. Arn\xF3r Dan - So Far (Guy Mantzur Sleepless Mix) Lee Burridge & Last desert - No Wicked for the rest Part 2 Tracklist Dance spirit - In Between Spaces Flaunt - Rave On (King Unique Remix) Luca Bacchetti - Genesis Audio Junkies - Urbanica Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"38.1K",fecha:"2016-02-13",link:"https://mcdn.podbean.com/mf/download/p6na3c/249-HernanCattaneo-2016-02-13.mp3"},{episodio:"250",titulo:"Resident / Episode 250 / Feb 20 / 2016",descripcion:"Part 1 Tracklist Eli Nissan - Hope Tadir - Memory man Kay D - volcano (GMJ fragile planet mix) Mathew Lynch - Firewood Alejo Gonzalez & Max Blade - Secret room Part 2 Tracklist Li-Polymer - Red Magic Light Julian Sanza & Max Donato - Requeim Andre Sobota - Look Around (Vincenzo Remix) Lee Van Dowski - ELLE Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"39K",fecha:"2016-02-20",link:"https://mcdn.podbean.com/mf/download/aix2hu/250-HernanCattaneo-2016-02-20.mp3"},{episodio:"251",titulo:"Resident / Episode 251 / Feb 27 / 2016",descripcion:"Part 1 Tracklist Peggy Gou - Troop Manuel Sofia - Naiads (Pedro Aguiar\xB4s Its All Good Remix) Wareika, Miajica - Keen to rebel Flaunt - Rave On (Brian Cid Remix) Part 2 Tracklist Navar - Toc\xF3 Tu Boca Omar El Gamal - Why Did You Chaty & Tamez - No Saint (John Debo Remix) Subandrio - Sigiriya Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"36.2K",fecha:"2016-02-27",link:"https://mcdn.podbean.com/mf/download/kytzkh/251-HernanCattaneo-2016-02-27.mp3"},{episodio:"252",titulo:"Resident / Episode 252 / Mar 05 / 2016",descripcion:"Part 1 Tracklist Robert R. Hardy - Before creation John Cosani - Pulsematic Cid Inc - Shake Before Use (Ezequiel Arias Space Mix) Musumeci - Pneuma Part 2 Tracklist Tembar - Circles (Matias Chilano Remix) Philip Chedid - Break the Tension Interaxxis - My Regrets (Eli Amsalevski Remix) Michael A - Sence Bruno Caro - Auxiliar Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"36.7K",fecha:"2016-03-05",link:"https://mcdn.podbean.com/mf/download/ueyyi5/252-HernanCattaneo-2016-03-05.mp3"},{episodio:"253",titulo:"Resident / Episode 253 / Mar 13 / 2016",descripcion:"Part 1 Tracklist Rodriguez Jr - Mistral (Stephan Bodzin Remix) Diego Mystick - Invicto Dousk & Jorgio Kioris - Oneman (Khen remix) Anja Schneider - Soul treaveller Part 2 Tracklist Mz Sunday Luv & Nu & Christopher Schwarzwalder - Choose (Natural Flow Re- Interpretation) George Yammine - Galactica Sleepy & Boo - Skyway Matador - Remember Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"35.1K",fecha:"2016-03-13",link:"https://mcdn.podbean.com/mf/download/d7qkke/253-HernanCattaneo-2016-03-12.mp3"},{episodio:"254",titulo:"Resident / Episode 254 / Mar 19 / 2016",descripcion:"Part 1 Tracklist The Doors - The Crystal Ship (Maxi Degrassi Edit) Chaim - Zodiac Chymera - Carnaval Calling Rafael Cerato, Moonwalk - Phenomena Part 2 Tracklist Sahar Z & Navar - A Prelude To Nick Varon - Golden Cave \xA0(Navid Mehr Remix) Matador - Dinkys Dmitry Molosh - Vapour Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"38.6K",fecha:"2016-03-19",link:"https://mcdn.podbean.com/mf/download/r8vuks/254-HernanCattaneo-2016-03-19.mp3"},{episodio:"256",titulo:"Resident / Episode 256 / Apr 02 / 2016",descripcion:"Part 1 Tracklist Kevin Toro & Vanguardist - Old Fashioned Dario Arcas & Nico Bertoni - Morning numb (fefo remix) Brian Cid - Eternal Sunrise Mariano Mellino - Mars From Eden Part 2 Tracklist Braunbeck - Metis Dmitry Molosh - Black Dust Rebel One - One Way Or Another (THe WHite SHadow ) Seth Schwarz & Be Svendsen - The bar tender Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"35K",fecha:"2016-04-02",link:"https://mcdn.podbean.com/mf/download/8e9cxm/256-HernanCattaneo-2016-04-02.mp3"},{episodio:"257",titulo:"Resident / Episode 257 / Apr 09 / 2016",descripcion:"Part 1 Tracklist Guillermo De Caminos - Untitled 01 (Deep Mariano Remix) Mike Griego - What Lies Beyond Huminal - Knocking on the Sky (Marcelo Paladini Remix) X Green - In Place Solo (Marcelo Paladini EDIT) Part 2 Tracklist Rodrigo Kesovija - Deep Romance OMB \u2014 DJ Ogawa- \xA020160224 Kerrier District - Techno Disco (KiNK Remix) Karma Fields - Skyline (Julian Rodriguez and German Angeleri) Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"34.6K",fecha:"2016-04-09",link:"https://mcdn.podbean.com/mf/download/ak7e5h/257-HernanCattaneo-2016-04-09.mp3"},{episodio:"258",titulo:"Resident / Episode 258 / Apr 16 / 2016",descripcion:"Part 1 Tracklist Slacker - See The World (Ryan Luciano's Unofficial Remix) Oliver Lieb - Canis Majoris (Jelly For The Babies Remix) [Balkan Connection] Nicholas Van Orton - Fya Kurt Baggaley - Winterland {Petar Dundov Edition) Part 2 Tracklist Sven Weisemann - Love In Vein (Lucas Rossi Without Intro Re-Work) Kamilo Sanclemente - Rite of Passage (Jonnas B Remix) Doomwork - Nihl Jimi Jules - Hundeblick Download episode on MP3 (Right click, save link as...)",likes:"28",descargas:"32.4K",fecha:"2016-04-04",link:"https://mcdn.podbean.com/mf/download/4fkp8q/258-HernanCattaneo-2016-04-16.mp3"},{episodio:"259",titulo:"Resident / Episode 259 / Apr 23 2016",descripcion:"Part 1 Tracklist Arturo Hevia - Atacama Dream Tim Engelhardt - Nothing To Hide (Jay Tripwire Remix) Anton Make & Shamil Om - Body Thetans Clameres - Purple Silhouette Part 2 Tracklist Tim Engelhardt - Sole Brother Audiofly & Maher Daniel - Cluster of Stars Luis Junior - Dont die Victor Ruiz - Soul Seek Download episode on MP3 (Right click, save link as...)",likes:"24",descargas:"31.1K",fecha:"2016-04-23",link:"https://mcdn.podbean.com/mf/download/ww4bze/259-HernanCattaneo-2016-04-23.mp3"},{episodio:"260",titulo:"Resident / Episode 260 / Apr 30 2016",descripcion:"Part 1 Tracklist Ost & Kjex - Down River feat. Hanne Kolst\xF8 (Christian L\xF6ffler Remix) ILona Maras - Asrar Victor Stancov - Vals Eve Pelagic - (Andy Arias Deep in Touch Mix) Federico Monachesi - Sephar (Danny Lloyd Rmx) Part 2 Tracklist Kevin Di Serna - Shambhala Lonya & Mariano Mellino - Morning After Fernando Ferreyra - Learning To (Julian Rodriguez & White Resonance Remix) Dj Tennis - Divisions (Roman Flugel Remix) Download episode on MP3 (Right click, save link as...)",likes:"31",descargas:"32.8K",fecha:"2016-04-30",link:"https://mcdn.podbean.com/mf/download/3zgz6n/260-HernanCattaneo-2016-04-30.mp3"},{episodio:"261",titulo:"Resident / Episode 261 / May 07 2016",descripcion:"Part 1 Tracklist Ryan Davis - Brun (Luca Bacchetti Endless Remix) Whitesquare - Waiting for you Rodriguez jr - Capitelle Tomin Tomovic - Respect Our Mother Earth (Original Mix) Part 2 Tracklist Fernando Olaya - Macedonia Brian Cid - Division Sebastian Busto - Anesthesia Mathew Lynch - Infinite Marc Romboy - Elgur (Dosem Remix) Download episode on MP3 (Right click, save link as...)",likes:"26",descargas:"31.7K",fecha:"2016-05-07",link:"https://mcdn.podbean.com/mf/download/35q79w/261-HernanCattaneo-2016-05-07.mp3"},{episodio:"262",titulo:"Resident / Episode 262 / May 14 2016",descripcion:"Part 1 Tracklist Nico Stojan feat. Jaw - Blue Hour (Thugfucker Remix) DAVI - Change your life Kay-D - Pandora (Diego Azocar Remix) Sasha feat. John Graham - Rooms (Federico Monachesi Bootleg) BP - A Minor Turbulence !!!!!!!!!!! Part 2 Tracklist Solee - Ten (Luca Bacchetti Endless Remix) Solee - Ten (Habischman Remix) Prince - The future (Daneel's Tribute Remix Edit) Victor Simonelli & Z.A.M. - Africa Freedom (Argy Remix) Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"32.9K",fecha:"2016-05-14",link:"https://mcdn.podbean.com/mf/download/96ycsi/262-HernanCattaneo-2016-05-14.mp3"},{episodio:"263",titulo:"Resident / Episode 263 / May 21 2016",descripcion:"Part 1 Tracklist Axelara - Love Beat (AxeLara & Gerardo Moro remix) Groj - Love You Do (Gab Rhome Remix) Flight Facilities - Stand Still (Basanov Mix KEVIN Dub Edit) Groven & Naz - Black Mamba (Robert R. Hardy Remix) Tuxedomoon - in a manner (Rally Chopper Edit) Part 2 Tracklist Juan Astudillo - Ndia Sasha - Bring on the NIght-Time (Chris Fortier Vocal Re-edit) SEQU3L - Timelapse Danny Lloyd - Arapaima (Navid Mehr Starshot Remix) Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"32.4K",fecha:"2016-05-21",link:"https://mcdn.podbean.com/mf/download/h98guw/263-HernanCattaneo-2016-05-21.mp3"},{episodio:"264",titulo:"Resident / Episode 264 / May 28 2016",descripcion:"Part 1 Tracklist Radiohead - Day dreaming (Stereo Underground Remake) Tuxedo - Prisma (Kosmas Remix) Gaundelach - Fjernsynet (Fur Coat Remix) Mano Le Tough - Energy Flow (Nicolas Rada Unofficial Remix) Part 2 Tracklist Fernando Olaya - In Between Worlds (Li-Polymer 'Heaven' Mix) Early Tepshi - Cratos Pole Folder - Gare centrale Alex - Niggemann - Siyawa Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"34.2K",fecha:"2016-05-28",link:"https://mcdn.podbean.com/mf/download/p4zxbh/264-HernanCattaneo-2016-05-28.mp3"},{episodio:"266",titulo:"Resident / Episode 266 / Jun 11 2016",descripcion:"Part 1 Tracklist Ioakim Sayz - Taboo Jonas Rathsman - Complex Ft. Josef Salvat (Serge Devant Remix) Nutons - Storyteller Bluesoul - Depth Of Emotion (Aman Anand Remix) Marc Romboy & Stephan Bodzin - Atlas (Adriatique) Part 2 Tracklist LessNoise - Shedding Light (Pole Folder) Tomas Crow - Cuervo Blanco Ruede Hagelstein - Leonidas Sasha - Warewolf (Jaap Ligthart Edit) Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"35K",fecha:"2016-06-11",link:"https://mcdn.podbean.com/mf/download/2y7t6r/266-HernanCattaneo-2016-06-11.mp3"},{episodio:"267",titulo:"Resident / Episode 267 / Jun 18 2016",descripcion:"Part 1 Tracklist Steppenwolf - Guerilla James Holden - Gone Feral (qoob rework) Mariano Favre - Anagram Kiz Pattison - Machines Building Machines Trippin - Goldtrix Pres. Andrea Brown (Beat2 Spaced-out Bootleg) Part 2 Tracklist Aiden ft. Hermione Green - Rain (Jelle Kuipers Feestmix) Tomas Crow - Birdplace Billy Alex - Reminds Me (Federico Monachesi Remix) Monkey Safari - Plexus (John Digweed & Nick Muir Remix) Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"29.5K",fecha:"2016-06-18",link:"https://mcdn.podbean.com/mf/download/87ctk4/267-HernanCattaneo-2016-06-18.mp3"},{episodio:"268",titulo:"Resident / Episode 268 / Jun 25 2016",descripcion:"Part 1 Tracklist Luis Bondio & Pedro D'Alessandro- Numb Feeling (Tuxedo Remix) Nicolas Jaar - Too Many Kids Finding Rain In The Dust (Gabriel Sordo & Rodriguez Bootleg) Zoo Brazil - Peak (Chaim Remix) SQL - Take it as it comes (Vince Watson Remix) Part 2 Tracklist Navar & Mononoid - Ad Litem iO (Mulen) - Stick Out LoQuai - Artifacts Rally Chopper - Fetish Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"30.5K",fecha:"2016-06-25",link:"https://mcdn.podbean.com/mf/download/spie99/268-HernanCattaneo-2016-06-25.mp3"},{episodio:"269",titulo:"Resident / Episode 269 / Jul 02 2016",descripcion:"Part 1 Tracklist Seamless Beat - Runaway Eli Nissan - White shadow Eagles & Butterflies - Mojave Lucas Rossi - Sonora Part 2 Tracklist Hunter Game - Silver (Reshape) Sebastian Busto - Nature Circle of life - Rainy days Money Safari - Bernstein (UNER Remix) Download episode on MP3 (Right click, save link as...)",likes:"20",descargas:"27.3K",fecha:"2016-07-02",link:"https://mcdn.podbean.com/mf/download/7gq7xs/269-HernanCattaneo-2016-07-02.mp3"},{episodio:"270",titulo:"Resident / Episode 270 / Jul 09 2016",descripcion:"Part 1 Tracklist Robert R. Hardy & Amber Long - Fade In My Dreams Ubbah - In The Desert (Nicolas Rada Remix) XYZ - Solution [Nicolas Petracca Unofficial Remix) Isaac Differding - The Forest Voices Part 2 Tracklist Miguel Puente - Enki sYnus - Walk in the Rain (SLT Remix) Sasse - Ani (Lehar rmx) Stephen Jr - Jungle Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"27.5K",fecha:"2016-07-09",link:"https://mcdn.podbean.com/mf/download/epad7a/270-HernanCattaneo-2016-07-09.mp3"},{episodio:"271",titulo:"Resident / Episode 271 / Jul 16 2016",descripcion:"Part 1 Tracklist Miguel Puente - Anu Anton Make - Flocculus & Nodulus East Cafe - Indian Summer (GMJ seasonal shift mix) Paul Deep & Martin Gardoqui - Mental Trip Part 2 Tracklist Funk DVoid - Good Times Tommi Oskari - Mind Tingle (JimiJ Remix) Navar & Mononoid - Versoene Medicine - Folding Adham Shaikh - Ohm (Subconscious Tales Bootleg) Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"25.9K",fecha:"2016-07-16",link:"https://mcdn.podbean.com/mf/download/ne3cxf/271-HernanCattaneo-2016-07-16.mp3"},{episodio:"272",titulo:"Resident / Episode 272 / Jul 23 2016",descripcion:"Part 1 Tracklist Michael A - Astro Dominik Eulberg - Mimese Oxia & Nicolas Masseyeff - Connivence Alex Niggemann - Meterium (Paul Deep & Martin Gardoqui Remix 2) Part 2 Tracklist Edu Imbernon - Bitter Fate (Fur Coat Remix) Nick Stoynoff - Run Things (Navid Mehr Remix) Chamber - Forerunner Pablo Cetrini - Intentions Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"26.5K",fecha:"2016-07-23",link:"https://mcdn.podbean.com/mf/download/vian8d/272-HernanCattaneo-2016-07-23.mp3"},{episodio:"273",titulo:"Resident / Episode 273 / Jul 30 2016",descripcion:"Part 1 Tracklist Gab Rhome - Raphael Norah Cue - The Year Of The Exhausted Ox (4x4 Retreatment) Hacker & Miethig - Sambal (Jonas Saalbach remix) Isaac Differding - From The Bowels Part 2 Tracklist Nick Stoynoff - Lakeside (Paul Deep & Martin Gardoqui Remix) Lehan - Magical Realism Yotto - The owls Todd Terje - Snooze For Love (Dixon remix) Download episode on MP3 (Right click, save link as...)",likes:"15",descargas:"27K",fecha:"2016-07-30",link:"https://mcdn.podbean.com/mf/download/d899cs/273-HernanCattaneo-2016-07-30.mp3"},{episodio:"274",titulo:"Resident / Episode 274 / Aug 06 2016",descripcion:"Part 1 Tracklist Kevin Di Serna - Dallah Symmetry Obs - The Red Knot (Nicolas Petracca Remix) LOM - Transmissions Artfaq - Medusa Part 2 Tracklist Bob Moses - Tearing Me Up (Tale Of Us Remix) Shai T - Eastern Wind (Graziano Raffa Remix) Da Luka & Jorgio Kioris - Mirror Mode (Danny Lloyd rmx) Books Shade - In White Rooms (Hunter Game Remix) Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"26.9K",fecha:"2016-08-06",link:"https://mcdn.podbean.com/mf/download/ipgbnq/274-HernanCattaneo-2016-08-06.mp3"},{episodio:"276",titulo:"Resident / Episode 276 / Aug 20 2016",descripcion:"Part 1 Tracklist 16B - Time Nick Varon - Arlekin Luke Santos & Arturo Hevia - Nymphlight Playground Subandrio - Heroized Mortals (Nikko.Z Remix) Part 2 Tracklist iO (Mulen) - Stick Out - True Detective edit Habischman - Endless Tunnel Monkey Safari - Dodge (Victor Ruiz Remix) Oniris - Amazonia Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"28.6K",fecha:"2016-08-20",link:"https://mcdn.podbean.com/mf/download/yw5c66/276-HernanCattaneo-2016-08-20.mp3"},{episodio:"277",titulo:"Resident / Episode 277 / Aug 27 2016",descripcion:"Part 1 Tracklist Matteo Monero - Three (Robert R. Hardy Remix) Robert R Hardy - Balance (qoob remix) Sasha - Healer (Criss Deeper 'Healing' Remix) Desaturate - Frostbite (Michael A Remix) Part 2 Tracklist Ape Sapiens - Heaven is in that place you call home Sailor and I - Letters (Jeremy Olander) Robert Babicz - Kinect Ilija Djokovic - Above The Clouds Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"29.1K",fecha:"2016-08-27",link:"https://mcdn.podbean.com/mf/download/qk6s5i/277-HernanCattaneo-2016-08-27.mp3"},{episodio:"278",titulo:"Resident / Episode 278 / Sep 03 2016",descripcion:"Part 1 Tracklist Following Light - Oracle (Demian Moreno) Julio Largente - Morphing Words Erich Von Kollar - Stardust & Bubbles (George Yammine Far Away Remix) Theo Kottis - If I Ever Feel Better Part 2 Tracklist Nandu - Long ft Katy Blue Platunoff - This Is All Yours (Matias Chilano Remix) Petar Dundov, Gregor Tresher - Differentiator Jeremy Olander - Taiga (Jamie Stevens) Esensides - Drift Away Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"28.9K",fecha:"2016-09-03",link:"https://mcdn.podbean.com/mf/download/pnwa4e/278-HernanCattaneo-2016-09-03.mp3"},{episodio:"279",titulo:"Resident / Episode 279 / Sep 10 2016",descripcion:"Part 1 Tracklist Michael A - Moments (Robert R. Hardy \xA0Remix) Namatjira - Surya Tech D - Flora Federico Monachesi - Ikhet Part 2 Tracklist Some Little Things - Vlad Draculea (Matias Chilano Remix) Massive Attack - The Spoils ft. Hope Sandoval - (Uccelli RMX)(unofficial) Lehar - Lodestar Memories Yotto - Cooper's Cup Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"29.8K",fecha:"2016-09-10",link:"https://mcdn.podbean.com/mf/download/vtezxj/279-HernanCattaneo-2016-09-10.mp3"},{episodio:"280",titulo:"Resident / Episode 280 / Sep 17 2016",descripcion:"Part 1 Tracklist Forerunners - See You Last Year (Sunday Dub) East Cafe - The Inverted Pyramid (Andrea Cassino Remix) Joris Voorn - A House (Damian Mazzeo Unofficial Remix) Sound Solutions, Alexander Scott - It's All About (Of Norway Version) Part 2 Tracklist Tim Green- \xA0For a memory Kevin Toro & Vanguardist - Getaway Diego Berrondo - Destiny Thankyou City - Three Pyramids (Circle of Life Remix) Download episode on MP3 (Right click, save link as...)",likes:"28",descargas:"33.5K",fecha:"2016-09-17",link:"https://mcdn.podbean.com/mf/download/xb28cf/280-HernanCattaneo-2016-09-17.mp3"},{episodio:"281",titulo:"Resident / Episode 281 / Sep 24 2016",descripcion:"Part 1 Tracklist Shannon Davin - Eradicate (George Yammine Remix) Audiotox & Watson - Pigan Santiago Garcia - You In The Sky Li-Polymer - Broken Machine Part 2 Tracklist Lonya & DJ Zombi feat Mz Sunday Luv \xA0- Treason (Marten Sundberg Remix) Nicholas Rada - Unbalanced Monojoke & Tuxedo - Neon Angel Joey Fehrenbach - Wolves (Nick Warren & Tripswitch Remix) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"29.9K",fecha:"2016-09-24",link:"https://mcdn.podbean.com/mf/download/gd6cec/281-HernanCattaneo-2016-09-24.mp3"},{episodio:"282",titulo:"Resident / Episode 282 / Oct 01 2016",descripcion:"Part 1 Tracklist Ape Sapiens - Every flower blossoms once Tim Engelhardt - Trust Tech D - Moonwalk Habischman - Soul Part 2 Tracklist K Nass - Lemuria Karmon - Outline Tech D- Changes The Orb - Alpine (Prins Thomas Simpler Tool For DJ Fools) Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"29.9K",fecha:"2016-10-01",link:"https://mcdn.podbean.com/mf/download/qyyi8i/282-HernanCattaneo-2016-10-01.mp3"},{episodio:"283",titulo:"Resident / Episode 283 / Oct 08 2016",descripcion:"Part 1 Tracklist Julian Sanza - Cabeza Dura LUM - Respira (Dance Spirit Remix) Atelier Francesco - Dead End ft. Astrid (Frankey & Sandrino Remix) Sordo, Rodriguez - Camino Largo Part 2 Tracklist Rodrigo Kesovija - Deep Romance (Nicolas Rada Remix) Nick Varon - Montalto (Gebio & Guido Elordi Remix) Danito & Athina - Hydra Khen & Guy j - Prism Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"29.4K",fecha:"2016-10-08",link:"https://mcdn.podbean.com/mf/download/33q4t7/283-HernanCattaneo-2016-10-08.mp3"},{episodio:"284",titulo:"Resident / Episode 284 / Oct 15 2016",descripcion:"Part 1 Tracklist Upercent - El Viatge Davis - Blind feat. Cameo Culture Mario Puccio - Utop\xEDa Bachir Salloum - Caterpillar Jose M., TacoMan - Prazer Part 2 Tracklist Joe Bellingham - Eunoia (Tara Brooks Remix) Marymoon & Martin Roth - Phoenix Roland Klinkenberg feat. Dj Remy - Mexico Can Wait (Robert R. Hardy Remix) Satoshi Fumi - Toriton (S\xE9bastien L\xE9ger Remix) Download episode on MP3 (Right click, save link as...)",likes:"24",descargas:"30.9K",fecha:"2016-10-15",link:"https://mcdn.podbean.com/mf/download/zgtf32/284-HernanCattaneo-2016-10-15.mp3"},{episodio:"286",titulo:"Resident / Episode 286 / Oct 29 2016",descripcion:"Part 1 Tracklist Man Power - Tachyon (DJ Tennis Remix) Dino Lenny - A Certain Distance (Dixon Retouch) Circle of Life - Jupiter Ludovico Einaudi - Night (Julian Rodriguez and German Angeleri Unofficial Remix) Part 2 Tracklist Pete Tong, John Monkman - Aurora (Chaim) Filter Bear & KayLove - Chemist Friend Ran Salman - Nights of Tel Aviv Seven Doors - Bowhead Petar Dundov- A Falling In Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"32K",fecha:"2016-10-29",link:"https://mcdn.podbean.com/mf/download/qq6i83/286-HernanCattaneo-2016-10-29.mp3"},{episodio:"287",titulo:"Resident / Episode 287 / Nov 05 2016",descripcion:"Part 1 Tracklist Cubenx - Mercurial (Neil Quigley re-think) Leo Conovaloff - Conqueror Abstraction - Spazieren (Ripperton Remix 2) Serge Devant - This Moment Robert Mason - Soul Child Part 2 Tracklist Tara Brooks & Ido - Desiderata Orelse - Nothing Zakir - Brain Jumble (Dmitry Molosh Remix) Bernstein - Babel Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"29.6K",fecha:"2016-11-05",link:"https://mcdn.podbean.com/mf/download/3nn6zc/287-HernanCattaneo-2016-11-05.mp3"},{episodio:"288",titulo:"Resident / Episode 288 / Nov 12 2016",descripcion:`Part 1 Tracklist Nick Galemore - She does
Sfire - 3 (John Talabot's Warehouse Dub)
Li-Polymer - Mysticism
Michael A - Shaman Voices Part 2 Tracklist Artfaq - Hope
Tom Peters - Two Of Us (Soul Button Remix)
Arturo Hevia - Raices
Martin Eyerer - Hey Hey feat. Ruede Hagelstein (AFFKT) Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.5K",fecha:"2016-11-12",link:"https://mcdn.podbean.com/mf/download/ciwckz/288-HernanCattaneo-2016-11-12.mp3",tracklist:`Part 1 Nick Galemore - She does
Sfire - 3 (John Talabot's Warehouse Dub)
Li-Polymer - Mysticism
Michael A - Shaman Voices Part 2 Artfaq - Hope
Tom Peters - Two Of Us (Soul Button Remix)
Arturo Hevia - Raices`},{episodio:"289",titulo:"Resident / Episode 289 / Nov 19 2016",descripcion:`Part 1 Tracklist Sasha - Vapour Trails (Kiasmos Remix)
Mateo Coiset, DHNO - Shared Notes
The Journey - Principium (Jamie Stevens Golden Return)
John Cosani - Century
Bonaca - Our Story (Petar Dundov Remix) Part 2 Tracklist Volkan Erman - Abstract Code
Peter Strung - Paarung (David Calo Remix)
Eagles & Butterflies - X
3lias & Ali Ajami - Bring It Back (OC & Verde) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"28.8K",fecha:"2016-11-19",link:"https://mcdn.podbean.com/mf/download/7ma8xg/289-HernanCattaneo-2016-11-19.mp3",tracklist:`Part 1 Sasha - Vapour Trails (Kiasmos Remix)
Mateo Coiset, DHNO - Shared Notes
The Journey - Principium (Jamie Stevens Golden Return)
John Cosani - Century
Bonaca - Our Story (Petar Dundov Remix) Part 2 Volkan Erman - Abstract Code
Peter Strung - Paarung (David Calo Remix)
Eagles & Butterflies - X`},{episodio:"290",titulo:"Resident / Episode 290 / Nov 26 2016",descripcion:`Part 1 Tracklist Facundo Mohrr - Shimmering
Nicolas Petracca - Nalah
DanceSpirit--One For The Heads
Maydan - Loud Silence Part 2 Tracklist Stil & Bense - Perikles
Kamilo Sanclemente - Guidance Of Constellations
Satoshi Tomiie Vs Little Green Men - Autorock (Robert R. Hardy Legendary Moments Bootleg)
Luke Sambe - Endorphima (Cid Inc. Remix) Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"28.5K",fecha:"2016-11-26",link:"https://mcdn.podbean.com/mf/download/67buw2/290-HernanCattaneo-2016-11-26.mp3",tracklist:`Part 1 Facundo Mohrr - Shimmering
Nicolas Petracca - Nalah
DanceSpirit--One For The Heads
Maydan - Loud Silence Part 2 Stil & Bense - Perikles
Kamilo Sanclemente - Guidance Of Constellations
Satoshi Tomiie Vs Little Green Men - Autorock (Robert R. Hardy Legendary Moments Bootleg)`},{episodio:"291",titulo:"Resident / Episode 291 / Dec 03 2016",descripcion:`Part 1 Tracklist Christopher Hermann - Shorty Melodie
D-Nox & Beckers, Santiago Franch - Summer Lights (Ruede Hagelsteins Late Summer Mix)
Rufus - Innerbloom (Sasha Remix)
Patrick Kunkel & Lonya - song 202 Part 2 Tracklist Paul Kalkbrenner - The palisades (Jaap ligthart edit)
G-Mohris - Dreams (East Cafe Remix)
Subconscious Tales - Dopa Mine
Matter - Paranoia Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"28.7K",fecha:"2016-12-03",link:"https://mcdn.podbean.com/mf/download/p2texv/291-HernanCattaneo-2016-12-03.mp3",tracklist:`Part 1 Christopher Hermann - Shorty Melodie
D-Nox & Beckers, Santiago Franch - Summer Lights (Ruede Hagelsteins Late Summer Mix)
Rufus - Innerbloom (Sasha Remix)
Patrick Kunkel & Lonya - song 202 Part 2 Paul Kalkbrenner - The palisades (Jaap ligthart edit)
G-Mohris - Dreams (East Cafe Remix)
Subconscious Tales - Dopa Mine`},{episodio:"292",titulo:"Resident / Episode 292 / Dec 10 2016",descripcion:`Part 1 Tracklist Trentemoller - Miss You (Ditian 'Roses' Mix)
Kiasmos - Lit (Kevin Di Serna Club Mix)
Daneel - Light Blue
Daraspa - Benevolence (Nicholas Van Orton remix) Part 2 Tracklist Pappa Sierra - An Endless Vicious Cycle (Li-Polymer Remix)
Kay-D - Scope Of Mind (Juan Pablo Torrez Remix)
Mariano Mellino & Interaxxis - A Rush Morning
Mathew Lynch - bird of prey Download episode on MP3 (Right click, save link as...)`,likes:"13",descargas:"28.1K",fecha:"2016-12-10",link:"https://mcdn.podbean.com/mf/download/6jf3e3/292-HernanCattaneo-2016-12-10.mp3",tracklist:`Part 1 Trentemoller - Miss You (Ditian 'Roses' Mix)
Kiasmos - Lit (Kevin Di Serna Club Mix)
Daneel - Light Blue
Daraspa - Benevolence (Nicholas Van Orton remix) Part 2 Pappa Sierra - An Endless Vicious Cycle (Li-Polymer Remix)
Kay-D - Scope Of Mind (Juan Pablo Torrez Remix)
Mariano Mellino & Interaxxis - A Rush Morning`},{episodio:"293",titulo:"Resident / Episode 293 / Dec 17 2016",descripcion:`Part 1 Tracklist Pezzner - Evelym (Redux)
Tommi Oskari - Euphrates
Kamilo Sanclemete - Aurora
Fernando Olaya - Centaur
Julian Rodriguez & White Resonance - Mujer Del Desierto (Berni Turletti Remix) Part 2 Tracklist Recondite - Corvus
Baunder & Interaxxis - Nebula
Cid Inc - Unstoppable Strain
Human Machine - Africa Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"28.3K",fecha:"2016-12-17",link:"https://mcdn.podbean.com/mf/download/y2sf9n/293-HernanCattaneo-2016-12-17.mp3",tracklist:`Part 1 Pezzner - Evelym (Redux)
Tommi Oskari - Euphrates
Kamilo Sanclemete - Aurora
Fernando Olaya - Centaur
Julian Rodriguez & White Resonance - Mujer Del Desierto (Berni Turletti Remix) Part 2 Recondite - Corvus
Baunder & Interaxxis - Nebula
Cid Inc - Unstoppable Strain`},{episodio:"294",titulo:"Resident / Episode 294 / Dec 24 2016 - Christmas special",descripcion:"Resident Christmas Special with a full live set recorded at Woodstock Bloemendaal , Netherlands last july. From 2017 The Resident show will be available exclusively at: podcast.hernancattaneo.com iTunes www.mixcloud.com/hernancattaneo/ Download episode on MP3 - 808Mb (Right click, save link as...)",likes:"82",descargas:"72.6K",fecha:"2016-12-24",link:"https://mcdn.podbean.com/mf/download/7vyuu3/294-HernanCattaneo-2016-12-24.mp3"},{episodio:"296",titulo:"Resident / Episode 296 / Jan 07 2017",descripcion:`Part 1 Tracklist Dance Spirit - Mind of Man
Sam Jaspersohn - Islands
AFFKT & Piek - Esclafit (Paul Ursin remix)
Namajitra & Steven - Dizzly summer Part 2 Tracklist Echomen - Substance (Matias Chilano Retouch)
Following Light - Defoliation (Federico Monachesi remix)
Paul Deep - Seven Chakras
Circle of Life - friday night (D-Nox & Beckers Remix) Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"34.5K",fecha:"2017-01-07",link:"https://mcdn.podbean.com/mf/download/5cdz4r/296-HernanCattaneo-2017-01-07.mp3",tracklist:`Part 1 Dance Spirit - Mind of Man
Sam Jaspersohn - Islands
AFFKT & Piek - Esclafit (Paul Ursin remix)
Namajitra & Steven - Dizzly summer Part 2 Echomen - Substance (Matias Chilano Retouch)
Following Light - Defoliation (Federico Monachesi remix)
Paul Deep - Seven Chakras`},{episodio:"297",titulo:"Resident / Episode 297 / Jan 14 2017",descripcion:`Part 1 Tracklist Tantsui - Do the best
Earnest (Melb) - Ambient Fall (Volkan Erman Remix)
Robin Thurston - Cura Brochero ( Anton Make & Shamil OM remix)
Gabriel Nery - Vor\xE1gine Part 2 Tracklist Mariano Montori - That Moment Of Sadness
Nicolas Rada - Rooftop Sixtynine (Nocturna Mix)
Marcelo Paladini - Blows of Life (Lucas Rossi Remix)
Ale Russo - Hold (Andrea Cassino Remix) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"34.1K",fecha:"2017-01-14",link:"https://mcdn.podbean.com/mf/download/4d6enx/297-HernanCattaneo-2017-01-14.mp3",tracklist:`Part 1 Tantsui - Do the best
Earnest (Melb) - Ambient Fall (Volkan Erman Remix)
Robin Thurston - Cura Brochero ( Anton Make & Shamil OM remix)
Gabriel Nery - Vor\xE1gine Part 2 Mariano Montori - That Moment Of Sadness
Nicolas Rada - Rooftop Sixtynine (Nocturna Mix)
Marcelo Paladini - Blows of Life (Lucas Rossi Remix)`},{episodio:"298",titulo:"Resident / Episode 298 / Jan 21 2017",descripcion:`Part 1 Tracklist
Clara Hill - Silent Roar (NQ remix)
Mario Puccio - Faustina
Nicolas Petracca - Beautiful Ending
Hot TuneiK - Ancient Voices Part 2 Tracklist
Butch & C.Vogt - Bliss
Nick Varon- Satao
Gandini - ig Mouth feat. Rollers For Pandas (Valdovinos Remix)
Ezequiel Arias - Split infinite Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"35.4K",fecha:"2017-01-21",link:"https://mcdn.podbean.com/mf/download/r7urp3/298-HernanCattaneo-2017-01-21.mp3",tracklist:`Part 1
Clara Hill - Silent Roar (NQ remix)
Mario Puccio - Faustina
Nicolas Petracca - Beautiful Ending
Hot TuneiK - Ancient Voices Part 2
Butch & C.Vogt - Bliss
Nick Varon- Satao
Gandini - ig Mouth feat. Rollers For Pandas (Valdovinos Remix)`},{episodio:"299",titulo:"Resident / Episode 299 / Jan 28 2017",descripcion:`Tracklist Altocamet - Te invito (Cheman Remix Carlos Alfonsin)
Leo Grunbaum - Bloom feat. Aerial East Ezequiel Anile & Nicolas Petracca - Gardens of Hope
Fille V Feat Mathi - Ancient Methods (Underground Ticket Remix)
Kastis Torrau & Donatello - Ida (Rick Pier O'Neil & Desaturate Remix)
Tech D - Pixels (Original Mix)
Daneel - B01
Hot TuneiK - Astral Renaissance 
Oovation feat Amber Long - Falter (Juan Deminicis Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"35.3K",fecha:"2017-01-28",link:"https://mcdn.podbean.com/mf/download/q5cv4d/299-HernanCattaneo-2017-01-28.mp3",tracklist:`Tracklist Altocamet - Te invito (Cheman Remix Carlos Alfonsin)
Leo Grunbaum - Bloom feat. Aerial East Ezequiel Anile & Nicolas Petracca - Gardens of Hope
Fille V Feat Mathi - Ancient Methods (Underground Ticket Remix)
Kastis Torrau & Donatello - Ida (Rick Pier O'Neil & Desaturate Remix)
Tech D - Pixels (Original Mix)
Daneel - B01
Hot TuneiK - Astral Renaissance`},{episodio:"300",titulo:"Resident / Episode 300 / Feb 04 2017 / Balance / Sudbeat Exclusive Minimix",descripcion:"Download episode on MP3 (Right click, save as...)",likes:"41",descargas:"43.2K",fecha:"2017-02-04",link:"https://mcdn.podbean.com/mf/download/7dgcuz/300-HernanCattaneo-2017-02-04.mp3"},{episodio:"301",titulo:"Resident / Episode 301 / Feb 11 2017",descripcion:`Tracklist
Bengal - Fractal dust
Berni Turletti - Natural Balance
Nicholas Van Orton - Return on Fm
Van Meeteren & Hyde - Buddhi (Terry Lee Brown Jr Remix)
Ronan & Leo Portela - Zero one
Dousk - Sometimes Shugga
Julian Rodriguez - Ulinpit Disconnection (Nicolas Rada Remix)
VONDA7 - Away
Sebastian Busto - Revenge (Kamilo Sanclemente remix) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.5K",fecha:"2017-02-11",link:"https://mcdn.podbean.com/mf/download/6qi482/301-HernanCattaneo-2017-02-11.mp3",tracklist:`Tracklist
Bengal - Fractal dust
Berni Turletti - Natural Balance
Nicholas Van Orton - Return on Fm
Van Meeteren & Hyde - Buddhi (Terry Lee Brown Jr Remix)
Ronan & Leo Portela - Zero one
Dousk - Sometimes Shugga
Julian Rodriguez - Ulinpit Disconnection (Nicolas Rada Remix)
VONDA7 - Away`},{episodio:"302",titulo:"Resident / Episode 302 / Feb 18 2017",descripcion:`Tracklist Victor Magro, Leo Grunbaum - Amarone
Nicolas Masseyeff - Oblecto
Robert R. Hardy - Last Indos (Nicolas Rada Remix)
Simos Tagias - Disco Freak
Squire - Philantropy
Stelios Vassiloudis - La Quarantaine
Oliver Lieb - Caldera (Michael A Remix) 
Stereo Underground - Northern lights
Aural.Node - From Clouds and Spaces (East Cafe Remix) Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"30.5K",fecha:"2017-02-18",link:"https://mcdn.podbean.com/mf/download/ii6si6/302-HernanCattaneo-2017-02-18.mp3",tracklist:`Tracklist Victor Magro, Leo Grunbaum - Amarone
Nicolas Masseyeff - Oblecto
Robert R. Hardy - Last Indos (Nicolas Rada Remix)
Simos Tagias - Disco Freak
Squire - Philantropy
Stelios Vassiloudis - La Quarantaine
Oliver Lieb - Caldera (Michael A Remix)
Stereo Underground - Northern lights`},{episodio:"303",titulo:"Resident / Episode 303 / Feb 25 2017",descripcion:`Audio Junkies - Three Of Us Feat. Haptic
Bengal - Masada (Dachshund Remix)
Niceshot & Armando Guerrero - Air Changes
Simos Tagias - Airlock
Stereo Underground - Glacier Meadows
Robert R Hardy - Exclusa (Nicolas Rada Remix)
Fashion Victimz - Sand storm
Mariano Mellino - Tage In Moabit
Jan Blomqvist - Dark Noise (ME & her Extended Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"31K",fecha:"2017-02-25",link:"https://mcdn.podbean.com/mf/download/ewm9eh/303-HernanCattaneo-2017-02-25.mp3",tracklist:`Audio Junkies - Three Of Us Feat. Haptic
Bengal - Masada (Dachshund Remix)
Niceshot & Armando Guerrero - Air Changes
Simos Tagias - Airlock
Stereo Underground - Glacier Meadows
Robert R Hardy - Exclusa (Nicolas Rada Remix)
Fashion Victimz - Sand storm
Mariano Mellino - Tage In Moabit`},{episodio:"304",titulo:"Resident / Episode 304 / Mar 04 2017",descripcion:`Tracklist
Nhar - Sentience
Modd - Magic footsteps
Dream Oscillator (\xD6ona Dahl's Lucid mix)
Chaim - Safe world
Ray Okpara - Satin Curtain (Kevin Yost Remix)
Pacco & Rudy B - Spacetacular (Sebastian Busto Remix)
Marc Marzenit - Theme For The End (Rafael Cerato & THe WHite SHadow )
R.I.P Bestia - We Were In MDI 
Donna Summer - I Feel Love (Hot TuneiK) Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.7K",fecha:"2017-03-04",link:"https://mcdn.podbean.com/mf/download/z2fgtc/304-HernanCattaneo-2017-03-04.mp3",tracklist:`Tracklist
Nhar - Sentience
Modd - Magic footsteps
Dream Oscillator (\xD6ona Dahl's Lucid mix)
Chaim - Safe world
Ray Okpara - Satin Curtain (Kevin Yost Remix)
Pacco & Rudy B - Spacetacular (Sebastian Busto Remix)
Marc Marzenit - Theme For The End (Rafael Cerato & THe WHite SHadow )
R.I.P Bestia - We Were In MDI`},{episodio:"306",titulo:"Resident / Episode 306 / Mar 18 2017",descripcion:`Tracklist Depeche Mode - Policy Of Truth (Dj Paul & Nicolas Rada Remix)
Santiago Celasso - Eterno Lberinto 
The Song Of Butterfly - Jonatan Ramonda (Interpretations mix) 
Isaac Differding - From The Bowels (Tech D Remix)
Michael A - Another Way 
Berni Turletti - Phauana 
Anchorsong - Gyotens Kalimba (Sebastian Mullaert Intensification)
Hot Tuneik - Ancient Voices 
Gandini - Dax (Mohrr Remix)
Ryan Davis & Microtrauma - Traces (Gabriel Ananda Remix) Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"35.3K",fecha:"2017-03-18",link:"https://mcdn.podbean.com/mf/download/bfd293/306-HernanCattaneo-2017-03-18.mp3",tracklist:`Tracklist Depeche Mode - Policy Of Truth (Dj Paul & Nicolas Rada Remix)
Santiago Celasso - Eterno Lberinto
The Song Of Butterfly - Jonatan Ramonda (Interpretations mix)
Isaac Differding - From The Bowels (Tech D Remix)
Michael A - Another Way
Berni Turletti - Phauana
Anchorsong - Gyotens Kalimba (Sebastian Mullaert Intensification)
Hot Tuneik - Ancient Voices
Gandini - Dax (Mohrr Remix)`},{episodio:"307",titulo:"Resident / Episode 307 / Mar 25 2017",descripcion:`Sergio Salomone - Luxid Dream
Kora, Nic Falardeau - Om Namah
Julio Largente - Morphing Words
Luke Santos & Marcelo Vasami Feat. George Yammine - Cedar Sunrise
Maher Daniel - A Call From Within (Martin Buttrich Dub Mix)
Pion - Radost (Pacco & Rudy B Remix)
Exe Bunge - Acceptable Mistakes
Gonza Rodriguez & Ivan Miatto - Small Things (Golan Zocher Remix)
Nick Varon - Always Forward (Marcelo Paladini Remix)
Will Konitzer - Brio (St. Savor Remix) Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.7K",fecha:"2017-03-25",link:"https://mcdn.podbean.com/mf/download/mfzqnm/307-HernanCattaneo-2017-03-25.mp3",tracklist:`Sergio Salomone - Luxid Dream
Kora, Nic Falardeau - Om Namah
Julio Largente - Morphing Words
Luke Santos & Marcelo Vasami Feat. George Yammine - Cedar Sunrise
Maher Daniel - A Call From Within (Martin Buttrich Dub Mix)
Pion - Radost (Pacco & Rudy B Remix)
Exe Bunge - Acceptable Mistakes
Gonza Rodriguez & Ivan Miatto - Small Things (Golan Zocher Remix)
Nick Varon - Always Forward (Marcelo Paladini Remix)`},{episodio:"308",titulo:"Resident / Episode 308 / Apr 01 2017",descripcion:`Tracklist
Simon Vuarambon - Ethiopian /
Traumprinz - I Gave My Life (Ditian Retouch) /
Stavroz - Designer Eggs Im Garten (Dance Spirit Remix) /
Modd - Vtown /
Paul Hazendonk - Observer /
Bruno Caro - Yugen /
Yotto - Oscillations /
Diamond Dealer - Township Soul /
Roger Martinez - Pan-O-Rama (Cid Inc Remix) /
C Vogt & Patrick Jeremic - Vil\xE1 Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.1K",fecha:"2017-04-01",link:"https://mcdn.podbean.com/mf/download/eaqh2e/308-HernanCattaneo-2017-04-01.mp3",tracklist:`Tracklist
Simon Vuarambon - Ethiopian /
Traumprinz - I Gave My Life (Ditian Retouch) /
Stavroz - Designer Eggs Im Garten (Dance Spirit Remix) /
Modd - Vtown /
Paul Hazendonk - Observer /
Bruno Caro - Yugen /
Yotto - Oscillations /
Diamond Dealer - Township Soul /
Roger Martinez - Pan-O-Rama (Cid Inc Remix) /`},{episodio:"309",titulo:"Resident / Episode 309 / Apr 08 2017",descripcion:`Simon Vuarambon - Siberian /
Ejeca - Tajmahal (Budakid Remix) /
MAM - Nice Morning - Zan Preve\xE9 Remix /
D-Formation & Steve Slight - The Lure Of Rising /
Ryan Sullivan- Ceylon /
Michael A - Sapphire /
Dj Beat 2 -Moments That Last /
Parallax - Inerchia (Ran Salman Remix) /
Marc Marzenit-Death Espiral (Dave Seaman Remix) /
Alex Lario - Forever ( Chicola Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.7K",fecha:"2017-04-08",link:"https://mcdn.podbean.com/mf/download/qwm3n9/309-HernanCattaneo-2017-04-08.mp3",tracklist:`Simon Vuarambon - Siberian /
Ejeca - Tajmahal (Budakid Remix) /
MAM - Nice Morning - Zan Preve\xE9 Remix /
D-Formation & Steve Slight - The Lure Of Rising /
Ryan Sullivan- Ceylon /
Michael A - Sapphire /
Dj Beat 2 -Moments That Last /
Parallax - Inerchia (Ran Salman Remix) /
Marc Marzenit-Death Espiral (Dave Seaman Remix) /`},{episodio:"310",titulo:"Resident / Episode 310 / Apr 15 2017",descripcion:`Kevin Toro - Falling / 
Shaun Reeves, Tuccillo - One two five / 
Joan Retamero - She Dreamed Through The Sky / 
Joan Retamero - Pianism / 
Olderic - Pyramid / 
Subconscious Tales - Focused / 
Rick Pier O\xB4Neil - Durban Poison (RPO Part 3) / 
Nishan Lee - Bushuacka / 
Dale Middleton - Neleh / 
Sasha feat Polica - Out of time / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"33.1K",fecha:"2017-04-15",link:"https://mcdn.podbean.com/mf/download/54nvit/310-HernanCattaneo-2017-04-15.mp3",tracklist:`Kevin Toro - Falling /
Shaun Reeves, Tuccillo - One two five /
Joan Retamero - She Dreamed Through The Sky /
Joan Retamero - Pianism /
Olderic - Pyramid /
Subconscious Tales - Focused /
Rick Pier O\xB4Neil - Durban Poison (RPO Part 3) /
Nishan Lee - Bushuacka /
Dale Middleton - Neleh /`},{episodio:"311",titulo:"Resident / Episode 311 / Apr 22 2017",descripcion:`Sahar Z & Navar - Lost in draws / 
Brian Cid - Dimensions / 
Inkfish - Before The War (Barry Jameison Remix) / 
Klangstof - Hostage (Sasha Remix) / 
Diamond Dealer - Elevate / 
Jeremy Olander - Billinghurst / 
Lorenzo Dada - Your Love Featuring Holed Coin / 
Mrtnz - Clearance (Luciano Scheffer Remix) / 
Simos Tagias - Tefra / 
Christian Smith - Air Castle (Laurent Garnier Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"33.5K",fecha:"2017-04-22",link:"https://mcdn.podbean.com/mf/download/4xnhqn/311-HernanCattaneo-2017-04-22.mp3",tracklist:`Sahar Z & Navar - Lost in draws /
Brian Cid - Dimensions /
Inkfish - Before The War (Barry Jameison Remix) /
Klangstof - Hostage (Sasha Remix) /
Diamond Dealer - Elevate /
Jeremy Olander - Billinghurst /
Lorenzo Dada - Your Love Featuring Holed Coin /
Mrtnz - Clearance (Luciano Scheffer Remix) /
Simos Tagias - Tefra /`},{episodio:"312",titulo:"Resident / Episode 312 / Apr 29 2017",descripcion:`Lee Burridge and Lost desert feat Junior - Absent without thoughts / 
In Colour - How's the head? / 
Matter- - Pronoia (Mononoid Rework) / 
Chloe - The Dawn (Dixon Remix) / 
Berni Turletti and Julian Rodriguez - Connected By Music / 
Bachir Salloum - Whirlwind Angels / 
Cosmonauts - Codeine Eyelids (Gheist Remix) / 
Calzedon Guy feat. Dora Foldvary - Solaris (Golan Zocher Remix) / 
Alex Niggeman - Solaris / 
Laurent Garnier - 1-4 Doctor C'est Chouette / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"32.7K",fecha:"2017-04-29",link:"https://mcdn.podbean.com/mf/download/sry7qn/312-HernanCattaneo-2017-04-29.mp3",tracklist:`Lee Burridge and Lost desert feat Junior - Absent without thoughts /
In Colour - How's the head? /
Matter- - Pronoia (Mononoid Rework) /
Chloe - The Dawn (Dixon Remix) /
Berni Turletti and Julian Rodriguez - Connected By Music /
Bachir Salloum - Whirlwind Angels /
Cosmonauts - Codeine Eyelids (Gheist Remix) /
Calzedon Guy feat. Dora Foldvary - Solaris (Golan Zocher Remix) /
Alex Niggeman - Solaris /`},{episodio:"313",titulo:"Resident / Episode 313 / May 06 2017",descripcion:`EFG-Syuyshe /
George Ledakis & Xiasou - Ocho (Pablo German Remix) / 
Andrea Cassino - Divine / 
Michael A - Centaur / 
Hatrixx - Pressure (Madloch Remix) / 
G-Mohris - Dunya (Marcelo Vasami Remix) / 
Switchdance - O Amolador / 
Dmitry Molosh - Feel It (GMJ Rmx) / 
Mooravyov - Bad / 
Stelios Vassiloudis - Sierra Alpha Victor / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"32.2K",fecha:"2017-05-06",link:"https://mcdn.podbean.com/mf/download/63f4na/313-HernanCattaneo-2017-05-06.mp3",tracklist:`EFG-Syuyshe /
George Ledakis & Xiasou - Ocho (Pablo German Remix) /
Andrea Cassino - Divine /
Michael A - Centaur /
Hatrixx - Pressure (Madloch Remix) /
G-Mohris - Dunya (Marcelo Vasami Remix) /
Switchdance - O Amolador /
Dmitry Molosh - Feel It (GMJ Rmx) /
Mooravyov - Bad /`},{episodio:"314",titulo:"Resident / Episode 314 / May 13 2017",descripcion:`Berni Turletti - Munacuna (Deep Whitin Remix) / 
Mauro Augugliaro - Lucretia / 
AudioStorm - Analogue Agenda / 
BOg, Tim Engelhardt - No more words / 
CF&M - Gadea / 
Pete K - Andromeda / 
Dmitry Molosh - Feel It (Monojoke Rmx) / 
Jimi Jules - Euphrasia / 
Rise & Fall- Outlook / 
Mauro Rodriguez - Melifluo (Paul Deep Remix) / 
Dmitri Moloshj - Expression (Kamilo Sanclemente, Golan Zocher Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"32K",fecha:"2017-05-13",link:"https://mcdn.podbean.com/mf/download/tc7sn2/314-HernanCattaneo-2017-05-13.mp3",tracklist:`Berni Turletti - Munacuna (Deep Whitin Remix) /
Mauro Augugliaro - Lucretia /
AudioStorm - Analogue Agenda /
BOg, Tim Engelhardt - No more words /
CF&M - Gadea /
Pete K - Andromeda /
Dmitry Molosh - Feel It (Monojoke Rmx) /
Jimi Jules - Euphrasia /
Rise & Fall- Outlook /
Mauro Rodriguez - Melifluo (Paul Deep Remix) /`},{episodio:"316",titulo:"Resident / Episode 316 / May 27 2017",descripcion:`Beddermann & Dahlmann - Steam the rope / 
Marino Canal - Equiniox / 
Giorgia Angiuli - Ice Theory / 
Partenaire - Close Bond (Jose Tabarez Remix) / 
Michael A - Down so long / 
Pacco & Rudy B - Coral Castle (Re-Edit) / 
Lanvary - Manticore (Lucas Rossi Remix) / 
Tripswitch- Sinking / 
Nicolas Rada - Cumulonimbus / 
GMJ - One Thing Feeds The Other (K Nass Remix) / 
Mauro Rodriguez - Melifluo (Nishan Lee Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"32.2K",fecha:"2017-05-27",link:"https://mcdn.podbean.com/mf/download/4dcddb/316-HernanCattaneo-2017-05-27.mp3",tracklist:`Beddermann & Dahlmann - Steam the rope /
Marino Canal - Equiniox /
Giorgia Angiuli - Ice Theory /
Partenaire - Close Bond (Jose Tabarez Remix) /
Michael A - Down so long /
Pacco & Rudy B - Coral Castle (Re-Edit) /
Lanvary - Manticore (Lucas Rossi Remix) /
Tripswitch- Sinking /
Nicolas Rada - Cumulonimbus /
GMJ - One Thing Feeds The Other (K Nass Remix) /`},{episodio:"317",titulo:"Resident / Episode 317 / Jun 03 2017",descripcion:`Thomas Gandey - Pieces of me / 
Misty - Desouk / 
NTFO - Focusee / 
Atish - Peculiar Colors (Dance Spirit Remix) / 
Ale Miguez - Light of the soul /
Replicanth - Eternity / 
ABAB - Stars Collide / 
James Monro - Mantis / 
Palliate - Regenboog / 
Kaled- the field and the sun / 
Way Out West - The Call / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"35.4K",fecha:"2017-06-03",link:"https://mcdn.podbean.com/mf/download/kuifix/317-HernanCattaneo-2017-06-03.mp3",tracklist:`Thomas Gandey - Pieces of me /
Misty - Desouk /
NTFO - Focusee /
Atish - Peculiar Colors (Dance Spirit Remix) /
Ale Miguez - Light of the soul /
Replicanth - Eternity /
ABAB - Stars Collide /
James Monro - Mantis /
Palliate - Regenboog /
Kaled- the field and the sun /`},{episodio:"318",titulo:"Resident / Episode 318 / Jun 10 2017",descripcion:`Knowbru, Rodrigo Dp - Flydrop / 
Blondish - Wizard Of Love (Modular Project Remix) / 
anthem - Ebertplatz / 
Rodriguez Jr - Monticello / 
Quivver & Funk D'Void - Dual state / 
Cazap & Boskis - Exhale / 
Similian - Challenger Deep / 
Andromo & Chris Fortier - AfterStroke / 
Nhar - Unkindled / 
Antrim & Luis Bondio - Baby Blue (Nikko.Z Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.5K",fecha:"2017-06-10",link:"https://mcdn.podbean.com/mf/download/8vnube/318-HernanCattaneo-2017-06-10.mp3",tracklist:`Knowbru, Rodrigo Dp - Flydrop /
Blondish - Wizard Of Love (Modular Project Remix) /
anthem - Ebertplatz /
Rodriguez Jr - Monticello /
Quivver & Funk D'Void - Dual state /
Cazap & Boskis - Exhale /
Similian - Challenger Deep /
Andromo & Chris Fortier - AfterStroke /
Nhar - Unkindled /`},{episodio:"319",titulo:"Resident / Episode 319 / Jun 17 2017",descripcion:`Nahue Juarez - Simplify / 
Ditian - Till Roses Fall / 
Matias Chilano - Micron / 
Trevor Morris - Erlendur Shown Sword of Kings (Emiliano Manzano Unofficial Remix) / 
Rodriguez Jr. - Radian / 
LOM - Saturno / 
Govinda - Desde el oc\xE9ano / 
Avidus - Nekromant (Sebastian Voigt Remix) / 
Goda Brother - Distance (Luciano Scheffer Mix) / 
Rafael Crato - Vibrance (Quivver Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.5K",fecha:"2017-06-17",link:"https://mcdn.podbean.com/mf/download/udpzm9/319-HernanCattaneo-2017-06-17.mp3",tracklist:`Nahue Juarez - Simplify /
Ditian - Till Roses Fall /
Matias Chilano - Micron /
Trevor Morris - Erlendur Shown Sword of Kings (Emiliano Manzano Unofficial Remix) /
Rodriguez Jr. - Radian /
LOM - Saturno /
Govinda - Desde el oc\xE9ano /
Avidus - Nekromant (Sebastian Voigt Remix) /
Goda Brother - Distance (Luciano Scheffer Mix) /`},{episodio:"320",titulo:"Resident / Episode 320 / Jun 24 2017",descripcion:`Deep Within - Confessions (Federico Santorsola Remix) / 
Madloch - Prologue / 
Fort Romeau - Reasons / 
Einmusik - Sakura / 
Jamie XX - Stranger In A Room (Jaap Ligthart Edit) / 
Matias Fernandez Vi\xF1a - Scientific Method (Robert R. Hardy Remix) / 
Diyo - Pollux / 
Mjane & David Garcet - Lumpini (Juan Deminicis Remix) / 
Michael & Levan and Stiven Rivic - Trespassing (Tripswitch Remix) / 
Danny Ocean - Hypnotize / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"36.1K",fecha:"2017-06-24",link:"https://mcdn.podbean.com/mf/download/4bs9yh/320-HernanCattaneo-2017-06-24.mp3",tracklist:`Deep Within - Confessions (Federico Santorsola Remix) /
Madloch - Prologue /
Fort Romeau - Reasons /
Einmusik - Sakura /
Jamie XX - Stranger In A Room (Jaap Ligthart Edit) /
Matias Fernandez Vi\xF1a - Scientific Method (Robert R. Hardy Remix) /
Diyo - Pollux /
Mjane & David Garcet - Lumpini (Juan Deminicis Remix) /
Michael & Levan and Stiven Rivic - Trespassing (Tripswitch Remix) /`},{episodio:"321",titulo:"Resident / Episode 321 / Jul 01 2017",descripcion:`Lycoriscoris - Sur Oiseau / 
Lost Dessert - Seringeti Nightfall / 
Kiani & His Legion - Motion academy / 
Juan Astudillo - Eadha / 
Greenage - Prana / 
Marc DePulse & Rafael Cerato - Wanderlust / 
Gabriel Nery - Sue\xF1os Perdidos / 
Ran Salman - Butterfly / 
Alex Nemec & Forniva - Hunting me / 
Sandro Beninati - Night mode / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.6K",fecha:"2017-07-01",link:"https://mcdn.podbean.com/mf/download/sjn39a/321-HernanCattaneo-2017-07-01.mp3",tracklist:`Lycoriscoris - Sur Oiseau /
Lost Dessert - Seringeti Nightfall /
Kiani & His Legion - Motion academy /
Juan Astudillo - Eadha /
Greenage - Prana /
Marc DePulse & Rafael Cerato - Wanderlust /
Gabriel Nery - Sue\xF1os Perdidos /
Ran Salman - Butterfly /
Alex Nemec & Forniva - Hunting me /`},{episodio:"322",titulo:"Resident / Episode 322 / Jul 08 2017",descripcion:`Mindshield - 7800 kilometers inside me / 
Fernando Aragon - Bergah / 
Bufi - Bird song / 
Digital departmet - Wolfs are near / 
Aliocha - Storm chaser / 
Omar El Gamal - Rise Above / 
Christian Monique-Endless Road (Tim Aaron Remix) / 
Antrim - I Hear The Distance / 
Super flu - Gausa / 
Eli Nissan- Liquid stars / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"34K",fecha:"2017-07-08",link:"https://mcdn.podbean.com/mf/download/hts5ra/322-HernanCattaneo-2017-07-08.mp3",tracklist:`Mindshield - 7800 kilometers inside me /
Fernando Aragon - Bergah /
Bufi - Bird song /
Digital departmet - Wolfs are near /
Aliocha - Storm chaser /
Omar El Gamal - Rise Above /
Christian Monique-Endless Road (Tim Aaron Remix) /
Antrim - I Hear The Distance /
Super flu - Gausa /`},{episodio:"323",titulo:"Resident / Episode 323 / Jul 15 2017",descripcion:`Butch - Shahrzad (Matthias Meyer Remix) / 
Piek & F\xE1bel - Despertar (Henry Saiz remix) / 
Lessons - Tempest (Adam Port Europa Remix) / 
Then & Starkato - Mars / 
Audiojack - Equilibrium / 
Cid Inc - ArcaneThoughts / 
Stelios Vassiloudis & Nils Nuernberg - Smoke Tree / 
Subconscious Tales - Fly high / 
Guhus - After The Rainbow / 
Berni Turletti - Pukavy / 
Third Son - Climb to the Sun ft. Haptic (Guy J Field Trip Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"33.6K",fecha:"2017-07-15",link:"https://mcdn.podbean.com/mf/download/crz7kc/323-HernanCattaneo-2017-07-15.mp3",tracklist:`Butch - Shahrzad (Matthias Meyer Remix) /
Piek & F\xE1bel - Despertar (Henry Saiz remix) /
Lessons - Tempest (Adam Port Europa Remix) /
Then & Starkato - Mars /
Audiojack - Equilibrium /
Cid Inc - ArcaneThoughts /
Stelios Vassiloudis & Nils Nuernberg - Smoke Tree /
Subconscious Tales - Fly high /
Guhus - After The Rainbow /
Berni Turletti - Pukavy /`},{episodio:"324",titulo:"Resident / Episode 324 / Jul 22 2017",descripcion:`Lupine - Indian Summer (Andy Arias Remix) / 
Robert Mason - Soul Child (Lucas Rossi Remix) / 
One-H - Never Lose Yourself (Andrea Cassino Remix) / 
Jelly For The Babies - Grey Matter (Re-Edit) / 
Michael A - Hypnotic / 
Michael A - Seven (Andrea Cassino Remix) / 
Randico - Levels (Sahar Z Scuba Remix) / 
Reset Robot - Back orders / 
Ian Dillon - Solivia / 
Rise & Fall - Traffic lights / Download episode on MP3 (Right click, save link as...)`,likes:"13",descargas:"32.8K",fecha:"2017-07-22",link:"https://mcdn.podbean.com/mf/download/fmukk8/324-HernanCattaneo-2017-07-22.mp3",tracklist:`Lupine - Indian Summer (Andy Arias Remix) /
Robert Mason - Soul Child (Lucas Rossi Remix) /
One-H - Never Lose Yourself (Andrea Cassino Remix) /
Jelly For The Babies - Grey Matter (Re-Edit) /
Michael A - Hypnotic /
Michael A - Seven (Andrea Cassino Remix) /
Randico - Levels (Sahar Z Scuba Remix) /
Reset Robot - Back orders /
Ian Dillon - Solivia /`},{episodio:"326",titulo:"Resident / Episode 326 / Aug 05 2017",descripcion:`Ultravizion - Prisma / 
Satoshi Fum - An Gel - Fish / 
Blancah feat Diogo de Haro - Revoada / 
Manoo & Raoul K feat. Ahmed Sosso - Toukan (Trikk Dub Mix) / 
Paul Deep - Rejected / 
Monje - Flying Lotus (Tuxedo Remix) / 
Fur Coat - Parallel Dimensions / 
George Yammine - Andromeda (Marcelo Paladini Remix) / 
Nicolas Ruiz - Glass Shatters (Nick Varon Remix) / 
BBE - 7 days & One Week (Adwer off week rework) / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"32.7K",fecha:"2017-08-05",link:"https://mcdn.podbean.com/mf/download/zuhx7q/326-HernanCattaneo-2017-08-05.mp3",tracklist:`Ultravizion - Prisma /
Satoshi Fum - An Gel - Fish /
Blancah feat Diogo de Haro - Revoada /
Manoo & Raoul K feat. Ahmed Sosso - Toukan (Trikk Dub Mix) /
Paul Deep - Rejected /
Monje - Flying Lotus (Tuxedo Remix) /
Fur Coat - Parallel Dimensions /
George Yammine - Andromeda (Marcelo Paladini Remix) /
Nicolas Ruiz - Glass Shatters (Nick Varon Remix) /`},{episodio:"327",titulo:"Resident / Episode 327 / Aug 12 2017",descripcion:`Rui Da Silva presents GPU FORCE - Requiem / 
Kay Nassef - Love (Berni Turletti and Julian Rodriguez Remix) / 
Bedouin - Set The Controls For The Heart Of The Sun (Guy Gerber Remix) / 
Interaxxis - Kicking Problems / 
Phonique - Elitess (Smash TV Remix) / 
Luka Sambe & Filter Bear - Hebe XVI / 
Guy J - Cloud No. 9 (Scanlines Unofficial Remix) / 
Dan Sieg - They Won't Find You (King Unique Remix) / 
Dousk - Whisper Unit (Cid Inc Remix) / 
LSG - Netherworld (Rise And Fall Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"33.8K",fecha:"2017-08-12",link:"https://mcdn.podbean.com/mf/download/xmp2vd/327-HernanCattaneo-2017-08-12.mp3",tracklist:`Rui Da Silva presents GPU FORCE - Requiem /
Kay Nassef - Love (Berni Turletti and Julian Rodriguez Remix) /
Bedouin - Set The Controls For The Heart Of The Sun (Guy Gerber Remix) /
Interaxxis - Kicking Problems /
Phonique - Elitess (Smash TV Remix) /
Luka Sambe & Filter Bear - Hebe XVI /
Guy J - Cloud No. 9 (Scanlines Unofficial Remix) /
Dan Sieg - They Won't Find You (King Unique Remix) /
Dousk - Whisper Unit (Cid Inc Remix) /`},{episodio:"328",titulo:"Resident / Episode 328 / Aug 19 2017",descripcion:`Anton Dhouran - Misty Mountain / 
Kalabrese - Is This (Ripperton) / 
Mauro Augugliaro - Insomnium / 
Shai T - Desert Story / 
M.O.F. feat. Ghiz - This must be the place / 
Nightboy - Smyrna (Alec Araujo Remix) / 
Luke Santos & Arturo Hevia - Nymphlight Playground (Marcelo Vasami Flutes Remix) / 
Maetrik - Ninex 7-C / 
Sasch BBC & Caspar - Eschaton (Kamilo Sanclemente Remix) / 
Andre Sobota - Departure / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"32.4K",fecha:"2017-08-19",link:"https://mcdn.podbean.com/mf/download/s2recb/328-HernanCattaneo-2017-08-19.mp3",tracklist:`Anton Dhouran - Misty Mountain /
Kalabrese - Is This (Ripperton) /
Mauro Augugliaro - Insomnium /
Shai T - Desert Story /
M.O.F. feat. Ghiz - This must be the place /
Nightboy - Smyrna (Alec Araujo Remix) /
Luke Santos & Arturo Hevia - Nymphlight Playground (Marcelo Vasami Flutes Remix) /
Maetrik - Ninex 7-C /
Sasch BBC & Caspar - Eschaton (Kamilo Sanclemente Remix) /`},{episodio:"329",titulo:"Resident / Episode 329 / Aug 26 2017",descripcion:`RVNZ - Feijoa / 
Joseph Ashworth - Glimmer / 
Volen Sentir - Vdol Po Rechenke / 
Blue cell - Odyssee / 
Niko Christo & Synas - Melaina (ft. Orson Welles) / 
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) / 
Matter - Pronoia (Tech D Remix) / 
Orsen - Wakey Wakey / 
Amber - Anyway (Jaap Ligthart Edit) / 
Joseph Ashworth - Canary / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"33.4K",fecha:"2017-08-26",link:"https://mcdn.podbean.com/mf/download/66axt3/329-HernanCattaneo-2017-08-26.mp3",tracklist:`RVNZ - Feijoa /
Joseph Ashworth - Glimmer /
Volen Sentir - Vdol Po Rechenke /
Blue cell - Odyssee /
Niko Christo & Synas - Melaina (ft. Orson Welles) /
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) /
Matter - Pronoia (Tech D Remix) /
Orsen - Wakey Wakey /
Amber - Anyway (Jaap Ligthart Edit) /`},{episodio:"330",titulo:"Resident / Episode 330 / Sep 02 2017",descripcion:`Maxi Degrassi - San Telmo / 
Hraach - Hidden Dimension (Tara Brooks Remix) / 
Feemarx - Oneiroi (Andy Arias Remix) / 
Henry Saiz - IN THE DISTANCE / 
Henry Saiz - IN THE DISTANCE (DUB) / 
Antrim - Dizziness / 
Desaturate - Ditracted / 
Tone Depth & Simply City - Polaris / 
Michael A - Endless Time (Blusoul Remix) / 
Tim Engelhardt - Poly Seven / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.4K",fecha:"2017-09-02",link:"https://mcdn.podbean.com/mf/download/pv9q9x/330-HernanCattaneo-2017-09-02.mp3",tracklist:`Maxi Degrassi - San Telmo /
Hraach - Hidden Dimension (Tara Brooks Remix) /
Feemarx - Oneiroi (Andy Arias Remix) /
Henry Saiz - IN THE DISTANCE /
Henry Saiz - IN THE DISTANCE (DUB) /
Antrim - Dizziness /
Desaturate - Ditracted /
Tone Depth & Simply City - Polaris /
Michael A - Endless Time (Blusoul Remix) /`},{episodio:"331",titulo:"Resident / Episode 331 / Sep 09 2017",descripcion:`Stevie R, Delfin Music - Jalemba feat. Greg Rawson (Rancido Edition) / 
Henry Saiz - September / 
Robert R. Hardy - Life Thoughts (Dub Mix) / 
Captain E - Escape To Lonely (Erdi Irmak Remix) / 
Flowers And Sea Creatures - Color The Rain (Stereocalypse) / 
Tim Engelhardt - Time Will Save Your Soul / 
Olivier Weiter & Alex Preda - Moods / 
Analog Jungs - Storm (Hot Tuneik Remix) / 
Orsen - Wakey Wakey / 
Tone Depth & Simply City - Glass elevator / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"36.4K",fecha:"2017-09-09",link:"https://mcdn.podbean.com/mf/download/2zpp7r/331-HernanCattaneo-2017-09-09.mp3",tracklist:`Stevie R, Delfin Music - Jalemba feat. Greg Rawson (Rancido Edition) /
Henry Saiz - September /
Robert R. Hardy - Life Thoughts (Dub Mix) /
Captain E - Escape To Lonely (Erdi Irmak Remix) /
Flowers And Sea Creatures - Color The Rain (Stereocalypse) /
Tim Engelhardt - Time Will Save Your Soul /
Olivier Weiter & Alex Preda - Moods /
Analog Jungs - Storm (Hot Tuneik Remix) /
Orsen - Wakey Wakey /`},{episodio:"332",titulo:"Resident / Episode 332 / Sep 16 2017",descripcion:`Brett Longman - If i know what love is / 
Landhouse, Raddantze - Die Einoel Giraffe vom Stadtrand / 
Leif Muller - Holidays Everywhere / 
Dimuth K - Achillea / 
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) / 
Daro - Take me away / 
Marvin & Guy - Superior Conjunction / 
Nicolas Rada - One-One Eleven Thousand / 
Tim Engelhardt - Maks / 
Slam - Eterna Petrichor Remix / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.1K",fecha:"2017-09-16",link:"https://mcdn.podbean.com/mf/download/nvcdw2/332-HernanCattaneo-2017-09-16.mp3",tracklist:`Brett Longman - If i know what love is /
Landhouse, Raddantze - Die Einoel Giraffe vom Stadtrand /
Leif Muller - Holidays Everywhere /
Dimuth K - Achillea /
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) /
Daro - Take me away /
Marvin & Guy - Superior Conjunction /
Nicolas Rada - One-One Eleven Thousand /
Tim Engelhardt - Maks /`},{episodio:"333",titulo:"Resident / Episode 333 / Sep 23 2017",descripcion:`Totem Pole - Wonk I / 
Modd - Tryusolee / 
Roger Martinez - Chinguarime (Andrea Cassino Remix) / 
Forerunners - Watercolor / 
Anthony Georges Patrice - Divine destiny / 
BLANCAh - Talus / 
Federico Monachesi - This is not happening / 
Dale Middleton - One for man / 
Alfa State & Hamed Ansari - Still Around / 
Paul Deep - Sad but True (Nishan Lee Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.3K",fecha:"2017-09-23",link:"https://mcdn.podbean.com/mf/download/z32j6p/333-HernanCattaneo-2017-09-23.mp3",tracklist:`Totem Pole - Wonk I /
Modd - Tryusolee /
Roger Martinez - Chinguarime (Andrea Cassino Remix) /
Forerunners - Watercolor /
Anthony Georges Patrice - Divine destiny /
BLANCAh - Talus /
Federico Monachesi - This is not happening /
Dale Middleton - One for man /
Alfa State & Hamed Ansari - Still Around /`},{episodio:"334",titulo:"Resident / Episode 334 / Sep 30 2017",descripcion:`Adriak - My Roots (Andrew McDonnell Remix) / 
Bona Fide - Amirale / 
Totem Pole - Winter Knights / 
Nicolas Petracca - Amilur (Erdi Irmak Remix)\xA0/ 
Integral Bread - Dehesa (Juan Pablo Torrez Remix) / 
Nic Fanciulli - Little L (Feat. Eagles & Butterflies) / 
Anthem - Huso / 
Yuriy from Russia - Lafy in red / 
Kasper Koman - Into Little Pieces / 
East Cafe - The Moth And The Flame Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.4K",fecha:"2017-09-30",link:"https://mcdn.podbean.com/mf/download/9jqjbp/334-HernanCattaneo-2017-09-30.mp3",tracklist:`Adriak - My Roots (Andrew McDonnell Remix) /
Bona Fide - Amirale /
Totem Pole - Winter Knights /
Nicolas Petracca - Amilur (Erdi Irmak Remix)\xA0/
Integral Bread - Dehesa (Juan Pablo Torrez Remix) /
Nic Fanciulli - Little L (Feat. Eagles & Butterflies) /
Anthem - Huso /
Yuriy from Russia - Lafy in red /
Kasper Koman - Into Little Pieces /`},{episodio:"336",titulo:"Resident / Episode 336 / Oct 14 2017",descripcion:`Deep Within - Camino (feat. Josefina Barreix) / 
Yow - One Velo / 
Santiago Lezz - Boneco / 
Gabriel Carminatti - Last Minutes / 
Inertia - The System (Mir Omar Bootleg) / 
Matias Fernandez Vi\xF1a - Green Beautiful Eyes (Mariano Favre Remix) / 
Nichols - Ethereality / 
Nichols - Purple Patch / 
Depeche Mode - Cover Me (Dixon Remix) / 
Luis Kiverling - Fabricio / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"33.7K",fecha:"2017-10-14",link:"https://mcdn.podbean.com/mf/download/2845if/336-HernanCattaneo-2017-10-14.mp3",tracklist:`Deep Within - Camino (feat. Josefina Barreix) /
Yow - One Velo /
Santiago Lezz - Boneco /
Gabriel Carminatti - Last Minutes /
Inertia - The System (Mir Omar Bootleg) /
Matias Fernandez Vi\xF1a - Green Beautiful Eyes (Mariano Favre Remix) /
Nichols - Ethereality /
Nichols - Purple Patch /
Depeche Mode - Cover Me (Dixon Remix) /`},{episodio:"337",titulo:"Resident / Episode 337 / Oct 21 2017",descripcion:`LDMT - Innercity playground /
Rick Pier\xA0O\xA0Neil & Chris Gavin - Lost Elements /
Robert R Hardy - Interpolation (Marcelo Vasami Remix) /
Gabriel Sordo - Flight Back (Ethereal Mix) /
Chris Cargo - Watching (Michael A Balance Remix) /
Moshic - She Is A Symposion /
Juan Deminicis, The Blackout - Resurge (Robert R. Hardy Remix) /
Love Over Entropy - Land Before Time /
Donatello - Mandala /
Yotto - Off the Grid / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"31.3K",fecha:"2017-10-21",link:"https://mcdn.podbean.com/mf/download/3y6xqs/337-HernanCattaneo-2017-10-21.mp3",tracklist:`LDMT - Innercity playground /
Rick Pier\xA0O\xA0Neil & Chris Gavin - Lost Elements /
Robert R Hardy - Interpolation (Marcelo Vasami Remix) /
Gabriel Sordo - Flight Back (Ethereal Mix) /
Chris Cargo - Watching (Michael A Balance Remix) /
Moshic - She Is A Symposion /
Juan Deminicis, The Blackout - Resurge (Robert R. Hardy Remix) /
Love Over Entropy - Land Before Time /
Donatello - Mandala /`},{episodio:"338",titulo:"Resident / Episode 338 / Oct 28 2017",descripcion:`Pole Folder - Woodstock Sunset / 
Davis - Watu (Luca Bacchetti Endless Remix) / 
Sacred Heart - Soluna / 
Priya Sen & Aman - Stargaze / 
Criss Deeper - Constellati:on / 
Lanvary - Manticore (Uvo & Lautaro Varela Remix) / 
Sonic Union - Dragged Behind / 
GMJ - Inside a Mystery / 
The Freelancers - We Do it Best / 
Bjork - The Gate (Stereo underground Bootleg) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"32K",fecha:"2017-10-28",link:"https://mcdn.podbean.com/mf/download/9tphcu/338-HernanCattaneo-2017-10-28.mp3",tracklist:`Pole Folder - Woodstock Sunset /
Davis - Watu (Luca Bacchetti Endless Remix) /
Sacred Heart - Soluna /
Priya Sen & Aman - Stargaze /
Criss Deeper - Constellati:on /
Lanvary - Manticore (Uvo & Lautaro Varela Remix) /
Sonic Union - Dragged Behind /
GMJ - Inside a Mystery /
The Freelancers - We Do it Best /`},{episodio:"339",titulo:"Resident / Episode 339 / Nov 04 2017",descripcion:`Mobius Strum - Virus trip / 
Deibys Marquez Fernando Picon - Genesis (Creator Mix) / 
Yana Heinstein - 2049 (nexus6_dub) / 
Gabriel Sordo, Dubphone - Soft Call (Everything ok) / 
East Cafe - Aviophobia (Robert R. Hardy Above the Clouds Remix) / 
Kieran Apter & Leon Power - Drifting Spring / 
Shai T - Desert Story (Michael A Remix) / 
Despoin - Out revers (Santo Adriano Influenced) / 
Uccelli - Funk Cave / 
Subandrio & Danidu - Monsoon (Lucas Rossi Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.2K",fecha:"2017-11-04",link:"https://mcdn.podbean.com/mf/download/umv8rk/339-HernanCattaneo-2017-11-04.mp3",tracklist:`Mobius Strum - Virus trip /
Deibys Marquez Fernando Picon - Genesis (Creator Mix) /
Yana Heinstein - 2049 (nexus6_dub) /
Gabriel Sordo, Dubphone - Soft Call (Everything ok) /
East Cafe - Aviophobia (Robert R. Hardy Above the Clouds Remix) /
Kieran Apter & Leon Power - Drifting Spring /
Shai T - Desert Story (Michael A Remix) /
Despoin - Out revers (Santo Adriano Influenced) /
Uccelli - Funk Cave /`},{episodio:"340",titulo:"Resident / Episode 340 / Nov 11 2017",descripcion:`Fairchild - The Light In You / 
 Strinner - Breaking Point (Nick Devon Remix) / 
 Matter - Eastern Sunset / 
 Michael A - Look Closer / 
 Dynacom - Utop\xEDa / 
 Made in Paris - Impact / 
 Shosho - Barum's (Summer Brendon Collins & Swyft Remix) / 
 Dance Spirit - Headchange / 
 Re.you - Work It Now (Tiefschwarz Remix) / 
 Sasha - True (feat. Dems)/ Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"32.3K",fecha:"2017-11-11",link:"https://mcdn.podbean.com/mf/download/izhuci/340-HernanCattaneo-2017-11-11.mp3",tracklist:`Fairchild - The Light In You /
Strinner - Breaking Point (Nick Devon Remix) /
Matter - Eastern Sunset /
Michael A - Look Closer /
Dynacom - Utop\xEDa /
Made in Paris - Impact /
Shosho - Barum's (Summer Brendon Collins & Swyft Remix) /
Dance Spirit - Headchange /
Re.you - Work It Now (Tiefschwarz Remix) /`},{episodio:"341",titulo:"Resident / Episode 341 / Nov 18 2017",descripcion:`Vangelis - Blade Runner - Ditian mix / 
Matter - Star Rock / 
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) / 
Conures - Dankazura / 
Yousef feat. The Angel - Vanity (Rowee Remix) / 
George Yammine - Andromeda (Pacco & Rudy B Remix) / 
Jeremy Olander - Galheera / 
Gaston Ponte - Cube / 
Arno & Dirisio - Gizeh (Kaan Koray Remix) / 
Mita Mita - Lovely Cry / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.6K",fecha:"2017-11-18",link:"https://mcdn.podbean.com/mf/download/mfk4ea/341-HernanCattaneo-2017-11-18.mp3",tracklist:`Vangelis - Blade Runner - Ditian mix /
Matter - Star Rock /
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) /
Conures - Dankazura /
Yousef feat. The Angel - Vanity (Rowee Remix) /
George Yammine - Andromeda (Pacco & Rudy B Remix) /
Jeremy Olander - Galheera /
Gaston Ponte - Cube /
Arno & Dirisio - Gizeh (Kaan Koray Remix) /`},{episodio:"342",titulo:"Resident / Episode 342 / Nov 25 2017",descripcion:`Bachir Salloum - reebA / 
Analog Jungs - Occasio / 
New Order - Crystal (Robert R. Hardy Bootleg) / 
Sacred Heart - Soluna / 
After Burn - La Mandolina (Antrim Remix) / 
Isaac Differding - Katrina / 
Arturo Hevia - Inside 2017 / 
Sebastian Busto - Kairos (Lucas Rossi Dreamers Mix) / 
Alec Araujo & Aurokes - Levitation / 
Nicolas Pittaluga - Lovely Day [In Memoriam of Luis Kiverling] / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"32.7K",fecha:"2017-11-25",link:"https://mcdn.podbean.com/mf/download/wbf26w/342-HernanCattaneo-2017-11-25.mp3",tracklist:`Bachir Salloum - reebA /
Analog Jungs - Occasio /
New Order - Crystal (Robert R. Hardy Bootleg) /
Sacred Heart - Soluna /
After Burn - La Mandolina (Antrim Remix) /
Isaac Differding - Katrina /
Arturo Hevia - Inside 2017 /
Sebastian Busto - Kairos (Lucas Rossi Dreamers Mix) /
Alec Araujo & Aurokes - Levitation /`},{episodio:"343",titulo:"Resident / Episode 343 / Dec 02 2017",descripcion:`Kieran Apter & Leon Power - Drifting spring / 
Davidovitch - Violins of Tomorrow / 
Monje - Horizons Contour / 
Death On The Balcony - Solar lives / 
Cristian R - Beach Rainbows (Artem Kalalb Remix) / 
Marcelo Vasami -\xA0Clyde\xA0Forever / 
Tim Engelhardt - Beyond Time (Fideles Remix) / 
Erdi Irmak - Soul Searching / 
Uccelli - Blooming / 
Matter - We are dust / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.6K",fecha:"2017-12-02",link:"https://mcdn.podbean.com/mf/download/7mynv3/343-HernanCattaneo-2017-12-02.mp3",tracklist:`Kieran Apter & Leon Power - Drifting spring /
Davidovitch - Violins of Tomorrow /
Monje - Horizons Contour /
Death On The Balcony - Solar lives /
Cristian R - Beach Rainbows (Artem Kalalb Remix) /
Marcelo Vasami -\xA0Clyde\xA0Forever /
Tim Engelhardt - Beyond Time (Fideles Remix) /
Erdi Irmak - Soul Searching /
Uccelli - Blooming /`},{episodio:"344",titulo:"Resident / Episode 344 / Dec 09 2017",descripcion:`Rocco - Be Quiet! (Klement Bonelli Remix) / 
Rowee feat. KnowKontrol - Amaranto / 
Subandrio - Ceylon Born / 
 Kamilo Sanclemente - Azure / 
Musumeci - Mood organs / 
Stereo Underground - Flashes feat. Sealine (Extended mix) / 
Steve Bug & Langenberg - Chord cluster / 
Unknown - 13500 / 
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) / 
Sarcasmo - Epoca / Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"34.9K",fecha:"2017-12-09",link:"https://mcdn.podbean.com/mf/download/ah7fd9/344-HernanCattaneo-2017-12-09.mp3",tracklist:`Rocco - Be Quiet! (Klement Bonelli Remix) /
Rowee feat. KnowKontrol - Amaranto /
Subandrio - Ceylon Born /
Kamilo Sanclemente - Azure /
Musumeci - Mood organs /
Stereo Underground - Flashes feat. Sealine (Extended mix) /
Steve Bug & Langenberg - Chord cluster /
Unknown - 13500 /
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) /`},{episodio:"346",titulo:"Resident / Episode 346 - XMas Special / Dec 23 2017",descripcion:"Live@Woodstock69 - July 2017 // Xmas Special Download episode on MP3 (Right click, save link as...)",likes:"59",descargas:"66.1K",fecha:"2017-12-23",link:"https://mcdn.podbean.com/mf/download/hjnn8i/346-HernanCattaneo-live_Woodstock69-July2017-2017-12-23.mp3"},{episodio:"347",titulo:"Resident / Episode 347 / Dec 30 2017",descripcion:`Sabo - Singing Game (Acid Pauli's Singing Sequencer Remix) 
 Bagabond - Restless warrior 
 Domenic Cappello - Rain 
 Esteban Liebig - 10am 
 Sebastian Busto - Budapest 
 JPA - Visions Of You (Jamie Stevens Remix) 
 Subconcius Tales- Fly High - Rick Pier O neil Remix 
 David Calo - Chronomatic (Subconscious Tales Remix) 
 Nicholas Van Orton - Padme (GMJ Remix) 
 D-Rhapsody - Mad spirals Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"35.5K",fecha:"2017-12-30",link:"https://mcdn.podbean.com/mf/download/ksaw5b/347-HernanCattaneo-2017-12-30.mp3",tracklist:`Sabo - Singing Game (Acid Pauli's Singing Sequencer Remix)
Bagabond - Restless warrior
Domenic Cappello - Rain
Esteban Liebig - 10am
Sebastian Busto - Budapest
JPA - Visions Of You (Jamie Stevens Remix)
Subconcius Tales- Fly High - Rick Pier O neil Remix
David Calo - Chronomatic (Subconscious Tales Remix)
Nicholas Van Orton - Padme (GMJ Remix)`},{episodio:"348",titulo:"Resident / Episode 348 / Jan 06 2018",descripcion:`Guy Gerber - Humming Bird Blues / 
Guy Gerber - What To Do / 
Joeski & Doc Martin - Vajra feat. Lillia / 
dubspeeka - Enter theme / 
GuyRo feat. Chris Sterio - Zen (Matter Remix) / 
Kevin Toro & Maximiliano Haas - Banzai / 
Matter - Energon / 
Ben B\xF6hmer - After earth / 
Andre Gazolla, ZAC - Ritual / 
Lio Q - A Non Domino (RPO Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"39.5K",fecha:"2018-01-06",link:"https://mcdn.podbean.com/mf/download/rjibbp/348-HernanCattaneo-2018-01-06.mp3",tracklist:`Guy Gerber - Humming Bird Blues /
Guy Gerber - What To Do /
Joeski & Doc Martin - Vajra feat. Lillia /
dubspeeka - Enter theme /
GuyRo feat. Chris Sterio - Zen (Matter Remix) /
Kevin Toro & Maximiliano Haas - Banzai /
Matter - Energon /
Ben B\xF6hmer - After earth /
Andre Gazolla, ZAC - Ritual /`},{episodio:"349",titulo:"Resident / Episode 349 / Jan 13 2018",descripcion:`Filter Bear - Never In (Filter Bear Midnight Swim Reimagination) / 
Filter Bear - Never In / 
Matteo Bruscagin - Avorio / 
Leonardo Roth & Tomas Novelli - Seagate / 
John Cosani - Skull / 
Phoenix - Rise Up 20 (Cool Gold Essential Dub) / 
Andre Absolut - ID (Tash remix) / 
Miraculum - Intimacy (Gaston Ponte Remix) / 
Joy Marquez - Stranger Things (RPO Remix) / 
Andhim - Huso (Armonica Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"38.3K",fecha:"2018-01-13",link:"https://mcdn.podbean.com/mf/download/xcqw93/349-HernanCattaneo-2018-01-13.mp3",tracklist:`Filter Bear - Never In (Filter Bear Midnight Swim Reimagination) /
Filter Bear - Never In /
Matteo Bruscagin - Avorio /
Leonardo Roth & Tomas Novelli - Seagate /
John Cosani - Skull /
Phoenix - Rise Up 20 (Cool Gold Essential Dub) /
Andre Absolut - ID (Tash remix) /
Miraculum - Intimacy (Gaston Ponte Remix) /
Joy Marquez - Stranger Things (RPO Remix) /`},{episodio:"350",titulo:"Resident / Episode 350 / Jan 20 2018",descripcion:`Adisyn - Digital heart / 
Adisyn - Departure / 
Sam Farsio, Frederick Stone - Twisted Feet (Santiago Garcia Interpretation Mix) / 
Kevin Di Serna - Horizons / 
Marabou - 3Hours / 
Axelara - The Other Side / 
Mulder - Elon / 
Luciano Vaninetti - Kua / 
Jody Wisternoff - For All Time feat. Hendrik Burkhard / 
Henry Saiz - September (Endless Summer Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"36.1K",fecha:"2018-01-20",link:"https://mcdn.podbean.com/mf/download/5tpjnp/350-HernanCattaneo-2018-01-20.mp3",tracklist:`Adisyn - Digital heart /
Adisyn - Departure /
Sam Farsio, Frederick Stone - Twisted Feet (Santiago Garcia Interpretation Mix) /
Kevin Di Serna - Horizons /
Marabou - 3Hours /
Axelara - The Other Side /
Mulder - Elon /
Luciano Vaninetti - Kua /
Jody Wisternoff - For All Time feat. Hendrik Burkhard /`},{episodio:"351",titulo:"Resident / Episode 351 / Jan 27 2018",descripcion:`Izzet - Shadows & Dust / 
MONAX - String Theory (Sonic Union & Bastards of Funk Remix) / 
Bachir Salloum - OYA / 
Lucas Rossi - Dont Fall in / 
GMJ - Push Through (Andrea Cassino Remix) / 
Nicolas Ruiz - Vision (Lucas Rossi Remix) / 
Dave Seaman - Virgo Ryzin (Joeski Remix) / 
Sebastian Busto - Chronos (Nishan Lee Remix) / 
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) / 
Esensides - Teasing Time / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"36.8K",fecha:"2018-01-27",link:"https://mcdn.podbean.com/mf/download/8bf356/351-HernanCattaneo-2018-01-27.mp3",tracklist:`Izzet - Shadows & Dust /
MONAX - String Theory (Sonic Union & Bastards of Funk Remix) /
Bachir Salloum - OYA /
Lucas Rossi - Dont Fall in /
GMJ - Push Through (Andrea Cassino Remix) /
Nicolas Ruiz - Vision (Lucas Rossi Remix) /
Dave Seaman - Virgo Ryzin (Joeski Remix) /
Sebastian Busto - Chronos (Nishan Lee Remix) /
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) /`},{episodio:"352",titulo:"Resident / Episode 352 / Feb 03 2018",descripcion:`Sebastian Busto - The Life We Deserve / 
Roy Rosenfeld - When We Were Innocent / 
Matias Chilano - Timeline / 
Paul Kardos-Main Theme (Dimuth K Remix) / 
Slumber - Temple (Chris Fortier Fully Executed Remix) / 
Marcus Worgull - Seen / 
Einmusik Olivier Weiter - Zebra (Einmusik Remix) / 
Moderon, Apora - Sandcastle Empire / 
LOM - The Dream / 
Mike Tohr - Winter Lakes / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"36.9K",fecha:"2018-02-03",link:"https://mcdn.podbean.com/mf/download/b7c75u/352-HernanCattaneo-2018-02-03.mp3",tracklist:`Sebastian Busto - The Life We Deserve /
Roy Rosenfeld - When We Were Innocent /
Matias Chilano - Timeline /
Paul Kardos-Main Theme (Dimuth K Remix) /
Slumber - Temple (Chris Fortier Fully Executed Remix) /
Marcus Worgull - Seen /
Einmusik Olivier Weiter - Zebra (Einmusik Remix) /
Moderon, Apora - Sandcastle Empire /
LOM - The Dream /`},{episodio:"353",titulo:"Resident / Episode 353 / Feb 10 2018",descripcion:`The Antelope - Mikial / 
Domenic Cappello - Rain / 
Doyeq - Damp Thoughts (Love Over Entropy's M is for Moody Remix) / 
Portamentum - In Feras / 
Moshic - Love express / 
Jorgio Kioris - Linda (Kastis Torrau Remix) / 
Eco Driftmoon - Trust In The Wind (Mir Omar Remix) / 
Christ Malvin & Ivan Sandhas - Same Day (Priya Sen & Aman Anand Remix) / 
Juan Sapia - Sea Of Desolation / 
Raxon - Juvia / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"35.8K",fecha:"2018-02-10",link:"https://mcdn.podbean.com/mf/download/nadqbg/353-HernanCattaneo-2018-02-10.mp3",tracklist:`The Antelope - Mikial /
Domenic Cappello - Rain /
Doyeq - Damp Thoughts (Love Over Entropy's M is for Moody Remix) /
Portamentum - In Feras /
Moshic - Love express /
Jorgio Kioris - Linda (Kastis Torrau Remix) /
Eco Driftmoon - Trust In The Wind (Mir Omar Remix) /
Christ Malvin & Ivan Sandhas - Same Day (Priya Sen & Aman Anand Remix) /
Juan Sapia - Sea Of Desolation /`},{episodio:"354",titulo:"Resident / Episode 354 / Feb 17 2018",descripcion:`Xavier Fux - Try ball / 
 Xavier Fux - 19S / 
 GMJ - Push Through (Juan Deminicis Remix) / 
 Facundo Mohrr - Under (Staves Remix) / 
 GuyRo - Evenflow (Robert R. Hardy Remix) / 
 Claudio Cornejo, Bastian Mark - Journey to the Pyramid (Julian Rodriguez Remix) / 
 Jonas Saalbach - April (Simon Doty Remix) / 
 Budakid & Jonas Saalbach - Nautqiue / 
 Nhar - Light Radius / 
 DJ Bird - Arabic Theme (Dimuth K Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"37.1K",fecha:"2018-02-17",link:"https://mcdn.podbean.com/mf/download/3yy9x3/354-HernanCattaneo-2018-02-17.mp3",tracklist:`Xavier Fux - Try ball /
Xavier Fux - 19S /
GMJ - Push Through (Juan Deminicis Remix) /
Facundo Mohrr - Under (Staves Remix) /
GuyRo - Evenflow (Robert R. Hardy Remix) /
Claudio Cornejo, Bastian Mark - Journey to the Pyramid (Julian Rodriguez Remix) /
Jonas Saalbach - April (Simon Doty Remix) /
Budakid & Jonas Saalbach - Nautqiue /
Nhar - Light Radius /`},{episodio:"356",titulo:"Resident / Episode 356 / Mar 03 2018",descripcion:`Lazaros - Sympan / 
Facundo Mohrr - Blame / 
Paul Hazendonk - Derelicte / 
Monje -Juno / 
Sebastien Leger - Lost miracle / 
Matias Chilano - Nothing To Do / 
Hot TuneiK Presents OneTwo - O'Girondo (Robert R. Hardy Remix) / 
Blue Cell - Depeche Me (Pacco & Rudy B Remix) / 
Pedr\xE4da - Stylactique (Original) / 
Desaturate - Wanderer / Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"37.2K",fecha:"2018-03-03",link:"https://mcdn.podbean.com/mf/download/ew5bn3/356-HernanCattaneo-2018-03-03.mp3",tracklist:`Lazaros - Sympan /
Facundo Mohrr - Blame /
Paul Hazendonk - Derelicte /
Monje -Juno /
Sebastien Leger - Lost miracle /
Matias Chilano - Nothing To Do /
Hot TuneiK Presents OneTwo - O'Girondo (Robert R. Hardy Remix) /
Blue Cell - Depeche Me (Pacco & Rudy B Remix) /
Pedr\xE4da - Stylactique (Original) /`},{episodio:"357",titulo:"Resident / Episode 357 / Mar 10 2018",descripcion:`Doyeq - Cathedral (Audiofly Remix) / 
Kostya Outta - Audio mix 2 / 
Tech D - Gravity (Michael A Remix) / 
Esko -Pop Culture / 
Praveen Achary - Sonar / 
Gabriel Sordo - Strangers / 
Portable Sunsets - Straylight (Dave DK Remix) / 
Jonas Saalbach - April / 
Day by day - KoiFish (Rick Pier O'Neil Remix) / 
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"35.2K",fecha:"2018-03-10",link:"https://mcdn.podbean.com/mf/download/22iihz/357-HernanCattaneo-2018-03-10.mp3",tracklist:`Doyeq - Cathedral (Audiofly Remix) /
Kostya Outta - Audio mix 2 /
Tech D - Gravity (Michael A Remix) /
Esko -Pop Culture /
Praveen Achary - Sonar /
Gabriel Sordo - Strangers /
Portable Sunsets - Straylight (Dave DK Remix) /
Jonas Saalbach - April /
Day by day - KoiFish (Rick Pier O'Neil Remix) /`},{episodio:"358",titulo:"Resident / Episode 358 / Mar 17 2018",descripcion:`Reebot - Caminando (Y\xF6urr edit) / 
Alejo Demian - Midnight Moments / 
Octave - Electrobat / 
Federico Monarchesi - Mondschein / 
Nicolas Navarro & Tuco - Contrast (Niceshot & Armando Guerrero Remix) / 
Dimuth K , Shannon Davin - Horus / 
RPO - Kan Balam (A-Jay (SL) Remix) / 
Zoo Brazil - Moments / 
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) / 
Kamilo Sanclemente - Hidden Thoughts / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"37.5K",fecha:"2018-03-17",link:"https://mcdn.podbean.com/mf/download/mn4grq/358-HernanCattaneo-2018-03-17.mp3",tracklist:`Reebot - Caminando (Y\xF6urr edit) /
Alejo Demian - Midnight Moments /
Octave - Electrobat /
Federico Monarchesi - Mondschein /
Nicolas Navarro & Tuco - Contrast (Niceshot & Armando Guerrero Remix) /
Dimuth K , Shannon Davin - Horus /
RPO - Kan Balam (A-Jay (SL) Remix) /
Zoo Brazil - Moments /
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) /`},{episodio:"359",titulo:"Resident / Episode 359 / Mar 24 2018",descripcion:`Apparat feat. Soap & Skin - Goodbye (Isaak Escamilla '33' Rework) /
Lucas Rossi - Never More /
Octave, Lulius - Mind over body /
Mind Against - Days gone /
Rolbac - Loon (Zigan Aldi Remix) /
Augenblick - Haustlegur (Alec Araujo Remix) /
Nicolas Rada - Tempelhof (Dmitry Molosh Remix) /
Renaissance - Dharmalogy /
BRYZ - Solar /
Martin Roth - Guude Lane Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"37.6K",fecha:"2018-03-24",link:"https://mcdn.podbean.com/mf/download/2d9x2b/359-HernanCattaneo-2018-03-24.mp3",tracklist:`Apparat feat. Soap & Skin - Goodbye (Isaak Escamilla '33' Rework) /
Lucas Rossi - Never More /
Octave, Lulius - Mind over body /
Mind Against - Days gone /
Rolbac - Loon (Zigan Aldi Remix) /
Augenblick - Haustlegur (Alec Araujo Remix) /
Nicolas Rada - Tempelhof (Dmitry Molosh Remix) /
Renaissance - Dharmalogy /
BRYZ - Solar /`},{episodio:"360",titulo:"Resident / Episode 360 / Mar 31 2018",descripcion:`Markus Hayner - Thursday / 
Sahar Z & Vic F - Oliie / 
Amadori - I'd Rather Fly / 
Stelios Vassiloudis - Looking California / 
East Cafe - Matektanar / 
Facundo Mohrr - Blame / 
Just her - Desire / 
Dynacom - Demente (Dimuth K Reverie Mix) / 
Alex O Rion - Voices (Ri Za Remix) / 
Kamilo Sanclemente - Gemma / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"37K",fecha:"2018-03-31",link:"https://mcdn.podbean.com/mf/download/qvkhdi/360-HernanCattaneo-2018-03-31.mp3",tracklist:`Markus Hayner - Thursday /
Sahar Z & Vic F - Oliie /
Amadori - I'd Rather Fly /
Stelios Vassiloudis - Looking California /
East Cafe - Matektanar /
Facundo Mohrr - Blame /
Just her - Desire /
Dynacom - Demente (Dimuth K Reverie Mix) /
Alex O Rion - Voices (Ri Za Remix) /`},{episodio:"361",titulo:"Resident / Episode 361 / Apr 07 2018",descripcion:`Weekend World- The Word (Diego Berrondo Edit) / 
Danny Howells - Earthlings / 
Roger Martinez - Open (Mononoid Remix) / 
Tim Penner - Lost Again (Mir Omar Remix) / 
Amonita - Rubicunda / 
Andhim - Stay Close to me feat Hogni / 
Kamilo Sanclemente - Mensae / 
Antrim - Floating Point / 
TD - What If (M\xF8nje Remix) / 
Porra - Casa Cordoba / Download episode on MP3 (Right click, save link as...)`,likes:"46",descargas:"39.5K",fecha:"2018-04-07",link:"https://mcdn.podbean.com/mf/download/bh3vvp/361-HernanCattaneo-2018-04-07.mp3",tracklist:`Weekend World- The Word (Diego Berrondo Edit) /
Danny Howells - Earthlings /
Roger Martinez - Open (Mononoid Remix) /
Tim Penner - Lost Again (Mir Omar Remix) /
Amonita - Rubicunda /
Andhim - Stay Close to me feat Hogni /
Kamilo Sanclemente - Mensae /
Antrim - Floating Point /
TD - What If (M\xF8nje Remix) /`},{episodio:"362",titulo:"Resident / Episode 362 / Apr 14 2018",descripcion:`Lana Del Rey - Shades of Cool (Alfa State & Mystic District Edit) / 
Luke Sambe - Sooti (Eli Nissan Remix) / 
Roger Martinez - Oversoul (Graziano Raffa Rmx) / 
Priya Sen & Aman Anand - targaze (Rick Pier O'Neil Remix) / 
Timid Boy - Gangsta (Oxia Remix) / 
Osaya - Nick Muir remix / 
Magit Cacoon - Aussi (DAVI Remix) / 
Katzen - Perfume (Dynacom Unofficial Remix) / 
Marmion - Sch\xF6neberg (Tim Engelhardt) / 
London Grammar - Rooting For You (Tripswitch Unofficial Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"41K",fecha:"2018-04-14",link:"https://mcdn.podbean.com/mf/download/z9ajs7/362-HernanCattaneo-2018-04-14.mp3",tracklist:`Lana Del Rey - Shades of Cool (Alfa State & Mystic District Edit) /
Luke Sambe - Sooti (Eli Nissan Remix) /
Roger Martinez - Oversoul (Graziano Raffa Rmx) /
Priya Sen & Aman Anand - targaze (Rick Pier O'Neil Remix) /
Timid Boy - Gangsta (Oxia Remix) /
Osaya - Nick Muir remix /
Magit Cacoon - Aussi (DAVI Remix) /
Katzen - Perfume (Dynacom Unofficial Remix) /
Marmion - Sch\xF6neberg (Tim Engelhardt) /`},{episodio:"363",titulo:"Resident / Episode 363 / Apr 21 2018",descripcion:`Active Child - Johnny Belinda (MDK Remix) / 
SpeakOf & Santini - Melodrama (Navar Remix) / 
Cid Inc - Abyss / 
Dynacom - Demente (Dimuth K Reverie ) / 
Memory - Surrender / 
Analog Jungs - Lunar / 
Bog - Space Knights / 
Bog - Starman / 
Kapote - Tonite (Marvin & Guy Obscure Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"44.3K",fecha:"2018-04-21",link:"https://mcdn.podbean.com/mf/download/2kzp6d/363-HernanCattaneo-2018-04-21.mp3",tracklist:`Active Child - Johnny Belinda (MDK Remix) /
SpeakOf & Santini - Melodrama (Navar Remix) /
Cid Inc - Abyss /
Dynacom - Demente (Dimuth K Reverie ) /
Memory - Surrender /
Analog Jungs - Lunar /
Bog - Space Knights /
Bog - Starman /`},{episodio:"364",titulo:"Resident / Episode 364 / Apr 28 2018",descripcion:`Rey & Kjavik - Saraswati (Armonica Remix) / 
DAVI - Boarding Call / 
Dimuth K, A - Jay (SL) - Yavapai / 
Eze Ramirez - 3 de enero / 
DJ Paul - Everything We Know Its Wrong / 
Kasper Koman - The Construct / 
Memory - Sabba / 
Pro4ound - Ancient Times (golan zocher remix) / 
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) / 
Nick Warren & Tripswitch - Voight Kampff (Cid Inc. Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.8K",fecha:"2018-04-28",link:"https://mcdn.podbean.com/mf/download/cxjzb9/364-HernanCattaneo-2018-04-28.mp3",tracklist:`Rey & Kjavik - Saraswati (Armonica Remix) /
DAVI - Boarding Call /
Dimuth K, A - Jay (SL) - Yavapai /
Eze Ramirez - 3 de enero /
DJ Paul - Everything We Know Its Wrong /
Kasper Koman - The Construct /
Memory - Sabba /
Pro4ound - Ancient Times (golan zocher remix) /
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) /`},{episodio:"366",titulo:"Resident / Episode 366 / May 12 2018",descripcion:`H\xE6los - Oracle (Erdi Irmak Remix) / 
Volen Sentir - Veluwe / 
Golan Zocher & Kamilo Sanclemente - Getting Closer (feat. Amber Long) / 
Goraieb - Echoes From The Shore / 
Matan Casi & Ziger - Cling Clong / 
Trikk - Devila / 
Charlotte Gainsbourg - Les Oxalis (Alan Braxe Remix) / 
EANP - Togheterness / 
ZAC, Gabriel Carminatti - Rutile / 
Darko De Jan feat. Esphyr - Clairvoyant (Matter remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.3K",fecha:"2018-05-12",link:"https://mcdn.podbean.com/mf/download/3y3m32/366-HernanCattaneo-2018-05-12.mp3",tracklist:`H\xE6los - Oracle (Erdi Irmak Remix) /
Volen Sentir - Veluwe /
Golan Zocher & Kamilo Sanclemente - Getting Closer (feat. Amber Long) /
Goraieb - Echoes From The Shore /
Matan Casi & Ziger - Cling Clong /
Trikk - Devila /
Charlotte Gainsbourg - Les Oxalis (Alan Braxe Remix) /
EANP - Togheterness /
ZAC, Gabriel Carminatti - Rutile /`},{episodio:"367",titulo:"Resident / Episode 367 / May 19 2018",descripcion:`Squire feat Vette - Wish It Was Easy / 
Verche - Aphelion / 
Volen Sentir - Na Dvore Dozhd' / 
Luis Kiverling - Dia de Mariscal (East Cafe Remix) / 
Joy Marquez - Be free / 
Paul Sawyer - Nemesis (Nick Muir Mix) / 
Memory, Ezequiel Arias - Shen / 
East Cafe - The Way You Left Us (Tripswitch Remix) / 
Chaty & Alerch - Morr / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"39K",fecha:"2018-05-19",link:"https://mcdn.podbean.com/mf/download/7kd8ma/367-HernanCattaneo-2018-05-19.mp3",tracklist:`Squire feat Vette - Wish It Was Easy /
Verche - Aphelion /
Volen Sentir - Na Dvore Dozhd' /
Luis Kiverling - Dia de Mariscal (East Cafe Remix) /
Joy Marquez - Be free /
Paul Sawyer - Nemesis (Nick Muir Mix) /
Memory, Ezequiel Arias - Shen /
East Cafe - The Way You Left Us (Tripswitch Remix) /`},{episodio:"368",titulo:"Resident / Episode 368 / May 26 2018",descripcion:`Thodoris Triantafilou - Scorn / 
EANP - Communication / 
Catz 'n Dogz - Elixir (Jonathan Kaspar Remix) / 
Kamilo Sanclemente - Elixir / 
Banco De Gaia - Heliopolis (Framewerk Rewerk) / 
Peter Makto & Gregory S - Nightcrawler (Mihai Popoviciu Remix) / 
Amari & Nico Morano ft. Jinadu - Desire (Eelke Kleijn Remix) / 
Budakid, Nordfold - She talks / 
Carl Craig - The Melody (Henrik Schwarz Remix) / 
Paul Kalkbrenner - Part eight / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"39.1K",fecha:"2018-05-26",link:"https://mcdn.podbean.com/mf/download/m8svt7/368-HernanCattaneo-2018-05-26.mp3",tracklist:`Thodoris Triantafilou - Scorn /
EANP - Communication /
Catz 'n Dogz - Elixir (Jonathan Kaspar Remix) /
Kamilo Sanclemente - Elixir /
Banco De Gaia - Heliopolis (Framewerk Rewerk) /
Peter Makto & Gregory S - Nightcrawler (Mihai Popoviciu Remix) /
Amari & Nico Morano ft. Jinadu - Desire (Eelke Kleijn Remix) /
Budakid, Nordfold - She talks /
Carl Craig - The Melody (Henrik Schwarz Remix) /`},{episodio:"369",titulo:"Resident / Episode 369 / Jun 02 2018",descripcion:`Blondish - Wizard Of Love (Modular Project Remix) / 
Timo Maas, Basti Grub & Eric Volta - We were riding high / 
&ME, Rampa, Adam Port - Muy\xC3\xA8 (Black Coffee Remix) / 
Graziano Raffa -\xA0The Replicant / 
DJ Paul - Mendoza (Second Part Mix) / 
Geist - Tiny Little Things (Tripswitch Remix) / 
Kasper Koman - March / 
Budakid, Nordfold - She talks / 
Chab - Closer to me (Baunder remix) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"41.6K",fecha:"2018-06-02",link:"https://mcdn.podbean.com/mf/download/cfsm23/369-HernanCattaneo-2018-06-02.mp3",tracklist:`Blondish - Wizard Of Love (Modular Project Remix) /
Timo Maas, Basti Grub & Eric Volta - We were riding high /
&ME, Rampa, Adam Port - Muy\xC3\xA8 (Black Coffee Remix) /
Graziano Raffa -\xA0The Replicant /
DJ Paul - Mendoza (Second Part Mix) /
Geist - Tiny Little Things (Tripswitch Remix) /
Kasper Koman - March /
Budakid, Nordfold - She talks /`},{episodio:"370",titulo:"Resident / Episode 370 / Jun 09 2018",descripcion:`Radiohead - Weird Fishes (Lucas Rossi \xA8From The Bottom\xA8 Bootleg) / 
Roy Rosenfeld - Helena / 
Darlin Vlys - Learned to hide feat. Northern Lite (Chaim remix) / 
Eelke Kleijn - The Calling / 
Albert R. - Pitchblack (Hot TuneiK Remix) / 
Alejandro Manso - Forest Dreamer (John Cosani Remix) / 
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) / 
Tim Green - Echo / 
Adana Twins - Jupiter / 
Pional - Tempest / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"40.8K",fecha:"2018-06-09",link:"https://mcdn.podbean.com/mf/download/zdy9eb/370-HernanCattaneo-2018-06-09.mp3",tracklist:`Radiohead - Weird Fishes (Lucas Rossi \xA8From The Bottom\xA8 Bootleg) /
Roy Rosenfeld - Helena /
Darlin Vlys - Learned to hide feat. Northern Lite (Chaim remix) /
Eelke Kleijn - The Calling /
Albert R. - Pitchblack (Hot TuneiK Remix) /
Alejandro Manso - Forest Dreamer (John Cosani Remix) /
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) /
Tim Green - Echo /
Adana Twins - Jupiter /`},{episodio:"371",titulo:"Resident / Episode 371 / Jun 16 2018",descripcion:`Hauy & Jonathan Rosa - The Skeleton Men / 
Nicolas Ruiz - Vision (Matias Chilano Remix) / 
Ost & Kjex - Private dancer / 
Marcelo Vasami - Free play / 
Dynacom - Black Lion (Andrea Cassino Remix) / 
Draso - Strum (Cid Inc. Remix) / 
Midway - Amazon (Mir Omar Remix) / 
Fort Romeau - Pablo / 
Hay - Reverie (Peter Martin remix) / 
Oxia - Sydmel / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"39.1K",fecha:"2018-06-16",link:"https://mcdn.podbean.com/mf/download/vguxuu/371-HernanCattaneo-2018-06-16.mp3",tracklist:`Hauy & Jonathan Rosa - The Skeleton Men /
Nicolas Ruiz - Vision (Matias Chilano Remix) /
Ost & Kjex - Private dancer /
Marcelo Vasami - Free play /
Dynacom - Black Lion (Andrea Cassino Remix) /
Draso - Strum (Cid Inc. Remix) /
Midway - Amazon (Mir Omar Remix) /
Fort Romeau - Pablo /
Hay - Reverie (Peter Martin remix) /`},{episodio:"372",titulo:"Resident / Episode 372 / Jun 23 2018",descripcion:`Sabb, DAVI - Full Moon Tale Feat. DAVI / 
Deeparture (nl) - Trinidad (Silinder Remix) / 
Animal Trainer - Rigpa / 
Perbells - Universo / 
Orsen - Modified / 
Sasha - Cloud Cuckoo (Jaap Ligthart Edit) / 
Tunnelvisions - Ottokar's Sky / 
Kasper Koman - Wonderland / 
Matter - We Are Dust (Subandrio Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"35.5K",fecha:"2018-06-23",link:"https://mcdn.podbean.com/mf/download/c6fkrz/372-HernanCattaneo-2018-06-23.mp3",tracklist:`Sabb, DAVI - Full Moon Tale Feat. DAVI /
Deeparture (nl) - Trinidad (Silinder Remix) /
Animal Trainer - Rigpa /
Perbells - Universo /
Orsen - Modified /
Sasha - Cloud Cuckoo (Jaap Ligthart Edit) /
Tunnelvisions - Ottokar's Sky /
Kasper Koman - Wonderland /`},{episodio:"373",titulo:"Resident / Episode 373 / Jun 30 2018",descripcion:`Ost & Kjex - Nightingale / 
K Nass - Praiano / 
Muhammed Felfel - Concepts of Justice / 
Brian Cid -\xA0ID / 
Orsen - Driftwood / 
Michael A - Nothing Is Useless / 
Dark Soul Project Pres. Anatolian - Touching The Sky / 
Thankyou City - We All Look A Little Weird Naked (Roger Martinez Remix) / 
Cafe Del Mar (Tale Of Us Renaissance Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.8K",fecha:"2018-06-30",link:"https://mcdn.podbean.com/mf/download/an4pvj/373-HernanCattaneo-2018-06-30.mp3",tracklist:`Ost & Kjex - Nightingale /
K Nass - Praiano /
Muhammed Felfel - Concepts of Justice /
Brian Cid -\xA0ID /
Orsen - Driftwood /
Michael A - Nothing Is Useless /
Dark Soul Project Pres. Anatolian - Touching The Sky /
Thankyou City - We All Look A Little Weird Naked (Roger Martinez Remix) /`},{episodio:"374",titulo:"Resident / Episode 374 / Jul 07 2018",descripcion:`Anja Schneider - All I See (Butch Dub) / 
Cazap & Boskis, Esteban Abramovich, Joaqui Gentil & Xris Garcia Rios - Before Paris / 
Ricosh\xEBi - Something / 
Formatic- Not Enough Data to Feel / 
Matias Larrosa, Martin Gardoqui, Bramuss, Samuel Dezus - Aurora Borealis / 
Martin Tolosa - Life on Mars / 
Atalaia - Talking Pictures / 
Brigado Crew & Crisstiano - Nebular / 
Eli Nissan - Everlast (Khen remix) / 
Richie Blacker - Mess express / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"37.3K",fecha:"2018-07-07",link:"https://mcdn.podbean.com/mf/download/kpnqm5/374-HernanCattaneo-2018-07-07.mp3",tracklist:`Anja Schneider - All I See (Butch Dub) /
Cazap & Boskis, Esteban Abramovich, Joaqui Gentil & Xris Garcia Rios - Before Paris /
Ricosh\xEBi - Something /
Formatic- Not Enough Data to Feel /
Matias Larrosa, Martin Gardoqui, Bramuss, Samuel Dezus - Aurora Borealis /
Martin Tolosa - Life on Mars /
Atalaia - Talking Pictures /
Brigado Crew & Crisstiano - Nebular /
Eli Nissan - Everlast (Khen remix) /`},{episodio:"376",titulo:"Resident / Episode 376 / Jul 21 2018",descripcion:`Robbie Akbal - Lunar 3 (Superlounge Remix) / 
Rick Pier O'Neil - Abandoned Planet (GMJ Remix) / 
Madloch - Nordic Noir (Petar Dundov Remix) / 
Nishan Lee - Modano / 
The Cinematic Orchestra - Arrival of the Birds (Olivier Weiter edit) / 
Kamilo Sanclemente, Dabeat - Dogma / 
Test Tone - Aurora (Guy Mantzur Remix) / 
Monkey Safari- Boulogne Billancourt (Musumeci Remix) / 
Alex ORion - Rubicon / 
Guy Mantzur & Lonya - Dynasty feat Adam Gorlizki / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"36.5K",fecha:"2018-07-21",link:"https://mcdn.podbean.com/mf/download/spwc25/376-HernanCattaneo-2018-07-21.mp3",tracklist:`Robbie Akbal - Lunar 3 (Superlounge Remix) /
Rick Pier O'Neil - Abandoned Planet (GMJ Remix) /
Madloch - Nordic Noir (Petar Dundov Remix) /
Nishan Lee - Modano /
The Cinematic Orchestra - Arrival of the Birds (Olivier Weiter edit) /
Kamilo Sanclemente, Dabeat - Dogma /
Test Tone - Aurora (Guy Mantzur Remix) /
Monkey Safari- Boulogne Billancourt (Musumeci Remix) /
Alex ORion - Rubicon /`},{episodio:"377",titulo:"Resident / Episode 377 / Jul 28 2018",descripcion:`\xD6ona Dahl & Giddyhead - Baba (Lee Jones Remix) / 
Audioglider - Accidental Alchemy / 
SLP - Forbidden Fruit (Chris Drifter Remix) / 
Dousk - Life Is a Carnival (Matias Chilano Remix) / 
Ewan Rill - Nectar / 
Kanye West - Hold my Liquor (Klement Bonelli remix) / 
Armen Miran - Born In Fire / 
Up All Night - Way Back (Who Else & Anhauser Remix) / 
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) / 
BOg - Jahar (Mathias Schober Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"35.9K",fecha:"2018-07-28",link:"https://mcdn.podbean.com/mf/download/u8vu5a/377-HernanCattaneo-2018-07-28.mp3",tracklist:`\xD6ona Dahl & Giddyhead - Baba (Lee Jones Remix) /
Audioglider - Accidental Alchemy /
SLP - Forbidden Fruit (Chris Drifter Remix) /
Dousk - Life Is a Carnival (Matias Chilano Remix) /
Ewan Rill - Nectar /
Kanye West - Hold my Liquor (Klement Bonelli remix) /
Armen Miran - Born In Fire /
Up All Night - Way Back (Who Else & Anhauser Remix) /
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) /`},{episodio:"378",titulo:"Resident / Episode 378 / Aug 04 2018",descripcion:`Johnny Messina - Horizon 
 Chicola - Could Heaven Be (Ruede Hagelstein Remix) 
 Jobe, Soul Button - Umar 
 Julian Rodriguez - Romaclo (Dimuth K Remix) 
 Artfaq - Telephone Days 
 Ricardo Piedra - Hybiscus - Gaston Ponte Remix 
 Sonic Union & Bastards Of Funk - The Firefly Dance (Forerunners Remix) 
 John 00 Fleming - Floating (Kamilo Sanclemente & Dabeat Extended Remix) 
 Nick Devon - Eternity 
 Porra - When it begins Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"38.5K",fecha:"2018-08-04",link:"https://mcdn.podbean.com/mf/download/53wtwx/378-HernanCattaneo-2018-08-04.mp3",tracklist:`Johnny Messina - Horizon
Chicola - Could Heaven Be (Ruede Hagelstein Remix)
Jobe, Soul Button - Umar
Julian Rodriguez - Romaclo (Dimuth K Remix)
Artfaq - Telephone Days
Ricardo Piedra - Hybiscus - Gaston Ponte Remix
Sonic Union & Bastards Of Funk - The Firefly Dance (Forerunners Remix)
John 00 Fleming - Floating (Kamilo Sanclemente & Dabeat Extended Remix)
Nick Devon - Eternity`},{episodio:"379",titulo:"Resident / Episode 379 / Aug 11 2018",descripcion:`Michael A - Look closer / 
Then - Jicarilla / 
Brigado Crew & Crisstiano - Anwar / 
Hermanez - Bullish Divergence / 
Artfaq - Montana / 
Jorgio Kioris - Osaka (Priya Sen & Aman Anand Remix) / 
Alexander Alar - London / 
Michael A - Paradox / 
Analog Kitchen - Utopian tendences / 
Eelke Kleijn - Moments of Clarity / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"37.8K",fecha:"2018-08-11",link:"https://mcdn.podbean.com/mf/download/7mciju/379-HernanCattaneo-2018-08-11.mp3",tracklist:`Michael A - Look closer /
Then - Jicarilla /
Brigado Crew & Crisstiano - Anwar /
Hermanez - Bullish Divergence /
Artfaq - Montana /
Jorgio Kioris - Osaka (Priya Sen & Aman Anand Remix) /
Alexander Alar - London /
Michael A - Paradox /
Analog Kitchen - Utopian tendences /`},{episodio:"380",titulo:"Resident / Episode 380 / Aug 18 2018",descripcion:`Antrim - Pyramids / 
Tom Pooks, Joy kitikonti - Attico / 
Seff - Needle To The Groove (James Solace Remix) / 
John Cosani - Amaru / 
Seymark - Nove (Dimuth K Remix) / 
Romrez - King Of Morocco (Franco Tejedor & Martin Gardoqui Remix) / 
Oliver Lieb - Gone / 
Memory - Bonderline / 
Joan Retamero- Through Revival / 
Cid Inc - Fear and Square / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.3K",fecha:"2018-08-18",link:"https://mcdn.podbean.com/mf/download/r4984v/380-HernanCattaneo-2018-08-18.mp3",tracklist:`Antrim - Pyramids /
Tom Pooks, Joy kitikonti - Attico /
Seff - Needle To The Groove (James Solace Remix) /
John Cosani - Amaru /
Seymark - Nove (Dimuth K Remix) /
Romrez - King Of Morocco (Franco Tejedor & Martin Gardoqui Remix) /
Oliver Lieb - Gone /
Memory - Bonderline /
Joan Retamero- Through Revival /`},{episodio:"381",titulo:"Resident / Episode 381 / Aug 25 2018",descripcion:`Dynacom & Bodai - Hibrida / 
Loreena McKennitt - The Mummers' Dance (Mattes, Klaus Kim Remix Unofficial) / 
Madloch & Subnode - Second Sight / 
Mir Omar - Until November / 
Dave Matthews Band - Two Step (Golan Zocher Remix) / 
Jonathan Kaspar - Panem / 
Federico Monachesi - Unusual Suspects (Dimuth K remix) / 
Donaes - Yellow Dust (Jaap Ligthart Remix) / 
The Cure - At Night (Verlk Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"35.5K",fecha:"2018-08-25",link:"https://mcdn.podbean.com/mf/download/jk9jnv/381-HernanCattaneo-2018-08-25.mp3",tracklist:`Dynacom & Bodai - Hibrida /
Loreena McKennitt - The Mummers' Dance (Mattes, Klaus Kim Remix Unofficial) /
Madloch & Subnode - Second Sight /
Mir Omar - Until November /
Dave Matthews Band - Two Step (Golan Zocher Remix) /
Jonathan Kaspar - Panem /
Federico Monachesi - Unusual Suspects (Dimuth K remix) /
Donaes - Yellow Dust (Jaap Ligthart Remix) /`},{episodio:"382",titulo:"Resident / Episode 382 / Sep 01 2018",descripcion:`Coma - Lora (Robag's Fandara Qualv NB) / 
DSF - Feeling gaps / 
Dj Rocca - Basic Drink (Marc Pi\xF1ol Remix) / 
Li-Polymer - How They Shine (Navar Remix) / 
Angelo & Argento - Swiftness / 
Ewan Rill - Overflow Experience (Andrea Cassino Remix) / 
Cid Inc - Bidr cherry / 
Khen - Pecas / 
Aly Freeze - Cutrone (RPO remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"36.7K",fecha:"2018-09-01",link:"https://mcdn.podbean.com/mf/download/pxudxe/382-HernanCattaneo-2018-09-01.mp3",tracklist:`Coma - Lora (Robag's Fandara Qualv NB) /
DSF - Feeling gaps /
Dj Rocca - Basic Drink (Marc Pi\xF1ol Remix) /
Li-Polymer - How They Shine (Navar Remix) /
Angelo & Argento - Swiftness /
Ewan Rill - Overflow Experience (Andrea Cassino Remix) /
Cid Inc - Bidr cherry /
Khen - Pecas /`},{episodio:"383",titulo:"Resident / Episode 383 / Sep 09 2018",descripcion:`DJ AroZe & Asi Kojak - Aphrodite Affair / 
Hermanez - Falganda / 
Bachir Salloum - The Space Between us / 
Analog Jungs - Phoenix (Subandrio Remix) / 
Dustin Nantais - Last Legs (Emi Galvan Remix) / 
Simos Tagias - Revolt / 
Cid Inc - Via Karelia / 
Porra - When it ends / 
Paul Kalkbrenner - Part Six (Giddyhead Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"38.6K",fecha:"2018-09-09",link:"https://mcdn.podbean.com/mf/download/bj37zd/383-HernanCattaneo-2018-08-08.mp3",tracklist:`DJ AroZe & Asi Kojak - Aphrodite Affair /
Hermanez - Falganda /
Bachir Salloum - The Space Between us /
Analog Jungs - Phoenix (Subandrio Remix) /
Dustin Nantais - Last Legs (Emi Galvan Remix) /
Simos Tagias - Revolt /
Cid Inc - Via Karelia /
Porra - When it ends /`},{episodio:"384",titulo:"Resident / Episode 384 / Sep 15 2018",descripcion:"Kamilo Sanclemente, Juan Pablo Torrez - Kavala (Is a Fine Day vocal mix) / Davi & Armen Miran - Corrected / Hosini - Kyla / Damian Lazarus & The Ancient Moons - Feedback Loop (Bedouin Remix) / DJ Marika - 1595 (Framewerk's Burning Man Remix) / Brett Rubin & Beauxtech! - Looking Glass (Priya Sen & Aman Anand Remix) / D.Y.A & Kalyma - Operator (Panthera Krause Remix) / Beat Maniacs - Manchurian Diskosex (Nishan Lee Remix) / Lucas Rossi - I'm Still Here / M.A.N.D.Y - Tomorrow Is Another Night feat. Jimmy Vallance (Stereocalypse Remix) / Download episode on MP3 (Right click, save link as...)",likes:"36",descargas:"37.2K",fecha:"2018-09-15",link:"https://mcdn.podbean.com/mf/download/8y4wzg/384-HernanCattaneo-2018-09-15.mp3"},{episodio:"386",titulo:"Resident / Episode 386 / Sep 29 2018",descripcion:`David Orin - Antemeridian / 
Adisyn - Thaw / 
Uccelli - Road to the sun / 
Kostya Outta - Marathon (Nicholas Van Orton remix) / 
Jeremy Olander vs Kamaliz - Zanzibar (Sthlm Edit) / 
Baunder & Interaxxis - Stable / 
Gadi Mitrani - Cave of Wonders / 
Alec Araujo & Cryptic Realms - Katharsys / 
James Gill - Lost in dreams / 
Sasha - Smoke mon / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"39.4K",fecha:"2018-09-29",link:"https://mcdn.podbean.com/mf/download/wgyb2y/386-HernanCattaneo-2018-09-29.mp3",tracklist:`David Orin - Antemeridian /
Adisyn - Thaw /
Uccelli - Road to the sun /
Kostya Outta - Marathon (Nicholas Van Orton remix) /
Jeremy Olander vs Kamaliz - Zanzibar (Sthlm Edit) /
Baunder & Interaxxis - Stable /
Gadi Mitrani - Cave of Wonders /
Alec Araujo & Cryptic Realms - Katharsys /
James Gill - Lost in dreams /`},{episodio:"387",titulo:"Resident / Episode 387 / Oct 06 2018",descripcion:`Henry Saiz & Band - Me llama una voz (Brian Cid remix) / 
Claudio Ricci - Yano (Brigado Crew Remix) / 
Rich Curtis - The Far Bridge (Antrim & Analog Jungs Remix) / 
Dave Seaman - Rodales / 
SIS - Danzan / 
Dmitry Molosh - Charisma / 
Omar El Gamal - Nothing Only / 
Hans Zimmer & Benjamin Wallfisch - 2049 (Joan Retamero Bootleg) / 
Rich Curtis & Javier Misa - Radar cry / 
Artfaq - Somebody Else (Antrim Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"39.9K",fecha:"2018-10-06",link:"https://mcdn.podbean.com/mf/download/3strcy/387-HernanCattaneo-2018-10-06.mp3",tracklist:`Henry Saiz & Band - Me llama una voz (Brian Cid remix) /
Claudio Ricci - Yano (Brigado Crew Remix) /
Rich Curtis - The Far Bridge (Antrim & Analog Jungs Remix) /
Dave Seaman - Rodales /
SIS - Danzan /
Dmitry Molosh - Charisma /
Omar El Gamal - Nothing Only /
Hans Zimmer & Benjamin Wallfisch - 2049 (Joan Retamero Bootleg) /
Rich Curtis & Javier Misa - Radar cry /`},{episodio:"388",titulo:"Resident / Episode 388 / Oct 13 2018",descripcion:"Live at Tomorrowland Part 1 / Download episode on MP3 (Right click, save link as...)",likes:"32",descargas:"37.2K",fecha:"2018-10-13",link:"https://mcdn.podbean.com/mf/download/cj2qbm/388-HernanCattaneo-2018-10-13.mp3"},{episodio:"389",titulo:"Resident / Episode 389 / Oct 20 2018",descripcion:"Live at Tomorrowland Part 2 / Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"36K",fecha:"2018-10-20",link:"https://mcdn.podbean.com/mf/download/uu85k8/389-HernanCattaneo-2018-10-20.mp3"},{episodio:"390",titulo:"Resident / Episode 390 / Oct 27 2018",descripcion:`Li - Polymer - How They Shine (Navar Remix) / 
Verlk - Alias / 
Erdi Irmak - The Midnight Zone (Tatsama's Sunrise Remix) / 
EANP - Live the time / 
Omar El Gamal - Nothing Only / 
Isaac Differding - City Of Children
Maxi Degrassi - Bells In The City (Armen Miran Remix) / 
Billka - Return To The Source / 
Lonya & Subandrio - Waterdrop / 
Luke Chable pres The Quest - The Shepherd (Dark Soul Project 2018 Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"36.8K",fecha:"2018-10-27",link:"https://mcdn.podbean.com/mf/download/8kcjv7/390-HernanCattaneo-2018-10-27.mp3",tracklist:`Li - Polymer - How They Shine (Navar Remix) /
Verlk - Alias /
Erdi Irmak - The Midnight Zone (Tatsama's Sunrise Remix) /
EANP - Live the time /
Omar El Gamal - Nothing Only /
Isaac Differding - City Of Children
Maxi Degrassi - Bells In The City (Armen Miran Remix) /
Billka - Return To The Source /
Lonya & Subandrio - Waterdrop /`},{episodio:"391",titulo:"Resident / Episode 391 / Nov 03 2018",descripcion:`Martin Gardoqui Matias Larrosa Samuel Dezus - Orion / 
Ivan Sandhas & Kike Roldan - When I'm Gone / 
Mlinar - Farewell to the Moon (Luke Hunter Remix) / 
Francisco Villasuso - Something Nice (Original Mix) / 
DSF - Acacia / 
Christopher FaFa - Fourty (Age Is Only Numbers ) / 
Dave Gahan - Tomorrow (\xF8ostil edit) / 
Funkstate - Plexo / 
Sobek - Modest Is Hottest / 
Hannes Bieger - Stars / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"36.2K",fecha:"2018-11-03",link:"https://mcdn.podbean.com/mf/download/vt7jeu/391-HernanCattaneo-2018-11-03.mp3",tracklist:`Martin Gardoqui Matias Larrosa Samuel Dezus - Orion /
Ivan Sandhas & Kike Roldan - When I'm Gone /
Mlinar - Farewell to the Moon (Luke Hunter Remix) /
Francisco Villasuso - Something Nice (Original Mix) /
DSF - Acacia /
Christopher FaFa - Fourty (Age Is Only Numbers ) /
Dave Gahan - Tomorrow (\xF8ostil edit) /
Funkstate - Plexo /
Sobek - Modest Is Hottest /`},{episodio:"392",titulo:"Resident / Episode 392 / Nov 10 2018",descripcion:`Nacho Varela & Cruz Vittor Feat. Geri Terella - Have A Name / 
Santo Adriano - Interview with the Vampire / 
Fat sushi - Timeless / 
Nick Varon - Over & Out (Nicolas Rada Remix) / 
Pysh - Ballada (Matias Chilano Remix) / 
Nishan Lee - Ritual / 
Amber Run - Found (Y\xF6urr Dark Room Remix) / 
Paul Kardos - On the Ether / 
Subandrio - Moas Gone / 
Sasha & La Fleur - F\xF6rbindelse / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"35.9K",fecha:"2018-11-10",link:"https://mcdn.podbean.com/mf/download/5gx64y/392-HernanCattaneo-2018-11-10.mp3",tracklist:`Nacho Varela & Cruz Vittor Feat. Geri Terella - Have A Name /
Santo Adriano - Interview with the Vampire /
Fat sushi - Timeless /
Nick Varon - Over & Out (Nicolas Rada Remix) /
Pysh - Ballada (Matias Chilano Remix) /
Nishan Lee - Ritual /
Amber Run - Found (Y\xF6urr Dark Room Remix) /
Paul Kardos - On the Ether /
Subandrio - Moas Gone /`},{episodio:"393",titulo:"Resident / Episode 393 / Nov 17 2018",descripcion:`Hasith - Silk Road (Reformed) / 
Paul Kardos - Ameba / 
Khen - Evergreen / 
Nicolas Rada - Ionosphere / 
C-Jay & LOM - Gilgul / 
Analog Jungs - Universe / 
Neil Quigley - Firethorn / 
Colle - Elysian / 
Kintar, BOg - Tribelune / 
Ewan Rill - Beta / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"36.7K",fecha:"2018-11-17",link:"https://mcdn.podbean.com/mf/download/r2y4jf/393-HernanCattaneo-2018-11-17.mp3",tracklist:`Hasith - Silk Road (Reformed) /
Paul Kardos - Ameba /
Khen - Evergreen /
Nicolas Rada - Ionosphere /
C-Jay & LOM - Gilgul /
Analog Jungs - Universe /
Neil Quigley - Firethorn /
Colle - Elysian /
Kintar, BOg - Tribelune /`},{episodio:"394",titulo:"Resident / Episode 394 / Nov 24 2018",descripcion:`Sobek - Emotional Chastity / 
Manu F - \xD1andubay / 
Lonya, Marcelo Vasami - Breakfast at the Canales / 
Cazap & Boskis, Niko Rizzo - Personal Space / 
Nicola Saladino - Mafra - Missus Remix / 
Nikko.Z & Chris Mozio - 7.5 L\xF6ffel Sugar (Nicolas Ruiz Remix) / 
Andre Sobbota - Robots (Subandrio Remix) / 
Psychowsky - Murderica (Subandrio Remix) / 
Antrim - Experiments (Black 8 Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"36.8K",fecha:"2018-11-24",link:"https://mcdn.podbean.com/mf/download/cvt4gr/394-HernanCattaneo-2018-11-24.mp3",tracklist:`Sobek - Emotional Chastity /
Manu F - \xD1andubay /
Lonya, Marcelo Vasami - Breakfast at the Canales /
Cazap & Boskis, Niko Rizzo - Personal Space /
Nicola Saladino - Mafra - Missus Remix /
Nikko.Z & Chris Mozio - 7.5 L\xF6ffel Sugar (Nicolas Ruiz Remix) /
Andre Sobbota - Robots (Subandrio Remix) /
Psychowsky - Murderica (Subandrio Remix) /`},{episodio:"396",titulo:"Resident / Episode 396 / Dec 08 2018",descripcion:`Hemstock & Jennings - Mirage (Dark Soul Project Pres. Anatolian Remix) / 
Michael A - Soul Digger / 
Dario Arcas- In paradise / 
Ziger - Razor (Dimuth K Remix) / 
Simon Doty & Zein - Dawn (Ezequiel Arias Remix) / 
Christian Monique - Rebirth (Andrea Cassino Remix) / 
Michael A - Aviate / 
EANP - Live the time / 
La Fleur - Rooned / 
Samuel L Session - Velvet (Funk D'Void Mix-Djivo ReEdit) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"38.1K",fecha:"2018-12-08",link:"https://mcdn.podbean.com/mf/download/2fx2se/396-HernanCattaneo-2018-12-08.mp3",tracklist:`Hemstock & Jennings - Mirage (Dark Soul Project Pres. Anatolian Remix) /
Michael A - Soul Digger /
Dario Arcas- In paradise /
Ziger - Razor (Dimuth K Remix) /
Simon Doty & Zein - Dawn (Ezequiel Arias Remix) /
Christian Monique - Rebirth (Andrea Cassino Remix) /
Michael A - Aviate /
EANP - Live the time /
La Fleur - Rooned /`},{episodio:"397",titulo:"Resident / Episode 397 / Dec 15 2018",descripcion:`Kevin Di Serna - Momerant / 
Budakid - Senlin / 
Love Over Entropy - 9576 / 
All Is Well - Is It (Version_1) / 
D-Nox, Lonya, DJ Zombi - Fuze / 
Rick Pier O'Neil - Pall (RPO Part 1) / 
After Burn - Weeding day / 
Dynacom & Bodai - Symbiosis / 
Julio Largente - A Place In Space (Paul Deep Remix) / 
Audio Junkies ft Cari Golden What is real / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"37.9K",fecha:"2018-12-15",link:"https://mcdn.podbean.com/mf/download/ueki2r/397-HernanCattaneo-2018-12-15.mp3",tracklist:`Kevin Di Serna - Momerant /
Budakid - Senlin /
Love Over Entropy - 9576 /
All Is Well - Is It (Version_1) /
D-Nox, Lonya, DJ Zombi - Fuze /
Rick Pier O'Neil - Pall (RPO Part 1) /
After Burn - Weeding day /
Dynacom & Bodai - Symbiosis /
Julio Largente - A Place In Space (Paul Deep Remix) /`},{episodio:"398",titulo:"Resident / Episode 398 / Dec 22 2018",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 1 / Download episode on MP3 (Right click, save link as...)",likes:"44",descargas:"40.6K",fecha:"2018-12-22",link:"https://mcdn.podbean.com/mf/download/ewzme6/398-HernanCattaneo-2018-12-22.mp3"},{episodio:"399",titulo:"Resident / Episode 399 / Dec 29 2018",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 2 Download episode on MP3 (Right click, save link as...)",likes:"40",descargas:"39.9K",fecha:"2018-12-29",link:"https://mcdn.podbean.com/mf/download/pizbch/399-HernanCattaneo-2018-12-29.mp3"},{episodio:"400",titulo:"Resident / Episode 400 / Jan 05 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 3 Download episode on MP3 (Right click, save link as...)",likes:"33",descargas:"43K",fecha:"2019-01-05",link:"https://mcdn.podbean.com/mf/download/tcvpau/400-HernanCattaneo-2019-01-05.mp3"},{episodio:"401",titulo:"Resident / Episode 401 / Jan 12 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 4 Download episode on MP3 (Right click, save link as...)",likes:"41",descargas:"39.4K",fecha:"2019-01-12",link:"https://mcdn.podbean.com/mf/download/syar8i/401-HernanCattaneo-2019-01-12.mp3"},{episodio:"402",titulo:"Resident / Episode 402 / Jan 19 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 5 Download episode on MP3 (Right click, save link as...)",likes:"30",descargas:"38.7K",fecha:"2019-01-19",link:"https://mcdn.podbean.com/mf/download/kvt3gq/402-HernanCattaneo-2019-01-19.mp3"},{episodio:"403",titulo:"Resident / Episode 403 / Jan 26 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 6 Download episode on MP3 (Right click, save link as...)",likes:"38",descargas:"38.1K",fecha:"2019-01-26",link:"https://mcdn.podbean.com/mf/download/xpxr6b/403-HernanCattaneo-2019-01-26.mp3"},{episodio:"404",titulo:"Resident / Episode 404 / Feb 02 2019",descripcion:`1 - Armen Miran & Hraach - Menq / 
2 - Roewee - Udara (Original) / 
3 - Shai T - Exodus (Elfenberg Remix) / 
4 - Gai Barone - When The Swallows Come Back Home / 
5 - Teiko - Deeper (OG Master) / 
6 - Pedro Capelossi, Noiyse Proyect - Myth in Manaus / 
7 - Fideles - Harmed / 
8 - Antrim - Laner (Original Mix) / 
9 - AFFKT - True_Power / 
10 - Buraki - Silk / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"39.9K",fecha:"2019-02-02",link:"https://mcdn.podbean.com/mf/download/s4hguy/404-HernanCattaneo-2019-02-02.mp3",tracklist:`Armen Miran & Hraach - Menq /
Roewee - Udara (Original) /
Shai T - Exodus (Elfenberg Remix) /
Gai Barone - When The Swallows Come Back Home /
Teiko - Deeper (OG Master) /
Pedro Capelossi, Noiyse Proyect - Myth in Manaus /
Fideles - Harmed /
Antrim - Laner (Original Mix) /
AFFKT - True_Power /`},{episodio:"407",titulo:"Resident / Episode 407 / Feb 23 2019",descripcion:`1 - Budakid - Quixotic (Esteble Remix) / 
2 - Pablo German - Rainbow / 
3 - Chris Cargo - Moonface remix / 
4 - D.R.N.D.Y - Tyrant (Chris Cargo Remix) / 
5 - Facundo Caldiero - Happiness / 
6 - Newcorp - Limitles / 
7 - Mike Griego - Paranoid / 
8 - Mike Griego - Kismet / 
9 - Musumeci - Kong / 
10 - Lehar - Blue Wolf / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"40.3K",fecha:"2019-02-23",link:"https://mcdn.podbean.com/mf/download/sv4u4f/407-HernanCattaneo-2019-02-23.mp3",tracklist:`Budakid - Quixotic (Esteble Remix) /
Pablo German - Rainbow /
Chris Cargo - Moonface remix /
D.R.N.D.Y - Tyrant (Chris Cargo Remix) /
Facundo Caldiero - Happiness /
Newcorp - Limitles /
Mike Griego - Paranoid /
Mike Griego - Kismet /
Musumeci - Kong /`},{episodio:"408",titulo:"Resident / Episode 408 / Mar 02 2019",descripcion:`1 - Lee Burridge Lost Desert (Dark light) / 
2 - Ultravizion - Planet Stories / 
3 - To Belong - Daughter (J.P.Velardi Rework) / 
4 - Dynacom - Microlattice / 
5 - George Bloom - Phoebe / 
6 - Golan Zocher & Kai Vice - Solstice / 
7 - Anton Borin (RU) - Andromeda (Noiyse Project Remix) / 
9 - Qoob - Zoe / 
10 - Dj Paul- Visionary / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"40.2K",fecha:"2019-03-02",link:"https://mcdn.podbean.com/mf/download/e6urpt/408-HernanCattaneo-2019-03-02.mp3",tracklist:`Lee Burridge Lost Desert (Dark light) /
Ultravizion - Planet Stories /
To Belong - Daughter (J.P.Velardi Rework) /
Dynacom - Microlattice /
George Bloom - Phoebe /
Golan Zocher & Kai Vice - Solstice /
Anton Borin (RU) - Andromeda (Noiyse Project Remix) /
Qoob - Zoe /`},{episodio:"409",titulo:"Resident / Episode 409 / Mar 09 2019",descripcion:`1 - Mercurio - Darkness / 
2 - Juan Hansen - Sleep all day / 
3 - Niko Christo & Synas - Sunstone (Diego Berrondo & Alex Efe Remix) / 
4 - Ge Bruny, Pedro Capelossi - Black Peony / 
5 - Danny Bonnici & Thankyou City - The Golden Key (Luke Chable Remix) / 
6 - Yello - Call it -love (Carlos Gatto remix) / 
7 - Dousk - Life Is a Carnival (Matias Chilano Remix) / 
8 - Yashar - Petition (Fabri Lopez Remix) / 
9 - Lonya - Quicksand / 
10 - ARTBAT - Upperground (no vocal) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"40.6K",fecha:"2019-03-09",link:"https://mcdn.podbean.com/mf/download/zi8vk2/409-HernanCattaneo-2019-03-09.mp3",tracklist:`Mercurio - Darkness /
Juan Hansen - Sleep all day /
Niko Christo & Synas - Sunstone (Diego Berrondo & Alex Efe Remix) /
Ge Bruny, Pedro Capelossi - Black Peony /
Danny Bonnici & Thankyou City - The Golden Key (Luke Chable Remix) /
Yello - Call it -love (Carlos Gatto remix) /
Dousk - Life Is a Carnival (Matias Chilano Remix) /
Yashar - Petition (Fabri Lopez Remix) /
Lonya - Quicksand /`},{episodio:"410",titulo:"Resident / Episode 410 / Mar 16 2019",descripcion:`1 - Nacho Varela & Cruz Vittor - Luna Roja / 
2 - Audioglider - Caging the Sun (Priya Sen & Aman Anand Remix) / 
3 - Verlk - When I saw his name / 
4 - CAZAP&BOSKIS - Guru of Brahman / 
5 - Michael A - Ciklus One (Ezequiel Arias Private) / 
6 - East Cafe - The Filter Witch (Antrim Remix) / 
7 - Analog Jungs - Magic Arp / 
8 - Tash vs Apparat / 
9 - Traverse - Ivanshee (Remix) / 
10 - Caribou & Four Tet - Melody Day (Lunar Plane Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"39.3K",fecha:"2019-03-16",link:"https://mcdn.podbean.com/mf/download/wr6dsr/410-HernanCattaneo-2019-03-16.mp3",tracklist:`Nacho Varela & Cruz Vittor - Luna Roja /
Audioglider - Caging the Sun (Priya Sen & Aman Anand Remix) /
Verlk - When I saw his name /
CAZAP&BOSKIS - Guru of Brahman /
Michael A - Ciklus One (Ezequiel Arias Private) /
East Cafe - The Filter Witch (Antrim Remix) /
Analog Jungs - Magic Arp /
Tash vs Apparat /
Traverse - Ivanshee (Remix) /`},{episodio:"411",titulo:"Resident / Episode 411 / Mar 23 2019",descripcion:`1 - Modd - Flying Buddha / 
2 - Madloch & Subnode - Lion's Mane (Navar Remix) / 
3 - Kymatik - What Makes You Wonder (Tripswitch Underground Remix) / 
4 - Gux Jimenez - Remanente (Dabeat Remix) / 
5 - Izakaya Deployment - Speed (Michael A remix) / 
6 - Stil Corners - The Trip (Bruno Andrada Unofficial Remix) / 
7 - Karlos Molina - Keep your thoughts / 
8 - The Organism - Gypsy (Tim Engelhardt Remix) / 
9 - EANP - Purple / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"38.8K",fecha:"2019-03-23",link:"https://mcdn.podbean.com/mf/download/pnk272/411-HernanCattaneo-2019-03-23.mp3",tracklist:`Modd - Flying Buddha /
Madloch & Subnode - Lion's Mane (Navar Remix) /
Kymatik - What Makes You Wonder (Tripswitch Underground Remix) /
Gux Jimenez - Remanente (Dabeat Remix) /
Izakaya Deployment - Speed (Michael A remix) /
Stil Corners - The Trip (Bruno Andrada Unofficial Remix) /
Karlos Molina - Keep your thoughts /
The Organism - Gypsy (Tim Engelhardt Remix) /`},{episodio:"412",titulo:"Resident / Episode 412 / Mar 30 2019",descripcion:`1 - Carlos Palacio - Fragments of Time / 
2 - Roy Rosenfeld - Trip to Heaven / 
3 - Nhar - Sibylle / 
4 - Ivan Sandhas - Slipping Away (EANP Remix) / 
5 - NEW JACKSON - By Its Own Light (Mano Le Tough Remix) / 
6 - Andre Gazolla, ZAC - Ritual / 
7 - BLANCAh - Instantes / 
8 - Murat Uncuoglu - Rouge / 
9 - Dynacom & Bodai - Sinergy / 
10 - Jeremy Olander - Shogun / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.7K",fecha:"2019-03-30",link:"https://mcdn.podbean.com/mf/download/4aci58/412-HernanCattaneo-2019-03-30.mp3",tracklist:`Carlos Palacio - Fragments of Time /
Roy Rosenfeld - Trip to Heaven /
Nhar - Sibylle /
Ivan Sandhas - Slipping Away (EANP Remix) /
NEW JACKSON - By Its Own Light (Mano Le Tough Remix) /
Andre Gazolla, ZAC - Ritual /
BLANCAh - Instantes /
Murat Uncuoglu - Rouge /
Dynacom & Bodai - Sinergy /`},{episodio:"413",titulo:"Resident / Episode 413 / Apr 06 2019",descripcion:`1 - Dirk Sid Eno - Hitachi & Feelharmonia (Smash TV Facundo Mohrr edit) / 
2 - Aether - Stardancer / 
3 - Michael A - Ellipsis (Fabri Lopez Remix) / 
4 - Danito & Athina - Listen / 
5 - Depeche Mode - Dream On (German Angeleri Unofficial Remix) / 
6 - Analog Jungs - Particle (Tripswitch Remix) / 
7 - Orsen -Sentinent / 
8 - Fort Romeau - Eye Of Re / 
9 - Jamie Stevens - The Beneficiary / 
10 - Badin Brothers - Monkey Flute (Ampish Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"39.1K",fecha:"2019-04-06",link:"https://mcdn.podbean.com/mf/download/nydjuh/413-HernanCattaneo-2019-04-06.mp3",tracklist:`Dirk Sid Eno - Hitachi & Feelharmonia (Smash TV Facundo Mohrr edit) /
Aether - Stardancer /
Michael A - Ellipsis (Fabri Lopez Remix) /
Danito & Athina - Listen /
Depeche Mode - Dream On (German Angeleri Unofficial Remix) /
Analog Jungs - Particle (Tripswitch Remix) /
Orsen -Sentinent /
Fort Romeau - Eye Of Re /
Jamie Stevens - The Beneficiary /`},{episodio:"414",titulo:"Resident / Episode 414 / Apr 13 2019",descripcion:`1 - RY X - Body Sun (Deomid Remix) / 
2 - Verlk feat. Steve Smith - Sisters / 
3 - Julian Rodriguez - Japila / 
4 - LKF Project - Tongue Tied (BOg Remix) / 
5 - Florian Kruse_'Zog\u2019 / 
6 - Juan Deminicis - Bugs & Blossoms / 
7 - Murat Uncuoglu - None sleep / 
8 - Miguel Ante & Pablo Asturizaga - Reverie / 
9 - Mark Hollis - Inside Looking Out (Baunder Outro mix) / 
10 - Lucas Rossi - Parabels / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"38.2K",fecha:"2019-04-13",link:"https://mcdn.podbean.com/mf/download/kfw9ht/414-HernanCattaneo-2019-04-13.mp3",tracklist:`RY X - Body Sun (Deomid Remix) /
Verlk feat. Steve Smith - Sisters /
Julian Rodriguez - Japila /
LKF Project - Tongue Tied (BOg Remix) /
Florian Kruse_'Zog\u2019 /
Juan Deminicis - Bugs & Blossoms /
Murat Uncuoglu - None sleep /
Miguel Ante & Pablo Asturizaga - Reverie /
Mark Hollis - Inside Looking Out (Baunder Outro mix) /`},{episodio:"416",titulo:"Resident / Episode 416 / Apr 27 2019",descripcion:`1 - Savvas - Flying Heart (VANDER & Joe Finch Remix) / 
2 - Henry Saiz - DMT / 
3 - Chimera - In Deep (DNYO 2002 Remake) / 
4 - Jimi Jules - We Out Here / 
5 - Matias Larrosa & Martin Gardoqui - Metamorphosis / 
6 - Ron Flatter - Sahara / 
7 - Stereo Underground - Wanderlust / 
8 - Ewan Rill & K Loveski - Elau (Subandrio Remix) / 
9 - Groj - Sith / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"36.6K",fecha:"2019-04-27",link:"https://mcdn.podbean.com/mf/download/dww8f4/416-HernanCattaneo-2019-04-27.mp3",tracklist:`Savvas - Flying Heart (VANDER & Joe Finch Remix) /
Henry Saiz - DMT /
Chimera - In Deep (DNYO 2002 Remake) /
Jimi Jules - We Out Here /
Matias Larrosa & Martin Gardoqui - Metamorphosis /
Ron Flatter - Sahara /
Stereo Underground - Wanderlust /
Ewan Rill & K Loveski - Elau (Subandrio Remix) /`},{episodio:"417",titulo:"Resident / Episode 417 / May 04 2019",descripcion:`1 - Henry Saiz - Suite Nocturne / 
2 - Matias Larrosa & Martin Gardoqui - Namibia / 
3 - Denis Horvat - Noise feat Lelah / 
4 - Chaim - Gnawa (Sabo Remix) / 
5 - Florian Kruse - Zog (Julian Wassermann Remix) / 
6 - Golan Zocher - The Element (Nick Muir Remix) / 
7 - Dark Soul Project & Mathov - Spirit Of Life / 
8 - Nichols - Vindicate / 
9 - Through Noise - Alive / 
10 - Diego Berrondo - Generations / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"39.9K",fecha:"2019-05-04",link:"https://mcdn.podbean.com/mf/download/9ywdj2/417-HernanCattaneo-2019-05-04.mp3",tracklist:`Henry Saiz - Suite Nocturne /
Matias Larrosa & Martin Gardoqui - Namibia /
Denis Horvat - Noise feat Lelah /
Chaim - Gnawa (Sabo Remix) /
Florian Kruse - Zog (Julian Wassermann Remix) /
Golan Zocher - The Element (Nick Muir Remix) /
Dark Soul Project & Mathov - Spirit Of Life /
Nichols - Vindicate /
Through Noise - Alive /`},{episodio:"418",titulo:"Resident / Episode 418 / May 11 2019",descripcion:`1 - Ercos Blanka - 36h (Agatha Pher Remix) / 
2 - Freefall - Skydive Ft. Jan Johnston (Marcelo Vasami Remix) / 
3 - Volen Sentir - Kai / 
4 - Mathias Treinen - Polygone (Graziano Raffa Remix) / 
5 - AfterU - Wabi Sabi / 
6 - Fran Von Vie - Wake Me Up When Everything Has Changed (Diego Berrondo Edit) / 
7 - The Organism - Gypsy (Tim Engelhardt Remix) / 
8 - Finnebassen - Wide Open (Jos & Eli Remix) / 
9 - Interaxxis - Square / 
10 - Kalil, D-Nox - Black Table / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38K",fecha:"2019-05-11",link:"https://mcdn.podbean.com/mf/download/rwszgx/418-HernanCattaneo-2019-05-11.mp3",tracklist:`Ercos Blanka - 36h (Agatha Pher Remix) /
Freefall - Skydive Ft. Jan Johnston (Marcelo Vasami Remix) /
Volen Sentir - Kai /
Mathias Treinen - Polygone (Graziano Raffa Remix) /
AfterU - Wabi Sabi /
Fran Von Vie - Wake Me Up When Everything Has Changed (Diego Berrondo Edit) /
The Organism - Gypsy (Tim Engelhardt Remix) /
Finnebassen - Wide Open (Jos & Eli Remix) /
Interaxxis - Square /`},{episodio:"419",titulo:"Resident / Episode 419 / May 18 2019",descripcion:`1 - Saulo Pisa & Carlos Mendes - Another time (Instrumental) / 
2 - kARMON - 6am Funk / 
3 - Rick Pier O'Neil - Another Side (Danidu & Hasith Remix) / 
4 - Umka - Holler If Ya Hear Me / 
5 - UNDERHER - Around it (Colle remix) / 
6 - Tibi Dabo - It's All Behind / 
7 - Frankey & Sandrino - Sirius / 
8 - Frankey & Sandrino - Lambda / 
9 - Digital Mess - Infless / 
10 - HVOB - Panama (Nico Sparvieri Unofficial Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"36.5K",fecha:"2019-05-18",link:"https://mcdn.podbean.com/mf/download/qfcnuv/419-HernanCattaneo-2019-05-18.mp3",tracklist:`Saulo Pisa & Carlos Mendes - Another time (Instrumental) /
kARMON - 6am Funk /
Rick Pier O'Neil - Another Side (Danidu & Hasith Remix) /
Umka - Holler If Ya Hear Me /
UNDERHER - Around it (Colle remix) /
Tibi Dabo - It's All Behind /
Frankey & Sandrino - Sirius /
Frankey & Sandrino - Lambda /
Digital Mess - Infless /`},{episodio:"420",titulo:"Resident / Episode 420 / May 25 2019",descripcion:`1 - Nick Stoynoff - Deserve / 
2 - Erdi Irmak - Days Like This / 
3 - Mo' Funk - Solar Scriptura (Juan Sapia Remix) / 
4 - Edvard Hunger - For The Future Summer (Alex Efe Remix) / 
5 - Joan Retamero- Amithaba / 
6 - Julio Largente & Mariano Rial - The Twilight Zone / 
7 - Sanjay Dutta & Dharmalogy - Invoking Spirits (Simos Tagias Tantric Ritual Remix) / 
8 - Digital Mess - Dark Bursts / 
9 - Yotto - Turn It Around (Monkey Safari Remix) / 
10 - Radiohead - Weird Fishes (Lucas Rossi From The Bottom Bootleg) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.9K",fecha:"2019-05-25",link:"https://mcdn.podbean.com/mf/download/qvr3up/420-HernanCattaneo-2019-05-25.mp3",tracklist:`Nick Stoynoff - Deserve /
Erdi Irmak - Days Like This /
Mo' Funk - Solar Scriptura (Juan Sapia Remix) /
Edvard Hunger - For The Future Summer (Alex Efe Remix) /
Joan Retamero- Amithaba /
Julio Largente & Mariano Rial - The Twilight Zone /
Sanjay Dutta & Dharmalogy - Invoking Spirits (Simos Tagias Tantric Ritual Remix) /
Digital Mess - Dark Bursts /
Yotto - Turn It Around (Monkey Safari Remix) /`},{episodio:"421",titulo:"Resident / Episode 421 / Jun 01 2019",descripcion:`1 - Nishan Lee - Circle Of Life / 
2 - Eli Nissan - Naked / 
3 - RYAN e Pedro Capelossi - Cats and Dreams / 
4 - Kymatik - What Makes You Wonder / 
5 - Joan Retamero - Amithaba / 
6 - Valeria Petz - Shooting Star / 
7 - Moby - The Last Day (Nishan Lee Unofficial Remix) / 
8 - Sebastian Haas - Pandora (Juan Sapia Remix) / 
9 - Sebastian Sellares - Cordoba / 
10 - Jean-Michel Jarre - If the wind could speak (Tale Of Us Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"37.9K",fecha:"2019-06-01",link:"https://mcdn.podbean.com/mf/download/5wxgbw/421-HernanCattaneo-2019-06-01.mp3",tracklist:`Nishan Lee - Circle Of Life /
Eli Nissan - Naked /
RYAN e Pedro Capelossi - Cats and Dreams /
Kymatik - What Makes You Wonder /
Joan Retamero - Amithaba /
Valeria Petz - Shooting Star /
Moby - The Last Day (Nishan Lee Unofficial Remix) /
Sebastian Haas - Pandora (Juan Sapia Remix) /
Sebastian Sellares - Cordoba /`},{episodio:"422",titulo:"Resident / Episode 422 / Jun 08 2019",descripcion:`1 - Nuage - Distance / 
2 - Randall Jones - Little Helpers / 
3 - Mo' Funk - The Gospel Of Heaven (Juan Sapia Remix) / 
4 - VOYAGER - Miyagi (Tara Brooks Remix) / 
5 - Joan Retamero - Dharma / 
6 - Paul Lennar - Jungle on Fire (Priya Sen & Aman Anand Remix) / 
7 - Fur Coat - Babel (Hunter Game Remix) [Last Night On Earth] / 
8 - Jaap Lighart - Adventures in Aberdeen (Lonya Remix) / 
9 - Replicanth - Complex Heaven (Michael A Remix) / 
10 - Fluente - Nascent (Extended) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"36K",fecha:"2019-06-08",link:"https://mcdn.podbean.com/mf/download/5gvnnr/422-HernanCattaneo-2019-06-08.mp3",tracklist:`Nuage - Distance /
Randall Jones - Little Helpers /
Mo' Funk - The Gospel Of Heaven (Juan Sapia Remix) /
VOYAGER - Miyagi (Tara Brooks Remix) /
Joan Retamero - Dharma /
Paul Lennar - Jungle on Fire (Priya Sen & Aman Anand Remix) /
Fur Coat - Babel (Hunter Game Remix) [Last Night On Earth] /
Jaap Lighart - Adventures in Aberdeen (Lonya Remix) /
Replicanth - Complex Heaven (Michael A Remix) /`},{episodio:"423",titulo:"Resident / Episode 423 / Jun 15 2019",descripcion:`1 - Calimba & Caldi - Epoch / 
2 - Juan Deminicis - Disorder (Andrea Cassino Remix) / 
3 - Lucas Rossi - Distance (Michael A Remix) / 
4 - Gabriel Amato - Starship / 
5 - Nishan Lee - Dusty Bees (Anton Make remix) / 
6 - Adyisyn - Morph / 
7 - Commander Tom - Are Am Eye_ (Pablo Bolivar Deep Vision) / 
8 - Urban Flex - Shivalingam (Umka Remix) / 
9 - Huminal - Macropsia (Matias Chilano Remix) / 
10 - Alejo Gonzalez & Max Blade feat Chuck & Black - Metroplex (Lucas Rossi Remix) Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.6K",fecha:"2019-06-15",link:"https://mcdn.podbean.com/mf/download/5rxnzr/423-HernanCattaneo-2019-06-15.mp3",tracklist:`Calimba & Caldi - Epoch /
Juan Deminicis - Disorder (Andrea Cassino Remix) /
Lucas Rossi - Distance (Michael A Remix) /
Gabriel Amato - Starship /
Nishan Lee - Dusty Bees (Anton Make remix) /
Adyisyn - Morph /
Commander Tom - Are Am Eye_ (Pablo Bolivar Deep Vision) /
Urban Flex - Shivalingam (Umka Remix) /
Huminal - Macropsia (Matias Chilano Remix) /`},{episodio:"424",titulo:"Resident / Episode 424 / Jun 22 2019",descripcion:`1 - Randall Jones Little Helpers 345-3 / 
2 - Colle - Owami (Gorje Hewek & Izhevski Remix) / 
3 - Dj Paul, Dj Bia - 'Crazy Mind' (Nico Sparvieri Jump In Time Mix) / 
4 - Madloch - Grindstone / 
5 - Francisco Garc\xEDa & Ramiro Drisdale - City Of Dreams / 
6 - Frangellico - Chapter II / 
7 - NOIYSE PROJECT & Dylan Deck - Path to Moksha / 
8 - Mir Omar - Forgotten Youth / 
9 - Andy Arias - Chordify / 
10 - Subandrio & Nishan Lee - Moment of Truth Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38.2K",fecha:"2019-06-22",link:"https://mcdn.podbean.com/mf/download/zi6r97/424-HernanCattaneo-2019-06-22.mp3",tracklist:`Randall Jones Little Helpers 345-3 /
Colle - Owami (Gorje Hewek & Izhevski Remix) /
Dj Paul, Dj Bia - 'Crazy Mind' (Nico Sparvieri Jump In Time Mix) /
Madloch - Grindstone /
Francisco Garc\xEDa & Ramiro Drisdale - City Of Dreams /
Frangellico - Chapter II /
NOIYSE PROJECT & Dylan Deck - Path to Moksha /
Mir Omar - Forgotten Youth /
Andy Arias - Chordify /`},{episodio:"426",titulo:"Resident / Episode 426 / Jul 06 2019",descripcion:`1 - Gabriel Sordo - U Cant Stop Me Now / 
2 - Booka Shade - Curve / 
3 - Berni Turletti & Agustin Lupidi - Suyai / 
4 - Bigz - Lifeforms (Analog Jungs Remix) / 
5 - Roi Ferrari - Maqam (RIGOONI Remix) / 
6 - Nick Varon - Blind Quest / 
7 - Anhauser - Hoppin / 
8 - Juan Deminicis - Tao the King (Pysh Remix) / 
9 - Urban Flex - Shivalingam (Umka Remix) / 
10 - Huminal - Macropsia (Matias Chilano Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"40.1K",fecha:"2019-07-06",link:"https://mcdn.podbean.com/mf/download/6guzt2/426-HernanCattaneo-2019-07-06.mp3",tracklist:`Gabriel Sordo - U Cant Stop Me Now /
Booka Shade - Curve /
Berni Turletti & Agustin Lupidi - Suyai /
Bigz - Lifeforms (Analog Jungs Remix) /
Roi Ferrari - Maqam (RIGOONI Remix) /
Nick Varon - Blind Quest /
Anhauser - Hoppin /
Juan Deminicis - Tao the King (Pysh Remix) /
Urban Flex - Shivalingam (Umka Remix) /`},{episodio:"427",titulo:"Resident / Episode 427 / Jul 13 2019",descripcion:`1 - Bona Fide, M.O.S. - Volga / 
2 - Gab Rhome, Mark Alow - Bob Fossil Armen Miran Remix) / 
3 - Valdovinos - Heartbeat / 
4 - Bontan feat. Bengle - 10 Days (Osunlade 'Yoruba Soul' Mix) / 
5 - Alex Schaufel - The Day Of Rebirth (WhoMadeWho Remix) / 
6 - Clarian - Mixed Feelings / 
7 - Moti Brothers - Desert Mirage (Julian Rodriguez Remix) / 
8 - Fabra - Natura (Coeus Remix) / 
9 - Umka - Lem Sai (Matan Caspi Remix) / 
10 - Brian Cid - Species of the other kind / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"45.2K",fecha:"2019-07-13",link:"https://mcdn.podbean.com/mf/download/wjuths/427-HernanCattaneo-2019-07-13.mp3",tracklist:`Bona Fide, M.O.S. - Volga /
Gab Rhome, Mark Alow - Bob Fossil Armen Miran Remix) /
Valdovinos - Heartbeat /
Bontan feat. Bengle - 10 Days (Osunlade 'Yoruba Soul' Mix) /
Alex Schaufel - The Day Of Rebirth (WhoMadeWho Remix) /
Clarian - Mixed Feelings /
Moti Brothers - Desert Mirage (Julian Rodriguez Remix) /
Fabra - Natura (Coeus Remix) /
Umka - Lem Sai (Matan Caspi Remix) /`},{episodio:"428",titulo:"Resident / Episode 428 / Jul 20 2019",descripcion:`1 - Around Us & Teiko Yume - Sleeping Blue /\xA0
2 - Geronimo Eguiguren - Athair / 
3 - Johnny Messina - Blue Marble / 
4 - Tim Engelhardt - Silhouettes / 
5 - Antrim - Pyramids (Navar Ancient C Remix) / 
6 - Gambitt - Clouded (Analog Jungs Remix) / 
7 - Noiyse Project - Time Files (Analog Jungs Remix) / 
8 - Quivver - One Darker / 
9 - German Angeleri - Yellow Fever (Rework 2019) / 
10 - GROJ - Transmission / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"37.2K",fecha:"2019-07-20",link:"https://mcdn.podbean.com/mf/download/f3ye4z/428-HernanCattaneo-2019-07-20.mp3",tracklist:`Around Us & Teiko Yume - Sleeping Blue /
Geronimo Eguiguren - Athair /
Johnny Messina - Blue Marble /
Tim Engelhardt - Silhouettes /
Antrim - Pyramids (Navar Ancient C Remix) /
Gambitt - Clouded (Analog Jungs Remix) /
Noiyse Project - Time Files (Analog Jungs Remix) /
Quivver - One Darker /
German Angeleri - Yellow Fever (Rework 2019) /`},{episodio:"429",titulo:"Resident / Episode 429 / Jul 27 2019",descripcion:`1 - Schiller - I feel you (Horatio goes deep) / 
2 - Noom (UK) - Parallax (Lucas Rossi's Club Mix) / 
3 - Tim Engelhardt - When The Sun Illuminated Her Eyes / 
4 - Oliver Schories - Kato (Tim Engelhardt Remix) / 
5 - Martin Andrioli - Ghosts / 
6 - Rafael Osmo pres. Carmi - Deep Forest / 
7 - German Angeleri - Kate / 
8 - TD - Taciturn / 
9 - ALURIA - Life Loop (Michael A Remix) / 
10 - Joris Voorn - Ryo / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"35.3K",fecha:"2019-07-27",link:"https://mcdn.podbean.com/mf/download/25t45s/429-HernanCattaneo-2019-07-27.mp3",tracklist:`Schiller - I feel you (Horatio goes deep) /
Noom (UK) - Parallax (Lucas Rossi's Club Mix) /
Tim Engelhardt - When The Sun Illuminated Her Eyes /
Oliver Schories - Kato (Tim Engelhardt Remix) /
Martin Andrioli - Ghosts /
Rafael Osmo pres. Carmi - Deep Forest /
German Angeleri - Kate /
TD - Taciturn /
ALURIA - Life Loop (Michael A Remix) /`},{episodio:"430",titulo:"Resident / Episode 430 / Aug 03 2019",descripcion:`1 - Danny Howells - Retreat / 
2 - Matias Larrosa & Martin Gardoqui - Amanecer Del Sol Rojo / 
3 - Gab Rhome, Kora (CA) - Toboggan / 
4 - Sebastian Busto - Awakening / 
5 - Nahuel Lucena - Safari Sunset - Paul Kardos Remix / 
6 - Jelly For The Babies - New Life (Gaston Ponte Remix) / 
7 - London Grammar - Help Me Lose My Mind (MV Mimi's interpretation Bootleg) / 
8 - Morttagua - Imentet (Kamilo Sanclemente & Dabeat Remix) / 
9 - Damian Cruga - Into the wild (MartyOn & Jo rgk Remix) / 
10 - Jam & Spoon - Stella-Kolsch / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"38.9K",fecha:"2019-08-03",link:"https://mcdn.podbean.com/mf/download/dxrdkk/430-HernanCattaneo-2019-08-03.mp3",tracklist:`Danny Howells - Retreat /
Matias Larrosa & Martin Gardoqui - Amanecer Del Sol Rojo /
Gab Rhome, Kora (CA) - Toboggan /
Sebastian Busto - Awakening /
Nahuel Lucena - Safari Sunset - Paul Kardos Remix /
Jelly For The Babies - New Life (Gaston Ponte Remix) /
London Grammar - Help Me Lose My Mind (MV Mimi's interpretation Bootleg) /
Morttagua - Imentet (Kamilo Sanclemente & Dabeat Remix) /
Damian Cruga - Into the wild (MartyOn & Jo rgk Remix) /`},{episodio:"431",titulo:"Resident / Episode 431 / Aug 10 2019",descripcion:`1 - Squire - Common Sense / 
2 - Frankie M & Valentina Chaves - La prima / 
3 - G\u039BR\u039BK - Water Puppet / 
4 - Alberto Blanco - Stratosphere / 
5 - Da Luka - Secret City (Aman Anand Remix) / 
6 - Pedro Capelossi - Name Is Refraction / 
7 - Sonic Union - Nox / 
8 - Christian Nielsen - Access (AFFKT remix) / 
9 - Rick Pier O'Neil - Cancun (Dimuth K Remix) / 
10 - Rodriguez Jr. - Malec\xF3n Azul / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.8K",fecha:"2019-08-10",link:"https://mcdn.podbean.com/mf/download/29dhdd/431-HernanCattaneo-2019-08-10.mp3",tracklist:`Squire - Common Sense /
Frankie M & Valentina Chaves - La prima /
G\u039BR\u039BK - Water Puppet /
Alberto Blanco - Stratosphere /
Da Luka - Secret City (Aman Anand Remix) /
Pedro Capelossi - Name Is Refraction /
Sonic Union - Nox /
Christian Nielsen - Access (AFFKT remix) /
Rick Pier O'Neil - Cancun (Dimuth K Remix) /`},{episodio:"432",titulo:"Resident / Episode 432 / Aug 17 2019",descripcion:`1 - Coeus - Eden / 
2 - Verlk - Priestess / 
3 - Ivory - Taikun / 
4 - Maximo Boskis - Phoenix / 
5 - Rylan Taggart - Distant Reality / 
6 - 8kays - Rainbow / 
7 - Pig&Dan - Promised (Raxon Remix) / 
8 - Golan Zocher & Choopie - Inception / 
9 - Partenaire - The Warmth / 
10 - Yotto - Shifter / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"36.6K",fecha:"2019-08-17",link:"https://mcdn.podbean.com/mf/download/8ujsbt/432-HernanCattaneo-2019-08-17.mp3",tracklist:`Coeus - Eden /
Verlk - Priestess /
Ivory - Taikun /
Maximo Boskis - Phoenix /
Rylan Taggart - Distant Reality /
8kays - Rainbow /
Pig&Dan - Promised (Raxon Remix) /
Golan Zocher & Choopie - Inception /
Partenaire - The Warmth /`},{episodio:"433",titulo:"Resident / Episode 433 / Aug 24 2019",descripcion:`1 - Hraach - Aurores / 
2 - Scippo - Unity Suspects / 
3 - Mike Griego - Saturno / 
4 - Uone - Sands of Time feat Sleepimg Genie / 
5 - D-Rhapsody - Hidden Wave (East Cafe Remix) / 
6 - BOg, LKF Project - Discret Class / 
7 - Danny Howells - Mayfeels / 
8 - Frankey & Sandrino - Kuma / 
9 - Noyse Project - Kandala (Mauro Augugliaro Remix) / 
10 - Parallel Universe - Galaxy / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.3K",fecha:"2019-08-24",link:"https://mcdn.podbean.com/mf/download/tkzfff/433-HernanCattaneo-2019-08-24.mp3",tracklist:`Hraach - Aurores /
Scippo - Unity Suspects /
Mike Griego - Saturno /
Uone - Sands of Time feat Sleepimg Genie /
D-Rhapsody - Hidden Wave (East Cafe Remix) /
BOg, LKF Project - Discret Class /
Danny Howells - Mayfeels /
Frankey & Sandrino - Kuma /
Noyse Project - Kandala (Mauro Augugliaro Remix) /`},{episodio:"434",titulo:"Resident / Episode 434 / Aug 31 2019",descripcion:`1 - Gab Rhome - Salmo Salar / 
2 - Arturo Hevia - Walking On Her Back / 
3 - Verboten Berlin - Real Or Nature (Booka Shade Remix) / 
4 - Alex O'Rion - Marathon / 
5 - Carla Cimino - Artemis (Luciano Scheffer ) / 
6 - Michael A - Kaleido Skope / 
7 - Tomas Tejeda - Reborn (Gorkiz Remix) / 
8 - Lehar - The Morning / 
9 - Amber Long, Norman H, and 116 db - Take Me (Priya Sen & Aman Anand Remix) / 
10 - Modeplex - Soul In Pieces / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"38.3K",fecha:"2019-08-31",link:"https://mcdn.podbean.com/mf/download/8syv2b/434-HernanCattaneo-2019-08-31.mp3",tracklist:`Gab Rhome - Salmo Salar /
Arturo Hevia - Walking On Her Back /
Verboten Berlin - Real Or Nature (Booka Shade Remix) /
Alex O'Rion - Marathon /
Carla Cimino - Artemis (Luciano Scheffer ) /
Michael A - Kaleido Skope /
Tomas Tejeda - Reborn (Gorkiz Remix) /
Lehar - The Morning /
Amber Long, Norman H, and 116 db - Take Me (Priya Sen & Aman Anand Remix) /`},{episodio:"436",titulo:"Resident / Episode 436 / Sep 14 2019",descripcion:`1 - Dense - Forest / 
2 - Hunzed - Morka Staves Remix / 
3 - Hunter Game - The Island (Through Noise Edit) / 
4 - Case & Barlow - Dorse (Memory Remix) / 
5 - Leo Perez, Dhany G - Jade (D-Rhapsody Remix) / 
6 - Steve Parry - Don't You Ever Stop ( John Digweed & Nick Muir Remix) / 
7 - Sebastian Busto - Journey to Ixtlan / 
8 - Dyzen - Talisman / 
9 - Mononoid - Tantrum / 
10 - Hernan Cattaneo & Marcelo Vasami - Scope / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"42.1K",fecha:"2019-09-14",link:"https://mcdn.podbean.com/mf/download/6itn2g/436-HernanCattaneo-2019-09-14.mp3",tracklist:`Dense - Forest /
Hunzed - Morka Staves Remix /
Hunter Game - The Island (Through Noise Edit) /
Case & Barlow - Dorse (Memory Remix) /
Leo Perez, Dhany G - Jade (D-Rhapsody Remix) /
Steve Parry - Don't You Ever Stop ( John Digweed & Nick Muir Remix) /
Sebastian Busto - Journey to Ixtlan /
Dyzen - Talisman /
Mononoid - Tantrum /`},{episodio:"437",titulo:"Resident / Episode 437 / Sep 21 2019",descripcion:`1 - Nick Newman - The Tea Garden / 
2 - HOKI - Some Kind Of Beautiful (Facundo Mohrr Remix) / 
3 - Gux Jimenez, Jab Vix, Javier Duque - Element 911 (Fresen, Mental Order, Tim Othy Remix) / 
4 - Andre Sobota - Left Behind (Lanvary Remix) / 
5 - Kamilo Sanclemente - Dabeat - Tars / 
6 - Tone Depth - Past Hours / 
7 - Christopher FaFa - Fourty (Lucas Rossi Remix) / 
8 - Michael & Levan And Stiven Rivic - Stardust (Jerome Isma-Ae Remix) / 
9 - Wilian Kraupp, Ariel Merisio - Reach Out / 
10 - Dorian Craft & LVTECE - Yume / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"44.4K",fecha:"2019-09-21",link:"https://mcdn.podbean.com/mf/download/fxef28/437-HernanCattaneo-2019-09-21.mp3",tracklist:`Nick Newman - The Tea Garden /
HOKI - Some Kind Of Beautiful (Facundo Mohrr Remix) /
Gux Jimenez, Jab Vix, Javier Duque - Element 911 (Fresen, Mental Order, Tim Othy Remix) /
Andre Sobota - Left Behind (Lanvary Remix) /
Kamilo Sanclemente - Dabeat - Tars /
Tone Depth - Past Hours /
Christopher FaFa - Fourty (Lucas Rossi Remix) /
Michael & Levan And Stiven Rivic - Stardust (Jerome Isma-Ae Remix) /
Wilian Kraupp, Ariel Merisio - Reach Out /`},{episodio:"438",titulo:"Resident / Episode 438 / Sep 28 2019",descripcion:`1 - Ana Brun - Balloon Ranger (Clavis Remix & Dub) / 
2 - Frankey - Rotary / 
3 - Nick Varon - Fertile Soil (Tripswitch Remix) / 
4 - Dowden feat Amber Long - Ripple (Santo Adriano) / 
5 - Roland Klinkenberg - Mexico Can Wait (Baunder remix) / 
6 - Ugur Pato & Volkan Erman - Memories / 
7 - G\u039BR\u039BK - Glass / 
8 - Holland - Solaris (Hasith Remix) / 
9 - Golan Zocher & Choopie - Kadishman / 
10 - Stan Kolev, Matan Caspi - Empire / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"44.3K",fecha:"2019-09-28",link:"https://mcdn.podbean.com/mf/download/ymkaa8/438-HernanCattaneo-2019-09-28.mp3",tracklist:`Ana Brun - Balloon Ranger (Clavis Remix & Dub) /
Frankey - Rotary /
Nick Varon - Fertile Soil (Tripswitch Remix) /
Dowden feat Amber Long - Ripple (Santo Adriano) /
Roland Klinkenberg - Mexico Can Wait (Baunder remix) /
Ugur Pato & Volkan Erman - Memories /
G\u039BR\u039BK - Glass /
Holland - Solaris (Hasith Remix) /
Golan Zocher & Choopie - Kadishman /`},{episodio:"439",titulo:"Resident / Episode 439 / Oct 05 2019",descripcion:`1 - Blindsmyth - Frozen / 
2 - Lucas Romero - Puro (ALRM Remix) / 
3 - Onur Ozman - It hurts ft Lazarusman (Audio Junkies remix) / 
4 - Frankey & Sandrino - Mira / 
5 - Tripswitch - Stigma [Colorize] / 
6 - Alex O'Rion - Navagio (Tripswitch Remix) / 
7 - Guy J - Fallstar (Subandrio Secret Rising Rework) / 
8 - CannaKid - Dirigible Dreams / 
9 - CannaKid - Technological Cocoon / 
10 - Cid Inc & Orsen - Ten / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"47.7K",fecha:"2019-10-05",link:"https://mcdn.podbean.com/mf/download/sbk75d/439-HernanCattaneo-2019-10-05.mp3",tracklist:`Blindsmyth - Frozen /
Lucas Romero - Puro (ALRM Remix) /
Onur Ozman - It hurts ft Lazarusman (Audio Junkies remix) /
Frankey & Sandrino - Mira /
Tripswitch - Stigma [Colorize] /
Alex O'Rion - Navagio (Tripswitch Remix) /
Guy J - Fallstar (Subandrio Secret Rising Rework) /
CannaKid - Dirigible Dreams /
CannaKid - Technological Cocoon /`},{episodio:"440",titulo:"Resident / Episode 440 / Oct 12 2019",descripcion:`1 - Adult Karate ft. John Tejada - Your Ghost (Speaking In Tongues RMX) / 
2 - Nicolas Barbieri - Hipnominate (Diego Berrondo Remix) / 
3 - DJ Paul - Healing-Sounds / 
4 - Santo Adriano - Black Rock City / 
5 - Gorkiz - Tolaria West (Diego Berrondo & Alex Efe Remix) / 
6 - Julian Nates - Exchanging Souls / 
7 - Boys be kko - Oreinspotting / 
8 - Catharsis -Kamilo Sanclemente - Mauro Aguirre Remix / 
9 - Storytellers (Original Mix) - Mariano Mellino & John Cosani / 
10 - Andre Moret - Recover / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"45.6K",fecha:"2019-10-12",link:"https://mcdn.podbean.com/mf/download/hgiiu7/440-HernanCattaneo-2019-10-12.mp3",tracklist:`Adult Karate ft. John Tejada - Your Ghost (Speaking In Tongues RMX) /
Nicolas Barbieri - Hipnominate (Diego Berrondo Remix) /
DJ Paul - Healing-Sounds /
Santo Adriano - Black Rock City /
Gorkiz - Tolaria West (Diego Berrondo & Alex Efe Remix) /
Julian Nates - Exchanging Souls /
Boys be kko - Oreinspotting /
Catharsis -Kamilo Sanclemente - Mauro Aguirre Remix /
Storytellers (Original Mix) - Mariano Mellino & John Cosani /`},{episodio:"441",titulo:"Resident / Episode 441 / Oct 19 2019",descripcion:`1 - \xC2me - Transmoderna / 
2 - Enzo Monza - Goliat / 
3 - Nattz - Y Porque Te Quiero / 
4 - Oliver & Tom - Platurno / 
5 - MMM - Enter The Club (Diego Berrondo & Alex Efe Bootleg Mix) / 
6 - David Mayer - Snake Dance / 
7 - Reflective - Soul / 
8 - Alejo Gonzalez & Max Blade - ID / 
9 - Pablo German - Reborn / 
10 - Bob Moses - Listen To Me (Cassian Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"46.1K",fecha:"2019-10-19",link:"https://mcdn.podbean.com/mf/download/nj227d/441-HernanCattaneo-2019-10-19.mp3",tracklist:`\xC2me - Transmoderna /
Enzo Monza - Goliat /
Nattz - Y Porque Te Quiero /
Oliver & Tom - Platurno /
MMM - Enter The Club (Diego Berrondo & Alex Efe Bootleg Mix) /
David Mayer - Snake Dance /
Reflective - Soul /
Alejo Gonzalez & Max Blade - ID /
Pablo German - Reborn /`},{episodio:"442",titulo:"Resident / Episode 442 / Oct 26 2019",descripcion:`1 - Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe / 
2 - Analog Jungs - Vancouver (Kandar Remix) / 
3 - ONYVA - Deep Emanation / 
4 - RIGOONI - Sunk Coast Fallacy / 
5 - Luka Sambe, Filter Bear - Ekhi XIX / 
6 - Who Made Who - Surfing On A Stone (Santi Mossman Remix) / 
7 - Marino Canal - Vangelis Dreams / 
8 - Depeche Mode - Precious (Gonzalo Sacc, Rodrigo Lapena Interpretation) / 
9 - Sebastian Busto - The Miracle / 
10 - Musumeci & Sisio - Where Are You / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"51.9K",fecha:"2019-10-26",link:"https://mcdn.podbean.com/mf/download/67w6q4/442-HernanCattaneo-2019-10-26.mp3",tracklist:`Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe /
Analog Jungs - Vancouver (Kandar Remix) /
ONYVA - Deep Emanation /
RIGOONI - Sunk Coast Fallacy /
Luka Sambe, Filter Bear - Ekhi XIX /
Who Made Who - Surfing On A Stone (Santi Mossman Remix) /
Marino Canal - Vangelis Dreams /
Depeche Mode - Precious (Gonzalo Sacc, Rodrigo Lapena Interpretation) /
Sebastian Busto - The Miracle /`},{episodio:"443",titulo:"Resident / Episode 443 / Nov 02 2019",descripcion:`1 - Massive Attack - Teardrop (Santo Adriano Reinterpretation) / 
2 - Konektiv - Lift / 
3 - Miracle in the savannah / 
4 - Kostya Outta - Sunday Sunrise / 
5 - Kenan Savrun - Shivaya (Ziger Remix) / 
6 - Santi Mossman - Insight / 
7 - Hermanez - Back in Nefenro (Navar Remix) / 
8 - Oblong Forerunners remix / 
9 - John Creamer & Stephane K feat Nkemdi - I Wish You Were Here (Khaaron Remix) / 
10 - Berni Turletti - Physical Balance / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"49.9K",fecha:"2019-11-02",link:"https://mcdn.podbean.com/mf/download/7rvq85/443-HernanCattaneo-2019-11-02.mp3",tracklist:`Massive Attack - Teardrop (Santo Adriano Reinterpretation) /
Konektiv - Lift /
Miracle in the savannah /
Kostya Outta - Sunday Sunrise /
Kenan Savrun - Shivaya (Ziger Remix) /
Santi Mossman - Insight /
Hermanez - Back in Nefenro (Navar Remix) /
Oblong Forerunners remix /
John Creamer & Stephane K feat Nkemdi - I Wish You Were Here (Khaaron Remix) /`},{episodio:"444",titulo:"Resident / Episode 444 / Nov 09 2019",descripcion:`1 - Julian Morbelli - ID / 
2 - Floral - Need to Feel Loved (Bruno Andrada Remix) / 
3 - Savvas - Mindfulness (Imran Khan Remix) / 
4 - Thom Yorke - Not the news (Nick Stoynoff bootleg) / 
5 - Tomi H - Galactic ft Awen (Dub Mix) / 
6 - Bootes Gray - Voice Of The Universe (Priya Sen & Aman Anand Remix) / 
7 - Mariano Montori - Reflection / 
8 - Sia - Drink To Get Drunk (Li-Polymer Unofficial Remix) / 
9 - Michael A - Subside / 
10 - Alfa State - Symphony Of Courage (Alejo Gonzalez Rework) / Download episode on MP3 (Right click, save link as...)`,likes:"48",descargas:"52.6K",fecha:"2019-11-09",link:"https://mcdn.podbean.com/mf/download/k2vyhn/444-HernanCattaneo-2019-11-09.mp3",tracklist:`Julian Morbelli - ID /
Floral - Need to Feel Loved (Bruno Andrada Remix) /
Savvas - Mindfulness (Imran Khan Remix) /
Thom Yorke - Not the news (Nick Stoynoff bootleg) /
Tomi H - Galactic ft Awen (Dub Mix) /
Bootes Gray - Voice Of The Universe (Priya Sen & Aman Anand Remix) /
Mariano Montori - Reflection /
Sia - Drink To Get Drunk (Li-Polymer Unofficial Remix) /
Michael A - Subside /`},{episodio:"446",titulo:"Resident / Episode 446 / Nov 23 2019",descripcion:`1 - Apparat - Outlier ( Solomun) / 
2 - Analog Jungs - Marbella (Golan Zocher Remix) / 
3 - R\xF6yksopp - What Else Is There (John Cosani Unofficial Remix) / 
4 - Li-Polymer - Magn\xF3lia / 
5 - Pablo German - Rainbow (Julian Rodriguez & No-No Remix) / 
6 - All The Things I've Done (Gaston Ponte Remix) / 
7 - Sebastian Sellares - Temperament / 
8 - Golan Zocher & Choopie - Inception / 
9 - Kamilo Sanclemente, Giovanny Aparicio - Brotherhood / 
10 - Gullen - Lydia's Cove / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"52.1K",fecha:"2019-11-23",link:"https://mcdn.podbean.com/mf/download/kp96fx/446-HernanCattaneo-2019-11-23.mp3",tracklist:`Apparat - Outlier ( Solomun) /
Analog Jungs - Marbella (Golan Zocher Remix) /
R\xF6yksopp - What Else Is There (John Cosani Unofficial Remix) /
Li-Polymer - Magn\xF3lia /
Pablo German - Rainbow (Julian Rodriguez & No-No Remix) /
All The Things I've Done (Gaston Ponte Remix) /
Sebastian Sellares - Temperament /
Golan Zocher & Choopie - Inception /
Kamilo Sanclemente, Giovanny Aparicio - Brotherhood /`},{episodio:"447",titulo:"Resident / Episode 447 / Nov 30 2019",descripcion:`1 - Nicolas Rada - Narita / 
2 - Arnold T and Alain Pauwels - Ginger Mercury / 
3 - DSF & Shai T - Take A Ride / 
4 - TEELCO - Happy Moments (Greenage Remix) / 
5 - Dynacom & Bodai - Diligent / 
6 - Dhany G - The Past Behind Your Back / 
7 - GMJ - Adena / 
8 - Luke Costa - Reminiscencia / 
9 - Niceshot - Ritual of Love / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"52K",fecha:"2019-11-30",link:"https://mcdn.podbean.com/mf/download/krpyum/447-HernanCattaneo-2019-11-30.mp3",tracklist:`Nicolas Rada - Narita /
Arnold T and Alain Pauwels - Ginger Mercury /
DSF & Shai T - Take A Ride /
TEELCO - Happy Moments (Greenage Remix) /
Dynacom & Bodai - Diligent /
Dhany G - The Past Behind Your Back /
GMJ - Adena /
Luke Costa - Reminiscencia /`},{episodio:"448",titulo:"Resident / Episode 448 / Dec 07 2019",descripcion:`1 - Nopi - Hosu (Erdi Irmak Remix) / 
2 - Evans - Futurism / 
3 - Sebastian Sellares - Stranded Mind / 
4 - Sebastian Sellares - Memories of a Past Life / 
5 - East Cafe - A Landscape in Blue / 
6 - Jeremy Olander - First Sights / 
7 - Henry Saiz - Alegria rara / 
8 - Isaac Differding - Just Breathe / 
9 - Pablo German - Reborn (Golan Zocher Remix) / 
10 - The Cure - Just Like Heaven (Antrim Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"51.5K",fecha:"2019-12-07",link:"https://mcdn.podbean.com/mf/download/59qdjw/448-HernanCattaneo-2019-12-07.mp3",tracklist:`Nopi - Hosu (Erdi Irmak Remix) /
Evans - Futurism /
Sebastian Sellares - Stranded Mind /
Sebastian Sellares - Memories of a Past Life /
East Cafe - A Landscape in Blue /
Jeremy Olander - First Sights /
Henry Saiz - Alegria rara /
Isaac Differding - Just Breathe /
Pablo German - Reborn (Golan Zocher Remix) /`},{episodio:"449",titulo:"Resident / Episode 449 / Dec 14 2019",descripcion:`1 - Henry Saiz - Ensuen\xE2o (Original Mix) / 
2 - Nick Varon - Fertile Soil (Tripswitch Remix) [Serendeep] / 
3 - Funkform, GMJ & Matter - Emerge / 
4 - Pablo German - Rainbow (Julian Rodriguez & No-No Remix) / 
5 - Dynacom - Coracle (Original Mix) / 
6 - Sean McClellan Feat. Mike Snyder - Believe (Nila Remix) / 
7 - Imagine Souls - Myself (Agustin Giri Remix) / 
8 - Matias Larrosa & Martin Gardoqui - Wide Spaces [ENDANGERED] / 
9 - Deeparture feat. Rubenson - Rewrite [DAYS like NIGHTS] / 
10 - Rennie Foster - Devil's Water (Edu Imbernon) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"54.6K",fecha:"2019-12-14",link:"https://mcdn.podbean.com/mf/download/uk4tbj/449-HernanCattaneo-2019-12-14.mp3",tracklist:`Henry Saiz - Ensuen\xE2o (Original Mix) /
Nick Varon - Fertile Soil (Tripswitch Remix) [Serendeep] /
Funkform, GMJ & Matter - Emerge /
Pablo German - Rainbow (Julian Rodriguez & No-No Remix) /
Dynacom - Coracle (Original Mix) /
Sean McClellan Feat. Mike Snyder - Believe (Nila Remix) /
Imagine Souls - Myself (Agustin Giri Remix) /
Matias Larrosa & Martin Gardoqui - Wide Spaces [ENDANGERED] /
Deeparture feat. Rubenson - Rewrite [DAYS like NIGHTS] /`},{episodio:"450",titulo:"Resident / Episode 450 / Dec 21 2019",descripcion:`1 - Imran Khan - Sunsweat / 
 2 - Brian Cid - Cometas y cometas II / 
 3 - Enzo Elia & Aldebaran - 2 x 1 / 
 4 - Juan Sapia - Magic Moon / 
 5 - Andre Sobota & Felipe Novaes - Prescience (Alex O'Rion Remix) / 
 6 - Nick Varon & Antrim - Lobo Loco / 
 7 - Paul Deep (AR) - Mk50 / 
 8 - Coeus - The Mirror Game / 
 9 - Hunter/Game - 'Lost' / 
 10 - 1979 - Where Are You Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"76.6K",fecha:"2019-12-21",link:"https://mcdn.podbean.com/mf/download/2cwm4m/450-HernanCattaneo-2019-12-21.mp3",tracklist:`Imran Khan - Sunsweat /
2 - Brian Cid - Cometas y cometas II /
3 - Enzo Elia & Aldebaran - 2 x 1 /
4 - Juan Sapia - Magic Moon /
5 - Andre Sobota & Felipe Novaes - Prescience (Alex O'Rion Remix) /
6 - Nick Varon & Antrim - Lobo Loco /
7 - Paul Deep (AR) - Mk50 /
8 - Coeus - The Mirror Game /
9 - Hunter/Game - 'Lost' /`},{episodio:"451",titulo:"Resident / Episode 451 / Dec 28 2019",descripcion:"Live at Woodstock 69 part 1 Download episode on MP3 (Right click, save link as...)",likes:"51",descargas:"66.8K",fecha:"2019-12-28",link:"https://mcdn.podbean.com/mf/download/vq6aer/451-HernanCattaneo-2019-12-28.mp3"},{episodio:"452",titulo:"Resident / Episode 452 / Jan 04 2020",descripcion:"Live at Woodstock 69 part 2 Download episode on MP3 (Right click, save link as...)",likes:"50",descargas:"64.3K",fecha:"2020-01-04",link:"https://mcdn.podbean.com/mf/download/fzj7sy/452-HernanCattaneo-2020-01-04.mp3"},{episodio:"453",titulo:"Resident / Episode 453 / Jan 11 2020",descripcion:"Live from Woodstock69 part 3 Download episode on MP3 (Right click, save link as...)",likes:"35",descargas:"59.8K",fecha:"2020-01-11",link:"https://mcdn.podbean.com/mf/download/qt9ga9/453-HernanCattaneo-2020-01-11.mp3"},{episodio:"454",titulo:"Resident / Episode 454 / Jan 18 2020",descripcion:"Live at Woodstock 69 part 4 Download episode on MP3 (Right click, save link as...)",likes:"37",descargas:"57.5K",fecha:"2020-01-18",link:"https://mcdn.podbean.com/mf/download/pczdk3/454-HernanCattaneo-2020-01-18.mp3"},{episodio:"456",titulo:"Resident / Episode 456 / Feb 01 2020",descripcion:`1 - Budakid - Sky Mirage / 
2 - Hrag Mikkel & Pambouk / 
3 - Julio Largente - Voyager / 
4 - Oliver & Tom Brian Muszkat - Forgotten (Oliver & Tom Remix) / 
5 - Michael A - Lost Miracle / 
6 - Subconscious Tales - Ramya / 
7 - Coloray - Gazing Eyes / 
8 - Kamilo Sanclemente, Zalvador - Xhena / 
9 - Dmitry Molosh - Cascade / 
10 - Soul Button - Utopia feat. Terry Grant (Armen Miran RMX) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"60.8K",fecha:"2020-02-01",link:"https://mcdn.podbean.com/mf/download/5p947d/456-HernanCattaneo-2020-02-01.mp3",tracklist:`Budakid - Sky Mirage /
Hrag Mikkel & Pambouk /
Julio Largente - Voyager /
Oliver & Tom Brian Muszkat - Forgotten (Oliver & Tom Remix) /
Michael A - Lost Miracle /
Subconscious Tales - Ramya /
Coloray - Gazing Eyes /
Kamilo Sanclemente, Zalvador - Xhena /
Dmitry Molosh - Cascade /`},{episodio:"457",titulo:"Resident / Episode 457 / Feb 08 2020",descripcion:`1 - Volen Sentir - Kailas / 
2 - Nopi - Mayaya / 
3 - Losless - Over Me / 
4 - Manu F - Heaven 7 / 
5 - Juan Sapia - Enough To Believe / 
6 - Yudi Watanabe - Voices / 
7 - Namito & Chris Zippel - Focus / 
8 - Ewan Rill - The Mandalorian / 
9 - Rick Pier O'Neil - Fair Trade / 
10 - Luciano Scheffer & Julian Nates - Febo / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"59.3K",fecha:"2020-02-08",link:"https://mcdn.podbean.com/mf/download/6fjbrz/457-HernanCattaneo-2020-02-08.mp3",tracklist:`Volen Sentir - Kailas /
Nopi - Mayaya /
Losless - Over Me /
Manu F - Heaven 7 /
Juan Sapia - Enough To Believe /
Yudi Watanabe - Voices /
Namito & Chris Zippel - Focus /
Ewan Rill - The Mandalorian /
Rick Pier O'Neil - Fair Trade /`},{episodio:"458",titulo:"Resident / Episode 458 / Feb 15 2020",descripcion:`1 - Tom Peters (BER) - Novum / 
2 - Roy Rosenfeld - No Drama ft. Nadav Dagon / 
3 - Stuart + King- Going+Places / 
4 - Cid Inc. - Turning Pages (Alex O'Rion Marathon Edit) / 
5 - Kabi (AR) feat. Agustina Fern\xE1ndez - F\xE9nix / 
6 - Rick Pier ONeil - Ty0s / 
7 - Futur-E - Nautilus / 
8 - DJ Zombi - Octopus / 
9 - Erdi Irmak - Echoes in Time (Matias Chilano Remix) / 
10 - Sumo - La Rubia Tarada (Nick Kaniak Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"57.9K",fecha:"2020-02-15",link:"https://mcdn.podbean.com/mf/download/jtmqp3/458-HernanCattaneo-2020-02-15.mp3",tracklist:`Tom Peters (BER) - Novum /
Roy Rosenfeld - No Drama ft. Nadav Dagon /
Stuart + King- Going+Places /
Cid Inc. - Turning Pages (Alex O'Rion Marathon Edit) /
Kabi (AR) feat. Agustina Fern\xE1ndez - F\xE9nix /
Rick Pier ONeil - Ty0s /
Futur-E - Nautilus /
DJ Zombi - Octopus /
Erdi Irmak - Echoes in Time (Matias Chilano Remix) /`},{episodio:"459",titulo:"Resident / Episode 459 / Feb 22 2020",descripcion:`1 - Hrag Mikkel & Pambouk - Renaissance / 
2 - Fabri Lopez - There For The Winter / 
3 - Kamilo Sanclemente - Crystal Cave / 
4 - Anton Make & Hatewax - The First History Of Man / 
5 - Tame Impala - Let It Happen (DJ Paul remix) / 
6 - Tara Brooks - Wake Me / 
7 - Zoo Brazil - Nash / 
8 - Dmitry Molosh - Step by Step / 
9 - Loverboy - Catz n Dogz (Remix) / 
10 - EANP - Stamp (Rework 2020) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"59.3K",fecha:"2020-02-22",link:"https://mcdn.podbean.com/mf/download/nieiiw/459-HernanCattaneo-2020-02-22.mp3",tracklist:`Hrag Mikkel & Pambouk - Renaissance /
Fabri Lopez - There For The Winter /
Kamilo Sanclemente - Crystal Cave /
Anton Make & Hatewax - The First History Of Man /
Tame Impala - Let It Happen (DJ Paul remix) /
Tara Brooks - Wake Me /
Zoo Brazil - Nash /
Dmitry Molosh - Step by Step /
Loverboy - Catz n Dogz (Remix) /`},{episodio:"460",titulo:"Resident / Episode 460 / Feb 29 2020",descripcion:`1 - Luka Sambe - Magical Realism / 
2 - Maxi Degrassi - Syrah / 
3 - Eric Lune, Juan Sapia - Evolution / 
4 - SLP - Chase the monster / 
5 - Artificial Minds - Mind Control / 
6 - Fur Coat - Lonely Nights / 
7 - Marino Canal - Provenance / 
8 - Sascha Braemer - All I know / 
9 - Apparat - Brandemburg (Gardoqu , Larrosa + Nobilis) / 
10 - Budakid - Walkman / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"53.4K",fecha:"2020-02-29",link:"https://mcdn.podbean.com/mf/download/67kqdw/460-HernanCattaneo-2020-02-29.mp3",tracklist:`Luka Sambe - Magical Realism /
Maxi Degrassi - Syrah /
Eric Lune, Juan Sapia - Evolution /
SLP - Chase the monster /
Artificial Minds - Mind Control /
Fur Coat - Lonely Nights /
Marino Canal - Provenance /
Sascha Braemer - All I know /
Apparat - Brandemburg (Gardoqu , Larrosa + Nobilis) /`},{episodio:"461",titulo:"Resident / Episode 461 / Mar 07 2020",descripcion:`1 - DSF - Fraoula / 
2 - SLP - Lake Bled / 
3 - Marcus Worgull - Flying High / 
4 - Mauro Mas, Julian Liander - Purity / 
5 - Mauro Masi - Xsendra / 
6 - Analog Jungs, Oliver & Tom - Landscape / 
7 - Weekend Heroes & Or Kopel - Wild East / 
8 - Soma Soul - No Gravity (Endangered) / 
9 - Nandu - Gates To The Galaxy / 
10 - Angelov - Catocca / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"41.6K",fecha:"2020-03-07",link:"https://mcdn.podbean.com/mf/download/h25bsb/461-HernanCattaneo-2020-03-07.mp3",tracklist:`DSF - Fraoula /
SLP - Lake Bled /
Marcus Worgull - Flying High /
Mauro Mas, Julian Liander - Purity /
Mauro Masi - Xsendra /
Analog Jungs, Oliver & Tom - Landscape /
Weekend Heroes & Or Kopel - Wild East /
Soma Soul - No Gravity (Endangered) /
Nandu - Gates To The Galaxy /`},{episodio:"462",titulo:"Resident / Episode 462 / Mar 14 2020",descripcion:`1 - London Grammar - Strong (Juan Sapia's Private Bootleg) / 
2 - Shadows - Dee Montero, Newman (I Love) / 
3 - Thom Yorke - Dawn Chorus (Nicolas Ruiz Remix) / 
4 - Clarian - Fools rush in / 
5 - Andy King - Hemisphere (Eric Lune Remix) / 
6 - D-Nox & Beckers - Bitter Rain (Cid Inc. Remix) / 
7 - Antrim & Ezequiel Arias - White Moon (Alex O'Rion Remix) / 
8 - Cid Inc - Citadel / 
9 - Re.You & Kadosh - Friendly Fire (Lehar Remix) / 
10 - Cannakid - Synth Train (Subandrio Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.5K",fecha:"2020-03-14",link:"https://mcdn.podbean.com/mf/download/usqs9c/462-HernanCattaneo-2020-03-14.mp3",tracklist:`London Grammar - Strong (Juan Sapia's Private Bootleg) /
Shadows - Dee Montero, Newman (I Love) /
Thom Yorke - Dawn Chorus (Nicolas Ruiz Remix) /
Clarian - Fools rush in /
Andy King - Hemisphere (Eric Lune Remix) /
D-Nox & Beckers - Bitter Rain (Cid Inc. Remix) /
Antrim & Ezequiel Arias - White Moon (Alex O'Rion Remix) /
Cid Inc - Citadel /
Re.You & Kadosh - Friendly Fire (Lehar Remix) /`},{episodio:"463",titulo:"Resident / Episode 463 / Mar 21 2020",descripcion:`1 - Kidnap - The Unfriendly World (Budakid Remix) / 
2 - Ivory - Sense (Kadosh Remix) / 
3 - Tash & Paul Angelo & Don Argento - Exapsis (Alex O'Rion Remix) / 
4 - Eze Ramirez - Dagba / 
5 - Vangelis - Ask The Mountains (Marcelo Vasami Remix) / 
6 - D-Nox, K.A.L.I.L. - Mayahl / 
7 - David Barragan, Kamilo Sanclemente - Relive / 
8 - Porra- Social adapted / 
9 - Nine One - Black Seed / 
10 - Cypherpunx + Luke Brancaccio - Tears + Lies / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"35.6K",fecha:"2020-03-21",link:"https://mcdn.podbean.com/mf/download/j72igv/463-HernanCattaneo-2020-03-21.mp3",tracklist:`Kidnap - The Unfriendly World (Budakid Remix) /
Ivory - Sense (Kadosh Remix) /
Tash & Paul Angelo & Don Argento - Exapsis (Alex O'Rion Remix) /
Eze Ramirez - Dagba /
Vangelis - Ask The Mountains (Marcelo Vasami Remix) /
D-Nox, K.A.L.I.L. - Mayahl /
David Barragan, Kamilo Sanclemente - Relive /
Porra- Social adapted /
Nine One - Black Seed /`},{episodio:"465",titulo:"Resident / Episode 465 / Apr 04 2020",descripcion:`1 - Agatha Pher - Unmute Your Heart / 
2 - Depeche Mode - Precious (Nicolas Rada Remix) / 
3 - Corren Cavini - When I Knew (Lucas Rossi Remix) / 
4 - Low Orbit Satellite - Singing - (Crystal dub) / 
5 - Ewan Rill & K Loveski - Broh Canville / 
6 - NekliFF & Rafael Cerato - Marrakesh (Kasper Koman Remix) / 
7 - Michael A - Shade Of Purple / 
8 - Anhauser, Nicolas Leonelli & Lio Q - Sands Of Time / 
9 - Subandrio - Neptune Lights / 
10 - Matan Caspi, Stan Kolev - Barakah Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"35.2K",fecha:"2020-04-04",link:"https://mcdn.podbean.com/mf/download/fymjch/465-HernanCattaneo-2020-04-04.mp3",tracklist:`Agatha Pher - Unmute Your Heart /
Depeche Mode - Precious (Nicolas Rada Remix) /
Corren Cavini - When I Knew (Lucas Rossi Remix) /
Low Orbit Satellite - Singing - (Crystal dub) /
Ewan Rill & K Loveski - Broh Canville /
NekliFF & Rafael Cerato - Marrakesh (Kasper Koman Remix) /
Michael A - Shade Of Purple /
Anhauser, Nicolas Leonelli & Lio Q - Sands Of Time /
Subandrio - Neptune Lights /`},{episodio:"466",titulo:"Resident / Episode 466 / Apr 11 2020",descripcion:`1 - \xD3lafur Arnalds feat. Nanna Bryndis - Particles (Lucas Rossi Edit) / 
2 - Golan Zocher & Kai Vice - Solstice / 
3 - Steve Slight - Saga / 
4 - NuKreative - Make Up Your Mind / 
5 - Gab Rhome - Bites per Minute / 
6 - Steve Bug & Langenberg - Emphasizer / 
7 - Tale Of Us - Together / 
8 - Bootes Gray - Healing Trip (NOIYSE PROJECT Remix) / 
9 - Nacho Varela & Cruz Vittor - Kush / 
10 - Hernan Cattaneo & Soundexile - Sonification (Diego Berrondo Unofficial Remix) Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"36.6K",fecha:"2020-04-11",link:"https://mcdn.podbean.com/mf/download/i6px5i/466-HernanCattaneo-2020-04-11.mp3",tracklist:`\xD3lafur Arnalds feat. Nanna Bryndis - Particles (Lucas Rossi Edit) /
Golan Zocher & Kai Vice - Solstice /
Steve Slight - Saga /
NuKreative - Make Up Your Mind /
Gab Rhome - Bites per Minute /
Steve Bug & Langenberg - Emphasizer /
Tale Of Us - Together /
Bootes Gray - Healing Trip (NOIYSE PROJECT Remix) /
Nacho Varela & Cruz Vittor - Kush /`},{episodio:"467",titulo:"Resident / Episode 467 / Apr 18 2020",descripcion:`1 - Gadi Mitrani - Fewer / 
2 - Dynacom & Bodai - N\xF3mades / 
3 - Deeparture & UOAK feat. Rubenson - Parachute / 
4 - Frankie M, Gonzalo Sacc, Rodrigo Lapena - Home / 
5 - NAHS - Nami / 
6 - Budakid -Lolita Express / 
7 - Nico Cerban - Altered Senses / 
8 - Emi Galvan - Crabo / 
9 - Dowden - Wood / 
10 - Muse-Into The Ether / Download episode on MP3 (Right click, save link as...)`,likes:"49",descargas:"36.3K",fecha:"2020-04-18",link:"https://mcdn.podbean.com/mf/download/3cmsxf/467-HernanCattaneo-2020-04-19.mp3",tracklist:`Gadi Mitrani - Fewer /
Dynacom & Bodai - N\xF3mades /
Deeparture & UOAK feat. Rubenson - Parachute /
Frankie M, Gonzalo Sacc, Rodrigo Lapena - Home /
NAHS - Nami /
Budakid -Lolita Express /
Nico Cerban - Altered Senses /
Emi Galvan - Crabo /
Dowden - Wood /`},{episodio:"468",titulo:"Resident / Episode 468 / Apr 25 2020",descripcion:`1 - Aether - We're All Together (Francesco Mami Remix) / 
2 - Bernie Turletti - Physical Balance (Baunder remix) / 
3 - Jim Rivers - I Go Deep (Matias Chilano Retouch) / 
4 - Petar Dundov - Synesthetic Flow / 
5 - Francesco Pico & Paul Hazendonk - Nifty Fifty / 
6 - Portishead - Roads (G\xF8vinda unofficial remix) / 
7 - Coll\xE9 - World To Come / 
8 - Dmitry Molosh & Michael A - Twelve Days / 
9 - DJ Paul - Sensitive (Part II) / 
10 - Dave Seaman - Stealing Amber / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"42.2K",fecha:"2020-04-25",link:"https://mcdn.podbean.com/mf/download/7278z9/468-HernanCattaneo-2020-04-25.mp3",tracklist:`Aether - We're All Together (Francesco Mami Remix) /
Bernie Turletti - Physical Balance (Baunder remix) /
Jim Rivers - I Go Deep (Matias Chilano Retouch) /
Petar Dundov - Synesthetic Flow /
Francesco Pico & Paul Hazendonk - Nifty Fifty /
Portishead - Roads (G\xF8vinda unofficial remix) /
Coll\xE9 - World To Come /
Dmitry Molosh & Michael A - Twelve Days /
DJ Paul - Sensitive (Part II) /`},{episodio:"469",titulo:"Resident / Episode 469 / May 02 2020",descripcion:`1 - Jamie Stevens - Blush / 
2 - Pablo Bolivar - Infinite Rainbows (Death on the Balcony) / 
3 - Jonathan Rosa - Visions Of You (Urmet K Remix) / 
4 - Nopi (UA) - Memory (Mike Spirit Remix) / 
5 - Gonza Rodriguez & Ivan Miatto - October Rain / 
6 - Alex Bessofen - Crescendo (Kamilo Sanclemente Remix) / 
7 - Ivan Coronel - Shaman (Robert Mason Remix) / 
8 - Sha-ullo - Breakthrough / 
9 - Gonza Rodriguez & Ivan Miatto - Time of change / 
10 - Bjork - Mutual Core (Gardoqui & Larrosa Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"36.8K",fecha:"2020-05-02",link:"https://mcdn.podbean.com/mf/download/fh7rx8/469-HernanCattaneo-2020-05-02.mp3",tracklist:`Jamie Stevens - Blush /
Pablo Bolivar - Infinite Rainbows (Death on the Balcony) /
Jonathan Rosa - Visions Of You (Urmet K Remix) /
Nopi (UA) - Memory (Mike Spirit Remix) /
Gonza Rodriguez & Ivan Miatto - October Rain /
Alex Bessofen - Crescendo (Kamilo Sanclemente Remix) /
Ivan Coronel - Shaman (Robert Mason Remix) /
Sha-ullo - Breakthrough /
Gonza Rodriguez & Ivan Miatto - Time of change /`},{episodio:"470",titulo:"Resident / Episode 470 / May 09 2020",descripcion:`1 - Alex O'Rion - Envy / 
2 - Dance Spirit - Deep Intentions (Griffin Paisley Remix) / 
3 - Manu F - Heaven 7 / 
4 - Rikken - Frozen World / 
5 - Santo Adriano - Conspiracy Theory / 
6 - Fractal Architect - Carrara (Robert Mason Remix) / 
7 - Dj Paul- Nature Calls / 
8 - Sha-ullo - Between The Lines / 
9 - NAHS - Nami (JFR & Julian Rodriguez Remix) / 
10 - SpeakOf - Venom (Kamilo Sanclemente Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.8K",fecha:"2020-05-09",link:"https://mcdn.podbean.com/mf/download/xxeeco/470-HernanCattaneo-2020-05-09.mp3",tracklist:`Alex O'Rion - Envy /
Dance Spirit - Deep Intentions (Griffin Paisley Remix) /
Manu F - Heaven 7 /
Rikken - Frozen World /
Santo Adriano - Conspiracy Theory /
Fractal Architect - Carrara (Robert Mason Remix) /
Dj Paul- Nature Calls /
Sha-ullo - Between The Lines /
NAHS - Nami (JFR & Julian Rodriguez Remix) /`},{episodio:"471",titulo:"Resident / Episode 471 / May 16 2020",descripcion:`1 - Ben B\xF6hmer feat. Malou - Lost In Mind (Volen Sentir Extended Vision) / 
2 - Yeah But No - Run Run Run (Adam Port Remix) / 
3 - Rusich - Space Talk / 
4 - Eric Lune - Embers (GMJ remix) / 
5 - kaspar tasane - hidden mantra (Mark Craven remix) / 
6 - Michael A - Slow Down / 
7 - Berni Turletti -To Flourish / 
8 - Creative Culture - Remember The Future (Sahar Z & Interaxxis Remix) / 
9 - Golan Zocher & Choopie - Reflejo / 
10 - Halaros, Leila Scheiwe - Drawer Full Of Memories / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"40.1K",fecha:"2020-05-16",link:"https://mcdn.podbean.com/mf/download/yuh8ro/471-HernanCattaneo-2020-05-16.mp3",tracklist:`Ben B\xF6hmer feat. Malou - Lost In Mind (Volen Sentir Extended Vision) /
Yeah But No - Run Run Run (Adam Port Remix) /
Rusich - Space Talk /
Eric Lune - Embers (GMJ remix) /
kaspar tasane - hidden mantra (Mark Craven remix) /
Michael A - Slow Down /
Berni Turletti -To Flourish /
Creative Culture - Remember The Future (Sahar Z & Interaxxis Remix) /
Golan Zocher & Choopie - Reflejo /`},{episodio:"472",titulo:"Resident / Episode 472 / May 23 2020",descripcion:`1 - Hernan G - BlackEyes / 
2 - Juan Pablo Torrez - Rome (Rauschhaus Remix) / 
3 - Losless - Modern Aura / 
4 - Solayre - The Sea / 
5 - Etherwave - Pathfinder (DJ Fronter Remix) / 
6 - Isaac Differding - Empathy / 
7 - Yeah But No - Run Run Run (Adam Port Remix) / 
8 - Dominik Eulberg - Goldene Acht (Mind Against Remix) / 
9 - Audiojack - Are We Here / 
10 - Darko De Jan - La Beaut\xE9 De La Vie / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"37.6K",fecha:"2020-05-23",link:"https://mcdn.podbean.com/mf/download/11n1me/472-HernanCattaneo-2020-05-23.mp3",tracklist:`Hernan G - BlackEyes /
Juan Pablo Torrez - Rome (Rauschhaus Remix) /
Losless - Modern Aura /
Solayre - The Sea /
Etherwave - Pathfinder (DJ Fronter Remix) /
Isaac Differding - Empathy /
Yeah But No - Run Run Run (Adam Port Remix) /
Dominik Eulberg - Goldene Acht (Mind Against Remix) /
Audiojack - Are We Here /`},{episodio:"474",titulo:"Resident / Episode 474 / Jun 06 2020",descripcion:`1 - Fingerprint - Babydoll White (Mem Aleph Remix) / 
2 - Fingerprint - Rye & Eggs (Mem Aleph Dark Mix) / 
3 - Koraal - Vuurduin / 
4 - Nicolas Ruiz - Agartha / 
5 - Grave - Where Is the Victory (Gaston Ponte remix) / 
6 - Benjamin Damage & Doc Daneeka Feat. Abigail Wyles - Battleships (ALMA (ARG)) / 
7 - Mauro Augugliaro - Gravitation / 
8 - Dylan deck - Sahodaraya (Noiyse Project Remix) / 
9 - Facundo Sosa - Eternity / 
10 - Cubicolor - Wake Me Up (Tale Of Us Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"38K",fecha:"2020-06-06",link:"https://mcdn.podbean.com/mf/download/h95rel/474-HernanCattaneo-2020-06-06.mp3",tracklist:`Fingerprint - Babydoll White (Mem Aleph Remix) /
Fingerprint - Rye & Eggs (Mem Aleph Dark Mix) /
Koraal - Vuurduin /
Nicolas Ruiz - Agartha /
Grave - Where Is the Victory (Gaston Ponte remix) /
Benjamin Damage & Doc Daneeka Feat. Abigail Wyles - Battleships (ALMA (ARG)) /
Mauro Augugliaro - Gravitation /
Dylan deck - Sahodaraya (Noiyse Project Remix) /
Facundo Sosa - Eternity /`},{episodio:"475",titulo:"Resident / Episode 475 / Jun 13 2020",descripcion:`1 - Harry Choo Choo Romero - Tania (Alex Efe Remix) / 
2 - Raw District - Warok / 
3 - Eli Nissan - Narkotik / 
4 - Seiji (AR) - Tinky / 
5 - Khetouin - Robot Meditation (Nico Szabo remix) / 
6 - Ditian - Solid Snake / 
7 - Nico Serjanovich - It Turns Out that / 
8 - Andre Moret - Caring / 
9 - Fernando Olaya - Caravan / 
10 - Eelke Kleijn - The Hierophant / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"38.4K",fecha:"2020-06-13",link:"https://mcdn.podbean.com/mf/download/0ck9cv/475-HernanCattaneo-2020-06-13.mp3",tracklist:`Harry Choo Choo Romero - Tania (Alex Efe Remix) /
Raw District - Warok /
Eli Nissan - Narkotik /
Seiji (AR) - Tinky /
Khetouin - Robot Meditation (Nico Szabo remix) /
Ditian - Solid Snake /
Nico Serjanovich - It Turns Out that /
Andre Moret - Caring /
Fernando Olaya - Caravan /`},{episodio:"476",titulo:"Resident / Episode 476 / Jun 20 2020",descripcion:`1 - Jose Tabarez - Fluffy Clouds (Dj Bird Remix) / 
2 - Rod V - Meridiano (Nacres remix) / 
3 - Uone & Western - The Lone Wrangler (Out Of Sorts Gunslinger Mix) / 
4 - Pako & Frederik - Hold On / 
5 - Joris Voorn - Ryo (Mees Salom\xE9 Remix) / 
6 - Juan Deminicis - Sounds of Freedom / 
7 - Juan Ibanez & Dylan Deck - Touching The Sky (Andre Moret Remix) / 
8 - Sebastian Busto - The Night Wanderer (Katzen Remix) / 
9 - Dougal Fox - Ataraxia (Oliver & Tom Remix) / 
10 - Nico Cerban - Altered Senses (Luciano Scheffer Mix) - Balkan Connection Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.3K",fecha:"2020-06-20",link:"https://mcdn.podbean.com/mf/download/6039zu/476-HernanCattaneo-2020-06-20.mp3",tracklist:`Jose Tabarez - Fluffy Clouds (Dj Bird Remix) /
Rod V - Meridiano (Nacres remix) /
Uone & Western - The Lone Wrangler (Out Of Sorts Gunslinger Mix) /
Pako & Frederik - Hold On /
Joris Voorn - Ryo (Mees Salom\xE9 Remix) /
Juan Deminicis - Sounds of Freedom /
Juan Ibanez & Dylan Deck - Touching The Sky (Andre Moret Remix) /
Sebastian Busto - The Night Wanderer (Katzen Remix) /
Dougal Fox - Ataraxia (Oliver & Tom Remix) /`},{episodio:"477",titulo:"Resident / Episode 477 / Jun 27 2020",descripcion:`1 - Matt Rowan & Robbie Lowe - Luminary / 
2 - Albuquerque & Lostin - Arquivo X / 
3 - Kamilo Sanclemente, David Barragan - Relive / 
4 - Frankie M, Gonzalo Sacc, Rodrigo Lapena - Let me go / 
5 - Alex O'Rion - Blue / 
6 - GMJ - Mystic Sea (Imran Khan Remix) / 
7 - Niceshot - Mystery Dancer / 
8 - Kenan Savrun - Orion / 
9 - Magit Cacoon, Jos & Eli - Tropical_Heart / 
10 - Innerphonic - Garden Rivage (Extented mix) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"37.5K",fecha:"2020-06-27",link:"https://mcdn.podbean.com/mf/download/vndlgn/477-HernanCattaneo-2020-06-27.mp3",tracklist:`Matt Rowan & Robbie Lowe - Luminary /
Albuquerque & Lostin - Arquivo X /
Kamilo Sanclemente, David Barragan - Relive /
Frankie M, Gonzalo Sacc, Rodrigo Lapena - Let me go /
Alex O'Rion - Blue /
GMJ - Mystic Sea (Imran Khan Remix) /
Niceshot - Mystery Dancer /
Kenan Savrun - Orion /
Magit Cacoon, Jos & Eli - Tropical_Heart /`},{episodio:"478",titulo:"Resident / Episode 478 / Jul 04 2020",descripcion:`1 - Alejo Gonzalez & Barklas - Ten Days (Sunrise Mix) / 
2 - Ciardi - Psy Clone / 
3 - Draso - Therme / 
4 - Danidu & Hasith - Amulet (Tripswitch Remix) / 
5 - Rodriguez Jr. - Monolith Garden (Steve Bug Remix) / 
6 - Tale Of Us - Be As One / 
7 - Kamilo Sanclemente & David Barragan - Time Writer / 
8 - NuFects - Elysium / 
9 - Perry Farrel - Let's All Pray for This World (Maceo Plex Glitchy Remix) / 
10 - Mauro Augugliaro - Paradigm / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"36.7K",fecha:"2020-07-04",link:"https://mcdn.podbean.com/mf/download/epp8qa/478-HernanCattaneo-2020-07-04.mp3",tracklist:`Alejo Gonzalez & Barklas - Ten Days (Sunrise Mix) /
Ciardi - Psy Clone /
Draso - Therme /
Danidu & Hasith - Amulet (Tripswitch Remix) /
Rodriguez Jr. - Monolith Garden (Steve Bug Remix) /
Tale Of Us - Be As One /
Kamilo Sanclemente & David Barragan - Time Writer /
NuFects - Elysium /
Perry Farrel - Let's All Pray for This World (Maceo Plex Glitchy Remix) /`},{episodio:"479",titulo:"Resident / Episode 479 / Jul 11 2020",descripcion:`1 - PAT B Incognica - Float some more / 
2 - Weird Sounding Dude - Star Child / 
3 - Luka Sambe - Alive Is The Meaning / 
4 - Vlada D'Shake - Bender Vox (Nico Szabo Remix) / 
5 - Stereo Underground - Zooz / 
6 - Hyenah - Not Enough ft. Lazarusman / 
7 - Dance Spirit - Close To The Sun / 
8 - Kotelett - Lifted / 
9 - Niceshot - Red Cheeks / 
10 - Raphael Mader - Blame / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.2K",fecha:"2020-07-11",link:"https://mcdn.podbean.com/mf/download/h0wi44/479-HernanCattaneo-2020-07-11.mp3",tracklist:`PAT B Incognica - Float some more /
Weird Sounding Dude - Star Child /
Luka Sambe - Alive Is The Meaning /
Vlada D'Shake - Bender Vox (Nico Szabo Remix) /
Stereo Underground - Zooz /
Hyenah - Not Enough ft. Lazarusman /
Dance Spirit - Close To The Sun /
Kotelett - Lifted /
Niceshot - Red Cheeks /`},{episodio:"480",titulo:"Resident / Episode 480 / Jul 18 2020",descripcion:`1 - Lautaro Dellacasa - My dub side / 
2 - Gadi Mitrani I - Joyful / 
3 - Fur Coat - Hurricane (Tim Green Remix) / 
4 - Maximo Gambini - De Buenos Aires a Cordoba / 
5 - Alec Araujo- Sacred Cross / 
6 - Tav Bord - In Motion / 
7 - Ricardo Piedra - Pedide (Christopher FaFa Remix) / 
8 - Esteban Ikasovic - Earth Revelations / 
9 - Budakid - Orrery / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.8K",fecha:"2020-07-18",link:"https://mcdn.podbean.com/mf/download/jf0hhk/480-HernanCattaneo-2020-07-18.mp3",tracklist:`Lautaro Dellacasa - My dub side /
Gadi Mitrani I - Joyful /
Fur Coat - Hurricane (Tim Green Remix) /
Maximo Gambini - De Buenos Aires a Cordoba /
Alec Araujo- Sacred Cross /
Tav Bord - In Motion /
Ricardo Piedra - Pedide (Christopher FaFa Remix) /
Esteban Ikasovic - Earth Revelations /`},{episodio:"481",titulo:"Resident / Episode 481 / Jul 25 2020",descripcion:`1 - Draso - Eyes Closed /\xA0
2 - Big Fabio \xA0- RideTheBass (Satoshi Fumi Rmx) /\xA0
3 - Golan Zocher - Enter (GMJ Remix) /\xA0
4 - Sebastian Sellares - Far From Home /\xA0
5 - Ezequiel Arias - Amnesia /\xA0
6 - Fat Cosmoe - Von /\xA0
7 - Chris Drifter - Listen the Sun /\xA0
8 - Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe (Andre Moret Remix) /\xA0
9 - Carlos TK - Hope (Weird Sounding Dude Remix) /\xA0
10 - Solarstone & JES - Like A Waterfall (Forerunners Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.7K",fecha:"2020-07-25",link:"https://mcdn.podbean.com/mf/download/k66vp9/481-hernancattaneo-2020-07-25.mp3",tracklist:`Draso - Eyes Closed /
Big Fabio \xA0- RideTheBass (Satoshi Fumi Rmx) /
Golan Zocher - Enter (GMJ Remix) /
Sebastian Sellares - Far From Home /
Ezequiel Arias - Amnesia /
Fat Cosmoe - Von /
Chris Drifter - Listen the Sun /
Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe (Andre Moret Remix) /
Carlos TK - Hope (Weird Sounding Dude Remix) /`},{episodio:"482",titulo:"Resident / Episode 482 / Aug 01 2020",descripcion:`1 - Ashal S - Kashmir Sunrise /\xA0
2 - Graumann - Simfinity (Mehmet Akar Remix) /\xA0
3 - Geronimo Eguiguren - Land Of The Lost (Juan Sapia Remix) /\xA0
4 - Coccolino Deep - Lost /\xA0
5 - Segg - Like a man /\xA0
6 - Esteban Ikasovic - Earth Revelations /\xA0
7 - GMJ & Matter - Eldarin /\xA0
8 - Gntn - Solstice /\xA0
9 - Mono Electric Orchestra - Antarctica (Cid Inc. Remix) /\xA0
10 - Dynacom - Set Out / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"39.3K",fecha:"2020-08-01",link:"https://mcdn.podbean.com/mf/download/k5sz8e/482-hernancattaneo-2020-08-01.mp3",tracklist:`Ashal S - Kashmir Sunrise /
Graumann - Simfinity (Mehmet Akar Remix) /
Geronimo Eguiguren - Land Of The Lost (Juan Sapia Remix) /
Coccolino Deep - Lost /
Segg - Like a man /
Esteban Ikasovic - Earth Revelations /
GMJ & Matter - Eldarin /
Gntn - Solstice /
Mono Electric Orchestra - Antarctica (Cid Inc. Remix) /`},{episodio:"484",titulo:"Resident / Episode 484 / Aug 15 2020",descripcion:`1 - D.J. MacIntyre & Dr. B - Grey Gardens (Diego Berrondo & Alex Efe \xA8Out Of Time\xA8 Remix) /\xA0
2 - Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /\xA0
3 - Interaxxis - Bowery /\xA0
4 - Berni Turletti - Physical Balance (Matias Chilano Remix) /\xA0
5 - Adrian Schneider - Kerbholz /\xA0
6 - Larson - Parana (Bruno Andrada Remix) /\xA0
7 - Remcord - Flight into the void /\xA0
8 - Robert Babicz - Galactic Tardigrade /\xA0
9 - Weird Sounding Dude - Twenty One /\xA0
10 - Joseph Ashworth - Kira / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.1K",fecha:"2020-08-15",link:"https://mcdn.podbean.com/mf/download/wwynvr/484-HernanCattaneo-2020-08-15.mp3",tracklist:`D.J. MacIntyre & Dr. B - Grey Gardens (Diego Berrondo & Alex Efe \xA8Out Of Time\xA8 Remix) /
Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /
Interaxxis - Bowery /
Berni Turletti - Physical Balance (Matias Chilano Remix) /
Adrian Schneider - Kerbholz /
Larson - Parana (Bruno Andrada Remix) /
Remcord - Flight into the void /
Robert Babicz - Galactic Tardigrade /
Weird Sounding Dude - Twenty One /`},{episodio:"485",titulo:"Resident / Episode 485 / Aug 22 2020",descripcion:`1 - Luka Sambe - Alive Is The Meaning (Tripswitch remix) /\xA0
2 - Kandar - My Life Rules (GMJ remix) /\xA0
3 - Jonas Rathsman - No Surprise /\xA0
4 - Ivory - Lumiere /\xA0
5 - NAHS & Polo (AR) - Look for a Reason (Gaston Ponte Remix) /\xA0
6 - Analog Jungs - Pyramid /\xA0
7 - Kaldera - Eissturmvogel (Analog Jungs mix) /\xA0
8 - Alec Araujo - Quantum Living /\xA0
9 - Artche - Split Open /\xA0
10 - Kevin Di Serna & Interaxxis - Spanner Interactions / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"38.1K",fecha:"2020-08-22",link:"https://mcdn.podbean.com/mf/download/88kapw/485-HernanCattaneo-2020-08-22.mp3",tracklist:`Luka Sambe - Alive Is The Meaning (Tripswitch remix) /
Kandar - My Life Rules (GMJ remix) /
Jonas Rathsman - No Surprise /
Ivory - Lumiere /
NAHS & Polo (AR) - Look for a Reason (Gaston Ponte Remix) /
Analog Jungs - Pyramid /
Kaldera - Eissturmvogel (Analog Jungs mix) /
Alec Araujo - Quantum Living /
Artche - Split Open /`},{episodio:"486",titulo:"Resident / Episode 486 / Aug 29 2020",descripcion:`1 - Alejo Gonzalez & Barklas - Estrellas Ocultas (Instrumental Mix) /\xA0
2 - Khetouin, Orange & Indigo - Robot Meditation (Nico Szabo Remix) /\xA0
3 - Zankee Gulati - Fika /\xA0
4 - Kenan Savrun - Lights Out (John Cosani Remix) /\xA0
5 - Rise And Fall - Small Talk /\xA0
6 - Alex Dolby - Hazy Way (Marcelo Vasami Rework) /\xA0
7 - Paul Lennar - Asymmetrical Reflections /\xA0
8 - Around us - 8 steps /\xA0
9 - Budakid feat. Esther Veen - Surga (Joseph Ashworth Extended Remix) /\xA0
10 - Betical - Icon / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.2K",fecha:"2020-08-29",link:"https://mcdn.podbean.com/mf/download/9me9xb/486-HernanCattaneo-2020-08-29.mp3",tracklist:`Alejo Gonzalez & Barklas - Estrellas Ocultas (Instrumental Mix) /
Khetouin, Orange & Indigo - Robot Meditation (Nico Szabo Remix) /
Zankee Gulati - Fika /
Kenan Savrun - Lights Out (John Cosani Remix) /
Rise And Fall - Small Talk /
Alex Dolby - Hazy Way (Marcelo Vasami Rework) /
Paul Lennar - Asymmetrical Reflections /
Around us - 8 steps /
Budakid feat. Esther Veen - Surga (Joseph Ashworth Extended Remix) /`},{episodio:"487",titulo:"Resident / Episode 487 / Sep 05 2020",descripcion:`1 - Gadi Mitrani - Back to Folly /\xA0
2 - Luis del Vecchio - 7 Lyon /\xA0
3 - Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /\xA0
4 - Ricardo Piedra & Deepness - Ozark /\xA0
5 - Around Us - Bamboo /\xA0
6 - Arnold T and Alain Pauwels - ElectroNemo /\xA0
7 - Nat Monday - Waiting (Lost Arcade Remix) /\xA0
8 - Rhode & Brown - Not My Mind, Not My Planet /\xA0
9 - Oona Dahl - Godtripper /\xA0
10 - Sebastian Sellares - Zen State (Matias Chilano Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.1K",fecha:"2020-09-05",link:"https://mcdn.podbean.com/mf/download/cd37rk/487-HernanCattaneo-2020-09-05.mp3",tracklist:`Gadi Mitrani - Back to Folly /
Luis del Vecchio - 7 Lyon /
Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /
Ricardo Piedra & Deepness - Ozark /
Around Us - Bamboo /
Arnold T and Alain Pauwels - ElectroNemo /
Nat Monday - Waiting (Lost Arcade Remix) /
Rhode & Brown - Not My Mind, Not My Planet /
Oona Dahl - Godtripper /`},{episodio:"488",titulo:"Resident / Episode 488 / Sep 12 2020",descripcion:`1 - Timo Maas - Religion of Love (Kotelett Unconditional Love Version) /\xA0
2 - Andrea Cassino, Greenage - Losing Part of Me (Dmitry Molosh Remix) /\xA0
3 - Hernan Cerbello - Triptico (Jelly for the Babies Remix) /\xA0
4 - The Advocate - Deep Inside /\xA0
5 - Dee Montero 'Sapphire' ft. Shahin Badar /\xA0
6 - Yulia Niko - Passion /\xA0
7 - Nebs Jack - Orbis /\xA0
8 - Simos Tagias - Running Over Me /\xA0
9 - Longhair - Rhythm_Activity /\xA0
10 - Mitch Oliver, Maaruo - Same Light ft. Beyries (Hernan Cattaneo & Martin Garcia rmx) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"38K",fecha:"2020-09-12",link:"https://mcdn.podbean.com/mf/download/krt5c4/488-HernanCattaneo-2020-09-12.mp3",tracklist:`Timo Maas - Religion of Love (Kotelett Unconditional Love Version) /
Andrea Cassino, Greenage - Losing Part of Me (Dmitry Molosh Remix) /
Hernan Cerbello - Triptico (Jelly for the Babies Remix) /
The Advocate - Deep Inside /
Dee Montero 'Sapphire' ft. Shahin Badar /
Yulia Niko - Passion /
Nebs Jack - Orbis /
Simos Tagias - Running Over Me /
Longhair - Rhythm_Activity /`},{episodio:"489",titulo:"Resident / Episode 489 / Sep 19 2020",descripcion:`1 - Glenn Molloy - Expresso (Alex Efe & Diego Berrondo Remix) /\xA0
2 - Bootes Gray - Fuego y Dolor (Luciano Scheffer remix) /\xA0
3 - Battera - Atlas (Of Norway Version) /\xA0
4 - Four Candles & Ross Geldart - Fixation (Dj Bird Remix) /\xA0
5 - Bob Moses - The Blame /\xA0
6 - Govinda (ARG) - Les Fleurs /\xA0
7 - Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) /\xA0
8 - LowaddictsSoundsystem - Hide & Seek (Paul Hazendonk Remix) /\xA0
9 - GMJ - Mood Medicine /\xA0
10 - Dave Seaman & Dj Paul - Loco Hermoso (Hernan Cattaneo & Mariano Mellino Remix) \xA0/ Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"39.3K",fecha:"2020-09-19",link:"https://mcdn.podbean.com/mf/download/5gqu9x/489-HernanCattaneo-2020-09-19.mp3",tracklist:`Glenn Molloy - Expresso (Alex Efe & Diego Berrondo Remix) /
Bootes Gray - Fuego y Dolor (Luciano Scheffer remix) /
Battera - Atlas (Of Norway Version) /
Four Candles & Ross Geldart - Fixation (Dj Bird Remix) /
Bob Moses - The Blame /
Govinda (ARG) - Les Fleurs /
Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) /
LowaddictsSoundsystem - Hide & Seek (Paul Hazendonk Remix) /
GMJ - Mood Medicine /`},{episodio:"490",titulo:"Resident / Episode 490 / Sep 26 2020",descripcion:`1 - Rosemary & Garlic - The Dancers (Vandelor Unofficial Remix) /\xA0
2 - Eli Nissan - Karnaval (Guy Mantzur Remix) /\xA0
3 - No\u0304pi - Liquid Week /\xA0
4 - John Cosani - Elohim /\xA0
5 - Sebastian Busto - December (Zankee Gulati Remix) /\xA0
6 - Joris Voorn - Nea Skioni /\xA0
7 - Nico Cerban - Xumoh /\xA0
8 - Monojoke - Autumn Grey /\xA0
9 - Gypsy - I Trance You (Richie Blacker Rave Spirit Remix) /\xA0
10 - Poncho feat Karina Vismara - Sola por la ciudad (Hernan Cattaneo & Soundexile Extended mix) / Download episode on MP3 (Right click, save link as...)`,likes:"45",descargas:"40.9K",fecha:"2020-09-26",link:"https://mcdn.podbean.com/mf/download/8cz3wv/490-HernanCattaneo-2020-09-26.mp3",tracklist:`Rosemary & Garlic - The Dancers (Vandelor Unofficial Remix) /
Eli Nissan - Karnaval (Guy Mantzur Remix) /
No\u0304pi - Liquid Week /
John Cosani - Elohim /
Sebastian Busto - December (Zankee Gulati Remix) /
Joris Voorn - Nea Skioni /
Nico Cerban - Xumoh /
Monojoke - Autumn Grey /
Gypsy - I Trance You (Richie Blacker Rave Spirit Remix) /`},{episodio:"491",titulo:"Resident / Episode 491 / Oct 03 2020",descripcion:`1 - Hernan Cerbello - Triptico (Jelly for the Babies Remix) /\xA0
2 - Colyn - Merging Realities /\xA0
3 - Sascha Braemer - Capella /\xA0
4 - Ajaw - Un Brujo /\xA0
5 - Rafa'EL - Neon Dreams (Andre Moret Remix) /\xA0
6 - LOM (AR) - When I Met You /\xA0
7 - Sasha & Polymod - Full Circle /\xA0
8 - Qubica - Tune Signal /\xA0
9 - Sobek - Mr. Vibe /\xA0
10 - K.E.E.N.E. Jackie Plummer - Why Do You Worry (Bebetta Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.5K",fecha:"2020-10-03",link:"https://mcdn.podbean.com/mf/download/6wibuj/491-HernanCattaneo-2020-10-03.mp3",tracklist:`Hernan Cerbello - Triptico (Jelly for the Babies Remix) /
Colyn - Merging Realities /
Sascha Braemer - Capella /
Ajaw - Un Brujo /
Rafa'EL - Neon Dreams (Andre Moret Remix) /
LOM (AR) - When I Met You /
Sasha & Polymod - Full Circle /
Qubica - Tune Signal /
Sobek - Mr. Vibe /`},{episodio:"492",titulo:"Resident / Episode 492 / Oct 10 2020",descripcion:`1 - Cem Tuncer - Taze Bahar (Vandelor edit) /\xA0
2 - Alex O'Rion - Mirari (Night Mix) /\xA0
3 - John Cosani - Venusian /\xA0
4 - Michael A - Orbis /\xA0
5 - Miguel Ante - Lunar /\xA0
6 - Golan Zocher - Wonder Way (Kamilo Sanclemente Remix) /\xA0
7 - Tim Engelhardt- Sun (Fur Coat Remix) /\xA0
8 - Juliana Ucar - Base (Martin Dubiansky Remix) /\xA0
9 - Ricardo Piedra & Deepness - Ozark /\xA0
10 - Mark H\xF6ffen - Faith ft. Ed Begley / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"40.2K",fecha:"2020-10-10",link:"https://mcdn.podbean.com/mf/download/y7p99s/492-HernanCattaneo-2020-10-10.mp3",tracklist:`Cem Tuncer - Taze Bahar (Vandelor edit) /
Alex O'Rion - Mirari (Night Mix) /
John Cosani - Venusian /
Michael A - Orbis /
Miguel Ante - Lunar /
Golan Zocher - Wonder Way (Kamilo Sanclemente Remix) /
Tim Engelhardt- Sun (Fur Coat Remix) /
Juliana Ucar - Base (Martin Dubiansky Remix) /
Ricardo Piedra & Deepness - Ozark /`},{episodio:"494",titulo:"Resident / Episode 494 / Oct 24 2020",descripcion:`1 - Nicco N.D - Moog Driver (Andromo Remix) /\xA0
2 - Luke Garcia, Th3 Oth3r, Will Champlin - My Own World /\xA0
3 - Nico Morano - Believe (Nandu Early Morning Remix) /\xA0
4 - Hil Oliver - Slid Of Light /\xA0
5 - C'est Moi - Le Figaro /\xA0
6 - Tim Engelhardt - What Drives Us /\xA0
7 - Frankie M - Light At The End Of The Tunnel /\xA0
8 - Yoram - On Cue /\xA0
9 - Fort Romeau - A Far Reaching Light /\xA0
10 - Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"38K",fecha:"2020-10-24",link:"https://mcdn.podbean.com/mf/download/gfya37/494-HernanCattaneo-2020-10-24.mp3",tracklist:`Nicco N.D - Moog Driver (Andromo Remix) /
Luke Garcia, Th3 Oth3r, Will Champlin - My Own World /
Nico Morano - Believe (Nandu Early Morning Remix) /
Hil Oliver - Slid Of Light /
C'est Moi - Le Figaro /
Tim Engelhardt - What Drives Us /
Frankie M - Light At The End Of The Tunnel /
Yoram - On Cue /
Fort Romeau - A Far Reaching Light /`},{episodio:"495",titulo:"Resident / Episode 495 / Oct 31 2020",descripcion:`1 - Nick Warren - Electro Shock /
2 - Minnado - Thunder /
3 - Sebastian Sellares - Garden of Eden /
4 - Nishan Lee - Forest Dream /
5 - EN\xD8S - The Healer /
6 - Danny Howells - Shortwave (Mihai Popoviciu Remix) /
7 - Andy Bros - Romantico /
8 - Brian Muszkat - Balder /
9 - Monolink - Otherside /
10 - Satoshi Fumi - Heavenly Sky Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"39.4K",fecha:"2020-10-31",link:"https://mcdn.podbean.com/mf/download/pzj6tb/495-HernanCattaneo-2020-10-31.mp3",tracklist:`Nick Warren - Electro Shock /
Minnado - Thunder /
Sebastian Sellares - Garden of Eden /
Nishan Lee - Forest Dream /
EN\xD8S - The Healer /
Danny Howells - Shortwave (Mihai Popoviciu Remix) /
Andy Bros - Romantico /
Brian Muszkat - Balder /
Monolink - Otherside /`},{episodio:"496",titulo:"Resident / Episode 496 / Nov 07 2020",descripcion:`1 - Valeria Petz - ScandGrace /
2 - Abril Ferrari - beach vibes /
3 - Diego Poblets - Faith /
4 - Egemen Kurbetli & Furkan Cinar - Abyssos (Nacres Remix) /
5 - Juan Lagisquet - Trip to Highlands /
6 - Gaston Sosa - A Place in My House /
7 - Juan Pablo Torrez - Nia /
8 - \xD8ostil & He\xEEk - The Great Spiral /
9 - Jody Barr - Arp for the Innocents /
10 - KYOTTO - Would You Be There When the World Fails Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"38.3K",fecha:"2020-11-07",link:"https://mcdn.podbean.com/mf/download/g554d7/496-HernanCattaneo-2020-11-07.mp3",tracklist:`Valeria Petz - ScandGrace /
Abril Ferrari - beach vibes /
Diego Poblets - Faith /
Egemen Kurbetli & Furkan Cinar - Abyssos (Nacres Remix) /
Juan Lagisquet - Trip to Highlands /
Gaston Sosa - A Place in My House /
Juan Pablo Torrez - Nia /
\xD8ostil & He\xEEk - The Great Spiral /
Jody Barr - Arp for the Innocents /`},{episodio:"497",titulo:"Resident / Episode 497 / Nov 14 2020",descripcion:`1 - DSF & Shai T - Take a Ride /
2 - Starkato - I Hope You Care (Sonic Union Remix) /
3 - Kay-D - Space Donuts (Oliver & Tom Remix) /
4 - Kamilo Sanclemente & Giovanny Aparicio - Innocense /
5 - Dmitry Molosh & No\u0304pi - Consciousness Switch /
6 - Rauschhaus - Leucosia - Luna Club Records /
7 - Martin Gardoqui & Matias Larrosa - For The Time Being /
8 - Sander & Salerno ft Oneiroi - Rel\xE8ve Toi /
9 - Jesuan M, Andr\xE9s Moris - Victory /
10 - Westbam feat. Richard Butler - You Need The Drugs - &ME Remix Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"39.4K",fecha:"2020-11-14",link:"https://mcdn.podbean.com/mf/download/sgkbct/497-HernanCattaneo-2020-11-14.mp3",tracklist:`DSF & Shai T - Take a Ride /
Starkato - I Hope You Care (Sonic Union Remix) /
Kay-D - Space Donuts (Oliver & Tom Remix) /
Kamilo Sanclemente & Giovanny Aparicio - Innocense /
Dmitry Molosh & No\u0304pi - Consciousness Switch /
Rauschhaus - Leucosia - Luna Club Records /
Martin Gardoqui & Matias Larrosa - For The Time Being /
Sander & Salerno ft Oneiroi - Rel\xE8ve Toi /
Jesuan M, Andr\xE9s Moris - Victory /`},{episodio:"498",titulo:"Resident / Episode 498 / Nov 21 2020",descripcion:`1 - Mass Digital - Mawu /\xA0
2 - Jose Tabarez - Argo (rAin MU Remix) /\xA0
3 - Nico Szabo - Flos /\xA0
4 - Mensh- Silver sun /\xA0
5 - Erich Von Kollar - The Pine & the Moon (Hasith Remix) /\xA0
6 - L\xE8rr - In Time (Sunset Mix) /\xA0
7 - D-Nox & Spuri - FRBS /\xA0
8 - Marsh feat. Leo wood - My Stripes /\xA0
9 - Saint is - Space Invaders /\xA0
10 - Clarian - A Place For Us / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38K",fecha:"2020-11-21",link:"https://mcdn.podbean.com/mf/download/mewany/498-HernanCattaneo-2020-11-21.mp3",tracklist:`Mass Digital - Mawu /
Jose Tabarez - Argo (rAin MU Remix) /
Nico Szabo - Flos /
Mensh- Silver sun /
Erich Von Kollar - The Pine & the Moon (Hasith Remix) /
L\xE8rr - In Time (Sunset Mix) /
D-Nox & Spuri - FRBS /
Marsh feat. Leo wood - My Stripes /
Saint is - Space Invaders /`},{episodio:"499",titulo:"Resident / Episode 499 / Nov 28 2020",descripcion:`1 - Ultravizion, Jelly For The Babies, Eleonora - Amber Lake (OHMZ Deep Vision) /\xA0
2 - EANP - When you leave home /\xA0
3 - Shai T - Storyteller /\xA0
4 - Joep Mencke - Satare (Nick Warren & Nicolas Rada Remix) /\xA0
5 - Weird Sounding Dude - Embarkment /\xA0
6 - Nathan Dane \xA0- Bretten /\xA0
7 - Love Drone - Godspeed /\xA0
8 - All Is Well - LaSalle /\xA0
9 - Eric Lune - Human Nature /\xA0
10 - Mercurio - The Underdog / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"38.7K",fecha:"2020-11-28",link:"https://mcdn.podbean.com/mf/download/iidpny/499-HernanCattaneo-2020-11-28.mp3",tracklist:`Ultravizion, Jelly For The Babies, Eleonora - Amber Lake (OHMZ Deep Vision) /
EANP - When you leave home /
Shai T - Storyteller /
Joep Mencke - Satare (Nick Warren & Nicolas Rada Remix) /
Weird Sounding Dude - Embarkment /
Nathan Dane \xA0- Bretten /
Love Drone - Godspeed /
All Is Well - LaSalle /
Eric Lune - Human Nature /`},{episodio:"500",titulo:"Resident / Episode 500 / Dec 05 2020",descripcion:`1 - DSF - Burning Lies /\xA0
2 - DJ Zombi & Madraas - Today Will Never Be Again /\xA0
3 - Marsh & Wassu - Amor /\xA0
4 - Nick Varon - Volantis /\xA0
5 - Ultraverse - Felicita /\xA0
6 - Vanita - Ailurus /\xA0
7 - Mariano Mellino & Interaxxis - Flashback /\xA0
8 - Andhim - Firefly /\xA0
9 - Andre Moret - Waltz of the Dew /\xA0
10 - Hernan Cattaneo & John Tonks - Warsaw (Subandrio's Private 'Global Mission' Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"43.8K",fecha:"2020-12-05",link:"https://mcdn.podbean.com/mf/download/fmt6qn/500-HernanCattaneo-2020-12-05.mp3",tracklist:`DSF - Burning Lies /
DJ Zombi & Madraas - Today Will Never Be Again /
Marsh & Wassu - Amor /
Nick Varon - Volantis /
Ultraverse - Felicita /
Vanita - Ailurus /
Mariano Mellino & Interaxxis - Flashback /
Andhim - Firefly /
Andre Moret - Waltz of the Dew /`},{episodio:"501",titulo:"Resident / Episode 501 / Dec 12 2020",descripcion:`1 - Antidote - Eclipse (Eclipse Remix) /
2 - Isaac Differding - Renaissance /
3 - Kutiman - Inner Galactic Lovers (Eli Nissan Bootleg Rework) /
4 - Nicco (N.D) - Get Back /
5 - Hobin Rude, Antela - Deep Within (Christian Monique Remix) /
6 - Martin Gardoqui - Fidel /
7 - Underher, Just Emma, Hamsom Eli - Voyageur (Fur Coat Remix) /
8 - Juan Deminicis - Intelecto /
9 - Carsten Halm - Fuchsbau /
10 - Space Manoeuvres - Stage One (Shan Remix) Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38.5K",fecha:"2020-12-12",link:"https://mcdn.podbean.com/mf/download/ra6ype/501-HernanCattaneo-2020-12-12.mp3",tracklist:`Antidote - Eclipse (Eclipse Remix) /
Isaac Differding - Renaissance /
Kutiman - Inner Galactic Lovers (Eli Nissan Bootleg Rework) /
Nicco (N.D) - Get Back /
Hobin Rude, Antela - Deep Within (Christian Monique Remix) /
Martin Gardoqui - Fidel /
Underher, Just Emma, Hamsom Eli - Voyageur (Fur Coat Remix) /
Juan Deminicis - Intelecto /
Carsten Halm - Fuchsbau /`},{episodio:"502",titulo:"Resident / Episode 502 / SunsetStream Eclipse Edition / Dec 19 2020",descripcion:"SunsetStream Eclipse Edition Download episode on MP3 (Right click, save link as...)",likes:"44",descargas:"58.7K",fecha:"2020-12-19",link:"https://mcdn.podbean.com/mf/download/nt2tux/502-HernanCattaneo-SunsetStream-Eclipse-Edition-2020-12-19.mp3"},{episodio:"504",titulo:"Resident / Episode 504 / Jan 02 2021",descripcion:`1 - Marino Canal - White Atlas /\xA0
2 - Lucefora - Elements /\xA0
3 - Bautista Toniolo \xA0- Dracena /\xA0
4 - Sol Seppy - Enter One (Rocio Portillo Bootleg) /\xA0
5 - Lupe Republic - \xA0ID /\xA0
6 - Francesco Pico & Paul Hazendonk - Nifty Fifty (Analog Jungs Remix) /\xA0
7 - Berni Turletti & Matias Chilano - Sarayu /\xA0
8 - Dee Montero - Meridian (Patrice B\xE4umel Remix) /\xA0
9 - BLANCAh - Signs Of Bliss /\xA0
10 - Monkey Safari - Safe (Eric Lune's 'We Are The People' Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"42.7K",fecha:"2021-01-02",link:"https://mcdn.podbean.com/mf/download/q7kgzm/504-HernanCattaneo-2021-01-02.mp3",tracklist:`Marino Canal - White Atlas /
Lucefora - Elements /
Bautista Toniolo \xA0- Dracena /
Sol Seppy - Enter One (Rocio Portillo Bootleg) /
Lupe Republic - \xA0ID /
Francesco Pico & Paul Hazendonk - Nifty Fifty (Analog Jungs Remix) /
Berni Turletti & Matias Chilano - Sarayu /
Dee Montero - Meridian (Patrice B\xE4umel Remix) /
BLANCAh - Signs Of Bliss /`},{episodio:"505",titulo:"Resident / Episode 505 / Jan 07 2021",descripcion:`1 - Nursultan Kun & Lost Desert - Tebraha /\xA0
2 - Monojoke - Take Me Home /\xA0
3 - Matias Fittipaldi - Alas /\xA0
4 - Tayga - Bayeat /\xA0
5 - Milio - Never Say Never /\xA0
6 - Scian - Ravus /\xA0
7 - Illusory & Enai - Epica /\xA0
8 - Hollt - Revere /\xA0
9 - Claudio Cornejo - Amasis /\xA0
10 - Dark Pulse - Run (Lemon8 & Zoyzi Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"39.4K",fecha:"2021-01-07",link:"https://mcdn.podbean.com/mf/download/fecnsg/505-HernanCattaneo-2021-01-09.mp3",tracklist:`Nursultan Kun & Lost Desert - Tebraha /
Monojoke - Take Me Home /
Matias Fittipaldi - Alas /
Tayga - Bayeat /
Milio - Never Say Never /
Scian - Ravus /
Illusory & Enai - Epica /
Hollt - Revere /
Claudio Cornejo - Amasis /`},{episodio:"506",titulo:"Resident / Episode 506 / Jan 16 2021",descripcion:`1 - Trentem\xF8ller - Moan (Tim Engelhardt Remix) /\xA0
2 - CAIN - Irrational Accumulation /\xA0
3 - EANP - Delights Sky /\xA0
4 - Orlando Voorn - Internal Destination /\xA0
5 - Mauro Augugliaro, Noiyse Project - Requiem /\xA0
6 - Julieta K\xFChnle - Out of Mind /\xA0
7 - Francesco Pico - I Hear The Wind /\xA0
8 - Skatman - Desert Beam /\xA0
9 - Raphael Mader - Fractured /\xA0
10 - Perry Farrell - Vast Visitation ft. Jim Morrison (Guy Gerber & Moscoman Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"40.9K",fecha:"2021-01-16",link:"https://mcdn.podbean.com/mf/download/82du47/506-HernanCattaneo-2021-01-16.mp3",tracklist:`Trentem\xF8ller - Moan (Tim Engelhardt Remix) /
CAIN - Irrational Accumulation /
EANP - Delights Sky /
Orlando Voorn - Internal Destination /
Mauro Augugliaro, Noiyse Project - Requiem /
Julieta K\xFChnle - Out of Mind /
Francesco Pico - I Hear The Wind /
Skatman - Desert Beam /
Raphael Mader - Fractured /`},{episodio:"507",titulo:"Resident / Episode 507 / Jan 23 2021",descripcion:`1 - Bob Moses ZHU - Desire (Solomun Remix) /\xA0
2 - Fortunato & Montresor - Imagine (FM Edit) /\xA0
3 - Robert Babicz - Utopia (BOg Remix) /\xA0
4 - NEW ORDER - Vanishing Point (Abel Meyer Holiday remix) /\xA0
5 - ID-ID /\xA0
6 - Antrim - Blue Sensations /\xA0
7 - Dmitry Molosh - Orchard (Kasper Koman Remix) /\xA0
8 - Cid Inc. & Orsen - A Blessing in Disguise /\xA0
9 - Kamilo Sanclemente - Conspiracy /\xA0
10 - Fabrication - Hot Foot (Jamie Stevens & Anthony Pappa Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"41.5K",fecha:"2021-01-23",link:"https://mcdn.podbean.com/mf/download/jecxu2/507-HernanCattaneo-2021-01-23.mp3",tracklist:`Bob Moses ZHU - Desire (Solomun Remix) /
Fortunato & Montresor - Imagine (FM Edit) /
Robert Babicz - Utopia (BOg Remix) /
NEW ORDER - Vanishing Point (Abel Meyer Holiday remix) /
ID-ID /
Antrim - Blue Sensations /
Dmitry Molosh - Orchard (Kasper Koman Remix) /
Cid Inc. & Orsen - A Blessing in Disguise /
Kamilo Sanclemente - Conspiracy /`},{episodio:"508",titulo:"Resident / Episode 508 / Jan 30 2021",descripcion:`1 - Safar (FR) - Eternal Roots (Paax Tulum Remix) /\xA0
2 - Wassu - Marianu /\xA0
3 - Bell Towers - Want You (Need You) (Adam Port Remix) /\xA0
4 - CAIN - Refined Rebellion /\xA0
5 - Jonathan Fratamico - Unpredictable /\xA0
6 - Franco Helguera - Chivilcoy (Diego Berrondo Remix) /\xA0
7 - Fat Cosmoe Feat MA\xCB - Goner /\xA0
8 - ARTBAT & Dino Lenny - Fading /\xA0
9 - Hobin Rude, Antela - Deep Within (Christian Monique Remix) /\xA0
10 - Budakid - Ringo Bingo / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"42K",fecha:"2021-01-30",link:"https://mcdn.podbean.com/mf/download/4ynh7g/508-HernanCattaneo-2021-01-30.mp3",tracklist:`Safar (FR) - Eternal Roots (Paax Tulum Remix) /
Wassu - Marianu /
Bell Towers - Want You (Need You) (Adam Port Remix) /
CAIN - Refined Rebellion /
Jonathan Fratamico - Unpredictable /
Franco Helguera - Chivilcoy (Diego Berrondo Remix) /
Fat Cosmoe Feat MA\xCB - Goner /
ARTBAT & Dino Lenny - Fading /
Hobin Rude, Antela - Deep Within (Christian Monique Remix) /`},{episodio:"509",titulo:"Resident / Episode 509 / Feb 06 2021",descripcion:`1 - Bodaishin & Phoesy - Sur Le Feu /\xA0
2 - Justrice - No Strings Attached /\xA0
3 - Frank Sonic - Gravitational Arch Of 20 /\xA0
4 - Lee Burridge - Satellite Girl (Tim Green Remix) /\xA0
5 - Tom Misch & Yussef Dayes - Festival [Dimuth K & SAJAY Edit) /\xA0
6 - He\xEEk - Eunoia /\xA0
7 - Paul Angelo, Don Argento - Dioptra /\xA0
8 - Fefo & Dario Arcas - Take Me Away (Erich Von Kollar Unofficial Club Edit) /\xA0
9 - Nick Varon - Forbidden Land (OMB & Ogawa Remix) /\xA0
10 - Bob Moses - The Blame (Helsloot Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"43.3K",fecha:"2021-02-06",link:"https://mcdn.podbean.com/mf/download/jz6yyx/509-HernanCattaneo-2021-02-06.mp3",tracklist:`Bodaishin & Phoesy - Sur Le Feu /
Justrice - No Strings Attached /
Frank Sonic - Gravitational Arch Of 20 /
Lee Burridge - Satellite Girl (Tim Green Remix) /
Tom Misch & Yussef Dayes - Festival [Dimuth K & SAJAY Edit) /
He\xEEk - Eunoia /
Paul Angelo, Don Argento - Dioptra /
Fefo & Dario Arcas - Take Me Away (Erich Von Kollar Unofficial Club Edit) /
Nick Varon - Forbidden Land (OMB & Ogawa Remix) /`},{episodio:"510",titulo:"Resident / Episode 510 / Feb 13 2021",descripcion:`1 - Apparat - In Gravitas (John Cosani Edit) /\xA0
2 - Mooncat ft Ferank - Hear What Was Said (Marcelo Vasami Remix) /\xA0
3 - Rebeat - Butterfly Mind /\xA0
4 - Aera - Jack Leather /\xA0
5 - Lupe Republic - ID /\xA0
6 - In Anima - XXY /\xA0
7 - Rob Hes - Undivided /\xA0
8 - Eze Ramirez - Restructure /\xA0
9 - Frankie M - Plan de escape /\xA0
10 - Fur Coat feat. Delhia de France - Eye of the Storm (MODEM Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"43.2K",fecha:"2021-02-13",link:"https://mcdn.podbean.com/mf/download/pimb8e/510-HernanCattaneo-2021-02-13.mp3",tracklist:`Apparat - In Gravitas (John Cosani Edit) /
Mooncat ft Ferank - Hear What Was Said (Marcelo Vasami Remix) /
Rebeat - Butterfly Mind /
Aera - Jack Leather /
Lupe Republic - ID /
In Anima - XXY /
Rob Hes - Undivided /
Eze Ramirez - Restructure /
Frankie M - Plan de escape /`},{episodio:"511",titulo:"Resident / Episode 511 / Feb 20 2021",descripcion:`1 - Rodrigo Lapema- Voet (Nicolas Soria Remix) /\xA0
2 - Natascha Polk\xE9 - Neverland (Aparde Remix) /\xA0
3 - Baardman - A Moment In The Sun (Sonic Union Remix) /\xA0
4 - Mauro Augugliaro, Noiyse Project - Requiem /\xA0
5 - Hasith and Juan Sapia - Our Heart of Ruin (Noiyse Project Remix) /\xA0
6 - Hicky & Kalo, Seth Schwarz - Un R\xEAve \xC9trange (Rodriguez Jr. Remix) /\xA0
7 - Oliverio Sofia - Agua (Sebastian Busto Remix) /\xA0
8 - Bob Moses - The Blame (DJ Seinfeld Remix) /\xA0
9 - TNTS - Caelum (Domenico Imperato Remix) /\xA0
10 - TNTS - Caelum (Zoo Brazil Remix) /\xA0
11 - Chromatics - Shadow (Maceo Plex Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"44.3K",fecha:"2021-02-20",link:"https://mcdn.podbean.com/mf/download/vcp2vq/511-HernanCattaneo-2021-02-20.mp3",tracklist:`Rodrigo Lapema- Voet (Nicolas Soria Remix) /
Natascha Polk\xE9 - Neverland (Aparde Remix) /
Baardman - A Moment In The Sun (Sonic Union Remix) /
Mauro Augugliaro, Noiyse Project - Requiem /
Hasith and Juan Sapia - Our Heart of Ruin (Noiyse Project Remix) /
Hicky & Kalo, Seth Schwarz - Un R\xEAve \xC9trange (Rodriguez Jr. Remix) /
Oliverio Sofia - Agua (Sebastian Busto Remix) /
Bob Moses - The Blame (DJ Seinfeld Remix) /
TNTS - Caelum (Domenico Imperato Remix) /
TNTS - Caelum (Zoo Brazil Remix) /`},{episodio:"512",titulo:"Resident / Episode 512 / Feb 27 2021",descripcion:`1 - Tom Day & Monsoonsiren - From Afar (Makebo Extended Mix) /\xA0
2 - Sapienta - Unlock (Jose Tabarez Remix) /\xA0
3 - Marsh - Florence (Wassu Remix) /\xA0
4 - Partenaire - Modern Mantra /\xA0
5 - Morttagua - Imentet (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
6 - Urmet K- Secrets Of Your Heart feat. Shawni) /\xA0
7 - Alex O'Rion - Castle In The Sky /\xA0
8 - Garden Of Peace (Yotto Renaissance Remix) /\xA0
9 - Hicky & Kalo - Eyes of Truth /\xA0
10 - Fernando Picon - Brillante Oscuridad / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"45.6K",fecha:"2021-02-27",link:"https://mcdn.podbean.com/mf/download/hpeb7c/512-HernanCattaneo-2021-02-27.mp3",tracklist:`Tom Day & Monsoonsiren - From Afar (Makebo Extended Mix) /
Sapienta - Unlock (Jose Tabarez Remix) /
Marsh - Florence (Wassu Remix) /
Partenaire - Modern Mantra /
Morttagua - Imentet (Hernan Cattaneo & Marcelo Vasami Remix) /
Urmet K- Secrets Of Your Heart feat. Shawni) /
Alex O'Rion - Castle In The Sky /
Garden Of Peace (Yotto Renaissance Remix) /
Hicky & Kalo - Eyes of Truth /`},{episodio:"514",titulo:"Resident / Episode 514 / Mar 13 2021",descripcion:`1 - Nandu, Emily Simbi - Interference Inside /\xA0
2 - Jepe - Boardwalk (Joal Remix) /\xA0
3 - Strinner - Coalescence (Browncoat Remix) /\xA0
4 - Jonathan Fratamico - ID /\xA0
5 - Brian Cid - Ordeal /\xA0
6 - Horatio - Chareya /\xA0
7 - NAHS & Ivan Aliaga - Astrona (Simply City Remix) /\xA0
8 - dubspeeka - Khepri (Sasha Rework) /\xA0
9 - Betical - New Age /\xA0
10 - Monolink - The Prey (Mind Against Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"45.6K",fecha:"2021-03-13",link:"https://mcdn.podbean.com/mf/download/nbdedg/514-HernanCattaneo-2021-03-13.mp3",tracklist:`Nandu, Emily Simbi - Interference Inside /
Jepe - Boardwalk (Joal Remix) /
Strinner - Coalescence (Browncoat Remix) /
Jonathan Fratamico - ID /
Brian Cid - Ordeal /
Horatio - Chareya /
NAHS & Ivan Aliaga - Astrona (Simply City Remix) /
dubspeeka - Khepri (Sasha Rework) /
Betical - New Age /`},{episodio:"515",titulo:"Resident / Episode 515 / Mar 13 2021",descripcion:`1 - Keinemusik - Discoteca feat. Sofie /\xA0
2 - Julian Rodriguez - Satelevon /\xA0
3 - JFR - I Lost Myself /\xA0
4 - D-Nox & Beckers - Deep in the Dark feat. LENN V (Fur Coat Remix) /\xA0
5 - dubspeeka - Geb (Spencer Brown Rework) /\xA0
6 - Forgotten Notes - Radiance /\xA0
7 - Hraach - Night Broke /\xA0
8 - Solid Sessions - El Naya /\xA0
9 - John Johnson - London (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
10 - Depeche \xA0Mode \xA0- A Pain That Im Used To (DJ PAUL brittle crystals remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"45.5K",fecha:"2021-03-13",link:"https://mcdn.podbean.com/mf/download/h5dqyx/515-HernanCattaneo-2021-03-20.mp3",tracklist:`Keinemusik - Discoteca feat. Sofie /
Julian Rodriguez - Satelevon /
JFR - I Lost Myself /
D-Nox & Beckers - Deep in the Dark feat. LENN V (Fur Coat Remix) /
dubspeeka - Geb (Spencer Brown Rework) /
Forgotten Notes - Radiance /
Hraach - Night Broke /
Solid Sessions - El Naya /
John Johnson - London (Hernan Cattaneo & Marcelo Vasami Remix) /`},{episodio:"516",titulo:"Resident / Episode 516 / Mar 27 2021",descripcion:`1 - Moby - Almost Home (Vandelor Remix) /\xA0
2 - Slow Hearts - Menari /\xA0
3 - Erdi Irmak - The World Is Yours /\xA0
4 - Mike Rish - Interlinked /\xA0
5 - Arnold T, Alain Pauwels - Havana (Andr\xE9 Moret Remix) /\xA0
6 - Dee Montero - Perpetua /\xA0
7 - Seven Wells - Thirst (Julieta K\xFChnle Remix) /\xA0
8 - Reyul Mather, Around Us - United /\xA0
9 - Marcelo Vasami - Winter Comes (Nicolas Rada Remix) /\xA0
10 - K\xF6lsch & Lunar June - Closer / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"49.6K",fecha:"2021-03-27",link:"https://mcdn.podbean.com/mf/download/na6yaw/516-HernanCattaneo-2021-03-27.mp3",tracklist:`Moby - Almost Home (Vandelor Remix) /
Slow Hearts - Menari /
Erdi Irmak - The World Is Yours /
Mike Rish - Interlinked /
Arnold T, Alain Pauwels - Havana (Andr\xE9 Moret Remix) /
Dee Montero - Perpetua /
Seven Wells - Thirst (Julieta K\xFChnle Remix) /
Reyul Mather, Around Us - United /
Marcelo Vasami - Winter Comes (Nicolas Rada Remix) /`},{episodio:"517",titulo:"Resident / Episode 517 / Apr 03 2021",descripcion:`1 - Ameli Paul - Beyond Reason (Aera Remix) /\xA0
2 - Arash Shadram Feat Eleonora - Embraced by Reality (Habischman Remix) /\xA0
3 - Hakan Ozurun - Purple Void /\xA0
4 - Rikken - Substance /\xA0
5 - Mauro Augugliaro, Luca Cocciufo - The only way /\xA0
6 - Emma Vazquez - Bootcamp /\xA0
7 - Leonel Camp, Kamilo Sanclemente \xA0- The End Comes After Me Feat. Luli Diaz /\xA0
8 - Ric Niels - Desire /\xA0
9 - Mike Rish - Kong /\xA0
10 - Sasha - HNDI / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"46.6K",fecha:"2021-04-03",link:"https://mcdn.podbean.com/mf/download/caduje/517-HernanCattaneo-2021-04-03.mp3",tracklist:`Ameli Paul - Beyond Reason (Aera Remix) /
Arash Shadram Feat Eleonora - Embraced by Reality (Habischman Remix) /
Hakan Ozurun - Purple Void /
Rikken - Substance /
Mauro Augugliaro, Luca Cocciufo - The only way /
Emma Vazquez - Bootcamp /
Leonel Camp, Kamilo Sanclemente \xA0- The End Comes After Me Feat. Luli Diaz /
Ric Niels - Desire /
Mike Rish - Kong /`},{episodio:"518",titulo:"Resident / Episode 518 / Apr 10 2021",descripcion:`1 - Alan Schultz - Madriguera /\xA0
2 - Sebastian Sellares - Dunes at Dawn /\xA0
3 - Nicolas Ruiz - Agartha (Baunder remix) /\xA0
4 - Amount - Kreuzberg /\xA0
5 - MOSHIC - It's Alright (Matter_remix) /\xA0
6 - Alex Kennon - Blinding Lights /\xA0
7 - Seba GS - After Love /\xA0
8 - Fabri Lopez - Marcdacu /\xA0
9 - The Cure - Lovesong (Abel Meyer Dub mix) /\xA0
10 - Llewellyn - The Final Essence / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"48.7K",fecha:"2021-04-10",link:"https://mcdn.podbean.com/mf/download/wcx4ek/518-HernanCattaneo-2021-04-10.mp3",tracklist:`Alan Schultz - Madriguera /
Sebastian Sellares - Dunes at Dawn /
Nicolas Ruiz - Agartha (Baunder remix) /
Amount - Kreuzberg /
MOSHIC - It's Alright (Matter_remix) /
Alex Kennon - Blinding Lights /
Seba GS - After Love /
Fabri Lopez - Marcdacu /
The Cure - Lovesong (Abel Meyer Dub mix) /`},{episodio:"519",titulo:"Resident / Episode 519 / Apr 17 2021",descripcion:`1 - Greenage - A Walk in the Clouds /\xA0
2 - Monojoke - Chapter XIII /\xA0
3 - Double Touch - Von Paradiso /\xA0
4 - Gab Rhome - Asylum Twist (Joseph Ashworth Remix) /\xA0
5 - Greg Ochman - Mistlove /\xA0
6 - Quivver - Nothing New To Feel (Nacho Quaglini Bootleg) /\xA0
7 - Katzen - Andes (Maximo Gambini & Q.A.T Remix) /\xA0
8 - Yotto, Stephan Jolk - Only One /\xA0
9 - Juan Lagisquet - Vimana /\xA0
10 - Apollo 440 - Liquid Cool (Framewerk Ice Cold Breaks Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"48.3K",fecha:"2021-04-17",link:"https://mcdn.podbean.com/mf/download/a5s4x4/519-HernanCattaneo-2021-04-17.mp3",tracklist:`Greenage - A Walk in the Clouds /
Monojoke - Chapter XIII /
Double Touch - Von Paradiso /
Gab Rhome - Asylum Twist (Joseph Ashworth Remix) /
Greg Ochman - Mistlove /
Quivver - Nothing New To Feel (Nacho Quaglini Bootleg) /
Katzen - Andes (Maximo Gambini & Q.A.T Remix) /
Yotto, Stephan Jolk - Only One /
Juan Lagisquet - Vimana /`},{episodio:"520",titulo:"Resident / Episode 520 / Apr 24 2021",descripcion:`1- Fulltone - Love in space /\xA0
2- Khen - Some little Secrets /\xA0
3- Pole Folder - Jaipur (Jamie Stevens Remix) /\xA0
4- Max Blade, Ignacio Berardi - Rhamnous /\xA0
5- Hawke - Bells of San Anselmo (Nick Warren & Nicolas Rada Remix) /\xA0
6- Dee Montero - Perpetua (Blaktone Remix) /\xA0
7- Chumbita - Outburst /\xA0
8- Moshic - Definition of feeling (Duel Remix) /\xA0
9- VNTM - Disrupting Machines /\xA0
10- Who Made Who - Abu Simbel / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"48.7K",fecha:"2021-04-24",link:"https://mcdn.podbean.com/mf/download/qi6ytf/520-HernanCattaneo-2021-04-24.mp3",tracklist:`Fulltone - Love in space /
Khen - Some little Secrets /
Pole Folder - Jaipur (Jamie Stevens Remix) /
Max Blade, Ignacio Berardi - Rhamnous /
Hawke - Bells of San Anselmo (Nick Warren & Nicolas Rada Remix) /
Dee Montero - Perpetua (Blaktone Remix) /
Chumbita - Outburst /
Moshic - Definition of feeling (Duel Remix) /
VNTM - Disrupting Machines /`},{episodio:"521",titulo:"Resident / Episode 521 / May 01 2021",descripcion:`1 - Rusich - Sun Life /\xA0
2 - Shai T - Hypnotic /\xA0
3 - Uccelli- Baroque /\xA0
4 - Uccelli - Overfly /\xA0
5 - No\u0304pi - Gray Cloud /\xA0
6 - Fernando Picon - El Mar /\xA0
7 - Zankee Gulati - Who Are You (GMJ & Matter Remix) /\xA0
8 - Pole Folder - Blue Station /\xA0
9 - 8Kays - Incrust /\xA0
10 - James Zabiela - The Healing (Ezequiel Arias Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"49.9K",fecha:"2021-05-01",link:"https://mcdn.podbean.com/mf/download/j825zu/521-HernanCattaneo-2021-05-01.mp3",tracklist:`Rusich - Sun Life /
Shai T - Hypnotic /
Uccelli- Baroque /
Uccelli - Overfly /
No\u0304pi - Gray Cloud /
Fernando Picon - El Mar /
Zankee Gulati - Who Are You (GMJ & Matter Remix) /
Pole Folder - Blue Station /
8Kays - Incrust /`},{episodio:"522",titulo:"Resident / Episode 522 / May 08 2021",descripcion:`1 - AWKA- Stimm (Chiari Remix) /\xA0
2 - Dmitry Molosh - The First Ray Of Sun /\xA0
3 - NOPI - Libido (Dj Paul rmx) /\xA0
4 - Foletto, LOSTIN - Distant Waves /\xA0
5 - Audiojack - Psychoactive /\xA0
6 - Pongo - Granular /\xA0
7 - Foletto, LOSTIN - California Dream (Liam Sieker Remix) /\xA0
8 - Tim Engelhardt - Ionized feat. Hannah Noelle /\xA0
9 - TAHO - Solaris /\xA0
10 - Audiojack x Jem Cooke - Feels Good (Patrice Baumel Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"49.8K",fecha:"2021-05-08",link:"https://mcdn.podbean.com/mf/download/dmrwfg/522-HernanCattaneo-2021-05-08.mp3",tracklist:`AWKA- Stimm (Chiari Remix) /
Dmitry Molosh - The First Ray Of Sun /
NOPI - Libido (Dj Paul rmx) /
Foletto, LOSTIN - Distant Waves /
Audiojack - Psychoactive /
Pongo - Granular /
Foletto, LOSTIN - California Dream (Liam Sieker Remix) /
Tim Engelhardt - Ionized feat. Hannah Noelle /
TAHO - Solaris /`},{episodio:"524",titulo:"Resident / Episode 524 / May 22 2021",descripcion:`1 - Air - Alone In Kyoto (Vandelor 'Secret Whisper' Mix) /\xA0
2 - Enigmatic - Within Two Worlds /\xA0
3 - Doma - Lucero /\xA0
4 - Joan Retamero- Shadowslight /\xA0
5 - Peer Kusiv feat. Johanson - Bring You Back (Einmusik Remix) /\xA0
6 - 1926 - Sleep Disorder /\xA0
7 - Mercurio- Stereo /\xA0
8 - Gorge, Marc Lenz - Ansia /\xA0
9 - Lopezhouse - Redstone /\xA0
10 - Kamilo Sanclemente - Love is Within feat Velveta (Sonic Union Remix) / Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!! Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"51.6K",fecha:"2021-05-22",link:"https://mcdn.podbean.com/mf/download/5p32j3/524-HernanCattaneo-2021-05-22.mp3",tracklist:`Air - Alone In Kyoto (Vandelor 'Secret Whisper' Mix) /
Enigmatic - Within Two Worlds /
Doma - Lucero /
Joan Retamero- Shadowslight /
Peer Kusiv feat. Johanson - Bring You Back (Einmusik Remix) /
1926 - Sleep Disorder /
Mercurio- Stereo /
Gorge, Marc Lenz - Ansia /
Lopezhouse - Redstone /`},{episodio:"525",titulo:"Resident / Episode 525 / May 29 2021",descripcion:`1 - Kai - Tree of peace /\xA0
2 - Mario Neha - Lights On Mars (Maximo Gambini & Q.A.T Remix) /\xA0
3 - Alex O'Rion - Stranded /\xA0
4 - Ameli Paul - Beyond Reason (Aera Remix) /\xA0
5 - Solar Plexus - Solar Plexus (Framewerk Rework) /\xA0
6 - Sparvieri & Romano - Encounters /\xA0
7 - CannaKid - Magic Fungi /\xA0
8 - Masella - Etna (Black 8 Remix) /\xA0
9 - Jonathan Fratamico - Differential / Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!! Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"50.2K",fecha:"2021-05-29",link:"https://mcdn.podbean.com/mf/download/a5nwrk/525-HernanCattaneo-2021-05-29.mp3",tracklist:`Kai - Tree of peace /
Mario Neha - Lights On Mars (Maximo Gambini & Q.A.T Remix) /
Alex O'Rion - Stranded /
Ameli Paul - Beyond Reason (Aera Remix) /
Solar Plexus - Solar Plexus (Framewerk Rework) /
Sparvieri & Romano - Encounters /
CannaKid - Magic Fungi /
Masella - Etna (Black 8 Remix) /`},{episodio:"526",titulo:"Resident / Episode 526 / Jun 05 2021",descripcion:`1 - Pedro Sanmartin- Gaudir /\xA0
2 - Tim Green- Coriolis /\xA0
3 - Antrim - Drake (Kaspar Tasane Remix) /\xA0
4 - CannaKid - Hermes /\xA0
5 - Esteban Ikasovic - Rock Rouse (Golan Zocher Remix) /\xA0
6 - Doma - Kolibri /\xA0
7 - Parra for Cuva - Her Entrance (Innellea's Interstellar Interpretation) /\xA0
8 - NOIYSE PROJECT - Time Traveler /\xA0
9 - Joseph Ashworth - Sheen /\xA0
10 - Moscoman - Escape (Dubfire Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"55K",fecha:"2021-06-05",link:"https://mcdn.podbean.com/mf/download/aud4xk/526-HernanCattaneo-2021-06-05.mp3",tracklist:`Pedro Sanmartin- Gaudir /
Tim Green- Coriolis /
Antrim - Drake (Kaspar Tasane Remix) /
CannaKid - Hermes /
Esteban Ikasovic - Rock Rouse (Golan Zocher Remix) /
Doma - Kolibri /
Parra for Cuva - Her Entrance (Innellea's Interstellar Interpretation) /
NOIYSE PROJECT - Time Traveler /
Joseph Ashworth - Sheen /`},{episodio:"527",titulo:"Resident / Episode 527 / Jun 12 2021",descripcion:`1 - Kasey Taylor & Karl Pilbrow - Biocosmic Symphony feat. Amega /\xA0
2 - Hraach - Night Broke /\xA0
3 - Nicolas Rada - Hummingbird /\xA0
4 - Golan Zocher - Neshama /\xA0
5 - Amir Hussain - Prophecy of Fear (Subandrio Remix) /\xA0
6 - Aldebaran, Nate_Brown - In Puerto /\xA0
7 - Shimza - Kimberley (Luciano Remix) /\xA0
8 - Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /\xA0
9 - Alan Cerra - Zambala (Dynacom Sunset Remix) /\xA0
10 - Deichkind \u2013 Autonom (Dixon Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"52K",fecha:"2021-06-12",link:"https://mcdn.podbean.com/mf/download/chhuqn/527-HernanCattaneo-2021-06-12.mp3",tracklist:`Kasey Taylor & Karl Pilbrow - Biocosmic Symphony feat. Amega /
Hraach - Night Broke /
Nicolas Rada - Hummingbird /
Golan Zocher - Neshama /
Amir Hussain - Prophecy of Fear (Subandrio Remix) /
Aldebaran, Nate_Brown - In Puerto /
Shimza - Kimberley (Luciano Remix) /
Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /
Alan Cerra - Zambala (Dynacom Sunset Remix) /`},{episodio:"528",titulo:"Resident / Episode 528 / Jun 19 2021",descripcion:`1 - Rampa - The Church /\xA0
2 - Eelke Kleijn feat. Diana Miro - You (Patrice B\xE4umel Remix) /\xA0
3 - M.O.S. - Mermaid Dance (Newman (I Love) Remix) /\xA0
4 - Eli Nissan - Lyla /\xA0
5 - Shai T - Gates of The\u0304bai \xA0[Shai T Final Master] /\xA0
6 - Weird Sounding Dude - Summer Dive /\xA0
7 - Dee Montero - Echoes (Vocal Mix) - Futurescope /\xA0
8 - Stereo Underground - Thoughts On A Time Of Waiting /\xA0
9 - Raphael Mader - X-ray /\xA0
10 - Orbital - Chime Re-Record (Special Remix \xA0Extended) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"53.8K",fecha:"2021-06-19",link:"https://mcdn.podbean.com/mf/download/yev567/528-HernanCattaneo-2021-06-19.mp3",tracklist:`Rampa - The Church /
Eelke Kleijn feat. Diana Miro - You (Patrice B\xE4umel Remix) /
M.O.S. - Mermaid Dance (Newman (I Love) Remix) /
Eli Nissan - Lyla /
Shai T - Gates of The\u0304bai \xA0[Shai T Final Master] /
Weird Sounding Dude - Summer Dive /
Dee Montero - Echoes (Vocal Mix) - Futurescope /
Stereo Underground - Thoughts On A Time Of Waiting /
Raphael Mader - X-ray /`},{episodio:"529",titulo:"Resident / Episode 529 / Jun 26 2021",descripcion:`1 - Pole Folder - Mara (GMJ & Matter Intro Mix) /\xA0
2 - Dee Montero - Opia (Madraas Remix) /\xA0
3 - Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /\xA0
4 - Panayiotis Tassis - Sunshine (Kassey Voorn Remix) /\xA0
5 - Kamilo Sanclemente - The Distance (NOIYSE PROJECT & Bynomic Remix) /\xA0
6 - Salazar (COL), Hobin Rude - Maeror /\xA0
7 - Lerr - In Time /\xA0
8 - Paul Hazendonk - Weakness Pays /\xA0
9 - Abity feat. Luli Diaz - Long Road /\xA0
10 - DJ Tennis - Atlanta / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"55.6K",fecha:"2021-06-26",link:"https://mcdn.podbean.com/mf/download/drb2un/529-HernanCattaneo-2021-06-26.mp3",tracklist:`Pole Folder - Mara (GMJ & Matter Intro Mix) /
Dee Montero - Opia (Madraas Remix) /
Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /
Panayiotis Tassis - Sunshine (Kassey Voorn Remix) /
Kamilo Sanclemente - The Distance (NOIYSE PROJECT & Bynomic Remix) /
Salazar (COL), Hobin Rude - Maeror /
Lerr - In Time /
Paul Hazendonk - Weakness Pays /
Abity feat. Luli Diaz - Long Road /`},{episodio:"530",titulo:"Resident / Episode 530 / Jul 03 2021",descripcion:`1 - Lost Desert Junior - Bo Singi Yo /\xA0
2 - Shai T - Superstition /\xA0
3 - Depeche Mode - Only When I Lose Myself (Nick Varon Isolation Remix) /\xA0
4 - Lerr - In Time (Barbour Remix) /\xA0
5 - Fat Cosmoe feat. MAE - Places /\xA0
6 - Sergey Muzarks - Mirage (Weird Sounding Dude Remix) /\xA0
7 - Bachir Salloum - Lost in Time /\xA0
8 - Dubspeeka - Seth (Criss Deeper Remix) /\xA0
9 - Vince Watson - Make A Wish /\xA0
10 - Cabaret Nocturne - Afterlife ft Eleonora / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"55.7K",fecha:"2021-07-03",link:"https://mcdn.podbean.com/mf/download/akex7u/530-HernanCattaneo-2021-07-03.mp3",tracklist:`Lost Desert Junior - Bo Singi Yo /
Shai T - Superstition /
Depeche Mode - Only When I Lose Myself (Nick Varon Isolation Remix) /
Lerr - In Time (Barbour Remix) /
Fat Cosmoe feat. MAE - Places /
Sergey Muzarks - Mirage (Weird Sounding Dude Remix) /
Bachir Salloum - Lost in Time /
Dubspeeka - Seth (Criss Deeper Remix) /
Vince Watson - Make A Wish /`},{episodio:"531",titulo:"Resident / Episode 531 / Jul 10 2021",descripcion:`1 - Luciano Scheffer - Boreal (intro) /\xA0
2 - Golan Zocher feat. Velveta - Summer Sun (Menkee Remix) /\xA0
3 - Ismaehl, Replicanth - Perception /\xA0
4 - John Cosani - Saints /\xA0
5 - Indigo Man & Jorge Viana - Single Conception /\xA0
6 - Dmitry Molosh - Narodnaya (Original Dub Mix) /\xA0
7 - End Of Twins - Prophet (Nopi Remix) /\xA0
8 - Garbage - Milk (Framewerk Rewerk) /\xA0
9 - Randall Jones - She\u2019s Vibing /\xA0
10 - Dark Soul Project Pres Anatolian - Lemuria / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"53.3K",fecha:"2021-07-10",link:"https://mcdn.podbean.com/mf/download/9u6rvy/531-HernanCattaneo-2021-07-10.mp3",tracklist:`Luciano Scheffer - Boreal (intro) /
Golan Zocher feat. Velveta - Summer Sun (Menkee Remix) /
Ismaehl, Replicanth - Perception /
John Cosani - Saints /
Indigo Man & Jorge Viana - Single Conception /
Dmitry Molosh - Narodnaya (Original Dub Mix) /
End Of Twins - Prophet (Nopi Remix) /
Garbage - Milk (Framewerk Rewerk) /
Randall Jones - She\u2019s Vibing /`},{episodio:"532",titulo:"Resident / Episode 532 / Jul 17 2021",descripcion:`1 - Gorge, Danjo(ita) - Verenacio /\xA0
2 - Simos Tagias - Black Swan (Mike Rish Remix) /\xA0
3 - Robert Mason - Return to Danger Bay /\xA0
4 - Rockka, Tapasya - Conscious Awakening (TEELCO remix) /\xA0
5 - Sha-ullo - Game Changer /\xA0
6 - Joaco Salerno - Kairos (Halaros, Leila Scheiwe Remix) /\xA0
7 - Federico Monachesi - Fiords /\xA0
8 - Tru Funk - 4 AM [The Lucid Phase} (Oliver & Tom Remix) /\xA0
9 - UNDERHER - You Can't Give Me What I Want (Tim Engelhardt Remix) /\xA0
10 - Mind Against - Closer / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"57.3K",fecha:"2021-07-17",link:"https://mcdn.podbean.com/mf/download/2dfw2a/532-HernanCattaneo-2021-07-17.mp3",tracklist:`Gorge, Danjo(ita) - Verenacio /
Simos Tagias - Black Swan (Mike Rish Remix) /
Robert Mason - Return to Danger Bay /
Rockka, Tapasya - Conscious Awakening (TEELCO remix) /
Sha-ullo - Game Changer /
Joaco Salerno - Kairos (Halaros, Leila Scheiwe Remix) /
Federico Monachesi - Fiords /
Tru Funk - 4 AM [The Lucid Phase} (Oliver & Tom Remix) /
UNDERHER - You Can't Give Me What I Want (Tim Engelhardt Remix) /`},{episodio:"534",titulo:"Resident / Episode 534 / Jul 31 2021",descripcion:`1 - Ori and the Will of the Wisps - Windswept Wastes (Kai Castro Remix) /\xA0
2 - Sebastien Leger - Son of Sun /\xA0
3 - LADS - Vorfreude (Alex O'Rion Remix) /\xA0
4 - Alan Fitzpatrick & Lawrence Hart - Warning Signs (Mind Against) /\xA0
5 - Tobak - Kevo (EdOne Remix) /\xA0
6 - The Future Sound Of London - Papua New Guinea (Blusoul Edit) /\xA0
7 - Laurent Chanal - Laurent Chanal - Carbon (Vince Watson Reshape Part 1) /\xA0
8 - Matiramic - Startrail /\xA0
9 - Millero - Too Far Gone (Musumeci Dodi Palese Remix) /\xA0
10 - PYURA - Acuario / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"55.2K",fecha:"2021-07-31",link:"https://mcdn.podbean.com/mf/download/57dupf/534-HernanCattaneo-2021-07-31.mp3",tracklist:`Ori and the Will of the Wisps - Windswept Wastes (Kai Castro Remix) /
Sebastien Leger - Son of Sun /
LADS - Vorfreude (Alex O'Rion Remix) /
Alan Fitzpatrick & Lawrence Hart - Warning Signs (Mind Against) /
Tobak - Kevo (EdOne Remix) /
The Future Sound Of London - Papua New Guinea (Blusoul Edit) /
Laurent Chanal - Laurent Chanal - Carbon (Vince Watson Reshape Part 1) /
Matiramic - Startrail /
Millero - Too Far Gone (Musumeci Dodi Palese Remix) /`},{episodio:"535",titulo:"Resident / Episode 535 / Ago 07 2021",descripcion:`1 - Gui Milani - End of Line /\xA0
2 - Hicky & Kalo - For Better Days /\xA0
3 - East Cafe - Without Legacy /\xA0
4 - Salazar - Kenkyo /\xA0
5 - Fatih Ulusoy - Afternoon (Valeria Petz Remix) /\xA0
6 - Giorgia Angiuli - All The Little Things /\xA0
7 - Anton Borin, Bondarev - Samadhi /\xA0
8 - Roberto Caceres & Jose Tabarez - SyMaLiMi (RIGOONI) /\xA0
9 - Sebastian Busto Presents Moonlight Project Feat Bodai - Music (Oliver & Tom Remix) /\xA0
10 - Sebastien Leger - Feel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"57.8K",fecha:"2021-09-07",link:"https://mcdn.podbean.com/mf/download/zyusam/535-HernanCattaneo-2021-08-07.mp3",tracklist:`Gui Milani - End of Line /
Hicky & Kalo - For Better Days /
East Cafe - Without Legacy /
Salazar - Kenkyo /
Fatih Ulusoy - Afternoon (Valeria Petz Remix) /
Giorgia Angiuli - All The Little Things /
Anton Borin, Bondarev - Samadhi /
Roberto Caceres & Jose Tabarez - SyMaLiMi (RIGOONI) /
Sebastian Busto Presents Moonlight Project Feat Bodai - Music (Oliver & Tom Remix) /`},{episodio:"536",titulo:"Resident / Episode 536 / Ago 14 2021",descripcion:`1 - Hicky & Kalo - Borealis /\xA0
2 - Alan Cerra - Eudamonia (Tash remix) /\xA0
3 - Mental Order, Tim Othy - Energy (Mauro Aguirre Remix) /\xA0
4 - Mark Hoffen - Comet /\xA0
5 - Enzo Elia - Giugno Today The Sun (Aldebaran_Remix) /\xA0
6 - B\xD8R\xC5 - Rounds /\xA0
7 - Olivier Weiter - Avio /\xA0
8 - Fabri Lopez - Dubbel (Forerunners Remix) /\xA0
9 - Ezequiel Arias - Far Above The World /\xA0
10 - Anyma - Forevermore / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57.6K",fecha:"2021-09-14",link:"https://mcdn.podbean.com/mf/download/jtmvr7/536-HernanCattaneo-2021-08-14.mp3",tracklist:`Hicky & Kalo - Borealis /
Alan Cerra - Eudamonia (Tash remix) /
Mental Order, Tim Othy - Energy (Mauro Aguirre Remix) /
Mark Hoffen - Comet /
Enzo Elia - Giugno Today The Sun (Aldebaran_Remix) /
B\xD8R\xC5 - Rounds /
Olivier Weiter - Avio /
Fabri Lopez - Dubbel (Forerunners Remix) /
Ezequiel Arias - Far Above The World /`},{episodio:"537",titulo:"Resident / Episode 537 / Ago 21 2021",descripcion:`1 - Kazko - All Voices (Jose Tabarez Remix) /\xA0
2 - Nursultan Kun - Luvway (Erich Von Kollar Remix) /\xA0
3 - Matiramic - Turtle Sense /\xA0
4 - Stuart King - Bangaba /\xA0
5 - Mia Mendi, Thomas Gandey - Nightliner /\xA0
6 - Mia Mendi, Thomas Gandey - Ubi /\xA0
7 - Billie Eilish - Oxytocine (Joan Retamero) /\xA0
8 - Patrice Baumel - Beacon /\xA0
9 - Maximo Gambini & Q.A.T - ID /\xA0
10 - Cream - Cadence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.7K",fecha:"2021-09-21",link:"https://mcdn.podbean.com/mf/download/ys2v74/537-HernanCattaneo-2021-08-21.mp3",tracklist:`Kazko - All Voices (Jose Tabarez Remix) /
Nursultan Kun - Luvway (Erich Von Kollar Remix) /
Matiramic - Turtle Sense /
Stuart King - Bangaba /
Mia Mendi, Thomas Gandey - Nightliner /
Mia Mendi, Thomas Gandey - Ubi /
Billie Eilish - Oxytocine (Joan Retamero) /
Patrice Baumel - Beacon /
Maximo Gambini & Q.A.T - ID /`},{episodio:"538",titulo:"Resident / Episode 538 / Ago 28 2021",descripcion:`1 - Jonnas B - When You Left /\xA0
2 - Sebastian Busto Presents Moonlight Project - The Key of Dreams (Matias Chilano Remix) /\xA0
3 - Parallel Voices - Ocean Of Thoughts /\xA0
4 - Jaanh - Natural Fools /\xA0
5 - Paralel - Rose Of Jericho (Remcord Remix) /\xA0
6 - Frankie M & Luke Hunter - Distant Ocean /\xA0
7 - Elkins & Jaqobson - Alba ( Hot Since 82 Remix) /\xA0
8 - Blanka Barbara & Mango - Starwalk (Fabri Lopez Remix) /\xA0
9 - Golan Zocher feat. Velveta - Summer Sun (Emi Galvan Remix) /\xA0
10 - Subandrio & Nishan Lee - Borax / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"58.7K",fecha:"2021-09-28",link:"https://mcdn.podbean.com/mf/download/eh4qjt/538-HernanCattaneo-2021-08-28.mp3",tracklist:`Jonnas B - When You Left /
Sebastian Busto Presents Moonlight Project - The Key of Dreams (Matias Chilano Remix) /
Parallel Voices - Ocean Of Thoughts /
Jaanh - Natural Fools /
Paralel - Rose Of Jericho (Remcord Remix) /
Frankie M & Luke Hunter - Distant Ocean /
Elkins & Jaqobson - Alba ( Hot Since 82 Remix) /
Blanka Barbara & Mango - Starwalk (Fabri Lopez Remix) /
Golan Zocher feat. Velveta - Summer Sun (Emi Galvan Remix) /`},{episodio:"539",titulo:"Resident / Episode 539 / Sep 04 2021",descripcion:`1 - Hernan Martinez (AR) - Constellation /\xA0
2 - Corei, Neurat - Theorema Zero /\xA0
3 - Sergey Muzarks - Mirage /\xA0
4 - Greg Ochman - Untold Myth (Dabeat Remix) /\xA0
5 - Madloch, Subnode - A Short Moment (Petar Dundov Remix) /\xA0
6 - DJ Paul (AR) - Substances (Issac Remix) /\xA0
7 - Ccismo - Mystra (Aldebaran Remix) /\xA0
8 - Stephan Bodzin - Boavista /\xA0
9 - 19.26 - Lockdown in Milan /\xA0
10 - Matthias Meyer & Budakid - Sweet Ease Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"50K",fecha:"2021-09-04",link:"https://mcdn.podbean.com/mf/download/t9ptnn/539-HernanCattaneo-2021-09-04.mp3",tracklist:`Hernan Martinez (AR) - Constellation /
Corei, Neurat - Theorema Zero /
Sergey Muzarks - Mirage /
Greg Ochman - Untold Myth (Dabeat Remix) /
Madloch, Subnode - A Short Moment (Petar Dundov Remix) /
DJ Paul (AR) - Substances (Issac Remix) /
Ccismo - Mystra (Aldebaran Remix) /
Stephan Bodzin - Boavista /
19.26 - Lockdown in Milan /`},{episodio:"540",titulo:"Resident / Episode 540 / Sep 11 2021",descripcion:`1 - Juan Deminicis - All you don't see /\xA0
2 - Monojoke - Awakenings (Marcelo Paladini Remix) /\xA0
3 - East Cafe - When Chaos Ends /\xA0
4 - Subnode - Levels /\xA0
5 - 19.26 - Distance /\xA0
6 - Aldebaran - Olmo /\xA0
7 - Fur Coat, Julian Wassermann- Mysterious Valley /\xA0
8 - Fur Coat, Julian Wassermann - Desert Ground /\xA0
9 - Larrosa & Gardoqui \xA0 Nceshot - She /\xA0
10 - Antrim - Loose Soul (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"54.7K",fecha:"2021-09-11",link:"https://mcdn.podbean.com/mf/download/x9qc6f/540-HernanCattaneo-2021-09-11.mp3",tracklist:`Juan Deminicis - All you don't see /
Monojoke - Awakenings (Marcelo Paladini Remix) /
East Cafe - When Chaos Ends /
Subnode - Levels /
19.26 - Distance /
Aldebaran - Olmo /
Fur Coat, Julian Wassermann- Mysterious Valley /
Fur Coat, Julian Wassermann - Desert Ground /
Larrosa & Gardoqui \xA0 Nceshot - She /`},{episodio:"541",titulo:"Resident / Episode 541 / Sep 18 2021",descripcion:`1 - Gilad Benamram - Impossible Love (Guy Mantzur, Tamir Regev Remix) /\xA0
2 - Matthias Meyer & Budakid - Hybrid Society /\xA0
3 - John Cosani - Slow /\xA0
4 - Antrim - Stax /\xA0
5 - Dark Soul Project - Tulum /\xA0
6 - Jonathan Kaspar - Von Draussen /\xA0
7 - Paul Thomas & Fuenka - Noir /\xA0
8 - Powel - Chapek 9 /\xA0
9 - Nick Varon - Foggy Dawn /\xA0
10 - Sven Vath - Feiern / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"54.6K",fecha:"2021-09-18",link:"https://mcdn.podbean.com/mf/download/nec2b4/541-HernanCattaneo-2021-09-18.mp3",tracklist:`Gilad Benamram - Impossible Love (Guy Mantzur, Tamir Regev Remix) /
Matthias Meyer & Budakid - Hybrid Society /
John Cosani - Slow /
Antrim - Stax /
Dark Soul Project - Tulum /
Jonathan Kaspar - Von Draussen /
Paul Thomas & Fuenka - Noir /
Powel - Chapek 9 /
Nick Varon - Foggy Dawn /`},{episodio:"542",titulo:"Resident / Episode 542 / Sep 25 2021",descripcion:`1 - Pole Folder - The Great Beyond (Fur Coat Remix) /\xA0
2 - Yannek Maunz feat. Johanson - The Fall (Fur Coat Remix) /\xA0
3 - Chumbita - Ray of Sunlight /\xA0
4 - Sasha Carassi - Shiver ft. Davide Famularo /\xA0
5 - Sonic Dust feat. KnowKontrol - Blood /\xA0
6 - Nufects - Overflow /\xA0
7 - Mike Rish \xA0- Enter /\xA0
8 - Dj Paul - Twilight /\xA0
9 - 19.26 - Rainy Melody /\xA0
10 - Anthony Georges Patrice - Poor Pitch Discrimination / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"53.6K",fecha:"2021-09-25",link:"https://mcdn.podbean.com/mf/download/6dkpc8/542-HernanCattaneo-2021-09-25.mp3",tracklist:`Pole Folder - The Great Beyond (Fur Coat Remix) /
Yannek Maunz feat. Johanson - The Fall (Fur Coat Remix) /
Chumbita - Ray of Sunlight /
Sasha Carassi - Shiver ft. Davide Famularo /
Sonic Dust feat. KnowKontrol - Blood /
Nufects - Overflow /
Mike Rish \xA0- Enter /
Dj Paul - Twilight /
19.26 - Rainy Melody /`},{episodio:"545",titulo:"Resident / Episode 545 / Oct 16 2021",descripcion:`1 - Luccio - Mutual Feeling /\xA0
2 - Marcelo Vasami - Miche Line /\xA0
3 - Hicky & Halo \xA0- For Better Days (Hernan Cattaneo & Soundexile remix) /\xA0
4 - Dabeat & Zalvador - Lia /\xA0
5 - GMJ, Zankee Gulati - Eraya /\xA0
6 - Kasper Koman - Wilder (Alex O'Rion Remix) /\xA0
7 - Gonzalo Sclarovsky - ID /\xA0
8 - Francisco Castro - Rename It (Sebastian Busto Remix) /\xA0
9 - Moderat - Eating Hooks (John Cosani Edit) /\xA0
10 - &ME, Rampa, Adam Port feat. Cubicolor - Before The Flood (Diego Moreira Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"49.6K",fecha:"2021-10-16",link:"https://mcdn.podbean.com/mf/download/p2i4zm/545-HernanCattaneo-2021-10-16.mp3",tracklist:`Luccio - Mutual Feeling /
Marcelo Vasami - Miche Line /
Hicky & Halo \xA0- For Better Days (Hernan Cattaneo & Soundexile remix) /
Dabeat & Zalvador - Lia /
GMJ, Zankee Gulati - Eraya /
Kasper Koman - Wilder (Alex O'Rion Remix) /
Gonzalo Sclarovsky - ID /
Francisco Castro - Rename It (Sebastian Busto Remix) /
Moderat - Eating Hooks (John Cosani Edit) /`},{episodio:"546",titulo:"Resident / Episode 546 / Oct 23 2021",descripcion:`1 - Giovanny Aparicio - You Near Me /\xA0
2 - Brann - Stratosphere /\xA0
3 - Subandrio - Calm Within a Storm /\xA0
4 - DNOX & Stereo Underground - Salt & peper /\xA0
5 - Oovation - Serenity /\xA0
6 - Subconscious Tales - Adrsta /\xA0
7 - Martin Cozar & Rod Notario - Night Before (Fabri Lopez Remix) /\xA0
8 - Zalvador & Mauro Aguirre - Zatura /\xA0
9 - ZAC - H\xFChnerhaus (AMPISH Remix) /\xA0
10 - 3STRANGE - Waves (Unbroken's Unofficial Version) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"55.4K",fecha:"2021-10-23",link:"https://mcdn.podbean.com/mf/download/2hczp9/546-HernanCattaneo-2021-10-23.mp3",tracklist:`Giovanny Aparicio - You Near Me /
Brann - Stratosphere /
Subandrio - Calm Within a Storm /
DNOX & Stereo Underground - Salt & peper /
Oovation - Serenity /
Subconscious Tales - Adrsta /
Martin Cozar & Rod Notario - Night Before (Fabri Lopez Remix) /
Zalvador & Mauro Aguirre - Zatura /
ZAC - H\xFChnerhaus (AMPISH Remix) /`},{episodio:"547",titulo:"Resident / Episode 547 / Oct 30 2021",descripcion:`1 - 8KAYS, Diana Miro - Easy (Fur Coat Remix) /\xA0
2 - Uccelli - ID /\xA0
3 - Sebastian Busto - Dancing Flower (Simply City Stereo Marathon Remix) /\xA0
4 - Martin Cozar - Dribbling In The Sky (Poli Siufi remix) /\xA0
5 - Fabri Lopez - Weizen /\xA0
6 - Marsh feat. Sun Ra - Another Planet /\xA0
7 - KAS ST - Who's To Say What's Real (Mind Against & Colyn Remix) /\xA0
8 - Hermann & Kleine - Leaving You Behind (Sebastian Schetter Edit) /\xA0
9 - Subandrio - Plucked In Paradise /\xA0
10 - Kamilo Sanclemente - See the sun / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"37",descargas:"59K",fecha:"2021-10-30",link:"https://mcdn.podbean.com/mf/download/euvgbh/547-HernanCattaneo-2021-10-30.mp3",tracklist:`8KAYS, Diana Miro - Easy (Fur Coat Remix) /
Uccelli - ID /
Sebastian Busto - Dancing Flower (Simply City Stereo Marathon Remix) /
Martin Cozar - Dribbling In The Sky (Poli Siufi remix) /
Fabri Lopez - Weizen /
Marsh feat. Sun Ra - Another Planet /
KAS ST - Who's To Say What's Real (Mind Against & Colyn Remix) /
Hermann & Kleine - Leaving You Behind (Sebastian Schetter Edit) /
Subandrio - Plucked In Paradise /`},{episodio:"548",titulo:"Resident / Episode 548 / Nov 06 2021",descripcion:`1 - Greg Nairo - After the Rain /\xA0
2 - Valent\xEDn Huedo - Tonight /\xA0
3 - Alex O'Rion - Avalanche /\xA0
4 - Stephan Bodzin - Breathe Dub /\xA0
5 - ID - ID /\xA0
6 - D-Nox Ft LENN V - Paradise (Shai T Remix) /\xA0
7 - Rinzen, Enamour - Photon (ANII remix) /\xA0
8 - Will Dekeizer - Sapphire /\xA0
9 - Deeparture - Propellor (GMJ Remix) /\xA0
10 - Fabri Lopez - Hite / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"55.8K",fecha:"2021-11-06",link:"https://mcdn.podbean.com/mf/download/8vprur/548-HernanCattaneo-2021-11-06.mp3",tracklist:`Greg Nairo - After the Rain /
Valent\xEDn Huedo - Tonight /
Alex O'Rion - Avalanche /
Stephan Bodzin - Breathe Dub /
ID - ID /
D-Nox Ft LENN V - Paradise (Shai T Remix) /
Rinzen, Enamour - Photon (ANII remix) /
Will Dekeizer - Sapphire /
Deeparture - Propellor (GMJ Remix) /`},{episodio:"549",titulo:"Resident / Episode 549 / Nov 13 2021",descripcion:`1 - Adisyn - Departure (Hrag Mikkel Remix) /\xA0
2 - James Harcourt - Open 1.4.3 /\xA0
3 - Colle - On The Run /\xA0
4 - Imran Khan - Horizonz (Simos Tagias Remix) /\xA0
5 - Forty Cats - Freyja /\xA0
6 - \xD8ostil & VNTM ft Caro Imhoff - Hibernation /\xA0
7 - Teleport - X & Hobin Rude - Time Crisis /\xA0
8 - Eric Lune - Adore /\xA0
9 - Eric Lune - Desire /\xA0
10 - Umami - Ghostnote (DAVI Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"54.8K",fecha:"2021-11-13",link:"https://mcdn.podbean.com/mf/download/xscebc/549-HernanCattaneo-2021-11-13.mp3",tracklist:`Adisyn - Departure (Hrag Mikkel Remix) /
James Harcourt - Open 1.4.3 /
Colle - On The Run /
Imran Khan - Horizonz (Simos Tagias Remix) /
Forty Cats - Freyja /
\xD8ostil & VNTM ft Caro Imhoff - Hibernation /
Teleport - X & Hobin Rude - Time Crisis /
Eric Lune - Adore /
Eric Lune - Desire /`},{episodio:"550",titulo:"Resident / Episode 550 / Nov 20 2021",descripcion:`1 - Jozef K - Dance Until The End Of Time /\xA0
2 - Subandrio - Innocent Heart /\xA0
3 - Forty Cats, Meeting Molly - Lagom /\xA0
4 - Rikk Earth - Lost and Confused (East Cafe Breaks Dub) /\xA0
5 - Anthony Pappa & Jamie Stevens - Where We've Gone /\xA0
6 - UNDERWORLD - Crocodile (DJ Paul) /\xA0
7 - Forty Cats - Utopia /\xA0
8 - Matter - Pacha Mama /\xA0
9 - Yudi Watanabe, Andre Moret, L Georges - Crossing Galaxies /\xA0
10 - Callecat - Retrogg / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"57.7K",fecha:"2021-11-20",link:"https://mcdn.podbean.com/mf/download/ymdshm/550-HernanCattaneo-2021-11-20.mp3",tracklist:`Jozef K - Dance Until The End Of Time /
Subandrio - Innocent Heart /
Forty Cats, Meeting Molly - Lagom /
Rikk Earth - Lost and Confused (East Cafe Breaks Dub) /
Anthony Pappa & Jamie Stevens - Where We've Gone /
UNDERWORLD - Crocodile (DJ Paul) /
Forty Cats - Utopia /
Matter - Pacha Mama /
Yudi Watanabe, Andre Moret, L Georges - Crossing Galaxies /`},{episodio:"551",titulo:"Resident / Episode 551 / Nov 27 2021",descripcion:`1 - M.O.S. - Kara /\xA0
2 - Gres A - Your Eyes /\xA0
3 - rAin (MU) - Damaged (Alex Efe Remix) /\xA0
4 - Matter - The Search /\xA0
5 - Lucio Gastaldo - Panorama (Diego Berrondo Remix) /\xA0
6 - Sebastian Schetter - Nirvana /\xA0
7 - John Cosani - Hericium /\xA0
8 - NAHS - The Time Now (Sebastian Haas Remix) /\xA0
9 - 1926, BOg - 22 Police /\xA0
10 - Definition, Natascha Polke - Trojan Love (Tim Engelhardt Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"55.7K",fecha:"2021-11-27",link:"https://mcdn.podbean.com/mf/download/yvkirx/551-HernanCattaneo-2021-11-27.mp3",tracklist:`M.O.S. - Kara /
Gres A - Your Eyes /
rAin (MU) - Damaged (Alex Efe Remix) /
Matter - The Search /
Lucio Gastaldo - Panorama (Diego Berrondo Remix) /
Sebastian Schetter - Nirvana /
John Cosani - Hericium /
NAHS - The Time Now (Sebastian Haas Remix) /
1926, BOg - 22 Police /`},{episodio:"552",titulo:"Resident / Episode 552 / Dec 04 2021",descripcion:`1 - Greg Nairo - After The Rain (Pablo Carrera's JKR Edit) /\xA0
2 - The Cobb - Voda (Dmitry Molosh Remix) /\xA0
3 - Matter - So it Goes /\xA0
4 - Mail Lawson- Dear dad /\xA0
5 - Marcelo Vasami - JG Melon /\xA0
6 - NOIYSE PROJECT -In a Cloudland /\xA0
7 - Chaum - Bime /\xA0
8 - Lolu Menayed - After no on /\xA0
9 - Kassey Voorn - Skyline /\xA0
10 - Dunadry, Francisco Basso - Lost in Dagobah (Mauro Augugliaro Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"51.1K",fecha:"2021-12-04",link:"https://mcdn.podbean.com/mf/download/pmd2qs/552-HernanCattaneo-2021-12-04.mp3",tracklist:`Greg Nairo - After The Rain (Pablo Carrera's JKR Edit) /
The Cobb - Voda (Dmitry Molosh Remix) /
Matter - So it Goes /
Mail Lawson- Dear dad /
Marcelo Vasami - JG Melon /
NOIYSE PROJECT -In a Cloudland /
Chaum - Bime /
Lolu Menayed - After no on /
Kassey Voorn - Skyline /`},{episodio:"554",titulo:"Resident / Episode 554 / Dec 18 2021",descripcion:`1 - Sigur Ros - Saeglopur (Apocrypha Private Mix) /\xA0
2 - Jano Gil - Beyond The Earthly /\xA0
3 - Billie Eilish - Not My Responsibility (Antrim Remix) /\xA0
4 - Jim Rivers - Orchidaceae /\xA0
5 - Makebo & Amonita - Matangi /\xA0
6 - Emmanuel Vazquez -Shadowlands /\xA0
7 - Marc (AR) - Space Between Us (SALAZAR (COL) Remix) /\xA0
8 - Sparks,Gorog Moroder,Trisco,Russell Mael - Musak (Dj Bird Unofficial Remix) /\xA0
9 - Jimi Jules - My City's On Fire (Club Edit) /\xA0
10 - GHEIST - Home Again Radau / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"56K",fecha:"2021-12-18",link:"https://mcdn.podbean.com/mf/download/cvjd5q/554-HernanCattaneo-2021-12-18.mp3",tracklist:`Sigur Ros - Saeglopur (Apocrypha Private Mix) /
Jano Gil - Beyond The Earthly /
Billie Eilish - Not My Responsibility (Antrim Remix) /
Jim Rivers - Orchidaceae /
Makebo & Amonita - Matangi /
Emmanuel Vazquez -Shadowlands /
Marc (AR) - Space Between Us (SALAZAR (COL) Remix) /
Sparks,Gorog Moroder,Trisco,Russell Mael - Musak (Dj Bird Unofficial Remix) /
Jimi Jules - My City's On Fire (Club Edit) /`},{episodio:"555",titulo:"Resident / Episode 555 / Dec 25 2021",descripcion:`1 - Mass Digital - Someone Like You /\xA0
2 - Isaac Differding - Spirit /\xA0
3 - Nicolas Rada - Alter Ego /\xA0
4 - Arodes - The Beginning /\xA0
5 - Kamilo Sanclemente & Carol Brown - Spirals Inflections (Simply City Remix) /\xA0
6 - Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /\xA0
7 - Moscoman & Komilev Feat. Eleonora - Lost In The Sun /\xA0
8 - Elfenberg - Lilla Lila Liv /\xA0
9 - Clarity (Baunder remix) /\xA0
10 - Anderholm - Let Me In feat Richard Walters (EANP Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"56.7K",fecha:"2021-12-25",link:"https://mcdn.podbean.com/mf/download/e7u6xp/555-HernanCattaneo-2021-12-25.mp3",tracklist:`Mass Digital - Someone Like You /
Isaac Differding - Spirit /
Nicolas Rada - Alter Ego /
Arodes - The Beginning /
Kamilo Sanclemente & Carol Brown - Spirals Inflections (Simply City Remix) /
Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /
Moscoman & Komilev Feat. Eleonora - Lost In The Sun /
Elfenberg - Lilla Lila Liv /
Clarity (Baunder remix) /`},{episodio:"556",titulo:"Resident / Episode 556 / Jan 01 2022",descripcion:`1 - Gonzalo Sacc Franco Leonardini - Lonely /\xA0
2 - Wassu Djimboh - Saru /\xA0
3 - Colou Befu, Ignacio Berardi - Sayonara (Alex Efe & Diego Berrondo Remix) /\xA0
4 - Paul Deep (AR) - Genbu /\xA0
5 - Kutiman - Inner galactic (Kutiman Mixes Fiverr) Eli Nissan Remix /\xA0
6 - Hector Cortes - Diatoms /\xA0
7 - Subandrio - Innocent Heart /\xA0
8 - Marsh - Free /\xA0
9 - Kamilo Sanclemente - Colonies /\xA0
10 - Vince Watson - Holographic (Carl Craig's Ride Or Die Anthem) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"54.9K",fecha:"2022-01-01",link:"https://mcdn.podbean.com/mf/download/9hymm8/556-HernanCattaneo-2022-01-01.mp3",tracklist:`Gonzalo Sacc Franco Leonardini - Lonely /
Wassu Djimboh - Saru /
Colou Befu, Ignacio Berardi - Sayonara (Alex Efe & Diego Berrondo Remix) /
Paul Deep (AR) - Genbu /
Kutiman - Inner galactic (Kutiman Mixes Fiverr) Eli Nissan Remix /
Hector Cortes - Diatoms /
Subandrio - Innocent Heart /
Marsh - Free /
Kamilo Sanclemente - Colonies /`},{episodio:"557",titulo:"Resident / Episode 557 / Jan 08 2022",descripcion:`1 - Kabi (AR) - Down To Earth /\xA0
2 - Somelee - The Sign /\xA0
3 - Kevin Di Serna - Faro /\xA0
4 - Dimitri Nakov Limara- Day by Day /\xA0
5 - PALMFooD - Hiddel /\xA0
6 - Budakid - Tadacuma /\xA0
7 - Eze Colombo - Ascension (Menkee Remix) /\xA0
8 - Rina, Switchdance - Reak /\xA0
9 - Ivan Aliaga - Last Breath /\xA0
10 - HVOB - Bruise (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.8K",fecha:"2022-01-08",link:"https://mcdn.podbean.com/mf/download/rgbk2u/557-HernanCattaneo-2022-01-08.mp3",tracklist:`Kabi (AR) - Down To Earth /
Somelee - The Sign /
Kevin Di Serna - Faro /
Dimitri Nakov Limara- Day by Day /
PALMFooD - Hiddel /
Budakid - Tadacuma /
Eze Colombo - Ascension (Menkee Remix) /
Rina, Switchdance - Reak /
Ivan Aliaga - Last Breath /`},{episodio:"558",titulo:"Resident / Episode 558 / Jan 15 2022",descripcion:`1 - Balcazar, Ismaehl, Replicanth - Samsara /\xA0
2 - Mass Digital - Rain in June /\xA0
3 - Astor Piazzolla - Libertango (Apste Version) /\xA0
4 - Kamilo Sanclemente \xA0- Nowhere To Run feat Velveta /\xA0
5 - Talal - Always /\xA0
6 - Gardenstate, Hvitling & Yenzen - Synchole /\xA0
7 - Eric Lune - Desire (Dave Seaman Remix ) /\xA0
8 - Billie Eilish - No Time To Die (Antrim Remix) /\xA0
9 - BLANCAh - Terracotta /\xA0
10 - Agoria & Ni\xF1o de Elche - What if earth would turn faster (KAS:ST Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.3K",fecha:"2022-01-15",link:"https://mcdn.podbean.com/mf/download/u4hjnr/558-HernanCattaneo-2022-01-15.mp3",tracklist:`Balcazar, Ismaehl, Replicanth - Samsara /
Mass Digital - Rain in June /
Astor Piazzolla - Libertango (Apste Version) /
Kamilo Sanclemente \xA0- Nowhere To Run feat Velveta /
Talal - Always /
Gardenstate, Hvitling & Yenzen - Synchole /
Eric Lune - Desire (Dave Seaman Remix ) /
Billie Eilish - No Time To Die (Antrim Remix) /
BLANCAh - Terracotta /`},{episodio:"559",titulo:"Resident / Episode 559 / Jan 22 2022",descripcion:`1 - Larse - Drive /\xA0
2 - Devrient - Shea /\xA0
3 - Wassu - Self Awareness /\xA0
4 - Envotion - Adrift (Sebastian Sellares Remix) /\xA0
5 - Jonas Rathsman - Uno (Antrim Remix) /\xA0
6 - Dmitry Molosh - Proportion (Cid Inc. Remix) /\xA0
7 - Sainte Vie - Phantom /\xA0
8 - Luciano Scheffer - Sinceridade /\xA0
9 - Dmitry Molosh - Surface (Sebastian Sellares Remix) /\xA0
10 - Elderbrook - Inner Light (Barry Can't Swim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"54.1K",fecha:"2022-01-22",link:"https://mcdn.podbean.com/mf/download/y8uf3b/559-HernanCattaneo-2022-01-22.mp3",tracklist:`Larse - Drive /
Devrient - Shea /
Wassu - Self Awareness /
Envotion - Adrift (Sebastian Sellares Remix) /
Jonas Rathsman - Uno (Antrim Remix) /
Dmitry Molosh - Proportion (Cid Inc. Remix) /
Sainte Vie - Phantom /
Luciano Scheffer - Sinceridade /
Dmitry Molosh - Surface (Sebastian Sellares Remix) /`},{episodio:"560",titulo:"Resident / Episode 560 / Jan 29 2022",descripcion:`1 - David August - Ingrid (Alejo Gonzalez Mix) /\xA0
2 - Maximo Boskis, Adrian Font -Enigma /\xA0
3 - Weird Sounding Dude - Crossroads /\xA0
4 - Luciano Scheffer - Serra(Original Mix) /\xA0
5 - Nick Curly & Jansons - Go (Budakid Remix) /\xA0
6 - Temple Gate - Forgiving is Divine /\xA0
7 - Kasey Taylor & Chris Meehan - Simplicity (Gai Barone Remix) /\xA0
8 - Fabri Lopez - Struise /\xA0
9 - Kabi (AR) - Odisea /\xA0
10 - Mossia - Cabala (Kamilo Sanclemente rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"55.1K",fecha:"2022-01-29",link:"https://mcdn.podbean.com/mf/download/vgp9us/560-HernanCattaneo-2022-01-29.mp3",tracklist:`David August - Ingrid (Alejo Gonzalez Mix) /
Maximo Boskis, Adrian Font -Enigma /
Weird Sounding Dude - Crossroads /
Luciano Scheffer - Serra(Original Mix) /
Nick Curly & Jansons - Go (Budakid Remix) /
Temple Gate - Forgiving is Divine /
Kasey Taylor & Chris Meehan - Simplicity (Gai Barone Remix) /
Fabri Lopez - Struise /
Kabi (AR) - Odisea /`},{episodio:"561",titulo:"Resident / Episode 561 / Feb 05 2022",descripcion:`1 - Billie Elish - Your Power (Deepness & Dio S Unofficial Rework) /\xA0
2 - Volen Sentir - Oror /\xA0
3 - Black 8 - Bleeding Heart /\xA0
4 - Nolan & Luke Brancaccio - See The Stars (Extended Mix) /\xA0
5 - Raphael Mader - Catanya /\xA0
6 - Cocho - Immortal /\xA0
7 - SOEL & SANDHAUS - Red Light /\xA0
8 - \xD8ostil & Juan Hansen - Drown /\xA0
9 - Sebastien Leger - Pamparis /\xA0
10 - WestbamML 'Wasteland' ft. Inga Humpe (andhim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"55.8K",fecha:"2022-02-05",link:"https://mcdn.podbean.com/mf/download/7ffhtq/561-HernanCattaneo-2022-01-05.mp3",tracklist:`Billie Elish - Your Power (Deepness & Dio S Unofficial Rework) /
Volen Sentir - Oror /
Black 8 - Bleeding Heart /
Nolan & Luke Brancaccio - See The Stars (Extended Mix) /
Raphael Mader - Catanya /
Cocho - Immortal /
SOEL & SANDHAUS - Red Light /
\xD8ostil & Juan Hansen - Drown /
Sebastien Leger - Pamparis /`},{episodio:"562",titulo:"Resident / Episode 562 / Feb 12 2022",descripcion:`1 - Frankie M, Rodrigo Lapena, Gonzalo Sacc - My Home /\xA0
2 - Budakid - Phantonym /\xA0
3 - Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /\xA0
4 - Leila Scheiwe, Halaros feat Sarah Chilanti - Clio /\xA0
5 - Dancing for the answer - Nick Mulvey (Squire & Karcelen remix) /\xA0
6 - Franz Matthews - The Question ft. Jonathan Lehmann (Aera Remix) /\xA0
7 - Massive Attack - Girl i love you (Santo Adriano Reinterpretation) /\xA0
8 - Carmelo Prato - Blurry /\xA0
9 - kiosko 33hz - The Magic Garden /\xA0
10 - Nick Stoynoff - Dalbana (Vince Watson Retro Reshape) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"57K",fecha:"2022-02-12",link:"https://mcdn.podbean.com/mf/download/z6cc2b/562-HernanCattaneo-2022-02-12.mp3",tracklist:`Frankie M, Rodrigo Lapena, Gonzalo Sacc - My Home /
Budakid - Phantonym /
Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /
Leila Scheiwe, Halaros feat Sarah Chilanti - Clio /
Dancing for the answer - Nick Mulvey (Squire & Karcelen remix) /
Franz Matthews - The Question ft. Jonathan Lehmann (Aera Remix) /
Massive Attack - Girl i love you (Santo Adriano Reinterpretation) /
Carmelo Prato - Blurry /
kiosko 33hz - The Magic Garden /`},{episodio:"564",titulo:"Resident / Episode 564 / Feb 26 2022",descripcion:`1 - Chris Cargo - Corrado /\xA0
2 - Oneohtrix Point Never - Nothing's Special (Fabrice Mos Rework) /\xA0
3 - Olivier Weiter - Diversum /\xA0
4 - Applescal - Annie /\xA0
5 - Steve Lee - Love & Happiness (Steve's Balearic Mix) /\xA0
6 - Francesco Pico - Check This Out /\xA0
7 - Matthias Meyer - Touch Of Magic /\xA0
8 - Gorkiz - Intuition /\xA0
9 - Oliver Schories - Tempest (Rodriguez Jr. Remix) /\xA0
10 - Because of Art - Home / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"52.7K",fecha:"2022-02-26",link:"https://mcdn.podbean.com/mf/download/5yg7hp/564-HernanCattaneo-2022-02-26.mp3",tracklist:`Chris Cargo - Corrado /
Oneohtrix Point Never - Nothing's Special (Fabrice Mos Rework) /
Olivier Weiter - Diversum /
Applescal - Annie /
Steve Lee - Love & Happiness (Steve's Balearic Mix) /
Francesco Pico - Check This Out /
Matthias Meyer - Touch Of Magic /
Gorkiz - Intuition /
Oliver Schories - Tempest (Rodriguez Jr. Remix) /`},{episodio:"565",titulo:"Resident / Episode 565 / Mar 05 2022",descripcion:`1 - Maxi Degrassi - Prohibited Steps /\xA0
2 - Bross, Bodaishin Lupe Republic - Barcelona /\xA0
3 - Agustin Pengov - SEIA /\xA0
4 - Lio Q, Nicolas Leonelli - Perfect Love (Dabeat Remix) /\xA0
5 - Franz Matthews - The Question \xA0ft. Jonathan Lehmann (Milio's 7am Dub Mix) /\xA0
6 - Glowal - Even /\xA0
7 - Distant Fragment - Memory Rift Part 2 /\xA0
8 - Yumi Kobayashi - Tokiwa (Yudi Watanabe Remix) /\xA0
9 - K\xF6lsch & Dubfire - ULM /\xA0
10 - Logic1000 -I Won't Forget / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"53.9K",fecha:"2022-03-05",link:"https://mcdn.podbean.com/mf/download/grvcxt/565-HernanCattaneo-2022-03-05.mp3",tracklist:`Maxi Degrassi - Prohibited Steps /
Bross, Bodaishin Lupe Republic - Barcelona /
Agustin Pengov - SEIA /
Lio Q, Nicolas Leonelli - Perfect Love (Dabeat Remix) /
Franz Matthews - The Question \xA0ft. Jonathan Lehmann (Milio's 7am Dub Mix) /
Glowal - Even /
Distant Fragment - Memory Rift Part 2 /
Yumi Kobayashi - Tokiwa (Yudi Watanabe Remix) /
K\xF6lsch & Dubfire - ULM /`},{episodio:"566",titulo:"Resident / Episode 566 / Mar 12 2022",descripcion:`1 - Come Closer - Do You See This /\xA0
2 - Frankie M, Rodrigo Lapena, Gonzalo Sacc - Let Me Go (Juan Deminicis Remix) /\xA0
3 - Niceshot - Early Unlocked (Andrea Cassino Remix) /\xA0
4 - Dmitry Molosh - River Pond (Andrea Cassino Remix) /\xA0
5 - Robert Mason - Future Sins /\xA0
6 - EANP - Mutations (NOIYSE PROJECT Remix) /\xA0
7 - Into The Ether & Lewyn - Never A Sunday /\xA0
8 - Essco - Rabbit Hole (Ivanshee Remix) /\xA0
9 - Vegas - Endometriosis - (NOIYSE PROJECT REMIX) /\xA0
10 - Coll\xE8 - Solid Feat. Domien (Sasha Carassi Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"57.3K",fecha:"2022-03-12",link:"https://mcdn.podbean.com/mf/download/5kx6x7/566-HernanCattaneo-2022-03-12.mp3",tracklist:`Come Closer - Do You See This /
Frankie M, Rodrigo Lapena, Gonzalo Sacc - Let Me Go (Juan Deminicis Remix) /
Niceshot - Early Unlocked (Andrea Cassino Remix) /
Dmitry Molosh - River Pond (Andrea Cassino Remix) /
Robert Mason - Future Sins /
EANP - Mutations (NOIYSE PROJECT Remix) /
Into The Ether & Lewyn - Never A Sunday /
Essco - Rabbit Hole (Ivanshee Remix) /
Vegas - Endometriosis - (NOIYSE PROJECT REMIX) /`},{episodio:"567",titulo:"Resident / Episode 567 / Mar 19 2022",descripcion:`1 - Kevin Di Serna - Sol A Vana /\xA0
2 - Beije - Candescence (Alex Efe Remix) /\xA0
3 - Chris Cargo - Aurora /\xA0
4 - Frannz ft Coco - Turn Around (Govinda Remix) /\xA0
5 - Green Thumb vs. JV \u2013 Grand Theft Vinyl (Diego Berrondo Bootleg) /\xA0
6 - Xero (Marcus Worgull Remix) /\xA0
7 - Juan Iba\xF1ez & Agustin Ficarra - Diggs /\xA0
8 - Gabriel Borgo - L'evit-AR (Maximo Gambini & Q.A.T Remix) /\xA0
9 - Gabriel Rocha, Demian Muller - Capitan Of My Heart /\xA0
10 - Bonobo - Age Of Phase (Antrim Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"48.9K",fecha:"2022-03-19",link:"https://mcdn.podbean.com/mf/download/bqphr7/567-HernanCattaneo-2022-03-19.mp3",tracklist:`Kevin Di Serna - Sol A Vana /
Beije - Candescence (Alex Efe Remix) /
Chris Cargo - Aurora /
Frannz ft Coco - Turn Around (Govinda Remix) /
Green Thumb vs. JV \u2013 Grand Theft Vinyl (Diego Berrondo Bootleg) /
Xero (Marcus Worgull Remix) /
Juan Iba\xF1ez & Agustin Ficarra - Diggs /
Gabriel Borgo - L'evit-AR (Maximo Gambini & Q.A.T Remix) /
Gabriel Rocha, Demian Muller - Capitan Of My Heart /`},{episodio:"568",titulo:"Resident / Episode 568 / Mar 26 2022",descripcion:`1 - Steve Kelley - Paradise /\xA0
2 - Andres Moris - Into The Light (Aman Anand Remix) /\xA0
3 - Gaston Sosa, Poli Siufi - Volemos Alto /\xA0
4 - Alex Efe & Diego Berrondo - Distance /\xA0
5 - LOM - Secret River /\xA0
6 - Dole & Kom - Plenty Of Nothing (Olivier Weiter Remix) /\xA0
7 - Robert Babicz - Space Funk (Timo Maas Remix) /\xA0
8 - Juan Beldarrein - Viaje A Venus (Fabri Lopez Remix) /\xA0
9 - Noiyse Project & Shannon Davin - Running Mavka /\xA0
10 - Jonas Rathsman - Heartbeat / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"53.7K",fecha:"2022-03-26",link:"https://mcdn.podbean.com/mf/download/yzgfxb/568-HernanCattaneo-2022-03-26.mp3",tracklist:`Steve Kelley - Paradise /
Andres Moris - Into The Light (Aman Anand Remix) /
Gaston Sosa, Poli Siufi - Volemos Alto /
Alex Efe & Diego Berrondo - Distance /
LOM - Secret River /
Dole & Kom - Plenty Of Nothing (Olivier Weiter Remix) /
Robert Babicz - Space Funk (Timo Maas Remix) /
Juan Beldarrein - Viaje A Venus (Fabri Lopez Remix) /
Noiyse Project & Shannon Davin - Running Mavka /`},{episodio:"569",titulo:"Resident / Episode 569 / Apr 02 2022",descripcion:`1 - RY X - Thunder (Rocio Portillo Unofficial Remix) /\xA0
2 - Ananda Project - Cascades Of Colour (Balcazar edit) /\xA0
3 - Kora - Tango /\xA0
4 - Gus Gus - Airwaves (Paul Deep, Larrosa & Gardoqui Remix) /\xA0
5 - Jamie Stevens, Garance - Heavy Hearts /\xA0
6 - JFR - Kira /\xA0
7 - Miss Melera - Violet /\xA0
8 - H.Haze - Soledad Feat. Ghost Isle - (Henry Saiz Remix) /\xA0
9 - Sasha v Photek - Aviator 2022 /\xA0
10 - Depeche Mode - Policy Of Truth (Framewer Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"57.9K",fecha:"2022-04-02",link:"https://mcdn.podbean.com/mf/download/48qavp/569-HernanCattaneo-2022-04-02.mp3",tracklist:`RY X - Thunder (Rocio Portillo Unofficial Remix) /
Ananda Project - Cascades Of Colour (Balcazar edit) /
Kora - Tango /
Gus Gus - Airwaves (Paul Deep, Larrosa & Gardoqui Remix) /
Jamie Stevens, Garance - Heavy Hearts /
JFR - Kira /
Miss Melera - Violet /
H.Haze - Soledad Feat. Ghost Isle - (Henry Saiz Remix) /
Sasha v Photek - Aviator 2022 /`},{episodio:"570",titulo:"Resident / Episode 570 / Apr 09 2022",descripcion:`1 - Larrosa & Gardoqui - If you love me (Simply City Stereo Interpretation) /
2 - Kandar, Morning Delusions - Mar del Plata (Luciano Scheffer Remix) /\xA0
3 - Cancci - Sereno (Dilby's Floorplay Remix) /\xA0
4 - Dark Soul Project - Indigo (Freedo Mosho Remix)
5 - Sebastian Busto - Rainbow /\xA0
6 - Armandhe, Leo Guerrero - Efimero /\xA0
7 - Nicky Elisabeth - Into Your Arms /\xA0
8 - Reset Robot - Only Light Escapes /\xA0
9 - VONDA7 - Arrivals Cornelius /\xA0
10 - Royksopp, Beki Mari - This Time, This Place... (feat. Beki Mari) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"53.6K",fecha:"2022-04-09",link:"https://mcdn.podbean.com/mf/download/vubw43/570-HernanCattaneo-2022-04-09.mp3",tracklist:`Larrosa & Gardoqui - If you love me (Simply City Stereo Interpretation) /
Kandar, Morning Delusions - Mar del Plata (Luciano Scheffer Remix) /
Cancci - Sereno (Dilby's Floorplay Remix) /
Dark Soul Project - Indigo (Freedo Mosho Remix)
Sebastian Busto - Rainbow /
Armandhe, Leo Guerrero - Efimero /
Nicky Elisabeth - Into Your Arms /
Reset Robot - Only Light Escapes /
VONDA7 - Arrivals Cornelius /`},{episodio:"571",titulo:"Resident / Episode 571 / Apr 16 2022",descripcion:`1 - Sebastian Sellares - Afterglow /\xA0
2 - NTO (FR) - Loving You Like Always feat. Tricky (Rodriguez Jr. Remix) /\xA0
3 - Booka Shade - Soulkeeper /\xA0
4 - Coll\xE9 - Losing Time (Murat Uncuoglu Remix) /\xA0
5 - Satoshi Fumi - The Trail of \xA0Light /\xA0
6 - Arnold T & Alain Pauwels - A Light Exists /\xA0
7 - Golan Zocher & Choopie - Shades Of Love (Hobin Rude Remix) /\xA0
8 - Berni Turletti - Prana Vayu /\xA0
9 - Acid Pauli - No Kick No Cry (DJ Tennis Remix) /\xA0
10 - Avidus - Relief / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"51.8K",fecha:"2022-04-16",link:"https://mcdn.podbean.com/mf/download/3g3t5n/571-HernanCattaneo-2022-04-16.mp3",tracklist:`Sebastian Sellares - Afterglow /
NTO (FR) - Loving You Like Always feat. Tricky (Rodriguez Jr. Remix) /
Booka Shade - Soulkeeper /
Coll\xE9 - Losing Time (Murat Uncuoglu Remix) /
Satoshi Fumi - The Trail of \xA0Light /
Arnold T & Alain Pauwels - A Light Exists /
Golan Zocher & Choopie - Shades Of Love (Hobin Rude Remix) /
Berni Turletti - Prana Vayu /
Acid Pauli - No Kick No Cry (DJ Tennis Remix) /`},{episodio:"572",titulo:"Resident / Episode 572 / Apr 23 2022",descripcion:`1 - Claudia Vargas - Children Say /\xA0
2 - Berni Turletti - Samana /\xA0
3 - Ezequiel Arias - Esperanza /\xA0
4 - Fabio Vanore feat. Jeppe Kjellberg - Caravan (Lake People Remix) /\xA0
5 - Fur Coat, Alfa Romero - Antigone's Dream /\xA0
6 - Anatolian - Fluffy Clouds /\xA0
7 - Astral Projection - People Can Fly (Chaim Rework) /\xA0
8 - Soul Of Zoo - Horizon (Hicky & Kalo Remix) /\xA0
9 - Clyve - Circles in the Sand /\xA0
10 - Subnode - End To Begin (Yudi Watanabe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"54.2K",fecha:"2022-04-23",link:"https://mcdn.podbean.com/mf/download/rw9hmh/572-HernanCattaneo-2022-04-23.mp3",tracklist:`Claudia Vargas - Children Say /
Berni Turletti - Samana /
Ezequiel Arias - Esperanza /
Fabio Vanore feat. Jeppe Kjellberg - Caravan (Lake People Remix) /
Fur Coat, Alfa Romero - Antigone's Dream /
Anatolian - Fluffy Clouds /
Astral Projection - People Can Fly (Chaim Rework) /
Soul Of Zoo - Horizon (Hicky & Kalo Remix) /
Clyve - Circles in the Sand /`},{episodio:"574",titulo:"Resident / Episode 574 / May 07 2022",descripcion:`1 - Uccelli - No more war /\xA0
2 - Nick Varon - Conclusions /\xA0
3 - Simos Tagias - Euphoria (Paul Deep Remix) /\xA0
4 - Facundo Mart\xEDn - Nashira /\xA0
5 - GMJ & Dimuth K - Convergence /\xA0
6 - Hobin Rude - It Was And It Will Be /\xA0
7 - Anton Stelsi - Close Your Eyes (Dmitry Molosh Remix) /\xA0
8 - Golan Zocher - Zoom Out /\xA0
9 - Hyunji Lee - Exploration /\xA0
10 - Yoni - A Better Place In Heaven (Alex O'Rion Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"53.1K",fecha:"2022-05-07",link:"https://mcdn.podbean.com/mf/download/qacezf/574-HernanCattaneo-2022-05-07.mp3",tracklist:`Uccelli - No more war /
Nick Varon - Conclusions /
Simos Tagias - Euphoria (Paul Deep Remix) /
Facundo Mart\xEDn - Nashira /
GMJ & Dimuth K - Convergence /
Hobin Rude - It Was And It Will Be /
Anton Stelsi - Close Your Eyes (Dmitry Molosh Remix) /
Golan Zocher - Zoom Out /
Hyunji Lee - Exploration /`},{episodio:"575",titulo:"Resident / Episode 575 / May 14 2022",descripcion:`1 - B.P.T. feat.DM Binxter - Moody (PAUL (AR)) /\xA0
2 - Husa & Zeyada - On My Own (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
3 - Integral Bread - Ready To Born (simos tagias remix) /\xA0
4 - Hayden James Cassian Elderbrook - On Your Own (Fort Romeau Remix) /\xA0
5 - Abity - Lotus /\xA0
6 - Goraieb e Luciano Scheffer - Endless Symphony - Noiyse Project Remix /\xA0
7 - Belms _ VeeQue - Western Clouds (Abel Meyer Mix) /\xA0
8 - VegaZ-SL - Endometriosis (NOIYSE-PROJECT-Remix) /\xA0
9 - Fulltone - Kairo /\xA0
10 - Yotam Avni - Here We Are Again / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"56.8K",fecha:"2022-05-14",link:"https://mcdn.podbean.com/mf/download/g7vbnk/575-HernanCattaneo-2022-05-14.mp3",tracklist:`B.P.T. feat.DM Binxter - Moody (PAUL (AR)) /
Husa & Zeyada - On My Own (Hernan Cattaneo & Marcelo Vasami Remix) /
Integral Bread - Ready To Born (simos tagias remix) /
Hayden James Cassian Elderbrook - On Your Own (Fort Romeau Remix) /
Abity - Lotus /
Goraieb e Luciano Scheffer - Endless Symphony - Noiyse Project Remix /
Belms _ VeeQue - Western Clouds (Abel Meyer Mix) /
VegaZ-SL - Endometriosis (NOIYSE-PROJECT-Remix) /
Fulltone - Kairo /`},{episodio:"576",titulo:"Resident / Episode 576 / May 21 2022",descripcion:`1 - Roman Lieske, Namsela - Isolate (Diego Berrondo Bootleg) /\xA0
2 - Jelly For The Babies, Ignacio Corazza - My Heart Is Heavy (Weird Sounding Dude Remix) /\xA0
3 - Hector Cortes - Bootcamp /\xA0
4 - Rob Hes & Steve Slight \xA0- Dub Track /\xA0
5 - Sleepy & Boo Lucent /\xA0
6 - NOIYSE PROJECT - remember me /\xA0
7 - Miss Melera - Marble /\xA0
8 - Joan Retamero - The Sunstar /\xA0
9 - Nila - Momentum /\xA0
10 - Budakid & Nordfold - United / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"53.9K",fecha:"2022-05-21",link:"https://mcdn.podbean.com/mf/download/ag8fss/576-HernanCattaneo-2022-05-21.mp3",tracklist:`Roman Lieske, Namsela - Isolate (Diego Berrondo Bootleg) /
Jelly For The Babies, Ignacio Corazza - My Heart Is Heavy (Weird Sounding Dude Remix) /
Hector Cortes - Bootcamp /
Rob Hes & Steve Slight \xA0- Dub Track /
Sleepy & Boo Lucent /
NOIYSE PROJECT - remember me /
Miss Melera - Marble /
Joan Retamero - The Sunstar /
Nila - Momentum /`},{episodio:"577",titulo:"Resident / Episode 577 / May 28 2022",descripcion:`1 - Ewan Rill & Casper - Self-Searcher /\xA0
2 - Christopher Erre & Ivan Aliaga - Delusion /\xA0
3 - Lost Desert Lee Burridge - Bloemenvelden /\xA0
4 - Lucas Patyn - Like a Voice (SALAZAR COL Remix) /\xA0
5 - Johannes Brecht - Voicing Something feat. Luke Marzec (Adriatique Remix) /\xA0
6 - Lexer - Niscaya /\xA0
7 - Brett Kelso - Mothership /\xA0
8 - Hobin Rude - Umbra /\xA0
9 - Revival Agents - Divine Inside (Dmitry Molosh Remix) /\xA0
10 - Sasha & Alex Banks - Australia / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"51.8K",fecha:"2022-05-28",link:"https://mcdn.podbean.com/mf/download/bfqtsz/577-HernanCattaneo-2022-05-28.mp3",tracklist:`Ewan Rill & Casper - Self-Searcher /
Christopher Erre & Ivan Aliaga - Delusion /
Lost Desert Lee Burridge - Bloemenvelden /
Lucas Patyn - Like a Voice (SALAZAR COL Remix) /
Johannes Brecht - Voicing Something feat. Luke Marzec (Adriatique Remix) /
Lexer - Niscaya /
Brett Kelso - Mothership /
Hobin Rude - Umbra /
Revival Agents - Divine Inside (Dmitry Molosh Remix) /`},{episodio:"578",titulo:"Resident / Episode 578 / Jun 04 2022",descripcion:`1 - Rich Curtis - Square Root (Alex O'Rion Remix) /\xA0
2 - DJ Koze, Sophia Kennedy - Drone Me Up, Flashy (&ME Remix) /\xA0
3 - Yeah But No & Ivory - Keep Running (Ivory's Euphoria Mix) /\xA0
4 - Andre Moret - Simply Way (Freedo Mosho Remix) /\xA0
5 - Hidden Empire - Comoja /\xA0
6 - Blaush ft. Running Pine - Tauri (Hunter Game Remix) /\xA0
7 - James Harcourt - Signalsv
8 - Catz 'n Dogz - U /\xA0
9 - Sebastian Sellares - The Blitz /\xA0
10 - Sebastien Leger, Tim Green - Duel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"52.9K",fecha:"2022-06-04",link:"https://mcdn.podbean.com/mf/download/pesn6u/578-HernanCattaneo-2022-06-04.mp3",tracklist:`Rich Curtis - Square Root (Alex O'Rion Remix) /
DJ Koze, Sophia Kennedy - Drone Me Up, Flashy (&ME Remix) /
Yeah But No & Ivory - Keep Running (Ivory's Euphoria Mix) /
Andre Moret - Simply Way (Freedo Mosho Remix) /
Hidden Empire - Comoja /
Blaush ft. Running Pine - Tauri (Hunter Game Remix) /
James Harcourt - Signalsv
Catz 'n Dogz - U /
Sebastian Sellares - The Blitz /`},{episodio:"579",titulo:"Resident / Episode 579 / Jun 11 2022",descripcion:`1 - Paul Lennar Ft Alium - Arisen Earlier /\xA0
2 - Federico Monachesi - Zagros /\xA0
3 - Revival Agents - Cosmic Spirals (Dmitry Molosh Remix) /\xA0
4 - NOIYSE PROJECT - onism /\xA0
5 - Cubicolor - Lose Your Senses /\xA0
6 - Lilla Stov Julie Anne Wolken - ID /\xA0
7 - Ramiro Drisdale - Aluvi\xF3n /\xA0
8 - Nacho Varela & Cruz Vittor - Respawn /\xA0
9 - Hakan Ozurun - Purple Void (Oliver & Tom Remix) /\xA0
10 - Hernan Cattaneo & Mercurio - A380 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"54.9K",fecha:"2022-06-11",link:"https://mcdn.podbean.com/mf/download/ytxm93/579-HernanCattaneo-2022-06-11.mp3",tracklist:`Paul Lennar Ft Alium - Arisen Earlier /
Federico Monachesi - Zagros /
Revival Agents - Cosmic Spirals (Dmitry Molosh Remix) /
NOIYSE PROJECT - onism /
Cubicolor - Lose Your Senses /
Lilla Stov Julie Anne Wolken - ID /
Ramiro Drisdale - Aluvi\xF3n /
Nacho Varela & Cruz Vittor - Respawn /
Hakan Ozurun - Purple Void (Oliver & Tom Remix) /`},{episodio:"580",titulo:"Resident / Episode 580 / Jun 18 2022",descripcion:`1 - Atish & Vridian - Touch & Go /\xA0
2 - Apste - Mars /\xA0
3 - Sebastian Sellares - Elements of Nature /\xA0
4 - Yotto - The Valley /\xA0
5 - EANP - Armonyzer /\xA0
6 - Oliver & Tom - Nerea /\xA0
7 - Bongani - Cherry Blossom /\xA0
8 - James Organ - Alt Believe /\xA0
9 - Richie Blacker - Unified /\xA0
10 - R\xDCF\xDCS DU SOL - On My Knees (Cassian Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"52K",fecha:"2022-06-18",link:"https://mcdn.podbean.com/mf/download/ek7mmy/580-HernanCattaneo-2022-06-18.mp3",tracklist:`Atish & Vridian - Touch & Go /
Apste - Mars /
Sebastian Sellares - Elements of Nature /
Yotto - The Valley /
EANP - Armonyzer /
Oliver & Tom - Nerea /
Bongani - Cherry Blossom /
James Organ - Alt Believe /
Richie Blacker - Unified /`},{episodio:"581",titulo:"Resident / Episode 581 / Jun 25 2022",descripcion:`1 - Scippo - Whales (Fabri Lopez Remix) /\xA0
2 - Federico Monachesi - Emerald Lake /\xA0
3 - Valeria Petz - Meraki /\xA0
4 - Hicky & Kalo - Luminous Path /\xA0
5 - Nopi - Where to Go (Eric Lune Remix) /\xA0
6 - Steve Parry - 303 V (Framewerk Remix) /\xA0
7 - Nicolas Rada feat. Eleonora - Higher Space /\xA0
8 - Jochem Hamerling - Stretch Mark (Callecat Remix) /\xA0
9 - Antrim - Rescue /\xA0
10 - Burial - Old Tape (Nick Stoynoff's Summer Bootleg / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"55K",fecha:"2022-06-25",link:"https://mcdn.podbean.com/mf/download/ki48jh/581-HernanCattaneo-2022-06-25.mp3",tracklist:`Scippo - Whales (Fabri Lopez Remix) /
Federico Monachesi - Emerald Lake /
Valeria Petz - Meraki /
Hicky & Kalo - Luminous Path /
Nopi - Where to Go (Eric Lune Remix) /
Steve Parry - 303 V (Framewerk Remix) /
Nicolas Rada feat. Eleonora - Higher Space /
Jochem Hamerling - Stretch Mark (Callecat Remix) /
Antrim - Rescue /`},{episodio:"582",titulo:"Resident / Episode 582 / Jul 02 2022",descripcion:`1 - Hidden Empire - Comoja /\xA0
2 - Andy Arias - En un cumple /\xA0
3 - Undercatt - Arcade /\xA0
4 - Will DeKeizer - Sapphire /\xA0
5 - James Harcourt Signals /\xA0
6 - Blaush ft. Running Pine - Tauri (Hunter Game Remix) /\xA0
7 - Danny Bonnici, Dave Norris - Journey to Arion (Ruben Karapetyan Remix) /\xA0
8 - Brigado Crew & Ubbah /\xA0
9 - Andre Moret - Simply Way (Freedo Mosho Remix) /\xA0
10 - Antrim - Dawn In Port / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"51.9K",fecha:"2022-07-02",link:"https://mcdn.podbean.com/mf/download/kkpyjk/582-HernanCattaneo-2022-07-02.mp3",tracklist:`Hidden Empire - Comoja /
Andy Arias - En un cumple /
Undercatt - Arcade /
Will DeKeizer - Sapphire /
James Harcourt Signals /
Blaush ft. Running Pine - Tauri (Hunter Game Remix) /
Danny Bonnici, Dave Norris - Journey to Arion (Ruben Karapetyan Remix) /
Brigado Crew & Ubbah /
Andre Moret - Simply Way (Freedo Mosho Remix) /`},{episodio:"584",titulo:"Resident / Episode 584 / Jul 16 2022",descripcion:`1 - Ric Niels - Ikiga /\xA0
2 - Hassan & Rdo - Cruz Del Sur /\xA0
3 - Audion - Dem Howl (John Cosani & Federico Tschirch Edit) /\xA0
4 - Sebastian Sellares - Melomaniac /\xA0
5 - Amir Telem - Goloka (Ruben Karapetyan Remix) /\xA0
6 - Antrim - Gamble /\xA0
7 - John Cosani - Fun Colorz /\xA0
8 - Artche - Indigo /\xA0
9 - Verlk - No it Ain\u2019t /\xA0
10 - Agents Of Time - Interstellar Cowboy (Gui Boratto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"59.8K",fecha:"2022-07-16",link:"https://mcdn.podbean.com/mf/download/yy6pve/584-HernanCattaneo-2022-07-16.mp3",tracklist:`Ric Niels - Ikiga /
Hassan & Rdo - Cruz Del Sur /
Audion - Dem Howl (John Cosani & Federico Tschirch Edit) /
Sebastian Sellares - Melomaniac /
Amir Telem - Goloka (Ruben Karapetyan Remix) /
Antrim - Gamble /
John Cosani - Fun Colorz /
Artche - Indigo /
Verlk - No it Ain\u2019t /`},{episodio:"585",titulo:"Resident / Episode 585 / Jul 23 2022",descripcion:`1 - Matiramic - Masai /\xA0
2 - Enamour - Ergot /\xA0
3 - C.Vogt - Made In Macao (Powel Remix) /\xA0
4 - Figueras - Crystal Clear /\xA0
5 - Dmitry Molosh - Resistance /\xA0
6 - Monolink - Otherside (Fideles Extended Mix) /\xA0
7 - Michael Hooker - Skreeching Corruptor (Dabeat , Kamilo Sanclemente remix) /\xA0
8 - Ric Niels & George Alhabel - Mentalism (EANP 'The Future' Remix) /\xA0
9 - Tiefstone & Ric Niels - Abby /\xA0
10 - BOg - Underwater (Hernan Cattaneo & Marcelo Vasami Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"59K",fecha:"2022-07-23",link:"https://mcdn.podbean.com/mf/download/i3tb9f/585-HernanCattaneo-2022-07-23.mp3",tracklist:`Matiramic - Masai /
Enamour - Ergot /
C.Vogt - Made In Macao (Powel Remix) /
Figueras - Crystal Clear /
Dmitry Molosh - Resistance /
Monolink - Otherside (Fideles Extended Mix) /
Michael Hooker - Skreeching Corruptor (Dabeat , Kamilo Sanclemente remix) /
Ric Niels & George Alhabel - Mentalism (EANP 'The Future' Remix) /
Tiefstone & Ric Niels - Abby /`},{episodio:"586",titulo:"Resident / Episode 586 / Jul 30 2022",descripcion:`1 - Royksopp - This Time, This Place (Henry Saiz Darktrip Remix) /\xA0
2 - Forty Cats - Forest Beast (Berni Turletti Remix) /\xA0
3 - Husa & Zeyada - Make it Hot (Miyagi Remix) /\xA0
4 - Joe Lewandowski - Naturale (Kasper Bj\xF8rke Transcendentale Version) /\xA0
5 - Deadset Mess - Hall (Re work wip mix) /\xA0
6 - mOat - Buggin' Out (Rodriguez Jr. Extended Remix) /\xA0
7 - Clyve - Eternal Waves /\xA0
8 - Slacker - When I was a Child(Micah's High Plains Listeners Bottleg /\xA0
9 - Satoshi Fumi - Prayer (Nick Warren & Nicolas Rada Remix) /\xA0
10 - MOL\xD8 - Bennebol (Powel Remix) /\xA0
11 - Humate - Love Stimulation (Framewerk Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"58.3K",fecha:"2022-07-30",link:"https://mcdn.podbean.com/mf/download/wgcuty/586-HernanCattaneo-2022-07-30.mp3",tracklist:`Royksopp - This Time, This Place (Henry Saiz Darktrip Remix) /
Forty Cats - Forest Beast (Berni Turletti Remix) /
Husa & Zeyada - Make it Hot (Miyagi Remix) /
Joe Lewandowski - Naturale (Kasper Bj\xF8rke Transcendentale Version) /
Deadset Mess - Hall (Re work wip mix) /
mOat - Buggin' Out (Rodriguez Jr. Extended Remix) /
Clyve - Eternal Waves /
Slacker - When I was a Child(Micah's High Plains Listeners Bottleg /
Satoshi Fumi - Prayer (Nick Warren & Nicolas Rada Remix) /
MOL\xD8 - Bennebol (Powel Remix) /`},{episodio:"587",titulo:"Resident / Episode 587 / Aug 06 2022",descripcion:`1 - Billka - Reflections /\xA0
2 - TheArchitech, Juan Vasquez- CABALLITO /\xA0
3 - Propellar - Come Around (Diamond Dealer's Northern Exposure Remix) /\xA0
4 - Pico Bussoli - Deep Thoughts /\xA0
5 - Flowers And Sea Creatures, David Granha - Better Tomorrow (David Granha Remix) /\xA0
6 - Quivver - Traces /\xA0
7 - Royksopp - How The Flowers Grow ft. Pixx (Rodriguez Jr. Remix) /\xA0
8 - Joe Mattei & Danny Bonnici - Underpass (Jamie Stevens Remix) /\xA0
9 - Kasey Taylor Feat. Amega - Impressions (Doppel remix) /\xA0
10 - R\xDCF\xDCS DU SOL - On My Knees (Adriatique Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"57.7K",fecha:"2022-08-06",link:"https://mcdn.podbean.com/mf/download/6imec5/587-HernanCattaneo-2022-08-06.mp3",tracklist:`Billka - Reflections /
TheArchitech, Juan Vasquez- CABALLITO /
Propellar - Come Around (Diamond Dealer's Northern Exposure Remix) /
Pico Bussoli - Deep Thoughts /
Flowers And Sea Creatures, David Granha - Better Tomorrow (David Granha Remix) /
Quivver - Traces /
Royksopp - How The Flowers Grow ft. Pixx (Rodriguez Jr. Remix) /
Joe Mattei & Danny Bonnici - Underpass (Jamie Stevens Remix) /
Kasey Taylor Feat. Amega - Impressions (Doppel remix) /`},{episodio:"588",titulo:"Resident / Episode 588 / Aug 13 2022",descripcion:`1 - Ruh (SE) - A Bubbles Dream /\xA0
2 - Home - Edith Whiskers (EANP Unofficial Remix) /\xA0
3 - Mike Hiratzka - Falling back to you [Twilo 5AM mix] /\xA0
4 - Aurel den Bossa & Ias Ferndale - Sunday Afternoon (Matias Chilano Remix) /\xA0
5 - Howling - Lover (Jennifer Cardini & Damon Jee Remix) /\xA0
6 - Eric Lune - Embers (Ric Niels Remix) /\xA0
7 - UNDERWORLD - Juanita 2022 (PAUL (AR) unofficial remix) /\xA0
8 - DJ Linus - Treble in Paradise (Marcelo Vasami Remix) /\xA0
9 - Jamie Stevens & GMJ - Becoming /\xA0
10 - Radiohead - Pyramid Song (Fran Bux & Christopher Erre Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"56.9K",fecha:"2022-08-13",link:"https://mcdn.podbean.com/mf/download/qptdf5/588-HernanCattaneo-2022-08-13.mp3",tracklist:`Ruh (SE) - A Bubbles Dream /
Home - Edith Whiskers (EANP Unofficial Remix) /
Mike Hiratzka - Falling back to you [Twilo 5AM mix] /
Aurel den Bossa & Ias Ferndale - Sunday Afternoon (Matias Chilano Remix) /
Howling - Lover (Jennifer Cardini & Damon Jee Remix) /
Eric Lune - Embers (Ric Niels Remix) /
UNDERWORLD - Juanita 2022 (PAUL (AR) unofficial remix) /
DJ Linus - Treble in Paradise (Marcelo Vasami Remix) /
Jamie Stevens & GMJ - Becoming /`},{episodio:"589",titulo:"Resident / Episode 589 / Aug 20 2022",descripcion:`1 - Kabi (AR) - Self Reflection /\xA0
2 - Nahs & Nishan Lee ft. Sarah Chilanti - Two-faced /\xA0
3 - Hakan Ozurun Social Illusion Dimuth K Remix /\xA0
4 - Roc\xEDo Portillo, Valley ft Karim Sar Sar - Rise /\xA0
5 - Kevin Di Serna - Flight to Spoir /\xA0
6 - Sasha x Qrion - Dry and High /\xA0
7 - Avidus - Dawn (Edu Imbernon & Clemente \u2018Imbermind\u2019 Vision Mix) /\xA0
8 - Federico Fioretti (IT) - Hypnos /\xA0
9 - Antenant feat Kel - Cannot Play (Enzo Elia Rmx) /\xA0
10 - Audio Junkies - Librium Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"54.4K",fecha:"2022-08-20",link:"https://mcdn.podbean.com/mf/download/6fsd99/589-HernanCattaneo-2022-08-20.mp3",tracklist:`Kabi (AR) - Self Reflection /
Nahs & Nishan Lee ft. Sarah Chilanti - Two-faced /
Hakan Ozurun Social Illusion Dimuth K Remix /
Roc\xEDo Portillo, Valley ft Karim Sar Sar - Rise /
Kevin Di Serna - Flight to Spoir /
Sasha x Qrion - Dry and High /
Avidus - Dawn (Edu Imbernon & Clemente \u2018Imbermind\u2019 Vision Mix) /
Federico Fioretti (IT) - Hypnos /
Antenant feat Kel - Cannot Play (Enzo Elia Rmx) /`},{episodio:"590",titulo:"Resident / Episode 590 / Aug 27 2022",descripcion:`1 - Andre Moret - Ambit (Sebastian Sellares Remix)\xA0
2 - Nick Devon & Haffenfold - Spectra\xA0
3 - GMJ - Empty to Fill\xA0
4 - Matthias Meyer - Strangley Enough (Urmet K Remix)\xA0
5 - Colyn - KL427 \xA0
6 - Sant\xE9 & Re.You feat. Biishop - Road To Nowhere (Aether Remix)\xA0
7 - LAURENT GARNIER - Eiffel 11 - Fausto Messina\xA0
8 - Antrim Feat Juan Fandez - Hide And Seek\xA0
9 - DJ Linus - Treble In Paradies\xA0
10 - Hicky & Kalo - Outage Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"56.2K",fecha:"2022-08-27",link:"https://mcdn.podbean.com/mf/download/hscftt/590-HernanCattaneo-2022-08-27.mp3",tracklist:`Andre Moret - Ambit (Sebastian Sellares Remix)
Nick Devon & Haffenfold - Spectra
GMJ - Empty to Fill
Matthias Meyer - Strangley Enough (Urmet K Remix)
Colyn - KL427
Sant\xE9 & Re.You feat. Biishop - Road To Nowhere (Aether Remix)
LAURENT GARNIER - Eiffel 11 - Fausto Messina
Antrim Feat Juan Fandez - Hide And Seek
DJ Linus - Treble In Paradies`},{episodio:"591",titulo:"Resident / Episode 591 / Sep 03 2022",descripcion:`1 - Dublew, STEREO MUNK - Behind The Trees\xA0
2 - Dastan, Mustafa Ismaeel - Luft\xA0
3 - Alan Schultz - Marea\xA0
4 - Hector Cortes y Jaime Garza - The Space Between Us\xA0
5 - Fluida - Trailing Jade\xA0
6 - Steve Parry - Michelada (Freedo Mosho Remix)\xA0
7 - MATIRAMIC - Masai\xA0
8 - Innerphonic - Galactic Trip (Alto Astral Remix)\xA0
9 - Marino Canal - Inertia\xA0
10 - Aera feat. Aldebaran & Filippo Nardini - Alarms (Frankey & Sandrino Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57.5K",fecha:"2022-09-03",link:"https://mcdn.podbean.com/mf/download/gsmwd3/591-HernanCattaneo-2022-09-03.mp3",tracklist:`Dublew, STEREO MUNK - Behind The Trees
Dastan, Mustafa Ismaeel - Luft
Alan Schultz - Marea
Hector Cortes y Jaime Garza - The Space Between Us
Fluida - Trailing Jade
Steve Parry - Michelada (Freedo Mosho Remix)
MATIRAMIC - Masai
Innerphonic - Galactic Trip (Alto Astral Remix)
Marino Canal - Inertia`},{episodio:"592",titulo:"Resident / Episode 592 / Sep 10 2022",descripcion:`1 - Kovi - Affections /\xA0
2 - Armen Miran & Lost Desert - Don't Worry /\xA0
3 - EANP - Karim /\xA0
4 - Marcan Liav - Red Sanctuary (Emi Galvan Remix) /\xA0
5 - Christian Eyer & Joy Kitikonti - Falling For You (Tom Pooks Remix) /\xA0
6 - Perc - Allucination /\xA0
7 - Emok, Banel and Andrea Martini - Enlightment (Gai Barone Remix) /\xA0
8 - Moderat - Neon Rats & Numb Bell (Kevin Di Serna Club Mix) /\xA0
9 - Perfect Motion (Jody Barr Remix) /\xA0
10 - Yannis PK ft. Thom Yorke - No Surprises / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"56.5K",fecha:"2022-09-10",link:"https://mcdn.podbean.com/mf/download/xkbbs6/592-HernanCattaneo-2022-09-10.mp3",tracklist:`Kovi - Affections /
Armen Miran & Lost Desert - Don't Worry /
EANP - Karim /
Marcan Liav - Red Sanctuary (Emi Galvan Remix) /
Christian Eyer & Joy Kitikonti - Falling For You (Tom Pooks Remix) /
Perc - Allucination /
Emok, Banel and Andrea Martini - Enlightment (Gai Barone Remix) /
Moderat - Neon Rats & Numb Bell (Kevin Di Serna Club Mix) /
Perfect Motion (Jody Barr Remix) /`},{episodio:"594",titulo:"Resident / Episode 594 / Sep 24 2022",descripcion:`1 - RY X - Your \xA0Love (Frank Wiedemann Remix) /\xA0
2 - Gadi Mitrani - Awake /\xA0
3 - Jonathan Fratamico - Ecliptic /\xA0
4 - Eze Colombo, Sheism - Intimate Stories (Exe Cruz Remix) /\xA0
5 - Forty Cats - Forest Beast (Weird Sounding Dude Remix) /\xA0
6 - Andr\xE9s Moris - Manantial /\xA0
7 - Matter, Dowden - York /\xA0
8 - Mayro, Aaron Suiss - Ride /\xA0
9 - Noiyse Project - About to fly away /\xA0
10 - Paolo Mojo and Andy Padel - Kangiten 2022 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"56.3K",fecha:"2022-09-24",link:"https://mcdn.podbean.com/mf/download/xii824/594-HernanCattaneo-2022-09-24.mp3",tracklist:`RY X - Your \xA0Love (Frank Wiedemann Remix) /
Gadi Mitrani - Awake /
Jonathan Fratamico - Ecliptic /
Eze Colombo, Sheism - Intimate Stories (Exe Cruz Remix) /
Forty Cats - Forest Beast (Weird Sounding Dude Remix) /
Andr\xE9s Moris - Manantial /
Matter, Dowden - York /
Mayro, Aaron Suiss - Ride /
Noiyse Project - About to fly away /`},{episodio:"595",titulo:"Resident / Episode 595 / Oct 01 2022",descripcion:`1 - Martin Dubiansky - Sting And Grey /\xA0
2 - Forty Cats - Mutualism /\xA0
3 - Andr\xE9s Moris - Owen's Dream /\xA0
4 - Agustin Ficarra - Reset Life /\xA0
5 - Joaco Salerno - Moonlight (Alex Efe Remix) /\xA0
6 - Nick Muir - Lux Aeterna /\xA0
7 - Kabi (AR) - Dual /\xA0
8 - Surfface - Modernity /\xA0
9 - Audioglider - Depth Perception (RIGOONI Remix) /\xA0
10 - North Atlantic - Lights out (Marcelo Vasami rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"55.5K",fecha:"2022-10-01",link:"https://mcdn.podbean.com/mf/download/x5tx32/595-HernanCattaneo-2022-10-01.mp3",tracklist:`Martin Dubiansky - Sting And Grey /
Forty Cats - Mutualism /
Andr\xE9s Moris - Owen's Dream /
Agustin Ficarra - Reset Life /
Joaco Salerno - Moonlight (Alex Efe Remix) /
Nick Muir - Lux Aeterna /
Kabi (AR) - Dual /
Surfface - Modernity /
Audioglider - Depth Perception (RIGOONI Remix) /`},{episodio:"596",titulo:"Resident / Episode 596 / Oct 08 2022",descripcion:`1 - Dexter Crowe - Secret /\xA0
2 - Govinda - Everything Happens /\xA0
3 - Luciano Scheffer - Minguante /
4 - Federico Monachesi - Eternal Return (Diego Berrondo Remix) /\xA0
5 - Collew - Don't Push /\xA0
6 - Hunter Game - Beyond A-Dream /\xA0
7 - Jiminy Hop - Levera /\xA0
8 - Nikko.Z - Anatole (Sebastian Sellares Remix) /\xA0
9 - Dastan - The Mask (Weird Sounding Dude Remix) /
10 - Flow /Sasha - Xpander - Anthony Pappa Mashup / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"57.8K",fecha:"2022-10-08",link:"https://mcdn.podbean.com/mf/download/ch7iua/596-HernanCattaneo-2022-10-08.mp3",tracklist:`Dexter Crowe - Secret /
Govinda - Everything Happens /
Luciano Scheffer - Minguante /
Federico Monachesi - Eternal Return (Diego Berrondo Remix) /
Collew - Don't Push /
Hunter Game - Beyond A-Dream /
Jiminy Hop - Levera /
Nikko.Z - Anatole (Sebastian Sellares Remix) /
Dastan - The Mask (Weird Sounding Dude Remix) /`},{episodio:"597",titulo:"Resident / Episode 597 / Oct 15 2022",descripcion:`1 - Andre Moret - Ambit (Sebastian Sellares Remix) /\xA0
2 - AxeLara - Aglaia (Alex O'Rion Remix) /\xA0
3 - Santiago Luna - Out Of My Man (Indigo Man Remix) /\xA0
4 - Noiyse Project - Memories of the mountain city /\xA0
5 - Matthias Meyer \xA0-Strangely Enough (Guy Mantzur & Tamir Regev Remix) /\xA0
6 - James Beetham - Silicon (Golan Zocher Remix) /\xA0
7 - Will DeKeizer - Fools Gold /\xA0
8 - Anton Tumas - The Sky was Pink (Danny Bonnici remix) /\xA0
9 - Billka - Clouds /\xA0
10 - HK (Four Tet) - Only Human (Verlk Sunrise Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"59.7K",fecha:"2022-10-15",link:"https://mcdn.podbean.com/mf/download/43p97a/597-HernanCattaneo-2022-10-15.mp3",tracklist:`Andre Moret - Ambit (Sebastian Sellares Remix) /
AxeLara - Aglaia (Alex O'Rion Remix) /
Santiago Luna - Out Of My Man (Indigo Man Remix) /
Noiyse Project - Memories of the mountain city /
Matthias Meyer \xA0-Strangely Enough (Guy Mantzur & Tamir Regev Remix) /
James Beetham - Silicon (Golan Zocher Remix) /
Will DeKeizer - Fools Gold /
Anton Tumas - The Sky was Pink (Danny Bonnici remix) /
Billka - Clouds /`},{episodio:"598",titulo:"Resident / Episode 598 / Oct 22 2022",descripcion:`1 - Zone + - Doesnt matter /\xA0
2 - Subandrio - Thought In A Minute /\xA0
3 - Dublew & STEREO MUNK - Anakim (Sebastian Sellares Remix) /\xA0
4 - Mike Isai - Tunnel /\xA0
5 - TheArchitech & DABARNO - Paradise is the Sound /\xA0
6 - Gadi Mitrani - Robot with a Heart /\xA0
7 - Luis Damora - A Better Way (Forty Cats Remix) /\xA0
8 - Agustin Pietrocola - Sauvage (Fabri Lopez Remix) /\xA0
9 - Santi Cebrero - Requiem for a Dream /\xA0
10 - Sasha - Burnt Letters (Mastered) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"68.1K",fecha:"2022-10-22",link:"https://mcdn.podbean.com/mf/download/df6fix/598-HernanCattaneo-2022-10-22.mp3",tracklist:`Zone + - Doesnt matter /
Subandrio - Thought In A Minute /
Dublew & STEREO MUNK - Anakim (Sebastian Sellares Remix) /
Mike Isai - Tunnel /
TheArchitech & DABARNO - Paradise is the Sound /
Gadi Mitrani - Robot with a Heart /
Luis Damora - A Better Way (Forty Cats Remix) /
Agustin Pietrocola - Sauvage (Fabri Lopez Remix) /
Santi Cebrero - Requiem for a Dream /`},{episodio:"599",titulo:"Resident / Episode 599 / Oct 29 2022",descripcion:`Resident / Episode 599 / Oct 29 2022 1 - NHAR - Nocturne Oc\xE9anique /\xA0
2 - No\u0304pi - Mistake Forest /\xA0
3 - Facundo Mohrr, Maxi Degrassi - Be Mine /\xA0
4 - Julio Largente - Black Knight /\xA0
5 - Hassan Maroofi - Zoran /\xA0
6 - Sam Hopgood - The Fall (Nila Dark Remix) /\xA0
7 - Martin Dubiansky - Where Are You /\xA0
8 - Analog Jungs - Arun /\xA0
9 - Noiyse Project - Kalopsia /\xA0
10 - Sasha - Exploding Sun / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"51.3K",fecha:"2022-10-29",link:"https://mcdn.podbean.com/mf/download/hd2a9b/599-HernanCattaneo-2022-10-29.mp3",tracklist:`Resident / Episode 599 / Oct 29 2022 1 - NHAR - Nocturne Oc\xE9anique /
No\u0304pi - Mistake Forest /
Facundo Mohrr, Maxi Degrassi - Be Mine /
Julio Largente - Black Knight /
Hassan Maroofi - Zoran /
Sam Hopgood - The Fall (Nila Dark Remix) /
Martin Dubiansky - Where Are You /
Analog Jungs - Arun /
Noiyse Project - Kalopsia /`},{episodio:"600",titulo:"Resident / Episode 600 / Nov 05 2022",descripcion:"Recorded Live at Woodstock69 - July 2022 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"47",descargas:"94.3K",fecha:"2022-11-05",link:"https://mcdn.podbean.com/mf/download/x838qq/600-HernanCattaneo-2022-11-05.mp3"},{episodio:"601",titulo:"Resident / Episode 601 / Nov 12 2022",descripcion:`1 - Tim Green - Tears /\xA0
2 - East Cafe - Luna /\xA0
3 - Lio Q - Watanable /\xA0
4 - Hector Cortes \xA0& M - HEYY /\xA0
5 - DJ Zombi - 604 Diary (Hobin Rude Remix) /\xA0
6 - Shimai Valen \xA0- Carlos Gatto /\xA0
7 - David Podhel - In Time /\xA0
8 - Charlie Pec - Paradigm /\xA0
9 - Quivver - Tuliminate /\xA0
10 - WhoMadeWho & Rampa - Everyday (Jennifer Cardini Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"49.8K",fecha:"2022-11-12",link:"https://mcdn.podbean.com/mf/download/n5ajvr/601-HernanCattaneo-2022-11-12.mp3",tracklist:`Tim Green - Tears /
East Cafe - Luna /
Lio Q - Watanable /
Hector Cortes \xA0& M - HEYY /
DJ Zombi - 604 Diary (Hobin Rude Remix) /
Shimai Valen \xA0- Carlos Gatto /
David Podhel - In Time /
Charlie Pec - Paradigm /
Quivver - Tuliminate /`},{episodio:"602",titulo:"Resident / Episode 602 / Nov 19 2022",descripcion:`1 - Sebastian Busto - Sanctuary (Andres Moris Remix) /\xA0
2 - Gabo Martin - Dislocator /\xA0
3 - Francesco Pico - The B BoB /\xA0
4 - Benja Molina - Centaury /\xA0
5 - Dmitry Molosh - Butterfly /\xA0
6 - Aether - Magician /\xA0
7 - Kostya Outta & Bodai - Imagine (Dmitry Molosh Remix) /\xA0
8 - Sam Hopgood - Emergence (HobinRudeRemix) /\xA0
9 - Moss (AR) - Reflect (Freedo Mosho Remix) /\xA0
10 - Final Request - A Journey Through the Heart / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"49.8K",fecha:"2022-11-19",link:"https://mcdn.podbean.com/mf/download/5gtw5z/602-HernanCattaneo-2022-11-19.mp3",tracklist:`Sebastian Busto - Sanctuary (Andres Moris Remix) /
Gabo Martin - Dislocator /
Francesco Pico - The B BoB /
Benja Molina - Centaury /
Dmitry Molosh - Butterfly /
Aether - Magician /
Kostya Outta & Bodai - Imagine (Dmitry Molosh Remix) /
Sam Hopgood - Emergence (HobinRudeRemix) /
Moss (AR) - Reflect (Freedo Mosho Remix) /`},{episodio:"604",titulo:"Resident / Episode 604 / Dec 03 2022",descripcion:`1 - Will DeKeizer - Space Dream /\xA0
2 - Tomek - Sky Castle /\xA0
3 - \xA0Bynomic - Little Girl (Berni Turletti Remix) /\xA0
4 - Sinova - Something Worth Finding /\xA0
5 - AxeLara - Aglaia (Alex O'Rion Remix) /\xA0
6 - Mike Griego - Ala Delta /\xA0
7 - Rokazer - Hope (Tim Penner Remix) /\xA0
8 - Kebin van Reeken - Eternity (Aman Anand 'Deep Space' Remix) /\xA0
9 - Cream (PL) - Horizons /\xA0
10 - James Holden - I've put out the Light (East Cafe Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"52K",fecha:"2022-12-03",link:"https://mcdn.podbean.com/mf/download/sjrird/604-HernanCattaneo-2022-12-03.mp3",tracklist:`Will DeKeizer - Space Dream /
Tomek - Sky Castle /
Bynomic - Little Girl (Berni Turletti Remix) /
Sinova - Something Worth Finding /
AxeLara - Aglaia (Alex O'Rion Remix) /
Mike Griego - Ala Delta /
Rokazer - Hope (Tim Penner Remix) /
Kebin van Reeken - Eternity (Aman Anand 'Deep Space' Remix) /
Cream (PL) - Horizons /`},{episodio:"605",titulo:"Resident / Episode 605 / Dec 10 2022",descripcion:`1 - Darren Bray - When You Go /\xA0
2 - Erdi Irmak Feat. Amega - I Can Find Maty Owl /\xA0
3 - Antrim - Suru /\xA0
4 - Ichasan - Luisa (Nick Warren & Nicolas Rada Remix) /\xA0
5 - Kostya Outta & Bodai - Imagine /\xA0
6 - Dabeat - Expansion /\xA0
7 - Paul Angelo & Don Argento - Harpe /\xA0
8 - Benja Molina - Legacy for Alan /\xA0
9 - Felipe Novaes - Layers Of Meaning /\xA0
10 - Amber - Anyway (Framewerk Breaks Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"48.7K",fecha:"2022-12-10",link:"https://mcdn.podbean.com/mf/download/f76i3g/605-HernanCattaneo-2022-12-10.mp3",tracklist:`Darren Bray - When You Go /
Erdi Irmak Feat. Amega - I Can Find Maty Owl /
Antrim - Suru /
Ichasan - Luisa (Nick Warren & Nicolas Rada Remix) /
Kostya Outta & Bodai - Imagine /
Dabeat - Expansion /
Paul Angelo & Don Argento - Harpe /
Benja Molina - Legacy for Alan /
Felipe Novaes - Layers Of Meaning /`},{episodio:"606",titulo:"Resident / Episode 606 / Dec 17 2022",descripcion:`1 - Feist - The Water (Bruno Andrada Unofficial Remix) /\xA0
2 - Awka, Baya, LENN V - White Sand (Extended Mix) /\xA0
3 - Billie Eilish - Bury A Friend (Rodrigo Lapena Edit) /\xA0
4 - Sebastian Busto - Sanctuary (Andres Moris Remix) /\xA0
5 - Franco Camiolo - Over the Time /\xA0
6 - Jonathan Fratamico - Thriving /\xA0
7 - Tonaco - Holosteric /\xA0
8 - M83 - Solitude (DOMA Unofficial Remix) /\xA0
9 - PAUL (AR) & EANP - Insane /\xA0
10 - Perry Farrell's Satellite Party 'Milky Avenue' (Sasha Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"52.5K",fecha:"2022-12-17",link:"https://mcdn.podbean.com/mf/download/juew9u/606-HernanCattaneo-2022-12-17.mp3",tracklist:`Feist - The Water (Bruno Andrada Unofficial Remix) /
Awka, Baya, LENN V - White Sand (Extended Mix) /
Billie Eilish - Bury A Friend (Rodrigo Lapena Edit) /
Sebastian Busto - Sanctuary (Andres Moris Remix) /
Franco Camiolo - Over the Time /
Jonathan Fratamico - Thriving /
Tonaco - Holosteric /
M83 - Solitude (DOMA Unofficial Remix) /
PAUL (AR) & EANP - Insane /`},{episodio:"607",titulo:"Resident / Episode 607 / Dec 24 2022",descripcion:"Recorded Live at Mendoza - December 2022 - Part 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"24",descargas:"51.2K",fecha:"2022-12-24",link:"https://mcdn.podbean.com/mf/download/zefsww/607-HernanCattaneo-2022-12-24.mp3"},{episodio:"608",titulo:"Resident / Episode 608 / Dec 31 2022",descripcion:"Recorded Live at Mendoza - December 2022 - Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"20",descargas:"50.7K",fecha:"2022-12-31",link:"https://mcdn.podbean.com/mf/download/jscr3n/608-HernanCattaneo-2022-12-31.mp3"},{episodio:"609",titulo:"Resident / Episode 609 / Jan 07 2023",descripcion:"Recorded Live at Mendoza - December 2022 - Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"26",descargas:"51.2K",fecha:"2023-01-07",link:"https://mcdn.podbean.com/mf/download/m6zngh/609-HernanCattaneo-2023-01-07.mp3"},{episodio:"610",titulo:"Resident / Episode 610 / Jan 14 2023",descripcion:"Recorded Live at Mendoza - December 2022 - Part 4 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"28",descargas:"52.7K",fecha:"2023-01-14",link:"https://mcdn.podbean.com/mf/download/3m8psm/610-HernanCattaneo-2023-01-14.mp3"},{episodio:"611",titulo:"Resident / Episode 611 / Jan 21 2023",descripcion:`1 - Mariano Mellino - Mr. Hex (Vocal Mix) /\xA0
2 - Ruben Karapetyan - Carpe Diem /\xA0
3 - Lio Q, Sofi Casta\xF1on - Terra (Hobin Rude Remix) /\xA0
4 - Kabi (AR) & Ric Niels - Kimica /\xA0
5 - Meeting Molly - Elementary (NOIYSE PROJECT Remix) /\xA0
6 - Armen Miran & Pambouk - The Senses /\xA0
7 - EarthLife - Senza Fine (Simply City Balance Edit) /\xA0
8 - Ivan Aliaga - Animatica /\xA0
9 - Martin Eyerer, Craig Walker - Hollow Love (Jiggler Remix) /\xA0
10 - Marsh - Reminiscent / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"52.9K",fecha:"2023-01-21",link:"https://mcdn.podbean.com/mf/download/yjxzqk/611-HernanCattaneo-2023-01-21.mp3",tracklist:`Mariano Mellino - Mr. Hex (Vocal Mix) /
Ruben Karapetyan - Carpe Diem /
Lio Q, Sofi Casta\xF1on - Terra (Hobin Rude Remix) /
Kabi (AR) & Ric Niels - Kimica /
Meeting Molly - Elementary (NOIYSE PROJECT Remix) /
Armen Miran & Pambouk - The Senses /
EarthLife - Senza Fine (Simply City Balance Edit) /
Ivan Aliaga - Animatica /
Martin Eyerer, Craig Walker - Hollow Love (Jiggler Remix) /`},{episodio:"612",titulo:"Resident / Episode 612 / Jan 28 2023",descripcion:`1 - Oliver Harper - Strawberry Thief /\xA0
2 - Alan Cerra - Opposite Ways /\xA0
3 - Rocio Laurenza - Toxicless /\xA0
4 \xA0 Fabian Palacios - Reborn (Dowden Remix) /\xA0
5 - Soulfinder - Frankie (Anthony Pappa & Jamie Stevens Remix) /\xA0
6 - Kamilo Sanclemente, Andr\xE9 Moret - Dome in the Chaos /\xA0
7 - Figueras - Summit (Not Demure Remix) /\xA0
8 - Hobin Rude - 33rd /\xA0
9 - Paul Thomas - Jumbo /\xA0
10 - Joplyn - Remind Me (Booka Shade Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"55.5K",fecha:"2023-01-28",link:"https://mcdn.podbean.com/mf/download/q775nv/612-HernanCattaneo-2023-01-28.mp3",tracklist:`Oliver Harper - Strawberry Thief /
Alan Cerra - Opposite Ways /
Rocio Laurenza - Toxicless /
4 \xA0 Fabian Palacios - Reborn (Dowden Remix) /
Soulfinder - Frankie (Anthony Pappa & Jamie Stevens Remix) /
Kamilo Sanclemente, Andr\xE9 Moret - Dome in the Chaos /
Figueras - Summit (Not Demure Remix) /
Hobin Rude - 33rd /
Paul Thomas - Jumbo /`},{episodio:"614",titulo:"Resident / Episode 614 / Feb 11 2023",descripcion:`1 - El Mundo & Zazou - In The Dream Time /\xA0
2 - Mistol Team - On\xEDrico /\xA0
3 - Alan Cerra - Orbital /\xA0
4 - GMJ - Stage Flight (Jiminy Hop Remix) /\xA0
5 - Julian Nates - Maat Mons /\xA0
6 - Armen Miran & Pambouk - The Senses /\xA0
7 - AKIVA - The Wait (Hernan Cattaneo & Martin Garcia Remix) /\xA0
8 - Simos Tagias - Archaios /\xA0
9 - Dowden, Forty Cats - Airtime (Alan Cerra Remix) /\xA0
10 - HAUMS - Losing Myself feat. Eleonora (Madraas Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"53.8K",fecha:"2023-02-11",link:"https://mcdn.podbean.com/mf/download/p2aiqy/614-HernanCattaneo-2023-02-11.mp3",tracklist:`El Mundo & Zazou - In The Dream Time /
Mistol Team - On\xEDrico /
Alan Cerra - Orbital /
GMJ - Stage Flight (Jiminy Hop Remix) /
Julian Nates - Maat Mons /
Armen Miran & Pambouk - The Senses /
AKIVA - The Wait (Hernan Cattaneo & Martin Garcia Remix) /
Simos Tagias - Archaios /
Dowden, Forty Cats - Airtime (Alan Cerra Remix) /`},{episodio:"615",titulo:"Resident / Episode 615 / Feb 18 2023",descripcion:`1 - Bob Marley - Natural Mystic (Awka Re-interpretation) /\xA0
2 - Roy Rosenfeld - Kali (Keinemusik) /\xA0
3 - Hassan Maroofi, David Charpentier - Reminisce /\xA0
4 - NIC\xD8 - Lost In You /\xA0
5 - Soulfeed - Peak Story (Simply City Remix) /\xA0
6 - Armen Miran & Pambouk - AwarE /\xA0
7 - Dmitry Molosh - Butterfly (Hicky & Kalo Remix) /\xA0
8 - Kamilo Sanclemente - Moving thoughts /\xA0
9 - Messier - Kevlar (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
10 - Vandelor - Happy Man / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"62.3K",fecha:"2023-02-18",link:"https://mcdn.podbean.com/mf/download/yp2ket/615-HernanCattaneo-2023-02-18.mp3",tracklist:`Bob Marley - Natural Mystic (Awka Re-interpretation) /
Roy Rosenfeld - Kali (Keinemusik) /
Hassan Maroofi, David Charpentier - Reminisce /
NIC\xD8 - Lost In You /
Soulfeed - Peak Story (Simply City Remix) /
Armen Miran & Pambouk - AwarE /
Dmitry Molosh - Butterfly (Hicky & Kalo Remix) /
Kamilo Sanclemente - Moving thoughts /
Messier - Kevlar (Hernan Cattaneo & Marcelo Vasami Remix) /`},{episodio:"616",titulo:"Resident / Episode 616 / Feb 25 2023",descripcion:`1 - Chicola - Every Pain Got A Name /\xA0
2 - Andre Gazolla - Never Say Never (Aman Anand Remix) /\xA0
3 - Cadillac Express, The Cobb - Siberia /\xA0
4 - Juan Sapia - Magical Mountains /\xA0
5 - Alan Cerra - Opposite Ways /\xA0
6 - Fabian Palacios - reborn /\xA0
7 - Oliver Harper - Strawberry Thief /\xA0
8 - Kamilo Sanclemente - Human evolution /\xA0
9 - Apste - Distorts /\xA0
10 - Simos Tagias - Missile / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"64K",fecha:"2023-02-25",link:"https://mcdn.podbean.com/mf/download/ue2ja4/616-HernanCattaneo-2023-02-25.mp3",tracklist:`Chicola - Every Pain Got A Name /
Andre Gazolla - Never Say Never (Aman Anand Remix) /
Cadillac Express, The Cobb - Siberia /
Juan Sapia - Magical Mountains /
Alan Cerra - Opposite Ways /
Fabian Palacios - reborn /
Oliver Harper - Strawberry Thief /
Kamilo Sanclemente - Human evolution /
Apste - Distorts /`},{episodio:"617",titulo:"Resident / Episode 617 / Mar 04 2023",descripcion:`1 - Pablo Asturizaga, DKEYMUSIK - Lighter Than Air (Maxi Degrassi Remix) /\xA0
2 - Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /\xA0
3 - Rockka, Gru V - Closer (Fabri Lopez Remix) /\xA0
4 - EANP - Forget (Dub Mix) /\xA0
5 - Francesco Pico feat. PvHL - Catch The Moment /\xA0
6 - Innerphonic - Singular Planete (Yudi Watanabe Remix) /\xA0
7 - \xA0Niceshot - Temporal /\xA0
8 - Cheric - Stories /\xA0
9 - Simos Tagias - Archaios
10 - Federico Monachesi - Emerald Lake \xA0(Forty Cats Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"64.3K",fecha:"2023-03-04",link:"https://mcdn.podbean.com/mf/download/9mv72y/617-HernanCattaneo-2023-03-04.mp3",tracklist:`Pablo Asturizaga, DKEYMUSIK - Lighter Than Air (Maxi Degrassi Remix) /
Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /
Rockka, Gru V - Closer (Fabri Lopez Remix) /
EANP - Forget (Dub Mix) /
Francesco Pico feat. PvHL - Catch The Moment /
Innerphonic - Singular Planete (Yudi Watanabe Remix) /
Niceshot - Temporal /
Cheric - Stories /
Simos Tagias - Archaios`},{episodio:"618",titulo:"Resident / Episode 618 / Mar 11 2023",descripcion:`1 - Husa & Zeyada - Piece of Mind (Artphorm Remix) /\xA0
2 - Schmidt (BR) & Vandelor - Adventures of an Untold Story /\xA0
3 - Kasey Taylor & Anthea (AUS) - Nightlight Blossom (The Oddness Remix) /\xA0
4 - Reset Robot - Duplicate /\xA0
5 - Nick Varon - Tiny Garden /\xA0
6 - Antrim - Soul Magic /\xA0
7 - Gavin Rochford - Lustre /\xA0
8 - Hobin Rude & Sinan Arsan - Counting Backwards /\xA0
9 - Mike Koglin - The Silence (GMJ & Matter Remix) /\xA0
10 - KAZKO - Passenger / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"63.5K",fecha:"2023-03-11",link:"https://mcdn.podbean.com/mf/download/2yyvav/618-HernanCattaneo-2023-03-11.mp3",tracklist:`Husa & Zeyada - Piece of Mind (Artphorm Remix) /
Schmidt (BR) & Vandelor - Adventures of an Untold Story /
Kasey Taylor & Anthea (AUS) - Nightlight Blossom (The Oddness Remix) /
Reset Robot - Duplicate /
Nick Varon - Tiny Garden /
Antrim - Soul Magic /
Gavin Rochford - Lustre /
Hobin Rude & Sinan Arsan - Counting Backwards /
Mike Koglin - The Silence (GMJ & Matter Remix) /`},{episodio:"619",titulo:"Resident / Episode 619 / Mar 18 2023",descripcion:`1 - Boundaries (Bodaishin Remix) /\xA0
2 - Chaim - Now Not Tomorrow /\xA0
3 - Uccelli - Birds in your cloud /\xA0
4 - Gorje Hewek, Dulus - Earth /\xA0
5 - Zalvador - Elevation /\xA0
6 - Innerphonic - Singular Planete (Yudi Watanabe Remix) /\xA0
7 - Lucas Perdomo - High Hopes /\xA0
8 - Eichenbaum - Ethereal Commuter (Tripswitch Remix) /\xA0
9 - Forerunners & Mike Isai - Arrakis (Partenaire RMX) /\xA0
10 - BOg - Breathe (Notre Dame Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"63K",fecha:"2023-03-18",link:"https://mcdn.podbean.com/mf/download/9cbvux/619-HernanCattaneo-2023-03-18.mp3",tracklist:`Boundaries (Bodaishin Remix) /
Chaim - Now Not Tomorrow /
Uccelli - Birds in your cloud /
Gorje Hewek, Dulus - Earth /
Zalvador - Elevation /
Innerphonic - Singular Planete (Yudi Watanabe Remix) /
Lucas Perdomo - High Hopes /
Eichenbaum - Ethereal Commuter (Tripswitch Remix) /
Forerunners & Mike Isai - Arrakis (Partenaire RMX) /`},{episodio:"620",titulo:"Resident / Episode 620 / Mar 25 2023",descripcion:`1 - Dino Lenny - I've Learned That (Jonathan Kaspar Remix) /\xA0
2 - Tash Sultana - Blackbird (Franco Camiolo Edit) /\xA0
3 - Partenaire - Westbound /\xA0
4 - Weird Sounding Dude - Step Up /\xA0
5 - Chris Cargo - Falcons Maze (Gorkiz & Nobilis Remix) /\xA0
6 - EANP - Rubberband /\xA0
7 - PAUL (AR) - Spektra /\xA0
8 - Fran Bux Remix /\xA0
9 - Agustin Pengov - Rain /\xA0
10 - Vandelor, Schmidt (BR) - Together We Rise / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"36",descargas:"54.1K",fecha:"2023-03-25",link:"https://mcdn.podbean.com/mf/download/n34vgz/620-HernanCattaneo-2023-03-25.mp3",tracklist:`Dino Lenny - I've Learned That (Jonathan Kaspar Remix) /
Tash Sultana - Blackbird (Franco Camiolo Edit) /
Partenaire - Westbound /
Weird Sounding Dude - Step Up /
Chris Cargo - Falcons Maze (Gorkiz & Nobilis Remix) /
EANP - Rubberband /
PAUL (AR) - Spektra /
Fran Bux Remix /
Agustin Pengov - Rain /`},{episodio:"621",titulo:"Resident / Episode 621 / Apr 01 2023",descripcion:`1 - Dowden - Agora /\xA0
2 - EANP - Forget (Dub Mix) /\xA0
3 - Panayiotis Tassis - Synesthesia /\xA0
4 - Beswerda - Concord /\xA0
5 - m83 - Solitude (Fran Bux Edit) /\xA0
6 - Kraftwerk - Tour De France (Diego Berrondo Unofficial Remix) /\xA0
7 - Dowden - Capricorn /\xA0
8 - Hardt Antoine - All We See (Freedom Mix) /\xA0
9 - STEREO MUNK, Echo Daft, Dublew -- Embers /\xA0
10 - Doctors on Decks - Now (ZAC Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"63.4K",fecha:"2023-04-01",link:"https://mcdn.podbean.com/mf/download/k99yti/621-HernanCattaneo-2023-04-01.mp3",tracklist:`Dowden - Agora /
EANP - Forget (Dub Mix) /
Panayiotis Tassis - Synesthesia /
Beswerda - Concord /
m83 - Solitude (Fran Bux Edit) /
Kraftwerk - Tour De France (Diego Berrondo Unofficial Remix) /
Dowden - Capricorn /
Hardt Antoine - All We See (Freedom Mix) /
STEREO MUNK, Echo Daft, Dublew -- Embers /`},{episodio:"622",titulo:"Resident / Episode 622 / Apr 08 2023",descripcion:`1 - Tim Points - Derailleur /\xA0
2 - Weird Sounding Dude - Edge Of The Ocean /\xA0
3 - Arnold T., Alain Pauwels - Cosmic Spices (Juan Ibanez Remix) /\xA0
4 - Arnold T., Alain Pauwels -Cosmic Spices (Hobin Rude Remix) /\xA0
5 - Hyunji-A - The Last Drop of Sun /\xA0
6 - Luciano Elvira- Law of Gravity /\xA0
7 - Poli Siufi - The Moon /\xA0
8 - Kevin Di Serna- Faro (Jonathan Kaspar Remix) /\xA0
9 - RYAN (CU) - MoonBeams /\xA0
10 - Eric Lune & Juan Sapia - Himalaya / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"62.7K",fecha:"2023-04-08",link:"https://mcdn.podbean.com/mf/download/7a7th8/622-HernanCattaneo-2023-04-08.mp3",tracklist:`Tim Points - Derailleur /
Weird Sounding Dude - Edge Of The Ocean /
Arnold T., Alain Pauwels - Cosmic Spices (Juan Ibanez Remix) /
Arnold T., Alain Pauwels -Cosmic Spices (Hobin Rude Remix) /
Hyunji-A - The Last Drop of Sun /
Luciano Elvira- Law of Gravity /
Poli Siufi - The Moon /
Kevin Di Serna- Faro (Jonathan Kaspar Remix) /
RYAN (CU) - MoonBeams /`},{episodio:"625",titulo:"Resident / Episode 625 / Apr 29 2023",descripcion:`1 - Tokumori - Starry Sky /\xA0
2 - Fonarev & Second Sine - Love Is Wise Hatred Is Foolish ( Luis Damora Remix) /\xA0
3 - Hot Since 82 - Sinnerman (Henrik Schwarz Dub) /\xA0
4 - ZAC - Savage /\xA0
5 - Romain Garcia - Windblows /\xA0
6 - Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /\xA0
7 - Echomen - Truth (Freedo Mosho Edit) /\xA0
8 - Aquilia - Dreamstate (Freedo Mosho's LSG Edit) /\xA0
9 - BBE - Seven Days and One Week (Framewerk ) /\xA0
10 - Everything But The Girl - Nothing Left To Lose (Four Tet Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"60.9K",fecha:"2023-04-29",link:"https://mcdn.podbean.com/mf/download/n2ic3m/625-HernanCattaneo-2023-04-29.mp3",tracklist:`Tokumori - Starry Sky /
Fonarev & Second Sine - Love Is Wise Hatred Is Foolish ( Luis Damora Remix) /
Hot Since 82 - Sinnerman (Henrik Schwarz Dub) /
ZAC - Savage /
Romain Garcia - Windblows /
Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /
Echomen - Truth (Freedo Mosho Edit) /
Aquilia - Dreamstate (Freedo Mosho's LSG Edit) /
BBE - Seven Days and One Week (Framewerk ) /`},{episodio:"626",titulo:"Resident / Episode 626 / May 06 2023",descripcion:`1 - Agnes Obel - Familiar (Sebastian Sellares Edit) /\xA0
2 - Daesmith & SOL7 - Grandma's Wisdom (Peter Makto Flying Grandma Remix) /\xA0
3 - Barych & Vadim Manko - Hernan /\xA0
4 - Rudra - Praanik (Diego Berrondo Remix) /\xA0
5 - Andy Arias - The Phrygiano /\xA0
6 - PAAX (Tulum) - Deep into the mountain /\xA0
7 - Erich Von Kollar - Vertical Maze /\xA0
8 - Hobin Rude, Nicolas Benedetti - Stand Up /\xA0
9 - Chris Cargo - Wide Eyed (Subandrio Remix) /\xA0
10 - Kamilo Sanclemente - Elixir (GMJ Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"63.2K",fecha:"2023-05-06",link:"https://mcdn.podbean.com/mf/download/fyd4ic/626-HernanCattaneo-2023-05-06.mp3",tracklist:`Agnes Obel - Familiar (Sebastian Sellares Edit) /
Daesmith & SOL7 - Grandma's Wisdom (Peter Makto Flying Grandma Remix) /
Barych & Vadim Manko - Hernan /
Rudra - Praanik (Diego Berrondo Remix) /
Andy Arias - The Phrygiano /
PAAX (Tulum) - Deep into the mountain /
Erich Von Kollar - Vertical Maze /
Hobin Rude, Nicolas Benedetti - Stand Up /
Chris Cargo - Wide Eyed (Subandrio Remix) /`},{episodio:"627",titulo:"Resident / Episode 627 / May 13 2023",descripcion:`1 - Molac - The Golden Dawn /\xA0
2 - Fernando Olaya - Land of Confusion (Luciano Scheffer Remix) /\xA0
3 - Ric Niels, Dowden - Spiral (GMJ Remix) /\xA0
4 - Luis Damora - Sedna /\xA0
5 - Amir Talem - Strong (Ruben Karapetyan Remix) /\xA0
6 - Sudhaus & The Wash - Spectron (DJ Ruby Remix) /\xA0
7 - Shayan Pasha - Garden of Hope /\xA0
8 - FRE\xCC\u02C6O\xCC\u201E - Hjarta (Paul Thomas Remix) /\xA0
9 - Hobin Rude & Nicolas Benedetti - Stand Up (Teleport-X Extended Remix) /\xA0
10 - Adana Twins, Darlyn Vlys - Starwave / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"64K",fecha:"2023-05-13",link:"https://mcdn.podbean.com/mf/download/m65ppx/627-HernanCattaneo-2023-05-13.mp3",tracklist:`Molac - The Golden Dawn /
Fernando Olaya - Land of Confusion (Luciano Scheffer Remix) /
Ric Niels, Dowden - Spiral (GMJ Remix) /
Luis Damora - Sedna /
Amir Talem - Strong (Ruben Karapetyan Remix) /
Sudhaus & The Wash - Spectron (DJ Ruby Remix) /
Shayan Pasha - Garden of Hope /
FRE\xCC\u02C6O\xCC\u201E - Hjarta (Paul Thomas Remix) /
Hobin Rude & Nicolas Benedetti - Stand Up (Teleport-X Extended Remix) /`},{episodio:"628",titulo:"Resident / Episode 628 / May 20 2023",descripcion:`1 - Paula OS - Rival (John Cosani Remix) /\xA0
2 - No\u0304pi - Micro Clouds (Datskie Remix) /\xA0
3 - Rudra - Praanik (Diego Berrondo Remix) /\xA0
4 - Solarstone - 4ever (Mir Omar Remix) /\xA0
5 - Hector Cortes, Hassan Maroofi, Jaime Garza - Shine the Light /\xA0
6 - Runik - The Chapel feat. Proyecto Guten (Blanka Barbara Remix) /\xA0
7 - East Cafe - Summer Solstice (Apste Remix) /\xA0
8 - East Cafe - Feyreye (Hobin Rude Remix) /\xA0
9 - Felipe Garcia (UY) - Foggy Days /\xA0
10 - Timo MAAS - Ubik (Dj Bird Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"61.9K",fecha:"2023-05-20",link:"https://mcdn.podbean.com/mf/download/eh343q/628-HernanCattaneo-2023-05-20.mp3",tracklist:`Paula OS - Rival (John Cosani Remix) /
No\u0304pi - Micro Clouds (Datskie Remix) /
Rudra - Praanik (Diego Berrondo Remix) /
Solarstone - 4ever (Mir Omar Remix) /
Hector Cortes, Hassan Maroofi, Jaime Garza - Shine the Light /
Runik - The Chapel feat. Proyecto Guten (Blanka Barbara Remix) /
East Cafe - Summer Solstice (Apste Remix) /
East Cafe - Feyreye (Hobin Rude Remix) /
Felipe Garcia (UY) - Foggy Days /`},{episodio:"629",titulo:"Resident / Episode 629 / May 27 2023",descripcion:`1 - Donde est\xE1 Agust\xEDn - Agust\xEDn Duarte /\xA0
2 - Shayan Pasha - Garden of Hope /\xA0
3 - Emi Galvan - Free Your Mind (Sebastian Busto Remix) /\xA0
4 - Khen - Florida /\xA0
5 - Luis Damora - Castex (Forty Cats Remix) /\xA0
6 - Hicky & Kalo - Luminous Path (Makebo Remix) /\xA0
7 - Dabeat, Kamilo Sanclemente - Night Clouds /\xA0
8 - Sam Scheme - Acura /\xA0
9 - Magic.Made.by.R - Louder /\xA0
10 - Eric Lune - Small Hours / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"60.4K",fecha:"2023-05-27",link:"https://mcdn.podbean.com/mf/download/cj7qjx/629-HernanCattaneo-2023-05-27.mp3",tracklist:`Donde est\xE1 Agust\xEDn - Agust\xEDn Duarte /
Shayan Pasha - Garden of Hope /
Emi Galvan - Free Your Mind (Sebastian Busto Remix) /
Khen - Florida /
Luis Damora - Castex (Forty Cats Remix) /
Hicky & Kalo - Luminous Path (Makebo Remix) /
Dabeat, Kamilo Sanclemente - Night Clouds /
Sam Scheme - Acura /
Magic.Made.by.R - Louder /`},{episodio:"630",titulo:"Resident / Episode 630/ Jun 03 2023",descripcion:`1 - Roger Martinez - De Machtige Trip (Roger Martinez 2023 Remix) /\xA0
2 - Emma Vazquez - Soul Brother /\xA0
3 - Voon feat Tim Condor - Now You're Gone (Goodenach Remix) /\xA0
4 - John Creamer - Impossible Love (Anhauser Remix) /\xA0
5 - Neuralis - Flush (Kris Dur, Leandro Murua Remix) /\xA0
6 - Telefon Tel Aviv - You're the Worst Thing In The World (Kris Dur, Hector Cortes Remix Unofficial) /\xA0
7 - Hydra System - Benja Molina /\xA0
8 - Axel Giova & Larrosa (AR) - Conditional /\xA0
9 - Analog Jungs - Twilight /\xA0
10 - Van Bellen - Let Me Take You On a Journey (Sebastien Leger Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"64.4K",fecha:"2023-06-03",link:"https://mcdn.podbean.com/mf/download/wwfjex/630-HernanCattaneo-2023-06-03.mp3",tracklist:`Roger Martinez - De Machtige Trip (Roger Martinez 2023 Remix) /
Emma Vazquez - Soul Brother /
Voon feat Tim Condor - Now You're Gone (Goodenach Remix) /
John Creamer - Impossible Love (Anhauser Remix) /
Neuralis - Flush (Kris Dur, Leandro Murua Remix) /
Telefon Tel Aviv - You're the Worst Thing In The World (Kris Dur, Hector Cortes Remix Unofficial) /
Hydra System - Benja Molina /
Axel Giova & Larrosa (AR) - Conditional /
Analog Jungs - Twilight /`},{episodio:"631",titulo:"Resident / Episode 631 / Jun 10 2023",descripcion:`1 - Radiohead - Codex (Raul Suarez Unofficial Clear Lake Mix) /\xA0
2 - Alan Schultz - \xA0Stampede /\xA0
3 - Diego Berrondo - Maktub /\xA0
4 - Roc\xEDo Portillo - Mori /\xA0
5 - Hobin Rude - Room 172 /\xA0
6 - Hyunji-A - Camino Torcido /\xA0
7 - Juan Sapia - Aura (Paul Deep Remix) /\xA0
8 - Blami - Industria Con Vista Moderna /\xA0
9 - Skatman - Oldskool /\xA0
10 - Glowal - Eagles / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"61.9K",fecha:"2023-06-10",link:"https://mcdn.podbean.com/mf/download/iugwft/631-HernanCattaneo-2023-06-10.mp3",tracklist:`Radiohead - Codex (Raul Suarez Unofficial Clear Lake Mix) /
Alan Schultz - \xA0Stampede /
Diego Berrondo - Maktub /
Roc\xEDo Portillo - Mori /
Hobin Rude - Room 172 /
Hyunji-A - Camino Torcido /
Juan Sapia - Aura (Paul Deep Remix) /
Blami - Industria Con Vista Moderna /
Skatman - Oldskool /`},{episodio:"632",titulo:"Resident / Episode 632 / Jun 17 2023",descripcion:`1 - Olafur Arnalds - Particles (Alfa State Remix) /\xA0
2 - Hermanez, Lost Desert - Cobalt Session /\xA0
3 - Daniel Testas - Being a Phoenix (Not Demure Remix) /\xA0
4 - Radieux - Waterfalls and Us (Kamilo Sanclemente , Mauro Aguirre Remix ) /\xA0
5 - Ivan Aliaga - Speed /\xA0
6 - Amh\xE1in - Evaporate (Mike Rish Remix) /\xA0
7 - Agustin Ficarra - Hold Back /\xA0
8 - MIR OMAR - RUST /\xA0
9 - Ruben Karapetyan - Hyperphantasia /\xA0
10 - Natascha Polke, R.EK - The Balance (Thomas Schwartz & Fausto Fanizza Club Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.8K",fecha:"2023-06-17",link:"https://mcdn.podbean.com/mf/download/4zh7eu/632-HernanCattaneo-2023-06-17.mp3",tracklist:`Olafur Arnalds - Particles (Alfa State Remix) /
Hermanez, Lost Desert - Cobalt Session /
Daniel Testas - Being a Phoenix (Not Demure Remix) /
Radieux - Waterfalls and Us (Kamilo Sanclemente , Mauro Aguirre Remix ) /
Ivan Aliaga - Speed /
Amh\xE1in - Evaporate (Mike Rish Remix) /
Agustin Ficarra - Hold Back /
MIR OMAR - RUST /
Ruben Karapetyan - Hyperphantasia /`},{episodio:"634",titulo:"Resident / Episode 634 / Jul 01 2023",descripcion:`1 - Valdovinos - Somebody Else /\xA0
2 - Emanuel Satie - Dreaming (Of The Love We Never Had) /\xA0
3 - Einmusik - Funkenflug /\xA0
4 - Tonaco, VENAO - Sub Station /\xA0
5 - Greta Meier - Voices Of Lights /\xA0
6 - Will DeKeizer - Interwoven Paths /\xA0
7 - BJORN (SE) - Chimes (Echonomist Remix) /\xA0
8 - TRENTEM\xD8LLER - Moan (Raul Suarez Thinking in Blue \xA0Mix) /\xA0
9 - Chris Cargo - Aurora (Antrim Remix) If You Wait /\xA0
10 - The Smiths - How Soon is Now (Carlos Gatto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"60.4K",fecha:"2023-07-01",link:"https://mcdn.podbean.com/mf/download/89dciw/634-HernanCattaneo-2023-07-01.mp3",tracklist:`Valdovinos - Somebody Else /
Emanuel Satie - Dreaming (Of The Love We Never Had) /
Einmusik - Funkenflug /
Tonaco, VENAO - Sub Station /
Greta Meier - Voices Of Lights /
Will DeKeizer - Interwoven Paths /
BJORN (SE) - Chimes (Echonomist Remix) /
TRENTEM\xD8LLER - Moan (Raul Suarez Thinking in Blue \xA0Mix) /
Chris Cargo - Aurora (Antrim Remix) If You Wait /`},{episodio:"635",titulo:"Resident / Episode 635 / Jul 08 2023",descripcion:`1 - Julian Stetter - Napa /\xA0
2 - Ivory - Departures /\xA0
3 - Beverly Hills - Turn On Me (Jose Tabarez Remix) /\xA0
4 - Papai ACCI Attila - Happy Kids (Weird Sounding Dude Remix) /\xA0
5 - Orsen - Hope /\xA0
6 - Andre Moret - Valley of Feelings /\xA0
7 - Dark Soul Project - Reborn /\xA0
8 - Rich Curtis - Hard Won (DNYO Cyber Dub) /\xA0
9 - Lake Avalon - Velorum /\xA0
10 - Depeche Mode - My Cosmos Is Mine (ANNA Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"61.2K",fecha:"2023-07-08",link:"https://mcdn.podbean.com/mf/download/cwfcwx/635-HernanCattaneo-2023-07-08.mp3",tracklist:`Julian Stetter - Napa /
Ivory - Departures /
Beverly Hills - Turn On Me (Jose Tabarez Remix) /
Papai ACCI Attila - Happy Kids (Weird Sounding Dude Remix) /
Orsen - Hope /
Andre Moret - Valley of Feelings /
Dark Soul Project - Reborn /
Rich Curtis - Hard Won (DNYO Cyber Dub) /
Lake Avalon - Velorum /`},{episodio:"636",titulo:"Resident / Episode 636 / Jul 15 2023",descripcion:`1 - Eli Nissan - Cosmic /\xA0
2 - Mariano Mellino - Butterfly 88 /\xA0
3 - Govinda, Sacc, Leonardini - Foward /\xA0
4 - Christopher Erre & Alto Astral - Open Hearts /\xA0
5 - Benja Molina - Meridian /\xA0
6 - Melodiam (AR) - Trippin /\xA0
7 - Niceshot - Catching Clouds /\xA0
8 - Uccelli - Bruma /\xA0
9 - Tiefstone & Ric Niels - Abby /\xA0
10 - \xD8ostil & R\xEAverie - Missing Robot Feat. Paula Os (Rodriguez Jr. Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"66.2K",fecha:"2023-07-15",link:"https://mcdn.podbean.com/mf/download/f2y485/636-HernanCattaneo-2023-07-15.mp3",tracklist:`Eli Nissan - Cosmic /
Mariano Mellino - Butterfly 88 /
Govinda, Sacc, Leonardini - Foward /
Christopher Erre & Alto Astral - Open Hearts /
Benja Molina - Meridian /
Melodiam (AR) - Trippin /
Niceshot - Catching Clouds /
Uccelli - Bruma /
Tiefstone & Ric Niels - Abby /`},{episodio:"637",titulo:"Resident / Episode 637 / Jul 22 2023",descripcion:`1 - DJ Kid - Sirens (Jochem Hamerling Remix) /\xA0
2 - Kalima - Soldier Of Love /\xA0
3 - DJ Bird - Galactica (Ricardo Piedra Remix) /\xA0
4 - GE\xD8VH\xC4N, Martin Fredes - Deep Story (Ruben Karapetyan Remix) /\xA0
5 - Scippo - Telematic /\xA0
6 - Lio Q - Manhame /\xA0
7 - Alto Astral - Holding On /\xA0
8 - Nick Muir - All One Word (GMJ & Matter Remix) /\xA0
9 - Tonaco - Woodstock /\xA0
10 - RY X - A Thousand Knives (Enamour Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"48.4K",fecha:"2023-07-22",link:"https://mcdn.podbean.com/mf/download/xdhfxa/637-HernanCattaneo-2023-07-22.mp3",tracklist:`DJ Kid - Sirens (Jochem Hamerling Remix) /
Kalima - Soldier Of Love /
DJ Bird - Galactica (Ricardo Piedra Remix) /
GE\xD8VH\xC4N, Martin Fredes - Deep Story (Ruben Karapetyan Remix) /
Scippo - Telematic /
Lio Q - Manhame /
Alto Astral - Holding On /
Nick Muir - All One Word (GMJ & Matter Remix) /
Tonaco - Woodstock /`},{episodio:"638",titulo:"Resident / Episode 638 / Jul 29 2023",descripcion:`1 - Armen Miran - Take Your Time /\xA0
2 - Vicente Herera - Vertigo /\xA0
3 - Andre Moret - Supra /\xA0
4 - Jamie Stevens , Zankee Gulati - The Rip (Paul Deep Just Another Vibe) /\xA0
5 - Chris Scott & Richie Virus - Rubecula (Dave Walker Remix) /\xA0
6 - Ruls - Music Is Our Language - Noisey Project Remix /\xA0
7 - Soulmade (AR) - Scorpion - (Fabri Lopez Remix) /\xA0
8 - AFFKT - Sopasopa (1979 Remix) /\xA0
9 - EANP - \xA0Ruhestoerung /\xA0
10 - Ebbe - Ble Cell (Salazar (COL) remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"62.4K",fecha:"2023-07-29",link:"https://mcdn.podbean.com/mf/download/p32rxr/638-HernanCattaneo-2023-07-29.mp3",tracklist:`Armen Miran - Take Your Time /
Vicente Herera - Vertigo /
Andre Moret - Supra /
Jamie Stevens , Zankee Gulati - The Rip (Paul Deep Just Another Vibe) /
Chris Scott & Richie Virus - Rubecula (Dave Walker Remix) /
Ruls - Music Is Our Language - Noisey Project Remix /
Soulmade (AR) - Scorpion - (Fabri Lopez Remix) /
AFFKT - Sopasopa (1979 Remix) /
EANP - \xA0Ruhestoerung /`},{episodio:"639",titulo:"Resident / Episode 639 / Aug 05 2023",descripcion:`1 - Fer Torti - Champagne Soul /\xA0
2 - Myron Eugene - Divided by Decisions /\xA0
3 - Dimuth K, Forerunners - Exit Reality /\xA0
4 - Franco Camiolo - Torch /\xA0
5 - Hicky & Kalo - Coming Back Home /\xA0
6 - Jiminy Hop - Revizor /\xA0
7 - Simos Tagias - Reality /\xA0
8 - Nacres - Naturalize /\xA0
9 - George FitzGerald - Half Light (Hector Cortes, Hassan Maroofi EDIT) /\xA0
10 - 3 EMITR - Homologic (Gui Boratto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"60.5K",fecha:"2023-08-05",link:"https://mcdn.podbean.com/mf/download/v9fnb5/639-HernanCattaneo-2023-08-05.mp3",tracklist:`Fer Torti - Champagne Soul /
Myron Eugene - Divided by Decisions /
Dimuth K, Forerunners - Exit Reality /
Franco Camiolo - Torch /
Hicky & Kalo - Coming Back Home /
Jiminy Hop - Revizor /
Simos Tagias - Reality /
Nacres - Naturalize /
George FitzGerald - Half Light (Hector Cortes, Hassan Maroofi EDIT) /`},{episodio:"640",titulo:"Resident / Episode 640 / Aug 12 2023",descripcion:`1 - Myron Eugene - Smileseeker /\xA0
2 - Sensitive (It) - Under the Lights (Ric Niels Remix) /\xA0
3 - Notdemure - Waving But Drowning /\xA0
4 - Intacto - Gandhara (Paul Hamilton Remix) /\xA0
5 - NOIYSE PROJECT - Remember Me (Hernan Cattaneo and Jamie Stevens Remix) /\xA0
6 - Kadosh - The Soundtrack /\xA0
7 - Golan Zocher, Ojeni - Alive (Dabeat Remix) /\xA0
8 - Hicky & Kalo - From Sea To Sea /\xA0
9 - Tali Muss, Rasalas - Ozran /\xA0
10 - Juan Sapia - Right Love / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"61.4K",fecha:"2023-08-12",link:"https://mcdn.podbean.com/mf/download/7xdezs/640-HernanCattaneo-2023-08-12.mp3",tracklist:`Myron Eugene - Smileseeker /
Sensitive (It) - Under the Lights (Ric Niels Remix) /
Notdemure - Waving But Drowning /
Intacto - Gandhara (Paul Hamilton Remix) /
NOIYSE PROJECT - Remember Me (Hernan Cattaneo and Jamie Stevens Remix) /
Kadosh - The Soundtrack /
Golan Zocher, Ojeni - Alive (Dabeat Remix) /
Hicky & Kalo - From Sea To Sea /
Tali Muss, Rasalas - Ozran /`},{episodio:"641",titulo:"Resident / Episode 641 / Aug 19 2023",descripcion:`1 - JP M\xE4yeur - When Her Eyes Blossom /\xA0
2 - Gorje Hewek & Dulus - Celestial /\xA0
3 - Mart\xEDn Fern\xE1ndez (AR) - Last Day /\xA0
4 - Moya (US) - Azores /\xA0
5 - Pole Folder - Par-Dessus Les Toits /\xA0
6 - Facundo Mohrr, Maxi Degrassi - Revolver /\xA0
7 - Luis Domara Altered Stars Chris Cargo Remix /\xA0
8 - Nicolas Rada - El Oro de los Tigres /\xA0
9 - Kaspar Tasane - November Rain (East Cafe Remix) /\xA0
10 - Mind Of Us - City Of Angels / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"62K",fecha:"2023-08-19",link:"https://mcdn.podbean.com/mf/download/87vtdf/641-HernanCattaneo-2023-08-19.mp3",tracklist:`JP M\xE4yeur - When Her Eyes Blossom /
Gorje Hewek & Dulus - Celestial /
Mart\xEDn Fern\xE1ndez (AR) - Last Day /
Moya (US) - Azores /
Pole Folder - Par-Dessus Les Toits /
Facundo Mohrr, Maxi Degrassi - Revolver /
Luis Domara Altered Stars Chris Cargo Remix /
Nicolas Rada - El Oro de los Tigres /
Kaspar Tasane - November Rain (East Cafe Remix) /`},{episodio:"642",titulo:"Resident / Episode 642 / Aug 26 2023",descripcion:`1 - Gardoqui & Nacho Garcia - El Perfume /\xA0
2 - Shayan Pasha - The Bird in The Tree /\xA0
3 - Nick Varon - Confusion /\xA0
4 - Massive Attack - Teardrop (Dark Soul Project Ethereal Remix) /\xA0
5 - Ultraverse - In Progression /\xA0
6 - Mike Rish - GT /\xA0
7 - John Creamer & Stephane K- Forget The World (DJ Beat2 Re-Work) /\xA0
8 - Kamilo Sanclemente - Moving Thoughts /\xA0
9 - Jhordan Welsch & Mindlancholic - The Sound Of Sadness (Franco Camiolo Remix) /\xA0
10 - VONDA7 - Revive / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"62.2K",fecha:"2023-08-26",link:"https://mcdn.podbean.com/mf/download/gspu4q/642-HernanCattaneo-2023-08-26.mp3",tracklist:`Gardoqui & Nacho Garcia - El Perfume /
Shayan Pasha - The Bird in The Tree /
Nick Varon - Confusion /
Massive Attack - Teardrop (Dark Soul Project Ethereal Remix) /
Ultraverse - In Progression /
Mike Rish - GT /
John Creamer & Stephane K- Forget The World (DJ Beat2 Re-Work) /
Kamilo Sanclemente - Moving Thoughts /
Jhordan Welsch & Mindlancholic - The Sound Of Sadness (Franco Camiolo Remix) /`},{episodio:"644",titulo:"Resident / Episode 644 / Sep 09 2023",descripcion:`1 - Dinky \xA0- She's Got Nowhere /\xA0
2 - Around Us & Gustin - Hang Tight /\xA0
3 - Romain Garcia & Douran - Coming Home /\xA0
4 - SOHMI - Only One (Dosem Remix) /\xA0
5 - James Organ - Enkai /\xA0
6 - Spencer Brown - Curve /\xA0
7 - XZYKO, W5 - Volver (Fabian Argomedo Remix) /\xA0
8 - veytik_feat._anna_mirani_-_freefallin_kamilo_sanclemente /\xA0
9 - Arodes ft Martim Rola - Luci /\xA0
10 - Satoshi Fumi - Eternal Refrain / Download episode on MP3 (Right click, save link as...) Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"46.7K",fecha:"2023-09-09",link:"https://mcdn.podbean.com/mf/download/azkuiq/644-HernanCattaneo-2023-09-09.mp3",tracklist:`Dinky \xA0- She's Got Nowhere /
Around Us & Gustin - Hang Tight /
Romain Garcia & Douran - Coming Home /
SOHMI - Only One (Dosem Remix) /
James Organ - Enkai /
Spencer Brown - Curve /
XZYKO, W5 - Volver (Fabian Argomedo Remix) /
veytik_feat._anna_mirani_-_freefallin_kamilo_sanclemente /
Arodes ft Martim Rola - Luci /`},{episodio:"645",titulo:"Resident / Episode 645 / Sep 16 2023",descripcion:`1 - John Cosani - Greys /\xA0
2 - Roy Rosenfeld - Sanga Dance /\xA0
3 - Nu feat. Jo.Ke - Who Loves The Sun (Rodriguez Jr. Remix) /\xA0
4 - Namatjira - Complex Symphonies /\xA0
5 - Around Us & Gustin - Heavenly Voices /\xA0
6 - Gai Barone - Yama /\xA0
7 - Fabricio Guti\xE9rrez - Is\xE3sova /\xA0
8 - Simon Di Marzio - GALACTIC /\xA0
9 - Betical - US /\xA0
10 - DAVI - Deepest Mind / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"57.3K",fecha:"2023-09-16",link:"https://mcdn.podbean.com/mf/download/mntwh7/645-HernanCattaneo-2023-09-16.mp3",tracklist:`John Cosani - Greys /
Roy Rosenfeld - Sanga Dance /
Nu feat. Jo.Ke - Who Loves The Sun (Rodriguez Jr. Remix) /
Namatjira - Complex Symphonies /
Around Us & Gustin - Heavenly Voices /
Gai Barone - Yama /
Fabricio Guti\xE9rrez - Is\xE3sova /
Simon Di Marzio - GALACTIC /
Betical - US /`},{episodio:"646",titulo:"Resident / Episode 646 / Sep 23 2023",descripcion:`1 - Gai & Micah - Please Sit Down (Floor Mix) /\xA0
2 - Juan Lagisquet - Pinecone (Gorkiz, Mind Echoes Remix) /\xA0
3 - Eichenbaum, Fede Pals - Instabilis /\xA0
4 - Michael A - Lunar Horizon /\xA0
5 - Tonaco - Disurbia /\xA0
6 - Kamilo Sanclemente - Whale Voices /\xA0
7 - Dastan & Gux Jimenez \xA0- The High Priestess /\xA0
8 - Quivver & Dave Seaman - Rapid Unscheduled Assembly /\xA0
9 - Oliver Koletzki, Andhim - Branka /\xA0
10 - Adriatique & WhoMadeWho - Miracle (Extended Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.2K",fecha:"2023-09-23",link:"https://mcdn.podbean.com/mf/download/56k7cs/646-HernanCattaneo-2023-09-23.mp3",tracklist:`Gai & Micah - Please Sit Down (Floor Mix) /
Juan Lagisquet - Pinecone (Gorkiz, Mind Echoes Remix) /
Eichenbaum, Fede Pals - Instabilis /
Michael A - Lunar Horizon /
Tonaco - Disurbia /
Kamilo Sanclemente - Whale Voices /
Dastan & Gux Jimenez \xA0- The High Priestess /
Quivver & Dave Seaman - Rapid Unscheduled Assembly /
Oliver Koletzki, Andhim - Branka /`},{episodio:"647",titulo:"Resident / Episode 647 / Sep 30 2023",descripcion:`1 - Gai & Micah - Please Sit Down (F1-Micah, Gai Barone - Starshines) /\xA0
2 - Jonathan Fratamico - ID /\xA0
3 - Alex O'Rion - Librium /\xA0
4 - Gadi Mitrani - Sonshine Love /\xA0
5 - Arodes - Butterflies /\xA0
6 - Sam Hopgood - Blacklight (Eric Lune Remix) /\xA0
7 - ThinkDeep - Together /\xA0
8 - Emre K - Fire In Me (Lonya Remix) /\xA0
9 - GMJ & Matter - Shelter Of Hearts /\xA0
10 - Guy Gerber - Rainchecks In Montreal (Roy Rosenfeld Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.2K",fecha:"2023-09-30",link:"https://mcdn.podbean.com/mf/download/twyjnf/647-HernanCattaneo-2023-09-30.mp3",tracklist:`Gai & Micah - Please Sit Down (F1-Micah, Gai Barone - Starshines) /
Jonathan Fratamico - ID /
Alex O'Rion - Librium /
Gadi Mitrani - Sonshine Love /
Arodes - Butterflies /
Sam Hopgood - Blacklight (Eric Lune Remix) /
ThinkDeep - Together /
Emre K - Fire In Me (Lonya Remix) /
GMJ & Matter - Shelter Of Hearts /`},{episodio:"648",titulo:"Resident / Episode 648 / Oct 07 2023",descripcion:`1 - Gai & Micah - Please Sit Down (F1-Mi1-Oliver & Tom, Lupe Republic - React) /\xA0
2 - Trilucid - Calling /\xA0
3 - Kamine Vox - Coraline (Diego Acosta Remix) /\xA0
4 - Luke Alessi & Jordan Brando - Affogato /\xA0
5 - Alan Cerra - Blackout (Melodiam (AR) Remix) /\xA0
6 - David Calo - Renew (Quivver Remix) /\xA0
7 - Alley SA, Marley Hughes - Sacred Stems (Diego Moreira Remix) /\xA0
8 - Deep Shanti - Cristian Hidalgo /\xA0
9 - Noel Sanger - Falling Upward (Jamie Stevens Remix) /\xA0
10 - BT - Mercury and Solace (Framewerk Vocal Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"58.9K",fecha:"2023-10-07",link:"https://mcdn.podbean.com/mf/download/qq2nh5/648-HernanCattaneo-2023-10-07.mp3",tracklist:`Gai & Micah - Please Sit Down (F1-Mi1-Oliver & Tom, Lupe Republic - React) /
Trilucid - Calling /
Kamine Vox - Coraline (Diego Acosta Remix) /
Luke Alessi & Jordan Brando - Affogato /
Alan Cerra - Blackout (Melodiam (AR) Remix) /
David Calo - Renew (Quivver Remix) /
Alley SA, Marley Hughes - Sacred Stems (Diego Moreira Remix) /
Deep Shanti - Cristian Hidalgo /
Noel Sanger - Falling Upward (Jamie Stevens Remix) /`},{episodio:"649",titulo:"Resident / Episode 649 / Oct 14 2023",descripcion:`1 - Niceshot - Jungle Cruise /\xA0
2 - Scippo - Jan P (Ruben Karapetyan Remix) /\xA0
3 - Gav Easby - Reconcile (Gai Barone Remix) /\xA0
4 - James Harcourt - Disintegration /\xA0
5 - Gespona, Djolee - Colorblind /\xA0
6 - Kamilo Sanclemente - Post Human /\xA0
7 - Uccelli - Magic Pieces /\xA0
8 - South Bloom - Let Me In (Nicolas Rada Bootleg) /\xA0
9 - Luis Damora - Pure State /\xA0
10 - Arodes - Lunar / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"57.9K",fecha:"2023-10-14",link:"https://mcdn.podbean.com/mf/download/aunx2w/649-HernanCattaneo-2023-10-14.mp3",tracklist:`Niceshot - Jungle Cruise /
Scippo - Jan P (Ruben Karapetyan Remix) /
Gav Easby - Reconcile (Gai Barone Remix) /
James Harcourt - Disintegration /
Gespona, Djolee - Colorblind /
Kamilo Sanclemente - Post Human /
Uccelli - Magic Pieces /
South Bloom - Let Me In (Nicolas Rada Bootleg) /
Luis Damora - Pure State /`},{episodio:"650",titulo:"Resident / Episode 650 / Oct 21 2023",descripcion:`1 - Amonita - Walking In The Rain /\xA0
2 - Makebo - Somnium /\xA0
3 - Alan Schultz - Why u scared /\xA0
4 - Meloko, Utli, Mont-Rouge - Paris /\xA0
5 - Fliptech - Amalgamate (UnbrokenOne Remix) /\xA0
6 - Stereo MCs, Rodriguez Jr. - Turn The Light On (Skala Remix) /\xA0
7 - Luciano Scheffer - Tiefenthal /\xA0
8 - Luciano Scheffer - Eclipse /\xA0
9 - Dabeat - Etna /\xA0
10 - Sasha - Wolks Vagon / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"59K",fecha:"2023-10-21",link:"https://mcdn.podbean.com/mf/download/ztespc/650-HernanCattaneo-2023-10-21.mp3",tracklist:`Amonita - Walking In The Rain /
Makebo - Somnium /
Alan Schultz - Why u scared /
Meloko, Utli, Mont-Rouge - Paris /
Fliptech - Amalgamate (UnbrokenOne Remix) /
Stereo MCs, Rodriguez Jr. - Turn The Light On (Skala Remix) /
Luciano Scheffer - Tiefenthal /
Luciano Scheffer - Eclipse /
Dabeat - Etna /`},{episodio:"651",titulo:"Resident / Episode 651 / Oct 28 2023",descripcion:`1 - Of Norway - Smeigedag /\xA0
2 - Sebastian Sellares - Lullaby Of The Seraphim /\xA0
3 - Antrim - Gamble /\xA0
4 - Luciano Elvira - Safe is just a shadow /\xA0
5 - Benja Molina - Quartz /\xA0
6 - SURFFACE - Mentality (Audio Junkies Remix) /\xA0
7 - John Cosani - Greys (Original Mix) /\xA0
8 - Martin Fredes - Shadow Pulse /\xA0
9 - Felipe Gurascier & Juman /\xA0
10 - Golan Zocher, Choopie - The Void / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"55.2K",fecha:"2023-10-28",link:"https://mcdn.podbean.com/mf/download/vfrqwi/651-HernanCattaneo-2023-10-28.mp3",tracklist:`Of Norway - Smeigedag /
Sebastian Sellares - Lullaby Of The Seraphim /
Antrim - Gamble /
Luciano Elvira - Safe is just a shadow /
Benja Molina - Quartz /
SURFFACE - Mentality (Audio Junkies Remix) /
John Cosani - Greys (Original Mix) /
Martin Fredes - Shadow Pulse /
Felipe Gurascier & Juman /`},{episodio:"652",titulo:"Resident / Episode 652 / Nov 04 2023",descripcion:`1 - Madloch, Subnode - September Day (DOT Remix) /\xA0
2 - Eichenbaum - Temporary Feelings /\xA0
3 - Jamie Stevens - Mad Bells /\xA0
4 - Aske Izan - Future /\xA0
5 - Micah, Gai Barone & Echomen - Ecstasy /\xA0
6 - Audio Junkies - Sun gazing /\xA0
7 - Not Demure x Sonic Union - Loosing My Mind /\xA0
8 - Alan Schultz - Broadwalk /\xA0
9 - Bondarev, Aman Anand - WARPP (DJ Ruby Remix) /\xA0
10 - Hernan Cattaneo, Hicky & Kalo - Voyage / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"54.9K",fecha:"2023-11-04",link:"https://mcdn.podbean.com/mf/download/cjutg9/652-HernanCattaneo-2023-11-04.mp3",tracklist:`Madloch, Subnode - September Day (DOT Remix) /
Eichenbaum - Temporary Feelings /
Jamie Stevens - Mad Bells /
Aske Izan - Future /
Micah, Gai Barone & Echomen - Ecstasy /
Audio Junkies - Sun gazing /
Not Demure x Sonic Union - Loosing My Mind /
Alan Schultz - Broadwalk /
Bondarev, Aman Anand - WARPP (DJ Ruby Remix) /`},{episodio:"654",titulo:"Resident / Episode 654 / Nov 18 2023",descripcion:`1 - Golan Zocher & Juan Pablo Torres (Mike Griego Remix) /\xA0
2 - Alan Cerra - Get Loose /\xA0
3 - Melodiam (AR) - Flying Sequences /\xA0
4 - Verche - Espera /\xA0
5 - GMJ & Matter - EXT135 (Kasey Taylor & Karl Pilbrow Remix) /\xA0
6 - Tom Pavicich - Overflight /\xA0
7 - Dowden - Loss of Gravity /\xA0
8 - EANP & AudioTox - Eclipsed /\xA0
9 - XZYKO, W5 - Volver (Fabian Argomedo Remix) /\xA0
10 - AURORA - Churchyard (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"36",descargas:"59.7K",fecha:"2023-11-18",link:"https://mcdn.podbean.com/mf/download/vxpt2s/654-HernanCattaneo-2023-11-18.mp3",tracklist:`Golan Zocher & Juan Pablo Torres (Mike Griego Remix) /
Alan Cerra - Get Loose /
Melodiam (AR) - Flying Sequences /
Verche - Espera /
GMJ & Matter - EXT135 (Kasey Taylor & Karl Pilbrow Remix) /
Tom Pavicich - Overflight /
Dowden - Loss of Gravity /
EANP & AudioTox - Eclipsed /
XZYKO, W5 - Volver (Fabian Argomedo Remix) /`},{episodio:"655",titulo:"Resident / Episode 655 / Nov 25 2023",descripcion:`1 - Emma Vazquez - Bright Day /\xA0
2 - Nicolas Petracca \xA0- Stabing Dance /\xA0
3 - Sounom & Sagou - Into The Mind (Francesco Pico Remix) /\xA0
4 - Emcroy - Erks /\xA0
5 - Montw, Anton Borin (RU) - Obsidian /\xA0
6 - Eichenbaum - Transcender /\xA0
7 - Subandrio Ft Boniface - In Motion /\xA0
8 - Axatipe - Samsara Escape /\xA0
9 - Nichols - Memento (DJ Ruby Remix) /\xA0
10 - Baunder - The Machine & I / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"56.4K",fecha:"2023-11-25",link:"https://mcdn.podbean.com/mf/download/zr5cqd/655-HernanCattaneo-2023-11-25.mp3",tracklist:`Emma Vazquez - Bright Day /
Nicolas Petracca \xA0- Stabing Dance /
Sounom & Sagou - Into The Mind (Francesco Pico Remix) /
Emcroy - Erks /
Montw, Anton Borin (RU) - Obsidian /
Eichenbaum - Transcender /
Subandrio Ft Boniface - In Motion /
Axatipe - Samsara Escape /
Nichols - Memento (DJ Ruby Remix) /`},{episodio:"656",titulo:"Resident / Episode 656 / Dec 02 2023",descripcion:`1 - Pole Folder - Infinite Love (Solstice Mix) /\xA0
2 - Maze 28 - Space Glitch (Ewan Rill Remix) /\xA0
3 - Gux Jimenez - Dancing in Your Fantasy (Juan Pablo Torrez Remix) /\xA0
4 - Living Stereo - Congo Belga /\xA0
5 - Living Stereo - Energy ft. Malena Narvay /\xA0
6 - Carlos Gatto-Immersion Colors /\xA0
7 - Jiminy Hop - Levera (GMJ & Matter Remix) /\xA0
8 - Maxi Degrassi - Soil Sprout /\xA0
9 - GSEP & Rikki Sawyer - The Chant (Lexicon Avenue Remix) /\xA0
10 - Aman Anand, Echo Daft - Novena 2019 (Greenage Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"55K",fecha:"2023-12-02",link:"https://mcdn.podbean.com/mf/download/s8jvq4/656-HernanCattaneo-2023-12-02.mp3",tracklist:`Pole Folder - Infinite Love (Solstice Mix) /
Maze 28 - Space Glitch (Ewan Rill Remix) /
Gux Jimenez - Dancing in Your Fantasy (Juan Pablo Torrez Remix) /
Living Stereo - Congo Belga /
Living Stereo - Energy ft. Malena Narvay /
Carlos Gatto-Immersion Colors /
Jiminy Hop - Levera (GMJ & Matter Remix) /
Maxi Degrassi - Soil Sprout /
GSEP & Rikki Sawyer - The Chant (Lexicon Avenue Remix) /`},{episodio:"657",titulo:"Resident / Episode 657 / Dec 09 2023",descripcion:`1 - Dilby - Organika /\xA0
2 - Ewan Rill - Mind Dust (Hobin Rude Remix) /\xA0
3 - Armen Miran - The Seed /\xA0
4 - Mike Griego - Parody /\xA0
5 - Nick Newman - Art of War /\xA0
6 - Gux Jimenez - Let Me Out (Juanes Mesa remix) /\xA0
7 - Dabeat, Kamilo Sanclemente - \xA0Echoplasm /\xA0
8 - Mir Omar - Departures (Mauro Augugliaro Remix) /\xA0
9 - Henry Saiz -The Quest /\xA0
10 - Because of Art, Jody Wisternoff & James Grant - Free / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"55.4K",fecha:"2023-12-09",link:"https://mcdn.podbean.com/mf/download/tdm2hu/657-HernanCattaneo-2023-12-09.mp3",tracklist:`Dilby - Organika /
Ewan Rill - Mind Dust (Hobin Rude Remix) /
Armen Miran - The Seed /
Mike Griego - Parody /
Nick Newman - Art of War /
Gux Jimenez - Let Me Out (Juanes Mesa remix) /
Dabeat, Kamilo Sanclemente - \xA0Echoplasm /
Mir Omar - Departures (Mauro Augugliaro Remix) /
Henry Saiz -The Quest /`},{episodio:"658",titulo:"Resident / Episode 658 / Dec 16 2023",descripcion:`1 - Not Demure - The Midnight Gospel /\xA0
2 - Gai Barone - Fahrrad /\xA0
3 - Gavin Rochford - Stratus \xA0(Hobin Rude Remix) /\xA0
4 - Maze 28 & Rockka - Inertia /\xA0
5 - Paul Nolan - Cycles /\xA0
6 - Callecat & Paul Hazendonk - State Of Mind /\xA0
7 - Airscape - Cruising (Jaap Ligthart 'Ode To Johan' Bootleg) /\xA0
8 - Nubbelrisk - Snowfield (Cass Remix) /\xA0
9 - Pako and Frederick - Western Approaches (Chris Cargo remix) /\xA0
10 - Koelle, Reza Safinia - Reverie (Ian O Donovan Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"56.3K",fecha:"2023-12-16",link:"https://mcdn.podbean.com/mf/download/u3n4ai/658-HernanCattaneo-2023-12-16.mp3",tracklist:`Not Demure - The Midnight Gospel /
Gai Barone - Fahrrad /
Gavin Rochford - Stratus \xA0(Hobin Rude Remix) /
Maze 28 & Rockka - Inertia /
Paul Nolan - Cycles /
Callecat & Paul Hazendonk - State Of Mind /
Airscape - Cruising (Jaap Ligthart 'Ode To Johan' Bootleg) /
Nubbelrisk - Snowfield (Cass Remix) /
Pako and Frederick - Western Approaches (Chris Cargo remix) /`},{episodio:"659",titulo:"Resident / Episode 659 / Dec 23 2023",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Pole Folder Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"24",descargas:"58.2K",fecha:"2023-12-23",link:"https://mcdn.podbean.com/mf/download/yhv2h5/659-HernanCattaneo-2023-12-23.mp3"},{episodio:"660",titulo:"Resident / Episode 660 / Dec 30 2023",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Parte 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"23",descargas:"57.7K",fecha:"2023-12-30",link:"https://mcdn.podbean.com/mf/download/k9sjh6/660-HernanCattaneo-2023-12-30.mp3"},{episodio:"661",titulo:"Resident / Episode 661 / Jan 06 2024",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"14",descargas:"56.9K",fecha:"2024-01-06",link:"https://mcdn.podbean.com/mf/download/jmh5cn/661-HernanCattaneo-2024-01-06.mp3"},{episodio:"662",titulo:"Resident / Episode 662 / Jan 13 2024",descripcion:"13/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"20",descargas:"59.8K",fecha:"2024-01-13",link:"https://mcdn.podbean.com/mf/download/nckjcc/662-HernanCattaneo-2024-01-13.mp3"},{episodio:"664",titulo:"Resident / Episode 664 / Jan 27 2024",descripcion:"27/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 6 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"8",descargas:"53.8K",fecha:"2024-01-27",link:"https://mcdn.podbean.com/mf/download/m8sd7c/664-HernanCattaneo-2024-01-27.mp3"},{episodio:"665",titulo:"Resident / Episode 665 / Feb 03 2024",descripcion:`1 - Pablo Azturizaga - Heart Strings /\xA0
2 - Antoux - Jupiterian /\xA0
3 - Simos Tagias - Katla (Alex O'Rion Remix) /\xA0
4 - Kamilo Sanclemente - Kore (Original Mix) /\xA0
5 - The Red Eye Shift (Juan Pablo Torrez Remix) /\xA0
6 - Simply City - The Ripple Effect /\xA0
7 - Depeche Mode - Where is the revolution (WorldClique / AudioTox ) /\xA0
8 - Shayan Pasha - Adam & Eve /\xA0
9 - Balcazar & Hector Cortes - Dream /\xA0
10 - The Doors & Gustavo Cerati - Spy (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.7K",fecha:"2024-02-03",link:"https://mcdn.podbean.com/mf/download/pfnp6k/665-HernanCattaneo-2024-02-03.mp3",tracklist:`Pablo Azturizaga - Heart Strings /
Antoux - Jupiterian /
Simos Tagias - Katla (Alex O'Rion Remix) /
Kamilo Sanclemente - Kore (Original Mix) /
The Red Eye Shift (Juan Pablo Torrez Remix) /
Simply City - The Ripple Effect /
Depeche Mode - Where is the revolution (WorldClique / AudioTox ) /
Shayan Pasha - Adam & Eve /
Balcazar & Hector Cortes - Dream /`},{episodio:"666",titulo:"Resident / Episode 666 / Feb 10 2024",descripcion:`1 - Deek That - Ramdeesun /\xA0
2 - Dee Montero - Ethera /\xA0
3 - Lapena - Take Me Up /\xA0
4 - Fran Baigo - Othala (Peter Makto 5AM Mix) /\xA0
5 - Will Konitzer, MeowWow - Moon Dance (Forty Cats Remix) /\xA0
6 - Agustin Pietrocola - Sorcerer /\xA0
7 - Valen Gonzalez & Alain Pauwels - Albuquerque /\xA0
8 - RYAN (CU) - Nirvana /\xA0
9 - Dabeat & Kamilo Sanclemente - Offspring /\xA0
10 - Antrim - La Fin Du Monde \xA0(Dabeat) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"58K",fecha:"2024-02-10",link:"https://mcdn.podbean.com/mf/download/du6e7z/666-HernanCattaneo-2024-02-10.mp3",tracklist:`Deek That - Ramdeesun /
Dee Montero - Ethera /
Lapena - Take Me Up /
Fran Baigo - Othala (Peter Makto 5AM Mix) /
Will Konitzer, MeowWow - Moon Dance (Forty Cats Remix) /
Agustin Pietrocola - Sorcerer /
Valen Gonzalez & Alain Pauwels - Albuquerque /
RYAN (CU) - Nirvana /
Dabeat & Kamilo Sanclemente - Offspring /`},{episodio:"667",titulo:"Resident / Episode 667 / Feb 17 2024",descripcion:`1 - Kris Dur - Saitam /\xA0
2 - Agustin Pengov - Rain (Peter Makto Eivissa Mix) /\xA0
3 - After Burn - Dharma Tribes /\xA0
4 - Sebastien Leger - Safari /\xA0
5 - Kalima - Machine Gun /\xA0
6 - Diego Acosta - Blind & Happy /\xA0
7 - Alan Cerra - Pravya /\xA0
8 - Audiotox, E A N P - Mechanism /\xA0
9 - Jamie Stevens and Ivan Aliaga - ID /\xA0
10 - Juan Sapia - Greatest Gift / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"58.5K",fecha:"2024-02-17",link:"https://mcdn.podbean.com/mf/download/9zqrre/667-HernanCattaneo-2024-02-17.mp3",tracklist:`Kris Dur - Saitam /
Agustin Pengov - Rain (Peter Makto Eivissa Mix) /
After Burn - Dharma Tribes /
Sebastien Leger - Safari /
Kalima - Machine Gun /
Diego Acosta - Blind & Happy /
Alan Cerra - Pravya /
Audiotox, E A N P - Mechanism /
Jamie Stevens and Ivan Aliaga - ID /`},{episodio:"668",titulo:"Resident / Episode 668 / Feb 24 2024",descripcion:`1 - Pablo Asturizaga - Gold Oceans (Hole Box Remix) /\xA0
2 - Felipe Garcia (UY) - Sleeping City /\xA0
3 - Ryan (CU) - Nirvana (Hobin Rude Remix) /\xA0
4 - Corei - Judith (Oliver & Tom Remix) /\xA0
5 - Andr\xE9s Moris, Eichenbaum - Fades -
6 - KAZKO - Last Runner (HAFT Remix) /\xA0
7 - Uccelli - The sun rises /\xA0
8 - Tokumori-Walking /\xA0
9 - Lucas Zarate - Flight Control /\xA0
10 - Nicolas Benedetti - Kismet / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"55.8K",fecha:"2024-02-24",link:"https://mcdn.podbean.com/mf/download/x49769/668-HernanCattaneo-2024-02-24.mp3",tracklist:`Pablo Asturizaga - Gold Oceans (Hole Box Remix) /
Felipe Garcia (UY) - Sleeping City /
Ryan (CU) - Nirvana (Hobin Rude Remix) /
Corei - Judith (Oliver & Tom Remix) /
Andr\xE9s Moris, Eichenbaum - Fades -
KAZKO - Last Runner (HAFT Remix) /
Uccelli - The sun rises /
Tokumori-Walking /
Lucas Zarate - Flight Control /`},{episodio:"669",titulo:"Resident / Episode 669 / Mar 02 2024",descripcion:`1 - Luciano Scheffer - High Frontier /\xA0
2 - Gux Jimenez & Nattier - Just Like Us /\xA0
3 - Miguel Ante - Whisper Secrets /\xA0
4 - Gorkiz, Mind Echoes - Without Your Noose (Ruben Karapetyan Remix) /\xA0
5 - Kostya Outta - Deep Feelings /\xA0
6 - After Burn - Dharma Tribes /\xA0
7 - The Rebirth (Ruede Hagelstein Remix) /\xA0
8 - Dabeat - Portal /\xA0
9 - Andy Woldman, Liam Sieker - Panther (Lemon8 Inner Sanctuary Remix) /\xA0
10 - Christian L\xF6ffler - Ease (Johannes Brecht Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"61.1K",fecha:"2024-03-02",link:"https://mcdn.podbean.com/mf/download/56sx2q/669-HernanCattaneo-2024-03-02.mp3",tracklist:`Luciano Scheffer - High Frontier /
Gux Jimenez & Nattier - Just Like Us /
Miguel Ante - Whisper Secrets /
Gorkiz, Mind Echoes - Without Your Noose (Ruben Karapetyan Remix) /
Kostya Outta - Deep Feelings /
After Burn - Dharma Tribes /
The Rebirth (Ruede Hagelstein Remix) /
Dabeat - Portal /
Andy Woldman, Liam Sieker - Panther (Lemon8 Inner Sanctuary Remix) /`},{episodio:"670",titulo:"Resident / Episode 670 / Mar 09 2024",descripcion:`1 - Coqueit \xA0- Revolution /\xA0
2 - After Burn - Golden Ticket /\xA0
3 - David Calo - Death Interface /\xA0
4 - E A N P - Systems /\xA0
5 - Rass (BR) - Sonora /\xA0
6 - Agustin Pengov - Plastic Heart /\xA0
7 - Alan Cerra - Blackout (Melodiam (AR) Remix) /\xA0
8 - Daniel Curotto - Mediterraneo (East Cafe Balearic Remix) /\xA0
9 - Madeaux - Me & U (Pablo Loiacono Bootleg) /\xA0
10 - Nicolas Benedetti - Meraki / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"53.8K",fecha:"2024-03-09",link:"https://mcdn.podbean.com/mf/download/scisf4/670-HernanCattaneo-2024-03-09.mp3",tracklist:`Coqueit \xA0- Revolution /
After Burn - Golden Ticket /
David Calo - Death Interface /
E A N P - Systems /
Rass (BR) - Sonora /
Agustin Pengov - Plastic Heart /
Alan Cerra - Blackout (Melodiam (AR) Remix) /
Daniel Curotto - Mediterraneo (East Cafe Balearic Remix) /
Madeaux - Me & U (Pablo Loiacono Bootleg) /`},{episodio:"671",titulo:"Resident / Episode 671 / Mar 16 2024",descripcion:`1 - After Burn - Mindness /\xA0
2 - Around Us - Invisible Time (Eichenbaum Remix) /\xA0
3 - Kalima - Heaven /\xA0
4 - Ewan Rill - Ghosted Voices /\xA0
5 - Apparat - Holdon (Derk Private Edit) /\xA0
6 - Edu Schwartz - Exordium /\xA0
7 - Paul Deep - White Karma /\xA0
8 - GMJ & Matter - Ascending Sun /\xA0
9 - Dowden - Diatom /\xA0
10 - Nicolas Rada - Cascadia / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.3K",fecha:"2024-03-16",link:"https://mcdn.podbean.com/mf/download/9a3t8d/671-HernanCattaneo-2024-03-16.mp3",tracklist:`After Burn - Mindness /
Around Us - Invisible Time (Eichenbaum Remix) /
Kalima - Heaven /
Ewan Rill - Ghosted Voices /
Apparat - Holdon (Derk Private Edit) /
Edu Schwartz - Exordium /
Paul Deep - White Karma /
GMJ & Matter - Ascending Sun /
Dowden - Diatom /`},{episodio:"672",titulo:"Resident / Episode 672 / Mar 23 2024",descripcion:`1 - D-Nox & Beckers - Astral /\xA0
2 - Zankee Gulati - Magnetic Island /\xA0
3 - Bodaishin, Mauro Masi - Ocarina /\xA0
4 - Dave Seaman - Yoho /\xA0
5 - David Calo - Fish Harmonizer /\xA0
6 - Hot Natured & Ali Love - Benediction (Oliver & Tom Edit) /\xA0
7 - Michael A - Impact /\xA0
8 - Alan Cerra - Godspeed /\xA0
9 - Budakid - Infinity /\xA0
10 - Marsh - Warrior / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"53.4K",fecha:"2024-03-23",link:"https://mcdn.podbean.com/mf/download/g67ygt/672-HernanCattaneo-2024-03-23.mp3",tracklist:`D-Nox & Beckers - Astral /
Zankee Gulati - Magnetic Island /
Bodaishin, Mauro Masi - Ocarina /
Dave Seaman - Yoho /
David Calo - Fish Harmonizer /
Hot Natured & Ali Love - Benediction (Oliver & Tom Edit) /
Michael A - Impact /
Alan Cerra - Godspeed /
Budakid - Infinity /`},{episodio:"673",titulo:"Resident / Episode 673 / Mar 30 2024",descripcion:`1 - Dublew, Eichenbaum, Stereo Munk - Dorma /\xA0
2 - Sebastian Busto - The Empress /\xA0
3 - Michael A - Cirrus /\xA0
4 - Maxi Degrassi - Soil Sprout /\xA0
5 - Forty Cats - Nocturne /\xA0
6 - Hideo Kobayashi, Alistair - Espiritualidade (Weird Sounding Dude & FM Dub) /\xA0
7 - Andr\xE9 Moret, Gorkiz - The Hollow /\xA0
8 - Emma Vazquez & Soul Relay - Anemone /\xA0
9 - Kalima - Warrior /\xA0
10 - Simos Tagia - Ronin / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"56.2K",fecha:"2024-03-30",link:"https://mcdn.podbean.com/mf/download/uja7kw/673-HernanCattaneo-2024-03-30.mp3",tracklist:`Dublew, Eichenbaum, Stereo Munk - Dorma /
Sebastian Busto - The Empress /
Michael A - Cirrus /
Maxi Degrassi - Soil Sprout /
Forty Cats - Nocturne /
Hideo Kobayashi, Alistair - Espiritualidade (Weird Sounding Dude & FM Dub) /
Andr\xE9 Moret, Gorkiz - The Hollow /
Emma Vazquez & Soul Relay - Anemone /
Kalima - Warrior /`},{episodio:"674",titulo:"Resident / Episode 674 / Apr 06 2024",descripcion:`1 - Thomas Schwartz, Fausto Fanizza - Geka /\xA0
2 - Ewan Rill - Grot /\xA0
3 - Sebasti\xE1n Busto - Astrology /\xA0
4 - Pablo Asturizaga - Embajada Bolivia /\xA0
5 - Arnold T & Alain Pauwels - Baily's Beads /\xA0
6 - Off Night ft Lannakise - Deeps Down (Lopezhouse Rework) /\xA0
7 - Kebin Van Reeken - Invisible (Gorkiz Remix) /\xA0
8 - Michael A - Pulstar (Fabreeka Remix) /\xA0
9 - Dmitry Molosh - Modul /\xA0
10 - Andy Woldman & Liam Sieker - Jaguar (Golan Zocher remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"53.1K",fecha:"2024-04-06",link:"https://mcdn.podbean.com/mf/download/gghevd/674-HernanCattaneo-2024-04-06.mp3",tracklist:`Thomas Schwartz, Fausto Fanizza - Geka /
Ewan Rill - Grot /
Sebasti\xE1n Busto - Astrology /
Pablo Asturizaga - Embajada Bolivia /
Arnold T & Alain Pauwels - Baily's Beads /
Off Night ft Lannakise - Deeps Down (Lopezhouse Rework) /
Kebin Van Reeken - Invisible (Gorkiz Remix) /
Michael A - Pulstar (Fabreeka Remix) /
Dmitry Molosh - Modul /`},{episodio:"675",titulo:"Resident / Episode 675 / Apr 13 2024",descripcion:`1 - Amber Long, Sergio Vilas - Separation /\xA0
2 - Four Candles - Hidden Beauty /\xA0
3 - Bachir Salloum - Honda Attack /\xA0
4 - Eric Lune & Juan Sapia - Deliverance /\xA0
5 - Eric Lune & Juan Sapia - Tension Release /\xA0
6 - Felipe Garcia - Foggy Days (Berni Turletti Remix) /\xA0
7 - Matador - Remember (Marcelo Vasami Rework) /\xA0
8 - Gai Barone - Thinking Together /\xA0
9 - Juan Pablo Torrez, Golan Zocher - Cosmic Resonance (Mike Griego) /\xA0
10 - DENNEY - Smoke / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"48.9K",fecha:"2024-04-13",link:"https://mcdn.podbean.com/mf/download/z55f7miyhsyebkan/675-HernanCattaneo-2024-04-13.mp3",tracklist:`Amber Long, Sergio Vilas - Separation /
Four Candles - Hidden Beauty /
Bachir Salloum - Honda Attack /
Eric Lune & Juan Sapia - Deliverance /
Eric Lune & Juan Sapia - Tension Release /
Felipe Garcia - Foggy Days (Berni Turletti Remix) /
Matador - Remember (Marcelo Vasami Rework) /
Gai Barone - Thinking Together /
Juan Pablo Torrez, Golan Zocher - Cosmic Resonance (Mike Griego) /`},{episodio:"676",titulo:"Resident / Episode 676 / Apr 20 2024",descripcion:`1 - Tim Angrave - Ethereal /\xA0
2 - Shayan Pasha - Moments (Ewan Rill Remix) /\xA0
3 - Gai Barone & Micah - Pleiades /\xA0
4 - Axshan - Miracle Of Music (Ranj Kaler Dub) /\xA0
5 - Nicolas Masseyeff - Life Reshade /\xA0
6 - Matthew Sona - All That Is /\xA0
7 - Redspace, Ismail M - Avenue /\xA0
8 - Mat\xEDas Del\xF3ngaro - Athlete /\xA0
9 - Cary Crank - Open Sea (Satoshi Fumi Remix) /\xA0
10 - QUIQUI - Let There Be Light (Treavor Moontribe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"47.7K",fecha:"2024-04-20",link:"https://mcdn.podbean.com/mf/download/s9rn77w98kzpmr8q/676-HernanCattaneo-2024-04-20.mp3",tracklist:`Tim Angrave - Ethereal /
Shayan Pasha - Moments (Ewan Rill Remix) /
Gai Barone & Micah - Pleiades /
Axshan - Miracle Of Music (Ranj Kaler Dub) /
Nicolas Masseyeff - Life Reshade /
Matthew Sona - All That Is /
Redspace, Ismail M - Avenue /
Mat\xEDas Del\xF3ngaro - Athlete /
Cary Crank - Open Sea (Satoshi Fumi Remix) /`},{episodio:"677",titulo:"Resident / Episode 677 / Apr 27 2024",descripcion:`1 - Michael A - Dissenter (Hobin Rude Remix) /\xA0
2 - Dj Bird & Papai ACCI Attila - Future (Diego Acosta Remix) /\xA0
3 - Abaze, Paul Arcane, J\xD8AK - City of the Clouds (Gorkiz Remix) /\xA0
4 - The Knife - Hearthbeat (E A N P Unofficial Remix) /\xA0
5 - Agustin Pengov - Casino /\xA0
6 - Simos Tagia -Strange to ourselfs /\xA0
7 - Nhii, Sarkis Mikael - Synthronize /\xA0
8 - Ivan Aliaga - Not Permissions /\xA0
9 - Jiminy Hop - Nawaro (GMJ Remix) /\xA0
10 - The Wash - Voyage / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"48.7K",fecha:"2024-04-27",link:"https://mcdn.podbean.com/mf/download/m9bmd2tv4ntp4vdx/677-HernanCattaneo-2024-04-27.mp3",tracklist:`Michael A - Dissenter (Hobin Rude Remix) /
Dj Bird & Papai ACCI Attila - Future (Diego Acosta Remix) /
Abaze, Paul Arcane, J\xD8AK - City of the Clouds (Gorkiz Remix) /
The Knife - Hearthbeat (E A N P Unofficial Remix) /
Agustin Pengov - Casino /
Simos Tagia -Strange to ourselfs /
Nhii, Sarkis Mikael - Synthronize /
Ivan Aliaga - Not Permissions /
Jiminy Hop - Nawaro (GMJ Remix) /`},{episodio:"678",titulo:"Resident / Episode 678 / May 04 2024",descripcion:`1 - Billka - Secret /\xA0
2 - Fly On Ground - Matias Gauna /\xA0
3 - Axatipe - Mukti /\xA0
4 - A-Jay (SL), Forty Cats - Obscurity /\xA0
5 - Randy De Silva - Sound of Dream /\xA0
6 - Gorkiz, Kaito Aman, RYAN (CU) - Something This Way Comes (BiGz & Freedo Mosho Remix) /\xA0
7 - PAUL (AR) - Interdimentional /\xA0
8 - G\xF8vinda, Hybrid Horses, Glamour's Joint, - Floriana /\xA0
9 - Luciano Elvira - Bruce /\xA0
10 - Telefon Tel Aviv - You Are the Worst Thing in the World (David Defoe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"51.6K",fecha:"2024-05-04",link:"https://mcdn.podbean.com/mf/download/6rzkr7b35c8d4rp3/678-HernanCattaneo-2024-05-04.mp3",tracklist:`Billka - Secret /
Fly On Ground - Matias Gauna /
Axatipe - Mukti /
A-Jay (SL), Forty Cats - Obscurity /
Randy De Silva - Sound of Dream /
Gorkiz, Kaito Aman, RYAN (CU) - Something This Way Comes (BiGz & Freedo Mosho Remix) /
PAUL (AR) - Interdimentional /
G\xF8vinda, Hybrid Horses, Glamour's Joint, - Floriana /
Luciano Elvira - Bruce /`},{episodio:"679",titulo:"Resident / Episode 679 / May 11 2024",descripcion:`1 - Kandar - Come Alive /\xA0
2 - Danny Howells - Mycelium /\xA0
3 - VegaZ - Arina & Darina (Menkee Remix) /\xA0
4 - Yonsh & SisterSweet - Soul Overture /\xA0
5 - Andromedha - Sun Was Red /\xA0
6 - Matthew Sona - Synthetic /\xA0
7 - Juan Lagisquet, Felipe Garcia (UY) - Hokkaido /\xA0
8 - Luciano Levin & Katzen - Vangelis /\xA0
9 - Evolution, Jayn Hanna - Walking On Fire - (Luca Abayan Unofficial \xA0Remix) /\xA0
10 - Kamilo Sanclemente & Mauro Aguirre - Essence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"46.5K",fecha:"2024-05-11",link:"https://mcdn.podbean.com/mf/download/46vebmw6er6c62hv/679-HernanCattaneo-2024-05-11.mp3",tracklist:`Kandar - Come Alive /
Danny Howells - Mycelium /
VegaZ - Arina & Darina (Menkee Remix) /
Yonsh & SisterSweet - Soul Overture /
Andromedha - Sun Was Red /
Matthew Sona - Synthetic /
Juan Lagisquet, Felipe Garcia (UY) - Hokkaido /
Luciano Levin & Katzen - Vangelis /
Evolution, Jayn Hanna - Walking On Fire - (Luca Abayan Unofficial \xA0Remix) /`},{episodio:"680",titulo:"680 Hernan Cattaneo podcast - 2024-05-18",descripcion:`1 - RIGOONI - Guimel /\xA0
2 - Peces Raros - No Van a Parar (Juan Sapia Edit) /\xA0
3 - thebassmonkey - Enceladus (Nomad in the Dark Remix) /\xA0
4 - Nahue Sintes, Ve\u0161c\u030Ca - Oblivion (Ft. JOSEFINA) /\xA0
5 - Gowzer interscope /\xA0
6 - Carla Cimino & Luciano Scheffer - Zephyr /\xA0
7 - Franco Camiolo & Yonsh - Gewissen /\xA0
8 - Nila - Aurora Ascension /\xA0
9 - Around Us - I Got This (Lemon8 Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"50.8K",fecha:"2024-05-18",link:"https://mcdn.podbean.com/mf/download/j55sb6zsg73v3abu/680-HernanCattaneo-2024-05-18.mp3",tracklist:`RIGOONI - Guimel /
Peces Raros - No Van a Parar (Juan Sapia Edit) /
thebassmonkey - Enceladus (Nomad in the Dark Remix) /
Nahue Sintes, Ve\u0161c\u030Ca - Oblivion (Ft. JOSEFINA) /
Gowzer interscope /
Carla Cimino & Luciano Scheffer - Zephyr /
Franco Camiolo & Yonsh - Gewissen /
Nila - Aurora Ascension /`},{episodio:"681",titulo:"Resident / Episode 681 / May 25 2024",descripcion:`1 - Emotional Tourist - Her Simple Dreams /\xA0
2 - Facgar - Infinite /\xA0
3 - Uccelli - Atardecer /\xA0
4 - Hakan Ozurun - Got The Mood /\xA0
5 - Poli Poli & Boris Louit - Fleeting Phenomenon /\xA0
6 - Kebin van Reeken - Liminal (Will DeKeizer Remix) /\xA0
7 - Gowzer - Slicer /\xA0
8 - Spencer Brown - Guardian /\xA0
9 - Vagner Silveira - Elements of Life /\xA0
10 - Newman (I Love) - Leave In Silence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"48.9K",fecha:"2024-05-25",link:"https://mcdn.podbean.com/mf/download/i3drk7kraye84iqa/681-HernanCattaneo-2024-05-25.mp3",tracklist:`Emotional Tourist - Her Simple Dreams /
Facgar - Infinite /
Uccelli - Atardecer /
Hakan Ozurun - Got The Mood /
Poli Poli & Boris Louit - Fleeting Phenomenon /
Kebin van Reeken - Liminal (Will DeKeizer Remix) /
Gowzer - Slicer /
Spencer Brown - Guardian /
Vagner Silveira - Elements of Life /`},{episodio:"682",titulo:"Resident / Episode 682 / Jun 01 2024",descripcion:`1 - Lost Desert - Jumbo Jet /\xA0
2 - WhoMadeWho & RY X - Love Will Save Me \xA0(Marten Lou Remixes) /\xA0
3 - ZAC - Purple Pearl /\xA0
4 - Ric Niels - CDU /\xA0
5 - The Wash - Clusterfuck (Analog Jungs Remix) /\xA0
6 - Claudio Cornejo (AR) - Triton /\xA0
7 - Wilian Kraupp - Alpha /\xA0
8 - Arodes - Burning Like this /\xA0
9 - Hernan Cattaneo, Hicky & Kalo - Voyage (Denis Horvat
Remix) /\xA0
10 - Trilucid - Cheyenne (Roger Martinez Instrumental
Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"44.4K",fecha:"2024-06-01",link:"https://mcdn.podbean.com/mf/download/bwf58gb76chammhp/682-HernanCattaneo-2024-06-01.mp3",tracklist:`Lost Desert - Jumbo Jet /
WhoMadeWho & RY X - Love Will Save Me \xA0(Marten Lou Remixes) /
ZAC - Purple Pearl /
Ric Niels - CDU /
The Wash - Clusterfuck (Analog Jungs Remix) /
Claudio Cornejo (AR) - Triton /
Wilian Kraupp - Alpha /
Arodes - Burning Like this /
Hernan Cattaneo, Hicky & Kalo - Voyage (Denis Horvat
Remix) /
Trilucid - Cheyenne (Roger Martinez Instrumental`},{episodio:"684",titulo:"Resident / Episode 684 / Jun 15 2024",descripcion:`1 - Greg Ochman - Wrapped With Clouds (Aske Izan Remix) /\xA0
2 - Nacht (Dowden Extended Remix) /\xA0
3 - Claudio Cornejo (AR) - Malkara /\xA0
4 - Federico Epis - My Place /\xA0
5 - Moby - Why Does My Heart Feel So Bad (Claudio Cornejo (AR) /\xA0
6 - Kostya Outta - Chasing Highs (DJ Ruby Remix) /\xA0
7 - Agustin Pietrocola & Andr\xE9s Moris - New Beginning /\xA0
8 - Helios - Infinite Love Sacred Essence /\xA0
9 - Chris Cargo - Coyote (Luis Damora Remix) /\xA0
10 - Alejo Gonzalez - Lost Angel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"45.3K",fecha:"2024-06-15",link:"https://mcdn.podbean.com/mf/download/xr7nkq9e98cy2r3y/684-HernanCattaneo-2024-06-15.mp3",tracklist:`Greg Ochman - Wrapped With Clouds (Aske Izan Remix) /
Nacht (Dowden Extended Remix) /
Claudio Cornejo (AR) - Malkara /
Federico Epis - My Place /
Moby - Why Does My Heart Feel So Bad (Claudio Cornejo (AR) /
Kostya Outta - Chasing Highs (DJ Ruby Remix) /
Agustin Pietrocola & Andr\xE9s Moris - New Beginning /
Helios - Infinite Love Sacred Essence /
Chris Cargo - Coyote (Luis Damora Remix) /`},{episodio:"685",titulo:"Resident / Episode 685 / Jun 22 2024",descripcion:`1 - Kalima - Dune /\xA0
2 - Kostya Outta - Awakening /\xA0
3 - Kalima - Talisman /\xA0
4 - Cedren & Manu - l, Influence /\xA0
5 - Diego Berrondo - Living the Present (Extended Mix) /\xA0
6 - Arbey Gonzalez - True Shield (Esteban Ikasovic Remix) /\xA0
7 - Agustin Pietrocola & Andr\xE9s Moris - The Key /\xA0
8 - Gowzer - Vibrance /\xA0
9 - PAUL (AR) - Rise (DJ Ruby Remix) /\xA0
10 - Franco Armellini - Eastrail (Sebastian Busto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"44.3K",fecha:"2024-06-22",link:"https://mcdn.podbean.com/mf/download/mbwtksp32x2q8upp/685-HernanCattaneo-2024-06-22.mp3",tracklist:`Kalima - Dune /
Kostya Outta - Awakening /
Kalima - Talisman /
Cedren & Manu - l, Influence /
Diego Berrondo - Living the Present (Extended Mix) /
Arbey Gonzalez - True Shield (Esteban Ikasovic Remix) /
Agustin Pietrocola & Andr\xE9s Moris - The Key /
Gowzer - Vibrance /
PAUL (AR) - Rise (DJ Ruby Remix) /`},{episodio:"686",titulo:"Resident / Episode 686 / Jun 29 2024",descripcion:`1 - Fran Garay - Phase Sync /\xA0
2 - Black 8 - Lunar /\xA0
3 - Rodrigo Lapena - Ether (Alan Cerra Remix) /\xA0
4 - Beyond Infinity (Carlos Gatto Remix) - Neurospace /\xA0
5 - Andr\xE9s Moris - Rust (Agustin Pengov Remix) /\xA0
6 - Liam Garcia & Keef Luv - CDA (Dimi Mechero Remix) /\xA0
7 - Neuralis - Destierro (Kalima, Kris Dur Remix) /\xA0
8 - M.O.S. - Night Owls /\xA0
9 - Alan Cerra - Drive /\xA0
10 - Richie Blacker - Fool For Loving You / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"46.3K",fecha:"2024-06-29",link:"https://mcdn.podbean.com/mf/download/yzsw6uwj6ky4wpy8/686-HernanCattaneo-2024-06-29.mp3",tracklist:`Fran Garay - Phase Sync /
Black 8 - Lunar /
Rodrigo Lapena - Ether (Alan Cerra Remix) /
Beyond Infinity (Carlos Gatto Remix) - Neurospace /
Andr\xE9s Moris - Rust (Agustin Pengov Remix) /
Liam Garcia & Keef Luv - CDA (Dimi Mechero Remix) /
Neuralis - Destierro (Kalima, Kris Dur Remix) /
M.O.S. - Night Owls /
Alan Cerra - Drive /`},{episodio:"687",titulo:"Resident / Episode 687 / Jul 06 2024",descripcion:`1 - S\xE9bastien L\xE9ger - Omira /\xA0
2 - Forty Cats - Ground (The Wash Remix) /\xA0
3 - ELECTRONIC - Getting Away With It ( PAUL (AR))
4 - Sonic Union - Running To You /\xA0
5 - K Loveski & Nicolas Benedetti - Tarab /\xA0
6 - Sofia Deren - Dark Side of the Star /\xA0
7 - John Cosani - I DID /\xA0
8 - Hans Zimmer - Paul's Dream (Christopher Erre Edit) /\xA0
9 - Hobin Rude - Message Me When You Get Home /\xA0
10 - Paradorks - The Last Time (Hassan Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"47.3K",fecha:"2024-07-06",link:"https://mcdn.podbean.com/mf/download/jk9ryqj9cscg8xnm/687-HernanCattaneo-2024-07-06.mp3",tracklist:`S\xE9bastien L\xE9ger - Omira /
Forty Cats - Ground (The Wash Remix) /
ELECTRONIC - Getting Away With It ( PAUL (AR))
Sonic Union - Running To You /
K Loveski & Nicolas Benedetti - Tarab /
Sofia Deren - Dark Side of the Star /
John Cosani - I DID /
Hans Zimmer - Paul's Dream (Christopher Erre Edit) /
Hobin Rude - Message Me When You Get Home /`},{episodio:"688",titulo:"Resident / Episode 688 / Jul 13 2024",descripcion:`1 - Hardt Antoine - I Will /\xA0
2 - BIG - Danger (Diego Moreira Remix) /\xA0
3 - Alan Cerra - Drive /\xA0
4 - Hernan Cattaneo - Tranquilo (brandub & Knowbru remix) /\xA0
5 - Alto Astral - Luci\xE9rnaga /\xA0
6 - Because Of Art - Transient /\xA0
7 - Hassan- Tunnel /\xA0
8 - Paul Deep - Tique /\xA0
9 - Ogawa, OMB, Haruo Chikada - CO2 \xA0(Kostya Outta Remix) /\xA0
10 - Paul Roux - Hold On / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"43.9K",fecha:"2024-07-13",link:"https://mcdn.podbean.com/mf/download/gbekd95uxz23uhfq/688-HernanCattaneo-2024-07-13.mp3",tracklist:`Hardt Antoine - I Will /
BIG - Danger (Diego Moreira Remix) /
Alan Cerra - Drive /
Hernan Cattaneo - Tranquilo (brandub & Knowbru remix) /
Alto Astral - Luci\xE9rnaga /
Because Of Art - Transient /
Hassan- Tunnel /
Paul Deep - Tique /
Ogawa, OMB, Haruo Chikada - CO2 \xA0(Kostya Outta Remix) /`},{episodio:"689",titulo:"Resident / Episode 689 / Jul 20 2024",descripcion:`1 - Madraas \u2013 Nebra /\xA0
2 - Hobin Rude - Vivid Dreamscapes /\xA0
3 - Tamir Regev - Sounds Like A Melody /\xA0
4 - Paul Deep (AR) - Odyssey (Dmitry Molosh Remix /\xA0
5 - Because Of Art - You /\xA0
6 - Juan Sapia - Dragon Fly /\xA0
7 - Gowzer - Listen to me /\xA0
8 - Mike Griego - Back In Trance /\xA0
9 - Pablo Asturizaga - Sirenas /\xA0
10 - Ameli Paul - Ruptura Hernan Cattaneo & Mercurio Remix / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"45.4K",fecha:"2024-07-20",link:"https://mcdn.podbean.com/mf/download/nwuv2x4srgjyn3gh/689-HernanCattaneo-2024-07-20.mp3",tracklist:`Madraas \u2013 Nebra /
Hobin Rude - Vivid Dreamscapes /
Tamir Regev - Sounds Like A Melody /
Paul Deep (AR) - Odyssey (Dmitry Molosh Remix /
Because Of Art - You /
Juan Sapia - Dragon Fly /
Gowzer - Listen to me /
Mike Griego - Back In Trance /
Pablo Asturizaga - Sirenas /`},{episodio:"690",titulo:"Resident / Episode 690 / Jul 27 2024",descripcion:`1 - Alto Astral - Between Us
2 - Carlos Gatto - Hissing Pulse /\xA0
3 - Paul James Nolan - Hierophant
4 - Dosem feat. SOHMI - Answer /\xA0
5 - Kay-D - Midnight Hour (Luca Abayan Remix) /\xA0
6 - Nicolas Ruiz - Glass Shatters (Agustin Pietrocola) /\xA0
7 - Subandrio - Fusion /\xA0
8 - E A N P - Hypersonic /\xA0
9 - Federico Epis - Restart /\xA0
10 - AFAR - Im Bad (Checo Cotela Private Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"44.1K",fecha:"2024-07-27",link:"https://mcdn.podbean.com/mf/download/et9ze6xexapd2jvs/690-HernanCattaneo-2024-07-27.mp3",tracklist:`Alto Astral - Between Us
Carlos Gatto - Hissing Pulse /
Paul James Nolan - Hierophant
Dosem feat. SOHMI - Answer /
Kay-D - Midnight Hour (Luca Abayan Remix) /
Nicolas Ruiz - Glass Shatters (Agustin Pietrocola) /
Subandrio - Fusion /
E A N P - Hypersonic /
Federico Epis - Restart /`},{episodio:"691",titulo:"Resident / Episode 691 / Aug 03 2024",descripcion:`1 - Mike Rish - Ghostwriter /\xA0
2 - Alan Cerra - Storm /\xA0
3 - EANP - Karim (Kenan Savrun Remix) /\xA0
4 - Quivver - That Place You Know /\xA0
5 - Gai Barone \xA0- Disadvantaged Positions /\xA0
6 - Matrix & Danny J \u2013 Vertigo (Federico Monachesi Edit) /\xA0
7 - Alican - Everything To Me /\xA0
8 - Tiefstone - Eclico /\xA0
9 - Zstimer - So Good (Nila Remix) If You Wait /\xA0
10 - Durante feat. HANA - Hot Night (Khen remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"40.1K",fecha:"2024-08-03",link:"https://mcdn.podbean.com/mf/download/nnhk5it6teqr8iug/691-HernanCattaneo-2024-08-03.mp3",tracklist:`Mike Rish - Ghostwriter /
Alan Cerra - Storm /
EANP - Karim (Kenan Savrun Remix) /
Quivver - That Place You Know /
Gai Barone \xA0- Disadvantaged Positions /
Matrix & Danny J \u2013 Vertigo (Federico Monachesi Edit) /
Alican - Everything To Me /
Tiefstone - Eclico /
Zstimer - So Good (Nila Remix) If You Wait /`},{episodio:"692",titulo:"Resident / Episode 692 / Aug 10 2024",descripcion:`1 - Stereo Underground - Wanderlust /\xA0
2 - Dave Seaman - Nightfalls (PAUL (AR)) /\xA0
3 - Kostya Outta & Kamilo Sanclemente - Starlight (The Wash Remix) /\xA0
4 - Valen Gonzalez, Alain Pauwels - Un Dios Aparte /\xA0
5 - Teleport X, Cedren & Manu-L - id /\xA0
6 - IDQ - G2 /\xA0
7 - Federico Monachesi, Nicolas Viana - Dioptase /\xA0
8 - Because Of Art - Real High /\xA0
9 - Mike Griego - Deaf (Kostya Outta Remix) /\xA0
10 - D-Nox & Beckers feat Gai Barone \xA0- Acid / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"35.2K",fecha:"2024-08-10",link:"https://mcdn.podbean.com/mf/download/a2bdtx9mz9itammz/692-HernanCattaneo-2024-08-10.mp3",tracklist:`Stereo Underground - Wanderlust /
Dave Seaman - Nightfalls (PAUL (AR)) /
Kostya Outta & Kamilo Sanclemente - Starlight (The Wash Remix) /
Valen Gonzalez, Alain Pauwels - Un Dios Aparte /
Teleport X, Cedren & Manu-L - id /
IDQ - G2 /
Federico Monachesi, Nicolas Viana - Dioptase /
Because Of Art - Real High /
Mike Griego - Deaf (Kostya Outta Remix) /`},{episodio:"694",titulo:"Resident / Episode 694 / Aug 24 2024",descripcion:`1 - Ruben Karapetyan - Silentium /\xA0
2 - Ruben Karapetyan - Silentium (Gai Barone Remix) /\xA0
3 - Mazayr - Falling /\xA0
4 - Digital Mess - Lose Myself /\xA0
5 - Simos Tagias - Strange To Ourselves (Tonaco Remix) /\xA0
6 - NAVAR - Seeing you again /\xA0
7 - Lateral Cut Groove - Humdinger /\xA0
8 - Boytronic - Bryllyant (Baunder remix) /\xA0
9 - Gheit - Auditorial /\xA0
10 - Lopezhouse - Crosses and Angels Feat. Angela (Guy Mantzur Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"35.1K",fecha:"2024-08-24",link:"https://mcdn.podbean.com/mf/download/g8y9v3j733p3tvwb/694-HernanCattaneo-2024-08-24.mp3",tracklist:`Ruben Karapetyan - Silentium /
Ruben Karapetyan - Silentium (Gai Barone Remix) /
Mazayr - Falling /
Digital Mess - Lose Myself /
Simos Tagias - Strange To Ourselves (Tonaco Remix) /
NAVAR - Seeing you again /
Lateral Cut Groove - Humdinger /
Boytronic - Bryllyant (Baunder remix) /
Gheit - Auditorial /`},{episodio:"695",titulo:"Resident / Episode 695 / Aug 31 2024",descripcion:`1 - Kraftwerk - Autobahn (live on King Biscuit's Flower Hour FM 1975)[Jim Rider Extended Remix] /\xA0
2 - Juan Buitrago - \xA0Mirrors /\xA0
3 - DJ Zombie, Guy Maayan - Artifical (Weird Sounding Dude Remix) /\xA0
4 - Arcadio - Horizon (Fer Torti Remix) /\xA0
5 - Budakid - Promised /\xA0
6 - Christian Hornbostel - Vela /\xA0
7 - Tom Pavicich - Insight (Iovino Remix) /\xA0
8 - Digital Mess - White Crane /\xA0
9 - Anonimat, Albuquerque, HOO - Above Our Reality /\xA0
10 - Dabeat , Kamilo Sanclemente - Neon Shadows / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"35K",fecha:"2024-08-31",link:"https://mcdn.podbean.com/mf/download/3ctyu8jst2kixskc/695-HernanCattaneo-2024-08-31.mp3",tracklist:`Kraftwerk - Autobahn (live on King Biscuit's Flower Hour FM 1975)[Jim Rider Extended Remix] /
Juan Buitrago - \xA0Mirrors /
DJ Zombie, Guy Maayan - Artifical (Weird Sounding Dude Remix) /
Arcadio - Horizon (Fer Torti Remix) /
Budakid - Promised /
Christian Hornbostel - Vela /
Tom Pavicich - Insight (Iovino Remix) /
Digital Mess - White Crane /
Anonimat, Albuquerque, HOO - Above Our Reality /`},{episodio:"696",titulo:"Resident / Episode 696 / Sep 07 2024",descripcion:`1 - Valdovinos - Sensitive People / 
2 - After Burn & B.I.R.D.D (Ar) - Hearless / 
3 - FJL -\xA0 Illusion Temple / 
4 - KAY D- Stay (Dion Paola (AUS) Remix) / 
5 - Santiago Garcia, Sam Farsio / 
6 - Oliver & Tom - Fennec / 
7 - Ruben Karapetyan - Parisian Vibe (Molac) / 
8 - Nicolas Rada - Abyssal / 
9 - Santi Mossman - Monolit / 
10 - Aurora - The Blade (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"7",descargas:"36.1K",fecha:"2024-09-07",link:"https://mcdn.podbean.com/mf/download/msa8d3v8auek4gk2/696-HernanCattaneo-2024-09-07.mp3",tracklist:`Valdovinos - Sensitive People /
After Burn & B.I.R.D.D (Ar) - Hearless /
FJL -\xA0 Illusion Temple /
KAY D- Stay (Dion Paola (AUS) Remix) /
Santiago Garcia, Sam Farsio /
Oliver & Tom - Fennec /
Ruben Karapetyan - Parisian Vibe (Molac) /
Nicolas Rada - Abyssal /
Santi Mossman - Monolit /`},{episodio:"697",titulo:"Resident / Episode 697 / Sep 14 2024",descripcion:`1 - Eli Nissan - Star Gate /\xA0
2 - Eli Nissan - Miami /\xA0
3 - Rich Curtis & Dowden - A Different World (Juan Deminicis Remix) /\xA0
4 - Jan Blomqvist - Broken Mind Embassy (Luca Saporito Remix) /\xA0
5 - Nick Varon & Graziano Raffa \xA0- Malammore /\xA0
6 - Acopia - Just Fine (Nicolas Viana Bootleg) /\xA0
7 - Roc\xEDo Portillo, Valley (AR) ft Karim Sar Sar - Ghost Face /\xA0
8 - Bicep - Glue (COQUEIT & After Burn Edit) /\xA0
9 - Tiefstone - Persistence /\xA0
10 - Zac , Tiefstone , Camila (Ar) - Kaelid / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"34.9K",fecha:"2024-09-14",link:"https://mcdn.podbean.com/mf/download/8jk7zqs73dydpp2e/697-HernanCattaneo-2024-09-14.mp3",tracklist:`Eli Nissan - Star Gate /
Eli Nissan - Miami /
Rich Curtis & Dowden - A Different World (Juan Deminicis Remix) /
Jan Blomqvist - Broken Mind Embassy (Luca Saporito Remix) /
Nick Varon & Graziano Raffa \xA0- Malammore /
Acopia - Just Fine (Nicolas Viana Bootleg) /
Roc\xEDo Portillo, Valley (AR) ft Karim Sar Sar - Ghost Face /
Bicep - Glue (COQUEIT & After Burn Edit) /
Tiefstone - Persistence /`},{episodio:"698",titulo:"Resident / Episode 698 / Sep 21 2024",descripcion:`1 - Rolasoul - Sacorra /\xA0
2 - Olivier Weiter, Veljko Jovic, Forniva - Ocean (Estiva) /\xA0
3 - Booka Shade - Regenerate (Henri Bergmann Remix) /\xA0
4 - Glenn Morrison & Simon James - Supersonic Velvet /\xA0
5 - Dosem - Unjetlag /\xA0
6 - WhoMadeWho & K\xF6lsch - Heartless (Alex Wann Remix) /\xA0
7 - Agustin Pietrocola - Space /\xA0
8 - Agustin Pietrocola - Wild /\xA0
9 - Golden Hour, Abuk - Terrenal /\xA0
10 - Lately - Rufus Du Sol (Roman Remix) / Download episode on MP3 (Right click, save link as...) p>Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.9K",fecha:"2024-09-21",link:"https://mcdn.podbean.com/mf/download/6vnrpag9drsdiynj/698-HernanCattaneo-2024-09-21.mp3",tracklist:`Rolasoul - Sacorra /
Olivier Weiter, Veljko Jovic, Forniva - Ocean (Estiva) /
Booka Shade - Regenerate (Henri Bergmann Remix) /
Glenn Morrison & Simon James - Supersonic Velvet /
Dosem - Unjetlag /
WhoMadeWho & K\xF6lsch - Heartless (Alex Wann Remix) /
Agustin Pietrocola - Space /
Agustin Pietrocola - Wild /
Golden Hour, Abuk - Terrenal /`},{episodio:"699",titulo:"Resident / Episode 699 / Sep 28 2024",descripcion:`1 - Qess - It's Always Been There Cinthie Remix /\xA0
2 - Hernan Cattaneo & 36db \xA0- Static Sky (Melodic House Mix) /\xA0
3 - Diego Schiller - Open 25 /\xA0
4 - Dosem - Sunsetter /\xA0
5 - Nick Warren - The Rise /\xA0
6 - Rockka - Black Sands (Nicolas Benedetti Remix) /\xA0
7 - Laberynth - Benja Molina /\xA0
8 - Will DeKeizer - Tarantula /\xA0
9 - Hassan Maroofi, David Charpentier, Kooks - No Lemon (Dion Paola) /\xA0
10 - Julian Bast & Herr Bernhardt - Joy / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"34.4K",fecha:"2024-09-28",link:"https://mcdn.podbean.com/mf/download/dyumaawkgnzqz8cn/699-HernanCattaneo-2024-09-28.mp3",tracklist:`Qess - It's Always Been There Cinthie Remix /
Hernan Cattaneo & 36db \xA0- Static Sky (Melodic House Mix) /
Diego Schiller - Open 25 /
Dosem - Sunsetter /
Nick Warren - The Rise /
Rockka - Black Sands (Nicolas Benedetti Remix) /
Laberynth - Benja Molina /
Will DeKeizer - Tarantula /
Hassan Maroofi, David Charpentier, Kooks - No Lemon (Dion Paola) /`},{episodio:"700",titulo:"Resident / Episode 700 / Oct 05 2024",descripcion:`1 - Guy Gerber, Albertina - Dripping Diamonds /\xA0
2 - Billie Eillish - Chihiro (Konvex, Meloko Remix) /\xA0
3 - Francesco Pico - Rise Like A Flower (Jochem Hamerling Remix) /\xA0
4 - Paul Deep , Berni Turletti - Begtse /\xA0
5 - Miss Melera - Silk /\xA0
6 - Miss Melera - Coral /\xA0
7 - Gowzer - Reflection /\xA0
8 - Kalima - Utopia /\xA0
9 - Larrosa (AR) x SACK (AR) X Nico Sparvieri - Lost In Echos /\xA0
10 - Kevin Di Serna & Pole Position - Boral (Musumeci remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"38.4K",fecha:"2024-10-05",link:"https://mcdn.podbean.com/mf/download/vua7jabkxsbdjfs9/700-HernanCattaneo-2024-10-05.mp3",tracklist:`Guy Gerber, Albertina - Dripping Diamonds /
Billie Eillish - Chihiro (Konvex, Meloko Remix) /
Francesco Pico - Rise Like A Flower (Jochem Hamerling Remix) /
Paul Deep , Berni Turletti - Begtse /
Miss Melera - Silk /
Miss Melera - Coral /
Gowzer - Reflection /
Kalima - Utopia /
Larrosa (AR) x SACK (AR) X Nico Sparvieri - Lost In Echos /`},{episodio:"701",titulo:"Resident / Episode 701 / Oct 12 2024",descripcion:`1 - Hot TuneiK & Amber Long - Enn /\xA0
2 - Kamilo Sanclemente - Elyseum (Weird Sounding Dude) /\xA0
3 - Hobin Rude - Echoes of the Forgotten /\xA0
4 - Dmitry Molosh - The Book /\xA0
5 - Supacooks - Blaster (Fuenka Remix) /\xA0
6 - Berni Turletti & Gai Barone - Vibrations of Matter /\xA0
7 - Callecat & Nick Varon - Beyond Perceptions (Hernan Cattaneo & Jamie Stevens Remix) /\xA0
8 - Paul Deep Berni Turletti - Rudra /\xA0
9 - FJL - Lost In Paradise /\xA0
10 - Kevin Di Serna & Pole Position - Boral (Voon Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"36.1K",fecha:"2024-10-12",link:"https://mcdn.podbean.com/mf/download/6t8py87bigakfeu8/701-HernanCattaneo-2024-10-12.mp3",tracklist:`Hot TuneiK & Amber Long - Enn /
Kamilo Sanclemente - Elyseum (Weird Sounding Dude) /
Hobin Rude - Echoes of the Forgotten /
Dmitry Molosh - The Book /
Supacooks - Blaster (Fuenka Remix) /
Berni Turletti & Gai Barone - Vibrations of Matter /
Callecat & Nick Varon - Beyond Perceptions (Hernan Cattaneo & Jamie Stevens Remix) /
Paul Deep Berni Turletti - Rudra /
FJL - Lost In Paradise /`},{episodio:"702",titulo:"Resident / Episode 702 / Oct 19 2024",descripcion:`1 - Stereo Underground - Heartbeat /\xA0
2 - The Smile - Don't Get Me Started (Uccelli Remix) /\xA0
3 - Zankee Gulati - Magnetic Island /\xA0
4 - Valdovinos - Bacab /\xA0
5 - Dave Seaman - Yoho /\xA0
6 - Tali Muss - Impossible /\xA0
7 - Sasha & Jody Barr - Phaxon (Einmusik Remix) /\xA0
8 - Gerwin Van Engelenburg - Grey Matter (Tevatron Remix) /\xA0
9 - Robert Babicz - The Last Soul /\xA0
10 - Hans Zimmer - Day One (PAUL (AR) unofficial rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.2K",fecha:"2024-10-19",link:"https://mcdn.podbean.com/mf/download/xusc6w7s3wranc8m/702-HernanCattaneo-2024-10-19.mp3",tracklist:`Stereo Underground - Heartbeat /
The Smile - Don't Get Me Started (Uccelli Remix) /
Zankee Gulati - Magnetic Island /
Valdovinos - Bacab /
Dave Seaman - Yoho /
Tali Muss - Impossible /
Sasha & Jody Barr - Phaxon (Einmusik Remix) /
Gerwin Van Engelenburg - Grey Matter (Tevatron Remix) /
Robert Babicz - The Last Soul /`},{episodio:"704",titulo:"Resident / Episode 704 / Nov 02 2024",descripcion:`1 - Temple Gate - Lost Love /\xA0
2 - Nicolas Viana, Matthew Sona - Alive /\xA0
3 - Luis Damora & Nila - Lose Kontrol /\xA0
4 - Reconstruct - Repeating Time /\xA0
5 - Bemannte & Bruder - Summer Nights (Antrim Remix) /\xA0
6 - Golan Zocher - Atalo (Dub) /\xA0
7 - Haen - Is This Jazz (Andr\xE9 Moret Remix) /\xA0
8 - Cendryma - Pass Through (Weird Sounding Dude Remix) /\xA0
9 - Patch Park - Hips and Dips /\xA0
10 - Depeche mode - Its No Good (Tiefstone Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"8",descargas:"37K",fecha:"2024-11-02",link:"https://mcdn.podbean.com/mf/download/9mn7bbse84x4pubx/704-HernanCattaneo-2024-11-02.mp3",tracklist:`Temple Gate - Lost Love /
Nicolas Viana, Matthew Sona - Alive /
Luis Damora & Nila - Lose Kontrol /
Reconstruct - Repeating Time /
Bemannte & Bruder - Summer Nights (Antrim Remix) /
Golan Zocher - Atalo (Dub) /
Haen - Is This Jazz (Andr\xE9 Moret Remix) /
Cendryma - Pass Through (Weird Sounding Dude Remix) /
Patch Park - Hips and Dips /`},{episodio:"705",titulo:"Resident / Episode 705 / Nov 09 2024",descripcion:`1 - Fabian Argomedo - Solar /\xA0
2 - Hypercube (GMJ & Matter Remix) /\xA0
3 - Maze 28 - Superbloom /\xA0
4 - Melodiam AR - Big Sirens (Mind Of Us Remix) /\xA0
5 - James Teej- Saturn's Son - Genesis (Satoshi Fumi) /\xA0
6 - Glenn Morrison - Gotta Get It Right /\xA0
7 - Argia - Oxido /\xA0
8 - E A N P - Rocket /\xA0
9 - Paul Deep , Luciano Lozz - Alice /\xA0
10 - Max Copper - Cardano Circles (Kevin Di Serna Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"35.5K",fecha:"2024-11-09",link:"https://mcdn.podbean.com/mf/download/jng3e7vgi3jwujtg/705-HernanCattaneo-2024-11-09.mp3",tracklist:`Fabian Argomedo - Solar /
Hypercube (GMJ & Matter Remix) /
Maze 28 - Superbloom /
Melodiam AR - Big Sirens (Mind Of Us Remix) /
James Teej- Saturn's Son - Genesis (Satoshi Fumi) /
Glenn Morrison - Gotta Get It Right /
Argia - Oxido /
E A N P - Rocket /
Paul Deep , Luciano Lozz - Alice /`},{episodio:"706",titulo:"Resident / Episode 706 / Nov 16 2024",descripcion:`1 - Ignacio Ravagnan \xA0- Strobe /\xA0
2 - Tripswitch - Dose (Kamilo Sanclemente, Andr\xE9 Moret Remix) /\xA0
3 - Gai Barone - ID /\xA0
4 - Martin Di Sciascio - Stoned /\xA0
5 - Agustin Bertolotti - Railride /\xA0
6 - Larrosa (AR), Axel Giova - Obscura /\xA0
7 - Matthew Sona - You Got It /\xA0
8 - Cendryma - Pass Through (Weird Sounding Dude Remix) /\xA0
9 - Kamilo Sanclemente, Andr\xE9 Moret - Mirage /\xA0
10 - Regina Picone - High Spirits / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"35.7K",fecha:"2024-11-16",link:"https://mcdn.podbean.com/mf/download/kidjzd4unzx3ijtx/706-HernanCattaneo-2024-11-16.mp3",tracklist:`Ignacio Ravagnan \xA0- Strobe /
Tripswitch - Dose (Kamilo Sanclemente, Andr\xE9 Moret Remix) /
Gai Barone - ID /
Martin Di Sciascio - Stoned /
Agustin Bertolotti - Railride /
Larrosa (AR), Axel Giova - Obscura /
Matthew Sona - You Got It /
Cendryma - Pass Through (Weird Sounding Dude Remix) /
Kamilo Sanclemente, Andr\xE9 Moret - Mirage /`},{episodio:"707",titulo:"Resident / Episode 707 / Nov 23 2024",descripcion:`1 - Bagsol - After Storm /\xA0
2 - Diego Acosta & Rodrigo Pochelu - Black Cat /\xA0
3 - Agustin Pietrocola - Nitrogen /\xA0
4 - Marc Denuit - Just Say You Want Me (Lila Rose UY Remix) /\xA0
5 - Rick Pier O'Neil - Photon Surge /\xA0
6 - Ruben Karapetyan - State Of Progression /\xA0
7 - Mind Echoes - Reconstruction /\xA0
8 - Gai Barone, Luke Brancaccio & Kiki Cave - Vicious Lights (Lexicon Avenue Remix) /\xA0
9 - Federico Puentes - Orion's Belt (Freedo Mosho & Kaspar Tasane Remix) /\xA0
10 - Dave Seaman - Two by Two (Alican Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.8K",fecha:"2024-11-23",link:"https://mcdn.podbean.com/mf/download/vea9v48njxatcqgg/707-HernanCattaneo-2024-11-23.mp3",tracklist:`Bagsol - After Storm /
Diego Acosta & Rodrigo Pochelu - Black Cat /
Agustin Pietrocola - Nitrogen /
Marc Denuit - Just Say You Want Me (Lila Rose UY Remix) /
Rick Pier O'Neil - Photon Surge /
Ruben Karapetyan - State Of Progression /
Mind Echoes - Reconstruction /
Gai Barone, Luke Brancaccio & Kiki Cave - Vicious Lights (Lexicon Avenue Remix) /
Federico Puentes - Orion's Belt (Freedo Mosho & Kaspar Tasane Remix) /`},{episodio:"708",titulo:"Resident / Episode 708 / Nov 30 2024",descripcion:`1 - Fran Garay - Phase Sync (Eichenbaum, STEREO MUNK & Dublew Remix) -
2 - Kit Lawson - That Was Then /\xA0
3 - Marsh x Volen Sentir - Ascension /\xA0
4 - Tiefstone, Camila (AR) - Positron /\xA0
5 - Anonimat, Nicolas Viana - Endgame /\xA0
6 - James Organ - Come With Me (Feat. The Angel) /\xA0
7 - Tonaco - Future Sirens /\xA0
8 - Kasey Taylor - Razor (Callecat Remix) /\xA0
9 - Roman - For Myself /\xA0
10 - Benja Molina - Quantum / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"35.7K",fecha:"2024-11-30",link:"https://mcdn.podbean.com/mf/download/yv6w4w2bsg2sqt5v/708-HernanCattaneo-2024-11-30.mp3",tracklist:`Fran Garay - Phase Sync (Eichenbaum, STEREO MUNK & Dublew Remix) -
Kit Lawson - That Was Then /
Marsh x Volen Sentir - Ascension /
Tiefstone, Camila (AR) - Positron /
Anonimat, Nicolas Viana - Endgame /
James Organ - Come With Me (Feat. The Angel) /
Tonaco - Future Sirens /
Kasey Taylor - Razor (Callecat Remix) /
Roman - For Myself /`},{episodio:"709",titulo:"Resident / Episode 709 / Dec 07 2024",descripcion:`1 - N-TCHBL - Esther /\xA0
2 - HUSA & ZEYADA -Are We Alive (Sinca Remix) /\xA0
3 - Death on the Balcony - Patterns /\xA0
4 - Hot TuneiK Feat. Amber Long - Heaven On Earth /\xA0
5 - Paul Lennar Ft. Civen Z - Leaving The Lights /\xA0
6 - Paul Lennar Ft. Zetter - Raherka /\xA0
7 - Sistersweet - Birchwood Road /\xA0
8 - FJL, DEMIS - Not Glide /\xA0
9 - Alan Schultz - Drizzle /\xA0
10 - Nordfold - Pathways / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"37.2K",fecha:"2024-12-07",link:"https://mcdn.podbean.com/mf/download/kivtit6ss7fyfief/709-HernanCattaneo-2024-12-07.mp3",tracklist:`N-TCHBL - Esther /
HUSA & ZEYADA -Are We Alive (Sinca Remix) /
Death on the Balcony - Patterns /
Hot TuneiK Feat. Amber Long - Heaven On Earth /
Paul Lennar Ft. Civen Z - Leaving The Lights /
Paul Lennar Ft. Zetter - Raherka /
Sistersweet - Birchwood Road /
FJL, DEMIS - Not Glide /
Alan Schultz - Drizzle /`},{episodio:"710",titulo:"Resident / Episode 710 / Dec 14 2024",descripcion:`1 - Paul Deep - Lilac (Ilias Katelanos & Plecta Remix) /\xA0
2 - Black 8 - Behind Closed Eyes /\xA0
3 - Soulmac & Daan - Ravena (Andr\xE9 Moret Remix) /\xA0
4 - Gorkiz & Matt Oliver - Digital String - (FM Edit) /\xA0
5 - Gaston Ponte - Deliverance (Ruben Karapetyan Remix) /\xA0
6 - Franky Wah & Zoe Kypri - Tomorrow's Dusk /\xA0
7 - Abity & Luke Costa - Smolensko /\xA0
8 - Zuccasam - Alchemist /\xA0
9 - Alejo Gonzalez - Eclipse /\xA0
10 - Mano Le Tough - Infinite Scroll / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"6",descargas:"34.7K",fecha:"2024-12-14",link:"https://mcdn.podbean.com/mf/download/w5ushwm3q446wyy7/710-HernanCattaneo-2024-12-14.mp3",tracklist:`Paul Deep - Lilac (Ilias Katelanos & Plecta Remix) /
Black 8 - Behind Closed Eyes /
Soulmac & Daan - Ravena (Andr\xE9 Moret Remix) /
Gorkiz & Matt Oliver - Digital String - (FM Edit) /
Gaston Ponte - Deliverance (Ruben Karapetyan Remix) /
Franky Wah & Zoe Kypri - Tomorrow's Dusk /
Abity & Luke Costa - Smolensko /
Zuccasam - Alchemist /
Alejo Gonzalez - Eclipse /`},{episodio:"711",titulo:"Resident / Episode 711 / Dec 21 2024",descripcion:`1 - Dowden - Lost Signal /\xA0
2 - Michael A - Ignition (Nicolas Benedetti Remix) /\xA0
3 - Hobin Rude - Cryptic Waves /\xA0
4 - Juan Pablo Torrez, Kamilo Sanclemente - Unknown Destination /\xA0
5 - Gai Barone - Sheen & Crock (Solee Remix) /\xA0
6 - Fabrizio Spachuk - Sarto /\xA0
7 - Paul Lennar Ft. BassQ - Deep In The Dark /\xA0
8 - Servando, Julieta Kunhle - Words to say /\xA0
9 - Callecat & Paul Hazendonk - State Of Mind (Noiyse Project Remix) /\xA0
10 - Will Dekeizer - 2000bc (Roger Martinez remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"36.3K",fecha:"2024-12-21",link:"https://mcdn.podbean.com/mf/download/i4ekf5vqwjq9ia2y/711-HernanCattaneo-2024-12-21.mp3",tracklist:`Dowden - Lost Signal /
Michael A - Ignition (Nicolas Benedetti Remix) /
Hobin Rude - Cryptic Waves /
Juan Pablo Torrez, Kamilo Sanclemente - Unknown Destination /
Gai Barone - Sheen & Crock (Solee Remix) /
Fabrizio Spachuk - Sarto /
Paul Lennar Ft. BassQ - Deep In The Dark /
Servando, Julieta Kunhle - Words to say /
Callecat & Paul Hazendonk - State Of Mind (Noiyse Project Remix) /`},{episodio:"712",titulo:"Resident / Episode 712/ Dec 28 2024",descripcion:`1 - Paul Deep - Refracted (After Burn remix) /\xA0
2 - Subandrio - Heritage 82' /\xA0
3 - Ignacio Corazza & Freedo Mosho - Ghost Rider (Maze 28 Reform) /\xA0
4 - Luca Abayan - Kuzushi /\xA0
5 - Dj Zombi - Harmoinized (Dmitry Molosh Remix) /\xA0
6 - Nacres - Arcadia (Evegrem Remix) /\xA0
7 - Roman - ID /\xA0
8 - Kevin Di Serna & Santor - Blessway /\xA0
9 - Fabrizio Spachuk - Tu Felicidad /\xA0
10 - Sasha - Bloodlock (DJ Ruby 2024 Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"37.5K",fecha:"2024-12-28",link:"https://mcdn.podbean.com/mf/download/p4ikhgd8vfcwerqx/712-HernanCattaneo-2024-12-28.mp3",tracklist:`Paul Deep - Refracted (After Burn remix) /
Subandrio - Heritage 82' /
Ignacio Corazza & Freedo Mosho - Ghost Rider (Maze 28 Reform) /
Luca Abayan - Kuzushi /
Dj Zombi - Harmoinized (Dmitry Molosh Remix) /
Nacres - Arcadia (Evegrem Remix) /
Roman - ID /
Kevin Di Serna & Santor - Blessway /
Fabrizio Spachuk - Tu Felicidad /`},{episodio:"714",titulo:"Resident / Episode 714 / Jan 11 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.2 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"27.3K",fecha:"2025-01-11",link:"https://mcdn.podbean.com/mf/download/id6nz0k3efn97gmo/714-HernanCattaneo-2025-01-11.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.2"},{episodio:"715",titulo:"Resident / Episode 715 / Jan 18 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.3 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"27.3K",fecha:"2025-01-18",link:"https://mcdn.podbean.com/mf/download/dhfuvuy78jog6upa/715-HernanCattaneo-2025-01-18.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.3"},{episodio:"716",titulo:"Resident / Episode 716 / Jan 25 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.4 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"8",descargas:"34.4K",fecha:"2025-01-25",link:"https://mcdn.podbean.com/mf/download/pcq88abdmn1ni00v/716-HernanCattaneo-2025-01-25.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.4"},{episodio:"717",titulo:"Resident / Episode 717 / Feb 01 2025",descripcion:`1 - Juan Yarin & Khen - Yoka /\xA0
2 - Dave Walker, Kiz Pattison - Thwip /\xA0
3 - Kostya Outta - Awakening (Supacooks & Ruben Karapetyan Remix) /\xA0
4 - Noiyse Project - Turbulance /\xA0
5 - Quivver - These Are The Days ( Paul (AR) rework2025) /\xA0
6 - Jess Varela - I Never /\xA0
7 - Lanvary - Cercanias (Alex O'Rion Remix) -9- Mariusso - Horizon Thought /\xA0
8 - Ewan Rill - Snowing /\xA0
9 - Mariusso - Horizon Thought /\xA0
10 - Guy Mantzur, Khen - Shine Tomorrow / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"30.1K",fecha:"2025-02-01",link:"https://mcdn.podbean.com/mf/download/467uwc7j35s87axi/717-HernanCattaneo-2025-02-01.mp3",tracklist:`Juan Yarin & Khen - Yoka /
Dave Walker, Kiz Pattison - Thwip /
Kostya Outta - Awakening (Supacooks & Ruben Karapetyan Remix) /
Noiyse Project - Turbulance /
Quivver - These Are The Days ( Paul (AR) rework2025) /
Jess Varela - I Never /
Lanvary - Cercanias (Alex O'Rion Remix) -9- Mariusso - Horizon Thought /
Ewan Rill - Snowing /
Mariusso - Horizon Thought /`},{episodio:"718",titulo:"Resident / Episode 718 / Feb 08 2025",descripcion:`1 - Matter - Livid /\xA0
2 - Juan Deminicis - Deep Rock Galactic /\xA0
3 - Juan Deminicis - Under Control /\xA0
4 - Dave Seaman ft. Cari Golden - Venus Flytrap (DUB Mix) /\xA0
5 - Cirque du Soleil - Temperatio (Hicky & Kalo Remix) /\xA0
6 - Kebin van Reeken - Akaliza /\xA0
7 - Kris Dur, Diego Berrondo - ID /\xA0
8 - Left 2 Dust - Attending (Paul Hazendonk & Return To Saturn Remix) /\xA0
9 - Around Us - Exile /\xA0
10 - Greta Meier & Sebastian Sellares - Benevolence (Paul Thomas Extended Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"6",descargas:"29K",fecha:"2025-02-08",link:"https://mcdn.podbean.com/mf/download/emy76t9mzy5rdjrz/718-HernanCattaneo-2025-02-08.mp3",tracklist:`Matter - Livid /
Juan Deminicis - Deep Rock Galactic /
Juan Deminicis - Under Control /
Dave Seaman ft. Cari Golden - Venus Flytrap (DUB Mix) /
Cirque du Soleil - Temperatio (Hicky & Kalo Remix) /
Kebin van Reeken - Akaliza /
Kris Dur, Diego Berrondo - ID /
Left 2 Dust - Attending (Paul Hazendonk & Return To Saturn Remix) /
Around Us - Exile /`},{episodio:"719",titulo:"Resident / Episode 719 / Feb 15 2025",descripcion:`1 - Alto Astral - Between Us /\xA0
2 - Analog Jungs - Ultraviolet /\xA0
3 - Federico Epis - Numa /\xA0
4 - Doriaan - Pixan /\xA0
5 - Ewan Rill - Sustain Acid /\xA0
6 - Marcelo Vasami, Dimuth K - Nomade /\xA0
7 - Lulu - Duplicity /\xA0
8 - Rolasoul - Atomic Blonde /\xA0
9 - Dabeat - Red Sky Night /\xA0
10 - Re-Type - Dalliance / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"28.7K",fecha:"2025-02-15",link:"https://mcdn.podbean.com/mf/download/af96uy77xachsbeg/719-HernanCattaneo-2025-02-15.mp3",tracklist:`Alto Astral - Between Us /
Analog Jungs - Ultraviolet /
Federico Epis - Numa /
Doriaan - Pixan /
Ewan Rill - Sustain Acid /
Marcelo Vasami, Dimuth K - Nomade /
Lulu - Duplicity /
Rolasoul - Atomic Blonde /
Dabeat - Red Sky Night /`},{episodio:"720",titulo:"Resident / Episode 720 / Feb 22 2025",descripcion:`1 - Ruben Karapetyan - Neurotransmitter (Gai Barone Extended Mix) /\xA0
2 - Claudio Cornejo (AR) - ID /\xA0
3 - Black 8 - Higher We Fly /\xA0
4 - Dabeat - Cycles /\xA0
5 - Will DeKeizer - Caterpiller /\xA0
6 - Jiggler - Moments /\xA0
7 - Aubrey Fry & Nick Stoynoff - Baller /\xA0
8 - Gab Rhome - Work It (Facundo Mohrr Remix) /\xA0
9 - Paul Thomas & Das Pharaoh - Dale (Ruben Karapetyan Remix) /\xA0
10 - WOO YORK - Feeling feat. Mark Tarmonea ( Hernan Cattaneo & Mercurio) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"31.1K",fecha:"2025-02-22",link:"https://mcdn.podbean.com/mf/download/qsbty6d4w888fj8r/720-HernanCattaneo-2025-02-22.mp3",tracklist:`Ruben Karapetyan - Neurotransmitter (Gai Barone Extended Mix) /
Claudio Cornejo (AR) - ID /
Black 8 - Higher We Fly /
Dabeat - Cycles /
Will DeKeizer - Caterpiller /
Jiggler - Moments /
Aubrey Fry & Nick Stoynoff - Baller /
Gab Rhome - Work It (Facundo Mohrr Remix) /
Paul Thomas & Das Pharaoh - Dale (Ruben Karapetyan Remix) /`},{episodio:"721",titulo:"Resident / Episode 721 / Mar 01 2025",descripcion:`1 - Gai Barone - Bitter Misery /\xA0
2 - Doffo - Appetite /\xA0
3 - Maezbi, Agustin Ficarra - Green Time /\xA0
4 - Budakid - Freedom (Patrice B\xE4umel Remix) /\xA0
5 - A-Jay (SL), Sistersweet - Shifter /\xA0
6 - Seyah - Horizon (Luca Abayan & Tato Seco Remix)
7 - Will DeKeizer - Sound Of Neptune /\xA0
8 - GSEP & Rikki Sawyer - Shuttle (Alan Cerra Remix) /\xA0
9 - Skiy - Celestial Gate (ELIF Remix) /\xA0
10 - Yeadon - What Is Real / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"30.9K",fecha:"2025-03-01",link:"https://mcdn.podbean.com/mf/download/2khk2fw8trgbpvv8/721-HernanCattaneo-2025-03-01.mp3",tracklist:`Gai Barone - Bitter Misery /
Doffo - Appetite /
Maezbi, Agustin Ficarra - Green Time /
Budakid - Freedom (Patrice B\xE4umel Remix) /
A-Jay (SL), Sistersweet - Shifter /
Seyah - Horizon (Luca Abayan & Tato Seco Remix)
Will DeKeizer - Sound Of Neptune /
GSEP & Rikki Sawyer - Shuttle (Alan Cerra Remix) /
Skiy - Celestial Gate (ELIF Remix) /`},{episodio:"722",titulo:"Resident / Episode 722 / Mar 08 2025",descripcion:`1 - Gadi Mitrani - Manifesta /\xA0
2 - Avantime - Dusk (Lavie Au Soleil Remix) /\xA0
3 - Will DeKeizer - Dixieland /\xA0
4 - Wassu - You Make Me Feel (Kasey Taylor Remix) /\xA0
5 - Federico Epis -Blue Skies /\xA0
6 - Patch Park - Hips and Dips (Zankee Gulati Remix) /\xA0
7 - Zuccasam - Come Home /\xA0
8 - Moshic - I Took Your Love /\xA0
9 - Tiefstone - Anubis /\xA0
10 - Luciano Scheffer - Sleeping Gods (Gorkiz Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"34.7K",fecha:"2025-03-08",link:"https://mcdn.podbean.com/mf/download/ztnk3r27vw6e9qyg/722-HernanCattaneo-2025-03-08.mp3",tracklist:`Gadi Mitrani - Manifesta /
Avantime - Dusk (Lavie Au Soleil Remix) /
Will DeKeizer - Dixieland /
Wassu - You Make Me Feel (Kasey Taylor Remix) /
Federico Epis -Blue Skies /
Patch Park - Hips and Dips (Zankee Gulati Remix) /
Zuccasam - Come Home /
Moshic - I Took Your Love /
Tiefstone - Anubis /`},{episodio:"724",titulo:"Resident / Episode 724 / Mar 22 2025",descripcion:`1 - The Beloved - The Sun Rising (Framewerk Rewerk( /\xA0
2 - Nick Warren - Cobble Pot (Zankee Gulati Remix) /\xA0
3 - Amh\xE1in & Covsky - Salamander - (Kasey Taylor Remix) /\xA0
4 - Miss Melera - Quartz /\xA0
5 - Andr\xE9 Moret - Drift Whispers /\xA0
6 - Roc\xEDo Portillo, Valley (AR), Karim Sar Sar - Music Therapy /\xA0
7 - Hugo Cantarra - Dream Of You (feat. KOATES) /\xA0
8 - Barry Can't Swim, Ben Bohmer, Steve Bug, Pronbugs - Revelation M9124 (Kevin Di Serna Fusion Mix) /\xA0
9 - Morttagua - Amunet (Gorkiz Remix) /\xA0
10 - Faithless - Crazy English Summer (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"42.4K",fecha:"2025-03-22",link:"https://mcdn.podbean.com/mf/download/h9274rq5xq8vbfm3/724-HernanCattaneo-2025-03-22.mp3",tracklist:`The Beloved - The Sun Rising (Framewerk Rewerk( /
Nick Warren - Cobble Pot (Zankee Gulati Remix) /
Amh\xE1in & Covsky - Salamander - (Kasey Taylor Remix) /
Miss Melera - Quartz /
Andr\xE9 Moret - Drift Whispers /
Roc\xEDo Portillo, Valley (AR), Karim Sar Sar - Music Therapy /
Hugo Cantarra - Dream Of You (feat. KOATES) /
Barry Can't Swim, Ben Bohmer, Steve Bug, Pronbugs - Revelation M9124 (Kevin Di Serna Fusion Mix) /
Morttagua - Amunet (Gorkiz Remix) /`},{episodio:"725",titulo:"Resident / Episode 725 / Mar 29 2025",descripcion:`1 - Regina Picone- The shift /\xA0
2 - Tomas Briski - Pupil of the sound /\xA0
3 - Tiefstone \xA0- Monte carlo /\xA0
4 - Jesuan M - Remember To /\xA0
5 - Dilby - Stay True /\xA0
6 - Anonimat, George X - Telazar /\xA0
7 - Yohai Mor - Existence /\xA0
8 - Because of Art - Engage /\xA0
9 - Cian Moynagh- - What If I Fall /\xA0
10 - Falling Out Of Time / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"26.9K",fecha:"2025-03-29",link:"https://mcdn.podbean.com/mf/download/ztnae4ceueihcba3/725-HernanCattaneo-2025-03-29.mp3",tracklist:`Regina Picone- The shift /
Tomas Briski - Pupil of the sound /
Tiefstone \xA0- Monte carlo /
Jesuan M - Remember To /
Dilby - Stay True /
Anonimat, George X - Telazar /
Yohai Mor - Existence /
Because of Art - Engage /
Cian Moynagh- - What If I Fall /`},{episodio:"726",titulo:"Resident / Episode 726 / Apr 05 2025",descripcion:`1 - Tomas Harguintegui - Inner Growth /\xA0
2 - Enamour - Jackpot /\xA0
3 - Axel Giova - Analog /\xA0
4 - Nick Varon - Maximus /\xA0
5 - Mark Tammo & Fiendski - Last Chance \xA0(Martin Gardoqui & Destain remix ) /\xA0
6 - Sultan - Shepard - Mainline /\xA0
7 - Soundexile - Alone in Nowhere (FOLGAR Remix) /\xA0
8 - Nicolas Rada - Tangie Haze /\xA0
9 - DJ Ruby - Goldrake /\xA0
10 - CHVRCHES - Empty Threat (Ciro Riveiro Private Bootleg) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"27.4K",fecha:"2025-04-05",link:"https://mcdn.podbean.com/mf/download/8nw6jerfy9nsesxf/726-HernanCattaneo-2025-04-05.mp3",tracklist:`Tomas Harguintegui - Inner Growth /
Enamour - Jackpot /
Axel Giova - Analog /
Nick Varon - Maximus /
Mark Tammo & Fiendski - Last Chance \xA0(Martin Gardoqui & Destain remix ) /
Sultan - Shepard - Mainline /
Soundexile - Alone in Nowhere (FOLGAR Remix) /
Nicolas Rada - Tangie Haze /
DJ Ruby - Goldrake /`},{episodio:"727",titulo:"Resident / Episode 727 / Apr 12 2025",descripcion:`1 - Solis [US] - Every Single Moment /\xA0
2 - RUBIA - Breeze /\xA0
3 - Boraa - Fear Of The Unknown /\xA0
4 - Ciro Riveiro - Malika /\xA0
5 - Kabi - Rainbow /\xA0
6 - Nattier - Learning to Fly /\xA0
7 - Shayan Pasha, Redspace - Pantheon /\xA0
8 - Tiefstone - Mirage /\xA0
9 - Glenn Morrison - TR6 /\xA0
10 - Paul Loraine - Minor Major (DCLVIII OFC Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"29K",fecha:"2025-04-12",link:"https://mcdn.podbean.com/mf/download/w4aag69rftm7ke3j/727-HernanCattaneo-2025-04-12.mp3",tracklist:`Solis [US] - Every Single Moment /
RUBIA - Breeze /
Boraa - Fear Of The Unknown /
Ciro Riveiro - Malika /
Kabi - Rainbow /
Nattier - Learning to Fly /
Shayan Pasha, Redspace - Pantheon /
Tiefstone - Mirage /
Glenn Morrison - TR6 /`},{episodio:"728",titulo:"Resident / Episode 728 / Apr 19 2025",descripcion:`1 - Kevin Yair - Timon /\xA0
2 - Terry Grant - I'll Kill You (Teiko Yume's frequent flyer remix) /\xA0
3 - Bachir Salloum - You make me feel /\xA0
4 - Paul Thomas, Dylhen - Cosmos (DJ Ruby Remix) /\xA0
5 - Fordal - Arts Pleasure /\xA0
6 - JFR, Lucas Z\xE1rate - Siamba (Matthew Sona Extended Mix) /\xA0
7 - Edu Schwartz - Like A Dream (Anonimat & Nicolas Viana Remix) /\xA0
8 - BLANCAh - Estranha Calmaria (Neoclassic Remix) /\xA0
9 - Luciano Lozz - No Society (Graziano Raffa Remix) /\xA0
10 - Stereocalypse feat. Irvine Welsh - How No (\xC2me Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"38.1K",fecha:"2025-04-19",link:"https://mcdn.podbean.com/mf/download/apg8cagcm2d4abdp/728-HernanCattaneo-2025-04-19.mp3",tracklist:`Kevin Yair - Timon /
Terry Grant - I'll Kill You (Teiko Yume's frequent flyer remix) /
Bachir Salloum - You make me feel /
Paul Thomas, Dylhen - Cosmos (DJ Ruby Remix) /
Fordal - Arts Pleasure /
JFR, Lucas Z\xE1rate - Siamba (Matthew Sona Extended Mix) /
Edu Schwartz - Like A Dream (Anonimat & Nicolas Viana Remix) /
BLANCAh - Estranha Calmaria (Neoclassic Remix) /
Luciano Lozz - No Society (Graziano Raffa Remix) /`},{episodio:"729",titulo:"Resident / Episode 729 / Apr 26 2025",descripcion:`1 - Miguel Ante - Mind Scissors (Kevin Yair Remix) /\xA0
2 - Tiefstone - Song of the Valkyries /\xA0
3 - Tato Seco - Serendipia (Ewan Rill Remix) /\xA0
4 - Luis Damora - Dream Off /\xA0
5 - Mareveg - Psycho Vibes /\xA0
6 - Byhon - 119 Days Without You /\xA0
7 - Silvertooth - Satellites (Tribalism Mix) /\xA0
8 - Gowzer - Cosmos /\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 
9 - Andre Moret, Mariusso - Cygnus (Cosmonaut Extended Mix) /\xA0
10 - DJ Beat2 - Chasing Stardust / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"27.4K",fecha:"2025-04-26",link:"https://mcdn.podbean.com/mf/download/nntrkfvvkzw6gwmg/729-HernanCattaneo-2025-04-26.mp3",tracklist:`Miguel Ante - Mind Scissors (Kevin Yair Remix) /
Tiefstone - Song of the Valkyries /
Tato Seco - Serendipia (Ewan Rill Remix) /
Luis Damora - Dream Off /
Mareveg - Psycho Vibes /
Byhon - 119 Days Without You /
Silvertooth - Satellites (Tribalism Mix) /
Gowzer - Cosmos /
Andre Moret, Mariusso - Cygnus (Cosmonaut Extended Mix) /`},{episodio:"730",titulo:"Resident / Episode 730 / May 03 2025",descripcion:`1-Notamous - Black Horizon (Hobin Rude Remix) /\xA0
2-Sinca - Told U So /\xA0
3-Dabeat - Ecco /\xA0
4-Nick Varon & Deekay - Kismet /\xA0
5-ECLAREON - Nattier, Ernesto Romero Kamilo Sanclemente /\xA0
6-Roman - Left Me /\xA0
7-Mariusso - Silent Echo /\xA0
8-Fordal - The Rush /\xA0
9-Shoges - Warmer
10-Soul Mekanik - I'll Call You (Marcelo Vasami Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"29.6K",fecha:"2025-05-03",link:"https://mcdn.podbean.com/mf/download/bpkfvdcz9e2ttqgv/730-HernanCattaneo-2025-05-03.mp3",tracklist:`Notamous - Black Horizon (Hobin Rude Remix) /
Sinca - Told U So /
Dabeat - Ecco /
Nick Varon & Deekay - Kismet /
ECLAREON - Nattier, Ernesto Romero Kamilo Sanclemente /
Roman - Left Me /
Mariusso - Silent Echo /
Fordal - The Rush /
Shoges - Warmer`},{episodio:"731",titulo:"Resident / Episode 731 / May 10 2025",descripcion:`1 - Protector Of Chaos - Painstorm /\xA0
2 - Hobin Rude - Lunar Bloom /\xA0
3 - Mattim - Broken Places /\xA0
4 - Sasheen, Ashtenn - Rabbit Hole (Franco Giannoni Unofficial Remix) /\xA0
5 - Uccelli - Kizuna /\xA0
6 - Because of Art - Fired Up /\xA0
7 - Gorkiz - Visions of Beyond /\xA0
8 - Moderat - Bad Kingdom (Juan Iba\xF1ez Y Agoostina Bootleg) /\xA0
9 - Andy Woldman - Rome /\xA0
10 - Sasha & Joe Ashworth - Laurent Energy / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"37.4K",fecha:"2025-05-10",link:"https://mcdn.podbean.com/mf/download/97kuud6xpwkc44xx/731-HernanCattaneo-2025-05-10.mp3",tracklist:`Protector Of Chaos - Painstorm /
Hobin Rude - Lunar Bloom /
Mattim - Broken Places /
Sasheen, Ashtenn - Rabbit Hole (Franco Giannoni Unofficial Remix) /
Uccelli - Kizuna /
Because of Art - Fired Up /
Gorkiz - Visions of Beyond /
Moderat - Bad Kingdom (Juan Iba\xF1ez Y Agoostina Bootleg) /
Andy Woldman - Rome /`},{episodio:"732",titulo:"Resident / Episode 732 / May 17 2025",descripcion:`1 - Lorenzo Al Dino & Peter Cloud - Mind Eater (Gai Barone Extended Remix) /\xA0
2 - Hassan - Sunset Bloom /\xA0
3 - Fran Garay - Remembering Old Times /\xA0
4 - Bodai - Calling My Name (E A N P REMIX) /\xA0
5 - Pablo German - Forja Rush /\xA0
6 - SHYRO & Anix Jay - Hazardous Zone (Francesco Pico Remix) /\xA0
7 - Ghostpipes - Bloodstream (Gai Barone Remix) /\xA0
8 - COQUEIT - Fox River /\xA0
9 - Cendryma - Override (Luis Damora Remix) /\xA0
10 - Golden Features - Touch feat. Rromarin (E A N P ) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"31.3K",fecha:"2025-05-17",link:"https://mcdn.podbean.com/mf/download/94txx8759cqsuakw/732-HernanCattaneo-2025-05-17.mp3",tracklist:`Lorenzo Al Dino & Peter Cloud - Mind Eater (Gai Barone Extended Remix) /
Hassan - Sunset Bloom /
Fran Garay - Remembering Old Times /
Bodai - Calling My Name (E A N P REMIX) /
Pablo German - Forja Rush /
SHYRO & Anix Jay - Hazardous Zone (Francesco Pico Remix) /
Ghostpipes - Bloodstream (Gai Barone Remix) /
COQUEIT - Fox River /
Cendryma - Override (Luis Damora Remix) /`},{episodio:"735",titulo:"Resident / Episode 735 / Jun 07 2025",descripcion:`1 - The Cure - Alone (B.I.R.DD & Alejo Fochi Private Edit) /\xA0
2 - Jenner, Gai Barone, Glenn Morrison - Obsidian /\xA0
3 - Henry Saiz - Turquesa /\xA0
4 - Gorkiz - Flusterstorm /\xA0
5 - Impending Wonders - Ran6dy /\xA0
6 - Gowzer - sand of Time /\xA0
7 - Albuquerque - Permission /\xA0
8 - Mariano Mellino - Poison /\xA0
9 - Gunnar, Saww - Just Strangers /\xA0
10 - Iorie - Falling Home (Tom\xE1s GC "Bliss" Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"32.7K",fecha:"2025-06-07",link:"https://mcdn.podbean.com/mf/download/s7j98efzkydm44fr/735-HernanCattaneo-2025-06-07.mp3",tracklist:`The Cure - Alone (B.I.R.DD & Alejo Fochi Private Edit) /
Jenner, Gai Barone, Glenn Morrison - Obsidian /
Henry Saiz - Turquesa /
Gorkiz - Flusterstorm /
Impending Wonders - Ran6dy /
Gowzer - sand of Time /
Albuquerque - Permission /
Mariano Mellino - Poison /
Gunnar, Saww - Just Strangers /`},{episodio:"736",titulo:"Resident / Episode 736 / Jun 14 2025",descripcion:`1 - SHAZZE, Floyo, Jo Cruz - Midnight Drip /\xA0
2 - Abuk, Fabricio Mosoni - Diamond Dust /\xA0
3 - George X - Sunday's Memory /\xA0
4 - Blake.08 - The Change Of Love /\xA0
5 - Because Of Art - Work It /\xA0
6 - Melodiam (AR) - Simon Says /\xA0
7 - Gai Barone - Fractals (Nicolas Viana Remix) /\xA0
8 - Gorkiz - Visions of Beyond /\xA0
9 - Tantum - Unblur /\xA0
10 - Cass (UK) - Gothamania (Hernan Cattaneo & Mercurio Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"33.4K",fecha:"2025-06-14",link:"https://mcdn.podbean.com/mf/download/tigqprjysxmukuzr/736-HernanCattaneo-2025-06-14.mp3",tracklist:`SHAZZE, Floyo, Jo Cruz - Midnight Drip /
Abuk, Fabricio Mosoni - Diamond Dust /
George X - Sunday's Memory /
Blake.08 - The Change Of Love /
Because Of Art - Work It /
Melodiam (AR) - Simon Says /
Gai Barone - Fractals (Nicolas Viana Remix) /
Gorkiz - Visions of Beyond /
Tantum - Unblur /`},{episodio:"737",titulo:"Resident / Episode 737 / Jun 21 2025",descripcion:`levate /\xA0
2 - N-TCHBL - Southern Storm (Moshic Remix) /\xA0
3 - Steven McCreery - Springs /\xA0
4 - Benja Ilias Plecta /\xA0
5 - Solis [US] - Lucidity /\xA0
6 - Gai Barone - Scatterlings /\xA0
7 - Gai Barone & Nick Stoynoff - Fifty Fifty Split /\xA0
8 - Dove City - Rabbit Hole (Aubrey Fry Remix) /\xA0
9 - Because of Art - Fired Up /\xA0
10 - Hernan Cattaneo & Mercurio - 2009 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"32.9K",fecha:"2025-06-21",link:"https://mcdn.podbean.com/mf/download/sfsrc67mrwdfs4y7/737-HernanCattaneo-2025-06-21.mp3",tracklist:`levate /
N-TCHBL - Southern Storm (Moshic Remix) /
Steven McCreery - Springs /
Benja Ilias Plecta /
Solis [US] - Lucidity /
Gai Barone - Scatterlings /
Gai Barone & Nick Stoynoff - Fifty Fifty Split /
Dove City - Rabbit Hole (Aubrey Fry Remix) /
Because of Art - Fired Up /`},{episodio:"738",titulo:"Resident / Episode 738 / Jun 28 2025",descripcion:`1 - Vandelor - The Sound of Freedom (Gai Barone Remix) /\xA0
2 - Foletto - Secret Key (Juan Ibanez Remx) /\xA0
3 - Tantum - Out of Nowhere /\xA0
4 - Julian Nates - Shifting Currents /\xA0
5 - Hernan Cattaneo & Mercurio - Sepulveda /\xA0
6 - Circulation - twenty eight twenty four /\xA0
7 - Kiaro - Carin (Ewan Rill Remix) /\xA0
8 - Gowzer - Cosmos /\xA0
9 - YOTTO & Something Good - Love Shop /\xA0
10 - Nicolas Viana - Coral / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"33K",fecha:"2025-06-28",link:"https://mcdn.podbean.com/mf/download/c3k452haxejrdj42/738-HernanCattaneo-2025-06-28.mp3",tracklist:`Vandelor - The Sound of Freedom (Gai Barone Remix) /
Foletto - Secret Key (Juan Ibanez Remx) /
Tantum - Out of Nowhere /
Julian Nates - Shifting Currents /
Hernan Cattaneo & Mercurio - Sepulveda /
Circulation - twenty eight twenty four /
Kiaro - Carin (Ewan Rill Remix) /
Gowzer - Cosmos /
YOTTO & Something Good - Love Shop /`},{episodio:"739",titulo:"Resident / Episode 739 / Jul 05 2025",descripcion:`1 - Gai Barone - Juste un de plus /\xA0
2 - Island Hill & Of Norway - In My Mind (Budakid) /\xA0
3 - Facundo Mohrr, Maxi Degrassi - Modern Romance /\xA0
4 - Tammer - The Shadow /\xA0
5 - Dark soul project - reborn (ogawa & unic rmx) /\xA0
6 - Patch Park - Shine on /\xA0
7 - Regina Picone -Midnight Escape hoy /\xA0
8 - Underworld - Juanita (Nicolas Rada Remix) /\xA0
9 - Baunder - AM Light mix /\xA0
10 - Hernan Cattaneo & Mercurio - Bay Drive / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"34.5K",fecha:"2025-07-05",link:"https://mcdn.podbean.com/mf/download/ns7unxr2h53pwxvd/739-HernanCattaneo-2025-07-05.mp3",tracklist:`Gai Barone - Juste un de plus /
Island Hill & Of Norway - In My Mind (Budakid) /
Facundo Mohrr, Maxi Degrassi - Modern Romance /
Tammer - The Shadow /
Dark soul project - reborn (ogawa & unic rmx) /
Patch Park - Shine on /
Regina Picone -Midnight Escape hoy /
Underworld - Juanita (Nicolas Rada Remix) /
Baunder - AM Light mix /`},{episodio:"740",titulo:"Resident / Episode 740 / Jul 12 2025",descripcion:`1 - Claudio Cornejo (AR) - Ocean Vibes /\xA0
2 - FJL - 10 Years Ago /\xA0
3 - Words to Say - Servando & Julieta K\xFChnlE /\xA0
4 - Kenan Savrun - Outspace (Mayro Remix) /\xA0
5 - Taylan - Orbis Unum /\xA0
6 - Agustin Massari, Brian Creao, FAERO - Floward /\xA0
7 - Alan Cerra - Coming Back /\xA0
8 - Claudio Cornejo (AR) - Infinity /\xA0
9 - Tali Muss - Interlocutor (Kebin van Reeken Extended Remix) /\xA0
10 - Indigo Man - Similarity (Mayro Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"27.6K",fecha:"2025-07-12",link:"https://mcdn.podbean.com/mf/download/5tkqkuxj68w9njwp/740-HernanCattaneo-2025-07-12.mp3",tracklist:`Claudio Cornejo (AR) - Ocean Vibes /
FJL - 10 Years Ago /
Words to Say - Servando & Julieta K\xFChnlE /
Kenan Savrun - Outspace (Mayro Remix) /
Taylan - Orbis Unum /
Agustin Massari, Brian Creao, FAERO - Floward /
Alan Cerra - Coming Back /
Claudio Cornejo (AR) - Infinity /
Tali Muss - Interlocutor (Kebin van Reeken Extended Remix) /`},{episodio:"741",titulo:"Resident / Episode 741 / Jul 19 2025",descripcion:`1 - Diego Acosta - Blind & Happy /\xA0
2 - Mati Vaira - The Last Hope /\xA0
3 - Watts - Servando & Julieta K\xFChnle /\xA0
4 - Moodfunk_ (UnbrokenOne Remix) /\xA0
5 - Alan Cerra - Onward /\xA0
6 - Redspace, Unusual Soul - Shadows of Consciousness /\xA0
7 - Mareveg - Anahata /\xA0
8 - Abity & Lelio Monte - Dignum (Gorkiz, Luca Abayan Remix) /\xA0
9 - Ignacio Berardi, Juani Zuliani - Odyssey /\xA0
10 - Moderat - Eating Hooks (Federico Monachesi Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"32.4K",fecha:"2025-07-19",link:"https://mcdn.podbean.com/mf/download/pn5z64wsfivxngjp/741-HernanCattaneo-2025-07-19.mp3",tracklist:`Diego Acosta - Blind & Happy /
Mati Vaira - The Last Hope /
Watts - Servando & Julieta K\xFChnle /
Moodfunk_ (UnbrokenOne Remix) /
Alan Cerra - Onward /
Redspace, Unusual Soul - Shadows of Consciousness /
Mareveg - Anahata /
Abity & Lelio Monte - Dignum (Gorkiz, Luca Abayan Remix) /
Ignacio Berardi, Juani Zuliani - Odyssey /`},{episodio:"742",titulo:"Resident / Episode 742 / Jul 26 2025",descripcion:`1 - Aaron Suiss, Robbie Akbal - Unreal /\xA0
2 - Nahue Sintes, JOSEFINA - Another Life (Gav Easby Remix) /\xA0
3 - Ash Mellor - Back in Love (Steve Fokas remix) /\xA0
4 - Federico Monachesi - Reperspective /\xA0
5 - Mart\xEDn Serbali - Oblivion /\xA0
6 - Martin Gardoqui y Sergio almada - Renacer /\xA0
7 - Nikhila Hashen - \xA0The Void (Juan Deminicis Remix) /\xA0
8 - Tato Seco & Gero Pellizzon - Benne Geserit /\xA0
9 - Sammer Soltan - Kiss (Hernan Cattaneo & Mercurio) /\xA0
10 - Franky Wah & Hernan Cattaneo - Groovejet / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"33.9K",fecha:"2025-07-26",link:"https://mcdn.podbean.com/mf/download/3ssyyj8652xfcyxz/742-HernanCattaneo-2025-07-26.mp3",tracklist:`Aaron Suiss, Robbie Akbal - Unreal /
Nahue Sintes, JOSEFINA - Another Life (Gav Easby Remix) /
Ash Mellor - Back in Love (Steve Fokas remix) /
Federico Monachesi - Reperspective /
Mart\xEDn Serbali - Oblivion /
Martin Gardoqui y Sergio almada - Renacer /
Nikhila Hashen - \xA0The Void (Juan Deminicis Remix) /
Tato Seco & Gero Pellizzon - Benne Geserit /
Sammer Soltan - Kiss (Hernan Cattaneo & Mercurio) /`},{episodio:"745",titulo:"Resident / Episode 745 / Aug 16 2025",descripcion:`1 - Paul Hazendonk & Noraj Cue - Story Of Something feat. Lazarusman (Anton Tumas Subtraction) /\xA0
2 - Dowden, Mazayr - Deflator (Montw Remix) /\xA0
3 - R\xF6yksopp - What Else Is There? Trentemoller Remix (Claudio Cornejo) /\xA0
4 - Kalima - 10am Coffee /\xA0
5 - Motip White - Mango (Golden Hour Remix) /\xA0
6 - Tato Seco & Gero Pellizzon - Mechenikal /\xA0
7 - Agustin Pengov - Trip /\xA0
8 - Rikfell - Cold /\xA0
9 - Maze 28 - Iguana /\xA0
10 - Antrim - Let Go Of The Hand / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"26.6K",fecha:"2025-08-16",link:"https://mcdn.podbean.com/mf/download/kwcxgh9n9pnhk4g8/745-HernanCattaneo-2025-08-16.mp3",tracklist:`Paul Hazendonk & Noraj Cue - Story Of Something feat. Lazarusman (Anton Tumas Subtraction) /
Dowden, Mazayr - Deflator (Montw Remix) /
R\xF6yksopp - What Else Is There? Trentemoller Remix (Claudio Cornejo) /
Kalima - 10am Coffee /
Motip White - Mango (Golden Hour Remix) /
Tato Seco & Gero Pellizzon - Mechenikal /
Agustin Pengov - Trip /
Rikfell - Cold /
Maze 28 - Iguana /`},{episodio:"746",titulo:"Resident / Episode 746 / Aug 23 2025",descripcion:`1 - Hobin Rude - Dusk Petals /\xA0
2 - Gaston Perez - Dreaming Awake /\xA0
3 - Juan Deminicis - We are all connected /\xA0
4 - Paul Hazendonk & Return To Saturn - You Can Have It All (Peter Makto & Matthew Sona Remix) /\xA0
5 - Solimano - Hipnosis /\xA0
6 - Gorkiz, Kaito Aman - From Above /\xA0
7 - Matias Vega - Sonic Bloom /\xA0
8 - Larrosa (AR), Nico Sparvieri, SACK (AR) - 'Euphoria\u2019 /\xA0
9 - KatsUp - Sunflowers /\xA0
10 - Steve Parry - Won't You Believe (Just Her Remix Extended) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"32.4K",fecha:"2025-08-23",link:"https://mcdn.podbean.com/mf/download/q9b8jtdifrsbb9pa/746-HernanCattaneo-2025-08-23.mp3",tracklist:`Hobin Rude - Dusk Petals /
Gaston Perez - Dreaming Awake /
Juan Deminicis - We are all connected /
Paul Hazendonk & Return To Saturn - You Can Have It All (Peter Makto & Matthew Sona Remix) /
Solimano - Hipnosis /
Gorkiz, Kaito Aman - From Above /
Matias Vega - Sonic Bloom /
Larrosa (AR), Nico Sparvieri, SACK (AR) - 'Euphoria\u2019 /
KatsUp - Sunflowers /`},{episodio:"747",titulo:"Resident / Episode 747 / Aug 30 2025",descripcion:`1 - Jamie Stevens - Dust (Hernan Cattaneo & Mercurio Vocal Remix) /\xA0
2 - Hardt Antoine - Rock The Boat [Aaliyah EDIT] /\xA0
3 - Juan Iba\xF1ez - Fading Sparks /\xA0
4 - Sanjay Dutta, Dharmalogy - Worlds Apart (Aman Anand Remix) /\xA0
5 - MOSHIC - Two Souls Bonding /\xA0
6 - Gowzer - Diamond Sky /\xA0
7 - Gai Barone \xA0- In a blink of an eye /\xA0
8 - Dave Seaman - Heavy Weight Residue (Cortona remix) /\xA0
9 - Matter & Dimuth K - Road to stanton moor (Cortona Remix) /\xA0
10 - blake.08 - High Fidelity / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"34.9K",fecha:"2025-08-30",link:"https://mcdn.podbean.com/mf/download/bevbtp96stwajgz3/747-HernanCattaneo-2025-08-30.mp3",tracklist:`Jamie Stevens - Dust (Hernan Cattaneo & Mercurio Vocal Remix) /
Hardt Antoine - Rock The Boat [Aaliyah EDIT] /
Juan Iba\xF1ez - Fading Sparks /
Sanjay Dutta, Dharmalogy - Worlds Apart (Aman Anand Remix) /
MOSHIC - Two Souls Bonding /
Gowzer - Diamond Sky /
Gai Barone \xA0- In a blink of an eye /
Dave Seaman - Heavy Weight Residue (Cortona remix) /
Matter & Dimuth K - Road to stanton moor (Cortona Remix) /`},{episodio:"748",titulo:"Resident / Episode 748 / Sep 06 2025",descripcion:`1 - Larrosa (AR), Nico Sparvieri, SACK (AR) Ft. Flor Pavone - Feelings /\xA0
2 - Silver Waters D.Bonnici /\xA0
3 - Will DeKeizer - Wonders /\xA0
4 - Dominant Space - Deep Forest /\xA0
5 - SYML - The Bird (Larrosa (AR), Nico Sparvieri, Sack (AR) /\xA0
6 - Philipp Wolf - By My Side /\xA0
7 - Mike Rish - Election Day /\xA0
8 - Kebin van Reeken & Not Demure - Batholith /\xA0
9 - Estiva - KFIL (Miss Melera Remix) /\xA0
10 - Juan Pablo Torrez, Kamilo Sanclemente - Deep Truth (Hernan Cattaneo & Marcelo Vasami) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"26.1K",fecha:"2025-09-06",link:"https://mcdn.podbean.com/mf/download/fdvqt8ua23ppurd6/748-HernanCattaneo-2025-09-06.mp3",tracklist:`Larrosa (AR), Nico Sparvieri, SACK (AR) Ft. Flor Pavone - Feelings /
Silver Waters D.Bonnici /
Will DeKeizer - Wonders /
Dominant Space - Deep Forest /
SYML - The Bird (Larrosa (AR), Nico Sparvieri, Sack (AR) /
Philipp Wolf - By My Side /
Mike Rish - Election Day /
Kebin van Reeken & Not Demure - Batholith /
Estiva - KFIL (Miss Melera Remix) /`},{episodio:"749",titulo:"Resident / Episode 749 / Sep 13 2025",descripcion:`1 - Emegepe & Tato Seco - Not Cling /\xA0
2 - Jamie Stevens & Meeting Molly - Illusionist (Kasey Taylor Remix) /\xA0
3 - Alex O'Rion - Void /\xA0
4 - Hobin Rude - Prism /\xA0
5 - Mike Rish - Leaving Brixton /\xA0
6 - Gero Pellizzon - Sonar (Cipriani & Hans Gerd Remix) /\xA0
7 - Govinda, Gonzalo Sacc - State of Vibration /\xA0
8 - Gai Barone \xA0- Setback /\xA0
9 - Jamie Stevens - Tidings (Nick Warren & Nicolas Rada Remix) /\xA0
10 - Roman - id / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"33.2K",fecha:"2025-09-13",link:"https://mcdn.podbean.com/mf/download/eys96y5ptcccuq96/749-HernanCattaneo-2025-09-13.mp3",tracklist:`Emegepe & Tato Seco - Not Cling /
Jamie Stevens & Meeting Molly - Illusionist (Kasey Taylor Remix) /
Alex O'Rion - Void /
Hobin Rude - Prism /
Mike Rish - Leaving Brixton /
Gero Pellizzon - Sonar (Cipriani & Hans Gerd Remix) /
Govinda, Gonzalo Sacc - State of Vibration /
Gai Barone \xA0- Setback /
Jamie Stevens - Tidings (Nick Warren & Nicolas Rada Remix) /`},{episodio:"750",titulo:"Resident / Episode 750 / Sep 20 2025",descripcion:`1 - Above & Beyond - Homecoming (Tim Green Remix) /\xA0
2 - Agustin Pietrocola - Sizer /\xA0
3 - Rockka - DuskRaver (Mayro Remix) /\xA0
4 - Benja Molina & Blind Passengers - Small Twon Night /\xA0
5 - Aubrey Fry & Tim French - Stompaphunker /\xA0
6 - Moshic - To Feel Again /\xA0
7 - Axatipe - Heaven Is Now /\xA0
8 - Petar Dundov - Iva Diva /\xA0
9 - Matter & Dimuth K - Road to Stanton Moor (Cortona Remix) /\xA0
10 - Zuccasam - ID / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"34.1K",fecha:"2025-09-20",link:"https://mcdn.podbean.com/mf/download/na7pacn8k2xnndgr/750-HernanCattaneo-2025-09-20.mp3",tracklist:`Above & Beyond - Homecoming (Tim Green Remix) /
Agustin Pietrocola - Sizer /
Rockka - DuskRaver (Mayro Remix) /
Benja Molina & Blind Passengers - Small Twon Night /
Aubrey Fry & Tim French - Stompaphunker /
Moshic - To Feel Again /
Axatipe - Heaven Is Now /
Petar Dundov - Iva Diva /
Matter & Dimuth K - Road to Stanton Moor (Cortona Remix) /`},{episodio:"751",titulo:"Resident / Episode 751 / Sep 27 2025",descripcion:`1 - Forever - Redfreya /\xA0
2 - Massive Attack - tear drop - Noiyse project /\xA0
3 - Fabian Argomedo - Marisma /\xA0
4 - Lorenzo Balzarini - Moments /\xA0
5 - Juan Hansen, Damon Jee - Hundred secrets /\xA0
6 - Atlas - Compass Error (Phil Jubb & Tim French Remix) /\xA0
7 - John Digweed Marc Romboy Nick Muir - Sigani Meomchun /\xA0
8 - Julian Nates - A Better Place /\xA0
9 - Dj Meoz - Ancient Legend /\xA0
10 - Tim French & Pilch - Nova Albion (Aubrey Fry Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"32.2K",fecha:"2025-09-27",link:"https://mcdn.podbean.com/mf/download/qnr5mjadup4st92r/751-HernanCattaneo-2025-09-27.mp3",tracklist:`Forever - Redfreya /
Massive Attack - tear drop - Noiyse project /
Fabian Argomedo - Marisma /
Lorenzo Balzarini - Moments /
Juan Hansen, Damon Jee - Hundred secrets /
Atlas - Compass Error (Phil Jubb & Tim French Remix) /
John Digweed Marc Romboy Nick Muir - Sigani Meomchun /
Julian Nates - A Better Place /
Dj Meoz - Ancient Legend /`},{episodio:"752",titulo:"Resident / Episode 752 / Oct 04 2025",descripcion:`1 - Luis Damora - In To The Light /\xA0
2 - Sofia Deren - Shattered Phase (Francesco Pico Remix) /\xA0
3 - Gorkiz, Andr\xE9 Moret - Prowess /\xA0
4 - M\xE1ximo Lasso - Breathe Me In (Alan Cerra Remix) /\xA0
5 - Rolasoul - Morpheus (Weird Sounding Dude Extended Remix) /\xA0
6 - Anonimat, Ilias Katelanos, Plecta - Any Circumstance Left (Antrim Remix) /\xA0
7 - Nick Warren - Loveland (Gorkiz Remix Club) /\xA0
8 \xA0 D-Nox, Andr\xE9 Moret - Shine /\xA0
9 - Ran6dy - Solena /\xA0
10 - Astronomy - Enclips - (Gowzer Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33.1K",fecha:"2025-10-04",link:"https://mcdn.podbean.com/mf/download/fpdpg4ubwv8hnt8y/752-HernanCattaneo-2025-10-04.mp3",tracklist:`Luis Damora - In To The Light /
Sofia Deren - Shattered Phase (Francesco Pico Remix) /
Gorkiz, Andr\xE9 Moret - Prowess /
M\xE1ximo Lasso - Breathe Me In (Alan Cerra Remix) /
Rolasoul - Morpheus (Weird Sounding Dude Extended Remix) /
Anonimat, Ilias Katelanos, Plecta - Any Circumstance Left (Antrim Remix) /
Nick Warren - Loveland (Gorkiz Remix Club) /
8 \xA0 D-Nox, Andr\xE9 Moret - Shine /
Ran6dy - Solena /`},{episodio:"755",titulo:"Resident / Episode 755 / Oct 25 2025",descripcion:`1 - Parken Hanson - Let Me Be (Dreamteller Retouch) /\xA0
2 - Fygle - Novocaine (Dreamteller Retouch) /\xA0
3 - Yan Niklas & J Doppler - Nirvana /\xA0
4 - Mike Grey - Outatime /\xA0
5 - Nepotek - Dextro (Nick Stoynoff's Twilo Remix) /\xA0
6 - Zucazam - Inspo /\xA0
7 - Tiefstone - Downforce /\xA0
8 - Molac - Vanta Black (Cendryma Remix) /\xA0
9 - NeoClassic & Masaaki - Serotonin /\xA0
10 - Andr\xE9 Moret - Gaxyda / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"31.2K",fecha:"2025-10-25",link:"https://mcdn.podbean.com/mf/download/vwk6kpug28nfuki7/755-HernanCattaneo-2025-10-25.mp3",tracklist:`Parken Hanson - Let Me Be (Dreamteller Retouch) /
Fygle - Novocaine (Dreamteller Retouch) /
Yan Niklas & J Doppler - Nirvana /
Mike Grey - Outatime /
Nepotek - Dextro (Nick Stoynoff's Twilo Remix) /
Zucazam - Inspo /
Tiefstone - Downforce /
Molac - Vanta Black (Cendryma Remix) /
NeoClassic & Masaaki - Serotonin /`},{episodio:"756",titulo:"Resident / Episode 756 / Nov 01 2025",descripcion:`1 - Elliot Moriarty - Frequencies /\xA0
2 - Yan Niklas & J Doppler - Pineal Connection /\xA0
3 - Rich Curtis - \xA0Don't Throw That Away, I'll Eat It /\xA0
4 - Tomas Garcia - Snow Desert /\xA0
5 - Carlos A - Dogma (4T6 Remix) /\xA0
6 - Franco Camiolo - One sunday /\xA0
7 - Maze 28 - Feeling Blue /\xA0
8 - Sound Fusion - Harbour /\xA0
9 - Gorkiz - Bring Me Your Fire (Vocal Mix) /\xA0
10 - PAAX (Tulum) - Who Das (Hernan Cattaneo & Marcelo Vasami Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33K",fecha:"2025-11-01",link:"https://mcdn.podbean.com/mf/download/5f6gxhew4vuz7c8c/756-HernanCattaneo-2025-11-01.mp3",tracklist:`Elliot Moriarty - Frequencies /
Yan Niklas & J Doppler - Pineal Connection /
Rich Curtis - \xA0Don't Throw That Away, I'll Eat It /
Tomas Garcia - Snow Desert /
Carlos A - Dogma (4T6 Remix) /
Franco Camiolo - One sunday /
Maze 28 - Feeling Blue /
Sound Fusion - Harbour /
Gorkiz - Bring Me Your Fire (Vocal Mix) /`},{episodio:"757",titulo:"Resident / Episode 757 / Nov 08 2025",descripcion:`1 - Thom Yorke - Black Swan (FOLGAR Rework) /\xA0
2 - Earthlings - Nectar /\xA0
3 - Tantum - Baires /\xA0
4 - Paul Thomas - Resistance (Extended Mix) /\xA0
5 - Federico Epis - Aura /\xA0
6 - Black 8 - Higher We Fly (Morttagua Extended Remix) /\xA0
7 - P37RO - \xA0Isn't True /\xA0
8 - Jares - Darkest Night (Berni Turletti Remix) /\xA0
9 - Andr\xE9 Moret - Secrets /\xA0
10 - Muuk' & Cendryma - G-Force / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"32.4K",fecha:"2025-11-08",link:"https://mcdn.podbean.com/mf/download/9ti7jfi9dkqracw5/757-HernanCattaneo-2025-11-08.mp3",tracklist:`Thom Yorke - Black Swan (FOLGAR Rework) /
Earthlings - Nectar /
Tantum - Baires /
Paul Thomas - Resistance (Extended Mix) /
Federico Epis - Aura /
Black 8 - Higher We Fly (Morttagua Extended Remix) /
P37RO - \xA0Isn't True /
Jares - Darkest Night (Berni Turletti Remix) /
Andr\xE9 Moret - Secrets /`},{episodio:"758",titulo:"Resident / Episode 758 / Nov 15 2025",descripcion:`1 - DJ Meoz - Dream Catcher /\xA0
2 - Dreamteller - Forgotten Alarms /\xA0
3 - Paul Thomas - Flammable /\xA0
4 - D-Nox, Andr\xE9 Moret - Different Worlds /\xA0
5 - BLANCAh - Signs of Bliss (Masaaki Remix) /\xA0
6 - EMPHI - Walk With Me /\xA0
7 - Goraieb - Intertwined Souls /\xA0
8 - Darlow - Docks /\xA0
9 - Nicolas Leonelli, Anhauser - Apocalipsis (Tiefstone remix) /\xA0
10 - Imbermind - Thousand Miles (Hernan Cattaneo & Kevin Di Serna Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"33.4K",fecha:"2025-11-15",link:"https://mcdn.podbean.com/mf/download/ctti34889cfp3yub/758-HernanCattaneo-2025-11-15.mp3",tracklist:`DJ Meoz - Dream Catcher /
Dreamteller - Forgotten Alarms /
Paul Thomas - Flammable /
D-Nox, Andr\xE9 Moret - Different Worlds /
BLANCAh - Signs of Bliss (Masaaki Remix) /
EMPHI - Walk With Me /
Goraieb - Intertwined Souls /
Darlow - Docks /
Nicolas Leonelli, Anhauser - Apocalipsis (Tiefstone remix) /`},{episodio:"759",titulo:"Resident / Episode 759 / Nov 22 2025",descripcion:`1 - Alan Schultz - Dusty Tape /\xA0
2 - Juan Deminicis - Going Nowhere /\xA0
3 - Juan Deminicis - DMT /\xA0
4 - Maze 28 - Leave The World /\xA0
5 - Maze 28 - South Sun Rising /\xA0
6 - Gorkiz, Kaito Aman - From Above (Chris Cargo Remix) /\xA0
7 - Togni - Step Back (Shayan Pasha Remix) /\xA0
8 - Luis Damora - Kobalt /\xA0
9 - Guy Mantzur & Chicola - Galactica /\xA0
10 - Martin Brodin - Galaxis (Nick Warren & Nicolas Rada) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"22.7K",fecha:"2025-11-22",link:"https://mcdn.podbean.com/mf/download/be8pd5qcps67yc2d/759-HernanCattaneo-2025-11-22.mp3",tracklist:`Alan Schultz - Dusty Tape /
Juan Deminicis - Going Nowhere /
Juan Deminicis - DMT /
Maze 28 - Leave The World /
Maze 28 - South Sun Rising /
Gorkiz, Kaito Aman - From Above (Chris Cargo Remix) /
Togni - Step Back (Shayan Pasha Remix) /
Luis Damora - Kobalt /
Guy Mantzur & Chicola - Galactica /`},{episodio:"760",titulo:"Resident / Episode 760 / Nov 29 2025",descripcion:`1 - Nico Szabo & Aske Izan Feat. SAM SHI - Aside /\xA0
2 - Hunzed - Skyline (Madraas Remix) /\xA0
3 - Anonimat, Molac - Ashen Tides /\xA0
4 - HAFT - Skybound /\xA0
5 - Hobin Rude - In The Still Of Abscence /\xA0
6 - Santi Mossman - Hidden Limits /\xA0
7 - Entrophee - Cristian Hidalgo & Rodrigo Pochelu /\xA0
8 - Tom Pavicich - Hypnosis /\xA0
9 - NeoClassic & Masaaki - Underflow /\xA0
10 - Ruben Karapetyan - Karo K / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"32.9K",fecha:"2025-11-29",link:"https://mcdn.podbean.com/mf/download/u2nhr7hrxquhgy6c/760-HernanCattaneo-2025-11-29.mp3",tracklist:`Nico Szabo & Aske Izan Feat. SAM SHI - Aside /
Hunzed - Skyline (Madraas Remix) /
Anonimat, Molac - Ashen Tides /
HAFT - Skybound /
Hobin Rude - In The Still Of Abscence /
Santi Mossman - Hidden Limits /
Entrophee - Cristian Hidalgo & Rodrigo Pochelu /
Tom Pavicich - Hypnosis /
NeoClassic & Masaaki - Underflow /`},{episodio:"761",titulo:"Resident / Episode 761 / Dec 06 2025",descripcion:`1 - JP Mayeur - Baby Jane /\xA0
2 - John Cosani - Habana /\xA0
3 - Rich Curtis - Don't Throw That Away, I'll Eat It (Kostya Outta Remix) /\xA0
4 - Culoe De Song - Mount Zion (Jonathan Kaspar Remix) /\xA0
5 - Volks \xA0Starting My Day /\xA0
6 - Juan Lagisquet - Missing Gravity /\xA0
7 - Subandrio & Maze 28 - Montreal At Night /\xA0
8 - Harith - Stargate /\xA0
9 - Pete Philips - Oceans (ELIF Remix) /\xA0
10 - Nick Varon & PAAX - Yutori (Frequent Sync Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"28.2K",fecha:"2025-12-06",link:"https://mcdn.podbean.com/mf/download/n5ga3et9bgwzg7jn/761-HernanCattaneo-2025-12-06.mp3",tracklist:`JP Mayeur - Baby Jane /
John Cosani - Habana /
Rich Curtis - Don't Throw That Away, I'll Eat It (Kostya Outta Remix) /
Culoe De Song - Mount Zion (Jonathan Kaspar Remix) /
Volks \xA0Starting My Day /
Juan Lagisquet - Missing Gravity /
Subandrio & Maze 28 - Montreal At Night /
Harith - Stargate /
Pete Philips - Oceans (ELIF Remix) /`},{episodio:"765",titulo:"Resident / Episode 765 / Jan 03 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"12",descargas:"22.1K",fecha:"2026-01-03",link:"https://mcdn.podbean.com/mf/download/hirasfju9c5g64tr/765-HernanCattaneo-2026-01-03.mp3"},{episodio:"766",titulo:"Resident / Episode 766 / Jan 10 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"17",descargas:"21.1K",fecha:"2026-01-10",link:"https://mcdn.podbean.com/mf/download/z9djyribr9iqavxp/766-HernanCattaneo-2026-01-10.mp3"},{episodio:"767",titulo:"Resident / Episode 767 / Jan 17 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 4 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"11",descargas:"20.9K",fecha:"2026-01-17",link:"https://mcdn.podbean.com/mf/download/s6a7ky4jit9ib9u6/767-HernanCattaneo-2026-01-17.mp3"},{episodio:"768",titulo:"Resident / Episode 768 / Jan 24 2026",descripcion:`1 - Rivvo - Celestial Drift (Matt Oliver, Teclas Remix) /\xA0
2 - Luis Damora - Illuminate /\xA0
3 - Hobin Rude - First Breath /\xA0
4 - Rockka - Subconscious (DJ Ruby Remix) /\xA0
5 - HAFT - Driftor /\xA0
6 - Matias Gauna & Unusual Soul - Summer Rain /\xA0
7 - Rolasoul - Venus /\xA0
8 - Hector Cortes & Fran Bux - Butterfly effect /\xA0
9 - Tiefstone , Camila (Ar) - Throne /\xA0
10 - Quivver - Shadows Dancing / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"27.3K",fecha:"2026-01-24",link:"https://mcdn.podbean.com/mf/download/9p56j6sbuhs5np6p/768-HernanCattaneo-2026-01-24.mp3",tracklist:`Rivvo - Celestial Drift (Matt Oliver, Teclas Remix) /
Luis Damora - Illuminate /
Hobin Rude - First Breath /
Rockka - Subconscious (DJ Ruby Remix) /
HAFT - Driftor /
Matias Gauna & Unusual Soul - Summer Rain /
Rolasoul - Venus /
Hector Cortes & Fran Bux - Butterfly effect /
Tiefstone , Camila (Ar) - Throne /`},{episodio:"769",titulo:"Resident / Episode 769 / Jan 31 2026",descripcion:`1 - Gaston Perez - Angelic voice /\xA0
2 - Gaston Perez - Time tunnel /\xA0
3 - Uccelli - The soul flows /\xA0
4 - Daniel Camarillo - Midnight Sun (Cipriani e Hans Gerd Remix) /\xA0
5 - EMPHI - Cosmic Arrival /\xA0
6 - Harith - Frozen Flame /\xA0
7 - Samuel - Pulse (Casnik Remix) /\xA0
8 - HAFT - Traverse /\xA0
9 - Astronomy - Enclips /\xA0
10 - Antrim - Shades Of Reverie / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"26.4K",fecha:"2026-01-31",link:"https://mcdn.podbean.com/mf/download/3fdi82d8zemkvu2v/769-HernanCattaneo-2026-01-31.mp3",tracklist:`Gaston Perez - Angelic voice /
Gaston Perez - Time tunnel /
Uccelli - The soul flows /
Daniel Camarillo - Midnight Sun (Cipriani e Hans Gerd Remix) /
EMPHI - Cosmic Arrival /
Harith - Frozen Flame /
Samuel - Pulse (Casnik Remix) /
HAFT - Traverse /
Astronomy - Enclips /`},{episodio:"770",titulo:"Resident / Episode 770 / Feb 07 2026",descripcion:`1. 3.14 (AR) \u2013 Shadows in The Glow /\xA0
2. Martin Fredes \u2013 China /\xA0
3. Martin Gardoqui & Federico Cabrera \u2013 Atlas /\xA0
4. Luciano Scheffer \u2013 Rebirth /\xA0
5. Dabeat \u2013 Out of the blue /\xA0
6. Ajaw, Rama (AR) \u2013 Eclipse /\xA0
7. HAFT \u2013 Sleepwalker /\xA0
8. ZAC \u2013 New World /\xA0
9. D-Nox, Andr\xE9 Moret, Yudi Watanabe \u2013 ID /\xA0
10. Paul Thomas \u2013 Jumbo (Jamie Stevens Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"26.1K",fecha:"2026-02-07",link:"https://mcdn.podbean.com/mf/download/is5r63cpyi3e54qt/770-HernanCattaneo-2026-02-07.mp3",tracklist:`3.14 (AR) \u2013 Shadows in The Glow /
Martin Fredes \u2013 China /
Martin Gardoqui & Federico Cabrera \u2013 Atlas /
Luciano Scheffer \u2013 Rebirth /
Dabeat \u2013 Out of the blue /
Ajaw, Rama (AR) \u2013 Eclipse /
HAFT \u2013 Sleepwalker /
ZAC \u2013 New World /
D-Nox, Andr\xE9 Moret, Yudi Watanabe \u2013 ID /`},{episodio:"771",titulo:"Resident / Episode 771 / Feb 14 2026",descripcion:`1 - Dion Paola (AUS) - Rebirth
2 - Nicolas Doldi - Feel Life
3 - Una Estrella M\xE1s Para El Cielo - Jozar (Cristian Hidalgo Remix)
4 - Allex - Ramshackle (Remix)
5 - Massive Attack feat. Azekel - Ritual Spirit (Fran Bux Revision)
6 - Sebastian Corral - The Future of Music ft. Jim Morrison
7 - AFAR - The Trap (Checo Cotela Edit)
8 - Yohai Mor - Judgment Day
9 - Juan Pablo Torrez & Kamilo Sanclemente - Sedna
10 - AIKON - Your Call feat. Roman Scott (Hernan Cattaneo & Mercurio Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"27.2K",fecha:"2026-02-14",link:"https://mcdn.podbean.com/mf/download/ghwy2hhpuqwmx26t/771-HernanCattaneo-2026-02-14.mp3",tracklist:`Dion Paola (AUS) - Rebirth
Nicolas Doldi - Feel Life
Una Estrella M\xE1s Para El Cielo - Jozar (Cristian Hidalgo Remix)
Allex - Ramshackle (Remix)
Massive Attack feat. Azekel - Ritual Spirit (Fran Bux Revision)
Sebastian Corral - The Future of Music ft. Jim Morrison
AFAR - The Trap (Checo Cotela Edit)
Yohai Mor - Judgment Day
Juan Pablo Torrez & Kamilo Sanclemente - Sedna`},{episodio:"772",titulo:"Resident / Episode 772 / Feb 21 2026",descripcion:`1 - Juan Yarin - Look Around
2 - Kris Dur, AOVA - Inner Phase (Original Mix)
3 - Miro - Paradise - Quivver Remix
4 - Cream - Gaute (Matias Chilano Remix)
5 - RADIOHEAD - Lotus Flower ( PAUL (AR) unofficial rmx )
6 - Erdi Irmak - Reprise (Aske Izan Remix)
7 - Juan Deminicis - BG
8 - Butch - When I Was Young
9 - Shai T, Sahar Z - Rebirth
10 - Nick Warren Run For Cover Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"18.1K",fecha:"2026-02-21",link:"https://mcdn.podbean.com/mf/download/rcjsh7vtmjgiqtqg/772-HernanCattaneo-2026-02-21.mp3",tracklist:`Juan Yarin - Look Around
Kris Dur, AOVA - Inner Phase (Original Mix)
Miro - Paradise - Quivver Remix
Cream - Gaute (Matias Chilano Remix)
RADIOHEAD - Lotus Flower ( PAUL (AR) unofficial rmx )
Erdi Irmak - Reprise (Aske Izan Remix)
Juan Deminicis - BG
Butch - When I Was Young
Shai T, Sahar Z - Rebirth`},{episodio:"762",titulo:"Resident / Episode 762 / Dec 13 2025",descripcion:`1 - Death on the Balcony - Quiet Storm (Martin Fredes & Matthew Sona Remix) /\xA0
2 - Kasey Taylor & Gai Barone - Light Deliberations /\xA0
3 - Paula OS - The Shame (Hyunji-A Remix) /\xA0
4 - Hobin Rude - Beyond The Empty Air /\xA0
5 - Luciano Scheffer - Inferno /\xA0
6 - Simply City & Juan Ibanez - Auralis /\xA0
7 - Dublew & STEREOMUNK - Goliath (Matthew Sona Remix) /\xA0
8 - Randall Jones, Nick Stoynoff - Panama Red /\xA0
9 - Trancesetters - The Search (Analog Sense Edit) /\xA0
10 - Frankyeffe, Seismal D, Njira - Fading Out (Sofia Deren, Franco Laino, Nantiel Bootleg) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"30.9K",fecha:"2025-12-13",link:"https://mcdn.podbean.com/mf/download/hiz899qk43s8gpxc/762-HernanCattaneo-2025-12-13.mp3",tracklist:`Death on the Balcony - Quiet Storm (Martin Fredes & Matthew Sona Remix) /
Kasey Taylor & Gai Barone - Light Deliberations /
Paula OS - The Shame (Hyunji-A Remix) /
Hobin Rude - Beyond The Empty Air /
Luciano Scheffer - Inferno /
Simply City & Juan Ibanez - Auralis /
Dublew & STEREOMUNK - Goliath (Matthew Sona Remix) /
Randall Jones, Nick Stoynoff - Panama Red /
Trancesetters - The Search (Analog Sense Edit) /`},{episodio:"095",titulo:"Resident / Episode 095 / March 02 2013",descripcion:`Part 1 Tracklist

Mark Melo - Underwater

Nils Hoffmann - Baloons (Martin Roth)

Kein Toro - Northern Lights

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone

Part 2 Tracklist

Checkor - As Charged

Maxi Iborquiza - Reflejos (Southsight Remix)

Mayk - Tabula Rasa

Tom Glass - Welcome the sun

Elke Kleijn - Eenvoud (Navar Remix)`,likes:"4",descargas:"61K",fecha:"2013-03-02",link:"https://mcdn.podbean.com/mf/download/38d6vh/095-HernanCattaneo-2013-03-03.mp3",tracklist:`Part 1

Mark Melo - Underwater

Nils Hoffmann - Baloons (Martin Roth)

Kein Toro - Northern Lights

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone

Part 2

Checkor - As Charged

Maxi Iborquiza - Reflejos (Southsight Remix)

Mayk - Tabula Rasa

Tom Glass - Welcome the sun

Elke Kleijn - Eenvoud (Navar Remix)`}];var Le=(()=>{let i=class i{fetchEpisodes(){let e=Be,n=e.map(M=>this.parseIntegerField(M.likes)),o=e.map(M=>this.parseDescargas(M.descargas)),t=e.map(M=>this.parseDateField(M.fecha)),d=e.map(M=>this.parseDateField(M.fechasubida)),A=e.map(M=>this.parseIntegerField(M.episodio)),L=this.createColorScale(this.getMinValue(n),this.getMaxValue(n)),O=this.createColorScale(this.getMinValue(o),this.getMaxValue(o)),N=this.createColorScale(this.getMinValue(t),this.getMaxValue(t)),W=this.createColorScale(this.getMinValue(d),this.getMaxValue(d)),V=this.createColorScale(this.getMinValue(A),this.getMaxValue(A));return ue(e.map(M=>this.convertToEpisodeSort(M,L,O,N,W,V)))}convertToEpisodeSort(e,n,o,t,d,A){let L=this.parseIntegerField(e.likes),O=this.parseDescargas(e.descargas),N=this.parseDateField(e.fecha),W=this.parseDateField(e.fechasubida),V=this.parseIntegerField(e.episodio),M=e.tracklist??e.descripcion??"";return G(F({},e),{tracklist:M,_fechasubida:this.createExtendedField(e.fechasubida??"",W,this.resolveColor(d,W)),_fecha:this.createExtendedField(e.fecha??"",N,this.resolveColor(t,N)),_descargas:this.createExtendedField(e.descargas??"",O,this.resolveColor(o,O)),_likes:this.createExtendedField(e.likes??"",L,this.resolveColor(n,L)),_episodio:this.createExtendedField(e.episodio??"",V,this.resolveColor(A,V))})}createExtendedField(e,n=null,o="grey"){return{value:e??"",number:n,color:o}}parseDescargas(e){if(typeof e!="string")return null;let n=e.trim();if(!n)return null;let o=n.toLowerCase().endsWith("k")?1e3:1,t=parseFloat(n);return Number.isFinite(t)?t*o:null}parseIntegerField(e){if(typeof e!="string")return null;let n=parseInt(e,10);return Number.isFinite(n)?n:null}parseDateField(e){if(typeof e!="string")return null;let n=new Date(e).getTime();return Number.isFinite(n)?n:null}getMinValue(e){let n=null;for(let o of e)typeof o=="number"&&Number.isFinite(o)&&(n===null||o<n)&&(n=o);return n}getMaxValue(e){let n=null;for(let o of e)typeof o=="number"&&Number.isFinite(o)&&(n===null||o>n)&&(n=o);return n}createColorScale(e,n){if(e===null||n===null)return null;let o=n-e;return t=>{let d=o>0?(t-e)/o:0,A=Math.round(255*d),L=Math.round(128*(1-d));return`rgb(${A},${L},0)`}}resolveColor(e,n){return!e||n===null?"grey":e(n)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var te=(()=>{let i=class i{constructor(){this.options=D([{value:"_likes",label:"Likes"},{value:"_descargas",label:"Descargas"},{value:"_fecha",label:"Fecha"},{value:"_episodio",label:"Episodio"}]),this.selectedField=D("_likes")}setField(e){this.selectedField.set(e)}addOption(e){this.options().find(n=>n.value===e.value)||this.options.update(n=>[...n,e])}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function Ze(a){try{return localStorage.getItem(a)}catch(i){return null}}function Qe(a,i){try{localStorage.setItem(a,i)}catch(r){}}var U=(()=>{let i=class i{constructor(){this.presets=[{label:"Default",style:"default",mode:"system"},{label:"Minimal 2D",style:"minimal-2d",mode:"system"}],this._activePreset=D(this.loadInitialPreset()),this.activePreset=this._activePreset.asReadonly(),this._resolvedMode=D("light"),this.resolvedMode=this._resolvedMode.asReadonly(),this._mediaQuery=null,this._mediaListener=null,this.destroyRef=g(ee),this.updateResolvedMode(this._activePreset().mode),this.applyPreset(),q(()=>{this._activePreset(),this.initSystemListener()}),q(()=>{let e=this._resolvedMode();document?.body&&document.body.setAttribute("data-mode",e)}),this.destroyRef.onDestroy(()=>{this.removeMediaListener()})}setPreset(e){this._activePreset.set(e),this.applyPreset(),Qe("theme-preset",JSON.stringify({style:e.style,mode:e.mode}))}loadInitialPreset(){let e=this.presets.find(n=>n.style==="default");try{let n=Ze("theme-preset");if(!n)return e;let o=JSON.parse(n);return this.presets.find(d=>d.style===o.style&&d.mode===o.mode)??e}catch(n){return e}}updateResolvedMode(e){if(e==="system"){let n=typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1;this._resolvedMode.set(n?"dark":"light")}else this._resolvedMode.set(e)}applyPreset(){let e=this._activePreset();if(this.updateResolvedMode(e.mode),!document?.body)return;document.body.setAttribute("data-theme",e.style);let n=`/assets/themes/theme-${e.style}.css`,o=document.getElementById("theme-css");o?o.href=n:(o=document.createElement("link"),o.id="theme-css",o.rel="stylesheet",o.href=n,document.head.appendChild(o))}initSystemListener(){let e=this._activePreset();this.removeMediaListener(),e.mode==="system"&&typeof window<"u"&&(this._mediaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this._mediaListener=()=>{this._resolvedMode.set(this._mediaQuery.matches?"dark":"light")},this._mediaQuery.addEventListener("change",this._mediaListener))}removeMediaListener(){this._mediaQuery&&this._mediaListener&&(this._mediaQuery.removeEventListener("change",this._mediaListener),this._mediaListener=null,this._mediaQuery=null)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var Xe="cattaneo-episodes",B="blobs";var $=null;function se(){return $||($=new Promise((a,i)=>{let r=indexedDB.open(Xe,1);r.onerror=()=>{$=null,i(r.error)},r.onsuccess=()=>{a(r.result)},r.onupgradeneeded=e=>{let n=e.target.result;n.objectStoreNames.contains(B)||n.createObjectStore(B,{keyPath:"id"})}}),$)}function Ne(a){return T(this,null,function*(){let i=yield se();return new Promise((r,e)=>{let t=i.transaction([B],"readonly").objectStore(B).get(a);t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)})})}function Fe(a){return T(this,null,function*(){let i=yield se();return new Promise((r,e)=>{let t=i.transaction([B],"readwrite").objectStore(B).put(a);t.onsuccess=()=>r(),t.onerror=()=>e(t.error)})})}function Ge(a){return T(this,null,function*(){let i=yield se();return new Promise((r,e)=>{let t=i.transaction([B],"readwrite").objectStore(B).delete(a);t.onsuccess=()=>r(),t.onerror=()=>e(t.error)})})}function Ke(){return T(this,null,function*(){let a=yield se();return new Promise((i,r)=>{let o=a.transaction([B],"readonly").objectStore(B).getAllKeys();o.onsuccess=()=>i(o.result??[]),o.onerror=()=>r(o.error)})})}var le=(()=>{let i=class i{constructor(){this.downloaded=D(new Map),this.progress=D(new Map),this.activeDownloads=new Map,this.loadFromIdb()}startDownload(e){return T(this,null,function*(){if(this.activeDownloads.has(e.id))return;let n=new AbortController;this.activeDownloads.set(e.id,n);try{let o=yield fetch(e.link,{signal:n.signal,mode:"cors"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let t=o.headers.get("content-length"),d=t?parseInt(t,10):null,A=o.body?.getReader();if(!A)throw new Error("No response body");let L=[],O=0;for(;;){let{done:M,value:j}=yield A.read();if(M)break;if(L.push(j),O+=j.byteLength,d){let je=Math.round(O/d*100);this.progress.update(qe=>new Map(qe).set(e.id,je))}}let N=new Blob(L,{type:"audio/mpeg"}),W=URL.createObjectURL(N),V={id:e.id,blobUrl:W,title:e.title,sizeBytes:N.size,storedAt:Date.now()};yield Fe({id:e.id,blob:N,title:e.title,storedAt:Date.now()}),this.downloaded.update(M=>new Map(M).set(e.id,V)),this.progress.update(M=>{let j=new Map(M);return j.delete(e.id),j})}catch(o){o instanceof Error&&o.name==="AbortError"||console.error("Download failed:",o),this.progress.update(t=>{let d=new Map(t);return d.delete(e.id),d})}finally{this.activeDownloads.delete(e.id)}})}cancelDownload(e){let n=this.activeDownloads.get(e);n&&n.abort()}deleteDownload(e){return T(this,null,function*(){let n=this.downloaded().get(e);n&&URL.revokeObjectURL(n.blobUrl),yield Ge(e),this.downloaded.update(o=>{let t=new Map(o);return t.delete(e),t})})}getBlobUrl(e){return this.downloaded().get(e)?.blobUrl??null}loadFromIdb(){return T(this,null,function*(){try{let e=yield Ke(),n=new Map;for(let o of e){let t=yield Ne(o);if(t){let d=URL.createObjectURL(t.blob);n.set(o,{id:o,blobUrl:d,title:t.title,sizeBytes:t.blob.size,storedAt:t.storedAt})}}this.downloaded.set(n)}catch(e){console.warn("Failed to load downloads from IDB:",e)}})}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var en=(a,i)=>i.episodio;function nn(a,i){a&1&&(S(),h(0,"svg",6),w(1,"path",8),m())}function an(a,i){a&1&&(S(),h(0,"svg",6),w(1,"path",9),m())}function on(a,i){a&1&&(S(),h(0,"svg",7),w(1,"rect",10)(2,"path",11),m())}function rn(a,i){a&1&&(S(),h(0,"svg",7),w(1,"rect",10)(2,"path",11),m())}function tn(a,i){if(a&1&&(h(0,"div",4),x(1,nn,2,0,":svg:svg",6)(2,an,2,0,":svg:svg",6)(3,on,3,0,":svg:svg",7)(4,rn,3,0,":svg:svg",7),p(5),m()),a&2){let r;l();let e=X(3),n=l();s(),y((r=n.sort.selectedField())==="_likes"?1:r==="_descargas"?2:r==="_fecha"?3:r==="_fechasubida"?4:-1),s(4),J(" ",e," ")}}function sn(a,i){if(a&1&&(h(0,"span",18),p(1),m()),a&2){let r=l(2).$implicit,e=l();s(),J("",e.trackCount(r.tracklist)," tracks")}}function ln(a,i){if(a&1&&(h(0,"div",12,0)(2,"div",13),p(3),m(),h(4,"div",14)(5,"span",15),S(),h(6,"svg",16),w(7,"path",8),m(),p(8),m(),I(),h(9,"span",17),S(),h(10,"svg",16),w(11,"path",9),m(),p(12),m(),x(13,sn,2,1,"span",18),m(),I(),w(14,"div",19),m()),a&2){let r,e=l().$implicit,n=l();Q("background-color",((r=e[n.sort.selectedField()])==null?null:r.color)??"grey"),s(3),K(e.titulo),s(5),J(" ",e.likes," "),s(4),J(" ",e.descargas," "),s(),y(n.trackCount(e.tracklist)>0?13:-1),s(),ye("innerHTML",n.tracklistWithBreaks(e.tracklist),ke)}}function dn(a,i){if(a&1){let r=C();h(0,"div",2),z("click",function(){let n=k(r).$index,o=l();return R(o.onEpisodeClick(n))}),h(1,"div",3),p(2),m(),ne(3),x(4,tn,6,2,"div",4),m(),x(5,ln,15,7,"div",5)}if(a&2){let r,e=i.$implicit,n=i.$index,o=l();Q("background-color",((r=e[o.sort.selectedField()])==null?null:r.color)??"grey")("animation-delay",o.animatingSort?o.Math.min(n,20)*70+"ms":"0ms"),P("completed",o.playerService.completedIds().has(e.episodio??""))("downloaded",o.downloadService.downloaded().has(e.episodio??"")),Y("data-episode-id",e.link),s(2),K(e.episodio),s();let t=ae(o.tileSubLabel(e,o.sort.selectedField()));s(),y(t?4:-1),s(),y(o.selectedIndex===n?5:-1)}}var Oe=(()=>{let i=class i{constructor(){this.selectedIndex=null,this.episodes=[],this.animatingSort=!1,this.Math=Math,this.playerService=g(re),this.downloadService=g(le),this.episodesService=g(Le),this.cdr=g(Ce),this.sort=g(te),this.theme=g(U),q(()=>{let e=this.sort.selectedField();if(this.episodes.length){let n=this.selectedIndex!==null?this.episodes[this.selectedIndex]?.link??null:null;he(()=>this.triggerSortAnimation()),this.sortEpisodes(e),this.selectedIndex=n!==null?this.episodes.findIndex(o=>o.link===n):null,this.selectedIndex===-1&&(this.selectedIndex=null),this.cdr.markForCheck()}})}ngOnInit(){this.episodesService.fetchEpisodes().subscribe({next:e=>{this.episodes=e,e.some(n=>!!n.fechasubida)&&this.sort.addOption({value:"_fechasubida",label:"Fecha subida"}),this.sortEpisodes(this.sort.selectedField()),this.cdr.markForCheck()},error:e=>console.error("Error fetching episodes:",e)})}triggerSortAnimation(){this.theme.activePreset().style==="minimal-2d"&&(this.animatingSort=!0,setTimeout(()=>{this.animatingSort=!1,this.cdr.markForCheck()},800))}onEpisodeClick(e){this.selectedIndex=this.selectedIndex===e?null:e;let n=this.episodes[e];this.playContent({title:n.titulo,link:n.link??"",id:n.episodio??""}),this.selectedIndex!==null&&setTimeout(()=>document.querySelector(".episode-detail-row")?.scrollIntoView({behavior:"smooth",block:"center"}))}playContent(e){this.playerService.performAction("play",e)}tracklistWithBreaks(e){return e?e.replace(/\n/g,"<br>"):""}trackCount(e){return e?e.split(`
`).filter(n=>n.trim()).length:0}sortEpisodes(e){this.episodes.length&&(this.episodes=[...this.episodes].sort((n,o)=>{let t=this.getSortableValue(n,e),d=this.getSortableValue(o,e);return t===null&&d===null?0:t===null?1:d===null?-1:d-t}))}tileSubLabel(e,n){if(n==="_episodio")return null;let o=e[n];if(!o?.value)return null;if(n==="_fecha"||n==="_fechasubida"){let t=new Date(o.value);return isNaN(t.getTime())?o.value:t.toLocaleDateString("en-US",{month:"short",year:"2-digit"})}return o.value}getSortableValue(e,n){let o=e[n];if(!o)return null;if(typeof o.number=="number"&&Number.isFinite(o.number))return o.number;let t=parseFloat(o.value??"");return Number.isFinite(t)?t:null}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=E({type:i,selectors:[["app-episodes-grid"]],decls:3,vars:2,consts:[["detailRow",""],[1,"episode-grid"],[1,"episode-item",3,"click"],[1,"episodio"],[1,"field-value"],[1,"episode-detail-row",3,"background-color"],["viewBox","0 0 16 16","width","8","height","8","fill","currentColor","aria-hidden","true"],["viewBox","0 0 16 16","width","8","height","8","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","aria-hidden","true"],["d","M8 14s-6-3.9-6-8a4 4 0 0 1 6-3.46A4 4 0 0 1 14 6c0 4.1-6 8-6 8z"],["d","M8 12L2 6h4V1h4v5h4L8 12z"],["x","1.5","y","2.5","width","13","height","12","rx","1.5"],["d","M1.5 6.5h13M5 1v3M11 1v3"],[1,"episode-detail-row"],[1,"titulo"],[1,"meta"],[1,"likes"],["viewBox","0 0 16 16","width","11","height","11","fill","currentColor","aria-hidden","true",2,"vertical-align","-1px"],[1,"descargas"],[1,"track-count"],[1,"tracklist",3,"innerHTML"]],template:function(n,o){n&1&&(h(0,"div",1),_(1,dn,6,13,null,null,en),m()),n&2&&(P("sorting",o.animatingSort),s(),Z(o.episodes))},dependencies:[ie],styles:['@charset "UTF-8";.episode-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.episode-grid[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]{display:grid;padding:0;width:auto;position:relative;z-index:1;cursor:pointer;height:85px;align-content:center;transition:all .3s ease;content-visibility:auto;contain-intrinsic-size:120px 85px}.episode-grid[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]   .episodio[_ngcontent-%COMP%]{text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.25)}.episode-grid[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]   .field-value[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:3px;font-size:10px;opacity:.65;margin-top:3px;text-shadow:0 1px 2px rgba(0,0,0,.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 4px}.episode-grid[_ngcontent-%COMP%]   .episode-item.completed[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:14px;height:14px;background:#fff9;clip-path:polygon(0 0,100% 0,100% 100%)}.episode-grid[_ngcontent-%COMP%]   .episode-item.downloaded[_ngcontent-%COMP%]:before{content:"\\2193";position:absolute;top:2px;left:2px;width:12px;height:12px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;background:#ffffffb3;border-radius:2px;color:#333}body[data-theme=minimal-2d][_nghost-%COMP%]   .episode-item[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .episode-item[_ngcontent-%COMP%]{border:1px solid var(--border, transparent);opacity:0;animation:_ngcontent-%COMP%_tile-in .5s steps(2) forwards;font-family:var(--font-ui)}body[data-theme=minimal-2d][_nghost-%COMP%]   .episode-grid.sorting[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .episode-grid.sorting[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_tile-sort .6s steps(2) forwards}@keyframes _ngcontent-%COMP%_tile-in{0%{opacity:0;transform:scaleX(1.06)}40%{opacity:1;transform:scaleX(.97) translate(1px)}70%{opacity:.7;transform:scaleX(1.02)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_tile-sort{0%{opacity:1;filter:blur(0)}20%{opacity:.3;filter:blur(1px);transform:scaleX(1.04)}50%{opacity:.8;filter:blur(0);transform:scaleX(.98)}to{opacity:1;transform:none}}.episode-detail-row[_ngcontent-%COMP%]{grid-column:1/-1;transition:all .3s ease;padding:40px 30px;word-break:break-word;overflow-wrap:break-word;min-width:0}.episode-detail-row[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-size:2em;font-weight:600;margin-bottom:8px}.episode-detail-row[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;gap:16px;font-size:13px;opacity:.75;margin-bottom:16px}.episode-detail-row[_ngcontent-%COMP%]   .tracklist[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;font-size:13px;line-height:1.7;font-family:var(--font-ui, "Libre Franklin", sans-serif)}body[data-theme=minimal-2d][_nghost-%COMP%]   .tracklist[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .tracklist[_ngcontent-%COMP%]{font-family:var(--font-ui);font-size:12px;color:var(--text);border-left:2px solid var(--accent, #333);padding-left:12px}'],changeDetection:0});let a=i;return a})();var Ie=[{path:"",component:Oe},{path:"dmca",loadComponent:()=>import("./chunk-3YSTDGJ2.js").then(a=>a.DmcaPageComponent)},{path:"privacy",loadComponent:()=>import("./chunk-FWF53HWC.js").then(a=>a.PrivacyPageComponent)},{path:"terms",loadComponent:()=>import("./chunk-LCSB3KAZ.js").then(a=>a.TermsPageComponent)},{path:"**",redirectTo:""}];var ce={providers:[we(Ie)]};var cn=(a,i)=>i.label,mn=(a,i)=>i.value;function un(a,i){if(a&1){let r=C();h(0,"button",16),z("click",function(){let n=k(r).$index,o=l(2);return R(o.selectTheme(n))}),p(1),m()}if(a&2){let r=i.$implicit,e=l(2);P("selected",e.theme.activePreset()===r),s(),K(r.label)}}function hn(a,i){if(a&1&&(h(0,"div",10),_(1,un,2,3,"button",15,cn),m()),a&2){let r=l();s(),Z(r.theme.presets)}}function pn(a,i){if(a&1){let r=C();h(0,"button",16),z("click",function(){let n=k(r).$implicit,o=l(2);return R(o.selectSort(n.value))}),p(1),m()}if(a&2){let r=i.$implicit,e=l(2);P("selected",e.sort.selectedField()===r.value),s(),K(r.label)}}function kn(a,i){if(a&1&&(h(0,"div",10),_(1,pn,2,3,"button",15,mn),m()),a&2){let r=l();s(),Z(r.sort.options())}}var ze=(()=>{let i=class i{constructor(){this.theme=g(U),this.sort=g(te),this.elRef=g(pe),this.openMenu=D(null)}onDocumentClick(e){this.elRef.nativeElement.contains(e.target)||this.openMenu.set(null)}toggleMenu(e,n){n.stopPropagation(),this.openMenu.update(o=>o===e?null:e)}selectTheme(e){this.theme.setPreset(this.theme.presets[e]),this.openMenu.set(null)}selectSort(e){this.sort.setField(e),this.openMenu.set(null)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=E({type:i,selectors:[["app-header"]],hostBindings:function(n,o){n&1&&v("click",function(d){return o.onDocumentClick(d)},Re)},decls:18,vars:6,consts:[[1,"app-header"],[1,"logo"],[1,"controls"],[1,"menu-wrap"],["aria-label","Theme",1,"menu-btn",3,"click"],["viewBox","0 0 16 16","width","15","height","15","aria-hidden","true"],["x","1.5","y","1.5","width","5.5","height","5.5","rx","1.2","fill","currentColor"],["x","9","y","1.5","width","5.5","height","5.5","rx","1.2","fill","currentColor","opacity","0.55"],["x","1.5","y","9","width","5.5","height","5.5","rx","1.2","fill","currentColor","opacity","0.3"],["x","9","y","9","width","5.5","height","5.5","rx","1.2","fill","currentColor","opacity","0.15"],[1,"dropdown"],["aria-label","Sort by",1,"menu-btn",3,"click"],["viewBox","0 0 16 16","width","15","height","15","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","aria-hidden","true"],["d","M2 4h8M2 8h5M2 12h3"],["d","M12 3v10M10 11l2 2 2-2"],[1,"option",3,"selected"],[1,"option",3,"click"]],template:function(n,o){n&1&&(h(0,"header",0)(1,"span",1),p(2,"CATTANEO"),m(),h(3,"div",2)(4,"div",3)(5,"button",4),z("click",function(d){return o.toggleMenu("theme",d)}),S(),h(6,"svg",5),w(7,"rect",6)(8,"rect",7)(9,"rect",8)(10,"rect",9),m()(),x(11,hn,3,0,"div",10),m(),I(),h(12,"div",3)(13,"button",11),z("click",function(d){return o.toggleMenu("sort",d)}),S(),h(14,"svg",12),w(15,"path",13)(16,"path",14),m()(),x(17,kn,3,0,"div",10),m()()()),n&2&&(s(5),P("open",o.openMenu()==="theme"),s(6),y(o.openMenu()==="theme"?11:-1),s(2),P("open",o.openMenu()==="sort"),s(4),y(o.openMenu()==="sort"?17:-1))},dependencies:[ie],styles:['@charset "UTF-8";.app-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 20px;height:var(--header-height, 52px);background:var(--bg-header, #fff);border-bottom:1px solid var(--border-header, #e8e8e8);font-family:var(--font-ui, "Libre Franklin", sans-serif);color:var(--text, #222);flex-shrink:0}.app-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-weight:700;font-size:15px;letter-spacing:3px;color:var(--text-logo, #111)}.app-header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.menu-wrap[_ngcontent-%COMP%]{position:relative}.menu-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--border, #e0e0e0);border-radius:var(--player-radius, 6px);background:transparent;color:var(--text, #222);cursor:pointer;transition:background .15s,border-color .15s}.menu-btn[_ngcontent-%COMP%]:hover{background:var(--bg, #f5f5f5);border-color:var(--text-muted, #aaa)}.menu-btn.open[_ngcontent-%COMP%]{background:var(--text, #222);border-color:var(--text, #222);color:var(--bg, #fff)}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 6px);right:0;min-width:130px;background:var(--bg-header, #fff);border:1px solid var(--border, #e0e0e0);border-radius:6px;box-shadow:0 4px 16px #0000001a;z-index:200;overflow:hidden}.option[_ngcontent-%COMP%]{display:block;width:100%;padding:8px 12px;font-family:var(--font-ui, "Libre Franklin", sans-serif);font-size:12px;text-align:left;background:transparent;border:none;color:var(--text, #222);cursor:pointer;transition:background .1s}.option[_ngcontent-%COMP%]:hover{background:var(--border, #f0f0f0)}.option.selected[_ngcontent-%COMP%]{font-weight:600;padding-left:10px;border-left:2px solid var(--text, #222)}'],changeDetection:0});let a=i;return a})();var Je=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=E({type:i,selectors:[["app-footer"]],decls:11,vars:0,consts:[[1,"app-footer"],["routerLink","/dmca"],[1,"sep"],["routerLink","/privacy"],["routerLink","/terms"]],template:function(n,o){n&1&&(c(0,"footer",0)(1,"a",1),p(2,"DMCA"),u(),c(3,"span",2),p(4,"\xB7"),u(),c(5,"a",3),p(6,"Privacy Policy"),u(),c(7,"span",2),p(8,"\xB7"),u(),c(9,"a",4),p(10,"Terms of Use"),u()())},dependencies:[Te],styles:['.app-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;height:32px;background:var(--bg-footer, #f5f5f5);border-top:1px solid var(--border, #e8e8e8);font-family:var(--font-ui, "Libre Franklin", sans-serif);font-size:11px;flex-shrink:0}.app-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-muted, #aaa);text-decoration:none;letter-spacing:.5px;transition:color .2s}.app-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text)}.app-footer[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{color:var(--border, #ccc)}'],changeDetection:0});let a=i;return a})();var We=(()=>{let i=class i{constructor(){this.isSupported=typeof navigator<"u"&&"mediaSession"in navigator}setMetadata(e){this.isSupported&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.title,artist:"Hern\xE1n Cattaneo",artwork:[{src:"assets/icons/favicon_io/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"assets/icons/favicon_io/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}))}setPlaybackState(e){this.isSupported&&(navigator.mediaSession.playbackState=e)}setPositionState(e,n){if(this.isSupported&&!(!Number.isFinite(e)||!Number.isFinite(n)))try{navigator.mediaSession.setPositionState({duration:e,playbackRate:1,position:n})}catch(o){console.debug("setPositionState error:",o)}}registerHandlers(e){this.isSupported&&(navigator.mediaSession.setActionHandler("play",e.play),navigator.mediaSession.setActionHandler("pause",e.pause),navigator.mediaSession.setActionHandler("seekbackward",()=>e.seekbackward()),navigator.mediaSession.setActionHandler("seekforward",()=>e.seekforward()),navigator.mediaSession.setActionHandler("seekto",n=>{typeof n.seekTime=="number"&&e.seek(n.seekTime)}))}};i.\u0275fac=function(n){return new(n||i)},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var Rn=["audioPlayer"],gn=()=>[import("./chunk-HNZ3OUYT.js").then(a=>a.VisualizerComponent)];function Mn(a,i){a&1&&(S(),c(0,"svg",3),f(1,"rect",15)(2,"rect",16),u())}function Sn(a,i){a&1&&(S(),c(0,"svg",3),f(1,"polygon",17),u())}function xn(a,i){if(a&1){let r=C();c(0,"button",26),v("click",function(){k(r);let n=l(4);return R(n.confirmDelete())}),p(1," \u2715 Remove "),u()}}function yn(a,i){if(a&1){let r=C();c(0,"button",27),v("click",function(){k(r);let n=l(4);return R(n.isConfirmingDelete=!0)}),p(1," Remove "),u()}}function An(a,i){if(a&1){let r=C();c(0,"div",21),v("mouseleave",function(){k(r);let n=l(3);return R(n.isConfirmingDelete=!1)}),c(1,"button",22),S(),c(2,"svg",3),f(3,"path",23),u()(),x(4,xn,2,0,"button",24)(5,yn,2,0,"button",25),u()}if(a&2){let r=l(3);s(4),y(r.isConfirmingDelete?4:5)}}function Dn(a,i){if(a&1&&(c(0,"span",29),p(1),u()),a&2){l(2);let r=X(0);s(),J("",r,"%")}}function fn(a,i){a&1&&(S(),c(0,"svg",30),f(1,"circle",31),u())}function bn(a,i){if(a&1){let r=C();c(0,"button",28),v("click",function(){k(r);let n=l(3);return R(n.cancelDownload())}),x(1,Dn,2,1,"span",29)(2,fn,2,0,":svg:svg",30),u()}if(a&2){l();let r=X(0);s(),y(r>=0?1:2)}}function Cn(a,i){if(a&1){let r=C();c(0,"button",32),v("click",function(){k(r);let n=l(3);return R(n.startDownload())}),S(),c(1,"svg",3),f(2,"path",33),u()()}}function vn(a,i){if(a&1&&(ne(0),x(1,An,6,1,"div",18)(2,bn,3,1,"button",19)(3,Cn,3,0,"button",20)),a&2){let r,e=l(2),n=ae(e.downloadService.progress().get(e.currentContent.id)),o=e.downloadService.downloaded().has(e.currentContent.id);s(),y((r=!0)===o?1:r===(typeof n=="number")?2:3)}}function Pn(a,i){a&1&&f(0,"app-visualizer")}function Tn(a,i){if(a&1){let r=C();c(0,"div",1)(1,"button",2),v("click",function(){k(r);let n=l();return R(n.togglePlay())}),x(2,Mn,3,0,":svg:svg",3)(3,Sn,2,0,":svg:svg",3),u(),c(4,"button",4),v("click",function(){k(r);let n=l();return R(n.showVisualizer=!n.showVisualizer)}),S(),c(5,"svg",3),f(6,"rect",5)(7,"rect",6)(8,"rect",7)(9,"rect",8),u()(),x(10,vn,4,2),I(),c(11,"div",9)(12,"div",10),p(13),u(),c(14,"div",11),Me(15,Pn,1,0),Se(16,15,gn),u(),c(18,"input",12),v("pointerdown",function(){k(r);let n=l();return R(n.isDragging=!0)})("pointerup",function(){k(r);let n=l();return R(n.isDragging=!1)})("pointercancel",function(){k(r);let n=l();return R(n.isDragging=!1)})("input",function(n){k(r);let o=l();return R(o.onSeek(n))}),u()(),c(19,"audio",13,0),v("timeupdate",function(){k(r);let n=l();return R(n.onTimeUpdate())})("loadedmetadata",function(){k(r);let n=l();return R(n.onMetadata())})("ended",function(){k(r);let n=l();return R(n.onAudioEnded())})("playing",function(){k(r);let n=l();return R(n.onAudioPlaying())}),f(21,"source",14),u()()}if(a&2){let r=l();s(),Y("aria-label",r.isPlaying?"Pause":"Play"),s(),y(r.isPlaying?2:3),s(2),P("active",r.showVisualizer),Y("aria-label",r.showVisualizer?"Hide visualizer":"Show visualizer"),s(6),y(r.currentContent?10:-1),s(3),K(r.currentContent.title),s(),P("vis-open",r.showVisualizer),s(2),xe(r.showVisualizer),s(2),Q("--progress-pct",r.progressPercent+"%"),P("dragging",r.isDragging),de("value",r.progressPercent),s(3),de("src",r.currentContent.link)}}var Ve=(()=>{let i=class i{set audioPlayerRef(e){this.audioElement=e?.nativeElement??null,this.audioElement&&this.audioAnalysis.connect(this.audioElement),this.syncAudio()}constructor(e){this.playerService=e,this.currentContent=null,this.progressPercent=0,this.duration=0,this.isPlaying=!1,this.isDragging=!1,this.showVisualizer=!1,this.isConfirmingDelete=!1,this.audioElement=null,this.lastState=null,this.activeLink=null,this.lastReportedPosition=0,this.audioAnalysis=g(He),this.mediaSessionService=g(We),this.downloadService=g(le),this._destroyRef=g(ee),typeof document<"u"&&document.addEventListener("pointerdown",()=>this.audioAnalysis.resume(),{once:!0}),typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.hidden||(this.audioAnalysis.resume(),this.audioElement?.paused&&this.lastState?.isPlaying&&this.audioElement.play())}),this.mediaSessionService.registerHandlers({play:()=>{this.lastState?.content&&this.playerService.performAction("play",this.lastState.content)},pause:()=>this.playerService.performAction("pause"),seekbackward:()=>{if(!this.audioElement)return;let n=Math.max(0,this.audioElement.currentTime-15);this.playerService.performAction("seek",void 0,n),this.audioElement&&(this.audioElement.currentTime=n)},seekforward:()=>{if(!this.audioElement)return;let n=Math.min(this.duration,this.audioElement.currentTime+15);this.playerService.performAction("seek",void 0,n),this.audioElement&&(this.audioElement.currentTime=n)},seek:n=>{let o=Math.max(0,Math.min(this.duration,n));this.playerService.performAction("seek",void 0,o),this.audioElement&&(this.audioElement.currentTime=o)}}),this.playerService.getState().pipe(Ee()).subscribe(n=>{this.lastState=n,this.currentContent=n.content,this.isPlaying=n.isPlaying,n.content&&(this.mediaSessionService.setMetadata(n.content),n.isPlaying||this.mediaSessionService.setPlaybackState("paused")),this.syncAudio()})}togglePlay(){this.lastState&&(this.audioAnalysis.resume(),this.lastState.isPlaying?this.playerService.performAction("pause"):this.playerService.performAction("play",this.lastState.content??void 0))}onMetadata(){this.duration=this.audioElement?.duration??0,this.mediaSessionService.setPositionState(this.duration,this.audioElement?.currentTime??0),this.syncAudio()}onTimeUpdate(){if(!this.audioElement||!this.lastState)return;!this.isDragging&&this.audioElement.duration&&(this.progressPercent=this.audioElement.currentTime/this.audioElement.duration*100);let e=this.audioElement.currentTime;Math.abs(e-this.lastState.currentTime)>1&&this.playerService.performAction("seek",void 0,e),Math.abs(e-this.lastReportedPosition)>2&&(this.mediaSessionService.setPositionState(this.duration,e),this.lastReportedPosition=e)}onSeek(e){let n=+e.target.value,o=n/100*this.duration;this.progressPercent=n,this.playerService.performAction("seek",void 0,o),this.audioElement&&(this.audioElement.currentTime=o)}onAudioEnded(){this.playerService.performAction("stop")}onAudioPlaying(){this.mediaSessionService.setPlaybackState("playing"),this.audioAnalysis.resume()}startDownload(){this.currentContent&&this.downloadService.startDownload(this.currentContent)}cancelDownload(){this.currentContent&&this.downloadService.cancelDownload(this.currentContent.id)}confirmDelete(){return T(this,null,function*(){this.currentContent&&(yield this.downloadService.deleteDownload(this.currentContent.id),this.isConfirmingDelete=!1)})}syncAudio(){if(!this.audioElement||!this.lastState)return;let{content:e,currentTime:n,isPlaying:o}=this.lastState;if(!e){this.audioElement.pause(),this.activeLink&&(this.audioElement.removeAttribute("src"),this.audioElement.load(),this.activeLink=null);return}let t=this.downloadService.getBlobUrl(e.id)??e.link;this.activeLink!==t&&(this.audioElement.src=t,this.audioElement.load(),this.activeLink=t),Math.abs(this.audioElement.currentTime-n)>1&&(this.audioElement.currentTime=n),o&&this.audioElement.paused?this.audioElement.play():!o&&!this.audioElement.paused&&this.audioElement.pause()}};i.\u0275fac=function(n){return new(n||i)(ge(re))},i.\u0275cmp=E({type:i,selectors:[["app-episode-player"]],viewQuery:function(n,o){if(n&1&&Ae(Rn,5),n&2){let t;De(t=fe())&&(o.audioPlayerRef=t.first)}},decls:1,vars:1,consts:[["audioPlayer",""],[1,"floating-player"],[1,"play-btn",3,"click"],["viewBox","0 0 16 16","width","14","height","14","fill","currentColor","aria-hidden","true"],[1,"vis-btn",3,"click"],["x","1","y","8","width","3","height","7","rx","1"],["x","5","y","4","width","3","height","11","rx","1"],["x","9","y","6","width","3","height","9","rx","1"],["x","13","y","2","width","3","height","13","rx","1"],[1,"track-info"],[1,"track-title"],[1,"vis-wrapper"],["type","range","min","0","max","100","step","0.1","aria-label","Seek",1,"seek-bar",3,"pointerdown","pointerup","pointercancel","input","value"],["controls","","playsinline","","crossorigin","anonymous",2,"display","none",3,"timeupdate","loadedmetadata","ended","playing"],["type","audio/mpeg",3,"src"],["x","2","y","1","width","5","height","14","rx","1"],["x","9","y","1","width","5","height","14","rx","1"],["points","3,1 15,8 3,15"],[1,"download-btn-wrapper"],["aria-label","Cancel download",1,"download-btn","downloading"],["aria-label","Download episode",1,"download-btn"],[1,"download-btn-wrapper",3,"mouseleave"],["aria-label","Downloaded - hover to remove",1,"download-btn","downloaded"],["d","M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"],["aria-label","Confirm delete",1,"delete-confirm-btn"],["aria-label","Remove download",1,"remove-btn"],["aria-label","Confirm delete",1,"delete-confirm-btn",3,"click"],["aria-label","Remove download",1,"remove-btn",3,"click"],["aria-label","Cancel download",1,"download-btn","downloading",3,"click"],[1,"progress-text"],["viewBox","0 0 16 16","width","12","height","12","fill","currentColor","aria-hidden","true"],["cx","8","cy","8","r","6","fill","none","stroke","currentColor","stroke-width","1","opacity","0.3"],["aria-label","Download episode",1,"download-btn",3,"click"],["d","M8 12L2 6h4V1h4v5h4L8 12z"]],template:function(n,o){n&1&&x(0,Tn,22,16,"div",1),n&2&&y(o.currentContent?0:-1)},styles:['@charset "UTF-8";[_nghost-%COMP%]{pointer-events:none}.floating-player[_ngcontent-%COMP%]{pointer-events:auto;position:fixed;bottom:52px;left:20px;right:20px;z-index:100;display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-player, #fff);border:1px solid var(--border, #e0e0e0);border-radius:var(--player-radius, 8px);box-shadow:var(--player-shadow, 0 2px 12px rgba(0, 0, 0, .1));font-family:var(--font-ui, "Libre Franklin", sans-serif);color:var(--text, #222);transition:background .3s ease,border-color .3s ease,box-shadow .3s ease}.play-btn[_ngcontent-%COMP%]{width:36px;height:36px;flex-shrink:0;border-radius:var(--player-radius, 50%);border:1px solid var(--border, transparent);background:var(--player-btn-bg, #222);color:var(--player-btn-fg, #fff);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:box-shadow .2s}.track-info[_ngcontent-%COMP%]{flex:1;min-width:0}.track-title[_ngcontent-%COMP%]{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text)}.seek-bar[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;display:block;width:100%;height:3px;margin-top:8px;border-radius:2px;outline:none;cursor:pointer;background:linear-gradient(to right,var(--player-fill, #222) var(--progress-pct, 0%),var(--player-track, #e0e0e0) var(--progress-pct, 0%));touch-action:pan-x}.seek-bar[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;width:0;height:0;border-radius:50%;background:var(--player-fill, #222);transition:width .12s ease,height .12s ease,margin-top .12s ease}.seek-bar.dragging[_ngcontent-%COMP%]::-webkit-slider-thumb, .seek-bar[_ngcontent-%COMP%]:active::-webkit-slider-thumb{width:18px;height:18px;margin-top:-7px}.seek-bar[_ngcontent-%COMP%]::-moz-range-thumb{width:0;height:0;border:none;border-radius:50%;background:var(--player-fill, #222);transition:width .12s ease,height .12s ease}.seek-bar.dragging[_ngcontent-%COMP%]::-moz-range-thumb, .seek-bar[_ngcontent-%COMP%]:active::-moz-range-thumb{width:18px;height:18px}body[data-theme=minimal-2d][data-mode=dark][_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%], body[data-theme=minimal-2d][data-mode=dark]   [_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_glow-pulse 1.4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_glow-pulse{0%,to{box-shadow:none}50%{box-shadow:var(--glow, none)}}.vis-wrapper[_ngcontent-%COMP%]{overflow:hidden;max-height:0;opacity:0;transition:max-height .35s ease,opacity .25s ease}.vis-wrapper.vis-open[_ngcontent-%COMP%]{max-height:52px;opacity:1}.vis-btn[_ngcontent-%COMP%]{width:28px;height:28px;flex-shrink:0;border-radius:var(--player-radius, 4px);border:1px solid var(--border, #e0e0e0);background:transparent;color:var(--text, #222);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:.5;transition:opacity .2s,background .2s}.vis-btn.active[_ngcontent-%COMP%]{opacity:1;background:var(--player-btn-bg, #222);color:var(--player-btn-fg, #fff);border-color:transparent}.pip-btn[_ngcontent-%COMP%]{width:28px;height:28px;flex-shrink:0;border-radius:var(--player-radius, 4px);border:1px solid var(--border, #e0e0e0);background:transparent;color:var(--text, #222);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:.5;transition:opacity .2s,background .2s}.download-btn-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;position:relative}.download-btn[_ngcontent-%COMP%]{width:28px;height:28px;flex-shrink:0;border-radius:var(--player-radius, 4px);border:1px solid var(--border, #e0e0e0);background:transparent;color:var(--text, #222);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:.5;transition:opacity .2s,background .2s,color .2s;font-size:11px;font-weight:500}.download-btn[_ngcontent-%COMP%]:hover{opacity:.75}.download-btn.downloaded[_ngcontent-%COMP%]{opacity:1;background:var(--player-btn-bg, #222);color:var(--player-btn-fg, #fff);border-color:transparent}.download-btn.downloading[_ngcontent-%COMP%]{opacity:.7}.download-btn[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%]{font-size:10px;font-weight:600}.remove-btn[_ngcontent-%COMP%]{padding:4px 8px;font-size:10px;font-weight:600;white-space:nowrap;border:1px solid var(--border, #e0e0e0);border-radius:var(--player-radius, 4px);background:transparent;color:var(--text, #666);cursor:pointer;transition:background .2s,color .2s}.remove-btn[_ngcontent-%COMP%]:hover{background:#0000000d;color:var(--text, #222)}.delete-confirm-btn[_ngcontent-%COMP%]{padding:4px 8px;font-size:10px;font-weight:600;white-space:nowrap;border:1px solid var(--border, #e0e0e0);border-radius:var(--player-radius, 4px);background:#dc35451a;color:#dc3545;cursor:pointer;transition:background .2s,color .2s}.delete-confirm-btn[_ngcontent-%COMP%]:hover{background:#dc354533}']});let a=i;return a})();var Ue=(()=>{let i=class i{constructor(){this._theme=g(U)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=E({type:i,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"app-container"],[1,"app-content"]],template:function(n,o){n&1&&(c(0,"div",0),f(1,"app-header"),c(2,"main",1),f(3,"router-outlet"),u(),f(4,"app-episode-player")(5,"app-footer"),u())},dependencies:[Pe,ze,Je,Ve],styles:[".app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;max-height:-webkit-fill-available;background:var(--bg, #fff)}.app-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding-bottom:144px}"]});let a=i;return a})();ve(Ue,G(F({},ce),{providers:[be(),...ce.providers]})).then(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(a=>console.warn("SW registration failed",a))}).catch(a=>console.error(a));
