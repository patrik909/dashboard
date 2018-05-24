import React from 'react';

//<button value={item} onClick={this.deletePostIt}>X</button>
function ViewPostIts(props) {
    return (
        <ul>
            {
                props.postItArray.map((postIt,i) => 
                    <li key={i}>
                        {postIt}
                    </li>
                )
            }
        </ul>
    )
}
    
export default ViewPostIts;