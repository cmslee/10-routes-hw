const React = require('react');

function Menu () {
    return(
        <div>
            <h1>Navigation</h1>
            <ul>
                <li><a href='/about'>About</a></li>
            </ul>
            <h2>~some of Akita Prefecture's Mascot Characters~</h2>
            <h3>tree-themed</h3>
                <ul>
                    <li><a href='/sugicchi'>Sugicchi</a></li><br/>
                    <li><a href='/sumicchi'>Sumicchi</a></li><br/>
                    <li><a href='/sugimmi'>Sugimmi</a></li><br/>
                    <li><a href='/missEcoA'>Miss Eco-A</a></li><br/>
                </ul>
            <h3>food-themed {`(`}possibly not specific to Akita{`)`}</h3>
                <ul>
                    <li><a href='/kamabokon'>Kamabokon</a></li><br/>
                    <li><a href='/datemakin'>Datemakin</a></li><br/>
                </ul>
            <h3>folklore-themed</h3>
                <ul>
                <li><a href='/ndatchi'>Ndatchi</a></li><br/>
                </ul>
        </div>
    )
}

module.exports = Menu;