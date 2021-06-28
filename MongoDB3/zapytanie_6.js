db.people.insertOne({
    "sex" : "Male",
    "first_name" : "Jacek",
    "last_name" : "Gatkowski",
    "job" : "Cookie eater",
    "email" : "j007g@onet.eu",
    "location" : {
            "city" : "Warszawa",
            "address" : {
                    "streetname" : "Zielona",
                    "streetnumber" : "420"
            }
    },
    "description" : "wysoki jak fasola a glupi jak topola",
    "height" : "184",
    "weight" : "81",
    "birth_date" : "1992-10-16T12:52:33Z",
    "nationality" : "Polska",
    "credit" : [
            {
                    "type" : "visa",
                    "number" : "2305331733350056",
                    "currency" : "PLN",
                    "balance" : "250000"
            }
    ]
})