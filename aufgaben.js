// //# Rufe alle Filme ab, bei denen der Regisseur (director) Steven Spielberg ist und gib nur das Feld 'Titel' aus.

// //- db.movieDetails.find({director:"Steven Spielberg"},{title:1, _id:0})

// [
//   { title: "The Adventures of Tintin" },
//   { title: "Raiders of the Lost Ark" },
//   { title: "The Lost World: Jurassic Park" },
//   { title: "Catch Me If You Can" },
//   { title: "A.I. Artificial Intelligence" },
//   { title: "E.T. the Extra-Terrestrial" },
// ];

// //#Rufe alle Filme ab, bei denen die Anzahl der Benutzerbewertungen bei Rotten Tomatoes mehr als 40000 ist. Beschränke die Suche auf 20 Filme und sortiere sie absteigend nach Benutzerbewertungen.

// //- db.movieDetails.find({'tomato.userReviews':{$gte:40000}},{title:1,_id:0,'tomato.userReviews':1,'tomato.userRating':1}).sort({'tomato.userRating':-1}).limit(20)

// [
//     {
//       title: 'Life Is Beautiful',
//       tomato: { userRating: 4.3, userReviews: 247770 }
//     },
//     {
//       title: 'Toy Story 3',
//       tomato: { userRating: 4.3, userReviews: 602138 }
//     },
//     {
//       title: 'The Martian',
//       tomato: { userRating: 4.3, userReviews: 104999 }
//     },
//     {
//       title: 'Toy Story 3',
//       tomato: { userRating: 4.3, userReviews: 602138 }
//     },
//     {
//       title: 'Big Hero 6',
//       tomato: { userRating: 4.3, userReviews: 124407 }
//     },
//     {
//       title: 'Once Upon a Time in the West',
//       tomato: { userRating: 4.3, userReviews: 64006 }
//     },
//     {
//       title: 'The Godfather: Part II',
//       tomato: { userRating: 4.3, userReviews: 407630 }
//     },
//     {
//       title: 'Dawn of the Planet of the Apes',
//       tomato: { userRating: 4.2, userReviews: 201217 }
//     },
//     {
//       title: 'Star Trek Into Darkness',
//       tomato: { userRating: 4.2, userReviews: 309531 }
//     },
//     {
//       title: 'Love Me If You Dare',
//       tomato: { userRating: 4.2, userReviews: 41892 }
//     },
//     {
//       title: 'All About My Mother',
//       tomato: { userRating: 4.2, userReviews: 51549 }
//     },
//     {
//       title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//       tomato: { userRating: 4.2, userReviews: 206480 }
//     },
//     {
//       title: 'Iron Man',
//       tomato: { userRating: 4.2, userReviews: 1072887 }
//     },
//     {
//       title: 'Star Trek',
//       tomato: { userRating: 4.1, userReviews: 743375 }
//     },
//     {
//       title: 'Star Wars: Episode IV - A New Hope',
//       tomato: { userRating: 4.1, userReviews: 851120 }
//     },
//     {
//       title: 'Life of Pi',
//       tomato: { userRating: 4.1, userReviews: 167128 }
//     },
//     {
//       title: 'The Hobbit: An Unexpected Journey',
//       tomato: { userRating: 4.1, userReviews: 470589 }
//     },
//     {
//       title: 'Gone Girl',
//       tomato: { userRating: 4.1, userReviews: 123180 }
//     },
//     {
//       title: 'Star Wars: Episode V - The Empire Strikes Back',
//       tomato: { userRating: 4.1, userReviews: 1045537 }
//     },
//     {
//       title: 'The Girl with the Dragon Tattoo',
//       tomato: { userRating: 4.1, userReviews: 116790 }
//     }
//   ]

// //# Rufe alle Filme ab, die zwischen 2000 und 2005 gedreht wurden (beide Jahre eingeschlossen) und gib nur die Felder 'Titel' und 'Jahr' aus.

// //- db.movieDetails.find({$and:[{year:{$gte:2000}},{year:{$lte:2005}}]},{title:1,_id:0,year:1})

