<?php
require_once "db_connection.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Product</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
    <style>
        * {
            font-family: 'Old Standard TT', serif;
        }
    </style>
    <?php

    require "db_connection.php";

    if(isset($_POST['insert_button'])) {

        $pr_cat = $_POST['pro_cat'];
        $pr_brand = $_POST['pro_brand'];
        $pr_title = $_POST['pro_title'];
        $pr_price = $_POST['pro_price'];
        $pr_kw = $_POST['pro_kw'];
        $pr_desc = $_POST['pro_desc'];

        //getting image from the field
        $pr_image = $_FILES['pro_image']['name'];
        $pr_image_tmp = $_FILES['pro_image']['tmp_name'];
        move_uploaded_file($pr_image_tmp, "product_images/$pr_image");

        $insert_query = "insert into products (pro_cat,pro_brand,pro_title,pro_price,pro_kw,pro_desc,pro_image) 
values ('$pr_cat','$pr_brand','$pr_title','$pr_price','$pr_kw','$pr_desc','$pr_image')";
        echo $insert_query;
        $result = mysqli_query($con, $insert_query);
        if (!$result) {
            echo "Not executed";
        } else {
            echo "Executed";
        }
        if ($insert_query) {
            header("location: " . $_SERVER['PHP_SELF']);
        }
    }
    ?>
</head>
<body>
<div class="container">
    <h1 class="text-center my-4"><i class="fas fa-plus fa-md"></i> <span class="d-none d-sm-inline"> Add New </span> Brand </h1>
    <form  action="insert_product.php" method="post">
        <div class="row">
            <div class="d-none d-sm-block col-sm-3 col-md-4 col-lg-2 col-xl-4 mt-auto">
                <label for="pro_title" class="float-md-right"> <span class="d-sm-none d-md-inline"> Brand: </label>
            </div>
            <div class="col-sm-9 col-md-8 col-lg-4 col-xl-4">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-file-signature"></i></div>
                    </div>
                    <input type="text" class="form-control" id="pro_title" name="pro_title" placeholder="Enter Product Title" >
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="d-none d-sm-block col-sm-3 col-md-4 col-lg-2 col-xl-4 mt-auto"></div>
            <div class="col-sm-9 col-md-8 col-lg-4 col-xl-4">
                <button name="insert_button" type="submit" class="btn btn-primary btn-block"><i class="fas fa-plus"></i> Insert Now </button>
            </div>
        </div>
    </form>
</div>
</body>
</html>