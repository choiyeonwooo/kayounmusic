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
              Ka Youn Yoo <small>(2000-present)</small> is a composer from South Korea. She recently 
              graduated with a master's degree in Composition for Screen from the Royal College of Music, 
              after completing her studies at King’s College London and The Purcell School for Young 
              Musicians in the UK. Her works have been premiered at various venues worldwide, including 
              Cadogan Hall in London, the Korean Ministry of Unification, the National Gugak Center in 
              South Korea, Dobříš Castle in the Czech Republic, and Government House in Antigua and Barbuda.
            </p>
            <p>
              Ka Youn’s ambition is to express the sound of international music and arts through her 
              compositions. In October 2022, her piece Han, which conveys the sorrow of Korean women 
              during the Japanese colonial period, was performed as the winning composition in the 
              LaonG Gayageum (Korean traditional zither) composition competition. In 2019, she won 
              The Purcell School’s annual orchestral composition commission, where she created a 
              unique orchestral fusion piece titled Taepyeong (Peace). The work, inspired by the 
              Korean Taepyeong-song, blended traditional Korean music with elements of Western 
              classical traditions, resulting in a kaleidoscope of different musical cultures. 
              Taepyeong was performed by The Purcell School Symphony Orchestra during their annual 
              flagship concert at Cadogan Hall. 
            </p>
            <p>
              During her university studies, she explored various art forms, including visual art, 
              poetry, and film. She became captivated by the role of music in film, where it serves 
              as a powerful medium for conveying emotions to the audience. This interest led her to 
              participate in an online summer program at the Film Scoring Academy of Europe in July 
              2020. After that experience, she began her journey as a film composer and is currently 
              working on several short film projects with young directors across London. She has had 
              the opportunity to record some of her film scores at Angel Studios at Abbey Road, 
              Amaryllis Fleming Concert Hall, and Belle Shenkman Studio. Her work has been showcased 
              at prestigious venues including BFI Southbank, BFI IMAX, and BBC Broadcasting House in the UK. 
            </p>
            <p>
              Ka Youn is also an orchestrator and arranger, particularly for young musicians. Since 2019, 
              she has been commissioned to orchestrate music for the Antigua and Barbuda Youth Orchestra 
              after leading a Go-Compose workshop with Alison Cox in Antigua and Barbuda in July of that year. 
              As an arranger, she collaborated with the Korean Ministry of Unification for the North and South 
              Korea collaborative concert in November 2021. Additionally, she worked as an assistant arranger 
              for Rob Eckland for the BBC Piano Room in 2023.
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
