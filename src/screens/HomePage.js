import { useEffect } from "react";
import { userInfo } from "../helpers/userInfo";


function HomePage(){
    return (<> 
                {/* className="home-image" */}
                
                    <div className="content">                                          
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320" className="wave f-w">
                            <path fill="#28365567" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,74.7C840,53,960,75,1080,96C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>  
                        <h2>iManage helps you to:</h2>
                            <ol>
                                <li>Record Your expenses</li>
                                <li>Manage Your personal loans </li>
                                <li>Know Your debits and Credits</li>
                            </ol>    
                          
                    </div>
                <div>
                    <h1 className="content text-center">Why imanage</h1>
                    <div className="three-col">
                        <div className="box animate">
                            <h2 className="title text-center">Expenses</h2>
                            <p> Sometimes it's really confusing to know How you used your money</p>
                            <p>But it should no longer be a problem, iManage helps you to Calculate those expenditure</p>
                        </div>
                        <div className="box">
                        <h2 className="title text-center">Debits</h2>
                            <p>Calculate money you owe your friends and time to pay them before you look bad among them </p>
                        </div>
                        <div className="box">
                             <h2 className="title text-center">Credits</h2>
                             <p> Did anybody ask you to pay him then you don't recognize when ? and how much he gave you ?</p>
                             <p> Use imanage to say Good bye to the confusions like those</p>
                        </div>
                    </div>
                </div>                  
            </>    
    )
}
export default HomePage;