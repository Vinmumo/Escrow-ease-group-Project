export default function ContactUs(){
   return(
    <>
        <div className="ContactUs">
            <div id="contact" >Contact Us</div>
  <div id="contactForm">
    <h1 className="keep">Keep in touch</h1>
    <form >
      <input placeholder="Name" type="text" required />
      <input placeholder="Email" type="email" required />
      <input placeholder="Subject" type="text" required />
      <input placeholder="Message" className="message"/>
      <button className="formBtn" type="submit">Submit</button>
    </form>
  </div>
        </div>
    </>
   )
}