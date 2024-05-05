
function App() {
  return (
    <>
      <div className="App">

        <i class="bi bi-list mobile-nav-toggle d-xl-none"/>

        <div id="header">
          <div className="d-flex flex-column">

            <div className="profile">
              <a href="https://www.instagram.com/mrdani09/" target="_blank"><img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/></a>
              <h1 className="text-light text-center"><a href="index.html">Muhammad Rachmadani</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://www.facebook.com/muhammad.rachmadani.5" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/mrdani09/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.youtube.com/@maradan99" target="_blank" className="youtube"><i className="bx bxl-youtube"></i></a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portofolio</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </div>

        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
            <h1>Muhammad Rachmadani</h1>
            <p>I'm <span className="typed" data-typed-items="Designer, Animator, Freelancer, Photographer"></span></p>
          </div>
        </section>

        <div id="main">
          <section id="about" className="about">
            <div className="container">

              <div className="section-title">
                <h2>About</h2>
                <p>Mahasiswa jurusan Desain Komunikasi Visual dari Institut Seni Indonesia Padang Panjang. Memiliki pengalaman magang di PT SanFai Property dan PT Telekomunikasi Indonesia. Memiliki ketertarikan dalam dunia desain grafis, animasi, dan teknologi. Mempunyai rasa ingin tahu yang tinggi dan pemerhati detail. Mampu mengoperasikan software Adobe (Audition, After Effect, Illustrator, Photoshop, Premiere). </p>
              </div>

              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>Graphic Designer &amp; Animator.</h3>
                  <p className="fst-italic">
                    Profil data diri saya.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 April 2002</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 895 3313 55425</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Depok, Indonesia</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mrachmadani10@gmail.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="Hobi"><p>
                    Saya memiliki beberapa hobi yang mengasyikkan, di antaranya adalah bermain game untuk mengisi waktu luang dan menonton film untuk mendapatkan inspirasi dan hiburan yang menyegarkan. Ketika urusan masuk ke dunia kuliner, saya memang memiliki selera yang beragam, karena saya sangat menikmati makanan dengan cita rasa asin yang menggugah selera, gurih yang memanjakan lidah, dan pedas yang membuat pengalaman makan menjadi lebih memikat. Selain itu, saya juga termasuk orang yang selalu ingin terkini dengan perkembangan teknologi, terutama dalam hal perangkat dan gadget. Mengikuti berita dan informasi terbaru tentang perkembangan ini adalah kebiasaan yang saya lakukan dengan antusias, karena saya percaya bahwa teknologi memainkan peran penting dalam membentuk cara kita berinteraksi dengan dunia.
                  </p></div>
                </div>
              </div>

            </div>
          </section>

          <section id="skills" className="skills section-bg">
            <div className="container">

              <div className="section-title">
                <h2>Skills</h2>
                <p>Informasi seberapa baik saya dalam pengoperasian software ataupun pekerjaan yang kuasai.</p>
              </div>

              <div className="row skills-content">

                <div className="col-lg-6" data-aos="fade-up">

                  <div className="progress">
                    <span className="skill">After Effect <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">Illustrator <i className="val">85%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">Photoshop <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                  <div className="progress">
                    <span className="skill">Premiere Pro<i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">Figma<i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">Copywritting<i className="val">65%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <section id="resume" className="resume">
            <div className="container">

              <div className="section-title">
                <h2>Resume</h2>
                <p>Mahasiswa jurusan Desain Komunikasi Visual dari Institut Seni Indonesia Padang Panjang. Memiliki pengalaman magang di PT SanFai Property dan PT Telekomunikasi Indonesia. Memiliki ketertarikan dalam dunia desain grafis, animasi, dan teknologi. Mempunyai rasa ingin tahu yang tinggi dan pemerhati detail. Mampu mengoperasikan software Adobe (Audition, After Effect, Illustrator, Photoshop, Premiere).</p>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Muhammad Rachmadani</h4>
                    <p><em>Desainer Grafis yang inovatif dan berorientasi pada hasil dan detail dengan pengalaman lebih dari 3 tahun dan menguasai animasi Motion Graphic</em></p>
                    <ul>
                      <li>Jl. H. Rijin, Depok, Jawa Barat</li>
                      <li>(+62) 895-3313-55425</li>
                      <li>mrachmadani10@gmail.com</li>
                    </ul>
                  </div>

                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Institut Seni Indonesia Padang Panjang</h4>
                    <h5>2020 - Sekarang</h5>
                    <p><em>Institut Seni Indonesia Padang Panjang, Padang Panjang, Sumatera Barat</em></p>
                    <p>Menjadi mahasiswa aktif di Institut Seni Indonesia Padang Panjang prodi Desain Komunikasi Visual</p>
                  </div>
                  <div className="resume-item">
                    <h4>SMK Taruna Bhakti Depok</h4>
                    <h5>2017 - 2020</h5>
                    <p><em>SMK Taruna Bhakti Depok, Depok, Jawa Barat</em></p>
                    <p>Menjadi pelajar di Sekolah Menengah Kejuruan Taruna Bhakti Depok sebagai murid teladan dengan jurusan Multimedia</p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="resume-title">Experience</h3>
                  <div className="resume-item">
                    <h4>Video Animation</h4>
                    <h5>2019 - Present</h5>
                    <p><em>PT Telekomunikasi Indonesia, Bandung, Jawa Barat </em></p>
                    <ul>
                      <li>Membuat animasi Motion Graphic untuk eksperimentasi pembelajaran kepada siswa SMK, Karyawan, dan Masyarakat. </li>
                      <li>Bekerja bersama tim dalam pembuatan video animasi dan video pembelajaran. </li>
                      <li>Mengawasi penilaian semua materi grafis untuk memastikan kualitas dan keakuratan desain. </li>
                      <li>Menjadi videographer untuk pembuatan video animasi dan pembelajaran. </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Graphic designer</h4>
                    <h5>2017 - 2018</h5>
                    <p><em>PT SanFai Property, Depok, Jawa Barat</em></p>
                    <ul>
                      <li>Mengembangkan berbagai program pemasaran (logo, brosur, infografis, presentasi, dan iklan).</li>
                      <li>Mengelola hingga 5 proyek atau tugas pada waktu tertentu saat berada di bawah tekanan.</li>
                      <li>Merekomendasikan dan berkonsultasi dengan klien mengenai desain grafis yang paling tepat.</li>
                      <li>Membuat 5+ konten desain dan video promosi dalam sebulan untuk perusahaan.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id="portfolio" className="portfolio section-bg">
            <div className="container">

              <div className="section-title">
                <h2>Portofolio</h2>
                <p>Beberapa karya yang telah saya hasilkan dengan dedikasi dan unggah dengan penuh semangat, menjadi bukti nyata dari perjalanan kreatif saya yang terus berkembang.</p>
              </div>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">Foto</li>
                  <li data-filter=".filter-card">Desain</li>
                  <li data-filter=".filter-web">Video & Animasi</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Foto Produk - Kopi"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Video Animasi 2D - Siswa SMK Peduli Bahaya Narkoba"><i className="bx bx-plus"></i></a>
                    <a href="https://www.youtube.com/watch?v=IdGDdReCsLI&t=12s&ab_channel=Ecrato" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Foto Produk - Snack"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Desain"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Video Animasi 2D - Siswa SMK Peduli Sampah"><i className="bx bx-plus"></i></a>
                    <a href="https://www.youtube.com/watch?v=CGsxuZQuwUs&t=2s&ab_channel=Ecrato" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Foto Landscape - Pemandangan"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Desain 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Desain 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Video Adzan Magrib"><i className="bx bx-plus"></i></a>
                    <a href="https://www.youtube.com/watch?v=J1CTgrSTFiA&t=39s&ab_channel=Ecrato" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>

            </div>

            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container">

              <div className="section-title">
                <h2>Contact</h2>
                <p>Hubungi saya disalah satu kontak dibawah</p>
              </div>

              <div className="row" data-aos="fade-in">

                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <a href="https://www.google.com/maps?ll=-6.366246,106.84299&z=18&t=m&hl=id&gl=ID&mapclient=embed&q=6%C2%B021%2758.8%22S+106%C2%B050%2735.3%22E+-6.366333,+106.843139@-6.3663333,106.8431389" target="_blank">
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>Jl. H. Rijin Kelapa Dua, Tugu, Cimanggis, Kota Depok</p></a>
                    </div>

                    <div className="email">
                      {/* <a href="" target="_blank" className="email"> */}
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>mrachmadani10@gmail.com</p>
                      {/* </a> */}
                    </div>

                    <div className="phone">
                      <i className="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+62 895 3313 55425</p>
                    </div>
                    <div>
                      <iframe 
                        id="Lokasi"
                        width="100%"
                        height="290" 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d633.5655190974946!2d106.8429898032407!3d-6.366245533216021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnNTguOCJTIDEwNsKwNTAnMzUuMyJF!5e0!3m2!1sid!2sid!4v1713875796442!5m2!1sid!2sid"/> 
                        
                    </div>
                    
                  </div>

                </div>

                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Nama</label>
                  <input type="text" name="name" class="form-control" id="name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Email</label>
                  <input type="email" class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subjek</label>
                <input type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div class="form-group">
                <label for="name">Pesan</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

              </div>

            </div>
          </section>
        </div>

        <div id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright 2024 <strong><span>Ecrato.</span></strong> All Rights Reserved
            </div>
            <div class="credits">
        Designed by <a href="https://www.youtube.com/@maradan99" target="_blank">Ecrato</a>
      </div>
          </div>
        </div>
        
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </div>
    </>
  );
}
export default App;
