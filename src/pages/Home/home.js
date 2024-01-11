import { SlideShow } from "../../compnent/slideshow/slideShow";
import "./style.css";
export const Home = () => {
  return (
    <div>
      <SlideShow />
      <section id="services give-margin">
        <div class="container">
          <h1 class="text-center give-margin">
            Welcome to a New Era of Prosperity: Embrace Agriculture, Empower
            Communities!
          </h1>

          <div class="row ">
            <div class="col-lg-4 mt-4">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="fas servicesIcon fa-clock"></i>
                  <h4 class="card-title mt-3">
                    🌾 Cultivate Your Future, Cultivate Your Land
                  </h4>
                  <p class="card-text mt-3">
                    In the heart of India, where tradition meets innovation,
                    lies the untapped potential of our vast agricultural
                    landscapes. It's time to rethink the narrative surrounding
                    farming and land ownership. Rather than selling your fields,
                    consider the boundless opportunities that lie in cultivating
                    your own land.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-4">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="fas servicesIcon fa-layer-group"></i>
                  <h4 class="card-title mt-3">
                    💡 Change Starts with Group Farming
                  </h4>
                  <p class="card-text mt-3">
                    Join hands with your neighbors, friends, and fellow
                    community members to embark on a journey towards sustainable
                    and profitable group farming. By pooling resources,
                    knowledge, and efforts, you can create a network of support
                    that transforms small-scale farms into thriving,
                    interconnected hubs of agricultural excellence.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mt-4">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="far servicesIcon fa-check-circle"></i>
                  <h4 class="card-title mt-3">
                    🤝 Empower Your Community, Empower Yourself
                  </h4>
                  <p class="card-text mt-3">
                    Group farming is not just about cultivating crops; it's
                    about cultivating a sense of community and empowerment.
                    Together, we can break free from the notion that working the
                    fields is a symbol of poverty. In reality, it is a source of
                    strength, resilience, and self-sufficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 mt-4">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="fas servicesIcon fa-search"></i>
                  <h4 class="card-title mt-3">
                    🚀 Unlock Financial Independence
                  </h4>
                  <p class="card-text mt-3">
                    Let's challenge the status quo and redefine the narrative
                    around agriculture. Sow the seeds of change by advocating
                    for policies that support group farming, accessing modern
                    farming techniques, and embracing sustainable practices.
                    Together, we can create a flourishing ecosystem that
                    benefits everyone involved.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mt-4">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="fas servicesIcon fa-shield-alt"></i>
                  <h4 class="card-title mt-3 ">🌱 Sow the Seeds of Change</h4>
                  <p class="card-text mt-3">
                    Let's challenge the status quo and redefine the narrative
                    around agriculture. Sow the seeds of change by advocating
                    for policies that support group farming, accessing modern
                    farming techniques, and embracing sustainable practices.
                    Together, we can create a flourishing ecosystem that
                    benefits everyone involved.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 mt-4 ">
              <div class="card servicesText">
                <div class="card-body box">
                  <i class="fas servicesIcon fa-wrench"></i>
                  <h4 class="card-title mt-3">
                    🏡 Preserve Your Heritage, Nurture Your Future
                  </h4>
                  <p class="card-text mt-3">
                    Your land is not just a piece of property; it's a legacy, a
                    connection to your roots. Instead of parting with this
                    heritage, let's transform it into a symbol of growth and
                    abundance. By preserving our agricultural traditions and
                    embracing innovation, we can create a future that bridges
                    the gap between tradition and progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="off-section">
        <h1>🌿 Join the Movement Today</h1>
        <p>
          Take the first step towards a brighter future. Join the movement to
          promote group farming, change the perception of agricultural work, and
          foster a community-driven approach to prosperity. Together, let's
          cultivate a future where the fields are not just sources of sustenance
          but symbols of pride and progress.
        </p>
      </section>
    </div>
  );
};
