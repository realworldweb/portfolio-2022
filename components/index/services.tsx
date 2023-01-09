import Styles from '../../styles/modules/services.module.css' 
import { SvgFirebase, SvgHTML5, SvgNodejs, SvgReact } from '../assets/svgs'

function Services() {
  return (
    <section id="service" className={`parallax-section ${Styles.service}`}>
     <div className="d-flex w-100">
          <div className="row">
               <div className="col-lg-3 col-md-6">
                    <div className={`color-white d-flex flex-column align-items-center  ${Styles.serviceThumb}`}>
                         <SvgHTML5 width="5rem" height="5rem" />
                              <h4>HTML & CSS</h4>
                              <p className="color-white d-block position-relative text-center">Proficent with semantic HTML5 and CSS3 along with pre-processors such as sass and postcss, experinced with css frameworks like bootstrap</p>
                    </div>
               </div>

               <div className="bg-white col-lg-3 col-md-6">
                    <div className={`color-dark d-flex flex-column align-items-center ${Styles.serviceThumb}`}>
                         <SvgReact width="5rem" height="5rem" />
                              <h4>Javascript & React </h4>
                              <p className="color-dark d-block position-relative text-center">knowledge of modern es6 Javascript, Typescript and best practices. Familar with frameworks such as react and tools such as next.js</p>
                    </div>
               </div>

               <div className="bg-dark col-lg-3 col-md-6">
                    <div className={`color-white d-flex flex-column align-items-center ${Styles.serviceThumb}`}>
                         <SvgFirebase width="5rem" height="5rem" />
                              <h4>Firebase & MongoDB</h4>
                              <p className="color-white d-block position-relative text-center">I have previously work with both Firebase and MongoDB to manage and preform CRUD operations from my frontend projects.</p>
                    </div>
               </div>

               <div className="bg-yellow col-lg-3 col-md-6">
                    <div className={`d-flex flex-column align-items-center ${Styles.serviceThumb}`} >
                         <SvgNodejs width="5rem" height="5rem" />
                              <h4>NodeJS & Webpack</h4>
                              <p className="d-block position-relative text-center">well versed in using project tools such as node.js , npm and webpack to create and build modular es6 Javascript. As well as versioning tools like git   </p>
                    </div>
               </div>

          </div>
     </div>
</section>
  )
}

export default Services