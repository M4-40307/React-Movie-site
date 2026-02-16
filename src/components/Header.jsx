import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid' style={{background:"purple"}}>
      <div className="container">
        <div className="row">
          {/* col-auto - רוחב לפי התוכן */}
          <div className="logo col-auto">
            <Link to="/">
              <img src="/streamix.png" alt="Streamix Logo" style={{ height: "50px"}} />
            </Link>
          </div>
          <nav className='col-auto'>
            {/* h-100 - גובה 100 אחוז
            list-inline - מסתיר את הנקודות של הבולטים
             align-items-center - ממרכז באמצע בגובה*/}
            <ul className='list-inline d-flex align-items-center h-100'>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}