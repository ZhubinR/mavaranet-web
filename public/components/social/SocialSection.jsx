import React from 'react'
import SharedContent from '../shared/SharedContent'
import SharedImage from '../shared/SharedImage'

const SocialSection = () => {
    return (
        <section className="section social wrapper">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SharedContent 
                            title={`به اینستاگرام ما بپیوندید`}
                            desc={`با دنبال کردن ما در اینستاگرام، به جمع افرادی که همراه ما در مسیر رشد و پیشرفت هستند بپیوندید. همراهی شما برای مجموعه ما بسیار ارزشمند است.`}
                            button={`اینستاگرام`}
                            buttonSlug={`https://www.instagram.com/mavaranet/`}
                        />
                    </div>
                    <div className="col-lg-6">
                        <SharedImage
                            imageUrl={`/images/social.webp`}
                            alt={`social image`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialSection