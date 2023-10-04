$(document).ready(function () {
    $('#btnUpdateBlueprints').click(function () {
        const authorName = $('#authorNameInput').val();
        updateBlueprintsByAuthor(authorName);
    });

    $('#blueprintsTable tbody').on('click', 'button.viewBlueprint', function () {
        const authorName = $(this).data('author');
        const blueprintName = $(this).data('blueprint');
        getBlueprintsByNameAndAuthor(authorName, blueprintName);
    });

    function updateBlueprintsByAuthor(authorName) {
        apiclient.getBlueprintsByAuthor(authorName, function (blueprints) {
            const mappedBlueprints = blueprints.map(function (bp) {
                return {
                    name: bp.name,
                    numPoints: bp.points.length
                };
            });       

            $('#blueprintsTable tbody').empty();

            mappedBlueprints.forEach(function (bp) {
                const row = $('<tr>');
                row.append($('<td>').text(bp.name));
                row.append($('<td>').text(bp.numPoints));
                row.append($('<td>').html('<button class="btn btn-primary viewBlueprint" data-author="' + authorName + '" data-blueprint="' + bp.name + '">Ver</button>'));
                $('#blueprintsTable tbody').append(row);
            });

            const totalPoints = mappedBlueprints.reduce(function (acc, bp) {
                return acc + bp.numPoints;
            }, 0);

            $('#totalPoints').text(totalPoints);
        });
    }

    function getBlueprintsByNameAndAuthor(authorName, bpname) {
        apiclient.getBlueprintsByNameAndAuthor(authorName, bpname, function (blueprint) {
            if (blueprint) {
                drawBlueprint(blueprint);
            }
        });
    }

    function drawBlueprint(blueprint) {
        const canvas = document.getElementById("blueprintCanvas");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(blueprint.points[0].x, blueprint.points[0].y);

        blueprint.points.forEach(function (point, index) {
            if (index > 0) {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.stroke();
    }
});
