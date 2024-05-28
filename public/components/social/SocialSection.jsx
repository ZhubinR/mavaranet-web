import React from 'react'
import SharedContent from '../shared/SharedContent'
import SharedImage from '../shared/SharedImage'

const SocialSection = () => {
    return (
        <section className="section social wrapper">
            <div className="container">
                <div className="row align-item-center justify-content-center">
                    <div className="col-lg-6">
                        <SharedContent 
                            title={``}
                            desc={``}
                            button={``}
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