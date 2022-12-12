/*types*/
import { formEvent } from '../lib/constants/event-types';

/*styles*/
import Styles from '../styles/modules/contact.module.css'
import { SvgEnvelope, SvgGithub, SvgLinkedin, SvgPhone } from './svgs';

const Contact = () => {
    const handleContact = (e: 
        formEvent ) => {
        e.preventDefault();
    }

  return (
   <section id="contact" className={`parallax-section ${Styles.contact}`}>
     <div className="d-flex w-100">
          <div className="row w-100">

               <div className="col-md-6 col-sm-12">
                    <div className={Styles.contactForm}>
                         <div>
                              <h1 className="color-white">Say hello..</h1>
                              <p className="color-white">Drop a message below to reach my inbox.</p>
                         </div>

                         <div id="contact-form">
                              <form action="#template-mo" onSubmit={(e: formEvent) => handleContact(e)}>
                                   <div>
                                        <input name="fullname" type="text" className="form-control" id="fullname" placeholder="Your Name"/>
                                   </div>
                                   <div>
                                        <input name="email" type="email" className="form-control" id="email" placeholder="Your Email"/>
                                   </div>
                                   <div>
                                        <textarea name="message" rows={5} className="form-control" id="message" placeholder="Write your message..." />
                                   </div>
                                   <div>
                                        <input name="submit" type="submit" className="form-control" id="submit" value="Send"/>
                                   </div>
                              </form>
                         </div>

                    </div>
               </div>

               <div className="bg-dark col-sm-6">
                    <div className={Styles.contactThumb}>
                         <div>
                              <h3 className="color-white">Base camp</h3>
                              <p>Warrenpoint, co.Down , northern Ireland</p>
                         </div>

                         <div>
                              <h3 className="color-white">Contact.</h3>
                              <p><SvgPhone width="1.3rem" height="1.3rem" />&nbsp;07850544269</p>
                              <p><SvgEnvelope width="1.3rem" height="1.3rem" />&nbsp;<a href="mailto:paulrooney60@gmail.com">paulrooney60@gmail.com</a></p>
                              <p><SvgGithub width="1.3rem" height="1.3rem" />&nbsp;<a href="https://github.com/realworldweb" rel="noreferrer" target="_blank">https://github.com/realworldweb</a></p>
                              <p><SvgLinkedin width="1.3rem" height="1.3rem" />&nbsp;<a href="https://www.linkedin.com/in/paul-rooney-6760b0b5/">https://www.linkedin.com/in/paul-rooney-6760b0b5/</a></p>
                         </div>

                    </div>
               </div>

          </div>
     </div>
</section> 
  )
}

export default Contact