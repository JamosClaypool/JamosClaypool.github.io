echo '<div class="greeting-message bright bounce" style="left:'.$x.'px; top:'.$y.'px;">';
			echo '<p>"HAPPY TACK-A-THON '.$_SESSION['user'].'!!!"<p>';
			echo '</div>';

echo '<div class="greeting-message very-bright"style="left:'.$y.'px; top:'.$x.'px;">';
			echo '<p>"HAPPY TACK-A-THON '.$_SESSION['user'].'!!!"<p>';
			echo '</div>';
<script>
	var x = Math.ceil(Math.random()*1000);
	var y = Math.ceil(Math.random()*1000);
	addElement(x,y);
</script>

$x=rand(1,1000);
			$y=rand(1,1000);
			if($x%2==1){ ?>
				<script>
					addElement(<?=$x."px";?>, <?=$y."px";?>);
				</script>
			<?php }
			if($x%2==0){?>
				<script>
					addElement(<?=$x."px";?>, <?=$y."px";?>);
				</script>
			<?php }
			sleep(1);

			.snowflake:nth-of-type(15){left:40%;-webkit-animation-delay:2s,5s;animation-delay:2s,5s}