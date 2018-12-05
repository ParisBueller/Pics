import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    //in general everytime you have a callback function, use an arrow function
    //will automaticall bind the function to have the appropriate value of 'this'
    onFormSubmit = e => {
        e.preventDefault();
        //in order to communicate from child to parent, we pass a callback from
        //parent to child , and the child will call that callback
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;