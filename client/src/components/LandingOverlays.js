import './LandingOverlays.css';
import avatar_1 from '../images/avatar_1.png';
import avatar_2 from '../images/avatar_2.png';
import avatar_3 from '../images/avatar_3.png';
import avatar_4 from '../images/avatar_4.png';
import avatar_5 from '../images/avatar_5.png';
import avatar_6 from '../images/avatar_6.png';
import avatar_7 from '../images/avatar_7.png';
import avatar_8 from '../images/avatar_8.png';
import avatar_9 from '../images/avatar_9.png';
import avatar_10 from '../images/avatar_10.png';
import avatar_11 from '../images/avatar_11.png';
import avatar_12 from '../images/avatar_12.png';
import React, { useState } from "react";

function visuallyLogIn(method) {

  if (method === "logIn") {
    document.querySelector(".overlayWrapper#login").style.display = "none";

  } else if (method === "signUp") {
    document.querySelector(".overlayWrapper#signUp").style.display = "none";

  }
  document.querySelector(".notLoggedInButtons").style.display = "none";
  document.querySelector(".loggedInWrapper").style.display = "flex";
  document.querySelector(".notLoggedInWrapper").style.display = "none";
}

function LogInOverlay() {
    function closeOverlay() {
        document.querySelector(".overlayWrapper#login").style.display = "none";
    }
    const [logInForm, setForm] = useState({
      username: "",
      password: "",
    });
    
    // These methods will update the state properties.
    function updateForm(value) {
      return setForm((prev) => {
        return { ...prev, ...value };
      });
    }
    async function onLogInSubmit(e) {
      e.preventDefault();
      const user = {...logInForm};
      console.log('submitting', user);

      await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => {
        visuallyLogIn("logIn");
      })
      .catch(err => console.log(err))
    }
  return (
    <div className="overlayWrapper" id="login">
        <svg className="theX" onClick={closeOverlay}xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 0L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z" fill="#F8B195"/>
        </svg>
        <form onSubmit={onLogInSubmit}>
          <label className="textInput">
            Username:
            <input 
              type="text"
              name="username"
              placeholder="Username" 
              value={logInForm.username}
              onChange={(e) => updateForm({ username: e.target.value })}
            />
          </label>
          <label className="textInput">
            Password:
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={logInForm.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              />
          </label>
          <input className="primary" type="submit" value="Log in"/>
        </form>
    </div>
  );
}

function SignUpOverlay() {
  function closeOverlay() {
    document.querySelector(".overlayWrapper#signUp").style.display = "none";
  }
  function selectImage(number) {
    let avatar;
    let prevSelected;
    prevSelected = document.querySelector(".imgSelected");
    if (prevSelected) {
      prevSelected.classList.remove("imgSelected");
    }
    avatar = document.querySelector(`#avatar_wrapper_${number}`);
    avatar.classList.add("imgSelected");

  }
  function chooseAvatarComponent() {
    const avatars = [[avatar_1, "avatar_1", 1], [avatar_2, "avatar_2", 2], [avatar_3, "avatar_3", 3], [avatar_4, "avatar_4", 4], [avatar_5, "avatar_5", 5], [avatar_6, "avatar_6", 6], [avatar_7, "avatar_7", 7], [avatar_8, "avatar_8", 8], [avatar_9, "avatar_9", 9], [avatar_10, "avatar_10", 10], [avatar_11, "avatar_11", 11], [avatar_12, "avatar_12", 12]];
    
    let html = avatars.map((avatar) => {
      return (
        <label htmlFor={avatar[1]} id={`avatar_wrapper_${avatar[2]}`} onClick={() => selectImage(avatar[2])}>
          <img src={avatar[0]} alt="profile pic option" height={300} width={300}/>
          <input
            type="radio"
            id={avatar[1]}
            name="avatar"
            value={avatar[1]}
            style={{display: "none"}}
            onChange={(e) => updateForm({ avatar: e.target.value })}
            />
        </label>
      )

    });

    return html;
  }
  const [form, setForm] = useState({
    username: "",
    password: "",
    planetOfOrigin: "",
    avatar: "",
  });
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const user1 = {...form};
    console.log('submitting', user1);

    await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user1)
    })
    .then(res => {
      visuallyLogIn("signUp");
    })

    .catch(err => console.log(err));
  }

  return (
    <div className="overlayWrapper" id="signUp">
        <svg className="theX" onClick={closeOverlay}xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.59236 0L0 3.59236L1.8344 5.42675L6.36943 10.0382L1.8344 14.5732L0 16.3312L3.59236 20L5.42675 18.1656L10.0382 13.5541L14.5732 18.1656L16.3312 20L20 16.3312L18.1656 14.5732L13.5541 10.0382L18.1656 5.42675L20 3.59236L16.3312 0L14.5732 1.8344L10.0382 6.36943L5.42675 1.8344L3.59236 0Z" fill="#F8B195"/>
        </svg>
        <form onSubmit={onSubmit}>
          <label className="textInput">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={(e) => updateForm({ username: e.target.value })}
              />
          </label>
          <label className="textInput">
            Password:
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
              />
          </label>
          <label className="textInput">
            Planet of Origin:
            <input
              type="text"
              name="password"
              placeholder="Planet of Origin"
              value={form.planetOfOrigin}
              onChange={(e) => updateForm({ planetOfOrigin: e.target.value })}
              />
          </label>
          <label>
            <p>Choose Profile Picture</p>
          </label>
          <div id="imageOptions">
          {chooseAvatarComponent()}
          </div>
          <input className="primary" type="submit" value="Sign up" />
        </form>
    </div>
  );
}

export {LogInOverlay, SignUpOverlay};
