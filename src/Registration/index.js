import React from 'react'
import './index.css'

function Registration(props) {
  const handleSubmit = (event) => {

    debugger;
    
    event.preventDefault();

    let url;
    let namePerson = event.target[0].value;
    let agePerson = event.target[4].value;
    let mailPerson = event.target[1].value;
    let hobbiesPerson = event.target[10].value;
    let facebookPerson = event.target[11].value;
    let linkedlnPerson = event.target[12].value;
    let twitterPerson = event.target[13].value;
    let instagramPerson = event.target[14].value;

    let min = 1;
    let max = 99;
    let rand =  min + (Math.random() * (max-min));

    if (event.target[5].checked) {
      url = "https://randomuser.me/api/portraits/men/"+Math.round(rand)+".jpg"
    }else if(event.target[6].checked){
      url = "https://randomuser.me/api/portraits/women/"+Math.round(rand)+".jpg"
    }else{
      url = "https://randomuser.me/api/portraits/dog/1.jpg"

    }

    let tempTeam =[]


    props.teamInfo.forEach(person => {
      tempTeam.push(person)
    });

    let newTeam = { 

        photo: url, 
        name: namePerson,
        age:agePerson,
        mail:mailPerson,
        hobbies:hobbiesPerson,
        facebookLink:facebookPerson,
        linkedlnLink:linkedlnPerson,
        twitterLink:twitterPerson,
        instagramLink:instagramPerson
  
       }

    

    props.teamInfo.push(newTeam)
    console.log(props.teamInfo)
}
  //pendiente
  if (props.showForm === false) {
    return null
  }else{
    return (

  
      <div className='formularioRegistro'>
        <form onSubmit={handleSubmit}>
          <input id='nameInput' type="text" placeholder='Nombre completo' required></input>
          <input id= 'emailInput'type="email" placeholder='Correo electronico' required></input>
          <input id= 'idInput' type="number" placeholder='Numero de identificación' min="10000000" required></input>
          <input id= 'phoneInput' type="tel" placeholder='Telefono' required></input>
  
          <div className='bloques'>
          <div className='bloques__bloqueFechaNacimiento'>
          <h3>Edad</h3>
  
            <input type="number" placeholder='Edad' min="16" required></input>
          </div>
  
          <div className='bloques__bloqueGenero'>
          <h3>Genero</h3>
          <div className='selectGender'>
  
            
            <input id="man" type="radio"  name="gender" value="man" required/>
            <label for="man">Hombre</label>
            <input id="woman" type="radio"  name="gender" value="woman" required/>
            <label for="woman">Mujer</label> 
            <input id="other" type="radio"  name="gender" value="other" required/>
            <label  for="other">Otro</label>
          </div>
  
            </div>
          </div>
  
          <input id='cityInput' type="text" placeholder='Ciudad'></input>
          <input id='addressInput' type="text" placeholder='Direccion'></input>
          <input id='hobbiesInput' type="text" placeholder='Pasatiempos'></input>
          <input id='facebookInput' type="text" placeholder='Perfil de Facebook'></input>
          <input id='linkedlnInput' type="text" placeholder='Linkedin'></input>
          <input id='twitterInput' type="text" placeholder='Perfil de Twitter'></input>
          <input id='instagramInput' type="text" placeholder='Perfil de Instagram'></input>

            <h3>Terminos y condiciones</h3>
            <input id='termYCon' type="checkbox" ></input>
            <label for='termYCon'>Acepto recibir correos de los planes y ofertas de FreeDog a mi correo electronico</label>
  

            <button type="submit" className="--elementButton registration__button"><span>Enviar</span><img className='registration__button--image' src='https://img.icons8.com/glyph-neue/50/ffffff/checkmark.png'></img></button>

        </form>
      </div>

    )
  }
  

}

export {Registration}