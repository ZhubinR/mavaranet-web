import Button from '../layouts/Button'
import SectionTitle from '../layouts/SectionTitle'
import CustomerItem from './CustomerItem'

const CustomerSection = ({ data }) => {

    return (
        <section className="section customer wrapper">
            <div className="container">
                <SectionTitle
                    title={`برخی از مشتریان ما`}
                    subTitle={`و اعتماد بیش از ۲۰۰۰ مشتری دیگر...`}
                />

                <div className="row align-items-center justify-content-center">
                    {data.map(customer => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={customer.id}>
                            <CustomerItem
                                logoUrl={customer.acf.logo}
                                name={customer.acf.name}
                                desc={customer.acf.desc}
                            />
                            
                        </div>
                    ))}
                    {/* <div className='w-100 d-flex justify-content-center'>
                        <Button
                            text={`مشاهده بیشتر`}
                            slug={`/customers`}
                        />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default CustomerSection