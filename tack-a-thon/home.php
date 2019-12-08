<?php
require "header.php";
?>
<main>
	<audio id="music-box-1">
		<source src="music/Halloween_song_1.mp3">
	</audio>
	<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
  <div class="snowflake">
    🕷
  </div>
  <div class="snowflake">
    🕷
  </div>
  <div class="snowflake">
    🕷
  </div>
  <div class="snowflake">
    🕷
  </div>
  <div class="snowflake">
    🎃
  </div>
  <div class="snowflake">
    🎃
  </div>
  <div class="snowflake">
    🎃
  </div>
  <div class="snowflake">
    🎃
  </div>
  <div class="snowflake">
    🎃
  </div>
  <div class="snowflake">
    🎃
  </div>
</div>
	<audio id="music-box-2">
		<source src="music/Holiday_song_1.mp3">
	</audio>
	<audio id="music-box-3">
		<source src="music/Holiday_song_2.mp3">
	</audio>
	<div class="dot" id="dot"></div>
	<div class="upload-form" id="upload-form">
		<form method="post" action="includes/upload_img.inc.php" enctype="multipart/form-data">
			<h1 class="cheery blinking">UPLOAD YOUR FAVORITE HOLIDAY IMAGES!!!!!!!!</h1>
			<input type="file" name="fileToUpload" id="fileToUpload">
			<input type="submit" value="Upload Image" name="submit">
		</form>
	</div>
	<div class="menu" style="padding-top:10px; position:relative;">
		<div class="metal" style="perspective:750px;">
			<button class="circle shine" type="button" id="chaos-button" onclick="chaos()">PRESS</button>
      <div class="cover placeholder" id="cover" onclick="openCover()">
			<div class="cube">
			    <div class="cube__face cube__face--front glass"><h4 id="warning">Open in cause of Emergency</h4></div>
			    <!--<div class="cube__face cube__face--back glass">back</div>-->
			    <div class="cube__face cube__face--right glass"></div>
			    <div class="cube__face cube__face--left glass"></div>
			    <div class="cube__face cube__face--top glass"></div>
          <div class="cube__face cube__face--bottom glass"></div>
  			</div>
      </div>
		</div>

	</div>
	<?php
		$uploads=array_diff(scandir("uploads/"),array('.','..'));
		echo '<div class="photo-gallery" id="photo-gallery">';
		echo '<div id="inner-photo-gallery">';
		foreach($uploads as $key=>$value){
					echo '<div class="photo-gallery-item">';
					echo '<a href="uploads/'.$value.'"><img src="uploads/'.$value.'"></a>';
					echo '</div>';
		}
		echo '</div>';
		echo '</div>';
	?>
</main>
<?php
require "footer.php";
?>