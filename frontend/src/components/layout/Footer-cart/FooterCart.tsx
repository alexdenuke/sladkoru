import Link from 'next/link'
const FooterCart = () => {
  return (
    <div>
      <Link className="fixed bottom-6 right-6 md:hidden block" href="#">
        <div className="bg-white rounded-full shadow-lg p-4">
          <img className="h-8" src="cart.svg" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default FooterCart
