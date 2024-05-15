'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const SharedPagination = (
    {
        hasNextPage,
        hasPrevPage,
        link
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '9'

    return (
        <div className='d-flex mb-5 gap-4 align-items-center justify-content-center'>
            <button
                className='pagination_sidebtn'
                disabled={!hasPrevPage}
                onClick={() => {
                    router.push(`${link}/?page=${Number(page) - 1}&per_page=${per_page}`)
                }}>
                <span>
                    صفحه قبل
                </span>
            </button>

            

            <button
                className='pagination_sidebtn'
                disabled={!hasNextPage}
                onClick={() => {
                    router.push(`${link}/?page=${Number(page) + 1}&per_page=${per_page}`)
                }}>
                <span>
                    صفحه بعد

                </span>
            </button>
        </div>
    )
}

export default SharedPagination 