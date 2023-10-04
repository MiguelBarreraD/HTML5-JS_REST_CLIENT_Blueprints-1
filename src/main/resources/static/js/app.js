$(document).ready(function () {
    $('#btnUpdateBlueprints').click(function () {
        const authorName = $('#authorNameInput').val();
        
        updateBlueprintsByAuthor(authorName);
    });

    function updateBlueprintsByAuthor(authorName) {
        apimock.getBlueprintsByAuthor(authorName, function (blueprints) {
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
                $('#blueprintsTable tbody').append(row);
            });

            const totalPoints = mappedBlueprints.reduce(function (acc, bp) {
                return acc + bp.numPoints;
            }, 0);

            $('#totalPoints').text(totalPoints);
        });
    }
});