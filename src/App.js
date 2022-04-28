// noinspection HtmlUnknownTarget

import './App.css';
import './styles/index.scss';

import React, {useEffect, useState} from "react";
import {Carousel} from "react-bootstrap";
import {run as runHolder} from 'holderjs/holder';

// mimic question and answer image
const holderImg = (text) => <img className="image-class-name d-block mx-auto" src={`holder.js/400x400?text=${text}&bg=ffffff`} alt={text}/>

const MyQUESTIONS = [
    {quest: holderImg('Question1'), answer: holderImg('Question1A') },
    {quest: holderImg('Question2'), answer: holderImg('Question2A') },
    {quest: holderImg('Question3'), answer: holderImg('Question3A') },
    {quest: holderImg('Question4'), answer: holderImg('Question4A') },
];


function ControlledCarousel(question) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant={"dark"} interval={null}>
            <Carousel.Item>
                {question.quest}
            </Carousel.Item>
            <Carousel.Item>
                {question.answer}
            </Carousel.Item>
        </Carousel>
    );
}

function App() {
    // ensure the holderImg is functional with holder.js
    useEffect(() => {
        runHolder('image-class-name');
    });

    return (
        <div className="App">
            <React.Fragment>
                {MyQUESTIONS.map((questionData) =>
                    ControlledCarousel(questionData)
                )}
            </React.Fragment>
        </div>
    );
}

export default App;
