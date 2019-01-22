import React from 'react';

class Article extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className='card-text'>{article.text}</section>
        return (
            <div className='card mx-auto' style={{width: '50%', marginBottom: '20px'}}>
                <div className='card-header'>
                    <h2 onClick = {this.incrementCounter}>
                        {article.title} clicked {this.state.count}
                        <button onClick={onButtonClick} className='btn btn-primary float-right'>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Article;