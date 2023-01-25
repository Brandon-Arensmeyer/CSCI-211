<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafê Milestone</title>
    <link rel="stylesheet" href="css/indexstyle.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>
    <?php

        function createTable($a){
            $head = 0;
            $str = "<table>";
            $str = $str."<th>Food</th>";
            $str = $str."<th>Cost</th>";
            foreach($a as $item){
                $str = $str."<tr>";
                foreach($item as $customer){
                    $str = $str."<td>$customer</td>";
                }
                $str = $str."</td>";
            }
            $str = $str."</table>";
            
            return $str;
        }
    ?>
    <header>
        <?php
            include 'header/header.php';
        ?>
        
    </header>

    <div class="Breakfast">
        <h2> Breakfast </h2>
        <img id="breakfastImg" src="images/pancakes.jpg" alt="Picture of pancakes">
        <?php
            include 'food/breakfast.php';
            $breakfastTable = createTable($breakfastList);
            echo $breakfastTable;
        ?>

    </div>

    <div class="Lunch">
        <h2> Lunch </h2>
        <img id="lunchImg" src="images/cheeseburger.jpg" alt="Picture of burger">
        <?php
            include 'food/lunch.php';
            $lunchTable = createTable($lunchList);
            echo $lunchTable;
        ?>

    </div>

    <div class="Dinner">
        <h2> Dinner </h2>
        <img id="dinnerImg" src="images/alfredo.jpg" alt="Picture of alfredo">
        <?php
            include 'food/dinner.php';
            $dinnerTable = createTable($dinnerList);
            echo $dinnerTable;
        ?>

    </div>

    <footer>
        <?php
            include 'footer/footer.php';
        ?>
    </footer>
    
</body>
</html>