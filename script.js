function openResume(){
  window.open('MasterResume.pdf', '_blank');

  return;
}






function french(){
  

  
}



function languagesMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#e44e58';
  hardwareButton.style.backgroundColor='#4EE4DA';
  softwareButton.style.backgroundColor='#4EE4DA';

  

  document.querySelector('.skill1 h3').textContent = "HTML 5";
  document.querySelector('.skill1 img').src = "htmlicon.png";
  document.querySelector('.skill1 p').textContent="Well versed in HTML syntax, as well as the use of semantic elements in order to increase SEO and readabillity.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "CSS";
  document.querySelector('.skill2 img').src = "cssicon.png";
  document.querySelector('.skill2 p').textContent="Sufficiently versed in the expansive tool that is CSS. Understand well that CSS is an art form and the role that efficient CSS plays in projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent = "Assembly Language";
  document.querySelector('.skill3 img').src = "Assembly.png";
  document.querySelector('.skill3 p').textContent="";
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent = "Java";
  document.querySelector('.skill4 img').src = "javaicon.png";
  document.querySelector('.skill4 img').style.width = "50px";
  document.querySelector('.skill4 p').textContent="Skilled in the paradigm and mindset that's built into Java (OOP), have explored this through android mobile app development.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Python";
  document.querySelector('.skill5 img').src = "pythonicon.png";
  document.querySelector('.skill5 p').textContent="Adept at treating python programs as data processors with the use of APIs, to manipulate data. Appreciate it's role as an automation tool ";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "C";
  document.querySelector('.skill6 img').src = "cicon.png";
  document.querySelector('.skill6 p').textContent="Skilled at C, in particular in using it to write the instructions for how Microcontrollers process data. Used regularly in the Robotics team";

  return;

}


function softwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#4EE4DA';
  hardwareButton.style.backgroundColor='#4EE4DA';
  softwareButton.style.backgroundColor='#e44e58';

  document.querySelector('.skill1 h3').textContent = "VSCode";
  document.querySelector('.skill1 img').src = "vscodeicon.png";
  document.querySelector('.skill1 p').textContent= "I use this for almost all of my software projects. I particularly appreciate the github integration and the various shortcuts which both make my life easier.";
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
  document.querySelector('.skill4 img').style.width = "50px";
  document.querySelector('.skill4 p').textContent="My preffered IDE for programming in Java, mainly because of how modern and clean the interface looks.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Spyder IDE";
  document.querySelector('.skill5 img').src = "spyder.png";
  document.querySelector('.skill5 p').textContent="This IDE is very useful for data science, particulaly because it allows you to preview all your variables in a neat and organizied way without having to print them all to the console.";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "Django";
  document.querySelector('.skill6 img').src = "django.jpg";
  document.querySelector('.skill6 p').textContent="Independently learned through a UDEMY course, regular apply it in personal projects";

  return;

}


function hardwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#4EE4DA';
  hardwareButton.style.backgroundColor='#e44e58';
  softwareButton.style.backgroundColor='#4EE4DA';




  document.querySelector('.skill1 h3').textContent = "Arduino";
  document.querySelector('.skill1 img').src = "arduinoicon.png";
  document.querySelector('.skill1 p').src="";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "Soldering";
  document.querySelector('.skill2 img').src = "soldering.png";
  document.querySelector('.skill2 p').src="";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent ="STM32CubeIDE";
  document.querySelector('.skill3 img').src ="stm.png";
  document.querySelector('.skill3 p').textContent="Used in the robotics team, to program the firmware for the STM32 microcontrollers"
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent= "FPGA's";
  document.querySelector('.skill4 img').src="fpga.png";
  document.querySelector('.skill4 img').style.width = "73px";
  document.querySelector('.skill4 p').textContent="Learnt during a digital logic class in my degree. Used to make a binary adder";
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













