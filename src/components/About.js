import React from 'react'
export default function About(props) {


    let mystyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
   
    return (
        <>
            <div className="container " style={mystyle}>
                <h1 className='my-3' >About us</h1>
                <div className="accordion my-2" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                                <strong>Text manipulator</strong>
                                
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
                            <div className="accordion-body" >
                                It is a free to use website, through which anyone can manipulate their texts according to the need.
                                More functionalities will be added in future..
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingTwo" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                                <strong>Developed by</strong>
                                
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                                Hi everyone I am Himanshu Dwivedi, I have made this Text manipulator as my first React mini project.
                                I am currently working as a Software engineer in a US based MNC.
                                You can connect with me on  <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/himanshu-dwivedi-b10899179'>linkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
