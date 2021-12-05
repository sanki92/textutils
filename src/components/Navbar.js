import React from 'react'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
 
    return(
        <>


              <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>

                       {/*THEME BUTTONSS */}
                       <p className="my-1 mx-3">THEMES</p>
        <div className="form-check">
          <input className="form-check-input text-dark" onClick={props.midnight} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">Midnight</label>
      </div>
        <div className="form-check">
          <input className="form-check-input text-dark" onClick={props.coral} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">Coral</label>
      </div>
        <div className="form-check">
          <input className={`form-check-input text-${props.mode==='light'?'dark':'light'}`} onClick={props.dark} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">Dark</label>
      </div>
         <div className="form-check">
            <input className={`form-check-input text-${props.mode==='light'?'dark':'light'}`}  onClick={props.light} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">Light</label>
        </div>
                </div>
            </div>
        </nav>





        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
        </div> */}

        </>
    )
}