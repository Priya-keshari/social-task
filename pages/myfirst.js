import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


export default function Home() {
  return(

    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    

    <container>
      <Row>
        <Col md={3} sm={12} xs={12}>
          <div className={styles.c1}>
          <Row>
            <Col md={4} sm={4} xs={4}>
              <div>
                <h1 className={styles.h1}>P</h1>
              </div>
              </Col>

              <Col md={8} sm={8} xs={8}>
              <div>
                <h2 className={styles.h2}>Priya 2308 <br></br><br></br>
                <p className={styles.get}>Get access to exclusive information and interact with fellow auto lovers.</p>
                <p className={styles.box2p2}>
                        <Image src="/1.jpg" alt="pic3" width="18%" height="18"/><span>Newbie</span>
                        </p>
                <div className={styles.get1}>
                  <p>Joined in 10 Aug 2022 </p>
                 <p>Edit</p>
                 </div>
                
                </h2>
                
              </div>
              </Col><hr></hr>
              <div>
              <Row>
              <div className={styles.get2}>
                                       <p> <b>My Garage </b> </p>
                                        <p className={styles.box2}>Add/Edit</p>
                                    </div>
                                    <p className={styles.box3}>&#9679;Maruti Suzuki Swift 2014-2021</p>
            <Col md={4} sm={4} xs={4}>
              <div>
              <p className={styles.box2p2}>
                        <Image src="/2.jpg" alt="pic3" width="60%" height="50"/>
                        </p>
               
              </div>
              </Col>

              <Col md={8} sm={8} xs={8}>
              <div>
              <p className={styles.box3}>Help Fellow auto lovers by review and answering questions & become a Zigwheels Legend</p>
                
              </div>
              </Col>
              </Row>
                </div>
              </Row>  
          </div>
          
        </Col>
        <Col md={9} sm={12} xs={12}>   
          <div> 
           <h4 className={styles.ap}>My Activity</h4> 
           <div className={styles.tab_nav}>
           <Tabs>
                                    <Tabs eventKey="home" title="Question For You">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <p className={styles.h312}><span className={styles.h31}>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                        <h3 className={styles.h33}>Q. This car CNG variant or not - Swift ?</h3>
                                        <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                
                                        <h5 className={styles.h31}>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        
                                        </Form.Group>
                                    </Form>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <p className={styles.h312}><span className={styles.h31}>Manoj </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                        <h3 className={styles.h33}>Q. Which varient is better in Swift model ?</h3>
                                        <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                
                                        <h5 className={styles.h31}>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        
                                        </Form.Group>
                                    </Form>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <p className={styles.h312}><span className={styles.h31}>Sagar</span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                        <h3 className={styles.h33}>Q. Is Maruti swift available in CNG ?</h3>
                                        <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                
                                        <h5 className={styles.h31}>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        
                                        </Form.Group>
                                    </Form>
                                    
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <p className={styles.h312}><span className={styles.h31}>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                        <h3 className={styles.h33}>Q. This car CNG variant or not - Swift ?</h3>
                                        <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                
                                        <h5 className={styles.h31}>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        
                                        </Form.Group>
                                    </Form>
                                    
                            </Tabs>
                            <Tabs eventKey="profile" title="Answer">
                              
                            <p className={styles.h312}><span className={styles.h31}>Prabhat</span> asked about Royal Enfield Classic350 (2012-2021)</p><br></br>
                            <h3 className={styles.h33}>Q. What's the Minimum height of a person required to drive a Classic 350?</h3>
                                        <div className={styles.p}>
                                                      <div className={styles.bar}>             <p > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                  </svg>Follow Question | </p>
                                                <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                                      </svg> Add Answer</p>
                                      </div>    </div>
                                     <Row> 
                      <Col md={1} sm={2} xs={2}>
              <div>
                <h1 className={styles.h}>P</h1>
              </div>
              </Col>

              <Col md={11} sm={10} xs={10}>
              <div >
               
               <div className={styles.bar}>
                 <p className={styles.bar1} >Priya </p>
                <p>| 1 month ago</p>
                </div>
                <div className={styles.triangle}></div>
                <div className={styles.ans}>
                  <div className={styles.ans1}>
                    @ jatan | Are you mad bro if you were riding bullet with 1 or 2 guy...being leg not touches the ground you are gonna suffer too much..If there will be some holes like ding on the road..You are gone...5.8 is enough...Read More
                  </div>
                  Hi
                </div>
                
                
              </div>
              
               
               <div className={styles.bar}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg> 
                <p> | Reply</p>
                </div>
                <h5 className={styles.h31}>View 3 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                
              </Col><hr></hr>
              <p className={styles.h312}><span className={styles.h31}>Kavitha</span> asked about Maruti Suzuki Baleno</p>
                            <h3 className={styles.h33}>Q. How is the suspension?</h3>
                                        <div className={styles.p}>
                                                      <div className={styles.bar}>             <p > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                  </svg>Follow Question | </p>
                                                <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                                      </svg> Add Answer</p>
                                      </div>    </div>
                                      </Row>
                                      <Row>
                                      <Col md={1} sm={2} xs={2}>
              <div>
                <h1 className={styles.h}>P</h1>
              </div>
              </Col>

              <Col md={11} sm={10} xs={10}>
              <div >
               
               <div className={styles.bar}>
                 <p className={styles.bar1} >Priya </p>
                <p>| 1 month ago</p>
                </div>
                <div className={styles.triangle}></div>
                <div className={styles.ans}>
                  <div className={styles.ans1}>
                    @ Zigwheels |The suspension too now works silently which adds to the refined nature of this premium hatchback, High-speed too has improved as it feels more hunkered down as compared to the old car. What...Read More
                  </div>
                  No
                </div></div>
                <div className={styles.bar}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg> 
                <p> | Reply</p>
                </div>
                <h5 className={styles.h31}>View 3 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                </Col>                      
              </Row>                 
                          
                              </Tabs>
                              <Tabs eventKey="profil1e" title="Question Asked">
                        
                        </Tabs>
                        <Tabs eventKey="prof3ile" title="Question Followed">
                        <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <p className={styles.h312}><span className={styles.h31}>Plabon</span> asked about Hyundai Venue 2019-2022</p>
                                        <h3 className={styles.h33}>Q. Should I go for Hyundai Venue s 1.2 L varient or Ford Freestyle Taitanium, as both comes in near about similar price range? Will I miss out too much in the Venue S varient?</h3>
                                        <div className={styles.p}>
                                        <div className={styles.bar}>             <p > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                                  Unfollow Question | </p>
                                                <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                                      </svg> Add Answer</p>
                                      </div>    
                 
                 </div>
                                        <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                
                                        
                                        
                                        </Form.Group>
                                    </Form>
                        </Tabs>
                        <Tabs eventKey="pro3file" title="Your Review">
                        
                        </Tabs>
                        <Tabs eventKey="contact" title="Shortlist" >
                        
                        </Tabs>
                    </Tabs>
            </div>
          
            </div>
        </Col>
      </Row>
    </container>

   
    
    <main className={styles.main}>

    </main>
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

