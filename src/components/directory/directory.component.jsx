import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import { sections } from './directory.data.js';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        const {sections} = this.state;

        return (
            <div className="directory-menu"> {
                sections.map(({id, title, imageUrl, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                ))}
            </div>
        )
    }
}

export default Directory;