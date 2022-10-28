import React from "react";

function Namegenerator({ posts, setSearchResults }){

    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        {/*if search input is empty display all results*/}
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) )

        setSearchResults(resultsArray)
    }
    return(
    <>
        <div class="container">
        <form action=""> 
            <div className="nav">
                <div className="pharm">Pharkmark</div>
                <div className="team">Code Crushers</div>
            </div>
        
        <h1 className="drug-gene">DRUG NAME GENERATOR</h1>
        <p className="drug-dis">generate brandable drug name using artificial intelligence</p>
        <hr/>
        <label for="fn"><b>Input:</b></label>
        <input type="text" placeholder="Name" name="fn" id="fn" onChange={handleSearchChange}  required/>

        <label for="ln"><b>Country Name:</b></label>
        <input type="text" placeholder="Country Name" name="ln" id="ln" required/>

        <label for="sel">Choose:  </label>
        <select id="sel" name="sel">
            <option value="select">--select--</option>
            <option value="prefix">List of strings prefix</option>
            <option value="suffix">List of strings suffix</option>
        </select>
        <hr/>
        <button class="generate-btn" type="submit"  onSubmit={handleSubmit}>Generate</button>
        </form>
    </div>
    </>
    )
}

export default Namegenerator;