// [
//   { title: "Star Wars: Episode III - Revenge of the Sith", year: 2005 },
//   { title: "Star Wars: Episode II - Attack of the Clones", year: 2002 },
//   { title: "Love Actually", year: 2003 },
//   { title: "Punch-Drunk Love", year: 2002 },
//   { title: "Zathura: A Space Adventure", year: 2005 },
//   { title: "Space Cowboys", year: 2000 },
//   { title: "2001: A Space Travesty", year: 2000 },
//   { title: "The Adventures of Sharkboy and Lavagirl 3-D", year: 2005 },
//   { title: "The Adventures of Rocky & Bullwinkle", year: 2000 },
//   { title: "Best in Show", year: 2000 },
//   { title: "Shaun of the Dead", year: 2004 },
//   { title: "Dawn of the Dead", year: 2004 },
//   { title: "Planet of the Apes", year: 2001 },
//   { title: "Treasure Planet", year: 2002 },
//   { title: "Red Planet", year: 2000 },
//   { title: "AVP: Alien vs. Predator", year: 2004 },
//   { title: "The Kid", year: 2000 },
//   { title: "Crossfire Trail", year: 2001 },
//   { title: "Total western", year: 2000 },
//   { title: "Cowboy Bebop: The Movie", year: 2001 },
// ];

// //#Rufe alle Filme ab, die eine Rotten Tomatoes Benutzerbewertung von mindestens 4 haben und nach 2010 entstanden sind. Gib nur die Felder 'Titel' und 'Regisseur' (director) aus.

// //- db.movieDetails.find({$and:[{year:{$gte:2010}},{'tomato.userRating':{$gte:4}}]},{title:1,_id:0,director:1})

// [
//   { title: "West of Memphis", director: "Amy Berg" },
//   { title: "Star Trek Into Darkness", director: "J.J. Abrams" },
//   { title: "Rise of the Planet of the Apes", director: "Rupert Wyatt" },
//   { title: "Dawn of the Planet of the Apes", director: "Matt Reeves" },
//   { title: "Wild Tales", director: "Damián Szifrón" },
//   { title: "Woman in Gold", director: "Simon Curtis" },
//   { title: "Big Hero 6", director: "Don Hall, Chris Williams" },
//   { title: "Gone Girl", director: "David Fincher" },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     director: "David Fincher",
//   },
//   { title: "Scott Pilgrim vs. the World", director: "Edgar Wright" },
//   { title: "Iron Man 3", director: "Shane Black" },
//   { title: "Toy Story 3", director: "Lee Unkrich" },
//   { title: "Life of Pi", director: "Ang Lee" },
//   {
//     title: "Évocateur: The Morton Downey Jr. Movie",
//     director: "Seth Kramer, Daniel A. Miller, Jeremy Newberger",
//   },
//   { title: "Saving Mr. Banks", director: "John Lee Hancock" },
//   { title: "Ai Weiwei: Never Sorry", director: "Alison Klayman" },
//   { title: "Ex Machina", director: "Alex Garland" },
//   {
//     title: "The Hobbit: An Unexpected Journey",
//     director: "Peter Jackson",
//   },
//   { title: "Toy Story 3", director: "Lee Unkrich" },
//   { title: "The Martian", director: "Ridley Scott" },
// ];

// //#Rufe alle Filme ab, die weniger als 1000 Benutzer-Rezensionen bei Rotten Tomatoes haben und vor dem Jahr 2005 gedreht wurden. Sortiere sie aufsteigend nach der Anzahl der Benutzer-Rezensionen und beschränke die Suche auf 10 Filme.

// //- db.movieDetails.find({$and:[{year:{$lte:2005}},{'tomato.userReviews':{$lt:1000}}]}).sort({'tomato.userReviews':1}).limit(10)

// [
//     {
//       title: 'The Life Aquatic with Steve Zissou',
//       tomato: { userReviews: 121 }
//     },
//     { title: 'Bounce Ko Gals', tomato: { userReviews: 144 } },
//     { title: 'OT: Our Town', tomato: { userReviews: 154 } }
//   ]

