import React from 'react'
import '../About me/Aboutme.css'

const Aboutme = () => {
  return (
        <>
            <section>
                <div className="container-fliud">
                    <div className="container">
                        <div className="row"><h1>About Me</h1></div>
                        <div className="row">
                            <div className="col">column1</div>
                            <div className="col">column2</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme;