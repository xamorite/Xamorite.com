import { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6p4kj0o', 'template_7ekt0pk', form.current, 'zEfq50iiqPVRep1vI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (

        <div className='py-[10vh] px-[10vw] w-[80vw] mx-auto'>
     
    <form action="Contact" className='mx-auto h-[80vh] md:h-auto leading-[7vh]' ref={form} onSubmit={sendEmail}> 
    <legend className='text-[7vh] font-semibold'>Contact Me</legend>
     Hi, my name is
     <input type="text" placeholder='xamorite' className='inputes ms-[1vw]' name='from_name' id="from_name" />,<br />you can answer
       me on this email 
        <input type="email" placeholder='xamorite@gmail.com' className='inputes ms-[1vw]'name='email_id' id="email_id" /><br />
         i am looking for help with a
       <input type="text" placeholder='mobile app development' className='inputes ms-[1vw]' name='software' id="software" /><br /> My budget is $
      <input type="number" placeholder='850000' className='inputes ms-[1vw]' name='price' id="price"  /><br />and i need it to be done by <input type="text" className='mb-[3vh] inputes ms-[1vw]' placeholder="12th of august" name='when' id="when"/><br />
      <button className='bg-black text-white px-3 md:py-1 rounded-full' type="submit" id="button" value="Send" >Send message</button>
      </form>

    
          
    </div>
  )
}

export default Contact
