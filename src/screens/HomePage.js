function HomePage(){
    return (<div style={{marginTop: '-178px'}}>
                <div className="home-image">
                    <div className="content">
                        <h2>iManage helps you to:</h2>
                        <ol>
                            <li>Record Your expenses</li>
                            <li>Manage Your personal loans </li>
                            <li>Know Your debits and Credits</li>
                        </ol>                      
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave f-w">
                        <path fill="#f3f4f5" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,74.7C840,53,960,75,1080,96C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>             
                </div>
                <div className="main">
                    <h1 className="bdf-title">What you can do with iManage</h1>
                    <div className="three-col">
                        <div className="box animate">
                            <h2>Expenses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, iste? Error consectetur facilis architecto aspernatur recusandae sunt, odit officiis placeat ex. Nihil, quidem!</p>
                        </div>
                        <div className="box">
                            <h2>Debits</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, iste? Error consectetur facilis architecto aspernatur recusandae sunt, odit officiis placeat ex. Nihil, quidem!</p>

                        </div>
                        <div className="box">
                            <h2>Credits</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, iste? Error consectetur facilis architecto aspernatur recusandae sunt, odit officiis placeat ex. Nihil, quidem!</p>
                        </div>
                    </div>
                </div>                  
            </div>    
    )
}
export default HomePage;