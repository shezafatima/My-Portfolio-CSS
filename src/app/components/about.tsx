
import Image from "next/image";
import Link from "next/link";
import "../../styles/about.css"; 

const About = () => {
  return (
    <div id="About">
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h1 className="about-title">About me</h1>
            <p className="about-description">
              I thrive. As a visionary creative technologist, I seamlessly merge
              imagination with technical expertise. With a versatile skill set
              encompassing sketching, art, design, web development, and graphic
              design, I craft captivating experiences that inspire and engage.
              Driven by the philosophy that &apos;Creativity is the intersection of
              art and science,&apos;I continuously push boundaries, exploring new
              ways to harmonize aesthetics and functionality. With a passion for
              fusing artistry with technological precision, I deliver innovative
              solutions that elevate brands, captivate audiences, and leave
              lasting impressions. Let&apos;s collaborate and bring visionary ideas
              to life.
            </p>
            <div className="about-button-container">
              <button className="about-button">
                <Link href="#Contact">Contact</Link>
              </button>
            </div>
          </div>
          <div className="about-image-container">
            <Image
              className="about-image"
              alt="hero"
              src="/assests/me5.png" // Adjust the image path as needed
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
