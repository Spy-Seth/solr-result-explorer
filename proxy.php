<?php
    error_reporting(E_ALL);
    ini_set('html_errors', true);
    echo($_GET['url']);
    echo file_get_contents($_GET['url']);
?>