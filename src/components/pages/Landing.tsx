import Slider from "../ui/Slider"


function Landing() {
  return (
    <div>
    {/* <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle" />
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/logo.png" />
          </div>
        </div>
      </div>
    </div> */}
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-sm-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li className="title"><span className="flaticon-energy" /> trending-title</li>
                      <li>Class property employ ancho red multi level mansion</li>
                    </ul>
                  </div>
                  <div className="header-info-right">
                    <ul className="header-date">
                      <li><span className="flaticon-calendar" /> +880166 253 232</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="header-mid gray-bg">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
                  <div className="logo">
                    <a href="index.html"><img src="./src/assets/img/logo/logo.png" /></a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <img src="./src/assets/img/gallery/header_card.png" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                  <div className="sticky-logo">
                    <a href="index.html"><img src="./src/assets/img/logo/logo.png" /></a>
                  </div>
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">about</a></li>
                        <li><a href="categori.html">Category</a></li>
                        <li><a href="latest_news.html">Latest News</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog_details.html">Blog Details</a></li>
                            <li><a href="elements.html">Element</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="header-right f-right d-none d-lg-block">
                    <ul className="header-social">
                      <li><a href="https://www.fb.com/sai4ull"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li> <a href="#"><i className="fab fa-youtube" /></a></li>
                    </ul>
                    <div className="nav-search search-switch">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="trending-area fix pt-25 gray-bg">
        <div className="container">
          <div className="trending-main">
            <div className="row">
            <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="./src/assets/img/trending/trending_top3.jpg" />
                        <div className="trend-top-cap trend-top-cap2">
                         
                          <h2><a href="latest_news.html">DR. Selere Mgerene</a></h2>
                            <span className="bgb">CEO</span>
                        </div>
                      </div>
                      <p className="text-justify mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dicta pariatur neque magnam assumenda quod, iusto necessitatibus libero consequuntur maiores voluptatum cumque dolores ipsum ut aperiam ullam adipisci porro alias. </p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="trending-top mb-30">
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit in reiciendis eos, unde non doloribus, iste numquam impedit explicabo eveniet dolorum deleniti nostrum? Aut natus inventore ipsum at totam.</p>
                      {/* <div className="trend-top-img">
                        <img src="./src/assets/img/trending/trending_top4.jpg" />
                        <div className="trend-top-cap trend-top-cap2">
                          <span className="bgg">Tench </span>
                          <h2><a href="latest_news.html">Secretart for Economic Air plane that looks like</a></h2>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
               
              
                <Slider/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <section className="whats-news-area pt-50 pb-20 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="whats-news-wrapper">
               
                <div className="row justify-content-between align-items-end mb-15">
                  <div className="col-xl-4">
                    <div className="section-tittle mb-30">
                      <h3>Whats New</h3>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-9">
                    <div className="properties__button">
                      <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                          <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lifestyle</a>
                          <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Travel</a>
                          <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                          <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
                          <a className="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12">
                            <div className="whats-news-single mb-40 mb-40">
                              <div className="whates-img">
                                <img src="./src/assets/img/gallery/whats_news_details1.png" />
                              </div>
                              <div className="whates-caption">
                                <h4><a href="latest_news.html">Secretart for Economic Air plane that looks like</a></h4>
                                <span>by Alice cloe   -   Jun 19, 2020</span>
                                <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-12">
                            <div className="row">
                          
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img1.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img2.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img3.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorg">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img4.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorr">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
              
                      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row">
                         
                          <div className="col-xl-6">
                            <div className="whats-news-single mb-40">
                              <div className="whates-img">
                                <img src="./src/assets/img/gallery/whats_right_img2.png" />
                              </div>
                              <div className="whates-caption">
                                <h4><a href="#">Secretart for Economic Air
                                  plane that looks like</a></h4>
                                <span>by Alice cloe   -   Jun 19, 2020</span>
                                <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                              </div>
                            </div>
                          </div>
                       
                          <div className="col-xl-6 col-lg-12">
                            <div className="row">
                             
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img1.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img2.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img3.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorg">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img4.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorr">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row">
                         
                          <div className="col-xl-6">
                            <div className="whats-news-single mb-40">
                              <div className="whates-img">
                                <img src="./src/assets/img/gallery/whats_right_img4.png" />
                              </div>
                              <div className="whates-caption">
                                <h4><a href="#">Secretart for Economic Air
                                  plane that looks like</a></h4>
                                <span>by Alice cloe   -   Jun 19, 2020</span>
                                <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                              </div>
                            </div>
                          </div>
                         
                          <div className="col-xl-6 col-lg-12">
                            <div className="row">
                             
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img1.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img2.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img3.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorg">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img4.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorr">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                        <div className="row">
                      
                          <div className="col-xl-6">
                            <div className="whats-news-single mb-40">
                              <div className="whates-img">
                                <img src="./src/assets/img/gallery/whats_right_img2.png" />
                              </div>
                              <div className="whates-caption">
                                <h4><a href="#">Secretart for Economic Air
                                  plane that looks like</a></h4>
                                <span>by Alice cloe   -   Jun 19, 2020</span>
                                <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                              </div>
                            </div>
                          </div>
                        
                          <div className="col-xl-6 col-lg-12">
                            <div className="row">
                             
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img1.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img2.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img3.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorg">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img4.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorr">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                        <div className="row">
                          
                          <div className="col-xl-6">
                            <div className="whats-news-single mb-40">
                              <div className="whates-img">
                                <img src="./src/assets/img/gallery/whats_news_details1.png" />
                              </div>
                              <div className="whates-caption">
                                <h4><a href="#">Secretart for Economic Air
                                  plane that looks like</a></h4>
                                <span>by Alice cloe   -   Jun 19, 2020</span>
                                <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                              </div>
                            </div>
                          </div>
                         
                          <div className="col-xl-6 col-lg-12">
                            <div className="row">
                              
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img1.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img2.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorb">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img3.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorg">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                <div className="whats-right-single mb-20">
                                  <div className="whats-right-img">
                                    <img src="./src/assets/img/gallery/whats_right_img4.png" />
                                  </div>
                                  <div className="whats-right-cap">
                                    <span className="colorr">FASHION</span>
                                    <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                    <p>Jun 19, 2020</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
         
              {/* <div className="banner-one mt-20 mb-30">
                <img src="./src/assets/img/gallery/body_card1.png" />
              </div> */}
            </div>
            <div className="col-lg-4">
             
              
              <div className="most-recent-area">
              
                <div className="small-tittle mb-20">
                  <h4>Most Recent</h4>
                </div>
            
                <div className="most-recent mb-40">
                  <div className="most-recent-img">
                    <img src="./src/assets/img/gallery/most_recent.png" />
                    <div className="most-recent-cap">
                      <span className="bgbeg">Vogue</span>
                      <h4><a href="latest_news.html">What to Wear: 9+ Cute Work <br />
                        Outfits to Wear This.</a></h4>
                      <p>Jhon  |  2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="most-recent-single">
                  <div className="most-recent-images">
                    <img src="./src/assets/img/gallery/most_recent1.png" />
                  </div>
                  <div className="most-recent-capt">
                    <h4><a href="latest_news.html">Scarlett’s disappointment at latest accolade</a></h4>
                    <p>Jhon  |  2 hours ago</p>
                  </div>
                </div>
         
                <div className="most-recent-single">
                  <div className="most-recent-images">
                    <img src="./src/assets/img/gallery/most_recent2.png" />
                  </div>
                  <div className="most-recent-capt">
                    <h4><a href="latest_news.html">Most Beautiful Things to Do in Sidney with Your BF</a></h4>
                    <p>Jhon  |  3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <div className="weekly2-news-area pt-50 pb-30 gray-bg"style={{marginTop:-2}}>
        <div className="container">
          <div className="weekly2-wrapper">
            <div className="row">
           
              
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="small-tittle mb-30">
                        <h4>Most Popular</h4>
                      </div>
                    </div>
                  </div>
                
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="weekly2-news-active d-flex">
                       
                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="./src/assets/img/gallery/weeklyNews1.png" />
                          </div>
                          <div className="weekly2-caption">
                            <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                            <p>Jhon  |  2 hours ago</p>
                          </div>
                        </div>
                   
                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="./src/assets/img/gallery/weeklyNews2.png" />
                          </div>
                          <div className="weekly2-caption">
                            <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                            <p>Jhon  |  2 hours ago</p>
                          </div>
                        </div>
                       
                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="./src/assets/img/gallery/weeklyNews3.png" />
                          </div>
                          <div className="weekly2-caption">
                            <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                            <p>Jhon  |  2 hours ago</p>
                          </div>
                        </div>
                       
                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="./src/assets/img/gallery/weeklyNews2.png" />
                          </div>
                          <div className="weekly2-caption">
                            <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                            <p>Jhon  |  2 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="recent-articles pt-80 pb-80">
        <div className="container">
          <div className="recent-wrapper">
     
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Trending  News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="recent-active dot-style d-flex dot-style">
                  
                  <div className="single-recent">
                    <div className="what-img">
                      <img src="./src/assets/img/gallery/tranding1.png" />
                    </div>
                    <div className="what-cap">
                      <h4><a href="#"> </a><h4><a href="#" /><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4></h4>
                      <p>Jun 19, 2020</p>
                      <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span className="flaticon-play-button" /></a>
                    </div>
                  </div>
                 
                  <div className="single-recent">
                    <div className="what-img">
                      <img src="./src/assets/img/gallery/tranding2.png" />
                    </div>
                    <div className="what-cap">
                      <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                      <p>Jun 19, 2020</p>
                      <a className="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span className="flaticon-play-button" /></a>
                    </div>
                  </div>
                
                  <div className="single-recent">
                    <div className="what-img">
                      <img src="./src/assets/img/gallery/tranding1.png" />
                    </div>
                    <div className="what-cap">
                      <h4><a href="latest_news.html"> </a><h4><a href="latest_news.html" /><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4></h4>
                      <p>Jun 19, 2020</p>
                      <a className="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span className="flaticon-play-button" /></a>
                    </div>
                  </div>
                  
                  <div className="single-recent">
                    <div className="what-img">
                      <img src="./src/assets/img/gallery/tranding2.png" />
                    </div>
                    <div className="what-cap">
                      <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                      <p>Jun 19, 2020</p>
                      <a className="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span className="flaticon-play-button" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="youtube-area video-padding d-none d-sm-block">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="video-items-active">
                    <div className="video-items text-center">
                    <video controls>
                        <source src="./src/assets/video/news2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="video-items text-center">
                    <video controls>
                        <source src="./src/assets/video/news1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="video-items text-center">
                    <video controls>
                        <source src="./src/assets/video/news3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="./src/video-items text-center">
                    <video controls>
                        <source src="./src/assets/video/news1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="video-items text-center">
                    <video controls>
                        <source src="assets/video/news3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
                </div>
            </div>
            <div className="video-info">
                <div className="row">
                <div className="col-12">
                    <div className="testmonial-nav text-center">
                    <div className="single-video">
                        <video controls>
                        <source src="./src/assets/video/news2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className="video-intro">
                        <h4>Old Spondon News - 2020 </h4>
                        </div>
                    </div>
                    <div className="single-video">
                        <video controls>
                        <source src="./src/assets/video/news1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className="video-intro">
                        <h4>Banglades News Video </h4>
                        </div>
                    </div>
                    <div className="single-video">
                        <video controls>
                        <source src="./src/assets/video/news3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className="video-intro">
                        <h4>Latest Video - 2020 </h4>
                        </div>
                    </div>
                    <div className="single-video">
                        <video controls>
                        <source src="./src/assets/video/news1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className="video-intro">
                        <h4>Spondon News -2019 </h4>
                        </div>
                    </div>
                    <div className="single-video">
                        <video controls>
                        <source src="./src/assets/video/news3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className="video-intro">
                        <h4>Latest Video - 2020</h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div> */}
      
      <div className="weekly3-news-area pt-80 pb-130">
        <div className="container">
          <div className="weekly3-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="weekly3-news-active dot-style d-flex">
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="./src/assets/img/gallery/weekly2News1.png" />
                          </div>
                          <div className="weekly3-caption">
                            <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                            <p>19 Jan 2020</p>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="./src/assets/img/gallery/weekly2News2.png" />
                          </div>
                          <div className="weekly3-caption">
                            <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                            <p>19 Jan 2020</p>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="./src/assets/img/gallery/weekly2News3.png" />
                          </div>
                          <div className="weekly3-caption">
                            <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                            <p>19 Jan 2020</p>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="./src/assets/img/gallery/weekly2News4.png" />
                          </div>
                          <div className="weekly3-caption">
                            <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                            <p>19 Jan 2020</p>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="./src/assets/img/gallery/weekly2News2.png" />
                          </div>
                          <div className="weekly3-caption">
                            <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                            <p>19 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     
      
    </main>
    <footer>
      
      <div className="footer-main footer-bg">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                  
                    <div className="footer-logo">
                      <a href="index.html"><img src="./src/assets/img/logo/logo2_footer.png" /></a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <p className="info2">198 West 21th Street, Suite 721 New York,NY 10010</p>
                        <p className="info2">Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Popular Links</h4>
                  </div>
                
                  <div className="whats-right-single mb-20">
                    {/* <div className="whats-right-img">
                      <img src="./src/assets/img/gallery/footer_post1.png" />
                    </div> */}
                    <div className="whats-right-cap">
                      <h4><a href="latest_news.html">About</a></h4>
                      {/* <p>Jhon  |  2 hours ago</p> */}
                    </div>
                  </div>
                 
                  <div className="whats-right-single mb-20">
                    {/* <div className="whats-right-img">
                      <img src="./src/assets/img/gallery/footer_post2.png" />
                    </div> */}
                    <div className="whats-right-cap">
                      <h4><a href="latest_news.html">Contancts</a></h4>
                      {/* <p>Jhon  |  2 hours ago</p> */}
                    </div>
                  </div>
                 
                  <div className="whats-right-single mb-20">
                    {/* <div className="whats-right-img">
                      <img src="./src/assets/img/gallery/footer_post3.png" />
                    </div> */}
                    <div className="whats-right-cap">
                      <h4><a href="latest_news.html">Service</a></h4>
                      {/* <p>Jhon  |  2 hours ago</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="banner">
                    <img src="./src/assets/img/gallery/body_card4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex align-items-center">
                <div className="col-xl-12 ">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright © All rights reserved | 2023     <a href="z3" target="_blank"></a>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
    
    <div className="search-model-box">
      <div className="d-flex align-items-center h-100 justify-content-center">
        <div className="search-close-btn">+</div>
        <form className="search-model-form">
          <input type="text" id="search-input" placeholder="Searching key....." />
        </form>
      </div>
    </div>
  </div>
  )
}

export default Landing