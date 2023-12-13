# Mongo Shell Einführung

### Zeige mir alle Datenbanken an

show dbs

### Zeige mir alle Collections aus der auserwählten DB an

show collections,,

### Wähle eine Datenbank aus

use datenbankname

Wir könne jeden Datenbanknamen eingeben, auch wenn es diese noch gar nicht gibt. Die Datenbank wird beim erzeugen eines Dokumentes automatisch erstellt.

### Einfügen eines einzelnen Dokuments

db.collectionname.insertOne({"name":"christian",...})

### Einfügen mehrerer Dokumente

db.collectionname.insertMany([{"name":"christian",...},{"name":"Andre",....}])

### Abrufen von Daten aus einer Collection

db.collectionname.find()

-> gibt alle Dokumente aus der Collection zurück innerhalb eines Arrays verschiedene Objekte

### Abrufen des ersten Dokumentes einer Collection

db.collectionname.findOne()

### Updaten eines Dokumentes aus einer Collection

db.collectionname.updateOne({name: "christian"},{$set:{name:"Thomas"}})
-> braucht ein Filterobject

### Updaten mehrerer Dokumente aus einer Collection

db.collectionname.updateMany({name: "christian"},{$set:{name:"Thomas"}})
-> braucht ein Filterobject

### Löschen des ersten Dokumentes aus einer Collection

db.collectionname.deleteOne({name:"})
-> braucht ein Filterobject

### Löschen mehrerer Dokumente aus einer Collection

db.collectionname.deleteMany({name:"})
-> braucht ein Filterobject

# Projectionobject

db.collectionname.find({queryobject},{projectionobject})

Beispiel:
db.collectionname.find({},{name:1}) // nur der Name und die id wird angezeigt
db.collectionname.find({},{name:1, \_id:0}) // nur der Name wird angezeigt
db.collectionname.find({},{ \_id:0}) // alles außer die id wird angezeigt

# Query

query-operator einbauen
db.collectionname.find({field:{$operator:value}})

Beispiel:
db.airports.find({passagiere:{$gt:8000}})
db.airports.find({land:{$nin:["RU","PG","US]}})

Operatoren:
gt: greater than - größer als
gte: greater than equal - größer oder gleich
lt: lower than - kleiner als
lte: lower than equal - kleiner oder gleich
nin: not in - man kriegt ein array wo die angegeben Werte nicht ausgegeben werden

https://www.mongodb.com/docs/manual/reference/operator/query/#query-selectors
