/**
 *
 * @param Object solrResult
 * @returns {undefined}
 */
render.tree.renderSolrQueryResult = function(solrResult) {
    console.log('solrResult', solrResult);

    if (solrResult.response.docs) {
        // Simple render
        render.tree.renderSimpleSorlQueryResult(solrResult);
    } else if (solrResult.grouped) {
        // Render grouped result.
        render.tree.renderGroupedSorlQueryResult(solrResult);
    } else {
        printErrorMessage('Unknow query result format.');
    }

};



/**
 *
 * @param {type} solrResult
 * @returns {undefined}
 */
render.tree.renderSimpleSorlQueryResult = function(solrResult) {
    var result = $('<div></div>');

    jQuery.each(solrResult.response.docs, function() {
        result.append(render.tree.renderOneDocument(this));
    });

    $('#resultTree').html(result);
};



/**
 *
 * @param {type} solrResult
 * @returns {undefined}
 */
render.tree.renderGroupedSorlQueryResult = function(solrResult) {
    var result = $('<div></div>');

    var groupsInTreeNode = $('<div></div>');
    groupsInTreeNode.attr('class', 'groups');
    jQuery.each(solrResult.grouped, function(groupFieldName) {
        groupsInTreeNode.append('<p>Group on "' + groupFieldName + '"</p>');

        jQuery.each(this.groups, function() {
            var groupInTreeNode = $('<div></div>');

            groupInTreeNode.attr('class', 'group');

            groupInTreeNode.data('groupValue', this.groupValue);
            groupInTreeNode.data('maxScore', this.doclist.maxScore);
            groupInTreeNode.data('groupValue', this.doclist.numFound);
            groupInTreeNode.data('start', this.doclist.start);

            groupInTreeNode.append('<p class="title">Group value : "' + this.groupValue + '"</p>');
            groupInTreeNode.append('<p class="details">' + this.doclist.docs.length + ' / ' + this.doclist.numFound + '</p>');

            jQuery.each(this.doclist.docs, function() {
                groupInTreeNode.append(render.tree.renderOneDocument(this));
            });

            groupsInTreeNode.append(groupInTreeNode);
        });
    });

    result.append(groupsInTreeNode);

    $('#resultTree').html(result);
};


/**
 *
 * @param {type} document
 * @returns {renderTreeOneDocument.docHtml}
 */
render.tree.renderOneDocument = function renderOneDocument(document) {
    var docHtml = $('<div></div>');

    docHtml.attr('class', 'doc');
    docHtml.text(document.id);
    docHtml.append($('<input type="checkbox" class="compareBox" />').val(document.id));
    docHtml.data('raw', document);

    return docHtml;
};