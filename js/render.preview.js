


function renderDocsPreview(docsToCompare) {
    var tableData = new Object();

    docsToCompare.each(function(i) {
        var rawSolrResult = $(this).data('raw');

        for (var attr in rawSolrResult) {
            if (!tableData[attr]) {
                tableData[attr] = {};
            }

            tableData[attr][i] = rawSolrResult[attr];
        }
    });

    var tableNode = renderPreviewTableNode(tableData);

    return tableNode;
}



function renderPreviewTableNode(tableData) {
    var tableNode = $('<table></table>');
    jQuery.each(tableData, function(ligneName) {
        var row = $('<tr></tr>');

        var rowTitleNode = $('<td></td>');
        rowTitleNode.attr('class', 'attributeTitle');
        rowTitleNode.text(ligneName);
        row.append(rowTitleNode);

        jQuery.each(this, function() {
            var cel = $('<td></td>');
            cel.attr('class', 'attributeValue');

            if (this instanceof Array) {
                var celMultiValuedNode = $('<ul></ul>');
                celMultiValuedNode.attr('class', 'multivalued');

                jQuery.each(this, function() {
                    var oneValue = $('<li></li>');
                    oneValue.text(this.toString());
                    celMultiValuedNode.append(oneValue);
                });

                cel.html(celMultiValuedNode);
            } else {
                cel.text(this);
            }

            row.append(cel);
        });

        tableNode.append(row);
    });

    return tableNode;
}