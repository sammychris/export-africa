import Link from 'next/link';

export default function ExporterCard({exporter}) {
    if(!exporter) return "";
    return (
        <Link key={exporter?._id} href={`/exporters/${exporter?._id}`} className="text-deep-blue hover:underline">
            <div className="bg-white p-6 rounded-md shadow-md cursor-pointer flex">
                    <img src={exporter?.logo.path} alt={exporter.companyName} className="object-contain mt-0 mb-4 rounded-md w-20 mr-3" />
                    <div>
                        <h3 className="text-lg font-bold mb-2">{exporter?.companyName}</h3>
                        <p className="text-gray-700 mb-2">{exporter?.state}, {exporter?.country}</p>
                        <div className='flex'>
                            <p className="text-gray-700 mb-2">Rating: <span className='m-1 font-bold'>{exporter?.rating}</span></p>
                            <div className="text-yellow-500">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} className={index < Math.floor(exporter?.rating) ? 'fas' : 'far'}>&#9733;</span>
                                ))}
                            </div>
                        </div>
                        {/* <p className="text-gray-700 mb-2">{exporter.reviews} Reviews</p> */}
                        <p className="text-gray-700 mb-2">
                            Certification: {exporter.productCategories.map(item => <span className='mr-1 text-gray-400 text-sm' key={item.key}>{item.label}</span>)}
                        </p>
                    </div>
            </div>
        </Link>
    )
}
  