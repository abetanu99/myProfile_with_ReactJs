function Project({src,kiri,atas}){
  return (
    <>
      <div className="col-lg-4 webdesign wordpress" style={{position: "absolute", left: kiri, top: atas }}>
          <div className="work_img_box rounded">
              <a className="img-zoom" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
              <div className="work_images d-inline-block border">
                  <img src={src}alt="image" className="img-fluid mx-auto d-block"  style={{width: "100%",height: "100%"}} />
                  <div className="work_overlay">
                      <h4 className="mb-0">UI Elements, Icons</h4>
                      <h6 className="mb-0">Studio &amp; Art</h6>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

function Skill(){
  const skills = ['HTML','CSS','Bootstrap','JavaScript/Jquery','React.Js','PHP CodeIgniter',
                  'Github','Responsive Design','Node.Js','Express.Js','Mongoose','MySQL',
                  'Oracle DB','Power Builder'];
  for (let i = 0; i < skills.length; i++) {
    // console.log(i)
    return(
      <>
        <h3 className="pb-4">My Skill</h3>
        <div className="skills">
          {skills.map((skill,index) => (
            <div className="skills__skill" key={index}>{skill}</div>   
          ))}
        </div>
      </>
    )
  }
}



function Body() {
  return (
    <>
      <section className="section h-100vh jarallax" data-jarallax="{&quot;speed&quot;: 0.2}" id="home" style={{backgroundImage : 'none', zIndex:0, backgroundAttachment: 'scroll', backgroundSize:'auto'}} data-jarallax-original-styles="background-image: url('assets/images/home-bg.jpg');">
        <div className="bg-overlay"></div>
        <div className="container z-index">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="text-white text-center">
                        <h4>Hello &amp; Welcome</h4>
                        <h1 className="header_title mb-0 mt-3">I Am <span className="simple-text-rotate fw-bold" >A Web Developer.</span></h1>
                        <ul className="social_home list-unstyled text-center pt-4">
                            <li className="list-inline-item"><a href=""><i className="bi bi-facebook"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="bi bi-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="https://github.com/abetanu99"><i className="bi bi-github"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/abetanu_"><i className="bi bi-instagram"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="bi bi-twitter"></i></a></li>
                        </ul>
                        {/* background-image: 'none'; z-index: 0; background-attachment: scroll; background-size: auto; */}
                        <div className="header_btn">
                            <a href="" className="btn btn-outline-custom btn-rounded mt-4">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="scroll_down">
            <a href="#about" className="scroll">
                <i className="mbri-arrow-down text-white"></i>
            </a>
        </div>
        <div id="jarallax-container-0" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', visibility: 'visible', zIndex : -100}}>
          <div style={{backgroundColor: '#ffbb27', width: '100%', height: '100%'}} ></div>  
        </div>
      </section>
      
      <div className="jumbotron bg-light pb-5 py-5">
        <div className="container-fluid">
          <div className="text-center pb-5">
            <h2><span className="fw-bold">About Me</span></h2>
            <div className="main-title-border">
              <i className="bi bi-asterisk"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-5 px-5">
              <h3 className="pb-4">Get to know me!</h3>
              <p style= {{fontSize: "1.4rem",textAlign: "justify"}}>
                Sebagai seorang web developer dengan pengalaman lebih dari 3 tahun, 
                saya memiliki keterampilan dan pengalaman dalam menciptakan situs web dan aplikasi yang fungsional dan menarik.
              </p>

              <p style= {{fontSize: "1.4rem",textAlign: "justify"}}>
                Terampil dalam merancang serta mengimplementasikan API menggunakan RESTful dan GraphQL. 
                Untuk manajemen data, saya bekerja dengan berbagai jenis database, termasuk SQL seperti MySQL dan Oracle, 
                serta NoSQL seperti MongoDB dan PostgreSQL.
              </p>
              <p style= {{fontSize: "1.4rem",textAlign: "justify"}}>
                Fokus saya adalah pada penyampaian pengalaman pengguna yang optimal dan penerapan praktik terbaik dalam pengembangan perangkat lunak. 
                Dengan latar belakang yang solid dan pengalaman praktis selama 3 tahun, saya selalu mengikuti tren teknologi terbaru dan berusaha mengintegrasikan 
                inovasi terkini ke dalam proyek-proyek saya guna memenuhi kebutuhan klien dan pengguna akhir dengan cara yang kreatif dan efektif.
              </p>
            </div>
            <div className="col-5 px-5 ">
                <Skill />
            </div>
            <div className="col-sm "></div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-sm">
            <div className="container px-4 py-5">
              <h2 className="pb-2 border-bottom">Education</h2>
              <div className="row">
                <div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <div className="resume-item">
                    <h4>Bachelor of Computer &amp; Science</h4>
                    <h5>2018 - 2024</h5>
                    <p><em>Universitas Budi Luhur</em></p>
                    <p>
                      Menjadi ahli dalam pemrograman melibatkan pemahaman mendalam tentang berbagai bahasa pemrograman, algoritma, 
                      dan teknik pengembangan perangkat lunak. Kamu juga perlu menguasai prinsip-prinsip 
                      desain perangkat lunak, debugging, dan pengujian.
                    </p>
                  </div>

                  <div className="resume-item">
                    <h4>Vocational Computer Network &amp; Engineering</h4>
                    <h5>2014 - 2017</h5>
                    <p><em>SMK 3 Perguruan "Cikini"</em></p>
                    <p>
                      Pengalaman belajar sering melibatkan praktik langsung. Belajar tentang instalasi dan konfigurasi perangkat keras jaringan, 
                      pemrograman jaringan, serta manajemen sistem dan keamanan. Kelas biasanya mencakup simulasi jaringan, troubleshooting, 
                      dan proyek praktis seperti membangun jaringan lokal atau mengelola server. 
                      Ini memberikan keterampilan teknis yang langsung diterapkan di dunia industri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="container px-4 py-5">
              <h2 className="pb-2 border-bottom">Work Experience</h2>
              <div className="row">
                <div className="col aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <div className="resume-item">
                    <h4>Senior &amp; Programming</h4>
                    <h5>2020 - 2024</h5>
                    <p><em>PT.Intisoft Mitra Sejahtera</em></p>
                    <p></p>
                  </div>

                  <div className="resume-item">
                    <h4>IT Support</h4>
                    <h5>2017 - 2019</h5>
                    <p><em>PT.Fajar Utama Nuansa</em></p>
                    <p></p>
                  </div>

                  <div className="resume-item">
                    <h4>IT Support Internships</h4>
                    <h5>2016</h5>
                    <p><em>Universitas Indonesia</em></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{backgroundColor: "#333030"}}>
        <div className="container">
          <div className="row justify-content-center text-white">
              <div className="col-lg-12">
                  <div className="text-center mx-auto section-main-title">
                      <h2>Our <span className="fw-bold">Work</span></h2>
                      <div className="main-title-border">
                        <i className="bi bi-asterisk"></i>
                      </div>
                      <p className="mx-auto mt-2 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
              </div>
          </div>
          <div className="row mt-5">
              <div className="col-lg-12">
                  <ul className="text-center list-unstyled list-inline mb-0 text-capitlize work_menu" id="menu-filter">
                      <li className="list-inline-item"><a className="active" data-filter="*">All</a></li>
                      <li className="list-inline-item"><a className="" data-filter=".seo">Seo</a></li>
                      <li className="list-inline-item"><a className="" data-filter=".webdesign">Webdesign</a></li>
                      <li className="list-inline-item"><a className="" data-filter=".work">Work</a></li>
                      <li className="list-inline-item"><a className="" data-filter=".wordpress">Wordpress</a></li>
                  </ul>
              </div>
          </div>
          <div className="row mt-5 work-filter" style={{position: "relative", height: "503.968px"}}>
              <Project src="/assets/pict/project/TPPU/screencapture-1-teller-index-php-Teller-logout-2024-09-19-07_55_12.png" kiri="0px" atas="0px" />
              <Project src="/assets/pict/_testpp.jpg" kiri="465px" atas="0px" />
              <Project src="/assets/pict/_testpp.jpg" kiri="930px" atas="0px" />
              <Project src="/assets/pict/_testpp.jpg" kiri="0px" atas="251px" />
              <Project src="/assets/pict/_testpp.jpg" kiri="465px" atas="251px" />
              <Project src="/assets/pict/_testpp.jpg" kiri="930px" atas="251px" />
          </div>
        </div>
      </div>
    </>
  )
}


export default Body