import styled from "styled-components";
import {baseURL} from "../api/api";

export const Card = ({movie}) => {
    return (
        <CardStyled>
            <img src={baseURL + movie.poster.formats.small.url} alt=""/>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
  
`