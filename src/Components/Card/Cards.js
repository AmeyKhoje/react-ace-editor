import React from 'react';
import Card from './CardComp/Card';
import './Cards.css'

function Cards() {
    return (
        <div className="card-flex_cont">
            <div className="card-row_main">
                <div className="card-row_sm">
                    <Card topLeft bgSkyBlue>
                        Array
                    </Card>
                    <Card bottomLeft bgDarkBlue>
                        Sorting
                    </Card>
                    <Card topLeft bgOrange>
                        Strings
                    </Card>
                </div>
                <div className="card-row_sm">
                    <Card bottomLeft bgLightOrange>
                        Linked List
                    </Card>
                    <Card topLeft bgMedBlue>
                        Stacks & Queues
                    </Card>
                    <Card topRight bgPurple>
                        Array
                    </Card>
                </div>
            </div>
            <div className="card-row_main">
                <div className="card-row_sm">
                    <Card bottomLeft bgPurple>
                        Dynamic Programming
                    </Card>
                    <Card bottomRight bgMedBlue>
                        Graphs
                    </Card>
                    <Card topRight bgLightOrange>
                        Searching
                    </Card>
                </div>
                <div className="card-row_sm">
                    <Card bottomRight bgOrange>
                        Recursion
                    </Card>
                    <Card topLeft bgDarkBlue>
                        Binary Search Tree
                    </Card>
                    <Card bottomRight bgSkyBlue>
                        Mathematical
                    </Card>
                </div>
            </div>
            <div className="card-row_main">
                <div className="card-row_sm">
                    <Card topLeft bgSkyBlue>
                        Bit-Manipulation
                    </Card>
                    <Card bottomRight bgDarkBlue>
                        Heaps
                    </Card>
                    <Card topLeft bgOrange>
                        Hashing
                    </Card>
                </div>
                <div className="card-row_sm">
                    <Card bottomLeft bgLightOrange>
                        Backtracking
                    </Card>
                    <Card topLeft bgMedBlue>
                        Tries
                    </Card>
                    <Card topRight bgPurple>
                        Famous Algorithm
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Cards;
