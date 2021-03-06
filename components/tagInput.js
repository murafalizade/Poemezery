import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
import { connect } from 'react-redux';
import { addTags } from '../Redux/action';
const KeyCodes = {
    comma: 188,
    enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma]
 class TagInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            suggestions: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.props.addTags([...this.state.tags,tag]);
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }


    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <ReactTags tags={tags}
                    inputFieldPosition="bottom"
                    maxLength={5}
                    placeholder='Write keywords'
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    />
            </div>
        )
    }

}


export default connect(null,{addTags})(TagInput);