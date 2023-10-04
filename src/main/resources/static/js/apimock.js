//@author hcadavid

apimock = (function () {

    var mockdata = [];
	var selectedAuthor = "";
    var selectedBlueprints = [];

    mockdata["johnconnor"] = [
        {
            author: "johnconnor",
            points: [{ x: 150, y: 120 }, { x: 215, y: 115 }],
            name: "house"
        },
        {
            author: "johnconnor",
            points: [{ x: 340, y: 240 }, { x: 15, y: 215 }],
            name: "gear"
        },
        // Planos adicionales para el autor 'johnconnor'
        {
            author: "johnconnor",
            points: [{ x: 200, y: 180 }, { x: 300, y: 250 }],
            name: "car"
        },
        {
            author: "johnconnor",
            points: [{ x: 120, y: 90 }, { x: 180, y: 75 }],
            name: "asilo"
        }
    ];

    mockdata["maryweyland"] = [
        {
            author: "maryweyland",
            points: [{ x: 140, y: 140 }, { x: 115, y: 115 }],
            name: "house2"
        },
        {
            author: "maryweyland",
            points: [{ x: 140, y: 140 }, { x: 115, y: 115 }],
            name: "gear2"
        },
        // Planos adicionales para el autor 'maryweyland'
        {
            author: "maryweyland",
            points: [{ x: 180, y: 160 }, { x: 210, y: 180 }],
            name: "bike"
        },
        {
            author: "maryweyland",
            points: [{ x: 160, y: 130 }, { x: 200, y: 110 }],
            name: "sotano"
        }
    ];

	mockdata["Miguel"] = [
        {
            author: "Miguel",
            points: [{ x: 160, y: 140 }, { x: 135, y: 115 }],
            name: "bookshelf"
        },
        {
            author: "Miguel",
            points: [{ x: 280, y: 220 }, { x: 315, y: 255 }],
            name: "couch"
        },
        {
            author: "Miguel",
            points: [{ x: 210, y: 170 }, { x: 240, y: 190 }],
            name: "mirror"
        },
        {
            author: "Miguel",
            points: [{ x: 180, y: 130 }, { x: 220, y: 150 }],
            name: "book"
        }
    ];

	mockdata["Jaider"] = [
        {
            author: "Jaider",
            points: [{ x: 180, y: 120 }, { x: 230, y: 110 }],
            name: "chair"
        },
        {
            author: "Jaider",
            points: [{ x: 320, y: 240 }, { x: 40, y: 210 }],
            name: "table"
        },
        {
            author: "Jaider",
            points: [{ x: 220, y: 180 }, { x: 330, y: 260 }],
            name: "lamp"
        },
        {
            author: "Jaider",
            points: [{ x: 140, y: 90 }, { x: 190, y: 70 }],
            name: "desk"
        }
    ];

    return {
        getBlueprintsByAuthor: function (authname, callback) {
            selectedAuthor = authname;
            selectedBlueprints = mockdata[authname].map(function (bp) {
                return {
                    name: bp.name,
                    numPoints: bp.points.length
                };
            });
            callback(mockdata[authname]);
        },
		
        getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {
            callback(
                mockdata[authname].find(function (e) { return e.name === bpname })
            );
        }
    }
})();