function openResume(){
  window.open('MasterResume.pdf', '_blank');

  return;
}

function leftArrow(){



}


function rightArrow(){


}


function french(){
  



}



function languagesMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#45a049';
  hardwareButton.style.backgroundColor='lightskyblue';
  softwareButton.style.backgroundColor='lightskyblue';

  

  document.querySelector('.skill1 h3').textContent = "HTML 5";
  document.querySelector('.skill1 img').src = "htmlicon.png";
  document.querySelector('.skill1 p').textContent="Independently learned through the free online course: The Odin Project, regular practice it through personal projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "CSS";
  document.querySelector('.skill2 img').src = "cssicon.png";
  document.querySelector('.skill2 p').textContent="Independently learned through the free online course: The Odin Project, regular practice it through personal projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent = "Assembly Language";
  document.querySelector('.skill3 img').src = "Assembly.png";
  document.querySelector('.skill3 p').textContent="Learned this language through a McGill course where we used assembly language to program single board computers.";
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent = "Java";
  document.querySelector('.skill4 img').src = "javaicon.png";
  document.querySelector('.skill4 p').textContent="Learned this lanaguage through a McGill course, regularly practice it in Android app development.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Python";
  document.querySelector('.skill5 img').src = "pythonicon.png";
  document.querySelector('.skill5 p').textContent="Learned this language through a McGill course. Regularly practice it through personal projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "C";
  document.querySelector('.skill6 img').src = "cicon.png";
  document.querySelector('.skill6 p').textContent="Learned this language through a McGill course. Regularly practice it in McGill robotics outside of class.";

  return;

}


function softwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='lightskyblue';
  hardwareButton.style.backgroundColor='lightskyblue';
  softwareButton.style.backgroundColor='#45a049';

  document.querySelector('.skill1 h3').textContent = "VSCode";
  document.querySelector('.skill1 img').src = "vscodeicon.png";
  document.querySelector('.skill1 p').textContent= "I use this for almost all of my software projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "Android Studio";
  document.querySelector('.skill2 img').src = "androidstudioicon.png";
  document.querySelector('.skill2 p').textContent="I took a McGill course in Android Mobile App Development where we used this. I still use it regular to create my Android Apps";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent = "Altium Designer";
  document.querySelector('.skill3 img').src = "altiumicon.png";
  document.querySelector('.skill3 p').textContent="I learned how to use this in the McGill Robotics club, where I used Altium to design the PCB we ordered for containing motor control and PID functionality";
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent = "IntelliJ";
  document.querySelector('.skill4 img').src = "jicon.png";
  document.querySelector('.skill4 p').textContent="Used in the course I learned about Java.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Spyder IDE";
  document.querySelector('.skill5 img').src = "quartusicon.png";
  document.querySelector('.skill5 p').textContent="I used this for a data-science project, and really understood its apeal over just simply using VSCode. ";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "Django";
  document.querySelector('.skill6 img').src = "springicon.svg";
  document.querySelector('.skill6 p').textContent="Independently learned through a UDEMY course, regular apply it in personal projects";

  return;

}


function hardwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='lightskyblue';
  hardwareButton.style.backgroundColor='#45a049';
  softwareButton.style.backgroundColor='lightskyblue';




  document.querySelector('.skill1 h3').textContent = "Arduino";
  document.querySelector('.skill1 img').src = "arduinoicon.png";
  document.querySelector('.skill1 p').src="";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "Soldering";
  document.querySelector('.skill2 img').src = "androidstudioicon.png";
  document.querySelector('.skill2 p').src="";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent ="STM32CubeIDE";
  document.querySelector('.skill3 img').src ="";
  document.querySelector('.skill3 p').textContent=""
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent= "";
  document.querySelector('.skill4 img').src= "";
  document.querySelector('.skill4 p').textContent="";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent ="";
  document.querySelector('.skill5 img').src="";
  document.querySelector('.skill5 p').textContent="";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent= "";
  document.querySelector('.skill6 img').src="";
  document.querySelector('.skill6 p').textContent="";

  return;

}

function sendEmail(){

  Email.send({
    SecureToken: "f701ebf2-5d2a-4c3b-9a26-0905b8ccd843",
    To : 'tom@haene.org',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Message",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert(message)
);



}











