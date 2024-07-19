import { useNavigate, Link } from "react-router-dom"

export default function Home(){
    const navigation = useNavigate()

    return(
        <>
            <h1>Home</h1>

            <button 
                onClick={() => {
                    navigation('/login')
                }}
            >Login</button>

            <Link 
                to={`/login`}
            >Login Link</Link>
        </>
    )
}