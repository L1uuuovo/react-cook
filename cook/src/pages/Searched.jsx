import React ,{useState,useEffect}from 'react'
import {useParams,Link} from 'react-router-dom'
import styled from 'styled-components'
function Searched() {
    const [searched, setSearched] = useState([])
    let params = useParams()
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
    const getSearched = async(name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=68ff54cc25174bc6903cfd58fcc9bede&number=9`)
        const data = await api.json()
        setSearched(data.results)
    }
    return (
        <Grid>
            {
                searched.map((item)=>{
                    return (
                        <Card key={item.id}>
                            <Link to={"/recipe/"+item.id}>
                                <img src={item.image} alt=''/>
                                <h4>{item.title}</h4>
                                </Link>
                        </Card>
                    )
                })
            }
        </Grid>
    )
}
const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(20rem,1fr));
    column-gap:3rem;
`
const Card = styled.div`
    img{
        width:100%;
        border-radius:2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`
export default Searched
