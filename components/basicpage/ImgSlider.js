import Carousel from "react-bootstrap/Carousel";
import styles from './basicpage.module.css'
export default function ImgSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://alifeallin.com/wp-content/uploads/2018/10/to-do.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={`${styles.sliderHeading}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              cupiditate ut esse ea voluptate neque, conse.
            </h3>
            <p className={`${styles.sliderPara}`}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum maxime quis alias, quasi temporibus, quo a numquam aspernatur adipisci amet at quaerat vero, neque blanditiis repudiandae delectus facilis consectetur nulla! Architecto libero eaque ex voluptates provident neque. Possimus corporis repudiandae rem nam doloremque!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.LA_wOV-RofHoCCooLaXSkwHaGN?pid=ImgDet&rs=1"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3 className={`${styles.sliderHeading}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              cupiditate ut esse ea voluptate neque, conse.
            </h3>
            <p className={`${styles.sliderPara}`}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum maxime quis alias, quasi temporibus, quo a numquam aspernatur adipisci amet at quaerat vero, neque blanditiis repudiandae delectus facilis consectetur nulla! Architecto libero eaque ex voluptates provident neque. Possimus corporis repudiandae rem nam doloremque!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.7Om4FqDz789L9tL60ZeJnwHaD4?pid=ImgDet&rs=1"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3 className={`${styles.sliderHeading}`} >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              cupiditate ut esse ea voluptate neque, conse.
            </h3>
            <p className={`${styles.sliderPara}`}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum maxime quis alias, quasi temporibus, quo a numquam aspernatur adipisci amet at quaerat vero, neque blanditiis repudiandae delectus facilis consectetur nulla! Architecto libero eaque ex voluptates provident neque. Possimus corporis repudiandae rem nam doloremque!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
