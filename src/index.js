import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:00" 
                    avatar={faker.image.avatar()} 
                    text="Does this work?"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="21st October at 16:32" 
                    avatar={faker.image.avatar()} 
                    text="Dope AF"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Max" 
                    timeAgo="Yesterday at 3:00" 
                    avatar={faker.image.avatar()} 
                    text="Nice haircut"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)