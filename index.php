<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title>SolR result explorer</title>
        <meta name="description" content="">
        <meta name="author" content="">

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <link rel="stylesheet" href="stylesheets/base.css">
        <link rel="stylesheet" href="stylesheets/skeleton.css">
        <link rel="stylesheet" href="stylesheets/layout.css">

        <link rel="stylesheet" href="css/main.css">

        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <link rel="shortcut icon" href="images/favicon.ico">
        <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        <script>
            var render = new Object();
            render.tree = new Object();
            render.preview = new Object();
        </script>
    </head>
    <body>
        <form method="GET" action="?parseResult" id="solrQueryResult">
            <input type="text" name="solrQueryResultUrl" id="solrQueryResultUrl" value="" placeholder="Put your query here." />
        </form>

        <div id="result">
            <div id="resultTree">&nbsp;</div>

            <div id="preview">
                <p>No query yet.</p>
            </div>
        </div>


        <script src="js/render.preview.js"></script>
        <script src="js/render.tree.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>