// // #Rufe alle Filme ab, die das Feld 'Rotten Tomatoes' nicht enthalten.

// //- db.movieDetails.find({tomato:{$exists:false}})

// //# Rufe alle Filme ab, die mindestens 100 IMDb-Stimmen, aber weniger als 1000 haben und gib nur die Felder 'Titel' und 'IMDb Bewertung' aus.

// //- db.movieDetails.find({$and:[{'imdb.votes':{$gte:100}},{'imdb.votes':{$lte:1000}}]},{title:1,_id:0,'imdb.votes':1})

// [
//   { title: "Where the Trail Ends", imdb: { votes: 951 } },
//   { title: "Western", imdb: { votes: 938 } },
//   { title: "Total western", imdb: { votes: 585 } },
//   { title: "Western Spaghetti", imdb: { votes: 532 } },
//   { title: "The Cowboy and the Lady", imdb: { votes: 762 } },
//   {
//     title: "Quick Gun Murugun: Misadventures of an Indian Cowboy",
//     imdb: { votes: 656 },
//   },
//   { title: "Bollywood Bound", imdb: { votes: 897 } },
//   { title: "A Ship Bound for India", imdb: { votes: 592 } },
//   { title: "Trouble Bound", imdb: { votes: 575 } },
//   { title: "Storm Bound", imdb: { votes: 535 } },
//   { title: "Mia Italida ap' tin Kypseli", imdb: { votes: 331 } },
//   { title: "Ap' ta kokala vgalmena", imdb: { votes: 240 } },
//   { title: "Gabros ap' to Londino", imdb: { votes: 181 } },
//   {
//     title: "Hooligans - Kato ta heria ap' ta niata!",
//     imdb: { votes: 153 },
//   },
//   { title: "AC/DC: Let There Be Rock", imdb: { votes: 849 } },
//   { title: "AC/DC: Family Jewels", imdb: { votes: 615 } },
//   { title: "AC/DC: No Bull", imdb: { votes: 600 } },
//   { title: "AC/DC: Live at River Plate", imdb: { votes: 497 } },
//   { title: "AC/DC: Stiff Upper Lip Live", imdb: { votes: 492 } },
//   { title: "One Million AC/DC", imdb: { votes: 158 } },
// ];

// //# Sortiere alle Filme absteigend nach ihrer IMDb-Bewertung.

// //- db.movieDetails.find({},{title:1,_id:0,'imdb.rating':1}).sort({'imdb.rating':-1})

// zu viel

// //# Rufe die 10 Filme mit der höchsten IMDb-Bewertung ab, sortiert in absteigender Reihenfolge.

// //- db.movieDetails.find({},{title:1,_id:0,'imdb.rating':1}).sort({'imdb.rating':-1}).limit(10)

// [
//   { title: "DP Fantasies 2", imdb: { rating: 9.6 } },
//   {
//     title: "Liverpool FC: Champions of Europe 2005",
//     imdb: { rating: 9.5 },
//   },
//   { title: "Bollywood im Alpenrausch", imdb: { rating: 9.2 } },
//   { title: "Ey Pari Kojai", imdb: { rating: 9 } },
//   { title: "Yellow Ox Mountain", imdb: { rating: 9 } },
//   { title: "Die Entnazifizierung des MH", imdb: { rating: 9 } },
//   { title: "Coming Off the DL", imdb: { rating: 9 } },
//   { title: "The Godfather: Part II", imdb: { rating: 9 } },
//   {
//     title: "Gamechangers Ep. 3: A Legend in the Booth",
//     imdb: { rating: 9 },
//   },
//   { title: "VH-1: Pop Up Video 80's", imdb: { rating: 8.9 } },
// ];

// //# Rufe alle Filme mit den Genres 'Crime' und 'Drama' ab und gib nur die Felder 'Titel' und 'Genre' aus. Sortiere sie aufsteigend nach ihrer IMDb-Bewertung.

// //- db.movieDetails.find({genres:{$in:["Drama","Crime"]}},{title:1,_id:0,genres:1,'imdb.rating':1}).sort({'imdb.rating':1})

// zu viel
