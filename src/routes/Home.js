import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="p-20 flex flex-col items-start">
      <Link 
        className="font-bold font-brand underline hover:text-blue-600" 
        to="/customer-table"
      >
        First Example
      </Link>
    </div>
  )
}
