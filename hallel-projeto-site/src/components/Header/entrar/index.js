import { useEffect, useState } from "react";

function solicitarCadastro(){

    const [membro, setmembro] = useState([]);
    
    /*useEffect(() =>{

        let url = "http://localhost:8080/api/login"
        
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json")
        myHeader.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG0uaGFsbGVsQGdtYWlsLmNvbSIsImlhdCI6MTY3MzU1NDc2OCwiZXhwIjoxNjczNjQxMTY4fQ.-DSMGVJlGvEsuo5Egb63kqL-LT7ZBhb1bQpWyhRrPDDhfUAZUF8oJ9M6S41WBi8v8cohgII1BDj0MKpLvcr-9Q")

        fetch(url,{
            headers : myHeader,
            method : "POST",
        })
        .then((response) => response.json)
        .then((object) => setmembro(object))
        .catch((error) => console.log(error))
    }}
    */

}