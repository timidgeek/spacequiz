import './LandingOverlays.css';

function LogInOverlay() {
    function closeOverlay() {
        document.querySelector(".overlayWrapper").style.display = "none";
    }
  return (
    <div className="overlayWrapper">
        <svg className="theX" onClick={closeOverlay}xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 0L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z" fill="#F8B195"/>
        </svg>
        <form>
          <label className="textInput">
            Username:
            <input type="text" name="username" placeholder="Username" />
          </label>
          <label className="textInput">
            Password:
            <input type="text" name="password" placeholder="Password"/>
          </label>
          <input type="submit" value="Log in" />
        </form>
    </div>
  );
}

function SignUpOverlay() {
  function closeOverlay() {
    document.querySelector(".overlayWrapper#signUp").style.display = "none";
  }
  return (
    <div className="overlayWrapper" id="signUp">
        <svg className="theX" onClick={closeOverlay}xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 0L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z" fill="#F8B195"/>
        </svg>
        <form>
          <label className="textInput">
            Username:
            <input type="text" name="username" placeholder="Username" />
          </label>
          <label className="textInput">
            Password:
            <input type="text" name="password" placeholder="Password"/>
          </label>
          <label className="textInput">
            Planet of Origin:
            <input type="text" name="password" placeholder="Planet of Origin"/>
          </label>
          <label>
            <p>Choose Profile Picture</p>
            <input type="file" name="profilePic" accept="image/*" />
          </label>
          <div id="imageOptions">
            <input type="radio" id="pic1" name="profilePic" value="image1.jpg" />
            <label for="pic1"><img src="./images/person_avatar_1.png" alt="Image 1" /></label>

            <input type="radio" id="pic2" name="profilePic" value="image2.jpg" />
            <label for="pic2"><img src="./images/person_avatar_2.png" alt="Image 2" /></label>

          </div>
          <input type="submit" value="Sign up" />
        </form>
    </div>
  );
}
export {LogInOverlay, SignUpOverlay};
