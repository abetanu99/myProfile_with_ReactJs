import { useState } from 'react'

function Footer() {


  return (
    <>
      <section className="bg-light">
        <div className="container">
            <div className="row pt-4 pb-4">
                <div className="col-lg-12">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="float-start mt-2 mb-2">
                            <p className="copy-rights text-muted mb-0">2024 © Elvish. Design by 
                                <a className="text-muted" href="#!">
                                    ThemesBoss.
                                </a>
                            </p>
                        </div>
                        <div className="float-end mt-2 mb-2">
                            <ul className="list-inline fot_social mb-0">
                                <li className="list-inline-item"><a href="https://www.instagram.com/abetanu_/" className="social-icon text-muted"><i className="bi bi-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="" className="social-icon text-muted"><i className="bi bi-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="" className="social-icon text-muted"><i className="bi bi-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/abetanu99" className="social-icon text-muted"><i className="bi bi-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer