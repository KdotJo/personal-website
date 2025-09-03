import Footer from "../../components/footer/footer";
import "./about.css";

export default function About() {
  return (
    <>
        <main>
            <section className="about-hero">
            <div className="container about-hero__grid">
            <div className="about-hero__text">
                <h1 className="about-hero__title">Hi, I’m Kalo & I’m a Software Engineer</h1>

                <p>
                What's up! I'm Kalo and I'm a student at Brigham Young University.
                Currently I'm studying computer science and learning software engineering.
                This personal website is one of my first individual projects—plus a home
                for future work.
                </p>

                <p>
                I’m outgoing, love good vibes, and believe the people around you make life
                beautiful. I’ve been blessed with many wonderful people who inspire me to
                be better.
                </p>

                <p>
                Outside of code I enjoy snowboarding, traveling, and (always) good food.
                Favorites lately: hotpot and trips to Korea, Canada, and Japan.
                </p>
                <p>
                If you knew me, you’d know I dream big. I’m ambitious, confident, and not afraid
                to chase what I want—or fail along the way. One of my biggest dreams? Retire wealthy, 
                then become a high school history teacher! I know, kind of an odd goal for a software engineer, 
                but I guess that just makes me unique.    
                </p>
                <p>
                If you're reading this you're either my future employer or a friend of mine! Regardless, I'm glad to have
                had the opportunity to introduce myself to you! I hope you've enjoyed getting to know a litte about  me as well! 
                Welcome to my website and feel free to look around!
                </p>
                <p>
                    -Kalo Jo
                </p>

            </div>

            <div className="about-hero__photos">
                <figure className="photo-card" tabIndex={0} aria-labelledby="lbl-family">
                    <img className="photo" src="/Images/family.jpg" alt="My family" />
                    <figcaption id="lbl-family" className="photo-tag">My family</figcaption>
                </figure>
                <figure className="photo-card" tabIndex={0} aria-labelledby="lbl-hiking">
                    <img className="photo" src="/Images/hiking.jpg" alt="Hiking in Utah" />
                    <figcaption id="lbl-hiking" className="photo-tag">Hiking in Utah</figcaption>
                </figure>
                <figure className="photo-card" tabIndex={0} aria-labelledby="Canada">
                    <img className="photo" src="/Images/canada.jpeg" alt="Canada" />
                    <figcaption id="Canada" className="photo-tag">Canada Trip!</figcaption>
                </figure>
            </div>
            </div>
            </section>
        </main>
        <Footer />
    </>
  );
}
