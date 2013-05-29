function printErrorMessage(message) {
    $('#preview').html('<p style="color: red;">' + message + '</p>')
}


$(document).ready(function() {
    $('#solrQueryResult').submit(function() {
        // Récupération de l'url saisie.
        var solrQueryInput = $(this).find('#solrQueryResultUrl');
        var solrQueryUrlRaw = solrQueryInput.val();
        var solrQueryUrl = decodeURIComponent(solrQueryUrlRaw);

        solrQueryInput.val(solrQueryUrl);

        if (-1 === solrQueryUrl.indexOf('&wt=json')) {
            solrQueryUrl += '&wt=json';
        }

        if (-1 === solrQueryUrl.indexOf('&homitHeader=false')) {
            solrQueryUrl += '&homitHeader=false';
        }

        // Réparation de la réquête AJAX à Solr (en passant par le proxy PHP).
        var solrQueryOption = {
            url: 'proxy.php',
            type: 'GET',
            dataType: 'json',
            data: {url: solrQueryUrl},
            success: function(data) {
                render.tree.renderSolrQueryResult(data);
            }
        };

        jQuery.ajax(solrQueryOption);

        return false;
    }).submit();


    // Mise en place de la préview des résultat solr.
    $('#resultTree').on('click', '.doc', function(e) {
        $('#preview').html(renderDocsPreview($(this)));
    });

    // Mise en place
    $('#resultTree').on('click', '.doc input.compareBox', function(e) {
        e.stopPropagation();

        var checkedCompareBox = $('#resultTree').find('.compareBox:checked');
        var docsToCompare = checkedCompareBox.parents('.doc');

        if (docsToCompare.length > 1) {
            $('#preview').html(renderDocsPreview(docsToCompare));
        } else if (docsToCompare.length === 1) {
            docsToCompare.first().trigger('click');
        }

    });
});