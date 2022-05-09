import React from "react";
import { Header } from "../Header";
import { AboutUs } from "../AboutUs";
import { MainSection } from "../MainSection";
import { TeamInfo } from "../TeamInfo";
import { PlanInfo } from "../PlanInfo";
import { Testimonials } from "../Testimonials";
import { Footer } from "../Footer";
import { Registration } from "../Registration";
import { RegistrationUser } from "../RegistrationUser";
import '../responsive.css'


const teamInfo = [{ 
  photo: "https://randomuser.me/api/portraits/women/21.jpg", 
  name: "Catalina Diaz",
  age:"24",
  mail:"catalinadiaz@gmail.com",
  hobbies:"Bailar, cantar",
  facebookLink:"www.facebook.com",
  linkedlnLink:"www.linkedln.com",
  twitterLink:"www.twitter.com",
  instagramLink:"#"
 },
 {
  photo: "https://randomuser.me/api/portraits/women/23.jpg", 
  name: "Cristina Thompson",
  age:"26",
  mail:"cristhomp@gmail.com",
  hobbies:"Correr, Bailar",
  facebookLink:"#",
  linkedlnLink:"www.linkeln.com",
  twitterLink:"",
  instagramLink:"#"
 },
 {
  photo: "https://randomuser.me/api/portraits/women/25.jpg", 
  name: "Martha Cardozo",
  age:"29",
  mail:"martCardozo@gmail.com",
  hobbies:"Estudio, deporte",
  facebookLink:"#",
  linkedlnLink:"www.linkeln.com",
  twitterLink:"",
  instagramLink:"#"
 },


];


const  testimonialsInfo= [
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. At in tellus integer feugiat scelerisque varius morbi enim.", name: "Julian Suarez", source: "https://img.icons8.com/ios/40/26e07f/facebook-new.png"},
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. At in tellus integer feugiat scelerisque varius morbi enim.", name: "Laura Gomez", source: "https://img.icons8.com/ios/40/26e07f/instagram-new--v1.png"},
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. At in tellus integer feugiat scelerisque varius morbi enim.", name: "Pablo Rivera", source: "https://img.icons8.com/ios/40/26e07f/facebook-new.png"},
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. At in tellus integer feugiat scelerisque varius morbi enim.", name: "Diego Sierra", source: "https://img.icons8.com/ios/40/26e07f/twitter--v1.png"},
  {quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. At in tellus integer feugiat scelerisque varius morbi enim.", name: "Daniela Lopez", source: "https://img.icons8.com/ios/40/26e07f/twitter--v1.png"},

]
function App() {

  const [team, setTeam] = React.useState(teamInfo);
  const [testimonials, setTestimonials] = React.useState(testimonialsInfo);

  const [sizeTeam, setSizeTeam] = React.useState(1);
  const [amountTestimonials, setAmountTestimonials] = React.useState(1);

  const [showForm, setShowForm] = React.useState(false);
  const [showFormUser, setShowFormUser ] = React.useState(false);


  let teamArrayCopy = team.slice(sizeTeam-1,sizeTeam)
  let testimonialsArrayCopy = testimonials.slice(amountTestimonials-1,amountTestimonials)

  
  const onClickBackButton = () => {
    if (sizeTeam>1) {
      setSizeTeam(sizeTeam-1)
    } else {
      setSizeTeam(team.length)

    }

  };

  const onClickNextButton = () => {

    if (sizeTeam===team.length) {
      setSizeTeam(1)
    } else {
      setSizeTeam(sizeTeam+1)

    }

  };

  const onClickShowForm = () => {
    if (showForm === false) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  };


      setTimeout(() => {
      if (amountTestimonials===testimonials.length) {
        setAmountTestimonials(1)
      } else {
        setAmountTestimonials(amountTestimonials+1)
  
      }
    }, 6000);

  return (
    <div className="mainContainer">
      <Header></Header>

      <MainSection></MainSection>

      <AboutUs></AboutUs>

      <h2 className="titleInfoTeam">Equipo de trabajo</h2>
      <div id="teamDiv" className="teamSection">
        <button className="buttonSlider1" onClick={onClickBackButton}></button>

        {teamArrayCopy.map((team) => (
          <TeamInfo
            key={team.name}
            photo={team.photo}
            name={team.name}
            age={team.age}
            mail={team.mail}
            hobbies={team.hobbies}
            facebook={team.facebookLink}
            linkedln={team.linkedlnLink}
            twitter={team.twitterLink}
            instagram={team.instagramLink}
            sizeTeam={sizeTeam}
            setSizeTeam={setSizeTeam}
          />
        ))}
        <button className="buttonSlider2" onClick={onClickNextButton}>  </button>

      </div>


      <div className="registration">
      <h2>¿Quieres formar parte de nuestro equipo?</h2>
      <button className='--elementButton' onClick={onClickShowForm}>Unirse</button>


      <Registration
      showForm = {showForm}
      teamInfo={teamInfo}
      setTeam={setTeam}
      />
      </div>



      <PlanInfo
      setShowFormUser={setShowFormUser}      
      showFormUser={showFormUser}      

      />

      <RegistrationUser
        showFormUser={showFormUser}      
      />

      {
        testimonialsArrayCopy.map((testimonial) => (
          <Testimonials
          key={testimonial.name}
          quote={testimonial.quote}
          name={testimonial.name}
          source={testimonial.source}
          />
        ))
      }

      <Footer></Footer>
    </div>
  );
}

export default App;
