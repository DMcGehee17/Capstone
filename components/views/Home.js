import html from "html-literal";
export default () => html `
<!DOCTYPE html>
<html>
<link href="style.css" rel="stylesheet" />
    <head lang="en">
    <meta charset="UTF-8" />
    <title>FindMeAMovie</title>
  </head>
    <body>
    <h1>Welcome to FindMeAMovie!</h1>
    <p></p>
    <h2>Need a movie to watch? Start your search here!</h2>
    </body>
    <div class="wrapper">
    <h3>Title</h3>
    <input></input>
    <h3>Year Released</h3>
   <div class="wrapper-item>"><label id="before1930" type="radio" name="Before 1930"><button type="radio"></button> Before 1930
    </label></div>
    <div class="wrapper-item>"><label id="1930to1950" type="radio" name="1930to1950"><button type="radio"></button> 1930-1950
    </label></div>
    <div class="wrapper-item>"><label id="1950to1970" type="radio" name="1950to1970"><button type="radio"></button> 1950-1970
    </label></div>
    <div class="wrapper-item>"><label id="1970to1990" type="radio" name="1970to1990"><button type="radio"></button> 1970-1990
    </label></div>
    <div class="wrapper-item>"><label id="1990to2010" type="radio" name="1950to1970"><button type="radio"></button> 1990-2010
    </label></div>
    <div class="wrapper-item>"><label id="presentDay" type="radio" name="2010toNow"><button type="radio"></button> 2010-Present
    </label></div>

    <h3>Streaming Service</h3>
    <label id="netflix" type="radio" name="Netflix"><button type="radio"></button> Netflix
    </label>
    <label id="paramount" type="radio" name="ParamountPlus"><button type="radio"></button> Paramount Plus
    </label>
    <label id="peacock" type="radio" name="Peacock"><button type="radio"></button> Peacock
    </label>
    <label id="disney" type="radio" name="DisneyPlus"><button type="radio"></button> Disney+
    </label>
    <label id="max" type="radio" name="Max"><button type="radio"></button> Max
    </label>
    <label id="prime" type="radio" name="AmazonPrime"><button type="radio"></button> Amazon Prime
    </label>
    <label id="hulu" type="radio" name="Hulu"><button type="radio"></button> Hulu
    </label>
    <label id="apple" type="radio" name="AppleTV"><button type="radio"></button> AppleTV+
    </label>
    <label id="other" type="radio" name="Other"><button type="radio"></button> Other </label>

    <h3>Genre</h3>
    <label id="action" type="radio" name="Action"><button type="radio"></button> Action</label>
    <label id="adventure" type="radio" name="Adventure"><button type="radio"></button> Adventure</label>
    <label id="animation" type="radio" name="Animation"><button type="radio"></button> Animation</label>
    <label id="biography" type="radio" name="biography"><button type="radio"></button> Biography</label>
    <label id="comedy" type="radio" name="Comedy"><button type="radio"></button> Comedy</label>
    <label id="crime" type="radio" name="Crime"><button type="radio"></button> Crime</label>
    <label id="documentary" type="radio" name="Documentary"><button type="radio"></button> Documentary</label>
    <label id="drama" type="radio" name="Drama"><button type="radio"></button> Drama</label>
    <label id="fantasy" type="radio" name="Fantasy"><button type="radio"></button> Fantasy</label>
    <label id="history" type="radio" name="History"><button type="radio"></button> History</label>
    <label id="horror" type="radio" name="Horror"><button type="radio"></button> Horror</label>
    <label id="musical" type="radio" name="Musical"><button type="radio"></button> Musical</label>
    <label id="mystery" type="radio" name="Mystery"><button type="radio"></button> Mystery</label>
    <label id="romance" type="radio" name="Romance"><button type="radio"></button> Romance</label>
    <label id="sci-fi" type="radio" name="Sci-Fi"><button type="radio"></button> Sci-Fi</label>
    <label id="sports" type="radio" name="Sports"><button type="radio"></button> Sports</label>
    <label id="war" type="radio" name="War"><button type="radio"></button> War</label>
  </div>
    <footer>
      Future Message Here
    </footer>
    <div id="root"></div>
    </html>
`;



