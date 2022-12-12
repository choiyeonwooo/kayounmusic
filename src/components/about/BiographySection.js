import { Image } from "react-bootstrap";
import profileImage from "../../assets/images/profile_photos/about.jpg";

function BiographySection() {
  return (
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="biography col-md-6">
            <h2 className="pb-3">Biography</h2>
            <p>
              Ka Youn Yoo <small>(2000-present)</small> is a composer from South Korea, currently
              studying for a masters degree in Composition for Screen at Royal College of Music,
              having graduated from King’s College London and The Purcell School for Young Musicians
              in the UK. Her works have been premiered in various venues across the world, including
              Cadogan Hall in London, Korean Ministry of Unification and National Gugak Center in
              South Korea, Dobříš Castle in Czech Republic, and the Government House in Antigua and
              Barbuda.
            </p>
            <p>
              Ka Youn’s ambition is to express the sound of international music and arts through her
              compositions. In October 2022, her composition ‘Han’ which she wrote about the sorrow
              of Korean women in Japanese colonial period, has been performed as the winning piece
              of the LaonG Gayageum (Korean traditional zither) composition competition. In 2019,
              she won the Purcell School’s annual orchestral composition commission for which she
              wrote a unique orchestral fusion ‘Taepyeong’(Peace), which was performed by the
              Purcell School Symphony Orchestra in their annual flagship concert at the Cadogan
              Hall. The work was inspired by Korean Taepyeong-song, incorporating traditional Korean
              music, as well as elements of the Western Classical traditions, in order to create a
              kaleidoscope of different musical cultures.
            </p>
            <p>
              During her studies at university, she had opportunities to learn about various art
              forms including art works, poems, and films. She was fascinated by the role of music
              in film where music acts as a strong medium to deliver emotions to the audience. This
              experience led her to participate in an online summer program in Film Scoring Academy
              of Europe in July 2020. After that experience, she began her journey as a film
              composer and is now working on several short film projects with young film directors
              across London.
            </p>
            <p>
              Ka Youn is also an orchestrator and arranger especially for young musicians. She has
              been commissioned to orchestrate music for Antigua and Barbuda Youth Orchestra since
              2019 after leading Go-Compose workshop with Alison Cox in Antigua and Barbuda in July
              2019. As an arranger, she worked with Korean Ministry of Unification for the North and
              South collaborative concert in November 2021.
            </p>
            <a
              href="/resume/Ka_Youn_Yoo_Resume.pdf"
              target="_blank"
              className="btn btn-small mt-20 mb-5"
            >
              Download Résumé
            </a>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              <Image src={profileImage} fluid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographySection;
