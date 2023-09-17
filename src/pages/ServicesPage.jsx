import React from "react";

const ServicesPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://mediaandmore.co.uk/wp-content/uploads/2020/06/web-development-banner.jpg"
              alt="Desktop Development"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Desktop Development</h5>
              <p className="card-text">
                Our desktop development services include creating powerful and
                feature-rich software applications for Windows and macOS
                platforms. We use the latest technologies to build custom
                desktop solutions tailored to your specific business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg"
              alt="Mobile App Development"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Mobile App Development</h5>
              <p className="card-text">
                Our app development services focus on creating engaging and
                user-friendly mobile applications for iOS and Android. We
                leverage the latest mobile technologies to turn your app ideas
                into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2021/12/Programming-vs-Web-Development.jpg"
              alt="Web Development"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Our web development services encompass designing and building
                cutting-edge websites and web applications. We create responsive
                and interactive web solutions that enhance your online presence
                and user engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1081374,resizemode-75,msid-102779650/jobs/mid-career/how-to-make-a-career-in-digital-marketing.jpg"
              alt="Digital Marketing"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text">
                Our digital marketing services help businesses increase their
                online visibility and reach their target audience effectively.
                We offer strategies in SEO, social media, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2023/03/artificial-intelligence.jpg"
              alt="Machine Learning"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Machine Learning</h5>
              <p className="card-text">
                Our machine learning solutions leverage data and artificial
                intelligence to drive business insights and automate processes.
                We offer custom ML models tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg?w=2000"
              alt="Cloud Solutions"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Cloud Solutions</h5>
              <p className="card-text">
                Our cloud solutions provide scalable and secure cloud
                infrastructure for your applications and data. We offer
                migration, management, and optimization services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
